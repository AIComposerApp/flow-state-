import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`relative -mt-12 pt-16 pb-20 rounded-t-[3rem] border-t-2 border-navy shadow-[0_-10px_40px_rgba(0,0,0,0.05)] ${className}`}>
      {children}
    </section>
  );
};