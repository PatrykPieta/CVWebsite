import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const certificates = [
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

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white font-sans selection:bg-purple-500/30">
      
      {/* Baner - Strona w budowie */}
      <div className="bg-[#121b2e] border-b border-blue-900/30 py-2.5 px-6 text-center text-xs sm:text-sm text-gray-400 flex items-center justify-center gap-3">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        <span>Strona w trakcie aktywnej rozbudowy pod kątem rekrutacji (Data Engineering & SQL). Wkrótce kolejne aktualizacje!</span>
      </div>

      {/* Nawigacja z Twojego screena */}
      <nav className="flex justify-between items-center py-8 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-widest flex items-center gap-2">
          <span className="text-blue-500">{'>_'}</span> PORTFOLIO
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <button onClick={() => setActiveTab('home')} className={`${activeTab === 'home' ? 'text-blue-500' : 'text-gray-400 hover:text-gray-200'} transition-colors`}>Home</button>
          <button onClick={() => setActiveTab('experience')} className={`${activeTab === 'experience' ? 'text-blue-500' : 'text-gray-400 hover:text-gray-200'} transition-colors`}>Doświadczenie & Skille</button>
          <button onClick={() => setActiveTab('projects')} className={`${activeTab === 'projects' ? 'text-blue-500' : 'text-gray-400 hover:text-gray-200'} transition-colors`}>Projekty</button>
          <button onClick={() => setActiveTab('certificates')} className={`${activeTab === 'certificates' ? 'text-blue-500' : 'text-gray-400 hover:text-gray-200'} transition-colors`}>Certyfikaty</button>
        </div>
      </nav>

      {/* Główna zawartość */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        
        {/* ZAKŁADKA: HOME (Odwzorowana z Twojego screena) */}
        {activeTab === 'home' && (
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6 mt-4 animate-fade-in">
            <div className="lg:w-1/2">
              <div className="text-blue-600 font-bold tracking-wider text-xs md:text-sm mb-6 uppercase flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                Technology for industry 4.0 student
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-white">
                Buduję <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">rozwiązania oparte na danych.</span>
              </h1>
              <p className="text-gray-400 text-base md:text-lg mb-10 max-w-lg leading-relaxed">
                Łączę świat systemów przemysłowych z nowoczesnym oprogramowaniem. Projektuję zautomatyzowane przepływy danych (Python, SQL, Apache Spark) i przekładam wymagania biznesowe na wydajne rozwiązania.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => setActiveTab('projects')} className="bg-[#4f46e5] hover:bg-[#4338ca] text-white px-8 py-3.5 rounded-lg font-semibold transition-all">
                  Zobacz projekty &rarr;
                </button>
                <a href="/images/PATRYK_PIĘTA_FlowCV_Resume_2026-09-08.pdf" target="_blank" rel="noopener noreferrer" className="border border-gray-600 hover:border-gray-400 text-gray-300 px-8 py-3.5 rounded-lg font-semibold transition-all flex items-center gap-2">
                  Pobierz CV 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-gray-800/50 bg-[#121b2e] flex items-center justify-center overflow-hidden shadow-2xl relative">
                {/* Tutaj jest podpięte Twoje zdjęcie profilowe */}
                <img src="/images/IMG_3819.jpg" alt="Patryk Pięta" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 rounded-full border border-blue-500/10"></div>
              </div>
            </div>
          </div>
        )}

        {/* ZAKŁADKA: DOŚWIADCZENIE & SKILLE */}
        {activeTab === 'experience' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 animate-fade-in">
            {/* Doświadczenie */}
            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="text-purple-500">#</span> Doświadczenie
              </h2>
              <div className="space-y-10 border-l border-gray-800 pl-6 ml-3">
                <div className="relative">
                  <div className="absolute -left-[31px] bg-[#0a0f1c] border border-blue-500 rounded-full w-4 h-4 mt-1.5"></div>
                  <h3 className="text-xl font-bold">Intern (Application Development)</h3>
                  <div className="text-blue-400 text-sm font-medium mb-3">PGE Polish Energy Group | 07/2026 – Obecnie</div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Tworzenie aplikacji webowych i serwisów backendowych do przetwarzania historycznych danych przetargowych. Implementacja zautomatyzowanych przepływów danych (ETL) przy użyciu Pythona i SQL.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[31px] bg-[#0a0f1c] border border-gray-700 rounded-full w-4 h-4 mt-1.5"></div>
                  <h3 className="text-xl font-bold text-gray-300">Brand Promoter</h3>
                  <div className="text-gray-500 text-sm font-medium mb-3">Tefal | 03/2026 – Obecnie</div>
                </div>
                <div className="relative">
                  <div className="absolute -left-[31px] bg-[#0a0f1c] border border-gray-700 rounded-full w-4 h-4 mt-1.5"></div>
                  <h3 className="text-xl font-bold text-gray-300">Maintenance Intern</h3>
                  <div className="text-gray-500 text-sm font-medium mb-3">Schneider Electric | 07/2025 – 09/2025</div>
                </div>
              </div>
            </div>
            
            {/* Skille */}
            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="text-purple-500">#</span> Tech Stack
              </h2>
              <div className="bg-[#121b2e] border border-gray-800/50 rounded-2xl p-8">
                <div className="mb-8">
                  <h3 className="text-gray-400 uppercase tracking-widest text-xs font-bold mb-4">Data Engineering & Backend</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {['Python', 'SQL', 'NoSQL', 'ETL Pipelines', 'Apache Spark', 'Kafka', 'Airflow'].map(tech => (
                      <span key={tech} className="bg-blue-900/20 border border-blue-500/30 text-blue-300 px-4 py-1.5 rounded text-sm">{tech}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-gray-400 uppercase tracking-widest text-xs font-bold mb-4">Narzędzia & Przemysł 4.0</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {['Power BI', 'Advanced Excel', 'Linux Shell', 'Git', 'Matlab', 'SolidWorks'].map(tech => (
                      <span key={tech} className="bg-gray-800 border border-gray-700 text-gray-300 px-4 py-1.5 rounded text-sm">{tech}</span>
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
             <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="text-purple-500">#</span> Wybrane Projekty
              </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#121b2e] border border-gray-800/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-blue-900/20 rounded-lg text-blue-400">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">AGV Digital Twin</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  Projekt architektury Cyfrowego Bliźniaka dla pojazdu AGV. Integracja danych z czujników IoT w czasie rzeczywistym, przetwarzanie danych przy użyciu Kafki oraz wizualizacja 3D.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs font-mono text-purple-400 bg-purple-900/10 px-2 py-1 rounded">Python</span>
                  <span className="text-xs font-mono text-purple-400 bg-purple-900/10 px-2 py-1 rounded">IoT</span>
                  <span className="text-xs font-mono text-purple-400 bg-purple-900/10 px-2 py-1 rounded">Kafka</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ZAKŁADKA: CERTYFIKATY (Teraz widoczne jako iframe!) */}
        {activeTab === 'certificates' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-purple-500">#</span> Certyfikaty i Szkolenia
            </h2>

            {/* DWA GŁÓWNE CERTYFIKATY WIDOCZNE W DUŻYM FORMACIE */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#121b2e] border border-gray-800 rounded-2xl p-4 flex flex-col">
                <h3 className="text-xl font-bold text-blue-400 mb-4 px-2">IBM Data Engineering</h3>
                {/* Wyświetlanie PDF */}
                <div className="w-full h-[400px] bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
                  <iframe src="/images/DataEngineering.pdf#toolbar=0&navpanes=0" className="w-full h-full" title="IBM Certificate"></iframe>
                </div>
              </div>

              <div className="bg-[#121b2e] border border-gray-800 rounded-2xl p-4 flex flex-col">
                <h3 className="text-xl font-bold text-purple-400 mb-4 px-2">Adobe Content Creator</h3>
                {/* Wyświetlanie PDF */}
                <div className="w-full h-[400px] bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
                  <iframe src="/images/MultimediaContentCreator.pdf#toolbar=0&navpanes=0" className="w-full h-full" title="Adobe Certificate"></iframe>
                </div>
              </div>
            </div>

            {/* POZOSTAŁE CERTYFIKATY (Mniejsza siatka widocznych dokumentów) */}
            <h3 className="text-xl font-bold mb-6 text-gray-300 border-b border-gray-800 pb-2">Ukończone moduły techniczne</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <div key={index} className="bg-[#121b2e] border border-gray-800/50 rounded-xl overflow-hidden hover:border-gray-500 transition-colors flex flex-col">
                  <div className="p-3 bg-gray-900/50 border-b border-gray-800 text-sm font-semibold truncate text-gray-300" title={cert.name}>
                    {cert.name}
                  </div>
                  {/* Mały podgląd PDF */}
                  <div className="w-full h-[220px] bg-gray-950">
                    <iframe src={`/images/${cert.file}#view=FitH&toolbar=0&navpanes=0`} className="w-full h-full pointer-events-auto" title={cert.name}></iframe>
                  </div>
                  <div className="p-3 bg-gray-900/50 border-t border-gray-800 text-center">
                    <a href={`/images/${cert.file}`} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:text-blue-300 font-medium uppercase tracking-wider">
                      Otwórz w pełnym oknie
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