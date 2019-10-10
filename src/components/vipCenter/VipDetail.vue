<template>
    <div class="vip_detail">
        <div class="vd_info">
            <div class="vd_if_title">基本信息</div>
            <div class="vd_if_b">
                <div class="vd_ib_pic"><img src="../../assets/images/hy.jpg" width="100%" height="100%" /></div>
                <div class="vd_ib_rig">
                    <div class="vd_riglis">
                        <div class="vd_ib_lis">
                            <span class="vd_ib_key">会员ID：</span>
                            <span class="vd_ib_val">23915702935</span>
                        </div>
                        <div class="vd_ib_lis">
                            <span class="vd_ib_key">会员账号：</span>
                            <span class="vd_ib_val">23915702935</span>
                        </div>
                        <div class="vd_ib_lis">
                            <span class="vd_ib_key">会员昵称：</span>
                            <span class="vd_ib_val">小汇</span>
                        </div>
                    </div>
                    <div class="vd_riglis">
                        <div class="vd_ib_lis">
                            <span class="vd_ib_key">手机号码：</span>
                            <span class="vd_ib_val">15609999888</span>
                        </div>
                        <div class="vd_ib_lis">
                            <span class="vd_ib_key">性别：</span>
                            <span class="vd_ib_val">男</span>
                        </div>
                        <div class="vd_ib_lis">
                            <span class="vd_ib_key">生日：</span>
                            <span class="vd_ib_val">1990年9月1日</span>
                        </div>
                    </div>
                    <div class="vd_riglis">
                        <div class="vd_ib_lis">
                            <span class="vd_ib_key">注册来源：</span>
                            <span class="vd_ib_val">后台</span>
                        </div>
                        <div class="vd_ib_lis">
                            <span class="vd_ib_key">注册时间：</span>
                            <span class="vd_ib_val">2019-08-23 12:23:45</span>
                        </div>
                        <div class="vd_ib_lis">
                            <span class="vd_ib_key">上次登录时间：</span>
                            <span class="vd_ib_val">2019-08-23 12:23:45</span>
                        </div>
                    </div>
                    <div class="vd_riglis">
                        <div class="vd_ib_lis heiauto">
                            <span class="vd_ib_key">备注：</span>
                            <span class="vd_ib_valdesc">备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注</span>
                        </div>
                    </div>

                </div>
            </div>
            <div class="vd_if_label" v-show="false">
                <div class="vd_il_key">会员标签：</div>
                <div class="vd_il_add" @click="addLabel">+添加标签</div>
                <div class="vd_il_lablis">
                    <span class="vd_il_ltxt">标签名称</span>
                    <span class="vd_il_ldele iconfont iconicon-tab-close-hover"></span>
                </div>
                <div class="vd_il_lablis">
                    <span class="vd_il_ltxt">标签名称2</span>
                    <span class="vd_il_ldele iconfont iconicon-tab-close-hover"></span>
                </div>
                <div class="vd_il_lablis">
                    <span class="vd_il_ltxt">标签名称3</span>
                    <span class="vd_il_ldele iconfont iconicon-tab-close-hover"></span>
                </div>
            </div>
        </div>

        <div class="vd_info">
            <div class="vd_if_title">收货地址</div>
            <div class="vd_if_b">
                <el-table
                        :data="tableData1"
                        border
                        style="width: 100%">
                    <el-table-column
                            align="center"
                            prop="id"
                            label="序号"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="consignee"
                            label="收货人"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="tel"
                            label="手机号码">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="address"
                            label="收货地址">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="label"
                            label="标签">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="defaultAddress"
                            label="默认地址">
                    </el-table-column>
                </el-table>
            </div>
        </div>

        <div class="std_filter_bg" v-show="filterBgFlag"></div>
        <div class="pop1" v-show="pop1Flag">
            <div class="pop1_head">
                <span class="pop1_txt">请选择会员标签</span>
                <span class="pop1_close iconfont iconicon-guanbi" title="关闭" @click="closePop1"></span>
            </div>
            <div class="pop1_main"></div>
            <div class="pop1_btm">
                <div class="pop1_b_inner">
                    <div class="btn btn_blue marrig10">确定</div>
                    <div class="btn btn_gray marrig10">取消</div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                filterBgFlag: false,
                pop1Flag: false,
                tableData1: [
                    {
                        id: '1',
                        consignee:'收货人1',
                        tel:'15678987656',
                        address:'江苏省南京市玄武区钟灵街50号汇通达大厦A座',
                        label:'公司',
                        defaultAddress:'是'
                    },
                    {
                        id: '2',
                        consignee:'收货人2',
                        tel:'15678987656',
                        address:'江苏省南京市玄武区钟灵街50号汇通达大厦A座',
                        label:'公司',
                        defaultAddress:'否'
                    },
                    {
                        id: '3',
                        consignee:'收货人3',
                        tel:'15678987656',
                        address:'江苏省南京市玄武区钟灵街50号汇通达大厦A座',
                        label:'公司',
                        defaultAddress:'否'
                    }
                ],
            }
        },
        mounted() {

        },
        methods:{
            closePop1() {
                this.filterBgFlag = false;
                this.pop1Flag = false;
            },
            addLabel(){
                this.filterBgFlag = true;
                this.pop1Flag = true;
            }
        }
    }
</script>
<style scoped>
    .vip_detail {
        height: auto;
        overflow: hidden;
    }

    .vd_info {
        height: auto;overflow: hidden;
        margin:15px;background: #fff;border-radius: 5px;padding:15px;
    }
    .vd_if_title{height: 20px;line-height: 20px;font-size: 16px;color:#333;font-weight: 600;}
    .vd_if_b{height: auto;overflow: hidden;margin-top:20px;}
    .vd_ib_pic{width: 80px;height: 80px;float:left;border-radius: 50%;overflow: hidden;margin-top:20px;}
    .vd_ib_rig{width: auto;height: auto;margin-left:100px;}
    .vd_ib_lis{height: 20px;line-height: 20px;float:left;overflow: hidden;color:#333;font-size: 14px;}
    .vd_ib_key{display: block;height: 100%;width:120px;text-align: right;float:left;}
    .vd_ib_val{display: block;height: 100%;width:200px;text-align: left;float:left;}
    .vd_riglis{overflow: hidden;height: auto;margin-bottom:15px;}

    .vd_ib_valdesc{display: block;height: auto;width:780px;text-align: left;float:left;}
    .heiauto{height: auto;}
    .vd_if_label{height: auto;border-top: dashed 1px #c6c9d3;margin-left:15px;margin-right: 15px;}
    .vd_il_key{height: 32px;font-size: 14px;color:#333;float:left;line-height: 32px;
        margin-top:10px;
    }
    .vd_il_add{height: 30px;line-height: 30px;float:left;color: #5281ff;font-size: 14px;border: dashed 1px #c6c9d3;
        border-radius: 5px;padding-left:15px;padding-right: 15px;cursor:pointer;margin-top:10px;
    }
    .vd_il_lablis{height: 30px;line-height: 30px;float:left;color: #5281ff;font-size: 14px;border: solid 1px #c6c9d3;
        border-radius: 5px;margin-left:15px;margin-top:10px;}
    .vd_il_ltxt{display: block;float:left;height: 30px;line-height: 30px;font-size: 14px;color:#333;padding-left:15px;padding-right: 15px;}
    .vd_il_ldele{width: 30px;height: 30px;float:left;text-align: center;line-height: 30px;
        border-left: solid 1px #c6c9d3;color:#a4a8b5;cursor:pointer;
    }
    .vd_il_ldele:hover{color: #333;}
</style>