export const shuffleElements = el => {
  for (let i = el.children.length; i >= 0; i--) {
    el.appendChild(el.children[Math.random() * i | 0])
  }
}

export class Gallery {
  constructor(el, delay = 7500) {
    this.el = el
    this.delay = delay

    this.el.querySelectorAll('.js-gallery-item')[0].classList.add('is-active')
    const nextButton = document.querySelector('.js-gallery-next')
    nextButton.addEventListener('click', this.nextClicked)
    this.initInterval()
  }

  nextClicked = () => {
    clearInterval(this.intervalHandle)
    this.goToNextSlide()
    this.initInterval()
  }

  goToNextSlide = () => {
    const currentSlide = this.el.querySelector('.is-active')

    currentSlide.classList.remove('is-active')
    const nextEl = currentSlide.nextElementSibling
    const nextSlide = nextEl || this.el.querySelectorAll('.js-gallery-item')[0]

    if (currentSlide.dataset.theme) {
      document.body.classList.remove(`t-${currentSlide.dataset.theme}`)
    }

    if (nextSlide.dataset.theme) {
      document.body.classList.add(`t-${nextSlide.dataset.theme}`)
    }

    nextSlide.classList.add('is-active')
  }

  initInterval() {
    this.intervalHandle = setInterval(this.goToNextSlide, this.delay)
  }
}