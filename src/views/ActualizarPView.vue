<template>
  <div class="contenedor-vista">
    <h1>Actualización Parcial</h1>

    <div class="buscador">
      <label>Buscar por ID: </label>
      <input v-model="idBusqueda" type="number" placeholder="Ej: 1" />
      <button @click="buscarEstudiante" class="btn-buscar">Buscar</button>
    </div>

    <p v-if="mensaje" class="mensaje" :class="claseMensaje">
      {{ mensaje }}
    </p>

    <hr />

    <ActualizarPComponent 
      v-if="estudianteEncontrado" 
      :estudiante="estudianteEncontrado"
      @patch-estudiante="procesarPatch" 
    />
  </div>
</template>

<script>
import ActualizarPComponent from '../components/ActualizarPComponent.vue';
import { consultarPorIdFachada, actualizarParcialFachada } from '@/clients/MatriculaClient';

export default {
  components: {
    ActualizarPComponent
  },
  data() {
    return {
      idBusqueda: '',
      estudianteEncontrado: null,
      mensaje: '',
      claseMensaje: ''
    };
  },
  methods: {
    
    async buscarEstudiante() {
      this.mensaje = '';
      this.estudianteEncontrado = null;

      if (!this.idBusqueda) {
        this.mensaje = "Ingrese un ID.";
        this.claseMensaje = "msg-error";
        return;
      }

      try {
        const data = await consultarPorIdFachada(this.idBusqueda);
        if (data) {
          this.estudianteEncontrado = data;
          this.mensaje = "Estudiante cargado para edición parcial.";
          this.claseMensaje = "msg-info";
        }
      } catch (error) {
        console.error(error);
        this.mensaje = "Estudiante no encontrado.";
        this.claseMensaje = "msg-error";
      }
    },

   
    async procesarPatch(estudianteModificado) {
      this.mensaje = "Aplicando cambios parciales...";
      this.claseMensaje = "msg-info";

      try {
       
        await actualizarParcialFachada(estudianteModificado.id, estudianteModificado);
        
        this.mensaje = "¡Actualización parcial exitosa!";
        this.claseMensaje = "msg-exito";
      } catch (error) {
        console.error(error);
        this.mensaje = "Error al aplicar el parche.";
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
.buscador {
  margin-bottom: 20px;
}
.buscador input {
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.btn-buscar {
  padding: 8px 15px;
  background-color: #2c3e50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}
.mensaje {
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  display: inline-block;
  margin-top: 10px;
}

/* Colores de estado */
.msg-info {
  color: #0c5460;
  background-color: #d1ecf1;
  border: 1px solid #bee5eb;
}
.msg-exito {
  color: #155724;
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
}
.msg-error {
  color: #721c24;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
}
</style>