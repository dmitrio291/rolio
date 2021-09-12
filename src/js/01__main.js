window.addEventListener('scroll', function() {
    let $header = document.querySelector('.header'),
        top = pageYOffset;
    if (top > 0) {
        $header.classList.add('--scroll');
    } else {
        $header.classList.remove('--scroll');
    }
});

function round() {
    let $round = document.querySelector('.header__round'),
        $wrapperLeft = document.querySelector('.header__wrapper').offsetLeft;
    return $round.style.left = $wrapperLeft + 'px';
}

round();

const topSlider = new Swiper('.swiper-container.top-slider__slider', {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.top-slider__slider .swiper-button-next',
        prevEl: '.top-slider__slider .swiper-button-prev'
    },
    pagination: {
        el: '.top-slider__slider .swiper-pagination',
        clickable: true,
        hashNavigation: true,
        renderBullet: function (index, className) {
            let productname = document.querySelectorAll('.swiper-slide')[index+1].dataset.productname;
            return `<span class="${className}">${(productname)}</span>`;
        }
    },
    on: {
        slideChangeTransitionEnd: function() {
            let modif = document.querySelector('.swiper-slide-active').dataset.modif,
                topSliderClasses = document.querySelector('.top-slider').classList;
            topSliderClasses.remove(topSliderClasses[1]);
            topSliderClasses.add(modif);
        }
    }
});

const testimonialsSlider = new Swiper('.swiper-container.testimonials__slider', {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 32,
    centeredSlides: true,
    slideToClickedSlide: true,
    navigation: {
        nextEl: '.testimonials__slider .swiper-button-next',
        prevEl: '.testimonials__slider .swiper-button-prev'
    }
});