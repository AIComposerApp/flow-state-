import React, { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';

export const LayersSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
    
  const layers = [
    { color: '#F97316', text: 'Emergency Coverage', icon: '🚨' }, 
    { color: '#0F172A', text: 'Hardware Sensors', icon: '📡' },   
    { color: '#06B6D4', text: 'AI Diagnostics', icon: '🧠' },     
    { color: '#FFF8F0', text: 'Yearly Maintenance', icon: '🔧' }, 
    { color: '#3B82F6', text: 'Water Filtration', icon: '💧' },   
  ];

  return (
    <SectionWrapper className="bg-white z-40 pb-40">
       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
            
            {/* Text Content */}
            <div className="order-2 md:order-1">
                <div className="inline-block border-2 border-navy rounded-full px-4 py-1 text-xs font-bold text-navy/60 mb-6 uppercase tracking-wider">
                    Full Stack Hydro-Care
                </div>
                <h2 className="text-5xl md:text-6xl font-extrabold text-navy mb-8 leading-tight">
                    Five vertically <br/>
                    integrated layers
                </h2>
                <p className="text-navyLight/70 text-xl mb-6 font-medium leading-relaxed">
                    With FlowState, you'll get five layers of full-stack, vertically integrated plumbing protection. Four are dynamic subscription-based predictive layers, covering pretty much everything you'll ever need.
                </p>
                <p className="text-navyLight/70 text-lg">
                    Only the top layer is traditional insurance -- that's for those rare "once or twice in a lifetime" pipe bursts. FlowState covers all your water needs from the little drips to the really big floods, all in one place.
                </p>
            </div>

            {/* The Interactive Stack Visual */}
            <div 
                className="order-1 md:order-2 flex items-center justify-center h-[600px] perspective-[1000px] cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative w-80 h-80 preserve-3d">
                    {layers.map((layer, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: -40 * index, x: 0, rotateX: 55, rotateZ: -45, opacity: 0 }}
                            whileInView={{ 
                                y: -40 * index, 
                                opacity: 1,
                                rotateX: 55, 
                                rotateZ: -45 
                            }}
                            animate={isHovered ? {
                                y: -90 * index + 100, // Explode upwards
                                x: 20 * index,
                                rotateX: 50,
                                rotateZ: -45,
                                scale: 1.05
                            } : {
                                y: -40 * index,
                                x: 0,
                                rotateX: 55, 
                                rotateZ: -45,
                                scale: 1
                            }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ 
                                type: "spring", 
                                stiffness: 300, 
                                damping: 20, 
                                delay: isHovered ? index * 0.05 : 0 
                            }}
                            className="absolute top-0 left-0 w-full h-full rounded-[2.5rem] border-[3px] border-navy shadow-[10px_10px_0px_rgba(15,23,42,0.2)] flex items-center justify-center transition-colors duration-300 group"
                            style={{ 
                                backgroundColor: layer.color,
                                zIndex: layers.length - index,
                            }}
                        >
                            {/* Layer Side Thickness Effect */}
                            <div className="absolute inset-0 rounded-[2.5rem] border-[3px] border-navy opacity-20 translate-y-2 translate-x-2 pointer-events-none"></div>

                            {/* Inner content */}
                            <div className={`transform rotate-45 -rotate-x-50 flex flex-col items-center gap-2 ${layer.color === '#0F172A' || layer.color === '#3B82F6' ? 'text-white' : 'text-navy'}`}>
                                <div className="text-5xl drop-shadow-md">{layer.icon}</div>
                                <motion.div 
                                    className="font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity"
                                    animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                                >
                                    {layer.text}
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                    
                    {/* Floating hint */}
                    <motion.div 
                        animate={{ opacity: isHovered ? 0 : 1, y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute -bottom-20 left-10 text-navy/40 font-bold text-sm tracking-widest uppercase"
                    >
                        Hover to inspect layers
                    </motion.div>
                </div>
            </div>
       </div>
    </SectionWrapper>
  );
};