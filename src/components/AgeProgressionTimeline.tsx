import React, { useState } from 'react';
import { Calendar, AlertCircle, AlertOctagon, Activity, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';
import { AGE_STAGES_DATA } from '../data/summaryData';

export const AgeProgressionTimeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="age-progression" className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xs space-y-6">
      <div className="pb-4 border-b border-slate-150">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold mb-2">
          <Activity className="w-3.5 h-3.5 text-amber-600" />
          <span>Bagian 4: Perjalanan Disleksia yang Dinamis</span>
        </div>
        <h2 className="text-base sm:text-lg font-bold text-slate-900">
          Gejala Sesuai Rentang Usia: Dari Prasekolah Hingga Remaja
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Disleksia tidak diam di tempat. Gejalanya bertransformasi seiring bertambahnya usia anak dan tuntutan sosial-akademik.
        </p>
      </div>

      {/* Age Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {AGE_STAGES_DATA.map((stage, idx) => {
          const isSelected = activeTab === idx;
          return (
            <button
              key={idx}
              id={`tab-age-${idx}`}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                isSelected
                  ? 'bg-teal-600 text-white border-teal-600 shadow-xs'
                  : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
              }`}
            >
              <span className={`text-[11px] font-bold block ${isSelected ? 'text-teal-100' : 'text-slate-400'}`}>
                Tahap {idx + 1}
              </span>
              <span className="text-sm font-bold block">
                {stage.ageGroup}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Stage Detailed Display */}
      {(() => {
        const stage = AGE_STAGES_DATA[activeTab];
        return (
          <div className="p-5 sm:p-6 rounded-xl bg-slate-50/80 border border-slate-200 space-y-4 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-3 border-b border-slate-200/80">
              <div>
                <span className="text-[11px] font-bold text-teal-800 bg-teal-100 px-2 py-0.5 rounded">
                  Rentang Usia: {stage.ageGroup}
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-1">
                  {stage.stageTitle}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              {stage.summary}
            </p>

            {/* Signs Checklist */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Manifestasi Gejala Spesifik:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {stage.signs.map((sign, sIdx) => (
                  <div key={sIdx} className="p-2.5 rounded-lg bg-white border border-slate-200/80 text-xs text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>{sign}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Psychological Impact */}
            <div className="p-3.5 rounded-lg bg-amber-50/80 border border-amber-200 text-xs text-amber-900 leading-relaxed">
              <strong className="font-semibold block mb-0.5">Dampak Psikologis & Sosial:</strong>
              {stage.psychologicalImpact}
            </div>

            {/* Key Alert / Risk Callout */}
            {stage.keyRiskOrAlert && (
              <div className="p-3.5 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-900 leading-relaxed flex items-start gap-2.5">
                <AlertOctagon className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block mb-0.5">Catatan Kritis Medis:</strong>
                  {stage.keyRiskOrAlert}
                </div>
              </div>
            )}
          </div>
        );
      })()}

      {/* TIC Syndrome Explainer Spotlight (Crucial topic in video) */}
      <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200/80 text-xs text-slate-800 space-y-1.5">
        <div className="flex items-center gap-2 font-bold text-purple-900">
          <Sparkles className="w-4 h-4 text-purple-700" />
          <span>Fakta Video: Mengapa Sindrom TIC Muncul di Usia 7-9 Tahun?</span>
        </div>
        <p className="text-slate-700 leading-relaxed">
          <strong>TIC</strong> adalah gerakan atau suara yang timbul secara tiba-tiba, cepat, berulang, dan di luar kendali fisik anak. Ini bukan kebiasaan iseng, melainkan alarm reaksi neurologis fisik tubuh yang kewalahan menahan stres psikologis serta tekanan kurikulum membaca di sekolah.
        </p>
      </div>
    </section>
  );
};
