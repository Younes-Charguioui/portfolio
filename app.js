const modal = document.getElementById('modal')

let tabImages = []
let index = 0

const bookiTechno = "- HTML<br>- Css<br>- Git<br>- Font Awesome"
const bookiDescription = "Construction d'un site web d'hébergement avec de simple language HTML et Css en reproduisant une maquette réalisé par un Web Designer.<br> Ma difficulté sur ce projet à était la disposition des éléments mais un bon cour sur la Flex-box avec CSS m'a grandement aidé.<br><br><a href='https://github.com/Younes-Charguioui/booki_website_charguioui_younes'>Lien vers le Github</a>"
const bookiImages = ["./images/booki/accueil.png","./images/booki/bas-page.png","./images/booki/tablette-acceuil.png","./images/booki/tablette-bas-page.png","./images/booki/mobile-accueil.png","./images/booki/mobile-middle.png","./images/booki/mobile-bas-page.png"]
const bruelTechno = "- HTML<br>- Css<br>- JavaScript<br>- Postman<br>- Git"
const bruelDescription = "Amélioration d'un site statique en un site dynamique avec un panel de gestion administrateur pour gérer l'ensemble des opérations possible.<br>Ici le point où j'ai passer le plus de temps est la requete HTTP et l'utilisation des données reçu. Je m'en suis sorti en utilisant la console avec JavaScript pour voir les données traité à chaque manipulation.<br><br><a href='https://github.com/Younes-Charguioui/Portfolio-architecte-sophie-bluel-master'>Lien vers le Github</a>"
const bruelImages = ["./images/sophie-bruel/accueil.png","./images/sophie-bruel/filtre-portfolio.png","./images/sophie-bruel/page-login.png","./images/sophie-bruel/page-login-error.png","./images/sophie-bruel/admin-acceuil.png","./images/sophie-bruel/admin-gestion-portfolio.png"]
const carducciTechno = "- Google Lighthouse<br>- Wave Accessibility<br>- SEO Schema.org<br>- JavaScript"
const carducciDescription = "[SEO] Diagnostic d'un site extremement non performant, avant de procéder à une optimisations sur toutes les images, et chargement pouvant bloquer l'affichage. Sans oublié le reférencement et la correction de la structure du code."
const carducciImages = ["./images/nina-carducci/accueil.png","./images/nina-carducci/portfolio.png","./images/nina-carducci/audit-no-optimized.png","./images/nina-carducci/audit-optimized.png"]
const kasaTechno = "- React<br>- Sass"
const kasaDescription = "Réalisation du Front-End d'un site de location d'hébergement avec React et Sass pour obtenir un site dynamique, performant et super ergonomique.<br><br><a href='https://github.com/Younes-Charguioui/kasa-app-charguioui-younes'>Lien vers le Github</a>"
const kasaImages = ["./images/kasa/accueil.png","./images/kasa/bas-page.png","./images/kasa/item.png","./images/kasa/item-second.png","./images/kasa/apropos.png","./images/kasa/apropos-colapse.png","./images/kasa/mobile-accueil.png","./images/kasa/mobile-item.png","./images/kasa/mobile-apropos.png"]
const menumakerTechno = "- Feedly<br>- Trello<br>- Word<br>- Powerpoint"
const menumakerDescription = "Organisation et gestion de la faisabilité d'un projet de développement d'une application web.<br>Mise en place d'une veille informationnelle avec Feedly.<br>Mise en place de la méthode CRUD pour la gestion de projet."
const menumakerImages = ["./images/menumaker/spec-technique.png","./images/menumaker/trello-tableau.png","./images/menumaker/trello-tache.png"]
const grimmoirTechno = "- Node.js<br>- MongoDB<br>- Postman<br>- UserId et Token"
const grimmoirDescription = "Mise en place d'une API comme Back-end d'un site web. Routes simple du CRUD (Create,Read,...) mais également plus pousser avec l'envoie de fichiers image, ou bien des routes protéger avec un token. Puis test avec le logiciel Postman."
const grimmoirImages = ["./images/grimmoir/getall.png","./images/grimmoir/rate-body.png","./images/grimmoir/rate-token.png"]


function previousImage(){
	if (index <= 0) return
	index--
	document.getElementById('js-portfolio-image').src = tabImages[index]
}

function nextImage() {
	if (index >= tabImages.length -1) return
	index++
	document.getElementById('js-portfolio-image').src = tabImages[index]
}

function changeElementModal(id) {
	const divTechnologie = document.getElementById('infos-techno')
	const divDescription = document.getElementById('infos-description')
	const divImage = document.getElementById('js-portfolio-image')

	document.querySelector('.js-carousel-next').addEventListener('click', nextImage)
	document.querySelector('.js-carousel-previous').addEventListener('click', previousImage)


	if (id === "booki") {
		divTechnologie.innerHTML = bookiTechno
		divDescription.innerHTML = bookiDescription
		tabImages = bookiImages
	} else if (id === "bruel") {
		divTechnologie.innerHTML = bruelTechno
		divDescription.innerHTML = bruelDescription
		tabImages = bruelImages
	} else if (id === "carducci") {
		divTechnologie.innerHTML = carducciTechno
		divDescription.innerHTML = carducciDescription
		tabImages = carducciImages
	} else if (id === "kasa") {
		divTechnologie.innerHTML = kasaTechno
		divDescription.innerHTML = kasaDescription
		tabImages = kasaImages
	} else if (id === "menumaker") {
		divTechnologie.innerHTML = menumakerTechno
		divDescription.innerHTML = menumakerDescription
		tabImages = menumakerImages
	} else if (id === "grimmoir") {
		divTechnologie.innerHTML = grimmoirTechno
		divDescription.innerHTML = grimmoirDescription
		tabImages = grimmoirImages
	}

	divImage.src = tabImages[0]
}

const openModal = (e) => {
	let target = e.target
	index = 0
	while (target.localName != "li") {
		target = target.parentElement
	}
	console.log(target.attributes.name.value)

	changeElementModal(target.attributes.name.value)

	e.preventDefault()
	modal.style.display = null
	modal.removeAttribute('aria-hidden')
	modal.setAttribute('aria-modal', 'true')
	modal.addEventListener('click', closeModal)
	modal.querySelector('.js-modal-close').addEventListener('click', closeModal)
	modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)
}

const closeModal = (e) => {
	if (modal === null) return
	e.preventDefault()
	modal.style.display = "none"
	modal.setAttribute('aria-hidden', 'true')
	modal.removeAttribute('aria-modal')
	modal.removeEventListener('click', closeModal)
	modal.querySelector('.js-modal-close').removeEventListener('click', stopPropagation)
	modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation)
}

const stopPropagation = (e) => { e.stopPropagation() }

document.querySelectorAll('.js-modal').forEach((e) => {
	e.addEventListener('click', openModal)
})

window.addEventListener('keydown', (e) => {
	if (e.key === "Escape" || e.key === "Esc") closeModal(e) 
})