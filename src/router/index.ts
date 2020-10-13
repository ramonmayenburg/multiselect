import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../pages/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', 
    name: 'home',
    components: {
      default: home
    } 
  },
  {
    path: '*',
    name: 'catchAll',
    component: home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
