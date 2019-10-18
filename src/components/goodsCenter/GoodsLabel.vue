<template>
    <div class="goods_label">
        <el-card class="goods_label_searcher">
            <el-form label-width="100px">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="标签名称:" size="small">
                            <el-input  placeholder="请输入标签名称" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="标签位置:"  size="small">
                            <el-select placeholder="请选择标签位置" v-model="value" style="width:230px">
                                <el-option label="类型一" value="leixing1"></el-option>
                                <el-option label="类型二" value="leixing2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="状态:"  size="small">
                            <el-select placeholder="请选择状态" v-model="value" style="width:230px">
                                <el-option label="类型一" value="leixing1"></el-option>
                                <el-option label="类型二" value="leixing2"></el-option>
                            </el-select>
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
        </el-card>
        <el-card class="goods_label_table" style="padding: 0px">
            <div style="float:right; margin-bottom:10px;">
                <div class="btn btn_blue" style="margin-left:10px" @click="addLabel">新增标签</div>
            </div>
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable" height="600px">
                    <el-table-column
                            align="center"
                            prop="packageId"
                            label="标签编码">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="packageState"
                            label="标签名称">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdName"
                            label="标签图片">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdNum"
                            label="显示位置">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="packageId"
                            label="状态">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            label="操作">
                            <template slot-scope="scope">
                                <el-button type="text" style="color:blue;" @click.stop="remove(scope.row)">删除</el-button>
                                <el-button type="text" style="color:blue;" @click.stop="edit(scope.row)">编辑</el-button>
                                <el-button type="text" style="color:blue;" @click.stop="bind(scope.row)">绑定商品</el-button>
                            </template>
                    </el-table-column>
                </el-table>
                <el-pagination layout="total, sizes, prev, pager, next, jumper">
                </el-pagination>
            </div>
        </el-card>
        <div v-show="pop1Flag">
            <div class="mark"></div>
            <div class="pop1 content">
                <div class="pop1_head">
                    <span class="pop1_txt">编辑标签</span>
                    <span class="pop1_close iconfont iconicon-guanbi" title="关闭" @click="closePop1"></span>
                </div>
                <div class="pop1_main">
                    <el-form label-width="100px">
                        <el-form-item label="标签名称:" size="small">
                            <el-input  placeholder="请输入标签名称"></el-input>
                        </el-form-item>
                        <el-form-item label="标签位置:"  size="small">
                            <el-select placeholder="请选择标签位置" v-model="value">
                                <el-option label="类型一" value="leixing1"></el-option>
                                <el-option label="类型二" value="leixing2"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="标签图片:"  size="small">
                            <p>建议尺寸：50 x 50 像素，不超过500K，支持JPG、JPEG、PNG格式图片</p>
                        </el-form-item>
                        <el-form-item label="有效期:" size="small">
                            <el-date-picker
                                v-model="value1"
                                type="datetimerange"
                                range-separator="-"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="备注:"  size="small">
                            <el-input  placeholder="请输入备注" type="textarea" :rows="3"></el-input>
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
            <div class="pop1 content"  style="width:805px;">
                <div class="pop1_head">
                    <span class="pop1_txt">绑定商品</span>
                    <span class="pop1_close iconfont iconicon-guanbi" title="关闭" @click="closePop2"></span>
                </div>
                <div class="pop1_main" style="height:490px;width:100%;">
                    <el-form label-width="75px">
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="商品:" size="small">
                                    <el-input  placeholder="请输入商品名称或者编码" style="width:264px;"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="商品条码:"  size="small">
                                    <el-input  placeholder="请输入商品条码" style="width:264px;"></el-input>
                                </el-form-item>
                            </el-col>
                        <el-row>
                        </el-row>
                            <el-col :span="12">
                                <el-form-item label="品类:"  size="small">
                                    <el-select placeholder="调拨日期" v-model="value" style="width:264px;">
                                        <el-option label="类型一" value="leixing1"></el-option>
                                        <el-option label="类型二" value="leixing2"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="品牌:"  size="small">
                                    <el-select placeholder="调拨日期" v-model="value" style="width:264px;">
                                        <el-option label="类型一" value="leixing1"></el-option>
                                        <el-option label="类型二" value="leixing2"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                    <div style="width:126px;height:32px;margin:0px auto 15px auto;">
                        <div class="btn btn_blue">查询</div>
                        <div class="btn btn_blue" style="margin-left:10px">重置</div>
                    </div>
                    <div style="border-top: #c6c9d3 1px dashed; overflow: hidden; height: 1px;margin-bottom:15px;"></div>
                    <el-table border style="width: 100%" :data="initTable" height="300px">
                        <el-table-column
                                align="center"
                                type="selection"
                                width="55">
                        </el-table-column>
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
                    </el-table>
                    <el-pagination layout="total, sizes, prev, pager, next, jumper" style="float:right;">
                    </el-pagination>
                </div>
                <div class="pop1_btm">
                    <div class="pop1_b_inner">
                        <div class="btn btn_blue marrig10" @click="bindConfirm">确定</div>
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
                value1: [],
                pop1Flag: false,
                pop2Flag: false,
            }
        },
        mounted(){

        },
        methods: {
            addLabel() {
                this.pop1Flag = true
            },
            closePop1() {
                this.pop1Flag = false
            },
            remove() {
                let _this = this
                this.$cusMessageBox({
                    type:'warn',
                    content:'确认删除该标签吗？',
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
            edit() {
                this.pop1Flag = true
            },
            bind(data) {
                this.pop2Flag = true
            },
            bindConfirm() {
                this.closePop2()
            },
            closePop2() {
                this.pop2Flag = false
            }
        }
    }
</script>
<style scoped>
.goods_label_searcher{
    width: calc(100% - 30px);
    background-color: #ffffff;
    border-radius: 5px;
    margin:15px auto;
}
.goods_label_table{
    width: calc(100% - 30px);
    background-color: #ffffff;
    border-radius: 5px;
    margin: 0 auto;
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