<template>
  <section id="hero" class="min-h-screen flex items-center justify-center bg-gradient-to-b relative" :class="themeStore.currentTheme === 'dark' ? 'from-gray-900 to-gray-800' : 'from-gray-100 to-gray-50'">
    <div class="container mx-auto text-center px-4 z-10">
      <h1 class="text-4xl md:text-6xl font-bold mb-6 font-mono" :class="themeStore.currentTheme === 'dark' ? 'text-white' : 'text-gray-900'">
        <span class="inline-block">{{ typedText }}</span><span class="cursor" :class="themeStore.currentTheme === 'dark' ? 'bg-white' : 'bg-gray-900'"></span>
      </h1>
      <p class="text-2xl md:text-3xl text-blue-600 mb-4 font-mono">remnant_ | Securing APIs & AI Systems</p>
      <p class="text-lg md:text-xl mb-4 max-w-3xl mx-auto font-sans" :class="themeStore.currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'">
        With over 5+ years of experience, I specialize in API penetration testing and AI security to protect your web applications and LLMs from advanced threats.
      </p>
      <p class="text-lg md:text-xl mb-8 max-w-3xl mx-auto font-mono italic animate-fade-in" :class="themeStore.currentTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'">
        "I hack to build modern systems for better humanity"
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#contact" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-mono" aria-label="Contact me for cybersecurity services">
          Secure Your Systems
        </a>
        <a href="#about" class="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600/10 transition-all duration-300 font-mono" aria-label="Learn more about my expertise">
          About Me
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useThemeStore } from '@/stores/theme';

const themeStore = useThemeStore();
const typedText = ref('');
const phrases = ['API Security Specialist', 'AI Security Specialist'];
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingTimeout: number | undefined;

const type = () => {
  const currentPhrase = phrases[currentPhraseIndex];
  if (!isDeleting) {
    // Typing
    if (currentCharIndex <= currentPhrase.length) {
      typedText.value = currentPhrase.substring(0, currentCharIndex);
      currentCharIndex++;
      typingTimeout = setTimeout(type, 100);
    } else {
      // Pause before deleting
      isDeleting = true;
      typingTimeout = setTimeout(type, 2000);
    }
  } else {
    // Deleting
    if (currentCharIndex >= 0) {
      typedText.value = currentPhrase.substring(0, currentCharIndex);
      currentCharIndex--;
      typingTimeout = setTimeout(type, 50);
    } else {
      // Move to next phrase
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      typingTimeout = setTimeout(type, 500);
    }
  }
};

onMounted(() => {
  typingTimeout = setTimeout(type, 500);
});

onUnmounted(() => {
  if (typingTimeout) {
    clearTimeout(typingTimeout);
  }
});
</script>

<style scoped>
.cursor {
  display: inline-block;
  width: 2px;
  height: 1em;
  animation: blink 0.75s step-end infinite;
  vertical-align: middle;
}
@keyframes blink {
  from, to { opacity: 1; }
  50% { opacity: 0; }
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}
</style>