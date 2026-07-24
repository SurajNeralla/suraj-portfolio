import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Terminal, Wifi, Lock, Eye, AlertTriangle, Server, Cpu } from 'lucide-react';

const tools = [
  { name: 'Kali Linux', icon: '🐉', desc: 'Primary OS for ethical hacking & penetration testing', color: '#10B981', level: 90 },
  { name: 'VMware', icon: '🖥️', desc: 'Virtual machine setup for isolated hacking labs', color: '#6366F1', level: 88 },
  { name: 'Metasploit', icon: '💣', desc: 'Exploitation framework for vulnerability testing', color: '#F59E0B', level: 78 },
  { name: 'Burp Suite', icon: '🔍', desc: 'Web application security testing proxy', color: '#EC4899', level: 80 },
  { name: 'Nmap', icon: '📡', desc: 'Network discovery & port scanning tool', color: '#22C55E', level: 85 },
  { name: 'Wireshark', icon: '🦈', desc: 'Network traffic analysis & packet capture', color: '#3B82F6', level: 78 },
  { name: 'OWASP ZAP', icon: '🕷️', desc: 'Automated web app vulnerability scanner', color: '#F97316', level: 75 },
  { name: 'John the Ripper', icon: '🔑', desc: 'Password cracking & hash analysis', color: '#8B5CF6', level: 72 },
];

const domains = [
  {
    icon: Shield,
    title: 'Penetration Testing',
    desc: 'Simulate real-world attacks on systems, networks, and web applications in controlled environments.',
    color: '#10B981',
  },
  {
    icon: Wifi,
    title: 'Network Security',
    desc: 'Analyze network traffic, identify vulnerabilities, and secure infrastructure using Wireshark & Nmap.',
    color: '#3B82F6',
  },
  {
    icon: Terminal,
    title: 'Kali Linux Labs',
    desc: 'Build and operate fully isolated hacking labs inside VMware with Kali Linux as the attack platform.',
    color: '#6366F1',
  },
  {
    icon: Lock,
    title: 'Web App Security',
    desc: 'Test for OWASP Top 10 vulnerabilities — SQL injection, XSS, CSRF — using Burp Suite & ZAP.',
    color: '#EC4899',
  },
  {
    icon: Eye,
    title: 'Reconnaissance',
    desc: 'Passive and active information gathering using OSINT techniques, DNS enumeration, and Shodan.',
    color: '#F59E0B',
  },
  {
    icon: Server,
    title: 'Exploitation',
    desc: 'Leverage Metasploit Framework and custom exploits to assess system weaknesses responsibly.',
    color: '#F43F5E',
  },
];

const cardVariants: any = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Cybersecurity = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="cybersecurity" className="section-padding relative z-10">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm mb-3" style={{ color: '#10B981' }}>
            {'// cybersecurity'}
          </p>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4">
            Ethical Hacking &{' '}
            <span style={{ color: '#10B981' }}>Cybersecurity</span>
          </h2>
          <p className="font-body text-white/50 text-lg max-w-2xl mx-auto">
            Practicing responsible security research using{' '}
            <span className="text-white font-medium">Kali Linux</span> inside{' '}
            <span className="text-white font-medium">VMware</span> — identifying vulnerabilities
            before the bad guys do.
          </p>
        </motion.div>

        {/* Banner card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-card-strong gradient-border p-8 mb-16 max-w-5xl mx-auto relative overflow-hidden"
        >
          {/* Background glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #10B981 0%, transparent 70%)', filter: 'blur(60px)' }}
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div
              className="flex-shrink-0 w-24 h-24 rounded-2xl flex items-center justify-center text-5xl"
              style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)' }}
            >
              🛡️
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-heading font-bold text-2xl text-white">Ethical Hacker & Security Researcher</h3>
                <span
                  className="px-2.5 py-1 rounded-full text-xs font-mono"
                  style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', color: '#10B981' }}
                >
                  Responsible Disclosure
                </span>
              </div>
              <p className="font-mono text-sm mb-3" style={{ color: '#10B981' }}>
                Kali Linux · VMware · Penetration Testing · Network Security
              </p>
              <p className="font-body text-white/60 leading-relaxed">
                I set up isolated hacking labs using <span className="text-white">VMware Workstation</span> with{' '}
                <span className="text-white">Kali Linux</span> as the attack machine. I practice network
                reconnaissance, vulnerability exploitation, and web application testing — all in controlled,
                legal environments. My goal: understand how systems break so I can build them stronger.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Domain cards */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {domains.map((domain, i) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                className="glass-card p-6 cursor-default group relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${domain.color}15 0%, transparent 70%)` }}
                />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative z-10"
                  style={{ background: `${domain.color}18`, border: `1px solid ${domain.color}30` }}
                >
                  <Icon size={22} style={{ color: domain.color }} />
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-2 relative z-10">{domain.title}</h3>
                <p className="font-body text-white/50 text-sm leading-relaxed relative z-10">{domain.desc}</p>
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(to right, transparent, ${domain.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Tools grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-center text-white/30 text-xs font-mono mb-8 uppercase tracking-widest">
            Security Toolkit
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.03, transition: { duration: 0.2 } }}
                className="glass-card p-5 relative overflow-hidden group cursor-default"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 100%, ${tool.color}15 0%, transparent 70%)` }}
                />
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{tool.icon}</span>
                  <span className="font-heading font-semibold text-white text-sm">{tool.name}</span>
                  <span className="ml-auto font-mono text-xs" style={{ color: tool.color }}>{tool.level}%</span>
                </div>
                <p className="font-body text-white/40 text-xs leading-relaxed mb-3">{tool.desc}</p>
                {/* Progress */}
                <div className="skill-bar-track">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${tool.color}, ${tool.color}aa)` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tool.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.08 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to right, transparent, ${tool.color}80, transparent)` }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Warning / ethical note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex items-start gap-3 glass-card p-5 max-w-2xl mx-auto"
          style={{ border: '1px solid rgba(16,185,129,0.2)' }}
        >
          <AlertTriangle size={18} style={{ color: '#10B981', flexShrink: 0, marginTop: 2 }} />
          <p className="font-body text-white/50 text-sm leading-relaxed">
            <span className="text-white font-medium">Ethical Commitment:</span>{' '}
            All security research and hacking practice is conducted in controlled, legal lab environments
            (VMware + intentionally vulnerable VMs). No unauthorized systems are ever targeted.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Cybersecurity;
