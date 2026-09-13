import React, { useState } from 'react';

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

const translations = {
  PL: {
    banner: "Strona w trakcie aktywnej rozbudowy pod kątem rekrutacji (Data Engineering & SQL). Wkrótce kolejne aktualizacje!",
    nav: { home: "Start", exp: "Doświadczenie & Skille", projects: "Projekty", dev: "Rozwój", interests: "Zainteresowania" },
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
    devTab: {
      titleCurrent: "Aktualnie realizuję",
      titleFuture: "Plany na najbliższą przyszłość",
      titleCerts: "Edukacja, Certyfikaty i Szkolenia",
      modules: "Ukończone moduły techniczne",
      openFull: "Otwórz w pełnym oknie",
      currentList: [
        { name: "Machine Learning Onramp (MathWorks)", desc: "Praktyczne wprowadznie do środowiska uczenia maszynowego." }
      ],
      futureList: [
        { name: "Magisterka z Inżynierii Danych", desc: "Rozszerzenie kompetencji akademickich w kierunku zaawansowanego przetwarzania Big Data." },
        { name: "Certyfikacja Databricks", desc: "Oficjalne potwierdzenie umiejętności pracy z chmurowymi platformami analitycznymi." }
      ]
    },
    projectsTab: {
      title: "Moje Projekty",
      backBtn: "Wróć do listy projektów",
      viewDetailsBtn: "Szczegóły projektu →",
      viewAllBtn: "Zobacz wszystkie projekty ↗"
    },
    interestsTab: {
      title: "Moje Zainteresowania",
      emptyState: "Sekcja w trakcie przygotowań. Wkrótce dodam tu więcej informacji o moich pasjach poza programowaniem!"
    },
    projectsData: [
      {
        id: 'agv',
        title: 'AGV Digital Twin',
        code: '<AGV Digital Twin />',
        color: 'from-blue-900/40 to-purple-900/40',
        tags: ['Python', 'IoT / Sensors', 'Kafka'],
        teaser: 'Architektura Cyfrowego Bliźniaka dla autonomicznego pojazdu AGV. Integracja danych z czujników w czasie rzeczywistym (Kafka) oraz wizualizacja.',
        fullDesc: 'Rozbudowany projekt realizowany w ramach Koła Naukowego Sensor AGH. Głównym celem jest stworzenie wirtualnej reprezentacji (Cyfrowego Bliźniaka) wózka AGV. Architektura opiera się na ciągłym strumieniowaniu danych z czujników fizycznych za pomocą Apache Kafka, przetwarzaniu ich w Pythonie oraz mapowaniu w przestrzeni 3D. Projekt wymaga zestrojenia warstwy sprzętowej z nowoczesnymi rozwiązaniami Data Engineering.'
      },
      {
        id: 'pge',
        title: 'Historical Tender Processing',
        code: '<PGE Data Pipelines />',
        color: 'from-green-900/40 to-blue-900/40',
        tags: ['Python', 'SQL', 'ETL Pipelines'],
        teaser: 'Projekt komercyjny (PGE). Logika backendowa, zapytania SQL oraz potoki ETL do masowego przetwarzania danych o dawnych przetargach.',
        fullDesc: 'Aplikacja stworzona podczas stażu w PGE Polish Energy Group. Opracowałem i wdrożyłem od podstaw zautomatyzowane rurociągi danych (Data Pipelines) w Pythonie i SQL. System zajmuje się masową konwersją, czyszczeniem oraz ładowaniem dokumentacji z historycznych procedur przetargowych do centralnej bazy, umożliwiając szybkie przeszukiwanie zasobów przez pracowników biznesowych.'
      },
      {
        id: 'cranes',
        title: 'Cranes Control System',
        code: '<Cranes Control System />',
        color: 'from-indigo-900/40 to-slate-800/40',
        tags: ['Automation', 'Matlab', 'Control Algorithms'],
        teaser: 'Zaawansowany projekt akademicki skupiający się na algorytmach sterowania dla modeli dźwigów suwnicowych (Matlab, Simulink).',
        fullDesc: 'Projekt inżynieryjno-naukowy łączący teorię sterowania z automatyką przemysłową. Wykorzystując środowisko Matlab i Simulink, zaprojektowałem i zasymulowałem zachowanie modelu matematycznego dźwigu suwnicowego. Celem było wyeliminowanie wahań ładunku podczas dynamicznych zmian pozycji.'
      },
      {
        id: 'portfolio',
        title: 'Personal Portfolio SPA',
        code: '<DataCraft Portfolio />',
        color: 'from-purple-900/40 to-pink-900/40',
        tags: ['React', 'Tailwind CSS', 'SPA'],
        teaser: 'Moja własna strona-wizytówka zbudowana jako Single Page Application. Wykorzystuje architekturę Reacta i system routingu stanów.',
        fullDesc: 'Strona, którą właśnie przeglądasz, to autorski projekt zbudowany w nowoczesnym stosie frontendowym (React + Tailwind CSS). Zamiast polegać na gotowych szablonach z WordPressa, stworzyłem w pełni responsywną aplikację SPA (Single Page Application) ze zintegrowanym systemem motywów (Dark/Light), tłumaczeniami (PL/EN) oraz renderowaniem PDF-ów.'
      },
      {
        id: 'photo1',
        title: 'Portfolio Fotografa #1',
        code: '<Photo Portfolio />',
        color: 'from-orange-900/40 to-red-900/40',
        tags: ['Web Design', 'UI/UX'],
        teaser: 'Wkrótce... Responsywna strona wizytówka-galeria tworzona na zlecenie znajomego fotografa.',
        fullDesc: 'Projekt w trakcie realizacji. Będzie to nowoczesna, minimalistyczna galeria zdjęć z optymalizacją ładowania grafik pod kątem urządzeń mobilnych.'
      },
      {
        id: 'photo2',
        title: 'Portfolio Fotografa #2',
        code: '<Photo Portfolio />',
        color: 'from-cyan-900/40 to-blue-900/40',
        tags: ['Web Design', 'UI/UX'],
        teaser: 'Wkrótce... Spersonalizowana przestrzeń sieciowa do prezentacji sesji zdjęciowych dla zaprzyjaźnionego artysty.',
        fullDesc: 'Projekt w fazie planowania układu (wireframing). Strona będzie zawierała dynamiczny system siatki (masonry layout) do eleganckiej ekspozycji portfolio fotograficznego.'
      }
    ]
  },
  EN: {
    banner: "Site under active development for recruitment purposes (Data Engineering & SQL). More updates coming soon!",
    nav: { home: "Home", exp: "Experience & Skills", projects: "Projects", dev: "Development", interests: "Interests" },
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
    devTab: {
      titleCurrent: "Currently Learning",
      titleFuture: "Upcoming Plans",
      titleCerts: "Education & Certifications",
      modules: "Completed technical modules",
      openFull: "Open in full window",
      currentList: [
        { name: "Machine Learning Onramp (MathWorks)", desc: "A practical introduction to the machine learning environment." }
      ],
      futureList: [
        { name: "Master's in Data Engineering", desc: "Expanding academic competencies towards advanced Big Data processing." },
        { name: "Databricks Certification", desc: "Official validation of skills in working with cloud analytics platforms." }
      ]
    },
    projectsTab: {
      title: "My Projects",
      backBtn: "Back to all projects",
      viewDetailsBtn: "Project Details →",
      viewAllBtn: "View all projects ↗"
    },
    interestsTab: {
      title: "My Interests",
      emptyState: "Section under construction. I will add more information about my passions outside of programming soon!"
    },
    projectsData: [
      {
        id: 'agv',
        title: 'AGV Digital Twin',
        code: '<AGV Digital Twin />',
        color: 'from-blue-900/40 to-purple-900/40',
        tags: ['Python', 'IoT / Sensors', 'Kafka'],
        teaser: 'Digital Twin architecture for an AGV. Real-time sensor data integration (Kafka) and visualization.',
        fullDesc: 'An extensive project developed within the Sensor AGH Science Club. The main goal is to create a virtual representation (Digital Twin) of an AGV cart. The architecture is based on continuous streaming of data from physical sensors using Apache Kafka, processing it in Python, and mapping it in 3D space.'
      },
      {
        id: 'pge',
        title: 'Historical Tender Processing',
        code: '<PGE Data Pipelines />',
        color: 'from-green-900/40 to-blue-900/40',
        tags: ['Python', 'SQL', 'ETL Pipelines'],
        teaser: 'Commercial project (PGE). Backend logic, SQL queries, and ETL pipelines for mass processing of historical tender data.',
        fullDesc: 'Application created during an internship at PGE Polish Energy Group. I designed and implemented automated data pipelines from scratch in Python and SQL. The system handles mass conversion, cleaning, and loading of documentation from historical tender procedures into a central database, enabling quick searches for business users.'
      },
      {
        id: 'cranes',
        title: 'Cranes Control System',
        code: '<Cranes Control System />',
        color: 'from-indigo-900/40 to-slate-800/40',
        tags: ['Automation', 'Matlab', 'Control Algorithms'],
        teaser: 'Advanced academic project focusing on control algorithms for overhead crane models (Matlab, Simulink).',
        fullDesc: 'An engineering and scientific project combining control theory with industrial automation. Using Matlab and Simulink, I designed and simulated the behavior of a mathematical model of an overhead crane. The goal was to eliminate payload sway during dynamic position changes.'
      },
      {
        id: 'portfolio',
        title: 'Personal Portfolio SPA',
        code: '<DataCraft Portfolio />',
        color: 'from-purple-900/40 to-pink-900/40',
        tags: ['React', 'Tailwind CSS', 'SPA'],
        teaser: 'My own portfolio website built as a Single Page Application. It uses React architecture and state routing.',
        fullDesc: 'The website you are currently browsing is an original project built on a modern frontend stack (React + Tailwind CSS). Instead of relying on ready-made WordPress templates, I created a fully responsive SPA with an integrated theme system (Dark/Light), translations (PL/EN), and PDF rendering.'
      },
      {
        id: 'photo1',
        title: 'Photographer Portfolio #1',
        code: '<Photo Portfolio />',
        color: 'from-orange-900/40 to-red-900/40',
        tags: ['Web Design', 'UI/UX'],
        teaser: 'Coming soon... Responsive gallery website created for a photographer friend.',
        fullDesc: 'Project currently in development. It will be a modern, minimalist photo gallery with image loading optimization for mobile devices.'
      },
      {
        id: 'photo2',
        title: 'Photographer Portfolio #2',
        code: '<Photo Portfolio />',
        color: 'from-cyan-900/40 to-blue-900/40',
        tags: ['Web Design', 'UI/UX'],
        teaser: 'Coming soon... Personalized web space for showcasing photo sessions for a friend.',
        fullDesc: 'Project in the wireframing phase. The site will feature a dynamic masonry layout for an elegant display of a photography portfolio.'
      }
    ]
  }
};

