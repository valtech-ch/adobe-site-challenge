window.addEventListener('DOMContentLoaded', () => {
  const body = document.body
  const header = document.querySelector<HTMLButtonElement>(
    '.cmp-experiencefragment--header',
  )
  const buttonMenu = document.querySelector<HTMLButtonElement>('#button-menu')

  buttonMenu.addEventListener('click', (e) => {
    if (header.classList.contains('navigation-mobile--open') === true) {
      header.classList.remove('navigation-mobile--open')
      body.classList.remove('overflow-hidden')
    } else {
      header.classList.add('navigation-mobile--open')
      body.classList.add('overflow-hidden')
    }
  })
})
