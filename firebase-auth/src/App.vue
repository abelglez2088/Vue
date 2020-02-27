<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name:'inicio'}">Inicio</router-link> |
       <router-link :to="{name:'registro'}">Registro</router-link> |
        <router-link :to="{name:'ingreso'}">Ingreso</router-link> |
        <a @click="cerrarSesion">Cerrar Sesión</a>
     </div>
    <router-view/>
  </div>
</template>
<script>
import {mapActions} from "vuex"
export default {
  name:'app',
  methods: {
    ...mapActions(['cerrarSesion'])
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
