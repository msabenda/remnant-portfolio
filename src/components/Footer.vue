<!-- portfolio/src/components/Footer.vue -->
<template>
  <footer class="py-12 relative overflow-hidden" :class="themeStore.currentTheme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'">
    <div class="absolute inset-0 particles-container">
      <div class="particles light" style="width: 20px; height: 20px; top: 10%; left: 20%; animation-delay: 0s;"></div>
      <div class="particles light" style="width: 30px; height: 30px; top: 50%; left: 50%; animation-delay: 2s;"></div>
      <div class="particles light" style="width: 25px; height: 25px; top: 80%; left: 80%; animation-delay: 1s;"></div>
    </div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-2xl font-bold text-blue-600 font-mono mb-4">remnant_</h3>
          <p class="text-sm font-sans" :class="themeStore.currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'">
            Cybersecurity specialist securing APIs and AI systems for 5+ years.
          </p>
        </div>
        <div>
          <h4 class="text-lg font-semibold font-mono mb-4" :class="themeStore.currentTheme === 'dark' ? 'text-white' : 'text-gray-900'">Quick Links</h4>
          <ul class="space-y-2 font-mono text-sm">
            <li><a href="#hero" class="hover:text-blue-500 transition-colors" :class="themeStore.currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'">Home</a></li>
            <li><a href="#services" class="hover:text-blue-500 transition-colors" :class="themeStore.currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'">Services</a></li>
            <li><a href="#experience" class="hover:text-blue-500 transition-colors" :class="themeStore.currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'">Experience</a></li>
            <li><a href="#blog" class="hover:text-blue-500 transition-colors" :class="themeStore.currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'">Blog</a></li>
            <li><a href="#contact" class="hover:text-blue-500 transition-colors" :class="themeStore.currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold font-mono mb-4" :class="themeStore.currentTheme === 'dark' ? 'text-white' : 'text-gray-900'">Connect</h4>
          <div class="flex flex-wrap gap-4">
            <a href="https://x.com/remnantsec" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-500 transition-colors" aria-label="Follow me on X">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/msambili-ndaga-b55373229/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-500 transition-colors" aria-label="Connect with me on LinkedIn">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <a href="https://github.com/msabenda" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-500 transition-colors" aria-label="View my GitHub profile">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a href="https://wa.me/255789147096" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-500 transition-colors" aria-label="Contact me on WhatsApp">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.33.29 2.59.79 3.74l-.79 4.16 4.25-.79c1.12.47 2.34.74 3.59.74 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.16c-1.14 0-2.25-.29-3.23-.85l-.26-.13-2.52.47.47-2.45-.13-.26c-.59-.98-.93-2.12-.93-3.3 0-4.54 3.7-8.24 8.24-8.24s8.24 3.7 8.24 8.24-3.7 8.24-8.24 8.24zm4.45-6.27c-.25-.12-1.47-.73-1.7-.81-.22-.08-.38-.12-.54.12-.16.24-.62.81-.76.97-.14.16-.28.18-.53.06-.25-.12-1.06-.39-2.02-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.01-.38.11-.50.11-.12.25-.31.37-.47.12-.16.16-.28.24-.47.08-.18.04-.34-.02-.48-.06-.14-.54-1.3-.74-1.78-.19-.47-.39-.41-.54-.41h-.46c-.16 0-.41.06-.62.31-.22.25-.85.85-.85 2.08s.87 2.42 1 2.58c.12.16 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.51.59.18 1.13.15 1.55.09.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.07.14-1.18-.06-.11-.22-.18-.47-.30z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h4 class="text-lg font-semibold font-mono mb-4" :class="themeStore.currentTheme === 'dark' ? 'text-white' : 'text-gray-900'">Get in Touch</h4>
          <p class="text-sm font-sans mb-4" :class="themeStore.currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'">
            Have a project or need cybersecurity expertise? Reach out today.
          </p>
          <a href="#contact" class="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-mono text-sm" aria-label="Go to contact section">Contact Me</a>
        </div>
      </div>
      <div class="mt-8 text-center text-sm font-sans" :class="themeStore.currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'">
        &copy; {{ new Date().getFullYear() }} Remnant. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/theme';
const themeStore = useThemeStore();
</script>

<style scoped>
.particles-container { pointer-events: none; }
.particles.light {
  position: absolute;
  background: #3B82F6;
  opacity: 0.5;
  border-radius: 50%;
  animation: pulse 5s infinite ease-in-out alternate;
}
@keyframes pulse {
  0% { transform: scale(1) translateY(0); opacity: 0.5; }
  50% { transform: scale(1.5) translateY(-10px); opacity: 0.8; }
  100% { transform: scale(1) translateY(0); opacity: 0.5; }
}
</style>