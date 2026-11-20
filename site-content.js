/*
  PANDUAN EDIT KONTEN PORTOFOLIO

  File ini adalah pusat data untuk teks, identitas, tautan, proyek, pengalaman,
  keahlian, logo, dan foto yang dipakai oleh halaman Beranda, Proyek, dan Pengalaman.
  Edit nilai di bawah ini, simpan file, lalu muat ulang atau terbitkan ulang situs.
  Jangan menghapus nama properti, ID proyek, atau key terjemahan yang sudah dipakai.

  BAGIAN YANG DAPAT DIEDIT
  1. profile — identitas yang digunakan lintas halaman: fullName, brandName, initials,
     email, location, university, dan photo. Simpan foto di assets/images/, lalu isi
     photo dengan path relatif, misalnya "assets/images/foto-saya.webp". Isi "" untuk
     menampilkan inisial sebagai pengganti foto.
  2. assets — lokasi logo dan folder aset. Jika format logo berubah, sesuaikan logoType
     dengan MIME type-nya (contoh PNG: "image/png").
  3. links — href menu header, tombol Beranda, tombol Lihat Proyek, tautan Tentang/
     Pengalaman/Kontak, tombol kembali ke atas, serta tombol CV. Untuk CV, simpan file
     di assets/documents/cv.pdf lalu ubah cv menjadi "assets/documents/cv.pdf".
  4. translations.id / translations.en — semua teks halaman Beranda, Proyek, Pengalaman,
     header, kontrol tema/bahasa, metadata, dan footer. Key dibagi menurut
     komponen (misalnya hero.*, about.*, projects.*, experience.*, contact.*, footer.*).
     Ubah nilai pada kedua bahasa bila ingin perubahan berlaku pada kedua bahasa.
     Key baru harus ditambahkan dengan nama yang sama di kedua kamus.
  5. projects — urutan kartu pada halaman Proyek dan detail kartu terpilih. Foto proyek
     diletakkan di assets/images/ dan path-nya diisi ke image. Untuk proyek baru, salin
     pola objek yang sudah ada, pakai id unik, lalu isi year, technologies, githubUrl,
     dan key untuk kategori/deskripsi/tujuan/peran/stack. Teks dengan akhiran Key harus
     tersedia di translations.id dan translations.en. Gunakan nameKey untuk nama berbeda
     per bahasa atau name untuk nama yang sama; githubUrl dan image boleh "".
  6. skills — daftar keahlian di Beranda. name adalah label, mark adalah ikon pendek,
     dan className memilih gaya ikon yang tersedia di styles.css.
  7. experience — entries mengatur urutan kartu timeline di halaman Pengalaman.
     dateKey/titleKey/descriptionKey serta placeKey/suffixKey/pointKeys merujuk ke
     translations. place dapat pula menunjuk ke nilai konfigurasi, misalnya
     "profile.university". education mengatur kartu pendidikan di halaman tersebut.
  8. services — endpoint penghitung kunjungan Cloudflare. Petunjuk penerbitan dan
     konfigurasi endpoint tersedia di VISITOR_COUNTER_SETUP.md.

  PETA KONTEN PER HALAMAN / KOMPONEN
  - Header: nav.* untuk nama menu, tombol CV, dan aksesibilitas; settings.* untuk
    label mode gelap/bahasa; links.* untuk tujuan semua menu dan tombol header.
  - Beranda: pageTitle/pageDescription untuk metadata; hero.* untuk bagian pembuka
    (termasuk hero.photoAlt); about.* untuk perkenalan, minat, dan pendidikan;
    skills.* serta skills untuk daftar keahlian; contact.* untuk teks informasi kontak;
    profile.* untuk nama, foto, email, lokasi, dan kampus.
  - Proyek: projects.pageTitle/pageDescription/pageIntro untuk judul dan pengantar;
    projects.* untuk label/detail/keadaan kosong; projects untuk isi dan urutan kartu.
  - Pengalaman: experience.pageTitle/pageDescription/pageIntro untuk judul dan
    pengantar; experience.* untuk timeline dan label; experience.entries serta
    experience.education untuk isi dan urutan kartu.
  - Footer semua halaman: profile.* untuk nama, common.motto untuk slogan,
    footer.note untuk catatan, footer.top untuk label aksesibilitas, links.home
    untuk logo/tautan beranda, dan links.top untuk tombol kembali ke atas.
  - Saat mengubah kalimat, ubah key yang sama pada translations.id dan translations.en.
    Contoh: ganti hero.description untuk paragraf pembuka Beranda; ganti
    projects.pageIntro untuk pengantar halaman Proyek.

  CONTOH MENAMBAH PROYEK
  Tambahkan objek baru ke projects dan siapkan key teks pada kedua kamus bahasa:
    { id: "aplikasi-baru", nameKey: "projects.newName", year: "2025",
      categoryKey: "projects.newCategory", descriptionKey: "projects.newDescription",
      goalKey: "projects.newGoal", roleKey: "projects.newRole",
      stackKey: "projects.newStack", technologies: ["Laravel", "MySQL"],
      image: "assets/images/aplikasi-baru.webp",
      githubUrl: "https://github.com/akun/aplikasi-baru" }
  Untuk menambah konten Beranda atau footer, ubah key yang sesuai di translations,
  misalnya hero.description, about.heading, contact.description, common.motto, atau
  footer.note. Untuk mengganti tulisan navigasi, ubah nav.*; tujuan link ada di links.

  CATATAN
  - Foto dan dokumen harus disalin manual ke folder aset; situs statis tidak mengunggahnya.
  - File ini dikirim ke browser dan bukan tempat menyimpan password atau rahasia.
  - Data/teks/path dapat diubah di sini; tata letak, warna, dan animasi tetap di HTML/CSS.
*/
window.PORTFOLIO_CONTENT = {
  profile: {
    fullName: "Mukander Santono Gultom",
    brandName: "Mukander Gultom",
    initials: "MG",
    email: "mukander31@gmail.com",
    location: "Medan, Indonesia",
    university: "Universitas Sari Mutiara Indonesia",
    photo: "assets/images/profile.png",
  },
  assets: {
    logo: "assets/images/logo.webp",
    logoType: "image/webp",
    imageDirectory: "assets/images/",
    documentDirectory: "assets/documents/",
  },
  services: {
    visitorCounterEndpoint: "https://mukander-portfolio-counter.mukander-counter.workers.dev/api/visitors",
  },
  links: {
    home: "index.html#home",
    about: "index.html#about",
    projects: "projects.html",
    experience: "experience.html",
    contact: "index.html#contact",
    top: "#top",
    cv: "index.html#contact",
  },
  translations: {
  id: {
    pageTitle: "Mukander Santono Gultom — Web Developer",
    pageDescription: "Portofolio Mukander Santono Gultom — web developer dan mahasiswa Sistem Informasi.",
    "nav.label": "Navigasi utama",
    "nav.brand": "Mukander Gultom, beranda",
    "nav.open": "Buka navigasi",
    "nav.close": "Tutup navigasi",
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.projects": "Proyek",
    "nav.experience": "Pengalaman",
    "nav.contact": "Kontak",
    "nav.cv": "Unduh CV",
    "nav.cvAria": "Hubungi saya untuk meminta CV",
    "settings.label": "Pengaturan tampilan",
    "settings.dark": "Aktifkan mode gelap",
    "settings.light": "Aktifkan mode terang",
    "settings.switchEnglish": "Switch to English",
    "settings.switchIndonesian": "Ganti ke Bahasa Indonesia",
    "common.contactMe": "Hubungi Saya",
    "common.motto": "Berkarya · Belajar · Bertumbuh",
    "hero.hello": "Halo, saya",
    "hero.role": "Web Developer",
    "hero.student": "Mahasiswa Sistem Informasi",
    "hero.description": "Saya mahasiswa Sistem Informasi di Universitas Sari Mutiara Indonesia yang tertarik pada pengembangan web, pemecahan masalah, dan membangun solusi digital yang bermanfaat.",
    "hero.projects": "Lihat Proyek",
    "hero.visual": "Foto profil Mukander Gultom",
    "hero.photoAlt": "Ilustrasi foto profil sementara",
    "hero.scroll": "Gulir untuk mengenal saya",
    "hero.highlights": "Ringkasan profil",
    "hero.highlightStudy": "Sistem Informasi",
    "hero.highlightFocus": "Pengembangan Web",
    "hero.highlightLocation": "Medan, Indonesia",
    "hero.highlightVisitors": "Total kunjungan",
    "hero.visitorCounter": "Jumlah kunjungan website",
    "hero.visitorLoading": "Memuat jumlah kunjungan",
    "hero.visitorUpdateFailed": "Pembaruan jumlah kunjungan gagal",
    "hero.visitorUnavailable": "Jumlah kunjungan tidak tersedia",
    "about.eyebrow": "Tentang Saya",
    "about.heading": "Membangun solusi digital,<br /><span>satu langkah setiap hari.</span>",
    "about.description": "Saya adalah mahasiswa Sistem Informasi di Universitas Sari Mutiara Indonesia. Saya memiliki minat kuat pada pengembangan web, desain sistem, dan teknologi. Saya senang terus belajar dan berkontribusi melalui solusi yang inovatif dan efisien.",
    "about.link": "Kenali perjalanan saya",
    "about.education": "Pendidikan",
    "about.degreeTitle": "S1 Sistem Informasi",
    "about.location": "Lokasi",
    "about.focusTitle": "Hal yang saya minati",
    "about.focusWeb": "Pengembangan web",
    "about.focusSystems": "Desain dan analisis sistem",
    "about.focusLearning": "Belajar teknologi baru",
    "contact.email": "Email",
    "contact.social": "Media sosial",
    "skills.eyebrow": "Keahlian Saya",
    "skills.heading": "Teknologi yang Saya Gunakan",
    "skills.description": "Teknologi yang saya gunakan untuk mengubah ide menjadi karya.",
    "experience.eyebrow": "Perjalanan Saya",
    "experience.heading": "Pengalaman",
    "experience.pageTitle": "Pengalaman — Mukander Santono Gultom",
    "experience.pageDescription": "Pengalaman dan pendidikan Mukander Santono Gultom, web developer dan mahasiswa Sistem Informasi.",
    "experience.pageIntro": "Ringkasan pengalaman proyek dan pendidikan yang membentuk perjalanan saya di bidang teknologi.",
    "experience.timelineHeading": "Perjalanan dan Pendidikan",
    "experience.date": "2024 — Sekarang",
    "experience.role": "(Proyek Mahasiswa)",
    "experience.previewDate": "Pratinjau · Demo",
    "experience.previewTag": "Contoh desain — bukan pengalaman aktual",
    "experience.previewDescription": "Entri contoh untuk melihat tata letak timeline saat daftar pengalaman bertambah.",
    "experience.sampleProject02": "Contoh Pengalaman 02",
    "experience.sampleProject03": "Contoh Pengalaman 03",
    "experience.sampleProject04": "Contoh Pengalaman 04",
    "experience.sampleProject05": "Contoh Pengalaman 05",
    "experience.sampleProject06": "Contoh Pengalaman 06",
    "experience.description": "Mengembangkan dan memelihara aplikasi web untuk kebutuhan akademik dan kampus menggunakan Laravel serta teknologi web modern.",
    "experience.pointOne": "Mengembangkan aplikasi web untuk kebutuhan akademik dan kampus.",
    "experience.pointTwo": "Menerapkan Laravel dan teknologi web modern dalam proyek.",
    "experience.pointThree": "Terus meningkatkan kemampuan melalui praktik dan pembelajaran.",
    "experience.educationLabel": "Pendidikan",
    "experience.educationDescription": "Mempelajari sistem informasi dan mengembangkan minat pada teknologi serta solusi digital.",
    "experience.note": "Terus belajar, terus berkembang.",
    "projects.eyebrow": "Karya Pilihan",
    "projects.heading": "Proyek Saya",
    "projects.pageTitle": "Proyek — Mukander Santono Gultom",
    "projects.pageDescription": "Proyek pilihan Mukander Santono Gultom, web developer dan mahasiswa Sistem Informasi.",
    "projects.pageIntro": "Jelajahi proyek pilihan saya, lalu pilih kartu untuk melihat tujuan, peran, teknologi, dan tautan kode.",
    "projects.sampleLabel": "Pratinjau",
    "projects.sampleProject02": "Contoh Proyek 02",
    "projects.sampleProject03": "Contoh Proyek 03",
    "projects.sampleProject04": "Contoh Proyek 04",
    "projects.sampleProject05": "Contoh Proyek 05",
    "projects.sampleProject06": "Contoh Proyek 06",
    "projects.sampleDescription": "Konten contoh untuk melihat tampilan daftar proyek yang lebih panjang.",
    "projects.sampleGoal": "Mengisi daftar sementara untuk menguji tata letak dan fungsi gulir.",
    "projects.sampleRole": "Data pratinjau — bukan pengalaman proyek aktual.",
    "projects.sampleStack": "Detail teknologi dapat ditambahkan setelah informasi proyek sebenarnya tersedia.",
    "projects.sampleNote": "Kartu ini hanya contoh pratinjau dan belum memiliki repositori GitHub.",
    "projects.imageGroupLabel": "Foto hasil proyek",
    "projects.imageEmpty": "Belum ada foto hasil proyek.",
    "projects.imageAlt": "hasil proyek",
    "projects.label": "Aplikasi Web",
    "projects.description": "Aplikasi web untuk mengelola surat resmi di lingkungan kampus.",
    "projects.detailsEyebrow": "Ringkasan Proyek",
    "projects.detailsIntro": "Klik kartu proyek untuk membaca penjelasan dan melihat kode di GitHub.",
    "projects.listLabel": "Daftar Proyek",
    "projects.githubLabel": "Cari kode di GitHub",
    "projects.githubNote": "Tautan membuka pencarian GitHub; ganti dengan URL repositori proyek jika tersedia.",
    "projects.goalTitle": "Tujuan",
    "projects.goal": "Mendukung pengelolaan surat resmi di lingkungan kampus melalui aplikasi web.",
    "projects.roleTitle": "Peran",
    "projects.role": "Web Developer dalam proyek mahasiswa di Universitas Sari Mutiara Indonesia.",
    "projects.stackTitle": "Teknologi",
    "projects.stack": "Laravel untuk pengembangan aplikasi, MySQL untuk basis data, dan Bootstrap untuk antarmuka.",
    "contact.eyebrow": "Kontak",
    "contact.kicker": "Punya ide menarik?",
    "contact.heading": "Mari berkolaborasi.",
    "contact.description": "Saya terbuka untuk pertanyaan, kesempatan, dan kolaborasi.",
    "contact.collaborationTitle": "Kolaborasi",
    "contact.collaboration": "Terbuka untuk diskusi dan kesempatan yang relevan.",
    "contact.bannerHeading": "Mari mulai percakapan.",
    "contact.bannerDescription": "Kirim pesan dan ceritakan hal yang ingin Anda diskusikan.",
    "footer.note": "Dibuat dengan semangat belajar.",
    "footer.top": "Kembali ke atas",
  },
  en: {
    pageTitle: "Mukander Santono Gultom — Web Developer",
    pageDescription: "Portfolio of Mukander Santono Gultom — web developer and Information Systems student.",
    "nav.label": "Main navigation",
    "nav.brand": "Mukander Gultom, home",
    "nav.open": "Open navigation",
    "nav.close": "Close navigation",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "nav.cv": "Download CV",
    "nav.cvAria": "Contact me to request my CV",
    "settings.label": "Display settings",
    "settings.dark": "Enable dark mode",
    "settings.light": "Enable light mode",
    "settings.switchEnglish": "Switch to English",
    "settings.switchIndonesian": "Switch to Indonesian",
    "common.contactMe": "Contact Me",
    "common.motto": "Build · Learn · Grow",
    "hero.hello": "Hello, I'm",
    "hero.role": "Web Developer",
    "hero.student": "Information Systems Student",
    "hero.description": "I'm an Information Systems student at Universitas Sari Mutiara Indonesia, interested in web development, problem-solving, and building useful digital solutions.",
    "hero.projects": "View Projects",
    "hero.visual": "Mukander Gultom profile photo",
    "hero.photoAlt": "Temporary profile portrait illustration for",
    "hero.scroll": "Scroll to get to know me",
    "hero.highlights": "Profile highlights",
    "hero.highlightStudy": "Information Systems",
    "hero.highlightFocus": "Web Development",
    "hero.highlightLocation": "Medan, Indonesia",
    "hero.highlightVisitors": "Total visits",
    "hero.visitorCounter": "Total website visits",
    "hero.visitorLoading": "Loading visit total",
    "hero.visitorUpdateFailed": "Visit total update failed",
    "hero.visitorUnavailable": "Visit total unavailable",
    "about.eyebrow": "About Me",
    "about.heading": "Building digital solutions,<br /><span>one step at a time.</span>",
    "about.description": "I'm an Information Systems student at Universitas Sari Mutiara Indonesia. I'm deeply interested in web development, system design, and technology. I enjoy learning new things and contributing through innovative, efficient solutions.",
    "about.link": "Explore my journey",
    "about.education": "Education",
    "about.degreeTitle": "B.Sc. in Information Systems",
    "about.location": "Location",
    "about.focusTitle": "Areas of interest",
    "about.focusWeb": "Web development",
    "about.focusSystems": "Systems design and analysis",
    "about.focusLearning": "Learning new technologies",
    "contact.email": "Email",
    "contact.social": "Social media",
    "skills.eyebrow": "My Skills",
    "skills.heading": "Technologies I Work With",
    "skills.description": "Tools I use to turn ideas into useful work.",
    "experience.eyebrow": "My Journey",
    "experience.heading": "Experience",
    "experience.pageTitle": "Experience — Mukander Santono Gultom",
    "experience.pageDescription": "Experience and education of Mukander Santono Gultom, web developer and Information Systems student.",
    "experience.pageIntro": "An overview of the project experience and education shaping my journey in technology.",
    "experience.timelineHeading": "Experience & Education",
    "experience.date": "2024 — Present",
    "experience.role": "(Student Project)",
    "experience.previewDate": "Preview · Demo",
    "experience.previewTag": "Design sample — not actual experience",
    "experience.previewDescription": "Sample entries to preview the timeline layout as the experience list grows.",
    "experience.sampleProject02": "Sample Experience 02",
    "experience.sampleProject03": "Sample Experience 03",
    "experience.sampleProject04": "Sample Experience 04",
    "experience.sampleProject05": "Sample Experience 05",
    "experience.sampleProject06": "Sample Experience 06",
    "experience.description": "Developing and maintaining web applications for academic and campus needs using Laravel and modern web technologies.",
    "experience.pointOne": "Developing web applications for academic and campus needs.",
    "experience.pointTwo": "Applying Laravel and modern web technologies in projects.",
    "experience.pointThree": "Continuously improving through hands-on practice and learning.",
    "experience.educationLabel": "Education",
    "experience.educationDescription": "Studying Information Systems and exploring technology and digital solutions.",
    "experience.note": "Always learning, always growing.",
    "projects.eyebrow": "Selected Work",
    "projects.heading": "My Projects",
    "projects.pageTitle": "Projects — Mukander Santono Gultom",
    "projects.pageDescription": "Selected projects by Mukander Santono Gultom, web developer and Information Systems student.",
    "projects.pageIntro": "Explore my selected work, then choose a card to view its purpose, role, technologies, and code link.",
    "projects.sampleLabel": "Preview",
    "projects.sampleProject02": "Sample Project 02",
    "projects.sampleProject03": "Sample Project 03",
    "projects.sampleProject04": "Sample Project 04",
    "projects.sampleProject05": "Sample Project 05",
    "projects.sampleProject06": "Sample Project 06",
    "projects.sampleDescription": "Sample content to preview the project list with more items.",
    "projects.sampleGoal": "Temporary list entries for testing the layout and scrolling behavior.",
    "projects.sampleRole": "Preview data — not an actual project experience.",
    "projects.sampleStack": "Technology details can be added when actual project information is available.",
    "projects.sampleNote": "This is a preview card and does not have a GitHub repository yet.",
    "projects.imageGroupLabel": "Project result photo",
    "projects.imageEmpty": "No project photo uploaded yet.",
    "projects.imageAlt": "project result",
    "projects.label": "Web Application",
    "projects.description": "A web application for managing official letters across campus.",
    "projects.detailsEyebrow": "Project Overview",
    "projects.detailsIntro": "Select a project card to read its details and find its code on GitHub.",
    "projects.listLabel": "Project List",
    "projects.githubLabel": "Find code on GitHub",
    "projects.githubNote": "This link opens GitHub search; replace it with the project repository URL when available.",
    "projects.goalTitle": "Purpose",
    "projects.goal": "Supporting the management of official campus letters through a web application.",
    "projects.roleTitle": "Role",
    "projects.role": "Web Developer on a student project at Universitas Sari Mutiara Indonesia.",
    "projects.stackTitle": "Technologies",
    "projects.stack": "Laravel for application development, MySQL for data, and Bootstrap for the interface.",
    "contact.eyebrow": "Contact",
    "contact.kicker": "Have an interesting idea?",
    "contact.heading": "Let's work together.",
    "contact.description": "I'm open to questions, opportunities, and collaborations.",
    "contact.collaborationTitle": "Collaborations",
    "contact.collaboration": "Open to relevant discussions and opportunities.",
    "contact.bannerHeading": "Let's start a conversation.",
    "contact.bannerDescription": "Send a message and tell me what you'd like to discuss.",
    "footer.note": "Made with a passion for learning.",
    "footer.top": "Back to top",
  },
},
  // Isi image dengan path di assets/images/, atau "" bila belum ada foto proyek.
  projects: [
  {
    id: "e-surat-kampus",
    image: "",
    name: "E-Surat Kampus",
    year: "2024",
    categoryKey: "projects.label",
    descriptionKey: "projects.description",
    goalKey: "projects.goal",
    roleKey: "projects.role",
    stackKey: "projects.stack",
    technologies: ["Laravel", "MySQL", "Bootstrap"],
    githubUrl: "https://github.com/search?q=E-Surat+Kampus&type=repositories",
  },
  
],
  skills: [
    { name: "Laravel", mark: "L", className: "laravel" },
    { name: "PHP", mark: "php", className: "php" },
    { name: "MySQL", mark: "◉", className: "mysql" },
    { name: "JavaScript", mark: "JS", className: "javascript" },
    { name: "Bootstrap", mark: "B", className: "bootstrap" },
    { name: "Git", mark: "◆", className: "git" },
    { name: "Python", mark: "Py", className: "python" },
  ],
  experience: {
    entries: [
      {
        dateKey: "experience.date",
        titleKey: "hero.role",
        suffixKey: "experience.role",
        place: "profile.university",
        descriptionKey: "experience.description",
        pointKeys: ["experience.pointOne", "experience.pointTwo", "experience.pointThree"],
      },
      ...["02", "03", "04", "05", "06"].map((number) => ({
        preview: true,
        dateKey: "experience.previewDate",
        titleKey: `experience.sampleProject${number}`,
        placeKey: "experience.previewTag",
        descriptionKey: "experience.previewDescription",
      })),
    ],
    education: {
      labelKey: "experience.educationLabel",
      titleKey: "about.degreeTitle",
      place: "profile.university",
      descriptionKey: "experience.educationDescription",
    },
  },
};
