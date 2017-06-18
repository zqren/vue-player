/**
 * Created by zlvin on 2017/3/28.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import songInfo from './module/song-info'
import loading from './module/loading'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    songInfo,
    loading
  }
})
