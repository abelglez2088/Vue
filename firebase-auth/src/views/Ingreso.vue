<template>
  <div>
    <b-card class="mt-3" header="Ingreso a Sistema">
     <b-form @submit.prevent="ingresoUsuario({email,pass})">
      <b-form-group
        label="Correo Electronico:"
        description="Ejemplo@dominio.com"
      >
      <b-form-input
        id="inputMail"
        type="email"
        required=""
        v-model="email"
        placehorlder="Ingresa Correo Electronico"
        ></b-form-input>
      </b-form-group>

       <b-form-group
        label="Contraseña"
        description="Ejemplo@dominio.com"
      >
      <b-form-input
        id="passw"
        type="password"
        required
        v-model="pass"
        placehorlder="Ingresa Contraseña"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Acceder</b-button>
    </b-form>
    <p>{{error}}</p>

   </b-card>
    
    
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex"
export default {
  name:'Ingreso',
  data() {
    return {
      email:'',
      pass:''
    }
  },
  methods: {
    ...mapActions(['ingresoUsuario'])
  },
  computed: {
    ...mapState(['error'])
  },
}
</script>