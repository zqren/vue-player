/**
 * Created by zlvin on 2017/3/28.
 */
import * as types from '../types'
const state = {
  songCurrentTime:0,
  songTotalTime:0,
  endStatus:false
}

const getters = {
  currentTime:state =>state.songCurrentTime,
  totalTime:state =>state.songTotalTime,
  endS:state =>state.endStatus
}

const mutations = {
    [types.SET_CURRENT_TIME](state,currentTime){
      state.songCurrentTime = currentTime
    },
    [types.GET_SONG_TIME](state,totalTime){
      state.songTotalTime = totalTime
      state.endStatus = false
    },
    [types.END_PLAY](state,endS){
      state.endStatus = endS
    }
}

const actions = {
  setCurrentTime({commit},event){
    commit(types.SET_CURRENT_TIME,event.target.currentTime)
  },
  getTotalTime({commit},event){
    commit(types.GET_SONG_TIME,event.target.duration)
  },
  endPlay({commit},event){
    commit(types.END_PLAY,event.target.ended)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}