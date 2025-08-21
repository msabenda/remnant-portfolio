<template>
  <section id="about" class="py-20" :class="themeStore.currentTheme === 'dark' ? 'bg-black' : 'bg-gray-100'">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-blue-500 mb-12 text-center font-mono">About remnant_</h2>
      
      <div class="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
        <!-- Profile Image with Social Hover -->
        <div class="relative group w-64 h-64 flex-shrink-0">
          <img 
            src="/assets/images/profile.jpg" 
            alt="Remnant - API & AI Security Hacker"
            class="w-full h-full object-cover rounded-full border-4 border-blue-500/30 group-hover:border-blue-500 transition-all duration-500"
          >
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/70 rounded-full transition-all duration-500">
            <div class="flex gap-4">
              <a href="https://www.linkedin.com/in/msambili-ndaga-b55373229/" target="_blank" rel="noopener" aria-label="LinkedIn" class="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="text-blue-400 hover:text-blue-300">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://x.com/remnantsec" target="_blank" rel="noopener" aria-label="X" class="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="text-blue-400 hover:text-blue-300">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://wa.me/255789147096" target="_blank" rel="noopener" aria-label="WhatsApp" class="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="text-blue-400 hover:text-blue-300">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.479 5.092 1.479 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
              <a href="https://medium.com/@msa2benda" target="_blank" rel="noopener" aria-label="Medium" class="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="text-blue-400 hover:text-blue-300">
                  <path d="M22.085 4.733l1.915-1.832v-.401h-6.634l-4.728 11.768-5.379-11.768h-6.956v.401l2.237 2.693c.218.199.332.49.303.783v10.583c.069.381-.055.773-.323 1.05l-2.52 3.054v.396h7.145v-.401l-2.52-3.049c-.273-.278-.402-.663-.347-1.05v-9.154l6.272 13.659h.729l5.393-13.659v10.881c0 .294 0 .352-.188.544l-1.94 1.877v.402h9.412v-.401l-1.87-1.831c-.164-.124-.249-.332-.214-.534v-13.467c-.035-.203.05-.411.213-.534z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- About Text -->
        <div class="flex-1">
          <h3 class="text-2xl font-bold mb-4 font-mono" :class="themeStore.currentTheme === 'dark' ? 'text-white' : 'text-black'">API specialist | AI security researcher</h3>
          <p class="mb-4 font-mono" :class="themeStore.currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'">
            I'm remnant_ (Msambili Ndaga) a rogue API and AI security specialist with 5+ years of experience. I hack to protect modern systems to expose weaknesses before the black hats do. From APIs to bleeding-edge of AI models, I’ve fortified digital assets and train teams to think like attackers(Hackers Mindset).
          </p>
          <p class="mb-6 font-mono" :class="themeStore.currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'">
           I specialize in breaking the things you think are secure: exposed endpoints, model inference APIs, and data supply chains. In a world where AI meets attack surface, I’m the one who maps the blind spots before adversaries do. Want to stay ahead of zero-days and prompt injection? I’m already there.
          </p>
          <div class="flex flex-wrap gap-3">
            <span class="px-3 py-1 rounded-full text-sm font-mono" :class="themeStore.currentTheme === 'dark' ? 'bg-gray-800 text-blue-400' : 'bg-gray-200 text-blue-600'">API Penetration</span>
            <span class="px-3 py-1 rounded-full text-sm font-mono" :class="themeStore.currentTheme === 'dark' ? 'bg-gray-800 text-blue-400' : 'bg-gray-200 text-blue-600'">AI Security testing</span>
            <span class="px-3 py-1 rounded-full text-sm font-mono" :class="themeStore.currentTheme === 'dark' ? 'bg-gray-800 text-blue-400' : 'bg-gray-200 text-blue-600'">Offensive Teaming</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/theme';

const themeStore = useThemeStore();
</script>

<style scoped>
.social-icon {
  @apply p-2 rounded-full transition-all duration-300;
  background: rgba(0, 0, 0, 0.5);
}
.social-icon:hover {
  background: rgba(59, 130, 246, 0.2);
}
</style>