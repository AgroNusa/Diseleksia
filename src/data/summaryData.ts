import { AgeStage, ClinicalClassification } from '../types';

export const CORE_QUOTES_MEMAHAMI = {
  mainQuestion: "Bertanya: Apa yang membuat membaca begitu sulit baginya?",
  mislabelWarning: "Disleksia terjadi seumur hidup. Anak tidak malas dan tidak bodoh; otaknya memproses informasi secara berbeda.",
  source: "Edukasi Medika Teknologi - Memahami Disleksia (Berdasarkan DSM-5 & Asosiasi Disleksia Indonesia)"
};

export const SUMMARY_BULLETS_MEMAHAMI = [
  "Bukan Malas atau Bodoh: Anak disleksia memiliki kecerdasan normal (bahkan tinggi), namun memiliki profil neurologis genetik bawaan yang berbeda dalam memproses bahasa dan fungsi eksekutif.",
  "Dua Ranah Utama Terganggu: Berdampak pada kemampuan berbahasa (lisan, tulisan, sosial) serta fungsi eksekutif (konsentrasi, memori kerja, perencanaan tugas).",
  "Klasifikasi Medis DSM-5: Termasuk dalam payung Gangguan Belajar Spesifik, yang terbagi atas Disleksia (membaca), Disgrafia (menulis), dan Diskalkulia (matematika/hitung).",
  "Perjalanan Gejala Dinamis Sesuai Usia: Gejala berkembang dari bicara pelat dan motorik canggung di prasekolah (3-5 thn), stres akademik dan sindrom Tic di usia 7-9 thn, gangguan perilaku ODD di pra-remaja (10-12 thn), hingga risiko depresi berat dan ansietas pada remaja (>12 thn).",
  "Bukan Sekadar Lambat Membaca: Lambat membaca biasa bisa karena rabun mata, gangguan pendengaran, atau metode ajar; sedangkan disleksia adalah kondisi genetik neurologis seumur hidup.",
  "Golden Window & Talent Bloom: Usia 3-5 tahun adalah jendela emas deteksi dini. Intervensi terarah mencegah trauma akademik dan memicu 'Talent Bloom' (mekarnya bakat seni, spasial, dan kreativitas tinggi anak disleksia)."
];

export const CLINICAL_DSM5: ClinicalClassification[] = [
  {
    type: "Gangguan Membaca",
    condition: "Disleksia",
    description: "Kesulitan mengenali kata secara akurat dan lancar, gangguan decoding fonemik, dan mengeja.",
    signs: ["Mengeja tersendat-sendat", "Huruf tertukar (b/d, p/q, was/saw)", "Sulit memahami isi kalimat panjang"]
  },
  {
    type: "Gangguan Menulis",
    condition: "Disgrafia",
    description: "Kesulitan dalam keterampilan motorik halus menulis, menyusun struktur kata, dan menuangkan ide ke tulisan.",
    signs: ["Bentuk tulisan tangan tidak beraturan", "Ukuran huruf naik-turun acak", "Cepat lelah saat memegang pensil"]
  },
  {
    type: "Gangguan Berhitung",
    condition: "Diskalkulia",
    description: "Kesulitan memahami konsep angka, simbol matematika, perhitungan aritmatika dasar, dan penalaran logika kuantitatif.",
    signs: ["Bingung simbol +/-/x", "Sulit menghitung uang kembalian", "Sulit memahami urutan waktu dan tabel"]
  }
];

