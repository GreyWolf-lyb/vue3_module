import config from "@/config/index";
import axios from 'axios';
import { ElMessage } from 'element-plus';
console.log(config.baseURL,"==========")
// 创建axios请求实例
const request = axios.create({
    baseURL: config.baseURL, // 设置跨域代理接口统一的前置地址
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        // 'Authorization': localStorage.getItem('token')
    }
})

// 添加请求拦截器
request.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么
        // if (tokenStr()) {
        //     config.headers['Authorization'] = tokenStr()
        // }
        return config
    },
    error => {
        // 对请求错误做些什么
        return Promise.reject(error)
    }
)

// response interceptor
request.interceptors.response.use(
    response => {
        return response
    },
    error => {
        const res = error.response.data
        const status = error.response.status
        if (status >= 500) {
            ElMessage.error('服务繁忙请稍后再试')
        } else if (status >= 400) {
            if (res.status === 401) {
                ElMessage.warning("您的账号登录已失效, 请重新登录")
                // bus.$emit('logout')
            } else {
                ElMessage.error("未知错误")
                console.error(error)
            }
        }
        return Promise.resolve(error)
    }
)
export default request;