<template>
    <div class="category_manage">
        <el-card class="category_manage_table" style="padding: 0px">
            <div style="float:right; margin-bottom:10px;">
                <div class="btn btn_blue" style="margin-left:10px" @click="addFirstCategory">新增一级品类</div>
            </div>
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable"  height="725px">
                    <el-table-column
                            align="center"
                            type="expand">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="packageId"
                            label="品类名称">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdName"
                            label="品类图片">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            label="操作">
                            <template slot-scope="scope">
                                <el-button type="text" style="color:blue;" @click="addChildrenCategory">新增下级品类</el-button>
                                <el-button type="text" style="color:blue;" @click="edit">编辑</el-button>
                                <el-button type="text" style="color:blue;" @click="remove">删除</el-button>
                            </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
        <div v-show="pop1Flag">
            <div class="mark"></div>
            <div class="pop1 content"  style="width:472px;height:447px;">
                <div class="pop1_head">
                    <span class="pop1_txt">商品补货</span>
                    <span class="pop1_close iconfont iconicon-guanbi" title="关闭" @click="closePop1"></span>
                </div>
                <div class="pop1_main">
                    <el-form label-width="80px" style="margin:10px 20px">
                        <el-form-item label="上级品类:"  size="small">
                            家用电器
                        </el-form-item>
                        <el-form-item label="品类名称:"  size="small">
                            <el-input placeholder="请输入品类名称"></el-input>
                        </el-form-item>
                        <el-form-item label="品类图片:"  size="small">
                            <el-upload
                                action="https://jsonplaceholder.typicode.com/posts/"
                                list-type="picture-card"
                                style="width:64px;height:64px;">
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="建议尺寸:"  size="small">
                            300 x 300 像素，最多可添加1张图片，不超过1M，支持JPG、JPEG、PNG格式图片
                        </el-form-item>
                    </el-form>
                </div>
                <div class="pop1_btm">
                    <div class="pop1_b_inner">
                        <div class="btn btn_blue marrig10" @click="closePop1">确定</div>
                        <div class="btn btn_gray marrig10" @click="closePop1">取消</div>
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
                value:"",
                pop1Flag:false,
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
            }
        },
        mounted(){

        },
        methods:{
            addFirstCategory() {
               this.pop1Flag = true
            },
            closePop1() {
               this.pop1Flag = false
           },
            addChildrenCategory() {
               this.pop1Flag = true
            },
            edit() {
               this.pop1Flag = true
            },
            remove() {
                let _this = this
                this.$cusMessageBox({
                    type:'warn',
                    content:'确认删除该品类吗？',
                    confirmButtonText: '确定', 
                    cancelButtonText: '取消',
                    showCancelButton: true,
                    confirmFn() {
                        _this.$message({ message: '删除成功', type: 'success', duration: 800 })
                    },
                    cancelFn() {
                    }
                })
            }
        }
    }
</script>
<style>
.el-upload--picture-card{
    width: 64px!important;
    height: 64px!important;
}
</style>
<style scoped>
.category_manage_table{
    width: calc(100% - 30px);
    background-color: #ffffff;
    border-radius: 5px;
    margin:15px auto;
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