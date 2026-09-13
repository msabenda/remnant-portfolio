<!-- portfolio/src/components/Blog.vue -->
<template>
  <section id="blog" class="py-20" :class="themeStore.currentTheme === 'dark' ? 'bg-gray-800' : 'bg-white'">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-12 font-mono" :class="themeStore.currentTheme === 'dark' ? 'text-white' : 'text-gray-900'">Blog: API & AI Security Insights</h2>
      <div class="flex justify-center space-x-4 mb-8">
        <button v-for="cat in categories" :key="cat" @click="filterByCategory(cat)" :class="currentCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-200 text-blue-600'" class="px-4 py-2 rounded-lg font-mono text-sm hover:bg-blue-500 hover:text-white transition-colors">{{ cat }}</button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="post in filteredPosts" :key="post.id" class="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img :src="post.image" :alt="post.title" class="w-full h-48 object-cover" loading="lazy" />
          <div class="p-6" :class="themeStore.currentTheme === 'dark' ? 'bg-gray-900' : 'bg-white'">
            <div class="text-sm font-sans" :class="themeStore.currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'">{{ post.date }} · {{ post.readingTime }} min read</div>
            <h3 class="text-xl font-semibold mb-2 font-mono" :class="themeStore.currentTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'">{{ post.title }}</h3>
            <p class="text-sm mb-4 font-sans" :class="themeStore.currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'">{{ post.excerpt }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tag in post.tags" :key="tag" class="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-600">{{ tag }}</span>
            </div>
            <router-link :to="`/blog/post/${post.id}`" class="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-mono text-sm">Read More</router-link>
          </div>
        </div>
      </div>
      <div class="text-center mt-12">
        <router-link to="/blog" class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-mono">View All Posts</router-link>
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
  return currentCategory.value === 'All' ? posts : posts.filter(p => p.category === currentCategory.value);
});

const filterByCategory = (cat: string) => {
  currentCategory.value = cat;
};
</script>