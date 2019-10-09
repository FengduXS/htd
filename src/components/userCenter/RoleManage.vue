<template>
    <div class="role_manage">
        <el-card class="role_manage_searcher" style="padding: 0px">
            <el-form label-width="100px">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="角色名称:" size="small">
                            <el-input  placeholder="请输入账号"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="角色类型:"  size="small">
                            <el-select placeholder="请选择角色类型" v-model="value">
                                <el-option label="全部" value="pinlei1"></el-option>
                                <el-option label="总部" value="pinlei2"></el-option>
                                <el-option label="公司" value="pinei1"></el-option>
                                <el-option label="商家" value="plei2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <div style="float:right;">
                            <div class="btn btn_blue">查询</div>
                            <div class="btn btn_gray" style="margin-left:10px">重置</div>
                        </div>
                    </el-col>
                </el-row>
            </el-form>
        </el-card>
        <el-card class="role_manage_table" style="padding: 0px">
            <div class="btn btn_blue" style="float:right;margin-bottom:10px;" @click="addRole">添加角色</div>
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable" height="412px">
                    <el-table-column
                            align="center"
                            prop="packageState"
                            label="角色名称">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="packageId"
                            label="角色类型">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="saleStoreName"
                            label="创建人">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdName"
                            label="创建时间">
                    </el-table-column>
                    <el-table-column align="center" label="操作" width="300">
                            <template slot-scope="scope">
                                <el-button type="text" style="color:blue;" @click.stop="check">查看</el-button>
                                <el-button type="text" style="color:blue;" @click.stop="edit">编辑</el-button>
                                <el-button type="text" style="color:blue;" @click.stop="remove">删除</el-button>
                            </template>
                    </el-table-column>
                </el-table>
                <el-pagination layout="total, sizes, prev, pager, next, jumper">
                </el-pagination>
            </div>
        </el-card>
        <div class="pop1" v-show="editFlag" style="width:805px;height:666px;">
            <div class="pop1_head" style="height:52px;">
                <span class="pop1_txt" style="height:52px;line-height: 52px;">{{popTitle}}</span>
                <span class="pop1_close iconfont iconicon-guanbi"  style="margin-top: 18px;" title="关闭" @click="closeEdit"></span>
            </div>
            <div style="height:551px;">
                <div style="margin:10px 20px 0px 20px;">
                    <el-form label-width="100px">
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="角色名称:" required>
                                    <el-input placeholder="请输入角色名称" style="width:214px;" :disabled="isCheck"></el-input>
                                </el-form-item>
                                <el-form-item label="角色类型:" required>
                                    <el-select placeholder="请选择用户类型" v-model="value" style="width:214px;" :disabled="isCheck">
                                        <el-option label="全部" value="pinlei1"></el-option>
                                        <el-option label="总部" value="pinlei2"></el-option>
                                        <el-option label="公司" value="pinei1"></el-option>
                                        <el-option label="商家" value="plei2"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="角色描述:" required>
                                    <el-input type="textarea" :rows="15" placeholder="请输入角色描述" style="width:214px;" :disabled="isCheck"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="选择预警品类:" label-width="120px" required>
                                    <el-tree
                                        :data="data"
                                        show-checkbox
                                        node-key="id"
                                        :props="defaultProps"
                                        class="role_manage_tree">
                                    </el-tree>
                                </el-form-item>
                            </el-col>
                        </el-row>
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
                editFlag: false,
                popTitle: "",
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
                value: "",
                data: [
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
                        }, 
                        {
                            id: 2,
                            label: '一级 2',
                            children: [
                                {
                                    id: 5,
                                    label: '二级 2-1'
                                }, 
                                {
                                    id: 6,
                                    label: '二级 2-2'
                                }
                            ]
                        }
                    ],
                    defaultProps: {
                        children: 'children',
                        label: 'label'
                    }
            }
        },
        mounted(){

        },
        methods:{
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
                this.$message({ message: '删除成功', type: 'success'})
            },
            confirmEdit() {
                this.editFlag = false
            },
            closeEdit() {
                this.editFlag = false
            }
        }
    }
</script>
<style scoped>
    .role_manage_searcher{
        width: 1136px;
        background-color: #ffffff;
        border-radius: 5px;
        margin: 15px auto;
    }
    .role_manage_table{
        width: 1136px;
        background-color: #ffffff;
        border-radius: 5px;
        margin:auto;
    }
    .role_manage_tree{
        position: relative;
        top: 30px;
        left: -100px;
    }
</style>