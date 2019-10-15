<template>
    <div class="breadcrumb">
        <el-breadcrumb separator="/" class="bcb" >
            <el-breadcrumb-item
                    :to="{path:item.path}"
                    v-for="(item,index) in getTabsTxtArrData"
                    :key="index"
                    :class="{breadcrumb_last:index==getTabsTxtArrData.length-1}"
            >{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        mounted() {

        },
        computed:{
            //获取面包屑数据
            getTabsTxtArrData(){
                return this.$store.state.breadCrumb.bcList;
            }
        },
        methods: {}
    }
</script>
<style scoped>
    .bcb{font-size: 16px;height: 30px;line-height: 30px;}
    .breadcrumb{height: 30px;line-height: 30px;margin-top:16px;}

</style>