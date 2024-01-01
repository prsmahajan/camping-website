// Show menu
const navMenu = document.querySelector('.nav-menu')
const navToggle = document.querySelector('#nav-toggle')
const navClose = document.querySelector('#nav-close')

// Menu show----Validate if constant exists
if (navToggle) {
    navToggle.addEventListener('click', _ => {
        if (!navMenu.classList.contains(' ')) {
            navMenu.style.top = 0
        }
    })
}

// Menu hidden----Validate if constant exists
if (navClose) {
    navClose.addEventListener('click', _ => {
        if (!navMenu.classList.contains(' ')) {
            navMenu.style.top = '-100%'
        } else {
            return true
        }
    })
}