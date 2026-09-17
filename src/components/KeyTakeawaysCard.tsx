import React from 'react';
import { CheckCircle2, ListOrdered, BrainCircuit } from 'lucide-react';
import { SUMMARY_BULLETS } from '../data/summaryData';

export const KeyTakeawaysCard: React.FC = () => {
  return (
    <section id="quick-takeaways" className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
      <div className="flex items-center justify-between pb-5 border-b border-slate-150 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center">
            <ListOrdered className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Rangkuman Singkat, Padat & Jelas
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              6 Poin Utama dari Pembahasan Video Edukasi Medika Teknologi
            </p>
          </div>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
          <BrainCircuit className="w-3.5 h-3.5" />
          Inti Materi
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SUMMARY_BULLETS.map((bullet, idx) => {
          const [highlight, ...rest] = bullet.split(': ');
          const text = rest.join(': ');
          return (
            <div
              key={idx}
              id={`takeaway-item-${idx + 1}`}
              className="p-4 rounded-xl bg-slate-50/80 hover:bg-slate-100/80 border border-slate-200/80 transition-all flex items-start gap-3.5"
            >
              <div className="w-7 h-7 rounded-full bg-teal-600/10 text-teal-700 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 border border-teal-200">
                {idx + 1}
              </div>
              <div className="text-sm leading-relaxed text-slate-700">
                <strong className="text-slate-900 font-semibold block mb-0.5">
                  {highlight}
                </strong>
                <span>{text}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
