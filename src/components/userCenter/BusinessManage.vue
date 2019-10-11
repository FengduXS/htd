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
        <div class="pop1" v-show="editFlag">
            <div class="pop1_head">
                <span class="pop1_txt">{{popTitle}}</span>
                <span class="pop1_close iconfont iconicon-guanbi" title="关闭" @click="closeEdit"></span>
            </div>
            <div class="pop1_main" style="position: relative;">
                <el-form label-width="120px">
                    <el-form-item label="商家名称:" size="small">
                        <el-input  placeholder="请输入商家名称"></el-input>
                    </el-form-item>
                    <el-form-item label="商家类型:" size="small">
                        <el-radio-group v-model="editParam.type">
                            <el-radio label="自营商家"></el-radio>
                            <el-radio label="外部商家"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="联系人:" size="small">
                        <el-input  placeholder="请输入联系人"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话:" size="small">
                        <el-input  placeholder="请输入联系电话"></el-input>
                    </el-form-item>
                    <el-form-item label="联系地址:" size="small">
                        <el-input  placeholder="请输入详细地址"></el-input>
                    </el-form-item>
                    <el-form-item label="归属公司:" size="small">
                        <el-select placeholder="请选择归属公司" v-model="editParam.company" style="width:100%">
                            <el-option label="全部" value="1"></el-option>
                            <el-option label="总部" value="pinlei2"></el-option>
                            <el-option label="公司" value="pinlei3"></el-option>
                            <el-option label="商家" value="pinlei4"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="启用状态:" size="small">
                        <el-radio-group v-model="editParam.status">
                            <el-radio label="启用"></el-radio>
                            <el-radio label="禁用"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="销售渠道:" size="small">
                        <el-checkbox-group v-model="editParam.saleChannel">
                            <el-checkbox label="B2C商城"  value="1"></el-checkbox>
                            <el-checkbox label="线下销售"  value="2"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="法人姓名:" size="small">
                        <el-input  placeholder="请输入法人姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="法人电话:" size="small">
                        <el-input  placeholder="请输入法人电话"></el-input>
                    </el-form-item>
                    <el-form-item label="法人身份证号:" size="small">
                        <el-input  placeholder="请输入法人身份证号"></el-input>
                    </el-form-item>
                    <el-form-item label="企业名称:" size="small">
                        <el-input  placeholder="请输入企业名称"></el-input>
                    </el-form-item>
                    <el-form-item label="注册地址:" size="small">
                        <el-input  placeholder="请输入详细地址"></el-input>
                    </el-form-item>
                    <el-form-item label="营业执照号:" size="small">
                        <el-input  placeholder="请输入营业执照号"></el-input>
                    </el-form-item>
                    <el-form-item label="营业执照:" size="small">
                        <el-upload action="#" list-type="picture-card" :auto-upload="false">
                        </el-upload>
                    </el-form-item>
                    <p class="uploadTip">建议尺寸：最多可添加1张图片，不超过10M，支持JPG、JPEG、PNG格式图片</p>
                    <el-form-item label="备注:" size="small">
                        <el-input  placeholder="请输入备注" type="textarea"></el-input>
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
                popTitle:"",
                editFlag: false,
                editParam: {
                    saleChannel:[],
                    type:"",
                    company:"",
                    status:""
                }
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
                this.popTitle = "添加商家"
                this.editFlag = true
            },
            check() {
                this.popTitle = "查看商家"
                this.editFlag = true
            },
            edit() {
                this.popTitle = "修改商家"
                this.editFlag = true
            },
            confirmEdit() {
                this.editFlag = false
            },
            closeEdit() {
                this.editFlag = false
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
    .uploadTip {
        width: 419px;
        height: 17px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #a4a8b5;
    }
</style>