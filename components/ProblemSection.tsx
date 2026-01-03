import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';
import { BadgeAlert, HardHat, Wrench, Banknote, User } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <SectionWrapper className="bg-white z-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Content */}
        <div>
           <motion.div
             initial={{ opacity: 0, scale: 0.5 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="border-2 border-navy text-navy px-4 py-2 rounded-full text-xs font-bold inline-block mb-8 uppercase tracking-widest bg-cream shadow-neo-sm"
           >
             Subscriptions, not Service Calls
           </motion.div>
           
           <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ type: "spring", stiffness: 100 }}
             className="text-5xl md:text-6xl font-extrabold text-navy mb-10 leading-[1.1]"
           >
             The end of <br/>
             Private <span className="text-rust relative inline-block">
                Medical Insurance?
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-rust/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="5" fill="none" />
                </svg>
             </span>
             <br/> <span className="text-4xl md:text-5xl opacity-50">...for your pipes.</span>
           </motion.h2>

           <p className="text-xl text-navyLight/70 mb-10 leading-relaxed font-medium">
             Traditional plumbing is decades out of date. It's too expensive, reactive, and doesn't give you the home health care you need. We're building the intelligent fluid system of the future that cares about your pipes all the time, not just when your basement is already flooded.
           </p>
        </div>

        {/* Right Graphic - The Network Node */}
        <div className="relative h-[500px] flex items-center justify-center bg-cream/50 rounded-[3rem] border-2 border-navy/5">
            {/* Center Node */}
            <motion.div 
               initial={{ scale: 0 }}
               whileInView={{ scale: 1 }}
               viewport={{ once: true }}
               transition={{ type: "spring", stiffness: 200, damping: 15 }}
               className="relative z-10 w-40 h-40 bg-cyan rounded-[2rem] border-4 border-navy flex flex-col items-center justify-center shadow-neo group cursor-pointer"
               whileHover={{ scale: 1.1, rotate: 5 }}
            >
                <Wrench size={48} className="text-white mb-2" />
                <span className="font-display text-white text-sm">FlowState</span>
                {/* Pulse ring */}
                <div className="absolute inset-0 rounded-[2rem] border-4 border-cyan/50 animate-ping -z-10"></div>
            </motion.div>

            {/* Connecting Lines & Nodes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                {/* Top Right */}
                <motion.path 
                    d="M 50% 50% Q 65% 35% 80% 20%"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeInOut" }}
                    stroke="#0F172A" strokeWidth="3" fill="none" strokeDasharray="8 8" 
                />
                <foreignObject x="72%" y="10%" width="200" height="100">
                     <motion.div 
                        initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} delay={0.5}
                        transition={{ type: "spring" }}
                        className="bg-white border-2 border-navy rounded-full p-2 pl-3 flex items-center gap-3 w-max shadow-neo-sm hover:shadow-neo transition-all cursor-pointer"
                    >
                        <div className="w-10 h-10 rounded-full bg-orange-200 overflow-hidden flex items-center justify-center border border-navy"><User size={20} className="text-navy"/></div>
                        <div className="text-xs font-bold leading-tight mr-4 text-navy">Sammy <br/><span className="text-gray-400 font-normal">Homeowner</span></div>
                     </motion.div>
                </foreignObject>

                {/* Bottom Right */}
                <motion.path 
                    d="M 50% 50% Q 65% 65% 80% 80%"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeInOut" }}
                    stroke="#0F172A" strokeWidth="3" fill="none" strokeDasharray="8 8" 
                />
                 <foreignObject x="72%" y="75%" width="200" height="100">
                     <motion.div 
                        initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} delay={0.7}
                        transition={{ type: "spring" }}
                        className="bg-white border-2 border-navy rounded-full p-2 pl-3 flex items-center gap-3 w-max shadow-neo-sm hover:shadow-neo transition-all cursor-pointer"
                     >
                        <div className="w-10 h-10 rounded-full bg-blue-200 overflow-hidden flex items-center justify-center border border-navy"><HardHat size={20} className="text-navy"/></div>
                        <div className="text-xs font-bold leading-tight mr-4 text-navy">Mike <br/><span className="text-gray-400 font-normal">Technician</span></div>
                     </motion.div>
                </foreignObject>

                {/* Left */}
                <motion.path 
                    d="M 50% 50% Q 35% 50% 20% 50%"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeInOut" }}
                    stroke="#0F172A" strokeWidth="3" fill="none" strokeDasharray="8 8" 
                />
                 <foreignObject x="5%" y="42%" width="200" height="100">
                     <motion.div 
                        initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} delay={0.9}
                        transition={{ type: "spring" }}
                        className="bg-white border-2 border-navy rounded-full p-2 pl-3 flex items-center gap-3 w-max shadow-neo-sm hover:shadow-neo transition-all cursor-pointer"
                     >
                        <div className="w-10 h-10 rounded-full bg-red-200 overflow-hidden flex items-center justify-center border border-navy"><Banknote size={20} className="text-navy"/></div>
                        <div className="text-xs font-bold leading-tight mr-4 text-navy">Save <br/><span className="text-gray-400 font-normal">Money</span></div>
                     </motion.div>
                </foreignObject>
            </svg>
        </div>
      </div>
    </SectionWrapper>
  );
};