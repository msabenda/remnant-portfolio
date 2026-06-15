<template>
  <section
    class="min-h-screen pb-20 pt-28"
    :class="themeStore.currentTheme === 'dark' ? 'bg-gray-800' : 'bg-white'"
  >
    <div class="container mx-auto px-4">
      <header class="mb-10 text-center">
        <h1
          class="mb-3 text-4xl font-bold font-mono"
          :class="themeStore.currentTheme === 'dark' ? 'text-white' : 'text-gray-900'"
        >
          Blog: API &amp; AI Security Insights
        </h1>
        <p
          class="mx-auto max-w-2xl text-sm font-sans leading-relaxed md:text-base"
          :class="themeStore.currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'"
        >
          Full archive—notes on API testing, LLM abuse cases, and defensive patterns.
        </p>
      </header>

      <div class="mb-10 flex flex-wrap justify-center gap-3">
        <button
          v-for="cat in categories"
          :key="cat"
          type="button"
          class="rounded-lg px-4 py-2 font-mono text-sm transition-colors duration-200"
          :class="
            currentCategory === cat
              ? 'bg-blue-600 text-white'
              : themeStore.currentTheme === 'dark'
                ? 'bg-gray-900 text-blue-400 hover:bg-gray-700'
                : 'bg-gray-200 text-blue-600 hover:bg-blue-500 hover:text-white'
          "
          @click="filterByCategory(cat)"
        >
          {{ cat }}
        </button>
      </div>

      <div
        v-if="filteredPosts.length === 0"
        class="py-16 text-center font-mono text-sm"
        :class="themeStore.currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'"
      >
        No posts in this category yet.
      </div>

      <div v-else class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="post in filteredPosts"
          :key="post.id"
          class="overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl"
        >
          <router-link :to="`/blog/post/${post.id}`" class="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" :class="themeStore.currentTheme === 'dark' ? 'ring-offset-gray-800' : 'ring-offset-white'">
            <img :src="post.image" :alt="post.title" class="h-48 w-full object-cover" loading="lazy" />
          </router-link>
          <div class="p-6" :class="themeStore.currentTheme === 'dark' ? 'bg-gray-900' : 'bg-white'">
            <div
              class="mb-2 text-sm font-sans"
              :class="themeStore.currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'"
            >
              {{ post.date }} · {{ post.readingTime }} min read · {{ post.category }}
            </div>
            <h2
              class="mb-2 text-xl font-semibold font-mono leading-snug"
              :class="themeStore.currentTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'"
            >
              <router-link :to="`/blog/post/${post.id}`" class="hover:underline">
                {{ post.title }}
              </router-link>
            </h2>
            <p
              class="mb-4 text-sm font-sans leading-relaxed"
              :class="themeStore.currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'"
            >
              {{ post.excerpt }}
            </p>
            <div class="mb-4 flex flex-wrap gap-2">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-600 dark:bg-gray-800 dark:text-blue-400"
              >
                {{ tag }}
              </span>
            </div>
            <router-link
              :to="`/blog/post/${post.id}`"
              class="inline-block rounded-lg bg-blue-600 px-4 py-2 font-mono text-sm text-white transition-all duration-300 hover:bg-blue-700"
              :aria-label="`Read full post: ${post.title}`"
            >
              Read more
            </router-link>
          </div>
        </article>
      </div>

      <div class="mt-14 text-center">
        <router-link
          to="/"
          class="inline-block rounded-lg border-2 border-blue-600 px-6 py-3 font-mono text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-600 dark:hover:text-white"
          aria-label="Back to home"
        >
          Back to home
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useThemeStore } from '@/stores/theme';
import { usePostStore } from '@/stores/posts';

const themeStore = useThemeStore();
const postStore = usePostStore();
const posts = postStore.posts;

const currentCategory = ref('All');
const categories = ['All', 'News', 'Exploits', 'Findings'];

const filteredPosts = computed(() => {
  return currentCategory.value === 'All'
    ? posts
    : posts.filter((p) => p.category === currentCategory.value);
});

const filterByCategory = (cat: string) => {
  currentCategory.value = cat;
};
</script>
