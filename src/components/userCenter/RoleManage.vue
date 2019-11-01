<template>
    <div class="role_manage">
        <div class="role_manage_searcher">
            <el-form label-width="100px">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="角色名称:" size="small" style="marginBottom: 0px;">
                            <el-input  placeholder="请输入账号" v-model="searchParam.name" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="角色类型:"  size="small" style="marginBottom: 0px;">
                            <el-select placeholder="请选择角色类型" v-model="searchParam.type" style="width:230px">
                                <el-option label="总部" :value="0"></el-option>
                                <el-option label="公司" :value="1"></el-option>
                                <el-option label="商家" :value="2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <div style="float:right;">
                            <div class="btn btn_blue" @click="search">查询</div>
                            <div class="btn btn_gray" style="margin-left:10px" @click="reset">重置</div>
                        </div>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div class="role_manage_table">
            <div class="btn btn_blue" style="float:right;margin-bottom:10px;" @click="addRole">添加角色</div>
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable" height="620px">
                    <el-table-column
                            align="center"
                            prop="name"
                            label="角色名称">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="type"
                            label="角色类型">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="createUserName"
                            label="创建人">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="createTime"
                            label="创建时间"
                            :sortable="true">
                    </el-table-column>
                    <el-table-column align="center" label="操作" width="300">
                        <template slot-scope="scope">
                            <el-button type="text" @click.stop="check(scope.row)">查看</el-button>
                            <el-button type="text" @click.stop="edit(scope.row)">编辑</el-button>
                            <el-button type="text" @click.stop="remove(scope.row)">删除</el-button>
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
                <div class="pop1_main" style="position: relative;">
                    <el-form label-width="120px" :rules="rule" ref="editParam" :model="editParam">
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="角色名称:" prop="name">
                                    <el-input placeholder="请输入角色名称" v-model="editParam.name" style="width:214px;" :disabled="isCheck"></el-input>
                                </el-form-item>
                                <el-form-item label="角色类型:" prop="type">
                                    <el-select placeholder="请选择用户类型" v-model="editParam.type" style="width:214px;" :disabled="isCheck" clearable>
                                        <el-option label="总部" :value="0"></el-option>
                                        <el-option label="公司" :value="1"></el-option>
                                        <el-option label="商家" :value="2"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="角色描述:" prop="desc">
                                    <el-input v-model="editParam.desc" type="textarea" :rows="7" placeholder="请输入角色描述" style="width:214px;" :disabled="isCheck"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="选择预警品类:" label-width="120px" required>
                                    <div class="role_manage_tree"> 
                                        <el-tree
                                            :data="treeData"
                                            show-checkbox
                                            node-key="id"
                                            >
                                        </el-tree>
                                    </div>
                                </el-form-item>
                            </el-col>
                        </el-row>
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
export default {
    data() {
        return {
            searchParam:{
                limit: 10,
                page: 1,
                name:"",
                type: 0
            },
            initTable:[
                {
                    name: 'xx角色',
                    type:1,
                    createUserName:'张三',
                    createTime:'2019-05-28'
                }
            ],
            popTitle: "",
            isCheck: true, //查看时表单不可编辑
            editFlag: false,
            editParam:{
                name:"",
                type:"",
                desc:"",
            },
            treeData: [
                {
                    id: 1,
                    label: '一级 1',
                    children: [
                        {
                            id: 4,
                            label: '二级 1-1',
                            children: [
                                {
                                    id: 9,
                                    label: '三级 1-1-1'
                                }, {
                                    id: 10,
                                    label: '三级 1-1-2'
                                }
                            ]
                        } 
                    ]
                }
            ],
            rule:{
                name: [
                    {required: true, message: '请输入姓名', trigger: 'blur'},
                    {min:0,max:20, message: '不超过20字符', trigger: 'blur'}
                ],
                type: [
                    {required: true, message: '请选择角色类型', trigger: 'change'}
                ],
                desc: [
                    {required: true, message: '请输入描述', trigger: 'blur'},
                    {min:0, max: 1000, message: '不超过1000个字符', trigger: 'blur'}
                ],
            }
        }
    },
    mounted(){

    },
    methods:{
        search() {

        },
        reset() {
            this.searchParam.roleName = ""
            this.searchParam.roleType =""
        },
        addRole() {
            this.popTitle = "添加角色"
            this.isCheck = false
            this.editFlag = true
        },
        check() {
            this.popTitle = "查看角色"
            this.isCheck = true
            this.editFlag = true
        },
        edit() {
            this.popTitle = "修改角色"
            this.isCheck = false
            this.editFlag = true
        },
        remove() {
            let _this = this
            this.$cusMessageBox({
                type:'warn',
                content:'确认删除该角色吗？',
                confirmButtonText: '确定', 
                cancelButtonText: '取消',
                showCancelButton: true,
                confirmFn() {
                    _this.$message({ message: '删除成功', type: 'success', duration: 800 })
                },
                cancelFn() {
                }
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
            this.editParam.name = ""
            this.editParam.type = ""
            this.editParam.desc = ""
            this.editFlag = false
        }
    }
}
</script>
<style scoped>
    .role_manage_searcher{
        background-color: #ffffff;
        border-radius: 5px;
        margin: 15px;
        padding: 15px;
    }
    .role_manage_table{
        height: 703px;
        background-color: #ffffff;
        border-radius: 5px;
        margin: 15px;
        padding: 15px;
    }
    .role_manage_tree{
        width: 378px;
        height: 481px;
        overflow: auto;
        position: relative;
        top: 30px;
        left: -123px;
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