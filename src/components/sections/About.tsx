import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Bot, Code2, Layers, Workflow, Sparkles, ShieldAlert } from 'lucide-react';

const timelineItems = [
  {
    icon: GraduationCap,
    title: 'CSE Student',
    subtitle: 'Second Year B.Tech Computer Science Engineering',
    desc: 'Building a strong foundation in algorithms, data structures, and software engineering principles.',
    color: '#3B82F6',
  },
  {
    icon: Bot,
    title: 'AI Enthusiast',
    subtitle: 'Passionate about Artificial Intelligence',
    desc: 'Exploring the intersection of AI and automation to build intelligent systems that solve real problems.',
    color: '#8B5CF6',
  },
  {
    icon: Workflow,
    title: 'Automation Engineer',
    subtitle: 'n8n & Workflow Automation Developer',
    desc: 'Designing complex automation workflows that save hours of manual work using AI agents and APIs.',
    color: '#06B6D4',
  },
  {
    icon: Code2,
    title: 'Frontend Developer',
    subtitle: 'React & Modern UI Specialist',
    desc: 'Crafting pixel-perfect, responsive interfaces with smooth animations and premium user experiences.',
    color: '#3B82F6',
  },
  {
    icon: Layers,
    title: 'Backend Developer',
    subtitle: 'Node.js, Firebase & Database Expert',
    desc: 'Building scalable server architectures with real-time databases, RESTful APIs, and authentication.',
    color: '#8B5CF6',
  },
  {
    icon: Sparkles,
    title: 'SaaS Builder',
    subtitle: 'Modern SaaS Development',
    desc: 'Shipping full-stack SaaS products with modern tooling, clean architecture, and great developer experience.',
    color: '#06B6D4',
  },
  {
    icon: ShieldAlert,
    title: 'Ethical Hacker',
    subtitle: 'Cybersecurity & Penetration Testing',
    desc: 'Practicing ethical hacking and network security using Kali Linux, VMware, and modern penetration testing tools.',
    color: '#10B981',
  },
];

const cardVariants: any = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm mb-3" style={{ color: '#3B82F6' }}>
            {'// 01. about_me'}
          </p>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4">
            Who Am I?
          </h2>
          <p className="font-body text-white/50 text-lg max-w-2xl mx-auto">
            A passionate technologist who builds at the intersection of{' '}
            <span className="text-white font-medium">web development</span> and{' '}
            <span style={{ color: '#10B981' }} className="font-medium">cybersecurity</span>{' '}—
            crafting modern apps and breaking systems (ethically) to make them stronger.
          </p>
        </motion.div>

        {/* Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-card-strong gradient-border p-8 mb-16 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative flex-shrink-0"
            >
              <img
                src="/profile.jpg"
                alt="Suraj Neralla"
                className="w-32 h-32 rounded-2xl object-cover relative z-10 border border-white/10 shadow-2xl"
                style={{ objectPosition: 'center 12%' }}
              />
              <div
                className="absolute -inset-2 rounded-2xl opacity-30"
                style={{
                  background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                  filter: 'blur(12px)',
                  animation: 'glow-pulse 3s ease-in-out infinite',
                }}
              />
            </motion.div>

            {/* Text */}
            <div>
              <h3 className="font-heading font-bold text-2xl text-white mb-2">
                Suraj Neralla
              </h3>
              <p className="font-mono text-sm mb-4" style={{ color: '#06B6D4' }}>
                Full Stack Developer · Ethical Hacker · AI Automation Engineer
              </p>
              <p className="font-body text-white/60 leading-relaxed">
                I'm a second-year Computer Science Engineering student with deep expertise in two major domains:
                {' '}<span className="text-white">Web Development</span> and{' '}
                <span style={{ color: '#10B981' }}>Cybersecurity</span>.
                On the web side, I build modern full-stack applications with React, Node.js, and Firebase.
                On the security side, I practice ethical hacking and penetration testing using
                {' '}<span className="text-white">Kali Linux</span> and{' '}
                <span className="text-white">VMware</span> — identifying vulnerabilities, running network scans, and
                mastering tools like Metasploit, Burp Suite, and Nmap.
                My motto:{' '}
                <span className="font-semibold" style={{ color: '#10B981' }}>
                  "Build it. Break it. Secure it."
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Timeline Grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {timelineItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="glass-card p-6 cursor-default group relative overflow-hidden"
              >
                {/* Hover glow bg */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${item.color}15 0%, transparent 70%)`,
                  }}
                />
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative z-10"
                  style={{
                    background: `${item.color}18`,
                    border: `1px solid ${item.color}30`,
                  }}
                >
                  <Icon size={22} style={{ color: item.color }} />
                </div>

                <h3 className="font-heading font-bold text-white text-lg mb-1 relative z-10">
                  {item.title}
                </h3>
                <p className="text-xs font-mono mb-3 relative z-10" style={{ color: item.color }}>
                  {item.subtitle}
                </p>
                <p className="font-body text-white/50 text-sm leading-relaxed relative z-10">
                  {item.desc}
                </p>

                {/* Bottom border glow on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(to right, transparent, ${item.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
