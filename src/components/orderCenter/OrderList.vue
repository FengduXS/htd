<template>
    <div class="order_list">
        <!-- 搜索表单 -->
        <div class="order_list_seracher">
            <el-form label-width="100px">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="订单编号:" size="small">
                            <el-input  placeholder="请输入订单编号" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="会员账号:"  size="small">
                            <el-select placeholder="请选择支付方式" v-model="value" style="width:230px">
                                <el-option label="现金" value="leixing2"></el-option>
                                <el-option label="微信" value="leixing1"></el-option>
                                <el-option label="支付宝" value="leixg3"></el-option>
                                <el-option label="储值卡" value="leing4"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="商品编码:"  size="small">
                            <el-input  placeholder="请输入商品编码" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="商家名称:"  size="small">
                            <el-input  placeholder="请输入商品条码" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="订单状态:" size="small">
                            <el-input  placeholder="请输入订单编号" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="会员手机:"  size="small">
                            <el-select placeholder="请选择支付方式" v-model="value" style="width:230px">
                                <el-option label="现金" value="leixing2"></el-option>
                                <el-option label="微信" value="leixing1"></el-option>
                                <el-option label="支付宝" value="leixg3"></el-option>
                                <el-option label="储值卡" value="leing4"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="商品名称:"  size="small">
                            <el-input  placeholder="请输入商品编码" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="商家名称:"  size="small">
                            <el-input  placeholder="请输入商品条码" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="下单时间:"  size="small">
                            <el-date-picker
                                v-model="value"
                                type="daterange"
                                range-separator="-"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                style="width:640px;">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="配送方式:" size="small">
                            <el-input  placeholder="请输入订单编号" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="销售渠道:" size="small">
                            <el-input  placeholder="请输入订单编号" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="订单类型:" size="small">
                            <el-input  placeholder="请输入订单编号" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="收货人姓名:"  size="small">
                            <el-select placeholder="请选择支付方式" v-model="value" style="width:230px">
                                <el-option label="现金" value="leixing2"></el-option>
                                <el-option label="微信" value="leixing1"></el-option>
                                <el-option label="支付宝" value="leixg3"></el-option>
                                <el-option label="储值卡" value="leing4"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="支付方式:"  size="small">
                            <el-input  placeholder="请输入商品编码" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="支付类型:"  size="small">
                            <el-input  placeholder="请输入商品条码" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="订单来源:" size="small" style="marginBottom:0px;">
                            <el-input  placeholder="请输入订单编号" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="收货人手机:"  size="small"  style="marginBottom:0px;">
                            <el-select placeholder="请选择支付方式" v-model="value" style="width:230px">
                                <el-option label="现金" value="leixing2"></el-option>
                                <el-option label="微信" value="leixing1"></el-option>
                                <el-option label="支付宝" value="leixg3"></el-option>
                                <el-option label="储值卡" value="leing4"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item  style="marginBottom:0px;">
                            <div class="btn btn_blue">查询</div>
                            <div class="btn btn_gray" style="margin-left:10px">重置</div>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <!-- 表格 -->
        <div class="order_list_table">
            <div class="table_block">
                <div class="tab">
                    <div :class="activer == 0 ? 'tabBtnActive':'tabBtn'" @click="activer = 0">全部</div>
                    <div :class="activer == 1 ? 'tabBtnActive':'tabBtn'" @click="activer = 1">待支付</div>
                    <div :class="activer == 2 ? 'tabBtnActive':'tabBtn'" @click="activer = 2">待审核</div>
                    <div :class="activer == 3 ? 'tabBtnActive':'tabBtn'" @click="activer = 3">待发货</div>
                    <div :class="activer == 4 ? 'tabBtnActive':'tabBtn'" @click="activer = 4">已发货</div>
                    <div :class="activer == 5 ? 'tabBtnActive':'tabBtn'" @click="activer = 5">已签收</div>
                    <div :class="activer == 6 ? 'tabBtnActive':'tabBtn'" @click="activer = 6">已完成</div>
                    <div :class="activer == 7 ? 'tabBtnActive':'tabBtn'" @click="activer = 7">已关闭</div>
                </div>
                <el-table border style="width: 100%" :data="initTable" height="414px">
                    <el-table-column
                        align="center"
                        label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" style="color: #5281ff" @click.stop="checkDetail(scope.row)">查看</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="packageState"
                        label="订单编号">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="packageId"
                        label="订单类型">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="saleStoreName"
                        label="订单状态">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="kdName"
                        label="会员账号">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="kdNum"
                        label="订单总金额">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="orderNum"
                        label="下单时间">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="orderState"
                        label="订单来源">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="deliverGoodsStore"
                        label="公司名称">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="shr"
                        label="商家名称">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="shr"
                        label="销售渠道">
                    </el-table-column>
                </el-table>
                <el-pagination layout="total, sizes, prev, pager, next, jumper">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                activeName2:"",
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
                value:"",
                activer: 0,
            }
        },
        mounted(){

        },
        methods: {
            checkDetail(data) {
                this.$router.push("orderDetail")
            }
        },
    }
</script>
<style scoped>
.order_list_seracher{
    background-color: #ffffff;
    border-radius: 5px;
    margin:15px;
    padding: 15px;
}
.order_list_table{
    height: 497px;
    background-color: #ffffff;
    border-radius: 5px;
    margin: 15px;
    padding: 15px;
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
</style>