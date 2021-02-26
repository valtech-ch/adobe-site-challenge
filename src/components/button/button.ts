import { h, render } from 'preact'

export default function button(el: HTMLButtonElement) {
  // Create your app
  const app = h('h1', null, 'Hello World!')

  // console.log(h, render)
  render(app, el)
}

window.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll<HTMLButtonElement>('.cmp-button')
  buttons.forEach((buttonElement) => button(buttonElement))
})
