import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans selection:bg-blue-500/30">
      
      {/* Baner - Strona w budowie */}
      <div className="bg-blue-900/20 border-y border-blue-500/20 py-2.5 px-6 text-center text-xs sm:text-sm text-gray-300 flex items-center justify-center gap-3">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        <span>Strona w trakcie aktywnej rozbudowy pod kątem rekrutacji (Data Engineering & SQL). Wkrótce kolejne aktualizacje!</span>
      </div>

      {/* Nawigacja */}
      <nav className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center overflow-x-auto">
          <div className="text-xl font-bold text-white tracking-wider pr-4">Patryk<span className="text-blue-500">Pięta</span></div>
          <div className="flex gap-6 text-sm sm:text-base whitespace-nowrap">
            <button onClick={() => setActiveTab('home')} className={`${activeTab === 'home' ? 'text-blue-400 font-medium' : 'text-gray-400 hover:text-white'} transition-colors`}>O mnie</button>
            <button onClick={() => setActiveTab('experience')} className={`${activeTab === 'experience' ? 'text-blue-400 font-medium' : 'text-gray-400 hover:text-white'} transition-colors`}>Doświadczenie</button>
            <button onClick={() => setActiveTab('projects')} className={`${activeTab === 'projects' ? 'text-blue-400 font-medium' : 'text-gray-400 hover:text-white'} transition-colors`}>Projekty</button>
            <button onClick={() => setActiveTab('certificates')} className={`${activeTab === 'certificates' ? 'text-blue-400 font-medium' : 'text-gray-400 hover:text-white'} transition-colors`}>Certyfikaty</button>
          </div>
        </div>
      </nav>

      {/* Główna zawartość */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        
        {/* ZAKŁADKA: O MNIE */}
        {activeTab === 'home' && (
          <div className="space-y-12 animate-fade-in">
            <div className="text-center">
              <img 
                src="/images/IMG_3819.jpg" 
                alt="Patryk Pięta" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover shadow-xl border-4 border-blue-500/20 mb-6" 
              />
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Patryk Pięta</h1>
              <p className="text-xl text-blue-400 mb-6">Junior Data Engineer / Technology for Industry 4.0 Student</p>
              <div className="flex justify-center gap-4 text-gray-400">
                <a href="mailto:emzet959@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  emzet959@gmail.com
                </a>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  +48 530 229 233
                </span>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">O mnie</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Technology for Industry 4.0 student at AGH University bridging the gap between data engineering and modern software systems. Experienced in building robust data pipelines (Python, SQL, Apache Spark) and web applications featuring complex document workflows and bulk data processing. Highly interested in data-driven architectures, scalable backend services, and modern analytics (including LLM/AI integrations).
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">Technologie i Narzędzia</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Core & Data Engineering</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'SQL', 'NoSQL', 'ETL Pipelines', 'Apache Spark', 'Kafka', 'Apache Airflow', 'Linux Shell'].map(tech => (
                      <span key={tech} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm">{tech}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Narzędzia & Inne</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Power BI', 'Advanced Excel', 'Git', 'GCP Basics', 'Matlab', 'SolidWorks'].map(tech => (
                      <span key={tech} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ZAKŁADKA: DOŚWIADCZENIE */}
        {activeTab === 'experience' && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-8">Doświadczenie Zawodowe</h2>
            
            <div className="relative pl-8 border-l-2 border-blue-500/30 space-y-12">
              <div className="relative">
                <div className="absolute -left-[41px] bg-gray-900 border-2 border-blue-500 rounded-full w-5 h-5 mt-1.5"></div>
                <h3 className="text-xl font-bold text-white">Intern (Application Development)</h3>
                <div className="text-blue-400 font-medium mb-2">PGE Polish Energy Group | Kraków | 07/2026 – Obecnie</div>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                  <li>Developed and maintained web applications and backend services for processing historical tender data.</li>
                  <li>Implemented automated database workflows for mass document conversion and bulk data uploading (ETL processes) using Python and SQL.</li>
                  <li>Collaborated closely on data modeling and ensuring data reliability for business users.</li>
                </ul>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] bg-gray-900 border-2 border-gray-600 rounded-full w-5 h-5 mt-1.5"></div>
                <h3 className="text-xl font-bold text-white">Brand Promoter</h3>
                <div className="text-gray-400 font-medium mb-2">Tefal | Kraków | 03/2026 – Obecnie</div>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                  <li>Providing technical consultancy and conducting live demonstrations for premium home appliances.</li>
                </ul>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] bg-gray-900 border-2 border-gray-600 rounded-full w-5 h-5 mt-1.5"></div>
                <h3 className="text-xl font-bold text-white">Maintenance Intern</h3>
                <div className="text-gray-400 font-medium mb-2">Schneider Electric | Bukowno | 07/2025 – 09/2025</div>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                  <li>Participated in daily SIM (Short Interval Management) meetings to monitor production efficiency.</li>
                  <li>Conducted a comprehensive inventory of spare parts to ensure maintenance continuity.</li>
                  <li>Updated LOTO (Lockout-Tagout) procedures and safety documentation.</li>
                </ul>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] bg-gray-900 border-2 border-gray-600 rounded-full w-5 h-5 mt-1.5"></div>
                <h3 className="text-xl font-bold text-white">Maintenance Intern</h3>
                <div className="text-gray-400 font-medium mb-2">VelvetCare | Klucze | 07/2024 – 09/2024</div>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                  <li>Assisted in technical oversight of production lines and supported mechanical repairs.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ZAKŁADKA: PROJEKTY */}
        {activeTab === 'projects' && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-8">Wybrane Projekty</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-800/40 rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-2">AGV Digital Twin</h3>
                <p className="text-blue-400 text-sm mb-4">KN Sensor Science Club (AGH)</p>
                <p className="text-gray-300 mb-6">
                  Developing a Digital Twin architecture for an Autonomous Guided Vehicle. Focus on real-time IoT data processing, sensor integration, and 3D web visualization using Python, Kafka, and data streaming technologies.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded text-xs font-medium">Python</span>
                  <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded text-xs font-medium">IoT Data</span>
                  <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded text-xs font-medium">Kafka</span>
                </div>
              </div>

              <div className="bg-gray-800/40 rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-2">Cranes Control System</h3>
                <p className="text-blue-400 text-sm mb-4">Projekt Akademicki</p>
                <p className="text-gray-300 mb-6">
                  Working on intelligent control algorithms for industrial crane models. Implementation of mathematical modeling and process automation.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded text-xs font-medium">Automation</span>
                  <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded text-xs font-medium">Matlab</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ZAKŁADKA: CERTYFIKATY */}
        {activeTab === 'certificates' && (
          <section className="py-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">Certyfikaty</h2>

            {/* Główne certyfikaty */}
            <div className="flex flex-col md:flex-row gap-6 mb-10 items-center justify-center">
              
              {/* 1. IBM Data Engineering */}
              <a
                href="/images/DataEngineering.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-3/5 bg-gradient-to-br from-blue-900/40 to-blue-800/20 border border-blue-500/30 rounded-2xl p-8 hover:border-blue-400 transition-all group block text-center"
              >
                <div className="text-blue-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="text-3xl font-bold text-white group-hover:text-blue-300 transition-colors">IBM Data Engineering</h3>
                <p className="text-gray-400 mt-2 text-lg">Professional Certificate</p>
              </a>

              {/* 2. Adobe Content Creator */}
              <a
                href="/images/MultimediaContentCreator.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-2/5 bg-gradient-to-br from-red-900/30 to-red-800/10 border border-red-500/20 rounded-2xl p-6 hover:border-red-400/50 transition-all group block text-center md:scale-95"
              >
                <div className="text-red-400 mb-3">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors">Adobe Content Creator</h3>
                <p className="text-gray-400 text-sm mt-2">Professional Certificate</p>
              </a>

            </div>

            {/* Lista pozostałych modułów technicznych */}
            <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50">
              <h4 className="text-lg font-semibold text-gray-300 mb-6 border-b border-gray-700/50 pb-3">Ukończone moduły i specjalizacje</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "Databases and SQL for Data Science", file: "DatabasesandSQLforDataSciencewithPython.pdf" },
                  { name: "Data Engineering Capstone Project", file: "DataEngineeringCapstoneProject.pdf" },
                  { name: "Data Engineering Career Guide and Interview", file: "DataEngineeringCareerGuideandInterview.pdf" },
                  { name: "Data Engineering Foundations", file: "DataEngineeringFundations.pdf" },
                  { name: "Data Warehouse Fundamentals", file: "DataWarehouseFundamentals.pdf" },
                  { name: "Design Fundamentals In AI", file: "DesignFundamentalsInAI.pdf" },
                  { name: "ETL and Data Pipelines with Shell & Airflow", file: "ETLandDataPipelineswithShellAirflowand.pdf" },
                  { name: "Generative AI Content Creation", file: "GenerativeAIContentCreation.pdf" },
                  { name: "Generative AI Elevate your Data Engineering Career", file: "GenerativeAIElevateyourDataEngineeringCareer.pdf" },
                  { name: "Generative AI Prompt Engineering Basics", file: "GenerativeAIPromptEngineeringBasics.pdf" },
                  { name: "Hands-on Introduction to Linux Commands", file: "Hands-onIntroductiontoLinuxCommandsand.pdf" },
                  { name: "Introduction to Big Data with Spark & Hadoop", file: "IntroductiontoBigDatawithSparkandHadoop.pdf" },
                  { name: "Introduction to Data Engineering", file: "IntroductionToDataEngineering.pdf" },
                  { name: "Introduction to NoSQL Databases", file: "IntroductiontoNoSQLDatabases.pdf" },
                  { name: "Introduction to Relational Databases (RDBMS)", file: "IntroductiontoRelationalDatabases(RDBMS).pdf" },
                  { name: "Machine Learning with Apache Spark", file: "MachineLearningwithApacheSpark.pdf" },
                  { name: "Python for Data Science, AI & Development", file: "PythonforDataScienceAI&Development.pdf" },
                  { name: "Python Project for Data Engineering", file: "PythonProjectforDataEngineering.pdf" },
                  { name: "Relational Database Administration (DBA)", file: "RelationalDatabaseAdministration(DBA).pdf" },
                  { name: "Social Media Content And Strategy", file: "SocialMediaContentAndStrategy.pdf" }
                ].map((cert, index) => (
                  <a
                    key={index}
                    href={`/images/${cert.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700/50 transition-colors text-sm text-gray-400 hover:text-white border border-transparent hover:border-gray-600"
                  >
                    <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                    <span className="truncate">{cert.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;