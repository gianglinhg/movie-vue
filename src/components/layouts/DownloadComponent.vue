<template>
  <section class="bg-[url('/images/services_bg.jpg')] bg-cover bg-no-repeat">
    <div class="container flex flex-col gap-10 px-4 py-20 mx-auto md:flex-row lg:px-10 md:gap-0">
      <div class="relative basis-1/2">
        <div class="">
          <img src="/public/images/services_img.jpg" alt="services_img" class="relative">
        </div>
        <div class="absolute py-10 rotate-90 bottom-11 -right-11 px-11 bg-color-main text-dark" v-if="downloadBtn">
          <a href="#" class="mr-4 text-xs font-medium uppercase">Download</a>
          <font-awesome-icon :icon="['fas', 'download']" class="-rotate-90 " />
        </div>
      </div>
      <div class="basis-1/2">
        <div class="flex flex-col mb-10 space-y-5">
          <div class="flex items-center space-x-2">
            <div class="w-10 h-1 bg-color-main"></div>
            <h5 class="uppercase">Our services</h5>
          </div>
          <h1 class="text-3xl font-semibold md:text-5xl">Download Your Shows <br> Watch Offline.</h1>
          <p class="text-sm font-light text-white md:text-base">Lorem ipsum dolor sit amet, consecetur adipiscing
            elseddo eiusmod
            tempor.There
            are many
            variations of
            passages of lorem Ipsum available, but the majority have suffered alteration in some injected humour.</p>
        </div>
        <ul>
          <li class="flex items-center pb-6 mb-6 border-b border-dashed border-gray gap-x-5">
            <font-awesome-icon :icon="['fas', 'radio']"
              class="text-3xl border-2 border-dotted rounded-full p-7 border-color-main" />
            <div class="content">
              <h5 class="text-xl font-semibold">Enjoy on Your TV.</h5>
              <p class="text-sm">Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </li>
          <li class="flex items-center gap-x-5">
            <font-awesome-icon :icon="['fas', 'video']"
              class="text-3xl border-2 border-dotted rounded-full p-7 border-color-main" />
            <div class="content">
              <h5 class="text-xl font-semibold">Watch Everywhere.</h5>
              <p class="text-sm">Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
const downloadBtn = ref(false);
</script>