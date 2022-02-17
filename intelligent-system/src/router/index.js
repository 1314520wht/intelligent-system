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
    meta: { title: '管理人员首页' },
    children: [
      {
        path: '/see-all-data',
        name: 'see-all-data',
        component: () => import('@/views/modules/manager/see-data/all-project'),
        meta: { title: '见证数据-全部' }
      }
    ]
  },
  {
    path: '/see-data',
    name: 'see-data',
    component: () => import('@/views/modules/manager/see-data/all-project'),
    meta: { title: '见证数据-列表' }
  },
  {
    path: '/peosonal-information',
    name: 'peosonal-information',
    component: () => import('@/views/modules/manager/personal-information'),
    meta: { title: '账号管理-个人信息' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
