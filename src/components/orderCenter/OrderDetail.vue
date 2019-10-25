<template>
    <div class="order_detail">
        <el-card class="order_detail_seracher" style="padding: 0px">
            <div style="height:32px;width:100%;margin-bottom:12px;">
                <div class="btn btn_blue marrig10">取消订单</div>
                <div class="btn btn_blue">发起售后</div>
                <div class="btn btn_blue" style="float: right">刷新</div>
            </div>
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable">
                    <el-table-column
                        align="center"
                        label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" style="color: #5281ff" @click.stop="operate(scope.row)">审核</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="packageState"
                        label="代办事项">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="packageId"
                        label="提交待办时间">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="saleStoreName"
                        label="具体内容">
                    </el-table-column>
                </el-table>
            </div>
            <div style="border-top: #c6c9d3 1px dashed; overflow: hidden; height: 1px;margin-top:15px;"></div>
            <p class="secondTitle">订单概览</p>
            <el-form>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="订单编号:"  size="small">
                            0000000000000000000
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="会员账号:"  size="small">
                            会员A
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="销售公司:"  size="small">
                            汇通达
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="订单状态:"  size="small">
                            待发货
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="会员手机:"  size="small">
                            18900000000
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="销售商家:"  size="small">
                            汇通达自营店
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="订单类型:"  size="small">
                            普通
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="下单时间:"  size="small">
                            0000-00-00 00:00:00
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="销售渠道:"  size="small">
                            B2C
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="订单来源:"  size="small">
                            小程序
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="代下单人:"  size="small">
                            --
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="存在售后:"  size="small">
                            是
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <div style="border-top: #c6c9d3 1px dashed; overflow: hidden; height: 1px;"></div>
            <el-form>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="配送方式:"  size="small">
                            快递
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label=" 收货人:"  size="small"  label-width="72px">
                            某某某
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="手机号码:"  size="small">
                            15815863200
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="收货地址:"  size="small">
                            <div style="width:100%;height:auto;display:table-cell;">江苏省南京市玄武区钟灵街50号汇通达大厦</div>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <div style="border-top: #c6c9d3 1px dashed; overflow: hidden; height: 1px;"></div>
            <el-form>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="订单备注:"  size="small">
                            <div style="width:100%;height:auto;display:table-cell;">孰是孰非，只有正视作品实际进行实事求是的分析，方能得出比较确当的答案。三味书屋是个私塾，如作品所说，“是全城中称为最严厉的书塾”。它的样子就特别古
                            老，所谓“三味”，实是经、史、子三类书籍，“三味书屋”这一名称就鲜明地表现了这所私塾的办学宗旨和教育内容。类书籍，“三味书屋”这一名称就鲜明地表现了这
                            所私塾的办学宗旨和教育内容。</div>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <div style="border-top: #c6c9d3 1px dashed; overflow: hidden; height: 1px;"></div>
            <el-form>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="订单取消时间:"  size="small">
                            <div style="width:100%;height:auto;display:table-cell;">2019-02-11 10:25:36</div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="订单取消原因:"  size="small"  label-width="120px">
                            <div style="width:100%;height:auto;display:table-cell;">不想要了</div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="其他备注信息:"  size="small">
                            <div style="width:100%;height:auto;display:table-cell;">就是不想要了，没有其它原因 。就是不想要了，没有其它原因 。就是不想要了，没有其它 没有其它 没有其它</div>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </el-card>
        <el-card class="order_detail_table" style="padding: 0px">
            <el-tabs v-model="activeName">
                <el-tab-pane label="商品明细" name="first">
                    <div class="table_block">
                        <el-table border style="width: 100%" :data="initTable">
                            <el-table-column
                                type="index"
                                align="center"
                                width="150px;"
                                label="行号">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="packageState"
                                label="商品名称">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="packageId"
                                label="商品编码">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="saleStoreName"
                                label="商品规格">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="packageState"
                                label="数量">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="packageId"
                                label="单位">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="saleStoreName"
                                label="零售价">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="packageId"
                                label="原始金额合计">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="saleStoreName"
                                label="优惠金额">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="saleStoreName"
                                label="购买金额">
                            </el-table-column>
                        </el-table>
                        <el-pagination layout="total, sizes, prev, pager, next, jumper">
                        </el-pagination>
                     </div>
                    <div style="border-top: #c6c9d3 1px dashed; overflow: hidden; height: 1px;margin-top:55px;"></div>
                    <p class="secondTitle">商品优惠明细</p>
                    <div class="table_block">
                        <el-table border style="width: 100%" :data="initTable">
                            <el-table-column
                                align="center"
                                prop="packageState"
                                label="促销ID">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="packageId"
                                label="活动名称">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="saleStoreName"
                                label="商品名称">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="packageState"
                                label="商品编码">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="packageId"
                                label="单位">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="saleStoreName"
                                label="参与数量">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="packageId"
                                label="优惠金额">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div style="border-top: #c6c9d3 1px dashed; overflow: hidden; height: 1px;margin-top:15px;"></div>
                    <p class="secondTitle">结算明细</p>
                    <el-form label-width="180px">
                        <el-form-item label="商品原始金额合计:"  size="small">
                            100.00
                        </el-form-item>
                        <el-form-item label="商品促销优惠金额:"  size="small">
                            100.00
                        </el-form-item>
                        <el-form-item label="商品优惠券优惠金额:"  size="small">
                            100.00
                        </el-form-item>
                        <el-form-item label="商品购买金额合计:"  size="small">
                            100.00
                        </el-form-item>
                        <el-form-item label="运费原始金额:"  size="small">
                            100.00
                        </el-form-item>
                        <el-form-item label="运费优惠金额:"  size="small">
                            100.00
                        </el-form-item>
                        <el-form-item label="运费金额:"  size="small">
                            100.00
                        </el-form-item><el-form-item label="订单金额合计:"  size="small">
                            100.00
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="支付信息" name="second">
                    <el-form>
                        <el-row>
                            <el-col :span="8">
                                <el-form-item label="订单金额:"  size="small">
                                    2800
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label=" 支付类型:"  size="small"  label-width="72px">
                                    网上支付
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <el-form-item label="已付金额:"  size="small">
                                    2600
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="支付状态:"  size="small">
                                    <div style="width:100%;height:auto;display:table-cell;">已支付</div>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                    <div style="border-top: #c6c9d3 1px dashed; overflow: hidden; height: 1px;"></div>
                    <p class="secondTitle">支付明细</p>
                    <div class="table_block">
                        <el-table border style="width: 100%" :data="initTable">
                            <el-table-column
                                align="center"
                                prop="packageState"
                                label="支付方式">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="packageId"
                                label="支付金额">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="saleStoreName"
                                label="支付时间">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="packageState"
                                label="支付流水号">
                            </el-table-column>
                        </el-table>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="物流信息" name="third">
                    <el-form>
                        <el-row>
                            <el-col :span="7">
                                <el-form-item label="配送方式:"  size="small">
                                    快递
                                </el-form-item>
                            </el-col>
                            <el-col :span="7">
                                <el-form-item label="配送商:"  size="small">
                                    EMS
                                </el-form-item>
                            </el-col>
                            <el-col :span="7">
                                <el-form-item label="物流单号:"  size="small">
                                    03094729841908140
                                </el-form-item>
                            </el-col>
                            <el-col :span="3">
                                <div class="btn btn_blue" style="float:right">修改发货信息</div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <el-form-item label="物流详情:"  size="small">
                                    <el-timeline style="margin-left:80px;margin-top:10px;">
                                        <el-timeline-item
                                            placement="top"
                                            v-for="(activity, index) in activities"
                                            :key="index"
                                            :timestamp="activity.timestamp"
                                            >{{activity.content}}
                                        </el-timeline-item>
                                    </el-timeline>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="售后信息" name="fourth">
                    <div class="table_block">
                        <el-table border style="width: 100%" :data="initTable">
                            <el-table-column
                                align="center"
                                label="操作">
                                <template slot-scope="scope">
                                    <el-button type="text" style="color: #5281ff">查看</el-button>
                                    <el-button type="text" style="color: #5281ff">取消</el-button>
                                    <el-button type="text" style="color: #5281ff">修改</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="packageState"
                                label="售后单编号">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="packageId"
                                label="售后类型">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="saleStoreName"
                                label="售后单状态">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="packageState"
                                label="申请退款金额">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="packageId"
                                label="实际退款金额">
                            </el-table-column>
                            <el-table-column
                                align="center"
                                prop="saleStoreName"
                                label="创建日期">
                            </el-table-column>
                        </el-table>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>
<script>
    export default {
        data(){
            return {
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
                activeName: "first",
                activities: [
                    {
                        content: "活动按期开始",
                        timestamp: "2018-04-15"
                    },
                    {
                        content: "通过审核",
                        timestamp: "2018-04-13"
                    },
                    {
                        content: "创建成功",
                        timestamp: "2018-04-11"
                    }
                ]
            }
        },
        mounted(){

        },
        methods: {
            operate(data) {

            }
        },
    }
</script>
<style scoped>
.order_detail_seracher{
    width: calc(100% - 30px);
    background-color: #ffffff;
    border-radius: 5px;
    margin:15px auto;
}
.order_detail_table{
    width: calc(100% - 30px);
    height: 800px;
    background-color: #ffffff;
    border-radius: 5px;
    margin: 0 auto;
}
.secondTitle{
    width: 200px;
	height: 22px;
	font-family: PingFangSC-Semibold;
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
}
</style>