<template>
  <div class="formulario-edicion">
    <h2>Editar Estudiante</h2>
    
    <form @submit.prevent="guardarCambios">
      <div class="campo">
        <label>ID (No editable):</label>
        <input v-model="estudianteLocal.id" type="text" disabled class="input-disabled"/>
      </div>

      <div class="campo">
        <label>Nombre:</label>
        <input v-model="estudianteLocal.nombre" type="text" required />
      </div>

      <div class="campo">
        <label>Apellido:</label>
        <input v-model="estudianteLocal.apellido" type="text" required />
      </div>

      <div class="campo">
        <label>Fecha Nacimiento:</label>
        <input v-model="estudianteLocal.fechaNacimiento" type="datetime-local" required />
      </div>

      <div class="campo">
        <label>Género:</label>
        <input v-model="estudianteLocal.genero" type="text" required />
      </div>

      <div class="campo">
        <label>Provincia:</label>
        <input v-model="estudianteLocal.provincia" type="text" required />
      </div>

      <button type="submit" class="btn-actualizar">Actualizar Datos</button>
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
   guardarCambios() {
      
      const estudianteLimpio = {
        id: this.estudianteLocal.id,
        nombre: this.estudianteLocal.nombre,      
        apellido: this.estudianteLocal.apellido,
        fechaNacimiento: this.estudianteLocal.fechaNacimiento,
        genero: this.estudianteLocal.genero,
        provincia: this.estudianteLocal.provincia
      };
      console.log("Enviando al Backend:", estudianteLimpio);
      this.$emit('actualizar-estudiante', estudianteLimpio);
    }
  }
}
</script>

<style scoped>
.formulario-edicion {
  border: 1px solid #42b983;
  padding: 20px;
  border-radius: 8px;
  background-color: #f0fdf4; 
  max-width: 400px;
  margin: 20px auto;
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
.btn-actualizar {
  background-color: #ffc107;
  color: black;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 4px;
}
.btn-actualizar:hover {
  background-color: #e0a800;
}
</style>