<template>
    <div class="value_unit_manage">
        <div class="value_unit_searcher">
            <el-form label-width="100px">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="计价单位名称:" size="small" style="marginBottom:0px;">
                            <el-input  placeholder="请输入计价单位名称" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item style="marginBottom:0px;">
                            <div class="btn btn_blue" @click="search">查询</div>
                            <div class="btn btn_gray" style="margin-left:10px" @click="reset">重置</div>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div class="value_unit_table">
            <div style="float:right; margin-bottom:10px;">
                <div class="btn btn_blue" style="margin-left:10px" @click="addUnit">新增计价单位</div>
            </div>
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable" height="621px">
                    <el-table-column
                            align="center"
                            prop="packageId"
                            label="计价单位名称">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdNum"
                            label="创建人">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdNum"
                            label="创建日期">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            label="操作">
                            <template slot-scope="scope">
                                <el-button type="text" style="color:blue;" @click.stop="edit(scope.row)">编辑</el-button>
                                <el-button type="text" style="color:blue;" @click.stop="remove(scope.row)">删除</el-button>
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
                    <span class="pop1_txt">编辑计价单位</span>
                    <span class="pop1_close iconfont iconicon-guanbi" title="关闭" @click="closePop1"></span>
                </div>
                <div class="pop1_main">
                    <el-form label-width="160px">
                        <el-form-item label="规格计价单位名称:" size="small">
                            <el-input  placeholder="请输入计价单位名称" style="width:320px;"></el-input>
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
                pop1Flag: false,
            }
        },
        mounted(){

        },
        methods: {
            search() {

            },
            reset() {

            },
            addUnit() {
                this.pop1Flag = true
            },
            closePop1() {
                this.pop1Flag = false
            },
            remove() {
                let _this = this
                this.$cusMessageBox({
                    type:'warn',
                    content:'确认删除该计价单位吗？',
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
        }
    }
</script>
<style scoped>
.value_unit_searcher{
    background-color: #ffffff;
    border-radius: 5px;
    margin:15px;
    padding: 15px;
}
.value_unit_table{
    height: 702px;
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