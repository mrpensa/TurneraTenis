<script setup>
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";
import { useCounterStore } from "../stores/counter";
const store = useCounterStore();
const { count } = storeToRefs(store);
const {  sumarJug, restarJug, horariosDisponibles, horas } = store;
</script>

<template>
           <div class="cuerpo__img" style="flex-direction: column;">
               
                    <div class="row">
                        <div class="col-6" style="font-size: 1.5rem;">
                            <input style="height: 80px; width: 230px; border: solid black ;" type="date" name="" id="calendar">
                        </div>
                    </div>

                
                    <button @click="horariosDisponibles">Ver Disponibilidad</button>
                <ul>
                    <li v-for="(hora, index) in horas" :key="index">{{ hora }}</li>
                </ul>
           </div>


  <button @click="sumarJug">+</button>
  <p>{{ count }}</p>
  <button @click="restarJug">-</button>

</template>

<style>
</style>
