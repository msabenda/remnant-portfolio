<template>
    <section id="services" class="py-20" :class="themeStore.currentTheme === 'dark' ? 'bg-gray-800' : 'bg-white'">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12 font-['Roboto_Mono']" :class="themeStore.currentTheme === 'dark' ? 'text-white' : 'text-gray-900'">
          My Services
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="service in services"
            :key="service.id"
            class="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            :class="themeStore.currentTheme === 'dark' ? 'bg-gray-900' : 'bg-white'"
          >
            <h3 class="text-xl font-semibold mb-2 font-['Roboto_Mono']" :class="themeStore.currentTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'">
              {{ service.title }}
            </h3>
            <p class="text-sm font-sans" :class="themeStore.currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>

  <script setup lang="ts">
  import { useThemeStore } from '@/stores/theme';

  const themeStore = useThemeStore();

  const services = [
    {
      id: 1,
      title: 'API Security Testing',
      description: 'Comprehensive testing to identify and mitigate vulnerabilities in your APIs.',
    },
    {
      id: 2,
      title: 'AI security Testing',
      description: 'Perform Prompt injection & Jailbreaking for LLMs app to secure them.',
    },
    {
      id: 3,
      title: 'Security Consulting',
      description: 'Guidance to enhance your organization’s cybersecurity posture.',
    },
  ];
  </script>

  <style scoped>
  /* No additional styles needed; global styles in index.css */
  </style>