import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/components/account/Login.vue";
import Register from "@/components/account/Register.vue";
import axios from "@/utils/axios";
import Home from "@/pages/Home.vue";
import Flight from "@/pages/flight/Flight.vue";
import Order from "@/pages/order/Order.vue";
import PersonInfo from "@/pages/PersonInfo.vue";
import Seat from "@/pages/flight/Seat.vue";
import AddedServices from "@/pages/order/AddedServices.vue";
import MyOrder from "@/pages/MyOrder.vue";

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
		{
			name: 'home',
			path: '/',
			component: Home,
			children:[
				{
					name: 'flight',
					path: 'flight',
					component: Flight
				},{
					name: "seat",
					path: "seat",
					component: Seat
				},{
					name: "order",
					path: "Order",
					component: Order
				}, {
					name: "personInfo",
					path: "personInfo",
					component: PersonInfo
				}, {
					name: "addedServices",
					path: "addedServices",
					component: AddedServices
				}, {
					name: "myOrder",
					path: "myOrder",
					component: MyOrder
				}
			]
		},
        {
            name: 'login',
            path:'/login',
            component: Login
        }, {
            name: 'register',
            path: '/register',
            component: Register
        }
    ]
})

//在进行任何一个跳转之前，都要进行验证是否登陆或者验证token是否合法
router.beforeEach((to,from,next)=>{
	if(to.path.startsWith('/login') || to.path.startsWith('/register')){
		window.localStorage.removeItem('access-admin');
		next();
	}else{
		//判断是否登陆
		let token = JSON.parse(window.localStorage.getItem('token'));
		// console.log(token)
		//没登陆的用户就去登陆
		if(!token){
			next({path:'/login'});
		}else{
			// 登陆的用户就去校验token的合法性
			axios.get('/user/checkToken', {
				// headers:{
				// 	'token': token
				// }
			})
			.then((response)=>{
				if(!response.data) {
					console.log('校验失败')
					next({path:'/error'})
				}else{
          //如果说正确的话，直接路由跳转
					next();
				}
			}
		)
		}
	}
})

export default router;