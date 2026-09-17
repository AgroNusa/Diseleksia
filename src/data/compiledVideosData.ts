import {
  VideoModuleMeta,
  AgeProgressionStage,
  DyslexiaTriadItem,
  SlowReaderComparison,
  ExecutiveFunctionPillar,
  WritingOrchestraInstrument,
  FailureLoopStep,
  HiddenStrength,
  RioSpiralStep,
  PreschoolSign,
  RedFlag,
  ObservationRoleItem,
  ActionCycleStep,
  IEPPrinciple,
  ClassroomAccommodation,
  VAKTMensensoryMethod,
  HomeStrategy
} from '../types';

export const VIDEO_MODULES: VideoModuleMeta[] = [
  {
    id: 'video2',
    videoNumber: 2,
    title: 'Memahami Disleksia: Bukan Sekadar Sulit Membaca',
    subtitle: 'Definisi Klinis ADI & DSM-5, Triad Gangguan, Spektrum Usia, Sindrom TIC/ODD & Jendela Emas',
    themeColor: 'blue',
    badge: 'Fondasi Medis & Gejala',
    summary: 'Membongkar miskonsepsi bahwa disleksia hanyalah huruf tertukar; membedah dasar neurologis genetik, triad disgrafia & diskalkulia, serta eskalasi gejala psikologis dari prasekolah hingga depresi remaja jika tidak tertangani.'
  },
  {
    id: 'video3',
    videoNumber: 3,
    title: 'Beyond Reading: Bukan Hanya Soal Membaca',
    subtitle: 'Analogi Gunung Es Rio, Beban Kognitif Maraton Sedotan, Orkestra Menulis & Fungsi Eksekutif',
    themeColor: 'indigo',
    badge: 'Beban Kognitif & Mental',
    summary: 'Melihat apa yang tersembunyi di bawah permukaan: kelelahan ekstrem otak membaca manual, kekacauan 6 instrumen menulis, kebocoran memori kerja fungsi eksekutif, dan siklus kegagalan yang merusak harga diri anak.'
  },
  {
    id: 'video4',
    videoNumber: 4,
    title: 'Kekhawatiran ke Aksi Nyata: Deteksi & Intervensi Dini',
    subtitle: 'Bahaya Sikap Menunggu, 6 Tanda Prasekolah, 5 Red Flags & Kolaborasi Sistem Meja 3 Kaki',
    themeColor: 'teal',
    badge: 'Deteksi Dini & Kolaborasi',
    summary: 'Menghindari jebakan wait and see yang menjerumuskan anak ke 4 tangga keputusasaan; mengenali tanda dini prasekolah tanpa memberi label medis menyeramkan, dan memulai intervensi chunking tanpa menunggu diagnosis formal.'
  },
  {
    id: 'video5',
    videoNumber: 5,
    title: 'Rencana Aksi Nyata: Strategi & Akomodasi Terapan',
    subtitle: 'Menyusun IEP, Akomodasi Kelas Ramah Otak, Metode Multisensori VAKT & Suaka di Rumah',
    themeColor: 'emerald',
    badge: 'Implementasi & Praktik Nyata',
    summary: 'Menerjemahkan diagnosis menjadi aksi konkret besok pagi: penyusunan IEP terukur, adaptasi ujian & tugas di kelas, metode multisensori VAKT (Orton-Gillingham), dan menjadikan rumah sebagai tempat berlindung bebas stres.'
  }
];

export const MASTER_QUOTES = [
  {
    quote: "Diagnosis should open the door to support, not close the conversation.",
    translation: "Diagnosis itu harusnya membuka pintu untuk berbagai dukungan, bukan malah menutup obrolan.",
    origin: "Prinsip Utama Asesmen Klinis Disleksia"
  },
  {
    quote: "Membaca bagi anak disleksia ibarat berlari maraton sambil bernapas melalui sedotan sempit.",
    translation: "Beban kognitif luar biasa yang menghabiskan seluruh energi otak hanya untuk mendekode huruf.",
    origin: "Neurosains Beban Kognitif"
  },
  {
    quote: "Jauh lebih baik kita periksakan lebih awal daripada membiarkan jurang kesulitan keburu makin lebar dan dalam.",
    translation: "Aturan emas mendeteksi dini sebelum harga diri anak terlanjur hancur.",
    origin: "Prinsip Deteksi Dini"
  },
  {
    quote: "Butuh waktu belajar lebih lama itu bukan berarti anak harus menderita lebih lama.",
    translation: "Hak anak disleksia untuk mendapatkan akomodasi waktu dan ruang belajar yang bermartabat.",
    origin: "Etika Pedagogi Inklusif"
  }
];

