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
                            <el-select placeholder="请选择用户类型" v-model="value">
                                <el-option label="用户类型一" value="pinlei1"></el-option>
                                <el-option label="用户类型二" value="pinlei2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="启用状态:" size="small">
                            <el-select placeholder="请选择启用状态" v-model="value">
                                <el-option label="全部" value="pinlei1"></el-option>
                                <el-option label="启用" value="pinlei2"></el-option>
                                <el-option label="禁用" value="pinlei3"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item>
                            <div class="btn btn_blue">查询</div>
                            <div class="btn btn_gray" style="margin-left:10px">重置</div>
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
                            label="手机号">
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
                            label="创建时间">
                    </el-table-column>
                    <el-table-column align="center" label="操作" width="300">
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
        <div class="pop1" v-show="editFlag" style="width:583px;height:710px;">
            <div class="pop1_head" style="height:52px;">
                <span class="pop1_txt" style="height:52px;line-height: 52px;">角色绑定</span>
                <span class="pop1_close iconfont iconicon-guanbi"  style="margin-top: 18px;" title="关闭" @click="closeEdit"></span>
            </div>
            <div style="height:595px;">
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
                value:"",
                initTable:[
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
                roleBindFlag:false,
                editFlag:false,
            }
        },
        beforeMount(){

        },
        mounted(){

        },
        methods:{
            addUser() {
                this.editFlag = true
            },
            check() {

            },
            edit() {
                this.editFlag = true
            },
            confirmEdit() {
                this.editFlag = false
            },
            closeEdit(){
                this.editFlag = false
            },
            unlock() {
                
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
        margin:auto;
    }
    .user_manage_table{
        width: 1136px;
        background-color: #ffffff;
        border-radius: 5px;
        margin:auto;
    }
</style>