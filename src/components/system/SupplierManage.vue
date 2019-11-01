<template>
    <div class="sj_manage">
        <!-- 查询表单 -->
        <div class="sj_manage_searcher">
            <el-form label-width="100px">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="供应商名称:" size="small">
                            <el-input  placeholder="请输入供应商名称" style="width:230px" v-model="searchParam.companyName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="联系人:"  size="small">
                            <el-input  placeholder="请输入联系人" style="width:230px" v-model="searchParam.companyName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="联系电话:"  size="small">
                            <el-input  placeholder="请输入联系电话" style="width:230px" v-model="searchParam.companyName"></el-input>
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
                </el-row>
            </el-form>
            <div style="width: 128px;height:32px;margin: 0 auto;">
                <div class="btn btn_blue" @click="search">查询</div>
                <div class="btn btn_gray" style="margin-left:10px" @click="reset">重置</div>
            </div>
        </div>
        <!-- 数据表格 -->
        <div class="sj_manage_table">
            <div class="btn btn_blue" style="float:right;margin-bottom:10px;" @click="add">添加供应商</div>
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable" height="563px">
                    <el-table-column
                        align="center"
                        prop="companyCode"
                        label="供应商编码">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="companyName"
                        label="供应商名称">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="companyTypeStr"
                        label="公司类型">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="statusStr"
                        label="联系人">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="saleChannelStr"
                        label="联系电话">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="mallDisplayStyleStr"
                        label="启用状态">
                    </el-table-column>
                    <el-table-column align="center" label="操作" width="130">
                        <template slot-scope="scope">
                            <el-button type="text" @click.stop="check(scope.row)">查看</el-button>
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
                    <span class="pop1_txt">{{popTitle}}</span>
                    <span class="pop1_close iconfont iconicon-guanbi" title="关闭" @click="closeEdit"></span>
                </div>
                <div class="pop1_main" style="padding: 20px 20px;height:700px;" ref="scroll">
                    <el-form label-width="120px" :rules="rule" ref="editParam" :model="editParam">
                        <p class="secondTitle">基本信息</p>
                        <div style="border-top: #c6c9d3 1px dashed; overflow: hidden; height: 1px; margin: 10px 10px;"></div>
                        <el-form-item label="供应商名称:" size="small" prop="companyName">
                            <el-input  placeholder="请输入供应商名称" v-model="editParam.companyName" style="width:320px;"></el-input>
                        </el-form-item>
                        <el-form-item label="联系人:" size="small" prop="contactName">
                            <el-input  placeholder="请输入联系人" v-model="editParam.contactName" style="width:320px;"></el-input>
                        </el-form-item>
                        <el-form-item label="联系电话:" size="small" prop="contactMobileNo">
                            <el-input  placeholder="请输入联系电话" v-model="editParam.contactMobileNo" style="width:320px;"></el-input>
                        </el-form-item>
                        <el-form-item label="联系地址:" size="small" prop="contactDetailAddress">
                            <el-col :span="5">
                                <el-select placeholder="省" v-model="editParam.contactProvinceCode">
                                    <el-option label="全部" :value="1"></el-option>
                                    <el-option label="商家" :value="2"></el-option>
                                </el-select>
                            </el-col>
                            <el-col class="line" :span="1">-</el-col>
                            <el-col :span="5">
                                <el-select placeholder="市" v-model="editParam.contactCityCode">
                                    <el-option label="全部" :value="1"></el-option>
                                    <el-option label="商家" :value="2"></el-option>
                                </el-select>
                            </el-col>
                            <el-col class="line" :span="1">-</el-col>
                            <el-col :span="5">
                                <el-select placeholder="区" v-model="editParam.contactRegionCode">
                                    <el-option label="全部" :value="1"></el-option>
                                    <el-option label="商家" :value="2"></el-option>
                                </el-select>
                            </el-col>
                            <el-col class="line" :span="1">-</el-col>
                            <el-col :span="5">
                                <el-select placeholder="街道" v-model="editParam.contactDistrictCode">
                                    <el-option label="全部" :value="1"></el-option>
                                    <el-option label="商家" :value="2"></el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="23">
                                <el-input  placeholder="请输入详细地址" style="margin-top:15px;" v-model="editParam.contactDetailAddress"></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="启用状态:" size="small" prop="status">
                            <el-radio-group v-model="editParam.status">
                                <el-radio :label="1">启用</el-radio>
                                <el-radio :label="0">禁用</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <p class="secondTitle" >结算信息</p>
                        <div style="border-top: #c6c9d3 1px dashed; overflow: hidden; height: 1px; margin: 10px 10px;"></div>
                        <el-form-item label="经营方式:" size="small" prop="mallDisplayStyle">
                            <el-radio-group v-model="editParam.mallDisplayStyle">
                                <el-radio :label="0">经销</el-radio>
                                <el-radio :label="1">代销</el-radio>
                                <el-radio :label="2">联营</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="结算方式:" size="small" prop="operationMode">
                            <el-radio-group v-model="editParam.operationMode">
                                <el-radio :label="0">先款后贷</el-radio>
                                <el-radio :label="1">先贷后款</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="帐期:" size="small" prop="legalRepresentativeName">
                            <el-input  placeholder="请输入帐期" v-model="editParam.legalRepresentativeName" style="width:320px;"></el-input>
                        </el-form-item>
                        <p class="secondTitle" >账户信息</p>
                        <div style="border-top: #c6c9d3 1px dashed; overflow: hidden; height: 1px; margin: 10px 10px;"></div>
                        <el-form-item label="付款方式:" size="small" prop="legalRepresentativeCertNo">
                           <el-select placeholder="街道" v-model="editParam.contactDistrictCode" style="width:320px;">
                                <el-option label="全部" :value="1"></el-option>
                                <el-option label="商家" :value="2"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="账户名称:" size="small" prop="legalRepresentativeMobileNo">
                            <el-input  placeholder="请输入账户名称" v-model="editParam.legalRepresentativeMobileNo" style="width:320px;"></el-input>
                        </el-form-item>
                        <el-form-item label="开户银行:" size="small" prop="legalRepresentativeCertNo">
                           <el-select placeholder="街道" v-model="editParam.contactDistrictCode" style="width:320px;">
                                <el-option label="全部" :value="1"></el-option>
                                <el-option label="商家" :value="2"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="银行账号:" size="small" prop="legalRepresentativeMobileNo">
                            <el-input  placeholder="请输入账户名称" v-model="editParam.legalRepresentativeMobileNo" style="width:320px;"></el-input>
                        </el-form-item>
                        <el-form-item label="开户地区:" size="small" prop="contactDetailAddress">
                            <el-col :span="5">
                                <el-select placeholder="省" v-model="editParam.contactProvinceCode">
                                    <el-option label="全部" :value="1"></el-option>
                                    <el-option label="商家" :value="2"></el-option>
                                </el-select>
                            </el-col>
                            <el-col class="line" :span="1">-</el-col>
                            <el-col :span="5">
                                <el-select placeholder="市" v-model="editParam.contactCityCode">
                                    <el-option label="全部" :value="1"></el-option>
                                    <el-option label="商家" :value="2"></el-option>
                                </el-select>
                            </el-col>
                            <el-col class="line" :span="1">-</el-col>
                            <el-col :span="5">
                                <el-select placeholder="区" v-model="editParam.contactRegionCode">
                                    <el-option label="全部" :value="1"></el-option>
                                    <el-option label="商家" :value="2"></el-option>
                                </el-select>
                            </el-col>
                            <el-col class="line" :span="1">-</el-col>
                            <el-col :span="5">
                                <el-select placeholder="街道" v-model="editParam.contactDistrictCode">
                                    <el-option label="全部" :value="1"></el-option>
                                    <el-option label="商家" :value="2"></el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="23">
                                <el-input  placeholder="请输入详细地址" style="margin-top:15px;" v-model="editParam.contactDetailAddress"></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="支行名称:" size="small" prop="legalRepresentativeCertNo">
                            <el-input  placeholder="请输入法人身份证号"  v-model="editParam.legalRepresentativeCertNo" style="width:320px;"></el-input>
                        </el-form-item>
                        <el-form-item label="企业名称:" size="small" prop="corporationName">
                            <el-input  placeholder="请输入企业名称"  v-model="editParam.corporationName" style="width:320px;"></el-input>
                        </el-form-item>
                        <el-form-item label="公司税号:" size="small" prop="businessLicenceNo">
                            <el-input  placeholder="请输入公司税号"  v-model="editParam.businessLicenceNo" style="width:320px;"></el-input>
                        </el-form-item>
                        <p class="secondTitle">其他信息</p>
                        <div style="border-top: #c6c9d3 1px dashed; overflow: hidden; height: 1px; margin: 10px 10px;"></div>
                        <el-form-item label="营业执照:" size="small" prop="businessLicenceUrl">
                            <el-upload
                            class="avatar-uploader"
                            action="http://localhost:8080/api/logo/post"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="logoUrl" :src="logoUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
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
    import reg from '../../lib/reg'
    import PerfectScrollbar from 'perfect-scrollbar'
    import ajaxConfig from '../../../src/lib/ajaxConfig'
    export default {
        data(){
            return {
                logoUrl:'',
                searchParam:{ //查询条件
                    companyName:"",
                    companyType:"",
                    status:"",
                },
                editFlag: false,//弹窗控制
                popTitle:"",//弹窗标题
                initTable:[ //数据表格
                    {
                        companyCode: 'P01',
                        companyTypeStr:'待揽件',
                        kdName:'2019-05-28',
                        kdNum:'312913',
                        mallDisplayStyleStr:'dd7018',
                        statusStr:'已发货',
                        saleChannelStr:'北京',
                        deliverGoodsStore:'南京',
                        shr:'张三',
                        tel:'15',
                        companyName:'江苏省',
                        uint:"件"
                    }
                ],
                editParam: {//编辑参数
                    
                },
                rule: {
                    
                }
            }
        },
        mounted() {
            this.setScroll()
        },
        methods: {
            //查询数据
            search() {
                
            },
            //重置查询条件
            reset() {
                
            },
            //打开添加供应商
            add() {
                this.popTitle = "添加供应商"
                this.editFlag = true
            },
            //查看供应商
            check(data) {
                this.popTitle = "查看供应商"
                this.editFlag = true
            },
            //打开修改供应商
            edit(data) {
                this.popTitle = "修改供应商"
                this.editFlag = true
            },
            //新增修改确认
            confirmEdit() {
                this.closeEdit()
            },
            //关闭弹窗
            closeEdit() {
                this.editFlag = false
            },
            //上传成功
            handleAvatarSuccess(res, file) {
                console.log(res);
                console.log(file);
                this.logoUrl = URL.createObjectURL(file.raw);
            },
            //上传前约束
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
            // 设置滚动条
            setScroll(){
                const container = this.$refs.scroll;
                const ps = new PerfectScrollbar(container,{
                    wheelSpeed: 2,
                    wheelPropagation: true,
                    minScrollbarLength: 20
                })
            },
        },
    }
</script>
<style scoped>
.sj_manage_searcher{
    background-color: #ffffff;
    border-radius: 5px;
    margin:15px;
    padding: 15px;
}
.sj_manage_table{
    background-color: #ffffff;
    height: 652px;
    border-radius: 5px;
    margin: 15px; 
    padding: 15px;
}
.secondTitle{
	font-family: PingFangSC-Semibold;
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
    margin-left: 10px;
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