<template>
    <div class="stock_warning">
        <el-card class="stock_warning_searcher">
            <el-form label-width="100px">
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="品类:"  size="small">
                            <el-select placeholder="请选择品类" v-model="value" style="width:230px">
                                <el-option label="品牌一" value="pinpai1"></el-option>
                                <el-option label="品牌二" value="pinpai2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="预警类型:"  size="small">
                            <el-select placeholder="请选择预警类型" v-model="value" style="width:230px">
                                <el-option label="品牌一" value="pinpai1"></el-option>
                                <el-option label="品牌二" value="pinpai2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <div style="float:right;">
                            <div class="btn btn_blue">查询</div>
                            <div class="btn btn_gray" style="margin-left:10px">重置</div>
                        </div>
                    </el-col>
                </el-row>
            </el-form>
        </el-card>
        <el-card class="table" style="padding: 0px">
            <div class="btn btn_blue" style="float:right; margin-bottom:10px;" @click="addWaring">新增</div>
            <div class="table_block">
                <el-table border style="width: 100%" height="590px" :data="initTable">
                    <el-table-column
                            align="center"
                            prop="packageId"
                            label="预警类型">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="packageState"
                            label="品类">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdName"
                            label="预警值">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdNum"
                            label="提醒方式">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="orderNum"
                            label="提醒周期（天）">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="orderState"
                            label="联系人">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="saleStoreName"
                            label="联系电话">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            label="操作"
                            width="300">
                            <template slot-scope="scope">
                                <el-button type="text" style="color:blue;" @click.stop="checkWarning">查看</el-button>
                                <el-button type="text" style="color:blue;" @click.stop="modifyWarning">修改</el-button>
                                <el-button type="text" style="color:blue;" @click.stop="deleteWarning">删除</el-button>
                                <el-button type="text" style="color:blue;" @click.stop="checkWarningGoods">查看预警商品</el-button>
                            </template>
                    </el-table-column>
                </el-table>
                <el-pagination layout="total, sizes, prev, pager, next, jumper">
                </el-pagination>
            </div>
        </el-card>
        <div v-show="pop1Flag">
            <div class="mark"></div>
            <div class="pop1 content" >
                <div class="pop1_head">
                    <span class="pop1_txt">预警设置</span>
                    <span class="pop1_close iconfont iconicon-guanbi" title="关闭" @click="closePop1"></span>
                </div>
                <div class="pop1_main">
                    <el-form label-width="120px">
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="预警类型:"  size="small" required>
                                    <el-checkbox-group v-model="type">
                                        <el-checkbox label="缺货预警"></el-checkbox>
                                        <el-checkbox label="滞销预警"></el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>
                                <span class="tipText" style="margin-left:24px;">当商品库存数量小于</span><el-input size="mini" style="width: 106px;height: 32px;"></el-input><span class="tipText">时，进行预警</span>
                                <el-form-item label="提醒方式:"  size="small" required>
                                    <el-checkbox-group v-model="type">
                                        <el-checkbox label="短信"></el-checkbox>
                                        <el-checkbox label="滞销预警"></el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>
                                <span class="tipText" style="margin-left:25px;"></span><el-input size="mini" style="width: 106px;height: 32px;"></el-input><span class="tipText">天提醒一次</span>
                                <el-form-item label="联系人:"  size="small" required>
                                    <el-select placeholder="请选择联系人" style="width:194px;" v-model="value">
                                        <el-option label="品牌一" value="pinpai1"></el-option>
                                        <el-option label="品牌二" value="pinpai2"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="选择预警品类:"  size="small" required>
                                    <div class="stock_warning_tree">
                                        <el-tree
                                            :data="treeData"
                                            show-checkbox
                                            node-key="id"
                                            >
                                        </el-tree>
                                    </div>
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
            <div class="pop1 content" style="width:1200px;">
                <div class="pop1_head">
                    <span class="pop1_txt">缺货预警</span>
                    <span class="pop1_close iconfont iconicon-guanbi" title="关闭" @click="closePop2"></span>
                </div>
                <div class="pop1_main">
                    <el-form label-width="100px">
                        <el-row>
                            <el-col :span="8">
                                <el-form-item label="商品:"  size="small">
                                    <el-input placeholder="请输入商品"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="商品条码:"  size="small">
                                    <el-input placeholder="请输入商品条码"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="商品类型:"  size="small">
                                    <el-select placeholder="请选择商品类型" v-model="value">
                                        <el-option label="类型一" value="pinpai1"></el-option>
                                        <el-option label="类型二" value="pinpai2"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="品牌:"  size="small">
                                    <el-select placeholder="请选择品牌" v-model="value" style="width:100%">
                                        <el-option label="品牌一" value="pinpai1"></el-option>
                                        <el-option label="品牌二" value="pinpai2"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="16">
                                <el-form-item size="small">
                                    <div class="btn btn_blue">查询</div>
                                    <div class="btn btn_gray" style="margin-left:10px;">重置</div>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                    <el-table border style="width: 100%" :data="initTable">
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
                                prop="saleStoreName"
                                label="商品条码">
                        </el-table-column><el-table-column
                                align="center"
                                prop="saleStoreName"
                                label="零售价">
                        </el-table-column><el-table-column
                                align="center"
                                prop="saleStoreName"
                                label="可售库存">
                        </el-table-column><el-table-column
                                align="center"
                                prop="saleStoreName"
                                label="已锁定库存">
                        </el-table-column><el-table-column
                                align="center"
                                prop="saleStoreName"
                                label="计价单位">
                        </el-table-column>
                    </el-table>
                    <el-pagination layout="total, sizes, prev, pager, next, jumper" style="float:right;">
                    </el-pagination>
                </div>
                <div class="pop1_btm" style="margin-top:20px;">
                    <div class="pop1_b_inner">
                        <div class="btn btn_blue marrig10" @click="closePop2">确定</div>
                        <div class="btn btn_gray marrig10" @click="closePop2">取消</div>
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
                treeData: [
                    {
                        id: 1,
                        label: '一级 1',
                        children: [
                            {
                                id: 4,
                                label: '二级 1-1',
                                children: [
                                    {
                                        id: 9,
                                        label: '三级 1-1-1'
                                    }, {
                                        id: 10,
                                        label: '三级 1-1-2'
                                    }
                                ]
                            } 
                        ]
                    }
                ],
                pop1Flag:false,
                pop2Flag:false,
                type:"",
                value:""
            }
        },
        mounted(){

        },
        methods:{
            checkWarning() {
                this.pop1Flag = true;
            },
            deleteWarning() {
                let _this = this
                this.$cusMessageBox({
                    type:'warn',
                    content:'确认删除该预警吗？',
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
            addWaring() {
                this.pop1Flag = true;
            },
            modifyWarning() {
                this.pop1Flag = true;
            },
            closePop1() {
                this.pop1Flag = false;
            },
            checkWarningGoods() {
                this.pop2Flag = true;
            },
            closePop2() {
                this.pop2Flag = false;
            }
        }
    }
</script>
<style scoped>
    .stock_warning_searcher{
        width: calc(100% - 30px);
        background-color: #ffffff;
        border-radius: 5px;
        margin:15px auto;
    }
    .table{
        width: calc(100% - 30px);
        background-color: #ffffff;
        border-radius: 5px;
        margin:0 auto;
    }
    .stock_warning_tree{
        width: 378px;
        height: 481px;
        overflow: auto;
        position: relative;
        top: 30px;
        left: -123px;
    }
    .tipText{
        font-family: PingFangSC-Regular;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #333333;
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