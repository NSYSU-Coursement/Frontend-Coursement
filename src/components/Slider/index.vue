<template>
<swiper
  :modules="modules"
  :pagination="{ clickable: true }"
  :autoplay="{ delay: 3000 }"
  @swiper="onSwiper"
  @slideChange="onSlideChange"
>
  <swiper-slide><img src="@/assets/images/slider.png"></swiper-slide>
  <swiper-slide><img src="@/assets/images/slider-test1.png"></swiper-slide>
  <swiper-slide><img src="@/assets/images/slider-test2.png"></swiper-slide>
</swiper>

</template>

<script setup>
  // import Swiper core and required modules
  import { Pagination, Autoplay } from 'swiper/modules';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/autoplay';
  const modules = [Pagination, Autoplay];
</script>