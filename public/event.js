// const p2 = document.querySelector('.p2')

// function ubahWarna() {
// 	p2.style.backgroundColor = 'lightblue'
// 	p1.style.backgroundColor = 'lightblue'
// }

// const p1 = document.querySelector('.p1')
// p1.onclick = ubahWarna


// const p4 = document.querySelector('section#b p')
// p4.addEventListener('click', function () {
// 	const ul = document.querySelector('section#b ul')
// 	const li = document.createElement('li')
// 	const tLi = document.createTextNode('Item Baru')
// 	li.appendChild(tLi)
// 	ul.appendChild(li)
// })

//Events Handler
const p2 = document.querySelector('.p2')
// p2.onclick = function() {
// 	p2.style.backgroundColor = 'lightblue'
// }

// p2.onclick = function() {
// 	p2.style.color = 'red'
// }
// 

// Event Listeners
p2.addEventListener('click', function () {
	p2.style.backgroundColor = 'lightblue'
})

p2.addEventListener('click', function () {
	p2.style.color = 'red'
})