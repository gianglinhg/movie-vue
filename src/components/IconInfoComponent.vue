<template>
  <h5 class="inline-block space-x-2">
    <font-awesome-icon :icon="icon" class="text-color-main" />
    <span>{{ info }}</span>
  </h5>
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
    default: null,
  },
});
</script>