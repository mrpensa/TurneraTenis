<script setup>
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";
import { useCounterStore } from "../stores/counter";
const store = useCounterStore();
const { count } = storeToRefs(store);
const { borrar, listaImg } = store;
const img = {
  route: "",
  description: "",
};
</script>

<template>
  <img src="../assets/arcilla.jpg" class="img_principal" /> 
  <img src="../assets/cemento.jpg" class="img_principal" /> 
  <img src="../assets/grama.jpg" class="img_principal" /> 

  <br>
  <RouterLink to="./login"><button class="btn btn-warning m-2">Login</button></RouterLink>
  <RouterLink to="./register"><button class="btn btn-warning m-2">Register</button></RouterLink>
  <p>Aca deberia de haber una opcion de continuar sin registrarte o loguearse</p>
  

</template>

<style>
.img_principal{
  width: 300px;
  height: 500px;
}
</style>