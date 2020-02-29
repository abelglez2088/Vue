<template>
  <div>  
    <b-card class="mt-3" header="Editar Tarea">
      <b-form  @submit.prevent="editarTarea(tarea)">
        <b-form-group
          label="Nombre Tarea"
        >
            <b-form-input
              type="text"
              required 
              v-model="tarea.nombre"
            >

            </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Aceptar</b-button>
      </b-form>
    </b-card>
  </div>
</template>
<script>

import {mapActions, mapState} from 'vuex'
export default {
  name: 'Editar',

  data(){
    return{
      id:this.$route.params.id
    }
  },
  methods: {
    ...mapActions(['getTarea', 'editarTarea'])
  },
  created() {
    this.getTarea(this.id)
  },
  computed: {
    ...mapState(['tarea'])
  },
}
</script>