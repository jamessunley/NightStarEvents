import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import { routes } from './routes';

Vue.use(VueRouter)
Vue.use(BootstrapVue);

const router = new VueRouter({
   routes: routes,
   mode: 'history'
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
