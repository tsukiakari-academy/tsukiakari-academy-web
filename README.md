# Tsukiakari Academy
Repository for Tsukiakari Academy


### Ingin kontribusi? Berikut langkahnya!
1. Fork Repository ini
2. Clone Repository hasil fork anda
```sh
git clone https://github.com/{username-anda}/tsukiakari-academy-web
```
3. Tambahkan upstream pada hasil clone tersebut
```sh
git remote add upstream https://github.com/tsukiakari-academy/tsukiakari-academy-web.git
```
4. Install dependencies
```sh
npm install
```

5. Jalankan projek (akan berjalan di localhost:8000)
```sh
npm run develop
```

### Berikut langkah-langkah yang wajib dilakukan dalam proses kontribusi
1. Selalu pull upstream setiap ingin memulai mengembangkan
```sh
git pull upstream master
```
2. Buat branch baru pada setiap fitur yang dikembangkan. Contoh:
```sh
git branch feature/add-login // Contoh saat membuat branch untuk fitur baru
git branch bug/fix-menu // Contoh saat membuat branch untuk fix bug
```
3. Setiap selesai, push ke repo hasil fork anda
```sh
git push origin {nama-branch}
```
4. Jika sudah siap untuk dibawa ke repository utama. Lakukanlah Pull Request dari branch anda ke branch `master`. Sebelum pull request pastikan branch sudah bersih. Jika ada conflict silahkan perbaiki conflict tersebut. Pastikan buat judul dan deskripsi yang baik agar mudah dipahami!
5. Semangat!!!

License
----

MIT