// ==========================================
// VIDEO 2: MEMAHAMI DISLEKSIA
// ==========================================
export const DYSLEXIA_TRIAD: DyslexiaTriadItem[] = [
  {
    id: 'dyslexia',
    name: 'Disleksia',
    latinName: 'Specific Reading Disorder',
    definition: 'Gangguan neurobiologis genetik yang memengaruhi akurasi dan kelancaran pengenalan kata, pengodean fonem (decoding), dan kemampuan mengeja secara tepat.',
    manifestations: [
      'Kesulitan memetakan huruf ke bunyi suaranya (fonem-grafem).',
      'Membaca tersendat-sendat dengan usaha kognitif sangat tinggi.',
      'Sering menebak kata berdasarkan huruf depan atau konteks gambar.',
      'Akurasi mengeja rendah meski kata sudah dihafal berulang kali.'
    ],
    color: 'blue'
  },
  {
    id: 'dysgraphia',
    name: 'Disgrafia',
    latinName: 'Disorder of Written Expression',
    definition: 'Kesulitan neurologis dalam keterampilan motorik halus menulis tangan, mengatur ruang spasial pada kertas, serta mengorganisir gagasan mental ke dalam sintaksis tulisan.',
    manifestations: [
      'Tulisan tangan sangat tidak rapi, ukuran huruf berubah-ubah secara drastis.',
      'Pegang pensil kaku dan terlalu menekan hingga tangan cepat pegal/kram.',
      'Jarak antar kata tidak konsisten, kerap melompati garis buku.',
      'Mampu menceritakan ide brilian secara lisan, namun mendadak macet saat harus menulis.'
    ],
    color: 'indigo'
  },
  {
    id: 'dyscalculia',
    name: 'Diskalkulia',
    latinName: 'Mathematics Learning Disorder',
    definition: 'Gangguan neurobiologis dalam memahami konsep angka, kuantitas kuantitatif, operasi matematika dasar (tambah, kurang, kali, bagi), serta penalaran simbolik angka.',
    manifestations: [
      'Kesulitan mengaitkan simbol angka (misal "5") dengan kuantitas riil 5 benda.',
      'Masih mengandalkan hitung jari untuk penjumlahan sederhana di usia lanjut.',
      'Bingung membaca jam analog, mengestimasi waktu, atau menghitung uang kembalian.',
      'Sulit mengingat urutan fakta matematika dan rumus aritmatika berurutan.'
    ],
    color: 'amber'
  }
];

export const AGE_PROGRESSION_STAGES: AgeProgressionStage[] = [
  {
    ageGroup: 'Prasekolah (3–5 Tahun)',
    title: 'Fase Tanda Awal Bunyi & Bahasa',
    coreSymptoms: [
      'Terlambat bicara dibanding anak sebayanya.',
      'Sulit membedakan atau membuat rima kata sederhana (misal kucing-kambing).',
      'Kesulitan mengingat nama warna, bentuk, atau huruf dalam namanya sendiri.',
      'Sering tertukar urutan suku kata saat mengucapkan kata panjang.'
    ],
    psychologicalRisk: 'Anak merasa bingung saat diajak bernyanyi rima, mulai tampak menarik diri dari permainan tebak kata di TK.',
    dangerFlag: 'Fase Deteksi Emas Pertama'
  },
  {
    ageGroup: 'Sekolah Dini (7–9 Tahun / Kelas 1–3 SD)',
    title: 'Fase Benturan Akademik & Sindrom TIC',
    coreSymptoms: [
      'Sangat tertinggal dalam kelancaran membaca dibanding teman sekelas.',
      'Huruf cermin terbalik (b-d, p-q, u-n) menetap lama melampaui usia wajar.',
      'Membaca terbata-bata, memotong kata, atau menambahkan kata imajiner.',
      'Menulis sangat lambat hingga catatan di papan tulis selalu tidak selesai.'
    ],
    psychologicalRisk: 'Mulai muncul gejala psikosomatis (mual, sakit kepala sebelum berangkat sekolah) dan SINDROM TIC (kedipan mata involunter, deheman, kedutan wajah karena tingkat stres kronis di kelas).',
    dangerFlag: 'Risiko Stres Berat & Sindrom TIC'
  },
  {
    ageGroup: 'Usia Menengah (10–12 Tahun / Kelas 4–6 SD)',
    title: 'Fase Mekanisme Pertahanan & Risiko ODD',
    coreSymptoms: [
      'Kesenjangan akademik semakin menganga tajam seiring materi makin konseptual.',
      'Pemahaman membaca anjlok karena seluruh energi habis hanya untuk membaca teks.',
      'Menghindari tugas secara terang-terangan dan enggan membaca di depan kelas.'
    ],
    psychologicalRisk: 'Mengembangkan ODD (Oppositional Defiant Disorder) — perilaku membangkang, defensif, atau bertingkah nakal sebagai tameng agar tidak terlihat "bodoh" di mata teman sekelas.',
    dangerFlag: 'Risiko ODD & Perilaku Konfrontatif'
  },
  {
    ageGroup: 'Remaja (>12 Tahun / SMP–SMA)',
    title: 'Fase Krisis Identitas, Depresi & Keputusasaan',
    coreSymptoms: [
      'Kesulitan besar dengan beban bacaan tebal, makalah esai, dan manajemen ujian berwaktu ketat.',
      'Kecemasan ekstrem saat menghadapi ujian tulis (*test anxiety*).',
      'Kelelahan kognitif kronis (*burnout* akademik).'
    ],
    psychologicalRisk: 'Krisis percaya diri akut, depresi klinis mendalam, isolasi sosial, penolakan sekolah (*school refusal*), hingga risiko keputusasaan eksistensial dan ide bunuh diri jika terus dihakimi keluarga.',
    dangerFlag: 'Risiko Depresi & Putus Asa'
  }
];

