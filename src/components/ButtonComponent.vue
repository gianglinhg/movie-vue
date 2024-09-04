<template>
  <button
    class="text-sm px-8 py-2 font-semibold rounded-full border-2 border-color-main hover:text-dark hover:bg-color-main duration-500 transition-all">
    <font-awesome-icon :icon="icon" class="mr-0.5" /> <span class="">{{ button
      }}</span></button>
</template>
<script setup>
import { defineProps } from 'vue'
defineProps({
  button: {
    type: String,
    required: true,
  },
  icon: {
    type: Array,
  }
});
</script>