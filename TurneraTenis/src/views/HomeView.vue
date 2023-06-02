<script setup>
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";
import { useCounterStore } from "../stores/counter";
const store = useCounterStore();
const { count } = storeToRefs(store);
const { borrar, listaImg} = store;
const img = {
  route: "",
  description: "",
};

</script>
<script>
export default {
  mounted(){
    store.fetchFloorsList()
  },
  computed: {
    floors() {
      return store.floorList;
    },
  },
}
</script>
<template>
  <RouterLink to="/floor"> 
    <button class="image-button" src="../assets/arcilla.jpg" id="img_principal"></button>
  </RouterLink>
  <RouterLink to="/floor"> 
    <button class="image-button" src="../assets/cemento.jpg" id="img_principal"></button>
  </RouterLink>
  <RouterLink to="/floor"> 
    <button class="image-button" src="../assets/grama.jpg" id="img_principal"></button>
  </RouterLink>

  <br>
  <RouterLink to="./login"><button class="btn btn-warning m-2">Login</button></RouterLink>
  <RouterLink to="./register"><button class="btn btn-warning m-2">Register</button></RouterLink>
  <p>Aca deberia de haber una opcion de continuar sin registrarte o loguearse</p>
  
  <div>
    <h2>List of Floors:</h2>
    <ul>
      <li v-for="floor in floors" :key="floor.id">{{ floor.name }}</li>
    </ul>
  </div>
</template>


<style>
.img_principal{
  width: 300px;
  height: 500px;
}
</style>