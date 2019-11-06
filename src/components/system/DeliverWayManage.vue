<template>
    <div class="deliver_manage">
        <!-- 查询表单 -->
        <div class="deliver_manage_searcher">
            <el-form label-width="100px">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="配送方式名称:" size="small" style="margin-bottom: 0px;">
                            <el-input  placeholder="请输入销售渠道名称" v-model="searchParam.name" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="启用状态:"  size="small" style="margin-bottom: 0px;">
                            <el-select placeholder="请选择启用状态" v-model="searchParam.status" style="width:230px">
                                <el-option label="启用" value="1"></el-option>
                                <el-option label="禁用" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <div style="float:right;">
                        <div class="btn btn_blue" @click="search">查询</div>
                        <div class="btn btn_gray" style="margin-left:10px" @click="reset">重置</div>
                    </div>
                </el-row>
            </el-form>
        </div>
        <!-- 数据表格 -->
        <div class="deliver_manage_table">
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable" height="668px">
                    <el-table-column
                        align="center"
                        prop="packageId"
                        label="配送方式编码">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="packageState"
                        label="配送方式名称">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="kdName"
                        label="渠道类型">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="kdNum"
                        label="启用状态">
                    </el-table-column>
                    <el-table-column align="center" label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" @click.stop="edit(scope.row)">编辑</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination layout="total, sizes, prev, pager, next, jumper"></el-pagination>
            </div>
        </div>
        <!-- 编辑弹窗 -->
        <div v-show="editFlag">
            <div class="mark"></div>
            <div class="pop1 content">
                <div class="pop1_head">
                    <span class="pop1_txt">修改配送方式</span>
                    <span class="pop1_close iconfont iconicon-guanbi" title="关闭" @click="closeEdit"></span>
                </div>
                <div class="pop1_main" style="padding: 20px 20px;">
                    <el-form label-width="120px" :rules="rule" ref="editParam" :model="editParam">
                        <el-form-item label="配送方式名称:" size="small" prop="name">
                            <el-input  placeholder="请输入配送方式名称"  v-model="editParam.name" style="width:320px;"></el-input>
                        </el-form-item>
                        <el-form-item label="是否启用:" size="small" prop="status">
                            <el-radio-group v-model="editParam.status">
                                <el-radio :label="0">启用</el-radio>
                                <el-radio :label="1">禁用</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="备注:" size="small" prop="businessLicenceNo">
                            <el-input  placeholder="请输入备注"  v-model="editParam.remark" style="width:320px;" type="textarea" :rows="3"></el-input>
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
                searchParam: { //查询条件
                serviceName:"",//配送方式名称
                status:"",//启用状态
                pageSize: 5,
                currentPage:1,

                },
                editFlag: false,//弹窗控制
                initTable:[ // 表格数据
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
                editParam: {//编辑弹窗参数

                },
                rule: {
                    name: [
                        { required: true, message: '请输入配送方式名称', trigger: 'blur' }
                    ],
                    status:[
                        { required: true, message: '请选择启用状态', trigger: 'change' }
                    ]
                }
            }
        },
        mounted(){

        },
        methods: {
            search() {

            },
            reset() {
            
            },
            edit(data) {
                this.editFlag = true
            },
            confirmEdit() {
                this.closeEdit()
            },
            closeEdit() {
                this.editFlag = false
            },
        },
    }
</script>
<style scoped>
.deliver_manage_searcher{
    background-color: #ffffff;
    border-radius: 5px;
    margin:15px;
    padding: 15px;
}
.deliver_manage_table{
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
    width: 500px;
}
</style>