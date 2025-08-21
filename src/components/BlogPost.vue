<!-- portfolio/src/components/BlogPost.vue -->
<template>
  <section class="py-20 min-h-screen" :class="themeStore.currentTheme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'">
    <div class="container mx-auto px-4 max-w-3xl">
      <router-link to="/blog" class="inline-block mb-6 text-blue-600 hover:text-blue-500 font-mono text-sm" aria-label="Back to all posts">&larr; Back to All Posts</router-link>
      <img v-if="post" :src="post.image" :alt="post.title" class="w-full h-64 object-cover rounded-lg mb-8 shadow-lg" loading="lazy" />
      <h1 v-if="post" class="text-3xl md:text-4xl font-bold mb-6 font-mono" :class="themeStore.currentTheme === 'dark' ? 'text-white' : 'text-gray-900'">{{ post.title }}</h1>
      <div v-if="post" class="flex items-center text-sm mb-8 font-sans italic" :class="themeStore.currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'">
        <span>By Msambili Ndaga (remnant_) · {{ post.date }} · {{ post.readingTime }} min read</span>
      </div>
      <div v-if="post" class="prose prose-lg max-w-none font-sans mb-8" :class="themeStore.currentTheme === 'dark' ? 'text-gray-300 prose-invert' : 'text-gray-600'" v-html="post.content"></div>
      <div class="text-center mt-12">
        <router-link to="/blog" class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-mono">Back to All Posts</router-link>
      </div>
      <div v-if="!post" class="text-center text-xl font-mono" :class="themeStore.currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'">Post not found.</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useThemeStore } from '@/stores/theme';
import { usePostStore } from '@/stores/posts';

const route = useRoute();
const themeStore = useThemeStore();
const postStore = usePostStore();
const reactions = ref(0);

const post = computed(() => postStore.posts.find(p => p.id === Number(route.params.id)));

const addReaction = () => {
  reactions.value += 1;
};

const faqs = computed(() => {
  if (!post.value) return [];
  return (post.value.content.match(/<details>.*?<\/details>/g) || []).map((detail, index) => {
    const question = detail.match(/<summary>(.*?)<\/summary>/)?.[1] || `Question ${index + 1}`;
    const answer = detail.match(/<p>(.*?)<\/p>/)?.[1] || 'Answer';
    return { question, answer };
  });
});
</script>

<style scoped>
.prose img {
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
}
</style>