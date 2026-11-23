# Panduan Manajemen Konten Portofolio

Dokumentasi ini menjelaskan cara mengubah konten situs tanpa mengubah tata letak atau JavaScript.

## File Utama

Ubah konten situs melalui [site-content.js](./site-content.js).

File ini memiliki delapan panel:

| Panel | Digunakan untuk |
|---|---|
| `identity` | Nama, inisial, email, lokasi, kampus, dan foto profil |
| `assets` | Logo dan direktori aset |
| `integrations` | Endpoint penghitung kunjungan |
| `navigation` | Semua tautan menu, halaman, CV, dan kembali ke atas |
| `translations` | Semua teks Bahasa Indonesia dan Inggris |
| `pages.home` | Daftar teknologi pada halaman Beranda |
| `pages.projects` | Daftar kartu dan detail proyek |
| `pages.experience` | Timeline pengalaman dan kartu pendidikan |

## 1. Mengubah Identitas

Buka panel `identity` pada `site-content.js`.

```js
identity: {
  fullName: "Nama Lengkap",
  brandName: "Nama Singkat",
  initials: "NS",
  email: "nama@email.com",
  location: "Medan, Indonesia",
  university: "Nama Universitas",
  photo: "assets/images/foto-profil.webp",
}
```

Pengaturan:

- `photo: ""` menampilkan inisial.
- Simpan foto baru di `assets/images/`.
- Gunakan path relatif, misalnya `assets/images/foto-profil.webp`.

## 2. Mengubah Logo atau Dokumen

Buka panel `assets` untuk logo dan folder aset.

Buka panel `navigation` untuk lokasi CV:

```js
navigation: {
  cv: "assets/documents/cv-nama-saya.pdf",
}
```

CV yang dipilih juga dapat diunduh dengan nama alternatif melalui atribut `download` pada HTML. Aset baru tidak perlu ditempatkan di folder lain jika namanya konsisten.

## 3. Mengubah Menu dan Tautan

Buka panel `navigation`.

```js
navigation: {
  home: "index.html#home",
  about: "index.html#about",
  projects: "projects.html",
  experience: "experience.html",
  contact: "index.html#contact",
  top: "#top",
  cv: "assets/documents/cv-nama-saya.pdf",
}
```

Gunakan format halaman statis, misalnya `projects.html`, bukan URL JavaScript atau tautan dinamis.

## 4. Mengubah Teks dan Terjemahan

Buka:

```js
translations.id
translations.en
```

Gunakan prefix agar mudah dicari:

| Prefix | Komponen |
|---|---|
| `nav.*` | Menu dan tombol navigasi |
| `settings.*` | Tema dan bahasa |
| `hero.*` | Bagian pembuka Beranda |
| `about.*` | Bagian Tentang dan pendidikan |
| `skills.*` | Judul dan deskripsi Teknologi |
| `contact.*` | Bagian Kontak |
| `projects.*` | Judul, daftar, dan detail proyek |
| `experience.*` | Timeline dan pendidikan |
| `common.*` | Teks bersama |
| `footer.*` | Catatan dan tombol footer |

Setiap perubahan teks harus diperbarui pada kedua bahasa.

Contoh:

```js
"hero.description": "Teks baru dalam Bahasa Indonesia",
```

dan pada kamus Inggris:

```js
"hero.description": "The new text in English",
```

Jangan menghapus key yang masih digunakan oleh HTML atau JavaScript.

## 5. Mengubah Teknologi

Buka `pages.home.skills`.

```js
{ name: "Laravel", mark: "L", className: "laravel" },
```

Keterangan:

- `name`: nama teknologi yang ditampilkan.
- `mark`: simbol atau singkatan.
- `className`: gaya ikon yang tersedia di `styles.css`.

Untuk menyembunyikan teknologi, beri tanda `//` di depan baris tersebut.

Untuk menambah teknologi, salin satu objek lalu ubah ketiganya. Hapus atau tambahkan `className` hanya jika gaya visualnya sudah tersedia di `styles.css`.

## 6. Menambah atau Mengubah Proyek

Buka panel `pages.projects.projectTemplate` sebagai formulir isian. Salin isi
`projectTemplate` ke `pages.projects.items`, lalu ganti setiap nilainya.

Lihat ulang blok:

```js
{
  id: "nama-proyek",
  image: "assets/images/nama-proyek.webp",
  name: "Nama Proyek",
  year: "2026",
  categoryKey: "projects.label",
  descriptionKey: "projects.descriptionNamaProyek",
  goalKey: "projects.goalNamaProyek",
  roleKey: "projects.roleNamaProyek",
  stackKey: "projects.stackNamaProyek",
  technologies: ["Laravel", "MySQL"],
  githubUrl: "https://github.com/pemilik/repository",
}
```

Aturan:

- `id` harus unik dan tidak mengandung spasi.
- `image: ""` menampilkan keadaan kosong.
- `githubUrl: ""` menyembunyikan tombol repository.
- Tambahkan semua key `descriptionKey`, `goalKey`, `roleKey`, dan `stackKey` ke `translations.id` dan `translations.en`.
- Urutan objek menentukan urutan kartu pada halaman Proyek.

Contoh key tambahan:

```js
"projects.descriptionNamaProyek": "Deskripsi proyek",
"projects.goalNamaProyek": "Tujuan proyek",
"projects.roleNamaProyek": "Peran yang dijalankan",
"projects.stackNamaProyek": "Teknologi yang digunakan",
```

## 7. Mengubah Pengalaman

Buka `pages.experience.entries`.

Setiap objek merepresentasikan satu kartu timeline.

```js
{
  dateKey: "experience.date",
  titleKey: "hero.role",
  suffixKey: "experience.role",
  place: "identity.university",
  descriptionKey: "experience.description",
  pointKeys: ["experience.pointOne", "experience.pointTwo"],
}
```

- `dateKey`, `titleKey`, dan `descriptionKey` harus menunjuk ke key terjemahan.
- `place` dapat menunjuk ke data identitas, misalnya `identity.university`.
- `pointKeys` berisi daftar key untuk poin-poin di bawah deskripsi.
- Urutan array menentukan urutan timeline.

Kartu pendidikan dapat diubah pada `pages.experience.education`.

## 8. Mengubah Penghitung Kunjungan

Buka `integrations.visitorCounterEndpoint`.

Isi dengan alamat Worker yang berakhiran `/api/visitors`.

```js
integrations: {
  visitorCounterEndpoint: "https://nama-worker.workers.dev/api/visitors",
}
```

Konfigurasi origin dan penerbitan Worker dijelaskan di [VISITOR_COUNTER_SETUP.md](./VISITOR_COUNTER_SETUP.md).

## Pemeriksaan Sebelum Publikasi

1. Pastikan semua tanda kutip dan kurung ditutup.
2. Pastikan key baru ditambahkan ke Bahasa Indonesia dan Inggris.
3. Pastikan semua aset yang disebutkan benar-benar tersedia.
4. Pastikan `id` proyek tidak diduplikasi.
5. Muat ulang halaman Beranda, Proyek, dan Pengalaman.
6. Uji menu, bahasa, tema, tautan CV, tombol proyek, dan penghitung.
7. Gunakan console browser untuk memeriksa pesan `Missing ...` atau `Could not load ...`.
