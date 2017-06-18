/**
 * Created by zlvin on 2017/6/18.
 */
import * as types from '../types'

const state = {
     isLoading:false
}

const getters = {
     loadStatus: state => state.isLoading
}

const mutations = {
    [types. GET_LOAD_STATUS](state,status){
          state.isLoading = status
    }
}

const actions = {
  getLoadStatus({commit},status){
        commit(types.GET_LOAD_STATUS,status)
  }
}

export default {
      state,
      getters,
      mutations,
      actions
}