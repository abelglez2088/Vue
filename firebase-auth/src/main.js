import Vue from 'vue'
//bootstrap
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import router from '@/router'
import store from '@/store'
//se tiene que importar firebase
var firebase = require("firebase/app");
//se agregar la autenticacion de firebase
require("firebase/auth");
require("firebase/firestore");
//se toman los parametros y la inicializacion del objeto(DB) de firebase
var firebaseConfig = {
  apiKey: "AIzaSyBUkl5nNhwcYeeIkr9OMlOqPMsL6qF2wpw",
  authDomain: "crud-d8225.firebaseapp.com",
  databaseURL: "https://crud-d8225.firebaseio.com",
  projectId: "crud-d8225",
  storageBucket: "crud-d8225.appspot.com",
  messagingSenderId: "189769872041",
  appId: "1:189769872041:web:ba75e24f70c1d0a5a5afb8"
};
// Initialize Firebase
const firebaseApp= firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore()

Vue.config.productionTip = false

//se lee al usuario
firebase.auth().onAuthStateChanged((user)=>{
  console.log(user);
  if(user){
    store.dispatch('detectarUsuario',{email:user.email, uid:user.uid})
  }else{
    store.dispatch('detectarUsuario',null)
  }
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
  
})
