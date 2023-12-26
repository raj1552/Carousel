const arrowBtn = document.querySelectorAll('.wrapper i')
const carousel = document.querySelector('.carousel')
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children]

let cardPreview = Math.round(carousel.offsetWidth / firstCardWidth)

carouselChildrens.slice(-cardPreview).reverse().forEach(card =>{
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML)
})

carouselChildrens.slice(-cardPreview).reverse().forEach(card =>{
    carousel.insertAdjacentHTML("beforeend", card.outerHTML)
})

arrowBtn.forEach(btn  => {
    btn.addEventListener('click', ()=>{
        carousel.scrollLeft += btn.id === 'left' ? - firstCardWidth : firstCardWidth;

    })
});

const infinityScroll = ()=>{
    if(carousel.scrollLeft === 0){
        carousel.classList.add('no-transition')
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth)
        carousel.classList.remove('no-transition')
    }
    else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
        carousel.classList.add('no-transition')
        carousel.scrollLeft = carousel.offsetWidth
        carousel.classList.remove('no-transition')
    }
}

carousel.addEventListener("scroll", infinityScroll)