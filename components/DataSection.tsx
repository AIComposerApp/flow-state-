import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { motion } from 'framer-motion';
import { LineChart, Line, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';
import { Flame, Waves, Wrench, ThermometerSun } from 'lucide-react';

// Mock Data
const pressureData = [
  { time: '00:00', val: 2.1 }, { time: '04:00', val: 2.0 }, { time: '08:00', val: 3.5 },
  { time: '12:00', val: 2.8 }, { time: '16:00', val: 3.2 }, { time: '20:00', val: 4.1 },
  { time: '23:59', val: 2.2 },
];

const mineralData = [
    { name: 'Calcium', value: 400 },
    { name: 'Magnesium', value: 300 },
    { name: 'Sodium', value: 100 },
];
const COLORS = ['#06B6D4', '#3B82F6', '#93C5FD'];

const Card = ({ children, className, delay = 0, title, color = "bg-white" }: any) => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay, duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
        whileHover={{ scale: 1.02, y: -5, boxShadow: "8px 8px 0px 0px rgba(15,23,42,1)", zIndex: 10 }}
        className={`rounded-3xl border-2 border-navy p-5 overflow-hidden relative shadow-sm transition-shadow ${className} ${color}`}
    >
        {title && <div className="text-[10px] font-extrabold text-navy/60 uppercase mb-3 tracking-wider flex justify-between items-center">
            {title}
            <div className="w-2 h-2 rounded-full bg-navy/20"></div>
        </div>}
        {children}
    </motion.div>
);