export const AGE_STAGES_DATA: AgeStage[] = [
  {
    ageGroup: "3 - 5 Tahun",
    stageTitle: "Fase Prasekolah: Sinyal Awal Berbahasa & Motorik",
    badgeColor: "emerald",
    summary: "Gejala tampak jelas pada bahasa ekspresif yang belum lancar serta koordinasi gerak dan fungsi eksekutif dasar.",
    signs: [
      "Artikulasi terganggu / bicara pelat (contoh di video: 'inum cucu' alih-alih 'minum susu').",
      "Sering lupa nama benda dan menggantinya dengan kata 'anu' atau 'itu'.",
      "Alur cerita melompat-lompat / acak saat menceritakan pengalaman.",
      "Kesadaran fonemik rendah (sulit membedakan rima dan pecahan bunyi kata).",
      "Fungsi Eksekutif: Kerja lambat, sering lupa instruksi, kaku terhadap perubahan mendadak.",
      "Motorik Kasar & Halus: Sering tersandung kaki sendiri, mudah jatuh, menumpahkan minuman."
    ],
    psychologicalImpact: "Sering dicap teledor, ceroboh, atau keras kepala oleh lingkungan yang belum memahami kondisi sarafnya.",
    keyRiskOrAlert: "🌟 Golden Window: Masa paling ideal untuk deteksi dan intervensi dini sebelum masuk jenjang sekolah formal."
  },
  {
    ageGroup: "7 - 9 Tahun",
    stageTitle: "Fase Awal SD: Krisis Akademik & Tekanan Sosial",
    badgeColor: "amber",
    summary: "Tuntutan kurikulum baca-tulis melonjak drastis, membuat jurang perbedaan kemampuan dengan teman sebaya terlihat mencolok.",
    signs: [
      "Sangat lambat dalam menyelesaikan tugas membaca dan menulis di kelas.",
      "Tugas sekolah selalu selesai paling akhir dan membutuhkan energi berlipat ganda.",
      "Mulai menarik diri dari interaksi kelas karena merasa tertinggal.",
      "Kerap menjadi sasaran perundungan (bullying) dan dicap 'pemalas'."
    ],
    psychologicalImpact: "Rasa cemas (ansietas) dan minder mulai menggerogoti harga diri anak.",
    keyRiskOrAlert: "⚠️ Munculnya Sindrom Tic: Akibat tekanan emosional dan stres akademik yang ekstrem, muncul gerakan atau suara tiba-tiba, cepat, dan berulang di luar kendali fisik anak."
  },
  {
    ageGroup: "10 - 12 Tahun",
    stageTitle: "Fase Pra-Remaja: Runtuhnya Kepercayaan Diri & Masalah Perilaku",
    badgeColor: "orange",
    summary: "Akumulasi kegagalan akademik bertahun-tahun menyebabkan kehancuran rasa percaya diri, yang sering bermutasi menjadi pembangkangan.",
    signs: [
      "Kepercayaan diri anak hancur total karena merasa tidak berdaya membuktikan kompetensi dirinya.",
      "Pemberontakan terhadap instruksi orang tua dan guru.",
      "Mekanisme pertahanan diri yang keliru: bersikap agresif untuk menutupi rasa malu."
    ],
    psychologicalImpact: "Berkembang menjadi Conduct Disorder atau Oppositional Defiant Disorder (ODD) — anak aktif membantah dan melawan figur otoritas sebagai tameng pelindung diri.",
    keyRiskOrAlert: "Frustrasi akademik yang tidak tertangani kini berubah menjadi krisis perilaku dan kepribadian."
  },
  {
    ageGroup: "> 12 Tahun",
    stageTitle: "Fase Remaja: Krisis Kesehatan Mental Berat",
    badgeColor: "rose",
    summary: "Jika disleksia terus diabaikan tanpa intervensi, dampaknya meluas menjadi ancaman kesehatan mental yang sangat fatal.",
    signs: [
      "Ansietas parah yang kronis terhadap masa depan dan lingkungan sosial.",
      "Perubahan suasana hati ekstrem / gejala gangguan bipolar.",
      "Depresi klinis mendalam akibat perasaan terisolasi dan putus asa berkepanjangan."
    ],
    psychologicalImpact: "Tingginya risiko percobaan bunuh diri (suicide ideation).",
    keyRiskOrAlert: "🚨 Urusan Hidup & Mati: Studi klinis menunjukkan mengabaikan disleksia bukan masalah akademis sepele, melainkan menyangkut keselamatan jiwa anak."
  }
];

export const CHARACTERISTICS_DISLEKSIA = [
  {
    title: "Kecerdasan Normal (Bahkan Unggul)",
    desc: "Bukan tuna grahita atau bodoh. Potensi IQ berada pada tingkat normal hingga superior.",
    icon: "Brain"
  },
  {
    title: "Gangguan Ranah Berbahasa",
    desc: "Menyentuh 3 dimensi: bahasa lisan (artikulasi, kosa kata), tulisan (membaca, mengeja), dan bahasa sosial.",
    icon: "MessageSquare"
  },
  {
    title: "Masalah Fungsi Eksekutif",
    desc: "Kelemahan pada memori kerja (working memory), pemusatan perhatian, dan pengorganisasian tugas/waktu.",
    icon: "Sliders"
  },
  {
    title: "Komorbiditas yang Umum",
    desc: "Kerap hadir bersamaan dengan ADHD (gangguan pemusatan perhatian) atau Dispraksia (koordinasi motorik canggung).",
    icon: "Layers"
  }
];

export const DIFFERENCE_EXPLANATION = {
  slowReader: {
    title: "Anak Lambat Membaca Biasa",
    causes: [
      "Masalah refraksi mata (mata minus/silinder yang belum terdeteksi kacamata).",
      "Masalah pendengaran fisik sementara.",
      "Metode pengajaran membaca di sekolah atau rumah yang kurang sesuai.",
      "Dapat diperbaiki dengan koreksi kacamata atau perubahan metode belajar sederhana."
    ]
  },
  dyslexia: {
    title: "Disleksia (Kondisi Neurologis)",
    causes: [
      "Kondisi genetik neurobiologis bawaan lahir yang menetap seumur hidup.",
      "Otak memproses kode fonemik dan grafemik melalui sirkuit yang berbeda.",
      "Bukan penyakit yang disembuhkan dengan obat minum, melainkan keunikan kabel saraf.",
      "Membutuhkan terapi fonologi terstruktur, multisensori, dan akomodasi suportif."
    ]
  }
};
