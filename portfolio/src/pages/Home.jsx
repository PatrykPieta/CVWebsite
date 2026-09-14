import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';

export default function Home() {
  const { isDark, t, theme, lang } = useContext(AppContext);
  const navigate = useNavigate();

  return (
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
            <button onClick={() => navigate('/projects')} className={`${theme.primary} text-white px-8 py-3.5 rounded-lg font-semibold transition-all flex items-center gap-2`}>
              {t.hero.btnPrimary} <span className="text-xl">↗</span>
            </button>
            
            {/* Zaktualizowany link do CV - plik musi leżeć w folderze public jako CV_Patryk_Pieta.pdf */}
            <a href="/CV_Patryk_Pieta.pdf" target="_blank" rel="noopener noreferrer" className={`border ${theme.borderColor} ${isDark ? 'hover:border-gray-400 text-gray-300' : 'hover:border-slate-400 text-slate-700'} px-8 py-3.5 rounded-lg font-semibold transition-all flex items-center gap-2`}>
              {t.hero.btnSecondary} <span className="text-xl">↓</span>
            </a>
          </div>
          
          <div>
            <p className="text-xs font-bold text-gray-500 tracking-widest mb-4 uppercase">{t.hero.techTitle}</p>
            {/* Nowa, rozbudowana siatka logotypów technologicznych z animacjami */}
            <div className="flex gap-4 flex-wrap mt-2">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="w-8 h-8 opacity-80 hover:opacity-100 transition-all hover:-translate-y-1 transform duration-200 cursor-pointer" title="Python" alt="Python" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" className="w-8 h-8 opacity-80 hover:opacity-100 transition-all hover:-translate-y-1 transform duration-200 cursor-pointer" title="PostgreSQL" alt="SQL" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg" className="w-8 h-8 opacity-80 hover:opacity-100 transition-all hover:-translate-y-1 transform duration-200 cursor-pointer" title="Apache Spark" alt="Spark" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg" className="w-8 h-8 opacity-80 hover:opacity-100 transition-all hover:-translate-y-1 transform duration-200 cursor-pointer" title="Apache Kafka" alt="Kafka" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" className="w-8 h-8 opacity-80 hover:opacity-100 transition-all hover:-translate-y-1 transform duration-200 cursor-pointer" title="Docker" alt="Docker" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" className="w-8 h-8 opacity-80 hover:opacity-100 transition-all hover:-translate-y-1 transform duration-200 cursor-pointer" title="Linux" alt="Linux" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" className="w-8 h-8 opacity-80 hover:opacity-100 transition-all hover:-translate-y-1 transform duration-200 cursor-pointer" title="GitHub" alt="GitHub" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg" className="w-8 h-8 opacity-80 hover:opacity-100 transition-all hover:-translate-y-1 transform duration-200 cursor-pointer" title="Raspberry Pi" alt="Raspberry Pi" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="w-8 h-8 opacity-80 hover:opacity-100 transition-all hover:-translate-y-1 transform duration-200 cursor-pointer" title="React" alt="React" />
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
          <button onClick={() => navigate('/experience')} className={`border ${theme.borderColor} px-6 py-3 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all hover:border-blue-600`}>
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

      {/* ZAJAWKA PROJEKTÓW */}
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
                <button onClick={() => navigate(`/projects/${proj.id}`)} className="text-blue-500 font-bold self-start hover:text-blue-400 transition-colors">
                  {t.projectsTab.viewDetailsBtn}
                </button>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => navigate('/projects')} className={`w-full py-4 text-center rounded-xl border border-blue-500/30 ${isDark ? 'bg-blue-900/20 text-blue-400 hover:bg-blue-900/40' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'} font-bold transition-colors`}>
          {t.projectsTab.viewAllBtn}
        </button>
      </section>
    </div>
  );
}