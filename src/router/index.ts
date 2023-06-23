import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'event', component: () => import('@/views/event/EventText.vue') },
  { path: '/eventBus', name: 'eventBus', component: () => import('@/views/event-bus/EventBusText.vue') },
  { path: '/model', name: 'model', component: () => import('@/views/v-model/ModelText.vue') }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
