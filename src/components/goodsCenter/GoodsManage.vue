<template>
    <div class="goods_manage">
        <div v-show="ifMainPage">
            <el-card class="goods_manage_searcher">
                <el-form label-width="100px">
                    <el-row>
                        <el-col :span="6">
                            <el-form-item label="商品:" size="small">
                                <el-input  placeholder="请输入公司名称" style="width:230px" v-model="searchParam.companyName"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="商品条码:"  size="small">
                                <el-input  placeholder="请输入商品条码" style="width:230px"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="商品类型:" size="small">
                                <el-select placeholder="请选择商品类型" v-model="searchParam.status" style="width:230px">
                                    <el-option label="启用" value="1"></el-option>
                                    <el-option label="禁用" value="0"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="品牌:" size="small">
                                <el-select placeholder="请选择品牌" v-model="searchParam.status" style="width:230px">
                                    <el-option label="海尔" value="1"></el-option>
                                    <el-option label="格力" value="0"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6">
                            <el-form-item label="品类:"  size="small">
                                <el-cascader v-model="searchParam.type" :options="options" style="width:230px" placeholder="请选择品类">
                                </el-cascader>
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
            <el-card class="goods_manage_table">
                <div style="float:right; margin-bottom:10px;">
                    <div class="btn btn_blue" @click="ifMainPage = false">添加商品</div>
                    <div class="btn btn_blue" style="margin-left:10px" @click="addGoodsAll">批量添加商品</div>
                    <div class="btn btn_blue" style="margin-left:10px">导出</div>
                </div>
                <div class="table_block">
                    <el-table border style="width: 100%" :data="initTable" height="550px">
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
                        <el-table-column align="center" label="操作" width="250px">
                                <template slot-scope="scope">
                                    <el-button type="text" @click.stop="check(scope.row)">查看</el-button>
                                    <el-button type="text" @click.stop="edit(scope.row)">编辑</el-button>
                                </template>
                        </el-table-column>
                    </el-table>
                    <el-pagination layout="total, sizes, prev, pager, next, jumper">
                    </el-pagination>
                </div>
            </el-card>
        </div>
        <div v-show="ifMainPage == false">
            <el-card class="goods_manage_searcher">
                <div slot="header">
                    <span>基本信息</span>
                    <div class="btn btn_blue" style="float: right;" @click="backToMain">返回</div>
                </div>
                <el-form label-width="100px">
                    <el-row>
                        <el-col :span="24">
                            <el-form-item label="商品类型:" size="small">
                                <el-radio-group v-model="searchParam.mallDisplayStyle">
                                    <el-radio :label="0">标准商品</el-radio>
                                    <el-radio :label="1">称重商品</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6">
                            <el-form-item label="商品品类:" size="small">
                                <el-cascader v-model="searchParam.type" :options="options" style="width:230px" placeholder="请选择商品品类">
                                </el-cascader>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="商品品牌:"  size="small">
                                <el-select placeholder="请选择商品品牌" v-model="searchParam.status" style="width:230px">
                                    <el-option label="海尔" value="1"></el-option>
                                    <el-option label="格力" value="0"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="商品名称:" size="small">
                                <el-input  placeholder="请输入商品名称" style="width:230px"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="商品卖点:"  size="small">
                                <el-input  placeholder="请输入商品卖点" style="width:230px"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6">
                            <el-form-item label="计价单位:"  size="small">
                                <el-select placeholder="请选择计价单位" v-model="searchParam.status" style="width:230px">
                                    <el-option label="海尔" value="1"></el-option>
                                    <el-option label="格力" value="0"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="长(厘米):"  size="small">
                                <el-input  placeholder="请输入长度" style="width:230px"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="宽(厘米):"  size="small">
                                <el-input  placeholder="请输入宽度" style="width:230px"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="高(厘米):"  size="small">
                                <el-input  placeholder="请输入高度" style="width:230px"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6">
                            <el-form-item label="体积(厘米³):"  size="small">
                                <el-input  placeholder="请输入体积" style="width:230px"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="毛重(克):"  size="small">
                                <el-input  placeholder="请输入毛重" style="width:230px"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="净重(克):"  size="small">
                                <el-input  placeholder="请输入净重" style="width:230px"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="产地:"  size="small">
                                <el-input  placeholder="请输入产地" style="width:230px"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </el-card>
            <el-card class="goods_manage_searcher">
                <div slot="header">
                    <span>规格信息</span>
                </div>
                <el-form label-width="100px">
                    <el-form-item label="规格设置:"  size="small">
                        <el-row>
                            <el-col :span="24">
                                <el-select  v-model="searchParam.status" style="width:230px">
                                    <el-option label="颜色" value="1"></el-option>
                                    <el-option label="尺寸" value="0"></el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="24">
                                <el-checkbox-group v-model="checkList">
                                    <el-checkbox label="1">黑色</el-checkbox>
                                    <el-checkbox label="2">白色</el-checkbox>
                                    <el-checkbox label="3">红色</el-checkbox>
                                    <el-checkbox label="4">金色</el-checkbox>
                                    <el-checkbox label="5">红色</el-checkbox>
                                </el-checkbox-group>
                            </el-col>
                            <el-col :span="24">
                                <el-select v-model="searchParam.status" style="width:230px">
                                    <el-option label="颜色" value="1"></el-option>
                                    <el-option label="尺寸" value="0"></el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="24">
                                <el-checkbox-group v-model="checkList">
                                    <el-checkbox label="1">200*200</el-checkbox>
                                    <el-checkbox label="2">200*300</el-checkbox>
                                    <el-checkbox label="3">200*400</el-checkbox>
                                    <el-checkbox label="4">200*500</el-checkbox>
                                    <el-checkbox label="5">400*400</el-checkbox>
                                </el-checkbox-group>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item label="价格库存:"  size="small" required="">
                        <div class="table_block">
                            <el-table border style="width: 100%" :data="initTable" height="200px">
                                <el-table-column
                                    align="center"
                                    prop="packageState"
                                    label="颜色">
                                </el-table-column>
                                <el-table-column
                                    align="center"
                                    prop="packageId"
                                    label="尺寸">
                                </el-table-column>
                                <el-table-column
                                    align="center"
                                    prop="saleStoreName"
                                    label="图片"
                                    width="127px">
                                </el-table-column>
                                <el-table-column
                                    align="center"
                                    prop="kdName"
                                    label="条码">
                                </el-table-column>
                                <el-table-column
                                    align="center"
                                    prop="kdNum"
                                    label="零售价">
                                </el-table-column>
                                <el-table-column
                                    align="center"
                                    prop="orderNum"
                                    label="库存">
                                </el-table-column>
                                <el-table-column
                                    align="center"
                                    prop="orderState"
                                    label="采购价">
                                </el-table-column>
                                <el-table-column
                                    align="center"
                                    prop="deliverGoodsStore"
                                    label="限价">
                                </el-table-column>
                                <el-table-column align="center" label="操作" width="250">
                                    <template slot-scope="scope">
                                        <el-button type="text" @click.stop="removeStock(scope.row)">删除</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <p>图片建议尺寸：800 x 800 像素，最多可添加8张图片，不超过2M，支持JPG、JPEG、PNG格式图片</p>
                    </el-form-item>
                </el-form>
            </el-card>
            <el-card class="goods_manage_searcher">
                <div slot="header">
                    <span>供应链/财务</span>
                </div>
                <el-form label-width="100px">
                    <el-row>
                        <el-col :span="6">
                            <el-form-item label="供应商:" size="small">
                                <el-select placeholder="请选择供应商" v-model="searchParam.status" style="width:230px">
                                    <el-option label="海尔" value="1"></el-option>
                                    <el-option label="格力" value="0"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="配送方式:"  size="small">
                                <el-radio-group v-model="searchParam.mallDisplayStyle">
                                    <el-radio :label="0">配送</el-radio>
                                    <el-radio :label="1">自提</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="进项税率:" size="small">
                                <el-select placeholder="请选择进项税率" v-model="searchParam.status" style="width:230px">
                                    <el-option label="海尔" value="1"></el-option>
                                    <el-option label="格力" value="0"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="销项税率:"  size="small">
                                <el-select placeholder="请选择销项税率" v-model="searchParam.status" style="width:230px">
                                    <el-option label="海尔" value="1"></el-option>
                                    <el-option label="格力" value="0"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </el-card>
            <el-card class="goods_manage_searcher">
                <div slot="header">
                    <span>商品图文</span>
                </div>
                <el-form label-width="100px">
                    <el-form-item label="商品主图:">
                        <el-upload
                            class="avatar-uploader"
                            action="http://localhost:8080/api/logo/post"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="logoUrl" :src="logoUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                        建议尺寸：800 x 800 像素，最多可添加8张图片，不超过2M，支持JPG、JPEG、PNG格式图片
                    </el-form-item>
                    <el-form-item label="视频介绍:">
                        <el-upload
                            class="avatar-uploader"
                            action="http://localhost:8080/api/logo/post"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="logoUrl" :src="logoUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                        支持格式mkv、mp4、avi、rm、rmvb、wmv、flv，不超过50M
                    </el-form-item>
                    <el-form-item label="商品详情:">
                        <div id="editor" type="text/plain" style="width:100%;height:300px;"></div>
                        建议尺寸：800 x 800 像素，单张图片不超过5M，支持JPG、JPEG、PNG格式图片
                    </el-form-item>
                    <el-form-item label="包装清单:">
                        <el-input placeholder="请输入包装清单" type="textarea" :rows="3"></el-input>
                    </el-form-item>
                </el-form>
            </el-card>
            <el-card class="goods_manage_table">
                <div slot="header">
                    <span>商品参数</span>
                </div>
                <el-row>
                    <el-col :span="6">
                        <el-input  placeholder="请输入参数名称" style="width:230px"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <el-input  placeholder="请输入参数值" style="width:230px"></el-input>
                    </el-col>
                </el-row>
                <div style="margin:0px auto;width:300px;">
                    <div class="btn btn_blue" @click="backToMain">取消</div>
                    <div class="btn btn_blue" style="margin-left:40px" @click="save">保存</div>
                </div>
            </el-card>
        </div>
        <div v-show="pop1Flag">
            <div class="mark"></div>
            <div class="pop1 content"  style="width:472px;">
                <div class="pop1_head">
                    <span class="pop1_txt">导入盘点结果</span>
                    <span class="pop1_close iconfont iconicon-guanbi" title="关闭" @click="closePop1"></span>
                </div>
                <div class="pop1_main">
                    <el-form label-width="100px">
                        <el-form-item label="请选择:"  size="small">
                            <el-upload class="upload-demo" action="#">
                                <el-button size="small" class="uploadButton">选择文件</el-button>
                            </el-upload>
                            <span class="downLoad">点击下载最新模板</span>
                        </el-form-item>
                    </el-form>
                    <p class="tips">温馨提示：请按示例模板导入！最大限制数为500，如果提示有空格，请下载最新模板导入！</p>
                </div>
                <div class="pop1_btm">
                    <div class="pop1_b_inner">
                        <div class="btn btn_blue marrig10" @click="closePop1">确定新增</div>
                        <div class="btn btn_gray marrig10" @click="closePop1">暂不新增</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import '../../assets/js/ueditor/ueditor.config'
