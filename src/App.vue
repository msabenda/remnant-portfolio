<template>
  <div class="min-h-screen">
    
    <!-- Main Content -->
    <Nav />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useThemeStore } from '@/stores/theme.js';
import Nav from '@/components/Nav.vue';

const themeStore = useThemeStore();

onMounted(() => {
  themeStore.loadTheme();
});
</script>

<style scoped>
/* No additional styles needed; global styles in index.css */
</style>