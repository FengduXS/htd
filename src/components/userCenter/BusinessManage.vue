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
                                <el-option label="总部" :value="0"></el-option>
                                <el-option label="公司" :value="1"></el-option>
                                <el-option label="商家" :value="2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="启用状态:" size="small" style="marginBottom: 0px;">
                            <el-select placeholder="请选择启用状态" v-model="searchParam.status" style="width:230px">
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
                <div class="pop1_main" style="height:500px;padding: 20px 20px;" ref="scroll">
                    <el-form label-width="120px" :rules="rule" ref="editParam" :model="editParam">
                        <el-form-item label="商家名称:" size="small" prop="merchantName">
                            <el-input  placeholder="请输入商家名称" v-model="editParam.merchantName" style="width:320px;" :disabled="isCheck"></el-input>
                        </el-form-item>
                        <el-form-item label="商家类型:" size="small" prop="merchantType">
                            <el-radio-group v-model="editParam.merchantType" :disabled="isCheck">
                                <el-radio label="自营商家"></el-radio>
                                <el-radio label="外部商家"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="联系人:" size="small" prop="contactName">
                            <el-input  placeholder="请输入联系人" style="width:320px;" v-model="editParam.contactName" :disabled="isCheck"></el-input>
                        </el-form-item>
                        <el-form-item label="联系电话:" size="small" prop="contactMobileNo">
                            <el-input  placeholder="请输入联系电话" style="width:320px;" v-model="editParam.contactMobileNo" :disabled="isCheck"></el-input>
                        </el-form-item>
                        <el-form-item label="联系地址:" size="small" prop="contactDetailAddress">
                            <el-col :span="5">
                                <el-select placeholder="省" v-model="editParam.contactProvinceCode" :disabled="isCheck">
                                    <el-option label="全部" value="1"></el-option>
                                    <el-option label="商家" value="pinlei4"></el-option>
                                </el-select>
                            </el-col>
                            <el-col class="line" :span="1">-</el-col>
                            <el-col :span="5">
                                <el-select placeholder="市" v-model="editParam.contactCityCode" :disabled="isCheck">
                                    <el-option label="全部" value="1"></el-option>
                                    <el-option label="商家" value="pinlei4"></el-option>
                                </el-select>
                            </el-col>
                            <el-col class="line" :span="1">-</el-col>
                            <el-col :span="5">
                                <el-select placeholder="区" v-model="editParam.contactRegionCode" :disabled="isCheck">
                                    <el-option label="全部" value="1"></el-option>
                                    <el-option label="商家" value="pinlei4"></el-option>
                                </el-select>
                            </el-col>
                            <el-col class="line" :span="1">-</el-col>
                            <el-col :span="5">
                                <el-select placeholder="街道" v-model="editParam.contactDistrictCode" :disabled="isCheck">
                                    <el-option label="全部" value="1"></el-option>
                                    <el-option label="商家" value="pinlei4"></el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="23">
                                <el-input  placeholder="请输入详细地址" style="margin-top:15px;" v-model="editParam.contactDetailAddress" :disabled="isCheck"></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="归属公司:" size="small" prop="companyId">
                            <el-select placeholder="请选择归属公司" v-model="editParam.companyId" style="width:320px;" :disabled="isCheck">
                                <el-option label="全部" value="1"></el-option>
                                <el-option label="总部" value="pinlei2"></el-option>
                                <el-option label="公司" value="pinlei3"></el-option>
                                <el-option label="商家" value="pinlei4"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="启用状态:" size="small" prop="status">
                            <el-radio-group v-model="editParam.status" style="width:320px;" :disabled="isCheck">
                                <el-radio label="启用"></el-radio>
                                <el-radio label="禁用"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="销售渠道:" size="small" prop="saleChannel">
                            <el-checkbox-group v-model="editParam.saleChannel" :disabled="isCheck">
                                <el-checkbox label="B2C商城"  value="1"></el-checkbox>
                                <el-checkbox label="线下销售"  value="2"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item label="法人姓名:" size="small" prop="legalRepresentativeName">
                            <el-input  placeholder="请输入法人姓名" style="width:320px;" v-model="editParam.legalRepresentativeName" :disabled="isCheck"></el-input>
                        </el-form-item>
                        <el-form-item label="法人电话:" size="small" prop="legalRepresentativeMobileNo">
                            <el-input  placeholder="请输入法人电话" style="width:320px;" v-model="editParam.legalRepresentativeMobileNo" :disabled="isCheck"></el-input>
                        </el-form-item>
                        <el-form-item label="法人身份证号:" size="small" prop="legalRepresentativeCertNo">
                            <el-input  placeholder="请输入法人身份证号" style="width:320px;" v-model="editParam.legalRepresentativeCertNo" :disabled="isCheck"></el-input>
                        </el-form-item>
                        <el-form-item label="企业名称:" size="small" prop="corporationName">
                            <el-input  placeholder="请输入企业名称" style="width:320px;" v-model="editParam.corporationName" :disabled="isCheck"></el-input>
                        </el-form-item>
                        <el-form-item label="注册地址:" size="small" prop="merchantName">
                            <el-col :span="5">
                                <el-select placeholder="省" v-model="editParam.registerProvinceCode" :disabled="isCheck">
                                    <el-option label="全部" value="1"></el-option>
                                    <el-option label="商家" value="pinlei4"></el-option>
                                </el-select>
                            </el-col>
                            <el-col class="line" :span="1">-</el-col>
                            <el-col :span="5">
                                <el-select placeholder="市" v-model="editParam.registerCityCode" :disabled="isCheck">
                                    <el-option label="全部" value="1"></el-option>
                                    <el-option label="商家" value="pinlei4"></el-option>
                                </el-select>
                            </el-col>
                            <el-col class="line" :span="1">-</el-col>
                            <el-col :span="5">
                                <el-select placeholder="区" v-model="editParam.registerRegionCode" :disabled="isCheck">
                                    <el-option label="全部" value="1"></el-option>
                                    <el-option label="商家" value="pinlei4"></el-option>
                                </el-select>
                            </el-col>
                            <el-col class="line" :span="1">-</el-col>
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
                            <el-input  placeholder="请输入营业执照号" style="width:320px;" v-model="editParam.businessLicenceNo" :disabled="isCheck"></el-input>
                        </el-form-item>
                        <el-form-item label="营业执照:" size="small" prop="merchantName">
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
                            <el-input  placeholder="请输入备注" type="textarea" style="width:320px;" :rows="5" v-model="editParam.remark" :disabled="isCheck"></el-input>
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
export default {
    data() {
        return {
            searchParam:{
                name:"",
                type:"",
                status:""
            },
            initTable:[
                {
                    id: '007',
                    merchantName:'10001',
                    merchantType:'2',
                    companyId:'225',
                    status:'启用',
                    contactName:'张三',
                    contactMobileNo:'15137341976',
                    createTime:'2019-03-03',
                }
            ],
            popTitle:"",
            editFlag: false,
            isCheck: false, //查看时表单不可编辑
            editParam: {
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
                
            }
        }
    },
    mounted(){
        this.setScroll()
    },
    methods:{
        search() {
            
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
        },
        edit(data) {
            this.popTitle = "修改商家"
            this.editFlag = true
            this.isCheck = false
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
        margin: auto;
    }
</style>