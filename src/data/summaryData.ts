import { SectionItem, PhonologicalSkill, ReadingStep, ComparisonRow } from '../types';

export const CORE_QUOTE = {
  text: "Bukan anak tidak berusaha. Ia berusaha keras untuk hal yang bagi orang lain sudah otomatis.",
  source: "Edukasi Medika Teknologi - Presentasi Otak Anak Disleksia"
};

export const SECTIONS: SectionItem[] = [
  {
    id: "kisah-rio",
    number: 1,
    title: "Kisah Rio Membaca",
    subtitle: "Realitas Keseharian & Mengikis Stigma",
    badge: "Realitas & Empati",
    explanation: "Rio adalah anak yang pintar, ingin belajar, dan bukan lambat berpikir. Namun ketika membaca, ia membutuhkan usaha mental yang jauh lebih besar dan cepat lelah dibandingkan teman sekelasnya.",
    analogyOrQuote: "Masalahnya bukan karena kurang usaha atau malas. Ada proses di dalam otak yang berjalan dengan cara berbeda.",
    keyPoints: [
      "Disleksia tidak berkaitan dengan tingkat kecerdasan (IQ) atau kemalasan.",
      "Anak disleksia tampak lambat membaca di luar, tetapi di dalam otaknya sedang terjadi kerja keras yang luar biasa.",
      "Membaca bagi mereka bukan proses pasif, melainkan perjuangan kognitif berenergi tinggi."
    ]
  },
  {
    id: "kesadaran-fonologis",
    number: 2,
    title: "Kesadaran Fonologis",
    subtitle: "Fondasi Utama: Membaca Dimulai dari Telinga",
    badge: "Fondasi Bunyi",
    explanation: "Membaca sebenarnya tidak berawal dari mata, melainkan dari telinga. Sebelum mengenali huruf tertulis di kertas, anak harus memiliki kesadaran bahwa kata-kata lisan tersusun dari pecahan bunyi bahasa (fonem).",
    analogyOrQuote: "Kesadaran fonologis adalah fondasi mutlak yang harus dikuasai sebelum simbol visual huruf dapat dimaknai.",
    keyPoints: [
      "Fondasi membaca adalah mengenali, mendengar, dan memanipulasi bunyi bahasa lisan.",
      "Anak perlu sadar bahwa kata utuh (seperti 'bola') merupakan gabungan bunyi terpisah.",
      "Kegagalan menguasai pemetaan bunyi ini menjadi akar kesulitan membaca pada anak disleksia."
    ]
  },
  {
    id: "bunyi-menuju-makna",
    number: 3,
    title: "Bunyi Menuju Makna",
    subtitle: "Jembatan 8 Tahap Membaca",
    badge: "Proses Otak",
    explanation: "Membaca kata sederhana seperti 'M-A-T-A' bukan aksi tunggal, melainkan konstruksi 'jembatan' rumit melalui 8 tahapan beruntun di dalam sirkuit saraf otak.",
    analogyOrQuote: "Sebuah senam otak berenergi tinggi yang harus dilompati otak langkah demi langkah.",
    keyPoints: [
      "Melibatkan transisi bertahap dari input auditori, visual, sintesis fonetik, hingga semantik.",
      "Bagi pembaca tipikal, kedelapan tahap ini terlompati dalam hitungan milidetik secara bawah sadar.",
      "Bagi anak disleksia, setiap anak tangga harus dipanjat secara manual dan melelahkan."
    ]
  },
  {
    id: "otak-disleksia",
    number: 4,
    title: "Di Dalam Otak Disleksia",
    subtitle: "Dua Wilayah Otak Kiri & Perbedaan Jalur Saraf",
    badge: "Neurosains",
    explanation: "Pembaca mahir mengandalkan dua area otak kiri utama: Area Temporoparietal (merakit tulisan jadi bunyi seperti kepingan puzzle) dan Area Oksipitotemporal (pusat otomatisasi yang menyimpan & mengenali kata seketika tanpa mengeja).",
    analogyOrQuote: "Anak Tipikal: Jalan tol langsung melesat dari visual ke makna. Anak Disleksia: Jalur berliku, tanpa jalan pintas otomatis.",
    keyPoints: [
      "Area Temporoparietal: Berfungsi merakit huruf menjadi bunyi ucapan.",
      "Area Oksipitotemporal: Berfungsi sebagai 'kotak kata visual' untuk pengenalan kata instan.",
      "Pada anak disleksia, area otomatisasi otak kiri ini memiliki ritme dan konektivitas berbeda, memaksa otak mengambil rute alternatif yang jauh lebih panjang."
    ]
  },
  {
    id: "mengapa-melelahkan",
    number: 5,
    title: "Mengapa Sangat Melelahkan?",
    subtitle: "Beban Kognitif Ekstrem & Pengurasan Baterai Mental",
    badge: "Beban Kognitif",
    explanation: "Bayangkan membaca buku tebal dalam bahasa asing yang tata bahasanya belum Anda kuasai. Anda harus berhenti di tiap kata untuk decoding manual. Itulah yang dialami anak disleksia setiap membuka buku.",
    analogyOrQuote: "Baterai energi mental habis terkuras untuk decoding simbol ke bunyi, menyisakan sedikit sekali daya untuk memahami arti cerita.",
    keyPoints: [
      "Pembaca mahir: 0% energi terbuang untuk decoding, 100% energi fokus memahami konteks bacaan.",
      "Anak disleksia: 90%+ energi terkuras hanya untuk mengeja dan merangkai bunyi huruf.",
      "Akibatnya timbul kelelahan mental akut (cognitive overload), bukan karena malas atau kurang konsentrasi."
    ]
  },
  {
    id: "neuroplastisitas",
    number: 6,
    title: "Neuroplastisitas",
    subtitle: "Otak Bisa Beradaptasi & Membentuk Jalur Baru",
    badge: "Harapan & Solusi",
    explanation: "Disleksia memang bukan penyakit medis yang bisa sembuh begitu saja. Namun berkat Neuroplastisitas, otak memiliki kapasitas luar biasa untuk merestrukturisasi dan membangun jalur saraf baru jika diberi stimulasi dan pengajaran terstruktur yang tepat.",
    analogyOrQuote: "Otak itu plastis—bisa dipahat dan dilatih ulang dengan metode fonik yang sistematis.",
    keyPoints: [
      "Kapasitas biologis otak untuk beradaptasi dan membentuk koneksi saraf baru.",
      "Metode fonologis yang terstruktur, eksplisit, dan berulang terbukti ilmiah mengaktifkan kembali area baca otak.",
      "Kunci utamanya: Berhenti menghakimi, gantikan dengan empati, kesabaran, dan strategi belajar yang ramah otak."
    ]
  }
];

