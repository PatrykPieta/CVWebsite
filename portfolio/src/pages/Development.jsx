import React, { useContext } from 'react';
import { AppContext } from '../App';
import { certificatesList } from '../data/content';

export default function Development() {
  const { t, theme, isDark, lang } = useContext(AppContext);

  return (
    <div className="animate-fade-in space-y-16">
      
      {/* NAGŁÓWEK */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3 mb-8">
          <span className="text-blue-500">#</span> {t.nav.dev}
        </h2>
      </div>

      {/* AKTUALNE PLANY I PRZYSZŁOŚĆ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className={`${theme.cardBg} border ${theme.borderColor} p-8 rounded-3xl shadow-sm hover:border-blue-500/30 transition-colors`}>
          <h3 className="text-2xl font-bold mb-6 text-blue-500 flex items-center gap-3">
            <span>⚡</span> {t.devTab.titleCurrent}
          </h3>
          <ul className="space-y-6">
            {t.devTab.currentList.map((item, i) => (
              <li key={i} className="flex flex-col">
                <span className="font-bold text-lg">{item.name}</span>
                <span className={`${theme.textMuted} mt-2 leading-relaxed text-sm`}>{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${theme.cardBg} border ${theme.borderColor} p-8 rounded-3xl shadow-sm hover:border-purple-500/30 transition-colors`}>
          <h3 className="text-2xl font-bold mb-6 text-purple-500 flex items-center gap-3">
            <span>🚀</span> {t.devTab.titleFuture}
          </h3>
          <ul className="space-y-6">
            {t.devTab.futureList.map((item, i) => (
              <li key={i} className="flex flex-col">
                <span className="font-bold text-lg">{item.name}</span>
                <span className={`${theme.textMuted} mt-2 leading-relaxed text-sm`}>{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* KONFERENCJE I PUBLIKACJE */}
      {t.devTab.conferences && t.devTab.conferences.length > 0 && (
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 border-b border-gray-700/50 pb-4">
            {t.devTab.titleConf}
          </h3>
          <div className="space-y-8">
            {t.devTab.conferences.map((conf, i) => (
              <div key={i} className={`${theme.cardBg} border ${theme.borderColor} rounded-3xl overflow-hidden shadow-md flex flex-col md:flex-row group hover:border-blue-500/50 transition-all`}>
                
                {/* Zdjęcie */}
                {conf.image && (
                  <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative bg-black/20">
                    <img 
                      src={`/images/${conf.image}`} 
                      alt={conf.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
                
                {/* Treść */}
                <div className="p-8 md:p-10 flex flex-col justify-center flex-1">
                  <div className="text-blue-500 text-sm font-bold tracking-widest uppercase mb-2">
                    {conf.topic}
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold mb-4">{conf.name}</h4>
                  <p className={`${theme.textMuted} leading-relaxed mb-8`}>
                    {conf.desc}
                  </p>
                  
                  {/* Przyciski otwierające w nowej karcie (bez pobierania) */}
                  <div className="flex flex-wrap gap-4 mt-auto">
                    {conf.articleFile && (
                      <a 
                        href={`/images/${conf.articleFile}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`border ${theme.borderColor} px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all`}
                      >
                        📄 {lang === 'PL' ? 'Podgląd artykułu' : 'View Article'}
                      </a>
                    )}
                    {conf.presentationFile && (
                      <a 
                        href={`/images/${conf.presentationFile}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`border ${theme.borderColor} px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all`}
                      >
                        📊 {lang === 'PL' ? 'Pobierz prezentację (PPTX)' : 'Download Presentation (PPTX)'}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* LISTA CERTYFIKATÓW */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold mb-8 border-b border-gray-700/50 pb-4">
          {t.devTab.titleCerts}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificatesList.map((cert, i) => (
            <a 
              key={i} 
              href={`/images/${cert.file}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${theme.cardBg} border ${theme.borderColor} p-4 rounded-xl flex items-center gap-4 hover:border-blue-500/50 hover:shadow-lg transition-all group`}
            >
              <div className={`w-12 h-12 rounded-lg flex shrink-0 items-center justify-center ${isDark ? 'bg-gray-800' : 'bg-slate-100'} group-hover:bg-blue-500/20 transition-colors`}>
                <span className="text-2xl">🎓</span>
              </div>
              <span className="font-semibold text-sm group-hover:text-blue-500 transition-colors line-clamp-2">
                {cert.name}
              </span>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}