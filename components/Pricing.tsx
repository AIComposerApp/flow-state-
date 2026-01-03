
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { Check, ArrowLeft, Star, Zap, Shield, HelpCircle } from 'lucide-react';

interface PricingProps {
  onBack: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onBack }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: "Monitoring",
      price: billingCycle === 'monthly' ? "15" : "12",
      period: "/mo",
      description: "Essential leak detection for peace of mind.",
      features: ["24/7 Pressure Monitoring", "Instant Leak Alerts", "Weekly Usage Reports", "DIY Installation Support"],
      icon: Zap,
      color: "bg-white",
      highlight: false
    },
    {
      name: "Protection",
      price: billingCycle === 'monthly' ? "35" : "29",
      period: "/mo",
      description: "Full auto-shutoff and dispatch coverage.",
      features: ["Everything in Monitoring", "Auto-Shutoff Hardware", "Free Technician Dispatch", "Insurance Certificate", "AI Water Analysis"],
      icon: Star,
      color: "bg-navy text-white", // Dark theme for popular card
      highlight: true
    },
    {
      name: "Estate",
      price: "Custom",
      period: "",
      description: "For large properties and multiple units.",
      features: ["Multi-zone Monitoring", "Dedicated Account Manager", "API Access", "Priority 24/7 Support", "Custom Integration"],
      icon: Shield,
      color: "bg-white",
      highlight: false
    }
  ];

  return (
    <div className="bg-cream min-h-screen pt-32 pb-32 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-cyan/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-rust/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
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

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-[10px] font-bold mb-6 border border-blue-200 uppercase tracking-wider"
                >
                    <Star size={12} fill="currentColor" />
                    <span>30-Day Money Back Guarantee</span>
                </motion.div>

                <motion.h1 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-5xl md:text-7xl font-extrabold text-navy mb-6 tracking-tight"
                >
                    Simple pricing. <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-600">No hidden leaks.</span>
                </motion.h1>
                <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-navyLight/70 font-medium"
                >
                    Choose the plan that fits your home. Upgrade or cancel anytime.
                </motion.p>

                {/* Billing Toggle */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center justify-center gap-4 mt-10"
                >
                    <span className={`font-bold text-sm transition-colors ${billingCycle === 'monthly' ? 'text-navy' : 'text-navy/40'}`}>Monthly</span>
                    <div 
                        onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly')}
                        className="w-16 h-8 bg-white border-2 border-navy rounded-full p-1 cursor-pointer flex items-center relative shadow-neo-sm transition-all hover:shadow-neo hover:-translate-y-0.5"
                    >
                        <motion.div 
                            layout
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            className={`w-5 h-5 rounded-full border-2 border-navy ${billingCycle === 'yearly' ? 'bg-rust' : 'bg-navy'} absolute`}
                            style={{ left: billingCycle === 'monthly' ? '4px' : 'calc(100% - 24px)' }}
                        />
                    </div>
                    <span className={`font-bold text-sm transition-colors ${billingCycle === 'yearly' ? 'text-navy' : 'text-navy/40'}`}>
                        Yearly <span className="text-rust text-xs ml-1 bg-orange-100 px-2 py-0.5 rounded-full border border-orange-200">-17%</span>
                    </span>
                </motion.div>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 items-start">
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 + (index * 0.1), type: "spring", stiffness: 100 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className={`
                            relative rounded-[2.5rem] p-8 border-[3px] border-navy flex flex-col h-full
                            ${plan.highlight ? 'bg-navy text-white shadow-neo' : 'bg-white text-navy shadow-neo-sm hover:shadow-neo'}
                            transition-all duration-300
                        `}
                    >
                        {plan.highlight && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan text-white px-4 py-1 rounded-full font-bold text-xs uppercase tracking-widest border-2 border-navy shadow-sm">
                                Most Popular
                            </div>
                        )}

                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border-2 border-navy ${plan.highlight ? 'bg-white/10 text-cyan' : 'bg-orange-50 text-rust'}`}>
                            <plan.icon size={24} />
                        </div>

                        <h3 className="text-2xl font-extrabold mb-2">{plan.name}</h3>
                        <p className={`text-sm font-medium mb-8 ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>{plan.description}</p>

                        <div className="mb-8 relative">
                            <span className="text-5xl font-display tracking-tight">${plan.price}</span>
                            <span className={`text-lg font-bold ${plan.highlight ? 'text-gray-400' : 'text-gray-400'}`}>{plan.period}</span>
                            
                            {/* Animated line through old price if toggle switched? Optional delight detail */}
                            {billingCycle === 'yearly' && plan.price !== "Custom" && (
                                <motion.div 
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="absolute -top-4 left-0 text-sm line-through opacity-50 font-bold"
                                >
                                    ${parseInt(plan.price) * 1.2}
                                </motion.div>
                            )}
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className={`mt-1 min-w-[20px] h-5 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-cyan text-navy' : 'bg-green-100 text-green-700'}`}>
                                        <Check size={12} strokeWidth={4} />
                                    </div>
                                    <span className={`text-sm font-bold ${plan.highlight ? 'text-gray-300' : 'text-navy/80'}`}>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Button 
                            variant={plan.highlight ? 'secondary' : 'primary'} 
                            className={`w-full ${plan.highlight ? 'shadow-none' : ''}`}
                        >
                            Choose Plan
                        </Button>
                    </motion.div>
                ))}
            </div>
            
            {/* FAQ Teaser */}
            <div className="mt-24 max-w-2xl mx-auto bg-white border-2 border-navy rounded-[2rem] p-8 text-center shadow-neo-sm">
                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-navy text-blue-600">
                    <HelpCircle size={24} />
                 </div>
                 <h3 className="text-2xl font-bold text-navy mb-2">Have questions?</h3>
                 <p className="text-navy/60 mb-6">Our support team is available 24/7 to help you choose the right sensor setup for your home.</p>
                 <a href="#" className="text-rust font-bold uppercase tracking-widest text-sm hover:underline decoration-2 underline-offset-4">Contact Sales</a>
            </div>

        </div>
    </div>
  );
};
