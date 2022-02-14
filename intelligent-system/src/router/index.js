import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'intelmain',
    component: () => import('@/views/intelligent-main'),
    children: [
      { path: '/system-home', component: () => import('@/views/modules/system-home'), name: 'home', meta: { title: '首页', isTab: true } }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
