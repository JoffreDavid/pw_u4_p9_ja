<template>
  <div class="formulario-container">
    <h2>Nuevo Estudiante</h2>
    
    <form @submit.prevent="enviarFormulario">
      <div class="campo">
        <label>Nombre:</label>
        <input v-model="estudiante.nombre" type="text" required />
      </div>

      <div class="campo">
        <label>Apellido:</label>
        <input v-model="estudiante.apellido" type="text" required />
      </div>

      <div class="campo">
        <label>Fecha Nacimiento:</label>
        <input v-model="estudiante.fechaNacimiento" type="datetime-local" required />
      </div>

      <div class="campo">
        <label>Género:</label>
        <input v-model="estudiante.genero" type="text" placeholder="Ej: Femenino" required />
      </div>

      <div class="campo">
        <label>Provincia:</label>
        <input v-model="estudiante.provincia" type="text" required />
      </div>

      <button type="submit">Guardar Estudiante</button>
    </form>
  </div>
</template>

<script>
export default {

  data() {
    return {
      estudiante: {
        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        genero: '', 
        provincia: ''
      }
    };
  },
  methods: {
    enviarFormulario() {
      
      this.$emit('guardar-estudiante', this.estudiante);
      
      this.estudiante = {
        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        genero: '',
        provincia: ''
      };
    }
  }
}
</script>

<style scoped>
.formulario-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
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
button {
  background-color: #42b983;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
}
button:hover {
  background-color: #3aa876;
}
</style>