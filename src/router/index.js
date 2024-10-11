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

//Before making any jump, it is necessary to verify whether to log in or verify that the token is legitimate 
router.beforeEach((to,from,next)=>{
	if(to.path.startsWith('/login') || to.path.startsWith('/register')){
		window.localStorage.removeItem('token');
		next();
	}else{
		// check whether logged in
		let token = JSON.parse(window.localStorage.getItem('token'));
		// console.log(token)
		if(!token){
			next({path:'/login'});
		}else{
			// The logged-in user verifies the legitimacy of the token
			axios.get('/user/checkToken', {})
			.then((response)=>{
				if(!response.data) {
					console.log('校验失败')
					next({path:'/login'})
				}else{
					next();
				}
			}
		)
		}
	}
})

export default router;