import axios from 'axios'
import {Toast} from 'vant'

let loading = null;
// // 请求加载效果
function startLoading() {
    loading = Toast.loading({
        forbidClick: true,
        className: "custom-toast",
        loadingType: 'spinner',
        message: '加载中...',
        duration: 0
    })
}

// 关闭加载效果
function endLoading() {
    if (loading) loading.clear();
}

axios.defaults.timeout = 12000 // 请求超时时间
axios.defaults.baseURL = 'http://127.0.0.1:8080';


    
// axios 请求拦截器
axios.interceptors.request.use(
    config => {
        startLoading()
        // 可在此设置要发送的token
        return config
    },
    error => {
        endLoading()
        return error
    }
)

// axios respone拦截器
axios.interceptors.response.use(
    response => {
        endLoading()
        //console.log(response, "响应成功")
        // 可以添加token 检测
        if (response.status === 200) {
            return response
        }
    },
    error => {
        endLoading()
        console.log(error, "响应失9999败")

        const responseCode = error
        //console.log(responseCode, "响应码")
        switch (responseCode) {
            // 401：未登录
            case 401:
                break
                // 404请求不存在
            case 404:
                console.log("网络请求超时")
                Toast.fail({
                    className: "custom-toast",
                    message: '网络请求超时'
                })
                break
            default:
                console.log(error.message, "走这里吗")
                Toast.fail({
                    className: "custom-toast",
                    message: error.message
                })
        }

        // 断网 或者 请求超时 状态
        if (!error.message) {
            // 请求超时状态
            if (error.message.includes('timeout')) {
                console.log('超时了')
                Toast.fail({
                    className: "custom-toast",
                    message: '请求超时，请检查网络是否连接正常'
                })
            } else {
                // 可以展示断网组件
                console.log('断网了')
                Toast.fail({
                    className: "custom-toast",
                    message: '请求超时，请检查网络是否连接正常'
                })
            }
            return
        }
        return error
    }
)

export default new axios.create()