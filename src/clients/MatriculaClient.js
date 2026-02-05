import axios from "axios";
import { obTokenFacade } from "../clients//ObtenerTokenClient";

const URL= "http://localhost:8081/matricula/api/v1.0/estudiantes";

const consultarTodos = async ()=> {
    const TOKEN = await obTokenFacade();
    const data = axios.get(`${URL}`,{headers:{Authorization: `Bearer ${TOKEN}`}}).then(r=>r.data);
    return data;
}


const consultarPorId = async (id) => {
    const TOKEN = await obTokenFacade();
    const data = axios.get(`${URL}/${id}`,{headers:{Authorization: `Bearer ${TOKEN}`}}).then(r=>r.data)
    return data;
}

const guardar = async (body) => {
   const TOKEN = await obTokenFacade();
    axios.post(`${URL}`,body, {headers:{Authorization: `Bearer ${TOKEN}`}}).then(r=>r.data);
    
} 

const actualizar = async (id, body) =>{
    const TOKEN = await obTokenFacade();
    axios.put(`${URL}/${id}`,body, {headers:{Authorization: `Bearer ${TOKEN}`}}).then(r=>r.data);
   
}

const actualizarParcial = async (id, body) =>{
    const TOKEN = await obTokenFacade();
    axios.patch(`${URL}/${id}`,body, {headers:{Authorization: `Bearer ${TOKEN}`}}).then(r=>r.data);
  
}

const borrar = async (id) => {
    const TOKEN = await obTokenFacade();
    axios.delete(`${URL}/${id}`, {headers:{Authorization: `Bearer ${TOKEN}`}}).then(r=>r.data);
}


export const consultarTodosFachada = async ()=>{
    return await consultarTodos();
}

export const consultarPorIdFachada = async (id) => {
    return await consultarPorId(id);
}

export const guardarFachada = async (body) => {
    return await guardar(body);
} 

export const actualizarFachada = async (id, body) =>{
    return await actualizar(id, body);
}

export const actualizarParcialFachada = async (id, body) =>{
    return await actualizarParcial(id, body);
}

export const borrarFachada = async (id) => {
    return await borrar(id);
}