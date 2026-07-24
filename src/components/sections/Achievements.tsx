import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Rocket, Code2, Workflow, GitBranch, Globe } from 'lucide-react';

const achievements = [
  {
    icon: Award,
    title: 'Internship Completion',
    desc: 'Successfully completed a 6-month automation internship, delivering production-grade AI workflows.',
    color: '#F59E0B',
    delay: 0,
  },
  {
    icon: Workflow,
    title: '10+ Automation Workflows',
    desc: 'Built and deployed automation workflows using n8n, saving hours of manual work.',
    color: '#3B82F6',
    delay: 0.1,
  },
  {
    icon: Code2,
    title: '15+ Full Stack Projects',
    desc: 'Shipped multiple complete web applications with React, Node.js, Firebase, and Supabase.',
    color: '#8B5CF6',
    delay: 0.2,
  },
  {
    icon: Rocket,
    title: 'AI Workflow Development',
    desc: 'Engineered intelligent AI agent workflows using OpenAI API, prompt engineering, and RAG systems.',
    color: '#06B6D4',
    delay: 0.3,
  },
  {
    icon: GitBranch,
    title: 'GitHub Contributions',
    desc: 'Consistent open-source contributions with a growing portfolio of public projects and repositories.',
    color: '#22C55E',
    delay: 0.4,
  },
  {
    icon: Globe,
    title: 'Responsive Web Applications',
    desc: 'Built pixel-perfect, mobile-first web applications with modern design systems and smooth animations.',
    color: '#EC4899',
    delay: 0.5,
  },
];

const Achievements = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="achievements" className="section-padding relative z-10">
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
          <p className="font-mono text-sm mb-3" style={{ color: '#F59E0B' }}>
            {'// 05. achievements'}
          </p>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4">
            Milestones
          </h2>
          <p className="font-body text-white/50 text-lg max-w-xl mx-auto">
            Highlights from my journey building products and solving real problems.
          </p>
        </motion.div>

        {/* Grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.7,
                  delay: item.delay,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.25 },
                }}
                className="glass-card p-6 group cursor-default relative overflow-hidden"
              >
                {/* Background glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 30% 0%, ${item.color}18 0%, transparent 70%)`,
                  }}
                />

                {/* Icon with animated ring */}
                <div className="relative w-14 h-14 mb-5">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 rounded-full"
                    style={{ border: `1px dashed ${item.color}40` }}
                  />
                  <div
                    className="absolute inset-1 rounded-full flex items-center justify-center"
                    style={{
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}30`,
                    }}
                  >
                    <Icon size={20} style={{ color: item.color }} />
                  </div>
                </div>

                <h3 className="font-heading font-bold text-white text-lg mb-2 relative z-10">
                  {item.title}
                </h3>
                <p className="font-body text-white/50 text-sm leading-relaxed relative z-10">
                  {item.desc}
                </p>

                {/* Corner accent */}
                <div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: item.color, boxShadow: `0 0 8px ${item.color}` }}
                />

                {/* Bottom glow */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: `linear-gradient(to right, ${item.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
