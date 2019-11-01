<template>
    <div class="brand_manage">
        <div class="brand_manage_searcher">
            <el-form label-width="100px">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="品牌名称:" size="small" style="marginBottom:0px;">
                            <el-input  placeholder="请输入品牌名称" style="width:230px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item style="marginBottom:0px;">
                            <div class="btn btn_blue" @click="search">查询</div>
                            <div class="btn btn_gray" style="margin-left:10px" @click="reset">重置</div>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div class="brand_manage_table">
            <div style="float:right; margin-bottom:10px;">
                <div class="btn btn_blue" style="margin-left:10px" @click="addBrand">新增品牌</div>
            </div>
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable" height="621px">
                    <el-table-column
                            align="center"
                            prop="packageId"
                            label="品牌名称">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="packageState"
                            label="品类图片">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="kdNum"
                            label="创建日期">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            label="操作">
                            <template slot-scope="scope">
                                <el-button type="text" style="color:blue;" @click.stop="edit(scope.row)">编辑</el-button>
                                <el-button type="text" style="color:blue;" @click.stop="remove(scope.row)">删除</el-button>
                            </template>
                    </el-table-column>
                </el-table>
                <el-pagination layout="total, sizes, prev, pager, next, jumper">
                </el-pagination>
            </div>
        </div>
        <div v-show="pop1Flag">
            <div class="mark"></div>
            <div class="pop1 content">
                <div class="pop1_head">
                    <span class="pop1_txt">编辑品牌</span>
                    <span class="pop1_close iconfont iconicon-guanbi" title="关闭" @click="closePop1"></span>
                </div>
                <div class="pop1_main">
                    <el-form label-width="100px">
                        <el-form-item label="品牌名称:" size="small">
                            <el-input  placeholder="请输入品牌名称" style="width:320px"></el-input>
                        </el-form-item>
                        <el-form-item label="品牌logo:"  size="small">
                            <el-upload
                                class="avatar-uploader"
                                action="http://localhost:8080/api/logo/post"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                                <img v-if="logoUrl" :src="logoUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                            <p class="uploadTip">建议尺寸：300 x 300 像素，最多可添加1张图片，不超过1M，支持JPG、JPEG、PNG格式图片</p>
                        </el-form-item>
                        <el-form-item label="品牌介绍:"  size="small">
                            <el-input  placeholder="请输入品牌介绍" type="textarea" :rows="3" style="width:320px"></el-input>
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
                logoUrl:'',
                value: "",
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
                value1: [],
                pop1Flag: false,
                pop2Flag: false,
            }
        },
        mounted(){

        },
        methods:{
            search() {

            },
            reset() {

            },
            addBrand() {
                this.pop1Flag = true
            },
            remove(data) {
                let _this = this
                this.$cusMessageBox({
                    type:'warn',
                    content:'确认删除该品牌吗？',
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
            edit() {
                this.pop1Flag = true
            },
            closePop1() {
                this.pop1Flag = false
            },
            handleAvatarSuccess(res, file) {
                this.logoUrl = URL.createObjectURL(file.raw);
            },
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
        }
    }
</script>
<style scoped>
.brand_manage_searcher{
    background-color: #ffffff;
    border-radius: 5px;
    margin:15px;
    padding: 15px;
}
.brand_manage_table{
    height: 702px;
    background-color: #ffffff;
    border-radius: 5px;
    margin: 15px;
    padding: 15px;
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
    width: 472px;
    height: 436px;
}
.uploadTip{
    width: 350px;
	height: 40px;
	font-family: PingFangSC-Regular;
	font-size: 12px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #a4a8b5;
}
</style>