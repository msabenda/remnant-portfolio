<template>
  <section
    id="services"
    class="py-20"
    :class="themeStore.currentTheme === 'dark' ? 'bg-gray-800' : 'bg-white'"
  >
    <div class="container mx-auto px-4">
      <h2 class="mb-12 text-center text-4xl font-bold text-blue-500 font-mono">
        My Services
      </h2>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div
          v-for="service in services"
          :key="service.id"
          class="service-card group relative overflow-hidden rounded-xl border border-transparent p-6 shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
          :class="
            themeStore.currentTheme === 'dark'
              ? 'bg-gray-900 hover:border-blue-500/40 hover:shadow-blue-500/10'
              : 'bg-white hover:border-blue-200 hover:shadow-blue-500/15'
          "
        >
          <div
            class="pointer-events-none absolute inset-x-0 top-0 h-1 scale-x-0 bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 opacity-90 transition-transform duration-300 ease-out group-hover:scale-x-100"
            aria-hidden="true"
          />
          <div
            class="mb-5 inline-flex rounded-xl p-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md"
            :class="themeStore.currentTheme === 'dark' ? 'bg-blue-500/15 ring-1 ring-blue-500/20' : 'bg-blue-100/80 ring-1 ring-blue-200/60'"
          >
            <component
              :is="service.icon"
              class="h-7 w-7 text-blue-500 transition-colors duration-300 group-hover:text-blue-400 dark:text-blue-400 dark:group-hover:text-blue-300"
              aria-hidden="true"
            />
          </div>
          <h3
            class="mb-3 text-xl font-semibold font-mono transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-300"
            :class="themeStore.currentTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'"
          >
            {{ service.title }}
          </h3>
          <p
            class="text-sm font-sans leading-relaxed transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-200"
            :class="themeStore.currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'"
          >
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Component } from 'vue';
import { AcademicCapIcon, CpuChipIcon, ShieldCheckIcon } from '@heroicons/vue/24/outline';
import { useThemeStore } from '@/stores/theme';

const themeStore = useThemeStore();

const services: {
  id: number;
  title: string;
  description: string;
  icon: Component;
}[] = [
  {
    id: 1,
    title: 'API Penetration Testing',
    description:
      'End-to-end offensive testing for REST, GraphQL, and microservices: authentication and authorization flaws, OWASP API Security risks, business-logic abuse, and unsafe defaults—with prioritized findings and retest support.',
    icon: ShieldCheckIcon,
  },
  {
    id: 2,
    title: 'AI & LLM Security Testing',
    description:
      'Red-team exercises for production LLM features: prompt injection and jailbreaks, unsafe tool or agent use, data leakage, and weak guardrails—so you can ship AI with confidence.',
    icon: CpuChipIcon,
  },
  {
    id: 3,
    title: 'Security Consulting & Training',
    description:
      'Architecture and design reviews, threat modeling for APIs and AI surfaces, and practical workshops that help your team think like attackers and bake security in early.',
    icon: AcademicCapIcon,
  },
];
</script>

<style scoped>
.service-card {
  transform: translateZ(0);
}
</style>
