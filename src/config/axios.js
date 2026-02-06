import axios from 'axios'

// https://newsapi.org/v2/everything?q=bitcoin&apiKey=b6193def25de474482ae3bb66d655050
const api = axios.create({
    baseURL:'https://newsapi.org/v2',
    timeout:10000,
})

export default api