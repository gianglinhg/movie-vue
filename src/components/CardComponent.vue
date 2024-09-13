<template>
  <div class="w-full">
    <div class="w-full h-[300px] md:h-[350px] xl:h-[400px]">
      <img :src="movie.thumb_url" :alt="movie.origin_name" class="object-cover w-full h-full rounded-lg">
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
            <icon-info-component :icon="['fas', 'clock']" :info="movie.episode_time" class="text-xs" />
            <icon-info-component :icon="['fas', 'thumbs-up']" :info="'3.5'" class="hidden text-xs md:inline-block" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';
import IconInfoComponent from './IconInfoComponent.vue';
defineProps({
  movie: {
    type: Object,
    required: true,
  }
});
</script>