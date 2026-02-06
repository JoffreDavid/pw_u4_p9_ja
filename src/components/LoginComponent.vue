<template>
    <div class="container">
        <div class="login">
            <h2>Login</h2>
            <input v-model="usuario" type="text" placeholder="Usuario">
            <input v-model="password" type="password" placeholder="Contraseña">
            <button @click="login()">Entrar</button>

        </div>
    </div>

</template>

<script>
import {obTokenFacade} from "../clients/ObtenerTokenClient.js"
export default {

    data(){
        return{
            usuario: '',
            password: ''
        };
    },
    methods: {
        login(){
            /*mandar a obtener el token */
            const TOKEN = obTokenFacade();

            if(TOKEN !== null){
                localStorage.setItem("token",TOKEN);
                localStorage.setItem("estaAutenticado", true);
                console.log("Redirigiendo")
            }else{
                console.log('Error de autenticacion');
            }
        }
    }
};
</script>

<style>
.login {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    margin: 100px;
    padding: 20px;
    border: 1px solid orange;
    border-radius: 8px;
    text-align: center;
}

input {
    width: 100%;
    margin-bottom: 10px;
    padding: 8px;
}

button {
    width: 100%;
    padding: 8px;
    cursor: pointer;
}
.container {
    display:flex;
    align-items: center;
     justify-content: center;

}
</style>