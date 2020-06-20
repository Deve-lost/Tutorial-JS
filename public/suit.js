var tanya = true;

while(tanya) {
	// Menentukan pilihan player
	var player = prompt('Pilih : gajah, semut, orang')

	// Menangkap pilihan Computer
	var comp = Math.random()

	if (comp < 0.34) {
		comp = 'gajah'
	} else if(comp >= 0.34 && comp < 0.67) {
		comp = 'orang'
	} else {
		comp = 'semut'
	}


	// Tentukan siapa yang menang
	var hasil = ''
	if (player == comp) {
		hasil = 'Seri'
	} else if(player == 'gajah'){
		hasil = ( comp == 'orang') ? 'MENANG!' : 'KALAH!'
	} else if( player == 'orang') {
		hasil = ( comp == 'gajah') ? 'KALAH!' : 'MENANG!'
	} else if( player == 'semut') {
		hasil = ( comp == 'orang' ) ? 'KALAH!' : 'MENANG!'
	} else {
		hasil = 'memasukkan pilihan yang salah!'
	}

	// Tampilkan hasil ruls
	alert('Kamu memilih : '+ player + ' dan Komputer memilih : '+ comp + '\nMaka hasilnya : Kamu '+ hasil)

	tanya = confirm('Main lagi?')
}

alert('Terimakasih sudah bermain!')