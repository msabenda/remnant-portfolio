<template>
  <article
    class="min-h-screen pb-20 pt-28"
    :class="themeStore.currentTheme === 'dark' ? 'bg-gray-800' : 'bg-white'"
  >
    <div class="container mx-auto max-w-3xl px-4">
      <nav class="mb-8 font-mono text-sm" aria-label="Breadcrumb">
        <router-link
          to="/blog"
          class="text-blue-600 transition-colors hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
        >
          ← All posts
        </router-link>
      </nav>

      <template v-if="post">
        <img
          :src="post.image"
          :alt="post.title"
          class="mb-8 h-56 w-full rounded-lg object-cover shadow-lg md:h-72"
          loading="lazy"
        />
        <header class="mb-10">
          <p
            class="mb-3 text-sm font-sans"
            :class="themeStore.currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'"
          >
            {{ post.date }} · {{ post.readingTime }} min read · {{ post.category }}
          </p>
          <h1
            class="text-3xl font-bold leading-tight font-mono md:text-4xl"
            :class="themeStore.currentTheme === 'dark' ? 'text-white' : 'text-gray-900'"
          >
            {{ post.title }}
          </h1>
          <p
            class="mt-4 text-sm font-sans italic"
            :class="themeStore.currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'"
          >
            By Msambili Ndaga (remnant01)
          </p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-600 dark:bg-gray-900 dark:text-blue-400"
            >
              {{ tag }}
            </span>
          </div>
        </header>

        <div
          class="blog-content prose max-w-none font-sans leading-relaxed"
          :class="themeStore.currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'"
          v-html="post.content"
        />

        <div class="mt-14 flex flex-col items-stretch gap-4 sm:flex-row sm:justify-center">
          <router-link
            to="/blog"
            class="inline-block rounded-lg bg-blue-600 px-6 py-3 text-center font-mono text-white transition-all duration-300 hover:bg-blue-700"
          >
            All posts
          </router-link>
          <router-link
            to="/"
            class="inline-block rounded-lg border-2 border-blue-600 px-6 py-3 text-center font-mono text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white"
          >
            Home
          </router-link>
        </div>
      </template>

      <p
        v-else
        class="py-20 text-center text-lg font-mono"
        :class="themeStore.currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'"
      >
        Post not found.
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useThemeStore } from '@/stores/theme';
import { usePostStore } from '@/stores/posts';

const route = useRoute();
const themeStore = useThemeStore();
const postStore = usePostStore();

const post = computed(() => postStore.posts.find((p) => p.id === Number(route.params.id)));
</script>

<style scoped>
.blog-content :deep(img) {
  @apply my-4 max-h-96 w-full rounded-lg object-cover;
}

.blog-content :deep(h2) {
  @apply mt-10 mb-4 font-mono text-2xl font-semibold text-gray-900 dark:text-white;
}

.blog-content :deep(h3) {
  @apply mt-8 mb-3 font-mono text-lg font-semibold text-gray-900 dark:text-gray-100;
}

.blog-content :deep(p) {
  @apply mb-4 leading-relaxed;
}

.blog-content :deep(ul) {
  @apply mb-4 list-disc space-y-2 pl-6;
}

.blog-content :deep(ol) {
  @apply mb-4 list-decimal space-y-2 pl-6;
}

.blog-content :deep(li) {
  @apply leading-relaxed;
}

.blog-content :deep(pre) {
  @apply my-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100;
}

.blog-content :deep(code) {
  @apply rounded bg-gray-200 px-1.5 py-0.5 font-mono text-sm text-gray-800 dark:bg-gray-900 dark:text-blue-200;
}

.blog-content :deep(pre code) {
  @apply bg-transparent p-0 text-gray-100;
}

.blog-content :deep(blockquote) {
  @apply my-4 border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-400;
}

.blog-content :deep(strong) {
  @apply font-semibold text-gray-900 dark:text-white;
}

.blog-content :deep(details) {
  @apply my-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700;
}

.blog-content :deep(summary) {
  @apply cursor-pointer font-mono font-medium text-blue-600 dark:text-blue-400;
}
</style>
