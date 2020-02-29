<template>
  <div>
    <b-card class="mt-3" header="Registro De Nueva Tarea">
      <b-form @submit.prevent="agregarTarea(nombre)">
        <b-form-group
          label="Nueva Tarea"
         >
        <b-form-input
          v-model="nombre"
          type="text"
          required
          placeholder="Ingresa la nueva tarea"
        ></b-form-input>
      </b-form-group>
        <b-button type="submit" variant="primary">Agregar</b-button>
      </b-form>  
    </b-card>
   
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name:'Agregar',
  data() {
    return {
      nombre: ''
    }
  },
  methods: {
    ...mapActions(['agregarTarea'])
  },
}
</script>