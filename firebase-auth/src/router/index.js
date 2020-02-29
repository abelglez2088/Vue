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
    //el meta sirve para proteger las rutas
    meta: { requiresAuth: true }
  },
  {
    path: '/ingreso',
    name: 'ingreso',
    component: () => import(/* webpackChunkName: "Ingreso" */ '../views/Ingreso.vue')
  },
  {
    path: '/agregar',
    name: 'agregar',
    component: () => import(/* webpackChunkName: "Agregar" */ '../views/Agregar.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/editar/id',
    name: 'editar',
    component: () => import(/* webpackChunkName: "Ingreso" */ '../views/Editar.vue'),
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//impide el accesso al inicio sin auth y renderiza a Ingreso

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
