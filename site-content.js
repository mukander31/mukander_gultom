/*
  ==================================================================
  PANEL MANAJEMEN KONTEN PORTOFOLIO
  ==================================================================
  File ini adalah satu-satunya sumber data konten untuk situs.

  PETA PANEL
  1. identity       Identitas pemilik yang dipakai lintas halaman.
  2. assets         Logo, foto, dokumen, dan folder aset.
  3. navigation     Tujuan menu dan tautan berbagi lintas halaman.
  4. integrations   Endpoint layanan eksternal.
  5. translations   Seluruh teks UI dan terjemahan.
  6. pages.home     Kumpulan komponen khusus halaman Beranda.
  7. pages.projects Kumpulan kartu dan detail halaman Proyek.
  8. pages.experience
                    Kumpulan timeline dan pendidikan halaman Pengalaman.

  DOKUMENTASI USER
  - Baca CONTENT_MANAGEMENT.md untuk prosedur lengkap dan contoh.
  - Ubah teks visual di translations.id/translations.en.
  - Ubah struktur daftar di pages.projects atau pages.experience.
  - Jangan mengubah nama key atau ID yang dirujuk oleh script.js.
  - Jangan menyimpan password, token, atau rahasia di file ini.
*/
window.PORTFOLIO_CONTENT = {
  // ================================================================
  // PANEL 1 — IDENTITAS PEMILIK
  // Dipakai lintas halaman: Header, Hero, Tentang, Kontak, dan Footer.
  // ================================================================
  identity: {
    fullName: "Mukander Santono Gultom",
    brandName: "Mukander Gultom",
    initials: "MG",
    email: "gmukander@gmail.com",
    location: "Medan, Indonesia",
    university: "Universitas Sari Mutiara Indonesia",
    photo: "assets/images/profile.png",
  },
  // ================================================================
  // PANEL 2 — ASET
  // Simpan file baru di folder aset, lalu ubah path di panel ini.
  // ================================================================
  assets: {
    logo: "assets/images/logo.webp",
    logoType: "image/webp",
    imageDirectory: "assets/images/",
    documentDirectory: "assets/documents/",
  },
  // ================================================================
  // PANEL 3 — INTEGRASI EKSTERNAL
  // Ganti nilai endpoint tanpa mengubah struktur penyimpanan lain.
  // ================================================================
  integrations: {
    visitorCounterEndpoint: "https://mukander-portfolio-counter.mukander-counter.workers.dev/api/visitors",
  },
  // ================================================================
  // PANEL 4 — NAVIGASI DAN TAUTAN
  // Digunakan oleh Header, Footer, Hero, dan tombol lintas halaman.
  // ================================================================
  navigation: {
    home: "index.html#home",
    about: "index.html#about",
    projects: "projects.html",
    experience: "experience.html",
    contact: "index.html#contact",
    top: "#top",
    cv: "assets/documents/CV Mukander ATS.pdf",
  },
  // ================================================================
  // PANEL 5 — TERJEMAHAN
  // Setiap teks visual dipisahkan berdasarkan komponen:
  // nav.*, settings.*, hero.*, about.*, skills.*, contact.*,
  // projects.*, experience.*, common.*, dan footer.*.
  // ================================================================
  translations: {
  id: {
    pageTitle: "Mukander Santono Gultom — Junior Web Developer",
    pageDescription: "Portofolio Mukander Santono Gultom — junior web developer.",
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
    "hero.role": "Junior Web Developer",
    "hero.student": "Lulusan Sistem Informasi",
    "hero.description": "Saya lulusan Sistem Informasi dari Universitas Sari Mutiara Indonesia yang tertarik pada pengembangan web, pemecahan masalah, dan membangun solusi digital yang bermanfaat.",
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
    "about.description": "Saya adalah lulusan Sistem Informasi dari Universitas Sari Mutiara Indonesia. Saya memiliki minat kuat pada data analysis,pengembangan web, desain sistem, dan teknologi. Saya senang terus belajar dan berkontribusi melalui solusi yang inovatif dan efisien.",
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
    "experience.pageDescription": "Pengalaman dan pendidikan Mukander Santono Gultom, Staff IT (Junior Web Developer) dan lulusan Sistem Informasi.",
    "experience.pageIntro": "Ringkasan pengalaman proyek dan pendidikan yang membentuk perjalanan saya di bidang teknologi.",
    "experience.timelineHeading": "Perjalanan dan Pendidikan",
    "experience.date": "2026 — Sekarang",
    "experience.staffTitle": "Staff IT (Junior Web Developer)",
    "experience.role": "",
    "experience.previewDate": "Pratinjau · Demo",
    "experience.previewTag": "Contoh desain — bukan pengalaman aktual",
    "experience.previewDescription": "Entri contoh untuk melihat tata letak timeline saat daftar pengalaman bertambah.",
    "experience.sampleProject02": "Contoh Pengalaman 02",
    "experience.sampleProject03": "Contoh Pengalaman 03",
    "experience.sampleProject04": "Contoh Pengalaman 04",
    "experience.sampleProject05": "Contoh Pengalaman 05",
    "experience.sampleProject06": "Contoh Pengalaman 06",
    "experience.description": "Mengembangkan dan memelihara aplikasi web menggunakan Laravel serta teknologi web modern untuk mendukung kebutuhan operasional.",
    "experience.pointOne": "Mengembangkan aplikasi web untuk mendukung kebutuhan operasional.",
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
    "projects.figmaCategory": "Desain Antarmuka",
    "projects.esuratDescription": "Aplikasi web untuk mengelola surat resmi di lingkungan kampus.",
    "projects.esuratGoal": "Mendukung pengelolaan surat resmi di lingkungan kampus melalui aplikasi web.",
    "projects.esuratRole": "Junior Web Developer dalam proyek akademik di Universitas Sari Mutiara Indonesia.",
    "projects.esuratStack": "Laravel 12 untuk pengembangan aplikasi, MySQL untuk basis data, Bootstrap dan Tailwind CSS untuk antarmuka.",
    "projects.figmaDescription": "Desain antarmuka web untuk sistem monitoring yang digunakan dalam pengelolaan data dan aktivitas operasional. Fokus desain mencakup navigasi yang jelas, tampilan dashboard, serta pengalaman penggunaan yang konsisten.",
    "projects.figmaGoal": "Membangun rancangan antarmuka yang mudah dipahami, terstruktur, dan mendukung proses monitoring serta pengambilan informasi secara efisien.",
    "projects.figmaRole": "Merancang wireframe, komponen antarmuka, halaman dashboard, prototipe interaktif, dan sistem visual pada Figma.",
    "projects.figmaStack": "Figma untuk wireframe, desain UI, prototipe interaktif, komponen, dan alur penggunaan.",
    "projects.detailsEyebrow": "Ringkasan Proyek",
    "projects.detailsIntro": "Klik kartu proyek untuk membaca penjelasan dan melihat kode di GitHub.",
    "projects.listLabel": "Daftar Proyek",
    "projects.githubLabel": "Telusuri Projek",
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
    pageTitle: "Mukander Santono Gultom — Junior Web Developer",
    pageDescription: "Portfolio of Mukander Santono Gultom — junior web developer.",
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
    "hero.role": "Junior Web Developer",
    "hero.student": "Information Systems Graduate",
    "hero.description": "I am an Information Systems graduate from Universitas Sari Mutiara Indonesia, interested in web development, problem-solving, and building useful digital solutions.",
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
    "about.description": "I am an Information Systems graduate from Universitas Sari Mutiara Indonesia. I am strongly interested in data analysis, web development, system design, and technology. I enjoy continuously learning and contributing through innovative and efficient solutions.",
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
    "experience.pageDescription": "Experience and education of Mukander Santono Gultom, junior web developer and Information Systems graduate.",
    "experience.pageIntro": "An overview of the project experience and education shaping my journey in technology.",
    "experience.timelineHeading": "Experience & Education",
    "experience.date": "2026 — Present",
    "experience.staffTitle": "IT Staff (Junior Web Developer)",
    "experience.role": "",
    "experience.previewDate": "Preview · Demo",
    "experience.previewTag": "Design sample — not actual experience",
    "experience.previewDescription": "Sample entries to preview the timeline layout as the experience list grows.",
    "experience.sampleProject02": "Sample Experience 02",
    "experience.sampleProject03": "Sample Experience 03",
    "experience.sampleProject04": "Sample Experience 04",
    "experience.sampleProject05": "Sample Experience 05",
    "experience.sampleProject06": "Sample Experience 06",
    "experience.description": "Developing and maintaining web applications using Laravel and modern web technologies to support operational needs.",
    "experience.pointOne": "Developing web applications to support operational needs.",
    "experience.pointTwo": "Applying Laravel and modern web technologies in projects.",
    "experience.pointThree": "Continuously improving through hands-on practice and learning.",
    "experience.educationLabel": "Education",
    "experience.educationDescription": "Studying Information Systems and exploring technology and digital solutions.",
    "experience.note": "Always learning, always growing.",
    "projects.eyebrow": "Selected Work",
    "projects.heading": "My Projects",
    "projects.pageTitle": "Projects — Mukander Santono Gultom",
    "projects.pageDescription": "Selected projects by Mukander Santono Gultom, junior web developer and Information Systems graduate.",
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
    "projects.figmaCategory": "Interface Design",
    "projects.esuratDescription": "A web application for managing official letters across campus.",
    "projects.esuratGoal": "Supporting official letter management across campus through a web application.",
    "projects.esuratRole": "Junior Web Developer on an academic project at Universitas Sari Mutiara Indonesia.",
    "projects.esuratStack": "Laravel 12 for application development, MySQL for data storage, Bootstrap and Tailwind CSS for the interface.",
    "projects.figmaDescription": "A web interface design for a monitoring system used to manage data and operational activities. The design focuses on clear navigation, dashboard views, and a consistent user experience.",
    "projects.figmaGoal": "Creating an easy-to-understand and structured interface that supports monitoring and efficient information access.",
    "projects.figmaRole": "Designed wireframes, interface components, dashboard pages, interactive prototypes, and the visual system in Figma.",
    "projects.figmaStack": "Figma for wireframes, UI design, interactive prototypes, components, and user flows.",
    "projects.detailsEyebrow": "Project Overview",
    "projects.detailsIntro": "Select a project card to read its details and find its code on GitHub.",
    "projects.listLabel": "Project List",
    "projects.githubLabel": "Browse Projects",
    "projects.goalTitle": "Purpose",
    "projects.goal": "Supporting the management of official campus letters through a web application.",
    "projects.roleTitle": "Role",
    "projects.role": "Junior Web Developer on an academic project at Universitas Sari Mutiara Indonesia.",
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

  // ================================================================
  // PANEL 6 — HALAMAN BERANDA
  // Menyimpan komponen yang hanya atau terutama dipakai halaman ini.
  // ================================================================
  pages: {
    home: {
      // Komponen Hero dan bagian beranda dapat diubah di panel
      // translations dengan prefix hero.* dan about.*.
      skills: [
        { name: "Laravel", mark: "L", className: "laravel" },
        { name: "PHP", mark: "php", className: "php" },
        { name: "MySQL", mark: "◉", className: "mysql" },
        { name: "JavaScript", mark: "JS", className: "javascript" },
        // { name: "Bootstrap", mark: "B", className: "bootstrap" },
        { name: "Git", mark: "◆", className: "git" },
        { name: "Python", mark: "Py", className: "python" },
        { name: "Microsoft Office", mark: "MO", className: "microsoft-office" },
      ],
    },

    // ==============================================================
    // PANEL 7 — HALAMAN PROYEK
    // Tambah proyek dengan menyalin satu objek lalu memakai id unik.
    // image: path aset proyek, atau "" jika belum ada foto.
    // ==============================================================
    projects: {
      // --------------------------------------------------------------
      // PANEL ISIAN PROYEK
      // Salin objek projectTemplate di bawah, lalu tempelkan ke `items`.
      // Isi satu field per baris agar mudah ditemukan dan dimodifikasi.
      // --------------------------------------------------------------
      projectTemplate: {
        id: "nama-proyek-tanpa-spasi",
        name: "Nama Proyek",
        year: "2026",
        image: "assets/images/nama-proyek.webp",
        categoryKey: "projects.categoryNamaProyek",
        descriptionKey: "projects.descriptionNamaProyek",
        goalKey: "projects.goalNamaProyek",
        roleKey: "projects.roleNamaProyek",
        stackKey: "projects.stackNamaProyek",
        technologies: ["Teknologi 1", "Teknologi 2"],
        githubUrl: "https://github.com/pemilik/nama-repository",
      },

      // --------------------------------------------------------------
      // DATA PROYEK AKTIF
      // Urutan objek menentukan urutan kartu pada halaman Proyek.
      // Untuk menyembunyikan foto: image: ""
      // Untuk menyembunyikan tombol kode: githubUrl: ""
      // --------------------------------------------------------------
      items: [
        {
          id: "e-surat-kampus",
          name: "E-Surat Kampus",
          year: "2026",
          image: "assets/images/surat.png",
          categoryKey: "projects.label",
          descriptionKey: "projects.esuratDescription",
          goalKey: "projects.esuratGoal",
          roleKey: "projects.esuratRole",
          stackKey: "projects.esuratStack",
          technologies: ["Laravel 12", "MySQL", "Bootstrap", "Tailwind CSS"],
          githubUrl: "https://github.com/mukander31",
        },

        {
          id: "figma",
          name: "Design Web UI",
          year: "2024",
          image: "assets/images/figma.png",
          categoryKey: "projects.figmaCategory",
          descriptionKey: "projects.figmaDescription",
          goalKey: "projects.figmaGoal",
          roleKey: "projects.figmaRole",
          stackKey: "projects.figmaStack",
          technologies: ["Figma"],
          githubUrl: "https://www.figma.com/design/wAT3Gjt6Nc5Wr0P6n5CpFC/ui-monitoring-baru?node-id=0-1&p=f&t=Ow5ZCmv7NTJDsLhj-0",
        },
      ],
    },

    // ==============================================================
    // PANEL 8 — HALAMAN PENGALAMAN
    // Gunakan experienceTemplate sebagai formulir isian kartu pengalaman.
    // Salin objek tersebut ke items, lalu ubah seluruh key dan nilainya.
    // ==============================================================
    experience: {
      experienceTemplate: {
        dateKey: "experience.dateNamaPengalaman",
        titleKey: "experience.titleNamaPengalaman",
        suffixKey: "experience.suffixNamaPengalaman",
        place: "identity.university",
        descriptionKey: "experience.descriptionNamaPengalaman",
        pointKeys: [
          "experience.pointOneNamaPengalaman",
          "experience.pointTwoNamaPengalaman",
          "experience.pointThreeNamaPengalaman",
        ],
      },

      // Urutan objek menentukan urutan kartu pada halaman Pengalaman.
      items: [
        {
          dateKey: "experience.date",
          titleKey: "experience.staffTitle",
          place: "identity.university",
          descriptionKey: "experience.description",
          pointKeys: ["experience.pointOne", "experience.pointTwo", "experience.pointThree"],
        },
      ],

      // Panel pendidikan terpisah dari daftar pengalaman.
      education: {
        labelKey: "experience.educationLabel",
        titleKey: "about.degreeTitle",
        place: "identity.university",
        descriptionKey: "experience.educationDescription",
      },
    },
  },
};
