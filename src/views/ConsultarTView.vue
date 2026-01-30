<template>
  <div>
    <h1>Página de Consulta</h1>
    <button @click="cargarDatos">Recargar Lista</button>
    
    <ConsultarTComponent :estudiantes="listaEstudiantes" />
  </div>
</template>

<script>

import ConsultarTComponent from '@/components/ConsultarTComponent.vue';
import { consultarTodosFachada } from '@/clients/MatriculaClient';

export default {
  components: {
    ConsultarTComponent
  },
  data() {
    return {
     
      listaEstudiantes: []
    };
  },
  
  async mounted() {
    await this.cargarDatos();
  },
  methods: {
    async cargarDatos() {
      try {
     
        const data = await consultarTodosFachada();
        console.log("Datos recibidos:", data); 
        this.listaEstudiantes = data;
      } catch (error) {
        console.error("Error al conectar con API:", error);
      }
    }
  }
}
</script>

<style>

h1 {
  color: #2c3e50;
}
</style>