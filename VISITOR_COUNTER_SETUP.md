# Mengaktifkan penghitung kunjungan

Situs ini berupa halaman statis. Penghitung total lintas pengunjung memerlukan Cloudflare Worker yang menyimpan total bersama. Worker memakai Durable Object agar kunjungan yang datang bersamaan tidak saling menimpa.

Penghitung mencatat setiap pemuatan halaman penuh pada Beranda, Proyek, atau Pengalaman. Jadi angka ini adalah **total kunjungan halaman**, bukan jumlah orang unik. Membuka ulang atau memuat ulang halaman dihitung sebagai kunjungan baru. Angka di Beranda diperbarui setiap 15 detik tanpa menambah jumlah kunjungan.

## Penerbitan

1. Pastikan Node.js tersedia, lalu masuk ke akun Cloudflare melalui terminal:

   ```powershell
   npx wrangler login
   ```

2. Di `wrangler.toml`, isi `ALLOWED_ORIGINS` dengan origin situs yang sebenarnya (skema, domain, dan port saja). Jangan tambahkan `/index.html` atau garis miring di akhir: misalnya `http://127.0.0.1:5500`, bukan `http://127.0.0.1:5500/index.html`. Pisahkan beberapa origin dengan koma; tambahkan juga origin domain publik saat situs sudah diterbitkan.

3. Setiap kali mengubah `ALLOWED_ORIGINS`, terbitkan ulang Worker dari folder proyek:

   ```powershell
   npx wrangler deploy
   ```

   Alamat Worker akan terlihat pada keluaran perintah, dengan pola `https://mukander-portfolio-counter.<subdomain>.workers.dev`.

4. Di `site-content.js`, isi `services.visitorCounterEndpoint` dengan alamat Worker yang diakhiri `/api/visitors`, misalnya:

   ```js
   visitorCounterEndpoint: "https://mukander-portfolio-counter.<subdomain>.workers.dev/api/visitors",
   ```

5. Terbitkan ulang file situs statis. Setiap pemuatan halaman penuh pada salah satu dari tiga halaman akan menambah total; angka di kartu **04** pada Beranda menampilkan total terbaru.

Sebelum endpoint diisi dan situs diterbitkan ulang, kartu menampilkan tanda `—` dan konsol browser mencatat bahwa penghitung belum dikonfigurasi.
