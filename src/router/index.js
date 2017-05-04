import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/App'

import Hero from '@/components/Hero'

import HeroInfo from '@/components/HeroInfo'

import ManageLogin from '@/components/ManageLogin'

import Manager from '@/components/Manager'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/heros/:id',
      name: 'Hero',
      component: Hero
    },
    {
      path: '/heroInfo/:heroId',
      name: 'HeroInfo',
      component: HeroInfo
    },
    {
      path: '/manager',
      name: 'Manager',
      component: Manager,
      meta: {
        auth: true // 这里设置，当前路由需要校验
      },
      subRoutes: {
        '/detail': {
        },
        '/edit': {
        },
        '/append': {
        },
      }
    },
    {
      path: '/login',
      name: 'ManageLogin',
      component: ManageLogin
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.auth)) {
    let accountStorage = sessionStorage.getItem('account')
    if (accountStorage) {
      next();
    } else {
      next({
        path: '/login?origin=' + to.fullPath
      })
    }
  } else {
    next()
  }
})
export default router
