import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home.vue'
import City from '@/pages/city/city.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: home
  }, {
    path: '/city',
    name: 'City',
    component: City

  }
  ]
})
