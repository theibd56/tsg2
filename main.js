import Swiper from 'swiper/bundle';
import { Fancybox } from "@fancyapps/ui";
import { Mask, MaskInput } from "maska"

import './sass/_app.scss';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import 'swiper/css/bundle';

new MaskInput("[data-maska]") // for masked input

Fancybox.bind("[data-fancybox]", {});


const script = document.createElement('script');
script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
script.type = "text/javascript";
document.head.appendChild(script);

script.onload = () => {
    ymaps.ready(init);

    function init() {
        const map = new ymaps.Map('map', {
            center: [55.030204, 82.920430],
            zoom: 10,
            controls: []
        });
    }
};


const hitSlider = new Swiper('.hit-slider .swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 600,
    loop: false,
    pagination: {
        el: '.hit-slider__pagination',
        clickable: true,
    },
})

const reviewSlider = new Swiper('.review-slider .swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 600,
    loop: false,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.review-slider__pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.review-navigation__next',
        prevEl: '.review-navigation__prev',
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 2.4,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 1.8,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1.2,
            spaceBetween: 10,
        }
    }
})

document.addEventListener('DOMContentLoaded', () => {
    function padZero(num) {
        return num < 10 ? '0' + num : num;
    }

    const targetDate = new Date("2025-02-31T00:00:00").getTime();

    function updateTimer() {
        const now = new Date().getTime();
        const remainingTime = targetDate - now;

        if (remainingTime <= 0) {
            document.getElementById("days-value").innerHTML = "00";
            document.getElementById("hours-value").innerHTML = "00";
            document.getElementById("minutes-value").innerHTML = "00";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById("days-value").innerHTML = padZero(days);
        document.getElementById("hours-value").innerHTML = padZero(hours);
        document.getElementById("minutes-value").innerHTML = padZero(minutes);
    }

    const interval = setInterval(updateTimer, 1000);

    updateTimer();
});

let productsSlider;

function initSlider() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 992 && !productsSlider) {
        // Инициализация слайдера
        productsSlider = new Swiper('.products-slider .swiper', {
            slidesPerView: 2.2,
            spaceBetween: 10,
            speed: 600,
            loop: false,
            pagination: {
                el: '.products-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2.2,
                    spaceBetween: 10,
                },
                576: {
                    slidesPerView: 1.6,
                    spaceBetween: 10,
                },
                320: {
                    slidesPerView: 1.1,
                    spaceBetween: 10,
                }
            }
        });
    } else if (screenWidth >= 992 && productsSlider) {
        // Уничтожаем слайдер и возвращаем сетку
        productsSlider.destroy(true, true);
        productsSlider = null;
    }
}

// Инициализация при загрузке
initSlider();

// Обработчик изменения размера окна
window.addEventListener('resize', initSlider);