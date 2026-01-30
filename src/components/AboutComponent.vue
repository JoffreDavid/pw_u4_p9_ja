<template>
  <h1>Hello</h1>
  <button v-on:click="consumirTodos()">consultarTodos</button>
  <button v-on:click="consumirPorId(1)">consultarporId</button>
  <button v-on:click="actualizartodos()">Actualizar</button>
  <button v-on:click="actualizarParcial()">ActualizarParcial</button>
  <button v-on:click="guardar()">Guardar</button>
  <button v-on:click="borrar()">Borrar</button>
</template>
 
<script>
import {
  consultarTodosFachada,
  consultarPorIdFachada,
  actualizarFachada,
  actualizarParcialFachada,
  guardarFachada,
  borrarFachada,
} from "@/clients/MatriculaClient";
export default {
  data() {
    return {
      respuesta: null,
      estudiante: {
        nombre: "",
        id: "",
        apellido: "",
        fechaNacimiento: "",
        genero: "M",
        provincia: "",
      },
    };
  },
  methods: {
    async consumirTodos() {
      const cons = await consultarTodosFachada();
      this.estudiante = cons;
      console.log(cons);
    },
    async consumirPorId(id) {
      const consId = await consultarPorIdFachada(id);
      this.respuesta = consId;
      console.log(consId);
    },
    async actualizartodos(id, body) {
      const act = await actualizarFachada(id, body);
    },
    async actualizarParcial(id, body) {
      const actP = await actualizarParcialFachada(id, body);
    },
    async guardar() {
      const guard = await guardarFachada();
    },
    async borrar(id) {
      const del = await borrarFachada(id);
    },
  },
};
</script>
 
<style>
</style>