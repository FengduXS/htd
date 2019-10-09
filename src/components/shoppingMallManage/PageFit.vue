<template>
    <div class="page_fit">
        <div class="pf_top">返回管理中心</div>
        <div class="pf_main">
            <div class="pf_m_cpt" ref="left">
                <div class="pf_mc_lis">
                    <div class="pf_ml_tit">
                        <span class="pf_ml_txt">通用</span>
                        <span class="pf_ml_icon iconfont iconicon-zhuangxiuzuocecaozuo"></span>
                    </div>
                    <ul class="pf_ml_block">
                        <li class="pf_compts"
                            v-for="(item,index) in commonList" :key="index"
                            :class="{borrignone:index%3 == 2}"
                            draggable="true" v-on:dragstart="drag"
                        >
                            <span class="pf_cicon iconfont" :class="item.iconClass"></span>
                            <span class="pf_ctxt">{{item.txt}}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="pf_m_show">
                <div class="move_start" v-show="false" draggable="true" v-on:dragstart="drag"></div>
                <div class="move_end" v-show="false" v-on:drop="drop" v-on:dragover="allowDrop"></div>

                <!--手机壳-->
                <div class="mobile_block">
                    <!--手机左侧按钮装饰-->
                    <span class="m_leftbtn">
                        <span class="m_lb_a"></span>
                        <span class="m_lb_b"></span>
                        <span class="m_lb_c"></span>
                    </span>
                    <!--手机右侧按钮装饰-->
                    <span class="m_rigbtn"></span>
                    <div class="m_b_top"></div>
                    <div class="m_b_main">
                        <div class="m_bm_area"
                             :class="{bgwhite:!noModuleShow}"
                             v-on:drop="drop"
                             v-on:dragover="allowDrop"
                             v-on:dragenter="dragenter"
                             v-on:dragleave="dragleave"
                        >

                            <div class="no_moduletxt" v-show="noModuleShow">您还未添加任何模块，请将左侧模块拖动到这里开始编辑哦~</div>

                            <!--标题-->
                            <div class="cus_components cp_title">
                                <div class="cus_cpt_head">
                                    <span class="cur_ch_tit">标题-1（栏目名称）</span>
                                    <span class="cur_btn_gray">删除</span>
                                    <span class="cur_btn_gray">折叠</span>
                                </div>
                                <div class="cus_cpt_main">
                                    <div class="cus_cpt_txt">标题名称</div>
                                </div>
                            </div>

                            <!--富文本-->
                            <div class="cus_components cp_title">
                                <div class="cus_cpt_head">
                                    <span class="cur_ch_tit">富文本-1</span>
                                    <span class="cur_btn_gray">删除</span>
                                    <span class="cur_btn_gray">折叠</span>
                                </div>
                                <div class="cus_cpt_main">
                                    <div class="cus_cpt_txt">这是富文本</div>
                                </div>
                            </div>

                            <!--单列多图-->
                            <div class="cus_components cp_title">
                                <div class="cus_cpt_head">
                                    <span class="cur_ch_tit">单列多图-1</span>
                                    <span class="cur_btn_gray">删除</span>
                                    <span class="cur_btn_gray">折叠</span>
                                </div>
                                <div class="cus_cpt_main">
                                    <div class="cus_cpt_dldt">
                                        <span class="cus_cdimg iconfont iconicon-tupian"></span>
                                    </div>
                                    <div class="cus_cpt_dldt">
                                        <span class="cus_cdimg iconfont iconicon-tupian"></span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="m_b_bottom"></div>
                </div>
            </div>
            <div class="pf_m_attr"></div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import PerfectScrollbar from 'perfect-scrollbar'
    export default {
        data() {
            return {
                noModuleShow:false,
                commonList:[
                    {
                        txt:'标题',
                        iconClass:'iconicon-zhuangxiu-biaoti'
                    },
                    {
                        txt:'富文本',
                        iconClass:'iconicon-zhuangxiu-fuwenben'
                    },
                    {
                        txt:'单列多图',
                        iconClass:'iconicon-zhuangxiu-danlieduotu'
                    },
                    {
                        txt:'单行多图',
                        iconClass:'iconicon-zhuangxiu-danhangduotu'
                    },
                    {
                        txt:'轮播',
                        iconClass:'iconicon-zhuangxiu-lunbo'
                    },
                    {
                        txt:'魔方',
                        iconClass:'iconicon-zhuangxiu-mofang'
                    },
                    {
                        txt:'视频',
                        iconClass:'iconicon-zhuangxiu-shipin'
                    },
                    {
                        txt:'辅助空白',
                        iconClass:'iconicon-zhuangxiu-fuzhukongbai'
                    },
                    {
                        txt:'公告信息',
                        iconClass:'iconicon-zhuangxiu-gonggaoxinxi'
                    },
                    {
                        txt:'热区',
                        iconClass:'iconicon-zhuangxiu-requ'
                    },
                    {
                        txt:'商品搜索',
                        iconClass:'iconicon-zhuangxiu-sousu'
                    }
                ]
            }
        },
        computed: {},
        created() {

        },
        mounted() {
            this.setScroll();
        },
        methods: {
            allowDrop(ev){
                ev.preventDefault();
               // this.deleteBorderEle();
            },
            drag(ev) {
                console.log(ev);
                ev.dataTransfer.setData("Text", 'tmmm');
            },
            drop(ev){
                ev.preventDefault();
                var data=ev.dataTransfer.getData("Text");
                console.log(data);
                //ev.target.appendChild(document.getElementById(data));

                this.deleteBorderEle();
            },
            //拖拽到目标元素范围内
            dragenter(){
                console.log('已经进入目标范围');
                this.appendEle();
            },
            //鼠标拖动的对象离开容器范围
            dragleave(){
                this.deleteBorderEle();
            },
            //滚动条
            setScroll(){
                const container = this.$refs.left;
                const ps = new PerfectScrollbar(container,{
                    wheelSpeed: 2,
                    wheelPropagation: true,
                    minScrollbarLength: 20
                });
            },
            //append元素
            appendEle(){
                let ydEle = '<div class="ed_border"></div>';
                $('.m_bm_area').append(ydEle);
            },
            //释放边框占位元素
            deleteBorderEle(){
                $('.ed_border').remove();
            }
        }
    }
