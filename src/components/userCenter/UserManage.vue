<template>
    <div class="user_manage">
        <el-card class="user_manage_searcher" style="padding: 0px">
            <el-form label-width="100px">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="账号:" size="small">
                            <el-input  placeholder="请输入账号"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="姓名:"  size="small">
                            <el-input  placeholder="请输入姓名"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="手机号:"  size="small">
                            <el-input  placeholder="请输入手机号"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="用户类型:"  size="small">
                            <el-select placeholder="请选择用户类型" v-model="searchParam.userType">
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
                        <el-form-item label="启用状态:" size="small">
                            <el-select placeholder="请选择启用状态" v-model="searchParam.status">
                                <el-option label="全部" value="1"></el-option>
                                <el-option label="启用" value="pinlei2"></el-option>
                                <el-option label="禁用" value="pinlei3"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item>
                            <div class="btn btn_blue" @click="search">查询</div>
                            <div class="btn btn_gray" style="margin-left:10px" @click="reset">重置</div>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </el-card>
        <el-card class="user_manage_table" style="padding: 0px">
            <div class="btn btn_blue" style="float:right;margin-bottom:10px;" @click="addUser">添加用户</div>
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable" height="412px">
                    <el-table-column
                            align="center"
                            prop="packageState"
                            label="账号">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="packageId"
                            label="姓名">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="saleStoreName"
                            label="手机号"
                            width="127px">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdName"
                            label="性别">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdNum"
                            label="启用状态">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="orderNum"
                            label="归属组织">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="orderState"
                            label="用户类型">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="deliverGoodsStore"
                            label="创建人">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="address"
                            label="创建时间"
                            width="127px">
                    </el-table-column>
                    <el-table-column align="center" label="操作" width="250">
                            <template slot-scope="scope">
                                <el-button type="text" style="color:blue;" @click.stop="check">查看</el-button>
                                <el-button type="text" style="color:blue;" @click.stop="edit">编辑</el-button>
                                <el-button type="text" style="color:blue;" @click.stop="unlock">解锁</el-button>
                                <el-button type="text" style="color:blue;" @click.stop="roleBind">角色绑定</el-button>
                            </template>
                    </el-table-column>
                </el-table>
                <el-pagination layout="total, sizes, prev, pager, next, jumper">
                </el-pagination>
            </div>
        </el-card>
        <div class="pop1" v-show="roleBindFlag" style="width:426px;height:188px;">
            <div class="pop1_head" style="height:52px;">
                <span class="pop1_txt" style="height:52px;line-height: 52px;">角色绑定</span>
                <span class="pop1_close iconfont iconicon-guanbi"  style="margin-top: 18px;" title="关闭" @click="closeRoleBind"></span>
            </div>
            <div style="height:70px;">
                <div style="margin:10px 20px 0px 20px;width:386px;">
                    <el-form style="width:386px;">
                        <el-form-item label="角色选择" required>
                            <el-select placeholder="请选择角色" v-model="value" style="width:295px;">
                                <el-option label="总部运营人员" value="pinlei1"></el-option>
                                <el-option label="其他人员" value="pinlei2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <div class="pop1_btm" style="height:52px;">
                <div class="pop1_b_inner" style="margin-top:13px;">
                    <div class="btn btn_blue marrig10" @click="confirmBind">确定</div>
                    <div class="btn btn_gray marrig10" @click="closeRoleBind">取消</div>
                </div>
            </div>
        </div>
        <div class="pop1" v-show="editFlag" style="width:583px;height:830px;">
            <div class="pop1_head" style="height:52px;">
                <span class="pop1_txt" style="height:52px;line-height: 52px;">{{popTitle}}</span>
                <span class="pop1_close iconfont iconicon-guanbi"  style="margin-top: 18px;" title="关闭" @click="closeEdit"></span>
            </div>
            <div style="height:710px;">
                <div style="margin:10px 20px 0px 20px;">
                    <el-form label-width="100px">
                        <el-form-item label="账号:" required>
                            <el-input placeholder="请输入账号" style="width:310px;" :disabled="isCheck"></el-input>
                            <span class="passwordTip">初始密码为123456</span>
                        </el-form-item>
                        <el-form-item label="姓名:" required>
                            <el-input placeholder="请输入姓名" style="width:310px;" :disabled="isCheck"></el-input>
                        </el-form-item>
                        <el-form-item label="手机号:" required>
                            <el-input placeholder="请输入手机号" style="width:310px;" :disabled="isCheck"></el-input>
                        </el-form-item>
                        <el-form-item label="用户类型:" required>
                            <el-select placeholder="请选择用户类型" v-model="value" style="width:310px;" :disabled="isCheck">
                                <el-option label="总部运营人员" value="pinlei1"></el-option>
                                <el-option label="其他人员" value="pinlei2"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="归属组织:" required>
                            <el-select placeholder="请选择归属组织" v-model="value" style="width:310px;" :disabled="isCheck">
                                <el-option label="总部运营人员" value="pinlei1"></el-option>
                                <el-option label="其他人员" value="pinlei2"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="启用状态:" required>
                            <el-checkbox-group v-model="value" :disabled="isCheck">
                                <el-checkbox label="启用" name="type"></el-checkbox>
                                <el-checkbox label="禁用" name="type1"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item label="性别:">
                            <el-checkbox-group v-model="value" :disabled="isCheck">
                                <el-checkbox label="男" name="type"></el-checkbox>
                                <el-checkbox label="女" name="type1"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item label="生日:">
                            <el-date-picker style="width:310px;" :disabled="isCheck"
                                v-model="value"
                                type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="邮箱:">
                            <el-input placeholder="请输入邮箱" style="width:310px;" :disabled="isCheck"></el-input>
                        </el-form-item>
                        <el-form-item label="工号:">
                            <el-input placeholder="请输入工号" style="width:310px;" :disabled="isCheck"></el-input>
                        </el-form-item>
                        <el-form-item label="备注:">
                            <el-input placeholder="请输入备注" style="width:310px;" type="textarea" :disabled="isCheck"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <div class="pop1_btm" style="height:52px;">
                <div class="pop1_b_inner" style="margin-top:13px;">
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
                isCheck: true,
                popTitle: "",
                searchParam:{
                    limit: 10,
                    page: 1,
                    userType: "1",
                    status:"1"
                },
                value:"",
                initTable:[
                    {
                        packageId: '张三',
                        packageState:'10001',
                        kdName:'男',
                        kdNum:'启用',
                        orderNum:'dd7018',
                        orderState:'公司',
                        saleStoreName:'15137341976',
                        deliverGoodsStore:'张三',
                        shr:'张三',
                        address:'2019-03-03',
                    }
                ],
                roleBindFlag:false,
                editFlag:false,
            }
        },
        beforeMount(){

        },
        mounted(){

        },
        methods:{
            search() {
                console.log(this.searchParam)
            },
            reset() {
                this.searchParam.limit = 10
                this.searchParam.page = 1
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
                this.editFlag = false
            },
            closeEdit(){
                this.editFlag = false
            },
            unlock() {
                this.$message({ message: '解锁成功', type: 'success'})
            },
            roleBind() {
                this.roleBindFlag = true
            },
            confirmBind() {
                this.roleBindFlag = false
            },
            closeRoleBind() {
                this.roleBindFlag = false
            }
        }
    }
</script>
<style scoped>
    .user_manage_searcher{
        width: 1136px;
        background-color: #ffffff;
        border-radius: 5px;
        margin:15px auto;
    }
    .user_manage_table{
        width: 1136px;
        background-color: #ffffff;
        border-radius: 5px;
        margin:auto;
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
</style>