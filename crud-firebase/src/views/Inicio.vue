<template>
  <div>
    <h1> lista de tareas</h1>
    <ul>
      <li v-for ="item of tareas" :key="item.id">
        {{item.id}} - {{item.nombre}}
      </li>
        
    </ul>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: 'Inicio',
  methods: {
    ...mapActions(['getTareas'])
  },
  created() {
    this.getTareas()
  },
  computed: {
    ...mapState(['tareas'])
  }
}
</script>