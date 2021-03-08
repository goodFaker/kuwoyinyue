import axios from 'axios'
import nprogress from 'nprogress'

const ajax = axios.create({
    baseURL:'/online',
    timeout:20000
})
/* 设置请求拦截器 */
ajax.interceptors.request.use(config=>{
    nprogress.start()
    // console.log(config)
    return config
})

/* 设置响应拦截器 */
ajax.interceptors.response.use(response=>{
    nprogress.done()
    // console.log(response)
    if(response.data.code===200){
        return response.data.data
    }
    return response.data
},error=>{
    nprogress.done()
    alert('错误信息:'+error.message||'未知错误')
    return Promise.reject(error)
})
export default ajax