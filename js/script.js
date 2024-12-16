const dDay = document.querySelector('.d-day')
const siteNameElement = document.querySelector('.site-name')

const advDays = 25
const today = new Date()
let remainingDays = advDays - today.getDate()

dDay.innerHTML = remainingDays

const siteName = 'CodePixy'

const letters = siteName.split('')

letters.forEach((letter, index) => {
  const letterElement = document.createElement('span')
  letterElement.textContent = letter
  siteNameElement.appendChild(letterElement)
  letterElement.style.animationDelay = `${index * 300}ms`
})

const footerText = '© 2024 - CodePixy.com - All rights reserved'
const footerElement = document.querySelector('.footerText')

const footerElementLetters = footerText.split('')

footerElementLetters.forEach((letter, index) => {
    const footerTextEl = document.createElement('span');
    
    if (letter === ' ') {
        footerTextEl.innerHTML = '&nbsp;'
    } else {
        footerTextEl.textContent = letter
    }

    footerTextEl.style.animation = `fallAndBounce 2s ease-out forwards`
    footerTextEl.style.animationDelay = `${index * 100}ms`

    footerElement.appendChild(footerTextEl)
})
