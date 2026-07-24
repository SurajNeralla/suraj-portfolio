import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, Globe, Shield } from 'lucide-react';
import { GithubIcon } from '../ui/icons';
import { projects } from '../../data/projects';

const cardVariants: any = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const domainFilters = [
  { key: 'all', label: 'All Projects', icon: '🚀', color: '#3B82F6' },
  { key: 'web', label: 'Web Development', icon: '🌐', color: '#06B6D4' },
  { key: 'cybersecurity', label: 'Cybersecurity', icon: '🛡️', color: '#10B981' },
  { key: 'ai', label: 'AI & Automation', icon: '🤖', color: '#8B5CF6' },
] as const;

const domainBadgeColors: Record<string, { bg: string; text: string; label: string }> = {
  web: { bg: 'rgba(6,182,212,0.12)', text: '#06B6D4', label: 'Web Dev' },
  cybersecurity: { bg: 'rgba(16,185,129,0.12)', text: '#10B981', label: 'Security' },
  ai: { bg: 'rgba(139,92,246,0.12)', text: '#8B5CF6', label: 'AI/Auto' },
};

const Projects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeDomain, setActiveDomain] = useState<'all' | 'web' | 'cybersecurity' | 'ai'>('all');

  const filtered = activeDomain === 'all'
    ? projects
    : projects.filter((p) => p.domain === activeDomain);

  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-sm mb-3" style={{ color: '#06B6D4' }}>
            {'// 03. projects'}
          </p>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4">
            Featured Work
          </h2>
          <p className="font-body text-white/50 text-lg max-w-xl mx-auto">
            From full-stack web apps to ethical hacking labs — projects that demonstrate real skills.
          </p>
        </motion.div>

        {/* Domain filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {domainFilters.map((filter) => (
            <motion.button
              key={filter.key}
              onClick={() => setActiveDomain(filter.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="relative px-5 py-2.5 rounded-xl text-sm font-heading font-medium transition-all duration-300"
              style={{
                background: activeDomain === filter.key
                  ? `${filter.color}20`
                  : 'rgba(255,255,255,0.04)',
                border: activeDomain === filter.key
                  ? `1px solid ${filter.color}50`
                  : '1px solid rgba(255,255,255,0.08)',
                color: activeDomain === filter.key ? filter.color : 'rgba(255,255,255,0.6)',
                boxShadow: activeDomain === filter.key
                  ? `0 0 20px ${filter.color}20`
                  : 'none',
              }}
            >
              <span className="mr-2">{filter.icon}</span>
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDomain}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => {
              const badge = domainBadgeColors[project.domain];
              return (
                <motion.div
                  key={project.id}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ y: { duration: 0.2 } }}
                  onClick={() => {
                    const url = project.liveUrl !== '#' ? project.liveUrl : project.githubUrl;
                    window.open(url, '_blank');
                  }}
                  className="group relative glass-card overflow-hidden flex flex-col cursor-pointer"
                  style={{
                    border: hoveredId === project.id
                      ? `1px solid ${project.color}40`
                      : '1px solid rgba(255,255,255,0.06)',
                    transition: 'border-color 0.3s ease',
                  }}
                >
                  {/* Top image/gradient banner */}
                  <div className="relative h-48 overflow-hidden flex items-center justify-center bg-slate-950">
                    {project.image ? (
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `url(${project.image})`,
                        }}
                      />
                    ) : (
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(135deg, ${project.color}20 0%, ${project.color}08 50%, rgba(5,8,22,0.8) 100%)`,
                        }}
                      />
                    )}

                    {/* Dark/glass overlay */}
                    <div className="absolute inset-0 bg-slate-950/45 group-hover:bg-slate-950/65 backdrop-blur-[1px] group-hover:backdrop-blur-[2px] transition-all duration-300 z-10" />

                    {/* Grid pattern on top */}
                    <div
                      className="absolute inset-0 opacity-15 pointer-events-none z-10"
                      style={{
                        backgroundImage: `radial-gradient(${project.color}40 1px, transparent 1px)`,
                        backgroundSize: '20px 20px',
                      }}
                    />

                    {/* Domain badge top-right */}
                    <div
                      className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider z-20"
                      style={{ background: badge.bg, color: badge.text, border: `1px solid ${badge.text}30` }}
                    >
                      {badge.label}
                    </div>

                    {/* Icon */}
                    <motion.div
                      animate={hoveredId === project.id
                        ? { scale: [1, 1.15, 1.1], rotate: [0, -5, 5, 0] }
                        : { scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-6xl relative z-20 group-hover:scale-0 group-hover:opacity-0 transition-all duration-300"
                    >
                      {project.icon}
                    </motion.div>

                    {/* Glow on hover */}
                    <AnimatePresence>
                      {hoveredId === project.id && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          className="absolute inset-0 pointer-events-none z-10"
                          style={{
                            background: `radial-gradient(circle at 50% 50%, ${project.color}25 0%, transparent 70%)`,
                          }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Overlay links */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <motion.a
                        href={project.liveUrl !== '#' ? project.liveUrl : project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.96 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-heading font-semibold text-white"
                        style={{ background: project.color, boxShadow: `0 0 20px ${project.color}80` }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={12} />
                        {project.liveUrl !== '#' ? 'Live Demo' : 'GitHub'}
                      </motion.a>
                      {project.liveUrl !== '#' && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.06 }}
                          whileTap={{ scale: 0.96 }}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-heading font-semibold text-white"
                          style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.2)' }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <GithubIcon size={12} />
                          Code
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-heading font-bold text-white text-xl">
                          {project.title}
                        </h3>
                        <p className="text-xs font-mono mt-0.5" style={{ color: project.color }}>
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="font-body text-white/55 text-sm leading-relaxed mb-5 flex-1">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-xs font-mono"
                          style={{
                            background: `${project.color}12`,
                            border: `1px solid ${project.color}25`,
                            color: `${project.color}cc`,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* View project CTA */}
                    <motion.a
                      href={project.liveUrl !== '#' ? project.liveUrl : project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-heading font-medium mt-auto group/link"
                      style={{ color: project.color }}
                      whileHover={{ x: 4 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.liveUrl !== '#' ? 'View Live Project' : 'View Code on GitHub'}
                      <motion.span
                        animate={hoveredId === project.id ? { x: [0, 4, 0] } : {}}
                        transition={{ repeat: hoveredId === project.id ? Infinity : 0, duration: 1 }}
                      >
                        <ArrowRight size={14} />
                      </motion.span>
                    </motion.a>
                  </div>

                  {/* Bottom glow line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ background: `linear-gradient(to right, ${project.color}, transparent)` }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, boxShadow: '0 0 25px rgba(59,130,246,0.3)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-heading font-semibold text-white btn-secondary"
          >
            <GithubIcon size={20} />
            View All Projects on GitHub
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
