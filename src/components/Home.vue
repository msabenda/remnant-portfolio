<!-- portfolio/src/components/Home.vue -->
<template>
  <div>
    <Hero />
    <About />
    <Services />
    <Experience />
    <Blog />
    <Contact />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Hero from '@/components/Hero.vue';
import About from '@/components/About.vue';
import Services from '@/components/Services.vue';
import Experience from '@/components/Experience.vue';
import Blog from '@/components/Blog.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';
</script>