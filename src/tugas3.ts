class Lingkaran {
    jariJari: number;

    constructor(r: number) {
        this.jariJari = r;
    }

    hitungLuas(): number {
        return Math.PI * this.jariJari * this.jariJari;
    }
}

const bundaran = new Lingkaran(10);
console.log(`Luas lingkaran dengan jari-jari ${bundaran.jariJari} adalah: ${bundaran.hitungLuas()}`);
