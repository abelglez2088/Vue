const app = new Vue({

  el:'#app',
  data:{
    mensaje:'hola soy Abel',
    contador:0
  },

  computed: {
    invertido(){
      return this.mensaje.split('').reverse().join('');
    },
    color(){
      return{
        'bg-success' : this.contador <= 25,
        'bg-warning' : this.contador > 25 && this.contador < 51,
        'bg-danger' : this.contador >=50
       }
    }
  }
});