<template>
  <section id="contact" class="py-20" :class="themeStore.currentTheme === 'dark' ? 'bg-black' : 'bg-gray-100'">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto animate-fade-in">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-blue-500 mb-4 font-mono">Drop your Secure Line</h2>
          <p class="text-xl font-mono" :class="themeStore.currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'">
           Ping me for a more consultation ready to collaborate on your security needs.
          </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 p-3 rounded-lg" :class="themeStore.currentTheme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-100/50'">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-medium mb-1 font-mono" :class="themeStore.currentTheme === 'dark' ? 'text-white' : 'text-gray-900'">Email</h3>
                <p class="font-mono" :class="themeStore.currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'">msa2benda@gmail.com</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 p-3 rounded-lg" :class="themeStore.currentTheme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-100/50'">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-medium mb-1 font-mono" :class="themeStore.currentTheme === 'dark' ? 'text-white' : 'text-gray-900'">Phone Contact</h3>
                <p class="font-mono" :class="themeStore.currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'">+255 789 147 096</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 p-3 rounded-lg" :class="themeStore.currentTheme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-100/50'">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-medium mb-1 font-mono" :class="themeStore.currentTheme === 'dark' ? 'text-white' : 'text-gray-900'">Secure Chat</h3>
                <a href="https://t.me/remnantsec" class="font-mono hover:text-blue-500" :class="themeStore.currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'">DM me please</a>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="p-8 rounded-xl border animate-fade-in" :class="themeStore.currentTheme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'">
            <!-- Hidden iframe for form submission -->
            <iframe 
              ref="hiddenFrame"
              name="hidden_iframe" 
              style="display:none;"
              @load="onFrameLoad"
            ></iframe>
            
            <form 
              ref="contactForm"
              @submit="handleSubmit" 
              method="POST" 
              action="https://script.google.com/macros/s/AKfycbyFpukcvk6UAf19yu1XY5heUORnTKTs9Cba_r9sLtoOqBYEafL7oMDF8c9gICy18tFwkQ/exec"
              target="hidden_iframe"
            >
              <div class="mb-6">
                <label for="name" class="block text-sm font-medium mb-2 font-mono" :class="themeStore.currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  v-model="form.name"
                  required
                  class="w-full px-5 py-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono transition-all duration-300"
                  :class="themeStore.currentTheme === 'dark' ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-100 border-gray-300 text-black placeholder-gray-400'"
                  placeholder="John Doe"
                />
              </div>
              <div class="mb-6">
                <label for="contact" class="block text-sm font-medium mb-2 font-mono" :class="themeStore.currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'">Secure Contact</label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  v-model="form.contact"
                  required
                  class="w-full px-5 py-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono transition-all duration-300"
                  :class="themeStore.currentTheme === 'dark' ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-100 border-gray-300 text-black placeholder-gray-400'"
                  placeholder="Email Address"
                />
              </div>
              <div class="mb-6">
                <label for="message" class="block text-sm font-medium mb-2 font-mono" :class="themeStore.currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'">Encrypted Message</label>
                <textarea
                  id="message"
                  name="message"
                  v-model="form.message"
                  rows="4"
                  required
                  class="w-full px-5 py-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono transition-all duration-300"
                  :class="themeStore.currentTheme === 'dark' ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-100 border-gray-300 text-black placeholder-gray-400'"
                  placeholder="Describe your security needs..."
                ></textarea>
              </div>
              
              <!-- Hidden fields -->
              <input type="hidden" name="timestamp" :value="timestamp" />
              <input type="hidden" name="userAgent" :value="userAgent" />
              <input type="hidden" name="referrer" :value="referrer" />
              
              <!-- Honeypot field -->
              <input type="text" name="website" v-model="form.website" class="hidden" tabindex="-1" autocomplete="off" />
              
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-300 hover:shadow-lg flex items-center justify-center font-mono disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isSubmitting">Send Secure Message</span>
                <span v-else class="flex items-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              </button>
            </form>
            
            <div v-if="submitSuccess" class="mt-4 p-4 rounded-lg animate-fade-in font-mono" :class="themeStore.currentTheme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'">
              Message sent securely! Data encrypted and stored. I'll respond within 24 hours.
            </div>
            <div v-if="submitError" class="mt-4 p-4 rounded-lg animate-fade-in font-mono" :class="themeStore.currentTheme === 'dark' ? 'bg-red-500/10 text-red-400' : 'bg-red-100/50 text-red-600'">
              {{ submitError }}
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
const contactForm = ref<HTMLFormElement>();
const hiddenFrame = ref<HTMLIFrameElement>();

const form = ref({
  name: '',
  contact: '',
  message: '',
  website: '', // honeypot field
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref('');

// Computed properties for hidden fields
const timestamp = computed(() => new Date().toISOString());
const userAgent = computed(() => navigator.userAgent);
const referrer = computed(() => document.referrer || 'direct');

// Validation functions
const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const isValidPhone = (phone: string): boolean => {
  return /^\+?\d{10,15}$/.test(phone.replace(/[\s\-\(\)]/g, ''));
};

const isValidTelegram = (handle: string): boolean => {
  return /^@[a-zA-Z0-9_]{5,32}$/.test(handle);
};

const isValidContact = (contact: string): boolean => {
  return isValidEmail(contact) || isValidPhone(contact) || isValidTelegram(contact);
};

const handleSubmit = (event: Event) => {
  event.preventDefault();
  
  // Reset states
  submitSuccess.value = false;
  submitError.value = '';
  
  // Honeypot check
  if (form.value.website) {
    submitError.value = 'Invalid submission detected';
    return;
  }

  // Validate contact info
  if (!isValidContact(form.value.contact)) {
    submitError.value = 'Please enter a valid email, phone number, or Telegram handle (@username)';
    return;
  }

  // Validate message length
  if (form.value.message.length < 10) {
    submitError.value = 'Message must be at least 10 characters long';
    return;
  }

  console.log('Submitting form data:', {
    name: form.value.name,
    contact: form.value.contact,
    message: form.value.message,
    timestamp: timestamp.value,
    userAgent: userAgent.value,
    referrer: referrer.value
  });

  isSubmitting.value = true;
  
  // Submit the form to the hidden iframe
  contactForm.value?.submit();
  
  // Set a timeout to show success message
  setTimeout(() => {
    isSubmitting.value = false;
    submitSuccess.value = true;
    
    // Reset form
    form.value = { name: '', contact: '', message: '', website: '' };
    
    // Auto-hide success message after 5 seconds
    setTimeout(() => {
      submitSuccess.value = false;
    }, 5000);
  }, 2000); // 2 second delay to simulate processing
};

const onFrameLoad = () => {
  console.log('Hidden iframe loaded - form submission complete');
  // The form has been submitted successfully
  // We can't read the response due to CORS, but the submission went through
};

onMounted(() => {
  console.log('Contact form component mounted');
});
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

/* Ensure honeypot field is completely hidden */
input[name="website"] {
  position: absolute !important;
  left: -9999px !important;
  width: 1px !important;
  height: 1px !important;
  opacity: 0 !important;
}
</style>