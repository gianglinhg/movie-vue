<template>
  <nav
    class="fixed top-0 left-0 flex justify-between items-center w-screen px-4 md:px-16 xl:px-48 py-5 z-[10] transition duration-300 ease-in-out">
    <div class="w-40 cursor-pointer">
      <img src="/images/logo.png" class="object-cover w-full h-full" alt="logo">
    </div>
    <div class="flex-1 hidden lg:block">
      <MenuComponent @close="closeDrawer" />
    </div>
    <div>
      <div class="flex items-center space-x-5">
        <ul class="items-center hidden space-x-5 md:flex">
          <li>
            <a href="#" data-toggle="modal" data-target="#search-modal">
              <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
            </a>
          </li>
          <li class="flex items-center gap-x-1" v-if="n18">
            <div><font-awesome-icon :icon="['fas', 'globe']" class="text-color-main" /></div>
            <select id="lang-dropdown" class="cursor-pointer text-dark">
              <option value="vi">Vi</option>
              <option value="en">En</option>
            </select>
          </li>
          <li>
            <router-link :to="{ name: 'login' }">
              <ButtonComponent :button="'SIGN IN'" :icon="[]" />
            </router-link>
          </li>
        </ul>
        <div class="block w-5 h-5 cursor-pointer lg:hidden" @click="openDrawer()">
          <font-awesome-icon :icon="['fas', 'align-justify']" class="block w-full h-full" />
        </div>
      </div>
    </div>
  </nav>
  <Drawer :is-open="isDrawerOpen" :speed="500" :maxWidth="'300px'" @close="closeDrawer">
    <MenuComponent @close="closeDrawer" />
  </Drawer>
</template>
<script setup>
import { watch, ref } from 'vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import MenuComponent from '@/components/MenuComponent.vue';
import Drawer from "@/components/DrawerComponent.vue";
import { useDevice } from '@/stores/device';

const { openMenu } = useDevice();
const isDrawerOpen = ref(false);
const n18 = ref(false);

watch(() => openMenu.value, (newVal) => {
  if (!newVal) closeDrawer();
});

const openDrawer = () => isDrawerOpen.value = true;
const closeDrawer = () => isDrawerOpen.value = false;
</script>