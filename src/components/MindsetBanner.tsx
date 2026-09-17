import React from 'react';
import { HelpCircle, AlertTriangle, ArrowRight, UserCheck, HeartHandshake } from 'lucide-react';
import { CORE_QUOTES_MEMAHAMI } from '../data/summaryData';

export const MindsetBanner: React.FC = () => {
  return (
    <div id="mindset-banner" className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xs space-y-5">
      {/* Upper Core Quote Question */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-gradient-to-r from-teal-50/80 via-emerald-50/50 to-slate-50 p-4 sm:p-5 rounded-xl border border-teal-150">
        <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
          <HelpCircle className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded">
            Pergeseran Sudut Pandang Utama
          </span>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
            "{CORE_QUOTES_MEMAHAMI.mainQuestion}"
          </h2>
          <p className="text-xs text-slate-600">
            Hentikan pertanyaan menyalahkan seperti <em>"Mengapa anak ini tidak bisa membaca atau malas?"</em>. Ganti dengan empati untuk mencari akar masalah neurologis yang dihadapi anak.
          </p>
        </div>
      </div>

      {/* Case of Rio Profile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
        <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-150">
          <div className="flex items-center gap-2 text-rose-900 font-bold text-xs uppercase tracking-wider mb-2">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            <span>Kisah Rio (9 Tahun) & Jebakan Label Negatif</span>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            Rio sering tertinggal barang sekolah, lupa membawa buku PR, dan lambat mengeja. Tanpa pemahaman klinis, lingkungan sekitarnya dengan cepat memberi cap: <strong>"anak ceroboh"</strong>, <strong>"teledor"</strong>, atau <strong>"pemalas"</strong>.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-150">
          <div className="flex items-center gap-2 text-teal-900 font-bold text-xs uppercase tracking-wider mb-2">
            <UserCheck className="w-4 h-4 text-teal-700" />
            <span>Kenyataan Medis Sebenarnya</span>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            Di balik perilaku tersebut, Rio sedang berjuang keras melawan hambatan pemrosesan bahasa dan disfungsi eksekutif. Label negatif menutup mata orang dewasa dari mencari pertolongan yang sesungguhnya ia butuhkan.
          </p>
        </div>
      </div>
    </div>
  );
};
