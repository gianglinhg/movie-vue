// useDevice.js
import { ref, onMounted, onUnmounted } from 'vue';

export function useDevice() {
  const openMenu = ref(window.innerWidth <= 1024);

  const checkScreenSize = () => {
    openMenu.value = window.innerWidth <= 1024;
  };

  onMounted(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

  });

  onUnmounted(() => {
    window.removeEventListener('resize', checkScreenSize);
  });

  return { openMenu };
}
