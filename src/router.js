import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/table-using-component',
      component: () => import('@/views/TableUsingComponent.vue')
    },
    {
      path: '/table-using-html',
      component: () => import('@/views/TableUsingHtml.vue')
    },
    {
      path: '/error404',
      component: () => import('@/components/Error404.vue')
    },
    {
      path: '/error500',
      component: () => import('@/components/Error500.vue')
    },
    {
      path: '/dev',
      component: () => import('@/views/Dev.vue')
    },
  ]
})

export default router
