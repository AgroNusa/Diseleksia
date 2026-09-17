import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Layers, CheckCircle2 } from 'lucide-react';
import { SECTIONS } from '../data/summaryData';

export const DetailedSectionsAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleSection = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="detailed-chapters-section" className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
      <div className="pb-5 border-b border-slate-150 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Uraian Mendalam 6 Bagian Materi Video
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Rute perjalanan pembahasan sesuai alur slide presentasi
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {SECTIONS.map((sec, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={sec.id}
              id={`chapter-accordion-${sec.number}`}
              className={`rounded-xl border transition-all overflow-hidden ${
                isOpen ? 'border-teal-300 bg-slate-50/50' : 'border-slate-200 bg-white hover:bg-slate-50/70'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleSection(idx)}
                className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                    isOpen ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-700 border border-slate-200'
                  }`}>
                    {sec.number}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-slate-900">
                        {sec.title}
                      </h3>
                      <span className="hidden sm:inline-block text-[11px] font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-150">
                        {sec.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-normal">
                      {sec.subtitle}
                    </p>
                  </div>
                </div>

                <div className="text-slate-400 p-1">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 border-t border-slate-200/70 text-xs sm:text-sm space-y-3">
                  <p className="text-slate-700 leading-relaxed font-normal">
                    {sec.explanation}
                  </p>

                  {sec.analogyOrQuote && (
                    <div className="p-3 bg-amber-50/80 rounded-lg border border-amber-200/80 text-amber-900 text-xs italic">
                      💡 <strong>Inti:</strong> "{sec.analogyOrQuote}"
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-2">
                      Poin-Poin Kunci:
                    </h4>
                    <ul className="space-y-1.5">
                      {sec.keyPoints.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