export const SLOW_READER_VS_DYSLEXIA: SlowReaderComparison[] = [
  {
    aspect: 'Akar Penyebab (*Root Cause*)',
    slowReader: 'Kurang paparan stimulasi lingkungan, keterlambatan maturasi umum, atau metode ajar yang kurang variatif.',
    dyslexia: 'Kondisi kabel neurobiologis spesifik di otak dengan transmisi fonologis yang berbeda; memiliki faktor genetik kuat seumur hidup.'
  },
  {
    aspect: 'Respons terhadap Remedial Biasa',
    slowReader: 'Cepat membaik dan mengejar ketertinggalan dengan les tambahan atau latihan pengulangan standar.',
    dyslexia: 'TIDAK mempan dengan pengulangan biasa (drill konvensional); membutuhkan intervensi fonik terstruktur multisensori (VAKT).'
  },
  {
    aspect: 'Profil Inteligensi (IQ)',
    slowReader: 'Tingkat kecerdasan bervariasi dari bawah rata-rata hingga rata-rata; kemampuan membaca sejalan dengan fungsi kognitif umum.',
    dyslexia: 'Inteligensi normal bahkan seringkali superior/jenius; terdapat kesenjangan tajam antara kecerdasan berpikir dan kemampuan membaca.'
  },
  {
    aspect: 'Dampak Jangka Panjang',
    slowReader: 'Dapat sembuh tuntas dan membaca lancar seperti anak normal seiring pematangan usia.',
    dyslexia: 'Kondisi neurologis menetap seumur hidup, namun dapat terkompensasi penuh dengan akomodasi dan teknologi bantu.'
  }
];

// ==========================================
// VIDEO 3: BEYOND READING
// ==========================================
export const ICEBERG_LEVELS = {
  surface: {
    title: "Permukaan Air: Yang Terlihat oleh Mata Awam",
    items: [
      "Nilai ulangan membaca & dikte yang rendah.",
      "Tulisan tangan acak-acakan dan sulit dibaca.",
      "Sering tidak selesai menyalin catatan dari papan tulis.",
      "Kerap dicap guru sebagai 'anak malas', 'melamun', atau 'kurang fokus'."
    ]
  },
  deep: {
    title: "Di Bawah Permukaan: Realitas Otak yang Menanggung Beban Raksasa",
    items: [
      "Beban Kognitif Ekstrem: Otak bekerja 5x lebih keras mendekode tiap huruf secara manual.",
      "Disfungsi Memori Kerja: Ember memori jangka pendek bocor saat menerima informasi baru.",
      "Kelelahan Fisik & Mental: Rasa lelah setara lari maraton setelah 1 jam di sekolah.",
      "Gejolak Emosional: Rasa malu mendalam, frustrasi, panik saat disuruh membaca keras.",
      "Luka Batin Harga Diri: Menghakimi diri sendiri sebagai 'orang gagal dan tak berharga'."
    ]
  }
};

export const WRITING_ORCHESTRA: WritingOrchestraInstrument[] = [
  {
    number: 1,
    name: 'Ide & Konseptualisasi',
    function: 'Menghasilkan gagasan kreatif, imajinasi, dan pesan utama yang ingin disampaikan.',
    dysgraphiaGlitch: 'Idenya seringkali sangat brilian dan kaya, namun terkunci di kepala.'
  },
  {
    number: 2,
    name: 'Sintaksis & Tata Bahasa',
    function: 'Menyusun struktur kalimat, subjek-predikat-objek, dan tanda baca yang benar.',
    dysgraphiaGlitch: 'Anak kesulitan mengonversi kalimat lisan ke dalam formula kalimat baku.'
  },
  {
    number: 3,
    name: 'Pengambilan Kosakata (*Word Retrieval*)',
    function: 'Memilih kata spesifik yang pas dari kamus memori mental jangka panjang.',
    dysgraphiaGlitch: 'Kata terasa nyangkut di ujung lidah; anak memilih kata pendek demi menghindari kesalahan.'
  },
  {
    number: 4,
    name: 'Ejaan Fonologis (*Orthography*)',
    function: 'Mengingat urutan huruf visual dan kaidah pengejaan fonetik kata demi kata.',
    dysgraphiaGlitch: 'Setiap kata harus dieja dengan usaha berat; huruf tertukar atau melompat.'
  },
  {
    number: 5,
    name: 'Motorik Halus (*Fine Motor Control*)',
    function: 'Mengendalikan otot jari dan pergelangan tangan untuk menggoreskan pena secara halus.',
    dysgraphiaGlitch: 'Cengkeraman pensil kaku dan terlalu menekan; tangan gemetar dan sakit setelah beberapa kalimat.'
  },
  {
    number: 6,
    name: 'Spasial & Penataan Garis',
    function: 'Mengatur jarak antar huruf, spasi antar kata, dan konsistensi batas tepi kertas.',
    dysgraphiaGlitch: 'Tulisan naik turun menembus garis buku, huruf besar-kecil bercampur aduk tanpa spasi jelas.'
  }
];

