<script setup>
import FooterComponent from './FooterComponent.vue';
import HeaderComponent from './HeaderComponent.vue';
</script>

<template>
  <HeaderComponent />
  <slot />
  <FooterComponent />
</template>