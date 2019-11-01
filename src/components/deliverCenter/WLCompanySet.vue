<template>
    <div class="wl_set">
        <div class="wl_set_searcher">
            <el-form label-width="100px">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="订单编号:" size="small" style="marginBottom: 0px;">
                            <el-input  placeholder="请输入商品名称或者编码" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="18">
                        <div style="float:right;">
                            <div class="btn btn_blue">查询</div>
                            <div class="btn btn_gray" style="margin-left:10px">重置</div>
                        </div>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div class="wl_set_table">
            <div style="float:right; margin-bottom:10px;">
                <div class="btn btn_blue" @click="removeAll">批量删除</div>
                <div class="btn btn_blue" style="margin-left:10px" @click="add">新增</div>
            </div>
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable" height="600px">
                    <el-table-column
                        type="selection"
                        width="55">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="packageState"
                            label="物流公司名称">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdName"
                            label="状态">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdNum"
                            label="联系人">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="packageId"
                            label="联系电话">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="packageState"
                            label="联系地址">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        label="操作"
                        width="150px">
                        <template slot-scope="scope">
                            <el-button type="text" @click.stop="edit(scope.row)">编辑</el-button>
                            <el-button type="text" @click.stop="remove(scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination layout="total, sizes, prev, pager, next, jumper">
                </el-pagination>
            </div>
        </div>
        <div v-show="editFlag">
            <div class="mark"></div>
            <div class="pop1 content">
                <div class="pop1_head">
                    <span class="pop1_txt">{{popTitle}}</span>
                    <span class="pop1_close iconfont iconicon-guanbi" title="关闭" @click="closeEdit"></span>
                </div>
                <div class="pop1_main" style="position: relative;">
                    <div style="margin: 0px auto 20px auto;width: 300px;"> 
                        <el-radio v-model="radio" label="1">系统配送商</el-radio>
                        <el-radio v-model="radio" label="2">自定义配送商</el-radio>
                    </div>
                    <el-form label-width="120px" :rules="rule" ref="editParam" :model="editParam">
                        <el-form-item label="物流公司名称:" prop="name">
                            <el-select placeholder="请选择物流公司" v-model="editParam.company" style="width:320px;">
                                <el-option label="总部" value="pinlei2"></el-option>
                                <el-option label="公司" value="pinlei3"></el-option>
                                <el-option label="商家" value="pinlei4"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="联系人:" prop="type">
                            <el-input  placeholder="请输入联系人" style="width:320px;"></el-input>
                        </el-form-item>
                        <el-form-item label="联系电话:" prop="desc">
                            <el-input  placeholder="请输入联系电话" style="width:320px;"></el-input>
                        </el-form-item>
                        <el-form-item label="联系地址:" size="small">
                            <el-col :span="5">
                                <el-select placeholder="请选择归属公司" v-model="editParam.company">
                                    <el-option label="全部" value="1"></el-option>
                                    <el-option label="商家" value="pinlei4"></el-option>
                                </el-select>
                            </el-col>
                            <el-col class="line" :span="1">-</el-col>
                            <el-col :span="5">
                                <el-select placeholder="请选择归属公司" v-model="editParam.company">
                                    <el-option label="全部" value="1"></el-option>
                                    <el-option label="商家" value="pinlei4"></el-option>
                                </el-select>
                            </el-col>
                            <el-col class="line" :span="1">-</el-col>
                            <el-col :span="5">
                                <el-select placeholder="请选择归属公司" v-model="editParam.company">
                                    <el-option label="全部" value="1"></el-option>
                                    <el-option label="商家" value="pinlei4"></el-option>
                                </el-select>
                            </el-col>
                            <el-col class="line" :span="1">-</el-col>
                            <el-col :span="5">
                                <el-select placeholder="请选择归属公司" v-model="editParam.company">
                                    <el-option label="全部" value="1"></el-option>
                                    <el-option label="商家" value="pinlei4"></el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="23">
                                <el-input  placeholder="请输入详细地址" style="margin-top:15px;"></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="状态:" prop="statu">
                            <el-radio-group v-model="editParam.status" style="width:320px;">
                                <el-radio label="启用"></el-radio>
                                <el-radio label="禁用"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="pop1_btm">
                    <div class="pop1_b_inner">
                        <div class="btn btn_blue marrig10" @click="confirmEdit">确定</div>
                        <div class="btn btn_gray marrig10" @click="closeEdit">取消</div>
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
                editFlag: false,
                radio: "",
                initTable: [
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
                popTitle: "",
                editParam: {},
                rule:{

                }
            }
        },
        mounted(){

        },
        methods:{
            add() {
                this.editFlag = true
            },
            remove(data) {
                let _this = this
                this.$cusMessageBox({
                    type:'warn',
                    content:'确认删除该物流公司吗？',
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
            edit(data) {
                this.editFlag = true
            },
            removeAll() {
                let _this = this
                this.$cusMessageBox({
                    type:'warn',
                    content:'确认删除物流公司吗？',
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
            confirmEdit(){
                this.editFlag = false
            },
            closeEdit() {
                this.editFlag = false
            }   
        }
    }
</script>
<style scoped>
    .wl_set_searcher{
        background-color: #ffffff;
        border-radius: 5px;
        margin:15px;
        padding: 15px;
    }
    .wl_set_table{
        height: 703px;;
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