<template>
    <div class="stock_warning">
        <el-card class="search" style="padding: 0px">
            <el-form label-width="100px">
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="品类:"  size="small">
                            <el-select placeholder="请选择品类" style="width:194px;" v-model="value">
                                <el-option label="品牌一" value="pinpai1"></el-option>
                                <el-option label="品牌二" value="pinpai2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="预警类型:"  size="small">
                            <el-select placeholder="请选择预警类型" style="width:194px;" v-model="value">
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
                <el-table border style="width: 100%" height="412px" :data="initTable">
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
                                <el-button type="text" style="color:blue;">查看</el-button>
                                <el-button type="text" style="color:blue;">修改</el-button>
                                <el-button type="text" style="color:blue;" @click.stop="deleteWarning">删除</el-button>
                                <el-button type="text" style="color:blue;">查看预警商品</el-button>
                            </template>
                    </el-table-column>
                </el-table>
                <el-pagination layout="total, sizes, prev, pager, next, jumper">
                </el-pagination>
            </div>
        </el-card>
        <div class="pop1" v-show="pop1Flag">
            <div class="pop1_head">
                <span class="pop1_txt">预警设置</span>
                <span class="pop1_close iconfont iconicon-guanbi" title="关闭" @click="closePop1"></span>
            </div>
            <div class="pop1_main">
                <div class="warningContent">
                    <div class="formContent">
                        <el-form label-width="100px">
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
                        </el-form>
                    </div>
                    <div class="formContent">
                    </div>
                </div>
            </div>
            <div class="pop1_btm">
                <div class="pop1_b_inner">
                    <div class="btn btn_blue marrig10" @click="closePop1">确定</div>
                    <div class="btn btn_gray marrig10" @click="closePop1">取消</div>
                </div>
            </div>
        </div>
        <div class="pop2" v-show="pop2Flag">
            <div class="pop2_head">
                <span class="pop2_close iconfont iconicon-guanbi" title="关闭" @click="closePop2"></span>
            </div>
            <div class="pop2_main">
                <div class="pop2_inicon"><img src="../../assets/images/icon-warn.png"/></div>
                <div class="pop2_intxt">是否确定删除此预警信息？</div>
            </div>
            <div class="pop2_btm">
                <div class="pop2_b_inner">
                    <div class="btn btn_blue marrig10" @click="closePop2">确定</div>
                    <div class="btn btn_gray marrig10" @click="closePop2">取消</div>
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
                type:"",
                value:""
            }
        },
        mounted(){

        },
        methods:{
            deleteWarning() {
                this.pop2Flag = true
            },
            closePop2() {
                this.pop2Flag = false;
            },
            addWaring() {
                this.pop1Flag = true;
            },
            closePop1() {
                this.pop1Flag = false;
            },
        }
    }
</script>
<style scoped>
    .search{
        width: 1136px;
        height: 109px;
        background-color: #ffffff;
        border-radius: 5px;
        margin:auto;
    }
    .table{
        width: 1136px;
        background-color: #ffffff;
        border-radius: 5px;
        margin:auto;
    }
    .warningContent{
        display: flex;
        justify-content: space-between;
    }
    .formContent{
        width: 50%;
        height: 100%;
    }
    .tipText{
        font-family: PingFangSC-Regular;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #333333;
    }
</style>