<template>
    <div id="app" class="app">
        <div class="left"><LeftMenu></LeftMenu></div>
        <div class="main">
            <div class="breadcrumb">
                <Top></Top>
            </div>
            <div class="tabs">
                <Tabs></Tabs>
            </div>
            <div class="blocks">
                <keep-alive>
                    <router-view/>
                </keep-alive>
            </div>

        </div>
    </div>
</template>

<script>
    import LeftMenu from '@/components/common/Left.vue'
    import Top from '@/components/common/Top.vue'

    import Tabs from '@/components/common/Tabs.vue'
    export default {
        data() {
            return {}
        },
        mounted() {
            this.setIndex();

        },
        methods:{
            //设置面包屑和标签栏目数据
            setIndex(){
                if(location.pathname != '/index'){
                    //location.href = location.origin+'/index';
                }
            }
        },
        computed:{
            //获取左侧菜单数据
            getLeftMenuData(){
                return this.$store.state.leftMenu.menuList;
            }
        },
        components:{
            Top,
            LeftMenu,
            Tabs
        },
        watch:{
            $route(to,from){
                //console.log('路由变化');
                //console.log(from);
                //this.setMenuData();
            }
        }
    }
</script>

<style scoped>
    .app{position: absolute;top:0px;left:0px;right:0px;bottom:0px;}
    .left{width: 201px;position: absolute;top:0px;left:0px;bottom:0px;background: #252d42;}
    .main{position: absolute;top:0px;left:200px;bottom:0px;right:0px;background: #eceff4;display: flex;
        flex-direction: column;
    }
    .breadcrumb{height: 64px;border-bottom: 1px solid #dfe3e9;overflow: hidden;box-sizing: border-box;
        background: #fff;flex-shrink: 0;
    }
    .tabs{
        height: 32px;border-bottom: 1px solid #dfe3e9;overflow: hidden;box-sizing: border-box;
        background: #fff;flex-shrink: 0;
    }
    .blocks{flex-grow: 1;overflow: auto;}
</style>
