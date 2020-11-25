import Vue from 'vue'
import App from './App.vue'
import router from './router'
import http from './api/http'

// 运行环境
const nodeEnv = process.env.NODE_ENV
Vue.prototype.$nodeEnv = nodeEnv
Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
