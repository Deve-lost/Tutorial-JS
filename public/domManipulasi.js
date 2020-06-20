// DOM Manipulasi Part 1

// const judul = document.getElementById('judul')
// judul.innerHTML = '<em>DEVELOPER</em>'

// const sectionA = document.querySelector('section#a')
// sectionA.innerHTML = 'Hello Wolrd!'

// const judul = document.querySelector('#judul')
// judul.style.color = 'lightblue'
// 

// const judul = document.getElementsByTagName('h1')[0]
// judul.setAttribute('name', 'Quin')

// const link = document.querySelector('section#a a')


// const p2 = document.querySelector('.p2')

// DOM Manipulasi Part 2

const pBaru = document.createElement('p')
const tBaru = document.createTextNode('Hello dev-ops')

// Gabungkan
pBaru.appendChild(tBaru)

// Simpan node ke node
const sectionA = document.getElementById('a')
sectionA.appendChild(pBaru)

const liBaru = document.createElement('li')
const tliBaru = document.createTextNode('Item Baru')
liBaru.appendChild(tliBaru)

const ul = document.querySelector('section#b ul')
const li = ul.querySelector('li:nth-child(2)')

ul.insertBefore(liBaru, li)

// Remove
const link	= document.getElementsByTagName('a')[0]
sectionA.removeChild(link)

const sectionB = document.getElementById('b')
const p4 = sectionB.querySelector('p')

const h2Baru = document.createElement('h2')
const tH2Baru = document.createTextNode('Judul Baru woy!')

h2Baru.appendChild(tH2Baru)

sectionB.replaceChild(h2Baru, p4)