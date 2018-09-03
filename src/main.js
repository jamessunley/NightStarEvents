import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Vuetify from 'vuetify'
import { routes } from './routes';
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(VueRouter)
Vue.use(BootstrapVue);
Vue.use(Vuetify)

const router = new VueRouter({
   routes: routes,
   mode: 'history'
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
