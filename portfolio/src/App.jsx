import React, { useState } from 'react';

const translations = {
  PL: {
    nav: { home: "Start", exp: "Doświadczenie & Skille", projects: "Projekty", certs: "Certyfikaty" },
    hero: {
      tagline: "INŻYNIER DANYCH & STUDENT PRZEMYSŁU 4.0",
      title1: "Cześć, jestem Patryk",
      title2: "Buduję systemy oparte na danych.",
      desc: "Łączę świat systemów przemysłowych z nowoczesnym oprogramowaniem. Projektuję zautomatyzowane przepływy danych (Python, SQL, Apache Spark) i przekładam wymagania biznesowe na wydajne rozwiązania.",
      btnPrimary: "Zobacz Projekty",
      btnSecondary: "Pobierz CV",
      techTitle: "TECHNOLOGIE, Z KTÓRYMI PRACUJĘ"
    },
    about: {
      title: "Pasjonuje mnie tworzenie cyfrowych rozwiązań",
      desc: "Jako student AGH (Przemysł 4.0) z doświadczeniem komercyjnym z PGE, pomagam transformować surowe dane w użyteczne informacje poprzez czysty, wydajny i zautomatyzowany kod.",
      stats: [
        { label: "Doświadczenie (Staż)", value: "1+", icon: "📅" },
        { label: "Ukończonych Certyfikatów", value: "20+", icon: "🎓" },
        { label: "Zautomatyzowanych Procesów", value: "Wiele", icon: "⚙️" },
        { label: "Pasja do Danych", value: "100%", icon: "💡" }
      ]
    },
    expTab: {
      title: "Historia Zatrudnienia",
      stackTitle: "Technologie, które opanowałem"
    },
    projects: {
      subtitle: "WYBRANE PROJEKTY",
      title: "Moje Ostatnie Prace",
      viewBtn: "Szczegóły projektu →",
      viewAllBtn: "Zobacz wszystkie projekty ↗"
    },
    certs: {
      teaserTitle: "Edukacja & Certyfikaty",
      teaserDesc: "Posiadam m.in. IBM Data Engineering Professional Certificate, Adobe Content Creator oraz kilkanaście modułów związanych z bazami danych i AI.",
      viewAllBtn: "Przeglądaj wszystkie 20 certyfikatów ↗",
      mainTitle: "Certyfikaty i Szkolenia",
      modules: "Ukończone moduły techniczne",
      openFull: "Otwórz w pełnym oknie"
    }
  },
  EN: {
    nav: { home: "Home", exp: "Experience & Skills", projects: "Projects", certs: "Certificates" },
    hero: {
      tagline: "DATA ENGINEER & INDUSTRY 4.0 STUDENT",
      title1: "Hi, I'm Patryk",
      title2: "I build data-driven systems.",
      desc: "I bridge the gap between industrial systems and modern software. I design automated data workflows (Python, SQL, Apache Spark) and translate business requirements into efficient solutions.",
      btnPrimary: "View Projects",
      btnSecondary: "Download CV",
      techTitle: "TECHNOLOGIES I WORK WITH"
    },
    about: {
      title: "I'm passionate about creating digital solutions",
      desc: "As an AGH student (Industry 4.0) with commercial experience from PGE, I help transform raw data into actionable insights through clean, efficient, and automated code.",
      stats: [
        { label: "Experience (Intern)", value: "1+", icon: "📅" },
        { label: "Certificates Completed", value: "20+", icon: "🎓" },
        { label: "Automated Processes", value: "Multiple", icon: "⚙️" },
        { label: "Passion for Data", value: "100%", icon: "💡" }
      ]
    },
    expTab: {
      title: "Employment History",
      stackTitle: "Technologies I Master"
    },
    projects: {
      subtitle: "FEATURED PROJECTS",
      title: "Some of My Recent Work",
      viewBtn: "Project Details →",
      viewAllBtn: "View all projects ↗"
    },
    certs: {
      teaserTitle: "Education & Certifications",
      teaserDesc: "Holding the IBM Data Engineering Professional Certificate, Adobe Content Creator, and over a dozen modules related to databases and AI.",
      viewAllBtn: "Browse all 20 certificates ↗",
      mainTitle: "Certificates & Training",
      modules: "Completed technical modules",
      openFull: "Open in full window"
    }
  }
};

