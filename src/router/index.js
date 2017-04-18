import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/App'

import Hero from '@/components/Hero'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/hero',
      name: 'Hero',
      component: Hero
    }
  ]
})
