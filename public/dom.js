// Dom Selection
// Get Element by id -> return element
// const judul = document.getElementById('judul')
// judul.style.color = 'red'
// judul.style.backgroundColor = 'black'
// judul.innerHTML = 'Developer'

// getElementByTagname -> html collection
// const p = document.getElementsByTagName('p')

// for(let i = 0; i < p.length; i++) {
// 	p[i].style.backgroundColor = 'grey'
// }

// className -> htmlcollection
// const p1 = document.getElementsByClassName('p1')[0]
// p1.innerHTML = 'Ini dirubah menggunakan JS'

// QuerySelector
// const p4 = document.querySelector('#b p')
// p4.style.color = 'green'
// p4.style.fontSize = '30px'

// const li2 = document.querySelector('section#b ul li:nth-child(2)')
// li2.style.backgroundColor = 'orange'

// QueryselectorAll
// const p = document.querySelectorAll('p')
// p[0].style.backgroundColor = 'green'

const sectionB = document.getElementById('b')
const p4 = sectionB.querySelector('p')
p4.style.backgroundColor = 'green'