const skillData = [
  { name: "Python", percent: 85 },
  { name: "SQL / PostgreSQL / NoSQL", percent: 90 },
  { name: "Apache Spark", percent: 75 },
  { name: "Kafka", percent: 70 },
  { name: "Apache Airflow", percent: 65 },
  { name: "Power BI", percent: 80 },
];

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

  const theme = {
    bg: isDark ? "bg-[#050810]" : "bg-slate-50",
    text: isDark ? "text-white" : "text-slate-900",
    textMuted: isDark ? "text-gray-400" : "text-slate-600",
    cardBg: isDark ? "bg-[#0b1120]" : "bg-white",
    borderColor: isDark ? "border-gray-800" : "border-slate-200",
    primary: "bg-blue-600 hover:bg-blue-700",
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans selection:bg-blue-500/30 transition-colors duration-300`}>
      
      {/* Navbar */}
      <nav className={`fixed w-full z-50 ${isDark ? 'bg-[#050810]/90 border-gray-800' : 'bg-white/90 border-slate-200'} backdrop-blur-md border-b`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-widest flex items-center gap-2 cursor-pointer" onClick={() => handleTabChange('home')}>
            <span className="text-blue-500">{'{'}</span> DataCraft <span className="text-blue-500">{'}'}</span>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <button onClick={() => handleTabChange('home')} className={`${activeTab === 'home' ? 'text-blue-500' : theme.textMuted} hover:text-blue-400 transition-colors`}>{t.nav.home}</button>
            <button onClick={() => handleTabChange('experience')} className={`${activeTab === 'experience' ? 'text-blue-500' : theme.textMuted} hover:text-blue-400 transition-colors`}>{t.nav.exp}</button>
            <button onClick={() => handleTabChange('projects')} className={`${activeTab === 'projects' ? 'text-blue-500' : theme.textMuted} hover:text-blue-400 transition-colors`}>{t.nav.projects}</button>
            <button onClick={() => handleTabChange('certs')} className={`${activeTab === 'certs' ? 'text-blue-500' : theme.textMuted} hover:text-blue-400 transition-colors`}>{t.nav.certs}</button>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => setLang(lang === 'PL' ? 'EN' : 'PL')} className={`font-bold text-sm ${theme.textMuted} hover:text-blue-500 w-8`}>{lang}</button>
            <button onClick={() => setIsDark(!isDark)} className={`p-2 rounded-full ${isDark ? 'bg-gray-800' : 'bg-slate-100'} ${theme.textMuted} hover:text-blue-500`}>
              {isDark ? '☀️' : '🌙'}
            </button>
            
            {/* Mobile Menu Toggle */}
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

          {/* Mobile Dropdown */}
          {isMenuOpen && (
            <div className={`absolute top-full left-0 w-full ${theme.cardBg} border-b ${theme.borderColor} flex flex-col py-4 px-6 gap-4 shadow-xl z-10 lg:hidden`}>
              <button onClick={() => handleTabChange('home')} className={`text-left font-medium ${activeTab === 'home' ? 'text-blue-500' : theme.text}`}>{t.nav.home}</button>
              <button onClick={() => handleTabChange('experience')} className={`text-left font-medium ${activeTab === 'experience' ? 'text-blue-500' : theme.text}`}>{t.nav.exp}</button>
              <button onClick={() => handleTabChange('projects')} className={`text-left font-medium ${activeTab === 'projects' ? 'text-blue-500' : theme.text}`}>{t.nav.projects}</button>
              <button onClick={() => handleTabChange('certs')} className={`text-left font-medium ${activeTab === 'certs' ? 'text-blue-500' : theme.text}`}>{t.nav.certs}</button>
            </div>
          )}
        </div>
      </nav>

      <main className="pt-28 px-6 md:px-12 max-w-7xl mx-auto min-h-screen pb-24">
        
        {/* ==================================================== */}
        {/* TAB: HOME (Dashboard Zajawek)                          */}
        {/* ==================================================== */}
        {activeTab === 'home' && (
          <div className="space-y-32 animate-fade-in">
            {/* HERO */}
            <section className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2 relative z-10">
                <div className="inline-block px-3 py-1 bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest rounded-full mb-6">
                  {t.hero.tagline}
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tight">
                  {t.hero.title1} <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{t.hero.title2}</span>
                </h1>
                <p className={`${theme.textMuted} text-lg mb-8 max-w-lg leading-relaxed`}>
                  {t.hero.desc}
                </p>
                <div className="flex flex-wrap gap-4 mb-12">
                  <button onClick={() => handleTabChange('projects')} className={`${theme.primary} text-white px-8 py-3.5 rounded-lg font-semibold transition-all flex items-center gap-2`}>
                    {t.hero.btnPrimary} <span className="text-xl">↗</span>
                  </button>
                  <a href="/images/PATRYK_PIĘTA_FlowCV_Resume_2026-09-08.pdf" target="_blank" rel="noopener noreferrer" className={`border ${theme.borderColor} ${isDark ? 'hover:border-gray-400 text-gray-300' : 'hover:border-slate-400 text-slate-700'} px-8 py-3.5 rounded-lg font-semibold transition-all flex items-center gap-2`}>
                    {t.hero.btnSecondary} <span className="text-xl">↓</span>
                  </a>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 tracking-widest mb-4 uppercase">{t.hero.techTitle}</p>
                  <div className="flex gap-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity" alt="Python" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity" alt="SQL" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" className="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity" alt="Spark" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" className="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity" alt="Linux" />
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 relative flex justify-center lg:justify-end mt-10 lg:mt-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20"></div>
                
                <div className="relative z-10 w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-4 border-gray-800/50 shadow-2xl">
                  <img src="/images/IMG_3819.jpg" alt="Patryk Pięta" className="w-full h-full object-cover" />
                </div>

                <div className={`absolute bottom-10 -left-10 ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border p-4 rounded-xl shadow-2xl text-xs font-mono hidden md:block z-20`}>
                  <div className="flex gap-1 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-blue-400">const <span className="text-white">engineer</span> = {'{'}</div>
                  <div className="pl-4 text-gray-400">name: <span className="text-green-400">'Patryk'</span>,</div>
                  <div className="pl-4 text-gray-400">skills: [<span className="text-green-400">'Python'</span>, <span className="text-green-400">'SQL'</span>, <span className="text-green-400">'ETL'</span>],</div>
                  <div className="pl-4 text-gray-400">status: <span className="text-green-400">'Open to Work'</span></div>
                  <div className="text-blue-400">{'}'};</div>
                </div>
              </div>
            </section>

            {/* MINI ABOUT & STATS */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.about.title}</h2>
                <p className={`${theme.textMuted} leading-relaxed mb-8`}>{t.about.desc}</p>
                <button onClick={() => handleTabChange('experience')} className={`border ${theme.borderColor} px-6 py-3 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all hover:border-blue-600`}>
                  {lang === 'PL' ? 'Poznaj moje skille' : 'Explore my skills'} <span>👤</span>
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {t.about.stats.map((stat, i) => (
                  <div key={i} className={`${theme.cardBg} border ${theme.borderColor} p-6 rounded-2xl shadow-sm hover:border-blue-500/50 transition-colors`}>
                    <div className="text-3xl mb-4">{stat.icon}</div>
                    <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                    <div className={`${theme.textMuted} text-sm`}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* ZAJARKA PROJEKTÓW (TYLKO 2) */}
            <section>
              <div className="text-center mb-12">
                <div className="text-blue-500 text-sm font-bold tracking-widest mb-2 uppercase">{t.projects.subtitle}</div>
                <h2 className="text-3xl md:text-4xl font-bold">{t.projects.title}</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Projekt 1 */}
                <div className={`${theme.cardBg} border ${theme.borderColor} rounded-2xl overflow-hidden group shadow-sm flex flex-col`}>
                  <div className={`h-48 ${isDark ? 'bg-gray-900' : 'bg-slate-100'} p-6 relative overflow-hidden flex items-center justify-center`}>
                    <div className="w-full h-full bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-xl border border-gray-700 shadow-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                      <span className="text-blue-400 font-mono text-lg">{'<AGV Digital Twin />'}</span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex-grow">
                    <h3 className="text-2xl font-bold mb-2">AGV Digital Twin</h3>
                    <p className={`${theme.textMuted} mb-6 text-sm`}>
                      {lang === 'PL' ? 'Projekt architektury Cyfrowego Bliźniaka dla pojazdu AGV. Integracja danych z czujników IoT w czasie rzeczywistym i Kafka.' : 'Digital Twin architecture for an AGV. Real-time IoT sensor data integration using Kafka.'}
                    </p>
                  </div>
                </div>
                {/* Projekt 2 */}
                <div className={`${theme.cardBg} border ${theme.borderColor} rounded-2xl overflow-hidden group shadow-sm flex flex-col`}>
                  <div className={`h-48 ${isDark ? 'bg-gray-900' : 'bg-slate-100'} p-6 relative overflow-hidden flex items-center justify-center`}>
                    <div className="w-full h-full bg-gradient-to-br from-green-900/40 to-blue-900/40 rounded-xl border border-gray-700 shadow-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                      <span className="text-green-400 font-mono text-lg">{'<PGE Data Pipelines />'}</span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex-grow">
                    <h3 className="text-2xl font-bold mb-2">Historical Tender Processing</h3>
                    <p className={`${theme.textMuted} mb-6 text-sm`}>
                      {lang === 'PL' ? 'Zautomatyzowane przepływy bazodanowe do masowej konwersji dokumentów i ładowania danych w Pythonie i SQL.' : 'Automated database workflows for mass document conversion and bulk data uploading using Python and SQL.'}
                    </p>
                  </div>
                </div>
              </div>
              <button onClick={() => handleTabChange('projects')} className={`w-full py-4 text-center rounded-xl border border-blue-500/30 ${isDark ? 'bg-blue-900/20 text-blue-400 hover:bg-blue-900/40' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'} font-bold transition-colors`}>
                {t.projects.viewAllBtn}
              </button>
            </section>

            {/* ZAJARKA CERTYFIKATÓW */}
            <section className={`${theme.cardBg} border ${theme.borderColor} p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8`}>
              <div>
                <h2 className="text-3xl font-bold mb-3">{t.certs.teaserTitle}</h2>
                <p className={`${theme.textMuted} max-w-xl leading-relaxed`}>{t.certs.teaserDesc}</p>
              </div>
              <button onClick={() => handleTabChange('certs')} className={`shrink-0 ${theme.primary} text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg`}>
                {t.certs.viewAllBtn}
              </button>
            </section>

          </div>
        )}

        {/* ==================================================== */}
        {/* TAB: DOŚWIADCZENIE & SKILLE                          */}
        {/* ==================================================== */}
        {activeTab === 'experience' && (
          <div className="animate-fade-in space-y-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
              <span className="text-blue-500">#</span> {t.expTab.title}
            </h2>
            
            <div className={`space-y-12 border-l-2 ${isDark ? 'border-gray-800' : 'border-slate-200'} pl-6 md:pl-10 ml-4`}>
              <div className="relative">
                <div className={`absolute -left-[35px] md:-left-[51px] ${theme.bg} border-2 border-blue-500 rounded-full w-5 h-5 mt-1.5`}></div>
                <h3 className="text-2xl font-bold">Intern (Application Development)</h3>
                <div className="text-blue-500 font-medium mb-3">PGE Polish Energy Group | 07/2026 – {lang === 'PL' ? 'Obecnie' : 'Present'}</div>
                <ul className={`list-disc list-inside ${theme.textMuted} space-y-2 mt-4`}>
                  <li>Developed and maintained web applications and backend services for processing historical tender data.</li>
                  <li>Implemented automated database workflows for mass document conversion and bulk data uploading (ETL processes) using Python and SQL.</li>
                  <li>Collaborated closely on data modeling and ensuring data reliability for business users.</li>
                </ul>
              </div>

              <div className="relative">
                <div className={`absolute -left-[35px] md:-left-[51px] ${theme.bg} border-2 ${isDark ? 'border-gray-700' : 'border-slate-300'} rounded-full w-5 h-5 mt-1.5`}></div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>Brand Promoter</h3>
                <div className={`${isDark ? 'text-gray-500' : 'text-slate-400'} font-medium mb-3`}>Tefal | 03/2026 – {lang === 'PL' ? 'Obecnie' : 'Present'}</div>
                <ul className={`list-disc list-inside ${theme.textMuted} space-y-2 mt-4`}>
                  <li>Providing technical consultancy and conducting live demonstrations for premium home appliances.</li>
                </ul>
              </div>

              <div className="relative">
                <div className={`absolute -left-[35px] md:-left-[51px] ${theme.bg} border-2 ${isDark ? 'border-gray-700' : 'border-slate-300'} rounded-full w-5 h-5 mt-1.5`}></div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>Maintenance Intern</h3>
                <div className={`${isDark ? 'text-gray-500' : 'text-slate-400'} font-medium mb-3`}>Schneider Electric | 07/2025 – 09/2025</div>
                <ul className={`list-disc list-inside ${theme.textMuted} space-y-2 mt-4`}>
                  <li>Participated in daily SIM (Short Interval Management) meetings to monitor production efficiency.</li>
                  <li>Conducted a comprehensive inventory of spare parts to ensure maintenance continuity.</li>
                  <li>Updated LOTO (Lockout-Tagout) procedures and safety documentation.</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mt-24 mb-12 flex items-center gap-3">
              <span className="text-blue-500">#</span> {t.expTab.stackTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {skillData.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-bold flex items-center gap-2">
                      <span className="text-blue-500">▹</span> {skill.name}
                    </span>
                    <span className={`${theme.textMuted} text-sm font-mono`}>{skill.percent}%</span>
                  </div>
                  <div className={`w-full h-3 ${isDark ? 'bg-gray-800' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                    <div className="h-full bg-blue-600 rounded-full relative" style={{ width: `${skill.percent}%` }}>
                      <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/30"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB: PROJEKTY (Wszystkie ze szczegółami)               */}
        {/* ==================================================== */}
        {activeTab === 'projects' && (
          <div className="animate-fade-in">
             <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
                <span className="text-blue-500">#</span> {t.projects.title}
              </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              
              {/* Projekt 1 */}
              <div className={`${theme.cardBg} border ${theme.borderColor} rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all shadow-sm`}>
                <div className={`h-64 ${isDark ? 'bg-gray-900' : 'bg-slate-100'} p-6 relative overflow-hidden flex flex-col justify-center`}>
                  <div className="w-full h-full bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-xl border border-gray-700 shadow-xl flex items-center justify-center">
                    <span className="text-blue-400 font-mono text-xl">{'<AGV Digital Twin />'}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">AGV Digital Twin</h3>
                  <p className={`${theme.textMuted} mb-6 leading-relaxed`}>
                    {lang === 'PL' 
                      ? 'Architektura Cyfrowego Bliźniaka (Digital Twin) dla autonomicznego pojazdu AGV tworzona w ramach Koła Naukowego Sensor AGH. Skupiłem się na przetwarzaniu danych IoT w czasie rzeczywistym, integracji sensorów, potokach danych (Kafka) i wizualizacji 3D przestrzeni.' 
                      : 'Digital Twin architecture for an Autonomous Guided Vehicle (AGV) created within the KN Sensor Science Club. Focused on real-time IoT data processing, sensor integration, data pipelines (Kafka), and 3D space visualization.'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className={`text-xs font-mono text-blue-600 dark:text-blue-400 ${isDark ? 'bg-blue-900/10' : 'bg-blue-100'} px-2 py-1 rounded border ${isDark ? 'border-blue-500/20' : 'border-blue-200'}`}>Python</span>
                    <span className={`text-xs font-mono text-blue-600 dark:text-blue-400 ${isDark ? 'bg-blue-900/10' : 'bg-blue-100'} px-2 py-1 rounded border ${isDark ? 'border-blue-500/20' : 'border-blue-200'}`}>IoT / Sensors</span>
                    <span className={`text-xs font-mono text-blue-600 dark:text-blue-400 ${isDark ? 'bg-blue-900/10' : 'bg-blue-100'} px-2 py-1 rounded border ${isDark ? 'border-blue-500/20' : 'border-blue-200'}`}>Kafka</span>
                  </div>
                </div>
              </div>

              {/* Projekt 2 */}
              <div className={`${theme.cardBg} border ${theme.borderColor} rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all shadow-sm`}>
                <div className={`h-64 ${isDark ? 'bg-gray-900' : 'bg-slate-100'} p-6 relative overflow-hidden flex flex-col justify-center`}>
                  <div className="w-full h-full bg-gradient-to-br from-green-900/40 to-blue-900/40 rounded-xl border border-gray-700 shadow-xl flex items-center justify-center">
                    <span className="text-green-400 font-mono text-xl">{'<PGE Data Pipelines />'}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Historical Tender Processing</h3>
                  <p className={`${theme.textMuted} mb-6 leading-relaxed`}>
                    {lang === 'PL'
                      ? 'Projekt realizowany podczas stażu w PGE. Zaprojektowałem i wdrożyłem logikę backendową (Python, SQL) oraz potoki ETL do przetwarzania danych o starych procedurach przetargowych, konwersji dokumentów oraz ich masowego przesyłania.'
                      : 'Project developed during internship at PGE. Designed and implemented backend logic (Python, SQL) and ETL pipelines to process data regarding historical tender procedures, mass document conversion, and bulk uploads.'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className={`text-xs font-mono text-blue-600 dark:text-blue-400 ${isDark ? 'bg-blue-900/10' : 'bg-blue-100'} px-2 py-1 rounded border ${isDark ? 'border-blue-500/20' : 'border-blue-200'}`}>Python</span>
                    <span className={`text-xs font-mono text-blue-600 dark:text-blue-400 ${isDark ? 'bg-blue-900/10' : 'bg-blue-100'} px-2 py-1 rounded border ${isDark ? 'border-blue-500/20' : 'border-blue-200'}`}>SQL</span>
                    <span className={`text-xs font-mono text-blue-600 dark:text-blue-400 ${isDark ? 'bg-blue-900/10' : 'bg-blue-100'} px-2 py-1 rounded border ${isDark ? 'border-blue-500/20' : 'border-blue-200'}`}>ETL Pipelines</span>
                  </div>
                </div>
              </div>

              {/* Projekt 3 */}
              <div className={`${theme.cardBg} border ${theme.borderColor} rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all shadow-sm lg:col-span-2`}>
                <div className="flex flex-col lg:flex-row h-full">
                  <div className={`lg:w-1/2 h-64 lg:h-auto ${isDark ? 'bg-gray-900' : 'bg-slate-100'} p-6 relative flex flex-col justify-center`}>
                    <div className="w-full h-full bg-gradient-to-br from-indigo-900/40 to-slate-800/40 rounded-xl border border-gray-700 shadow-xl flex items-center justify-center">
                      <span className="text-indigo-400 font-mono text-xl">{'<Cranes Control System />'}</span>
                    </div>
                  </div>
                  <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4">Cranes Control System</h3>
                    <p className={`${theme.textMuted} mb-6 leading-relaxed`}>
                      {lang === 'PL'
                        ? 'Zaawansowany projekt akademicki skupiający się na tworzeniu inteligentnych algorytmów sterowania i modelowania matematycznego dla przemysłowych modeli dźwigów suwnicowych (Matlab, Simulink).'
                        : 'Advanced academic project focusing on intelligent control algorithms and mathematical modeling for industrial overhead crane models (Matlab, Simulink).'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className={`text-xs font-mono text-blue-600 dark:text-blue-400 ${isDark ? 'bg-blue-900/10' : 'bg-blue-100'} px-2 py-1 rounded border ${isDark ? 'border-blue-500/20' : 'border-blue-200'}`}>Automation</span>
                      <span className={`text-xs font-mono text-blue-600 dark:text-blue-400 ${isDark ? 'bg-blue-900/10' : 'bg-blue-100'} px-2 py-1 rounded border ${isDark ? 'border-blue-500/20' : 'border-blue-200'}`}>Matlab</span>
                      <span className={`text-xs font-mono text-blue-600 dark:text-blue-400 ${isDark ? 'bg-blue-900/10' : 'bg-blue-100'} px-2 py-1 rounded border ${isDark ? 'border-blue-500/20' : 'border-blue-200'}`}>Control Algorithms</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB: CERTYFIKATY (Wszystkie PDFy)                    */}
        {/* ==================================================== */}
        {activeTab === 'certs' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
              <span className="text-blue-500">#</span> {t.certs.mainTitle}
            </h2>

            {/* BIG CERTS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div className={`${theme.cardBg} border ${theme.borderColor} rounded-3xl p-6 shadow-sm`}>
                <h3 className="text-xl font-bold text-blue-500 mb-6">IBM Data Engineering (Professional)</h3>
                <div className={`w-full h-[400px] ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-slate-100 border-slate-200'} rounded-2xl overflow-hidden border shadow-inner`}>
                  <iframe src="/images/DataEngineering.pdf#toolbar=0&navpanes=0" className="w-full h-full" title="IBM Certificate"></iframe>
                </div>
              </div>

              <div className={`${theme.cardBg} border ${theme.borderColor} rounded-3xl p-6 shadow-sm`}>
                <h3 className="text-xl font-bold text-purple-500 mb-6">Adobe Content Creator</h3>
                <div className={`w-full h-[400px] ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-slate-100 border-slate-200'} rounded-2xl overflow-hidden border shadow-inner`}>
                  <iframe src="/images/MultimediaContentCreator.pdf#toolbar=0&navpanes=0" className="w-full h-full" title="Adobe Certificate"></iframe>
                </div>
              </div>
            </div>

            {/* SMALL CERTS GRID */}
            <h3 className={`text-xl md:text-2xl font-bold mb-8 ${theme.textMuted} border-b ${theme.borderColor} pb-4`}>{t.certs.modules}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {certificatesList.map((cert, index) => (
                <div key={index} className={`${theme.cardBg} border ${theme.borderColor} rounded-2xl overflow-hidden hover:border-blue-500 transition-colors flex flex-col shadow-sm group`}>
                  <div className={`p-4 ${isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-slate-50 border-slate-200'} border-b text-xs md:text-sm font-bold truncate ${theme.text}`} title={cert.name}>
                    {cert.name}
                  </div>
                  <div className={`w-full h-[180px] ${isDark ? 'bg-gray-950' : 'bg-slate-200'}`}>
                    <iframe src={`/images/${cert.file}#view=FitH&toolbar=0&navpanes=0`} className="w-full h-full pointer-events-auto" title={cert.name}></iframe>
                  </div>
                  <div className={`p-4 ${isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-slate-50 border-slate-200'} border-t text-center`}>
                    <a href={`/images/${cert.file}`} target="_blank" rel="noopener noreferrer" className="text-[10px] md:text-xs text-blue-500 group-hover:text-blue-400 font-bold uppercase tracking-wider flex items-center justify-center gap-2">
                      {t.certs.openFull} ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className={`border-t ${theme.borderColor} ${theme.cardBg} py-8`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
          <div className={`${theme.textMuted}`}>© 2026 Patryk Pięta. All rights reserved.</div>
          <div className={`flex gap-6 ${theme.textMuted}`}>
            <a href="mailto:emzet959@gmail.com" className="hover:text-blue-500 transition-colors">emzet959@gmail.com</a>
            <span className="text-gray-500">|</span>
            <span>+48 530 229 233</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;