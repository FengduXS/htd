<template>
    <div class="user_manage">
        <div class="user_manage_searcher">
            <el-form label-width="100px">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="账号:" size="small">
                            <el-input  placeholder="请输入账号" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="姓名:"  size="small">
                            <el-input  placeholder="请输入姓名" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="手机号:"  size="small">
                            <el-input  placeholder="请输入手机号" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="用户类型:"  size="small">
                            <el-select placeholder="请选择用户类型" v-model="searchParam.userType" style="width:230px">
                                <el-option label="全部" value="1"></el-option>
                                <el-option label="总部" value="pinlei2"></el-option>
                                <el-option label="公司" value="pinlei3"></el-option>
                                <el-option label="商家" value="pinlei4"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
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
                        <el-form-item style="marginBottom: 0px;">
                            <div class="btn btn_blue" @click="search">查询</div>
                            <div class="btn btn_gray" style="margin-left:10px" @click="reset">重置</div>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div class="user_manage_table">
            <div class="btn btn_blue" style="float:right;margin-bottom:10px;" @click="addUser">添加用户</div>
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable" height="550px">
                    <el-table-column
                            align="center"
                            prop="accountNo"
                            label="账号">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="name"
                            label="姓名">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="mobile"
                            label="手机号">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="sex"
                            label="性别">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="status"
                            label="启用状态">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="belongOrgId"
                            label="归属组织">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="usertype"
                            label="用户类型">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="createUserName"
                            label="创建人">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="createTime"
                            label="创建时间">
                    </el-table-column>
                    <el-table-column align="center" label="操作" width="250">
                            <template slot-scope="scope">
                                <el-button type="text" @click.stop="check">查看</el-button>
                                <el-button type="text" @click.stop="edit">编辑</el-button>
                                <el-button type="text" @click.stop="unlock">解锁</el-button>
                                <el-button type="text" @click.stop="roleBind">角色绑定</el-button>
                            </template>
                    </el-table-column>
                </el-table>
                <el-pagination layout="total, sizes, prev, pager, next, jumper">
                </el-pagination>
            </div>
        </div>
        <div v-show="roleBindFlag">
            <div class="mark"></div>
            <div class="pop1 content" style="width:426px;">
                <div class="pop1_head">
                    <span class="pop1_txt">角色绑定</span>
                    <span class="pop1_close iconfont iconicon-guanbi" title="关闭" @click="closeRoleBind"></span>
                </div>
                <div class="pop1_main" style="position: relative;">
                    <el-form label-width="120px">
                        <el-form-item label="角色选择:" required>
                            <el-select placeholder="请选择角色" v-model="value" style="width:275px;" clearable>
                                <el-option label="总部运营人员" value="pinlei1"></el-option>
                                <el-option label="其他人员" value="pinlei2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="pop1_btm">
                    <div class="pop1_b_inner">
                        <div class="btn btn_blue marrig10" @click="confirmBind">确定</div>
                        <div class="btn btn_gray marrig10" @click="closeRoleBind">取消</div>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="editFlag">
            <div class="mark"></div>
            <div class="pop1 content"  style="width:583px;">
                <div class="pop1_head">
                    <span class="pop1_txt">{{popTitle}}</span>
                    <span class="pop1_close iconfont iconicon-guanbi" title="关闭" @click="closeEdit"></span>
                </div>
                <div class="pop1_main" style="position: relative;height:500px;" ref="scroll">
                    <el-form label-width="120px" :rules="rule" ref="editParam" :model="editParam">
                        <el-form-item label="账号:" prop="accountNo">
                            <el-input placeholder="请输入账号" style="width:310px;" :disabled="isCheck" v-model="editParam.accountNo"></el-input>
                            <span class="passwordTip">初始密码为123456</span>
                        </el-form-item>
                        <el-form-item label="姓名:" prop="name">
                            <el-input placeholder="请输入姓名" style="width:310px;" :disabled="isCheck" v-model="editParam.name"></el-input>
                        </el-form-item>
                        <el-form-item label="手机号:" prop="mobile">
                            <el-input placeholder="请输入手机号" style="width:310px;" :disabled="isCheck" v-model="editParam.mobile"></el-input>
                        </el-form-item>
                        <el-form-item label="用户类型:" prop="usertype">
                            <el-select placeholder="请选择用户类型" style="width:310px;" :disabled="isCheck" v-model="editParam.usertype" clearable>
                                <el-option label="总部运营人员" value="pinlei1"></el-option>
                                <el-option label="其他人员" value="pinlei2"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="归属组织:" prop="belongOrgId">
                            <el-select placeholder="请选择归属组织" style="width:310px;" :disabled="isCheck" v-model="editParam.belongOrgId" clearable>
                                <el-option label="总部运营人员" value="pinlei1"></el-option>
                                <el-option label="其他人员" value="pinlei2"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="启用状态:" prop="status">
                            <el-radio-group :disabled="isCheck" v-model="editParam.status">
                                <el-radio label="启用"></el-radio>
                                <el-radio label="禁用"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="性别:" prop="sex">
                            <el-radio-group :disabled="isCheck" v-model="editParam.sex">
                                <el-radio label="男"></el-radio>
                                <el-radio label="女"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="生日:" prop="birthday">
                            <el-date-picker 
                                style="width:310px;" 
                                :disabled="isCheck"
                                :editable="false"
                                clearable
                                v-model="editParam.birthday"
                                type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="邮箱:" prop="email">
                            <el-input placeholder="请输入邮箱" style="width:310px;" :disabled="isCheck" v-model="editParam.email"></el-input>
                        </el-form-item>
                        <el-form-item label="工号:" prop="employeeNum">
                            <el-input placeholder="请输入工号" style="width:310px;" :disabled="isCheck" v-model="editParam.employeeNum"></el-input>
                        </el-form-item>
                        <el-form-item label="备注:" prop="remark">
                            <el-input placeholder="请输入备注" style="width:310px;" type="textarea" :disabled="isCheck" v-model="editParam.remark"></el-input>
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
                limit: 10,
                page: 1,
                userType: "1",
                status:"1"
            },
            initTable:[
                {
                    accountNo: '10001',
                    name:'张三',
                    mobile:'15137341976',
                    sex:'男',
                    status:'启用',
                    belongOrgId:'公司',
                    usertype:'商家',
                    createUserName:'张三',
                    createTime:'2019-03-03',
                }
            ],
            editFlag:false,
            isCheck: true, //查看时表单不可编辑
            popTitle: "",
            roleBindFlag:false,
            editParam: {
                accountNo:"", //账号
                name: "", //姓名
                mobile:"", //电话
                usertype:"", //用户类型
                belongOrgId:"", //归属组织
                status:"",//启用状态
                sex:"", //性别
                birthday:"", //生日
                email:"", //邮箱
                employeeNum:"", //工号
                remark:"", //备注
            },
            rule:{
                accountNo: [
                    {required: true, message: '请输入账号', trigger: 'blur'},
                    {pattern: reg.accountNumber, message: '仅支持字母数字下划线,7-20字符', trigger: 'blur'}
                ],
                name: [
                    {required: true, message: '请输入姓名', trigger: 'blur'},
                    {min:0,max:20, message: '不超过20字符', trigger: 'blur'}
                ],
                mobile: [
                    {required: true, message: '请输入电话号码', trigger: 'blur'},
                    {pattern: reg.telNum, message: '手机号码格式不正确', trigger: 'blur'}
                ],
                usertype: [
                    {required: true, message: '请选择用户类型', trigger: 'change'}
                ],
                belongOrgId: [
                    {required: true, message: '请选择归属组织', trigger: 'change'}
                ],
                status: [
                    {required: true, message: '请选择启用状态', trigger: 'change'}
                ],
                sex: [
                    {required: true, message: '请选择性别', trigger: 'change'}
                ],
                email: [
                    {pattern: reg.email, message: '请输入正确的邮箱', trigger: 'blur'}
                ],
                employeeNum: [
                    {pattern: reg.workNum, message: '仅支持字母数字下划线,不超过20字符', trigger: 'blur'}
                ],
                remark: [
                    {min:0, max: 1000, message: '请输入0-1000个字符', trigger: 'blur'}
                ],
            },
            value: "",
        }
    },
    beforeMount(){

    },
    mounted(){
        this.setScroll()
    },
    methods:{
        search() {
            
        },
        reset() {
            this.searchParam.userType = "1"
            this.searchParam.status ="1"
        },
        check() {
            this.popTitle= "查看用户"
            this.isCheck = true
            this.editFlag = true
        },
        addUser() {
            this.popTitle= "添加用户"
            this.isCheck = false
            this.editFlag = true
        },
        edit() {
            this.popTitle= "修改用户"
            this.isCheck = false
            this.editFlag = true
        },
        confirmEdit() {
            this.$refs.editParam.validate((valid) => {
                if(valid){
                    this.closeEdit()
                }
            })
        },
        closeEdit(){
            this.editFlag = false
            this.editParam.accountNo = ""
            this.editParam.name = ""
            this.editParam.mobile = ""
            this.editParam.usertype = ""
            this.editParam.belongOrgId = ""
            this.editParam.status = ""
            this.editParam.sex = ""
            this.editParam.birthday = ""
            this.editParam.email = ""
            this.editParam.employeeNum = ""
            this.editParam.remark = ""
            this.$refs.editParam.clearValidate()
        },
        unlock() {
            let _this = this
            this.$cusMessageBox({
                type:'warn',
                content:'确认解锁该用户吗？',
                confirmButtonText: '确定', 
                cancelButtonText: '取消',
                showCancelButton: true,
                confirmFn() {
                    _this.$message({ message: '解锁成功', type: 'success', duration: 800 })
                },
                cancelFn() {
                }
            })
            
        },
        roleBind() {
            this.roleBindFlag = true
        },
        confirmBind() {
            this.roleBindFlag = false
        },
        closeRoleBind() {
            this.roleBindFlag = false
        },
        setScroll(){
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
.user_manage_searcher{
    background-color: #ffffff;
    border-radius: 5px;
    margin:15px;
    padding: 15px;
}
.user_manage_table{
    height: 651px;
    background-color: #ffffff;
    border-radius: 5px;
    margin:15px; 
    padding: 15px;
}
.passwordTip{
    width: 101px;
    height: 17px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #e51e00;
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