const ubahBg = document.getElementById('ubahBg')
ubahBg.addEventListener('click', function () {
	// document.body.style.backgroundColor = 'lightgreen'
	document.body.classList.toggle('biru-muda')
})

// Tambah Button
const randomColor = document.createElement('button')
const tButton = document.createTextNode('Random Warna')
randomColor.appendChild(tButton)
randomColor.setAttribute('type', 'button')
ubahBg.after(randomColor)

randomColor.addEventListener('click', function () {
	const r = Math.round(Math.random() * 255 + 1)
	const g = Math.round(Math.random() * 255 + 1)
	const b = Math.round(Math.random() * 255 + 1)

	document.body.style.backgroundColor = 'rgb('+ r +','+ g +', '+ b +')'
})

const sRed = document.querySelector('input[name=sRed]')
const sGreen = document.querySelector('input[name=sGreen]')
const sBlue = document.querySelector('input[name=sBlue]')

sRed.addEventListener('input', function () {
	const r = sRed.value
	const g = sGreen.value
	const b = sBlue.value
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
})

sGreen.addEventListener('input', function () {
	const r = sRed.value
	const g = sGreen.value
	const b = sBlue.value
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
})

sBlue.addEventListener('input', function () {
	const r = sRed.value
	const g = sGreen.value
	const b = sBlue.value
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
})

document.body.addEventListener('mousemove', function(e) {
	// Mouse Position
	const xPos = Math.round((e.clientX / window.innerWidth) * 255)
	const yPos = Math.round((e.clientY / window.innerHeight) * 255)
	const b = sBlue.value

	let cek = document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +','+ b +')'
})