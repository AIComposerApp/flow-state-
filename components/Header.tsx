
import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onNavigate?: (page: 'home' | 'how-it-works' | 'pricing' | 'join-waitlist') => void;
  currentPage?: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: 'home' | 'how-it-works' | 'pricing' | 'join-waitlist') => {
    if (onNavigate) onNavigate(page);
    setMenuOpen(false);
  }

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
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 cursor-pointer"
          onClick={() => handleNavClick('home')}
        >
             <div className="w-max text-center">
                 <span className="font-display text-3xl text-navy tracking-tight drop-shadow-sm hover:text-cyan transition-colors">flowstate</span>
             </div>
        </div>

        {/* Right: CTA */}
        <div className="flex gap-2">
            <Button 
                variant="secondary" 
                className="hidden md:block scale-90"
                onClick={() => handleNavClick('pricing')}
            >
                SEE PLANS
            </Button>
            <Button 
                variant="primary" 
                className="md:hidden scale-75 px-4"
                onClick={() => handleNavClick('join-waitlist')}
            >
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
               <motion.div 
                 onClick={() => handleNavClick('home')}
                 initial={{ y: 50, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.1 }}
                 className="block font-display text-5xl text-cream hover:text-cyan transition-colors cursor-pointer"
                 whileHover={{ scale: 1.1, rotate: -2 }}
               >
                 Home
               </motion.div>
               
               <motion.div 
                 onClick={() => handleNavClick('how-it-works')}
                 initial={{ y: 50, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.2 }}
                 className="block font-display text-5xl text-cream hover:text-cyan transition-colors cursor-pointer"
                 whileHover={{ scale: 1.1, rotate: -2 }}
               >
                 How it Works
               </motion.div>

               <motion.div 
                 onClick={() => handleNavClick('pricing')}
                 initial={{ y: 50, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.3 }}
                 className="block font-display text-5xl text-cream hover:text-cyan transition-colors cursor-pointer"
                 whileHover={{ scale: 1.1, rotate: -2 }}
               >
                 Pricing
               </motion.div>

               <motion.div 
                 onClick={() => handleNavClick('join-waitlist')}
                 initial={{ y: 50, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.4 }}
                 className="block font-display text-5xl text-rust hover:text-white transition-colors cursor-pointer"
                 whileHover={{ scale: 1.1, rotate: -2 }}
               >
                 Join Waitlist
               </motion.div>
           </nav>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};
