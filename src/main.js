// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Home from './Home'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import VueResource from 'vue-resource'

Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {Home}
}).$mount('#app')
