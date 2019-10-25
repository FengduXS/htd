<template>
    <div class="sk">
        <!-- 搜索表单 -->
        <el-card class="sk_searcher" style="padding: 0px">
            <el-form label-width="100px">
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="支付方式:" size="small">
                            <el-select placeholder="请选择商品类型" v-model="value" style="width:230px">
                                <el-option label="在线支付" value="leixing2"></el-option>
                                <el-option label="线下支付" value="leixing1"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="支付类型:"  size="small">
                            <el-select placeholder="请选择支付类型" v-model="value" style="width:230px">
                                <el-option label="现金支付" value="leixing2"></el-option>
                                <el-option label="微信支付" value="leixing1"></el-option>
                                <el-option label="支付宝支付" value="leixing3"></el-option>
                                <el-option label="储值卡支付" value="leixing4"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="支付渠道:"  size="small">
                            <el-select placeholder="请选择支付渠道" v-model="value" style="width:230px">
                                <el-option label="微信公众号支付" value="leixing1"></el-option>
                                <el-option label="微信小程序支付" value="leixing2"></el-option>
                                <el-option label="微信APP支付" value="leixing3"></el-option>
                                <el-option label="微信H5支付" value="leixing4"></el-option>
                                <el-option label="微信主扫支付" value="leixing5"></el-option>
                                <el-option label="现金支付" value="leixing6"></el-option>
                                <el-option label="储值卡支付" value="leixing7"></el-option>
                                <el-option label="支付宝H5支付" value="leixing8"></el-option>
                                <el-option label="支付宝APP支付" value="leixing9"></el-option>
                                <el-option label="支付宝PC支付" value="leixing10"></el-option>
                                <el-option label="支付宝主扫支付" value="leixing11"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="业务类型:"  size="small">
                            <el-select placeholder="请选择业务类型" v-model="value" style="width:230px">
                                <el-option label="支付" value="pinlei1"></el-option>
                                <el-option label="充值" value="pinlei2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="启用状态:"  size="small">
                            <el-select placeholder="请选择启用状态" v-model="value" style="width:230px">
                                <el-option label="启用" value="pinlei1"></el-option>
                                <el-option label="禁用" value="pinlei2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item>
                            <div class="btn btn_blue">查询</div>
                            <div class="btn btn_gray" style="margin-left:10px">重置</div>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </el-card>
        <!-- 表格 -->
        <el-card class="sk_table" style="padding: 0px">
            <div class="btn btn_blue" style="float:right;margin-bottom:10px;" @click="addSk">添加</div>
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable" height="550px">
                    <el-table-column
                        align="center"
                        prop="packageState"
                        label="销售渠道">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="packageId"
                        label="支付方式">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="saleStoreName"
                        label="支付类型">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="kdName"
                        label="支付渠道">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="kdNum"
                        label="业务类型">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="orderNum"
                        label="启用状态">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="orderState"
                        label="修改人">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="deliverGoodsStore"
                        label="修改时间">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" style="color:blue;" @click.stop="check">查看</el-button>
                            <el-button type="text" style="color:blue;" @click.stop="edit">编辑</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination layout="total, sizes, prev, pager, next, jumper">
                </el-pagination>
            </div>
        </el-card>
        <!-- 添加弹窗 -->
        <div v-show="pop1Flag">
            <div class="mark"></div>
            <div class="pop1 content">
                <div class="pop1_head">
                    <span class="pop1_txt">添加收款方式</span>
                    <span class="pop1_close iconfont iconicon-guanbi" title="关闭" @click="closePop1"></span>
                </div>
                <div class="pop1_main" style="padding-left:50px;height:630px;"  ref="scroll">
                    <el-form label-width="160px">
                        <p class="secondTitle">基本信息</p>
                        <div style="border-top: #c6c9d3 1px dashed; overflow: hidden; height: 1px;margin-bottom:15px;width:524px;margin-left: -30px;"></div>
                        <el-form-item label="销售渠道:" size="small">
                            <el-select placeholder="请选择销售渠道" v-model="value" style="width:320px;">
                                <el-option label="类型一" value="leixing1"></el-option>
                                <el-option label="类型二" value="leixing2"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="支付方式:"  size="small">
                            <el-radio-group v-model="radio">
                                <el-radio :label="3">在线支付</el-radio>
                                <el-radio :label="6">线下支付</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="支付类型:"  size="small">
                            <el-select placeholder="请选择支付类型" v-model="value1" style="width:320px;">
                                <el-option label="微信" value="1"></el-option>
                                <el-option label="支付宝" value="2"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="支付渠道:"  size="small">
                            <el-select placeholder="请选择支付渠道" v-model="value" style="width:320px;">
                                <el-option label="类型一" value="leixing1"></el-option>
                                <el-option label="类型二" value="leixing2"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="业务类型:" size="small">
                            <el-radio-group v-model="radio">
                                <el-radio :label="3">支付</el-radio>
                                <el-radio :label="6">充值</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="启用状态:"  size="small">
                            <el-radio-group v-model="radio">
                                <el-radio :label="3">启用</el-radio>
                                <el-radio :label="6">禁用</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <p class="secondTitle">账户信息</p>
                        <div style="border-top: #c6c9d3 1px dashed; overflow: hidden; height: 1px;margin-bottom:15px;width:524px;margin-left: -30px;"></div>
                        <el-form-item label="支付宝账号:" size="small" v-if="value1 =='2'">
                            <el-input placeholder="请输入支付宝账号" style="width:320px;"></el-input>
                        </el-form-item>
                        <el-form-item label="账户公钥:"  size="small" v-if="value1 =='2'">
                            <el-input placeholder="请输入账户公钥" style="width:320px;"></el-input>
                        </el-form-item>
                        <el-form-item label="账户私钥:"  size="small" v-if="value1 =='2'">
                            <el-input placeholder="请输入账户私钥" style="width:320px;"></el-input>
                        </el-form-item>
                        <el-form-item label="应用id:"  size="small" v-if="value1 =='2'">
                            <el-input placeholder="请输入应用id" style="width:320px;"></el-input>
                        </el-form-item>
                        <el-form-item label="应用公钥:" size="small" v-if="value1 =='2'">
                            <el-input placeholder="请输入应用公钥" style="width:320px;" type="textarea" :rows="3"></el-input>
                        </el-form-item>
                        <el-form-item label="应用私钥:"  size="small" v-if="value1 =='2'">
                            <el-input placeholder="请输入应用私钥" style="width:320px;" type="textarea" :rows="3"></el-input>
                        </el-form-item>
                        <el-form-item label="MerchantId(商户号):" size="small" v-if="value1 =='1'">
                            <el-input placeholder="请输入MerchantId(商户号)" style="width:320px;"></el-input>
                        </el-form-item>
                        <el-form-item label="APPID(应用ID):"  size="small" v-if="value1 =='1'">
                            <el-input placeholder="请输入APPID(应用ID)" style="width:320px;"></el-input>
                        </el-form-item>
                        <el-form-item label="APPSECRET(应用密钥):"  size="small" v-if="value1 =='1'">
                            <el-input placeholder="请输入APPSECRET(应用密钥)" style="width:320px;"></el-input>
                        </el-form-item>
                        <el-form-item label="APPKey(API密钥):"  size="small" v-if="value1 =='1'">
                            <el-input placeholder="请输入APPKey(API密钥)" style="width:320px;"></el-input>
                        </el-form-item>
                        <el-form-item label="原路退款证书:" size="small" v-if="value1 =='1'">
                        </el-form-item>
                        <el-form-item label="原路退款:"  size="small" v-if="value1 =='1'">
                            <el-radio-group v-model="radio">
                                <el-radio :label="3">关闭</el-radio>
                                <el-radio :label="6">启用</el-radio>
                            </el-radio-group>
                            <p class="tips">注：上传了原路退款证书之后方能开启原路退款。</p>
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
    import PerfectScrollbar from 'perfect-scrollbar'
    export default {
        data(){
            return {
                radio:"",
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
                value:"",
                value1:"1",
                editParam: {
                    
                },
            }
        },
        mounted(){
            this.setScroll()
        },
        methods:{
            check() {
                this.pop1Flag = true
            },
            edit() {
                this.pop1Flag = true
            },
            addSk() {
                this.pop1Flag = true
            },
            closePop1() {
                this.pop1Flag = false
            },
            setScroll(){
                const container = this.$refs.scroll;
                const ps = new PerfectScrollbar(container,{
                    wheelSpeed: 2,
                    wheelPropagation: true,
                    minScrollbarLength: 20
                })
            },
        }
    }
</script>
<style scoped>
.sk_searcher{
    width: calc(100% - 30px);
    background-color: #ffffff;
    border-radius: 5px;
    margin:15px auto;
}
.sk_table{
    width: calc(100% - 30px);
    background-color: #ffffff;
    border-radius: 5px;
    margin: 0 auto;
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
    width: 564px;
    height: 790px;
}
.secondTitle{
    width: 80px;
    margin-left: -30px;
}
.tips {
	width: 264px;
	height: 17px;
	font-family: PingFangSC-Regular;
	font-size: 12px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #e51e00;
}
</style>