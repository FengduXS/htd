<template>
    <div class="purchase">
        <!-- 搜索表单 -->
        <div class="purchase_seracher">
            <el-form label-width="72px">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="商品:" size="small">
                            <el-input  placeholder="请输入商品名称或者编码" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="商品条码:"  size="small">
                            <el-input  placeholder="请输入商品条码" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="商品类型:"  size="small">
                            <el-select placeholder="请选择商品类型" v-model="value" style="width:230px">
                                <el-option label="类型一" value="leixing1"></el-option>
                                <el-option label="类型二" value="leixing2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="供应商:"  size="small">
                            <el-select placeholder="请选择供应商" v-model="value" style="width:230px">
                                <el-option label="供应商一" value="pinlei1"></el-option>
                                <el-option label="供应商二" value="pinlei2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="采购日期:"  size="small" style="marginBottom:0px;">
                            <el-date-picker
                                v-model="value"
                                type="daterange"
                                range-separator="-"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                style="width:230px;height:34px;">
                            </el-date-picker>
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
        <div class="purchase_table">
            <div class="btn btn_blue" style="float:right;margin-bottom:10px;">导出</div>
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable" height="570px">
                    <el-table-column
                        align="center"
                        prop="packageState"
                        label="商品名称">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="packageId"
                        label="商品编码">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="saleStoreName"
                        label="规格">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="kdName"
                        label="品类">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="kdNum"
                        label="品牌">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="orderNum"
                        label="商品类型">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="orderState"
                        label="条码">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="deliverGoodsStore"
                        label="采购价">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="shr"
                        label="数量">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="shr"
                        label="计价单位">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="tel"
                        label="供应商编码">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="tel"
                        label="供应商"
                        width="110px">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="address"
                        label="采购时间"
                        width="110px">
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
.purchase_seracher{
    background-color: #ffffff;
    border-radius: 5px;
    margin:15px;
    padding: 15px;
}
.purchase_table{
    height: 651px;
    background-color: #ffffff;
    border-radius: 5px;
    margin: 15px;
    padding: 15px;
}  
</style>