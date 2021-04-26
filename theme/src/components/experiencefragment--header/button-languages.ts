window.addEventListener('DOMContentLoaded', () => {
    const languageMenu = document.querySelector<HTMLButtonElement>(
        '.cmp-languagenavigation',
    )
    const languageButton = document.querySelector<HTMLButtonElement>('.cmp-languagenavigation__item--active')

    languageButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (languageMenu.classList.contains('languagenavigation--open') === true) {
            languageMenu.classList.remove('languagenavigation--open')
        } else {
            languageMenu.classList.add('languagenavigation--open')
        }
    })
})