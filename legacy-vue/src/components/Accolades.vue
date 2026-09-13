<template>
  <section id="accolades" class="py-20" :class="themeStore.currentTheme === 'dark' ? 'bg-gray-800' : 'bg-white'">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-12 font-mono" :class="themeStore.currentTheme === 'dark' ? 'text-white' : 'text-gray-900'">
        My Experience
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="accolade in accolades"
          :key="accolade.id"
          class="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          :class="themeStore.currentTheme === 'dark' ? 'bg-gray-900' : 'bg-white'"
        >
          <h3 class="text-xl font-semibold mb-2 font-mono" :class="themeStore.currentTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'">
            {{ accolade.title }}
          </h3>
          <p class="text-sm font-sans" :class="themeStore.currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'">
            {{ accolade.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/theme';

const themeStore = useThemeStore();

const accolades = [
  {
    id: 1,
    title: 'APIsec University Award',
    description: 'Awarded by APIsec for expertise in identifying and mitigating API security vulnerabilities.',
  },
  {
    id: 2,
    title: 'Portswigger API Web Security',
    description: 'Experience in the identifying vulnerabilities in API endpoints.',
  },
  {
    id: 3,
    title: 'Ethical Hacker Certification',
    description: 'Earned Ethical Hacker Certified from Cisco for Cybersecurity.',
  },
];
</script>

<style scoped>
/* No additional styles needed; global styles in index.css */
</style>