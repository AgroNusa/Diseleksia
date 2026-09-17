import React from 'react';
import { Sparkles, ArrowRight, ShieldAlert, HeartHandshake, BookOpen, Quote, CheckCircle2 } from 'lucide-react';
import { VIDEO_MODULES, MASTER_QUOTES } from '../data/compiledVideosData';
import { VideoModuleId } from '../types';

interface MasterSummaryBannerProps {
  onSelectModule: (mod: VideoModuleId) => void;
}

export const MasterSummaryBanner: React.FC<MasterSummaryBannerProps> = ({ onSelectModule }) => {
  return (
    <section id="master-summary" className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xs space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pb-5 border-b border-slate-150">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
              Peta Alur Pembelajaran Berurutan
            </span>
            <span className="text-xs text-slate-500 font-medium">Seri 4 Episode Masterclass</span>
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
            Kompilasi Komprehensif: Membongkar Disleksia (Video 2 – 5)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Panduan medis, psikologis, dan pedagogis lengkap untuk memahami cara kerja otak anak, meringankan beban mental, mendeteksi sedini mungkin, hingga menerapkan akomodasi nyata di kelas dan rumah.
          </p>
        </div>
      </div>

      {/* Sequential 4-Step Journey Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {VIDEO_MODULES.map((v, index) => (
          <div
            key={v.id}
            onClick={() => onSelectModule(v.id)}
            className="p-4 rounded-xl border border-slate-200 bg-slate-50/80 hover:bg-slate-100 hover:border-slate-300 transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shadow-2xs group-hover:bg-teal-700 transition-colors">
                  {v.videoNumber}
                </span>
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wide bg-white px-2 py-0.5 rounded border border-slate-200">
                  Video {v.videoNumber}
                </span>
              </div>
              <h3 className="text-xs font-bold text-slate-900 mb-1 leading-snug group-hover:text-teal-900 transition-colors">
                {v.title}
              </h3>
              <p className="text-[11px] text-slate-500 leading-relaxed mb-3">
                {v.subtitle}
              </p>
            </div>
            <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-semibold text-teal-800">
              <span>Buka Modul</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Prominent Quotes Carousel / Highlights */}
      <div className="p-4.5 rounded-xl bg-gradient-to-r from-teal-50 via-slate-50 to-emerald-50 border border-teal-200 grid grid-cols-1 md:grid-cols-2 gap-4">
        {MASTER_QUOTES.slice(0, 2).map((q, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <Quote className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <p className="text-xs font-bold text-slate-900 italic">
                "{q.quote}"
              </p>
              <p className="text-[11px] text-slate-600">
                {q.translation}
              </p>
              <span className="text-[10px] font-semibold text-teal-800 uppercase tracking-wider block pt-0.5">
                • {q.origin}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
