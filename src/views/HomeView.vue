<template>
  <swiper :modules="modules" @slideChange="onSlideChange" :effect="'fade'" :pagination="{
    clickable: true,
  }">
    <HeaderComponent />
    <swiper-slide v-for="movie in newMovie" :key="movie.id">
      <div class="relative w-full h-full">
        <img :src="movie.poster_url" class="w-full h-full" :alt="movie.origin_name">
      </div>
      <div class="absolute h-full px-48 py-5 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/3">
        <div class="px-0 py-64">
          <h4 class="text-color-main">{{ movie.origin_name }}</h4>
          <h1 class="text-6xl font-semibold leading-tight">{{ movie.name }}
          </h1>
          <div class="flex items-center space-x-5 text-sm">
            <div class="space-x-2">
              <button class="py-0.5 px-1 bg-white border border-white text-dark font-bold">PG 18</button>
              <button class="py-0.5 px-1 font-bold border border-white">HD</button>
            </div>
            <p>Romance, Drama</p>
            <IconInfoComponent :icon="['far', 'calendar-days']" info="2021" />
            <IconInfoComponent :icon="['far', 'clock']" info="128 min" />
          </div>

          <div class="mt-10">
            <ButtonComponent :button="'Watch'" :icon="['fas', 'play']" class="text-lg" />
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import IconInfoComponent from '@/components/IconInfoComponent.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Pagination } from 'swiper/modules';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const onSlideChange = () => {
  console.log('slide change');
};
const newMovie = ref([]);

const modules = ref([EffectFade, Pagination]);

onMounted(async () => {
  try {
    const res = await axios.get('http://movie-admin.local/api/phim-banner', {
      headers: {
        'Authorization': '',
      }
    });
    newMovie.value = res.data;
  } catch (err) {
    console.log(err);
  }
  // axios.get('http://movie-admin.local/api/phim-banner', {
  //   headers: {
  //     'Authorization': 'Bearer 11|N684cAdTboPUyQHyVaJzgiR9KGrLHCt79vKx3DKQ842ae206',
  //   }
  // })
  //   .then((res) => {
  //     newMovie.value = res.data;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
});
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

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>