import React, { useState } from 'react';
import { Header } from './components/Header';
import { MasterSummaryBanner } from './components/MasterSummaryBanner';
import { ModuleVideo2 } from './components/ModuleVideo2';
import { ModuleVideo3 } from './components/ModuleVideo3';
import { ModuleVideo4 } from './components/ModuleVideo4';
import { ModuleVideo5 } from './components/ModuleVideo5';
import { VideoModuleId } from './types';
import { BookOpen, Layers, HeartHandshake, ShieldCheck, Sparkles, ChevronUp } from 'lucide-react';

export default function App() {
  const [activeModule, setActiveModule] = useState<VideoModuleId>('all');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 flex flex-col font-sans antialiased selection:bg-teal-100 selection:text-teal-900">
      {/* Top Header & Sticky Navigation */}
      <Header activeModule={activeModule} onSelectModule={setActiveModule} />

      {/* Main Sequential Container */}
      <main id="main-content" className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
        {/* Master Summary Roadmap Banner */}
        <MasterSummaryBanner onSelectModule={setActiveModule} />

        {/* Video 2: Memahami Disleksia (Fondasi & Triad) */}
        {(activeModule === 'all' || activeModule === 'video2') && (
          <div id="section-video-2" className="scroll-mt-20">
            <ModuleVideo2 />
          </div>
        )}

        {/* Video 3: Beyond Reading (Beban Kognitif & Mental) */}
        {(activeModule === 'all' || activeModule === 'video3') && (
          <div id="section-video-3" className="scroll-mt-20">
            <ModuleVideo3 />
          </div>
        )}

        {/* Video 4: Kekhawatiran ke Aksi Nyata (Deteksi Dini & Kolaborasi) */}
        {(activeModule === 'all' || activeModule === 'video4') && (
          <div id="section-video-4" className="scroll-mt-20">
            <ModuleVideo4 />
          </div>
        )}

        {/* Video 5: Rencana Aksi Nyata (Akomodasi & IEP Terapan) */}
        {(activeModule === 'all' || activeModule === 'video5') && (
          <div id="section-video-5" className="scroll-mt-20">
            <ModuleVideo5 />
          </div>
        )}

        {/* Floating Back to Top Button */}
        <div className="flex justify-center pt-4">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold shadow-xs transition-colors cursor-pointer"
          >
            <ChevronUp className="w-4 h-4 text-slate-500" />
            <span>Kembali ke Atas</span>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer id="app-footer" className="border-t border-slate-200 bg-white py-6 mt-12 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-semibold text-slate-800">
            <div className="w-5 h-5 rounded bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">
              EMT
            </div>
            <span>Kompilasi Masterclass Disleksia (Video 2, 3, 4, 5)</span>
          </div>

          <div className="flex items-center gap-3 text-slate-500 text-center sm:text-right">
            <span>Disusun berdasarkan Kurikulum Edukasi Medika Teknologi</span>
            <span className="hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1 text-teal-700 font-semibold">
              <HeartHandshake className="w-3.5 h-3.5" />
              Empati, Neurosains & Aksi Nyata
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
