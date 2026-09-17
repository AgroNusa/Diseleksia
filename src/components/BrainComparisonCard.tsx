import React from 'react';
import { Brain, BatteryCharging, BatteryWarning, Sparkles, Navigation, Puzzle, Eye } from 'lucide-react';

export const BrainComparisonCard: React.FC = () => {
  return (
    <section id="brain-comparison-section" className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
      <div className="pb-5 border-b border-slate-150 mb-6">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold mb-1.5">
          <Sparkles className="w-3 h-3 text-purple-600" />
          <span>Bagian 4 & 5: Neurosains & Beban Kognitif</span>
        </div>
        <h2 className="text-base sm:text-lg font-bold text-slate-900">
          Di Dalam Otak Disleksia: Apa yang Terjadi?
        </h2>
        <p className="text-xs sm:text-sm text-slate-500">
          Perbedaan sistem neurobiologis otak kiri dan pengurasan energi mental saat membaca.
        </p>
      </div>

      {/* Two Key Brain Regions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-2.5 mb-2 text-slate-900 font-bold text-sm">
            <div className="w-7 h-7 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center">
              <Puzzle className="w-4 h-4" />
            </div>
            <span>1. Area Temporoparietal (Otak Kiri)</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Bertugas <strong>merakit tulisan menjadi bunyi ucapan</strong>. Bekerja persis seperti menyusun kepingan puzzle dari huruf ke suara.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-2.5 mb-2 text-slate-900 font-bold text-sm">
            <div className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-800 flex items-center justify-center">
              <Eye className="w-4 h-4" />
            </div>
            <span>2. Area Oksipitotemporal (Otak Kiri)</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Pusat <strong>otomatisasi pengenalan kata</strong>. Menyimpan bentuk visual kata secara instan sehingga kita tidak perlu mengeja kata yang sering dilihat.
          </p>
        </div>
      </div>

      {/* Pathway Comparison Visual */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-5 rounded-xl bg-emerald-50/60 border border-emerald-200/80">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide flex items-center gap-1.5">
              <Navigation className="w-3.5 h-3.5" />
              Anak Tipikal (Umum)
            </span>
            <span className="text-[11px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md">
              Jalur Tol Cepat
            </span>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed mb-3">
            Dari input visual langsung melesat menuju makna. Otak bekerja dengan mode <em>autopilot</em> yang efisien dan tanpa hambatan.
          </p>
          <div className="p-3 bg-white/80 rounded-lg border border-emerald-100 flex items-center gap-2.5">
            <BatteryCharging className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="text-xs text-slate-700 font-medium">
              <strong>Baterai Mental Hemat:</strong> 100% energi kognitif dialokasikan untuk memahami konteks dan cerita.
            </span>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-rose-50/60 border border-rose-200/80">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-rose-800 uppercase tracking-wide flex items-center gap-1.5">
              <Navigation className="w-3.5 h-3.5" />
              Anak Disleksia (Rio)
            </span>
            <span className="text-[11px] font-semibold bg-rose-100 text-rose-800 px-2 py-0.5 rounded-md">
              Jalur Berliku & Panjang
            </span>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed mb-3">
            Area otomatisasi tidak aktif dengan cara yang sama. Otak harus mengambil rute panjang: perhatian sadar penuh untuk decoding bunyi huruf satu per satu.
          </p>
          <div className="p-3 bg-white/80 rounded-lg border border-rose-100 flex items-center gap-2.5">
            <BatteryWarning className="w-5 h-5 text-rose-600 flex-shrink-0" />
            <span className="text-xs text-slate-700 font-medium">
              <strong>Baterai Mental Terkuras:</strong> Energi habis hanya untuk membaca simbol, menyisakan sedikit sisa untuk memahami arti.
            </span>
          </div>
        </div>
      </div>

      {/* Video Analogy Callout */}
      <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-slate-800 leading-relaxed">
        <strong className="text-amber-900 font-semibold block mb-1">
          Analogi Video (Buku Bahasa Asing):
        </strong>
        Bayangkan Anda disuruh membaca buku tebal dalam bahasa asing yang tata bahasanya belum dikuasai. Anda harus berhenti di setiap kata, membuka kamus, dan memikirkan ejaannya. Begitulah lelahnya kerja mental otak anak disleksia setiap kali membuka buku pelajaran.
      </div>
    </section>
  );
};
