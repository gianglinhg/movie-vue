<template>
  <div class="z-20 flex items-center justify-between px-5 mb-5 py-7 lg:mb-0 lg:p-0 lg:hidden">
    <div class="block w-40 cursor-pointer ">
      <img src="/images/logo.png" class="object-cover w-full h-full" alt="logo">
    </div>
    <div class="w-5 cursor-pointer" @click="closeDrawer()">
      <font-awesome-icon :icon="['fas', 'xmark']" class="block w-full h-full" />
    </div>
  </div>
  <ul class="flex flex-col justify-center gap-5 p-5 lg:flex-row lg:p-0">
    <li>
      <a href="#" class="font-semibold transition-all duration-300 hover:text-color-main">Home</a>
    </li>
    <li>
      <a href="#" class="font-semibold transition-all duration-300 hover:text-color-main">About</a>
    </li>
    <li>
      <a href="#" class="font-semibold transition-all duration-300 hover:text-color-main">Feature</a>
    </li>
    <li>
      <a href="#" class="font-semibold transition-all duration-300 hover:text-color-main">Contact</a>
    </li>
  </ul>
</template>
<script setup>
const emit = defineEmits(['close']);
const closeDrawer = () => emit('close');
</script>