import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Button } from './Button';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <SectionWrapper className="bg-[#E11D48] text-white z-50 border-t-0 pt-40 pb-16 min-h-[90vh] flex flex-col justify-between overflow-hidden relative">
         {/* Background pattern */}
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent scale-150"></div>

         <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
             <motion.h2 
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-display text-[15vw] md:text-[8rem] leading-none mb-4 drop-shadow-lg text-cream"
             >
                 flowstate
             </motion.h2>
             
             <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-5xl font-bold text-white/90 mb-16 tracking-tight"
             >
                 The future of <span className="underline decoration-4 decoration-white/30 underline-offset-8">plumbing</span>
             </motion.h3>
             
             <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-white/80 text-xl mb-16 max-w-xl mx-auto font-medium"
             >
                 If you want to get your name on the waiting list, click on the link and leave your details. No spam, just smooth pipes.
             </motion.p>
             
             <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
             >
                 <Button className="bg-[#FFF8F0] text-[#E11D48] hover:bg-white border-transparent text-xl px-12 py-5 shadow-neo">
                     JOIN THE WAITING LIST
                 </Button>
             </motion.div>
         </div>

         <div className="max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row justify-between items-center text-xs font-bold tracking-[0.2em] uppercase opacity-60 mt-32 relative z-10">
             <div className="hover:opacity-100 cursor-pointer transition-opacity">Privacy Policy</div>
             <div className="my-6 md:my-0 text-center">© Copyright Really Intelligent Plumbing LTD 2025</div>
             <div className="hover:opacity-100 cursor-pointer transition-opacity">Terms & Conditions</div>
         </div>
    </SectionWrapper>
  );
};