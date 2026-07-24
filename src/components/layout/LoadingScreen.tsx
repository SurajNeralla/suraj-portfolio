import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
          style={{ background: '#050816' }}
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-12"
          >
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center loader-text"
              style={{
                background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                boxShadow: '0 0 40px rgba(59,130,246,0.4), 0 0 80px rgba(139,92,246,0.2)',
              }}
            >
              SN
            </div>
            {/* Ping rings */}
            <motion.div
              className="absolute inset-0 rounded-2xl border"
              style={{ borderColor: 'rgba(59,130,246,0.5)' }}
              animate={{ scale: [1, 1.5, 2], opacity: [0.6, 0.2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
            />
            <motion.div
              className="absolute inset-0 rounded-2xl border"
              style={{ borderColor: 'rgba(139,92,246,0.5)' }}
              animate={{ scale: [1, 1.5, 2], opacity: [0.6, 0.2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
            />
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="w-48 h-0.5 rounded-full overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.1)' }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #3B82F6, #8B5CF6, #06B6D4)' }}
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-mono text-xs mt-4"
            style={{ color: 'rgba(59,130,246,0.7)' }}
          >
            Initializing portfolio...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
