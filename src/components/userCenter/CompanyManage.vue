<template>
    <div class="company_manage">
        <el-card class="company_manage_searcher">
            <el-form label-width="100px">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="公司名称:" size="small">
                            <el-input  placeholder="请输入公司名称" style="width:230px" v-model="searchParam.companyName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="公司类型:"  size="small">
                            <el-select placeholder="请选择公司类型" v-model="searchParam.companyType" style="width:230px">
                                <el-option label="下属公司" value="0"></el-option>
                                <el-option label="入驻公司" value="1"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="启用状态:" size="small">
                            <el-select placeholder="请选择启用状态" v-model="searchParam.status" style="width:230px">
                                <el-option label="启用" value="1"></el-option>
                                <el-option label="禁用" value="0"></el-option>
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
        <el-card class="company_manage_table">
            <div class="btn btn_blue" style="float:right;margin-bottom:10px;" @click="addCompany">添加公司</div>
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable" height="600px">
                    <el-table-column
                            align="center"
                            prop="companyCode"
                            label="公司编码">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="companyName"
                            label="公司名称">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="companyTypeStr"
                            label="公司类型">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="statusStr"
                            label="启用状态">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="saleChannelStr"
                            label="销售渠道">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="mallDisplayStyleStr"
                            label="商城展示形式"
                            width="120px">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="operationModeStr"
                            label="运营模式">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="contactName"
                            label="联系人">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="contactMobileNo"
                            label="联系电话"
                            width="120px">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="createTime"
                            label="创建时间"
                            width="100px">
                    </el-table-column>
                    <el-table-column align="center" label="操作" width="130">
                            <template slot-scope="scope">
                                <el-button type="text" @click.stop="check(scope.row)">查看</el-button>
                                <el-button type="text" @click.stop="edit(scope.row)">编辑</el-button>
                            </template>
                    </el-table-column>
                </el-table>
                <el-pagination layout="total, sizes, prev, pager, next, jumper">
                </el-pagination>
            </div>
        </el-card>
        <div v-show="editFlag">
            <div class="mark"></div>
            <div class="pop1 content">
                <div class="pop1_head">
                    <span class="pop1_txt">{{popTitle}}</span>
                    <span class="pop1_close iconfont iconicon-guanbi" title="关闭" @click="closeEdit"></span>
                </div>
                <div class="pop1_main" style="padding: 20px 20px;height:700px;" ref="scroll">
                    <el-form label-width="120px" :rules="rule" ref="editParam" :model="editParam">
                        <el-form-item label="公司名称:" size="small" prop="name">
                            <el-input  placeholder="请输入商家名称" v-model="editParam.name" style="width:320px;"></el-input>
                        </el-form-item>
                        <el-form-item label="公司类型:" size="small" prop="type">
                            <el-radio-group v-model="editParam.type">
                                <el-radio label="自营商家"></el-radio>
                                <el-radio label="外部商家"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="联系人:" size="small" prop="contact">
                            <el-input  placeholder="请输入联系人" v-model="editParam.contact" style="width:320px;"></el-input>
                        </el-form-item>
                        <el-form-item label="联系电话:" size="small" prop="contactTel">
                            <el-input  placeholder="请输入联系电话" v-model="editParam.contactTel" style="width:320px;"></el-input>
                        </el-form-item>
                        <el-form-item label="联系地址:" size="small" prop="contactAddress">
                            <el-col :span="5">
                                <el-select placeholder="请选择归属公司" v-model="editParam.contactAddress">
                                    <el-option label="全部" value="1"></el-option>
                                    <el-option label="商家" value="pinlei4"></el-option>
                                </el-select>
                            </el-col>
                            <el-col class="line" :span="1">-</el-col>
                            <el-col :span="5">
                                <el-select placeholder="请选择归属公司" v-model="editParam.contactAddress">
                                    <el-option label="全部" value="1"></el-option>
                                    <el-option label="商家" value="pinlei4"></el-option>
                                </el-select>
                            </el-col>
                            <el-col class="line" :span="1">-</el-col>
                            <el-col :span="5">
                                <el-select placeholder="请选择归属公司" v-model="editParam.contactAddress">
                                    <el-option label="全部" value="1"></el-option>
                                    <el-option label="商家" value="pinlei4"></el-option>
                                </el-select>
                            </el-col>
                            <el-col class="line" :span="1">-</el-col>
                            <el-col :span="5">
                                <el-select placeholder="请选择归属公司" v-model="editParam.contactAddress">
                                    <el-option label="全部" value="1"></el-option>
                                    <el-option label="商家" value="pinlei4"></el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="23">
                                <el-input  placeholder="请输入详细地址" style="margin-top:15px;" v-model="editParam.contactAddress"></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="销售渠道:" size="small" prop="saleChannel">
                            <el-checkbox-group v-model="editParam.saleChannel">
                                <el-checkbox label="B2B商城"  value="3"></el-checkbox>
                                <el-checkbox label="B2C商城"  value="1"></el-checkbox>
                                <el-checkbox label="线下销售"  value="2"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item label="商城展示形式:" size="small" prop="shopType">
                            <el-radio-group v-model="editParam.shopType">
                                <el-radio label="统一商城展示"></el-radio>
                                <el-radio label="单店商城展示"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="运营模式:" size="small" prop="businessModel">
                            <el-radio-group v-model="editParam.businessModel">
                                <el-radio label="自营商家代运营"></el-radio>
                                <el-radio label="全部商家代运营"></el-radio>
                                <el-radio label="全部商家独立运营"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="启用状态:" size="small" prop="status">
                            <el-radio-group v-model="editParam.status">
                                <el-radio label="启用"></el-radio>
                                <el-radio label="禁用"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="法人姓名:" size="small" prop="ownerName">
                            <el-input  placeholder="请输入法人姓名" v-model="editParam.ownerName" style="width:320px;"></el-input>
                        </el-form-item>
                        <el-form-item label="法人电话:" size="small" prop="ownerTel">
                            <el-input  placeholder="请输入法人电话" v-model="editParam.ownerTel" style="width:320px;"></el-input>
                        </el-form-item>
                        <el-form-item label="法人身份证号:" size="small" prop="ownerIDNum">
                            <el-input  placeholder="请输入法人身份证号"  v-model="editParam.ownerIDNum" style="width:320px;"></el-input>
                        </el-form-item>
                        <el-form-item label="企业名称:" size="small" prop="companyName">
                            <el-input  placeholder="请输入企业名称"  v-model="editParam.companyName" style="width:320px;"></el-input>
                        </el-form-item>
                        <el-form-item label="注册地址:" size="small" prop="registAddress">
                            <el-col :span="5">
                                <el-select placeholder="请选择归属公司" v-model="editParam.registAddress">
                                    <el-option label="全部" value="1"></el-option>
                                    <el-option label="商家" value="pinlei4"></el-option>
                                </el-select>
                            </el-col>
                            <el-col class="line" :span="1">-</el-col>
                            <el-col :span="5">
                                <el-select placeholder="请选择归属公司" v-model="editParam.registAddress">
                                    <el-option label="全部" value="1"></el-option>
                                    <el-option label="商家" value="pinlei4"></el-option>
                                </el-select>
                            </el-col>
                            <el-col class="line" :span="1">-</el-col>
                            <el-col :span="5">
                                <el-select placeholder="请选择归属公司" v-model="editParam.registAddress">
                                    <el-option label="全部" value="1"></el-option>
                                    <el-option label="商家" value="pinlei4"></el-option>
                                </el-select>
                            </el-col>
                            <el-col class="line" :span="1">-</el-col>
                            <el-col :span="5">
                                <el-select placeholder="请选择归属公司" v-model="editParam.registAddress">
                                    <el-option label="全部" value="1"></el-option>
                                    <el-option label="商家" value="pinlei4"></el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="23">
                                <el-input  placeholder="请输入详细地址" style="margin-top:15px;" v-model="editParam.registAddress"></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="营业执照号:" size="small" prop="registNumber">
                            <el-input  placeholder="请输入营业执照号"  v-model="editParam.registNumber" style="width:320px;"></el-input>
                        </el-form-item>
                        <el-form-item label="营业执照:" size="small">
                            <el-upload action="#" list-type="picture-card">
                                <i class="el-icon-plus"></i>
                            </el-upload>
                        </el-form-item>
                        <p class="uploadTip">建议尺寸：最多可添加1张图片，不超过10M，支持JPG、JPEG、PNG格式图片</p>
                        <el-form-item label="备注:" size="small" prop="remark">
                            <el-input  placeholder="请输入备注" type="textarea"  v-model="editParam.remark" style="width:320px;" :rows="5"></el-input>
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
    import PerfectScrollbar from 'perfect-scrollbar'
    import ajaxConfig from '../../../src/lib/ajaxConfig'
    export default {
        data(){
            return {
                searchParam:{
                    companyName:"",
                    companyType:"",
                    status:"",
                },
                initTable:[],
                popTitle:"",
                editFlag: false,
                editParam: {
                    name: "",
                    type: "",
                    contact: "",
                    contactTel: "",
                    contactAddress: "",
                    saleChannel: [],
                    shopType: "",
                    businessModel: "",
                    status: "",
                    ownerName: "",
                    ownerTel: "",
                    ownerIDNum: "",
                    companyName: "",
                    registAddress: "",
                    registNumber: "",
                    remark: "",
                },
                rule: {
                    name: [
                        {required: true, message: '请输入账号', trigger: 'blur'},
                    ],
                    type: [
                        {required: true, message: '请选择公司类型', trigger: 'change'},
                    ],
                    contact: [
                        {required: true, message: '请输入联系人', trigger: 'blur'},
                    ],
                    contactTel: [
                        {required: true, message: '请输入联系电话', trigger: 'blur'},
                    ],
                    contactAddress: [
                        {required: true, message: '请输入详细地址', trigger: 'blur'},
                    ],
                    saleChannel: [
                        {required: true, message: '请选择销售渠道', trigger: 'change'},
                    ],
                    shopType: [
                        {required: true, message: '请选择商城展示形式', trigger: 'change'},
                    ],
                    businessModel: [
                        {required: true, message: '请选择商务模式', trigger: 'change'},
                    ],
                    status: [
                        {required: true, message: '请选择启用状态', trigger: 'change'},
                    ],
                    ownerName: [
                        {required: true, message: '请输入法人姓名', trigger: 'blur'},
                    ],
                    ownerTel: [
                        {required: true, message: '请输入法人电话', trigger: 'blur'},
                    ],
                    ownerIDNum: [
                        {required: true, message: '请输入法人身份证号', trigger: 'blur'},
                    ],
                    companyName: [
                        {required: true, message: '请输入企业名称', trigger: 'blur'},
                    ],
                    registAddress: [
                        {required: true, message: '请输入详细地址', trigger: 'blur'},
                    ],
                    registNumber: [
                        {required: true, message: '请输入营业执照号', trigger: 'blur'},
                    ],
                    remark: [
                        {min:0, max: 1000, message: '不超过1000个字符', trigger: 'blur'}
                    ],
                }
            }
        },
        mounted(){
            this.setScroll()
            this.search()
        },
        methods:{
            search() {
                this.$axios.post("/companyInfo/pageList",this.searchParam).then((res) => {
                    if(res.data.code=="200"){
                        this.initTable = res.data.data.data
                    }
                }).catch((err) => {
                    console.log(err)
                })
            },
            reset() {
                this.searchParam.companyName = ""
                this.searchParam.companyType = ""
                this.searchParam.status =""
            },
            addCompany() {
                this.popTitle = "添加公司"
                this.editFlag = true
            },
            check() {
                this.popTitle = "查看公司"
                this.editFlag = true
            },
            edit() {
                this.popTitle = "修改公司"
                this.editFlag = true
            },
            confirmEdit() {
                this.$refs.editParam.validate((valid) => {
                    if(valid){
                        this.closeEdit()
                    }
                })
            },
            closeEdit() {
                this.editFlag = false
            },
            setScroll(){
                const container = this.$refs.scroll;
                const ps = new PerfectScrollbar(container,{
                    wheelSpeed: 2,
                    wheelPropagation: true,
                    minScrollbarLength: 20
                });
            },
        }
    }
</script>
<style scoped>
    .company_manage_searcher{
        width: calc(100% - 30px);
        background-color: #ffffff;
        border-radius: 5px;
        margin:15px auto;
        padding: 0px;
    }
    .company_manage_table{
        width: calc(100% - 30px);
        background-color: #ffffff;
        border-radius: 5px;
        margin:0 auto; 
        padding: 0px;
    }
    .uploadTip {
        height: 17px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #a4a8b5;
        margin-left: 118px;
        margin-bottom: 10px;
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