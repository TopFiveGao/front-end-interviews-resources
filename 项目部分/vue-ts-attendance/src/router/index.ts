import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

declare module 'vue-router' {
  interface RouteMeta {
    title: string
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 后台首页
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: '首页'
      },
      children:[
        {
          path: '/home',
          name: 'home',
          component: () => import('../views/sign/SignView.vue')
        },
      ]
    },
    // 登录
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/LoginView.vue')
    },
    // 考勤签到
    {
      path: '/sign',
      name: 'sign',
      component: () => import('../views/sign/SignView.vue')
    },
    // 考勤异常查询
    {
      path: '/exception',
      name: 'exception',
      component: () => import('../views/exception/ExceptionView.vue')
    },
    // 考勤添加审批
    {
      path: '/apply',
      name: 'apply',
      component: () => import('../views/apply/ApplyView.vue')
    },
    // 考勤审批状态
    {
      path: '/check',
      name: 'check',
      component: () => import('../views/check/CheckView.vue')
    },

  ]
})

export default router
