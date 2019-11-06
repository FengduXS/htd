<template>
  <div class="Login">
    <!-- 登陆页面 表单-->
    <div v-show="type=='A'">
      <div class="login">
        <div class="header">
          <span>用户登录</span>
          <i>UserLogin</i>
        </div>
        <!-- <div v-if="type=='C'"></div> -->
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
              @change="inputPassword()"
            ></el-input>
          </el-form-item>
        </el-form>

        <!-- 多选框 -->
        <div class="checkbox">
          <el-checkbox v-model="reb">记住密码</el-checkbox>
          <a @click="forgetDialogVisible()">忘记密码</a>
        </div>

        <!-- 登录 -->
        <el-button type="primary" @click="submitForm()">登录</el-button>
      </div>
    </div>
    <div v-show="type=='B'">
      <div class="login">
        <!-- 下一步的对话框 -->
        <div class="mark"></div>
        <div class="pop1 content" style="width:420px;height:353px;">
          <p>忘记密码</p>
          <el-form ref="forgetForm" :model="forgetForms" :rules="forgetRules" label-width="0px">
            <el-form-item prop="tel">
              <el-input
                prefix-icon=" iconfont iconicon-shoujihao"
                v-model="forgetForms.tel"
                placeholder="请输入预留手机号码"
                maxlength="11"
              ></el-input>
            </el-form-item>
            <el-row>
              <el-col :span="12">
                <el-form-item prop="cypher">
                  <el-input
                    style="width:230px"
                    prefix-icon="iconfont iconicon-yanzhengma"
                    v-model="forgetForms.cypher"
                    placeholder="请输入验证码"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-button :disabled="nono" class="bnt" @click="get()">{{yzm}}</el-button>
              </el-col>
            </el-row>
          </el-form>
          <!-- 下一步的弹框 -->
          <el-button class="next" @click="nexts()">下一步</el-button>
          <a @click="ret">返回登陆</a>
        </div>
      </div>
    </div>
    <div  v-show="type=='C'">
        <!-- 确认密码弹框 -->
      <div  class="login">
        <div class="mark"></div>
        <div class="pop1 content" style="width:420px;height:353px;">
          <p>忘记密码</p>
          <el-form ref="nextForm" :model="nextForms" :rules="nextRules" label-width="0px">
            <el-form-item prop="pass">
              <el-input
                prefix-icon=" iconfont iconmima"
                v-model="nextForms.pass"
                placeholder="请输入新密码"
                type="password"
              ></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
              <el-input
                prefix-icon="iconfont iconmima"
                v-model="nextForms.checkPass"
                type="password"
                placeholder="请输入新密码"
              ></el-input>
            </el-form-item>
          </el-form>
          <el-button class="sure" @click="sure('nextForm')">确认修改</el-button>
          <a @click="ret">返回登陆</a>
        </div>
      </div>
    </div>
      
  </div>
