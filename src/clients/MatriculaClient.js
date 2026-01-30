import axios from "axios";

const consultarTodos = async ()=> {
    const data = axios.get('http://localhost:8081/matricula/api/v1.0/estudiantes').then(r=>r.data);
    return data;
}

export async function consultarTodosFacade(){
    return await consultarTodos();
}

const consultarPorId = async () => {
    const data = axios.get(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`).then(r=>r.data)
    return data;
}

const guardar = async (body) => {
    /*const objeto = {
        nombre:'John',
        apellido:'Andino'
    };*/
    axios.post(`http://localhost:8081/matricula/api/v1.0/estudiantes`,body).then(r=>r.data);
    console.log(data);
    return data;
} 

const actualizar = async (id, body) =>{
    axios.put(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`,body).then(r=>r.data);
    console.log(data);
    return data;
}

const actualizarParcial = async (id, body) =>{
    axios.patch(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`,body).then(r=>r.data);
    console.log(data);
    return data;
}

const borrar = async (id) => {
    axios.delete(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`).then(r=>r.data);
}


export const consultarTodosFachada = async ()=>{
    return await consultarTodos();
}

export const consultarPorIdFachada = async () => {
    return await consultarPorId();
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