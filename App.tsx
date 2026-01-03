import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { DataSection } from './components/DataSection';
import { LayersSection } from './components/LayersSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-cream min-h-screen font-sans antialiased selection:bg-cyan selection:text-white overflow-hidden">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        
        {/* Middle decorative text section */}
        <div className="bg-white py-32 text-center px-6 -mt-10 pt-40 relative z-10 border-t-2 border-navy">
             <div className="inline-block border-2 border-navy rounded-full px-5 py-2 text-xs font-bold text-navy bg-cream shadow-neo-sm mb-8 uppercase tracking-widest transform -rotate-1">
                Insurance doesn't care about your sump pump
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold text-navy mb-10 tracking-tight leading-[1.1]">
                Monitoring your pipes <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-600">thousands of times a day</span>
            </h2>
            <p className="max-w-4xl mx-auto text-navyLight/70 text-2xl font-medium leading-relaxed">
                FlowState cares about you all the time. It collects billions of data points and uses advanced machine intelligence to learn about your home's water usage, targeting leak risks before they become a flood.
            </p>
        </div>
        
        <DataSection />
        <LayersSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;