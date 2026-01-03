
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './Button';
import { ArrowLeft, Cpu, Activity, ShieldCheck, Wrench } from 'lucide-react';

interface HowItWorksProps {
    onBack: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onBack }) => {
    const { scrollYProgress } = useScroll();
    
    // Transform scroll progress to fill the pipe path
    const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

    const steps = [
        {
            icon: Cpu,
            title: "The Clamp",
            desc: "Our non-invasive hardware clamps onto your main water pipe in minutes. No cutting, no soldering, no plumbers required.",
            color: "bg-orange-100",
            textColor: "text-orange-600",
            side: "left"
        },
        {
            icon: Activity,
            title: "The Learn",
            desc: "For the first 48 hours, FlowState's AI listens to the unique acoustic signature of your home's water usage.",
            color: "bg-cyan/10",
            textColor: "text-cyan",
            side: "right"
        },
        {
            icon: ShieldCheck,
            title: "The Watch",
            desc: "Once calibrated, we monitor pressure 24/7. We can detect a micro-leak as small as a pinhole before it causes damage.",
            color: "bg-blue-100",
            textColor: "text-blue-600",
            side: "left"
        },
        {
            icon: Wrench,
            title: "The Fix",
            desc: "If a leak is detected, we shut off the water automatically and dispatch a technician from our vetted network.",
            color: "bg-pink-100",
            textColor: "text-pink-600",
            side: "right"
        }
    ];

    return (
        <div className="bg-cream min-h-screen pt-32 pb-32 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                
                {/* Back Button */}
                <motion.button 
                    onClick={onBack}
                    whileHover={{ x: -5 }}
                    className="flex items-center gap-2 text-navy font-bold uppercase tracking-widest text-xs mb-10"
                >
                    <div className="w-8 h-8 rounded-full border-2 border-navy flex items-center justify-center bg-white shadow-neo-sm">
                        <ArrowLeft size={16} />
                    </div>
                    Back to Home
                </motion.button>

                <motion.h1 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-6xl md:text-8xl font-extrabold text-navy leading-none mb-6"
                >
                    From box to <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rust to-orange-500">peace of mind.</span>
                </motion.h1>
                
                <p className="text-2xl text-navyLight/70 font-medium max-w-2xl mb-24">
                    FlowState isn't just a sensor. It's a complete operating system for your home's plumbing infrastructure.
                </p>

                {/* Timeline Container */}
                <div className="relative">
                    
                    {/* The Pipe (Vertical Line) */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-4 -translate-x-1/2 rounded-full bg-navy/5 overflow-hidden">
                         {/* Water Fill Animation */}
                         <motion.div 
                            style={{ scaleY: pathLength, originY: 0 }}
                            className="w-full h-full bg-gradient-to-b from-cyan to-blue-600 w-full"
                         />
                    </div>

                    {/* Pipe Joints (Visual Flourish) */}
                    <div className="absolute left-8 md:left-1/2 top-0 w-8 h-8 -translate-x-1/2 bg-navy rounded-full border-4 border-cream z-20 shadow-lg"></div>
                    <div className="absolute left-8 md:left-1/2 bottom-0 w-8 h-8 -translate-x-1/2 bg-navy rounded-full border-4 border-cream z-20 shadow-lg"></div>

                    {/* Steps */}
                    <div className="space-y-24 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: step.side === 'left' ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${step.side === 'right' ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Spacer for Timeline alignment on Desktop */}
                                <div className="flex-1 hidden md:block"></div>

                                {/* Timeline Marker (Mobile: Left aligned, Desktop: Center) */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-navy flex items-center justify-center shadow-neo z-20">
                                    <span className="font-display text-xl text-navy">{index + 1}</span>
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 w-full pl-20 md:pl-0">
                                    <motion.div 
                                        whileHover={{ scale: 1.02, rotate: step.side === 'left' ? -1 : 1 }}
                                        className={`bg-white border-2 border-navy rounded-[2rem] p-8 shadow-neo relative overflow-hidden group`}
                                    >
                                        <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-[100px] -mr-6 -mt-6 transition-transform group-hover:scale-110 duration-500 ${step.color}`}></div>
                                        
                                        <div className={`w-14 h-14 rounded-full ${step.color} ${step.textColor} flex items-center justify-center border-2 border-navy mb-6 relative z-10`}>
                                            <step.icon size={28} />
                                        </div>
                                        
                                        <h3 className="text-3xl font-extrabold text-navy mb-4 relative z-10">{step.title}</h3>
                                        <p className="text-lg text-navyLight/70 font-medium relative z-10 leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-32 text-center">
                    <h2 className="text-4xl font-extrabold text-navy mb-8">Ready to get smart?</h2>
                    <Button variant="secondary" className="text-xl px-12 py-4 shadow-neo">
                        CHECK AVAILABILITY
                    </Button>
                </div>

            </div>
        </div>
    );
};
