import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'home', component: () => import('@/views/HomeView.vue') },
  { path: '/about', name: 'about', component: () => import('@/views/AboutView.vue') },
  { path: '/props', name: 'props', component: () => import('@/views/props/PropsText.vue') },
  { path: '/event', name: 'event', component: () => import('@/views/event/EventText.vue') },
  { path: '/eventBus', name: 'eventBus', component: () => import('@/views/event-bus/EventBusText.vue') }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
