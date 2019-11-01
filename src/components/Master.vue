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
                <!-- <transition mode="out-in" enter-active-class="animated slideInRight" leave-active-class='animated slideOutLeft'> -->
                    <keep-alive>
                        <router-view/>
                    </keep-alive>
                <!-- </transition> -->
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
            return {
                resultArr:[],
                currPathObj:{}, //当前路由信息
                tabsArr:[],     //标签tabs
                tabsArrTxt:[],  //标签tabs文字
                specialFlag:false,   //特殊路由flag
            }
        },
        mounted() {
            setTimeout(()=>{
                this.setMenuData(this.getLeftMenuData,location.pathname.slice(1));
            },800)
        },
        methods:{
            //处理特殊路由（左侧菜单没有的）
            doSpecialPath(pathName){
                let _this = this;

                let arrSpecial = [
                    {path:'addPage',name:'新增页面'},
                    {path:'orderDetail',name:'订单详情'}
                ];
                for(let i=0;i<arrSpecial.length;i++){
                    if(pathName == arrSpecial[i].path){
                        //console.log('满足···');
                        _this.currPathObj = arrSpecial[i];
                        //console.log(_this.currPathObj);
                        _this.specialFlag = true;
                    }
                }
                //console.log('_this.specialFlag:'+_this.specialFlag);
                //return _this.specialFlag;
                return false;
            },
            //通过path找到节点id
            getIds(arr,pathName){
                let _this = this;
                if(arr){
                    if(_this.doSpecialPath(pathName)){
                        //console.log('111');
                        //console.log(_this.currPathObj);
                        this.resultArr.push({
                            name: "系统首页",
                            path: "index"
                        });
                    }else{
                        //console.log('222');
                        for(let i=0;i<arr.length;i++){
                            if(arr[i].path === pathName){
                                this.currPathObj = arr[i];
                                //console.log('匹配到了···');
                                //console.log(this.currPathObj);
                                let objArr = this.getParent(this.getLeftMenuData,arr[i].id);
                                for(let j=0;j<objArr.length;j++){
                                    this.getParName(this.getLeftMenuData,objArr[j]);
                                }
                                break;
                            }else{
                                this.getIds(arr[i].children,pathName);
                            }
                        }
                    }
                }
            },
            //通过节点id，获取所以父级id
            getParent(data2, nodeId2) {
                let arrRes = [];
                if (data2.length == 0) {
                    if (!!nodeId2) {
                        arrRes.unshift(nodeId2);
                    }
                    return arrRes;
                }
                let rev = (data, nodeId) => {
                    for (let i = 0; i < data.length; i++) {
                        let node = data[i];
                        if (node.id === nodeId) {
                            arrRes.unshift(nodeId);
                            rev(data2, node.pId);
                            break;
                        }else {
                            if (!!node.children && node.children.length > 0) {
                                rev(node.children, nodeId);
                            }
                        }
                    }
                    return arrRes;
                };
                arrRes = rev(data2, nodeId2);
                return arrRes;
            },
            //根据id获取父级 name
            getParName(arr,id){
                if(arr){
                    for(let i=0;i<arr.length;i++){
                        if(arr[i].id === id){
                            let obj = {
                                name: "系统首页",
                                path: "index"
                            };
                            this.resultArr.push({
                                name:arr[i].name,
                                path:arr[i].path
                            });
                            if(this.resultArr[0].path != 'index'){
                                this.resultArr.unshift(obj);
                            }
                            return;
                        }else{
                            this.getParName(arr[i].children,id);
                        }
                    }
                }
            },
            setMenuData(arr,pathName){
                //console.log(arr);
                this.resultArr = [];
                this.getIds(arr,pathName);
                this.$store.commit('setBcList',this.resultArr);
                this.setTabs();
            },
            //设置标签tabs
            setTabs(){
                this.$store.commit('addTabs',this.currPathObj);

                //console.log(this.getTabsTxtArrData);
                //console.log(this.currPathObj.name);
                //设置标签index
                let tabIndex = null;
                for(let i=0;i<this.getTabsTxtArrData.length;i++){
                    if(this.getTabsTxtArrData[i] === this.currPathObj.name){
                        tabIndex = i;
                    }
                }
                //console.log('mater:'+tabIndex);
                this.$store.commit('setTabIndex',tabIndex);
            }
        },
        computed:{
            //获取左侧菜单数据
            getLeftMenuData(){
                return this.$store.state.leftMenu.menuList;
            },
            //tabsTxtArr数据
            getTabsTxtArrData(){
                return this.$store.state.muduleTabs.tabsTxtArr;
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
                //console.log(to);
                this.setMenuData(this.getLeftMenuData,to.name);
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
