<template>
  <div class="tabla-container">
    <h2>Tabla de Estudiantes</h2>
    
    <table v-if="estudiantes.length > 0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Fecha Nacimiento</th>
          <th>Género</th>
          <th>Provincia</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="est in estudiantes" :key="est.id">
          <td>{{ est.id }}</td>
          <td>{{ est.nombre }}</td>
          <td>{{ est.apellido }}</td>
          <td>{{ est.fechaNacimiento }}</td>
          <td>{{ est.genero }}</td>
          <td>{{ est.provincia }}</td>
        </tr>
      </tbody>
    </table>

    <p v-else>No hay estudiantes cargados o está cargando...</p>
  </div>
</template>

<script>
export default {
  
  props: {
    estudiantes: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style>
.tabla-container {
  margin: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #f2f2f2;
}
</style>