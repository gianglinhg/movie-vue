<template>
  <p><span><font-awesome-icon :icon="icon" class="text-color-main" /></span> {{ info }}</p>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
  icon: {
    type: Array,
    required: true,
  },
  info: {
    type: String,
    required: true,
  },
});
</script>