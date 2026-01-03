
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Check, Lock, MapPin, Mail, User } from 'lucide-react';
import { Button } from './Button';

interface JoinWaitlistProps {
  onBack: () => void;
}

export const JoinWaitlist: React.FC<JoinWaitlistProps> = ({ onBack }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({ name: '', email: '', postcode: '' });
  const [progress, setProgress] = useState(0);

  // Calculate progress based on filled fields for the "pipe fill" animation
  useEffect(() => {
    let filled = 0;
    if (formData.name.length > 2) filled += 33;
    if (formData.email.includes('@')) filled += 33;
    if (formData.postcode.length > 3) filled += 34;
    setProgress(filled);
  }, [formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setStep('success'), 500);
  };

  return (
    <div className="bg-cream min-h-screen pt-32 pb-20 relative overflow-hidden flex flex-col">
      {/* Background Animated Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
         <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -right-[20%] w-[80vw] h-[80vw] border-[3px] border-dashed border-navy/5 rounded-full"
         />
         <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[20%] -left-[20%] w-[60vw] h-[60vw] border-[3px] border-dashed border-rust/10 rounded-full"
         />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 flex-1 flex flex-col">
        <motion.button 
            onClick={onBack}
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-navy font-bold uppercase tracking-widest text-xs mb-8 w-fit"
        >
            <div className="w-8 h-8 rounded-full border-2 border-navy flex items-center justify-center bg-white shadow-neo-sm">
                <ArrowLeft size={16} />
            </div>
            Back to Home
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center flex-1">
            
            {/* Left Column: Copy */}
            <div className="order-2 lg:order-1">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 bg-rust text-white px-4 py-1.5 rounded-full text-xs font-bold mb-6 border-2 border-navy shadow-neo-sm uppercase tracking-wider"
                >
                    <Lock size={12} />
                    <span>Limited Early Access</span>
                </motion.div>
                
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-extrabold text-navy mb-6 tracking-tight leading-[0.95]"
                >
                    Don't let your <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-600">luck run dry.</span>
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-navyLight/70 font-medium mb-12 max-w-md leading-relaxed"
                >
                    We are currently rolling out to select postcodes. Secure your spot on the priority list and get 3 months of free monitoring when we launch in your area.
                </motion.p>

                {/* Live Counter Mockup */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white border-2 border-navy rounded-2xl p-4 flex items-center gap-4 shadow-neo-sm max-w-sm"
                >
                    <div className="flex -space-x-3">
                        {[1,2,3,4].map(i => (
                             <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-navy/50">
                                <User size={16} />
                             </div>
                        ))}
                    </div>
                    <div>
                        <div className="text-2xl font-extrabold text-navy leading-none">1,429</div>
                        <div className="text-xs font-bold text-rust uppercase tracking-wider">People joined this week</div>
                    </div>
                </motion.div>
            </div>

            {/* Right Column: Form / Success Card */}
            <div className="order-1 lg:order-2 perspective-[1000px] h-[500px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {step === 'form' ? (
                        <motion.form
                            key="form"
                            initial={{ rotateY: 90, opacity: 0 }}
                            animate={{ rotateY: 0, opacity: 1 }}
                            exit={{ rotateY: -90, opacity: 0 }}
                            transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                            className="w-full max-w-md bg-white border-[3px] border-navy rounded-[2.5rem] p-8 shadow-neo relative overflow-hidden"
                            onSubmit={handleSubmit}
                        >
                            {/* Decorative Pipe on top */}
                            <div className="absolute top-0 left-0 right-0 h-2 bg-gray-100">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    className="h-full bg-cyan transition-all duration-500 ease-out"
                                />
                            </div>

                            <h3 className="text-2xl font-extrabold text-navy mb-6 mt-2">Get on the list</h3>
                            
                            <div className="space-y-4 mb-8">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-navy uppercase ml-4">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/40" size={18} />
                                        <input 
                                            type="text" 
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            className="w-full bg-cream border-2 border-navy rounded-xl py-3 pl-12 pr-4 font-bold text-navy focus:outline-none focus:shadow-neo-sm transition-shadow placeholder:text-navy/20"
                                            placeholder="Sammy Plumber"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-navy uppercase ml-4">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/40" size={18} />
                                        <input 
                                            type="email" 
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            className="w-full bg-cream border-2 border-navy rounded-xl py-3 pl-12 pr-4 font-bold text-navy focus:outline-none focus:shadow-neo-sm transition-shadow placeholder:text-navy/20"
                                            placeholder="sammy@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-navy uppercase ml-4">Postcode</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/40" size={18} />
                                        <input 
                                            type="text" 
                                            required
                                            value={formData.postcode}
                                            onChange={(e) => setFormData({...formData, postcode: e.target.value})}
                                            className="w-full bg-cream border-2 border-navy rounded-xl py-3 pl-12 pr-4 font-bold text-navy focus:outline-none focus:shadow-neo-sm transition-shadow placeholder:text-navy/20"
                                            placeholder="SW1A 1AA"
                                        />
                                    </div>
                                </div>
                            </div>

                            <Button className="w-full justify-center">Secure Spot</Button>
                        </motion.form>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ rotateY: 90, opacity: 0 }}
                            animate={{ rotateY: 0, opacity: 1 }}
                            transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                            className="w-full max-w-md"
                        >
                            {/* The Golden Ticket */}
                            <div className="bg-navy rounded-[2rem] border-[4px] border-rust p-8 shadow-neo text-cream relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                                {/* Ticket cutout circles */}
                                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-cream rounded-full"></div>
                                <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-cream rounded-full"></div>
                                
                                {/* Background pattern */}
                                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-rust to-transparent"></div>

                                <div className="flex justify-between items-start mb-8">
                                    <span className="font-display text-2xl">flowstate</span>
                                    <div className="bg-rust text-navy font-bold px-3 py-1 rounded text-xs uppercase">Priority Pass</div>
                                </div>

                                <div className="text-center py-6 border-y-2 border-dashed border-white/20 mb-6">
                                    <div className="text-xs font-bold text-white/50 uppercase tracking-widest mb-2">Waitlist Position</div>
                                    <div className="text-5xl font-display text-cyan tracking-tighter shadow-black drop-shadow-md">
                                        #8,492
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 bg-white/10 p-3 rounded-xl border border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-navy shrink-0">
                                        <Check size={20} strokeWidth={4} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm">You're on the list!</div>
                                        <div className="text-xs text-white/60">We'll email you when ready.</div>
                                    </div>
                                </div>

                                {/* Shine Effect */}
                                <motion.div 
                                    initial={{ x: '-100%' }}
                                    animate={{ x: '200%' }}
                                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                                    className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
                                />
                            </div>

                            <motion.p 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                                className="text-center mt-8 text-navy/60 font-bold text-sm"
                            >
                                Check your inbox for confirmation.
                            </motion.p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
      </div>
    </div>
  );
};
