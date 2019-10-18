<template>
    <div class="page_list">
        <div class="pl_ss">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
                     :inline="true"
            >
                <el-form-item label="页面名称：" prop="">
                    <el-input v-model="ruleForm.pageName" class="ipt_wid300"></el-input>
                </el-form-item>
                <el-form-item label="页面状态：" prop="">
                    <el-input v-model="ruleForm.pageState" class="ipt_wid300"></el-input>
                </el-form-item>

                <el-form-item label="更新时间：">
                    <el-date-picker
                            v-model="ruleForm.dateStart"
                            type="datetime"
                            placeholder="选择开始时间">
                    </el-date-picker>
                    <span class="address_line">-</span>
                    <el-date-picker
                            v-model="ruleForm.dateEnd"
                            type="datetime"
                            placeholder="选择结束时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="页面类型：" prop="">
                    <el-select v-model="ruleForm.pageClass" placeholder="请选择品牌">
                        <el-option label="类型1" value="class1"></el-option>
                        <el-option label="类型2" value="class2"></el-option>
                    </el-select>
                </el-form-item>
                <div class="btn btn_blue">确定</div>
                <div class="btn btn_gray">取消</div>
            </el-form>
        </div>

        <div class="pl_list">
            <div class="btn btn_blue add_page" @click="addPages">添加页面</div>
            <div class="table_block">
                <el-table
                        :data="tableData1.slice((currpage - 1) * pagesize, currpage * pagesize)"
                        border
                        style="width: 100%">
                    <el-table-column
                            align="center"
                            prop="pageName"
                            label="页面名称"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="pageClass"
                            label="页面类型"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="createTime"
                            label="创建时间">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="updateTime"
                            label="更新时间">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="pageState"
                            label="页面状态"
                            width="120"
                    >
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="createMan"
                            label="创建人"
                            width="120"
                    >
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop=""
                            label="操作">
                        <template slot-scope="scope">
                            <el-button
                                    size="mini"
                                    type="text"
                                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                            <el-button
                                    size="mini"
                                    type="text"
                                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                            <el-button size="mini" type="text">预览</el-button>
                            <el-button size="mini" type="text">发布</el-button>
                            <el-button size="mini" type="text">复制</el-button>
                            <el-button size="mini" type="text">复制链接</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currpage"
                        :page-sizes="pageSizes"
                        :page-size="pagesize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="tableData1.length">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                ruleForm: {
                    pageName: '',  //页面名称
                    pageState: '', //页面状态
                    dateStart: '',
                    dateEnd: '',
                    pageClass:'',        //页面类型
                },
                rules: {
                    pageName: [
                        { required: true, message: '请输入商家名称', trigger: 'blur' },
                    ],
                    pageState: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ]
                },
                tableData1: [
                    {
                        pageName: '店铺首页',
                        pageClass:'首页',
                        createTime:'2019-01-03 12:23:21',
                        updateTime:'2019-02-03 12:23:21',
                        pageState:'待上架',
                        createMan:'admin'
                    }

                ],
                currpage:1,
                pagesize:5,
                pageSizes:[5,10,15,20],
            }
        },
        mounted(){

        },
        methods:{
            handleSizeChange(val) {
                this.pagesize = val;

            },
            handleCurrentChange(val) {
                this.currpage = val;
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            //新增页面
            addPages(){
                this.$router.push({
                    name:'addPage'
                });
            }
        }
    }
</script>
<style scoped>
    .pl_ss{height: auto;overflow: hidden;margin:15px;padding:15px;background: #fff;border-radius: 5px;}
    .pl_ss .btn{display: inline-block;float:none;margin-top:3px;margin-right: 10px;}
    .pl_list{height: auto;overflow: hidden;margin:15px;padding:15px;background: #fff;border-radius: 5px;}
    .add_page{float:right;margin-bottom: 10px;}
</style>