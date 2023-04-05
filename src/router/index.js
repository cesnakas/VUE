import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Vue',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/me',
      name: 'Me',
      component: () => import('../views/MeView.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/ContactView.vue')
    },
    { path: '/:pathMatch(.*)', name: 'Not Found', component: () => import('../views/NotFound.vue') }
  ],
  // Active links
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
})

// Title
router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})

export default router