export const DataSection: React.FC = () => {
  return (
    <SectionWrapper className="bg-cream z-30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-block border-2 border-navy rounded-full px-6 py-2 text-xs font-bold text-navy bg-white shadow-neo-sm mb-6 uppercase tracking-widest"
            >
                Artificial Intelligence Throughout
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-extrabold text-navy mb-8 tracking-tight">
                Multiple layers of <br/>
                <span className="font-display text-transparent bg-clip-text bg-gradient-to-r from-rust to-orange-500">Intelligent Plumbing</span>
            </h2>
            <p className="max-w-3xl mx-auto text-navyLight/70 text-xl font-medium leading-relaxed">
                FlowState has multiple layers of seamlessly connected intelligent hardware, all built on the foundation of an intelligent app that uses billions of data points to identify leak risks before they become a problem.
            </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 gap-4 h-auto md:h-[800px]">
            
            {/* 1. Main Pressure Chart (Large) */}
            <Card className="col-span-2 row-span-2 bg-pink-50" title="System Pressure" delay={0.0}>
                 <div className="flex items-end gap-2 mb-6">
                     <span className="text-6xl font-extrabold text-navy tracking-tighter">2.4</span>
                     <span className="text-lg font-bold text-navy/40 mb-2">bar</span>
                     <span className="ml-auto bg-green-200 text-green-800 text-xs px-3 py-1 rounded-full border border-green-400 font-bold">OPTIMAL</span>
                 </div>
                 <div className="h-[220px] w-full -ml-2">
                    <ResponsiveContainer width="102%" height="100%">
                        <LineChart data={pressureData}>
                            <Line 
                                type="natural" 
                                dataKey="val" 
                                stroke="#0F172A" 
                                strokeWidth={4} 
                                dot={{r: 6, fill: '#FFFFFF', stroke:'#0F172A', strokeWidth: 3}} 
                                activeDot={{r: 8, fill: '#06B6D4'}}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                 </div>
            </Card>

            {/* 2. Water Hardness (Square) */}
            <Card className="col-span-1 row-span-1 bg-cyan/10" title="Water Hardness" delay={0.1}>
                 <div className="flex items-center justify-center h-full relative">
                    <div className="text-center z-10">
                        <div className="text-4xl font-extrabold text-navy">120</div>
                        <div className="text-sm font-bold text-navy/60">ppm</div>
                    </div>
                     <ResponsiveContainer width="120%" height={120} className="absolute -bottom-4 -left-4 opacity-40">
                        <AreaChart data={pressureData}>
                            <Area type="monotone" dataKey="val" stroke="none" fill="#06B6D4" />
                        </AreaChart>
                     </ResponsiveContainer>
                 </div>
            </Card>

            {/* 3. Usage Stats (Wide) */}
            <Card className="col-span-1 row-span-1 bg-orange-50" title="Usage Today" delay={0.2}>
                 <div className="flex flex-col h-full justify-between pb-2">
                     <div className="text-4xl font-extrabold text-rust">429 <span className="text-sm text-navy/40 ml-1">Liters</span></div>
                     <div className="w-full bg-white border border-navy/10 h-4 rounded-full overflow-hidden p-0.5">
                        <motion.div 
                            initial={{ width: 0 }} 
                            whileInView={{ width: '60%' }} 
                            transition={{ duration: 1, delay: 0.5 }}
                            className="bg-rust h-full rounded-full" 
                        />
                     </div>
                 </div>
            </Card>

            {/* 4. Pipe Health (Tall) */}
            <Card className="col-span-1 row-span-2 bg-white" title="Pipe Health" delay={0.3}>
                <div className="flex flex-col items-center justify-center h-full gap-6">
                    <div className="relative w-40 h-40">
                         <ResponsiveContainer>
                            <PieChart>
                                <Pie data={mineralData} innerRadius={50} outerRadius={70} paddingAngle={4} dataKey="value" stroke="none">
                                    {mineralData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                            <span className="text-3xl font-extrabold text-navy">98%</span>
                            <span className="text-[10px] uppercase font-bold text-navy/40">Integrity</span>
                        </div>
                    </div>
                    <div className="text-center bg-gray-50 rounded-xl p-3 w-full border border-gray-100">
                        <div className="text-sm font-bold text-navy">Copper Piping</div>
                        <div className="text-xs text-navy/50">Installed 1998</div>
                    </div>
                </div>
            </Card>

            {/* 5. Temperature */}
            <Card className="col-span-1 row-span-1 bg-blue-50" title="Boiler Output" delay={0.4}>
                 <div className="flex flex-col justify-center h-full">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="bg-white p-2 rounded-full shadow-sm text-orange-500"><ThermometerSun size={20} /></div>
                        <span className="text-sm font-bold text-navy/60">Heating</span>
                    </div>
                    <span className="text-4xl font-extrabold text-navy">65°C</span>
                 </div>
            </Card>

             {/* 6. Leak Sensor (Wide) */}
             <Card className="col-span-2 row-span-1 bg-green-50" title="Active Sensors" delay={0.5}>
                 <div className="grid grid-cols-3 gap-2 h-full items-center">
                    {['Kitchen', 'Bathroom', 'Basement'].map((room, i) => (
                        <div key={room} className="bg-white/60 rounded-xl p-3 flex flex-col items-center gap-2 border border-green-100">
                             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                             <span className="font-bold text-navy text-xs">{room}</span>
                        </div>
                    ))}
                 </div>
            </Card>

             {/* 7. Last Check */}
             <Card className="col-span-2 md:col-span-1 row-span-1 bg-cream border-dashed border-navy/30" title="Last Audit" delay={0.6}>
                 <div className="flex flex-col justify-center h-full">
                     <span className="font-bold text-navy text-lg">Thursday 16th</span>
                     <div className="flex items-center gap-2 text-navy/50 text-sm mt-1">
                        <Wrench size={14} />
                        <span>System Check</span>
                     </div>
                 </div>
            </Card>
            
            {/* 8. Illustration */}
            <Card className="hidden md:block col-span-1 row-span-1 bg-navy text-white overflow-visible" delay={0.7}>
                <div className="h-full flex items-center justify-center relative">
                     <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                     >
                        <Waves size={64} className="text-cyan drop-shadow-lg" />
                     </motion.div>
                     <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-50"></div>
                </div>
            </Card>

        </div>
      </div>
    </SectionWrapper>
  );
};