export const PHONOLOGICAL_SKILLS: PhonologicalSkill[] = [
  {
    name: "Rima (Rhyme)",
    description: "Menyadari kesamaan bunyi akhir antar kata.",
    example: "bola ↔ roda, tali ↔ beli",
    tag: "Tingkat Dasar"
  },
  {
    name: "Suku Kata (Syllables)",
    description: "Memecah kata menjadi ketukan suku kata pembentuknya.",
    example: "se - pa - tu (3 suku kata)",
    tag: "Segmentasi Kata"
  },
  {
    name: "Awal & Akhir (Onset-Rime)",
    description: "Mengenali letak bunyi fonem di posisi paling depan dan belakang kata.",
    example: "Kata 'mata' diawali bunyi /m/ dan diakhiri /a/",
    tag: "Pengenalan Posisi"
  },
  {
    name: "Blending (Penggabungan)",
    description: "Menyatukan potongan-potongan fonem tunggal menjadi satu kata utuh.",
    example: "/m/ + /a/ + /t/ + /a/ ➔ 'mata'",
    tag: "Sintesis Bunyi"
  },
  {
    name: "Segmenting (Penguraian)",
    description: "Mengurai kata utuh kembali menjadi deretan bunyi fonem dasar.",
    example: "'buku' ➔ /b/ /u/ /k/ /u/",
    tag: "Analisis Bunyi"
  },
  {
    name: "Manipulasi Fonem",
    description: "Kemampuan tertinggi: menambah, menghapus, atau menukar bunyi dalam kata.",
    example: "Kata 'sapi' tanpa bunyi /s/ menjadi ➔ 'api'",
    tag: "Tingkat Mahir"
  }
];

