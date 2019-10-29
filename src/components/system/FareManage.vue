<template>
    <div class="fare_manage">
        <!-- 查询表单 -->
        <div class="fare_manage_searcher">
            <el-form label-width="100px">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="运费模板名称:" size="small">
                            <el-input  placeholder="请输入运费模板名称" style="width:230px" v-model="searchParam.companyName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="计费方式:"  size="small">
                            <el-select placeholder="请选择计费方式" v-model="searchParam.status" style="width:230px">
                                <el-option label="启用" value="1"></el-option>
                                <el-option label="禁用" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="运费承担方:"  size="small">
                            <el-select placeholder="请选择运费承担方" v-model="searchParam.status" style="width:230px">
                                <el-option label="买家" value="1"></el-option>
                                <el-option label="卖家" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="适用区域:" size="small">
                            <el-input  placeholder="请输入适用区域" style="width:230px" v-model="searchParam.companyName"></el-input>
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
        <div class="fare_manage_table">
            <div class="btn btn_blue" style="float:right;margin-bottom:10px;" @click="addCompany">新增运费模板</div>
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable" height="563px">
                    <el-table-column
                            align="center"
                            prop="companyCode"
                            label="运费模板名称">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="companyName"
                            label="运费承担方">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="companyTypeStr"
                            label="计费方式">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="statusStr"
                            label="适用地区">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="saleChannelStr"
                            label="首件（件/克）">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="mallDisplayStyleStr"
                            label="运维（元）">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="saleChannelStr"
                            label="每增加（件/克）">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="mallDisplayStyleStr"
                            label="增加运费（元）">
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
        <!-- 编辑弹窗 -->
        <div v-show="editFlag">
            <div class="mark"></div>
            <div class="pop1 content">
                <div class="pop1_head">
                    <span class="pop1_txt">{{popTitle}}</span>
                    <span class="pop1_close iconfont iconicon-guanbi" title="关闭" @click="closeEdit"></span>
                </div>
                <div class="pop1_main" style="padding: 20px 20px;height:700px;" ref="scroll">
                   
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
    export default {
        data(){
            return {
                searchParam:{ //查询条件
                    companyName:"",
                    companyType:"",
                    status:"",
                },
                editFlag: false, //弹窗控制
                popTitle: "",//弹窗标题
                initTable:[ //表格数据
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
            }
        },
        mounted(){

        },
        methods: {
            search() {
                
            },
            reset() {
                
            },
            addCompany() {
                this.popTitle = "新增运费摸板"
                this.editFlag = true
            },
            check(data) {
                this.popTitle = "查看运费摸板"
                this.editFlag = true
            },
            edit(data) {
                this.popTitle = "修改运费摸板"
                this.editFlag = true
            },
            confirmEdit() {
                this.closeEdit()
            },
            closeEdit() {
                this.editFlag = false
            },
        }
    }
</script>
<style scoped>
.fare_manage_searcher{
    width: calc(100% - 60px);
    height: auto;
    background-color: #ffffff;
    border-radius: 5px;
    margin:15px auto;
    padding: 15px;
}
.fare_manage_table{
    width: calc(100% - 60px);
    background-color: #ffffff;
    height: 667px;
    border-radius: 5px;
    margin:0 auto; 
    padding: 15px 15px 0 15px;
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