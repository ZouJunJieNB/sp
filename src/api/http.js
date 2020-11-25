import axios from 'axios'
import { Notification, MessageBox ,Message} from 'element-ui'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: "http://localhost:8081/",
    // 超时
    timeout: 10000
})
// request拦截器
service.interceptors.request.use(
    config => {
        //   config.headers['token'] = window.localStorage['token'] // 让每个请求携带自定义token 请根据实际情况自行修改

        console.log(config)
        config.params.token = "123"
        return config
    },
    error => {
        Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(res => {
    const code = res.data.code
    console.log(res.data)
    if (code === 401) {
        this.$message.error('登录状态已过期，您可以继续留在该页面，或者重新登录');
        // 路由跳转
    } else if (code != 200 && code != 1) {
        Notification.error({
            title: res.data.msg
        })
        return Promise.reject('error')
    } else {
        if (res.data.errorCode != null) {
            Notification.error({
                title: res.data.msg
            })
            return Promise.reject('error')
        }
        Message.success(res.data.msg)
        return res.data
    }
},
    error => {
        
        console.log('err' + error)
        Message({
            message: error.message,
            type: 'error',
            duration: 3 * 1000
        })
        return Promise.reject(error)
    }
)

export default service