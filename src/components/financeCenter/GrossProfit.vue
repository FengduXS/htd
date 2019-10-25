<template>
    <div class="gp">
        <!-- 搜索表单 -->
        <el-card class="gp_seracher" style="padding: 0px">
            <el-form label-width="100px">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="订单号:" size="small">
                            <el-input  placeholder="请输入订单号" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="支付方式:"  size="small">
                            <el-select placeholder="请选择支付方式" v-model="value" style="width:230px">
                                <el-option label="现金" value="leixing2"></el-option>
                                <el-option label="微信" value="leixing1"></el-option>
                                <el-option label="支付宝" value="leixg3"></el-option>
                                <el-option label="储值卡" value="leing4"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="商品:"  size="small">
                            <el-input  placeholder="请输入商品名称或者编码" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="商品条码:"  size="small">
                            <el-input  placeholder="请输入商品条码" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="付款日期:"  size="small">
                            <el-date-picker
                                v-model="value"
                                type="daterange"
                                range-separator="-"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                style="width:230px">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item>
                            <div class="btn btn_blue">查询</div>
                            <div class="btn btn_gray" style="margin-left:10px">重置</div>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </el-card>
        <!-- 表格 -->
        <el-card class="gp_table" style="padding: 0px">
            <div class="btn btn_blue" style="float:right;margin-bottom:10px;">导出</div>
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable" height="550px">
                    <el-table-column
                        align="center"
                        prop="packageState"
                        label="订单号">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="packageId"
                        label="订单来源">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="saleStoreName"
                        label="销售渠道">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="kdName"
                        label="商品编码">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="kdNum"
                        label="商品名称">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="orderNum"
                        label="规格编码">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="orderState"
                        label="规格">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="deliverGoodsStore"
                        label="商品条码">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="shr"
                        label="零售价">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="shr"
                        label="购买数量">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="tel"
                        label="计价单位">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="tel"
                        label="商品总价">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="address"
                        label="采购总价">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="address"
                        label="销项税率">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="address"
                        label="进项税率">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="address"
                        label="毛利">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="address"
                        label="毛利率">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="address"
                        label="支付方式">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="address"
                        label="付款时间"
                        width="110px">
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
    }
</script>
<style scoped>
.gp_seracher{
    width: calc(100% - 30px);
    background-color: #ffffff;
    border-radius: 5px;
    margin:15px auto;
}
.gp_table{
    width: calc(100% - 30px);
    background-color: #ffffff;
    border-radius: 5px;
    margin: 0 auto;
}  
</style>