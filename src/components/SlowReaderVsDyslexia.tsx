import React from 'react';
import { Eye, Glasses, Ear, BookOpen, Dna, CheckCircle2, AlertCircle } from 'lucide-react';
import { DIFFERENCE_EXPLANATION } from '../data/summaryData';

export const SlowReaderVsDyslexia: React.FC = () => {
  return (
    <section id="slow-vs-dyslexia" className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xs space-y-5">
      <div className="pb-4 border-b border-slate-150">
        <h2 className="text-base sm:text-lg font-bold text-slate-900">
          Perbedaan Kritis: Lambat Membaca vs Disleksia
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Tidak semua anak yang terlambat membaca otomatis mengalami disleksia. Memahami pembeda ini mencegah salah diagnosis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Slow Reader */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                Kategori 1
              </span>
              <span className="text-[11px] font-semibold text-sky-800 bg-sky-100 px-2.5 py-0.5 rounded-md">
                Faktor Sensorik / Instruksional
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              {DIFFERENCE_EXPLANATION.slowReader.title}
            </h3>
            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
              Keterlambatan membaca yang bersumber dari hambatan fisik luar atau cara stimulasi:
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              {DIFFERENCE_EXPLANATION.slowReader.causes.map((c, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dyslexia */}
        <div className="p-5 rounded-xl bg-teal-50/60 border border-teal-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-teal-800 uppercase tracking-wide">
                Kategori 2
              </span>
              <span className="text-[11px] font-semibold text-teal-900 bg-teal-100 px-2.5 py-0.5 rounded-md">
                Kondisi Genetik Seumur Hidup
              </span>
            </div>
            <h3 className="text-base font-bold text-teal-950 mb-2">
              {DIFFERENCE_EXPLANATION.dyslexia.title}
            </h3>
            <p className="text-xs text-slate-700 mb-3 leading-relaxed">
              Bukan gangguan mata atau telinga, melainkan pengkabelan otak yang unik:
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              {DIFFERENCE_EXPLANATION.dyslexia.causes.map((c, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Dna className="w-4 h-4 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
