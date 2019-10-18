<template>
    <div class="left">
        <div class="l_logo">
            <div class="logos iconfont iconlogo"></div>
        </div>

        <div class="l_menu">
            <ul class="l_mul" v-show="false">
                <li class="l_mli">
                    <div class="l_mli_icon iconfont icon-tubiao_dingdan"></div>
                    <div class="l_mli_txt">系统首页</div>
                    <div class="l_mli_tar iconfont icon-jiantouxiangshang"></div>
                </li>
                <li class="l_mli">
                    <div class="l_mli_icon iconfont icon-tubiao_dingdan"></div>
                    <div class="l_mli_txt">系统首页</div>
                    <div class="l_mli_tar iconfont icon-jiantouxiangshang"></div>
                </li>
            </ul>
            <el-row class="tac">
                <el-col>
                    <el-menu
                            default-active="1"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                            @select="selectMenu"
                            background-color="#252d42"
                            text-color="#c4c8ce"
                            active-text-color="#fff"
                            :unique-opened="true"
                            :router="true"
                    >
                        <div v-for="(item,index) in menuList"
                             :key="index"

                        >
                            <el-submenu
                                    :index="(index+1)+''"
                                    v-if="item.children.length > 0"
                            >
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>{{item.name}}</span>
                                </template>

                                <div v-for="(item2,index2) in item.children" :key="index2"
                                     class="l_menu2"
                                >
                                    <el-submenu :index="'2-'+index2" v-if="item2.children.length > 0">
                                        <template slot="title">{{item2.name}}</template>
                                        <el-menu-item :index="item3.path"
                                                      v-for="(item3,index3) in item2.children"
                                                      :key="index3"
                                                      @click="menuCk(item3,item2,item)"
                                        >{{item3.name}}</el-menu-item>
                                    </el-submenu>

                                    <el-menu-item :index="item2.path" v-else @click="menuCk(item2,item)">{{item2.name}}</el-menu-item>
                                </div>
                            </el-submenu>

                            <el-menu-item :index="item.path" v-else
                                          @click="menuCk(item)"
                            >
                                <i class="el-icon-setting"></i>
                                <span slot="title">{{item.name}}</span>
                            </el-menu-item>
                        </div>
                    </el-menu>
                </el-col>
            </el-row>

            <div v-show="false" v-for="(item,index) in menuList" :key="index" class="aa">
                <div style="color:red;" v-if="item.children.length>0">{{item.name}}</div>
                <div v-else style="color:#ccc;">{{item.name}}</div>
            </div>

        </div>
    </div>
