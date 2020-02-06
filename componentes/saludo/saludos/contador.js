Vue.component('contador',{
template:  
`
<div>
  <h3>{{numero}}</h3>
  <button @click="numero++">+</button>
  <button @click="numero++">suma</button>
 </div> 
`,
data() {
  return {
    numero:0
  }
}

});