<template>
  <div>
    <h1>Consultar por ID</h1>
    
    <div class="buscador">
      <label>Ingrese ID: </label>
      <input v-model="idBusqueda" type="number" placeholder="Ej: 1">
      <button @click="buscarEstudiante">Buscar</button>
    </div>

    <p v-if="mensajeError" style="color: red;">{{ mensajeError }}</p>

    <hr>

    <ConsultarPorIdComponent :estudiante="estudianteEncontrado" />
  </div>
</template>

<script>
import ConsultarPorIdComponent from '../components/ConsultarPorIdComponent.vue';
import { consultarPorIdFachada } from '@/clients/MatriculaClient';

export default {
  components: {
    ConsultarPorIdComponent
  },
  data() {
    return {
      idBusqueda: '',       
      estudianteEncontrado: null, 
      mensajeError: ''
    };
  },
  methods: {
    async buscarEstudiante() {
      
      this.mensajeError = '';
      this.estudianteEncontrado = null;

      if (!this.idBusqueda) {
        this.mensajeError = "Por favor ingrese un ID";
        return;
      }

      try {
        const data = await consultarPorIdFachada(this.idBusqueda);
        
        if (data) {
          this.estudianteEncontrado = data;
        } else {
          this.mensajeError = "No se encontró ningún estudiante con ese ID";
        }
      } catch (error) {
        console.error(error);
        this.mensajeError = "Error al conectar con el servidor o ID no existe.";
      }
    }
  }
}
</script>

<style>
.buscador {
  margin: 20px;
}
input {
  padding: 5px;
  margin-right: 10px;
}
</style>