<template>
    <div class="business_manage">
        <el-card class="business_manage_searcher">
            <el-form label-width="100px">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="商家名称:" size="small">
                            <el-input  placeholder="请输入商家名称"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="商家类型:"  size="small">
                            <el-select placeholder="请选择商家类型" v-model="searchParam.type">
                                <el-option label="全部" value="1"></el-option>
                                <el-option label="总部" value="pinlei2"></el-option>
                                <el-option label="公司" value="pinlei3"></el-option>
                                <el-option label="商家" value="pinlei4"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="启用状态:" size="small">
                            <el-select placeholder="请选择启用状态" v-model="searchParam.status">
                                <el-option label="全部" value="1"></el-option>
                                <el-option label="启用" value="pinlei2"></el-option>
                                <el-option label="禁用" value="pinlei3"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <div style="float:right;">
                            <div class="btn btn_blue" @click="search">查询</div>
                            <div class="btn btn_gray" style="margin-left:10px" @click="reset">重置</div>
                        </div>
                    </el-col>
                </el-row>
            </el-form>
        </el-card>
        <el-card class="business_manage_table">
            <div class="btn btn_blue" style="float:right;margin-bottom:10px;" @click="addBussiness">添加商家</div>
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable" height="412px">
                    <el-table-column
                            align="center"
                            prop="packageState"
                            label="商家编码">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="packageId"
                            label="商家名称">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="saleStoreName"
                            label="商家类型">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdName"
                            label="归属公司">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdNum"
                            label="启用状态">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="orderNum"
                            label="联系人">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="orderState"
                            label="联系电话">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="address"
                            label="创建时间"
                            width="127px">
                    </el-table-column>
                    <el-table-column align="center" label="操作" width="130">
                            <template slot-scope="scope">
                                <el-button type="text" @click.stop="check">查看</el-button>
                                <el-button type="text" @click.stop="edit">编辑</el-button>
                            </template>
                    </el-table-column>
                </el-table>
                <el-pagination layout="total, sizes, prev, pager, next, jumper">
                </el-pagination>
            </div>
        </el-card>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                searchParam:{
                    name:"",
                    type:"",
                    status:""
                },
                initTable:[
                    {
                        packageId: '张三',
                        packageState:'10001',
                        kdName:'河南公司',
                        kdNum:'启用',
                        orderNum:'张三',
                        orderState:'15137341976',
                        saleStoreName:'全部商家',
                        deliverGoodsStore:'张三',
                        address:'2019-03-03',
                    }
                ],
            }
        },
        mounted(){

        },
        methods:{
            search() {

            },
            reset() {
                this.searchParam.name = ""
                this.searchParam.type = ""
                this.searchParam.status =""
            },
            addBussiness() {

            },
            check() {

            },
            edit() {

            },
        }
    }
</script>
<style scoped>
    .business_manage_searcher{
        width: calc(100% - 30px);
        background-color: #ffffff;
        border-radius: 5px;
        margin:15px auto;
        padding: 0px;
    }
    .business_manage_table{
        width: calc(100% - 30px);
        background-color: #ffffff;
        border-radius: 5px;
        margin:0 auto; 
        padding: 0px;
    }
</style>