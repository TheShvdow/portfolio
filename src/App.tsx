import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { HeroBanner } from './components/sections/hero/HeroBanner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <ThemeToggle />
        <HeroBanner />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;