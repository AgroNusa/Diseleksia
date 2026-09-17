import React, { useState } from 'react';
import {
  FileText,
  Clock,
  BookOpen,
  VolumeX,
  Laptop,
  Eye,
  CheckCircle2,
  Sparkles,
  Heart,
  Home,
  GraduationCap,
  Layers,
  ArrowRight,
  ShieldCheck,
  CalendarCheck
} from 'lucide-react';
import {
  IEP_PRINCIPLES,
  CLASSROOM_ACCOMMODATIONS,
  VAKT_METHODS,
  HOME_STRATEGIES,
  MASTER_QUOTES
} from '../data/compiledVideosData';

const accommodationIcons: Record<string, React.ReactNode> = {
  FileCheck: <FileText className="w-4 h-4 text-emerald-600" />,
  Clock: <Clock className="w-4 h-4 text-amber-600" />,
  BookOpen: <BookOpen className="w-4 h-4 text-blue-600" />,
  VolumeX: <VolumeX className="w-4 h-4 text-rose-600" />,
  Laptop: <Laptop className="w-4 h-4 text-purple-600" />,
  Eye: <Eye className="w-4 h-4 text-teal-600" />
};

export const ModuleVideo5: React.FC = () => {
  const [selectedVakt, setSelectedVakt] = useState<number>(0);

  return (
    <section id="module-video-5" className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xs space-y-7">
      {/* Header */}
      <div className="pb-4 border-b border-slate-150">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-xs flex-shrink-0">
            5
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Video 5: Implementasi & Praktik Nyata
              </span>
              <span className="text-xs text-slate-500 font-medium">Aksi Besok Pagi di Ruang Kelas & Rumah</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
              Rencana Aksi Nyata: Strategi & Akomodasi Terapan
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Menjawab pertanyaan pamungkas: bagaimana menerjemahkan diagnosis menjadi rencana pembelajaran individual (IEP), akomodasi kelas yang adil, metode multisensori VAKT, dan suaka aman di rumah.
            </p>
          </div>
        </div>
      </div>

      {/* IEP Principles (Individualized Education Program) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
            Menyusun IEP (Individualized Education Program) Ramah Disleksia
          </h3>
          <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            Kesepakatan Resmi Sekolah
          </span>
        </div>
        <p className="text-xs text-slate-600">
          IEP adalah komitmen tertulis bersama antara sekolah, orang tua, dan profesional agar anak tidak diukur dengan timbangan yang keliru:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {IEP_PRINCIPLES.map((iep) => (
            <div key={iep.step} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px] mb-1.5">
                  {iep.step}
                </span>
                <h4 className="text-xs font-bold text-slate-900 mb-1">{iep.component}</h4>
                <p className="text-[11px] text-slate-600 leading-snug mb-2">
                  {iep.description}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-200 text-[10px] text-emerald-900 font-medium bg-emerald-50/70 p-2 rounded-lg border border-emerald-150">
                <strong>Praktek:</strong> {iep.exampleInSchool}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6 Concrete Classroom Accommodations */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            6 Akomodasi Ruang Kelas yang Bisa Diterapkan Guru Besok Pagi
          </h3>
          <span className="text-[11px] font-semibold text-slate-600">
            Pedagogi Adil & Manusiawi
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {CLASSROOM_ACCOMMODATIONS.map((acc, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-2.5">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                      {accommodationIcons[acc.icon] || <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {acc.category}
                    </span>
                  </div>
                </div>
                <h4 className="text-xs font-bold text-slate-900 mb-1">{acc.title}</h4>
                <p className="text-[11px] text-rose-700 bg-rose-50/70 px-2 py-1 rounded border border-rose-150 mb-2 font-medium">
                  <strong>Kendala:</strong> {acc.problemSolved}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-200 text-xs text-slate-700 leading-relaxed bg-white p-2.5 rounded-lg border border-slate-150">
                <strong>Aksi Konkret Guru:</strong> {acc.concreteStrategy}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Multisensory VAKT Approach (Orton-Gillingham) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Pendekatan Fonik Multisensori (VAKT: Visual - Auditory - Kinesthetic - Tactile)
          </h3>
          <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            Kunci Sukses Disleksia
          </span>
        </div>
        <p className="text-xs text-slate-600">
          Metode terbukti secara klinis (Orton-Gillingham): mengaktifkan beberapa jalur sensori sekaligus agar konsep fonem dan huruf terpatri kuat di otak tanpa membebani satu jalur saraf saja.
        </p>

        {/* VAKT Tab Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {VAKT_METHODS.map((v, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedVakt(idx)}
              className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                selectedVakt === idx
                  ? 'bg-emerald-50 border-emerald-400 shadow-xs'
                  : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <div className="text-xs font-bold text-slate-900">{v.modality}</div>
              <div className="text-[10px] text-slate-500">{v.sensesUsed}</div>
            </button>
          ))}
        </div>

        {/* Selected VAKT Details */}
        <div className="p-4 rounded-xl bg-white border border-emerald-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-slate-900">
              {VAKT_METHODS[selectedVakt].title} — Jalur Sensori: {VAKT_METHODS[selectedVakt].sensesUsed}
            </h4>
            <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
              Aplikasi Nyata
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
              <strong className="text-emerald-900 font-bold block">
                Penerapan di Ruang Kelas (Guru):
              </strong>
              <p className="text-slate-600 leading-relaxed">
                {VAKT_METHODS[selectedVakt].classroomApplication}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-teal-50/60 border border-teal-200 space-y-1">
              <strong className="text-teal-900 font-bold block">
                Penerapan di Rumah (Orang Tua):
              </strong>
              <p className="text-slate-700 leading-relaxed">
                {VAKT_METHODS[selectedVakt].homeApplication}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Pillars for Home & Sanctuary */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Home className="w-3.5 h-3.5 text-teal-600" />
            4 Prinsip Pendampingan Rumah Ramah Jiwa untuk Orang Tua
          </h3>
          <span className="text-[11px] font-semibold text-slate-500">
            Menjaga Kewarasan Mental Anak
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {HOME_STRATEGIES.map((strat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div>
                <span className="text-[10px] font-bold uppercase text-teal-800 bg-teal-100 px-2 py-0.5 rounded">
                  {strat.rule}
                </span>
                <h4 className="text-xs font-bold text-slate-900 mt-1.5">{strat.title}</h4>
              </div>
              <div className="space-y-1.5 pt-1 text-xs">
                <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950">
                  <strong>Lakukan Ini:</strong> {strat.doThis}
                </div>
                <div className="p-2 rounded-lg bg-rose-50 border border-rose-200 text-rose-950">
                  <strong>Hindari Ini:</strong> {strat.avoidThis}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tomorrow Action Cheatsheet Callout */}
      <div className="p-5 rounded-xl bg-gradient-to-r from-slate-900 to-teal-950 text-white space-y-3 shadow-xs">
        <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
          <CalendarCheck className="w-4 h-4 text-teal-400" />
          <span>Cheatsheet: 3 Langkah Aksi Nyata Besok Pagi</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-lg bg-white/10 border border-white/15">
            <strong className="text-teal-300 block mb-1">1. Buat Kesepakatan Guru</strong>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Jadwalkan obrolan santai dengan wali kelas untuk menyepakati akomodasi tanpa menyalin papan tulis & waktu ujian tambahan.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-white/10 border border-white/15">
            <strong className="text-teal-300 block mb-1">2. Pasang Visual Checklist</strong>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Gantikan instruksi lisan panjang dengan kartu bergambar di meja belajar anak untuk meringankan beban memori kerjanya.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-white/10 border border-white/15">
            <strong className="text-teal-300 block mb-1">3. Peluk & Rayakan Bakat</strong>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Beri waktu 1 jam untuk menggambar, berolahraga, atau merakit balok lego. Ingatkan anak bahwa otaknya hebat dan bernilai tinggi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
