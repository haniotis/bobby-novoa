import Packery from 'packery'

const pckry = new Packery('.js-work-list', {
  itemSelector: '.js-work-list-item'
})

pckry.on('layoutComplete', (event, items) => {
  document.querySelector('.js-work-list').opacity = 1
})