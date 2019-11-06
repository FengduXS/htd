<template>
    <div class="page_fit">
        <div class="pf_top">
            <div class="pf_tleft">

            </div>
            <div class="pf_trig">
                <div class="btn btn_blue" @click="backManageCenter">返回管理中心</div>
                <div class="btn btn_gray" @click="showPageSet">页面设置</div>
                <div class="btn btn_gray">预览</div>
                <div class="btn btn_gray">保存</div>
                <div class="btn btn_blue">发布</div>
            </div>
        </div>
        <div class="pf_main">
            <div class="pf_m_cpt" ref="left">
                <!--通用组件-->
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

                <!--商品组件-->
                <div class="pf_mc_lis">
                    <div class="pf_ml_tit">
                        <span class="pf_ml_txt noselecttxt">商品</span>
                        <span class="pf_ml_icon iconfont iconicon-zhuangxiuzuocecaozuo"></span>
                    </div>
                    <ul class="pf_ml_block">
                        <li class="pf_compts"
                            v-for="(item,index) in goodsList" :key="index"
                            :class="{borrignone:index%3 == 2}"
                            :name="item.name"
                        >
                            <span class="pf_cicon iconfont" :class="item.iconClass"></span>
                            <span class="pf_ctxt">{{item.txt}}</span>
                        </li>
                    </ul>
                </div>

                <!--营销组件-->
                <div class="pf_mc_lis">
                    <div class="pf_ml_tit">
                        <span class="pf_ml_txt noselecttxt">营销</span>
                        <span class="pf_ml_icon iconfont iconicon-zhuangxiuzuocecaozuo"></span>
                    </div>
                    <ul class="pf_ml_block">
                        <li class="pf_compts"
                            v-for="(item,index) in marketList" :key="index"
                            :class="{borrignone:index%3 == 2}"
                            :name="item.name"
                        >
                            <span class="pf_cicon iconfont" :class="item.iconClass"></span>
                            <span class="pf_ctxt">{{item.txt}}</span>
                        </li>
                    </ul>
                </div>

                <!--导航组件-->
                <div class="pf_mc_lis">
                    <div class="pf_ml_tit">
                        <span class="pf_ml_txt noselecttxt">导航</span>
                        <span class="pf_ml_icon iconfont iconicon-zhuangxiuzuocecaozuo"></span>
                    </div>
                    <ul class="pf_ml_block">
                        <li class="pf_compts"
                            v-for="(item,index) in navigationList" :key="index"
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

                            <!--组件展示区域-->

                        </div>
                    </div>
                    <div class="m_b_bottom"></div>
                </div>
            </div>
            <div class="pf_m_attr">
                <!--页面设置-->
                <div class="pf_rblocklis pf_set_page show">
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
                            <input type="color" class="ipt_pageBg" value="#fff" />
                        </div>
                    </div>

                    <div class="prr_lis">
                        <div class="prr_lis_txt">页面背景图：</div>
                        <div class="prr_lis_rig">
                            <label for="filepagebg">
                                <div class="filebtn">
                                    <img :src="pageBgImg" width="100%" height="100%" v-show="pageBgImg!=''" />
                                    <span class="file_pagebg_reloadbtn" v-show="pageBgImg!=''">重新上传</span>
                                    <span class="filebtnadd iconfont iconicon-tianjia1" v-show="pageBgImg==''"></span>
                                    <span class="filebtntxt" v-show="pageBgImg==''">上传图片</span>
                                </div>
                                <input type="file" id="filepagebg" />
                            </label>
                            <div class="filewarn">建议尺寸：100px*100px，不超过500kb，支持JPG、JPEG、PNG格式图片</div>
                        </div>
                    </div>

                    <div class="prr_lis">
                        <div class="prr_lis_txt">图片排版：</div>
                        <div class="prr_lis_rig prrlr_txt">
                            <span class="prt_ipt"><input type="radio" name="r_pb" value="1" checked /></span>
                            <span class="prt_iptxt">无</span>
                            <span class="prt_ipt"><input type="radio" name="r_pb" value="2" /></span>
                            <span class="prt_iptxt">平铺</span>
                            <span class="prt_ipt"><input type="radio" name="r_pb" value="3" /></span>
                            <span class="prt_iptxt">横向平铺</span>
                            <span class="prt_ipt"><input type="radio" name="r_pb" value="4" /></span>
                            <span class="prt_iptxt">纵向平铺</span>
                        </div>
                    </div>

                    <div class="prr_lis">
                        <div class="prr_lis_txt">是否显示页头尾：</div>
                        <div class="prr_lis_rig prrlr_txt">
                            <span class="prt_ipt"><input type="radio" name="r_th" /></span>
                            <span class="prt_iptxt">是</span>
                            <span class="prt_ipt"><input type="radio" name="r_th" checked /></span>
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

                <!--标题-->
                <div class="pf_rblocklis pf_set_title hide">
                    <div class="prr_lis">
                        <div class="prr_lis_txt must">栏目名称：</div>
                        <div class="prr_lis_rig">
                            <input type="text" class="pr_ipset pf_st_lm" placeholder="" />
                        </div>
                    </div>

                    <div class="prr_lis">
                        <div class="prr_lis_txt must">标题名称：</div>
                        <div class="prr_lis_rig">
                            <input type="text" class="pr_ipset pf_st_title" placeholder="" />
                        </div>
                    </div>

                    <div class="prr_lis">
                        <div class="prr_lis_txt">标题样式：</div>
                        <div class="prr_lis_rig prrlr_txt">
                            <span class="prt_ipt"><input type="radio" name="r_bt" value="1" checked /></span>
                            <span class="prt_iptxt">模板一</span>
                            <span class="prt_ipt"><input type="radio" name="r_bt" value="2" /></span>
                            <span class="prt_iptxt">模板二</span>
                            <span class="prt_ipt"><input type="radio" name="r_bt" value="3" /></span>
                            <span class="prt_iptxt">模板三</span>
                            <span class="prt_ipt"><input type="radio" name="r_bt" value="4" /></span>
                            <span class="prt_iptxt">模板四</span>
                        </div>
                    </div>

                    <div class="prr_lis">
                        <div class="prr_lis_txt">显示方式：</div>
                        <div class="prr_lis_rig prrlr_txt">
                            <span class="prt_ipt"><input type="radio" name="r_xsfs" value="1" checked /></span>
                            <span class="prt_iptxt">居左</span>
                            <span class="prt_ipt"><input type="radio" name="r_xsfs" value="2" /></span>
                            <span class="prt_iptxt">居中</span>
                            <span class="prt_ipt"><input type="radio" name="r_xsfs" value="3" /></span>
                            <span class="prt_iptxt">居右</span>
                        </div>
                    </div>

                    <div class="prr_lis">
                        <div class="prr_lis_txt">字体颜色：</div>
                        <div class="prr_lis_rig floatleft marleft10">
                            <input type="color" class="input_title_fontcolor" />
                        </div>

                        <div class="prr_lis_txt">字体大小：</div>
                        <div class="prr_lis_rig floatleft marleft10">
                            <el-select v-model="fontSize" placeholder="" size="mini" class="fs_select" @change="fontSizeChange">
                                <el-option

                                        v-for="item in fontSizeArr"
                                        :key="item.value"
                                        :label="item.label" :value="item.value"></el-option>
                            </el-select>
                        </div>
                    </div>

                    <div class="prr_lis">
                        <div class="prr_lis_txt">背景颜色：</div>
                        <div class="prr_lis_rig floatleft marleft10">
                            <input type="color" class="input_title_bgcolor" />
                        </div>

                        <div class="prr_lis_txt">分割线颜色：</div>
                        <div class="prr_lis_rig floatleft marleft10">
                            <input type="color" />
                        </div>
                    </div>

                </div>

                <!--富文本-->
                <div class="pf_rblocklis pf_set_richtext hide">
                    <div class="prr_lis">
                        <div class="prr_lis_txt must">栏目名称：</div>
                        <div class="prr_lis_rig">
                            <input type="text" class="pr_ipset pf_st_lm" placeholder="" />
                        </div>
                    </div>

                    <div class="prr_lis">
                        <div class="prr_lis_txt must3">富文本：</div>
                        <div class="prr_lis_rig">
                            <div class="prr_richtext" id="editor" type="text/plain"></div>
                        </div>
                    </div>
                </div>

                <!--单列多图-->
                <div class="pf_rblocklis pf_set_dldt hide">
                    <div class="prr_lis">
                        <div class="prr_lis_txt must">栏目名称：</div>
                        <div class="prr_lis_rig">
                            <input type="text" class="pr_ipset" placeholder="" />
                        </div>
                    </div>
                    <div class="prr_lis">
                        <div class="prr_lis_txt must martop3">图片边距：</div>
                        <div class="prr_lis_rig floatleft marleft10">
                            <el-slider @change="sliderChange" v-model="imgMargin" :show-tooltip="false" :min="1" :max="10" class="es_slider"></el-slider>
                        </div>
                        <div class="es_slider_val">{{imgMargin}}px</div>
                    </div>
                    <div class="prr_lis">
                        <div class="prr_lis_txt martop3"></div>
                        <div class="prr_lis_rig">
                            <ul class="prr_imgup_ul">
                                <li class="prr_iu_lis">
                                    <div class="prr_il_img">
                                        <img src="../../assets/images/icon-default2.png" width="100%" height="100%" />
                                        <!--重新上传-->
                                        <input type="file" class="reload_file" id="dldt_file1" />
                                        <label class="prr_upload_btn" for="dldt_file1">重新上传</label>
                                    </div>
                                    <div class="prr_il_rig">
                                        <div class="prr_ilr_desc">备注：添加图宽度100%，高度自适应，建议图片大小750*300px</div>
                                        <div class="prr_ilr_ipt"><input type="text" class="img_ipt" placeholder="请输入图片名称" /></div>
                                        <div class="prr_ilr_link">链接到：<span>设置链接到的页面地址</span></div>
                                    </div>
                                    <!--关闭按钮-->
                                    <span class="prr_iu_lis_dele iconfont iconicon-tupianshanchu" title="删除"></span>
                                </li>
                            </ul>
                            <div class="prr_add_img">
                                <span>添加图片</span>
                                <span>+</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!--单行多图-->
                <div class="pf_rblocklis pf_set_dhdt hide">
                    <div class="prr_lis">
                        <div class="prr_lis_txt must">栏目名称：</div>
                        <div class="prr_lis_rig">
                            <input type="text" class="pr_ipset" placeholder="" />
                        </div>
                    </div>
                    <div class="prr_lis">
                        <div class="prr_lis_txt must martop3">图片边距：</div>
                        <div class="prr_lis_rig floatleft marleft10">
                            <input type="text" class="pr_ipset wid40" placeholder="" />
                        </div>
                        <div class="es_slider_val">%</div>
                    </div>
                    <div class="prr_lis">
                        <div class="prr_lis_txt martop3"></div>
                        <div class="prr_lis_rig">
                            <ul class="prr_imgup_ul">
                                <li class="prr_iu_lis">
                                    <div class="prr_il_img">
                                        <img src="../../assets/images/icon-default2.png" width="100%" height="100%" />
                                        <!--重新上传-->
                                        <input type="file" class="reload_file" ref="rff1" />
                                        <div class="prr_upload_btn" @click="reloadImg">重新上传</div>
                                    </div>
                                    <div class="prr_il_rig">
                                        <div class="prr_ilr_desc">备注：添加图宽度100%，高度自适应，建议图片大小750*300px</div>
                                        <div class="prr_ilr_ipt"><input type="text" class="img_ipt" placeholder="请输入图片名称" /></div>
                                        <div class="prr_ilr_link">链接到：<span>设置链接到的页面地址</span></div>
                                    </div>
                                </li>
                                <li class="prr_iu_lis">
                                    <div class="prr_il_img">
                                        <img src="../../assets/images/icon-default2.png" width="100%" height="100%" />
                                        <!--重新上传-->
                                        <input type="file" class="reload_file" ref="rff2" />
                                        <div class="prr_upload_btn" @click="reloadImg">重新上传</div>
                                    </div>
                                    <div class="prr_il_rig">
                                        <div class="prr_ilr_desc">备注：添加图宽度100%，高度自适应，建议图片大小750*300px</div>
                                        <div class="prr_ilr_ipt"><input type="text" class="img_ipt" placeholder="请输入图片名称" /></div>
                                        <div class="prr_ilr_link">链接到：<span>设置链接到的页面地址</span></div>
                                    </div>
                                </li>
                            </ul>
                            <div class="prr_add_img">
                                <span>添加图片</span>
                                <span>+</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!--轮播-->
                <div class="pf_rblocklis pf_set_lunbo hide">
                    <div class="prr_lis">
                        <div class="prr_lis_txt must">栏目名称：</div>
                        <div class="prr_lis_rig">
                            <input type="text" class="pr_ipset" placeholder="" />
                        </div>
                    </div>
                    <div class="prr_lis">
                        <div class="prr_lis_txt martop3"></div>
                        <div class="prr_lis_rig">
                            <ul class="prr_imgup_ul">
                                <li class="prr_iu_lis">
                                    <div class="prr_il_img">
                                        <img src="../../assets/images/icon-default2.png" width="100%" height="100%" />
                                        <!--重新上传-->
                                        <input type="file" class="reload_file" ref="rff1" />
                                        <div class="prr_upload_btn" @click="reloadImg">重新上传</div>
                                    </div>
                                    <div class="prr_il_rig">
                                        <div class="prr_ilr_desc">备注：添加图宽度100%，高度自适应，建议图片大小750*300px</div>
                                        <div class="prr_ilr_ipt"><input type="text" class="img_ipt" placeholder="请输入图片名称" /></div>
                                        <div class="prr_ilr_link">链接到：<span>设置链接到的页面地址</span></div>
                                    </div>
                                </li>
                                <li class="prr_iu_lis">
                                    <div class="prr_il_img">
                                        <img src="../../assets/images/icon-default2.png" width="100%" height="100%" />
                                        <!--重新上传-->
                                        <input type="file" class="reload_file" ref="rff2" />
                                        <div class="prr_upload_btn" @click="reloadImg">重新上传</div>
                                    </div>
                                    <div class="prr_il_rig">
                                        <div class="prr_ilr_desc">备注：添加图宽度100%，高度自适应，建议图片大小750*300px</div>
                                        <div class="prr_ilr_ipt"><input type="text" class="img_ipt" placeholder="请输入图片名称" /></div>
                                        <div class="prr_ilr_link">链接到：<span>设置链接到的页面地址</span></div>
                                    </div>
                                </li>
                            </ul>
                            <div class="prr_add_img">
                                <span>添加图片</span>
                                <span>+</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!--魔方-->
                <div class="pf_rblocklis pf_set_mf hide">
                    <div class="prr_lis">
                        <div class="prr_lis_txt must">栏目名称：</div>
                        <div class="prr_lis_rig">
                            <input type="text" class="pr_ipset" placeholder="" />
                        </div>
                    </div>
                    <div class="prr_lis">
                        <div class="prr_lis_txt must">模板样式：</div>
                        <div class="prr_lis_rig wid560">
                            <div class="prr_mf_tmp pmt1 ">
                                <span class="pmt1_s1"></span>
                                <span class="pmt1_s2"></span>
                            </div>
                            <div class="prr_mf_tmp pmt2">
                                <span class="pmt2_s1"></span>
                                <span class="pmt2_s2"></span>
                                <span class="pmt2_s3"></span>
                            </div>
                            <div class="prr_mf_tmp pmt3 active">
                                <span class="pmt3_s1"></span>
                                <span class="pmt3_s2"></span>
                                <span class="pmt3_s3"></span>
                            </div>
                            <div class="prr_mf_tmp pmt4">
                                <span class="pmt4_s1"></span>
                                <span class="pmt4_s2"></span>
                                <span class="pmt4_s3"></span>
                            </div>
                            <div class="prr_mf_tmp pmt5">
                                <span class="pmt5_s1"></span>
                                <span class="pmt5_s2"></span>
                                <span class="pmt5_s3"></span>
                            </div>
                            <div class="prr_mf_tmp pmt6">
                                <span class="pmt6_s1"></span>
                                <span class="pmt6_s2"></span>
                                <span class="pmt6_s3"></span>
                                <span class="pmt6_s4"></span>
                            </div>
                            <div class="prr_mf_tmp pmt7">
                                <span class="pmt7_s1"></span>
                                <span class="pmt7_s2"></span>
                                <span class="pmt7_s3"></span>
                                <span class="pmt7_s4"></span>
                            </div>
                            <div class="prr_mf_tmp pmt8">
                                <span class="pmt8_s1"></span>
                                <span class="pmt8_s2"></span>
                                <span class="pmt8_s3"></span>
                                <span class="pmt8_s4"></span>
                            </div>
                            <div class="prr_mf_tmp pmt9">
                                <span class="pmt9_s1"></span>
                                <span class="pmt9_s2"></span>
                                <span class="pmt9_s3"></span>
                                <span class="pmt9_s4"></span>
                            </div>
                            <div class="prr_mf_tmp pmt10">
                                <span class="pmt10_s1"></span>
                                <span class="pmt10_s2"></span>
                                <span class="pmt10_s3"></span>
                                <span class="pmt10_s4"></span>
                                <span class="pmt10_s5"></span>
                            </div>
                            <div class="prr_mf_tmp pmt11">
                                <span class="pmt11_s1"></span>
                                <span class="pmt11_s2"></span>
                                <span class="pmt11_s3"></span>
                                <span class="pmt11_s4"></span>
                                <span class="pmt11_s5"></span>
                                <span class="pmt11_s6"></span>
                                <span class="pmt11_s7"></span>
                                <span class="pmt11_s8"></span>
                                <span class="pmt11_s9"></span>
                                <span class="pmt11_s10"></span>
                            </div>
                        </div>
                    </div>
                    <div class="prr_lis">
                        <div class="prr_lis_txt martop3"></div>
                        <div class="prr_lis_rig">
                            <ul class="prr_imgup_ul">
                                <li class="prr_iu_lis">
                                    <div class="prr_il_img">
                                        <img src="../../assets/images/icon-default2.png" width="100%" height="100%" />
                                        <!--重新上传-->
                                        <input type="file" class="reload_file" ref="rff1" />
                                        <div class="prr_upload_btn" @click="reloadImg">重新上传</div>
                                    </div>
                                    <div class="prr_il_rig">
                                        <div class="prr_ilr_desc">备注：图片建议尺寸375*220px</div>
                                        <div class="prr_mfmar"></div>
                                        <div class="prr_ilr_link">链接到：<span>设置链接到的页面地址</span></div>
                                    </div>
                                </li>
                                <li class="prr_iu_lis">
                                    <div class="prr_il_img">
                                        <img src="../../assets/images/icon-default2.png" width="100%" height="100%" />
                                        <!--重新上传-->
                                        <input type="file" class="reload_file" ref="rff2" />
                                        <div class="prr_upload_btn" @click="reloadImg">重新上传</div>
                                    </div>
                                    <div class="prr_il_rig">
                                        <div class="prr_ilr_desc">备注：图片建议尺寸375*220px</div>
                                        <div class="prr_mfmar"></div>
                                        <div class="prr_ilr_link">链接到：<span>设置链接到的页面地址</span></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!--视频-->
                <div class="pf_rblocklis pf_set_video hide">
                    <div class="prr_lis">
                        <div class="prr_lis_txt must">栏目名称：</div>
                        <div class="prr_lis_rig">
                            <input type="text" class="pr_ipset" placeholder="" />
                        </div>
                    </div>
                    <div class="prr_lis">
                        <div class="prr_lis_txt must">视频地址：</div>
                        <div class="prr_lis_rig">
                            <input type="text" class="pr_ipset" placeholder="" />
                            <div class="prr_video_warn">请填写完整的视频链接地址，仅支持播放MP4格式</div>
                        </div>
                    </div>

                    <div class="prr_lis">
                        <div class="prr_lis_txt">视频封面：</div>
                        <div class="prr_lis_rig">
                            <div class="prr_v_coverimg">
                                <div class="prr_v_ciinner">
                                    <span class="fontsize28">+</span>
                                    <span>上传图片</span>
                                </div>

                            </div>
                            <div class="coverimg_warn">备注：视频封面宽度为100%,高度自适应，建议图片大小为750*420px</div>
                        </div>
                    </div>

                </div>

                <!--辅助空白-->
                <div class="pf_rblocklis pf_set_fzkb hide">
                    <div class="prr_lis">
                        <div class="prr_lis_txt must">栏目名称：</div>
                        <div class="prr_lis_rig">
                            <input type="text" class="pr_ipset" placeholder="" />
                        </div>
                    </div>
                    <div class="prr_lis">
                        <div class="prr_lis_txt must martop3">空白高度：</div>
                        <div class="prr_lis_rig floatleft marleft10">
                            <el-slider v-model="imgMargin" :show-tooltip="false" class="es_slider"></el-slider>
                        </div>
                        <div class="es_slider_val">1px</div>
                    </div>
                    <div class="prr_lis">
                        <div class="prr_lis_txt">空白底色：</div>
                        <div class="prr_lis_rig">
                            <input type="color" value="#eceff4" />
                        </div>
                    </div>
                </div>

                <!--公告信息-->
                <div class="pf_rblocklis pf_set_notice hide">
                    <div class="prr_lis">
                        <div class="prr_lis_txt must">栏目名称：</div>
                        <div class="prr_lis_rig">
                            <input type="text" class="pr_ipset" placeholder="" />
                        </div>
                    </div>
                    <div class="prr_lis">
                        <div class="prr_lis_txt ">图标：</div>
                        <div class="prr_lis_rig">
                            <div class="prr_gg_icon"><img src="../../assets/images/icon-notice.png" width="100%" height="100%" /></div>
                            <div class="btn btn_blue marleft10">替换图标</div>
                            <div class="btn btn_gray marleft10">恢复默认</div>
                            <div class="prr_gg_iconwarn">图标建议大小为48*48px，格式限制未gif、jpg、png</div>
                        </div>
                    </div>
                    <div class="prr_lis">
                        <div class="prr_lis_txt must2 ">内容：</div>
                        <div class="prr_lis_rig">
                            <div class="prr_ggcontent">
                                <textarea class="prg_area1"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="prr_lis">
                        <div class="prr_lis_txt">字体颜色：</div>
                        <div class="prr_lis_rig martop3">
                            <input type="color" value="#000000" />
                        </div>
                    </div>
                    <div class="prr_lis">
                        <div class="prr_lis_txt">背景颜色：</div>
                        <div class="prr_lis_rig martop3">
                            <input type="color" value="#eceff4" />
                        </div>
                    </div>
                    <div class="prr_lis">
                        <div class="prr_lis_txt">链接到：</div>
                        <div class="prr_lis_rig">
                            <div class="prr_gglinktxt">设置链接到的页面地址</div>
                        </div>
                    </div>
                </div>

                <!--热区-->
                <div class="pf_rblocklis pf_set_hotmap hide">
                    <div class="prr_lis">
                        <div class="prr_lis_txt must">栏目名称：</div>
                        <div class="prr_lis_rig">
                            <input type="text" class="pr_ipset" placeholder="" />
                        </div>
                    </div>
                    <div class="prr_lis">
                        <div class="prr_lis_txt ">图片边距：</div>
                        <div class="prr_lis_rig">
                            <div class="btn btn_gray">上传图片</div>
                            <div class="prr_hm_btntxt">建议图片大小：750*300px</div>
                            <div class="jg_block"></div>
                            <div class="prr_hminner">
                                <div class="prr_hminnerimg">
                                    <img src="../../assets/images/hotmap-default.png" width="100%" height="100%" />
                                </div>
                            </div>
                            <div class="prr_hmbtns">
                                <div class="btn btn_blue marrig10">添加</div>
                                <div class="btn btn_gray">重置</div>
                            </div>
                            <ul class="prr_hmul">
                                <li class="prr_hmli">
                                    <span class="prr_hmli_key">热区1：</span>
                                    <span class="prr_hmli_val">设置链接到的页面地址</span>
                                    <span class="prr_hmli_dele iconfont iconicon-tupianshanchu" title="删除"></span>
                                </li>
                                <li class="prr_hmli">
                                    <span class="prr_hmli_key">热区1：</span>
                                    <span class="prr_hmli_val">设置链接到的页面地址</span>
                                    <span class="prr_hmli_dele iconfont iconicon-tupianshanchu" title="删除"></span>
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>

                <!--商品搜索-->
                <div class="pf_rblocklis pf_set_search hide">
                    <div class="prr_lis">
                        <div class="prr_lis_txt must">栏目名称：</div>
                        <div class="prr_lis_rig">
                            <input type="text" class="pr_ipset" placeholder="" />
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
                ],      //通用组件列表
                goodsList:[             //商品组件列表
                    {
                        txt:'单列大图',
                        name:'dlbigt',
                        iconClass:'iconicon-zhuangxiu-danliedatu'
                    },
                    {
                        txt:'单列小图',
                        name:'dlsmallt',
                        iconClass:'iconicon-zhuangxiu-danliexiaotu'
                    },
                    {
                        txt:'一行两列',
                        name:'yhll',
                        iconClass:'iconicon-zhuangxiu-yihanglianglie'
                    },
                    {
                        txt:'一行三列',
                        name:'yhsl',
                        iconClass:'iconicon-zhuangxiu-yihangsanlie'
                    },
                    {
                        txt:'单行滚动',
                        name:'dhgd',
                        iconClass:'iconicon-zhuangxiu-danhanggundong'
                    },
                    {
                        txt:'精品化推荐',
                        name:'jphtj',
                        iconClass:'iconicon-zhuangxiu-jingpinhuatuijian'
                    }
                ],
                marketList:[            //营销组件列表
                    {
                        txt:'优惠券',
                        name:'yhq',
                        iconClass:'iconicon-zhuangxiu-youhuiquan'
                    },
                    {
                        txt:'排行榜',
                        name:'phb',
                        iconClass:'iconicon-zhuangxiu-paihangbang'
                    },
                    {
                        txt:'倒计时',
                        name:'djs',
                        iconClass:'iconicon-zhuangxiu-daojishi'
                    },
                    {
                        txt:'团购',
                        name:'tg',
                        iconClass:'iconicon-zhuangxiu-pintuan'
                    },
                    {
                        txt:'砍价',
                        name:'kj',
                        iconClass:'iconicon-zhuangxiu-kanjia'
                    }
                ],
                navigationList:[
                    {
                        txt:'图片导航',
                        name:'tpdh',
                        iconClass:'iconicon-zhuangxiu-tupiandaohang'
                    },
                    {
                        txt:'页签',
                        name:'yq',
                        iconClass:'iconicon-zhuangxiu-yeqian'
                    }
                ],
                pageSetting:true,   //页面配置
                titleNum:0,         //标题组件功能计数
                richTextNum:0,      //富文本组件功能计数
                dldtNum:0,          //单列多图组件功能计数
                dhdtNum:0,          //单行多图组件功能计数
                carouselNum:0,      //轮播组件功能计数
                mofangNum:0,        //魔方组件功能计数
                videoNum:0,         //视频组件功能计数
                fzkbNum:0,          //辅助空白组件功能计数
                noticeNum:0,         //公共信息组件功能计数
                hotMapNum:0,         //热区组件功能计数
                shopSearchNum:0,      //商品搜索组件功能计数
                fontSize:16,        //字体大小
                imgMargin:0,        //图片边距
                ue:null,            //富文本配置
                mobileInnerCurrClass:'',  //手机里面当前组件点击的class
                fontSizeArr:[       //字体选择
                    {value:12,label:12},
                    {value:14,label:14},
                    {value:16,label:16},
                    {value:18,label:18},
                    {value:20,label:20},
                    {value:22,label:22},
                    {value:24,label:24},
                    {value:26,label:26},
                    {value:28,label:28},
                    {value:30,label:30},
                ],
                pageBgImg:'',   //页面背景图
            }
        },
        computed: {},
        created() {

        },
        mounted() {
            this.loadDo();
            this.setScroll();
            this.pageFitInit();
            this.dragEleMove();
            this.componentsDrag();
            this.comptsFoldOrDelete();
            this.isShowComptsWarn();
            this.showRich();
            this.editor2MobileShow();
        },
        methods: {
            //加载要执行的操作
            loadDo(){
                //设置手机自适应高度
                let currHei = window.outerHeight;
                //console.log(currHei);
                $('.m_bm_area').css({minHeight:currHei-400});
            },
            //富文本组件
            showRich(){
                let _this = this;
                _this.ue = UE.getEditor('editor');
            },
            //判断有没有组件提醒是否显示
            isShowComptsWarn(){
                let lg = $('.m_bm_area .cus_components').length;
                if(lg > 0){
                    this.noModuleShow = false;
                }else{
                    this.noModuleShow = true;
                }
            },
            //显示页面配置按钮点击
            showPageSet(){
                $('.pf_rblocklis').removeClass('show').addClass('hide');
                $('.pf_set_page').removeClass('hide').addClass('show');
                $('.cus_components').removeClass('active');
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
                let insertLocalEle = '';   //插入位置
                let insertLocalAfterOrBefore = 'after';   //在元素 之前 还是 之后 after,before
                let isEnterFlag = false;    //是否在指定区域
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
                                className:$(e).attr('class').split(' ')[3],
                                eleHei:$(e).outerHeight()
                            };
                            curEleArr.push(obj);
                        }
                    });
                    document.onmousemove = function (event){
                        let ev = event || window.event;
                        let disX = ev.clientX-35;
                        let disY = ev.clientY-35;
                        $('.drag_move_tmp').css({left:disX,top:disY});

                        //判断左侧进入目标元素, 左 上 右 下 判断
                        var leftFlag = (disX+35) >= targetLeft; //左侧判断
                        var topFlag = (disY+35) >= targetTop; //上侧判断
                        var rightFlag = (disX+35) <= (targetLeft+targetWid); //右侧判断
                        var bottomFlag = (disY+35) <= (targetTop+targetHei); //下侧判断
                        var rstClassName = '';
                        if(leftFlag && topFlag && rightFlag && bottomFlag){ //在有效区域内
                            //隐藏添加模块文字提示
                            _this.noModuleShow = false;
                            isEnterFlag = true;
                            if(curEleArr.length > 1){   //显示区域内 已有对应的组件（至少2个组件）
                                for(let i=0;i<curEleArr.length;i++){
                                    if(i != curEleArr.length-1 && i != 0){    //不是第一个，不是最后一个
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
                                            insertLocalAfterOrBefore = 'before';
                                        }else{
                                            insertLocalAfterOrBefore = 'after';
                                            _this.deleteBorderEle();
                                            rstClassName = curEleArr[i].className;
                                            _this.appendEle(rstClassName);
                                        }
                                    }

                                    insertLocalEle = rstClassName;
                                }
                            }else if(curEleArr.length > 0 && curEleArr.length <= 1){
                                //只有1个对应的组件
                                //console.log('1 组件···');
                                if((disY+35) < (curEleArr[0].topVal+curEleArr[0].eleHei/2+20)){
                                    _this.deleteBorderEle();
                                    rstClassName = curEleArr[0].className;
                                    _this.appendEle(rstClassName,'prev');
                                    insertLocalAfterOrBefore = 'before';
                                }else{
                                    _this.deleteBorderEle();
                                    rstClassName = curEleArr[0].className;
                                    _this.appendEle(rstClassName);
                                    insertLocalAfterOrBefore = 'after';
                                }
                                insertLocalEle = rstClassName;
                            }else{
                                //没有对应组件
                                //console.log('没有组件···');
                                _this.deleteBorderEle();
                                _this.appendEle('m_bm_area','append');
                            }

                        }else{
                            isEnterFlag = false;
                            _this.deleteBorderEle();
                        }

                    };
                    document.onmouseup = function(event){
                        console.log('isEnterFlag:'+isEnterFlag);
                        $('.drag_move_tmp').remove();
                        _this.deleteBorderEle();
                        if(isEnterFlag){    //判断是否在指定区域里
                            if($('.m_bm_area .cus_components').length == 0){    //没有组件
                                insertLocalEle = 'm_bm_area';
                            }
                            _this.showComponents(cpName,insertLocalEle,insertLocalAfterOrBefore);
                            isEnterFlag = false;    //恢复默认
                            isAppendFlag = true;
                        }
                        document.onmousemove = null;
                        document.onmouseup = null;
                    };
                });

            },
            //拖拽结束，显示对应的组件
            showComponents(name,ele,afterOrbefore){
                // titleEleNum
                if(name == 'title'){
                    this.titleNum++;
                }
                if(name == 'richText'){
                    this.richTextNum++;
                }
                if(name == 'dldt'){
                    this.dldtNum++;
                }
                if(name == 'dhdt'){
                    this.dhdtNum++;
                }
                if(name == 'carousel'){
                    this.carouselNum++;
                }
                if(name == 'mofang'){
                    this.mofangNum++;
                }
                if(name == 'video'){
                    this.videoNum++;
                }
                if(name == 'fzkb'){
                    this.fzkbNum++;
                }
                if(name == 'notice'){
                    this.noticeNum++;
                }
                if(name == 'hotMap'){
                    this.hotMapNum++;
                }
                if(name == 'shopSearch'){
                    this.shopSearchNum++;
                }

                //标题

                let cpTitle = `<div class="cus_components cp_title show cp_title_num${this.titleNum}">
                                    <div class="cus_cpt_head">
                                        <span class="cur_ch_tit">标题-${this.titleNum}（栏目名称）</span>
                                        <span class="cur_btn_gray btn_dele">删除</span>
                                        <span class="cur_btn_gray btn_fold">折叠</span>
                                     </div>
                                     <div class="cus_cpt_main">
                                        <div class="cus_cpt_txt">
                                            <span class="cus_cct">标题名称</span>
                                        </div>
                                    </div>
                                </div>`;

                //富文本
                let cpRichtext = `<div class="cus_components cp_richtext show cp_richtext_num${this.richTextNum}">
                                    <div class="cus_cpt_head">
                                        <span class="cur_ch_tit">富文本-${this.richTextNum}</span>
                                        <span class="cur_btn_gray btn_dele">删除</span>
                                        <span class="cur_btn_gray btn_fold">折叠</span>
                                    </div>
                                    <div class="cus_cpt_main">
                                        <div class="cus_cpt_txt fontnormal">这是富文本</div>
                                    </div>
                                </div>`;

                //单列多图
                let cpDldt = `<div class="cus_components cp_dldt show cp_dldt_num${this.dldtNum}">
                                <div class="cus_cpt_head">
                                    <span class="cur_ch_tit">单列多图-${this.dldtNum}</span>
                                    <span class="cur_btn_gray btn_dele">删除</span>
                                    <span class="cur_btn_gray btn_fold">折叠</span>
                                </div>
                                <div class="cus_cpt_main">
                                    <div class="cus_cpt_dldt">
                                        <span class="cus_cdimg iconfont iconicon-tupian"></span>
                                    </div>
                                </div>
                            </div>`;

                //单行多图
                let cpDhdt = `<div class="cus_components cp_dhdt show cp_dhdt_num${this.dhdtNum}">
                                <div class="cus_cpt_head">
                                    <span class="cur_ch_tit">单行多图-${this.dhdtNum}</span>
                                    <span class="cur_btn_gray btn_dele">删除</span>
                                    <span class="cur_btn_gray btn_fold">折叠</span>
                                </div>
                                <div class="cus_cpt_main">
                                    <ul class="single_multipic list4">
                                        <li class="sgm_lis"><img  /> </li>
                                        <li class="sgm_lis"><img  /> </li>
                                        <li class="sgm_lis"><img  /> </li>
                                        <li class="sgm_lis"><img  /> </li>
                                    </ul>
                                </div>
                            </div>`;

                //轮播
                let cpCarousel = `<div class="cus_components cp_carousel show cp_carousel_num${this.dhdtNum}">
                                    <div class="cus_cpt_head">
                                        <span class="cur_ch_tit">轮播-${this.dhdtNum}</span>
                                        <span class="cur_btn_gray btn_dele">删除</span>
                                        <span class="cur_btn_gray btn_fold">折叠</span>
                                    </div>
                                    <div class="cus_cpt_main">
                                        <div class="carousel_out">
                                            轮播组件
                                        </div>

                                    </div>
                                </div>`;

                //魔方
                let cpMf = `<div class="cus_components cp_mf show cp_mf${this.mofangNum}">
                                <div class="cus_cpt_head">
                                    <span class="cur_ch_tit">魔方-${this.mofangNum}</span>
                                    <span class="cur_btn_gray btn_dele">删除</span>
                                    <span class="cur_btn_gray btn_fold">折叠</span>
                                </div>
                                <div class="cus_cpt_main">

                                    <div class="mf_lis mf_tmp1">
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                //魔方1
                let cpMf1 = `<div class="mf_lis mf_tmp1">
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                    </div>`;
                //魔方2
                let cpMf2 = `<div class="mf_lis mf_tmp2">
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                    </div>`;
                //魔方3
                let cpMf3 = `<div class="mf_lis mf_tmp3">
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                    </div>`;
                //魔方4
                let cpMf4 = `<div class="mf_lis mf_tmp4" >
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                        <div class="mf_lblock">
                                            <span class="mf_defpic iconfont iconicon-tupian"></span>
                                        </div>
                                    </div>`;
                //魔方5
                let cpMf5 = `<div class="mf_lis mf_tmp5">
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
                                    </div>`;
                //魔方6
                let cpMf6 = `<div class="mf_lis mf_tmp6">
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
                                    </div>`;
                //魔方7
                let cpMf7 = `<div class="mf_lis mf_tmp7">
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
                                    </div>`;
                //魔方8
                let cpMf8 = `<div class="mf_lis mf_tmp8">
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
                                    </div>`;
                //魔方9
                let cpMf9 = `<div class="mf_lis mf_tmp9" >
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
                                    </div>`;
                //魔方10
                let cpMf10 = `<div class="mf_lis mf_tmp10" >
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
                                    </div>`;
                //魔方11
                let cpMf11 = `<div class="mf_lis mf_tmp11">
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
                                    </div>`;

                //视频
                let cpVideo = `<div class="cus_components cp_video show cp_video_num${this.videoNum}">
                                <div class="cus_cpt_head">
                                    <span class="cur_ch_tit">视频-${this.videoNum}</span>
                                    <span class="cur_btn_gray btn_dele">删除</span>
                                    <span class="cur_btn_gray btn_fold">折叠</span>
                                </div>
                                <div class="cus_cpt_main">
                                    <div class="cus_video">
                                        <span class="iconvideo iconfont iconicon-zhuangxiu-shipin"></span>
                                    </div>
                                </div>
                            </div>`;

                //辅助空白
                let cpFzkb = `<div class="cus_components cp_fzkb show cp_fzkb_num${this.fzkbNum}">
                                <div class="cus_cpt_head">
                                    <span class="cur_ch_tit">辅助空白-${this.fzkbNum}</span>
                                    <span class="cur_btn_gray btn_dele">删除</span>
                                    <span class="cur_btn_gray btn_fold">折叠</span>
                                </div>
                                <div class="cus_cpt_main">
                                    <div class="cus_fz_block">

                                    </div>
                                </div>
                            </div>`;

                //公告信息
                let cpNotice = `<div class="cus_components cp_notice show cp_notice_num${this.noticeNum}">
                                <div class="cus_cpt_head">
                                    <span class="cur_ch_tit">公告信息-${this.noticeNum}</span>
                                    <span class="cur_btn_gray btn_dele">删除</span>
                                    <span class="cur_btn_gray btn_fold">折叠</span>
                                </div>
                                <div class="cus_cpt_main">
                                    <div class="cus_notice">
                                        <div class="cus_nt_icon"><img src="../../assets/images/icon-notice.png" width="100%" height="100%" /></div>
                                        <div class="cus_nt_txt">这里是公告信息</div>
                                    </div>
                                </div>
                            </div>`;

                //热区图
                let cpHotmap = `<div class="cus_components cp_hotmap show cp_hotmap_num${this.hotMapNum}">
                                <div class="cus_cpt_head">
                                    <span class="cur_ch_tit">热区图-${this.hotMapNum}</span>
                                    <span class="cur_btn_gray btn_dele">删除</span>
                                    <span class="cur_btn_gray btn_fold">折叠</span>
                                </div>
                                <div class="cus_cpt_main">
                                    <div class="cus_rqu_map">
                                        <span class="icon_rq iconfont iconicon-tupian"></span>
                                    </div>
                                </div>
                            </div>`;

                //商品搜索
                let cpSearch = `<div class="cus_components cp_search show cp_search_num${this.shopSearchNum}">
                                <div class="cus_cpt_head">
                                    <span class="cur_ch_tit">搜索-${this.shopSearchNum}</span>
                                    <span class="cur_btn_gray btn_dele">删除</span>
                                    <span class="cur_btn_gray btn_fold">折叠</span>
                                </div>
                                <div class="cus_cpt_main">
                                    <div class="cus_ss">
                                        <span class="cus_ssicon iconfont iconicon-zhuangxiu-sousu"></span>
                                        <span class="cus_ssipt"><input type="text" placeholder="请输入关键词" /></span>
                                    </div>
                                </div>
                            </div>`;

                let cpArr = [cpTitle,cpRichtext,cpDldt,cpDhdt,cpCarousel,cpMf,cpVideo,cpFzkb,cpNotice,cpHotmap,cpSearch];   //组件数组
                let cpNameArr = ['title','richText','dldt','dhdt','carousel','mofang','video','fzkb','notice','hotMap','shopSearch'];

                //console.log(name);
                //console.log(ele);
                //console.log(afterOrbefore);

                for(let i=0;i<cpNameArr.length;i++){
                    if(name === cpNameArr[i]){
                        if(ele == 'm_bm_area'){ //没有组件
                            $('.'+ele).append(cpArr[i]);
                        }else{
                            if(afterOrbefore == 'before'){
                                $('.'+ele).before(cpArr[i]);
                            }else{
                                $('.'+ele).after(cpArr[i]);
                            }
                        }
                    }
                }
            },
            //功能组件点击 出现虚线边框
            componentsClick(){
                let _this = this;
                let dragArr = ['cp_title','cp_richtext','cp_dldt','cp_dhdt','cp_carousel','cp_mf','cp_video','cp_fzkb','cp_notice','cp_hotmap','cp_search'];
                let setArr = ['pf_set_title','pf_set_richtext','pf_set_dldt','pf_set_dhdt','pf_set_lunbo','pf_set_mf','pf_set_video','pf_set_fzkb','pf_set_notice','pf_set_hotmap','pf_set_search'];
                $('.m_bm_area').on('click','.cus_components',function (e){
                    $('.cus_components').removeClass('active');
                    $(this).addClass('active');

                    //折叠，删除按钮显示
                    $('.cus_components').find('.btn_dele').removeClass('show');
                    $('.cus_components').find('.btn_fold').removeClass('show');
                    $(this).find('.btn_dele').addClass('show');
                    $(this).find('.btn_fold').addClass('show');

                    //判断哪个编辑块显示
                    let currClass = $(this).attr('class').split(' ')[1];
                    _this.mobileInnerCurrClass = $(this).attr('class').split(' ')[3];
                    //console.log(_this.mobileInnerCurrClass);
                    $('.pf_rblocklis').removeClass('show');
                    let setIndex = null;
                    for(let i=0;i<dragArr.length;i++){
                        if(currClass == dragArr[i]){
                            setIndex = i;
                        }
                    }
                    $('.'+setArr[setIndex]).removeClass('hide').addClass('show');

                    //右侧显示对应数据
                    $('.'+setArr[setIndex]).find('.pf_st_lm').val($(this).find('.cur_ch_tit').text());
                    $('.'+setArr[setIndex]).find('.pf_st_title').val($(this).find('.cus_cpt_txt .cus_cct').text());

                    //富文本
                    if($(this).hasClass('cp_richtext')){
                        let eleRich = $(this).find('.cus_cpt_txt').html();
                        console.log(eleRich);
                        _this.ue.setContent(eleRich);
                    }
                    //单列多图
                    if($(this).hasClass('cp_dldt')){
                        $('.'+setArr[setIndex]).find('.pr_ipset').val($(this).find('.cur_ch_tit').text());
                    }
                });
            },
            //功能组件拖拽
            componentsDrag(){
                let _this = this;
                let comptTmp = '<div class="cpt_tmp"></div>';
                $('.m_bm_area').on('mousedown','.cus_components',function (ev){
                    let evs = event || window.event;
                    let cptCurLeft = $(this).offset().left;
                    let cptCurTop = $(this).offset().top;
                    let cptCurHei = $(this).outerHeight();   //当前拖拽组件的高度

                    let disLeft = evs.clientX - cptCurLeft;
                    let disTop = evs.clientY - cptCurTop;
                    //console.log(disLeft,disTop);

                    $('.page_fit').append(comptTmp);
                    $('.cpt_tmp').html($(this).html()).css({left:cptCurLeft,top:cptCurTop,zIndex:-999});


                    //获取手机里现有的元素
                    let curEleArr = [];
                    $('.m_bm_area .cus_components').each(function (i,e){
                        let obj = {
                            topVal:$(e).offset().top,
                            className:$(e).attr('class').split(' ')[3],
                            eleHei:$(e).outerHeight(),
                            allClass:$(e).attr('class')
                        };
                        curEleArr.push(obj);
                    });
                    let dragEle = $(this).html();   //当前被拖拽的组件
                    let dragEleClass = $(this).attr('class');   //当前被拖拽的组件
                    //当前所以html
                    let currHtml = `<div class="${dragEleClass}">
                                        ${dragEle}
                                    </div>`;
                    //console.log(currHtml);
                    let localClass = '';    //要插入的class位置
                    let prevOrAfter = '';   //在元素前后
                    let isDragFlag = false; //是否满足条件拖拽

                    let deleEle = $(this);
                    document.onmousemove = function (event){
                        let ev = event || window.event;
                        let disX = ev.clientX;
                        let disY = ev.clientY;

                        let cptTmphalfHei = cptCurHei/2;                //被拖拽组件高度的一半
                        let cptTmpTop = $('.cpt_tmp').offset().top;     //被拖拽组件的实时top值
                        let compareVal = cptTmpTop+cptTmphalfHei;
                        $('.cpt_tmp').css({left:disX-disLeft,top:disY-disTop,zIndex:999});

                        if(curEleArr.length > 1){ //至少2个组件
                            for(let i=0;i<curEleArr.length;i++){
                                if(i != curEleArr.length-1 && i != 0){
                                    if(compareVal > (curEleArr[i].topVal + curEleArr[i].eleHei/2) && compareVal < (curEleArr[i+1].topVal + curEleArr[i+1].eleHei/2)){
                                        //console.log(i);
                                        _this.deleteBorderEle();
                                        _this.appendEle(curEleArr[i].className);

                                        isDragFlag = true;
                                        localClass = curEleArr[i].className;
                                        prevOrAfter = 'after';
                                    }
                                }else if(i == curEleArr.length-1){ //最后一个
                                    if(compareVal > (curEleArr[i].topVal + curEleArr[i].eleHei/2)){
                                        _this.deleteBorderEle();
                                        _this.appendEle(curEleArr[i].className,'after');
                                        localClass = curEleArr[i].className;
                                        prevOrAfter = 'after';
                                        isDragFlag = true;
                                    }

                                }else if(i == 0){
                                    //第一个
                                    if(compareVal < (curEleArr[i].topVal + curEleArr[i].eleHei/2)){
                                        _this.deleteBorderEle();
                                        _this.appendEle(curEleArr[i].className,'prev');

                                        localClass = curEleArr[i].className;
                                        prevOrAfter = 'prev';
                                        isDragFlag = true;

                                    }else{
                                        _this.deleteBorderEle();
                                        _this.appendEle(curEleArr[i].className,'after');
                                        localClass = curEleArr[i].className;
                                        prevOrAfter = 'after';
                                        isDragFlag = true;

                                    }
                                }
                            }
                        }else if(curEleArr.length == 1){    //只有一个组件
                            if(compareVal < (curEleArr[0].topVal + curEleArr[0].eleHei/2)){
                                _this.deleteBorderEle();
                                _this.appendEle(curEleArr[0].className,'prev');

                            }else{
                                _this.deleteBorderEle();
                                _this.appendEle(curEleArr[0].className,'after');

                            }
                        }

                    };
                    document.onmouseup = function (event){
                        $('.cpt_tmp').remove();
                        _this.deleteBorderEle();

                        //符合条件才进行下一步
                        if(isDragFlag){
                            //功能组件位置拖放
                            _this.componentsShowLocal(currHtml,localClass,prevOrAfter);
                            //删除原有
                            deleEle.remove();
                        }

                        isDragFlag = false;
                        document.onmousemove = null;
                        document.onmouseup = null;
                    }
                });
            },

            //功能组件安放位置
            componentsShowLocal(htmlEle,local,pa){
                //console.log('123');
                if(pa == 'after'){
                    $('.'+local).after(htmlEle);
                }else if(pa == 'prev'){
                    $('.'+local).before(htmlEle);
                }else if(pa == 'append'){
                    $('.'+local).append(htmlEle);
                }
            },

            //功能组件 折叠、删除功能
            comptsFoldOrDelete() {
                let _this = this;
                //折叠/展开
                $('.m_bm_area').on('click','.btn_fold',function (e){
                    e.stopPropagation();
                    if($(this).text() == '折叠'){
                        $(this).text('展开');
                        $(this).parents('.cus_components').find('.cus_cpt_main').slideUp();
                    }else{
                        $(this).text('折叠');
                        $(this).parents('.cus_components').find('.cus_cpt_main').slideDown();
                    }
                });

                //删除
                $('.m_bm_area').on('click','.btn_dele',function (e){
                    e.stopPropagation();
                    $(this).parents('.cus_components').remove();
                    _this.isShowComptsWarn();
                });
            },

            //单列多图
            //重新上传图片
            reloadImg(){
                this.$refs.rff1.click();
            },

            //编辑区域-->改变手机里的值
            editor2MobileShow(){
                let _this = this;
                //页面设置
                //页面背景色
                $('.ipt_pageBg').on('change',function (){
                    $('.m_bm_area').css({background:$(this).val()});
                    _this.pageBgImg = '';
                });
                //页面设置-页面背景图
                $('#filepagebg').on('change',function (e){
                    //console.log(e);
                    let files = event.target.files;
                    let file;
                    if (files && files.length > 0) {
                        // 获取目前上传的文件
                        file = files[0];
                        // 来在控制台看看到底这个对象是什么
                        // console.log(file);
                        // 那么我们可以做一下诸如文件大小校验的动作
                        if (file.size > 1024 * 1024 * 2) {
                            alert('图片大小不能超过 2MB!');
                            return false;
                        }
                        let URL = window.URL || window.webkitURL;
                        // 通过 file 生成目标 url
                        let imgURL = URL.createObjectURL(file);
                        _this.pageBgImg = imgURL;
                        $('.m_bm_area').css({background:'url('+_this.pageBgImg+') no-repeat center top'});
                    }
                });
                //页面设置-图片排版
                $('input[name="r_pb"]').click(function (){
                    let value = $('input[name="r_pb"]:checked').val();
                    if(value == '1'){   //无
                        $('.m_bm_area').css({background:'url('+_this.pageBgImg+') no-repeat center top'});
                    }
                    if(value == '2'){   //平铺
                        $('.m_bm_area').css({background:'url('+_this.pageBgImg+') no-repeat center top',backgroundSize:'100% 100%'});
                    }
                    if(value == '3'){   //横向平铺
                        $('.m_bm_area').css({background:'url('+_this.pageBgImg+') repeat-x center top'});
                    }
                    if(value == '4'){   //纵向平铺
                        $('.m_bm_area').css({background:'url('+_this.pageBgImg+') repeat-y center top'});
                    }
                });


                //标题 pf_set_title
                $('.pf_set_title').find('.pf_st_lm').on('input',function (e){
                    $('.'+_this.mobileInnerCurrClass).find('.cur_ch_tit').text($(this).val());
                });
                $('.pf_set_title').find('.pf_st_title').on('input',function (e){
                    $('.'+_this.mobileInnerCurrClass).find('.cus_cpt_txt .cus_cct').text($(this).val());
                });
                //标题样式
                $('input[name="r_bt"]').click(function (){
                    let value = $('input[name="r_bt"]:checked').val();
                    if(value == '1'){   //模板1
                        $('.'+_this.mobileInnerCurrClass).find('.cus_cpt_txt').find('.add_zshi').remove();
                        $('.'+_this.mobileInnerCurrClass).find('.cus_cpt_txt .cus_cct').css({textDecoration:'none'});
                    }
                    if(value == '2'){   //模板2
                        $('.'+_this.mobileInnerCurrClass).find('.cus_cpt_txt').find('.add_zshi').remove();
                        $('.'+_this.mobileInnerCurrClass).find('.cus_cpt_txt .cus_cct').css({textDecoration:'underline'});
                    }
                    if(value == '3'){   //模板3
                        $('.'+_this.mobileInnerCurrClass).find('.cus_cpt_txt').find('.add_zshi').remove();
                        $('.'+_this.mobileInnerCurrClass).find('.cus_cpt_txt').append('<span class="add_zshi"> ———————</span>');
                        $('.'+_this.mobileInnerCurrClass).find('.cus_cpt_txt .cus_cct').css({textDecoration:'none'});
                    }
                    if(value == '4'){   //模板4
                        $('.'+_this.mobileInnerCurrClass).find('.cus_cpt_txt').find('.add_zshi').remove();
                        $('.'+_this.mobileInnerCurrClass).find('.cus_cpt_txt').prepend('<span class="add_zshi">|</span>').css({textDecoration:'none'});
                    }
                });
                //标题--显示方式
                $('input[name="r_xsfs"]').click(function (){
                    let value = $('input[name="r_xsfs"]:checked').val();
                    if(value == '1'){   //居左
                        $('.'+_this.mobileInnerCurrClass).find('.cus_cpt_txt').css({textAlign:'left'});
                    }
                    if(value == '2'){   //居中
                        $('.'+_this.mobileInnerCurrClass).find('.cus_cpt_txt').css({textAlign:'center'});
                    }
                    if(value == '3'){   //居右
                        $('.'+_this.mobileInnerCurrClass).find('.cus_cpt_txt').css({textAlign:'right'});
                    }
                });
                //标题--字体颜色
                $('.input_title_fontcolor').on('input',function (){
                    $('.'+_this.mobileInnerCurrClass).find('.cus_cpt_txt').css({color:$(this).val()});
                });
                //标题--背景颜色
                $('.input_title_bgcolor').on('input',function (){
                    $('.'+_this.mobileInnerCurrClass).find('.cus_cpt_main').css({background:$(this).val()});
                });




                //富文本
                $('.pf_set_richtext').find('.pf_st_lm').on('input',function (e){
                    $('.'+_this.mobileInnerCurrClass).find('.cur_ch_tit').text($(this).val());
                });
                _this.ue.addListener('contentChange',function (){
                    $('.'+_this.mobileInnerCurrClass).find('.cus_cpt_txt').html(_this.ue.getContent());
                });

                //单列多图
                //单列多图--栏目名称
                $('.pf_set_dldt .pr_ipset').on('input',function (){
                    $('.'+_this.mobileInnerCurrClass).find('.cur_ch_tit').text($(this).val());
                });
                //单列多图--添加图片按钮
                $('.prr_add_img').on('click',function (){
                    console.log('23');
                });

            },

            //标题--字体大小change事件
            fontSizeChange(val){
                let _this = this;
                _this.fontSize = val;
                //console.log(this.fontSize);
                $('.'+_this.mobileInnerCurrClass).find('.cus_cpt_txt').css({fontSize:_this.fontSize});
            },

            //单列多图 滑块
            sliderChange(val){
                console.log(val);
                let _this = this;
                $('.'+_this.mobileInnerCurrClass).find('.cus_cpt_dldt').css({marginTop:val});
            }

        }
    }
</script>

<style>
    @import "../../assets/css/shopFit.css";
</style>