export const EXECUTIVE_FUNCTION_PILLARS: ExecutiveFunctionPillar[] = [
  {
    title: 'Memori Kerja (Working Memory)',
    analogy: 'Ember Bocor yang Mudah Tumpah',
    description: 'Kapasitas otak untuk menahan informasi dalam hitungan detik sembari memprosesnya secara aktif.',
    classroomImpact: 'Saat anak berusaha mengeja kata ke-3, isi kata ke-1 sudah menguap dari kepalanya. Anak tampak pelupa dan lamban.'
  },
  {
    title: 'Fleksibilitas Kognitif',
    analogy: 'Sistem Navigasi yang Kaku',
    description: 'Kemampuan otak untuk beralih secara dinamis antara satu aturan pelajaran ke aturan lain.',
    classroomImpact: 'Bingung saat berganti dari jam pelajaran membaca ke jam matematika, sulit beradaptasi dengan perubahan jadwal mendadak.'
  },
  {
    title: 'Kendali Inhibisi (Inhibitory Control)',
    analogy: 'Rem Otak yang Aus',
    description: 'Kemampuan menyaring gangguan suara/visual di sekitar dan menahan dorongan bertindak impulsif.',
    classroomImpact: 'Mudah terdistraksi oleh suara helaan napas teman, pensil jatuh, atau burung di jendela; mudah dicap tidak sopan.'
  }
];

export const FAILURE_LOOP_STEPS: FailureLoopStep[] = [
  {
    step: 1,
    title: 'Tantangan Belajar Muncul',
    experience: 'Anak dihadapkan pada materi membaca atau menulis yang melampaui kapasitas kerja otaknya.',
    psychologicalToll: 'Mulai merasakan kebingungan dan beban di kepala.'
  },
  {
    step: 2,
    title: 'Usaha Maksimal Tapi Hasil Rendah',
    experience: 'Anak mengerahkan energi kognitif 100%, namun hasil evaluasi tetap di bawah standar kelas.',
    psychologicalToll: 'Rasa bingung bermutasi menjadi kecemasan: "Kenapa teman-temanku bisa begitu mudah?"'
  },
  {
    step: 3,
    title: 'Kritik & Tekanan Lingkungan',
    experience: 'Guru menegur di depan kelas, orang tua di rumah menunjukkan raut wajah kecewa dan marah.',
    psychologicalToll: 'Anak merasa tidak ada tempat aman; merasa menjadi sumber kekecewaan orang yang dicintainya.'
  },
  {
    step: 4,
    title: 'Frustrasi & Rasa Malu Mendalam',
    experience: 'Rasa malu ditertawakan teman saat terbata-bata membaca nyaring di depan kelas.',
    psychologicalToll: 'Monolog batin bermutasi: dari "Aku kesulitan membaca" menjadi "Aku memang bodoh".'
  },
  {
    step: 5,
    title: 'Perilaku Menghindar (Avoidance)',
    experience: 'Pura-pura sakit perut, izin ke toilet lama, membuat gaduh, atau menolak membuka buku.',
    psychologicalToll: 'Mekanisme pertahanan terakhir demi menyelamatkan sisa-sisa harga dirinya yang koyak.'
  },
  {
    step: 6,
    title: 'Kehancuran Harga Diri (Helplessness)',
    experience: 'Menyerah total, berhenti berusaha, dan menerima label bahwa dirinya cacat dan tidak bernilai.',
    psychologicalToll: 'Kondisi learned helplessness; risiko berkembang menjadi depresi klinis.'
  }
];

