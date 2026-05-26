import { createRouter, createWebHistory } from 'vue-router'
import PageDashboard from '@/pages/PageDashboard.vue'
import PageSettings from '@/pages/PageSettings.vue'
import PageProject from '@/pages/PageProject/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: PageDashboard
    },
    {
      path: '/projects/:id',
      name: 'project',
      component: PageProject 
    },
    {
      path: '/settings',
      name: 'settings',
      component: PageSettings 
    }
  ]
})

export default router