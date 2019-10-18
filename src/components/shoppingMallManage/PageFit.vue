<template>
    <div class="page_fit">
        <div class="pf_top">
            <div class="pf_tleft">
                <div class="btn btn_blue" @click="backManageCenter">返回管理中心</div>
            </div>
            <div class="pf_trig">
                <div class="btn btn_gray" @click="showPageSet">页面设置</div>
                <div class="btn btn_gray">预览</div>
                <div class="btn btn_gray">保存</div>
                <div class="btn btn_blue">发布</div>
            </div>
        </div>
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

                            <!--单行多图-->
                            <div class="cus_components cp_title">
                                <div class="cus_cpt_head">
                                    <span class="cur_ch_tit">单行多图-1</span>
                                    <span class="cur_btn_gray">删除</span>
                                    <span class="cur_btn_gray">折叠</span>
                                </div>
                                <div class="cus_cpt_main">
                                    <ul class="single_multipic">
                                        <li class="sgm_lis"></li>
                                        <li class="sgm_lis"></li>
                                        <li class="sgm_lis"></li>
                                        <li class="sgm_lis"></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="m_b_bottom"></div>
                </div>
            </div>
            <div class="pf_m_attr">
                <!--页面设置-->
                <div class="pf_rblocklis" v-show="pageSetting">
                    <div class="prr_lis">
                        <div class="prr_lis_txt must">页面名称：</div>
                        <div class="prr_lis_rig">
                            <input type="text" class="pr_ipset" placeholder="请填写页面名称" />
                        </div>
                    </div>

                    <div class="prr_lis">
                        <div class="prr_lis_txt">页面标题：</div>
                        <div class="prr_lis_rig">
                            <input type="text" class="pr_ipset" placeholder="请填写页面标题" />
                        </div>
                    </div>

                    <div class="prr_lis">
                        <div class="prr_lis_txt">页面背景色：</div>
                        <div class="prr_lis_rig">
                            <input type="color" />
                        </div>
                    </div>

                    <div class="prr_lis">
                        <div class="prr_lis_txt">页面背景图：</div>
                        <div class="prr_lis_rig">
                            <label for="fileinp">
                                <div class="filebtn">
                                    <span class="filebtnadd iconfont iconicon-tianjia1"></span>
                                    <span class="filebtntxt">上传图片</span>
                                </div>
                                <input type="file" id="fileinp" />
                            </label>
                            <div class="filewarn">建议尺寸：100px*100px，不超过500kb，支持JPG、JPEG、PNG格式图片</div>
                        </div>
                    </div>

                    <div class="prr_lis">
                        <div class="prr_lis_txt">图片排版：</div>
                        <div class="prr_lis_rig prrlr_txt">
                            <span class="prt_ipt"><input type="radio" name="pb" /></span>
                            <span class="prt_iptxt">无</span>
                            <span class="prt_ipt"><input type="radio" name="pb" /></span>
                            <span class="prt_iptxt">平铺</span>
                            <span class="prt_ipt"><input type="radio" name="pb" /></span>
                            <span class="prt_iptxt">横向平铺</span>
                            <span class="prt_ipt"><input type="radio" name="pb" /></span>
                            <span class="prt_iptxt">纵向</span>
                        </div>
                    </div>

                    <div class="prr_lis">
                        <div class="prr_lis_txt">是否显示页头尾：</div>
                        <div class="prr_lis_rig prrlr_txt">
                            <span class="prt_ipt"><input type="radio" name="th" /></span>
                            <span class="prt_iptxt">是</span>
                            <span class="prt_ipt"><input type="radio" name="th" /></span>
                            <span class="prt_iptxt">否</span>
                        </div>
                    </div>
                    <div class="prr_lis_line"></div>

                    <div class="prr_lis">
                        <div class="prr_lis_txt must">分享标题：</div>
                        <div class="prr_lis_rig">
                            <input type="text" class="pr_ipset" placeholder="不填则默认为页面标题" />
                        </div>
                    </div>

                    <div class="prr_lis">
                        <div class="prr_lis_txt">分享图片：</div>
                        <div class="prr_lis_rig">
                            <label for="fileinpshare">
                                <div class="filebtn">
                                    <span class="filebtnadd iconfont iconicon-tianjia1"></span>
                                    <span class="filebtntxt">上传图片</span>
                                </div>
                                <input type="file" id="fileinpshare" />
                            </label>
                            <div class="filewarn">建议尺寸：100px*100px，不超过500kb，支持JPG、JPEG、PNG格式图片</div>
                        </div>
                    </div>

                    <div class="prr_lis">
                        <div class="prr_lis_txt">分享描述：</div>
                        <div class="prr_lis_rig">
                            <textarea class="prr_area1" placeholder="请填写分享描述"></textarea>
                        </div>
                    </div>

                </div>

            </div>
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
                ],
                pageSetting:true,  //页面配置
            }
        },
        computed: {},
        created() {

        },
        mounted() {
            this.setScroll();
        },
        methods: {
            //显示页面配置
            showPageSet(){
                this.pageSetting = true;
            },
            //返回商城管理中心
            backManageCenter(){
                this.$router.push({
                    name:'pageList'
                });
            },
            allowDrop(ev){
                ev.preventDefault();
                //this.deleteBorderEle();
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
    @import "../../assets/css/shopFit.css";
</style>