export const HIDDEN_STRENGTHS: HiddenStrength[] = [
  {
    name: 'Penalaran Spasial 3D (*Spatial Reasoning*)',
    tagline: 'Melihat Dunia dari Berbagai Sudut Ruang',
    description: 'Kemampuan luar biasa membayangkan bentuk objek 3 dimensi dalam pikiran, memutarbalikkan perspektif struktur secara intuitif.',
    realWorldField: 'Arsitektur, Desain Interior, Teknik Mesin, Kedokteran Bedah, Seni Patung'
  },
  {
    name: 'Pemikiran Gambaran Besar (*Big-Picture Thinking*)',
    tagline: 'Melihat Seluruh Hutan, Bukan Sekadar Sebatang Pohon',
    description: 'Kemampuan mengenali pola global, menghubungkan fakta-fakta yang tampaknya tidak berkaitan, dan merumuskan visi jangka panjang.',
    realWorldField: 'Kewirausahaan (Entrepreneurship), Manajemen Strategis, Kepemimpinan Inovasi'
  },
  {
    name: 'Kreativitas Non-Linear & Seni',
    tagline: 'Orisinalitas Tanpa Batas Kotak Konvensional',
    description: 'Karena jalur otaknya tidak linier, mereka menghasilkan ide-ide baru yang tak terduga, metafora unik, dan karya visual memukau.',
    realWorldField: 'Sinematografi, Musik, Penulisan Kreatif (Storytelling lisan), Desain Produk'
  },
  {
    name: 'Empati Tinggi & Kepekaan Emosional',
    tagline: 'Peka terhadap Perasaan Sesama Manusia',
    description: 'Pengalaman berjuang melawan kesulitan membuat mereka sangat peka terhadap penderitaan orang lain dan memiliki kecerdasan intrapersonal tajam.',
    realWorldField: 'Konseling, Psikologi, Diplomasi, Pekerjaan Sosial, Hubungan Masyarakat'
  },
  {
    name: 'Pemecahan Masalah Kompleks (*Complex Problem Solving*)',
    tagline: 'Ahli Solusi di Luar Buku Pedoman Standar',
    description: 'Terbiasa mencari jalan tikus dan alternatif sejak kecil, menjadikan mereka pemecah masalah tangguh saat aturan baku menemui jalan buntu.',
    realWorldField: 'Riset Penemuan, Forensik, Sains Eksperimental, Pengembangan AI'
  },
  {
    name: 'Resiliensi & Daya Juang Mental',
    tagline: 'Ketangguhan yang Ditempa Sejak Dini',
    description: 'Jika didukung lingkungan yang penuh kasih, mereka memiliki ketahanan mental baja yang tidak mudah runtuh saat menghadapi rintangan hidup.',
    realWorldField: 'Olahraga Profesional, Penjelajah, Pemimpin Bisnis Berisiko Tinggi'
  }
];

// ==========================================
// VIDEO 4: KEKHAWATIRAN KE AKSI NYATA
// ==========================================
export const RIO_SPIRAL_STEPS: RioSpiralStep[] = [
  {
    step: 1,
    title: "Teman Lancar Membaca",
    subtitle: "Kesenjangan Mulai Menganga",
    description: "Teman-teman sebaya melesat membaca buku cerita dengan lancar, sementara Rio masih tersengal-sengal mengenali bentuk huruf."
  },
  {
    step: 2,
    title: "Tugas Sekolah Menumpuk",
    subtitle: "Gunung Beban yang Mustahil Didaki",
    description: "Kurikulum bergerak cepat, lembar kerja membaca dan menulis menumpuk menjadi beban raksasa yang membuat Rio putus asa."
  },
  {
    step: 3,
    title: "Perilaku Menghindar (Avoidance)",
    subtitle: "Mekanisme Pertahanan Diri",
    description: "Sebagai tameng harga dirinya, Rio mulai pura-pura sakit perut setiap pagi atau mengamuk saat jam pelajaran bahasa dimulai."
  },
  {
    step: 4,
    title: "Tidak Percaya Diri & Hancur",
    subtitle: "Meyakini Dirinya Bodoh",
    description: "Kepercayaan diri Rio hancur lebur. Anak cerdas ini akhirnya meyakini vonis palsu: bahwa dirinya memang bodoh dan tak berharga."
  }
];

