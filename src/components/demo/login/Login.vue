<template>
    <div class="login">
        <div class="l_center">
            <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="80px">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="ruleForm.name" placeholder="请输入姓名"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="ruleForm.password" placeholder="请输入密码"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <el-button type="primary" @click="resetForm('ruleForm')">重置</el-button>
        <div class="clear"></div>
        <el-button type="primary" @click="setCookie">设置cookie</el-button>
    </div>
</template>
<style>
    .l_center{width: 500px;margin:20px auto;}
</style>
<script>
    import reg from '../../../lib/reg'
    export default {
        data() {
            var validateName = (rule, value, callback) => {
                console.log(rule);
                console.log(value);
                if (value.length <= 1) {
                    callback(new Error('请输入姓名'));
                } else {
                    callback();
                }
            };
            var validatePassword = (rule, value, callback) => {

                if (value.length > 0) {
                    callback();
                } else {
                    callback(new Error('请输入密码'));
                }
            };
            return {
                fromUrl: '', //登录后需要返回跳转的地址
                ruleForm: {
                    name:'',
                    password:''
                },
                rules: {
                    name:[
                        { validator: validateName, trigger: 'blur' }
                    ],
                    password:[
                        {validator:validatePassword,trigger:'blur'}
                    ]
                }
            }
        },
        mounted() {
            //console.log(this.$route.query);
            console.log(reg);
        },
        methods: {
            setCookie() {
                this.$local.save('token', 'tmmt');
                //跳转
                this.$router.push({name: this.$route.query.from});
            },

            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
