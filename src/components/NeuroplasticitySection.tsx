import React from 'react';
import { BrainCircuit, HeartHandshake, GraduationCap, CheckCircle2, Sparkles, HelpCircle } from 'lucide-react';

export const NeuroplasticitySection: React.FC = () => {
  return (
    <section id="neuroplasticity-section" className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
      <div className="pb-5 border-b border-slate-150 mb-6">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold mb-1.5">
          <Sparkles className="w-3 h-3 text-teal-600" />
          <span>Bagian 6: Harapan & Solusi</span>
        </div>
        <h2 className="text-base sm:text-lg font-bold text-slate-900">
          Neuroplastisitas: Otak Bisa Berubah dan Dipahat Ulang
        </h2>
        <p className="text-xs sm:text-sm text-slate-500">
          Kemampuan otak beradaptasi dan berkembang sebagai respons terhadap pembelajaran terstruktur.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
          <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center mb-3">
            <BrainCircuit className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-slate-900 mb-1.5">
            Bukan Penyakit yang Hilang Sendiri
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Disleksia bukan penyakit medis yang bisa disembuhkan dengan obat, tetapi merupakan keunikan kabel saraf otak alami.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
          <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center mb-3">
            <GraduationCap className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-slate-900 mb-1.5">
            Metode Belajar Terstruktur
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Lewat pembelajaran fonologis yang terstruktur, multisensori, eksplisit, dan berulang, jalur sirkuit saraf membaca dapat dibangun ulang.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
            <HeartHandshake className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-slate-900 mb-1.5">
            Empati & Dukungan Penuh
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Buang anggapan malas. Menggantinya dengan pemahaman bahwa mereka sedang berjuang ekstra keras untuk hal yang bagi orang lain otomatis.
          </p>
        </div>
      </div>

      {/* The Final Question from the Video */}
      <div className="p-5 rounded-xl bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200">
        <div className="flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-lg bg-teal-600 text-white flex items-center justify-center flex-shrink-0">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-teal-950 mb-1">
              Refleksi Penutup Video:
            </h4>
            <p className="text-xs sm:text-sm text-teal-900 leading-relaxed font-medium">
              "Bagaimana cara mengajar anak agar otaknya terbantu? Strategi seperti apa yang bisa kita pakai untuk membangun jembatan membaca bagi mereka?"
            </p>
            <p className="text-xs text-teal-700/90 mt-1">
              Inilah tantangan terbesar bagi pendidik dan orang tua: memberikan stimulasi tepat agar kekuatan neuroplastisitas bekerja optimal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
