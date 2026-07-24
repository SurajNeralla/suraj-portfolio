import { useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Download, Mail, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/icons';

const codeSnippets = [
  { lang: 'bash', code: `# Kali Linux\nnmap -sV -A\n  192.168.1.0/24\n--script vuln` },
  { lang: 'ts', code: `const app = await\n  React.build({\n    stack: "fullstack"\n  })` },
  { lang: 'python', code: `msf.exploit(\n  "eternalblue"\n).run(target)\n# ethical only` },
];

const floatVariants: any = {
  animate: (i: number) => ({
    y: [0, -14, 0],
    x: [0, i % 2 === 0 ? 6 : -6, 0],
    rotate: [0, i % 2 === 0 ? 2 : -2, 0],
    transition: {
      duration: 4 + i * 1.2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }),
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid dots */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(59,130,246,0.4) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />

      {/* Meteor lines */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            top: `${Math.random() * 40}%`,
            left: `${Math.random() * 60}%`,
            width: `${80 + Math.random() * 120}px`,
            height: '1px',
            background: `linear-gradient(90deg, transparent, rgba(59,130,246,${0.4 + Math.random() * 0.4}), transparent)`,
            animation: `shimmer ${3 + Math.random() * 4}s linear ${Math.random() * 5}s infinite`,
            transform: 'rotate(-35deg)',
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left Content ── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono mb-8"
              style={{
                background: 'rgba(59,130,246,0.1)',
                border: '1px solid rgba(59,130,246,0.3)',
                color: '#06B6D4',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            {/* Hi I'm */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/60 font-body text-xl mb-2"
            >
              Hi, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-bold leading-none mb-4"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
            >
              <span className="gradient-text-animated">SURAJ</span>
              <br />
              <span className="text-white">NERALLA</span>
            </motion.h1>

            {/* Typing animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-white/40 font-mono text-lg">{'>'}</span>
              <span className="font-mono text-lg sm:text-xl" style={{ color: '#3B82F6' }}>
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer', 2000,
                    'Ethical Hacker', 2000,
                    'Kali Linux Enthusiast', 2000,
                    'Penetration Tester', 2000,
                    'AI Automation Engineer', 2000,
                    'Web & Security Expert', 2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
              <span className="w-0.5 h-6 bg-primary animate-pulse" style={{ background: '#3B82F6' }} />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              className="text-white/60 font-body text-base sm:text-lg leading-relaxed mb-10 max-w-xl"
            >
              I build{' '}
              <span className="text-white font-medium">modern web applications</span>{' '}
              and practice{' '}
              <span className="text-white font-medium">ethical hacking & cybersecurity</span>{' '}—
              breaking systems to make them stronger, and building experiences that push the boundaries of what's possible.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(59,130,246,0.5), 0 0 60px rgba(59,130,246,0.2)' }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary flex items-center gap-2 px-7 py-3.5 text-base font-heading font-semibold"
              >
                View Projects
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  <ArrowRight size={18} />
                </motion.span>
              </motion.button>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary flex items-center gap-2 px-7 py-3.5 text-base font-heading font-semibold"
              >
                <Download size={18} />
                Resume
              </motion.a>

              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary flex items-center gap-2 px-7 py-3.5 text-base font-heading font-semibold"
              >
                <Mail size={18} />
                Contact
              </motion.button>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex items-center gap-5 mt-10"
            >
              {[
                { icon: GithubIcon, href: 'https://github.com', label: 'GitHub' },
                { icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:surajneralla2007@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white/50 hover:text-white transition-colors duration-200"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
              <div className="h-px flex-1 max-w-[80px]"
                style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.15), transparent)' }}
              />
              <span className="text-white/30 text-xs font-mono">Connect</span>
            </motion.div>
          </div>

          {/* ── Right: Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Central orb */}
            <div className="relative">
              {/* Outer spinning rings */}
              <div
                className="absolute inset-0 rounded-full border border-blue-500/20"
                style={{
                  width: '340px',
                  height: '340px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  animation: 'spin-slow 20s linear infinite',
                  borderColor: 'rgba(59,130,246,0.2)',
                }}
              />
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  width: '280px',
                  height: '280px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  border: '1px dashed rgba(139,92,246,0.3)',
                  animation: 'spin-slow 14s linear infinite reverse',
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: '400px',
                  height: '400px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  border: '1px solid rgba(6,182,212,0.1)',
                  animation: 'spin-slow 30s linear infinite',
                }}
              />

              {/* Core glow */}
              <motion.div
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 w-[200px] h-[200px] rounded-full overflow-hidden border border-white/20 shadow-2xl flex items-center justify-center"
                style={{
                  boxShadow: '0 0 40px rgba(59,130,246,0.3), 0 0 80px rgba(139,92,246,0.15)',
                }}
              >
                <img
                  src="/profile.jpg"
                  alt="Suraj Neralla"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 12%' }}
                />
              </motion.div>

              {/* Orbiting dots */}
              {[
                { color: '#3B82F6', duration: '8s', radius: 140, delay: '0s' },
                { color: '#8B5CF6', duration: '12s', radius: 140, delay: '-4s' },
                { color: '#06B6D4', duration: '6s', radius: 140, delay: '-2s' },
              ].map((dot, i) => (
                <div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: '10px',
                    height: '10px',
                    left: '50%',
                    top: '50%',
                    marginLeft: '-5px',
                    marginTop: '-5px',
                    background: dot.color,
                    boxShadow: `0 0 10px ${dot.color}`,
                    animation: `orbit ${dot.duration} linear ${dot.delay} infinite`,
                    transformOrigin: `5px calc(${dot.radius}px + 5px)`,
                  }}
                />
              ))}
            </div>

            {/* Floating code cards */}
            {codeSnippets.map((snippet, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={floatVariants}
                animate="animate"
                className="code-snippet absolute hidden lg:block"
                style={{
                  top: i === 0 ? '5%' : i === 1 ? '55%' : '25%',
                  left: i === 0 ? '-15%' : i === 1 ? '-20%' : 'auto',
                  right: i === 2 ? '-15%' : 'auto',
                  zIndex: 20,
                  maxWidth: '200px',
                }}
              >
                <div className="flex items-center gap-1.5 mb-2 opacity-50">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-xs ml-1 opacity-60">{snippet.lang}</span>
                </div>
                <pre className="text-xs leading-relaxed" style={{ color: '#3B82F6' }}>
                  <code>{snippet.code}</code>
                </pre>
              </motion.div>
            ))}

            {/* Stats floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, type: 'spring', stiffness: 200, damping: 20 }}
              className="absolute -bottom-4 -right-4 glass-card px-4 py-3 hidden lg:block"
              style={{ border: '1px solid rgba(59,130,246,0.2)' }}
            >
              <p className="text-xs text-white/50 font-mono mb-1">projects built</p>
              <p className="text-2xl font-heading font-bold gradient-text">20+</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.0, type: 'spring', stiffness: 200, damping: 20 }}
              className="absolute -top-4 -left-4 glass-card px-4 py-3 hidden lg:block"
              style={{ border: '1px solid rgba(139,92,246,0.2)' }}
            >
              <p className="text-xs text-white/50 font-mono mb-1">CTF challenges</p>
              <p className="text-2xl font-heading font-bold" style={{ color: '#10B981' }}>50+</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/30 font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={18} className="text-white/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
