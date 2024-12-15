const dDay = document.querySelector('.d-day')
const siteNameElement = document.querySelector('.site-name')

const advDays = 25
const today = new Date()
let remainingDays = advDays - today.getDate()

dDay.innerHTML = remainingDays

const siteName = 'CodePixy'

const letters = siteName.split('');

letters.forEach((letter, index) => {
  const letterElement = document.createElement('span')
  letterElement.textContent = letter
  siteNameElement.appendChild(letterElement)
  letterElement.style.animationDelay = `${index * 300}ms`
})