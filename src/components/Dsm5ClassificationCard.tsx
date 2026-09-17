import React from 'react';
import { BookOpen, PenTool, Calculator, CheckCircle2, Umbrella, Brain, MessageSquare, Sliders, Layers } from 'lucide-react';
import { CLINICAL_DSM5, CHARACTERISTICS_DISLEKSIA } from '../data/summaryData';

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-4 h-4 text-teal-700" />,
  MessageSquare: <MessageSquare className="w-4 h-4 text-sky-700" />,
  Sliders: <Sliders className="w-4 h-4 text-indigo-700" />,
  Layers: <Layers className="w-4 h-4 text-purple-700" />
};

const dsmIcons = [
  <BookOpen className="w-5 h-5 text-teal-700" />,
  <PenTool className="w-5 h-5 text-amber-700" />,
  <Calculator className="w-5 h-5 text-rose-700" />
];

export const Dsm5ClassificationCard: React.FC = () => {
  return (
    <section id="dsm5-classification" className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xs space-y-6">
      <div className="pb-4 border-b border-slate-150">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-2">
          <Umbrella className="w-3.5 h-3.5 text-blue-600" />
          <span>Bagian 2 & 3: Definisi & Diagnosis Klinis DSM-5</span>
        </div>
        <h2 className="text-base sm:text-lg font-bold text-slate-900">
          Klasifikasi Medis: Payung Gangguan Belajar Spesifik
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Berdasarkan DSM-5 dan Asosiasi Disleksia Indonesia: Kesulitan belajar spesifik pada individu dengan kecerdasan sedikitnya normal.
        </p>
      </div>

      {/* 3 Main Branches */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {CLINICAL_DSM5.map((item, idx) => (
          <div
            key={idx}
            id={`dsm-item-${item.condition.toLowerCase()}`}
            className="p-4 rounded-xl bg-slate-50/80 border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  {item.type}
                </span>
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                  {dsmIcons[idx]}
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                {item.condition}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                {item.description}
              </p>
            </div>

            <div className="pt-2.5 border-t border-slate-200/70 bg-white/70 rounded-lg p-2.5">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                Indikator Klinis:
              </span>
              <ul className="space-y-1 text-xs text-slate-700">
                {item.signs.map((s, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* 4 Core Characteristics from Video */}
      <div className="pt-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
          4 Karakteristik Kunci Anak Disleksia:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {CHARACTERISTICS_DISLEKSIA.map((char, cIdx) => (
            <div key={cIdx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center">
                  {iconMap[char.icon]}
                </div>
                <h4 className="text-xs font-bold text-slate-900">
                  {char.title}
                </h4>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                {char.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
