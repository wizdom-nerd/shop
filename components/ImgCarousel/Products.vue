<template>
  <h2 class="carousel__title">{{ title }}</h2>
  <Swiper :modules="modules" :slides-per-view="2.42" :space-between="20">
    <SwiperSlide v-for="img in images" :key="img.id">
      <img :src="img.img" alt="img" />
      <h3>{{ img.name }}</h3>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const props = defineProps({
  title: {
    type: String,
  },
  images: {
    type: Array,
  },
});
</script>

<style lang="scss" scoped>
.carousel__title {
  color: black;
}
h3 {
  font-size: 12px;
  text-align: center;
  color: #535353;
}
h2 {
  font-family: "SF Pro Display", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #000;
}
</style>