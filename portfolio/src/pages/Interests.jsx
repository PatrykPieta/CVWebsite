import React, { useContext } from 'react';
import { AppContext } from '../App';

export default function Interests() {
  const { isDark, t, theme } = useContext(AppContext);

  // Funkcja rozpoznająca pliki wideo z folderu images
  const isVideo = (filename) => {
    if (!filename) return false;
    return filename.endsWith('.mp4') || filename.endsWith('.webm');
  };

  return (
    <div className="animate-fade-in space-y-16">
      
      {/* Nagłówek */}
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 flex items-center gap-3">
          <span className="text-blue-500">#</span> {t.interestsTab.title}
        </h2>
        <p className={`${theme.textMuted} text-lg leading-relaxed mb-12`}>
          {t.interestsTab.intro}
        </p>
      </div>

      {/* Lista Sekcji */}
      <div className="space-y-16">
        {t.interestsTab.sections.map((section) => (
          <div key={section.id} className={`${theme.cardBg} border ${theme.borderColor} rounded-3xl p-6 md:p-10 shadow-sm flex flex-col gap-8`}>
            
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{section.icon}</span>
                <h3 className="text-3xl font-bold">{section.title}</h3>
              </div>
              <p className={`${theme.textMuted} leading-relaxed text-lg mb-6 max-w-4xl`}>
                {section.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {section.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'bg-gray-800 text-gray-400' : 'bg-slate-100 text-slate-500'} px-3 py-1.5 rounded-lg`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* ZMIANA TUTAJ: Siatka 2x2 (grid-cols-1 na telefonach, grid-cols-2 na komputerach) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.gallery.map((mediaFile, idx) => (
                <div 
                  key={idx} 
                  // ZMIANA TUTAJ: aspect-video (16:9) zamiast aspect-square (1:1)
                  className={`aspect-video rounded-2xl overflow-hidden border ${theme.borderColor} ${isDark ? 'bg-gray-900/60' : 'bg-slate-200/50'} flex items-center justify-center relative group bg-black/5 shadow-md`}
                >
                  {mediaFile ? (
                    mediaFile.includes('youtube.com/embed') ? (
                      <iframe 
                        src={mediaFile} 
                        title={`YouTube video ${idx}`} 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="w-full h-full object-cover"
                      ></iframe>
                    ) : 
                    isVideo(mediaFile) ? (
                      <video 
                        src={`/images/${mediaFile}`} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        className="w-full h-full object-cover object-center"
                      />
                    ) : 
                    (
                      <img 
                        src={`/images/${mediaFile}`} 
                        alt={`${section.title} ${idx + 1}`} 
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500" 
                      />
                    )
                  ) : (
                    <div className="flex flex-col items-center justify-center text-gray-500/30">
                      <svg className="w-10 h-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <span className="text-xs font-mono tracking-widest uppercase">Miejsce na plik</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
          </div>
        ))}
      </div>
      
    </div>
  );
}