export const PRESCHOOL_SIGNS: PreschoolSign[] = [
  {
    id: "sound",
    title: "Sulit Rima & Bunyi Bahasa",
    example: "Tidak mampu membedakan rima kata sederhana seperti 'kucing' dan 'kambing' atau 'topi' dan 'kopi'.",
    iconType: "Volume2"
  },
  {
    id: "naming",
    title: "Nama Benda Nyangkut di Lidah",
    example: "Tahu persis bentuk dan fungsi benda, tetapi kata tersendat di lidah sehingga menyebut kulkas sebagai 'lemari dingin'.",
    iconType: "HelpCircle"
  },
  {
    id: "story",
    title: "Bercerita Melompat-Lompat",
    example: "Kesulitan menyusun alur cerita berurutan tentang kejadian hari ini di sekolah, alurnya acak tanpa benang merah runtut.",
    iconType: "MessageSquare"
  },
  {
    id: "instruction",
    title: "Kewalahan Instruksi Bertingkat",
    example: "Diberi 3 instruksi ('ambil sepatu, pakai di teras, tunggu di mobil'), anak hanya mengambil sepatu lalu bengong di ruang tamu.",
    iconType: "ListOrdered"
  },
  {
    id: "distraction",
    title: "Sering Lupa & Mudah Terdistraksi",
    example: "Fokus mudah buyar oleh suara kecil di sekitar dan kerap melupakan barang bawaan sederhana.",
    iconType: "Brain"
  },
  {
    id: "motor",
    title: "Kurang Koordinasi Fisik Kasar/Halus",
    example: "Tampak sering tersandung, tersenggol, atau menabrak ujung meja dibanding anak-anak sebayanya.",
    iconType: "Activity"
  }
];

export const RED_FLAGS: RedFlag[] = [
  {
    number: 1,
    title: "Kesulitan Bersifat Menetap",
    description: "Sudah diajarkan berulang-ulang dengan berbagai metode di rumah dan sekolah, namun hambatan tidak kunjung membaik.",
    dangerLevel: "Tinggi"
  },
  {
    number: 2,
    title: "Kesenjangan Makin Melebar",
    description: "Jarak kemampuan membaca/menulis anak dengan teman sebayanya semakin hari semakin jauh tertinggal.",
    dangerLevel: "Kritis"
  },
  {
    number: 3,
    title: "Menyebar ke Beberapa Area Sekaligus",
    description: "Masalah tidak hanya di membaca, tetapi juga merembet ke tulisan tangan yang berantakan dan artikulasi bicara berbelit-belit.",
    dangerLevel: "Kritis"
  },
  {
    number: 4,
    title: "Terdampak Secara Emosional",
    description: "Anak mulai frustrasi berat, menangis, tantrum, atau menunjukkan jeritan putus asa karena otaknya tak sanggup lagi.",
    dangerLevel: "Sangat Kritis"
  },
  {
    number: 5,
    title: "Ada Kesulitan Penyerta Lain",
    description: "Disertai rentang perhatian yang super pendek (ADHD) atau kesulitan ekstrem memahami konsep dasar kuantitatif/matematika.",
    dangerLevel: "Tinggi"
  }
];

export const THREE_LEGGED_TABLE: ObservationRoleItem[] = [
  {
    parentPoint: "Mengamati perilaku di rumah, saat bermain santai, dan konsistensi kesulitan membaca.",
    teacherPoint: "Mengamati dinamika interaksi sosial di kelas dan respons terhadap instruksi umum.",
    professionalPoint: "Melakukan evaluasi neurokognitif dan psikologis objektif menyeluruh."
  },
  {
    parentPoint: "Mencatat riwayat tumbuh kembang sejak prasekolah dan riwayat keluarga disleksia.",
    teacherPoint: "Menganalisis pola kesalahan spesifik saat membaca nyaring dan lembar tugas menulis.",
    professionalPoint: "Membedah profil kekuatan dan hambatan spesifik fungsi otak anak."
  },
  {
    parentPoint: "Menjaga rumah sebagai suaka cinta, rasa aman, dan penguat harga diri anak.",
    teacherPoint: "Menerapkan akomodasi ruang kelas (chunking, waktu tambahan, visual cue).",
    professionalPoint: "Menyusun peta jalan intervensi terstruktur dan panduan rekomendasi IEP."
  }
];

export const FIVE_ACTION_CYCLE: ActionCycleStep[] = [
  {
    step: 1,
    title: "Diagnosis & Assessment Objektif",
    description: "Pemeriksaan menyeluruh oleh profesional untuk memetakan cara kerja unik otak anak tanpa vonis menghakimi.",
    deliverable: "Laporan Asesmen Neurokognitif"
  },
  {
    step: 2,
    title: "Peta Profil Kekuatan & Kesulitan",
    description: "Menyusun dokumen profil yang merinci bakat non-akademik unggulan serta area spesifik hambatan fonologis/motorik.",
    deliverable: "Peta Profil Holistik Anak"
  },
  {
    step: 3,
    title: "Menentukan Target Mendesak (SMART)",
    description: "Memilih 2–3 area prioritas yang paling mendesak dibantu terlebih dahulu agar anak tidak kewalahan.",
    deliverable: "Target Capaian Pembelajaran Terukur"
  },
  {
    step: 4,
    title: "Eksekusi Intervensi & Akomodasi",
    description: "Pemberian instruksi bertahap (chunking), kartu visual, alat bantu fonik terstruktur, dan akomodasi ujian.",
    deliverable: "Penerapan Strategi Belajar Ramah Otak"
  },
  {
    step: 5,
    title: "Monitoring Perkembangan Berkala",
    description: "Pertemuan rutin evaluasi antara orang tua, guru, dan terapis setiap semester untuk memperbarui strategi.",
    deliverable: "Tinjauan Siklus Berkelanjutan"
  }
];

