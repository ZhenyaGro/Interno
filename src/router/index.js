import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Blog from '@/pages/Blog.vue';
import BlogDetails from '@/pages/BlogDetails.vue';
import Project from '@/pages/Project.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/blogDetails',
    name: 'BlogDetails',
    component: BlogDetails
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },
  {
    path: '/',
    redirect: '/home'
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

