import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AaaView from '../views/AaaView.vue'
import EuView from '../views/EuView.vue'
import BaludoView from '../views/BaludoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/a',
      name: 'Aaa',
      component: AaaView
    },
    {
      path: '/e',
      name: 'ee',
      component: EuView
    },
    {
      path: '/gamer',
      name: 'gamer',
      component: BaludoView
    }
  ]
  
})

export default router
