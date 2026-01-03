import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none`}
    >
      <div className={`pointer-events-auto max-w-[92%] md:max-w-7xl mx-auto bg-white/90 backdrop-blur-xl border-2 border-navy rounded-full px-4 py-2 flex items-center justify-between shadow-neo-sm transition-all duration-300 mt-4 ${scrolled ? 'scale-[0.98] mt-2' : ''}`}>
        
        {/* Left: Menu Button */}
        <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(true)} 
            className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
        >
            <Menu size={24} className="text-navy" />
            <span className="font-bold text-navy text-xs tracking-wider hidden md:block">MENU</span>
        </motion.button>

        {/* Center: Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2">
            <span className="font-display text-3xl text-navy tracking-normal select-none relative group">
                <span className="absolute -inset-1 blur-lg bg-cyan/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative">pomegranate</span> {/* Playfully using the user's favorite text style, but changed to FlowState in context usually, but keeping this styling */}
                <span className="hidden">FlowState</span>
            </span>
            {/* Let's actually use the app name "FlowState" but with that font style */}
             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 w-max text-center">
                 <span className="font-display text-3xl text-navy tracking-tight drop-shadow-sm">flowstate</span>
             </div>
        </div>

        {/* Right: CTA */}
        <div className="flex gap-2">
            <Button variant="secondary" className="hidden md:block scale-90">
                JOIN WAITLIST
            </Button>
            <Button variant="primary" className="md:hidden scale-75 px-4">
                JOIN
            </Button>
        </div>
      </div>
    </motion.header>

    {/* Mobile Menu Overlay */}
    <AnimatePresence>
      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0, clipPath: "circle(0% at 50% 50%)" }}
          animate={{ opacity: 1, clipPath: "circle(150% at 50% 50%)" }}
          exit={{ opacity: 0, clipPath: "circle(0% at 50% 50%)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 bg-navy z-[60] flex flex-col items-center justify-center p-6"
        >
           <button onClick={() => setMenuOpen(false)} className="absolute top-8 right-8 text-white p-2 rounded-full border-2 border-white/20 hover:bg-white/10">
             <X size={32} />
           </button>
           <nav className="text-center space-y-6">
             {['How it Works', 'Pricing', 'Technology', 'About Us'].map((item, i) => (
               <motion.a 
                 key={item}
                 href="#" 
                 initial={{ y: 50, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.1 * i }}
                 className="block font-display text-5xl text-cream hover:text-cyan transition-colors"
                 whileHover={{ scale: 1.1, rotate: -2 }}
               >
                 {item}
               </motion.a>
             ))}
           </nav>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};