// ==========================================
// VIDEO 5: RENCANA AKSI NYATA (AKOMODASI & STRATEGI TERAPAN)
// ==========================================
export const IEP_PRINCIPLES: IEPPrinciple[] = [
  {
    step: 1,
    component: "Target Terukur (SMART Goals)",
    description: "Menetapkan target capaian yang spesifik, realistis, dan berbatas waktu, bukan target umum yang abstrak.",
    exampleInSchool: "Contoh: 'Dalam 8 minggu, anak mampu mengenali 20 kata fonik bersuku kata ganda dengan akurasi 85%' — bukan 'anak harus bisa lancar membaca'."
  },
  {
    step: 2,
    component: "Daftar Akomodasi Resmi",
    description: "Menyepakati penyesuaian cara penyampaian materi dan cara anak menunjukkan pemahamannya tanpa menurunkan standar kurikulum.",
    exampleInSchool: "Ujian lisan (*oral testing*), tambahan waktu 30-50%, dan teks dengan ukuran font 14pt berspasi ganda."
  },
  {
    step: 3,
    component: "Pembagian Peran Jelas Guru & Terapis",
    description: "Merinci siapa yang bertanggung jawab mengajarkan fonik multisensori, siapa yang mendampingi di kelas reguler.",
    exampleInSchool: "Guru pendamping membacakan soal ujian; guru kelas menyediakan lembar rangkuman visual sebelum kelas dimulai."
  },
  {
    step: 4,
    component: "Evaluasi Berkala Tiap Semester",
    description: "Meninjau keberhasilan strategi intervensi dan memperbarui target sesuai lonjakan perkembangan anak.",
    exampleInSchool: "Rapat koordinasi 30 menit setiap 3 bulan antara wali kelas, orang tua, dan psikolog anak."
  }
];

export const CLASSROOM_ACCOMMODATIONS: ClassroomAccommodation[] = [
  {
    category: "Format Ujian & Asesmen",
    icon: "FileCheck",
    title: "Ujian Lisan & Pilihan Ganda Ramah Spasial",
    problemSolved: "Menguji esensi pemahaman anak tanpa terganjal oleh hambatan fisik menulis lambat atau salah eja.",
    concreteStrategy: "Izinkan anak menjawab soal esai secara lisan (*oral examination*) atau gunakan rekaman suara audio. Pada lembar soal tulis, berikan jarak antar baris minimal 1.5 spasi dan hindari teks bertumpuk padat."
  },
  {
    category: "Waktu & Kecepatan Kerja",
    icon: "Clock",
    title: "Akomodasi Waktu Tambahan (*Time Extension*)",
    problemSolved: "Meredakan kepanikan mental akibat otak harus mendekode kata secara manual berulang-ulang.",
    concreteStrategy: "Berikan tambahan waktu 25% hingga 50% untuk ujian tertulis. Izinkan anak istirahat sejenak 2 menit di tengah ujian untuk meregangkan tangan dan mengatur napas."
  },
  {
    category: "Menyalin & Catatan Pelajaran",
    icon: "BookOpen",
    title: "Bebaskan dari Menyalin Papan Tulis",
    problemSolved: "Menyalin tulisan papan tulis menguras memori kerja dan koordinasi visual anak disleksia hingga tidak bisa menyerap materi.",
    concreteStrategy: "Berikan lembar cetak catatan guru, izinkan memotret papan tulis, atau tunjuk teman sebaya (*peer-buddy*) untuk berbagi salinan fotokopi catatan."
  },
  {
    category: "Membaca Nyaring di Kelas",
    icon: "VolumeX",
    title: "Jangan Paksa Membaca Nyaring Mendadak",
    problemSolved: "Membaca terbata-bata di depan seluruh kelas memicu trauma psikologis dan rasa malu yang melumpuhkan.",
    concreteStrategy: "Jangan pernah menunjuk anak disleksia secara mendadak. Jika ingin melibatkan mereka, berikan teks terlebih dahulu 1 hari sebelumnya agar anak sempat berlatih membaca dengan tenang."
  },
  {
    category: "Teknologi Bantu (*Assistive Tech*)",
    icon: "Laptop",
    title: "Pemanfaatan Text-to-Speech & Speech-to-Text",
    problemSolved: "Menembus kebuntuan membaca buku tebal dan mengekspresikan esai panjang.",
    concreteStrategy: "Gunakan perangkat lunak TTS (seperti ReadSpeaker, Speechify, Immersive Reader) untuk mendengarkan buku teks, dan aplikasi dikte suara untuk mengetik draft tugas."
  },
  {
    category: "Sensori & Visual Kertas",
    icon: "Eye",
    title: "Kertas Pastel Lembut & Font Khusus",
    problemSolved: "Kertas putih menyilaukan seringkali memicu distorsi visual (*visual stress*) pada anak disleksia.",
    concreteStrategy: "Gunakan kertas berlatar krem, kuning lembut, atau biru muda. Gunakan jenis huruf yang ramah disleksia dengan bobot bawah tegas (seperti Arial, Comic Sans, Trebuchet, atau OpenDyslexic)."
  }
];

