const slides = [
	{
		"image": "slide0.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide1.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



let dots = document.querySelector(".dots")
for (let i = 0; i < slides.length; i++) {
	let div = document.createElement("div");
	dots.appendChild(div)
	div.classList.add("dot")
	let number = `point${i}`
	div.classList.add(number)
}
let pointEnCours = document.querySelector(".point0")
pointEnCours.classList.add("dot_selected")

const bannerImg = document.querySelector(".banner-img")

let arrowRight = document.querySelector("#banner .arrow_right");
console.log(arrowRight);
let arrowLeft = document.querySelector("#banner .arrow_left");
console.log(arrowLeft);
let index = 0;
const punchline = document.querySelector("#banner p")
let tagline0 = "Impressions tous formats <span>en boutique et en ligne</span>"
let tagline1 = "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
let tagline2 = "Grand choix de couleurs <span>de CMJN aux pantones</span>"
let tagline3 = "Autocollants <span>avec découpe laser sur mesure</span>"
const taglines = [tagline0, tagline1,tagline2,tagline3,]
arrowRight.addEventListener("click", () => {
	console.log("Vous avez cliqué sur le bouton droit ")
	console.log(index)

	pointEnCours = document.querySelector(`.point${index}`)
	pointEnCours.classList.remove("dot_selected")
	console.log(`removed dot ${index}`)
	index++
	if (index === slides.length) {
		index = 0
		pointEnCours = document.querySelector(`.point${index}`)
		pointEnCours.classList.remove("dot_selected")
		console.log(`fin de cycle${index}`)

	}
	console.log(index)
	pointEnCours = document.querySelector(`.point${index}`)
	pointEnCours.classList.add("dot_selected")
	bannerImg.src = `assets/images/slideshow/slide${index}.jpg`;
	punchline.innerHTML = taglines[index]


});
arrowLeft.addEventListener("click", () => {
	console.log("Vous avez cliqué sur le bouton gauche ")
	pointEnCours = document.querySelector(`.point${index}`)
	pointEnCours.classList.remove("dot_selected")
	index--
	if (index < 0) {
		index = slides.length - 1
		pointEnCours = document.querySelector(`.point${index}`)
		pointEnCours.classList.remove("dot_selected")
	}
	pointEnCours = document.querySelector(`.point${index}`)
	pointEnCours.classList.add("dot_selected")
	bannerImg.src = `assets/images/slideshow/slide${index}.jpg`;
    let tagline = `slide${index}.tagline`
	punchline.innerHTML = tagline
});
