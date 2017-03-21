import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import myAudio from '@/components/myAudio/my-audio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myAudio',
      component: myAudio
    }
  ]
})
