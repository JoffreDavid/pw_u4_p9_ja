<template>
  <div class="detalle-container">
    <div v-if="estudiante && estudiante.id" class="tarjeta">
      <h3>Detalles del Estudiante</h3>
      <p><strong>ID:</strong> {{ estudiante.id }}</p>
      <p><strong>Nombre:</strong> {{ estudiante.nombre }}</p>
      <p><strong>Apellido:</strong> {{ estudiante.apellido }}</p>
      <p><strong>Fecha Nacimiento:</strong> {{ estudiante.fechaNacimiento }}</p>
      <p><strong>Género:</strong> {{ estudiante.genero }}</p>
      <p><strong>Provincia:</strong> {{ estudiante.provincia }}</p> 
    </div>

    <div v-else class="mensaje-vacio">
      <p>Ingrese un ID para ver los detalles.</p>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    estudiante: {
      type: Object,
      required: false,
      default: null
    }
  }
}
</script>

<style scoped>
.detalle-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.tarjeta {
  border: 1px solid #42b983;
  padding: 20px;
  border-radius: 10px;
  background-color: #f9f9f9;
  width: 300px;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.mensaje-vacio {
  color: #777;
  font-style: italic;
}
</style>