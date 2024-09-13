<template>
  <div>
    <div class="flex flex-col items-center justify-between mb-0 md:mb-10 md:flex-row">
      <div class="flex flex-col mb-2 md:mb-0">
        <a class="text-xs text-center uppercase cursor-pointer text-color-main md:text-left">Xem thêm</a>
        <h1 class="text-4xl font-bold text-center md:text-left">{{ typeMovie }}</h1>
      </div>
      <div class="space-x-2 mb-7 md:mb-0">
        <div
          class="hidden px-4 py-2 space-x-2 text-sm font-semibold border-2 rounded-full border-gray lg:inline-block hover:border-color-main">
          <button type="button" class="transition-all duration-500 hover:text-color-main" @click="swiperPrevSlide">
            <font-awesome-icon :icon="['fas', 'chevron-left']" />
          </button>
          <span class="font-extralight">|</span>
          <button type="button" class="transition-all duration-500 hover:text-color-main" @click="swiperNextSlide">
            <font-awesome-icon :icon="['fas', 'chevron-right']" />
          </button>
        </div>
      </div>
    </div>
    <swiper :slidesPerView="2" :breakpoints="reponsiveBreakpoints()" :loop="true" :spaceBetween="30"
      class="coming-swiper" @swiper="onSwiperInit">
      <swiper-slide v-for="movie in movies" :key="movie.id">
        <card-component :movie="movie" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
import CardComponent from './CardComponent.vue';
import { defineProps, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
defineProps({
  movies: {
    type: Array,
    required: true,
    default: null
  },
  typeMovie: {
    type: String,
    required: true,
    default: 'Movies'
  }
});

const swiperInstance = ref(null);

const swiperNextSlide = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext();
  }
};

const swiperPrevSlide = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev();
  }
};

const onSwiperInit = (swiper) => swiperInstance.value = swiper;

const reponsiveBreakpoints = () => {
  return {
    '768': {
      slidesPerView: 3,
    },
    '1024': {
      slidesPerView: 4,
    },
    '1280': {
      slidesPerView: 6,
    },
    '2000': {
      slidesPerView: 8,
    }
  }
};
</script>