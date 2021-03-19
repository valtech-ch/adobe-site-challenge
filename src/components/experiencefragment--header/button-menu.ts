window.addEventListener('DOMContentLoaded', () => {
  const buttonMenu = document.querySelector<HTMLButtonElement>('#button-menu')
  const navigationMain = document.querySelector<HTMLButtonElement>(
    '#navigation-main',
  )
  const experienceFragmentFooter = document.querySelector<HTMLButtonElement>(
    '.cmp-experiencefragment--footer',
  )

  buttonMenu.addEventListener('click', (e) => {
    if (navigationMain.classList.contains('visible') === true) {
      navigationMain.classList.remove('visible')
      experienceFragmentFooter.classList.remove('hidden')
    } else {
      navigationMain.classList.add('visible')
      experienceFragmentFooter.classList.add('hidden')
    }
  })
})
