import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  const currentTheme = ref<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme.value);
    document.documentElement.classList.toggle('dark', currentTheme.value === 'dark');
  };

  const loadTheme = () => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      currentTheme.value = savedTheme;
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return { currentTheme, toggleTheme, loadTheme };
});