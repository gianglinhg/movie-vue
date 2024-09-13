<template>
  <section class="bg-[url('/images/tr_movies_bg.jpg')] py-5 md:py-15 px-4 space-y-5">
    <film-type-component :movies="movies1" :typeMovie="'Phim chiếu rạp mới'" />
    <film-type-component :movies="movies2" :typeMovie="'Phim bộ mới'" />
    <film-type-component :movies="movies3" :typeMovie="'Phim lẻ mới'" />
    <film-type-component :movies="movies4" :typeMovie="'Phim hoạt hình mới'" />
  </section>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import FilmTypeComponent from '../FilmTypeComponent.vue';
import axios from '@/utils/axios.js';

const movieData = ref([]);
const movies1 = ref([]);
const movies2 = ref([]);
const movies3 = ref([]);
const movies4 = ref([]);

onMounted(async () => {
  const api1 = axios.get('/danh-sach/chieu-rap?total=16');
  const api2 = axios.get('/danh-sach/phim-bo?total=16');
  const api3 = axios.get('/danh-sach/phim-le?total=16');
  const api4 = axios.get('/danh-sach/hoat-hinh?total=16');

  Promise.all([api1, api2, api3, api4])
    .then((responses) => {
      movieData.value = responses.map(response => response.data)
      movies1.value = movieData.value[0];
      movies2.value = movieData.value[1];
      movies3.value = movieData.value[2];
      movies4.value = movieData.value[3];
    })
    .catch(error => {
      console.error('Error fetching movie data:', error);
    })
    .finally(() => {
      // loading.value = false; // Tắt loading khi API hoàn thành
    });
});

</script>
