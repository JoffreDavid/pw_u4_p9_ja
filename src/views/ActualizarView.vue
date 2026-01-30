<template>
  <div class="contenedor-vista">
    <h1>Actualizar Información</h1>

    <div class="buscador">
      <label>Buscar por ID: </label>
      <input v-model="idBusqueda" type="number" placeholder="Ej: 1" />
      <button @click="buscarEstudiante" class="btn-buscar">Buscar</button>
    </div>

    <p v-if="mensaje" class="mensaje" :class="claseMensaje">
      {{ mensaje }}
    </p>

    <hr />

    <ActualizarComponent 
      v-if="estudianteEncontrado" 
      :estudiante="estudianteEncontrado"
      @actualizar-estudiante="procesarActualizacion" 
    />
  </div>
</template>

<script>
import ActualizarComponent from '@/components/ActualizarComponent.vue';
import { consultarPorIdFachada, actualizarFachada } from '@/clients/MatriculaClient';

export default {
  components: {
    ActualizarComponent
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
        this.mensaje = "Ingrese un ID válido.";
        this.claseMensaje = "msg-error";
        return;
      }

      try {
        const data = await consultarPorIdFachada(this.idBusqueda);
        if (data) {
          this.estudianteEncontrado = data;
          this.mensaje = "Estudiante cargado. Edite los datos y pulse Actualizar.";
          this.claseMensaje = "msg-info";
        }
      } catch (error) {
        console.error(error);
        this.mensaje = "No se encontró el estudiante.";
        this.claseMensaje = "msg-error";
      }
    },

   
    async procesarActualizacion(estudianteModificado) {
      this.mensaje = "Guardando cambios...";
      this.claseMensaje = "msg-info";

      try {
        await actualizarFachada(estudianteModificado.id, estudianteModificado);
        
        this.mensaje = "¡Actualización exitosa!";
        this.claseMensaje = "msg-exito";
      } catch (error) {
        console.error(error);
        this.mensaje = "Error al intentar actualizar.";
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


.msg-info {
  color: #004085;
  background-color: #cce5ff;
  border: 1px solid #b8daff;
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