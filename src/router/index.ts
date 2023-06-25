import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'event', component: () => import('@/views/event/EventText.vue') },
  { path: '/eventBus', name: 'eventBus', component: () => import('@/views/event-bus/EventBusText.vue') },
  { path: '/model', name: 'model', component: () => import('@/views/v-model/ModelText.vue') },
  { path: '/arrts-listeners', name: 'arrts-listeners', component: () => import('@/views/arrts-listeners/AttrsListenersTest.vue') },
  { path: '/pinia', name: 'pinia', component: () => import('@/views/pinia/PiniaText.vue') }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
