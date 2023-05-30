<script setup>
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";
import { useCounterStore } from "../stores/counter";
const store = useCounterStore();
const { count } = storeToRefs(store);
const {  sumarJug, restarJug } = store;
</script>

<template>

  <button @click="sumarJug">+</button>
  <p>{{ count }}</p>
  <button @click="restarJug">-</button>

</template>

<style>
</style>
