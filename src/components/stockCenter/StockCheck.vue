<template>
    <div class="stock_check">
        <div class="stock_check_searcher">
            <el-form label-width="100px">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="盘点任务:" size="small" style="marginBottom: 0px;">
                            <el-input  placeholder="请输入盘点任务" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="创建日期:"  size="small" style="marginBottom: 0px;">
                            <el-input  placeholder="请输入商品条码" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="创建人:"  size="small" style="marginBottom: 0px;">
                            <el-input  placeholder="请输入创建人" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <div style="float:right;">
                            <div class="btn btn_blue">查询</div>
                            <div class="btn btn_gray" style="margin-left:10px">重置</div>
                        </div>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div class="stock_check_table">
            <div style="float:right; margin-bottom:10px;">
                <div class="btn btn_blue">导出盘点表</div>
                <div class="btn btn_blue" style="margin-left:10px" @click="addTask">新增盘点任务</div>
            </div>
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable" height="621px">
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
                                <el-button type="text" style="color:blue;" @click.stop="exceptionHadle">盘点异常处理</el-button>
                                <el-button type="text" style="color:blue;" @click.stop="remove">删除</el-button>
                                <el-button type="text" style="color:blue;" @click.stop="addStock">导入盘点结果</el-button>
                            </template>
                    </el-table-column>
                </el-table>
                <el-pagination layout="total, sizes, prev, pager, next, jumper">
                </el-pagination>
            </div>
        </div>
        <div v-show="pop1Flag">
            <div class="mark"></div>
            <div class="pop1 content">
                <div class="pop1_head">
                    <span class="pop1_txt">库存盘点异常处理</span>
                    <span class="pop1_close iconfont iconicon-guanbi" title="关闭" @click="closePop1"></span>
                </div>
                <div class="pop1_main" style="padding-left:50px;">
                    <el-form label-width="100px">
                        <el-form-item label="商品名称:" size="small">
                            <p>商品1</p>
                        </el-form-item>
                        <el-form-item label="商品系统库存:"  size="small">
                            <p>20</p>
                        </el-form-item>
                        <el-form-item label="盘点结果:"  size="small">
                            <p>25</p>
                        </el-form-item>
                        <el-form-item label="差异数量:" size="small">
                            <p>5</p>
                        </el-form-item>
                        <el-form-item label="处理结果:"  size="small">
                            <el-radio-group v-model="radio">
                                <el-radio :label="3">结果1</el-radio>
                                <el-radio :label="6">结果2</el-radio>
                                <el-radio :label="9">结果3</el-radio>
                                <el-radio :label="12">结果4</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="实际库存:"  size="small">
                            <el-input  placeholder="请输入实际库存" style="width:230px"></el-input>
                        </el-form-item>
                </el-form>
                </div>
                <div class="pop1_btm">
                    <div class="pop1_b_inner">
                        <div class="btn btn_blue marrig10" @click="closePop1">确定</div>
                        <div class="btn btn_gray marrig10" @click="closePop1">取消</div>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="pop2Flag">
            <div class="mark"></div>
            <div class="pop1 content" style="width:426px;">
                <div class="pop1_head">
                    <span class="pop1_txt">新增盘点任务</span>
                    <span class="pop1_close iconfont iconicon-guanbi" title="关闭" @click="closePop2"></span>
                </div>
                <div class="pop1_main" style="padding-left:20px;">
                    <el-form label-width="110px">
                        <el-form-item label="盘点任务名称:" size="small" required>
                            <el-input  placeholder="请输入盘点任务名称" style="width:230px"></el-input>
                        </el-form-item>
                </el-form>
                </div>
                <div class="pop1_btm">
                    <div class="pop1_b_inner">
                        <div class="btn btn_blue marrig10" @click="closePop2">确定</div>
                        <div class="btn btn_gray marrig10" @click="closePop2">取消</div>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="pop3Flag">
            <div class="mark"></div>
            <div class="pop1 content"  style="width:472px;">
                <div class="pop1_head">
                    <span class="pop1_txt">导入盘点结果</span>
                    <span class="pop1_close iconfont iconicon-guanbi" title="关闭" @click="closePop3"></span>
                </div>
                <div class="pop1_main">
                    <el-form label-width="100px">
                        <el-form-item label="请选择:"  size="small">
                            <el-upload class="upload-demo" action="#">
                                <el-button size="small" class="uploadButton">选择文件</el-button>
                            </el-upload>
                            <span class="downLoad">点击下载最新模板</span>
                        </el-form-item>
                    </el-form>
                    <p class="tips">温馨提示：请按示例模板导入！最大限制数为500，如果提示有空格，请下载最新模板导入！</p>
                </div>
                <div class="pop1_btm">
                    <div class="pop1_b_inner">
                        <div class="btn btn_blue marrig10" @click="closePop3">确定新增</div>
                        <div class="btn btn_gray marrig10" @click="closePop3">暂不新增</div>
                    </div>
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
                pop2Flag: false,
                pop3Flag: false,
                radio: ""
            }
        },
        mounted(){

        },
        methods: {
            addStock() {
                this.pop3Flag = true
            },
            remove() {
                let _this = this
                this.$cusMessageBox({
                    type:'warn',
                    content:'确认删除该盘点任务吗？',
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
            exceptionHadle() {
                this.pop1Flag = true
            },
            closePop1() {
                this.pop1Flag = false
            },
            addTask() {
                this.pop2Flag = true
            },
            closePop2() {
                this.pop2Flag = false
            },
            closePop3() {
                this.pop3Flag = false
            }
        }
    }
</script>
<style scoped>
    .stock_check_searcher{
        background-color: #ffffff;
        border-radius: 5px;
        margin:15px;
        padding: 15px;
    }
    .stock_check_table{
        height:703px;
        background-color: #ffffff;
        border-radius: 5px;
        margin:15px;
        padding: 15px;
    }
    .uploadButton {
        width: 86px;
        height: 32px;
        background-color: #eceff4;
        border-radius: 3px;
        border: solid 1px #c6c9d3;
        font-family: PingFangSC-Medium;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #333333;
    }
    .tips{
        width: 432px;
        height: 36px;
        font-family: PingFangSC-Regular;
        font-size: 13px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #e51e00;
        margin: 0 auto;
    }
    .downLoad{
        width: 113px;
        height: 20px;
        font-family: PingFangSC-Medium;
        text-decoration: underline;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #5281ff;
        cursor: pointer;
        position: absolute;
        left: 230px;
        top: 0px;
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