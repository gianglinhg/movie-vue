<template>
  <RouterView />
</template>

<script setup>
import { provide, onMounted, ref } from 'vue'
import axios from '@/utils/axios.js';

const newMovie = ref([]);
provide('banners', newMovie);
onMounted(async () => {
  try {
    const res = await axios.get('http://movie-admin.local/api/phim-banner');
    newMovie.value = res.data;
  } catch (err) {
    console.log('ERROR', err);
  }
});

</script>