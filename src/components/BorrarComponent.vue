<template>
  <div class="borrar-container">
    <h2>Eliminar Estudiante</h2>
    
    <div class="input-group">
      <label>Ingrese ID a eliminar:</label>
      <input v-model="idParaBorrar" type="number" placeholder="Ej: 5" />
    </div>

    <button class="btn-borrar" @click="confirmarBorrado">Eliminar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      idParaBorrar: ''
    };
  },
  methods: {
    confirmarBorrado() {
      
      if (!this.idParaBorrar) {
        alert("Por favor ingrese un ID");
        return;
      }
      const confirmacion = confirm(`¿Estás seguro de que deseas eliminar al estudiante con ID ${this.idParaBorrar}?`);

      if (confirmacion) {
      
        this.$emit('borrar-estudiante', this.idParaBorrar);
        
     
        this.idParaBorrar = '';
      }
    }
  }
}
</script>

<style scoped>
.borrar-container {
  border: 1px solid #ffcccc;
  background-color: #fff5f5; 
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  margin: 0 auto;
}
.input-group {
  margin-bottom: 15px;
  text-align: left;
}
input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
}
.btn-borrar {
  background-color: #dc3545; 
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}
.btn-borrar:hover {
  background-color: #c82333;
}
</style>