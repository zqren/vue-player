/**
 * Created by zlvin on 2017/3/28.
 */
import * as types from '../types'

const state = {
      songCurrentTime:0,
      songTotalTime:0,
      endStatus:false,
      songUrl: 'http://7xteoi.com1.z0.glb.clouddn.com/%E6%88%90%E9%83%BD-%E8%B5%B5%E9%9B%B7.mp3',
      songName: '成都',
      songAuthor: '赵雷',
      albumPic: 'http://p1.music.126.net/cUTk0ewrQtYGP2YpPZoUng==/3265549553028224.jpg'
}

const getters = {
      currentTime: state =>state.songCurrentTime,
      totalTime: state =>state.songTotalTime,
      endS: state =>state.endStatus,
      mp3Url: state => state.songUrl,
      mp3Name: state => state.songName,
      mp3Author: state => state.songAuthor,
      picUrl: state => state.albumPic
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
    },
    [types.GET_ALBUM_PIC](state,songs){
          state.songUrl = songs.mp3Url
          state.songName = songs.name
          state.songAuthor = songs.artists[0].name
          state.albumPic = songs.album.picUrl
    }
}

const actions = {
  setCurrentTime({commit},event){
        commit(types.SET_CURRENT_TIME, event.target.currentTime)
  },
  getTotalTime({commit},event){
       commit(types.GET_SONG_TIME, event.target.duration)
  },
  endPlay({commit},event){
        commit(types.END_PLAY, event.target.ended)
  },
  getAlbumPic({commit},list){
        commit(types.GET_ALBUM_PIC, list)
  }
}

export default {
      state,
      getters,
      mutations,
      actions
}