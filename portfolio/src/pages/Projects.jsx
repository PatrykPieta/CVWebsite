import React, { useContext, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, Environment, Float, OrbitControls, useGLTF } from '@react-three/drei';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../App';

function AgvModel() {
  const { scene } = useGLTF('/agv.glb');

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        const material = child.material.clone();
        material.color = new THREE.Color('#dfe7f4');
        material.metalness = 0.35;
        material.roughness = 0.75;
        material.emissive = new THREE.Color('#3b82f6');
        material.emissiveIntensity = 0.12;
        child.material = material;
      }
    });
  }, [scene]);

  return (
    <group scale={2.25} position={[0, -0.55, 0]} rotation={[0.18, -0.9, 0]}>
      <primitive object={scene} />
    </group>
  );
}

function AgvProjectViewer({ isDark }) {
  return (
    <div className={`mt-10 rounded-3xl border ${isDark ? 'border-gray-700 bg-[#050810]' : 'border-slate-200 bg-slate-50'} overflow-hidden shadow-xl`}>
      <div className="border-b border-gray-700/50 px-6 py-4">
        <h3 className="text-2xl font-bold text-blue-500">AGV Digital Twin Model</h3>
      </div>
      <div className="h-[560px] w-full">
        <Canvas camera={{ position: [0, 1.8, 5.2], fov: 26 }} shadows>
          <color attach="background" args={[isDark ? '#07111f' : '#f8fafc']} />
          <ambientLight intensity={1.4} />
          <hemisphereLight intensity={1.2} color="#dbeafe" groundColor="#1e293b" />
          <directionalLight position={[3, 5, 5]} intensity={2.3} color="#eff6ff" castShadow />
          <spotLight position={[-4, 6, 4]} angle={0.5} penumbra={0.8} intensity={2.2} color="#60a5fa" />
          <Environment preset="city" />
          <Float speed={1.7} rotationIntensity={0.7} floatIntensity={0.8}>
            <AgvModel />
          </Float>
          <ContactShadows position={[0, -1.2, 0]} opacity={0.55} scale={12} blur={2.5} far={3.5} />
          <OrbitControls enableZoom={true} enablePan={false} minDistance={3.5} maxDistance={8} autoRotate autoRotateSpeed={1.2} />
        </Canvas>
      </div>
    </div>
  );
}

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

          {project.id === 'agv' && <AgvProjectViewer isDark={isDark} />}

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