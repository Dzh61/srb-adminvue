import Vue from 'vue'
import App from './App.vue'
import axios from "axios"
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import router from "@/router";


Vue.prototype.$http=axios
axios.defaults.baseURL = 'http://localhost:8110/'
Vue.use(ElementUI);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由器
  router: router
}).$mount('#app')
