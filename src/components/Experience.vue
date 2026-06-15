<template>
  <section
    id="experience"
    class="relative py-24"
    :class="themeStore.currentTheme === 'dark' ? 'bg-black' : 'bg-gray-100'"
  >
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
      aria-hidden="true"
    />
    <div class="container relative mx-auto px-4">
      <h2 class="mb-4 text-center text-4xl font-bold text-blue-500 font-mono">
        My Experience
      </h2>
      <p
        class="mx-auto mb-14 max-w-xl text-center text-sm font-sans md:text-base"
        :class="themeStore.currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'"
      >
        A concise path from security consulting to API offensive testing and AI security research.
      </p>

      <div class="relative mx-auto max-w-3xl">
        <div
          class="timeline-glow pointer-events-none absolute left-[22px] top-4 bottom-4 w-px md:left-[26px]"
          :class="themeStore.currentTheme === 'dark' ? 'bg-gradient-to-b from-blue-400/50 via-blue-600/30 to-blue-400/20' : 'bg-gradient-to-b from-blue-500/50 via-blue-400/35 to-blue-300/20'"
          aria-hidden="true"
        />

        <ol class="relative space-y-0">
          <li
            v-for="(exp, index) in experiences"
            :key="exp.id"
            class="group relative flex gap-5 pb-14 last:pb-0 md:gap-8"
          >
            <div class="relative z-10 flex w-11 shrink-0 flex-col items-center md:w-14">
              <div
                class="relative flex h-11 w-11 items-center justify-center rounded-full border-2 font-mono text-xs font-bold tabular-nums shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg md:h-14 md:w-14 md:text-sm"
                :class="
                  themeStore.currentTheme === 'dark'
                    ? 'border-blue-400/80 bg-gradient-to-br from-gray-900 to-gray-950 text-blue-300 ring-2 ring-blue-500/20 group-hover:border-blue-300 group-hover:ring-blue-400/40'
                    : 'border-blue-500 bg-white text-blue-600 ring-2 ring-blue-100 group-hover:border-blue-600 group-hover:ring-blue-200'
                "
              >
                <time :datetime="String(exp.year)">{{ exp.year }}</time>
                <span
                  class="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </div>
              <span
                class="mt-2 font-mono text-[10px] font-medium tracking-widest opacity-50"
                :class="themeStore.currentTheme === 'dark' ? 'text-blue-400/80' : 'text-blue-600/70'"
              >
                {{ String(index + 1).padStart(2, '0') }}
              </span>
            </div>

            <article
              class="experience-panel min-w-0 flex-1 rounded-xl border p-6 shadow-md transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:shadow-xl md:p-8"
              :class="
                themeStore.currentTheme === 'dark'
                  ? 'border-gray-800 bg-gray-900/90 group-hover:border-blue-500/30'
                  : 'border-gray-200/80 bg-white group-hover:border-blue-200'
              "
            >
              <div
                class="mb-3 inline-flex rounded-full px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider"
                :class="themeStore.currentTheme === 'dark' ? 'bg-blue-500/15 text-blue-300' : 'bg-blue-50 text-blue-700'"
              >
                Milestone
              </div>
              <h3
                class="mb-3 text-xl font-bold font-mono transition-colors duration-300 group-hover:text-blue-400 md:text-2xl dark:group-hover:text-blue-300"
                :class="themeStore.currentTheme === 'dark' ? 'text-white' : 'text-gray-900'"
              >
                {{ exp.title }}
              </h3>
              <p
                class="text-sm font-sans leading-relaxed md:text-base"
                :class="themeStore.currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'"
              >
                {{ exp.description }}
              </p>
            </article>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/theme';

const themeStore = useThemeStore();

const experiences = [
  {
    id: 1,
    year: 2020,
    title: 'Cybersecurity Consultant',
    description:
      'Delivered security advisory work for teams adopting stronger baselines: risk prioritization, control design, and pragmatic hardening so compromises were less likely and easier to detect.',
  },
  {
    id: 2,
    year: 2023,
    title: 'API Penetration Tester',
    description:
      'Focused on offensive API assessments across REST and GraphQL stacks, grounded in OWASP API Security and hands-on training through APIsec University—mapping real abuse paths, not just scanner noise.',
  },
  {
    id: 3,
    year: 2025,
    title: 'AI Security Researcher',
    description:
      'Leads testing and research on LLM-powered products: injection and jailbreak chains, unsafe tool use, leakage of sensitive context, and bypass of safeguards—working with builders to close gaps before release.',
  },
];
</script>

<style scoped>
.timeline-glow {
  box-shadow: 0 0 18px -2px rgba(59, 130, 246, 0.25);
}
</style>
