import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from "axios";

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
axios.defaults.headers.common['Auth'] = 'Auth Token';
axios.defaults.headers.post['Content-type'] = 'Application/Json';


axios.interceptors.request.use(request => {
    console.log(request);
    return request
}, err => {
    return Promise.reject(err);
});

axios.interceptors.response.use(response => {
    console.log(response);
    return response
}, err => {
    return Promise.reject(err);
});


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
