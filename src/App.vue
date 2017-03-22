<template>
  <div id="app">
    <audio id="myAudio1">
      <source src="http://7xteoi.com1.z0.glb.clouddn.com/%E6%88%90%E9%83%BD-%E8%B5%B5%E9%9B%B7.mp3">
    </audio>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
  @import url('./assets/css/m-reset.less');
</style>