export const READING_STEPS: ReadingStep[] = [
  { step: 1, title: "Mendengar", detail: "Menerima gelombang suara melalui sistem pendengaran auditori.", iconName: "Ear" },
  { step: 2, title: "Menyadari Bunyi", detail: "Otak menyaring dan membedakan fonem-fonem spesifik bahasa lisan.", iconName: "AudioWaveform" },
  { step: 3, title: "Melihat Simbol", detail: "Mata menangkap bentuk grafem/huruf tertulis di atas kertas.", iconName: "Eye" },
  { step: 4, title: "Menggabungkan", detail: "Menjodohkan simbol visual huruf dengan representasi bunyinya.", iconName: "Network" },
  { step: 5, title: "Decoding", detail: "Mengurai dan merakit kode huruf per huruf secara berurutan.", iconName: "Cpu" },
  { step: 6, title: "Mengenali Kata", detail: "Menemukan kecocokan bentuk kata utuh dalam kamus mental otak.", iconName: "BookOpen" },
  { step: 7, title: "Membaca Lancar", detail: "Proses fonologis dan visual berjalan halus tanpa jeda tersendat.", iconName: "Zap" },
  { step: 8, title: "Memahami Makna", detail: "Puncak tujuan membaca: menangkap pesan, konteks, dan inti ide bacaan.", iconName: "Lightbulb" }
];

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    activity: "Olah Bunyi Bahasa",
    typical: "Mudah & Alami",
    dyslexia: "Sulit & Butuh Latihan Khusus"
  },
  {
    activity: "Korelasi Huruf-Bunyi",
    typical: "Otomatis & Refleks",
    dyslexia: "Manual & Perlu Latihan Berulang"
  },
  {
    activity: "Membaca Kata Baru",
    typical: "Lancar Menerka & Mengurai",
    dyslexia: "Lambat & Harus Dieja Bertahap"
  },
  {
    activity: "Membaca Kalimat Panjang",
    typical: "Lancar (Mode Auto-Pilot)",
    dyslexia: "Sangat Melelahkan (Cognitive Drain)"
  }
];

export const SUMMARY_BULLETS = [
  "Bukan Masalah Kecerdasan: Anak disleksia pintar dan mau belajar; kesulitan membaca berakar pada perbedaan neurologis pemrosesan bahasa di otak, bukan karena malas.",
  "Membaca Dimulai dari Telinga: Fondasi terpenting membaca adalah Kesadaran Fonologis (kemampuan mengenali dan memanipulasi bunyi lisan: rima, suku kata, blending, segmenting).",
  "Jembatan 8 Tahap yang Rumit: Membaca kata sederhana ('mata') membutuhkan 8 tahapan saraf beruntun (Mendengar → Sadar Bunyi → Lihat Simbol → Gabungkan → Decoding → Kenali Kata → Lancar → Makna).",
  "Perbedaan Otak Kiri: Area temporoparietal (perakit bunyi) dan oksipitotemporal (otomatisasi kata) pada anak disleksia tidak otomatis, sehingga otak harus menempuh jalur manual yang panjang.",
  "Beban Kognitif & Pengurasan Energi: Baterai mental anak terkuras habis hanya untuk mengeja simbol huruf ke bunyi, menyisakan sedikit energi untuk menangkap arti/isi bacaan.",
  "Harapan Lewat Neuroplastisitas: Otak manusia bersifat plastis. Dengan pengajaran fonik yang terstruktur, eksplisit, dan penuh empati, jalur saraf baru dapat dipahat kembali."
];
