import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 border-t"
      style={{ borderColor: 'rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3"
        >
          <div className="w-8 h-8 rounded-lg flex items-center justify-center font-heading font-bold text-sm"
            style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }}
          >
            SN
          </div>
          <span className="font-heading font-semibold text-white/80">Suraj Neralla</span>
        </motion.div>

        {/* Credits */}
        <p className="text-sm text-white/40 font-body flex items-center gap-1.5">
          Designed &amp; Developed with{' '}
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Heart size={14} className="text-pink-500 inline" fill="currentColor" />
          </motion.span>{' '}
          by{' '}
          <span className="gradient-text font-semibold">Suraj Neralla</span>
        </p>

        {/* Year */}
        <p className="text-sm text-white/30 font-mono">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
