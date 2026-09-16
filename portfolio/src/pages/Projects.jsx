import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../App';

export default function Projects() {
  const { isDark, t, theme, lang } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  // === WIDOK SZCZEGÓŁÓW POJEDYNCZEGO PROJEKTU ===
  if (id) {
    const project = t.projectsData.find(p => p.id === id);
    if (!project) return <div className="text-center py-20 text-2xl font-bold">Projekt nie został znaleziony!</div>;
    
    return (
      <div className="animate-fade-in">
        <button onClick={() => navigate('/projects')} className="mb-8 text-blue-500 font-bold flex items-center gap-2 hover:text-blue-400 transition-colors">
          ← {t.projectsTab.backBtn}
        </button>
        <div className="max-w-4xl mx-auto">
          
          {/* GŁÓWNY BANER (HERO) - Zdjęcie w pełnym wymiarze lub Gradient */}
          <div className={`w-full rounded-3xl overflow-hidden bg-gradient-to-br ${project.color} flex items-center justify-center mb-10 shadow-2xl border border-gray-700/50 relative`}>
            {project.gallery && project.gallery.length > 0 ? (
              // ZMIANA: Zdjęcie nie jest już ucinane (object-contain, h-auto)
              <img 
                src={`/images/${project.gallery[0]}`} 
                alt={project.title} 
                className="w-full h-auto max-h-[75vh] object-contain p-2 md:p-6"
              />
            ) : (
              <div className="w-full h-64 md:h-[450px] flex items-center justify-center">
                <span className="text-white font-mono text-2xl md:text-4xl px-4 text-center">{project.code}</span>
              </div>
            )}
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h2>
          
          <div className="flex flex-wrap gap-3 mb-10">
            {project.tags.map(tag => (
              <span key={tag} className={`text-sm font-mono text-blue-600 dark:text-blue-400 ${isDark ? 'bg-blue-900/20 border-blue-500/30' : 'bg-blue-50 border-blue-200'} px-3 py-1.5 rounded-lg border`}>
                {tag}
              </span>
            ))}
          </div>
          
          <div className={`${theme.cardBg} border ${theme.borderColor} p-8 rounded-2xl shadow-sm leading-relaxed text-lg ${theme.textMuted} mb-12`}>
            {project.fullDesc}
          </div>

          {/* SEKCJA GALERII (pokazuje zdjęcia od drugiego w górę) */}
          {project.gallery && project.gallery.length > 1 && (
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-purple-500">▹</span> {lang === 'PL' ? 'Demo & Zrzuty ekranu' : 'Demo & Screenshots'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.slice(1).map((img, idx) => (
                  <div key={idx} className={`rounded-xl overflow-hidden border ${theme.borderColor} shadow-lg ${theme.cardBg} aspect-video`}>
                    <img 
                      src={`/images/${img}`} 
                      alt={`Screenshot ${idx + 1}`} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // === WIDOK GŁÓWNEJ LISTY WSZYSTKICH PROJEKTÓW ===
  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
        <span className="text-blue-500">#</span> {t.projectsTab.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.projectsData.map(proj => (
          <div key={proj.id} className={`${theme.cardBg} border ${theme.borderColor} rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all shadow-sm flex flex-col group`}>
            
            {/* KAFELEK: Teraz ładuje pierwsze zdjęcie z projektu (jeśli istnieje) */}
            <div className={`h-48 ${isDark ? 'bg-gray-900' : 'bg-slate-100'} p-4 relative overflow-hidden flex items-center justify-center`}>
              <div className={`w-full h-full rounded-xl border border-gray-700 overflow-hidden flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500 ${proj.gallery && proj.gallery.length > 0 ? '' : `bg-gradient-to-br ${proj.color}`}`}>
                {proj.gallery && proj.gallery.length > 0 ? (
                  <img src={`/images/${proj.gallery[0]}`} alt={proj.title} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-white font-mono text-sm px-2 text-center">{proj.code}</span>
                )}
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-3">{proj.title}</h3>
              <p className={`${theme.textMuted} mb-6 text-sm flex-grow line-clamp-3`}>{proj.teaser}</p>
              <button onClick={() => navigate(`/projects/${proj.id}`)} className="text-blue-500 font-bold self-start hover:text-blue-400 transition-colors">
                {t.projectsTab.viewDetailsBtn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}