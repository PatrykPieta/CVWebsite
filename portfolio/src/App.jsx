import React, { useState } from 'react';

// Słownik tłumaczeń
const translations = {
  PL: {
    banner: "Strona w trakcie aktywnej rozbudowy pod kątem rekrutacji (Data Engineering & SQL). Wkrótce kolejne aktualizacje!",
    nav: { home: "Home", exp: "Doświadczenie & Skille", proj: "Projekty", certs: "Certyfikaty" },
    hero: {
      role: "Technology for industry 4.0 student",
      title1: "Buduję",
      title2: "rozwiązania oparte na danych.",
      desc: "Łączę świat systemów przemysłowych z nowoczesnym oprogramowaniem. Projektuję zautomatyzowane przepływy danych (Python, SQL, Apache Spark) i przekładam wymagania biznesowe na wydajne rozwiązania.",
      btnProj: "Zobacz projekty \u2192",
      btnCV: "Pobierz CV"
    },
    exp: {
      title: "Doświadczenie",
      desc1: "Tworzenie aplikacji webowych i serwisów backendowych do przetwarzania historycznych danych przetargowych. Implementacja zautomatyzowanych przepływów danych (ETL) przy użyciu Pythona i SQL.",
      stackTitle: "Tech Stack",
      stack1: "Data Engineering & Backend",
      stack2: "Narzędzia & Przemysł 4.0"
    },
    proj: {
      title: "Wybrane Projekty",
      agvDesc: "Projekt architektury Cyfrowego Bliźniaka dla pojazdu AGV. Integracja danych z czujników IoT w czasie rzeczywistym, przetwarzanie danych przy użyciu Kafki oraz wizualizacja 3D."
    },
    certs: {
      title: "Certyfikaty i Szkolenia",
      modules: "Ukończone moduły techniczne",
      openFull: "Otwórz w pełnym oknie"
    }
  },
  EN: {
    banner: "Site under active development for recruitment purposes (Data Engineering & SQL). More updates coming soon!",
    nav: { home: "Home", exp: "Experience & Skills", proj: "Projects", certs: "Certificates" },
    hero: {
      role: "Technology for industry 4.0 student",
      title1: "I build",
      title2: "data-driven solutions.",
      desc: "I bridge the gap between industrial systems and modern software. I design automated data workflows (Python, SQL, Apache Spark) and translate business requirements into efficient solutions.",
      btnProj: "View projects \u2192",
      btnCV: "Download CV"
    },
    exp: {
      title: "Experience",
      desc1: "Developing web applications and backend services for processing historical tender data. Implementation of automated data workflows (ETL) using Python and SQL.",
      stackTitle: "Tech Stack",
      stack1: "Data Engineering & Backend",
      stack2: "Tools & Industry 4.0"
    },
    proj: {
      title: "Selected Projects",
      agvDesc: "Digital Twin architecture project for an AGV. Real-time integration of IoT sensor data, data processing using Kafka, and 3D visualization."
    },
    certs: {
      title: "Certificates & Training",
      modules: "Completed technical modules",
      openFull: "Open in full window"
    }
  }
};

