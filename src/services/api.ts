import axios from "axios"


const api = axios.create({
    baseURL:process.env.NEXT_PUBLIC_BACKEND_API_URL,
    timeout:5000
})


export default api