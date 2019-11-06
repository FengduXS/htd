<template>
    <div class="business_manage">
        <div class="business_manage_searcher">
            <el-form label-width="100px">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="商家名称:" size="small" style="marginBottom: 0px;">
                            <el-input  placeholder="请输入商家名称" style="width:230px" v-model="searchParam.merchantName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="商家类型:"  size="small" style="marginBottom: 0px;">
                            <el-select placeholder="请选择商家类型" v-model="searchParam.merchantType" style="width:230px">
                                <el-option label="全部" value=""></el-option>
                                <el-option label="自营" :value="0"></el-option>
                                <el-option label="外营" :value="1"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="启用状态:" size="small" style="marginBottom: 0px;">
                            <el-select placeholder="请选择启用状态" v-model="searchParam.status" style="width:230px">
                                <el-option label="全部" value=""></el-option>
                                <el-option label="启用" :value="0"></el-option>
                                <el-option label="禁用" :value="1"></el-option>
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
        <div class="business_manage_table">
            <div class="btn btn_blue" style="float:right;margin-bottom:10px;" @click="addBussiness">添加商家</div>
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable" height="620px">
                    <el-table-column
                        align="center"
                        prop="id"
                        label="商家编码">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="merchantName"
                        label="商家名称">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="merchantType"
                        label="商家类型">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="companyId"
                        label="归属公司">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="status"
                        label="启用状态">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="contactName"
                        label="联系人">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="contactMobileNo"
                        label="联系电话">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="createTime"
                        label="创建时间">
                    </el-table-column>
                    <el-table-column align="center" label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" @click.stop="check(scope.row)">查看</el-button>
                            <el-button type="text" @click.stop="edit(scope.row)">编辑</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination 
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total" 
                    :page-sizes="[5,10,15,20]"
                    :current-page.sync="currentPage"
                    :page-size.sync="searchParam.pageSize"
                    @size-change="pageSizeChange"
                    @current-change="currentPageChange">
                </el-pagination>
            </div>
        </div>
        <div v-show="editFlag">
            <div class="mark"></div>
            <div class="pop1" style="width:589px;">
                <div class="pop1_head">
                    <span class="pop1_txt">{{popTitle}}</span>
                    <span class="pop1_close iconfont iconicon-guanbi" title="关闭" @click="closeEdit"></span>
                </div>
                <div class="pop1_main" style="position: relative;height:540px;padding:20px;" ref="scroll">
                    <el-form label-width="100px" :rules="rule" ref="editParam" :model="editParam">
                        <el-form-item label="商家名称:" size="small" prop="merchantName">
                            <el-input  placeholder="请输入商家名称" v-model="editParam.merchantName" style="width:350px;" :disabled="isCheck"></el-input>
                        </el-form-item>
                        <el-form-item label="商家类型:" size="small" prop="merchantType">
                            <el-radio-group v-model="editParam.merchantType" :disabled="isCheck">
                                <el-radio label="自营商家"></el-radio>
                                <el-radio label="外部商家"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="联系人:" size="small" prop="contactName">
                            <el-input  placeholder="请输入联系人" style="width:350px;" v-model="editParam.contactName" :disabled="isCheck"></el-input>
                        </el-form-item>
                        <el-form-item label="联系电话:" size="small" prop="contactMobileNo">
                            <el-input  placeholder="请输入联系电话" style="width:350px;" v-model="editParam.contactMobileNo" :disabled="isCheck"></el-input>
                        </el-form-item>
                        <el-form-item label="联系地址:" size="small" prop="contactProvinceCode" style="width: 192px;">
                            <el-select placeholder="省" v-model="editParam.contactProvinceCode" :disabled="isCheck" clearable style="width:91px;">
                                <el-option label="全部" value="1"></el-option>
                                <el-option label="商家" value="pinlei4"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="-" label-width="19px" size="small" prop="contactCityCode" class="smallCity">
                            <el-select placeholder="市" v-model="editParam.contactCityCode" :disabled="isCheck" style="width:91px;">
                                <el-option label="全部" value="1"></el-option>
                                <el-option label="商家" value="pinlei4"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="-" label-width="19px" size="small" prop="contactRegionCode" class="smallRegion">
                            <el-select placeholder="区" v-model="editParam.contactRegionCode" :disabled="isCheck" style="width:91px;">
                                <el-option label="全部" value="1"></el-option>
                                <el-option label="商家" value="pinlei4"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="-" label-width="19px" size="small" prop="contactDistrictCode" class="smallStrict">
                            <el-select placeholder="街道" v-model="editParam.contactDistrictCode" :disabled="isCheck" style="width:91px;">
                                <el-option label="全部" value="1"></el-option>
                                <el-option label="商家" value="pinlei4"></el-option>
                            </el-select>
                        </el-form-item>
                        <div style="position: absolute;top:276px;">
                            <el-form-item size="small" prop="contactDetailAddress">
                                <el-input  placeholder="请输入详细地址" v-model="editParam.contactDetailAddress" :disabled="isCheck" style="width:440px;"></el-input>
                            </el-form-item>
                            <el-form-item label="归属公司:" size="small" prop="companyId">
                                <el-select placeholder="请选择归属公司" v-model="editParam.companyId" style="width:350px;" :disabled="isCheck">
                                    <el-option label="总部" value="1"></el-option>
                                    <el-option label="公司" value="2"></el-option>
                                    <el-option label="商家" value="3"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="启用状态:" size="small" prop="status">
                                <el-radio-group :disabled="isCheck" v-model="editParam.status">
                                    <el-radio :label="1">启用</el-radio>
                                    <el-radio :label="0">禁用</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="销售渠道:" size="small" prop="saleChannel">
                                <el-checkbox-group v-model="editParam.saleChannel" :disabled="isCheck">
                                    <el-checkbox label="B2C商城"  value="1"></el-checkbox>
                                    <el-checkbox label="线下销售"  value="2"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item label="法人姓名:" size="small" prop="legalRepresentativeName">
                                <el-input  placeholder="请输入法人姓名" style="width:350px;" v-model="editParam.legalRepresentativeName" :disabled="isCheck"></el-input>
                            </el-form-item>
                            <el-form-item label="法人电话:" size="small" prop="legalRepresentativeMobileNo">
                                <el-input  placeholder="请输入法人电话" style="width:350px;" v-model="editParam.legalRepresentativeMobileNo" :disabled="isCheck"></el-input>
                            </el-form-item>
                            <el-form-item label="法人身份证号:" size="small" prop="legalRepresentativeCertNo">
                                <el-input  placeholder="请输入法人身份证号" style="width:350px;" v-model="editParam.legalRepresentativeCertNo" :disabled="isCheck"></el-input>
                            </el-form-item>
                            <el-form-item label="企业名称:" size="small" prop="corporationName">
                                <el-input  placeholder="请输入企业名称" style="width:350px;" v-model="editParam.corporationName" :disabled="isCheck"></el-input>
                            </el-form-item>
                            <el-form-item label="注册地址:" size="small" prop="registerDetailAddress">
                                <el-col :span="5">
                                    <el-select placeholder="省" v-model="editParam.registerProvinceCode" :disabled="isCheck">
                                        <el-option label="全部" value="1"></el-option>
                                        <el-option label="商家" value="pinlei4"></el-option>
                                    </el-select>
                                </el-col>
                                <el-col :span="1"><span class="separator">-</span></el-col>
                                <el-col :span="5">
                                    <el-select placeholder="市" v-model="editParam.registerCityCode" :disabled="isCheck">
                                        <el-option label="全部" value="1"></el-option>
                                        <el-option label="商家" value="pinlei4"></el-option>
                                    </el-select>
                                </el-col>
                                <el-col :span="1"><span class="separator">-</span></el-col>
                                <el-col :span="5">
                                    <el-select placeholder="区" v-model="editParam.registerRegionCode" :disabled="isCheck">
                                        <el-option label="全部" value="1"></el-option>
                                        <el-option label="商家" value="pinlei4"></el-option>
                                    </el-select>
                                </el-col>
                                <el-col :span="1"><span class="separator">-</span></el-col>
                                <el-col :span="5">
                                    <el-select placeholder="街道" v-model="editParam.registerDistrictCode" :disabled="isCheck">
                                        <el-option label="全部" value="1"></el-option>
                                        <el-option label="商家" value="pinlei4"></el-option>
                                    </el-select>
                                </el-col>
                                <el-col :span="23">
                                    <el-input  placeholder="请输入详细地址" style="margin-top:15px;" v-model="editParam.registerDetailAddress" :disabled="isCheck"></el-input>
                                </el-col>
                            </el-form-item>
                            <el-form-item label="营业执照号:" size="small" prop="businessLicenceNo">
                                <el-input  placeholder="请输入营业执照号" style="width:350px;" v-model="editParam.businessLicenceNo" :disabled="isCheck"></el-input>
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
                                <el-input  placeholder="请输入备注" type="textarea" style="width:350px;" :rows="5" v-model="editParam.remark" :disabled="isCheck"></el-input>
                            </el-form-item>
                        </div>
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
import reg from '../../lib/reg'
export default {
    data() {
        var checkAddress = (rule, value, callback) => {
            switch (rule.field){
                case "contactCityCode":
                    if(value == ""){
                        callback(new Error('请选择市'))
                    }else{
                        callback()
                    }
                    break;
                case "contactRegionCode":
                    if(value == ""){
                        callback(new Error('请选择区'))
                    }else{
                        callback()
                    }
                    break;
                case "contactDistrictCode":
                    if(value == ""){
                        callback(new Error('请选街道'))
                    }else{
                        callback()
                    }
                    break;
            }
        };
        return {
            searchParam:{
                merchantName: "",
                merchantType: "",
                status: "",
                currentPage: 0,
                pageSize: 10,
            },
            currentPage: 1,
            total: 0,
            initTable:[],
            popTitle:"",
            editFlag: false,
            isCheck: false, //查看时表单不可编辑
            editParam: {
                id: "",
                merchantName: "", //商家名称
                merchantType: "", //商家类型
                contactName: "", //商家联系人
                contactMobileNo: "", //商家联系电话
                contactProvinceCode: "", //联系地址——省cord
                contactCityCode: "", //联系地址——市cord
                contactRegionCode: "", //联系地址——区cord
                contactDistrictCode: "", //联系地址——街道cord
                contactDetailAddress: "", //联系人详细地址
                companyId: "", //所属公司id
                status: "", //启用状态
                saleChannel: "", //销售渠道
                legalRepresentativeName: "",  //法人姓名
                legalRepresentativeMobileNo: "", //法人电话
                legalRepresentativeCertNo: "", //法人身份证号码
                corporationName: "", //企业名称
                registerProvinceCode: "", //注册地址——省cord
                registerCityCode: "", //注册地址——市cord
                registerRegionCode: "", //注册地址—区cord
                registerDistrictCode: "", //注册地址——街道cord
                registerDetailAddress: "", //注册地址——详细地址
                businessLicenceNo: "", //营业执照号
                businessLicenceUrl: "", //执照图片
                remark: "", //备注
            },
            rule: {
                merchantName: [
                    {required: true, message: '请输入商家名称', trigger: 'blur'},
                    {min: 0, max: 200, message: '不超过200字符',trigger: 'blur'}
                ], //商家名称
                merchantType: [
                    {required: true, message: '选择商家类型', trigger: 'change'}
                ], //商家类型
                contactName: [
                    {required: true, message: '请输入联系人', trigger: 'blur'},
                    {min: 0, max: 50, message: '不超过50字符',trigger: 'blur'}
                ], //商家联系人
                contactMobileNo: [
                    {required: true, message: '请输入电话号码', trigger: 'blur'},
                    {pattern: reg.telNum, message: '手机号码格式不正确', trigger: 'blur'}
                ], //商家联系电话
                contactProvinceCode: [
                    {required: true, message: '请选择地址', trigger: 'change'}
                ], //联系地址——省cord
                contactCityCode: [
                    { validator: checkAddress, trigger: 'change'}
                ], //联系地址——市cord
                contactRegionCode: [
                    {validator: checkAddress,trigger: 'change'}
                ], //联系地址——区cord
                contactDistrictCode: [
                    {validator: checkAddress, trigger: 'change'}
                ], //联系地址——街道cord
                contactDetailAddress: [
                    {required: true, message: '请输入详细地址', trigger: 'blur'},
                    {min: 0, max: 100, message: '不超过100字符',trigger: 'blur'}
                ], //联系人详细地址
                companyId: [
                    {required: true, message: '选择所属公司', trigger: 'blur'}
                ], //所属公司id
                status: [
                    {required: true, message: '选择启用状态', trigger: 'change'}
                ], //启用状态
                saleChannel: [
                    {required: true, message: '选择销售渠道', trigger: 'change'}
                ], //销售渠道
                legalRepresentativeName: [
                    {min: 0, max: 50, message: '不超过50字符',trigger: 'blur'}
                ],  //法人姓名
                legalRepresentativeMobileNo: [
                    {pattern: reg.telNum, message: '手机号码格式不正确', trigger: 'blur'}
                ], //法人电话
                legalRepresentativeCertNo: [
                    {pattern: reg.idCard, message: '身份证号码格式不正确', trigger: 'blur'}
                ], //法人身份证号码
                corporationName: [
                    {min: 0, max: 200, message: '不超过200字符',trigger: 'blur'}
                ], //企业名称
                registerDetailAddress: [
                    {min: 0, max: 100, message: '不超过100字符',trigger: 'blur'}
                ], //注册地址——详细地址
                businessLicenceNo: [
                    {min: 0, max: 20, message: '不超过20字符',trigger: 'blur'}
                ], //营业执照号
                remark: [
                    {min: 0, max: 1000, message: '不超过1000字符',trigger: 'blur'}
                ], //备注
            }
        }
    },
    mounted(){
        this.getTableData()
        this.setScroll()
    },
    methods:{
        //查询数据
        getTableData() {
            this.$axios.post("/member/merchantInfo/pagelist",this.searchParam).then((res) => {
                if(res.data.code == "0"){
                    this.initTable = res.data.data.data
                    this.total = res.data.data.total
                }
            }).catch((err) => {
                console.log(err)
            })
        },
        search() {
            this.searchParam.currentPage = 0
            this.getTableData()
        },
        //翻页
        currentPageChange() {
            this.searchParam.currentPage = this.currentPage-1
            this.getTableData()
        },
        //分页大小改变重新从第一页查
        pageSizeChange() {
            if(this.currentPage == 1){
                this.getTableData()
            }else{
                this.currentPage = 1
            }
        },
        reset() {
            this.searchParam.merchantName = ""
            this.searchParam.merchantType = ""
            this.searchParam.status =""
        },
        addBussiness() {
            this.popTitle = "添加商家"
            this.editFlag = true
            this.isCheck = false
        },
        check(data) {
            this.popTitle = "查看商家"
            this.editFlag = true
            this.isCheck = true
            this.$axios.get(`/member/merchantInfo/queryById?id=${data.id}`).then((res) => {
                if(res.data.code == "0"){

                }
            }).catch((err) => {
                console.log(err)
            })
        },
        edit(data) {
            this.popTitle = "修改商家"
            this.editFlag = true
            this.isCheck = false
            this.$axios.get(`/member/merchantInfo/queryById?id=${data.id}`).then((res) => {
                if(res.data.code == "0"){

                }
            }).catch((err) => {
                console.log(err)
            })
        },
        confirmEdit() {
            let _this = this
            this.$refs.editParam.validate((valid) => {
                if(valid){
                    //新增
                    if(_this.editParam.id == ""){
                        _this.$axios.post("/member/merchantInfo/save",_this.editParam).then((res) => {
                            if(res.data.code == "0"){
                                _this.closeEdit()
                            }
                        }).catch((err) => {
                            console.log(err)
                        })
                    }else{ // 修改
                        _this.$axios.post("/member/merchantInfo/updateById",_this.editParam).then((res) => {
                            if(res.data.code == "0"){
                                _this.closeEdit()
                            }
                        }).catch((err) => {
                            console.log(err)
                        })
                    }
                    
                }
            })
        },
        closeEdit() {
            this.editFlag = false
            this.editParam.id = ""
            this.editParam.merchantName = ""
            this.editParam.merchantType = ""
            this.editParam.contactName = ""
            this.editParam.contactMobileNo = ""
            this.editParam.contactProvinceCode = ""
            this.editParam.contactCityCode = ""
            this.editParam.contactRegionCode = ""
            this.editParam.contactDistrictCode = ""
            this.editParam.contactDetailAddress = ""
            this.editParam.companyId = ""
            this.editParam.status = ""
            this.editParam.saleChannel = ""
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
        },
        setScroll(){
            const container = this.$refs.scroll;
            const ps = new PerfectScrollbar(container,{
                wheelSpeed: 2,
                wheelPropagation: true,
                minScrollbarLength: 20
            })
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
    }
}
</script>
<style scoped>
    .business_manage_searcher{
        background-color: #ffffff;
        border-radius: 5px;
        margin:15px;
        padding: 15px;
    }
    .business_manage_table{
        height: 703px;
        background-color: #ffffff;
        border-radius: 5px;
        margin:15px;
        padding: 15px;
    }
    .smallCity{
        position: relative;
        left: 200px;
        top: -52px;
        width: 111px;
    }
    .smallRegion{
        position: relative;
        top: -103px;
        left: 318px;
        width: 111px;
    }
    .smallStrict{
        position: relative;
        top: -153px;
        left: 430px;
        width: 111px;
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
        z-index:20;
    }
</style>