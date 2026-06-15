<template>
  <section
    id="contact"
    class="relative overflow-hidden py-24"
    :class="themeStore.currentTheme === 'dark' ? 'bg-black' : 'bg-gray-100'"
  >
    <div
      class="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl dark:bg-blue-500/15"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10"
      aria-hidden="true"
    />

    <div class="container relative mx-auto px-4">
      <div class="mx-auto max-w-5xl animate-fade-in">
        <div class="mb-14 text-center">
          <p
            class="mb-2 font-mono text-xs font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400"
          >
            Contact
          </p>
          <h2 class="mb-4 text-4xl font-bold text-blue-500 font-mono md:text-5xl">
            Drop your secure line
          </h2>
          <p
            class="mx-auto max-w-2xl text-base font-sans leading-relaxed md:text-lg"
            :class="themeStore.currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'"
          >
            Ready to collaborate on API security, AI red teaming, or a consultation—send a message
            and I’ll get back to you.
          </p>
        </div>

        <div class="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          <div class="flex flex-col gap-4 lg:col-span-5">
            <a
              href="mailto:msa2benda@gmail.com"
              class="contact-card group flex gap-4 rounded-xl border p-5 transition-all duration-300"
              :class="
                themeStore.currentTheme === 'dark'
                  ? 'border-gray-800 bg-gray-900/80 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5'
                  : 'border-gray-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/10'
              "
            >
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                :class="themeStore.currentTheme === 'dark' ? 'bg-blue-500/15 text-blue-400' : 'bg-blue-50 text-blue-600'"
              >
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="mb-1 font-mono text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                  Email
                </h3>
                <p class="font-mono text-sm transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-300" :class="themeStore.currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'">
                  msa2benda@gmail.com
                </p>
              </div>
            </a>

            <div
              class="contact-card flex gap-4 rounded-xl border p-5 transition-all duration-300"
              :class="
                themeStore.currentTheme === 'dark'
                  ? 'border-gray-800 bg-gray-900/80'
                  : 'border-gray-200 bg-white'
              "
            >
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                :class="themeStore.currentTheme === 'dark' ? 'bg-blue-500/15 text-blue-400' : 'bg-blue-50 text-blue-600'"
              >
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 class="mb-1 font-mono text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                  Phone
                </h3>
                <p class="font-mono text-sm" :class="themeStore.currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'">
                  +255 789 147 096
                </p>
              </div>
            </div>

            <a
              href="https://t.me/remnantsec"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-card group flex gap-4 rounded-xl border p-5 transition-all duration-300"
              :class="
                themeStore.currentTheme === 'dark'
                  ? 'border-gray-800 bg-gray-900/80 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5'
                  : 'border-gray-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/10'
              "
            >
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                :class="themeStore.currentTheme === 'dark' ? 'bg-blue-500/15 text-blue-400' : 'bg-blue-50 text-blue-600'"
              >
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div>
                <h3 class="mb-1 font-mono text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                  Telegram
                </h3>
                <p class="font-mono text-sm transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-300" :class="themeStore.currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'">
                  @remnantsec — DM me
                </p>
              </div>
            </a>
          </div>

          <div
            class="relative rounded-2xl border p-1 shadow-xl lg:col-span-7"
            :class="
              themeStore.currentTheme === 'dark'
                ? 'border-gray-800 bg-gradient-to-br from-blue-500/20 via-gray-900 to-gray-950'
                : 'border-gray-200 bg-gradient-to-br from-blue-500/10 via-white to-gray-50'
            "
          >
            <div
              class="rounded-xl p-6 sm:p-8"
              :class="themeStore.currentTheme === 'dark' ? 'bg-gray-950/90' : 'bg-white/95'"
            >
              <h3 class="mb-6 font-mono text-lg font-semibold text-blue-600 dark:text-blue-400">
                Send a message
              </h3>
              <form @submit.prevent="handleSubmit" class="space-y-5">
                <div>
                  <label for="name" class="mb-2 block text-xs font-medium uppercase tracking-wide font-mono" :class="themeStore.currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'">Your name</label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    name="name"
                    required
                    class="w-full rounded-lg border px-4 py-3.5 font-mono text-sm transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                    :class="themeStore.currentTheme === 'dark' ? 'border-gray-700 bg-gray-900 text-white placeholder-gray-500' : 'border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400'"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label for="contact-detail" class="mb-2 block text-xs font-medium uppercase tracking-wide font-mono" :class="themeStore.currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'">Email, phone, or @Telegram</label>
                  <input
                    id="contact-detail"
                    v-model="form.contact"
                    type="text"
                    name="contact"
                    required
                    class="w-full rounded-lg border px-4 py-3.5 font-mono text-sm transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                    :class="themeStore.currentTheme === 'dark' ? 'border-gray-700 bg-gray-900 text-white placeholder-gray-500' : 'border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400'"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label for="message" class="mb-2 block text-xs font-medium uppercase tracking-wide font-mono" :class="themeStore.currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'">How can I help?</label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    name="message"
                    rows="4"
                    required
                    class="w-full resize-y rounded-lg border px-4 py-3.5 font-mono text-sm transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                    :class="themeStore.currentTheme === 'dark' ? 'border-gray-700 bg-gray-900 text-white placeholder-gray-500' : 'border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400'"
                    placeholder="Scope, timelines, or security goals…"
                  />
                </div>

                <input v-model="form.website" type="text" name="website" class="hidden" tabindex="-1" autocomplete="off" />

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3.5 font-mono text-sm font-semibold text-white shadow-md transition-all duration-300 hover:from-blue-500 hover:to-blue-600 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span v-if="!isSubmitting" class="relative z-10">Send secure message</span>
                  <span v-else class="relative z-10 flex items-center justify-center gap-2">
                    <svg class="h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending…
                  </span>
                </button>
              </form>

              <div
                v-if="submitSuccess"
                class="mt-5 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-center text-sm font-mono text-green-600 dark:text-green-400"
              >
                Message sent. I’ll respond within 24 hours.
              </div>
              <div
                v-if="submitError"
                class="mt-5 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-center text-sm font-mono text-red-600 dark:text-red-400"
              >
                {{ submitError }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useThemeStore } from '@/stores/theme';

