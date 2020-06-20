const container = document.querySelector('.container')
const imgOne = document.querySelector('.imgOne')
const thub = document.querySelectorAll('.thub')


container.addEventListener('click', function (e) {
	if (e.target.className == 'thub') {
		imgOne.src = e.target.src
		imgOne.classList.add('fade')

		setTimeout(function () {
			imgOne.classList.remove('fade')
		}, 500)

		thub.forEach(function (tub) {
			if (tub.classList.contains('active')) {
				tub.classList.remove('active')
			}
		})

		e.target.classList.add('active')
	}
})