import '../../assets/js/ueditor/ueditor.all'
import '../../assets/js/ueditor/zh-cn'
export default {
    data(){
        return {
            logoUrl:'',
            checkList:[],
            ifMainPage: true,
            searchParam:{},
            options: [
                {
                    value: 'zhinan',
                    label: '指南',
                    children: [
                        {
                            value: 'shejiyuanze',
                            label: '设计原则',
                        }
                    ]
                }
            ],
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
                    address:'2019-03-03'
                }
            ],
            pop1Flag:false,
            ue:null
        }
    },
    mounted(){
        this.ue = UE.getEditor('editor')
    },
    methods:{
        search() {

        },
        reset() {

        },
        check(data) {
            this.ifMainPage = false
        },
        edit(data) {
            this.ifMainPage = false
        },
        backToMain() {
            this.ifMainPage = true
        },
        save() {
            this.backToMain()
        },
        removeStock(data) {

        },
        addGoodsAll() {
            this.pop1Flag = true
        },
        closePop1() {
            this.pop1Flag = false
        },
        handleAvatarSuccess(res, file) {
            console.log(res);
            console.log(file);
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
.goods_manage_searcher{
    width: calc(100% - 30px);
    background-color: #ffffff;
    border-radius: 5px;
    margin:15px auto;
    padding: 0px;
}
.goods_manage_table{
    width: calc(100% - 30px);
    background-color: #ffffff;
    border-radius: 5px;
    margin:0 auto; 
    padding: 0px;
}
.uploadButton {
    width: 86px;
    height: 32px;
    background-color: #eceff4;
    border-radius: 3px;
    border: solid 1px #c6c9d3;
    font-family: PingFangSC-Medium;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #333333;
}
.tips{
    width: 432px;
    height: 36px;
    font-family: PingFangSC-Regular;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #e51e00;
    margin: 0 auto;
}
.downLoad{
    width: 113px;
    height: 20px;
    font-family: PingFangSC-Medium;
    text-decoration: underline;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #5281ff;
    cursor: pointer;
    position: absolute;
    left: 230px;
    top: 0px;
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