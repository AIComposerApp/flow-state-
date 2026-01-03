import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './Button';
import { Droplets, Activity, ShieldCheck, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <div className="relative bg-cream min-h-[110vh] pt-32 pb-32 flex flex-col items-center text-center overflow-hidden">
        
      {/* Decorative Background Elements */}
      <motion.div 
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-32 left-[5%] opacity-10 pointer-events-none"
      >
        <Droplets size={180} className="text-navy" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 40, 0], rotate: [0, -5, 0] }} 
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-40 right-[5%] opacity-10 pointer-events-none"
      >
        <Zap size={140} className="text-rust" />
      </motion.div>

      <div className="max-w-5xl mx-auto px-6 z-10 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="inline-flex items-center gap-2 bg-navy text-white px-6 py-2 rounded-full text-xs font-bold mb-8 shadow-neo-sm hover:shadow-neo hover:-translate-y-1 transition-all cursor-default"
        >
          <ShieldCheck size={16} className="text-cyan" />
          <span className="tracking-widest uppercase">Introducing FlowState Premium</span>
        </motion.div>
        
        <h1 className="text-6xl md:text-8xl font-extrabold text-navy leading-[0.95] mb-8 tracking-tight">
          <motion.span className="block" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, type: "spring" }}>Finally, Really</motion.span>
          <motion.span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan via-blue-500 to-blue-600 pb-2" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, type: "spring" }}>
            Intelligent Plumbing
          </motion.span>
        </h1>
        
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xl md:text-2xl text-navyLight/70 max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
        >
          Subscription-based predictive pipe-care by the Really Intelligent Plumbing people.
          Because emergency call-out fees are out of touch, out of date, and out of time.
        </motion.p>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="flex justify-center gap-6"
        >
          <Button variant="primary">JOIN WAITING LIST</Button>
          <Button variant="outline">HOW IT WORKS</Button>
        </motion.div>
      </div>

      {/* Phone Mockups Container */}
      <div className="relative mt-20 w-full max-w-6xl px-4 h-[600px] flex justify-center perspective-[2000px]">
        
        {/* Left Phone (Background) */}
        <motion.div 
          style={{ y: y1 }}
          animate={{ y: [20, -20, 20] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          className="absolute left-[5%] md:left-[15%] bottom-[-50px] z-0 hidden md:block"
        >
           <motion.div 
              initial={{ rotateY: -30, rotateX: 10, y: 200, opacity: 0 }}
              animate={{ rotateY: -15, rotateX: 5, y: 0, opacity: 1 }}
              transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
              className="w-[300px] h-[600px] bg-navy rounded-[3.5rem] border-[12px] border-navy shadow-2xl overflow-hidden relative"
           >
              <div className="absolute top-0 left-0 right-0 h-full bg-cream flex flex-col p-5">
                 <div className="flex justify-between items-center mb-8 mt-10 opacity-50">
                    <div className="w-10 h-10 rounded-full bg-navy/10"></div>
                    <div className="h-3 w-24 bg-navy/10 rounded-full"></div>
                 </div>
                 <div className="bg-softBlue h-40 rounded-3xl mb-4 w-full border-4 border-white shadow-sm"></div>
                 <div className="bg-white border-2 border-navy/5 h-24 rounded-2xl mb-3 w-full"></div>
                 <div className="bg-white border-2 border-navy/5 h-24 rounded-2xl mb-3 w-full"></div>
              </div>
           </motion.div>
        </motion.div>

        {/* Center Phone (Foreground) */}
        <motion.div 
          animate={{ y: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="z-10 relative bottom-[-40px]"
        >
            <motion.div 
                initial={{ y: 400, opacity: 0, rotateX: 20 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{ duration: 1, type: "spring", bounce: 0.3 }}
                whileHover={{ scale: 1.02, rotateX: 5, cursor: "grab" }}
                whileTap={{ cursor: "grabbing" }}
                className="w-[340px] h-[680px] bg-navy rounded-[4rem] border-[14px] border-navy shadow-[0_50px_100px_-20px_rgba(15,23,42,0.4)] overflow-hidden flex flex-col relative"
            >
                {/* Dynamic Island */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-8 bg-black rounded-b-2xl z-30"></div>
                
                {/* Screen Content */}
                <div className="bg-cream h-full w-full p-6 pt-14 flex flex-col">
                    <div className="flex justify-between items-center mb-8">
                         <span className="font-display text-navy text-2xl">flowstate</span>
                         <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-navy shadow-neo-sm">
                            <Activity size={20} className="text-navy" />
                         </div>
                    </div>

                    {/* Main Widget */}
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="bg-white border-4 border-navy rounded-[2rem] p-6 mb-6 shadow-neo relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-20 h-20 bg-cyan/10 rounded-bl-[100px] -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500"></div>
                        <div className="flex justify-between items-end mb-6 relative z-10">
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">System Pressure</p>
                                <h3 className="text-5xl font-bold text-navy tracking-tighter">2.4<span className="text-xl text-gray-400 ml-1">bar</span></h3>
                            </div>
                            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center border-2 border-green-500 text-green-700 font-bold shadow-[2px_2px_0px_0px_rgba(34,197,94,1)]">OK</div>
                        </div>
                        {/* Animated Chart */}
                        <div className="h-20 flex items-end justify-between gap-1.5">
                             {[40, 65, 45, 80, 50, 90, 65, 55, 75, 60].map((h, i) => (
                                 <motion.div 
                                    key={i}
                                    initial={{ height: "10%" }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ 
                                        repeat: Infinity, 
                                        repeatType: "reverse", 
                                        duration: 2, 
                                        delay: i * 0.1,
                                        ease: "easeInOut" 
                                    }}
                                    className="w-full bg-cyan rounded-t-full opacity-80"
                                 />
                             ))}
                        </div>
                    </motion.div>

                    {/* List Items */}
                    <div className="space-y-4">
                        {[
                            { icon: Droplets, color: "bg-orange-100", text: "orange-600", title: "Water Quality", sub: "Soft (85ppm)" },
                            { icon: ShieldCheck, color: "bg-blue-100", text: "blue-600", title: "Leak Detection", sub: "Monitoring Active" }
                        ].map((item, i) => (
                            <motion.div 
                                key={i}
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1 + (i * 0.2) }}
                                whileHover={{ scale: 1.02, x: 5 }}
                                className="flex items-center gap-4 bg-white p-5 rounded-3xl border-2 border-navy shadow-sm hover:shadow-neo-sm transition-all"
                            >
                                <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center ${item.text} border-2 border-navy`}>
                                    <item.icon size={20} />
                                </div>
                                <div>
                                    <p className="font-bold text-navy text-lg">{item.title}</p>
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">{item.sub}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>

        {/* Right Phone (Background) */}
        <motion.div 
          style={{ y: y2 }}
          animate={{ y: [15, -15, 15] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
          className="absolute right-[5%] md:right-[15%] bottom-[-80px] z-0 hidden md:block"
        >
             <motion.div 
                initial={{ rotateY: 30, rotateX: 10, y: 200, opacity: 0 }}
                animate={{ rotateY: 15, rotateX: 5, y: 0, opacity: 1 }}
                transition={{ duration: 1.2, type: "spring", bounce: 0.4, delay: 0.2 }}
                className="w-[300px] h-[600px] bg-navy rounded-[3.5rem] border-[12px] border-navy shadow-2xl overflow-hidden relative"
             >
              <div className="absolute top-0 left-0 right-0 h-full bg-cream flex flex-col p-5">
                 <div className="flex justify-between items-center mb-8 mt-10 opacity-50">
                    <div className="h-3 w-24 bg-navy/10 rounded-full"></div>
                    <div className="w-10 h-10 rounded-full bg-navy/10"></div>
                 </div>
                 <div className="bg-rust/20 h-48 rounded-3xl mb-4 w-full border-4 border-rust/30 border-dashed flex items-center justify-center">
                    <div className="text-rust/50 font-display text-4xl">?</div>
                 </div>
                 <div className="bg-white border-2 border-navy/5 h-24 rounded-2xl mb-3 w-full"></div>
              </div>
           </motion.div>
        </motion.div>
      </div>
    </div>
  );
};