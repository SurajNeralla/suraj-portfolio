import { useEffect, useRef } from 'react';

/**
 * WebGL animated aurora / mesh-gradient background.
 * Inspired by the premium shader aesthetic — completely original GLSL.
 */
const ShaderBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext | null;
    if (!gl) return;

    const sync = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };
    sync();
    window.addEventListener('resize', sync);

    const vs = `
      attribute vec2 a_pos;
      varying vec2 v_uv;
      void main() {
        v_uv = a_pos * 0.5 + 0.5;
        gl_Position = vec4(a_pos, 0.0, 1.0);
      }
    `;

    // Original aurora shader — distinct color palette (blue/purple/cyan matching portfolio)
    const fs = `
      precision highp float;
      uniform float u_time;
      uniform vec2  u_res;
      uniform vec2  u_mouse;
      varying vec2  v_uv;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(hash(i), hash(i + vec2(1,0)), f.x),
          mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), f.x),
          f.y
        );
      }

      void main() {
        vec2 uv   = v_uv;
        vec2 mouse = u_mouse / u_res;
        float t   = u_time * 0.15;

        // Base: very dark navy
        vec3 base   = vec3(0.020, 0.031, 0.090); // #050816 toned
        vec3 blue   = vec3(0.231, 0.510, 0.965); // #3B82F6
        vec3 purple = vec3(0.545, 0.361, 0.965); // #8B5CF6
        vec3 cyan   = vec3(0.024, 0.714, 0.831); // #06B6D4

        // Layered noise fields
        float n1 = noise(uv * 3.0 + vec2(t, t * 0.6));
        float n2 = noise(uv * 2.0 - vec2(t * 0.4, t));
        float n3 = noise(uv * 4.0 + vec2(-t * 0.3, t * 0.8));

        // Mouse-driven ripple
        float dist = length(uv - mouse);
        float ripple = sin(dist * 8.0 - t * 3.0) * exp(-dist * 3.0) * 0.08;

        // Compose colour
        vec3 col = base;
        col = mix(col, blue,   clamp(n1 * 0.6 + ripple, 0.0, 1.0) * 0.22);
        col = mix(col, purple, clamp(n2 * 0.5, 0.0, 1.0) * 0.18);
        col = mix(col, cyan,   clamp(n3 * 0.4 + ripple * 0.5, 0.0, 1.0) * 0.12);

        // Subtle vignette
        float vig = 1.0 - smoothstep(0.4, 1.2, length(uv - 0.5) * 1.8);
        col *= vig;

        // Fine grain
        float grain = hash(uv + fract(t)) * 0.015;
        col += grain;

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const compile = (type: number, src: string) => {
      const s = (gl as WebGLRenderingContext).createShader(type)!;
      (gl as WebGLRenderingContext).shaderSource(s, src);
      (gl as WebGLRenderingContext).compileShader(s);
      return s;
    };

    const prog = (gl as WebGLRenderingContext).createProgram()!;
    (gl as WebGLRenderingContext).attachShader(prog, compile((gl as WebGLRenderingContext).VERTEX_SHADER, vs));
    (gl as WebGLRenderingContext).attachShader(prog, compile((gl as WebGLRenderingContext).FRAGMENT_SHADER, fs));
    (gl as WebGLRenderingContext).linkProgram(prog);
    (gl as WebGLRenderingContext).useProgram(prog);

    const buf = (gl as WebGLRenderingContext).createBuffer();
    (gl as WebGLRenderingContext).bindBuffer((gl as WebGLRenderingContext).ARRAY_BUFFER, buf);
    (gl as WebGLRenderingContext).bufferData((gl as WebGLRenderingContext).ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), (gl as WebGLRenderingContext).STATIC_DRAW);

    const posLoc = (gl as WebGLRenderingContext).getAttribLocation(prog, 'a_pos');
    (gl as WebGLRenderingContext).enableVertexAttribArray(posLoc);
    (gl as WebGLRenderingContext).vertexAttribPointer(posLoc, 2, (gl as WebGLRenderingContext).FLOAT, false, 0, 0);

    const uTime  = (gl as WebGLRenderingContext).getUniformLocation(prog, 'u_time');
    const uRes   = (gl as WebGLRenderingContext).getUniformLocation(prog, 'u_res');
    const uMouse = (gl as WebGLRenderingContext).getUniformLocation(prog, 'u_mouse');

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    const onMouse = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = ((e.clientX - r.left) / r.width) * canvas.width;
      mouse.y = (1 - (e.clientY - r.top) / r.height) * canvas.height;
    };
    window.addEventListener('mousemove', onMouse);

    let raf: number;
    const render = (t: number) => {
      sync();
      (gl as WebGLRenderingContext).viewport(0, 0, canvas.width, canvas.height);
      if (uTime) (gl as WebGLRenderingContext).uniform1f(uTime, t * 0.001);
      if (uRes) (gl as WebGLRenderingContext).uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) (gl as WebGLRenderingContext).uniform2f(uMouse, mouse.x, mouse.y);
      (gl as WebGLRenderingContext).drawArrays((gl as WebGLRenderingContext).TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', sync);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
      style={{ opacity: 0.55 }}
    />
  );
};

export default ShaderBackground;
