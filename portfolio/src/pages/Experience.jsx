import React, { useContext } from 'react';
import { AppContext } from '../App';

export default function Experience() {
  const { isDark, t, theme } = useContext(AppContext);

  return (
    <div className="animate-fade-in space-y-20">
      
      {/* HISTORIA ZATRUDNIENIA */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
          <span className="text-blue-500">#</span> {t.expTab.title}
        </h2>
        
        <div className={`space-y-12 border-l-2 ${isDark ? 'border-gray-800' : 'border-slate-200'} pl-6 md:pl-10 ml-4`}>
          {t.expTab.jobs.map((job, idx) => (
            <div key={idx} className="relative group">
              <div className={`absolute -left-[35px] md:-left-[51px] ${theme.bg} border-2 ${idx === 0 ? 'border-blue-500' : (isDark ? 'border-gray-700' : 'border-slate-300')} group-hover:border-blue-400 transition-colors rounded-full w-5 h-5 mt-3`}></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                {/* LOGO FIRMY */}
                {job.logo && (
                  <div className={`w-14 h-14 shrink-0 rounded-xl bg-white border ${theme.borderColor} p-1.5 flex items-center justify-center overflow-hidden`}>
                    <img src={`/images/${job.logo}`} alt={job.company} className="max-w-full max-h-full object-contain"
                      onError={(e) => { e.target.style.display = 'none'; }} // Ukryj, jeśli nie wrzuciłeś jeszcze pliku
                    />
                  </div>
                )}
                
                <div>
                  <h3 className={`text-2xl font-bold ${idx === 0 ? theme.text : (isDark ? 'text-gray-300' : 'text-slate-700')} group-hover:text-blue-400 transition-colors`}>
                    {job.role}
                  </h3>
                  <div className={`${idx === 0 ? 'text-blue-500' : (isDark ? 'text-gray-500' : 'text-slate-500')} font-medium`}>
                    {job.company} | {job.period}
                  </div>
                </div>
              </div>
              
              <ul className={`list-none space-y-3 mt-4 ${theme.textMuted}`}>
                {job.tasks.map((task, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">▹</span>
                    <span className="leading-relaxed">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGIE */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
          <span className="text-blue-500">#</span> {t.expTab.stackTitle}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.expTab.skills.map((skillGroup, idx) => (
            <div key={idx} className={`${theme.cardBg} border ${theme.borderColor} p-8 rounded-3xl shadow-sm hover:border-blue-500/50 transition-colors`}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl">{skillGroup.icon}</span>
                <h3 className="text-xl font-bold">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {skillGroup.items.map((item, iIdx) => (
                  <span 
                    key={iIdx} 
                    className={`text-sm font-mono ${isDark ? 'bg-gray-800 border-gray-700 text-gray-300 hover:text-white hover:bg-gray-700' : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200'} border px-4 py-2 rounded-xl transition-all cursor-default`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}