export const VAKT_METHODS: VAKTMensensoryMethod[] = [
  {
    modality: "Visual (Melihat)",
    title: "Penglihatan & Kode Warna",
    sensesUsed: "Mata & Korteks Visual",
    classroomApplication: "Gunakan kartu flashcard dengan kode warna berbeda untuk vokal (merah) dan konsonan (biru). Tampilkan representasi gambar ikonik di samping kata.",
    homeApplication: "Menempelkan label bergambar dengan teks berwarna kontras di lemari, pintu, dan kotak mainan anak."
  },
  {
    modality: "Auditory (Mendengar)",
    title: "Pendengaran & Ketukan Ritme",
    sensesUsed: "Telinga & Korteks Auditori",
    classroomApplication: "Suarakan bunyi fonem murni secara jelas (misal /m/ bukan /em/). Ajak anak mengetuk meja atau bertepuk tangan untuk setiap suku kata yang diucapkan.",
    homeApplication: "Bermain tebak rima kata saat berkendara di mobil, menyanyikan lagu fonik berirama ritmis bersama orang tua."
  },
  {
    modality: "Kinesthetic (Gerak Tubuh)",
    title: "Gerakan Motorik Kasar & Tubuh",
    sensesUsed: "Otot Tubuh & Sistem Proprioseptif",
    classroomApplication: "Teknik 'Sky-Writing': Anak meluruskan tangan dan menuliskan bentuk huruf besar di udara menggunakan seluruh lengan sambil melafalkan suaranya.",
    homeApplication: "Melompat di atas matras huruf atau karpet abjad setiap kali menyebutkan bunyi fonem huruf target."
  },
  {
    modality: "Tactile (Sentuhan & Rabaan)",
    title: "Indra Peraba & Tekstur",
    sensesUsed: "Ujung Jari & Sistem Taktil",
    classroomApplication: "Menulis huruf di atas baki berisi pasir warna-warni, menjiplak huruf dari kertas amplas (*sandpaper letters*), atau meraba huruf dari beludru.",
    homeApplication: "Membentuk huruf dari plastisin (play-doh), busa sabun di dinding kamar mandi, atau tepung kue di atas nampan dapur."
  }
];

export const HOME_STRATEGIES: HomeStrategy[] = [
  {
    rule: "Prinsip 1: Rumah sebagai Suaka Suci",
    title: "Rumah Tempat Menemukan Rasa Aman, Bukan Ruang Sidang",
    doThis: "Sambut anak dengan pelukan hangat setelah pulang sekolah. Tanyakan perasaannya, beri cemilan, dan berikan waktu bersantai tanpa langsung menodong dengan buku PR.",
    avoidThis: "Menghujani anak dengan pertanyaan cemas: 'Tadi ulangan dapet berapa? Ada catatan guru lagi nggak?'"
  },
  {
    rule: "Prinsip 2: Aturan 20 Menit Belajar",
    title: "Belajar Terbagi dalam Interval Singkat & Jeda Sensori",
    doThis: "Bagi sesi belajar menjadi blok 15–20 menit terfokus, diselingi 5 menit istirahat bergerak (minum air, lompat tali, peregangan tangan).",
    avoidThis: "Memaksa anak duduk berjam-jam menyelesaikan tugas sekolah sampai menangis dan kelelahan mental."
  },
  {
    rule: "Prinsip 3: Membaca Tandem (Paired Reading)",
    title: "Membaca Bersama Tanpa Menghakimi Kesalahan",
    doThis: "Duduk berdampingan. Biarkan orang tua membaca kalimat dengan jari menunjuk teks; jika anak ingin mencoba, baca bersama. Jika anak macet di kata sulit, bisikkan lembut dalam 3 detik.",
    avoidThis: "Menegur keras saat anak salah membaca kata atau memintanya mengulang 10 kali sampai stres."
  },
  {
    rule: "Prinsip 4: Investasi Bakat Non-Akademik",
    title: "Beri Panggung Keunggulan Anak 1–2 Jam Sehari",
    doThis: "Fasilitasi minat di bidang seni lukis, olahraga bela diri, robotik, lego, atau musik. Rayakan prestasinya dengan memajang karyanya di dinding rumah.",
    avoidThis: "Menghukum anak dengan mencabut les olahraga atau seni kesukaannya hanya karena nilai rapor membacanya merah."
  }
];
