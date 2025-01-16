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
