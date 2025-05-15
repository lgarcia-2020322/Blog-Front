import axios from "axios"

//Configuración base
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 3000
})


export const getPostRequest = async () => {
    try {
        return await apiClient.get('/Posts/All')
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}
const getToken = ()=>{
    return localStorage.getItem('token')
}

export const addCommentRequest = async (comment) => {
    try {
        return await apiClient.post('/Comments/Add', comment)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

