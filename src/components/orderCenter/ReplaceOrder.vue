<template>
    <div class="replace_order">
        <el-card class="replace_order_top">
            <p class="secondTitle">购买商品</p>
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable" show-summary>
                    <el-table-column
                        type="index"
                        label="序号"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="packageState"
                        label="商品名称">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="packageId"
                        label="商品规格">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="saleStoreName"
                        label="单位">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="packageState"
                        label="零售价">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="packageId"
                        label="数量">
                        <template slot-scope="scope">
                            <el-input-number size="mini" v-model="scope.row.number"></el-input-number>
                        </template>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="saleStoreName"
                        label="原始总金额">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="packageState"
                        label="优惠金额">
                        <el-input style="width:100px;" size="mini"></el-input>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="packageState"
                        label="购买总金额">
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
        <el-card class="replace_order_top">
            <p class="secondTitle">会员信息</p>
            <el-form>
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="会员账号:" size="small">
                            28974290
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="累计消费:"  size="small">
                            30485390.00
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="最后一次消费日期:"  size="small">
                            2018-02-10
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <div style="border-top: #c6c9d3 1px dashed; overflow: hidden; height: 1px;"></div>
            <p class="secondTitle">优惠券信息</p>
            <div class="tab">
                <div :class="activer == 0 ? 'tabBtnActive':'tabBtn'" @click="activer = 0">可用优惠券</div>
                <div :class="activer == 1 ? 'tabBtnActive':'tabBtn'" @click="activer = 1">不可用优惠券</div>
            </div>
            <div v-if="activer == 0" style="border:1px solid #c6c9d3;width:100%;border-top:none;">
                可用优惠券1
            </div>
            <div v-if="activer == 1" style="border:1px solid #c6c9d3;width:100%;border-top:none;">
                不可用优惠券1
            </div>
            <div style="border-top: #c6c9d3 1px dashed; overflow: hidden; height: 1px;margin:15px 0;"></div>
            <p class="secondTitle">订单结算（元）</p>
            <div style="width:311px;height:274px;margin-top:15px;">
                <p class="orderCheck"><span class="orderCheckLeft" style="marginLeft:14px;">商品总计数量：</span><span class="orderCheckRight">100</span></p>
                <p class="orderCheck"><span class="orderCheckLeft">商品原始总金额：</span><span class="orderCheckRight">100</span></p>
                <p class="orderCheck"><span class="orderCheckLeft">商品优惠总金额：</span><span class="orderCheckRight">100</span></p>
                <p class="orderCheck"><span class="orderCheckLeft" style="marginLeft:28px;">优惠券金额：</span><span class="orderCheckRight">100</span></p>
                <hr>
                <p class="secondTitle" style="marginBottom:15px;">订单合计金额:<span style="marginLeft:60px;">1000</span></p>
                <el-form label-width="112px">
                    <el-form-item label="实收金额:"  size="small" required>
                        <el-input placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item size="small">
                        <div class="btn btn_blue">已现金收款</div>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
        <el-card class="replace_order_top">
            <p class="secondTitle">收货信息</p>
            <el-form label-width="72px">
                <el-row>
                    <el-col :span="5">
                        <el-form-item label="是否配送:" size="small">
                            <el-radio-group v-model="radio2">
                                <el-radio :label="3">配送</el-radio>
                                <el-radio :label="6">不配送</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-form-item label="收货人:"  size="small">
                            <el-input placeholder="" style="width:80%;"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-form-item label="手机号码:"  size="small">
                            <el-input placeholder="" style="width:100%;"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="15">
                        <el-form-item label="收获地址:"  size="small">
                            <el-input placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </el-card>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                initTable:[
                    {
                        packageId: 'P01',
                        packageState:'启用',
                        kdName:'天天快递',
                        kdNum:'312913',
                        orderNum:'dd7018',
                        orderState:'已发货',
                        saleStoreName:'启用',
                        deliverGoodsStore:'南京',
                        shr:'张三',
                        tel:'15',
                        address:'江苏省',
                        uint:"件",
                        number:""
                    }
                ],
                activer: 0,
                radio2:""
            }
        },
        mounted(){

        },
    }
</script>
<style scoped>
.replace_order_top{
    width: calc(100% - 30px);
    background-color: #ffffff;
    border-radius: 5px;
    margin:15px auto;
}
.secondTitle{
    width: 250px;
	height: 22px;
	font-family: PingFangSC-Semibold;
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
}
.el-input-number--mini {
    width: 130px;
    line-height: 25px;
}
.tab{
    width: 100%;
	height: 42px;
    display: flex;
    justify-content: flex-start;
    border-bottom: 2px solid #5281ff;
}
.tabBtn{
    width: 100px;
	height: 40px;
	background-color: #f8f8f8;
	border-radius: 2px 2px 0 0;
	border: solid 1px #dfe3e9;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.tabBtnActive{
    width: 100px;
	height: 40px;
    background-color: #5281ff;
    color: #f8f8f8;
	border-radius: 2px 2px 0 0;
	border: solid 1px #5281ff;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.orderCheck{
    margin-bottom: 15px;
}
.orderCheckLeft{
	font-family: PingFangSC-Regular;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 20px;
	letter-spacing: 0px;
	color: #6c6f76;
}
.orderCheckRight{
    margin-left: 49px;
	font-family: PingFangSC-Regular;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 20px;
	letter-spacing: 0px;
	color: #6c6f76;
}
</style>