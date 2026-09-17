import React from 'react';
import { Sparkles, Clock, Palette, CheckCircle2, HeartHandshake, ShieldCheck } from 'lucide-react';

export const DetectionAndInterventionCard: React.FC = () => {
  return (
    <section id="detection-intervention" className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xs space-y-6">
      <div className="pb-4 border-b border-slate-150">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Bagian 5: Deteksi & Intervensi Dini</span>
        </div>
        <h2 className="text-base sm:text-lg font-bold text-slate-900">
          Kunci Harapan Masa Depan: Deteksi Dini & "Talent Bloom"
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Disleksia tidak berakhir suram jika intervensi klinis dan stimulasi yang tepat dimulai sejak masa emas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Golden Window */}
        <div className="p-5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-2">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>Jendela Emas (Golden Window): Usia 3-5 Tahun</span>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              Intervensi di Fase Prasekolah
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed space-y-2">
              <span>
                Mendeteksi tanda sejak dini dan memberikan terapi bahasa/fonologis pada usia 3-5 tahun mampu <strong>mencegah rentetan kegagalan berulang</strong> saat anak masuk sekolah dasar.
              </span>
              <span className="block pt-2 text-amber-950 font-medium">
                Jika menunggu sampai usia 9 tahun baru bertindak, mengejar ketertinggalan akademik dan memulihkan trauma mental anak akan jauh lebih sulit dan melelahkan.
              </span>
            </p>
          </div>
        </div>

        {/* Talent Bloom */}
        <div className="p-5 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50/50 border border-teal-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-teal-900 font-bold text-xs uppercase tracking-wider mb-2">
              <Palette className="w-4 h-4 text-teal-600" />
              <span>Mekarnya Potensi Unik (Talent Bloom)</span>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              Kecerdasan Spasial & Daya Seni Unggul
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed space-y-2">
              <span>
                Banyak anak disleksia yang dianugerahi <strong>kecerdasan spasial 3D yang sangat tajam</strong>, daya imajinasi tinggi, serta kepekaan seni yang luar biasa.
              </span>
              <span className="block pt-2 text-teal-950 font-medium">
                Lewat intervensi yang ramah otak, kita membuka jalan bagi potensi terpendam ini untuk mekar berkembang bebas dari bayang-bayang cap negatif.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Actionable Reflection Box */}
      <div className="p-5 rounded-xl bg-slate-900 text-white space-y-2 shadow-xs">
        <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
          <HeartHandshake className="w-4 h-4" />
          <span>Komitmen Kita Bersama:</span>
        </div>
        <p className="text-sm font-medium leading-relaxed text-slate-100">
          "Ketika melihat anak yang kesulitan membaca, ingatlah fenomena gunung es: perilaku luar hanyalah pucuknya, di dalamnya anak sedang berjuang keras. Tugas kita adalah hadir mendampingi dengan metode yang sesuai dengan keunikan kerja otaknya."
        </p>
      </div>
    </section>
  );
};
