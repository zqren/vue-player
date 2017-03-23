/**
 * Created by zlvin on 2017/3/23.
 */

const routes = [{
    path:'/',
    name:'home',
    component:require('../components/home-comp')
},{
    path:'/playerList',
    name:'playerList',
    component:require('../components/player-list')
},{
    path:'/search',
    name:'search',
    component:require('../components/search')
}]

export default routes