import FastClick from 'fastclick'

// Fastclick
FastClick.attach(document.body)

// Mobile nav
document.querySelector('.js-toggle-nav').addEventListener('click', () => {
  document.querySelector('body').classList.toggle('is-clipped')
  document.querySelector('.js-mobile-nav').classList.toggle('is-open')
  document.querySelector('.js-hamburger').classList.toggle('is-open')
})