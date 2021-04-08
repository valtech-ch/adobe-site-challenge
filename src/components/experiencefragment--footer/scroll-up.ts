window.addEventListener('DOMContentLoaded', () => {
    const buttonScroll = document.querySelector<HTMLButtonElement>('#scroll-up')

    buttonScroll.addEventListener('click', (e) => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    })
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            buttonScroll.style.display = "block";
        } else {
            buttonScroll.style.display = "none";
        }
    }
})