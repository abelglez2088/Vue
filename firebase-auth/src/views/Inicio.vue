<template>
  <div>
    
    <router-link :to="{name:'agregar'}" >
      <b-button variant="outline-success mt-2">Agregar +</b-button>
    </router-link>

    <b-card  class="mt-3" header="Listado de Tareas">
        <ul class="list-group mt-3">
          <li class="list-group-item"
          v-for ="item of tareas" :key="item.id">
            {{item.id}} - {{item.nombre}}
            <div class="float-right">
              <router-link  class="btn btn-warning btn-sm mr-2"
                :to="{name: 'editar' , params:{ id: item.id}}">
                Editar
            </router-link>
            <button @click="eliminarTarea(item.id)" class="btn btn-danger btn-sm">Eliminar</button>
            </div>
          </li>
        </ul>
    </b-card>
 </div>
</template>

<script>
import {mapState, mapActions} from "vuex"
export default {
  name:'Inicio',
  computed: {
    ...mapState(['usuario','tareas'])
  },
  methods: {
    ...mapActions(['getTareas','eliminarTarea'])
  },
  created() {
    this.getTareas()
  }
}
</script>