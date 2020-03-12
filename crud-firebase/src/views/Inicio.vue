<template>
  <div>
    <h1> Lista de tareas</h1>
    <router-link :to="{name:'agregar'}" >
      <button class="btn btn-success btn-block">Agregar +</button>
    </router-link>
    <ul class="list-group mt-5">
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
  </div>
</template>

<script>
//import mapstate se usa para poder hacer uso de los estados
import {mapActions, mapState} from 'vuex'
export default {
  name: 'Inicio',
  methods: {
    //aqui importamos nuestras funciones para para poderlas usar
    ...mapActions(['getTareas','eliminarTarea'])//manda a llamar un mapAtcion a travez de un arreglo y
  },   
  //aqui utilizamos la funcion gettareas()                                           // como parametro le ponemos el nombre de la accion
  created() {
    this.getTareas()
  },
  //Aqui se manda el mapState
  computed: {
    ...mapState(['tareas'])
  }
}
</script>