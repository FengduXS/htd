<template>
    <div class="vip_list">
        <div class="vl_ss">
            <el-form ref="form" :model="form" label-width="100px" :inline="true">
                <el-form-item label="会员账号：" >
                    <el-input v-model="form.name" type="text" class="vl_wid"></el-input>
                </el-form-item>

                <el-form-item label="手机号码：">
                    <el-input v-model="form.tel" type="tel" maxlength="11" class="vl_wid" ></el-input>
                </el-form-item>

                <el-form-item label="注册时间：">
                    <el-col :span="10">
                        <el-date-picker
                                v-model="form.regTime"
                                type="datetimerange"
                                :picker-options="pickerOptions"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                align="right">
                        </el-date-picker>
                    </el-col>
                </el-form-item>

                <el-form-item label="会员分类：" >
                    <el-select v-model="form.hyClass" placeholder="请选择" class="vl_wid">
                        <el-option label="全部" value="quanbu"></el-option>
                        <el-option label="分类1" value="shanghai"></el-option>
                        <el-option label="分类2" value="beijing"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="会员状态：" >
                    <el-select v-model="form.hyState" placeholder="请选择" class="vl_wid">
                        <el-option label="全部" value="0"></el-option>
                        <el-option label="启用" value="1"></el-option>
                        <el-option label="禁用" value="2"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="会员标签：">
                    <el-input v-model="form.hyLabel" type="text" class="vl_wid" ></el-input>
                </el-form-item>

            </el-form>

            <div class="vl_ss_btn">
                <div class="btn btn_gray">重置</div>
                <div class="btn btn_blue">查询</div>
            </div>
        </div>
        <div class="vl_adds">
            <div class="btn btn_blue" @click="addVip">添加会员</div>
            <div class="btn btn_blue">批量导出</div>
        </div>
        <div class="table_block">
            <el-table
                    :data="tableData1.slice((currpage - 1) * pagesize, currpage * pagesize)"
                    border
                    style="width: 100%">
                <el-table-column
                        align="center"
                        prop="id"
                        label="会员ID"
                        width="180">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="hyCount"
                        label="会员账号"
                        width="180">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="tel"
                        label="手机号码">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="hyState"
                        label="会员状态">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="hyClass"
                        label="会员分类">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="regTime"
                        label="注册时间">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="preLoginTime"
                        label="上次登录时间">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="deliverGoodsStore"
                        label="操作">
                    <template slot-scope="scope">
                        <el-button @click="viewDetailInfo(scope.row)" type="text" size="small">查看</el-button>
                        <el-button type="text" size="small">编辑</el-button>
                        <el-button type="text" size="small">停用</el-button>
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

        <div class="std_filter_bg" v-show="filterBgFlag"></div>
        <div class="pop1" v-show="pop1Flag">
            <div class="pop1_head">
                <span class="pop1_txt">{{popTitle}}</span>
                <span class="pop1_close iconfont iconicon-guanbi" title="关闭" @click="closePop1"></span>
            </div>
            <div class="pop1_main" style="position: relative;">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" :inline="true">
                    <el-form-item label="会员账号" prop="count">
                        <el-input v-model="ruleForm.count" class="vl_wid"></el-input>
                    </el-form-item>

                    <el-form-item label="性别" prop="sex">
                        <el-radio-group v-model="ruleForm.sex">
                            <el-radio label="男"></el-radio>
                            <el-radio label="女"></el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item label="手机号码" prop="tel">
                        <el-input v-model="ruleForm.tel" maxlength="11" class="vl_wid"></el-input>
                    </el-form-item>

                    <el-form-item label="生日" >
                        <el-date-picker
                        v-model="ruleForm.birthday"
                        type="date"
                        placeholder="选择日期"
                        style="width: 224px;"
                        >
                        </el-date-picker>
                    </el-form-item>

                    <el-form-item label="会员分类">
                        <el-select v-model="form.hyClass" placeholder="请选择" class="vl_wid">
                            <el-option label="分类1" value="1"></el-option>
                            <el-option label="分类2" value="2"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="密码" prop="password">
                        <el-input v-model="ruleForm.password" class="vl_wid100"></el-input>
                    </el-form-item>

                    <el-form-item label="备注">
                        <el-input type="textarea" v-model="form.desc" style="width: 540px;"></el-input>
                    </el-form-item>

                </el-form>

                <!--生成随机密码按钮-->
                <div class="vl_creatpsd">
                    <div class="btn btn_blue" @click="createRandomPassword">生成随机密码</div>
                </div>
            </div>
            <div class="pop1_btm">
                <div class="pop1_b_inner">
                    <div class="btn btn_blue marrig10" @click="sureCommit('ruleForm')">确定</div>
                    <div class="btn btn_gray marrig10" @click="closePop1('ruleForm')">取消</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import reg from '../../lib/reg'
    export default {
        data(){
            let regTel = (rule, value, callback) => {
                if (!reg.telNum.test(value)) {
                    callback(new Error('手机号码格式不正确！'));
                } else {
                    callback();
                }
            };
            let regPassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('不能为空！'));
                } else {
                    callback();
                }
            };
            return {
                pop1Flag: false,
                filterBgFlag: false,
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                value2:'',
                form: {
                    name: '',
                    tel:'',
                    regTime:'',     //注册时间
                    hyClass:'',     //会员分类
                    hyState:'',     //会员状态
                    hyLabel:'',     //会员标签
                },
                tableData1: [
                    {
                        id: 'P01',
                        hyCount:'18789890008',  //会员账号
                        tel:'15667878998',      //手机号码
                        hyState:'启用',           //会员状态
                        hyClass:'注册会员',         //会员分类
                        regTime:'2019-10-01 12:23:34',       //注册时间
                        preLoginTime:'2019-03-01 07:19:34', //上次登录时间

                    },
                    {
                        id: 'P02',
                        hyCount:'18789890008',  //会员账号
                        tel:'15667878998',      //手机号码
                        hyState:'启用',           //会员状态
                        hyClass:'注册会员',         //会员分类
                        regTime:'2019-10-01 12:23:34',       //注册时间
                        preLoginTime:'2019-03-01 07:19:34', //上次登录时间

                    },
                    {
                        id: 'P03',
                        hyCount:'18789890008',  //会员账号
                        tel:'15667878998',      //手机号码
                        hyState:'启用',           //会员状态
                        hyClass:'注册会员',         //会员分类
                        regTime:'2019-10-01 12:23:34',       //注册时间
                        preLoginTime:'2019-03-01 07:19:34', //上次登录时间

                    }
                ],
                currpage:1,
                pagesize:5,
                pageSizes:[5,10,15,20],
                ruleForm: {
                    count: '',
                    sex:'',
                    tel:'',
                    birthday:'',
                    hyClass:'',
                    password:'',
                    desc:''
                },
                rules: {
                    count: [
                        { required: true, message: '请输入会员账号', trigger: 'blur' }
                    ],
                    sex: [
                        { required: true, message: '请选择性别', trigger: 'change' }
                    ],
                    tel: [
                        { validator: regTel, trigger: 'blur',required: true}
                    ],
                    password:[
                        { validator: regPassword, trigger: 'blur',required: true }
                    ]
                },
                popTitle:'新增会员'
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
            viewDetailInfo(row) {
                console.log(row);
                this.$router.push({name:'vipDetail'});
            },
            closePop1(formName) {
                this.filterBgFlag = false;
                this.pop1Flag = false;
                this.$refs[formName].resetFields();
            },
            addVip(){
                this.filterBgFlag = true;
                this.pop1Flag = true;
            },
            createRandomPassword(){
                this.ruleForm.password = this.randomPassword(6);
            },
            randomPassword(size){
                let seed = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z',
                    'a','b','c','d','e','f','g','h','i','j','k','m','n','p','Q','r','s','t','u','v','w','x','y','z',
                    '2','3','4','5','6','7','8','9'];   //数组
                let seedlength = seed.length;   //数组长度
                let createPassword = '';
                for (let i=0;i<size;i++) {
                    let j = Math.floor(Math.random()*seedlength);
                    createPassword += seed[j];
                }
                return createPassword;
            },
            sureCommit(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>
<style scoped>
    .vl_ss{height: auto;overflow: hidden;margin:15px;background: #fff;padding-top:15px;}
    .vl_wid{width: 200px;}
    .vl_wid100{width: 100px;}
    .vl_ss_btn{height: auto;overflow: hidden;display: flex;justify-content: center;margin-bottom: 15px;}
    .vl_ss_btn .btn_blue{margin-left:15px;}
    .vl_adds{height: auto;overflow: hidden;margin-left:15px;}
    .vl_adds .btn_blue{margin-right: 15px;}
    .table_block{margin:15px;}
    .vl_creatpsd{width: auto;height: auto;position: absolute;top:150px;right:40px;}
</style>