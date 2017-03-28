/**
 * Created by zlvin on 2017/3/28.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import songInfo from './module/song-info'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    songInfo
  }
})
