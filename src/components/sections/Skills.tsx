import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillCategories } from '../../data/skills';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hovered, setHovered] = useState<string | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const currentCat = skillCategories[activeCategory];

  return (
    <section id="skills" className="section-padding relative z-10">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-mono text-sm mb-3" style={{ color: '#8B5CF6' }}>
            {'// 02. skills'}
          </p>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4">
            Tech Arsenal
          </h2>
          <p className="font-body text-white/50 text-lg max-w-2xl mx-auto">
            Dual-domain expertise spanning{' '}
            <span className="text-white font-medium">web development</span>{' '}and{' '}
            <span style={{ color: '#10B981' }} className="font-medium">cybersecurity & ethical hacking</span>.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((cat, i) => (
            <motion.button
              key={cat.category}
              onClick={() => setActiveCategory(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="relative px-5 py-2.5 rounded-xl text-sm font-heading font-medium transition-all duration-300"
              style={{
                background: activeCategory === i
                  ? `${cat.color}20`
                  : 'rgba(255,255,255,0.04)',
                border: activeCategory === i
                  ? `1px solid ${cat.color}50`
                  : '1px solid rgba(255,255,255,0.08)',
                color: activeCategory === i ? cat.color : 'rgba(255,255,255,0.6)',
                boxShadow: activeCategory === i
                  ? `0 0 20px ${cat.color}20`
                  : 'none',
              }}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.category}
              {activeCategory === i && (
                <motion.div
                  layoutId="skill-tab-indicator"
                  className="absolute inset-0 rounded-xl"
                  style={{ background: `${cat.color}10` }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div ref={ref} className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {currentCat.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.85, y: 20 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setHovered(skill.name)}
                  onMouseLeave={() => setHovered(null)}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                    transition: { duration: 0.2 },
                  }}
                  className="glass-card p-5 relative overflow-hidden group cursor-default"
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 100%, ${skill.color}15 0%, transparent 70%)`,
                    }}
                  />

                  {/* Skill name */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-semibold text-white text-base">
                      {skill.name}
                    </span>
                    <motion.span
                      className="font-mono text-xs"
                      style={{ color: skill.color }}
                      animate={hovered === skill.name ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 0.4 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>

                  {/* Progress bar */}
                  <div className="skill-bar-track">
                    <motion.div
                      className="h-full rounded-full relative"
                      style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)` }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: i * 0.08 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {/* Shimmer effect */}
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                          backgroundSize: '200% 100%',
                          animation: 'shimmer 2s linear infinite',
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Bottom left tag */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(to right, transparent, ${skill.color}80, transparent)` }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* All skills cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-white/30 text-xs font-mono mb-6 uppercase tracking-widest">All Technologies</p>
          <div className="flex flex-wrap justify-center gap-2">
            {skillCategories.flatMap((cat) =>
              cat.skills.map((s, i) => (
                <motion.span
                  key={`${cat.category}-${s.name}`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03, type: 'spring', stiffness: 300 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-3 py-1 rounded-full text-xs font-mono cursor-default"
                  style={{
                    background: `${cat.color}12`,
                    border: `1px solid ${cat.color}25`,
                    color: `${cat.color}cc`,
                  }}
                >
                  {s.name}
                </motion.span>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
