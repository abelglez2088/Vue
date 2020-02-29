<template>
  <div>
    <b-card class="mt-3" header="Registro de Usuario">
      <b-form @submit.prevent="crearUsuario({email:email,pass:pass})">
        <b-form-group
           aria-label="Email"
           description="ejemplo@dominio.com"
          >
            <b-form-input
            v-model="email"
            type="email"
            required
            aria-placeholder="Ingresa correo electronico"
            >
            </b-form-input>

        </b-form-group>

        <b-form-group
           aria-label="contraseña"
           description="Minimo 6 caracteres"
          >
            <b-form-input
            v-model="pass"
            type="password"
            required
            placeholder="Ingresa Contraseña"
            >
            </b-form-input>
        </b-form-group>

        <b-form-group
           aria-label="Confirma Contraseña"
           description="La contraseña debe ser igual a la anterior"
          >
            <b-form-input
            v-model="pass2"
            type="password"
            required
            placeholder="Confirme contraseña"
            >
            </b-form-input>
        </b-form-group>
         <b-button type="submit"  variant="primary" :disabled="!desactivar">Crear Usuario</b-button>
      </b-form>
    </b-card>
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