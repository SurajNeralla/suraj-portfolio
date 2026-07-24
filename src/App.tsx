import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CustomCursor from './components/layout/CustomCursor';
import ScrollProgress from './components/layout/ScrollProgress';
import LoadingScreen from './components/layout/LoadingScreen';
import BackToTop from './components/layout/BackToTop';

// Background
import ShaderBackground from './components/background/ShaderBackground';
import GlowBlobs from './components/background/GlowBlobs';
import ThreeBackground from './components/background/ThreeBackground';

// Sections
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Achievements from './components/sections/Achievements';
import Stats from './components/sections/Stats';
import Contact from './components/sections/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const lenisRef = useRef<any>(null);

  // Loading screen
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  // Lenis smooth scroll
  useEffect(() => {
    if (isLoading) return;
    let lenis: any;

    const initLenis = async () => {
      try {
        const { default: Lenis } = await import('@studio-freight/lenis');
        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
        });
        lenisRef.current = lenis;

        const raf = (time: number) => {
          lenis.raf(time);
          requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
      } catch (e) {
        // Lenis not available, native scroll is fine
      }
    };

    initLenis();
    return () => {
      if (lenisRef.current) lenisRef.current.destroy();
    };
  }, [isLoading]);

  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen isLoading={isLoading} />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Scroll progress */}
      <ScrollProgress />

      {/* Background layers */}
      <ShaderBackground />
      <GlowBlobs />
      <ThreeBackground />

      {/* Main content */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Navbar />

            <main>
              <Hero />

              {/* Section dividers with visual rhythm */}
              <div className="section-divider" />
              <About />

              <div className="section-divider" />
              <Skills />

              <Stats />

              <div className="section-divider" />
              <Projects />

              <div className="section-divider" />
              <Experience />

              <div className="section-divider" />
              <Achievements />

              <div className="section-divider" />
              <Contact />
            </main>

            <Footer />
            <BackToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
