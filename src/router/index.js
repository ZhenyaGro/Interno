import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Blog from '@/pages/Blog.vue';
import BlogDetails from '@/pages/BlogDetails.vue';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blogDetails',
    name: 'BlogDetails',
    component: BlogDetails
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;