</script>

<style>
    .move_start {
        position: absolute;
        top: 100px;
        left: 0px;
        background: gray;
        width: 50px;
        height: 50px;
    }

    .move_end {
        position: absolute;
        top: 100px;
        left: 100px;
        width: 300px;
        height: 300px;
        border: 1px dashed #ccc;
    }
    .page_fit{
        position: absolute;top:0px;left:0px;right:0px;bottom:0px;
    }
    .pf_top{height: 54px;overflow: hidden;border-bottom: 1px solid #dfe3e9;}
    .pf_main{
        position: absolute;top:55px;left:0px;right:0px;bottom:0px;display: flex;
    }
    .pf_m_cpt{width: 210px;height: 100%;flex-shrink: 0;background: #fff;border-right: 1px solid #dfe3e9;
        position: relative;overflow: hidden;
    }
    .pf_m_show{width: 550px;height:100%;flex-shrink: 0;flex-grow: 0;background: #eceff4;}
    .pf_m_attr{height: 100%;flex-shrink: 1;flex-grow: 1;background: #fff;}
    .pf_mc_lis{height: auto;overflow: hidden;}
    .pf_ml_tit{height: 27px;border-bottom: 1px solid #dfe3e9;}
    .pf_ml_txt{display: block;float:left;height: 27px;line-height: 27px;font-size: 12px;color:#6c6f76;margin-left:10px;}
    .pf_ml_icon{width: 27px;height: 27px;display: block;float:right;line-height: 27px;text-align: center;font-size: 14px;
        color:#a4a8b5;
    }
    .pf_ml_block{height: auto;overflow:hidden;display: block;border-bottom: 1px solid #dfe3e9;}
    .pf_compts{display: block;height: 70px;float:left;border-right: 1px solid #dfe3e9;width:70px;box-sizing: border-box;
        border-bottom: 1px solid #dfe3e9;overflow: hidden;
    }
    .pf_cicon{width: 24px;height: 24px;margin:0 auto;display: block;text-align: center;line-height: 24px;font-size: 24px;
        margin-top:12px;margin-bottom: 6px;color:#9fa3ae;
    }
    .pf_ctxt{height: 20px;line-height: 20px;text-align: center;font-size: 12px;color:#6c6f76;display: block;}

    .borrignone{border-right: none;}
    .borbtmnone{border-bottom: none;}

    .scroll1{width: 300px;height: 300px;border:1px solid red;position: relative;overflow: hidden;}
    .mobile_block{width: 432px;margin:20px auto;position: relative;}
    .m_b_top{height: 94px;overflow: hidden;background:url('../../assets/images/mobile-top.png') no-repeat;}
    .m_b_main{overflow: hidden;background:url('../../assets/images/mobile-mid2.png') repeat-y;}
    .m_b_bottom{height:106px;overflow: hidden;background:url('../../assets/images/mobile-bottom.png') no-repeat;}

    .m_bm_area{min-height:500px;width: 350px;margin:0 auto;background: #eceff4;overflow: hidden;}
    .m_leftbtn{height: 203px;position: absolute;width: 4px;left:12px;top:96px;display: block;}
    .m_lb_a{width: 4px;height: 33px;background: #f8f8f8;top:0px;left:0px;display: block;position: absolute;}
    .m_lb_b{width: 4px;height: 61px;background: #f8f8f8;top:62px;left:0px;display: block;position: absolute;}
    .m_lb_c{width: 4px;height: 61px;background: #f8f8f8;bottom:0px;left:0px;display: block;position: absolute;}
    .m_rigbtn{width: 4px;height: 61px;background: #f8f8f8;top:155px;right:12px;display: block;position: absolute;}
    .no_moduletxt{font-size: 14px;color:#6c6f76;line-height: 20px;text-align: center;padding-left:20px;
        padding-right: 20px;margin-top:200px;
    }
    .bgwhite{background: #fff;}
    .ed_border{border:2px dashed #a4a8b5;height: 30px;}
    .cus_components{height: auto;overflow: hidden;margin-bottom:8px;}
    .cus_cpt_head{height: 36px;background: #dfe3e9;}
    .cur_ch_tit{display: block;height: 36px;line-height: 36px;float:left;font-size: 14px;color:#333;text-indent: 10px;}
    .cur_btn_gray{width: 34px;height: 20px;float:right;display: block;background:#a4a8b5;font-size: 12px;line-height: 20px;
        text-align: center;color:#fff;margin-right: 10px;margin-top:8px;cursor:pointer;border-radius: 2px;overflow: hidden;
    }
    .cur_btn_gray:hover{
        background: #7f7b8a;
    }
    .cus_cpt_main{height: auto;overflow: hidden;}
    .cus_cpt_txt{font-size: 16px;color:#000;text-indent: 10px;line-height: 20px;height: auto;font-weight: 700;margin-top:8px;}
    .cus_cpt_dldt{background: #eceff4;height: 132px;overflow: hidden;margin:5px;}
    .cus_cdimg{font-size: 50px;width: 60px;height: 60px;line-height: 60px;text-align: center;margin:0 auto;
        display: block;color:#c6c9d3;margin-top:30px;
    }
</style>