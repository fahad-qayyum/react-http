import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

instance.defaults.headers.common['instance-header'] = 'Hello';
instance.interceptors.request.use(request => {
    console.log(request);
    return request
}, err => {
    return Promise.reject(err);
});



export default instance;
