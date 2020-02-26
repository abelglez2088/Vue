import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

var firebase = require("firebase/app");

require("firebase/auth");

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
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
