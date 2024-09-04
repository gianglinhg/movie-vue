<template>
  <nav class="fixed top-0 left-0 flex items-center w-screen px-48 py-5 z-[99999] transition duration-300 ease-in-out">
    <div class="w-40 cursor-pointer">
      <img src="/images/logo.png" class="object-cover w-full h-full" alt="logo">
    </div>
    <ul class="flex-1 space-x-10 text-center">
      <li class="inline-block"><a href="#" class="font-bold uppercase duration-300 hover:text-color-main">Home</a>
      </li>
      <li class="inline-block"><a href="#" class="font-bold uppercase duration-300 hover:text-color-main">Movie</a>
      </li>
      <li class="inline-block"><a href="#" class="font-bold uppercase duration-300 hover:text-color-main">Tv show</a>
      </li>
      <li class="inline-block"><a href="#" class="font-bold uppercase duration-300 hover:text-color-main">Cartoon</a>
      </li>
    </ul>
    <div>
      <div class="hidden md:block">
        <ul class="flex items-center space-x-5">
          <li>
            <a href="#" data-toggle="modal" data-target="#search-modal">
              <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
            </a>
          </li>
          <li class="flex items-center gap-x-1">
            <div><font-awesome-icon :icon="['fas', 'globe']" class="text-color-main" /></div>
            <select id="lang-dropdown" class="cursor-pointer text-dark">
              <option value="vi">Vi</option>
              <option value="en">En</option>
            </select>
          </li>
          <li>
            <ButtonComponent :button="'SIGN IN'" />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue';
</script>