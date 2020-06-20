var bintang = '';

for(var i = 10; i > 0; i--) {
	for(c = 0; c < i; c++) {
		bintang += '*';
	}

	bintang += '\n';
}

console.log(bintang)

// for(var i = 0; i < 22; i++) {
// 	bintang += '*';
// 	console.log(bintang)
// }