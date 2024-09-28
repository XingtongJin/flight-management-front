import Vue from 'vue'
import App from './App.vue'
import { Form, FormItem, Input, Checkbox, Button } from 'element-ui'
import router from './router'
import store from './store'
import axios from './utils/axios'


Vue.config.productionTip = false
Vue.component(Button.name, Button)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Input.name, Input)
Vue.component(Checkbox.name, Checkbox)

Vue.prototype.$axios = axios


new Vue({
  el: '#app',
  render: h => h(App),
  router
})