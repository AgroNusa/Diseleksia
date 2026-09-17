import React from 'react';
import { ListOrdered, BrainCircuit } from 'lucide-react';
import { SUMMARY_BULLETS_MEMAHAMI } from '../data/summaryData';

export const KeyTakeawaysCard: React.FC = () => {
  return (
    <section id="quick-takeaways" className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xs">
      <div className="flex items-center justify-between pb-4 border-b border-slate-150 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center">
            <ListOrdered className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Rangkuman Singkat, Padat & Jelas
            </h2>
            <p className="text-xs text-slate-500">
              6 Poin Kunci Pembahasan Video "Memahami Disleksia"
            </p>
          </div>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
          <BrainCircuit className="w-3.5 h-3.5" />
          Intisari Medis
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {SUMMARY_BULLETS_MEMAHAMI.map((bullet, idx) => {
          const [highlight, ...rest] = bullet.split(': ');
          const text = rest.join(': ');
          return (
            <div
              key={idx}
              id={`takeaway-item-${idx + 1}`}
              className="p-4 rounded-xl bg-slate-50/90 hover:bg-slate-100/90 border border-slate-200/80 transition-all flex items-start gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 shadow-xs">
                {idx + 1}
              </div>
              <div className="text-xs sm:text-sm leading-relaxed text-slate-700">
                <strong className="text-slate-900 font-bold block mb-0.5">
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
