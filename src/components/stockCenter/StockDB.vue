<template>
    <div class="stock_dbo">
        <el-card class="stock_dbo_searcher">
            <el-form label-width="100px">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="商品:" size="small">
                            <el-input  placeholder="请输入商品名称或者编码"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="商品条码:"  size="small">
                            <el-input  placeholder="请输入商品条码"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="调拨日期:"  size="small">
                            <el-select placeholder="调拨日期" v-model="value">
                                <el-option label="类型一" value="leixing1"></el-option>
                                <el-option label="类型二" value="leixing2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="品类:"  size="small">
                            <el-select placeholder="请选择品类" v-model="value">
                                <el-option label="品类一" value="pinlei1"></el-option>
                                <el-option label="品类二" value="pinlei2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="状态:"  size="small">
                            <el-select placeholder="请选择状态" v-model="value">
                                <el-option label="状态一" value="pinpai1"></el-option>
                                <el-option label="状态二" value="pinpai2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="调拨类型:"  size="small">
                            <el-select placeholder="请选择调拨类型" v-model="value">
                                <el-option label="调拨类型一" value="pinpai1"></el-option>
                                <el-option label="调拨类型二" value="pinpai2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item>
                            <div class="btn btn_blue">保存</div>
                            <div class="btn btn_gray" style="margin-left:10px">重置</div>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </el-card>
        <el-card class="stock_dbo_table" style="padding: 0px">
            <div style="float:right; margin-bottom:10px;">
                <div class="btn btn_blue">导出盘点表</div>
                <div class="btn btn_blue" style="margin-left:10px">新增盘点任务</div>
            </div>
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable">
                    <el-table-column
                            align="center"
                            prop="packageId"
                            label="商品名称">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="packageState"
                            label="商品编码">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdName"
                            label="规格">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdNum"
                            label="品类">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="packageId"
                            label="商品类型">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="packageState"
                            label="规格编码">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdName"
                            label="条码">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdNum"
                            label="调拨类型">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdNum"
                            label="数量">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdNum"
                            label="计价单位">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdNum"
                            label="调拨仓库">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdNum"
                            label="状态">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdNum"
                            label="操作人">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdNum"
                            label="调拨时间">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            label="操作">
                            <template slot-scope="scope">
                                <el-button type="text" style="color:blue;" @click.stop="addStock">取消</el-button>
                            </template>
                    </el-table-column>
                </el-table>
                <el-pagination layout="total, sizes, prev, pager, next, jumper">
                </el-pagination>
            </div>
        </el-card>
        <div class="pop1" v-show="pop1Flag" style="width:472px;height:288px;">
            <div class="pop1_head">
                <span class="pop1_txt">商品补货</span>
                <span class="pop1_close iconfont iconicon-guanbi" title="关闭"></span>
            </div>
            <div class="pop1_main">
                
            </div>
            <div class="pop1_btm">
                <div class="pop1_b_inner">
                    <div class="btn btn_blue marrig10">确定</div>
                    <div class="btn btn_gray marrig10">取消</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                value: "",
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
                pop1Flag:false,
            }
        },
        mounted(){

        },
        methods: {
            addStock() {

            }
        }
    }
</script>
<style scoped>
    .stock_dbo_searcher{
        width: calc(100% - 30px);
        background-color: #ffffff;
        border-radius: 5px;
        margin:15px auto;
    }
    .stock_dbo_table{
        width: calc(100% - 30px);
        background-color: #ffffff;
        border-radius: 5px;
        margin:0 auto;
    }
</style>