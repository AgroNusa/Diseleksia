import React from 'react';
import { Header } from './components/Header';
import { CoreQuoteBanner } from './components/CoreQuoteBanner';
import { KeyTakeawaysCard } from './components/KeyTakeawaysCard';
import { PhonologicalMatrix } from './components/PhonologicalMatrix';
import { EightStepsDiagram } from './components/EightStepsDiagram';
import { BrainComparisonCard } from './components/BrainComparisonCard';
import { ComparisonTable } from './components/ComparisonTable';
import { NeuroplasticitySection } from './components/NeuroplasticitySection';
import { DetailedSectionsAccordion } from './components/DetailedSectionsAccordion';
import { Brain, HeartHandshake } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans antialiased selection:bg-teal-100 selection:text-teal-900">
      <Header />

      <main id="main-content" className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Core Highlight Quote */}
        <CoreQuoteBanner />

        {/* Quick, Dense, and Clear Key Takeaways */}
        <KeyTakeawaysCard />

        {/* The 8 Stages of Reading in the Brain */}
        <EightStepsDiagram />

        {/* 6 Pillars of Phonological Awareness */}
        <PhonologicalMatrix />

        {/* Neurobiology: Brain regions & Highway vs Scenic Route & Battery Analogy */}
        <BrainComparisonCard />

        {/* Direct Slide Comparison Table */}
        <ComparisonTable />

        {/* Detailed 6 Video Chapters Accordion */}
        <DetailedSectionsAccordion />

        {/* Neuroplasticity & Educational Call to Action */}
        <NeuroplasticitySection />
      </main>

      <footer id="app-footer" className="border-t border-slate-200 bg-white py-6 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-medium text-slate-700">
            <Brain className="w-4 h-4 text-teal-600" />
            <span>Rangkuman Materi: Otak Anak Disleksia</span>
          </div>
          <p className="flex items-center gap-1.5 text-slate-500">
            <span>Sumber: Video Edukasi Medika Teknologi</span>
            <span>•</span>
            <span className="inline-flex items-center gap-1 text-teal-700">
              <HeartHandshake className="w-3.5 h-3.5" />
              Empati & Neurosains
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}
