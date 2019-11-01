<template>
    <div id="app" class="app">
        <router-view/>
    </div>
</template>

<script>
    import Left from '@/components/common/Left.vue'
    export default {
        name: 'App',
        components:{
            Left
        }
    }
</script>

<style scoped>
    .app{
        position: absolute;
        top:0px;left:0px;
        right:0px;
        bottom:0px;
        height: 100%;
        margin: 0;
        padding: 0;
        background: url(./assets/images/bg.jpg)
        }
    .left{width: 201px;position: absolute;top:0px;left:0px;bottom:0px;background: #252d42;}
    .main{position: absolute;top:0px;left:200px;bottom:0px;right:0px;background: #eceff4;}
</style>
