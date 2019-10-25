<template>
    <div class="after_order_list">
        <!-- 搜索表单 -->
        <el-card class="after_order_list_seracher" style="padding: 0px">
            <el-form label-width="100px">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="售后单编号:" size="small">
                            <el-input  placeholder="请输入售后单编号" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="售后类型:"  size="small">
                            <el-select placeholder="请选择支付方式" v-model="value" style="width:230px">
                                <el-option label="现金" value="leixing2"></el-option>
                                <el-option label="微信" value="leixing1"></el-option>
                                <el-option label="支付宝" value="leixg3"></el-option>
                                <el-option label="储值卡" value="leing4"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="售后单状态:"  size="small">
                            <el-input  placeholder="请输入商品名称或者编码" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="订单编号:"  size="small">
                            <el-input  placeholder="请输入商品条码" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="售后申请时间:"  size="small">
                            <el-date-picker
                                type="daterange"
                                range-separator="-"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                style="width:230px">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="会员账号:"  size="small">
                            <el-input  placeholder="请输入商品条码" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="商家名称:"  size="small">
                            <el-input  placeholder="请输入商品条码" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="店铺名称:"  size="small">
                            <el-input  placeholder="请输入商品条码" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <div style="width:128px;height: 32px;margin:0 auto;">
                <div class="btn btn_blue">查询</div>
                <div class="btn btn_gray" style="margin-left:10px">重置</div>
            </div>
        </el-card>
        <!-- 表格 -->
        <el-card class="after_order_list_table" style="padding: 0px">
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable" height="560px">
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
                        label="售后单编号">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="packageId"
                        label="售后类型">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="saleStoreName"
                        label="售后单状态">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="kdName"
                        label="售后申请时间">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="kdNum"
                        label="退款金额">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="orderNum"
                        label="订单编号">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="orderState"
                        label="会员账号">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="deliverGoodsStore"
                        label="销售商家">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="shr"
                        label="店铺名称">
                    </el-table-column>
                </el-table>
                <el-pagination layout="total, sizes, prev, pager, next, jumper">
                </el-pagination>
            </div>
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
                value:""
            }
        },
        mounted(){

        },
        methods: {
            checkDetail(data) {
                this.$router.push("afterOrderDetail")
            }
        }
    }
</script>
<style scoped>
.after_order_list_seracher{
    width: calc(100% - 30px);
    background-color: #ffffff;
    border-radius: 5px;
    margin:15px auto;
}
.after_order_list_table{
    width: calc(100% - 30px);
    background-color: #ffffff;
    border-radius: 5px;
    margin: 0 auto;
} 
</style>