<template>
    <div class="tabs" ref="toptabs">
        <ul class="tab_ul">
            <li class="tab_li" :class="{active:index==getTabIndex}" v-for="(item,index) in getTabData" :key="index">
                <span class="tab_litxt" @click="goPage(item,index)">{{item.name}}</span>
                <span class="tl_close iconfont iconicon-tab-close" v-show="closeIconFlag" @click="deleteTabs(index,item)"></span>
            </li>
        </ul>
    </div>
</template>
<script>
    import PerfectScrollbar from 'perfect-scrollbar'
    export default {
        data() {
            return {
                closeIconFlag:false, //删除icon
            }
        },
        computed:{
            //获取tabs选中值索引号
            getTabIndex(){
                return this.$store.state.muduleTabs.tabsIndex;
            },
            //获取tabs数据
            getTabData(){

                let arrTabs = this.$store.state.muduleTabs.tabs;
                return arrTabs;
            }
        },
        watch:{
            //标签 关闭按钮是否显示
            getTabData:function (newVal,oldVal){
                if(newVal.length > 1){
                    this.closeIconFlag = true;
                }else{
                    this.closeIconFlag = false;
                }
            }
        },
        mounted() {
           //console.log(JSON.parse(JSON.stringify(this.$store.state.muduleTabs.tabs)));
        },
        methods: {
            //滚动条
            setScroll(){
                const containerXl = this.$refs.toptabs;
                new PerfectScrollbar(containerXl);
            },
            //删除标签
            deleteTabs(index,item){
                //console.log(index);
                this.$store.commit('reduceTabs',index);
                //删除标签，路由实时变化
                if(index === this.getTabIndex){ //当前删除的标签索引=已经选中的tab
                    //console.log('删除了选中索引标签');
                    if(index === 0 && this.getTabIndex === 0){    //第一个标签

                        console.log(1);

                        this.$router.push({name: this.getTabData[index].path});
                        this.$store.commit('setTabIndex',index);

                    }else{
                        console.log('1-1');
                        this.$router.push({name: this.getTabData[index-1].path});
                        this.$store.commit('setTabIndex',index-1);

                        //设置面包屑
                        console.log(this.getTabData[index-1]);
                        if(this.getTabData[index-1].name == '系统首页'){
                            let obj = this.getTabData[index-1];
                            obj.bcd = [{path:'index',txt:'系统首页'}];
                            this.$store.commit('setBcList',obj.bcd);
                        }else{
                            this.$store.commit('setBcList',this.getTabData[index-1].bcd);
                        }

                    }

                }else{
                    if(index > this.getTabIndex){   //当前删除的索引号 > 已选择的索引号
                        //console.log('当前删除的索引号 > 已选择的索引号');

                    }else{
                        this.$store.commit('setTabIndex',this.getTabIndex-1);

                    }
                }


            },
            //标签页点击
            goPage(item,index){
                //console.log(item);
                let itemObj = item;
                if(item.name == '系统首页'){
                    itemObj.bcd = [{path:'index',txt:'系统首页'}];
                }
                this.$router.push({name: itemObj.path});
                this.$store.commit('setTabIndex',index);
                this.$store.commit('setBcList',itemObj.bcd);
            }
        }
    }
</script>
<style scoped>
    .tabs{display: flex;overflow: hidden;position: relative;}
    .tab_ul{display: block;overflow: hidden;flex-grow: 1;flex-shrink: 0;}
    .tab_li{display: block;overflow: hidden;height: 32px;line-height: 32px;padding-left:10px;padding-right: 10px;
        border-right: 1px solid #dfe3e9;float:left;
    }
    .tab_litxt{width: auto;color:#aaaaaa;font-size: 14px;height: 32px;display: block;float:left;cursor:pointer;}
    .tl_close{color:#eceff4;margin-left:5px;font-size: 14px;cursor:pointer;display: block;float:left;}
    .tab_li.active .tab_litxt{color:#333;}
    .tab_li.active .tl_close{color:#a4a8b5;}
</style>