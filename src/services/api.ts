import axios from "axios"

console.log(process.env.NEXT_PUBLIC_BACKEND_API_URL)
const api = axios.create({
    
    baseURL:process.env.NEXT_PUBLIC_BACKEND_API_URL,
    timeout:5000
})


export default api