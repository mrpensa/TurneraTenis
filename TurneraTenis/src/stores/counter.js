import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import floorServices from "../../services/floorServices";


export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      // count: ref(inicializacionDeCount)
      count: ref(0),
      userName: "",
      floors: [],
    };
  },
  // methods en un componente... son las funciones.
  actions: { 
    borrar(nombre) {
      // Primer habría que borrarlo del back... a través de axios.delete...
      floorService.delete(nombre)
      // si la respuesta fuera favorable... recién ahí... borrar el fron... sino mostrar mensaje de error
      let index = this.lista.findIndex((materia) => materia.nombre == nombre);
      this.lista.splice(index, 1);
      console.log(this.lista);
    },
    sumarJug(){
      if(this.count < 4){
        this.count++;
      }
    },
    restarJug(){
      if(this.count > 0){
        this.count--;
      }
    },
    horariosDisponibles(){
      //Vacío nuevamente el array al consultar un nuevo día 
      //this.horas = [];

      //Genero nuevas horas de disponibilidad 
      
      for (let i = 0; i < 10; i++) {
        this.horas.push(Math.floor(Math.random() * 11) + 12);
      }
      console.log(this.horas);
    },
    agregar(materia) {
      // mediante axios.post("url/cars, materia")... then... 
      this.lista.push({ ...materia });
      // .catch... tirará un alert de error.
      this.count++;
      console.log(this.count);
    },
    async fetchFloorsList() {
      try {
        const response = await floorServices.getAll();
        this.floors = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    getTablaFloors() {     
      if (this.listaUsers.length <= 0) {
       
        return  this.fetchFloorsList();
      } else {
        return this.listaUsers;
      }
      
    },
  },
});
