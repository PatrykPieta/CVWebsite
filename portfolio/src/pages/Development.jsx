import React, { useContext } from 'react';
import { AppContext } from '../App';
import { certificatesList } from '../data/content';

export default function Development() {
  const { isDark, t, theme } = useContext(AppContext);

  return (
    <div className="animate-fade-in space-y-16">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-blue-500">⟳</span> {t.devTab.titleCurrent}
          </h2>
          <div className="space-y-4">
            {t.devTab.currentList.map((item, idx) => (
              <div key={idx} className={`${theme.cardBg} border ${theme.borderColor} p-6 rounded-2xl border-l-4 border-l-blue-500 shadow-sm`}>
                <h4 className="font-bold text-lg mb-2">{item.name}</h4>
                <p className={`${theme.textMuted} text-sm`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-purple-500">🚀</span> {t.devTab.titleFuture}
          </h2>
          <div className="space-y-4">
            {t.devTab.futureList.map((item, idx) => (
              <div key={idx} className={`${theme.cardBg} border ${theme.borderColor} p-6 rounded-2xl shadow-sm border-l-4 border-l-purple-500`}>
                <h4 className="font-bold text-lg mb-2">{item.name}</h4>
                <p className={`${theme.textMuted} text-sm`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-12 flex items-center gap-3">
          <span className="text-blue-500">#</span> {t.devTab.titleCerts}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className={`${theme.cardBg} border ${theme.borderColor} rounded-3xl p-6 shadow-sm`}>
            <h3 className="text-xl font-bold text-blue-500 mb-6">IBM Data Engineering</h3>
            <div className={`w-full h-[300px] ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-slate-100 border-slate-200'} rounded-2xl overflow-hidden border`}>
              <iframe src="/images/DataEngineering.pdf#toolbar=0&navpanes=0" className="w-full h-full" title="IBM Certificate"></iframe>
            </div>
          </div>
          <div className={`${theme.cardBg} border ${theme.borderColor} rounded-3xl p-6 shadow-sm`}>
            <h3 className="text-xl font-bold text-purple-500 mb-6">Adobe Content Creator</h3>
            <div className={`w-full h-[300px] ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-slate-100 border-slate-200'} rounded-2xl overflow-hidden border`}>
              <iframe src="/images/MultimediaContentCreator.pdf#toolbar=0&navpanes=0" className="w-full h-full" title="Adobe Certificate"></iframe>
            </div>
          </div>
        </div>

        <h3 className={`text-xl font-bold mb-6 ${theme.textMuted} border-b ${theme.borderColor} pb-4`}>{t.devTab.modules}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificatesList.map((cert, index) => (
            <div key={index} className={`${theme.cardBg} border ${theme.borderColor} rounded-xl overflow-hidden hover:border-blue-500 transition-colors flex flex-col shadow-sm group`}>
              <div className={`p-4 ${isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-slate-50 border-slate-200'} border-b text-xs font-bold truncate ${theme.text}`} title={cert.name}>
                {cert.name}
              </div>
              <div className={`w-full h-[160px] ${isDark ? 'bg-gray-950' : 'bg-slate-200'}`}>
                <iframe src={`/images/${cert.file}#view=FitH&toolbar=0&navpanes=0`} className="w-full h-full pointer-events-auto" title={cert.name}></iframe>
              </div>
              <div className={`p-3 ${isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-slate-50 border-slate-200'} border-t text-center`}>
                <a href={`/images/${cert.file}`} target="_blank" rel="noopener noreferrer" className="text-[10px] text-blue-500 group-hover:text-blue-400 font-bold uppercase tracking-wider flex items-center justify-center gap-2">
                  {t.devTab.openFull} ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}