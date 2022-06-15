const bars = document.getElementById('mobile-bars')
const mobileNav = document.getElementById('mobile-nav')
const closeNav = document.getElementById('mobile-close-btn')

bars.addEventListener('click', () => {
    mobileNav.classList.toggle('show')
})

closeNav.addEventListener('click', () => {
    mobileNav.classList.remove('show')
})


const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 20,
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});