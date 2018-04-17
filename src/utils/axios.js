import axios from 'axios';
import Vue from 'vue';

let instance = axios.create({
    headers: {
        "plantform": "PC"
    },
    baseURL: 'http://localhost:9000'
})

instance.interceptors.request.use(config => {
    return config;
}, err => {
    return Promise.reject(err);
})

// 响应拦截
instance.interceptors.response.use(response => {
    if (response.status == 200) {
        return response.data;
    }
    return Promise.reject({
        status: response.status
    })
}, err => {
    return Promise.reject(err);
})

Object.defineProperty(Vue.prototype, '$http', {
    value: instance
})

export default instance

export function login (loginInfo) {
    return new Promise((resolve, reject) => {
        instance.post('/dsp-admin/user/login', loginInfo)
        .then(res => {
            resolve(res);
        })
    })
}