<template>
  <button
    class="px-6 py-2 text-sm font-semibold transition-all duration-500 border-2 rounded-full hover:text-dark hover:bg-color-main hover:border-color-main border-gray"
    :class="{ 'active': active }">
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
    required: false,
  },
  active: {
    type: Boolean,
    default: true,
  }
});
</script>
<style scoped>
.active {
  border-color: #e4d804;
}
</style>