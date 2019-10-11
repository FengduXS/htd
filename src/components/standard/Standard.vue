<template>
    <div class="standard">

        <div class="std_filter_bg" v-show="filterBgFlag"></div>
        <div class="sdd_lis">
            <h2>按钮</h2>
            <div class="btn btn_blue">确定</div>
            <div style="clear: both;height: 10px;"></div>
            <div class="btn btn_gray">取消</div>
        </div>
        <div class="sdd_lis">
            <h2>弹框</h2>
            <el-button @click="showPop1">弹框样式1</el-button>
            <el-button @click="showPop2">弹框样式2</el-button>
            <el-button @click="showPop3">插件方式调用</el-button>
        </div>
        <div class="sdd_lis">
            <h2>表格</h2>
            <div class="table_block">
                <el-table
                        :data="tableData1.slice((currpage - 1) * pagesize, currpage * pagesize)"
                        border
                        style="width: 100%">
                    <el-table-column
                            align="center"
                            prop="packageId"
                            label="包裹编号"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="packageState"
                            label="包裹状态"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdName"
                            label="配送商">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdNum"
                            label="快递编号">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="orderNum"
                            label="订单编号">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="orderState"
                            label="订单状态">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="saleStoreName"
                            label="销售店铺名称">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="deliverGoodsStore"
                            label="发货仓库">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="shr"
                            label="收货人姓名">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="tel"
                            label="收货人手机">
                    </el-table-column>
                    <el-table-column
                            width="300"
                            align="center"
                            prop="address"
                            label="收货人地址">
                    </el-table-column>
                </el-table>
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currpage"
                        :page-sizes="pageSizes"
                        :page-size="pagesize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="tableData1.length">
                </el-pagination>
            </div>
        </div>
        <div class="sdd_lis">
            <h2>表单</h2>
            <div style="width: 500px;">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="订单编号">
                        <el-input v-model="form.name" placeholder="请输入订单编号"></el-input>
                    </el-form-item>

                    <el-form-item label="配送商">
                        <el-select v-model="form.region" placeholder="请选择配送商">
                            <el-option label="顺丰" value="shunfeng"></el-option>
                            <el-option label="京东物流" value="jd"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </div>
        </div>

        <div class="pop1" v-show="pop1Flag">
            <div class="pop1_head">
                <span class="pop1_txt">新增盘点任务</span>
                <span class="pop1_close iconfont iconicon-guanbi" title="关闭" @click="closePop1"></span>
            </div>
            <div class="pop1_main"></div>
            <div class="pop1_btm">
                <div class="pop1_b_inner">
                    <div class="btn btn_blue marrig10">确定</div>
                    <div class="btn btn_gray marrig10">取消</div>
                </div>
            </div>
        </div>
        <div class="pop2" v-show="pop2Flag">
            <div class="pop2_head">
                <span class="pop2_close iconfont iconicon-guanbi" title="关闭" @click="closePop2"></span>
            </div>
            <div class="pop2_main">
                <div class="pop2_inicon"><img src="../../assets/images/icon-warn.png"/></div>
                <div class="pop2_intxt">是否确定删除此预警信息？</div>
            </div>
            <div class="pop2_btm">
                <div class="pop2_b_inner">
                    <div class="btn btn_blue marrig10">确定</div>
                    <div class="btn btn_gray marrig10">取消</div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        components: {},
        data() {
            return {
                filterBgFlag: false,
                pop1Flag: false,
                pop2Flag: false,
                tableData1: [
                    {
                        packageId: 'P01',
                        packageState:'待揽件',
                        kdName:'天天快递',
                        kdNum:'31291359710750',
                        orderNum:'dd701875071450570',
                        orderState:'已发货',
                        saleStoreName:'北京旗舰店',
                        deliverGoodsStore:'南京仓库',
                        shr:'张三',
                        tel:'15678987656',
                        address:'江苏省南京市玄武区钟灵街50号汇通达大厦A座'

                    },
                    {
                        packageId: 'P02',
                        packageState:'待收货',
                        kdName:'天天快递',
                        kdNum:'31291359710750',
                        orderNum:'dd701875071450570',
                        orderState:'已发货',
                        saleStoreName:'北京旗舰店',
                        deliverGoodsStore:'南京仓库',
                        shr:'张三',
                        tel:'15678987656',
                        address:'江苏省南京市玄武区钟灵街50号汇通达大厦A座'

                    },
                    {
                        packageId: 'P03',
                        packageState:'待揽件',
                        kdName:'天天快递',
                        kdNum:'31291359710750',
                        orderNum:'dd701875071450570',
                        orderState:'已发货',
                        saleStoreName:'北京旗舰店',
                        deliverGoodsStore:'南京仓库',
                        shr:'张三',
                        tel:'15678987656',
                        address:'江苏省南京市玄武区钟灵街50号汇通达大厦A座'

                    },
                    {
                        packageId: 'P04',
                        packageState:'待发货',
                        kdName:'天天快递',
                        kdNum:'31291359710750',
                        orderNum:'dd701875071450570',
                        orderState:'已发货',
                        saleStoreName:'北京旗舰店',
                        deliverGoodsStore:'南京仓库',
                        shr:'张三',
                        tel:'15678987656',
                        address:'江苏省南京市玄武区钟灵街50号'

                    },
                    {
                        packageId: 'P05',
                        packageState:'待揽件',
                        kdName:'天天快递',
                        kdNum:'31291359710750',
                        orderNum:'dd701875071450570',
                        orderState:'已发货',
                        saleStoreName:'北京旗舰店',
                        deliverGoodsStore:'南京仓库',
                        shr:'张三',
                        tel:'15678987656',
                        address:'江苏省南京市玄武区钟灵街50号汇通达大厦A座'

                    },
                    {
                        packageId: 'P06',
                        packageState:'待揽件',
                        kdName:'天天快递',
                        kdNum:'31291359710750',
                        orderNum:'dd701875071450570',
                        orderState:'已发货',
                        saleStoreName:'北京旗舰店',
                        deliverGoodsStore:'南京仓库',
                        shr:'张三',
                        tel:'15678987656',
                        address:'江苏省南京市玄武区钟灵街50号'

                    },
                    {
                        packageId: 'P07',
                        packageState:'待揽件',
                        kdName:'天天快递',
                        kdNum:'31291359710750',
                        orderNum:'dd701875071450570',
                        orderState:'已发货',
                        saleStoreName:'北京旗舰店',
                        deliverGoodsStore:'南京仓库',
                        shr:'张三',
                        tel:'15678987656',
                        address:'江苏省南京市玄武区钟灵街50号汇通达大厦A座'

                    },
                    {
                        packageId: 'P08',
                        packageState:'已收货',
                        kdName:'天天快递',
                        kdNum:'31291359710750',
                        orderNum:'dd701875071450572',
                        orderState:'已发货',
                        saleStoreName:'北京旗舰店',
                        deliverGoodsStore:'南京仓库',
                        shr:'张三',
                        tel:'15678987656',
                        address:'江苏省南京市玄武区钟灵街50号'

                    },
                    {
                        packageId: 'P09',
                        packageState:'待揽件',
                        kdName:'天天快递',
                        kdNum:'31291359710750',
                        orderNum:'dd701875071450570',
                        orderState:'已发货',
                        saleStoreName:'北京旗舰店',
                        deliverGoodsStore:'南京仓库',
                        shr:'张三',
                        tel:'15678987656',
                        address:'江苏省南京市玄武区钟灵街50号汇通达大厦A座'

                    },
                    {
                        packageId: 'P10',
                        packageState:'待揽件',
                        kdName:'天天快递',
                        kdNum:'31291359710750',
                        orderNum:'dd701875071450570',
                        orderState:'已发货',
                        saleStoreName:'北京旗舰店',
                        deliverGoodsStore:'南京仓库',
                        shr:'张三',
                        tel:'15678987656',
                        address:'江苏省南京市玄武区钟灵街50号汇通达大厦A座'

                    },
                    {
                        packageId: 'P11',
                        packageState:'待揽件',
                        kdName:'天天快递',
                        kdNum:'31291359710750',
                        orderNum:'dd701875071450570',
                        orderState:'已发货',
                        saleStoreName:'北京旗舰店',
                        deliverGoodsStore:'南京仓库',
                        shr:'张三',
                        tel:'15678987656',
                        address:'江苏省南京市玄武区钟灵街50号汇通达大厦A座'

                    },
                    {
                        packageId: 'P12',
                        packageState:'待揽件',
                        kdName:'天天快递',
                        kdNum:'31291359710750',
                        orderNum:'dd701875071450570',
                        orderState:'已发货',
                        saleStoreName:'北京旗舰店',
                        deliverGoodsStore:'南京仓库',
                        shr:'张三',
                        tel:'15678987656',
                        address:'江苏省南京市玄武区钟灵街50号汇通达大厦A座'

                    }


                ],
                currpage:1,
                pagesize:5,
                pageSizes:[5,10,15,20],
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        computed: {},
        mounted() {

        },
        methods: {

            handleSizeChange(val) {
                this.pagesize = val;

            },
            handleCurrentChange(val) {
                this.currpage = val;
            },
            showPop1() {
                this.filterBgFlag = true;
                this.pop1Flag = true;
            },
            closePop1() {
                this.filterBgFlag = false;
                this.pop1Flag = false;
            },
            showPop2() {
                this.filterBgFlag = true;
                this.pop2Flag = true;
            },
            closePop2() {
                this.filterBgFlag = false;
                this.pop2Flag = false;
            },
            showPop3(){
                this.$cusMessageBox({
                    type:'doubt',    // complete（默认）, danger, doubt ,info ,warn
                    content:'基本的axios配置这里就不讲了',
                    confirmButtonText: '确定',    //非必须
                })
            }
        }
    }
</script>
<style scoped>
    .standard{
        position: absolute;top:0px;left:0px;right:0px;bottom:0px;
        overflow: auto;
    }
    .sdd_lis {
        margin: 20px;
        overflow: hidden;
        clear: both;
        margin-top: 20px;
    }

    .sdd_lis h2 {
        margin-bottom: 10px;
    }

    .std_filter_bg {
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background: rgba(0, 0, 0, 0.5);
    }


</style>