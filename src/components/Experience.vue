<!-- portfolio/src/components/Experience.vue -->
<template>
  <section id="experience" class="py-20" :class="themeStore.currentTheme === 'dark' ? 'bg-gray-800' : 'bg-white'">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-12 font-mono" :class="themeStore.currentTheme === 'dark' ? 'text-white' : 'text-gray-900'">My Experience</h2>
      <div class="relative wrap overflow-hidden p-10 h-full">
        <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style="left:50%"></div>
        <div v-for="(exp, index) in experiences" :key="exp.id" class="mb-8 flex justify-between items-center w-full" :class="index % 2 === 0 ? 'flex-row-reverse' : ''">
          <div class="order-1 w-5/12"></div>
          <div class="z-20 flex items-center order-1 bg-blue-600 shadow-xl w-8 h-8 rounded-full">
            <h1 class="mx-auto font-semibold text-lg text-white">{{ exp.year }}</h1>
          </div>
          <div class="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4" :class="themeStore.currentTheme === 'dark' ? 'bg-gray-900' : 'bg-white'">
            <h3 class="mb-3 font-bold text-xl font-mono" :class="themeStore.currentTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'">{{ exp.title }}</h3>
            <p class="text-sm leading-snug tracking-wide font-sans" :class="themeStore.currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'">{{ exp.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/theme';
const themeStore = useThemeStore();

const experiences = [
  { id: 1, year: 2020, title: 'Cybersecurity Consultant', description: 'Helping people and clients to take good cybersecurity posture and measures to avoid any compromise risk which might occur' },
  { id: 2, year: 2023, title: 'API Penetration Tester', description: 'Started career in as API security from APIsec university which i started getting some valuable insights on how API works' },
  { id: 3, year: 2025, title: 'AI Security Researcher', description: 'Specialized in LLMs to check and identify flaws and vulnerabilities associated with LLMs apps' },
];
</script>

<style scoped>
/* Timeline connector styles */
.border-2-2 { border-width: 2px; }
</style>