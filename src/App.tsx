import React from 'react';
import { Header } from './components/Header';
import { MindsetBanner } from './components/MindsetBanner';
import { KeyTakeawaysCard } from './components/KeyTakeawaysCard';
import { Dsm5ClassificationCard } from './components/Dsm5ClassificationCard';
import { AgeProgressionTimeline } from './components/AgeProgressionTimeline';
import { SlowReaderVsDyslexia } from './components/SlowReaderVsDyslexia';
import { DetectionAndInterventionCard } from './components/DetectionAndInterventionCard';
import { Brain, HeartHandshake, ShieldAlert } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans antialiased selection:bg-teal-100 selection:text-teal-900">
      <Header />

      <main id="main-content" className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-7 space-y-7">
        {/* Core Paradigm Shift & The Story of Rio */}
        <MindsetBanner />

        {/* 6 Dense, Clear Takeaways */}
        <KeyTakeawaysCard />

        {/* DSM-5 Specific Learning Disorder Classification */}
        <Dsm5ClassificationCard />

        {/* Age Progression: 3-5yo, 7-9yo (Tic), 10-12yo (ODD), >12yo (Mental Health Risk) */}
        <AgeProgressionTimeline />

        {/* Distinction: Slow Reader vs Genetic Dyslexia */}
        <SlowReaderVsDyslexia />

        {/* Golden Window (3-5 Years) & Talent Bloom */}
        <DetectionAndInterventionCard />
      </main>

      <footer id="app-footer" className="border-t border-slate-200 bg-white py-6 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-semibold text-slate-800">
            <Brain className="w-4 h-4 text-teal-600" />
            <span>Memahami Disleksia: Rangkuman Video Komprehensif</span>
          </div>
          <p className="flex items-center gap-1.5 text-slate-500">
            <span>Sumber: Edukasi Medika Teknologi (DSM-5 & ADI)</span>
            <span>•</span>
            <span className="inline-flex items-center gap-1 text-teal-700 font-medium">
              <HeartHandshake className="w-3.5 h-3.5" />
              Deteksi Dini & Talent Bloom
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}
