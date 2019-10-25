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
                            :name="item.name"
                        >
                            <span class="pf_cicon iconfont" :class="item.iconClass"></span>
                            <span class="pf_ctxt">{{item.txt}}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="pf_m_show">

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
                        >
                            <div class="no_moduletxt" v-show="noModuleShow">您还未添加任何模块，请将左侧模块拖动到这里开始编辑哦~</div>

                            <!--标题-->
                            <div class="cus_components cp_title hide">
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
                            <div class="cus_components cp_richtext hide">
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
                            <div class="cus_components cp_dldt hide">
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
                            <div class="cus_components cp_dhdt hide">
                                <div class="cus_cpt_head">
                                    <span class="cur_ch_tit">单行多图-1</span>
                                    <span class="cur_btn_gray">删除</span>
                                    <span class="cur_btn_gray">折叠</span>
                                </div>
                                <div class="cus_cpt_main">
                                    <ul class="single_multipic list4">
                                        <li class="sgm_lis"><img  /> </li>
                                        <li class="sgm_lis"><img  /> </li>
                                        <li class="sgm_lis"><img  /> </li>
                                        <li class="sgm_lis"><img  /> </li>
                                    </ul>
                                </div>
                            </div>

                            <!--轮播-->
                            <div class="cus_components cp_carousel hide">
                                <div class="cus_cpt_head">
                                    <span class="cur_ch_tit">轮播-1</span>
                                    <span class="cur_btn_gray">删除</span>
                                    <span class="cur_btn_gray">折叠</span>
                                </div>
                                <div class="cus_cpt_main">
                                    <div class="carousel_out">
                                        <el-carousel trigger="click" height="150px"
                                                     arrow="always"
                                        >
                                            <el-carousel-item
                                                    v-for="item in 4" :key="item"
                                                    class="carousel_lis"
                                            >
                                                <span class="carousel_defpic iconfont iconicon-tupian"></span>
                                            </el-carousel-item>
                                        </el-carousel>
                                    </div>

                                </div>
                            </div>

                            <!--魔方-->
                            <div class="cus_components cp_mf hide">
                                <div class="cus_cpt_head">
                                    <span class="cur_ch_tit">魔方-1</span>
                                    <span class="cur_btn_gray">删除</span>
                                    <span class="cur_btn_gray">折叠</span>
                                </div>
                                <div class="cus_cpt_main">
                                    <!--魔方1-->
                                    <div class="mf_lis" v-show="false">
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                    </div>
                                    <!--魔方2-->
                                    <div class="mf_lis mf_tmp2" v-show="false">
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                    </div>

                                    <!--魔方3-->
                                    <div class="mf_lis mf_tmp3" v-show="false">
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                    </div>

                                    <!--魔方4-->
                                    <div class="mf_lis mf_tmp4" v-show="false">
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                    </div>

                                    <!--魔方5-->
                                    <div class="mf_lis mf_tmp5" v-show="false">
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                        <div class="mf_lb_rig">
                                            <div class="mf_rglis">
                                                <span class="mf_defpic iconfont iconicon-tupian"></span>
                                            </div>
                                            <div class="mf_rglis">
                                                <span class="mf_defpic iconfont iconicon-tupian"></span>
                                            </div>
                                        </div>
                                    </div>

                                    <!--魔方6-->
                                    <div class="mf_lis mf_tmp6" v-show="false">
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                    </div>

                                    <!--魔方7-->
                                    <div class="mf_lis mf_tmp7" v-show="false">
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                    </div>

                                    <!--魔方8-->
                                    <div class="mf_lis mf_tmp8" v-show="false">
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                        <div class="mf_lb_rig">
                                            <div class="mf_rglis">
                                                <div class="mf_blocks ">
                                                    <span class="mf_defpic iconfont iconicon-tupian"></span>
                                                </div>
                                                <div class="mf_blocks ">
                                                    <span class="mf_defpic iconfont iconicon-tupian"></span>
                                                </div>
                                            </div>
                                            <div class="mf_rglis clearboth widp100">
                                                <span class="mf_defpic iconfont iconicon-tupian martop20"></span>
                                            </div>
                                        </div>
                                    </div>

                                    <!--魔方9-->
                                    <div class="mf_lis mf_tmp9" v-show="false">
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                        <div class="mf_lb_rig">
                                            <div class="mf_rglis mf_special9">
                                                <span class="mf_defpic iconfont iconicon-tupian martop20"></span>
                                            </div>
                                            <div class="mf_rglis bgnone">
                                                <div class="mf_blocks ">
                                                    <span class="mf_defpic iconfont iconicon-tupian"></span>
                                                </div>
                                                <div class="mf_blocks ">
                                                    <span class="mf_defpic iconfont iconicon-tupian"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!--魔方10-->
                                    <div class="mf_lis mf_tmp10" v-show="false">
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                        <div class="mf_lb_rig">
                                            <div class="mf_rglis bgnone">
                                                <div class="mf_blocks ">
                                                    <span class="mf_defpic iconfont iconicon-tupian"></span>
                                                </div>
                                                <div class="mf_blocks ">
                                                    <span class="mf_defpic iconfont iconicon-tupian"></span>
                                                </div>
                                            </div>
                                            <div class="mf_rglis bgnone">
                                                <div class="mf_blocks ">
                                                    <span class="mf_defpic iconfont iconicon-tupian"></span>
                                                </div>
                                                <div class="mf_blocks ">
                                                    <span class="mf_defpic iconfont iconicon-tupian"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!--魔方11-->
                                    <div class="mf_lis mf_tmp11" v-show="true">
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                        <div class="mf_lb_rig">
                                            <div class="mf_rglis bgnone">
                                                <div class="mf_blocks ">
                                                    <span class="mf_defpic iconfont iconicon-tupian"></span>
                                                </div>
                                                <div class="mf_blocks ">
                                                    <span class="mf_defpic iconfont iconicon-tupian"></span>
                                                </div>
                                                <div class="mf_blocks ">
                                                    <span class="mf_defpic iconfont iconicon-tupian"></span>
                                                </div>
                                            </div>
                                            <div class="mf_rglis bgnone">
                                                <div class="mf_blocks ">
                                                    <span class="mf_defpic iconfont iconicon-tupian"></span>
                                                </div>
                                                <div class="mf_blocks ">
                                                    <span class="mf_defpic iconfont iconicon-tupian"></span>
                                                </div>
                                                <div class="mf_blocks ">
                                                    <span class="mf_defpic iconfont iconicon-tupian"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <!--视频-->
                            <div class="cus_components cp_video hide">
                                <div class="cus_cpt_head">
                                    <span class="cur_ch_tit">视频-1</span>
                                    <span class="cur_btn_gray">删除</span>
                                    <span class="cur_btn_gray">折叠</span>
                                </div>
                                <div class="cus_cpt_main">
                                    <div class="cus_video">
                                        <span class="iconvideo iconfont iconicon-zhuangxiu-shipin"></span>
                                    </div>
                                </div>
                            </div>

                            <!--辅助空白-->
                            <div class="cus_components cp_fzkb hide">
                                <div class="cus_cpt_head">
                                    <span class="cur_ch_tit">辅助空白-1</span>
                                    <span class="cur_btn_gray">删除</span>
                                    <span class="cur_btn_gray">折叠</span>
                                </div>
                                <div class="cus_cpt_main">
                                    <div class="cus_fz_block">
                                        <!--辅助占位空白-->
                                    </div>
                                </div>
                            </div>

                            <!--公告信息-->
                            <div class="cus_components cp_notice hide">
                                <div class="cus_cpt_head">
                                    <span class="cur_ch_tit">公告信息-1</span>
                                    <span class="cur_btn_gray">删除</span>
                                    <span class="cur_btn_gray">折叠</span>
                                </div>
                                <div class="cus_cpt_main">
                                    <div class="cus_notice">
                                        <div class="cus_nt_icon"><img src="../../assets/images/icon-notice.png" width="100%" height="100%" /></div>
                                        <div class="cus_nt_txt">这里是公告信息这里是公告信息这里是公告信息这里是公告信息这里是公告信息</div>
                                    </div>
                                </div>
                            </div>

                            <!--热区图-->
                            <div class="cus_components cp_hotmap hide">
                                <div class="cus_cpt_head">
                                    <span class="cur_ch_tit">热区图-1</span>
                                    <span class="cur_btn_gray">删除</span>
                                    <span class="cur_btn_gray">折叠</span>
                                </div>
                                <div class="cus_cpt_main">
                                    <div class="cus_rqu_map">
                                        <span class="icon_rq iconfont iconicon-tupian"></span>
                                    </div>
                                </div>
                            </div>

                            <!--商品搜索-->
                            <div class="cus_components cp_search hide">
                                <div class="cus_cpt_head">
                                    <span class="cur_ch_tit">搜索-1</span>
                                    <span class="cur_btn_gray">删除</span>
                                    <span class="cur_btn_gray">折叠</span>
                                </div>
                                <div class="cus_cpt_main">
                                    <div class="cus_ss">
                                        <span class="cus_ssicon iconfont iconicon-zhuangxiu-sousu"></span>
                                        <span class="cus_ssipt"><input type="text" placeholder="请输入关键词" /></span>
                                    </div>
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
                        name:'title',
                        iconClass:'iconicon-zhuangxiu-biaoti'
                    },
                    {
                        txt:'富文本',
                        name:'richText',
                        iconClass:'iconicon-zhuangxiu-fuwenben'
                    },
                    {
                        txt:'单列多图',
                        name:'dldt',
                        iconClass:'iconicon-zhuangxiu-danlieduotu'
                    },
                    {
                        txt:'单行多图',
                        name:'dhdt',
                        iconClass:'iconicon-zhuangxiu-danhangduotu'
                    },
                    {
                        txt:'轮播',
                        name:'carousel',
                        iconClass:'iconicon-zhuangxiu-lunbo'
                    },
                    {
                        txt:'魔方',
                        name:'mofang',
                        iconClass:'iconicon-zhuangxiu-mofang'
                    },
                    {
                        txt:'视频',
                        name:'video',
                        iconClass:'iconicon-zhuangxiu-shipin'
                    },
                    {
                        txt:'辅助空白',
                        name:'fzkb',
                        iconClass:'iconicon-zhuangxiu-fuzhukongbai'
                    },
                    {
                        txt:'公告信息',
                        name:'notice',
                        iconClass:'iconicon-zhuangxiu-gonggaoxinxi'
                    },
                    {
                        txt:'热区',
                        name:'hotMap',
                        iconClass:'iconicon-zhuangxiu-requ'
                    },
                    {
                        txt:'商品搜索',
                        name:'shopSearch',
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
            this.pageFitInit();
            this.dragEleMove();
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
            appendEle(eleClassName,local){
                //local 为 prev 表示 插入到最前
                let ydEle = '<div class="ed_border"></div>';
                if(local == 'prev'){
                    if($('.m_bm_area').has('.ed_border').length > 0){
                    }else{
                        $('.'+eleClassName).before(ydEle);
                    }
                }else if(local == 'append'){
                    if($('.m_bm_area').has('.ed_border').length > 0){
                    }else{
                        $('.'+eleClassName).append(ydEle);
                    }
                }else{
                    if($('.m_bm_area').has('.ed_border').length > 0){
                    }else{
                        $('.'+eleClassName).after(ydEle);
                    }
                }
            },
            //释放边框占位元素
            deleteBorderEle(){
                $('.ed_border').remove();
            },

            //需要加载后就执行的方法
            pageFitInit(){
                this.componentsClick();
            },
            //拖拽元素拖动,从左侧拖到右侧
            dragEleMove(){
                let _this = this;
                $('.pf_compts').mousedown(function (){
                    let cpName = $(this).attr('name');  //获取是哪个组件名
                    //console.log(cpName);
                    let currTop = $(this).offset().top;
                    let currLeft = $(this).offset().left;
                    let currInnerHtml = $(this).html();
                    let moveEle = `<div class="drag_move_tmp">
                                        ${currInnerHtml}
                                    </div>`;
                    //添加拖拽模板元素
                    $('.page_fit').append(moveEle);
                    $('.drag_move_tmp').css({left:currLeft,top:currTop});

                    //获取目标元素offset.left值
                    let targetLeft = $('.m_bm_area').offset().left;
                    let targetTop = $('.m_bm_area').offset().top;
                    //获取目标元素宽度,高度
                    let targetWid = $('.m_bm_area').outerWidth();
                    let targetHei = $('.m_bm_area').outerHeight();

                    let isAppendFlag = false;       //防止在目标区域多次执行

                    //获取手机里现有的元素
                    let curEleArr = [];
                    $('.cus_components').each(function (i,e){
                        if($(e).hasClass('show')){
                            let obj = {
                                topVal:$(e).offset().top,
                                className:$(e).attr('class').split(' ')[1],
                                eleHei:$(e).outerHeight()
                            };
                            curEleArr.push(obj);
                        }
                    });

                    document.onmousemove = function (event){
                        var ev = event || window.event;
                        var disX = ev.clientX-35;
                        var disY = ev.clientY-35;
                        $('.drag_move_tmp').css({left:disX,top:disY});

                        //判断左侧进入目标元素, 左 上 右 下 判断
                        var leftFlag = (disX+35) >= targetLeft; //左侧判断
                        var topFlag = (disY+35) >= targetTop; //上侧判断
                        var rightFlag = (disX+35) <= (targetLeft+targetWid); //右侧判断
                        var bottomFlag = (disY+35) <= (targetTop+targetHei); //下侧判断
                        var rstClassName = '';
                        if(leftFlag && topFlag && rightFlag && bottomFlag){ //在有效区域内
                            if(curEleArr.length > 1){   //显示区域内 已有对应的组件（至少2个组件）
                                for(let i=0;i<curEleArr.length;i++){
                                    if(i != curEleArr.length-1 && i != 0){    //不是最后一个
                                        if((disY+35) > (curEleArr[i].topVal+curEleArr[i].eleHei/2+10) && (disY+35) < (curEleArr[i+1].topVal+curEleArr[i+1].eleHei/2)){
                                            _this.deleteBorderEle();
                                            rstClassName = curEleArr[i].className;
                                            _this.appendEle(rstClassName);
                                        }
                                    }else if(i == curEleArr.length-1){  //拖到最后一个元素时
                                        if((disY+35) > (curEleArr[i].topVal+curEleArr[i].eleHei/2+10)){
                                            //console.log('插入到最后···');
                                            _this.deleteBorderEle();
                                            rstClassName = curEleArr[i].className;
                                            _this.appendEle(rstClassName);
                                        }
                                    }else if(i == 0){   //第一个时候
                                        if((disY+35) < (curEleArr[i].topVal+curEleArr[i].eleHei/2+20)){
                                            _this.deleteBorderEle();
                                            rstClassName = curEleArr[i].className;
                                            _this.appendEle(rstClassName,'prev');
                                        }else{
                                            _this.deleteBorderEle();
                                            rstClassName = curEleArr[i].className;
                                            _this.appendEle(rstClassName);
                                        }
                                    }
                                }
                            }else if(curEleArr.length > 0 && curEleArr.length <= 1){
                                //只有1个对应的组件
                                console.log('1 组件···');
                                if((disY+35) < (curEleArr[0].topVal+curEleArr[0].eleHei/2+20)){
                                    _this.deleteBorderEle();
                                    rstClassName = curEleArr[0].className;
                                    _this.appendEle(rstClassName,'prev');
                                }else{
                                    _this.deleteBorderEle();
                                    rstClassName = curEleArr[0].className;
                                    _this.appendEle(rstClassName);
                                }
                            }else{
                                //没有对应组件
                                console.log('没有组件···');
                                _this.deleteBorderEle();
                                _this.appendEle('m_bm_area','append');
                            }

                        }

                    };
                    document.onmouseup = function(event){
                        $('.drag_move_tmp').remove();
                        _this.showComponents(cpName);
                        isAppendFlag = true;
                        _this.deleteBorderEle();
                        document.onmousemove = null;
                        document.onmouseup = null;
                    };
                    //$('.page_fit').append(moveEle);
                });
            },
            //拖拽结束，显示对应的组件
            showComponents(name){
                console.log(name);
            },
            //功能组件点击 出现虚线边框
            componentsClick(){
                $('.m_bm_area').on('click','.cus_components',function (){

                    $('.cus_components').removeClass('hasborder');
                    $(this).addClass('hasborder');
                })
            }
        }
    }
</script>

<style>
    @import "../../assets/css/shopFit.css";
</style>