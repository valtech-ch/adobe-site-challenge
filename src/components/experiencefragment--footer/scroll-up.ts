window.addEventListener('DOMContentLoaded', () => {
    const buttonScroll = document.querySelector<HTMLButtonElement>('#scroll-up')

    buttonScroll.addEventListener('click', (e) => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    })
})