</template>
<script>
    import ajaxConfig from '../../../src/lib/ajaxConfig'
    export default {
        data(){
            return {
                /*menuList:[
                    {
                        "id":1,
                        "pId":null,
                        "name":"系统首页",
                        "path":"index",
                        "iconClass":"icon-tubiao_dingdan",
                        "children":[]
                    },
                    {
                        "id":2,
                        "pId":null,
                        "name":"商品中心",
                        "path":"",
                        "iconClass":"icon-tubiao_dingdan",
                        "children":[
                            {"id":21,"pId":2,"name":"商品管理","path":"goodsManage","children":[]},
                            {"id":22,"pId":2,"name":"商品上下架","path":"goodsUpOrLowFrame","children":[]},
                            {"id":23,"pId":2,"name":"商品标签","path":"goodsLabel","children":[]},
                            {"id":24,"pId":2,"name":"品类管理","path":"categoryManage","children":[]},
                            {"id":25,"pId":2,"name":"品牌管理","path":"brandManage","children":[]},
                            {"id":26,"pId":2,"name":"规格管理","path":"specsManage","children":[]},
                            {"id":27,"pId":2,"name":"计价单位管理","path":"valueUnitManage","children":[]}
                        ]
                    },
                    {
                        "id":3,
                        "pId":null,
                        "name":"库存中心",
                        "path":"",
                        "iconClass":"icon-tubiao_dingdan",
                        "children":[
                            {"id":31,"pId":3,"name":"库存列表","path":"stockList","children":[]},
                            {"id":32,"pId":3,"name":"出入库记录","path":"cRKlist","children":[]},
                            {"id":33,"pId":3,"name":"库存预警","path":"stockWarning","children":[]},
                            {"id":34,"pId":3,"name":"库存盘点","path":"stockCheck","children":[]},
                            {"id":35,"pId":3,"name":"库存调拨","path":"stockDB","children":[]}
                        ]
                    },
                    {
                        "id":4,
                        "pId":null,
                        "name":"分销中心",
                        "path":"distributionCenter",
                        "iconClass":"icon-tubiao_dingdan",
                        "children":[]
                    },
                    {
                        "id":5,
                        "pId":null,
                        "name":"用户中心",
                        "path":"",
                        "iconClass":"icon-tubiao_dingdan",
                        "children":[
                            {"id":51,"pId":5,"name":"用户管理","path":"userManage","children":[]},
                            {"id":52,"pId":5,"name":"角色管理","path":"roleManage","children":[]},
                            {"id":53,"pId":5,"name":"商家管理","path":"businessManage","children":[]},
                            {"id":54,"pId":5,"name":"公司管理","path":"companyManage","children":[]}
                        ]
                    },
                    {
                        "id":6,
                        "pId":null,
                        "name":"会员中心",
                        "path":"",
                        "iconClass":"icon-tubiao_dingdan",
                        "children":[
                            {"id":61,"pId":6,"name":"会员列表","path":"vipList","children":[]},
                            {"id":62,"pId":6,"name":"会员导入","path":"vipImport","children":[]},
                            {"id":63,"name":"会员输出","path":"","pId":5,"children":[
                                {"id":631,"pId":63,"name":"会输1","path":"hs1","children":[]},
                                {"id":632,"pId":63,"name":"会输2","path":"hs2","children":[]}
                            ]}
                        ]
                    },
                    {
                        "id":7,
                        "pId":null,
                        "name":"配送中心",
                        "path":"",
                        "iconClass":"icon-tubiao_dingdan",
                        "children":[
                            {"id":71,"pId":7,"name":"包裹列表","path":"packageList","children":[]},
                            {"id":72,"pId":7,"name":"物流公司设置","path":"wLCompanySet","children":[]}
                        ]
                    }
                ],*/      //来源于 接口数据
                menuList:[]
            }
        },
        computed:{
            //tabsTxtArr数据
            getTabsTxtArrData(){
                return this.$store.state.muduleTabs.tabsTxtArr;
            }
        },
        created(){
            this.getLeftMenu();
        },
        mounted(){

        },
        methods:{

            //发送菜单数据到vuex。状态共享
            sendMenuData(){
                this.$store.commit('menuData',this.menuList);
            },
            handleOpen(key, keyPath) {
                //console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                //console.log(key, keyPath);
            },
            selectMenu(val,val2,v3){
                //console.log(val,val2,v3);
            },
            //菜单点击
            menuCk(item,parent,grandpa){
                /*let indexObj = {
                    txt:'系统首页',
                    path:'index'
                };
                let bclist = [];
                //有三级菜单
                if(grandpa && parent){

                    bclist[0] = indexObj;

                    bclist[1] = {
                        txt:grandpa.name,
                        path:grandpa.path
                    };
                    bclist[2] = {
                        txt:parent.name,
                        path:parent.path
                    };
                    bclist[3] = {
                        txt:item.name,
                        path:item.path
                    };
                }
                //有2级菜单
                if(!grandpa && parent){

                    bclist[0] = indexObj;
                    bclist[1] = {
                        txt:parent.name,
                        path:parent.path
                    };
                    bclist[2] = {
                        txt:item.name,
                        path:item.path
                    };
                }
                //有1级菜单
                if(!grandpa && !parent){
                    let obj = {
                        txt:item.name,
                        path:item.path
                    };
                    bclist[0] = indexObj;
                    if(item.name != '系统首页'){
                        bclist.push(obj);
                    }
                }*/

                //console.log(bclist);
                //this.$store.commit('setBcList',bclist);
                //---------------------------------------------


                //console.log(item);
                //console.log(bclist);
                /*let objItem = {
                    ...item,
                    bcd:bclist
                };*/
                //console.log(objItem);

                //this.$store.commit('addTabs',objItem);
                //console.log(this.getTabsTxtArrData);
                /*if(this.getTabsTxtArrData.includes(item.name)){    //重复判断
                    //重复了
                    let tNum = null;
                    for(let i=0;i<this.getTabsTxtArrData.length;i++){
                        if(item.name === this.getTabsTxtArrData[i]){
                            tNum = i;
                        }
                    }
                    this.$store.commit('setTabIndex',tNum);
                }*/
            },

            getLeftMenu() {
                let _this = this;
                let url = ajaxConfig.allUrls.leftMenu;
                this.$axios.get(url).then((res) => {
                    if(res.data.code == '0'){
                        _this.menuList = res.data.data;
                        _this.sendMenuData();
                    }
                }).catch((err) => {
                    console.log(err);
                })
            },
        }
    }
</script>
<style scoped>
    .left{
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
    }
    .l_logo{height: 63px;border-bottom: 1px solid #14171f;overflow: hidden;flex-shrink: 0;flex-grow: 0;
        font-size: 22px;text-align: center;color:#fff;font-weight: bold;line-height: 63px;
    }
    .l_menu{height: auto;border-top:1px solid #363d50;flex-grow: 1;overflow: hidden;position: relative;}
    .l_mul{height: auto;display: block;overflow: hidden;}
    .l_mli{height: 44px;display: flex;overflow: hidden;line-height: 44px;}
    .l_mli_icon{width: 20px;height: 20px;overflow: hidden;text-align: center;line-height: 20px;margin-top:12px;
        margin-left:10px;margin-right: 10px;
    }
    .l_mli_txt{width: auto;font-size: 16px;color:#fff;flex-grow: 1;}
    .l_mli_tar{width: 20px;height: 20px;line-height: 20px;margin-top:12px;margin-right: 8px;text-align: center;}
    .icon-tubiao_dingdan{color:#fff;}
    .icon-jiantouxiangshang{color:#fff;}
    .logos{height: 100%;text-align: center;line-height: 66px;font-size: 30px;color:#fff;overflow: hidden;}

</style>