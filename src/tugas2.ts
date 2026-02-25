interface Buku {
    judul: string;
    pengarang: string;
    tahunTerbit: number;
    tersedia: boolean;
}

const buku1: Buku = {
    judul: "Pemrograman Web Modern",
    pengarang: "Andi Susanto",
    tahunTerbit: 2023,
    tersedia: true
};

const buku2: Buku = {
    judul: "TypeScript untuk Pemula",
    pengarang: "Budi Pratama",
    tahunTerbit: 2024,
    tersedia: false
};

function tampilkanBuku(buku: Buku): void {
    console.log("=== INFORMASI BUKU ===");
    console.log(`Judul       : ${buku.judul}`);
    console.log(`Pengarang   : ${buku.pengarang}`);
    console.log(`Tahun Terbit: ${buku.tahunTerbit}`);
    console.log(`Tersedia    : ${buku.tersedia ? "Ya" : "Tidak"}`);
    console.log("----------------------");
}

tampilkanBuku(buku1);
tampilkanBuku(buku2);