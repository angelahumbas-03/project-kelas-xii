// Meminta input nama dan nilai siswa
let nama = prompt("Masukkan nama siswa:");
let inputNilai = prompt("Masukkan nilai siswa (0-100):");
let nilai = Number(inputNilai);
let kategori = "";

// Validasi agar input tidak kosong dan merupakan angka valid (0-100)
if (inputNilai === null || inputNilai.trim() === "" || isNaN(nilai) || nilai < 0 || nilai > 100) {
    kategori = "Nilai tidak valid (masukkan angka 0 - 100)";
} else if (nilai >= 90) {
    kategori = "Sangat Baik";
} else if (nilai >= 80) {
    kategori = "Baik";
} else if (nilai >= 75) {
    kategori = "Cukup";
} else {
    kategori = "Perlu Bimbingan";
}

// Menampilkan hasil menggunakan alert
alert("Nama Siswa: " + nama + "\nNilai: " + nilai + "\nKategori: " + kategori);
