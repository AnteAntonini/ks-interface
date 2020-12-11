import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../components/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../components/Register.vue')
  },
  {
    path: '/lista',
    name: 'ListaPoslova',
    component: () => import(/* webpackChunkName: "ListaPoslova" */ '../views/ListaPoslova.vue')
  },
  {
    path: '/posao',
    name: 'PosaoDetaljno',
    props: true,
    component: () => import(/* webpackChunkName: "PojedinacniPrikaz" */ '../views/PojedinacniPrikaz.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {x: 0, y: 0}
  }
})

export default router
