import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)

// actions, 响应动作
const actions = {

}

// mutations, 操作数据
const mutations = {
    PUTFLIGHTINFO(state, flightInfo) {
        state.orderFlightInfo = flightInfo
    },
    PUTFLIGHTTYPE(state, seatType) {
        state.seatType = seatType
    },
    PUTSEATNUMBER(state, seatNumber) {
        // console.log("mutation seatNumber: " + seatNumber)
        state.seatNumber = seatNumber
    }
}

// state， 存储数据
const state = {
    // 订单页面 
      //订单信息
      orders: [],
      //订单信息
      orderFlightInfo: [],
      //经济舱 E，商务舱 B
      seatType: 'E',
      seatNumber: ''
}

// 创建store
export default new Vuex.Store({
    actions, mutations, state
})