<template>
  <div class="bg-[url('/images/tr_movies_bg.jpg')]">
    <div class="container relative px-4 py-20 mx-auto overflow-x-auto lg:px-10" ref="scrollContainer">
      <div class="flex flex-col items-center justify-between mb-12 md:flex-row">
        <div class="mb-7 md:mb-0">
          <p class="text-xs text-center uppercase text-color-main md:text-left">Online streaming</p>
          <h1 class="text-4xl font-semibold">Upcoming Movies</h1>
        </div>
        <div class="space-x-2 mb-7 md:mb-0">
          <button-component :button="'Movies'" :active="activeButton === 'Movies'" @click="changeIcomming('Movies')" />
          <button-component :button="'TV-shows'" :active="activeButton === 'TV-shows'"
            @click="changeIcomming('TV-shows')" />
          <button-component :button="'Anime'" :active="activeButton === 'Anime'" @click="changeIcomming('Anime')" />
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
      <swiper :slidesPerView="1" :breakpoints="reponsiveBreakpoints()" :loop="true" :spaceBetween="30"
        class="coming-swiper" @swiper="onSwiperInit">
        <swiper-slide v-for="movie in movies" :key="movie.id">
          <div class="w-full">
            <img :src="movie.thumb_url" :alt="movie.origin_name" class="w-full rounded-lg">
          </div>
          <div class="py-6 pr-2">
            <div class="flex items-center justify-between gap-x-2">
              <h5 class="font-bold">{{ movie.name }}</h5>
              <span class="text-sm text-color-main">{{ movie.publish_year }}</span>
            </div>
            <div class="mt-2">
              <ul class="flex justify-between">
                <li><span class="px-2 text-xs font-bold uppercase border-2 border-white text-color-main">hd</span></li>
                <li class="space-x-4">
                  <IconInfoComponent :icon="['fas', 'clock']" :info="movie.episode_time" class="text-xs" />
                  <IconInfoComponent :icon="['fas', 'thumbs-up']" :info="'3.5'" class="text-xs" />
                </li>
              </ul>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import ButtonComponent from '../ButtonComponent.vue';
import IconInfoComponent from '../IconInfoComponent.vue';
import axios from '@/utils/axios.js';

const movies = ref([]);
const swiperInstance = ref(null);
const activeButton = ref('Movies');

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

const changeIcomming = async (type) => {
  activeButton.value = type
  try {
    let currentType;
    switch (type) {
      case 'TV-shows':
        currentType = 'phim-bo';
        break;
      case 'Movies':
        currentType = 'phim-le';
        break;
      case 'Anime':
        currentType = 'hoat-hinh';
        break;
    }
    const res = await axios.get(`http://movie-admin.local/api/danh-sach/${currentType}?total=10`);
    movies.value = res.data;
  } catch (error) {
    console.log(error);
  }
}
changeIcomming(activeButton.value);
const reponsiveBreakpoints = () => {
  return {
    '640': {
      slidesPerView: 1,
    },
    '768': {
      slidesPerView: 2,
    },
    '1024': {
      slidesPerView: 3,
    },
    '1280': {
      slidesPerView: 4,
    }
  }
};

</script>
