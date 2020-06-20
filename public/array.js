// Manipulasi Array

// Manmbahkan array
// var arr = []
// arr[0] = 'Develost'
// arr[1] = 'Jquin'
// arr[2] = 'Neko'
// console.log(arr)

// Hapus Array
// var arr = ['Develost','Jquin',true,1]
// arr[1] = undefined
// console.log(arr)
// 

// Read
// var arr = ['Develost','Jquin',true,1]

// for(var i = 0; i < arr.length; i++) {
// 	console.log('Mahasiswa No. ' + (i+1) + arr[i])
// }
// 
// Method
var arr = ['Develost','Jquin',true,1,'Quin','Semen']
// arr.push('Jalil','Dandi','Fikri') // Tambah Array Akhir
// arr.pop() // Hapus Array Akhir
// arr.unshift('Nekoma','Ajeng','Doni') // Tambah Array Awal
// arr.shift() // Hapus array awal

// arr.splice(2, 0, 'Kania','Dinda') // Menambah, menghapus di tengah tergantung index
var arr2 = arr.slice(1,3)

console.log(arr.join(' - '))
console.log(arr2.join(' - '))

// Foreach
var angka = [1,2,3,4,5,6,7,8,22,13,16]

angka.forEach(function (e) {
	console.log(e)
})

var nama = ['Quin','Melvi','Melda','Dea']

nama.forEach(function(e, i) {
	console.log('Mahasiswa No. '+ (i + 1) + ' Adalah '+ e)
})

// Map
var angka2 = angka.map(function (e) {
	return e * 2
})

console.log(angka2.join())

// Short
angka.sort(function(a,b) {
	return a-b
}) // Mengurutkan A-Z
console.log(angka.join(' - '))

// Filter Dan Find
var bilangan  = [1,2,3,4,20,5,6,7,8,9]
var bilangan2 = bilangan.filter(function (j) {
	return j > 5
})

var bilangan3 = bilangan.find(function (x) {
	return x > 5
})

console.log(bilangan2.join(' - '))
console.log(bilangan3)