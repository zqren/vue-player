// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/*把axios设为全局变量*/
import axios from 'axios'
Vue.prototype.$http = axios

//本地服务器端口
import hostSetting from  '../server/hostSetting'

require('!style-loader!css-loader!less-loader!./assets/css/m-reset.less')
require('!style-loader!css-loader!less-loader!./assets/css/globe.less')
require('!style-loader!css-loader!less-loader!./assets/css/icon.less')

window.HOST = hostSetting.protocol+hostSetting.host+':'+hostSetting.port

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
