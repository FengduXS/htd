<template>
    <div class="sale_channel_manage">
        <!-- 查询表单 -->
        <div class="sale_channel_manage_searcher">
            <el-form label-width="100px">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="销售渠道名称:" size="small" style="margin-bottom: 0px;">
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
        <div class="sale_channel_manage_table">
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable" height="668px">
                    <el-table-column
                        align="center"
                        prop="packageId"
                        label="渠道编码">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="packageState"
                        label="销售渠道名称">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="kdName"
                        label="渠道类型">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="kdNum"
                        label="渠道模式">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="kdName"
                        label="启用状态">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="kdNum"
                        label="渠道说明">
                    </el-table-column>
                </el-table>
                <el-pagination layout="total, sizes, prev, pager, next, jumper"></el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                searchParam: {},//查询参数
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
            }
        },
        mounted(){

        },
        methods: {
            //查询数据
            search() {

            },
            //重置查询条件
            reset() {
            
            }
        },
    }
</script>
<style scoped>
.sale_channel_manage_searcher{
    background-color: #ffffff;
    border-radius: 5px;
    margin:15px;
    padding: 15px;
}
.sale_channel_manage_table{
    height: 700px;
    background-color: #ffffff;
    border-radius: 5px;
    margin: 15px;
    padding: 15px;
}
</style>