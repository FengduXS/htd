<template>
    <div class="package_list">
        <el-card class="package_list_searcher">
            <el-form label-width="100px">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="订单编号:" size="small">
                            <el-input  placeholder="请输入商品名称或者编码" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="包裹编号:"  size="small">
                            <el-input  placeholder="请输入商品条码" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="运单号:"  size="small">
                            <el-select placeholder="调拨日期" v-model="value" style="width:230px">
                                <el-option label="类型一" value="leixing1"></el-option>
                                <el-option label="类型二" value="leixing2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="销售店铺名称:"  size="small">
                            <el-select placeholder="调拨日期" v-model="value" style="width:230px">
                                <el-option label="类型一" value="leixing1"></el-option>
                                <el-option label="类型二" value="leixing2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="配送商:"  size="small">
                            <el-select placeholder="调拨日期" v-model="value" style="width:230px">
                                <el-option label="类型一" value="leixing1"></el-option>
                                <el-option label="类型二" value="leixing2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="收货人姓名:"  size="small">
                            <el-select placeholder="调拨日期" v-model="value" style="width:230px">
                                <el-option label="类型一" value="leixing1"></el-option>
                                <el-option label="类型二" value="leixing2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="包裹状态:"  size="small">
                            <el-select placeholder="调拨日期" v-model="value" style="width:230px">
                                <el-option label="类型一" value="leixing1"></el-option>
                                <el-option label="类型二" value="leixing2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="收货人手机号:"  size="small">
                            <el-select placeholder="调拨日期" v-model="value" style="width:230px">
                                <el-option label="类型一" value="leixing1"></el-option>
                                <el-option label="类型二" value="leixing2"></el-option>
                            </el-select>
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
        <el-card class="package_list_table" style="padding: 0px">
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable" height="540px">
                    <el-table-column
                            align="center"
                            prop="packageId"
                            label="包裹编号">
                            <template slot-scope="scope">
                                <div @click="check(scope.row)" style="color: #5281ff;">
                                    {{scope.row.packageId}}
                                </div>
                            </template>
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="packageState"
                            label="包裹状态">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdName"
                            label="配送商">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdNum"
                            label="快递单号">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="packageId"
                            label="订单编号">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="packageState"
                            label="订单状态">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdName"
                            label="销售店铺名称">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdNum"
                            label="发货仓库">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdNum"
                            label="收货人姓名">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdNum"
                            label="收货人手机">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdNum"
                            label="收货人地址">
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
                value:"",
                initTable: [
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
        methods: {
            check(data){
                this.$router.push({
                    path:'packageDetail',
                    query: {
                        data: data
                    }
                })
            }
        }
    }
</script>
<style scoped>
    .package_list_searcher{
        width: calc(100% - 30px);
        background-color: #ffffff;
        border-radius: 5px;
        margin:15px auto;
    }
    .package_list_table{
        width: calc(100% - 30px);
        background-color: #ffffff;
        border-radius: 5px;
        margin: 0 auto;
    }
</style>