const clickBtns = document.querySelectorAll('.click-btn')
const counterNumber = document.querySelector('#number')
let count = 0

clickBtns.forEach(function (btn) {
	btn.addEventListener('click', function (e) {
		const btnClasses = e.currentTarget.classList

		if (btnClasses.contains('decrease')) {
			count--
		} else if (btnClasses.contains('increase')) {
			count++
		} else if (btnClasses.contains('reset')) {
			count = 0
		}

		if (count > 0) {
			counterNumber.style.color = 'green'
		} else if (count < 0) {
			counterNumber.style.color = 'red'
		} else {
			counterNumber.style.color = 'black'
		}
		
		counterNumber.textContent = count
	})
})