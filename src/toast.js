/**
 * Created by zlvin on 2017/3/28.
 */
var Toast = {}
Toast.install = function (Vue,options) {
  Vue.directive('toast',(el,binding)=>{
    var div = document.createElement('div')
    div.style.minWidth = '30px'
    div.style.minHeight = '10px'
    div.style.background = 'rgba(0,0,0,.5)'
    div.style.color = '#fff'
    div.style.padding = '5px'
    div.style.boxSizing = 'border-box'
    div.style.display = 'none'
    div.style.position = 'fixed'
    div.style.bottom = '10px'
    div.style.right = '0px'
    div.style.left = '0px'
    div.style.margin = '0 auto'
    div.style.borderRadius = '4px'
    div.appendChild(document.createTextNode(binding.value))
    document.body.appendChild(div)
    el.addEventListener('click',function () {
        div.style.display = 'block'
        div.style.zIndex = 99999
    })
  })
}

module.exports = Toast