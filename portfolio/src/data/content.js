// src/data/content.js

export const certificatesList = [
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

export const skillData = [
  { name: "Python", percent: 85 },
  { name: "SQL / PostgreSQL", percent: 90 },
  { name: "Apache Spark", percent: 75 },
  { name: "Kafka", percent: 70 },
  { name: "Apache Airflow", percent: 65 },
  { name: "Power BI", percent: 80 },
];

export const translations = {
  PL: {
    banner: "Strona w trakcie aktywnej rozbudowy pod kątem rekrutacji (Data Engineering & SQL). Wkrótce kolejne aktualizacje!",
    nav: { home: "Start", exp: "Doświadczenie", projects: "Projekty", dev: "Rozwój", interests: "Zainteresowania" },
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
        teaser: 'Moja własna strona-wizytówka zbudowana jako Single Page Application. Wykorzystuje architekturę Reacta i system routingu.',
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
        teaser: 'Wkrótce... Spersonalizowana przestrzeń sieciowa do prezentacji sesji zdjęciowych.',
        fullDesc: 'Projekt w fazie planowania układu (wireframing). Strona będzie zawierała dynamiczny system siatki (masonry layout) do eleganckiej ekspozycji portfolio fotograficznego.'
      }
    ]
  },
  EN: {
    banner: "Site under active development for recruitment purposes. More updates coming soon!",
    nav: { home: "Home", exp: "Experience", projects: "Projects", dev: "Development", interests: "Interests" },
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
        teaser: 'Coming soon... Personalized web space for showcasing photo sessions.',
        fullDesc: 'Project in the wireframing phase. The site will feature a dynamic masonry layout for an elegant display of a photography portfolio.'
      }
    ]
  }
};