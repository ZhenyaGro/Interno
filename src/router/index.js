import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Blog from '@/pages/Blog.vue';
import BlogDetails from '@/pages/BlogDetails.vue';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/blogDetails',
    name: 'blogDetails',
    component: BlogDetails
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

