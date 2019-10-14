<template>
    <div class="home">
        <div class="blocks">
            <div class="blocks_head">
                <div class="bh_title">实时概况</div>
                <div class="bh_updtime">更新时间：0000-00-00 00:00:00</div>
                <div class="bh_rig">
                    <div class="bh_rval">全部</div>
                    <div class="bh_rselect">
                        <el-dropdown trigger="click" @command="handleCommand">
                            <span class="bh_select_val">所以商家<i class="bh_slidejt iconfont iconsanjiaodown"></i></span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="a">黄金糕</el-dropdown-item>
                                <el-dropdown-item command="b">狮子头</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </div>
            <div class="blocks_content">
                <div class="bc_left">
                    <div class="bcl_lis">
                        <div class="bcl_list">
                            <span class="bcl_l_txt">支付金额(元)</span>
                            <span class="bcl_l_num">9999.00</span>
                            <span class="bcl_l_yesterday">昨天全天：999.00</span>
                        </div>
                        <div class="bcl_list martop30">
                            <span class="bcl_l_txt">退款金额(元)</span>
                            <span class="bcl_l_num">3459.00</span>
                            <span class="bcl_l_yesterday">昨天全天：999.00</span>
                        </div>
                    </div>
                    <div class="bcl_lis">
                        <div class="bcl_list">
                            <span class="bcl_l_txt">支付订单数</span>
                            <span class="bcl_l_num">9999</span>
                            <span class="bcl_l_yesterday">昨天全天：999</span>
                        </div>
                        <div class="bcl_list martop30">
                            <span class="bcl_l_txt">退款订单数</span>
                            <span class="bcl_l_num">9999</span>
                            <span class="bcl_l_yesterday">昨天全天：999</span>
                        </div>
                    </div>
                    <div class="bcl_lis">
                        <div class="bcl_list">
                            <span class="bcl_l_txt">支付客户数</span>
                            <span class="bcl_l_num">9999</span>
                            <span class="bcl_l_yesterday">昨天全天：999.00</span>
                        </div>
                        <div class="bcl_list martop30">
                            <span class="bcl_l_txt">客单价(元)</span>
                            <span class="bcl_l_num">123.00</span>
                            <span class="bcl_l_yesterday">昨天全天：999.00</span>
                        </div>
                    </div>
                </div>
                <div class="bc_rig">
                    <div class="bcl_lis">
                        <div class="bcl_list">
                            <span class="bcl_l_txt">当前访问人数</span>
                            <span class="bcl_l_num">34</span>
                            <span class="bcl_l_yesterday">昨天全天：999</span>
                        </div>
                        <div class="bcl_list martop30">
                            <span class="bcl_l_txt">今日PV</span>
                            <span class="bcl_l_num">45</span>
                            <span class="bcl_l_yesterday">昨天全天：999</span>
                        </div>
                    </div>
                    <div class="bcl_lis">
                        <div class="bcl_list">
                            <span class="bcl_l_txt">今日新增会员数</span>
                            <span class="bcl_l_num">12</span>
                            <span class="bcl_l_yesterday">昨天全天：99</span>
                        </div>
                        <div class="bcl_list martop30">
                            <span class="bcl_l_txt">今日UV</span>
                            <span class="bcl_l_num">256</span>
                            <span class="bcl_l_yesterday">昨天全天：999.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="blocks">
            <div class="blocks_head">
                <div class="bh_title">整体看板</div>
                <div class="bh_rig">
                    <div class="bh_rval">全部</div>
                    <div class="bh_rselect">
                        <el-dropdown trigger="click" @command="handleCommand">
                            <span class="bh_select_val">所以商家<i class="bh_slidejt iconfont iconsanjiaodown"></i></span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="a">黄金糕</el-dropdown-item>
                                <el-dropdown-item command="b">狮子头</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    <div class="bh_rdateselect">
                        <el-date-picker
                                v-model="dateVal"
                                type="daterange"
                                align="right"
                                unlink-panels
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                size="mini"
                                :picker-options="pickerOptions">
                        </el-date-picker>
                    </div>

                </div>
            </div>
            <div class="blocks_content">
                <div class="bc_sele">
                    <el-form ref="form" :model="form" label-width="100px" size="mini">
                        <el-form-item label="浏览行为：">
                            <el-checkbox-group v-model="form.browseActive">
                                <el-checkbox label="访客数" name="browseActive"></el-checkbox>
                                <el-checkbox label="浏览量" name="browseActive"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>

                        <el-form-item label="成交转化：">
                            <el-checkbox-group v-model="form.cjChange">
                                <el-checkbox label="支付金额" name="cjChange"></el-checkbox>
                                <el-checkbox label="支付订单数" name="cjChange"></el-checkbox>
                                <el-checkbox label="支付客户数" name="cjChange"></el-checkbox>
                                <el-checkbox label="支付客单价" name="cjChange"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>

                        <el-form-item label="客户会员：">
                            <el-checkbox-group v-model="form.khhy">
                                <el-checkbox label="会员数" name="khhy"></el-checkbox>
                                <el-checkbox label="支付会员数" name="khhy"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                    </el-form>

                </div>
                <div class="bc_crt" ref="myEchart"></div>
            </div>
        </div>

        <div class="blocks">
            <div class="blocks_head">
                <div class="bh_title">实时商品榜</div>
                <div class="bh_rig">
                    <div class="bh_rval">全部</div>
                    <div class="bh_rselect">
                        <el-dropdown trigger="click" @command="handleCommand">
                            <span class="bh_select_val">所以商家<i class="bh_slidejt iconfont iconsanjiaodown"></i></span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="a">黄金糕</el-dropdown-item>
                                <el-dropdown-item command="b">狮子头</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </div>
            <div class="blocks_content">
                <div class="bc_splis">
                    <div class="bc_splis_head">访客榜</div>
                    <div class="bc_splis_thead">
                        <span class="bs_t_pm">排名</span>
                        <span class="bs_t_txt">商品名称</span>
                        <span class="bs_t_num">访客数</span>
                    </div>
                    <ul class="bc_splis_tbody" ref="sc_pv">
                        <li class="bc_sp_tli" v-for="(item,index) in PVData" :key="index">
                            <span class="bs_t_pm">
                                <span class="bs_tpindexs" :class="{no1:index==0,no2:index==1,no3:index==2}">{{index+1}}</span>
                            </span>
                            <span class="bs_t_txt">{{item.prdName}}</span>
                            <span class="bs_t_num">{{item.pvnum}}</span>
                        </li>
                    </ul>
                </div>

                <div class="bc_splis">
                    <div class="bc_splis_head">加购榜</div>
                    <div class="bc_splis_thead">
                        <span class="bs_t_pm">排名</span>
                        <span class="bs_t_txt">商品名称</span>
                        <span class="bs_t_num">访客数</span>
                    </div>
                    <ul class="bc_splis_tbody" ref="sc_jg">
                        <li class="bc_sp_tli" v-for="(item,index) in PVData" :key="index">
                            <span class="bs_t_pm">
                                <span class="bs_tpindexs" :class="{no1:index==0,no2:index==1,no3:index==2}">{{index+1}}</span>
                            </span>
                            <span class="bs_t_txt">{{item.prdName}}</span>
                            <span class="bs_t_num">{{item.pvnum}}</span>
                        </li>
                    </ul>
                </div>

                <div class="bc_splis">
                    <div class="bc_splis_head">销量榜</div>
                    <div class="bc_splis_thead">
                        <span class="bs_t_pm">排名</span>
                        <span class="bs_t_txt">商品名称</span>
                        <span class="bs_t_num">访客数</span>
                    </div>
                    <ul class="bc_splis_tbody" ref="sc_xl">
                        <li class="bc_sp_tli" v-for="(item,index) in PVData" :key="index">
                            <span class="bs_t_pm">
                                <span class="bs_tpindexs" :class="{no1:index==0,no2:index==1,no3:index==2}">{{index+1}}</span>
                            </span>
                            <span class="bs_t_txt">{{item.prdName}}</span>
                            <span class="bs_t_num">{{item.pvnum}}</span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    import PerfectScrollbar from 'perfect-scrollbar'
    export default {
        data() {
            return {
                dateVal:'',
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                form:{
                    browseActive:[],    //浏览行为
                    cjChange:[],    //成交转化
                    khhy:[],    //客户会员
                },
                PVData:[
                    {prdName:'商品名称1',pvnum:35634563563563},
                    {prdName:'商品名称2商品名称2商品名称2商品名称2商品名称2商品名称2商品名称2商品名称2商品名称2',pvnum:124},
                    {prdName:'商品名称3',pvnum:113},
                    {prdName:'商品名称4',pvnum:165},
                    {prdName:'商品名称5',pvnum:178},
                    {prdName:'商品名称6',pvnum:145},
                    {prdName:'商品名称7',pvnum:127},
                    {prdName:'商品名称8',pvnum:183},
                    {prdName:'商品名称9',pvnum:156},
                    {prdName:'商品名称10',pvnum:187},
                    {prdName:'商品名称11',pvnum:117},
                    {prdName:'商品名称12',pvnum:107},
                ]

            }
        },
        mounted() {
            this.initCharts();
            this.setScroll();
        },
        methods: {
            handleCommand(command) {
                //this.$message('click on item ' + command);
            },
            initCharts(){
                this.chart = echarts.init(this.$refs.myEchart);
                let option = {
                    title: {
                        text: ''
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    legend: {
                        bottom:0,
                        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    grid: {
                        top:"2%",
                        left: '2%',
                        right: '2%',
                        bottom: '12%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
                            data : ['周一','周二','周三','周四','周五','周六','周日']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        smooth: true
                    }]
                };
                this.chart.setOption(option);
            },
            //滚动条
            setScroll(){
                const containerPv = this.$refs.sc_pv;
                const containerJg = this.$refs.sc_jg;

                new PerfectScrollbar(containerPv);
                new PerfectScrollbar(containerJg);

                const containerXl = this.$refs.sc_xl;
                new PerfectScrollbar(containerXl);
            },
        }
    }
</script>
<style scoped>
    .bs_t_pm{display: block;width: 60px;flex-shrink: 0;height: 48px;line-height: 48px;text-align: center;}
    .bs_t_txt{display: block;flex-grow: 1;height: 48px;line-height: 48px;overflow: hidden;
        text-overflow: ellipsis;white-space: nowrap;}
    .bs_t_num{display: block;flex-shrink: 0;height: 48px;line-height: 48px;width: 80px;text-align: center;overflow: hidden;
        text-overflow: ellipsis;white-space: nowrap;
    }
    .bc_splis_thead span{font-size: 14px;color:#333;}
    .bc_splis{width: 31.33%;height: auto;overflow: hidden;
        border:1px solid #c6c9d3;margin-left:1.5%;margin-top:1.5%;float:left;box-sizing: border-box;
        margin-bottom: 20px;
    }
    .bc_splis_head{height: 42px;line-height: 42px;text-align: center;background: #c6c9d3;color:#fff;font-size: 16px;
        font-weight: 600;border-bottom:1px solid #c6c9d3;
    }
    .bc_splis_tbody{height: auto;overflow: hidden;display: block;max-height: 490px;position: relative;}
    .bc_splis_thead{height: 48px;line-height: 48px;background: #f8f8f8;display: flex;border-bottom:1px solid #c6c9d3;}

    .bc_sp_tli{height: 48px;line-height: 48px;display: flex;border-bottom:1px solid #c6c9d3;
        width: 100%;
    }
    .bc_splis_tbody span{color:#6c6f76;font-size: 14px;}
    .bs_tpindexs{width:16px;height: 16px;text-align: center;line-height: 16px;
        font-size: 12px;display: block;background: #c6c9d3;margin:0 auto;margin-top:16px;border-radius: 2px;
    }
    .bs_tpindexs.no1{background: #e51e00;}
    .bs_tpindexs.no2{background: #f3801a;}
    .bs_tpindexs.no3{background: #eea40a;}
    .bs_t_pm .bs_tpindexs{color:#fff;}





    .bc_crt{height: 300px;overflow: hidden;}
    .bc_sele{margin:15px;overflow: hidden;}
    .bh_rdateselect{float:left;overflow: hidden;margin-top:8px;margin-right: 15px;}
    .bc_left {
        width: 60%;
        height: auto;
        overflow: hidden;
        float: left;
        box-sizing: border-box;
        border-right: 1px dashed #c6c9d3;
        margin-top: 40px;
        margin-bottom: 40px;
        display: flex;
        justify-content: space-around;
    }

    .bc_rig {
        width: 40%;
        height: auto;
        overflow: hidden;
        float: left;
        margin-top: 40px;
        margin-bottom: 40px;
        display: flex;
        justify-content: space-around;
    }

    .bcl_lis {
        height: auto;
        overflow: hidden;
    }

    .bcl_l_txt {
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        color: #333;
        display: block;
    }

    .bcl_l_num {
        color: #5281ff;
        font-size: 32px;
        height: 40px;
        line-height: 40px;
        display: block;
    }

    .bcl_l_yesterday {
        color: #a4a8b5;
        font-size: 12px;
        height: 20px;
        line-height: 20px;
    }

    .martop30 {
        margin-top: 30px;
    }

    .blocks {
        margin: 15px;
        background: #fff;
        overflow: hidden;
    }

    .blocks_head {
        height: 42px;
        overflow: hidden;
        background: #f8f8f8;
        border-bottom: 1px solid #c6c9d3;
    }

    .bh_title {
        height: 42px;
        line-height: 42px;
        font-size: 16px;
        color: #333;
        float: left;
        margin-left: 15px;
        font-weight: 600;
    }

    .bh_updtime {
        height: 42px;
        line-height: 42px;
        float: left;
        color: #6c6f76;
        font-size: 12px;
        margin-left: 10px;
    }

    .bh_rig {
        width: auto;
        float: right;
        height: 42px;
        overflow: hidden;

    }

    .bh_rval {
        width: auto;
        float: left;
        height: 18px;
        line-height: 18px;
        margin-top: 12px;
        border-right: 1px solid #dfe3e9;
        padding-left: 10px;
        padding-right: 10px;
        font-size: 14px;
        color: #333;
    }

    .bh_rselect {
        padding-left: 10px;
        padding-right: 10px;
        height: 42px;
        line-height: 42px;
        float: left;
    }

    .bh_slidejt {
        color: #a4a8b5;
        font-size: 14px;
    }

    .bh_select_val {
        cursor: pointer;
    }

    .blocks_content {
        height: auto;
        overflow: hidden;
        background: #fff;
    }
</style>