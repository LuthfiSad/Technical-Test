# Technical Test

## Deskripsi Proyek
Proyek ini adalah aplikasi frontend yang dibangun menggunakan **React**, **TypeScript**, dan **Tailwind CSS**. Aplikasi ini menampilkan grafik yang memberikan representasi visual data pelanggan.

## Teknologi yang Digunakan
- **React**: Untuk membangun antarmuka pengguna.
- **TypeScript**: Untuk memberikan type checking dan meningkatkan kualitas kode.
- **Tailwind CSS**: Untuk styling dan layout yang responsif dan modern.
- **Vite**: Sebagai build tool untuk pengembangan dan produksi.

## Instalasi
1. Clone repositori ini:
   ```bash
   git clone https://github.com/LuthfiSad/Technical-Test.git
   cd repository
   ```
   
2. Instal dependensi:
   ```bash
   npm install
   ```

## Menjalankan Aplikasi
Untuk menjalankan aplikasi dalam mode pengembangan, gunakan perintah berikut:
```bash
npm run dev
```
Aplikasi akan tersedia di `http://localhost:5173` (atau port yang ditentukan oleh Vite).

## Skrip NPM
Berikut adalah skrip yang tersedia dalam `package.json`:
```json
"scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
}
```
- **dev**: Menjalankan aplikasi dalam mode pengembangan.
- **build**: Membangun aplikasi untuk produksi.
- **lint**: Memeriksa kode menggunakan ESLint.
- **preview**: Menampilkan aplikasi setelah build.

## Kontribusi
Silakan ajukan pull request jika Anda ingin berkontribusi pada proyek ini.
