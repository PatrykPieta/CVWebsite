import React, { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { translations } from './data/content';

// Importujemy nasze nowe komponenty
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DataFlow from './components/DataFlow';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Development from './pages/Development';
import Interests from './pages/Interests';

// Tworzymy "magazyn" danych dostępny dla wszystkich podstron
export const AppContext = createContext();

function AppContent() {
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState('PL');
  const location = useLocation();

  const t = translations[lang];
  const theme = {
    bg: isDark ? "bg-[#050810]" : "bg-slate-50",
    text: isDark ? "text-white" : "text-slate-900",
    textMuted: isDark ? "text-gray-400" : "text-slate-600",
    cardBg: isDark ? "bg-[#0b1120]" : "bg-white",
    borderColor: isDark ? "border-gray-800" : "border-slate-200",
    primary: "bg-blue-600 hover:bg-blue-700",
  };

  const pageTransition = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
    transition: { duration: 0.28, ease: 'easeOut' },
  };

  return (
    <AppContext.Provider value={{ isDark, setIsDark, lang, setLang, t, theme }}>
      <div className={`relative min-h-screen ${theme.bg} ${theme.text} font-sans selection:bg-blue-500/30 transition-colors duration-300 flex flex-col overflow-hidden`}>
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background: isDark
              ? 'radial-gradient(circle at 15% 30%, rgba(37,99,235,0.16), transparent 18%), radial-gradient(circle at 82% 72%, rgba(168,85,247,0.12), transparent 24%), linear-gradient(180deg, rgba(2,6,23,0.30), rgba(2,6,23,0.10))'
              : 'radial-gradient(circle at 15% 30%, rgba(96,165,250,0.16), transparent 18%), radial-gradient(circle at 82% 72%, rgba(168,85,247,0.10), transparent 24%), linear-gradient(180deg, rgba(248,250,252,0.25), rgba(248,250,252,0.05))'
          }}
        />
        <div className="pointer-events-none absolute inset-0 z-0 opacity-20 blur-3xl">
          <div className={isDark ? 'h-full w-full bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.30),_transparent_35%)]' : 'h-full w-full bg-[radial-gradient(circle_at_center,_rgba(96,165,250,0.25),_transparent_35%)]'} />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <div className={`${isDark ? 'bg-[#0b1120] border-gray-800' : 'bg-blue-600 border-blue-700 text-white'} border-b py-2.5 px-4 text-center text-xs sm:text-sm flex items-center justify-center gap-2 z-50`}>
            <span className="relative flex h-2 w-2 shrink-0">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isDark ? 'bg-blue-500' : 'bg-white'} opacity-75`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isDark ? 'bg-blue-500' : 'bg-white'}`}></span>
            </span>
            <span>{t.banner}</span>
          </div>

          <Navbar />

          <main className="flex-grow pt-12 px-6 md:px-12 max-w-7xl mx-auto w-full pb-24">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<motion.div {...pageTransition}><Home /></motion.div>} />
                <Route path="/experience" element={<motion.div {...pageTransition}><Experience /></motion.div>} />
                <Route path="/projects" element={<motion.div {...pageTransition}><Projects /></motion.div>} />
                <Route path="/projects/:id" element={<motion.div {...pageTransition}><Projects /></motion.div>} />
                <Route path="/development" element={<motion.div {...pageTransition}><Development /></motion.div>} />
                <Route path="/interests" element={<motion.div {...pageTransition}><Interests /></motion.div>} />
              </Routes>
            </AnimatePresence>
          </main>

          <Footer />
        </div>
      </div>
    </AppContext.Provider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;