</template>
<script>
import reg from "../../lib/reg";
import { log } from "util";
export default {
  data() {
    // 请输入新密码
     var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.nextForms.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    //请输入姓名
    // var validateName = (rule, value, callback) => {
    //   if (value.length <= 1) {
    //     callback(new Error("请输入姓名"));
    //   } else {
    //     callback();
    //   }
    // };
    //请输入验证码
    let count = 3;
    var validatePassword = (rule, value, callback) => {
      if (value != "123456") {
        count -= 1;
        if (count == 0) {
          this.type="B"
        } else {
          callback(new Error(`密码不正确,您还有${count}次重新输入密码的机会!`));
        }
      } else {
        callback();
      }
    };
    // 手机号验证规则
    const validPhone = (rule, value, callback) => {
      if (value == '' || !value) {
        return callback(new Error('手机号码不能为空'))
      } else {
        const re = /^[0-9-]+$/
        if (!re.test(value)) {
          return callback(new Error('手机号码输入格式有误'))
        }
        return callback()
      }
    }
    return {
      type: "A",
      yzm: "获取验证码",
      counts: 5,
      nono: false,
      // 下一步的新密码
      nextForms: {
        pass: "",
        checkPass: ""
      },
      // 下一步的新密码
      nextRules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      },
      // 忘记密码
      forgetForms: {
        tel: "",
        cypher: ""
      },
      // 忘记密码
      forgetRules: {
        tel: [
          { required: true, validator: validPhone, trigger: 'blur' }],
        cypher: ""
      },
      reb: false, //记住密码
      fromUrl: "", //登录后需要返回跳转的地址
      ruleForm: {
        name: "",
        password: ""
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [{ validator: validatePassword, trigger: "blur" }]
      }
    };
  },
  created() {
    let Name = window.localStorage.getItem("forgetsName");
    let Password = window.localStorage.getItem("forgetsPassword");
    // console.log(Name);
    this.ruleForm.name = Name;
    this.ruleForm.password = Password;
    this.reb = true;

    // 判断用户存不存在
    // if(userName){
    //         this.ruleForm.name = Name
    //         this.ruleForm.password = Password
    //         this.reb = true
    //     }
  },

  //   mounted() {
  //     //console.log(this.$route.query);
  //     console.log(reg);
  //   },
  methods: {
    //返回登陆
    ret(){
      this.type="A"
      
    },
    //忘记密码
    forgetDialogVisible() {
      this.type="C"
    },
    // 确认修改
    sure(formName) {
      let that = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.nextForms.pass == this.nextForms.checkPass) {
            // console.log(1111);
            this.type="A"
          }
          // alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //下一步
    nexts() {
      if (this.forgetForms.tel == "") {
        alert("请输入手机号码");
        return;
      }
      if (this.forgetForms.cypher == "") {
        alert("请输入验证码");
        return;
      }
      this.type="C";
    },
    // 获取密码计时器
    get() {
      //发送请求的时候
      // if(this.nono){
      //   return
      // }
      if (this.forgetForms.tel == "") {
        alert("请输入手机号码");
        return;
      }
      const timer = setInterval(() => {
        this.yzm = this.counts + "s后重新获取";
        this.nono = true;
        this.counts--;
        if (this.counts == 0) {
          this.yzm = "重新获取";
          this.nono = false;
          this.counts = 5;
          clearInterval(timer);
        }
      }, 1000);
    },

    setCookie() {
      this.$local.save("token", "tmmt");
      this.$router.push({ name: this.$route.query.from });
    },
    submitForm() {
      // console.log();

      let _this = this;
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          if (_this.reb) {
            // console.log(1111);
            // window.sessionStorage.setItem('forgetsName', this.ruleForm.name)
            window.localStorage.setItem("forgetsName", this.ruleForm.name);
            window.localStorage.setItem("forgetsPassword",this.ruleForm.password);
          } else {
            window.localStorage.setItem("forgetsName","")
            window.localStorage.setItem("forgetsPassword","")
          }
          _this.$router.push({ name: "index" });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  }
};
</script>
<style  scoped>
.Login{
  height: 100%;
  margin: 0;
  padding: 0;
  background: url(./../../assets/images/bg.jpg);

}
a{
  cursor: pointer;

}
.sure {
  background: #5281ff;
  color: #ffffff;
}
/* .forget{
  margin-left: 40px;
  margin-top: 33px;
  border-radius: 5px;
} */
.el-dialog {
  font-size: 22px;
  color: #333333;
  margin-left: 23px;
}
.el-dialog .button {
  background-color: #5281ff;
  color: #ffffff;
}
.el-dialog a {
  display: block;
  text-align: center;
  margin-top: 15px;
  color: #5281ff;
}
.el-dialog .btns {
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
  margin: 25px auto 0 auto;
}
/* .el-form .el-input {
  margin-left: 40px;
  margin-top: 25px;
}
.el-form-item {
  margin-bottom: 0px;
} */

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
.mark {
  position: fixed;
  left: 0;
  top: 0;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 998;
}
.content {
  z-index: 999;
  border-radius: 5px;
}
.content p {
  font-size: 22px;
  color: #333333;
  margin-left: 40px;
  margin-top: 33px;
}

.next {
  background: #5281ff;
  border: 0;
  font-size: 18px;
  color: #ffffff;
}
.content a {
  display: block;
  text-align: center;
  font-size: 14px;
  color: #5281ff;
  margin-top: 20px;

  /* margin-top：20px; */
}
.bnt {
  width: 100px;
  margin-left: 73px;
  margin-top: 2px;
  text-align: center;
  padding-left: 13px;
  background-color: #eceff4;
  border-radius: 3px;
  border: solid 1px #c6c9d3;
}
.contents {
  z-index: 999;
  border-radius: 5px;
}
.el-form-item .el-form-item .el-form-item__content .el-form-item__error {
    position: absolute;
    top:100%;
    left:40px;
}

</style>