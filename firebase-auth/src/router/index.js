import Vue from 'vue'
import VueRouter from 'vue-router'
var firebase = require("firebase/app");

Vue.use(VueRouter)

const routes = [
 
  {
    path: '/registro',
    name: 'registro',
    component: () => import(/* webpackChunkName: "Registro" */ '../views/Registro.vue')
  },
  {
    path: '/',
    name: 'inicio',
    component: () => import(/* webpackChunkName: "Inicio" */ '../views/Inicio.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/ingreso',
    name: 'ingreso',
    component: () => import(/* webpackChunkName: "Ingreso" */ '../views/Ingreso.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const rutaProtegida = to.matched.some(record => record.meta.requiresAuth);
  const user = firebase.auth().currentUser;

  if(rutaProtegida === true && user === null){
    next({name:'ingreso'})
  }else{
    next()
  }

})

export default router;
