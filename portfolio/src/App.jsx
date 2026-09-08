import React, { useState } from 'react';
import { ArrowRight, Download, Terminal, Database, Server, Code, ExternalLink, Briefcase, Award, Zap } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-darkBg text-white font-sans selection:bg-primary selection:text-white pb-20">
      {/* Nawigacja */}
      <nav className="flex justify-between items-center p-6 lg:px-20 border-b border-gray-800">
        <div 
          className="text-xl font-bold tracking-wider flex items-center gap-2 cursor-pointer"
          onClick={() => setActiveTab('home')}
        >
          <Terminal className="text-primary" size={24} />
          <span>PORTFOLIO</span>
        </div>
        <ul className="hidden md:flex gap-8 text-sm text-gray-400">
          <li 
            className={`cursor-pointer transition ${activeTab === 'home' ? 'text-primary font-medium' : 'hover:text-white'}`}
            onClick={() => setActiveTab('home')}
          >
            Home
          </li>
          <li 
            className={`cursor-pointer transition ${activeTab === 'experience' ? 'text-primary font-medium' : 'hover:text-white'}`}
            onClick={() => setActiveTab('experience')}
          >
            Doświadczenie & Skille
          </li>
          <li 
            className={`cursor-pointer transition ${activeTab === 'projects' ? 'text-primary font-medium' : 'hover:text-white'}`}
            onClick={() => setActiveTab('projects')}
          >
            Projekty
          </li>
        </ul>
        <button className="bg-primary hover:bg-indigo-500 text-white px-5 py-2 rounded-lg text-sm font-semibold transition">
          Kontakt
        </button>
      </nav>
      {/* Informacja o rozbudowie strony */}
      <div className="bg-primary/10 border-y border-primary/20 py-2.5 px-6 text-center text-xs sm:text-sm text-gray-300 flex items-center justify-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <span>Strona w trakcie aktywnej rozbudowy pod kątem rekrutacji (Data Engineering & SQL). Wkrótce kolejne aktualizacje!</span>
      </div>

      {/* ZAKŁADKA 1: HOME */}
      {activeTab === 'home' && (
        <main className="flex flex-col-reverse md:flex-row items-center justify-between p-6 lg:px-20 mt-10 md:mt-20 animate-in fade-in duration-500">
          <div className="md:w-1/2 space-y-6">
            <p className="text-primary font-medium tracking-wide uppercase text-sm flex items-center gap-2">
              <Database size={16} /> Technology for Industry 4.0 Student
            </p>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
              Buduję <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                rozwiązania oparte na danych.
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
              Łączę świat systemów przemysłowych z nowoczesnym oprogramowaniem. Projektuję zautomatyzowane przepływy danych (Python, SQL, Apache Spark) i przekładam wymagania biznesowe na wydajne rozwiązania.
            </p>
            
            <div className="flex gap-4 pt-4">
              <button 
                onClick={() => setActiveTab('projects')}
                className="flex items-center gap-2 bg-primary hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold transition shadow-lg shadow-primary/30"
              >
                Zobacz projekty <ArrowRight size={18} />
              </button>
              <button className="flex items-center gap-2 border border-gray-700 hover:border-gray-500 text-white px-6 py-3 rounded-xl font-semibold transition">
                Pobierz CV <Download size={18} />
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-gray-800 to-gray-900 border border-gray-700 shadow-2xl flex items-center justify-center relative overflow-hidden">
              <span className="text-gray-500 text-sm">[Twoje Zdjęcie Profilowe]</span>
            </div>
          </div>
        </main>
      )}

      {/* ZAKŁADKA 2: DOŚWIADCZENIE I SKILLE */}
      {activeTab === 'experience' && (
        <section className="p-6 lg:px-20 mt-10 animate-in fade-in duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Oś czasu - Doświadczenie */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="text-primary" size={28} />
                <h2 className="text-3xl font-bold">Doświadczenie</h2>
              </div>
              
              <div className="space-y-8 border-l border-gray-800 ml-3 pl-6">
                <div className="relative">
                  <div className="absolute -left-[31px] bg-darkBg p-1"><div className="w-3 h-3 bg-primary rounded-full"></div></div>
                  <h3 className="text-xl font-bold text-white">Intern (Application Development)</h3>
                  <p className="text-primary font-medium text-sm mb-2">PGE Polish Energy Group | 07.2026 - Obecnie</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Rozwój aplikacji webowej do wyszukiwania historycznych postępowań przetargowych. Implementacja zautomatyzowanych rozwiązań do masowej konwersji dokumentów i przesyłania danych (Bulk Data Uploading).
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] bg-darkBg p-1"><div className="w-3 h-3 bg-gray-600 rounded-full"></div></div>
                  <h3 className="text-xl font-bold text-white">Maintenance Intern</h3>
                  <p className="text-gray-400 font-medium text-sm mb-2">Schneider Electric | 07.2025 - 09.2025</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Analiza KPI (SIM meetings), inwentaryzacja części zamiennych dla ciągłości utrzymania ruchu oraz aktualizacja procedur bezpieczeństwa LOTO.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] bg-darkBg p-1"><div className="w-3 h-3 bg-gray-600 rounded-full"></div></div>
                  <h3 className="text-xl font-bold text-white">Maintenance Intern</h3>
                  <p className="text-gray-400 font-medium text-sm mb-2">VelvetCare | 07.2024 - 09.2024</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Wsparcie techniczne w nadzorze nad liniami produkcyjnymi oraz pomoc przy naprawach mechanicznych.
                  </p>
                </div>
              </div>
            </div>

            {/* Skille i Certyfikaty */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Zap className="text-purple-400" size={28} />
                <h2 className="text-3xl font-bold">Umiejętności</h2>
              </div>
              <div className="flex flex-wrap gap-3 mb-12">
                {['Python', 'SQL', 'NoSQL', 'Apache Spark', 'Kafka', 'Airflow', 'ETL', 'Power BI', 'Matlab/Simulink', 'SolidWorks', 'Digital Twin', 'Advanced Excel'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-cardBg border border-gray-800 text-gray-200 rounded-lg text-sm font-medium hover:border-purple-400 transition cursor-default">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 mb-8">
                <Award className="text-primary" size={28} />
                <h2 className="text-3xl font-bold">Certyfikaty</h2>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-cardBg border border-gray-800 rounded-xl">
                  <h4 className="font-bold text-white mb-1">IBM Data Engineering Professional Certificate</h4>
                  <p className="text-gray-400 text-xs">Coursera | Kompletny cykl życia danych: Linux, Python, Big Data (Spark/Hadoop) & Machine Learning.</p>
                </div>
                <div className="p-4 bg-cardBg border border-gray-800 rounded-xl">
                  <h4 className="font-bold text-white mb-1">Adobe Content Creator</h4>
                  <p className="text-gray-400 text-xs">Coursera, Adobe</p>
                </div>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* ZAKŁADKA 3: PROJEKTY */}
      {activeTab === 'projects' && (
        <section className="p-6 lg:px-20 mt-10 animate-in fade-in duration-500">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Moje projekty</h2>
            <div className="h-[1px] bg-gray-800 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cardBg border border-gray-800 rounded-2xl p-8 hover:border-primary transition duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-gray-800/50 rounded-lg text-primary">
                  <Database size={28} />
                </div>
                <div className="flex gap-3 text-gray-400">
                  <Code size={20} className="hover:text-white cursor-pointer transition" />
                  <ExternalLink size={20} className="hover:text-white cursor-pointer transition" />
                </div>
              </div>
              <div className="mb-4 bg-gray-900 rounded-xl h-48 border border-gray-800 flex items-center justify-center">
                 <span className="text-gray-600 text-sm">[Screen z aplikacji PGE]</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition">System Przetargów & ETL (PGE)</h3>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                Aplikacja webowa ułatwiająca wyszukiwanie historycznych postępowań przetargowych. Wdrożono moduły konwersji dokumentów oraz procesy bulk data uploading (ETL).
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-medium">
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">SQL</span>
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">Python</span>
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">ETL</span>
              </div>
            </div>

            <div className="bg-cardBg border border-gray-800 rounded-2xl p-8 hover:border-purple-400 transition duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-gray-800/50 rounded-lg text-purple-400">
                  <Server size={28} />
                </div>
                <div className="flex gap-3 text-gray-400">
                  <Code size={20} className="hover:text-white cursor-pointer transition" />
                </div>
              </div>
              <div className="mb-4 bg-gray-900 rounded-xl h-48 border border-gray-800 flex items-center justify-center">
                 <span className="text-gray-600 text-sm">[Screen AGV / Three.js]</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition">AGV Digital Twin Architecture</h3>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                Projekt koła naukowego Sensor. Rurociąg danych dla Cyfrowego Bliźniaka pojazdu samojezdnego. Zbieranie telemetrii, przetwarzanie danych i wizualizacja webowa.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-medium">
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">Kafka</span>
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">Spark</span>
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full">IoT</span>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default App;