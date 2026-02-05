import axios from "axios";

const URL= "http://localhost:8082/auth/api/v1.0/usuarios/token?user=xinneth&password=123"

const obToken= async () => {
    const token = await axios.get(`${URL}`).then(r => r.data);
    console.log(token.accessToken)
    return token.accessToken;
}

export const obTokenFacade= async ()=>{
    return await obToken();
}