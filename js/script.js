// reckoning remaining days to display
const dDay = document.querySelector('.d-day')
const advDays = 25
const today = new Date()
let remainingDays = advDays - today.getDate()

dDay.innerHTML = remainingDays

// title text 'snowfalling'
const siteNameElement = document.querySelector('.site-name')
const siteName = 'CodePixy'

const letters = siteName.split('')

letters.forEach((letter, index) => {
  const letterElement = document.createElement('span')
  letterElement.textContent = letter
  siteNameElement.appendChild(letterElement)
  letterElement.style.animationDelay = `${index * 300}ms`
})

// footer text 'snowfalling'
const footerText = '© 2024 - CodePixy.com - All rights reserved'
const footerElement = document.querySelector('.footerText')

const footerElementLetters = footerText.split('')

footerElementLetters.forEach((letter, index) => {
    const footerTextEl = document.createElement('span')
    
    if (letter === ' ') {
        footerTextEl.innerHTML = '&nbsp;'
    } else {
        footerTextEl.textContent = letter
    }

    footerTextEl.style.animation = `fallAndBounce 3s ease-out forwards`
    footerTextEl.style.animationDelay = `${index * 350}ms`

    footerElement.appendChild(footerTextEl)
})

// snow animation
document.addEventListener("DOMContentLoaded", () => {
    const footerElement = document.querySelector("footer")
    const snowflakesContainer = document.createElement("div")
    snowflakesContainer.classList.add("snowflakes-container")
    document.body.appendChild(snowflakesContainer);

    footerElement.addEventListener("animationend", () => {
        snowflakesContainer.style.opacity = 1
        
        for (let i = 0; i < 10; i++) {
            const snowflake = document.createElement("div")
            snowflake.classList.add("snowflake")
            
            const randomX = Math.random() * 100
            const randomSize = Math.random() * 3 + 2
            
            snowflake.style.width = `${randomSize}px`
            snowflake.style.height = `${randomSize}px`
            snowflake.style.left = `${randomX}%`
            
            const randomDelay = Math.random() * 3
            const randomXMovement = Math.random() * 30 - 15
            
            snowflake.style.setProperty('--random-x', `${randomXMovement}vw`)
            snowflake.style.animationDelay = `${randomDelay}s`
            
            snowflakesContainer.appendChild(snowflake)
        }
    })
})