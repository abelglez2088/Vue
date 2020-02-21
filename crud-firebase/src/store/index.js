import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas:[]
  },
  mutations: {
    setTareas(state,tareas){
        state.tareas=tareas
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
    }
  },
  modules: {
  }
})
