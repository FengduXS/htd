<template>
    <div class="after_order_detail">
        <div class="after_order_detail_card">
            <p class="secondTitle">售后单基本信息</p>
            <el-form  ref="form">
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="售后单号:">
                            280029724586508200
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="订单编号:">
                            0000000000000000000
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="销售公司:">
                            汇通达
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="售后单状态:">
                            待审核
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="订单状态:">
                            待发货
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="销售商家:">
                            汇通达直营
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="售后类型:">
                            退货退款
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="订单类型:">
                            普通
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="销售渠道:">
                            B2C
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="售后申请人:">
                            会员A
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="会员账号:">
                            周小周
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="售后申请来源:">
                            前台申请
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="会员手机:">
                            18600000000
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="售后申请时间:">
                            0000-00-00 00:00:00
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="订单创建时间:">
                            0000-00-00 00:00:00
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="售后完成时间:">
                            周小周
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="代下单人:">
                            周小周
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div class="after_order_detail_card">
            <el-tabs v-model="tabs">
                <el-tab-pane label = "售后单明细" name="first">
                    <p class="secondTitle">商品明细</p>
                    <div class="table_block">
                        <el-table border style="width: 100%" :data="initTable">
                            <el-table-column
                                align="center"
                                prop="packageState"
                                label="退款单号">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="packageId"
                                label="退款方式">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="saleStoreName"
                                label="退款金额">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="packageState"
                                label="退款凭证号">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="packageId"
                                label="退款状态">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="saleStoreName"
                                label="退款时间">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div style="border-top: #c6c9d3 1px dashed; overflow: hidden; height: 1px;margin-top:15px;"></div>
                    <p class="secondTitle">售后申请说明</p>
                    <el-form  ref="form">
                        <el-row>
                            <el-col :span="8">
                                <el-form-item label="售后原因:">
                                    280029724586508200
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="申请描述:">
                                    0000000000000000000
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="申请寄回方式:">
                                    汇通达
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                    <div style="border-top: #c6c9d3 1px dashed; overflow: hidden; height: 1px;margin-top:15px;"></div>
                    <p class="secondTitle">售后单审核结果</p>
                    <el-form  ref="form">
                        <el-row>
                            <el-col :span="8">
                                <el-form-item label="审核时间:">
                                    280029724586508200
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="审核结果:">
                                    0000000000000000000
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="审核备注:">
                                    汇通达
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-form-item label="凭证:" label-width="70px">
                            <div style="width:100%;height:auto;display:table-cell;">
                                <img src="../../assets/images/hy.jpg" class="formImg"/>
                                <img src="../../assets/images/hy.jpg" class="formImg"/>
                                <img src="../../assets/images/hy.jpg" class="formImg"/>
                            </div>
                        </el-form-item>
                    </el-form>
                    <div style="border-top: #c6c9d3 1px dashed; overflow: hidden; height: 1px;margin-top:15px;"></div>
                    <p class="secondTitle">验货结果</p>
                    <el-form  ref="form">
                        <el-row>
                            <el-col :span="8">
                                <el-form-item label="验货时间:">
                                    280029724586508200
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="验货结果:">
                                    0000000000000000000
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="验货备注:">
                                    汇通达
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label = "退款明细" name="second">
                    <p class="secondTitle">商品明细</p>
                    <div class="table_block">
                        <el-table border style="width: 100%" :data="initTable">
                            <el-table-column
                                align="center"
                                prop="packageState"
                                label="退款单号">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="packageId"
                                label="退款方式">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="saleStoreName"
                                label="退款金额">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="packageState"
                                label="退款凭证号">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="packageId"
                                label="退款状态">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="saleStoreName"
                                label="退款时间">
                            </el-table-column>
                        </el-table>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                tabs:"first",
                initTable:[
                    {
                        packageId: 'P01',
                        packageState:'待揽件',
                        kdName:'天天快递',
                        kdNum:'312913',
                        orderNum:'dd7018',
                        orderState:'已发货',
                        saleStoreName:'北京',
                        deliverGoodsStore:'南京',
                        shr:'张三',
                        tel:'15',
                        address:'江苏省',
                        uint:"件"
                    }
                ],
            }
        },
        mounted(){

        },
    }
</script>
<style scoped>
.after_order_detail_card{
    background-color: #ffffff;
    border-radius: 5px;
    margin:15px;
    padding: 15px;
}
.secondTitle{
    width: 200px;
	height: 22px;
	font-family: PingFangSC-Semibold;
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
}
.el-form-item {
    margin-bottom: 0px;
}
.formImg{
    width: 64px;
    height: 64px;
    margin-right: 15px;
}
</style>