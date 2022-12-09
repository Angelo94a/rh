const btn = document.querySelector('.btn')
const navMenu = document.querySelector('.nav__menu')

btn.addEventListener('click', () => {
	btn.classList.toggle('active')
	navMenu.classList.toggle('active')
})

document.querySelectorAll('nav__link').forEach((n) =>
	n.addEventListener('click', () => {
		btn.classList.remove('active')
		navMenu.classList.remove('active')
	})
)
