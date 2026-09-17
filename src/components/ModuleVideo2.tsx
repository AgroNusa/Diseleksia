import React, { useState } from 'react';
import { BookOpen, AlertTriangle, Brain, CheckCircle2, XCircle, ArrowRight, ShieldCheck, HeartPulse, Sparkles } from 'lucide-react';
import { DYSLEXIA_TRIAD, AGE_PROGRESSION_STAGES, SLOW_READER_VS_DYSLEXIA } from '../data/compiledVideosData';

export const ModuleVideo2: React.FC = () => {
  const [activeTriadTab, setActiveTriadTab] = useState<string>('dyslexia');

  const activeTriad = DYSLEXIA_TRIAD.find((t) => t.id === activeTriadTab) || DYSLEXIA_TRIAD[0];

  return (
    <section id="module-video-2" className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xs space-y-7">
      {/* Module Title Header */}
      <div className="pb-4 border-b border-slate-150">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-xs flex-shrink-0">
            2
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                Video 2: Fondasi Medis & Gejala
              </span>
              <span className="text-xs text-slate-500 font-medium">DSM-5 & Asosiasi Disleksia Indonesia (ADI)</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
              Memahami Disleksia: Bukan Sekadar Sulit Membaca
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Membongkar miskonsepsi umum: disleksia bukan sekadar huruf tertukar atau kurang niat belajar, melainkan kondisi neurobiologis kabel otak dengan transmisi fonologis yang khas.
            </p>
          </div>
        </div>
      </div>

      {/* Clinical Definition Box */}
      <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wide">
          <Brain className="w-4 h-4 text-blue-600" />
          <span>Definisi Resmi Klinis (ADI & DSM-5)</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          Disleksia adalah <strong>Gangguan Belajar Spesifik (*Specific Learning Disorder*)</strong> berbasis neurobiologis dengan komponen genetik kuat yang memengaruhi akurasi dan kelancaran dalam pengenalan kata (*word recognition*), pengodean fonem (*decoding*), dan kemampuan mengeja (*spelling*).
        </p>
        <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] font-medium text-slate-600">
          <div className="p-2 rounded-lg bg-white border border-slate-200 flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
            <span>IQ Normal hingga Superior</span>
          </div>
          <div className="p-2 rounded-lg bg-white border border-slate-200 flex items-center gap-2">
            <XCircle className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" />
            <span>Bukan Akibat Malas / Kurang Niat</span>
          </div>
          <div className="p-2 rounded-lg bg-white border border-slate-200 flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
            <span>Sensorik Mata & Telinga Sehat</span>
          </div>
        </div>
      </div>

      {/* The Triad of Specific Learning Disorders */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Triad Gangguan Belajar Spesifik: Disleksia, Disgrafia, Diskalkulia
          </h3>
          <span className="text-[11px] font-semibold text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
            Sering Beriringan (Komorbid)
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {DYSLEXIA_TRIAD.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTriadTab(item.id)}
              className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                activeTriadTab === item.id
                  ? 'bg-blue-50/80 border-blue-300 shadow-xs'
                  : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <div className="text-xs font-bold text-slate-900">{item.name}</div>
              <div className="text-[10px] text-slate-500 italic">{item.latinName}</div>
            </button>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-white border border-blue-200 space-y-3 shadow-2xs">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 bg-blue-100 px-2 py-0.5 rounded">
              {activeTriad.name} — {activeTriad.latinName}
            </span>
            <p className="text-xs sm:text-sm text-slate-800 mt-2 font-medium leading-relaxed">
              {activeTriad.definition}
            </p>
          </div>
          <div className="space-y-1.5 pt-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
              Manifestasi Perilaku Nyata:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {activeTriad.manifestations.map((m, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-150 text-xs text-slate-700 flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Age Progression Spectrum & Psychological Risks */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <HeartPulse className="w-3.5 h-3.5 text-rose-600" />
            Eskalasi Gejala Menurut Rentang Usia & Risiko Psikologis
          </h3>
          <span className="text-[11px] font-semibold text-rose-800 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
            Dampak Jika Dibiarkan
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {AGE_PROGRESSION_STAGES.map((stg, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold text-slate-500 uppercase">
                    Tahap {idx + 1}
                  </span>
                  <span className="text-[10px] font-bold text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">
                    {stg.dangerFlag}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-slate-900 mb-0.5">
                  {stg.ageGroup}
                </h4>
                <p className="text-[11px] font-medium text-slate-600 mb-2 italic">
                  {stg.title}
                </p>
                <div className="space-y-1 mb-3">
                  {stg.coreSymptoms.map((sym, sIdx) => (
                    <div key={sIdx} className="text-[11px] text-slate-600 leading-snug flex items-start gap-1">
                      <span className="text-blue-500">•</span>
                      <span>{sym}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 text-[11px] text-rose-900 font-medium bg-rose-50/70 p-2 rounded-lg border border-rose-150">
                <strong>Risiko Jiwa:</strong> {stg.psychologicalRisk}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scientific Comparison: Slow Reader vs Dyslexia */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Komparasi Ilmiah: Lambat Membaca (*Slow Reader*) vs Disleksia
          </h3>
          <span className="text-[11px] font-semibold text-slate-600">
            Menghindari Salah Penanganan
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                <th className="p-3 w-1/4">Aspek Perbandingan</th>
                <th className="p-3 w-3/8 text-slate-700">Anak Lambat Membaca (*Slow Reader*)</th>
                <th className="p-3 w-3/8 text-blue-900 bg-blue-50/60">Anak Disleksia (*Dyslexic*)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {SLOW_READER_VS_DYSLEXIA.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-slate-50">
                  <td className="p-3 font-semibold text-slate-900">{row.aspect}</td>
                  <td className="p-3 text-slate-600 leading-relaxed">{row.slowReader}</td>
                  <td className="p-3 text-blue-950 font-medium bg-blue-50/20 leading-relaxed">{row.dyslexia}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Golden Window Callout */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 via-indigo-50 to-teal-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="text-xs">
            <strong className="text-slate-900 block font-bold">
              Jendela Emas (*Golden Window*) Intervensi (Usia &lt; 9 Tahun / Kelas 1–3 SD)
            </strong>
            <span className="text-slate-600">
              Plastisitas saraf otak masih berada pada puncaknya untuk membentuk sirkuit alternatif membaca. Menunda intervensi membuat jurang ketertinggalan semakin sulit ditutup.
            </span>
          </div>
        </div>
        <span className="text-[11px] font-bold text-blue-900 bg-white px-3 py-1.5 rounded-lg border border-blue-200 shadow-2xs whitespace-nowrap">
          Manfaatkan Plastisitas Otak
        </span>
      </div>
    </section>
  );
};
