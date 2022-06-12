const reviews = [{
		id: 1,
		name: "Deckow Crist",
		job: "web developer",
		image: "https://via.placeholder.com/150/92c952",
		text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptates accusamus quia voluptatem consequatur atque? Vero autem asperiores velit quidem labore est, magni veritatis at inventore error. Laudantium, fuga ex?"
	},
	{
		id: 2,
		name: "Leanne Graham",
		job: "web developer",
		image: "https://via.placeholder.com/150/771796",
		text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptates accusamus quia voluptatem consequatur atque? Vero autem asperiores velit quidem labore est, magni veritatis at inventore error. Laudantium, fuga ex?"
	},
	{
		id: 3,
		name: "Romaguera Crona",
		job: "web developer",
		image: "https://via.placeholder.com/150/24f355",
		text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptates accusamus quia voluptatem consequatur atque? Vero autem asperiores velit quidem labore est, magni veritatis at inventore error. Laudantium, fuga ex?"
	},
	{
		id: 4,
		name: "Ervin Howell",
		job: "web developer",
		image: "https://via.placeholder.com/150/d32776",
		text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptates accusamus quia voluptatem consequatur atque? Vero autem asperiores velit quidem labore est, magni veritatis at inventore error. Laudantium, fuga ex?"
	},
	{
		id: 5,
		name: "Deckow Crist",
		job: "web developer",
		image: "https://via.placeholder.com/150/f66b97",
		text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptates accusamus quia voluptatem consequatur atque? Vero autem asperiores velit quidem labore est, magni veritatis at inventore error. Laudantium, fuga ex?"
	},
	{
		id: 6,
		name: "Clementine Bauch",
		job: "web developer",
		image: "https://via.placeholder.com/150/56a8c2",
		text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptates accusamus quia voluptatem consequatur atque? Vero autem asperiores velit quidem labore est, magni veritatis at inventore error. Laudantium, fuga ex?"
	},
	{
		id: 7,
		name: "Romaguera Jacobson",
		job: "web developer",
		image: "https://via.placeholder.com/150/b0f7cc",
		text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptates accusamus quia voluptatem consequatur atque? Vero autem asperiores velit quidem labore est, magni veritatis at inventore error. Laudantium, fuga ex?"
	},
	{
		id: 8,
		name: "Patricia Lebsack",
		job: "web developer",
		image: "https://via.placeholder.com/150/54176f",
		text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptates accusamus quia voluptatem consequatur atque? Vero autem asperiores velit quidem labore est, magni veritatis at inventore error. Laudantium, fuga ex?"
	},
	{
		id: 9,
		name: "Robel Corkery",
		job: "web developer",
		image: "https://via.placeholder.com/150/51aa97",
		text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptates accusamus quia voluptatem consequatur atque? Vero autem asperiores velit quidem labore est, magni veritatis at inventore error. Laudantium, fuga ex?"
	},
	{
		id: 10,
		name: "Chelsey Dietrich",
		job: "web developer",
		image: "https://via.placeholder.com/150/810b14",
		text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptates accusamus quia voluptatem consequatur atque? Vero autem asperiores velit quidem labore est, magni veritatis at inventore error. Laudantium, fuga ex?"
	},
]

const image = document.getElementById('auther-img')
const auther = document.getElementById('auther')
const job = document.getElementById('job')
const info = document.getElementById('info')

const nextBtn = document.querySelector('.next')
const randomBtn = document.querySelector('.random')
const prevBtn = document.querySelector('.prev')

let currentItem = 0

window.addEventListener('DOMContentLoaded', function () {
	showPerson()
})

function showPerson() {
	const item = reviews[currentItem]
	image.src = item.image
	auther.innerText = item.name
	job.innerText = item.job
	info.innerText = item.text
}

nextBtn.addEventListener('click', function () {
	currentItem++

	if (currentItem > reviews.length - 1) {
		currentItem = reviews.length - 1
		this.style.opacity = 0.3
		prevBtn.style.opacity = 1
	} else {
		this.style.opacity = 1
		prevBtn.style.opacity = 1
	}

	showPerson()
})

prevBtn.addEventListener('click', function () {
	currentItem--

	if (currentItem < 0) {
		currentItem = 0
		this.style.opacity = 0.3
		nextBtn.style.opacity = 1
	} else {
		this.style.opacity = 1
		nextBtn.style.opacity = 1
	}

	showPerson()
})

randomBtn.addEventListener('click', function () {
	currentItem = Math.floor(Math.random() * reviews.length)

	if (currentItem == reviews.length - 1) {
		nextBtn.style.opacity = 0.3
		prevBtn.style.opacity = 1
	} else if (currentItem == 0) {
		nextBtn.style.opacity = 1
		prevBtn.style.opacity = 0.3
	} else {
		nextBtn.style.opacity = 1
		prevBtn.style.opacity = 1
	}

	showPerson()
})