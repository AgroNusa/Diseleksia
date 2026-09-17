import React from 'react';
import {
  Clock,
  Volume2,
  HelpCircle,
  MessageSquare,
  ListOrdered,
  Brain,
  Activity,
  Flag,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Users,
  HeartHandshake,
  Sparkles,
  RefreshCw
} from 'lucide-react';
import {
  RIO_SPIRAL_STEPS,
  PRESCHOOL_SIGNS,
  RED_FLAGS,
  THREE_LEGGED_TABLE,
  FIVE_ACTION_CYCLE,
  MASTER_QUOTES
} from '../data/compiledVideosData';

const signIconMap: Record<string, React.ReactNode> = {
  Volume2: <Volume2 className="w-4 h-4 text-teal-600" />,
  HelpCircle: <HelpCircle className="w-4 h-4 text-amber-600" />,
  MessageSquare: <MessageSquare className="w-4 h-4 text-sky-600" />,
  ListOrdered: <ListOrdered className="w-4 h-4 text-indigo-600" />,
  Brain: <Brain className="w-4 h-4 text-purple-600" />,
  Activity: <Activity className="w-4 h-4 text-rose-600" />
};

export const ModuleVideo4: React.FC = () => {
  return (
    <section id="module-video-4" className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xs space-y-7">
      {/* Header */}
      <div className="pb-4 border-b border-slate-150">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-sm shadow-xs flex-shrink-0">
            4
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                Video 4: Deteksi Dini & Kolaborasi
              </span>
              <span className="text-xs text-slate-500 font-medium">Dari Kekhawatiran Menjadi Langkah Konkret</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
              Kekhawatiran ke Aksi Nyata: Deteksi & Intervensi Dini
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Menghilangkan mentalitas pasif "tunggu saja dulu", mengenali tanda awal usia prasekolah, dan segera memulai intervensi adaptif tanpa perlu menunggu surat diagnosis resmi.
            </p>
          </div>
        </div>
      </div>

      {/* The Danger of Wait and See (Kisah Rio) */}
      <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wide">
          <Clock className="w-4 h-4 text-amber-700" />
          <span>Jebakan Mentalitas: "Wait and See" (Tunggu Saja Dulu, Nanti Lancar Sendiri)</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          Niat orang tua dan guru seringkali baik: tidak ingin menekan anak. Namun kurikulum sekolah terus bergerak kencang. Menunda tindakan menciptakan jurang pemisah yang menyeret anak ke <strong>4 Tangga Kehancuran Mental</strong>:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-1">
          {RIO_SPIRAL_STEPS.map((step) => (
            <div key={step.step} className="p-3 rounded-lg bg-white border border-amber-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold text-[10px]">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-semibold text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-150">
                    {step.subtitle}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-slate-900 mb-1">{step.title}</h4>
                <p className="text-[11px] text-slate-600 leading-snug">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6 Signs at Preschool Age (3-5 Years) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            6 Tanda Awal pada Usia Prasekolah (3–5 Tahun)
          </h3>
          <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
            Fase Deteksi TK
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {PRESCHOOL_SIGNS.map((s) => (
            <div key={s.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                    {signIconMap[s.iconType]}
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">{s.title}</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {s.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5 Red Flags */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Flag className="w-3.5 h-3.5 text-rose-600" />
            5 Bendera Merah (*Red Flags*): Kapan Harus Minta Bantuan Profesional?
          </h3>
          <span className="text-[11px] font-semibold text-rose-800 bg-rose-50 px-2.5 py-0.5 rounded border border-rose-200">
            Evaluasi Klinis
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
          {RED_FLAGS.map((rf) => (
            <div key={rf.number} className="p-3 rounded-xl bg-rose-50/60 border border-rose-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px] font-bold">
                    {rf.number}
                  </span>
                  <span className="text-[10px] font-bold uppercase text-rose-800 bg-rose-100 px-1.5 py-0.5 rounded">
                    {rf.dangerLevel}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-slate-900 mb-1">{rf.title}</h4>
                <p className="text-[11px] text-slate-600 leading-snug">
                  {rf.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span>
            <strong>Aturan Emas:</strong> "{MASTER_QUOTES[2].quote}"
          </span>
        </div>
      </div>

      {/* Chunking vs Borongan Simulator */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Intervensi Dini di Kelas: Instruksi Borongan vs Pemecahan Langkah (*Chunking*)
          </h3>
          <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
            Tanpa Perlu Menunggu Diagnosis
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200 space-y-2">
            <span className="text-xs font-bold text-rose-900 uppercase flex items-center gap-1.5">
              <XCircle className="w-4 h-4 text-rose-600" />
              Instruksi Borongan (Membuat Otak Overwhelm)
            </span>
            <div className="p-3 rounded-lg bg-white border border-rose-150 text-xs text-rose-950 italic">
              "Anak-anak, buka buku, buka halaman 20, kerjakan nomor 1 sampai 5, lalu kumpulkan ke meja guru!"
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ember memori kerja anak tumpah seketika. Anak cuma bengong di meja dan akhirnya dicap malas atau pembangkang.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2">
            <span className="text-xs font-bold text-emerald-900 uppercase flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Teknik Chunking (Langkah Mini Satu Per Satu)
            </span>
            <div className="space-y-1.5 text-xs">
              <div className="p-2 rounded-lg bg-white border border-emerald-150 flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px]">1</span>
                <span>"Ayo anak-anak, buka bukunya dulu." <em>(Beri jeda)</em></span>
              </div>
              <div className="p-2 rounded-lg bg-white border border-emerald-150 flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px]">2</span>
                <span>"Bagus! Sekarang buka halaman 20 ya." <em>(Beri jeda)</em></span>
              </div>
              <div className="p-2 rounded-lg bg-white border border-emerald-150 flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px]">3</span>
                <span>"Nah, mari kerjakan nomor 1 terlebih dahulu."</span>
              </div>
            </div>
            <p className="text-[11px] text-emerald-950 font-medium">
              Tugas menakutkan berubah menjadi serangkaian kemenangan kecil yang terbukti dapat dicapai anak.
            </p>
          </div>
        </div>
      </div>

      {/* The 3-Legged Table & Collaborative Communication */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-teal-600" />
            Sistem Dukungan "Meja 3 Kaki": Orang Tua + Guru + Profesional
          </h3>
          <span className="text-[11px] font-semibold text-slate-500">
            Kolaborasi Tanpa Silo & Ego
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                <th className="p-3">Orang Tua (Di Rumah)</th>
                <th className="p-3">Guru (Di Ruang Kelas)</th>
                <th className="p-3">Profesional (Dokter / Psikolog)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {THREE_LEGGED_TABLE.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="p-3 text-slate-700 leading-relaxed">{row.parentPoint}</td>
                  <td className="p-3 text-slate-700 leading-relaxed">{row.teacherPoint}</td>
                  <td className="p-3 text-slate-700 leading-relaxed">{row.professionalPoint}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Positive Partnership Language Box */}
        <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <HeartHandshake className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <div className="text-xs">
              <strong className="text-teal-950 block font-bold">
                Ubah Kata Frustrasi Menjadi Bahasa Kemitraan:
              </strong>
              <span className="text-teal-900 italic">
                "Wah, bagian ini memang kelihatannya masih sulit ya buat kamu. Nggak apa-apa, Ibu tahu ini berat. Yuk kita cari cara lain bareng-bareng!"
              </span>
            </div>
          </div>
          <span className="text-[11px] font-bold text-teal-900 bg-white border border-teal-200 px-3 py-1.5 rounded-lg shadow-2xs whitespace-nowrap">
            Satu Tim dengan Anak
          </span>
        </div>
      </div>

      {/* 5-Step Continuous Action Cycle */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <RefreshCw className="w-3.5 h-3.5 text-teal-600" />
            Siklus 5 Langkah Aksi Nyata Berkelanjutan
          </h3>
          <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
            Siklus Berkesinambungan
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {FIVE_ACTION_CYCLE.map((step) => (
            <div key={step.step} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="w-6 h-6 rounded-full bg-teal-700 text-white flex items-center justify-center font-bold text-xs mb-2">
                  {step.step}
                </span>
                <h4 className="text-xs font-bold text-slate-900 mb-1">{step.title}</h4>
                <p className="text-[11px] text-slate-600 leading-snug mb-3">
                  {step.description}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-200 text-[10px] font-semibold text-teal-800 uppercase tracking-wide">
                Luaran: {step.deliverable}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
