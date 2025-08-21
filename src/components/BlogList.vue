<template>
  <section class="py-20 min-h-screen" :class="themeStore.currentTheme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold text-center mb-12 font-mono" :class="themeStore.currentTheme === 'dark' ? 'text-white' : 'text-gray-900'">
        All Blog Posts
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="post in posts" :key="post.id" class="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img :src="post.image" :alt="post.title" class="w-full h-48 object-cover" />
          <div class="p-6" :class="themeStore.currentTheme === 'dark' ? 'bg-gray-800' : 'bg-white'">
            <h2 class="text-xl font-semibold mb-2 font-mono" :class="themeStore.currentTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'">
              {{ post.title }}
            </h2>
            <p class="text-sm mb-4 font-sans" :class="themeStore.currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'">
              {{ post.excerpt }}
            </p>
            <router-link
              :to="`/blog/post/${post.id}`"
              class="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-mono text-sm"
              :aria-label="`Read full post: ${post.title}`"
            >
              Read Full Post
            </router-link>
          </div>
        </div>
      </div>
      <div class="text-center mt-12">
        <router-link
          to="/"
          class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-mono"
          aria-label="Back to home"
        >
          Back to Home
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/theme';

const themeStore = useThemeStore();

const posts = [
  {
    id: 1,
    title: 'Breaking Down API Vulnerabilities',
    excerpt: 'A deep dive into common API security flaws and how to exploit them ethically.',
    image: '/assets/images/blog/api-vuln.jpg',
  },
  {
    id: 2,
    title: 'Prompt Injection in LLMs',
    excerpt: 'Learn how attackers craft inputs to manipulate or override the intended behavior of large language models.',
    image: '/assets/images/blog/prompt.png',
  },
  {
    id: 3,
    title: 'AI Model Poisoning: A Case Study',
    excerpt: 'Exploring real-world attacks on AI systems and mitigation strategies.',
    image: '/assets/images/blog/ai-poison.avif',
  },
];
</script>

<style scoped>
/* No additional styles needed; global styles in index.css */
</style>