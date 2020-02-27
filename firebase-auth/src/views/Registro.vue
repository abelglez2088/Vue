<template>
  <div>
    <h1>Registro de usuarios</h1>  
    <form @submit.prevent="crearUsuario({email:email,pass:pass})">
      <input type="email" v-model="email">
      <input type="password" v-model="pass">
      <input type="password" v-model="pass2">
      <button type="submit" :disabled="!desactivar">Crear Usuario</button>
    </form>
    <p>{{error}}</p>
  </div>
</template>

<script>
import {mapActions,mapState} from "vuex";

export default {
  name:'Registro',
  data() {
    return {
      email:'',
      pass:'',
      pass2:''
    }
  },
  methods: {
    
    ...mapActions(['crearUsuario'])
  },
  computed: {
   ...mapState(['error']),
   desactivar(){
     return this.pass===this.pass2 && this.pass!=''
   }
  },
}
</script>