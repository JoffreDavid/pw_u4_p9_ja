import axios from "axios";

const consultarTodos = async ()=> {
    const data = axios.get('http://localhost:8081/matricula/api/v1.0/estudiantes').then(r=>r.data);
    return data;
}


const consultarPorId = async (id) => {
    const data = axios.get(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`).then(r=>r.data)
    return data;
}

const guardar = async (body) => {
   
    axios.post(`http://localhost:8081/matricula/api/v1.0/estudiantes`,body).then(r=>r.data);
    
} 

const actualizar = async (id, body) =>{
    axios.put(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`,body).then(r=>r.data);
   
}

const actualizarParcial = async (id, body) =>{
    axios.patch(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`,body).then(r=>r.data);
  
}

const borrar = async (id) => {
    axios.delete(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`).then(r=>r.data);
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