import React, { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AppContext } from '../App';

export default function Navbar() {
  const { isDark, setIsDark, lang, setLang, t, theme } = useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Funkcja stylizująca aktywne linki
  const getLinkClass = ({ isActive }) => 
    isActive ? 'text-blue-500' : `${theme.textMuted} hover:text-blue-400 transition-colors`;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`sticky top-0 w-full z-40 ${isDark ? 'bg-[#050810]/90 border-gray-800' : 'bg-white/90 border-slate-200'} backdrop-blur-md border-b`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Usunięty DataCraft, dodane Twoje Imię i Nazwisko */}
        <Link to="/" onClick={closeMenu} className="text-xl font-bold tracking-widest flex items-center gap-2 hover:text-blue-500 transition-colors">
          Patryk Pięta
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <NavLink to="/" className={getLinkClass}>{t.nav.home}</NavLink>
          <NavLink to="/experience" className={getLinkClass}>{t.nav.exp}</NavLink>
          <NavLink to="/projects" className={getLinkClass}>{t.nav.projects}</NavLink>
          <NavLink to="/development" className={getLinkClass}>{t.nav.dev}</NavLink>
          <NavLink to="/interests" className={getLinkClass}>{t.nav.interests}</NavLink>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <button onClick={() => setLang(lang === 'PL' ? 'EN' : 'PL')} className={`font-bold text-sm ${theme.textMuted} hover:text-blue-500 w-8`}>
            {lang}
          </button>
          <button onClick={() => setIsDark(!isDark)} className={`p-2 rounded-full ${isDark ? 'bg-gray-800' : 'bg-slate-100'} ${theme.textMuted} hover:text-blue-500`}>
            {isDark ? '☀️' : '🌙'}
          </button>
          
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-blue-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`absolute top-full left-0 w-full ${theme.cardBg} border-b ${theme.borderColor} flex flex-col py-4 px-6 gap-4 shadow-xl z-50 lg:hidden`}>
            <NavLink to="/" onClick={closeMenu} className={getLinkClass}>{t.nav.home}</NavLink>
            <NavLink to="/experience" onClick={closeMenu} className={getLinkClass}>{t.nav.exp}</NavLink>
            <NavLink to="/projects" onClick={closeMenu} className={getLinkClass}>{t.nav.projects}</NavLink>
            <NavLink to="/development" onClick={closeMenu} className={getLinkClass}>{t.nav.dev}</NavLink>
            <NavLink to="/interests" onClick={closeMenu} className={getLinkClass}>{t.nav.interests}</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}