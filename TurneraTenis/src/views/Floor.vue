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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laudantium cum pariatur. Minima, officiis. Voluptatibus vel blanditiis aliquid ea! Excepturi laudantium adipisci ea officiis aperiam aliquam magnam nulla commodi totam.
      Obcaecati dolorem vero consequuntur nulla voluptate blanditiis magnam, reprehenderit iusto sed assumenda odio veritatis laudantium sapiente provident quia, nesciunt eaque. Velit aut facilis praesentium odio itaque numquam ut vel minus.
  </p>
    <button class="btn btn-warning m-2">Información</button>
  </div>
  
  <div>
    <img src="../assets/grama.jpg" class="img" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laudantium cum pariatur. Minima, officiis. Voluptatibus vel blanditiis aliquid ea! Excepturi laudantium adipisci ea officiis aperiam aliquam magnam nulla commodi totam.
      Obcaecati dolorem vero consequuntur nulla voluptate blanditiis magnam, reprehenderit iusto sed assumenda odio veritatis laudantium sapiente provident quia, nesciunt eaque. Velit aut facilis praesentium odio itaque numquam ut vel minus.
  </p>
    <button class="btn btn-warning m-2">Información</button>
  </div>

  <h2>Belgrano</h2>

  <div>
    <img src="../assets/arcilla.jpg" class="img" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laudantium cum pariatur. Minima, officiis. Voluptatibus vel blanditiis aliquid ea! Excepturi laudantium adipisci ea officiis aperiam aliquam magnam nulla commodi totam.
      Obcaecati dolorem vero consequuntur nulla voluptate blanditiis magnam, reprehenderit iusto sed assumenda odio veritatis laudantium sapiente provident quia, nesciunt eaque. Velit aut facilis praesentium odio itaque numquam ut vel minus.
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