const certificatesList = [
  { name: "Databases and SQL for Data Science", file: "DatabasesandSQLforDataSciencewithPython.pdf" },
  { name: "Data Engineering Capstone Project", file: "DataEngineeringCapstoneProject.pdf" },
  { name: "Data Engineering Career Guide", file: "DataEngineeringCareerGuideandInterview.pdf" },
  { name: "Data Engineering Foundations", file: "DataEngineeringFundations.pdf" },
  { name: "Data Warehouse Fundamentals", file: "DataWarehouseFundamentals.pdf" },
  { name: "Design Fundamentals In AI", file: "DesignFundamentalsInAI.pdf" },
  { name: "ETL and Data Pipelines (Airflow)", file: "ETLandDataPipelineswithShellAirflowand.pdf" },
  { name: "Generative AI Content Creation", file: "GenerativeAIContentCreation.pdf" },
  { name: "Generative AI Elevate Career", file: "GenerativeAIElevateyourDataEngineeringCareer.pdf" },
  { name: "Generative AI Prompt Engineering", file: "GenerativeAIPromptEngineeringBasics.pdf" },
  { name: "Linux Commands", file: "Hands-onIntroductiontoLinuxCommandsand.pdf" },
  { name: "Big Data with Spark & Hadoop", file: "IntroductiontoBigDatawithSparkandHadoop.pdf" },
  { name: "Introduction to Data Engineering", file: "IntroductionToDataEngineering.pdf" },
  { name: "Introduction to NoSQL Databases", file: "IntroductiontoNoSQLDatabases.pdf" },
  { name: "Relational Databases (RDBMS)", file: "IntroductiontoRelationalDatabases(RDBMS).pdf" },
  { name: "Machine Learning with Spark", file: "MachineLearningwithApacheSpark.pdf" },
  { name: "Python for Data Science & AI", file: "PythonforDataScienceAI&Development.pdf" },
  { name: "Python Project for Data Engineering", file: "PythonProjectforDataEngineering.pdf" },
  { name: "Relational Database Administration", file: "RelationalDatabaseAdministration(DBA).pdf" },
  { name: "Social Media Content And Strategy", file: "SocialMediaContentAndStrategy.pdf" }
];

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState('PL');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = translations[lang];

  // Zmienne motywu (Light/Dark)
  const theme = {
    bg: isDark ? "bg-[#0a0f1c]" : "bg-slate-50",
    text: isDark ? "text-white" : "text-slate-900",
    textMuted: isDark ? "text-gray-400" : "text-slate-600",
    cardBg: isDark ? "bg-[#121b2e]" : "bg-white",
    borderColor: isDark ? "border-gray-800" : "border-slate-200",
    accentBg: isDark ? "bg-blue-900/20" : "bg-blue-50",
    tagBg: isDark ? "bg-purple-900/10" : "bg-purple-100",
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false); // Zamknij menu mobilne po kliknięciu
  };

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans selection:bg-purple-500/30 transition-colors duration-300`}>
      
      {/* Baner */}
      <div className={`${isDark ? 'bg-[#121b2e] border-blue-900/30' : 'bg-blue-600 border-blue-700 text-white'} border-b py-2.5 px-4 md:px-6 text-center text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 transition-colors`}>
        <span className="relative flex h-2 w-2 shrink-0">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isDark ? 'bg-blue-500' : 'bg-white'} opacity-75`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 ${isDark ? 'bg-blue-500' : 'bg-white'}`}></span>
        </span>
        <span className={isDark ? "text-gray-400" : "text-blue-50"}>{t.banner}</span>
      </div>

      {/* Nawigacja */}
      <nav className="flex justify-between items-center py-6 px-6 md:px-12 max-w-7xl mx-auto relative">
        <div className="text-xl font-bold tracking-widest flex items-center gap-2 z-20">
          <span className="text-blue-500">{'>_'}</span> PORTFOLIO
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <button onClick={() => handleTabChange('home')} className={`${activeTab === 'home' ? 'text-blue-500' : theme.textMuted} hover:text-blue-400 transition-colors`}>{t.nav.home}</button>
          <button onClick={() => handleTabChange('experience')} className={`${activeTab === 'experience' ? 'text-blue-500' : theme.textMuted} hover:text-blue-400 transition-colors`}>{t.nav.exp}</button>
          <button onClick={() => handleTabChange('projects')} className={`${activeTab === 'projects' ? 'text-blue-500' : theme.textMuted} hover:text-blue-400 transition-colors`}>{t.nav.proj}</button>
          <button onClick={() => handleTabChange('certificates')} className={`${activeTab === 'certificates' ? 'text-blue-500' : theme.textMuted} hover:text-blue-400 transition-colors`}>{t.nav.certs}</button>
        </div>

        {/* Kontrolki (Motyw & Język) + Hamburger dla Mobile */}
        <div className="flex items-center gap-4 z-20">
          <button onClick={() => setLang(lang === 'PL' ? 'EN' : 'PL')} className={`font-bold text-sm ${theme.textMuted} hover:text-blue-500 transition-colors w-8`}>
            {lang}
          </button>
          <button onClick={() => setIsDark(!isDark)} className={`p-2 rounded-full ${theme.accentBg} ${theme.textMuted} hover:text-blue-500 transition-colors`}>
            {isDark ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
            )}
          </button>
          
          {/* Hamburger Icon */}
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

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className={`absolute top-full left-0 w-full ${theme.cardBg} border-b ${theme.borderColor} flex flex-col py-4 px-6 gap-4 shadow-xl z-10 lg:hidden`}>
            <button onClick={() => handleTabChange('home')} className={`text-left font-medium ${activeTab === 'home' ? 'text-blue-500' : theme.text}`}>{t.nav.home}</button>
            <button onClick={() => handleTabChange('experience')} className={`text-left font-medium ${activeTab === 'experience' ? 'text-blue-500' : theme.text}`}>{t.nav.exp}</button>
            <button onClick={() => handleTabChange('projects')} className={`text-left font-medium ${activeTab === 'projects' ? 'text-blue-500' : theme.text}`}>{t.nav.proj}</button>
            <button onClick={() => handleTabChange('certificates')} className={`text-left font-medium ${activeTab === 'certificates' ? 'text-blue-500' : theme.text}`}>{t.nav.certs}</button>
          </div>
        )}
      </nav>

      {/* Główna zawartość */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-6 md:py-10">
        
        {/* ZAKŁADKA: HOME */}
        {activeTab === 'home' && (
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-4 animate-fade-in">
            <div className="lg:w-1/2 order-2 lg:order-1 text-center lg:text-left">
              <div className="text-blue-600 font-bold tracking-wider text-xs md:text-sm mb-6 uppercase flex items-center justify-center lg:justify-start gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                {t.hero.role}
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
                {t.hero.title1} <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">{t.hero.title2}</span>
              </h1>
              <p className={`${theme.textMuted} text-base md:text-lg mb-10 max-w-lg leading-relaxed mx-auto lg:mx-0`}>
                {t.hero.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button onClick={() => handleTabChange('projects')} className="bg-[#4f46e5] hover:bg-[#4338ca] text-white px-8 py-3.5 rounded-lg font-semibold transition-all w-full sm:w-auto">
                  {t.hero.btnProj}
                </button>
                <a href="/images/PATRYK_PIĘTA_FlowCV_Resume_2026-09-08.pdf" target="_blank" rel="noopener noreferrer" className={`border ${theme.borderColor} ${isDark ? 'hover:border-gray-400 text-gray-300' : 'hover:border-slate-400 text-slate-700'} px-8 py-3.5 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 w-full sm:w-auto`}>
                  {t.hero.btnCV}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
              <div className={`w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-full border ${theme.borderColor} ${theme.cardBg} flex items-center justify-center overflow-hidden shadow-2xl relative`}>
                <img src="/images/IMG_3819.jpg" alt="Patryk Pięta" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 rounded-full border border-blue-500/10"></div>
              </div>
            </div>
          </div>
        )}

        {/* ZAKŁADKA: DOŚWIADCZENIE */}
        {activeTab === 'experience' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 animate-fade-in">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="text-purple-500">#</span> {t.exp.title}
              </h2>
              <div className={`space-y-10 border-l ${isDark ? 'border-gray-800' : 'border-slate-200'} pl-6 ml-3`}>
                <div className="relative">
                  <div className={`absolute -left-[31px] ${theme.bg} border border-blue-500 rounded-full w-4 h-4 mt-1.5`}></div>
                  <h3 className="text-lg md:text-xl font-bold">Intern (Application Development)</h3>
                  <div className="text-blue-500 text-sm font-medium mb-3">PGE Polish Energy Group | 07/2026 – {lang === 'PL' ? 'Obecnie' : 'Present'}</div>
                  <p className={`${theme.textMuted} text-sm leading-relaxed`}>
                    {t.exp.desc1}
                  </p>
                </div>
                <div className="relative">
                  <div className={`absolute -left-[31px] ${theme.bg} border ${isDark ? 'border-gray-700' : 'border-slate-300'} rounded-full w-4 h-4 mt-1.5`}></div>
                  <h3 className={`text-lg md:text-xl font-bold ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>Brand Promoter</h3>
                  <div className={`${isDark ? 'text-gray-500' : 'text-slate-400'} text-sm font-medium mb-3`}>Tefal | 03/2026 – {lang === 'PL' ? 'Obecnie' : 'Present'}</div>
                </div>
                <div className="relative">
                  <div className={`absolute -left-[31px] ${theme.bg} border ${isDark ? 'border-gray-700' : 'border-slate-300'} rounded-full w-4 h-4 mt-1.5`}></div>
                  <h3 className={`text-lg md:text-xl font-bold ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>Maintenance Intern</h3>
                  <div className={`${isDark ? 'text-gray-500' : 'text-slate-400'} text-sm font-medium mb-3`}>Schneider Electric | 07/2025 – 09/2025</div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="text-purple-500">#</span> {t.exp.stackTitle}
              </h2>
              <div className={`${theme.cardBg} border ${theme.borderColor} rounded-2xl p-6 md:p-8 shadow-sm`}>
                <div className="mb-8">
                  <h3 className={`${theme.textMuted} uppercase tracking-widest text-xs font-bold mb-4`}>{t.exp.stack1}</h3>
                  <div className="flex flex-wrap gap-2 md:gap-2.5">
                    {['Python', 'SQL', 'NoSQL', 'ETL Pipelines', 'Apache Spark', 'Kafka', 'Airflow'].map(tech => (
                      <span key={tech} className={`${theme.accentBg} border ${isDark ? 'border-blue-500/30 text-blue-300' : 'border-blue-200 text-blue-700'} px-3 md:px-4 py-1.5 rounded text-xs md:text-sm`}>{tech}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className={`${theme.textMuted} uppercase tracking-widest text-xs font-bold mb-4`}>{t.exp.stack2}</h3>
                  <div className="flex flex-wrap gap-2 md:gap-2.5">
                    {['Power BI', 'Advanced Excel', 'Linux Shell', 'Git', 'Matlab', 'SolidWorks'].map(tech => (
                      <span key={tech} className={`${isDark ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-slate-100 border-slate-200 text-slate-600'} border px-3 md:px-4 py-1.5 rounded text-xs md:text-sm`}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ZAKŁADKA: PROJEKTY */}
        {activeTab === 'projects' && (
          <div className="animate-fade-in">
             <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="text-purple-500">#</span> {t.proj.title}
              </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`${theme.cardBg} border ${theme.borderColor} rounded-2xl p-6 md:p-8 hover:border-purple-500/50 transition-all group shadow-sm`}>
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 ${theme.accentBg} rounded-lg text-blue-500`}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                  </div>
                </div>
                <h3 className={`text-xl md:text-2xl font-bold mb-3 group-hover:text-purple-500 transition-colors`}>AGV Digital Twin</h3>
                <p className={`${theme.textMuted} mb-6 text-sm leading-relaxed`}>
                  {t.proj.agvDesc}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className={`text-xs font-mono text-purple-600 dark:text-purple-400 ${theme.tagBg} px-2 py-1 rounded`}>Python</span>
                  <span className={`text-xs font-mono text-purple-600 dark:text-purple-400 ${theme.tagBg} px-2 py-1 rounded`}>IoT</span>
                  <span className={`text-xs font-mono text-purple-600 dark:text-purple-400 ${theme.tagBg} px-2 py-1 rounded`}>Kafka</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ZAKŁADKA: CERTYFIKATY */}
        {activeTab === 'certificates' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-purple-500">#</span> {t.certs.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12">
              <div className={`${theme.cardBg} border ${theme.borderColor} rounded-2xl p-4 flex flex-col shadow-sm`}>
                <h3 className="text-lg md:text-xl font-bold text-blue-500 mb-4 px-2">IBM Data Engineering</h3>
                <div className={`w-full h-[300px] md:h-[400px] ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-slate-100 border-slate-200'} rounded-xl overflow-hidden border`}>
                  <iframe src="/images/DataEngineering.pdf#toolbar=0&navpanes=0" className="w-full h-full" title="IBM Certificate"></iframe>
                </div>
              </div>

              <div className={`${theme.cardBg} border ${theme.borderColor} rounded-2xl p-4 flex flex-col shadow-sm`}>
                <h3 className="text-lg md:text-xl font-bold text-purple-500 mb-4 px-2">Adobe Content Creator</h3>
                <div className={`w-full h-[300px] md:h-[400px] ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-slate-100 border-slate-200'} rounded-xl overflow-hidden border`}>
                  <iframe src="/images/MultimediaContentCreator.pdf#toolbar=0&navpanes=0" className="w-full h-full" title="Adobe Certificate"></iframe>
                </div>
              </div>
            </div>

            <h3 className={`text-lg md:text-xl font-bold mb-6 ${theme.textMuted} border-b ${theme.borderColor} pb-2`}>{t.certs.modules}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {certificatesList.map((cert, index) => (
                <div key={index} className={`${theme.cardBg} border ${theme.borderColor} rounded-xl overflow-hidden hover:border-blue-500/50 transition-colors flex flex-col shadow-sm`}>
                  <div className={`p-3 ${isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-slate-50 border-slate-200'} border-b text-xs md:text-sm font-semibold truncate ${theme.text}`} title={cert.name}>
                    {cert.name}
                  </div>
                  <div className={`w-full h-[180px] md:h-[220px] ${isDark ? 'bg-gray-950' : 'bg-slate-200'}`}>
                    <iframe src={`/images/${cert.file}#view=FitH&toolbar=0&navpanes=0`} className="w-full h-full pointer-events-auto" title={cert.name}></iframe>
                  </div>
                  <div className={`p-3 ${isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-slate-50 border-slate-200'} border-t text-center`}>
                    <a href={`/images/${cert.file}`} target="_blank" rel="noopener noreferrer" className="text-[10px] md:text-xs text-blue-500 hover:text-blue-400 font-bold uppercase tracking-wider">
                      {t.certs.openFull}
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}
      </main>
    </div>
  );
}

export default App;