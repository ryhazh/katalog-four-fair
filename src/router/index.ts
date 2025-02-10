import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/catalogue',  
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/catalogue',
      name: 'catalogue',
      component: () => import('../views/catalogue/MainPage.vue'),
    },
    {
      path: '/catalogue/:id',
      name: 'catalogue-details',
      component: () => import('../views/catalogue/DetailsPage.vue'),
    }
  ]
})

export default router
