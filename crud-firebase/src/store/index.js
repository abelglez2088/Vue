import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'
import { firestore } from 'firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas:[],
    tarea: {nombre: '',id: ''}
  },
  mutations: {
    setTareas(state,tareas){
        state.tareas=tareas
    },
    setTarea(state,tarea){
      state.tarea= tarea
    },
    eliminarTarea(state,id){
      state.tareas=state.tareas.filter(doc=>{
        return doc.id != id
      })
    }
  },
  actions: {
    
    getTareas({commit}){
      const tareas=[]
      db.collection('tareas').get()
      .then(snapshot=>{
        snapshot.forEach(doc=>{
          let tarea= doc.data();
          tarea.id=doc.id
          tareas.push(tarea)
        })
      })
          commit('setTareas', tareas)
    },//extrae el documento por medio del id para pasarlo al input
    getTarea({commit},id){
      db.collection('tareas').doc(id).get()
      .then(doc=>{
        let tarea = doc.data();
        tarea.id = doc.id 
        commit('setTarea',tarea)
      })
    },
    editarTarea({commit}, tarea){
      db.collection('tareas').doc(tarea.id).update({
        nombre: tarea.nombre
      })
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
