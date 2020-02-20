import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  
  {
    path: '/inicio',
    name: 'Inicio',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Inicio.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
