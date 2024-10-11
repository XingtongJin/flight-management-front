import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router'
import store from './store'
import axios from './utils/axios'
import qs from 'qs'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.use(ElementUI, {locale})// Set the global language to English


Vue.prototype.$axios = axios
Vue.prototype.$qs = qs

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})