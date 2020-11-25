import axios from 'axios'
import router from '../router'

let baseUrl = '/api'

if (process.env.NODE_ENV === 'development') {
    // baseUrl = 'http://10.129.37.221:8888/itpm'
    //baseUrl = 'https://itpm.cifi.com.cn/itpm'
}

axios.defaults.baseURL = baseUrl

axios.defaults.headers.post['Content-Type'] = 'application/json'

// Add a request interceptor
axios.interceptors.request.use((config) => {
    // Do something before request is sent
    let token = window.localStorage.getItem('token')

    if (token) {
        token = JSON.parse(token)
        config.headers.Authorization = token.data
    }

    return config
}, function (error) {
    // Do something with request error
    return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use((response) => {
    // Do something with response data
    return response
}, function (error) {
    console.log('error::::', error)
    // Do something with response error
    if (error.response.status == '401') {
        window.localStorage.removeItem('token')
        if (router.app.$route.path != '/login' && router.app.$route.path != '/') {
            router.replace({
                path: '/login',
                query: {
                    redirect: router.app.$route.fullPath
                }
            })
        }
    }
    return Promise.reject(error)
})

export default axios

