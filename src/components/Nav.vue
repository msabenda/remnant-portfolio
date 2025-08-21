<!-- portfolio/src/components/Nav.vue -->
<template>
  <nav class="fixed w-full top-0 z-40 shadow-sm transition-all duration-300" :class="themeStore.currentTheme === 'dark' ? 'bg-gray-800/90 text-white' : 'bg-white/90 text-gray-900'">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center backdrop-blur-sm">
      <router-link to="/" class="text-2xl font-bold text-blue-600 font-mono hover:text-blue-500 transition-colors">remnant_</router-link>
      <div class="hidden md:flex space-x-8 font-mono text-sm">
        <router-link v-for="link in links" :key="link.to" :to="link.to" class="relative group hover:text-blue-500 transition-colors duration-200">
          <span class="block transform transition-transform duration-300 group-hover:rotate-y-180">{{ link.text }}</span>
          <span class="absolute inset-0 transform rotate-y-180 transition-transform duration-300 group-hover:rotate-y-0 backface-hidden">{{ link.text }}</span>
        </router-link>
      </div>
      <div class="flex items-center space-x-4">
        <button @click="themeStore.toggleTheme" aria-label="Toggle theme" class="focus-visible:ring-2 focus-visible:ring-blue-400">
          <svg v-if="themeStore.currentTheme === 'dark'" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4C6.1,3.5,3,7.1,3,11.5C3,16.2,7.8,20,12.5,20c4.4,0,8-3.1,8.9-7.3C21.6,13.1,21.5,13.4,21.4,13.7z" />
          </svg>
          <svg v-else class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.4 5.4l-.7-.7M6.3 6.3l-.7-.7m12.8 0l-.7.7M6.3 17.7l-.7.7M12 5a7 7 0 100 14 7 0 000-14z" />
          </svg>
        </button>
        <button class="md:hidden focus:outline-none" :class="themeStore.currentTheme === 'dark' ? 'text-white' : 'text-gray-900'" @click="toggleMenu" aria-label="Toggle menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
    <div v-if="isOpen" class="md:hidden border-t transition-all duration-300" :class="themeStore.currentTheme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
      <div class="container mx-auto px-4 py-4 flex flex-col space-y-4 font-mono text-sm">
        <router-link v-for="link in links" :key="link.to" :to="link.to" class="hover:text-blue-500 transition-colors" @click="toggleMenu">{{ link.text }}</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useThemeStore } from '@/stores/theme';

const isOpen = ref(false);
const themeStore = useThemeStore();
const toggleMenu = () => { isOpen.value = !isOpen.value; };

const links = [
  { to: '/', text: 'Home' },
  { to: '/#services', text: 'Services' },
  { to: '/#experience', text: 'Experience' },
  { to: '/blog', text: 'Blog' },
  { to: '/#contact', text: 'Contact' },
];
</script>

<style scoped>
.backface-hidden {
  backface-visibility: hidden;
}
.group:hover .group-hover\:rotate-y-180 {
  transform: rotateY(180deg);
}
.group:hover .group-hover\:rotate-y-0 {
  transform: rotateY(0deg);
}
</style>