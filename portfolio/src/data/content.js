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
    banner: "Strona w trakcie aktywnej rozbudowy pod kątem rekrutacji. Wkrótce kolejne aktualizacje!",
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
      title: "Solidne podstawy, ciągły rozwój",
      desc: "Jestem studentem III roku kierunku Przemysł 4.0 na AGH. Łączę inżynierskie podejście do rozwiązywania problemów z kompetencjami IT. Obecnie zdobywam pierwsze doświadczenia komercyjne, a wolny czas inwestuję w rozwój twardych umiejętności (Python, SQL) poprzez certyfikacje i własne projekty.",
      stats: [
        { label: "Odbyte staże i praktyki", value: "3", icon: "🏢" },
        { label: "Ukończonych certyfikatów", value: "20+", icon: "🎓" },
        { label: "Zrealizowane projekty", value: "6+", icon: "💻" },
        { label: "Rok studiów (AGH)", value: "III", icon: "📚" }
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
      titleConf: "Wystąpienia i Publikacje Naukowe",
      modules: "Ukończone moduły techniczne",
      openFull: "Otwórz w pełnym oknie",
      currentList: [
        { name: "Databricks Certified Data Engineer Associate", desc: "Przygotowuję się do egzaminu certyfikującego na platformie Databricks." }
      ],
      futureList: [
        { name: "Studia magisterskie", desc: "Rozszerzenie kompetencji akademickich na studiach II stopnia na AGH. Poszerzenie wiedzy w zakresie pracy z danymi." }
      ],
      conferences: [
        { 
          name: "Międzynarodowa Konferencja Naukowa w Bułgarii", 
          topic: "Method and Materials", 
          desc: "Prelekcja na międzynarodowej konferencji w Bułgarii. Wystąpienie w ramach panelu 'Method and Materials', skupiające się na szczegółowym omówieniu metodologii badawczej, wykorzystanych materiałów oraz sposobów ich analizy.",
          articleFile: "bulgaria_article.pdf",
          presentationFile: "bulgaria_presentation.ppt", // ZMIENIONE NA .ppt
          image: "bulgaria_photo.png"
        }
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
        tags: ['Edge Computing', 'Apache Spark', 'Kafka', 'FastAPI', 'Three.js'],
        teaser: 'Zaawansowany system cyfrowego bliźniaka wózka AGV. Kompletny rurociąg danych End-to-End wykorzystujący przetwarzanie strumieniowe.',
        fullDesc: 'Zaawansowany projekt inżynieryjny realizowany w ramach Koła Naukowego Sensor AGH. Głównym celem było stworzenie od podstaw wirtualnej reprezentacji (Cyfrowego Bliźniaka) wózka AGV, unikając przy tym ciężkich, gotowych symulatorów robotycznych. Całość oparta jest na architekturze Edge Computing, przetwarzaniu strumieniowym oraz modelu Event-Driven. Zaprojektowałem i wdrożyłem pełny rurociąg danych (End-to-End Data Pipeline) w skonteneryzowanym środowisku (Docker Compose). Warstwa brzegowa (Edge) korzysta z autorskiego skryptu w Pythonie, który wylicza kinematykę kół Mecanum i symuluje zaszumione dane z czujników (prąd, temperatura, IMU). Strumień ten trafia na szynę Apache Kafka, a następnie jest analizowany w czasie rzeczywistym przez Apache Spark (PySpark) pod kątem anomalii, realizując założenia Predictive Maintenance. Przetworzone wyniki przesyłane są przez backend w FastAPI (WebSockets) do lekkiej aplikacji webowej opartej na Three.js. Dzięki zastosowaniu interpolacji liniowej (Lerp) model 3D porusza się niezwykle płynnie, a całość dopełniają osadzone wykresy analityczne z Grafany.',
        gallery: ['agv3.png', 'agv1.png', 'agv2.png']
      },
      {
        id: 'pge_baza',
        title: 'Baza Danych',
        code: '<Database />',
        color: 'from-green-900/40 to-emerald-900/40',
        tags: ['Work in progress'],
        teaser: 'Szczegóły projektu i wykorzystane technologie wkrótce.',
        fullDesc: 'Opis projektu jest w trakcie przygotowywania...',
        gallery: []
      },
      {
        id: 'pge_sciezka',
        title: 'Ścieżka Decyzyjna',
        code: '<Decision Path />',
        color: 'from-teal-900/40 to-blue-900/40',
        tags: ['Work in progress'],
        teaser: 'Szczegóły projektu i wykorzystane technologie wkrótce.',
        fullDesc: 'Opis projektu jest w trakcie przygotowywania...',
        gallery: []
      },
      {
        id: 'pge_raporty',
        title: 'Narzędzie Raportowe',
        code: '<Reporting Tool />',
        color: 'from-blue-900/40 to-indigo-900/40',
        tags: ['Work in progress'],
        teaser: 'Szczegóły projektu i wykorzystane technologie wkrótce.',
        fullDesc: 'Opis projektu jest w trakcie przygotowywania...',
        gallery: []
      },
      {
        id: 'cranes',
        title: 'Cranes Control System',
        code: '<Cranes Control System />',
        color: 'from-indigo-900/40 to-slate-800/40',
        tags: ['Automation', 'Hardware', 'Control Algorithms'],
        teaser: 'Zaawansowany projekt akademicki skupiający się na projektowaniu skrzynki elektrycznej i programowaniu sterowania dla modeli dźwigów suwnicowych.',
        fullDesc: 'Projekt inżynieryjno-naukowy łączący teorię sterowania z automatyką przemysłową. Brałem czynny udział w projektowaniu i fizycznym tworzeniu skrzynki elektrycznej, a także pisałem program odpowiedzialny za sterowanie suwnicą.',
        gallery: ['suwnica.png']
      },
      {
        id: 'portfolio',
        title: 'Personal Portfolio SPA',
        code: '<DataCraft Portfolio />',
        color: 'from-purple-900/40 to-pink-900/40',
        tags: ['React', 'Tailwind CSS', 'Vite', 'SPA'],
        teaser: 'Moja własna strona-wizytówka zbudowana jako Single Page Application. Zaawansowany ekosystem React i zarządzanie stanem.',
        fullDesc: 'Strona, którą właśnie przeglądasz, to autorski projekt zbudowany od podstaw bez użycia gotowych szablonów typu WordPress. Aplikacja została stworzona w architekturze Single Page Application (SPA) przy użyciu biblioteki React oraz Vite dla maksymalnej wydajności. Za warstwę wizualną odpowiada framework Tailwind CSS, który pozwolił na stworzenie w pełni responsywnego interfejsu z płynnym systemem zmiany motywów (Dark/Light). Projekt wykorzystuje zaawansowany routing sieciowy (react-router-dom), dynamiczne zarządzanie stanem aplikacji poprzez Context API oraz system wielojęzyczności (PL/EN).',
        gallery: ['jastrona1.png', 'jastrona2.png']
      },
      {
        id: 'photo1',
        title: 'Portfolio: Fotograf Sportowy',
        code: '<Justyna Portfolio />',
        color: 'from-orange-900/40 to-red-900/40',
        tags: ['Web Design', 'UI/UX', 'CSS Grid'],
        teaser: 'Dynamiczna wizualizacja strony dla fotografki i twórczyni wideo, specjalizującej się w ujęciach sportowych.',
        fullDesc: 'Projekt nowoczesnej strony internetowej dla Justyny – fotografki i twórczyni wideo specjalizującej się w dynamicznych ujęciach sportowych. Interfejs został zaprojektowany tak, aby w pierwszej kolejności eksponować ruch i energię płynącą z materiałów wideo oraz zdjęć z akcji. Zastosowano przemyślany system siatek (grid) do eleganckiej ekspozycji multimediów. Uwaga: Prezentowana wersja to na razie w pełni funkcjonalna wizualizacja w kodzie (mockup). Docelowo projekt zostanie wdrożony jako profesjonalna strona z własną domeną i dedykowanym hostingiem dla klienta.',
        gallery: ['justynastrona1.png', 'justynastrona2.png']
      },
      {
        id: 'photo2',
        title: 'Portfolio: Fotografia Artystyczna',
        code: '<Mikołaj Portfolio />',
        color: 'from-cyan-900/40 to-blue-900/40',
        tags: ['Web Design', 'Masonry Layout', 'UI/UX'],
        teaser: 'Klimatyczna i mroczna wizualizacja portfolio sieciowego dla artysty fotografa.',
        fullDesc: 'Zindywidualizowana przestrzeń sieciowa stworzona dla Mikołaja, fotografa o mocno artystycznym zacięciu. Strona skupia się na mroczniejszym, klimatycznym designie, który idealnie współgra z jego portfolio obejmującym fotografię artystyczną, relacje z koncertów oraz wydarzeń imprezowych. Zastosowano tu asymetryczny układ galerii (masonry layout), który pozwala na wyeksponowanie zdjęć o różnych proporcjach. Uwaga: Prezentowana wersja to na ten moment zaawansowana wizualizacja interfejsu. Docelowo witryna zostanie przeniesiona na docelowy, profesjonalny hosting wraz z podpięciem autorskiej domeny internetowej.',
        gallery: ['mikolajstrona1.png']
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
      title: "Solid foundations, continuous growth",
      desc: "I am a 3rd-year Industry 4.0 student at AGH University. I combine an engineering approach to problem-solving with IT competencies. Currently, I am gaining my first commercial experience and investing my free time in developing hard skills (Python, SQL) through certifications and personal projects.",
      stats: [
        { label: "Internships completed", value: "3", icon: "🏢" },
        { label: "Certificates achieved", value: "20+", icon: "🎓" },
        { label: "Projects completed", value: "6+", icon: "💻" },
        { label: "Year of study (AGH)", value: "3rd", icon: "📚" }
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
      titleConf: "Academic Conferences & Publications",
      modules: "Completed technical modules",
      openFull: "Open in full window",
      currentList: [
        { name: "Databricks Certified Data Engineer Associate", desc: "I am preparing for the Databricks certification exam." }
      ],
      futureList: [
        { name: "Master's Degree", desc: "Expanding academic competencies through graduate studies at AGH University. Broadening knowledge in the field of working with data." }
      ],
      conferences: [
        { 
          name: "International Academic Conference in Bulgaria", 
          topic: "Method and Materials", 
          desc: "Academic presentation at an international conference in Bulgaria. The talk, part of the 'Method and Materials' panel, focused on a detailed discussion of research methodology, materials used, and analysis methods.",
          articleFile: "bulgaria_article.pdf",
          presentationFile: "bulgaria_presentation.ppt", // ZMIENIONE NA .ppt
          image: "bulgaria_photo.png"
        }
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
        tags: ['Edge Computing', 'Apache Spark', 'Kafka', 'FastAPI', 'Three.js'],
        teaser: 'Advanced Digital Twin system for an AGV. An End-to-End data pipeline utilizing real-time stream processing.',
        fullDesc: 'An advanced engineering project developed within the Sensor AGH Science Club. The main goal was to build a virtual representation (Digital Twin) of an AGV cart from scratch, bypassing heavy, off-the-shelf robotics simulators. The entire system relies on Edge Computing, stream processing, and an Event-Driven architecture. I designed and deployed a complete End-to-End Data Pipeline within a containerized environment (Docker Compose). The edge layer uses a custom Python script that calculates Mecanum wheel kinematics and simulates noisy sensor data (current, temperature, IMU). This data stream is ingested by Apache Kafka and then analyzed in real-time by Apache Spark (PySpark) to detect anomalies, fulfilling Predictive Maintenance objectives. The processed results are served via a FastAPI backend (WebSockets) to a lightweight web application based on Three.js. Thanks to linear interpolation (Lerp) algorithms, the 3D model moves smoothly, and the entire setup is complemented by embedded analytical dashboards from Grafana.',
        gallery: ['agv3.png', 'agv1.png', 'agv2.png']
      },
      {
        id: 'pge_baza',
        title: 'Database',
        code: '<Database />',
        color: 'from-green-900/40 to-emerald-900/40',
        tags: ['Work in progress'],
        teaser: 'Project details and technologies coming soon.',
        fullDesc: 'Project description is currently being prepared...',
        gallery: []
      },
      {
        id: 'pge_sciezka',
        title: 'Decision Path',
        code: '<Decision Path />',
        color: 'from-teal-900/40 to-blue-900/40',
        tags: ['Work in progress'],
        teaser: 'Project details and technologies coming soon.',
        fullDesc: 'Project description is currently being prepared...',
        gallery: []
      },
      {
        id: 'pge_raporty',
        title: 'Reporting Tool',
        code: '<Reporting Tool />',
        color: 'from-blue-900/40 to-indigo-900/40',
        tags: ['Work in progress'],
        teaser: 'Project details and technologies coming soon.',
        fullDesc: 'Project description is currently being prepared...',
        gallery: []
      },
      {
        id: 'cranes',
        title: 'Cranes Control System',
        code: '<Cranes Control System />',
        color: 'from-indigo-900/40 to-slate-800/40',
        tags: ['Automation', 'Hardware', 'Control Algorithms'],
        teaser: 'Advanced academic project focusing on electrical box design and control programming for overhead crane models.',
        fullDesc: 'An engineering and scientific project combining control theory with industrial automation. I actively participated in designing and physically building the electrical box, as well as writing the program responsible for crane control.',
        gallery: ['suwnica.png']
      },
      {
        id: 'portfolio',
        title: 'Personal Portfolio SPA',
        code: '<DataCraft Portfolio />',
        color: 'from-purple-900/40 to-pink-900/40',
        tags: ['React', 'Tailwind CSS', 'Vite', 'SPA'],
        teaser: 'My own portfolio website built as a Single Page Application. Features React architecture and state routing.',
        fullDesc: 'The website you are currently browsing is an original project built from scratch without using pre-made templates like WordPress. The application was created in a Single Page Application (SPA) architecture using React and Vite for maximum performance. The visual layer is powered by Tailwind CSS, allowing for a fully responsive interface with a seamless theme switching system (Dark/Light). The project utilizes advanced routing (react-router-dom), dynamic state management through the Context API, and a multi-language system (PL/EN).',
        gallery: ['jastrona1.png', 'jastrona2.png']
      },
      {
        id: 'photo1',
        title: 'Portfolio: Sports Photographer',
        code: '<Justyna Portfolio />',
        color: 'from-orange-900/40 to-red-900/40',
        tags: ['Web Design', 'UI/UX', 'CSS Grid'],
        teaser: 'Dynamic visualization of a website for a photographer and videographer specializing in sports shots.',
        fullDesc: 'A modern website project for Justyna – a photographer and videographer specializing in dynamic sports action. The interface is designed to immediately highlight the movement and energy flowing from the video content and action photos. A thoughtful grid system was applied for an elegant display of multimedia. Note: The showcased version is currently a fully functional code-based visualization (mockup). Ultimately, the project will be deployed as a professional website with a custom domain and dedicated hosting for the client.',
        gallery: ['justynastrona1.png', 'justynastrona2.png']
      },
      {
        id: 'photo2',
        title: 'Portfolio: Fine Art Photography',
        code: '<Mikołaj Portfolio />',
        color: 'from-cyan-900/40 to-blue-900/40',
        tags: ['Web Design', 'Masonry Layout', 'UI/UX'],
        teaser: 'A moody and atmospheric visualization of a web portfolio for a fine art photographer.',
        fullDesc: 'A personalized web space created for Mikołaj, a photographer with a strong artistic flair. The site focuses on a darker, moody design that perfectly complements his portfolio, which includes fine art photography, concert coverage, and event photography. An asymmetrical gallery layout (masonry layout) is used to properly display photos of varying aspect ratios. Note: The showcased version is an advanced interface visualization at this stage. The site will eventually be migrated to a professional hosting environment with a custom domain attached.',
        gallery: ['mikolajstrona1.png']
      }
    ]
  }
};