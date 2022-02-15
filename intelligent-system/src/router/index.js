import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // {
  //   path: '/',
  //   name: 'intelmain',
  //   component: () => import('@/views/intelligent-main'),
  //   redirect: { name: 'system-home' },
  //   children: [
  //     { path: '/system-home', component: () => import('@/views/modules/system-home'), name: 'system-home', meta: { title: '首页', isTab: true } }
  //   ]
  // }
  {
    path: '/',
    name: 'manager-homepage',
    component: () => import('@/views/intelligent-main'),
    meta: { title: '管理人员首页' }
  }
  // {
  //   path: '/see-data',
  //   name: 'see-data',
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
