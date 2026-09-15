export const certificatesList = [
  { name: "Adobe Multimedia Content Creator", file: "MultimediaContentCreator.pdf" },
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
  { name: "Machine Learning Onramp", file: "machinelearingonramp.pdf" },
  { name: "Simulink Onramp", file: "simulinkonramp.pdf" },
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
      jobs: [
        {
          role: "Intern (Application Development)",
          company: "PGE Energia Ciepła S.A.",
          period: "07/2026 – Obecnie",
          logo: "pge.png",
          tasks: [
            "Zaprojektowałem i wdrożyłem od zera potoki danych (ETL) do masowej konwersji i ładowania dokumentów.",
            "Zbudowałem pełnoprawną aplikację webową wspierającą wyszukiwanie historycznych zapytań przetargowych oraz automatyzację obiegów akceptacyjnych.",
            "Ściśle współpracowałem z działami biznesowymi przy modelowaniu bazy danych, optymalizując architekturę pod kątem niezawodności."
          ]
        },
        {
          role: "Brand Promoter",
          company: "Media Expert",
          period: "03/2026 – 05/2026",
          logo: "media-expert.png",
          tasks: [
            "Doradztwo techniczne i prowadzenie prezentacji zaawansowanych funkcji urządzeń klasy premium.",
            "Błyskawiczna analiza potrzeb klienta i przekładanie skomplikowanego języka technicznego na realne korzyści użytkowe."
          ]
        },
        {
          role: "Maintenance Intern",
          company: "Schneider Electric",
          period: "07/2025 – 09/2025",
          logo: "schneider.png",
          tasks: [
            "Monitorowałem efektywność linii produkcyjnych, aktywnie uczestnicząc w codziennych spotkaniach operacyjnych SIM (Short Interval Management).",
            "Przeprowadziłem kompleksową inwentaryzację części zamiennych, zapewniając ciągłość procesów utrzymania ruchu.",
            "Zaktualizowałem dokumentację BHP oraz procedury LOTO (Lockout-Tagout).",
            "Wykonywałem naprawy mechaniczne i elektryczne w ramach wsparcia zespołu utrzymania ruchu."
          ]
        },
        {
          role: "Maintenance Intern",
          company: "Velvet Care",
          period: "07/2024 – 09/2024",
          logo: "velvet.png",
          tasks: [
            "Asystowałem przy nadzorze technicznym nad parkiem maszynowym i wspierałem inżynierów w naprawach mechanicznych linii produkcyjnych."
          ]
        }
      ],
      stackTitle: "Technologie i Ekosystem",
      skills: [
        {
          category: "Data Engineering & Backend",
          icon: "🗄️",
          items: ["Python", "SQL", "Apache Spark", "Apache Kafka", "ETL Pipelines", "Big Data", "NoSQL"]
        },
        {
          category: "IoT & Przemysł 4.0",
          icon: "🤖",
          items: ["Raspberry Pi 5", "ESP32", "ROS 2", "Lidar (RPLIDAR)", "Digital Twins", "MPU6050 Sensors", "Uprawnienia SEP"]
        },
        {
          category: "Chmura, Narzędzia & DevOps",
          icon: "☁️",
          items: ["Docker", "Git", "Linux (Bash, SSH, VNC)", "Databricks", "Power BI", "Apache Airflow"]
        },
        {
          category: "Web Dev & Grafika",
          icon: "💻",
          items: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS", "Three.js", "Adobe Content Creation", "Davinci Resolve"]
        }
      ]
    },
    devTab: {
      titleCurrent: "Aktualnie w realizacji",
      titleFuture: "Plany na najbliższą przyszłość",
      titleCerts: "Edukacja, Certyfikaty i Szkolenia",
      modules: "Ukończone moduły techniczne",
      openFull: "Otwórz w pełnym oknie",
      currentList: [
        { name: "Databricks Certified Data Engineer Associate", desc: "Przygotowuję się do egzaminu certyfikującego na platformie Databricks." }
      ],
      futureList: [
        { name: "Studia magisterskie", desc: "Rozszerzenie kompetencji akademickich na studiach II stopnia na AGH. Poszerzenie wiedzy w zakresie pracy z danymi." }
      ]
    },
    projectsTab: {
      title: "Moje Projekty",
      backBtn: "Wróć do listy projektów",
      viewDetailsBtn: "Szczegóły projektu →",
      viewAllBtn: "Zobacz wszystkie projekty ↗"
    },
    interestsTab: {
      title: "Zainteresowania",
      intro: "Poza pracą z danymi rozwijam inne pasje. Poniżej najważniejsze z nich:",
      sections: [
        {
          id: "sport",
          icon: "🏃‍♂️",
          title: "Bieganie i Kalistenika",
          desc: "Miałem swój intensywny okres biegania. Przygotowywałem się na 20. Półmaraton Warszawski, który udało mi się ukończyć z czasem 2:00:05. Po nim musiałem wyleczyć kontuzję i powoli zbieram się do powrotu. Oprócz biegania fascynuje mnie kalistenika. Moim największym celem jest w przyszłości zrobić ludzką flagę.",
          tags: ["Półmaraton", "Dragon Flag", "Human Flag", "Trening siłowy"],
          gallery: [null, null, null, null]
        },
        {
          id: "video",
          icon: "🎬",
          title: "Montaż wideo",
          desc: "Epizodycznie, kiedy wpadnie mi do głowy fajny pomysł, lubię tworzyć materiały wideo na YouTube/TikTok. Używałem programów takich jak Shotcut, Adobe Premiere Pro, a obecnie DaVinci Resolve.",
          tags: ["DaVinci Resolve", "YouTube", "Color Grading", "Content Creation"],
          gallery: [
            'https://www.youtube.com/embed/09rXO7TtcRs?si=Y0iKfKv7PecQg1-7', 
            'https://www.youtube.com/embed/NuZjSlZ6cP0?si=G_XVlMHTnfy-0eZk', 
            'https://www.youtube.com/embed/0Kg0Xh1ycXc?si=ugKiZCiou5aG4Vcj', 
            'interestsvideo2.png'
          ]
        },
        {
          id: "gaming",
          icon: "🎮",
          title: "Gaming",
          desc: "Gry są dla mnie formą resetu i aktywnego odpoczynku dla mózgu. Mam na swoim koncie wiele tytułów, od gier typu FPS, przez strategiczne, survivalowe, aż po przygodowe.",
          tags: ["Marvel Rivals", "Kingdom Rush", "PC Optimization"],
          gallery: [
            'interestsgame1.png', 
            'interestsgame2.png', 
            'interestsgame3.png', 
            'interestsgame4.png'
          ]
        },
        {
          id: "marvel",
          icon: "🦸‍♂️",
          title: "Uniwersum Marvela",
          desc: "Jestem ogromnym fanem tego świata od lat. Każdy film, serial czy nawet trailer to ogromna ekscytacja, którą lubię się dzielić z innymi.",
          tags: ["MCU", "Komiksy", "Popkultura"],
          gallery: [
            'interestsmarvel4.gif', 
            'interestsmarvel1.png', 
            'interestsmarvel2.png', 
            'interestsmarvel3.png'
          ]
        }
      ]
    },
    projectsData: [
      {
        id: 'agv',
        title: 'AGV Digital Twin',
        code: '<AGV Digital Twin />',
        color: 'from-blue-900/40 to-purple-900/40',
        tags: ['Python', 'IoT / Sensors', 'Kafka'],
        teaser: 'Architektura Cyfrowego Bliźniaka dla autonomicznego pojazdu AGV. Integracja danych z czujników w czasie rzeczywistym oraz wizualizacja.',
        fullDesc: 'Rozbudowany projekt realizowany w ramach Koła Naukowego Sensor AGH. Głównym celem jest stworzenie wirtualnej reprezentacji (Cyfrowego Bliźniaka) wózka AGV. Architektura opiera się na ciągłym strumieniowaniu danych z czujników fizycznych za pomocą Apache Kafka, przetwarzaniu ich w Pythonie oraz mapowaniu w przestrzeni 3D. Projekt wymaga zestrojenia warstwy sprzętowej z nowoczesnymi rozwiązaniami Data Engineering.',
        gallery: []
      },
      {
        id: 'pge',
        title: 'Historical Tender Processing',
        code: '<PGE Data Pipelines />',
        color: 'from-green-900/40 to-blue-900/40',
        tags: ['HTML / CSS', 'JavaScript', 'Python'],
        teaser: 'Projekt komercyjny (PGE). Aplikacja webowa do przetwarzania i wyszukiwania danych o dawnych przetargach.',
        fullDesc: 'Aplikacja stworzona podczas stażu w PGE Energia Ciepła S.A. Zbudowałem interfejs użytkownika oraz logikę aplikacji wykorzystując HTML, CSS oraz JavaScript. System zajmuje się prezentacją i wygodnym wyszukiwaniem dokumentacji z historycznych procedur przetargowych, umożliwiając szybki dostęp do zasobów przez pracowników biznesowych.',
        gallery: []
      },
      {
        id: 'cranes',
        title: 'Cranes Control System',
        code: '<Cranes Control System />',
        color: 'from-indigo-900/40 to-slate-800/40',
        tags: ['Automation', 'Matlab', 'Control Algorithms'],
        teaser: 'Zaawansowany projekt akademicki skupiający się na algorytmach sterowania dla modeli dźwigów suwnicowych (Matlab, Simulink).',
        fullDesc: 'Projekt inżynieryjno-naukowy łączący teorię sterowania z automatyką przemysłową. Brałem czynny udział w projektowaniu i tworzeniu skrzynki elektrycznej oraz pisałem program do sterowania suwnicą. Ponadto, wykorzystując środowisko Matlab i Simulink, zaprojektowałem i zasymulowałem zachowanie modelu matematycznego, którego celem było wyeliminowanie wahań ładunku podczas dynamicznych zmian pozycji.',
        gallery: []
      },
      {
        id: 'portfolio',
        title: 'Personal Portfolio SPA',
        code: '<DataCraft Portfolio />',
        color: 'from-purple-900/40 to-pink-900/40',
        tags: ['React', 'Tailwind CSS', 'SPA'],
        teaser: 'Moja własna strona-wizytówka zbudowana jako Single Page Application. Wykorzystuje architekturę Reacta i system routingu stanów.',
        fullDesc: 'Strona, którą właśnie przeglądasz, to autorski projekt zbudowany w nowoczesnym stosie frontendowym (React + Tailwind CSS). Zamiast polegać na gotowych szablonach z WordPressa, stworzyłem w pełni responsywną aplikację SPA (Single Page Application) ze zintegrowanym systemem motywów (Dark/Light), tłumaczeniami (PL/EN) oraz renderowaniem PDF-ów.',
        gallery: []
      },
      {
        id: 'photo1',
        title: 'Portfolio Fotografa #1',
        code: '<Photo Portfolio />',
        color: 'from-orange-900/40 to-red-900/40',
        tags: ['Web Design', 'UI/UX'],
        teaser: 'Wkrótce... Responsywna strona wizytówka-galeria tworzona na zlecenie znajomego fotografa.',
        fullDesc: 'Projekt w trakcie realizacji. Będzie to nowoczesna, minimalistyczna galeria zdjęć z optymalizacją ładowania grafik pod kątem urządzeń mobilnych.',
        gallery: []
      },
      {
        id: 'photo2',
        title: 'Portfolio Fotografa #2',
        code: '<Photo Portfolio />',
        color: 'from-cyan-900/40 to-blue-900/40',
        tags: ['Web Design', 'UI/UX'],
        teaser: 'Wkrótce... Spersonalizowana przestrzeń sieciowa do prezentacji sesji zdjęciowych dla zaprzyjaźnionego artysty.',
        fullDesc: 'Projekt w fazie planowania układu (wireframing). Strona będzie zawierała dynamiczny system siatki (masonry layout) do eleganckiej ekspozycji portfolio fotograficznego.',
        gallery: []
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
      jobs: [
        {
          role: "Intern (Application Development)",
          company: "PGE Energia Ciepła S.A.",
          period: "07/2026 – Present",
          logo: "pge.png",
          tasks: [
            "Designed and implemented data pipelines (ETL) from scratch for bulk document conversion and loading.",
            "Built a full-fledged web application supporting the search for historical tender queries and automation of approval workflows.",
            "Collaborated closely with business departments on database modeling, optimizing architecture for reliability."
          ]
        },
        {
          role: "Brand Promoter",
          company: "Media Expert",
          period: "03/2026 – 05/2026",
          logo: "media-expert.png",
          tasks: [
            "Provided technical consulting and conducted live demonstrations of advanced premium appliance features.",
            "Quickly analyzed customer needs and translated complex technical language into tangible user benefits."
          ]
        },
        {
          role: "Maintenance Intern",
          company: "Schneider Electric",
          period: "07/2025 – 09/2025",
          logo: "schneider.png",
          tasks: [
            "Monitored production line efficiency by actively participating in daily SIM (Short Interval Management) operational meetings.",
            "Conducted a comprehensive spare parts inventory, ensuring continuity of maintenance processes.",
            "Updated OHS documentation and LOTO (Lockout-Tagout) procedures.",
            "Performed mechanical and electrical repairs as part of the maintenance team support."
          ]
        },
        {
          role: "Maintenance Intern",
          company: "Velvet Care",
          period: "07/2024 – 09/2024",
          logo: "velvet.png",
          tasks: [
            "Assisted engineers with technical supervision of the machinery park and supported mechanical repairs of production lines."
          ]
        }
      ],
      stackTitle: "Technologies & Ecosystem",
      skills: [
        {
          category: "Data Engineering & Backend",
          icon: "🗄️",
          items: ["Python", "SQL", "Apache Spark", "Apache Kafka", "ETL Pipelines", "Big Data", "NoSQL"]
        },
        {
          category: "IoT & Industry 4.0",
          icon: "🤖",
          items: ["Raspberry Pi 5", "ESP32", "ROS 2", "Lidar (RPLIDAR)", "Digital Twins", "MPU6050 Sensors", "SEP Electrical License"]
        },
        {
          category: "Cloud, Tools & DevOps",
          icon: "☁️",
          items: ["Docker", "Git", "Linux (Bash, SSH, VNC)", "Databricks", "Power BI", "Apache Airflow"]
        },
        {
          category: "Web Dev & Graphics",
          icon: "💻",
          items: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS", "Three.js", "Adobe Content Creation", "Davinci Resolve"]
        }
      ]
    },
    devTab: {
      titleCurrent: "Currently Learning",
      titleFuture: "Upcoming Plans",
      titleCerts: "Education & Certifications",
      modules: "Completed technical modules",
      openFull: "Open in full window",
      currentList: [
        { name: "Databricks Certified Data Engineer Associate", desc: "I am preparing for the Databricks certification exam." }
      ],
      futureList: [
        { name: "Master's Degree", desc: "Expanding academic competencies through graduate studies at AGH University. Broadening knowledge in the field of working with data." }
      ]
    },
    projectsTab: {
      title: "My Projects",
      backBtn: "Back to all projects",
      viewDetailsBtn: "Project Details →",
      viewAllBtn: "View all projects ↗"
    },
    interestsTab: {
      title: "Interests",
      intro: "Beyond working with data, I pursue other passions. Below are the most important ones:",
      sections: [
        {
          id: "sport",
          icon: "🏃‍♂️",
          title: "Running & Calisthenics",
          desc: "I had an intensive running phase. I prepared for the 20th Warsaw Half Marathon, which I successfully completed with a time of 2:00:05. Afterwards, I had to heal an injury and I'm slowly getting ready to return. Besides running, I am fascinated by calisthenics. My biggest goal for the future is to achieve the human flag.",
          tags: ["Half-Marathon", "Dragon Flag", "Human Flag", "Strength Training"],
          gallery: [null, null, null, null]
        },
        {
          id: "video",
          icon: "🎬",
          title: "Video Editing",
          desc: "Occasionally, when a cool idea pops into my head, I like to create video content for YouTube/TikTok. I have used programs like Shotcut, Adobe Premiere Pro, and currently DaVinci Resolve.",
          tags: ["DaVinci Resolve", "YouTube", "Color Grading", "Content Creation"],
          gallery: [
            'https://www.youtube.com/embed/09rXO7TtcRs?si=Y0iKfKv7PecQg1-7', 
            'https://www.youtube.com/embed/NuZjSlZ6cP0?si=G_XVlMHTnfy-0eZk', 
            'https://www.youtube.com/embed/0Kg0Xh1ycXc?si=ugKiZCiou5aG4Vcj', 
            'interestsvideo2.png'
          ]
        },
        {
          id: "gaming",
          icon: "🎮",
          title: "Gaming",
          desc: "Games are a form of reset and active rest for my brain. I have played many titles, ranging from FPS and strategy games, through survival, to adventure games.",
          tags: ["Marvel Rivals", "Kingdom Rush", "PC Optimization"],
          gallery: [
            'interestsgame1.png', 
            'interestsgame2.png', 
            'interestsgame3.png', 
            'interestsgame4.png'
          ]
        },
        {
          id: "marvel",
          icon: "🦸‍♂️",
          title: "Marvel Universe",
          desc: "I have been a huge fan of this world for years. Every movie, series, or even trailer brings huge excitement that I love to share with others.",
          tags: ["MCU", "Comics", "Pop Culture"],
          gallery: [
            'interestsmarvel4.gif', 
            'interestsmarvel1.png', 
            'interestsmarvel2.png', 
            'interestsmarvel3.png'
          ]
        }
      ]
    },
    projectsData: [
      {
        id: 'agv',
        title: 'AGV Digital Twin',
        code: '<AGV Digital Twin />',
        color: 'from-blue-900/40 to-purple-900/40',
        tags: ['Python', 'IoT / Sensors', 'Kafka'],
        teaser: 'Digital Twin architecture for an AGV. Real-time sensor data integration and visualization.',
        fullDesc: 'An extensive project developed within the Sensor AGH Science Club. The main goal is to create a virtual representation (Digital Twin) of an AGV cart. The architecture is based on continuous streaming of data from physical sensors using Apache Kafka, processing it in Python, and mapping it in 3D space.',
        gallery: []
      },
      {
        id: 'pge',
        title: 'Historical Tender Processing',
        code: '<PGE Data Pipelines />',
        color: 'from-green-900/40 to-blue-900/40',
        tags: ['HTML / CSS', 'JavaScript', 'Python'],
        teaser: 'Commercial project (PGE). Web application for processing and searching historical tender data.',
        fullDesc: 'Application created during an internship at PGE Polish Energy Group. I built the user interface and application logic using HTML, CSS, and JavaScript. The system handles the presentation and convenient searching of documentation from historical tender procedures, enabling quick access to resources for business users.',
        gallery: []
      },
      {
        id: 'cranes',
        title: 'Cranes Control System',
        code: '<Cranes Control System />',
        color: 'from-indigo-900/40 to-slate-800/40',
        tags: ['Automation', 'Matlab', 'Control Algorithms'],
        teaser: 'Advanced academic project focusing on control algorithms for overhead crane models (Matlab, Simulink).',
        fullDesc: 'An engineering and scientific project combining control theory with industrial automation. I actively participated in designing and building the electrical box and wrote the crane control program. Furthermore, using Matlab and Simulink, I designed and simulated the behavior of a mathematical model aimed at eliminating payload sway during dynamic position changes.',
        gallery: []
      },
      {
        id: 'portfolio',
        title: 'Personal Portfolio SPA',
        code: '<DataCraft Portfolio />',
        color: 'from-purple-900/40 to-pink-900/40',
        tags: ['React', 'Tailwind CSS', 'SPA'],
        teaser: 'My own portfolio website built as a Single Page Application. It uses React architecture and state routing.',
        fullDesc: 'The website you are currently browsing is an original project built on a modern frontend stack (React + Tailwind CSS). Instead of relying on ready-made WordPress templates, I created a fully responsive SPA with an integrated theme system (Dark/Light), translations (PL/EN), and PDF rendering.',
        gallery: []
      },
      {
        id: 'photo1',
        title: 'Photographer Portfolio #1',
        code: '<Photo Portfolio />',
        color: 'from-orange-900/40 to-red-900/40',
        tags: ['Web Design', 'UI/UX'],
        teaser: 'Coming soon... Responsive gallery website created for a photographer friend.',
        fullDesc: 'Project currently in development. It will be a modern, minimalist photo gallery with image loading optimization for mobile devices.',
        gallery: []
      },
      {
        id: 'photo2',
        title: 'Photographer Portfolio #2',
        code: '<Photo Portfolio />',
        color: 'from-cyan-900/40 to-blue-900/40',
        tags: ['Web Design', 'UI/UX'],
        teaser: 'Coming soon... Personalized web space for showcasing photo sessions.',
        fullDesc: 'Project in the wireframing phase. The site will feature a dynamic masonry layout for an elegant display of a photography portfolio.',
        gallery: []
      }
    ]
  }
};