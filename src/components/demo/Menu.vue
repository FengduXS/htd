<template>
    <div class="menu">
        <div class="m_top">
            <Top></Top>
        </div>
        <div class="m_main">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import Top from "./Top.vue"
    export default {
        data(){
            return {

            }
        },
        components:{
            Top
        }
    }
</script>
<style>
    .m_top{height: 50px;border:1px solid #00ff00;width: 500px;}
    .m_main{height: 300px;border:1px solid #000000;width:500px;}
</style>