<template>
    <div class="sj_manage">
        <div class="sjm_block">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
                <el-form-item label="商家名称：" prop="storeName">
                    <el-input v-model="ruleForm.storeName" class="ipt_wid300"></el-input>
                </el-form-item>
                <el-form-item label="联系人：" prop="">
                    <el-input v-model="ruleForm.contackMan" class="ipt_wid300"></el-input>
                </el-form-item>
                <el-form-item label="联系电话：" prop="">
                    <el-input v-model="ruleForm.tel" type="tel" class="ipt_wid300"></el-input>
                </el-form-item>
                <el-form-item label="联系地址：" prop="region">
                    <el-select v-model="ruleForm.province" placeholder="省" >
                        <el-option label="江苏省" value="js"></el-option>
                        <el-option label="浙江省" value="zj"></el-option>
                    </el-select>
                    <span class="address_line">-</span>
                    <el-select v-model="ruleForm.city" placeholder="市">
                        <el-option label="南京市" value="nj"></el-option>
                        <el-option label="宿迁市" value="sq"></el-option>
                    </el-select>
                    <span class="address_line">-</span>
                    <el-select v-model="ruleForm.region" placeholder="区/县">
                        <el-option label="秦淮区" value="qh"></el-option>
                        <el-option label="玄武区" value="xw"></el-option>
                    </el-select>
                    <span class="address_line">-</span>
                    <el-select v-model="ruleForm.street" placeholder="街道">
                        <el-option label="光华路街道" value="ghl"></el-option>
                        <el-option label="孝陵卫街道" value="xlw"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="" prop="">
                    <el-input v-model="ruleForm.detailAddress" class="ipt_wid500" placeholder="请输入详细地址"></el-input>
                </el-form-item>

                <el-form-item label="营业时间：" required>
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
                <el-form-item label="商家logo：">
                    <el-upload
                            class="avatar-uploader"
                            action="http://localhost:8080/api/logo/post"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="logoUrl" :src="logoUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <span class="sj_logo_warntxt">建议尺寸：150 x 150 像素，最多可添加1张图片，不超过1M，支持JPG、JPEG、PNG格式图片</span>
                </el-form-item>
                <el-form-item label="门店相册：">
                    <el-upload
                            action="http://localhost:8080/api/logo/post"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                    <span class="sj_logo_warntxt">建议尺寸：640 x 640 像素，最多可添加5张图片，不超过2M，支持JPG、JPEG、PNG格式图片</span>
                </el-form-item>

                <el-form-item label="商家介绍：" prop="">
                    <el-input type="textarea" v-model="ruleForm.desc" class="ipt_wid500"></el-input>
                </el-form-item>
            </el-form>

            <div class="sjm_btn">
                <div class="btn btn_blue">确定</div>
                <div class="btn btn_gray">取消</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                ruleForm: {
                    storeName: '',  //商家名称
                    contackMan: '', //联系人
                    tel:'',
                    province:'',    //省份
                    city: '',       //城市
                    region: '',     //区县
                    street: '',     //街道
                    detailAddress:'',   //详细信息
                    dateStart: '',
                    dateEnd: '',
                    desc:'',        //商家介绍
                },
                rules: {
                    storeName: [
                        { required: true, message: '请输入商家名称', trigger: 'blur' },
                        { min: 3, max: 200, message: '长度在 3 到 200 个字符', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    date2: [
                        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    type: [
                        { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    ],
                    resource: [
                        { required: true, message: '请选择活动资源', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写活动形式', trigger: 'blur' }
                    ]
                },
                logoUrl:'',
                dialogImageUrl: '',
                dialogVisible: false
            }
        },
        mounted(){

        },
        methods:{
            handleAvatarSuccess(res, file) {
                console.log(res);
                console.log(file);
                this.logoUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                //console.log(file);
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
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        }
    }
</script>
<style scoped>
    .sjm_block{height: auto;overflow: hidden;background: #fff;margin:15px;padding:15px;}
    .address_line{display: inline-block;padding-left:5px;padding-right: 5px;color:#333;}
    .ipt_wid300{width: 300px;}
    .ipt_wid500{width: 500px;}
    .time_line{float:left;padding-left:5px;padding-right: 5px;}
    .sj_logo_warntxt{display: block;height: 20px;line-height: 20px;color:#a4a8b5;font-size: 12px;}
    .sjm_btn{
        height: auto;overflow: hidden;
    }
    .sjm_btn .btn_blue{margin-left:280px;margin-right: 15px;}
</style>