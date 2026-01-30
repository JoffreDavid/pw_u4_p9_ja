<template>
  <div class="contenedor-vista">
    <h1>Eliminar Estudiante</h1>
    
    <p v-if="mensaje" class="mensaje" :class="claseMensaje">
      {{ mensaje }}
    </p>

    <BorrarComponent @borrar-estudiante="procesarEliminacion" />
  </div>
</template>

<script>
import BorrarComponent from '../components/BorrarComponent.vue';
import { borrarFachada } from '@/clients/MatriculaClient';

export default {
  components: {
    BorrarComponent
  },
  data() {
    return {
      mensaje: '',
      
      claseMensaje: '' 
    };
  },
  methods: {
    async procesarEliminacion(id) {
   
      this.mensaje = "Procesando eliminación...";
      this.claseMensaje = "msg-info"; 

      try {
        await borrarFachada(id);
        
        
        this.mensaje = `Estudiante con ID ${id} eliminado correctamente.`;
        this.claseMensaje = "msg-exito"; 
      } catch (error) {
        console.error(error);
     
        this.mensaje = "Error: No se pudo eliminar (verifica si el ID existe).";
        this.claseMensaje = "msg-error";
      }
    }
  }
}
</script>

<style scoped>

.contenedor-vista {
  padding: 20px;
}


.mensaje {
  font-weight: bold;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
}


.msg-info {
  color: #007bff; 
  background-color: #e7f1ff; 
}

.msg-exito {
  color: #28a745; 
  background-color: #d4edda; 
}

.msg-error {
  color: #dc3545; 
  background-color: #f8d7da; 
}
</style>