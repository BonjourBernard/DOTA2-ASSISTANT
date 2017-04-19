import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/App'

import Hero from '@/components/Hero'

import HeroInfo from '@/components/HeroInfo'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
