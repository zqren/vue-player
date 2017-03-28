// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import Toast from './toast'
Vue.use(Toast)

/*把axios设为全局变量*/
import axios from 'axios'
Vue.prototype.$http = axios

//本地服务器端口
var hostSetting = require('../server/hostSetting')

require('./assets/css/m-reset.less')
require('./assets/css/globe.less')
require('./assets/css/icon.less')

window.HOST = hostSetting.protocol+hostSetting.host+':'+hostSetting.port

Vue.directive('lazy-img',{
  bind(el,binding){
    el.style.height = '100px'
    el.style.background = '#dcdcdc'
    var img = new Image()
    img.src = binding.value
    img.onload = (() =>{
      el.style.height = 'auto'
      el.src = binding.value
    })
  }
})

Vue.config.silent = false
Vue.config.devtools = true

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
