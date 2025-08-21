import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import BlogList from '@/components/BlogList.vue';
import BlogPost from '@/components/BlogPost.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blog',
    name: 'BlogList',
    component: BlogList,
  },
  {
    path: '/blog/post/:id',
    name: 'BlogPost',
    component: BlogPost,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;