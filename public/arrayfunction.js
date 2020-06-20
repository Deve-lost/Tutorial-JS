var penumpang = []
var tambahPenumpang = function(namaPenumpang, penumpang) {
	// Jika angkot kosong
	if (penumpang.length == 0) {
		// Tambah Penumpang
		penumpang.push(namaPenumpang)
		// Kembalikan Nilai
		return penumpang
	} else {
		// Cek kursi kosong
		for(var i = 0; i < penumpang.length; i++) {
			// Jika ada kursi kosong
			if (penumpang[i] == undefined) {
				// Tambahkan penumpang di kursi kosong ini
				penumpang[i] = namaPenumpang
				// Kembalikan nilai
				return penumpang
			} 
			// jka nama penumpang duplicate
			else if (penumpang[i] == namaPenumpang) {
				// Tampilkan pesan
				console.log(namaPenumpang + ' Sudah ada di angkot')

				return penumpang
			}
			// Jika kursi penuh
			else if(i == penumpang.length - 1) {
				penumpang.push(namaPenumpang)

				// Kembalikan nilai
				return penumpang
			}
		}
	}
}

var hapusPenumpang = function (namaPenumpang, penumpang) {
	if (penumpang.length == 0) {
		console.log('Angkot kosong!')
	} else {
		for(var i = 0; i < penumpang.length; i++) {
			if (penumpang[i] == namaPenumpang) {
				penumpang[i] = undefined
			} else if (i == penumpang.length - 1) {
				console.log(namaPenumpang + 'Tidak ada di angkot!')
			}
			
			return penumpang
		}
	}

	return penumpang
}