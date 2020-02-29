<template>
  <div id="app" class="container mt5">
 
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Control de tareas</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
            <router-link :to="{name:'inicio'}" v-if="existeUsuario" class="btn btn-primary mx-2">
              Inicio
            </router-link> 
            <router-link :to="{name:'registro'}" v-if="!existeUsuario" class="btn btn-primary mx-2">
              Registro
            </router-link> 
            <router-link :to="{name:'ingreso'}" v-if="!existeUsuario" class="btn btn-primary mx-2">
              Ingreso
            </router-link> 
            <a @click="cerrarSesion" v-if="existeUsuario" class="btn btn-warning mx-2">
              Cerrar Sesión
            </a>
        </b-nav-form>
       
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <router-view/>
  </div>  
</template>


<script>
import {mapActions, mapGetters} from "vuex"
export default {
  name:'App',
  methods: {
    ...mapActions(['cerrarSesion'])
  },
  computed: {
    ...mapGetters(['existeUsuario'])
  },
}
</script>

<style>
/*#app {
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
}*/
</style>*/
