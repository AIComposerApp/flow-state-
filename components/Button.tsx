import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', onClick }) => {
  const baseStyles = "px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase border-2 border-navy transition-colors relative overflow-hidden z-10";
  
  const variants = {
    primary: "bg-navy text-white hover:bg-navyLight",
    secondary: "bg-rust text-white hover:bg-orange-600",
    outline: "bg-transparent text-navy hover:bg-navy hover:text-white"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -4, boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
      whileTap={{ scale: 0.95, y: 0, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};