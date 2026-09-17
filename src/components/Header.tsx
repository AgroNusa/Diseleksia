import React, { useState } from 'react';
import { Copy, Check, Sparkles, BookOpen, Layers, ArrowDownCircle } from 'lucide-react';
import { VIDEO_MODULES, MASTER_QUOTES } from '../data/compiledVideosData';
import { VideoModuleId } from '../types';

interface HeaderProps {
  activeModule: VideoModuleId;
  onSelectModule: (mod: VideoModuleId) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeModule, onSelectModule }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyFullCompilation = async () => {
    const text = `KOMPILASI LENGKAP WORKSHOP EDUKASI MEDIKA TEKNOLOGI (VIDEO 2, 3, 4, 5 BERURUTAN)

============================================================
KUTIPAN & PRINSIP UTAMA:
1. "${MASTER_QUOTES[0].quote}" (${MASTER_QUOTES[0].translation})
2. "${MASTER_QUOTES[1].quote}"
3. "${MASTER_QUOTES[2].quote}"
4. "${MASTER_QUOTES[3].quote}"

============================================================
VIDEO 2: MEMAHAMI DISLEKSIA (BUKAN SEKADAR SULIT MEMBACA)
- Definisi Medis (ADI & DSM-5): Gangguan belajar spesifik berbasis neurobiologis genetik yang memengaruhi akurasi fonologis, bukan karena kecerdasan rendah atau malas.
- Triad Gangguan: Disleksia (baca/fonem), Disgrafia (tulis/motorik halus/spasial), Diskalkulia (angka/aritmatika).
- Spektrum Gejala Menurut Usia:
  * Prasekolah (3-5 thn): Sulit rima bunyi bahasa, lambat bicara, nama benda nyangkut.
  * Usia Dini SD (7-9 thn): Sangat tertinggal, huruf cermin menetap, timbul SINDROM TIC akibat stres kelas.
  * Usia Menengah SD (10-12 thn): Kesenjangan makin lebar, risiko ODD (membangkang sebagai tameng diri).
  * Remaja (>12 thn): Kelelahan kognitif, depresi klinis, isolasi sosial, hingga risiko ide bunuh diri.
- Komparasi: Slow reader mempan remedial biasa & IQ bervariasi; Disleksia genetik seumur hidup butuh multisensori fonik & IQ normal/superior.
- Golden Window: Intervensi sebelum usia 9 tahun memaksimalkan plastisitas otak.

============================================================
VIDEO 3: BEYOND READING (BUKAN HANYA SOAL MEMBACA)
- Analogi Gunung Es Rio: Permukaan hanya tampak nilai buruk & tulisan berantakan; di bawah permukaan tersimpan beban kognitif ekstrem, disfungsi eksekutif, memori kerja bocor, kelelahan fisik, dan luka batin harga diri.
- Beban Kognitif: Anak tipikal membaca otomatis di VWFA (otak belakang); anak disleksia membaca manual di otak depan, diibaratkan "berlari maraton sambil bernapas lewat sedotan sempit".
- Orkestra Menulis & Disgrafia: Menulis melibatkan 6 instrumen simultan (Ide, Sintaksis, Kosakata, Ejaan, Motorik Halus, Spasial Garis).
- 3 Pilar Fungsi Eksekutif: Memori Kerja (ember bocor), Fleksibilitas Kognitif (navigasi kaku), Kendali Inhibisi (rem otak aus).
- The Failure Loop (6 Langkah): Tantangan muncul -> Usaha keras hasil rendah -> Kritik lingkungan -> Frustrasi & malu -> Menghindar -> Kehancuran harga diri.
- Mutasi Monolog Batin: Dari "Saya kesulitan membaca" bermutasi menjadi "Saya memang bodoh".
- 3 Kebutuhan Emosional: Merasa Aman, Diterima, dan Dihargai.
- 6 Kekuatan Tersembunyi: Penalaran spasial 3D, pemikiran gambaran besar, kreativitas seni, empati tinggi, pemecahan masalah non-linear, dan resiliensi.

============================================================
VIDEO 4: KEKHAWATIRAN KE AKSI NYATA (DETEKSI & INTERVENSI DINI)
- Bahaya Menunggu ("Wait and See"): Memicu 4 tangga kehancuran Rio (teman lancar -> tugas menumpuk -> menghindar/sakit perut -> tidak percaya diri/hancur).
- Deteksi Dini adalah Kesadaran: Proaktif memberi perhatian ekstra sejak TK tanpa buru-buru melabeli medis.
- 6 Tanda Prasekolah (3-5 thn): Sulit rima bunyi, nama benda nyangkut (lemari dingin), cerita melompat, kewalahan instruksi bertingkat, sering lupa, koordinasi fisik tersandung.
- 5 Red Flags: Menetap, kesenjangan makin lebar, multi-area, terdampak emosional, ada kesulitan penyerta (ADHD/matematika).
- Intervensi Tanpa Menunggu Diagnosis: Terapkan CHUNKING (memecah instruksi borongan menjadi langkah mini satu per satu agar memori kerja tidak nge-hang), visual checklist & waktu tambahan.
- Meja 3 Kaki: Kolaborasi simetris Orang Tua (rumah), Guru (kelas), Profesional (klinis).
- Ubah Kata Frustrasi Toksik menjadi Bahasa Kemitraan: "Yuk kita cari cara lain yang lebih gampang bareng-bareng!".
- Beri panggung non-akademik (seni, olahraga, musik, mekanik) 1-2 jam sehari.
- Siklus 5 Aksi Nyata Berkelanjutan: Asesmen -> Profil -> Target Mendesak -> Intervensi -> Monitoring.

============================================================
VIDEO 5: RENCANA AKSI NYATA (AKOMODASI & STRATEGI TERAPAN)
- Menyusun IEP (Individualized Education Program): Target terukur (SMART Goals), daftar akomodasi resmi, pembagian peran guru-terapis, evaluasi berkala tiap semester.
- 6 Akomodasi Kelas untuk Guru:
  1. Ujian lisan (oral test) & pilihan ganda berjarak spasi longgar.
  2. Tambahan waktu 25-50% saat ujian tertulis.
  3. Bebaskan dari menyalin papan tulis (berikan printout materi atau catatan teman).
  4. Jangan tunjuk membaca nyaring mendadak di depan kelas.
  5. Pemanfaatan teknologi bantu (Text-to-Speech & Speech-to-Text).
  6. Kertas berwarna pastel lembut (krem/kuning muda) & font ramah disleksia.
- Metode Multisensori VAKT (Orton-Gillingham):
  * Visual: Huruf warna vokal merah, konsonan biru, gambar ikonik.
  * Auditory: Ketukan ritme suku kata, bunyi fonem murni.
  * Kinesthetic: Sky-writing (menulis di udara dengan seluruh lengan), lompat matras huruf.
  * Tactile: Menulis di baki pasir, huruf amplas bertekstur, plastisin play-doh.
- 4 Strategi Rumah Orang Tua:
  1. Rumah sebagai suaka suci (sambut hangat tanpa interogasi nilai).
  2. Aturan 20 menit belajar terbagi (interval Pomodoro + jeda sensori).
  3. Membaca tandem (paired reading) tanpa memarahi kesalahan.
  4. Investasi panggung kekuatan non-akademik.`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // ignore
    }
  };

  return (
    <header id="main-header" className="border-b border-slate-200 bg-white/95 backdrop-blur-md sticky top-0 z-40 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          {/* Brand & Series Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black text-sm shadow-xs flex-shrink-0">
              EMT
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                  Edukasi Medika Teknologi
                </span>
                <span className="text-xs text-slate-500 font-medium hidden sm:inline-block">
                  Kompilasi Master Seri Disleksia (Video 2 – 5)
                </span>
              </div>
              <h1 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                Membongkar Disleksia: Dari Pemahaman Medis ke Aksi Nyata
              </h1>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 self-start md:self-auto flex-wrap">
            <button
              id="copy-all-btn"
              onClick={handleCopyFullCompilation}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-lg transition-colors border border-slate-200 cursor-pointer"
              title="Salin Rangkuman Komprehensif Video 2, 3, 4, 5"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-medium">Kompilasi Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-600" />
                  <span>Salin Kompilasi Lengkap</span>
                </>
              )}
            </button>

            <a
              href="#master-summary"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 rounded-lg border border-teal-200 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Ikhtisar Seri</span>
            </a>
          </div>
        </div>

        {/* Sequential Module Tabs */}
        <nav aria-label="Navigasi Modul Video" className="mt-3 pt-3 border-t border-slate-150 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <button
            id="tab-all-modules"
            onClick={() => onSelectModule('all')}
            className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeModule === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Semua Modul Berurutan (Full)
          </button>

          {VIDEO_MODULES.map((mod) => (
            <button
              key={mod.id}
              id={`tab-${mod.id}`}
              onClick={() => onSelectModule(mod.id)}
              className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                activeModule === mod.id
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold ${
                activeModule === mod.id ? 'bg-teal-900 text-white' : 'bg-slate-200 text-slate-700'
              }`}>
                {mod.videoNumber}
              </span>
              <span>Vid {mod.videoNumber}: {mod.badge}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};
