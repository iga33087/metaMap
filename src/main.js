import "@babel/polyfill"
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import $api from './assets/api/index.js'
import $global from './assets/js/global.js'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/index.scss'

Vue.use(ElementUI);
Vue.prototype.$api=$api
Vue.prototype.$global=$global
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
