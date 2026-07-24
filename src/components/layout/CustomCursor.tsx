import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let animId: number;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      animId = requestAnimationFrame(animateRing);
    };

    const addHover = () => {
      dot.classList.add('hover');
      ring.classList.add('hover');
    };
    const removeHover = () => {
      dot.classList.remove('hover');
      ring.classList.remove('hover');
    };

    document.addEventListener('mousemove', moveCursor);
    animateRing();

    const interactives = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]'
    );
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ transform: 'translate(-100px, -100px)' }} />
      <div ref={ringRef} className="cursor-ring" style={{ transform: 'translate(-100px, -100px)' }} />
    </>
  );
};

export default CustomCursor;
