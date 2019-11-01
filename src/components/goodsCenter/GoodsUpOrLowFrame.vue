<template>
    <div class="goods_uporlow">
        <div class="goods_uporlow_searcher">
            <el-form label-width="100px">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="商品:" size="small">
                            <el-input  placeholder="请输入公司名称" style="width:230px" v-model="searchParam.companyName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="商品条码:"  size="small">
                            <el-input  placeholder="请输入商品条码" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="商品类型:" size="small">
                            <el-select placeholder="请选择商品类型" v-model="searchParam.status" style="width:230px">
                                <el-option label="启用" value="1"></el-option>
                                <el-option label="禁用" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="品牌:" size="small">
                            <el-select placeholder="请选择品牌" v-model="searchParam.status" style="width:230px">
                                <el-option label="海尔" value="1"></el-option>
                                <el-option label="格力" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="品类:"  size="small" style="marginBottom:0px">
                            <el-cascader v-model="searchParam.type" :options="options" style="width:230px" placeholder="请选择品类">
                            </el-cascader>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="是否上架:" size="small" style="marginBottom:0px">
                            <el-select placeholder="请选择是否上架" v-model="searchParam.isUp" style="width:230px">
                                <el-option label="是" :value="1"></el-option>
                                <el-option label="否" :value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item style="marginBottom:0px">
                            <div class="btn btn_blue" @click="search">查询</div>
                            <div class="btn btn_gray" style="margin-left:10px" @click="reset">重置</div>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div class="goods_uporlow_table">
            <div style="float:right; margin-bottom:10px;">
                <div class="btn btn_blue" @click="upGoodsAll">批量上架</div>
                <div class="btn btn_blue" style="margin-left:10px" @click="downGoodsAll" >批量下架</div>
            </div>
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable" height="570px">
                    <el-table-column
                            align="center"
                            type="selection"
                            width="55px">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="packageState"
                            label="商品图片">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="packageId"
                            label="商品编码">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="saleStoreName"
                            label="商品名称"
                            width="127px">
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
                            prop="deliverGoodsStore"
                            label="规格">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="address"
                            label="商品条码"
                            width="127px">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="deliverGoodsStore"
                            label="商品类型">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="deliverGoodsStore"
                            label="库存">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="deliverGoodsStore"
                            label="计价单位">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="isUp"
                            label="是否上架">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="deliverGoodsStore"
                            label="零售价">
                    </el-table-column>
                    <el-table-column align="center" label="操作" width="120px">
                            <template slot-scope="scope">
                                <el-button type="text" @click.stop="toTop(scope.row)" v-if="scope.row.isUpCode == 1">置顶</el-button>
                                <el-button type="text" @click.stop="downGoods(scope.row)" v-if="scope.row.isUpCode == 1">下架</el-button>
                                <el-button type="text" @click.stop="upGoods(scope.row)" v-if="scope.row.isUpCode == 0">上架</el-button>
                            </template>
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
                searchParam:{},
                initTable:[
                    {
                        packageId: '张三',
                        packageState:'10001',
                        kdName:'男',
                        kdNum:'启用',
                        orderNum:'dd7018',
                        orderState:'公司',
                        saleStoreName:'15137341976',
                        deliverGoodsStore:'张三',
                        shr:'张三',
                        address:'2019-03-03',
                        isUp: "是",
                        isUpCode: 1,
                    },
                    {
                        packageId: '张三',
                        packageState:'10001',
                        kdName:'男',
                        kdNum:'启用',
                        orderNum:'dd7018',
                        orderState:'公司',
                        saleStoreName:'15137341976',
                        deliverGoodsStore:'张三',
                        shr:'张三',
                        address:'2019-03-03',
                        isUp: "否",
                        isUpCode: 0,
                    }
                ],
                options: [
                    {
                        value: 'zhinan',
                        label: '指南',
                        children: [
                            {
                                value: 'shejiyuanze',
                                label: '设计原则',
                            }
                        ]
                    }
                ],
            }
        },
        mounted(){

        },
        methods: {
            search() {

            },
            reset() {

            },
            downGoodsAll() {
                let _this = this
                this.$cusMessageBox({
                    type:'warn',
                    content:'确认下架该商品吗？',
                    confirmButtonText: '确定', 
                    cancelButtonText: '取消',
                    showCancelButton: true,
                    confirmFn() {
                        _this.$message({ message: '下架成功', type: 'success', duration: 800 })
                    },
                    cancelFn() {
                    }
                })
            },
            upGoodsAll() {
                let _this = this
                this.$cusMessageBox({
                    type:'warn',
                    content:'确认上架该商品吗？',
                    confirmButtonText: '确定', 
                    cancelButtonText: '取消',
                    showCancelButton: true,
                    confirmFn() {
                        _this.$message({ message: '上架成功', type: 'success', duration: 800 })
                    },
                    cancelFn() {
                    }
                })
            },
            toTop(data) {
                let _this = this
                this.$cusMessageBox({
                    type:'warn',
                    content:'确认置顶该商品吗？',
                    confirmButtonText: '确定', 
                    cancelButtonText: '取消',
                    showCancelButton: true,
                    confirmFn() {
                        _this.$message({ message: '置顶成功', type: 'success', duration: 800 })
                    },
                    cancelFn() {
                    }
                })
            },
            downGoods(data) {
                let _this = this
                this.$cusMessageBox({
                    type:'warn',
                    content:'确认下架该商品吗？',
                    confirmButtonText: '确定', 
                    cancelButtonText: '取消',
                    showCancelButton: true,
                    confirmFn() {
                        _this.$message({ message: '下架成功', type: 'success', duration: 800 })
                    },
                    cancelFn() {
                    }
                })
            },
            upGoods(data) {
                let _this = this
                this.$cusMessageBox({
                    type:'warn',
                    content:'确认上架该商品吗？',
                    confirmButtonText: '确定', 
                    cancelButtonText: '取消',
                    showCancelButton: true,
                    confirmFn() {
                        _this.$message({ message: '上架成功', type: 'success', duration: 800 })
                    },
                    cancelFn() {
                    }
                })
            },
        }
    }
</script>
<style scoped>
.goods_uporlow_searcher{
    background-color: #ffffff;
    border-radius: 5px;
    margin:15px;
    padding: 15px;
}
.goods_uporlow_table{
    height: 651px;
    background-color: #ffffff;
    border-radius: 5px;
    margin:15px; 
    padding: 15px;
}
</style>