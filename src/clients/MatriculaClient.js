import axios from "axios";

const TOKEN= "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJtYXRyaWN1bGEtYXV0aCIsInN1YiI6Inhpbm5ldGgiLCJncm91cHMiOlsiYWRtaW4iXSwiaWF0IjoxNzcwMzE0MDQ4LCJleHAiOjE3NzAzMTc2NDgsImp0aSI6IjJlMDFjZDljLTM5YTUtNGFjMi05NzgzLTIzMWE1Nzk4OWM0MiJ9.Oz3RWBymfm3EpzL7ouYcZFLjbIko84wVQ-kZwzJr_hqdjvWVgV0DE3KdmaswOiQClWCGKfUC40ZhJRssdoHRrFAABQEG6fIFpmKhYYPXj_7txUR65aGwBNFYY3FrDjqD-N1cuKnR5KaJBLFZSd-ogNE0crSf1cQYDTAHY49M__v1pihj-kE_5nLbn_wzVszIxSlXYFc-8JzkZTQQLocade_7Net5ZiIEfO3I-0ot_TPyrPXN9FfdX23OOvh4lmbazSxsqHGuObV2V3jB2JFw9edfgfc2K3GExT9b-456zgmHDl8ygsfOAw4_wVypQsvZD2N5qcu4cMkhpVL7sxbrVw";
const URL= "http://localhost:8081/matricula/api/v1.0/estudiantes";

const consultarTodos = async ()=> {
    const data = axios.get(`${URL}`,{headers:{Authorization: `Bearer ${TOKEN}`}}).then(r=>r.data);
    return data;
}


const consultarPorId = async (id) => {
    const data = axios.get(`${URL}/${id}`,{headers:{Authorization: `Bearer ${TOKEN}`}}).then(r=>r.data)
    return data;
}

const guardar = async (body) => {
   const token = 
    axios.post(`${URL}`,body, {headers:{Authorization: `Bearer ${TOKEN}`}}).then(r=>r.data);
    
} 

const actualizar = async (id, body) =>{
    axios.put(`${URL}/${id}/${id}`,body, {headers:{Authorization: `Bearer ${TOKEN}`}}).then(r=>r.data);
   
}

const actualizarParcial = async (id, body) =>{
    axios.patch(`${URL}/${id}/${id}`,body, {headers:{Authorization: `Bearer ${TOKEN}`}}).then(r=>r.data);
  
}

const borrar = async (id) => {
    axios.delete(`${URL}/${id}`).then(r=>r.data);
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