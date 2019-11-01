<template>
    <div class="company_manage">
        <div class="company_manage_searcher">
            <el-form label-width="100px">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="公司名称:" size="small" style="marginBottom: 0px;">
                            <el-input  placeholder="请输入公司名称" style="width:230px" v-model="searchParam.companyName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="公司类型:"  size="small" style="marginBottom: 0px;">
                            <el-select placeholder="请选择公司类型" v-model="searchParam.companyType" style="width:230px">
                                <el-option label="下属公司" value="0"></el-option>
                                <el-option label="入驻公司" value="1"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="启用状态:" size="small" style="marginBottom: 0px;">
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
        </div>
        <div class="company_manage_table">
            <div class="btn btn_blue" style="float:right;margin-bottom:10px;" @click="addCompany">添加公司</div>
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable" height="620px">
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
        </div>
        <div v-show="editFlag">
            <div class="mark"></div>
            <div class="pop1 content">
                <div class="pop1_head">
                    <span class="pop1_txt">{{popTitle}}</span>
                    <span class="pop1_close iconfont iconicon-guanbi" title="关闭" @click="closeEdit"></span>
                </div>
                <div class="pop1_main" style="padding: 20px 20px;height:500px;" ref="scroll">
                    <el-form label-width="120px" :rules="rule" ref="editParam" :model="editParam">
                        <el-form-item label="公司名称:" size="small" prop="companyName">
                            <el-input  placeholder="请输入公司名称" v-model="editParam.companyName" style="width:320px;" :disabled="isCheck"></el-input>
                        </el-form-item>
                        <el-form-item label="公司类型:" size="small" prop="companyType">
                            <el-radio-group v-model="editParam.companyType" :disabled="isCheck">
                                <el-radio :label="0">下属公司</el-radio>
                                <el-radio :label="1">入驻公司</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="联系人:" size="small" prop="contactName">
                            <el-input  placeholder="请输入联系人" v-model="editParam.contactName" style="width:320px;" :disabled="isCheck"></el-input>
                        </el-form-item>
                        <el-form-item label="联系电话:" size="small" prop="contactMobileNo">
                            <el-input  placeholder="请输入联系电话" v-model="editParam.contactMobileNo" style="width:320px;" :disabled="isCheck"></el-input>
                        </el-form-item>
                        <el-form-item label="联系地址:" size="small" prop="contactDetailAddress">
                            <el-col :span="5">
                                <el-select placeholder="省" v-model="editParam.contactProvinceCode" :disabled="isCheck">
                                    <el-option label="全部" :value="1"></el-option>
                                    <el-option label="商家" :value="2"></el-option>
                                </el-select>
                            </el-col>
                            <el-col class="line" :span="1">-</el-col>
                            <el-col :span="5">
                                <el-select placeholder="市" v-model="editParam.contactCityCode" :disabled="isCheck">
                                    <el-option label="全部" :value="1"></el-option>
                                    <el-option label="商家" :value="2"></el-option>
                                </el-select>
                            </el-col>
                            <el-col class="line" :span="1">-</el-col>
                            <el-col :span="5">
                                <el-select placeholder="区" v-model="editParam.contactRegionCode" :disabled="isCheck">
                                    <el-option label="全部" :value="1"></el-option>
                                    <el-option label="商家" :value="2"></el-option>
                                </el-select>
                            </el-col>
                            <el-col class="line" :span="1">-</el-col>
                            <el-col :span="5">
                                <el-select placeholder="街道" v-model="editParam.contactDistrictCode" :disabled="isCheck">
                                    <el-option label="全部" :value="1"></el-option>
                                    <el-option label="商家" :value="2"></el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="23">
                                <el-input  placeholder="请输入详细地址" style="margin-top:15px;" v-model="editParam.contactDetailAddress" :disabled="isCheck"></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="销售渠道:" size="small" prop="saleChannel">
                            <el-checkbox-group v-model="editParam.saleChannel" :disabled="isCheck">
                                <el-checkbox label="0">B2B商城</el-checkbox>
                                <el-checkbox label="1">B2C商城</el-checkbox>
                                <el-checkbox label="2">线下销售</el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item label="商城展示形式:" size="small" prop="mallDisplayStyle">
                            <el-radio-group v-model="editParam.mallDisplayStyle" :disabled="isCheck">
                                <el-radio :label="0">统一商城展示</el-radio>
                                <el-radio :label="1">单店商城展示</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="运营模式:" size="small" prop="operationMode">
                            <el-radio-group v-model="editParam.operationMode" :disabled="isCheck">
                                <el-radio :label="0">自营商家代运营</el-radio>
                                <el-radio :label="1">全部商家代运营</el-radio>
                                <el-radio :label="2">全部商家独立运营</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="启用状态:" size="small" prop="status">
                            <el-radio-group v-model="editParam.status" :disabled="isCheck">
                                <el-radio :label="1">启用</el-radio>
                                <el-radio :label="0">禁用</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="法人姓名:" size="small" prop="legalRepresentativeName">
                            <el-input  placeholder="请输入法人姓名" v-model="editParam.legalRepresentativeName" style="width:320px;" :disabled="isCheck"></el-input>
                        </el-form-item>
                        <el-form-item label="法人电话:" size="small" prop="legalRepresentativeMobileNo">
                            <el-input  placeholder="请输入法人电话" v-model="editParam.legalRepresentativeMobileNo" style="width:320px;" :disabled="isCheck"></el-input>
                        </el-form-item>
                        <el-form-item label="法人身份证号:" size="small" prop="legalRepresentativeCertNo">
                            <el-input  placeholder="请输入法人身份证号"  v-model="editParam.legalRepresentativeCertNo" style="width:320px;" :disabled="isCheck"></el-input>
                        </el-form-item>
                        <el-form-item label="企业名称:" size="small" prop="corporationName">
                            <el-input  placeholder="请输入企业名称"  v-model="editParam.corporationName" style="width:320px;" :disabled="isCheck"></el-input>
                        </el-form-item>
                        <el-form-item label="注册地址:" size="small" prop="registerDetailAddress">
                            <el-col :span="5">
                                <el-select placeholder="省" v-model="editParam.registerProvinceCode" :disabled="isCheck">
                                    <el-option label="全部" :value="1"></el-option>
                                    <el-option label="商家" :value="2"></el-option>
                                </el-select>
                            </el-col>
                            <el-col class="line" :span="1">-</el-col>
                            <el-col :span="5">
                                <el-select placeholder="市" v-model="editParam.registerCityCode" :disabled="isCheck">
                                    <el-option label="全部" :value="1"></el-option>
                                    <el-option label="商家" :value="2"></el-option>
                                </el-select>
                            </el-col>
                            <el-col class="line" :span="1">-</el-col>
                            <el-col :span="5">
                                <el-select placeholder="区" v-model="editParam.registerRegionCode" :disabled="isCheck">
                                    <el-option label="全部" :value="1"></el-option>
                                    <el-option label="商家" :value="2"></el-option>
                                </el-select>
                            </el-col>
                            <el-col class="line" :span="1">-</el-col>
                            <el-col :span="5">
                                <el-select placeholder="街道" v-model="editParam.registerDistrictCode" :disabled="isCheck">
                                    <el-option label="全部" :value="1"></el-option>
                                    <el-option label="商家" :value="2"></el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="23">
                                <el-input  placeholder="请输入详细地址" style="margin-top:15px;" v-model="editParam.registerDetailAddress" :disabled="isCheck"></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="营业执照号:" size="small" prop="businessLicenceNo">
                            <el-input  placeholder="请输入营业执照号"  v-model="editParam.businessLicenceNo" style="width:320px;" :disabled="isCheck"></el-input>
                        </el-form-item>
                        <el-form-item label="营业执照:" size="small" prop="businessLicenceUrl">
                            <el-upload
                            class="avatar-uploader"
                            action="http://localhost:8080/api/logo/post"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload"
                            :disabled="isCheck">
                            <img v-if="editParam.businessLicenceUrl" :src="editParam.businessLicenceUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                        </el-form-item>
                        <p class="uploadTip">建议尺寸：最多可添加1张图片，不超过10M，支持JPG、JPEG、PNG格式图片</p>
                        <el-form-item label="备注:" size="small" prop="remark">
                            <el-input placeholder="请输入备注" type="textarea" v-model="editParam.remark" style="width:320px;" :rows="5" :disabled="isCheck"></el-input>
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
    import reg from '../../lib/reg'
    import PerfectScrollbar from 'perfect-scrollbar'
    export default {
        data() {
            return {
                searchParam:{
                    companyName:"",
                    companyType:"",
                    status:"",
                },
                initTable:[],
                popTitle:"",
                isCheck: false, //查看时表单不可编辑
                editFlag: false,
                editParam: {
                    companyName: "", //公司名称
                    companyType: "", //公司类型
                    contactName: "", //联系人
                    contactMobileNo: "", //联系电话
                    contactProvinceCode: "", //省
                    contactCityCode: "", //市
                    contactRegionCode: "", //	区
                    contactDistrictCode: "", //街道
                    contactDetailAddress: "", //详细地址
                    saleChannel: [], // 销售渠道
                    mallDisplayStyle: "", // 商城展示形式 
                    operationMode: "", //运营模式
                    status: "", //启用状态
                    legalRepresentativeName: "", // 法人姓名
                    legalRepresentativeMobileNo: "", // 法人电话
                    legalRepresentativeCertNo: "", //法人身份证号
                    corporationName: "", // 企业名称
                    registerProvinceCode: "", // 注册省
                    registerCityCode: "", // 注册市
                    registerRegionCode: "", //注册区
                    registerDistrictCode: "", //注册街道
                    registerDetailAddress: "", //注册详细地址
                    businessLicenceNo: "", //营业执照号
                    businessLicenceUrl: "", //营业执照url
                    remark: "", //备注
                },
                rule: {
                    companyName: [
                        {required: true, message: '请输入公司名称', trigger: 'blur'},
                        {min:0, max: 200, message: '不超过200个字符', trigger: 'blur'},
                    ],
                    companyType: [
                        {required: true, message: '请选择公司类型', trigger: 'change'},
                    ],
                    contactName: [
                        {required: true, message: '请输入联系人', trigger: 'blur'},
                        {min:0, max: 50, message: '不超过50个字符', trigger: 'blur'},
                    ],
                    contactMobileNo: [
                        {required: true, message: '请输入联系电话', trigger: 'blur'},
                        {pattern: reg.telNum, message: '手机号码格式不正确', trigger: 'blur'},
                    ],
                    contactDetailAddress: [
                        {required: true, message: '请输入详细地址', trigger: 'blur'},
                        {min:0, max:100, message: '不超过100个字符', trigger: 'blur'},
                    ],
                    saleChannel: [
                        {required: true, message: '请选择销售渠道', trigger: 'change'},
                    ],
                    mallDisplayStyle: [
                        {required: true, message: '请选择商城展示形式', trigger: 'change'},
                    ],
                    operationMode: [
                        {required: true, message: '请选择商务模式', trigger: 'change'},
                    ],
                    status: [
                        {required: true, message: '请选择启用状态', trigger: 'change'},
                    ],
                    legalRepresentativeName: [
                        {min:0, max: 50, message: '不超过50个字符', trigger: 'blur'},
                    ],
                    legalRepresentativeMobileNo: [
                        {pattern: reg.telNum, message: '手机号码格式不正确', trigger: 'blur'},
                    ],
                    legalRepresentativeCertNo: [
                        {pattern: reg.idCard, message: '身份证号码格式不正确', trigger: 'blur'},
                    ],
                    corporationName: [
                        {min:0, max: 200, message: '不超过200个字符', trigger: 'blur'},
                    ],
                    registerDetailAddress: [
                        {min:0, max:100, message: '不超过100个字符', trigger: 'blur'},
                    ],
                    businessLicenceNo: [
                        {min:0, max:20, message: '不超过20个字符', trigger: 'blur'},
                    ],
                    remark: [
                        {min:0, max: 1000, message: '不超过1000个字符', trigger: 'blur'}
                    ],
                }
            }
        },
        mounted() {
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
                this.isCheck = false
                console.log(this.editParam)
                this.$refs.editParam.clearValidate()
            },
            check(data) {
                this.popTitle = "查看公司"
                this.editFlag = true
                this.isCheck = true
                this.$axios.get("/companyInfo/queryById",data.id).then((res) => {
                    if(res.data.code=="200"){
                        this.editParam = res.data.data
                        this.editParam.saleChannel = this.editParam.saleChannel.split(",")
                    }
                }).catch((err) => {
                    console.log(err)
                })
            },
            edit(data) {
                this.popTitle = "修改公司"
                this.editFlag = true
                this.isCheck = false
                this.$axios.get("/companyInfo/queryById",data.id).then((res) => {
                    if(res.data.code=="200"){
                        this.editParam = res.data.data
                        this.editParam.saleChannel = this.editParam.saleChannel.split(",")
                    }
                }).catch((err) => {
                    console.log(err)
                })
            },
            confirmEdit() {
                this.$refs.editParam.validate((valid) => {
                    if(valid){
                        this.closeEdit()
                    }
                })
            },
            closeEdit() {
                this.editParam.companyName = "" 
                this.editParam.companyType = ""
                this.editParam.contactName = "" 
                this.editParam.contactMobileNo = ""
                this.editParam.contactProvinceCode = ""
                this.editParam.contactCityCode = ""
                this.editParam.contactRegionCode = ""
                this.editParam.contactDistrictCode = ""
                this.editParam.contactDetailAddress = ""
                this.editParam.saleChannel = [] 
                this.editParam.mallDisplayStyle = ""
                this.editParam.operationMode = ""
                this.editParam.status = ""
                this.editParam.legalRepresentativeName = ""
                this.editParam.legalRepresentativeMobileNo = ""
                this.editParam.legalRepresentativeCertNo = ""
                this.editParam.corporationName = ""
                this.editParam.registerProvinceCode = ""
                this.editParam.registerCityCode = ""
                this.editParam.registerRegionCode = "" 
                this.editParam.registerDistrictCode = ""
                this.editParam.registerDetailAddress = "" 
                this.editParam.businessLicenceNo = ""
                this.editParam.businessLicenceUrl = ""
                this.editParam.remark = ""
                this.$refs.editParam.clearValidate()
                this.editFlag = false
            },
            handleAvatarSuccess(res, file) {
                this.editParam.businessLicenceUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt1M = file.size / 1024 / 1024 < 1;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt1M) {
                    this.$message.error('上传头像图片大小不能超过 1MB!');
                }
                return isJPG && isLt1M;
            },
            setScroll() {
                const container = this.$refs.scroll;
                const ps = new PerfectScrollbar(container,{
                    wheelSpeed: 2,
                    wheelPropagation: true,
                    minScrollbarLength: 20
                })
            },
        }
    }
</script>
<style scoped>
    .company_manage_searcher{
        background-color: #ffffff;
        border-radius: 5px;
        margin:15px;
        padding: 15px;
    }
    .company_manage_table{
        height: 703px;
        background-color: #ffffff;
        border-radius: 5px;
        margin:15px;
        padding: 15px;
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