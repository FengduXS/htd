<template>
    <div class="stock_list">
        <el-card class="stock_list_searcher">
            <el-form label-width="80px">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="用户账号:" size="small">
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
                        <el-form-item label="品类:"  size="small">
                            <el-select placeholder="请选择品类" v-model="value" style="width:230px">
                                <el-option label="品类一" value="pinlei1"></el-option>
                                <el-option label="品类二" value="pinlei2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="品牌:"  size="small">
                            <el-select placeholder="请选择品牌" v-model="value" style="width:230px">
                                <el-option label="品牌一" value="pinpai1"></el-option>
                                <el-option label="品牌二" value="pinpai2"></el-option>
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
        <el-card class="table" style="padding: 0px">
            <div style="float:right; margin-bottom:10px;">
                <div class="btn btn_blue" @click="addStocks">批量补货</div>
                <div class="btn btn_blue" style=" margin-left:10px">库存导出</div>
            </div>
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable" height="580px">
                    <el-table-column
                            align="center"
                            prop="packageId"
                            label="商品编码">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="packageState"
                            label="商品名称">
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
                            label="规格编码">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="saleStoreName"
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
                            prop="tel"
                            label="可售库存">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="address"
                            label="已锁定库存">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="uint"
                            label="计价单位">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" style="color:blue;" @click.stop="addStock">补货</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination layout="total, sizes, prev, pager, next, jumper">
                </el-pagination>
            </div>
            <el-button type="text" @click="open">点击打开 Message Box</el-button>
        </el-card>
        <div v-show="pop1Flag">
            <div class="mark"></div>
            <div class="pop1 content"  style="width:805px;height:510px;">
                <div class="pop1_head">
                    <span class="pop1_txt">商品补货</span>
                    <span class="pop1_close iconfont iconicon-guanbi" title="关闭" @click="closePop1"></span>
                </div>
                <div class="pop1_main">
                    <p class="detail">
                        <span>商品编码:20000001</span> 
                        <span>商品名称：格力变频空调1K2KF01 </span>
                        <span>品类：家用电器 > 大家电 > 电视 </span>
                        <span>品牌：美的</span>
                    </p>
                    <el-table border style="width:765px;margin:auto;"  :data="initTable">
                        <el-table-column
                                align="center"
                                prop="packageId"
                                label="规格">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="packageState"
                                label="规格编码">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="kdName"
                                label="商品条码">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="kdNum"
                                label="零售价">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="orderNum"
                                label="已锁定库存">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="orderState"
                                label="采购价">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="saleStoreName"
                                label="限价">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="deliverGoodsStore"
                                label="计价单位">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="shr"
                                label="补货数量">
                        </el-table-column>
                    </el-table>
                    <el-form label-width="80px" style="margin:10px 20px">
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="计价单位:"  size="small">
                                    <el-select placeholder="请选择计价单位" style="width:100%" v-model="value">
                                        <el-option label="品牌一" value="pinpai1"></el-option>
                                        <el-option label="品牌二" value="pinpai2"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="供应商:"  size="small">
                                    <el-select placeholder="请选择供应商"  style="width:100%" v-model="value">
                                        <el-option label="品牌一" value="pinpai1"></el-option>
                                        <el-option label="品牌二" value="pinpai2"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="进项税率:"  size="small">
                                    <el-select placeholder="请选择进项税率"  style="width:100%" v-model="value">
                                        <el-option label="品牌一" value="pinpai1"></el-option>
                                        <el-option label="品牌二" value="pinpai2"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="销项税率:"  size="small">
                                    <el-select placeholder="请选择销项税率"  style="width:100%" v-model="value">
                                        <el-option label="品牌一" value="pinpai1"></el-option>
                                        <el-option label="品牌二" value="pinpai2"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
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
            <div class="pop1 content"  style="width:472px;height:288px;">
                <div class="pop1_head">
                    <span class="pop1_txt">批量补货</span>
                    <span class="pop1_close iconfont iconicon-guanbi" title="关闭" @click="closePop2"></span>
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
                        <div class="btn btn_blue marrig10" @click="closePop2">确定新增</div>
                        <div class="btn btn_gray marrig10" @click="closePop2">暂不新增</div>
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
                pop2Flag:false,
                value:""
            }
        },
        mounted(){
            
        },
        methods:{
            addStock(){
                this.pop1Flag = true;
            },
            closePop1() {
                this.pop1Flag = false;
            },
            addStocks(){
                this.pop2Flag = true;
            },
            closePop2() {
                this.pop2Flag = false;
            },
            open() {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                })
            }
        }
    }
</script>
<style scoped>
    .stock_list_searcher{
        width: calc(100% - 30px);
        background-color: #ffffff;
        border-radius: 5px;
        margin:15px auto;
    }
    .table{
        width: calc(100% - 30px);
        background-color: #ffffff;
        border-radius: 5px;
        margin:auto;
    }
    .detail {
        height: 20px;
        font-family: PingFangSC-Semibold;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #333333;
        display: flex;
        justify-content: space-between;
        margin: 15px 20px;
    }
    .choose{
        margin-left: 20px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #333333;
    }
    .tips{
        width: 432px;
        height: 36px;
        margin: auto;
        font-family: PingFangSC-Regular;
        font-size: 13px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #e51e00;
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