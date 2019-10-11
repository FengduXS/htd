<template>
    <div class="stock_check">
        <el-card class="stock_check_searcher">
            <el-form label-width="100px">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="盘点任务:" size="small">
                            <el-input  placeholder="请输入盘点任务"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="创建日期:"  size="small">
                            <el-input  placeholder="请输入商品条码"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="创建人:"  size="small">
                            <el-input  placeholder="请输入创建人"></el-input>
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
        <el-card class="stock_check_table" style="padding: 0px">
            <div style="float:right; margin-bottom:10px;">
                <div class="btn btn_blue">导出</div>
                <div class="btn btn_blue" style="margin-left:10px">新增调拨</div>
            </div>
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable">
                    <el-table-column
                            align="center"
                            prop="packageId"
                            label="盘点任务">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="packageState"
                            label="创建日期">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdName"
                            label="创建人">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdNum"
                            label="待处理异常商品数">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            label="操作"
                            width="300px">
                            <template slot-scope="scope">
                                <el-button type="text" style="color:blue;" @click.stop="addStock">盘点异常处理</el-button>
                                <el-button type="text" style="color:blue;" @click.stop="addStock">删除</el-button>
                                <el-button type="text" style="color:blue;" @click.stop="addStock">导入盘点结果</el-button>
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
    .stock_check_searcher{
        width: calc(100% - 30px);
        background-color: #ffffff;
        border-radius: 5px;
        margin:15px auto;
    }
    .stock_check_table{
        width: calc(100% - 30px);
        background-color: #ffffff;
        border-radius: 5px;
        margin:auto;
    }
</style>