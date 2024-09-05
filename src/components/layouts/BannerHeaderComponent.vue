<template>
  <swiper :modules="modules" @slideChange="onSlideChange" :speed="2000" :effect="'fade'" :pagination="{
    clickable: true,
  }" class="w-full h-full">
    <HeaderComponent @open="openDrawer" />
    <swiper-slide v-for="movie in banners" :key="movie.id">
      <div class="relative w-full h-full">
        <img :src="movie.poster_url" class="block object-cover w-full h-full" :alt="movie.origin_name">
      </div>
      <div
        class="absolute h-full max-w-6xl px-48 py-5 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:top-2/3 lg:left-1/3">
        <div class="w-screen h-full px-5 py-64 leading-5 md:w-full">
          <h4 class="text-color-main">{{ movie.origin_name }}</h4>
          <h1 class="text-4xl font-semibold md:text-6xl lg:text-8xl">{{ movie.name }}</h1>
          <div class="flex flex-col items-start mt-2 space-x-0 text-sm md:space-x-5 md:items-center md:flex-row">
            <div class="space-x-2">
              <button class="py-0.5 px-1 bg-white border border-white text-dark font-bold">PG 18</button>
              <button class="py-0.5 px-1 font-bold border border-white">HD</button>
            </div>
            <div class="flex">
              <p class="mr-2">Romance, Drama</p>
              <div class="flex flex-row w-32 gap-x-2">
                <IconInfoComponent :icon="['far', 'calendar-days']" info="2021" />
                <IconInfoComponent :icon="['far', 'clock']" info="128 min" />
              </div>
            </div>
          </div>

          <div class="mt-10">
            <ButtonComponent :button="'Watch'" :icon="['fas', 'play']" class="text-lg" />
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
  <Drawer :is-open="isDrawerOpen" :speed="500" :maxWidth="'350px'" @close="closeDrawer">
    <MenuComponent @close="closeDrawer" />
  </Drawer>
</template>

<script setup>
import { ref, inject } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Pagination } from 'swiper/modules';

import Drawer from "../DrawerComponent.vue";
import HeaderComponent from './HeaderComponent.vue';
import ButtonComponent from '../ButtonComponent.vue';
import IconInfoComponent from '../IconInfoComponent.vue';
import MenuComponent from '../MenuComponent.vue';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const isDrawerOpen = ref(false);

const onSlideChange = () => console.log('slide change');
const openDrawer = () => isDrawerOpen.value = true;
const closeDrawer = () => isDrawerOpen.value = false;

const modules = ref([EffectFade, Pagination]);
const banners = inject('banners');
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
</style>