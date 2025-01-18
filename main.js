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
