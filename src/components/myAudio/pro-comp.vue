<template>
   <process :val="value"></process>
</template>
<style rel="stylesheet/less" lang="less">
    
</style>
<script>
    import process from './audio/process'
    export default{
        data(){
            return{
                value:20
            }
        },
        components:{
            process
        }
    }
</script>
