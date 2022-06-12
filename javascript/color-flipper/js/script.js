const simpleColors = ['red', 'green', 'rgba(133, 122, 200, 1)', '#f15025']
const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'E', 'F']

const simpleBtn = document.getElementById('simple-color-btn')
const hexBtn = document.getElementById('hex-color-btn')
const color = document.querySelector('.color')

simpleBtn.addEventListener('click', function () {
	const randomNumber = getRandomNumberSimple();

	changeBackground(simpleColors[randomNumber])

	changeColorText(simpleColors[randomNumber])
})

hexBtn.addEventListener('click', function () {
	let hexColor = '#'

	for (let i = 0; i < 6; i++) {
		hexColor += hexColors[getRandomNumberHex()]
	}

	changeBackground(hexColor)

	changeColorText(hexColor)
})

function getRandomNumberSimple() {
	return Math.floor(Math.random() * simpleColors.length)
}

function getRandomNumberHex() {
	return Math.floor(Math.random() * hexColors.length)
}

function changeBackground(bgColor) {
	document.body.style.backgroundColor = bgColor
}

function changeColorText(colorText) {
	color.textContent = colorText
}