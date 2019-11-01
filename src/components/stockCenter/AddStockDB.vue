<template>
    <div class="add_stock_dbo">
        <div class="add_stock_dbo_searcher">
            <el-form label-width="100px">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="商品:" size="small" style="marginBottom: 0px;">
                            <el-input  placeholder="请输入商品名称或者编码" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="商品条码:"  size="small" style="marginBottom: 0px;">
                            <el-input  placeholder="请输入商品条码" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="调拨日期:"  size="small" style="marginBottom: 0px;">
                            <el-select placeholder="调拨日期" v-model="value" style="width:230px">
                                <el-option label="类型一" value="leixing1"></el-option>
                                <el-option label="类型二" value="leixing2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item style="marginBottom: 0px;">
                            <div class="btn btn_blue">查询</div>
                            <div class="btn btn_gray" style="margin-left:10px">重置</div>
                            <div class="btn btn_blue" @click="goBack" style="float:right">返回</div>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div class="add_stock_dbo_table">
            <div style="float:right; margin-bottom:10px;">
                <div class="btn btn_blue" style="margin-left:10px" @click="addGoods">添加商品</div>
            </div>
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable" height="621px">
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
                            label="可售库存">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdNum"
                            label="调出数量">
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
                            label="操作">
                            <template slot-scope="scope">
                                <el-button type="text" style="color:blue;" @click.stop="remove">删除</el-button>
                                <el-button type="text" style="color:blue;" @click.stop="save">保存</el-button>
                            </template>
                    </el-table-column>
                </el-table>
                <el-pagination layout="total, sizes, prev, pager, next, jumper">
                </el-pagination>
            </div>
        </div>
        <div v-show="pop1Flag">
            <div class="mark"></div>
            <div class="pop1 content"  style="width:1200px;">
                <div class="pop1_head">
                    <span class="pop1_txt">商品选择</span>
                    <span class="pop1_close iconfont iconicon-guanbi" title="关闭" @click="closePop1"></span>
                </div>
                <div class="pop1_main">
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
                                <el-form-item label="品类:"  size="small">
                                    <el-select placeholder="调拨日期" v-model="value">
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
                    <div style="float:right; margin-bottom:10px;">
                        <div class="btn btn_blue" @click="cancelAddGoods">取消</div>
                        <div class="btn btn_blue" style="margin-left:10px" @click="confirmAddGoods">确认</div>
                    </div>
                    <el-table border style="width: 100%" :data="initTable" height="550px">
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
                                label="可售库存">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="kdNum"
                                label="计价单位">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                type="selection"
                                width="55">
                        </el-table-column>
                    </el-table>
                    <el-pagination layout="total, sizes, prev, pager, next, jumper" style="float:right;">
                    </el-pagination>
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
                pop1Flag: false,
            }
        },
        mounted(){

        },
        methods: {
            goBack() {
                this.$router.push({path:'stockDB'})
            },
            addGoods() {
                this.pop1Flag = true
            },
            closePop1() {
                this.pop1Flag = false
            },
            remove() {
                let _this = this
                this.$cusMessageBox({
                    type:'warn',
                    content:'确认删除该商品吗？',
                    confirmButtonText: '确定', 
                    cancelButtonText: '取消',
                    showCancelButton: true,
                    confirmFn() {
                        _this.$message({ message: '删除成功', type: 'success', duration: 800 })
                    },
                    cancelFn() {
                    }
                })
            },
            save() {

            },
            cancelAddGoods() {
                this.pop1Flag = false
            },
            confirmAddGoods() {
                this.pop1Flag = false
            }
        }
    }
</script>
<style scoped>
    .add_stock_dbo_searcher{
        background-color: #ffffff;
        border-radius: 5px;
        margin:15px;
        padding:15px;
    }
    .add_stock_dbo_table{
        height: 703px;
        background-color: #ffffff;
        border-radius: 5px;
        margin: 15px;
        padding: 15px;
    }
    .mark{
        position:fixed;
        left:0;
        top:0;
        opacity: .5;
        width:100%;
        height:100%;
        background: #000;
        z-index:98;
    }
    .content{
        z-index:999;
    }
</style>