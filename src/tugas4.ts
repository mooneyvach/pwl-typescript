function sapaan(param: string | number): string {
    if (typeof param === "string") {
        // Jika parameter adalah string
        return `Halo, ${param}`;
    } else {
        // Jika parameter adalah number
        return `Umur: ${param} tahun`;
    }
}

console.log(sapaan("Muni")); 
console.log(sapaan(16));  