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
            return {
                menuList:[
                    {
                        id:1,
                        pId:null,
                        name:'系统首页',
                        path:'index',
                        iconClass:'icon-tubiao_dingdan',
                        children:[]
                    },
                    {
                        id:2,
                        pId:null,
                        name:'商品中心',
                        path:'',
                        iconClass:'icon-tubiao_dingdan',
                        children:[
                            {id:21,pId:2,name:'商品管理',path:'goodsManage',children:[]},
                            {id:22,pId:2,name:'商品上下架',path:'goodsUpOrLowFrame',children:[]},
                            {id:23,pId:2,name:'商品标签',path:'goodsLabel',children:[]},
                            {id:24,pId:2,name:'品类管理',path:'categoryManage',children:[]},
                            {id:25,pId:2,name:'品牌管理',path:'brandManage',children:[]},
                            {id:26,pId:2,name:'规格管理',path:'specsManage',children:[]},
                            {id:27,pId:2,name:'计价单位管理',path:'valueUnitManage',children:[]}
                        ]
                    },
                    {
                        id:3,
                        pId:null,
                        name:'库存中心',
                        path:'',
                        iconClass:'icon-tubiao_dingdan',
                        children:[
                            {id:31,pId:3,name:'库存列表',path:'stockList',children:[]},
                            {id:32,pId:3,name:'出入库记录',path:'cRKlist',children:[]},
                            {id:33,pId:3,name:'库存预警',path:'stockWarning',children:[]},
                            {id:34,pId:3,name:'库存盘点',path:'stockCheck',children:[]},
                            {id:35,pId:3,name:'库存调拨',path:'stockDB',children:[]},
                        ]
                    },
                    {
                        id:4,
                        pId:null,
                        name:'分销中心',
                        path:'distributionCenter',
                        iconClass:'icon-tubiao_dingdan',
                        children:[]
                    },
                    {
                        id:5,
                        pId:null,
                        name:'用户中心',
                        path:'',
                        iconClass:'icon-tubiao_dingdan',
                        children:[
                            {id:51,pId:5,name:'用户管理',path:'userManage',children:[]},
                            {id:52,pId:5,name:'角色管理',path:'roleManage',children:[]},
                            {id:53,pId:5,name:'商家管理',path:'businessManage',children:[]},
                            {id:54,pId:5,name:'公司管理',path:'companyManage',children:[]},
                        ]
                    },
                    {
                        id:6,
                        pId:null,
                        name:'会员中心',
                        path:'',
                        iconClass:'icon-tubiao_dingdan',
                        children:[
                            {id:61,pId:6,name:'会员列表',path:'vipList',children:[]},
                            {id:62,pId:6,name:'会员导入',path:'vipImport',children:[]},
                            {id:63,name:'会员输出',path:'',pId:5,children:[
                                {id:631,pId:63,name:'会输1',path:'hs1',children:[]},
                                {id:632,pId:63,name:'会输2',path:'hs2',children:[]}
                            ]},
                        ]
                    },
                ],
                resultArr:[],
                currPathObj:{}, //当前路由信息
                tabsArr:[],     //标签tabs
                tabsArrTxt:[],  //标签tabs文字
            }
        },
        mounted() {
            this.setMenuData(this.menuList,location.pathname.slice(1));
        },
        methods:{
            //通过path找到节点id
            getIds(arr,pathName){
                if(arr){
                    for(let i=0;i<arr.length;i++){
                        if(arr[i].path === pathName){
                            //console.log('找到了···');
                           // console.log(arr[i]);
                            this.currPathObj = arr[i];
                            let objArr = this.getParent(this.menuList,arr[i].id);
                            //console.log(objArr);
                            for(let j=0;j<objArr.length;j++){
                                this.getParName(this.menuList,objArr[j]);
                            }
                            return;
                        }else{
                            this.getIds(arr[i].children,pathName);
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
                this.resultArr = [];
                this.getIds(arr,pathName);
                this.$store.commit('setBcList',this.resultArr);
                this.setTabs();
            },
            //设置标签tabs
            setTabs(){
                //console.log(this.currPathObj);
                this.$store.commit('addTabs',this.currPathObj);

                //设置标签index
                let tabIndex = null;
                for(let i=0;i<this.getTabsTxtArrData.length;i++){
                    if(this.getTabsTxtArrData[i] === this.currPathObj.name){
                        tabIndex = i;
                    }
                }
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
                this.setMenuData(this.menuList,to.name);
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
