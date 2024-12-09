import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NewTicketView from '@/views/NewTicketView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'my-tickets',
      component: HomeView,
    },
    {
      path: '/new-ticket',
      name: 'new-ticket',
      component: NewTicketView,
    },
  ],
})

export default router
