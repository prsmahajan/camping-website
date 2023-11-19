// Show menu
const navMenu = document.getEtementById('nav—menu')
const navToggle = document.getEIementById('nav—toggle')
const navClose = document.getElementByIdC('nav—close')

// Menu show----Validate if constant exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show—menu')
    })
}

// Menu hidden----Validate if constant exists
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show—menu')
    })
}