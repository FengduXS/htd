<template>
    <div class="login">
        <div class="header">
          <span>用户登录</span>
          <i>UserLogin</i>
        </div>
    <!-- 登陆页面 表单-->

    <el-form ref="loginForm" :model="ruleForm" :rules="rules" label-width="0px">
      <el-form-item prop="name">
        <el-input
          prefix-icon=" iconfont iconyonghuming"
          v-model="ruleForm.name"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          prefix-icon="iconfont iconmima"
          v-model="ruleForm.password"
          type="password"
          placeholder="请输入验证码"
        ></el-input>
      </el-form-item>
    </el-form>

    <!-- 多选框 -->
    <div class="checkbox">
      <el-checkbox :checked="reb">记住密码</el-checkbox>
      <a @click="forgetDialogVisible=true">忘记密码</a>
    </div>

    <!-- 登录 -->
    <el-button type="primary" @click="submitForm()">登录</el-button>

    <!-- 忘记密码的对话框 -->
    <el-dialog title="忘记密码" :visible.sync="forgetDialogVisible" width="420px" height="353">
      <!-- 表单 -->
      <el-form ref="forgetRuleForm" :model="ruleForm" :rules="rules" label-width="0px">
        <el-form-item prop="name">
          <el-input
            prefix-icon=" iconfont iconyonghuming"
            v-model="forgetRuleForm.tel"
            placeholder="请输入预留手机号"
          ></el-input>
        </el-form-item>
        <el-row :gutter="20">
          <el-col :span="17">
            <el-form-item prop="password">
              <el-input
                prefix-icon="iconfont iconmima"
                v-model="forgetRuleForm.password"
                type="secret"
                placeholder="请输入验证码"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-button class="btns">获取验证码</el-button>
          </el-col>
        </el-row>
      </el-form>
      <el-button class="button">下一步</el-button>
      <a href="#">返回登陆</a>
      <span slot="footer" class="dialog-footer">
        <el-button @click="forgetDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="forgetDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
  
</template>
<script>
import reg from "../../lib/reg";
import { log } from "util";
export default {
  data() {
    var validateName = (rule, value, callback) => {
      if (value.length <= 1) {
        callback(new Error("请输入姓名"))
      } else {
        callback()
      }
    };
    var validatePassword = (rule, value, callback) => {
      let count = 3;
      if (value != "123456") {
        count -= 1;
        callback(new Error(`密码不正确,您还有${count}次重新输入密码的机会!`))
      }else{
        callback()
      }
    };
    return {
      forgetRuleForm: {
        tel: "",
        secret: ""
      },
      forgetDialogVisible: false,
      reb: false,
      fromUrl: "", //登录后需要返回跳转的地址
      ruleForm: {
        name: "",
        password: ""
      },
      rules: {
        name: [{ validator: validateName, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }]
      }
    };
  },
  //   mounted() {
  //     //console.log(this.$route.query);
  //     console.log(reg);
  //   },
  methods: {
    setCookie() {
      this.$local.save("token", "tmmt");
      this.$router.push({ name: this.$route.query.from });
    },
    submitForm() {
      let _this = this
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          _this.$router.push({ name: "index" });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style  scoped>
.el-dialog  {
  font-size: 22px;
  color: #333333;
  margin-left: 23px;
 
}
.el-dialog .button{
  background-color: #5281ff;
  color: #ffffff;
}
.el-dialog a{
  display: block;
  text-align: center;
  margin-top: 15px;
  color: #5281ff;
}
.el-dialog .btns{
  width: 100px;
  background-color: #eceff4;
  margin-left: 28px;
  margin-top: 26px;
}
.login {
  width: 420px;
  height: 353px;
  background: #fff;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.header {
  margin-left: 40px;
  margin-top: 33px;
}
.header span {
  font-size: 22px;
  color: #333333;
}
.header i {
  margin-top: 10px;
  font-style: normal;
  font-size: 14px;
  color: #a4a8b5;
}

.el-form {
  width: 340px;
}
.el-form .el-input {
  margin-left: 40px;
  margin-top: 25px;
}
.el-form-item {
  margin-bottom: 0px;
}

.checkbox {
  margin-left: 40px;
  margin-top: 15px;
}
.checkbox a {
  cursor: pointer;
  /* display: block; */
  font-size: 14px;
  color: #333333;
  margin-left: 196px;
  text-decoration: underline;
}

.el-button {
  width: 340px;
  margin-left: 40px;
  margin-top: 30px;
}
</style>