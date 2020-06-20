function Mahasiswa(nama, energi) {
	this.nama = nama
	this.energi = energi
}

Mahasiswa.prototype.makan = function (porsi) {
	this.energi += porsi

	return `Hallo! ${this.nama}, selamat makan!`
}

Mahasiswa.prototype.main = function (jam) {
	this.energi -= jam

	return `Hallo! ${this.nama}, selamat bermain!`
}

Mahasiswa.prototype.kelas = 'XII RPL'
Mahasiswa.prototype.hobi = ['Ngoding','Blogging','Sport']

let dev = new Mahasiswa('Developer',10)