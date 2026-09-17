import React from 'react';
import { Volume2, Music, Split, Layers, Shuffle, Sparkles } from 'lucide-react';
import { PHONOLOGICAL_SKILLS } from '../data/summaryData';

const skillIcons = [Music, Layers, Split, Volume2, Split, Shuffle];

export const PhonologicalMatrix: React.FC = () => {
  return (
    <section id="phonological-section" className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
      <div className="pb-5 border-b border-slate-150 mb-6">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-1.5">
          <Sparkles className="w-3 h-3 text-emerald-600" />
          <span>Bagian 2: Kesadaran Fonologis</span>
        </div>
        <h2 className="text-base sm:text-lg font-bold text-slate-900">
          6 Pilar Kesadaran Fonologis (Mengenal Bunyi Bahasa)
        </h2>
        <p className="text-xs sm:text-sm text-slate-500">
          Membaca berawal dari telinga: kemampuan mengenali, mendengar, dan memanipulasi bunyi lisan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PHONOLOGICAL_SKILLS.map((skill, index) => {
          const Icon = skillIcons[index % skillIcons.length];
          return (
            <div
              key={index}
              id={`phonological-card-${index + 1}`}
              className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md">
                    {skill.tag}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {skill.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/60 bg-white/70 rounded-lg p-2.5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block mb-0.5">
                  Contoh dalam Video:
                </span>
                <span className="text-xs font-mono font-medium text-teal-800">
                  {skill.example}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