const themeStore = useThemeStore();

const googleAppsScriptUrl = (
  import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL as string | undefined
)?.trim();

const form = ref({
  name: '',
  contact: '',
  message: '',
  website: '',
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref('');

const timestamp = computed(() => new Date().toISOString());
const userAgent = computed(() => navigator.userAgent);
const referrer = computed(() => document.referrer || 'direct');

const isValidEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidPhone = (phone: string): boolean => /^\+?\d{10,15}$/.test(phone.replace(/[\s\-()]/g, ''));
const isValidTelegram = (handle: string): boolean => /^@[a-zA-Z0-9_]{5,32}$/.test(handle);
const isValidContact = (contact: string): boolean =>
  isValidEmail(contact) || isValidPhone(contact) || isValidTelegram(contact);

const handleSubmit = async () => {
  submitSuccess.value = false;
  submitError.value = '';

  if (form.value.website.trim()) {
    submitError.value = 'Invalid submission detected';
    return;
  }

  if (!isValidContact(form.value.contact)) {
    submitError.value = 'Please enter a valid email, phone number, or Telegram handle (@username)';
    return;
  }

  if (form.value.message.length < 10) {
    submitError.value = 'Message must be at least 10 characters long';
    return;
  }

  if (!googleAppsScriptUrl) {
    submitError.value =
      'Contact form is not configured. Set VITE_GOOGLE_APPS_SCRIPT_URL in your environment.';
    return;
  }

  const body = new URLSearchParams();
  body.set('name', form.value.name.trim());
  body.set('contact', form.value.contact.trim());
  body.set('message', form.value.message.trim());
  body.set('timestamp', timestamp.value);
  body.set('userAgent', userAgent.value);
  body.set('referrer', referrer.value);
  if (form.value.website.trim()) body.set('website', form.value.website);

  isSubmitting.value = true;

  const payload = body.toString();
  const maxWaitMs = 2500;

  try {
    await Promise.race([
      fetch(googleAppsScriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload,
      }),
      new Promise<void>((resolve) => setTimeout(resolve, maxWaitMs)),
    ]);

    submitSuccess.value = true;
    form.value = { name: '', contact: '', message: '', website: '' };
    setTimeout(() => {
      submitSuccess.value = false;
    }, 8000);
  } catch (err: unknown) {
    submitError.value =
      'Could not send the message (browser blocked the request). Try another browser or network.';
    if (import.meta.env.DEV) console.error('[Contact] submit failed', err);
  } finally {
    isSubmitting.value = false;
  }
};

onMounted(() => {
  if (import.meta.env.DEV) {
    console.info('[Contact] Apps Script URL:', googleAppsScriptUrl || '(not set)');
  }
});
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.55s ease-out;
}

input[name='website'] {
  position: absolute !important;
  left: -9999px !important;
  width: 1px !important;
  height: 1px !important;
  opacity: 0 !important;
}
</style>
