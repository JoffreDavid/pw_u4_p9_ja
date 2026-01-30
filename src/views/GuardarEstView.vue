<template>
  <div class="contenedor-guardar">
    
    
    <p v-if="mensaje" class="mensaje" :class="claseMensaje">
      {{ mensaje }}
    </p>

    <GuardarEstComponent @guardar-estudiante="procesarGuardado" />
  </div>
</template>

<script>
import GuardarEstComponent from '../components/GuardarEstComponent.vue';
import { guardarFachada } from '@/clients/MatriculaClient';

export default {
  components: {
    GuardarEstComponent
  },
  data() {
    return {
      mensaje: '',
      
      claseMensaje: '' 
    };
  },
  methods: {
    async procesarGuardado(estudiante) {
      
      this.mensaje = "Procesando...";
      this.claseMensaje = "msg-procesando"; 

      try {
        
        await guardarFachada(estudiante);
        
        
        this.mensaje = "¡Estudiante guardado con éxito!";
        this.claseMensaje = "msg-exito"; 
      } catch (error) {
        console.error(error);
        
        this.mensaje = "Error al guardar. Verifique la consola.";
        this.claseMensaje = "msg-error";
      }
    }
  }
}
</script>

<style scoped>
.contenedor-guardar {
  padding: 20px;
}


.mensaje {
  font-weight: bold;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 5px;
}



.msg-procesando {
  color: #007bff; 
  background-color: #e7f1ff;
  border: 1px solid #b8daff;
}

.msg-exito {
  color: #28a745; 
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
}

.msg-error {
  color: #dc3545; 
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
}
</style>