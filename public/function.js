function kubus(a, b) {
	// var hasil
	// var kubusA = a * a * a
	// var kubsB = b * b * b

	// hasil = kubusA + kubsB

	return a * a * a + b * b * b
}

// 2x2x2 = 8 5x5
console.log(kubus(8, 3))
console.log(kubus(10, 15))

// Sudo JavaScript
function tambah() {
	var jumlah = 0

	for(var i = 0; i < arguments.length; i++) {
		jumlah += arguments[i] 
	} 

	return jumlah
}

console.log(tambah(1,2,3,5))

// Refactoring -> sebuah proses untuk mengubah kode menjadi lebih baik
// Global scop / window scop
var wA = 1

function test() {
	var wB = 2
	console.log(wB)
}

test()

// Rekursif
// function angka(n) {
// 	// Base Case
// 	if (n === 0) {
// 		return
// 	}

// 	console.log(n)

// 	return angka(n-1)
// }

// angka(10)

// Faktorial
function faktorial(n) {
	if (n === 0) return 1;

	return n * faktorial(n-1)
}

console.log(faktorial(5))

console.log(coba)
var coba = function () {
	return 'Hello!'
}
