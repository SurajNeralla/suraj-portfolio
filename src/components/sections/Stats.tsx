
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUpPkg from 'react-countup';
const CountUp: any = (CountUpPkg as any).default || CountUpPkg;

const stats = [
  { value: 15, suffix: '+', label: 'Projects Built', sublabel: 'Full-stack & AI', color: '#3B82F6' },
  { value: 8, suffix: '+', label: 'Technologies', sublabel: 'Languages & Frameworks', color: '#8B5CF6' },
  { value: 10, suffix: '+', label: 'Automation Workflows', sublabel: 'n8n & AI Pipelines', color: '#06B6D4' },
  { value: 100, suffix: '+', label: 'Hours of Learning', sublabel: 'Consistent growth', color: '#F59E0B' },
];

const Stats = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="relative z-10 py-20 overflow-hidden">
      {/* Background stripe */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(59,130,246,0.06) 0%, rgba(139,92,246,0.06) 50%, rgba(6,182,212,0.04) 100%)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="text-center group cursor-default"
            >
              {/* Number */}
              <div
                className="font-heading font-bold mb-2 relative inline-block"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
              >
                <span style={{ color: stat.color }}>
                  {inView ? (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      delay={i * 0.15}
                      suffix={stat.suffix}
                    />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </span>
                {/* Glow behind number */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-lg pointer-events-none"
                  style={{ background: stat.color }}
                />
              </div>

              <p className="font-heading font-semibold text-white text-base mb-1">
                {stat.label}
              </p>
              <p className="font-mono text-white/40 text-xs">{stat.sublabel}</p>

              {/* Animated underline */}
              <motion.div
                className="h-0.5 mx-auto mt-3 rounded-full"
                style={{ background: stat.color }}
                initial={{ width: 0 }}
                animate={inView ? { width: '40px' } : { width: 0 }}
                transition={{ duration: 0.8, delay: i * 0.15 + 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
