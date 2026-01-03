
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { DataSection } from './components/DataSection';
import { LayersSection } from './components/LayersSection';
import { Footer } from './components/Footer';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { JoinWaitlist } from './components/JoinWaitlist';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'how-it-works' | 'pricing' | 'join-waitlist'>('home');

  const navigateTo = (page: 'home' | 'how-it-works' | 'pricing' | 'join-waitlist') => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  return (
    <div className="bg-cream min-h-screen font-sans antialiased selection:bg-cyan selection:text-white overflow-x-hidden">
      {/* Hide header on waitlist page for cleaner look, or keep it. Let's keep it but handle navigation. */}
      {currentPage !== 'join-waitlist' && <Header onNavigate={navigateTo} currentPage={currentPage} />}
      
      <AnimatePresence mode="wait">
        {currentPage === 'home' ? (
          <motion.main
            key="home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Hero 
                onLearnMore={() => navigateTo('how-it-works')} 
                onJoin={() => navigateTo('join-waitlist')}
            />
            <ProblemSection />
            
            {/* Middle decorative text section */}
            <div className="bg-white py-32 text-center px-6 -mt-10 pt-40 relative z-10 border-t-2 border-navy">
                 <div className="inline-block border-2 border-navy rounded-full px-5 py-2 text-xs font-bold text-navy bg-cream shadow-neo-sm mb-8 uppercase tracking-widest transform -rotate-1">
                    Insurance doesn't care about your sump pump
                </div>
                <h2 className="text-5xl md:text-7xl font-extrabold text-navy mb-10 tracking-tight leading-[1.1]">
                    Monitoring your pipes <br/> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-600">thousands of times a day</span>
                </h2>
                <p className="max-w-4xl mx-auto text-navyLight/70 text-2xl font-medium leading-relaxed">
                    FlowState cares about you all the time. It collects billions of data points and uses advanced machine intelligence to learn about your home's water usage, targeting leak risks before they become a flood.
                </p>
            </div>
            
            <DataSection />
            <LayersSection />
            <Footer onJoin={() => navigateTo('join-waitlist')} />
          </motion.main>
        ) : currentPage === 'how-it-works' ? (
          <motion.main
            key="how-it-works"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <HowItWorks onBack={() => navigateTo('home')} />
            <Footer onJoin={() => navigateTo('join-waitlist')} />
          </motion.main>
        ) : currentPage === 'pricing' ? (
          <motion.main
            key="pricing"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
             <Pricing onBack={() => navigateTo('home')} />
             <Footer onJoin={() => navigateTo('join-waitlist')} />
          </motion.main>
        ) : (
            <motion.main
            key="join-waitlist"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
             <JoinWaitlist onBack={() => navigateTo('home')} />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
