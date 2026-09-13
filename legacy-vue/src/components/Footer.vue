<template>
  <footer
    class="relative overflow-hidden pb-8 pt-16"
    :class="themeStore.currentTheme === 'dark' ? 'bg-gray-950' : 'bg-gray-100'"
  >
    <!-- Glow accent -->
    <div
      class="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent"
      aria-hidden="true"
    />

    <div class="container relative mx-auto px-4">
      <!-- Brand & Tagline -->
      <div class="mx-auto mb-12 max-w-xl text-center">
        <router-link
          to="/"
          class="mb-3 inline-block font-mono text-3xl font-bold tracking-tight text-blue-600 transition-colors hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
        >
          remnant01
        </router-link>
        <p
          class="mx-auto max-w-sm text-sm leading-relaxed font-sans"
          :class="themeStore.currentTheme === 'dark' ? 'text-gray-500' : 'text-gray-500'"
        >
          API &amp; AI security specialist — offensive testing, hardening, and
          training for teams shipping modern software.
        </p>
      </div>

      <!-- Centered Nav Links -->
      <nav class="nav-pill mb-10 flex flex-wrap items-center justify-center gap-2">
        <router-link
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="inline-block rounded-full px-5 py-2 font-mono text-xs font-medium uppercase tracking-widest transition-all duration-200"
          :class="
            themeStore.currentTheme === 'dark'
              ? 'text-gray-400 hover:bg-blue-500/10 hover:text-blue-400'
              : 'text-gray-600 hover:bg-blue-500/10 hover:text-blue-600'
          "
        >
          {{ link.label }}
        </router-link>
      </nav>

      <!-- Social Icons Row -->
      <div class="mb-12 flex items-center justify-center gap-4">
        <a
          v-for="s in socials"
          :key="s.label"
          :href="s.url"
          target="_blank"
          rel="noopener noreferrer"
          class="social-btn flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300"
          :class="
            themeStore.currentTheme === 'dark'
              ? 'border-gray-700 bg-gray-900 text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-300 hover:shadow-lg hover:shadow-blue-500/10'
              : 'border-gray-200 bg-white text-blue-600 hover:border-blue-300 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-500/10'
          "
          :aria-label="s.label"
        >
          <svg
            class="h-4 w-4"
            fill="currentColor"
            :viewBox="s.iconViewBox"
            aria-hidden="true"
          >
            <path :d="s.iconPath" />
          </svg>
        </a>
      </div>

      <!-- CTA -->
      <div class="mb-14 text-center">
        <router-link
          to="/#contact"
          class="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 font-mono text-sm font-semibold text-white shadow-md transition-all duration-300 hover:from-blue-500 hover:to-blue-600 hover:shadow-lg"
        >
          <svg
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          Start a conversation
        </router-link>
      </div>

      <!-- Bottom bar -->
      <div
        class="flex flex-col items-center gap-3 border-t pt-6 text-center font-sans text-xs"
        :class="
          themeStore.currentTheme === 'dark'
            ? 'border-gray-800 text-gray-500'
            : 'border-gray-200 text-gray-400'
        "
      >
        <p>&copy; {{ year }} Msambili Ndaga. All rights reserved.</p>
        <p class="font-mono text-[11px] opacity-60">Built with Vue &amp; Tailwind</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useThemeStore } from '@/stores/theme';

const themeStore = useThemeStore();
const year = computed(() => new Date().getFullYear());

const navLinks = [
  { to: '/#hero', label: 'Home' },
  { to: '/#services', label: 'Services' },
  { to: '/#experience', label: 'Experience' },
  { to: '/blog', label: 'Blog' },
  { to: '/#contact', label: 'Contact' },
];

const socials = [
  {
    label: 'X',
    url: 'https://x.com/remnantsec',
    iconViewBox: '0 0 24 24',
    iconPath: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/msambili-ndaga-b55373229/',
    iconViewBox: '0 0 24 24',
    iconPath: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/msabenda',
    iconViewBox: '0 0 24 24',
    iconPath: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  },
  {
    label: 'WhatsApp',
    url: 'https://wa.me/255789147096',
    iconViewBox: '0 0 24 24',
    iconPath: 'M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.33.29 2.59.79 3.74l-.79 4.16 4.25-.79c1.12.47 2.34.74 3.59.74 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.16c-1.14 0-2.25-.29-3.23-.85l-.26-.13-2.52.47.47-2.45-.13-.26c-.59-.98-.93-2.12-.93-3.3 0-4.54 3.7-8.24 8.24-8.24s8.24 3.7 8.24 8.24-3.7 8.24-8.24 8.24zm4.45-6.27c-.25-.12-1.47-.73-1.7-.81-.22-.08-.38-.12-.54.12-.16.24-.62.81-.76.97-.14.16-.28.18-.53.06-.25-.12-1.06-.39-2.02-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.01-.38.11-.50.11-.12.25-.31.37-.47.12-.16.16-.28.24-.47.08-.18.04-.34-.02-.48-.06-.14-.54-1.3-.74-1.78-.19-.47-.39-.41-.54-.41h-.46c-.16 0-.41.06-.62.31-.22.25-.85.85-.85 2.08s.87 2.42 1 2.58c.12.16 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.51.59.18 1.13.15 1.55.09.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.07.14-1.18-.06-.11-.22-.18-.47-.30z',
  },
];
</script>

<style scoped>
/* Pill nav link hover */
.nav-pill a:hover {
  transform: translateY(-1px);
}
</style>
