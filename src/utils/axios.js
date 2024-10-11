import axios from 'axios'
import {Toast} from 'vant'

let loading = null;
// Request loading effect
function startLoading() {
    loading = Toast.loading({
        forbidClick: true,
        className: "custom-toast",
        loadingType: 'spinner',
        message: 'loading...',
        duration: 0
    })
}

// close Request loading effect
function endLoading() {
    if (loading) loading.clear();
}

axios.defaults.timeout = 12000 // request timeout
axios.defaults.baseURL = 'http://127.0.0.1:8080';
    
// axios request interceptor
axios.interceptors.request.use(
    config => {
        startLoading()
        console.log("request interceptor")
        // set token in header
        var token = JSON.parse(localStorage.getItem('token'))
        config.headers['token'] = token;

        console.log(token)
        return config
    },
    error => {
        endLoading()
        return error
    }
)

// axios respone interceptor
axios.interceptors.response.use(
    response => {
        endLoading()
        
        if (response.status === 200) {
            return response
        }
    },
    error => {
        endLoading()
        console.log(error, "响应失9999败")

        const responseCode = error
        
        switch (responseCode) {
            // 401：unauthorized
            case 401:
                break
                // 404 request not exists
            case 404:
                console.log("request timeout")
                Toast.fail({
                    className: "custom-toast",
                    message: 'request timeout'
                })
                break
            default:
                console.log(error.message, "error")
                Toast.fail({
                    className: "custom-toast",
                    message: error.message
                })
        }

        // Network disconnection or request timeout status
        if (!error.message) {
            // 请求超时状态
            if (error.message.includes('timeout')) {
                console.log('超时了')
                Toast.fail({
                    className: "custom-toast",
                    message: 'request timeout, please check your Internet'
                })
            } else {
                // 可以展示断网组件
                console.log('断网了')
                Toast.fail({
                    className: "custom-toast",
                    message: 'request timeout, please check your Internet'
                })
            }
            return
        }
        return error
    }
)

export default axios