import React, { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { translations } from './data/content';

// Importujemy nasze nowe komponenty
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Development from './pages/Development';
import Interests from './pages/Interests';

// Tworzymy "magazyn" danych dostępny dla wszystkich podstron
export const AppContext = createContext();

function App() {
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState('PL');

  const t = translations[lang];
  const theme = {
    bg: isDark ? "bg-[#050810]" : "bg-slate-50",
    text: isDark ? "text-white" : "text-slate-900",
    textMuted: isDark ? "text-gray-400" : "text-slate-600",
    cardBg: isDark ? "bg-[#0b1120]" : "bg-white",
    borderColor: isDark ? "border-gray-800" : "border-slate-200",
    primary: "bg-blue-600 hover:bg-blue-700",
  };

  return (
    <AppContext.Provider value={{ isDark, setIsDark, lang, setLang, t, theme }}>
      <BrowserRouter>
        <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans selection:bg-blue-500/30 transition-colors duration-300 flex flex-col`}>
          
          {/* Globalny Baner Rekrutacyjny */}
          <div className={`${isDark ? 'bg-[#0b1120] border-gray-800' : 'bg-blue-600 border-blue-700 text-white'} border-b py-2.5 px-4 text-center text-xs sm:text-sm flex items-center justify-center gap-2 z-50`}>
            <span className="relative flex h-2 w-2 shrink-0">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isDark ? 'bg-blue-500' : 'bg-white'} opacity-75`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isDark ? 'bg-blue-500' : 'bg-white'}`}></span>
            </span>
            <span>{t.banner}</span>
          </div>

          <Navbar />
          
          <main className="flex-grow pt-12 px-6 md:px-12 max-w-7xl mx-auto w-full pb-24">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<Projects />} /> {/* Ścieżka dla detali projektu */}
              <Route path="/development" element={<Development />} />
              <Route path="/interests" element={<Interests />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;