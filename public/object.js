// // Literal
// var mhs = {
// 	nama : 'Developer',
// 	umur : 19,
// 	ips : [2.90,2.80,3.89,2.87],
// 	alamat : {
// 		jalan : 'Tasikmalaya - Singaparna',
// 		kota : 'Tasikmalaya',
// 		provinsi : 'Jawa Barat'
// 	}
// }

// var mhs2 = {
// 	nama : 'Develost',
// 	umur : 14,
// 	ips : [2.90,2.90,3.89,2.90],
// 	alamat : {
// 		jalan : 'Tasikmalaya - Spa',
// 		kota : 'Tasikmalaya Kota',
// 		provinsi : 'Jawa Barat'
// 	}
// }

// // Function Declaration
// function buatObjectMahasiswa(nama,nrp,email,jurusan) {
// 	var mhs = {}
// 	mhs.nama = nama
// 	mhs.nrp = nrp
// 	mhs.email = email
// 	mhs.jurusan = jurusan

// 	return mhs
// }

// var mhs3 = buatObjectMahasiswa('Neko Suki','1234567','neko@gmail.com','Informatika')

// // Constructor
// function Mahasiswa(nama,nrp,email,jurusan) {
// 	this.nama = nama
// 	this.nrp = nrp
// 	this.email = email
// 	this.jurusan = jurusan
// }

// var mhs4 = new Mahasiswa('Asep','128328723','asep@gmail.com','Otomotif')

// function Hallo() {
// 	console.log('Hallo Dev!')
// }

// new Hallo()


// This
// console.log(this)
// 

// Declaration
// function hallo() {
// 	console.log(this)
// }

// hallo()
// 

// Literal
// var obj = {}
// obj.halo = function () {
// 	console.log(this)
// 	console.log('Hallo devops!')
// }

// obj.halo()
// This Mengembalikan obj yang bersangkutan
// 

// Constructor
function Hallo() {
	console.log(this)
	console.log('Hallow!')
}

new Hallo()

// This mengembalikan obj yang baru dibuat