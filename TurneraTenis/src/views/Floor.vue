<script setup>
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";
import { useCounterStore } from "../stores/counter";
const store = useCounterStore();
const { count } = storeToRefs(store);
const { borrar, listaImg } = store;
</script>

<template>
  <h1>Canchas</h1>

  <h2>Almagro</h2>

  <div>
    <img src="../assets/arcilla.jpg" class="img" />
    <p>
      
    </p>
    <button class="btn btn-warning m-2">Información</button>
  </div>
  
  <div>
    <img src="../assets/grama.jpg" class="img" />
    <p>

    </p>
    <button class="btn btn-warning m-2">Información</button>
  </div>

  <h2>Belgrano</h2>

  <div>
    <img src="../assets/arcilla.jpg" class="img" />
    <p>
    </p>
    <button class="btn btn-warning m-2">Información</button>
  </div>

</template>

<style>
.img{
  width: 100px;
  height: 100px;
}
</style>