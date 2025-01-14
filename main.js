import Swiper from 'swiper/bundle';
import { Fancybox } from "@fancyapps/ui";
import { Mask, MaskInput } from "maska"

import './sass/_app.scss';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import 'swiper/css/bundle';

new MaskInput("[data-maska]") // for masked input

Fancybox.bind("[data-fancybox]", {});