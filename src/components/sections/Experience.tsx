import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const experienceData = {
  role: 'Web Developer Intern',
  company: 'Tech Company',
  duration: 'Jan 2026 – Jun 2026',
  location: 'Remote / India',
  type: 'Internship',
  color: '#3B82F6',
  responsibilities: [
    'Developed and maintained responsive web applications using React and Tailwind CSS, improving UI consistency across the platform.',
    'Built RESTful API integrations connecting the frontend with backend services and third-party providers.',
    'Implemented Firebase authentication and Firestore database features for user management and real-time data.',
    'Collaborated with the design team to translate Figma mockups into pixel-perfect, accessible UI components.',
    'Optimized page load performance and web vitals, reducing initial load time by 40% through code splitting and lazy loading.',
  ],
  skills: ['React', 'Tailwind CSS', 'Firebase', 'REST APIs', 'JavaScript', 'TypeScript', 'Figma', 'Git'],
};

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="experience" className="section-padding relative z-10">
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
          <p className="font-mono text-sm mb-3" style={{ color: '#3B82F6' }}>
            {'// 04. experience'}
          </p>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4">
            Work Experience
          </h2>
          <p className="font-body text-white/50 text-lg max-w-xl mx-auto">
            Professional experience building automation systems in the real world.
          </p>
        </motion.div>

        {/* Experience Card */}
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card-strong gradient-border relative overflow-hidden"
          >
            {/* Background accent */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />

            <div className="p-8 md:p-10">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(59,130,246,0.15)',
                      border: '1px solid rgba(59,130,246,0.3)',
                    }}
                  >
                    <Briefcase size={26} style={{ color: '#3B82F6' }} />
                  </motion.div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-heading font-bold text-white text-2xl">
                        {experienceData.role}
                      </h3>
                      <motion.span
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="px-2.5 py-0.5 rounded-full text-xs font-mono"
                        style={{
                          background: 'rgba(34,197,94,0.15)',
                          border: '1px solid rgba(34,197,94,0.3)',
                          color: '#22C55E',
                        }}
                      >
                        Completed
                      </motion.span>
                    </div>
                    <p className="font-heading font-semibold text-white/70 text-lg">
                      {experienceData.company}
                    </p>
                  </div>
                </div>

                {/* Meta info */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-sm text-white/50 font-mono">
                    <Calendar size={14} style={{ color: '#3B82F6' }} />
                    {experienceData.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/50 font-mono">
                    <MapPin size={14} style={{ color: '#8B5CF6' }} />
                    {experienceData.location}
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-8">
                <h4 className="font-heading font-semibold text-white/80 text-sm uppercase tracking-wider mb-4">
                  Key Responsibilities
                </h4>
                <div className="space-y-3">
                  {experienceData.responsibilities.map((resp, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={16}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: '#3B82F6' }}
                      />
                      <p className="font-body text-white/60 text-sm leading-relaxed">{resp}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tech used */}
              <div>
                <h4 className="font-heading font-semibold text-white/80 text-sm uppercase tracking-wider mb-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experienceData.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + i * 0.06, type: 'spring', stiffness: 400 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono cursor-default"
                      style={{
                        background: 'rgba(59,130,246,0.12)',
                        border: '1px solid rgba(59,130,246,0.25)',
                        color: '#3B82F6',
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