const skillData = [
  { name: "Python", percent: 85 },
  { name: "SQL / PostgreSQL", percent: 90 },
  { name: "Apache Spark", percent: 75 },
  { name: "Kafka", percent: 70 },
  { name: "Apache Airflow", percent: 65 },
  { name: "Power BI", percent: 80 },
];

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null); // Nowy stan dla szczegółów projektu
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
    setSelectedProject(null); // Resetuj widok projektu przy zmianie zakładki
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
    setActiveTab('projects'); // Upewnij się, że jesteśmy w zakładce projekty
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans selection:bg-blue-500/30 transition-colors duration-300`}>
      
      {/* Baner informacyjny - Pozostaje na swoim miejscu */}
      <div className={`${isDark ? 'bg-[#0b1120] border-gray-800' : 'bg-blue-600 border-blue-700 text-white'} border-b py-2.5 px-4 md:px-6 text-center text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 transition-colors relative z-50`}>
        <span className="relative flex h-2 w-2 shrink-0">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isDark ? 'bg-blue-500' : 'bg-white'} opacity-75`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 ${isDark ? 'bg-blue-500' : 'bg-white'}`}></span>
        </span>
        <span className={isDark ? "text-gray-400" : "text-blue-50"}>{t.banner}</span>
      </div>

      {/* Navbar */}
      <nav className={`sticky top-0 w-full z-40 ${isDark ? 'bg-[#050810]/90 border-gray-800' : 'bg-white/90 border-slate-200'} backdrop-blur-md border-b`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-widest flex items-center gap-2 cursor-pointer" onClick={() => handleTabChange('home')}>
            <span className="text-blue-500">{'{'}</span> DataCraft <span className="text-blue-500">{'}'}</span>
          </div>

          <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <button onClick={() => handleTabChange('home')} className={`${activeTab === 'home' ? 'text-blue-500' : theme.textMuted} hover:text-blue-400 transition-colors`}>{t.nav.home}</button>
            <button onClick={() => handleTabChange('experience')} className={`${activeTab === 'experience' ? 'text-blue-500' : theme.textMuted} hover:text-blue-400 transition-colors`}>{t.nav.exp}</button>
            <button onClick={() => handleTabChange('projects')} className={`${activeTab === 'projects' ? 'text-blue-500' : theme.textMuted} hover:text-blue-400 transition-colors`}>{t.nav.projects}</button>
            <button onClick={() => handleTabChange('dev')} className={`${activeTab === 'dev' ? 'text-blue-500' : theme.textMuted} hover:text-blue-400 transition-colors`}>{t.nav.dev}</button>
            <button onClick={() => handleTabChange('interests')} className={`${activeTab === 'interests' ? 'text-blue-500' : theme.textMuted} hover:text-blue-400 transition-colors`}>{t.nav.interests}</button>
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
            <div className={`absolute top-full left-0 w-full ${theme.cardBg} border-b ${theme.borderColor} flex flex-col py-4 px-6 gap-4 shadow-xl z-50 lg:hidden`}>
              <button onClick={() => handleTabChange('home')} className={`text-left font-medium ${activeTab === 'home' ? 'text-blue-500' : theme.text}`}>{t.nav.home}</button>
              <button onClick={() => handleTabChange('experience')} className={`text-left font-medium ${activeTab === 'experience' ? 'text-blue-500' : theme.text}`}>{t.nav.exp}</button>
              <button onClick={() => handleTabChange('projects')} className={`text-left font-medium ${activeTab === 'projects' ? 'text-blue-500' : theme.text}`}>{t.nav.projects}</button>
              <button onClick={() => handleTabChange('dev')} className={`text-left font-medium ${activeTab === 'dev' ? 'text-blue-500' : theme.text}`}>{t.nav.dev}</button>
              <button onClick={() => handleTabChange('interests')} className={`text-left font-medium ${activeTab === 'interests' ? 'text-blue-500' : theme.text}`}>{t.nav.interests}</button>
            </div>
          )}
        </div>
      </nav>

      <main className="pt-12 px-6 md:px-12 max-w-7xl mx-auto min-h-screen pb-24">
        
        {/* ==================================================== */}
        {/* TAB: HOME (Dashboard)                                  */}
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

            {/* ZAJARKA PROJEKTÓW (TYLKO 2 NAJLEPSZE) */}
            <section>
              <div className="text-center mb-12">
                <div className="text-blue-500 text-sm font-bold tracking-widest mb-2 uppercase">{t.projectsTab.title}</div>
                <h2 className="text-3xl md:text-4xl font-bold">{t.about.title}</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {t.projectsData.slice(0, 2).map((proj) => (
                  <div key={proj.id} className={`${theme.cardBg} border ${theme.borderColor} rounded-2xl overflow-hidden group shadow-sm flex flex-col`}>
                    <div className={`h-48 ${isDark ? 'bg-gray-900' : 'bg-slate-100'} p-6 relative overflow-hidden flex items-center justify-center`}>
                      <div className={`w-full h-full bg-gradient-to-br ${proj.color} rounded-xl border border-gray-700 shadow-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500`}>
                        <span className="text-white font-mono text-lg">{proj.code}</span>
                      </div>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold mb-2">{proj.title}</h3>
                      <p className={`${theme.textMuted} mb-6 text-sm flex-grow`}>{proj.teaser}</p>
                      <button onClick={() => handleProjectClick(proj.id)} className="text-blue-500 font-bold self-start hover:text-blue-400 transition-colors">
                        {t.projectsTab.viewDetailsBtn}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => handleTabChange('projects')} className={`w-full py-4 text-center rounded-xl border border-blue-500/30 ${isDark ? 'bg-blue-900/20 text-blue-400 hover:bg-blue-900/40' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'} font-bold transition-colors`}>
                {t.projectsTab.viewAllBtn}
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
              </div>
              <div className="relative">
                <div className={`absolute -left-[35px] md:-left-[51px] ${theme.bg} border-2 ${isDark ? 'border-gray-700' : 'border-slate-300'} rounded-full w-5 h-5 mt-1.5`}></div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>Brand Promoter</h3>
                <div className={`${isDark ? 'text-gray-500' : 'text-slate-400'} font-medium mb-3`}>Tefal | 03/2026 – {lang === 'PL' ? 'Obecnie' : 'Present'}</div>
              </div>
              <div className="relative">
                <div className={`absolute -left-[35px] md:-left-[51px] ${theme.bg} border-2 ${isDark ? 'border-gray-700' : 'border-slate-300'} rounded-full w-5 h-5 mt-1.5`}></div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>Maintenance Intern</h3>
                <div className={`${isDark ? 'text-gray-500' : 'text-slate-400'} font-medium mb-3`}>Schneider Electric | 07/2025 – 09/2025</div>
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
                    <div className="h-full bg-blue-600 rounded-full relative" style={{ width: `${skill.percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB: PROJEKTY (WIDOK LISTY LUB SZCZEGÓŁÓW)             */}
        {/* ==================================================== */}
        {activeTab === 'projects' && (
          <div className="animate-fade-in">
            {selectedProject ? (
              /* WIDOK SZCZEGÓŁÓW JEDNEGO PROJEKTU */
              <div>
                <button onClick={() => setSelectedProject(null)} className="mb-8 text-blue-500 font-bold flex items-center gap-2 hover:text-blue-400 transition-colors">
                  ← {t.projectsTab.backBtn}
                </button>
                {(() => {
                  const project = t.projectsData.find(p => p.id === selectedProject);
                  return (
                    <div className="max-w-4xl">
                      <div className={`w-full h-64 md:h-96 rounded-3xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-10 shadow-2xl border border-gray-700/50`}>
                        <span className="text-white font-mono text-2xl md:text-4xl">{project.code}</span>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h2>
                      <div className="flex flex-wrap gap-3 mb-10">
                        {project.tags.map(tag => (
                          <span key={tag} className={`text-sm font-mono text-blue-600 dark:text-blue-400 ${isDark ? 'bg-blue-900/20 border-blue-500/30' : 'bg-blue-50 border-blue-200'} px-3 py-1.5 rounded-lg border`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className={`${theme.cardBg} border ${theme.borderColor} p-8 rounded-2xl shadow-sm leading-relaxed text-lg ${theme.textMuted}`}>
                        {project.fullDesc}
                      </div>
                    </div>
                  );
                })()}
              </div>
            ) : (
              /* WIDOK SIATKI WSZYSTKICH PROJEKTÓW */
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
                  <span className="text-blue-500">#</span> {t.projectsTab.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {t.projectsData.map(proj => (
                    <div key={proj.id} className={`${theme.cardBg} border ${theme.borderColor} rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all shadow-sm flex flex-col group`}>
                      <div className={`h-40 ${isDark ? 'bg-gray-900' : 'bg-slate-100'} p-4 relative overflow-hidden flex items-center justify-center`}>
                        <div className={`w-full h-full bg-gradient-to-br ${proj.color} rounded-xl border border-gray-700 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500`}>
                          <span className="text-white font-mono text-sm">{proj.code}</span>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold mb-3">{proj.title}</h3>
                        <p className={`${theme.textMuted} mb-6 text-sm flex-grow line-clamp-3`}>{proj.teaser}</p>
                        <button onClick={() => handleProjectClick(proj.id)} className="text-blue-500 font-bold self-start hover:text-blue-400 transition-colors">
                          {t.projectsTab.viewDetailsBtn}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB: ROZWÓJ I CERTYFIKATY                            */}
        {/* ==================================================== */}
        {activeTab === 'dev' && (
          <div className="animate-fade-in space-y-16">
            
            {/* Aktualnie i Plany w gridzie */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* CURRENT */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-blue-500">⟳</span> {t.devTab.titleCurrent}
                </h2>
                <div className="space-y-4">
                  {t.devTab.currentList.map((item, idx) => (
                    <div key={idx} className={`${theme.cardBg} border ${theme.borderColor} p-6 rounded-2xl border-l-4 border-l-blue-500 shadow-sm`}>
                      <h4 className="font-bold text-lg mb-2">{item.name}</h4>
                      <p className={`${theme.textMuted} text-sm`}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FUTURE */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-purple-500">🚀</span> {t.devTab.titleFuture}
                </h2>
                <div className="space-y-4">
                  {t.devTab.futureList.map((item, idx) => (
                    <div key={idx} className={`${theme.cardBg} border ${theme.borderColor} p-6 rounded-2xl shadow-sm border-l-4 border-l-purple-500`}>
                      <h4 className="font-bold text-lg mb-2">{item.name}</h4>
                      <p className={`${theme.textMuted} text-sm`}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CERTYFIKATY */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-12 flex items-center gap-3">
                <span className="text-blue-500">#</span> {t.devTab.titleCerts}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                <div className={`${theme.cardBg} border ${theme.borderColor} rounded-3xl p-6 shadow-sm`}>
                  <h3 className="text-xl font-bold text-blue-500 mb-6">IBM Data Engineering</h3>
                  <div className={`w-full h-[300px] ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-slate-100 border-slate-200'} rounded-2xl overflow-hidden border`}>
                    <iframe src="/images/DataEngineering.pdf#toolbar=0&navpanes=0" className="w-full h-full" title="IBM Certificate"></iframe>
                  </div>
                </div>
                <div className={`${theme.cardBg} border ${theme.borderColor} rounded-3xl p-6 shadow-sm`}>
                  <h3 className="text-xl font-bold text-purple-500 mb-6">Adobe Content Creator</h3>
                  <div className={`w-full h-[300px] ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-slate-100 border-slate-200'} rounded-2xl overflow-hidden border`}>
                    <iframe src="/images/MultimediaContentCreator.pdf#toolbar=0&navpanes=0" className="w-full h-full" title="Adobe Certificate"></iframe>
                  </div>
                </div>
              </div>

              <h3 className={`text-xl font-bold mb-6 ${theme.textMuted} border-b ${theme.borderColor} pb-4`}>{t.devTab.modules}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {certificatesList.map((cert, index) => (
                  <div key={index} className={`${theme.cardBg} border ${theme.borderColor} rounded-xl overflow-hidden hover:border-blue-500 transition-colors flex flex-col shadow-sm group`}>
                    <div className={`p-4 ${isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-slate-50 border-slate-200'} border-b text-xs font-bold truncate ${theme.text}`} title={cert.name}>
                      {cert.name}
                    </div>
                    <div className={`w-full h-[160px] ${isDark ? 'bg-gray-950' : 'bg-slate-200'}`}>
                      <iframe src={`/images/${cert.file}#view=FitH&toolbar=0&navpanes=0`} className="w-full h-full pointer-events-auto" title={cert.name}></iframe>
                    </div>
                    <div className={`p-3 ${isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-slate-50 border-slate-200'} border-t text-center`}>
                      <a href={`/images/${cert.file}`} target="_blank" rel="noopener noreferrer" className="text-[10px] text-blue-500 group-hover:text-blue-400 font-bold uppercase tracking-wider flex items-center justify-center gap-2">
                        {t.devTab.openFull} ↗
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB: ZAINTERESOWANIA                                 */}
        {/* ==================================================== */}
        {activeTab === 'interests' && (
          <div className="animate-fade-in flex flex-col items-center justify-center py-20 text-center">
            <div className="text-6xl mb-6">🏕️</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.interestsTab.title}</h2>
            <p className={`${theme.textMuted} text-lg max-w-lg leading-relaxed border border-dashed ${theme.borderColor} p-8 rounded-2xl ${theme.cardBg}`}>
              {t.interestsTab.emptyState}
            </p>
          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className={`border-t ${theme.borderColor} ${theme.cardBg} py-8 mt-auto`}>
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