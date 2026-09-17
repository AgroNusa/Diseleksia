import React from 'react';
import { Layers, Wind, Feather, Compass, AlertCircle, Heart, Sparkles, Flame, ShieldAlert, Cpu } from 'lucide-react';
import {
  ICEBERG_LEVELS,
  WRITING_ORCHESTRA,
  EXECUTIVE_FUNCTION_PILLARS,
  FAILURE_LOOP_STEPS,
  HIDDEN_STRENGTHS,
  MASTER_QUOTES
} from '../data/compiledVideosData';

export const ModuleVideo3: React.FC = () => {
  return (
    <section id="module-video-3" className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xs space-y-7">
      {/* Header */}
      <div className="pb-4 border-b border-slate-150">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-xs flex-shrink-0">
            3
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-800 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                Video 3: Beban Kognitif & Mental
              </span>
              <span className="text-xs text-slate-500 font-medium">Neurosains di Balik Kesulitan Belajar</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
              Beyond Reading: Bukan Hanya Soal Membaca
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Menyingkap lapisan raksasa yang tersembunyi di balik lembar nilai jelek: beban kognitif ekstrem, orkestra menulis yang sumbang, disfungsi eksekutif, dan erosi harga diri.
            </p>
          </div>
        </div>
      </div>

      {/* Iceberg Analogy */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-indigo-600" />
            Analogi Gunung Es Rio (*The Dyslexia Iceberg*)
          </h3>
          <span className="text-[11px] font-semibold text-indigo-800 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
            Realitas Sejati
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Surface */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                  Puncak Gunung Es (10% Di Permukaan)
                </span>
                <span className="text-[10px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                  Hanya Ini yang Terlihat
                </span>
              </div>
              <ul className="space-y-2 mt-3 text-xs text-slate-600">
                {ICEBERG_LEVELS.surface.items.map((item, idx) => (
                  <li key={idx} className="p-2 rounded-lg bg-white border border-slate-150 flex items-start gap-2">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-[11px] text-slate-500 italic mt-3 pt-2 border-t border-slate-200">
              Guru dan orang tua awam kerap hanya memvonis apa yang tampak di puncak ini.
            </p>
          </div>

          {/* Deep Submerged */}
          <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-indigo-950 uppercase tracking-wide">
                  Di Bawah Air (90% Beban Raksasa)
                </span>
                <span className="text-[10px] font-bold text-indigo-800 bg-indigo-100 px-2 py-0.5 rounded">
                  Penyebab Sebenarnya
                </span>
              </div>
              <ul className="space-y-2 mt-3 text-xs text-indigo-950 font-medium">
                {ICEBERG_LEVELS.deep.items.map((item, idx) => (
                  <li key={idx} className="p-2 rounded-lg bg-white/90 border border-indigo-150 flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-[11px] text-indigo-900 font-semibold mt-3 pt-2 border-t border-indigo-200">
              Inilah yang sesungguhnya menyiksa pikiran dan tubuh anak setiap jam belajar di sekolah.
            </p>
          </div>
        </div>
      </div>

      {/* Cognitive Burden: Marathon with a Straw */}
      <div className="p-5 rounded-xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white space-y-3 shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-300 uppercase tracking-wide">
            <Wind className="w-4 h-4 text-indigo-400" />
            <span>Beban Kognitif: Otak Tipikal vs Otak Disleksia</span>
          </div>
          <span className="text-[10px] font-semibold bg-indigo-800/80 text-indigo-200 px-2 py-0.5 rounded">
            Neurosains Otak
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-1">
          <div className="p-3.5 rounded-lg bg-white/10 border border-white/15 space-y-1">
            <strong className="text-emerald-300 font-bold block">
              Otak Tipikal (Pembaca Otomatis):
            </strong>
            <p className="text-slate-200 leading-relaxed">
              Membaca kata terjadi secara otomatis di korteks oksipitotemporal (VWFA). Energi kognitif yang terpakai hanya 5–10%, sehingga 90% sisa energi bebas digunakan untuk menikmati cerita dan memahami makna mendalam.
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-rose-500/20 border border-rose-400/30 space-y-1">
            <strong className="text-rose-300 font-bold block">
              Otak Disleksia (Pembaca Manual):
            </strong>
            <p className="text-slate-200 leading-relaxed">
              Tidak ada otomatisasi. Setiap huruf didekode manual satu per satu di area frontal depan. Diibaratkan: <span className="text-amber-300 font-bold">"{MASTER_QUOTES[1].quote}"</span> Begitu kalimat usai, anak kehabisan napas kognitif dan lupa apa isinya.
            </p>
          </div>
        </div>
      </div>

      {/* The 6 Instruments of Writing Orchestra */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Feather className="w-3.5 h-3.5 text-indigo-600" />
            Simfoni Menulis: 6 Instrumen Orkestra yang Harus Berbunyi Harmonis
          </h3>
          <span className="text-[11px] font-semibold text-indigo-800 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
            Kompleksitas Disgrafia
          </span>
        </div>
        <p className="text-xs text-slate-600">
          Menulis bukanlah keterampilan tunggal. Bagi anak disleksia/disgrafia, orkestra di bawah ini mengalami disonansi parah:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {WRITING_ORCHESTRA.map((inst) => (
            <div key={inst.number} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px] font-bold">
                    {inst.number}
                  </span>
                  <h4 className="text-xs font-bold text-slate-900">{inst.name}</h4>
                </div>
                <p className="text-[11px] text-slate-600 leading-snug mb-2">
                  {inst.function}
                </p>
              </div>
              <div className="p-2 rounded-lg bg-rose-50 border border-rose-150 text-[11px] text-rose-900 font-medium">
                <strong>Hambatan:</strong> {inst.dysgraphiaGlitch}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Executive Function: The Brain's Manager */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-indigo-600" />
            Fungsi Eksekutif: 3 Pilar Manajer Otak yang Terdampak
          </h3>
          <span className="text-[11px] font-semibold text-slate-500">
            Korteks Prefrontal
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {EXECUTIVE_FUNCTION_PILLARS.map((p, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-indigo-800 uppercase tracking-wider bg-indigo-100 px-2 py-0.5 rounded">
                  {p.analogy}
                </span>
                <h4 className="text-xs font-bold text-slate-900 mt-2">{p.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-1">
                  {p.description}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-700 bg-white p-2.5 rounded-lg border border-slate-150">
                <strong>Dampak di Kelas:</strong> {p.classroomImpact}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The Failure Loop & Monologue Mutation */}
      <div className="p-4.5 rounded-xl bg-rose-50/70 border border-rose-200 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-rose-900 flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-rose-600" />
            Siklus Kegagalan (*The Failure Loop*) & Mutasi Monolog Batin
          </h3>
          <span className="text-[10px] font-bold text-rose-800 bg-rose-200 px-2 py-0.5 rounded">
            6 Langkah Perangkap Mental
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {FAILURE_LOOP_STEPS.map((step) => (
            <div key={step.step} className="p-2.5 rounded-lg bg-white border border-rose-150 flex flex-col justify-between">
              <div>
                <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold text-[10px] mb-1">
                  {step.step}
                </span>
                <strong className="text-[11px] text-slate-900 block leading-tight mb-1">
                  {step.title}
                </strong>
                <p className="text-[10px] text-slate-500 leading-snug">
                  {step.experience}
                </p>
              </div>
              <div className="mt-2 pt-1 border-t border-rose-100 text-[10px] text-rose-800 font-semibold italic">
                {step.psychologicalToll}
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 rounded-lg bg-white border border-rose-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <span className="text-slate-700">
            <strong>Mutasi Paling Berbahaya:</strong> Monolog batin anak bergeser dari kalimat objektif: <em>"Saya kesulitan membaca tugas ini"</em> $\rightarrow$ menjadi vonis kehancuran diri: <strong>"Saya memang anak bodoh dan tidak berguna."</strong>
          </span>
        </div>
      </div>

      {/* 6 Hidden Strengths */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Sisi Lain Koin: 6 Kekuatan Tersembunyi Otak Disleksia
          </h3>
          <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            Potensi Masa Depan
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {HIDDEN_STRENGTHS.map((str, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-bold text-amber-800 uppercase tracking-wide">
                  {str.tagline}
                </div>
                <h4 className="text-xs font-bold text-slate-900 mb-1 mt-0.5">{str.name}</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed mb-3">
                  {str.description}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-200 text-[10px] font-semibold text-teal-800">
                Karier Unggulan: {str.realWorldField}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
