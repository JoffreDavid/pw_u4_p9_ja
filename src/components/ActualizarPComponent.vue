<template>
  <div class="formulario-patch">
    <h2>Actualización Parcial</h2>
    <p class="nota">Modifique solo los campos necesarios.</p>
    
    <form @submit.prevent="enviarCambios">
      <div class="campo">
        <label>ID:</label>
        <input v-model="estudianteLocal.id" type="text" disabled class="input-disabled"/>
      </div>

      <div class="campo">
        <label>Nombre:</label>
        <input v-model="estudianteLocal.nombre" type="text" />
      </div>

      <div class="campo">
        <label>Apellido:</label>
        <input v-model="estudianteLocal.apellido" type="text" />
      </div>

      <div class="campo">
        <label>Fecha Nacimiento:</label>
        <input v-model="estudianteLocal.fechaNacimiento" type="datetime-local" />
      </div>

      <div class="campo">
        <label>Género:</label>
        <input v-model="estudianteLocal.genero" type="text" />
      </div>

      <div class="campo">
        <label>Provincia:</label>
        <input v-model="estudianteLocal.provincia" type="text" />
      </div>

      <button type="submit" class="btn-patch">Aplicar Cambios Parciales</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    estudiante: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      
      estudianteLocal: Object.assign({}, this.estudiante)
    };
  },
  watch: {
    estudiante(nuevoValor) {
      
      this.estudianteLocal = Object.assign({}, nuevoValor);
    }
  },
  methods: {
    enviarCambios() {
   
      this.$emit('patch-estudiante', this.estudianteLocal);
    }
  }
}
</script>

<style scoped>
.formulario-patch {
  border: 1px solid #17a2b8; 
  padding: 20px;
  border-radius: 8px;
  background-color: #f0fbff; 
  max-width: 400px;
  margin: 20px auto;
}
.nota {
  font-size: 0.9em;
  color: #666;
  margin-bottom: 15px;
}
.campo {
  margin-bottom: 15px;
  text-align: left;
}
label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}
input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
.input-disabled {
  background-color: #e9ecef;
  color: #6c757d;
  cursor: not-allowed;
}
.btn-patch {
  background-color: #17a2b8; 
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 4px;
}
.btn-patch:hover {
  background-color: #138496;
}
</style>