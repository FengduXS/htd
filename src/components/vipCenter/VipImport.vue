<template>
    <div class="vip_import">
        <div class="vi_blocka">
            <div class="vi_bleft">
                <div class="vi_left_center">
                    <div class="vi_lea">
                        <div class="vi_bl_input">
                            <input class="filename" type="text" placeholder="请选择要上传的文件" v-model="fileNames" />
                        </div>
                        <div class="vi_bl_upbtn">
                            <label for='my_file' >
                                <div class="inputlabelbox">开始上传</div>
                            </label>
                            <input type="file" name="myfile" id='my_file' style="display:none;"
                                   accept=".xlsx"
                                   @change="filesChange"
                                   ref="fileref"/>
                        </div>
                    </div>
                    <div class="vi_upload_progress">
                        <span class="vprogress"></span>
                    </div>
                    <div class="vi_up_num">10%</div>
                </div>
            </div>
            <div class="vi_brig">
                <h4 class="vi_rigtitle">操作说明</h4>
                <ul class="vi_brul">
                    <li class="vi_brli">
                        <span class="vi_brl_key" @click="showPopWarn">第一步：</span>
                        <span class="vi_brl_val">点击下载《会员批量导入模板.xlsx》；</span>
                    </li>
                    <li class="vi_brli">
                        <span class="vi_brl_key">第二步：</span>
                        <span class="vi_brl_val">按模板格式要求填入会员数据；</span>
                    </li>
                    <li class="vi_brli">
                        <span class="vi_brl_key">第三步：</span>
                        <span class="vi_brl_val">选择需要导入的会员清单文件进行上传（见左侧）；</span>
                    </li>
                    <li class="vi_brli">
                        <span class="vi_brl_key">第四步：</span>
                        <span class="vi_brl_val">文件上传后，可通过下面“导入处理信息”列表，查看处理状态，根据失败提示导出数据，修改后重新上传。</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="vi_blockb">
            <div class="module_title">导入任务处理信息</div>
            <div class="vi_table">
                <div class="table_block">
                    <el-table
                        :data="tableData.slice((currpage - 1) * pagesize, currpage * pagesize)"
                        border
                        style="width: 100%"
                        height="490px">
                        <el-table-column
                            align="center"
                            prop="id"
                            label="任务编号"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            align="center"
                            prop="filename"
                            label="文件名称"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            align="center"
                            prop="uploadtime"
                            label="上传时间">
                        </el-table-column>
                        <el-table-column
                            align="center"
                            prop="uploadMan"
                            label="上传人">
                        </el-table-column>
                        <el-table-column
                            align="center"
                            prop="doState"
                            label="处理状态">
                        </el-table-column>
                        <el-table-column
                            align="center"
                            prop="successDataNum"
                            label="成功数据（条）">
                        </el-table-column>
                        <el-table-column
                            align="center"
                            prop="errorDataNum"
                            label="失败数据（条）">
                        </el-table-column>
                        <el-table-column
                            align="center"
                            label="操作">
                            <el-button size="mini" type="text">下载失败会员数据</el-button>
                        </el-table-column>
                    </el-table>
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currpage"
                        :page-sizes="pageSizes"
                        :page-size="pagesize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="tableData.length">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                tableData: [
                    {
                        id: 'P01',
                        filename:'文件名1.xlsx',
                        uploadtime:'2019-10-02 14:34:23',
                        uploadMan:'上传人',
                        doState:'处理中',
                        successDataNum:'878',
                        errorDataNum:'90'
                    }
                ],
                currpage:1,
                pagesize:5,
                pageSizes:[5,10,15,20],
                fileNames:''
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
            filesChange(){
                let fileObj = this.$refs.fileref.files[0];
                this.fileNames = fileObj.name;
            },
            showPopWarn(){
                this.$cusMessageBox({
                    type:'doubt',    // complete（默认）, danger, doubt ,info ,warn
                    content:'点击下载《会员批量导入模板.xlsx》',
                    confirmButtonText: '确定',    //非必须
                    cancelButtonText:'取消',  //非必须
                    showCancelButton:true,  //是否显示取消按钮
                    confirmFn(){        //确定回调  非必须
                        console.log('成功···')
                    },
                    cancelFn(){         //取消回调 非必须
                        console.log('取消···')
                    }
                })
            }
        }
    }
</script>
<style scoped>
    .vi_blocka{
        background: #fff;
        margin:15px;
        border-radius: 5px;
        overflow: hidden;
        padding:15px;
    }
    .vi_bleft{
        width:45%;
        height: 100px;
        float:left;
        box-sizing: border-box;
    }
    .vi_brig{
        width:55%;
        height: auto;
        float:left;
        overflow: hidden;
        border-left: solid 1px #c6c9d3;
        box-sizing: border-box;
    }
    .inputlabelbox{width:96px;
        height: 32px;
        background: #5281ff;
        line-height: 32px;
        text-align: center;
        font-size: 14px;
        color:#fff;
        border-radius: 5px;
        cursor:pointer;
    }
    .inputlabelbox:hover{
        background: #4469ff;
    }
    .vi_bl_input{
        width: 200px;
        height: 30px;
        border: solid 1px #c6c9d3;
        border-radius: 5px;
        font-size: 14px;
        color:#a4a8b5;
        line-height: 30px;
        text-indent: 10px;
        float:left;

    }
    .vi_bl_upbtn{
        float:left;
        margin-left:15px;
    }
    .vi_upload_progress{
        clear:both;
        height: 10px;
        border:1px solid #c6c9d3;
        border-radius: 10px;
        width: 310px;
        margin-top:20px;overflow: hidden;background: #f8f8f8;
    }
    .vi_lea{
        height: auto;
        overflow: hidden;
        margin-top:20px;
    }
    .vprogress{
        height: 100%;
        width: 10%;
        background: #5281ff;
        display: block;
    }
    .vi_up_num{
        height: 20px;
        line-height: 20px;
        text-align: center;
        width: 310px;
        color:#5281ff;
        font-size: 14px;
        margin-top:15px;
    }
    .vi_left_center{
        width: 320px;
        margin:0 auto;
        overflow: hidden;
        margin-top:20px;
    }
    .vi_brul{
        display: block;
        overflow: hidden;
        margin-left:50px;
        margin-top:20px;
    }
    .vi_brli{
        height: auto;
        overflow: hidden;
        font-size: 14px;
        color:#333;
        margin-bottom:10px;
    }
    .vi_brl_key{
        height: 20px;
        line-height: 20px;
        float:left;
        display: block;
        width: 60px;
    }
    .vi_brl_val{
        height: auto;
        line-height: 20px;
        display: block;
        margin-left:60px;
    }
    .vi_rigtitle{
        margin-left:50px;
    }
    .vi_blockb{
        background: #fff;
        margin:15px;
        border-radius: 5px;
        overflow: hidden;
        padding:15px;
    }
    .module_title{
        height: 30px;
        line-height: 30px;
        color:#333;
        font-size: 16px;
        font-weight: 600;
    }
    .vi_table{
        height: auto;
        overflow: hidden;
        margin-top:15px;
    }
    .filename{
        width: 90%;
        background: none;
        outline: none;
        border:none;
        height: 18px;
        line-height: 18px;
        color:#a4a8b5;
    }
</style>