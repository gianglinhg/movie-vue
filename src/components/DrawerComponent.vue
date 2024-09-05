<template>
  <div>
    <div class="drawer" :class="{ 'is-open': isOpen, 'is-visible': isVisible }">
      <div class="fixed top-0 left-0 right-0 w-full transition-opacity select-none z-200"
        :style="{ transitionDuration: `${speed}ms` }"></div>
      <div class="drawer__content bg-dark-main" v-click-away="closeDrawer" :style="{
        maxWidth: maxWidth,
        transitionDuration: `${speed}ms`,
      }">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
// Props
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: false,
    default: false,
  },
  maxWidth: {
    type: String,
    required: false,
    default: '400px',
  },
  speed: {
    type: Number,
    required: false,
    default: 300,
  },
});

// Directives
// Reactive State
const isVisible = ref(false);
const isTransitioning = ref(false);

// Methods
const toggleBackgroundScrolling = (enable) => {
  const body = document.querySelector('body');
  body.style.overflow = enable ? 'hidden' : null;
};
const emit = defineEmits(['close'])

const closeDrawer = () => {
  if (!isTransitioning.value) {
    emit('close')
  }
};

// Watchers
watch(
  () => props.isOpen,
  (val) => {
    isTransitioning.value = true;

    if (val) {
      toggleBackgroundScrolling(true);
      isVisible.value = true;
    } else {
      toggleBackgroundScrolling(false);
      setTimeout(() => (isVisible.value = false), props.speed);
    }

    setTimeout(() => (isTransitioning.value = false), props.speed);
  }
);

// Lifecycle Hooks
onMounted(() => {
  isVisible.value = props.isOpen;
});
</script>

<style scoped>
.drawer {
  visibility: hidden;
}

.drawer.is-visible {
  visibility: visible;
}

/* .drawer.is-open .drawer__overlay {
  opacity: 0.5;
} */

.drawer.is-open .drawer__content {
  transform: translateX(0);
}



.drawer__content {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: 9999;
  overflow: auto;
  transition-property: transform;
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  box-shadow: 0 2px 6px #777;
}
</style>
