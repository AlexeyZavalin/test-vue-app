import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://192.168.0.105:81/api/',
    auth: {
        username: 'api',
        password: 'test4321'
    }
})

export default instance