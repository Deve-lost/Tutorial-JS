// Hapus Card
// const cards = document.querySelectorAll('.card')
// const hCards = document.querySelectorAll('.close')

// for(let i = 0; i < hCards.length; i++) {
// 	hCards[i].addEventListener('click', function (e) {
// 		// hCards[i].parentElement.style.display = 'none'
// 		e.target.parentElement.style.display = 'none'
// 	})
// }

// hCards.forEach(function (el) {
// 	addEventListener('click', function (e) {
// 		e.target.parentElement.style.display = 'none'
// 		e.preventDefault()
// 	})
// })

const container = document.querySelector('.container')

container.addEventListener('click', function(e) {
	if (e.target.className == 'close') {
		e.target.parentElement.style.display = 'none'
	}
})
