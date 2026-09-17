import React from 'react';
import { 
  Ear, 
  AudioWaveform, 
  Eye, 
  Network, 
  Cpu, 
  BookOpen, 
  Zap, 
  Lightbulb,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { READING_STEPS } from '../data/summaryData';

const iconMap: Record<string, React.ReactNode> = {
  Ear: <Ear className="w-4 h-4" />,
  AudioWaveform: <AudioWaveform className="w-4 h-4" />,
  Eye: <Eye className="w-4 h-4" />,
  Network: <Network className="w-4 h-4" />,
  Cpu: <Cpu className="w-4 h-4" />,
  BookOpen: <BookOpen className="w-4 h-4" />,
  Zap: <Zap className="w-4 h-4" />,
  Lightbulb: <Lightbulb className="w-4 h-4" />
};

export const EightStepsDiagram: React.FC = () => {
  return (
    <section id="eight-steps-section" className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-5 border-b border-slate-150 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold mb-1.5">
            <Sparkles className="w-3 h-3 text-sky-600" />
            <span>Bagian 3: Bunyi Menuju Makna</span>
          </div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            Jembatan 8 Tahap Membaca di Otak
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Bahkan untuk membaca satu kata sederhana seperti <span className="font-semibold text-slate-800">"MATA"</span>, otak harus menuntaskan 8 anak tangga:
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {READING_STEPS.map((step) => {
          const isFinal = step.step === 8;
          return (
            <div
              key={step.step}
              id={`reading-step-${step.step}`}
              className={`p-4 rounded-xl border transition-all flex flex-col justify-between ${
                isFinal 
                  ? 'bg-amber-50/80 border-amber-300 ring-1 ring-amber-200' 
                  : 'bg-slate-50/70 border-slate-200 hover:bg-slate-100/60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    isFinal ? 'bg-amber-500 text-white' : 'bg-slate-800 text-white'
                  }`}>
                    {step.step}
                  </span>
                  <div className={`p-1.5 rounded-lg ${
                    isFinal ? 'bg-amber-100 text-amber-700' : 'bg-white text-slate-600 border border-slate-200'
                  }`}>
                    {iconMap[step.iconName]}
                  </div>
                </div>
                <h3 className={`text-sm font-bold mb-1 ${isFinal ? 'text-amber-900' : 'text-slate-900'}`}>
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.detail}
                </p>
              </div>

              {step.step < 8 && (
                <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center text-[11px] text-slate-400 font-medium">
                  <span>Menuju Tahap {step.step + 1}</span>
                  <ArrowRight className="w-3 h-3 ml-auto text-slate-400" />
                </div>
              )}
              {isFinal && (
                <div className="mt-3 pt-2 border-t border-amber-200 flex items-center text-[11px] text-amber-700 font-semibold">
                  <span>Puncak: Pemahaman Makna</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-5 p-4 rounded-xl bg-blue-50/60 border border-blue-200/80 text-xs text-slate-700 leading-relaxed">
        <strong className="text-blue-900 font-semibold">Catatan Penting Video:</strong> Bagi pembaca biasa, lompatan 8 tahap ini terjadi sekejap mata (otomatis). Bagi anak disleksia, setiap tahap membutuhkan proses sadar yang menguras daya pikir (senam otak yang melelahkan).
      </div>
    </section>
  );
};
