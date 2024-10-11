import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)

// actions
const actions = {

}

// mutations, operate state data
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
    },
    PUTPASSENGER(state, passenger) {
        state.passenger = passenger
    }
}

// state， store data
const state = {

      orders: [],
      orderFlightInfo: [],
      //Economy class E，bussiness class B
      seatType: 'E',
      seatNumber: '',
      passenger: {}
}

// create store
export default new Vuex.Store({
    actions, mutations, state
})