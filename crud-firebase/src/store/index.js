import Vue from 'vue'
import Vuex from 'vuex'
//Trae toda la configuracion de firebase
import db from '../firebase'
import { firestore } from 'firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  //aqui es donde obtendremos nuestra lista de tareas
  state: {

    tareas:[],
    tarea: {nombre: '',id: ''}
  },
  //Aqui en la mutaciones se llenara tareas[] del state
  mutations: {
   //Aqui insertamos  las tareas
    setTareas(state,tareas){
        state.tareas=tareas
    },
    //asignamos a tarea el objeto que viene de nuestra accion
    setTarea(state,tarea){
      state.tarea= tarea
    },
    eliminarTarea(state,id){
      state.tareas=state.tareas.filter(doc=>{
        return doc.id != id
      })
    }
  },
  //aqui se obtienen las tareas desde DB
  actions: {
   
    getTareas({commit}){
      //el commit sirve para ejecutar una mutación
     
      const tareas=[]
        //Llamamos a la DB y mandamos lamar a toda una collection llamada tareas collection('tareas')
      db.collection('tareas').get()//El get devuelve una promesa
      //.then PROMESA 

      .then(snapshot=>{//anapshot es una arreglo de mi objeto de firebas(puede llevar cualquier nombre)
        snapshot.forEach(doc=>{
          let tarea= doc.data();//se fuarda todo el objeto en tarea
          tarea.id=doc.id//sel le pasa el id que genera firebase por defectp
          tareas.push(tarea)//mandamos a un arreglo el objeto para poderlo usar

        })
      })
          commit('setTareas', tareas)// se genera un commt  para recibir el nombre de la mutacion
    },
    //extrae el documento por medio del id para pasarlo al input
    getTarea({commit},id){
       //extrae un documento  con un id en especifico
      db.collection('tareas').doc(id).get()
      .then(doc=>{
        //se consruye tarea y se asignan valores
        let tarea = doc.data();
        tarea.id = doc.id 
        //se envia el doc a settarea a las mutacionses
        commit('setTarea',tarea)
      })
    },

    editarTarea({commit}, tarea){
      //se recibe todo el objeto y se accede al id  se llama la funcion de firebase update
      db.collection('tareas').doc(tarea.id).update({
        nombre: tarea.nombre
      })
      //redirige a la pagina principal
      .then(()=>{
        router.push({name: 'inicio'})
      })
    },
   
    agregarTarea({commit},nombre){
      db.collection('tareas').add({
        nombre: nombre
      }) 
      .then(doc=>{
        console.log(doc.id);
        router.push({name: 'inicio'})
      })
    },
    eliminarTarea({commit,dispatch}, id){
      db.collection('tareas').doc(id).delete()
      .then(()=>{
        console.log('La tarea fue eliminada');
        //dispatch('getTareas')
        commit('eliminarTarea', id)

      })
    }
  },
  modules: {
  }
})
