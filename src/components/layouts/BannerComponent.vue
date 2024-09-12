<template>
  <swiper :modules="modules" @slideChange="onSlideChange" :speed="2000" :effect="'fade'"
    :autoplay="{ delay: 5000, disableOnInteraction: false }" :pagination="{ clickable: true, }" @swiper="onSwiper"
    class="w-full h-full">
    <swiper-slide v-for="movie in banners" :key="movie.id">
      <div class="relative w-full h-full">
        <img :src="movie.poster_url" class="block object-cover w-full h-full" :alt="movie.origin_name">
      </div>
      <div
        class="absolute h-full max-w-5xl py-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 md:left-1/3 top-2/3">
        <Transition name="bounce">
          <div class="w-screen h-full px-10 py-64 leading-5 md:w-full" v-if="show">
            <h4 class="text-sm text-color-main md:text-base xl:text-xl">{{ movie.origin_name }}</h4>
            <h1 class="text-4xl font-semibold md:text-6xl 2xl:text-7xl">{{ movie.name }}</h1>
            <div
              class="flex flex-col w-full mt-2 space-x-0 text-sm md:items-center md:text-base xl:text-xl md:space-x-5 md:flex-row">
              <div class="flex space-x-2">
                <button class="py-0.5 px-1 bg-white border border-white text-dark font-bold">{{ movie.language
                  }}</button>
                <button class="py-0.5 px-1 font-bold border border-white">{{ movie.quality }}</button>
              </div>
              <div class="flex-1">
                <p class="mr-2">{{ movie.categories_name }}</p>
                <div class="flex w-full gap-x-2">
                  <icon-info-component :icon="['far', 'calendar-days']" :info="movie.publish_year.toString()" />
                  <icon-info-component :icon="['far', 'clock']" :info="movie.episode_time" />
                </div>
              </div>
            </div>

            <div class="mt-5">
              <button-component :button="'Watch'" :icon="['fas', 'play']" class="text-lg" />
            </div>
          </div>
        </Transition>

      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { ref, inject } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

import ButtonComponent from '../ButtonComponent.vue';
import IconInfoComponent from '../IconInfoComponent.vue';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const show = ref(false);
const modules = ref([EffectFade, Pagination, Autoplay]);
const banners = inject('banners');

const onSlideChange = () => {
  show.value = false;
  setTimeout(() => {
    show.value = true;
  }, 1000);
};

const onSwiper = () => onSlideChange();

</script>

<style>
#app {
  height: 100%;
}

html,
body {
  position: relative;
  height: 100%;
}

.bounce-enter-active,
.bounce-leave-active {
  transition: transform 2s;
}

.bounce-enter-from,
.bounce-leave-to {
  transform: translateX(100px);
  opacity: 0;
}

.bounce-enter-to,
.bounce-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>