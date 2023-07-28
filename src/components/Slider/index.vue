<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: false }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide><img class="bg-cover" src="@/assets/images/slider.png"></swiper-slide>
    <swiper-slide><img class="bg-cover" src="@/assets/images/slider-test1.png"></swiper-slide>
    <swiper-slide><img class="bg-cover" src="@/assets/images/slider-test2.png"></swiper-slide>
    ...
  </swiper>
</template>
<script>
  // import Swiper core and required modules
  import { Pagination, Zoom, Autoplay } from 'swiper/modules';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/zoom';
  import 'swiper/css/autoplay';

  // Import Swiper styles
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Pagination, Zoom, Autoplay ],
      };
    },
  };
</script>