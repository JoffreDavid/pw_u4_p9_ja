<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/consultar">Consultar Todos</router-link>|
    <router-link to="/consultar-id">Buscar por ID</router-link>|
    <router-link to="/guardar">Guardar</router-link>|
    <router-link to="/borrar">Borrar</router-link>|
    <router-link to="/actualizar">Actualizar</router-link>|
    <router-link to="/patch">Actualizar Parcial</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
