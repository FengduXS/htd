<template>
    <div class="order_setting">
        <el-card class="order_setting_top">
            <p class="secondTitle">说明</p>
            <p class="order_setting_tip">设置订单在限定的时间内，系统对状态进行自动变更。</p>
            <div style="border-top: #c6c9d3 1px dashed; overflow: hidden; height: 1px;margin:15px 0;"></div>
            <p class="secondTitle">订单自动取消（待支付→已关闭）</p>
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable">
                    <el-table-column
                        align="center"
                        prop="packageState"
                        label="支付类型">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="packageId"
                        label="触发状态">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="saleStoreName"
                        label="限定时长">
                        <el-input style="width:100px;" size="mini"></el-input>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="packageState"
                        label="状态">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="packageId"
                        label="操作">
                        <template>
                            <el-button type="text" style="color:#5281ff;" size="mini">启用</el-button>
                            <!-- <el-button type="text" style="color:#5281ff;" size="mini">删除</el-button> -->
                            <el-button type="text" style="color:#5281ff;" size="mini">保存</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div style="border-top: #c6c9d3 1px dashed; overflow: hidden; height: 1px;margin:15px 0;"></div>
            <p class="secondTitle">订单自动签收（已发货→已签收）</p>
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable">
                    <el-table-column
                        align="center"
                        prop="packageState"
                        label="支付类型">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="packageId"
                        label="触发状态">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="saleStoreName"
                        label="限定时长">
                        <el-input style="width:100px;" size="mini"></el-input>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="packageState"
                        label="状态">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="packageId"
                        label="操作">
                        <template>
                            <el-button type="text" style="color:#5281ff;" size="mini">启用</el-button>
                            <!-- <el-button type="text" style="color:#5281ff;" size="mini">删除</el-button> -->
                            <el-button type="text" style="color:#5281ff;" size="mini">保存</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div style="border-top: #c6c9d3 1px dashed; overflow: hidden; height: 1px;margin:15px 0;"></div>
            <p class="secondTitle">订单自动完成（已签收→已完成）</p>
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable">
                    <el-table-column
                        align="center"
                        prop="packageState"
                        label="支付类型">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="packageId"
                        label="触发状态">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="saleStoreName"
                        label="限定时长">
                        <el-input style="width:100px;" size="mini"></el-input>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="packageState"
                        label="状态">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="packageId"
                        label="操作">
                        <template>
                            <el-button type="text" style="color:#5281ff;" size="mini">启用</el-button>
                            <!-- <el-button type="text" style="color:#5281ff;" size="mini">删除</el-button> -->
                            <el-button type="text" style="color:#5281ff;" size="mini">保存</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
        <el-card class="order_setting_top">
            <p class="secondTitle">说明</p>
            <p class="order_setting_tip">设置订单签收后，可发起订单售后的最晚日期。</p>
            <div style="border-top: #c6c9d3 1px dashed; overflow: hidden; height: 1px;margin:15px 0;"></div>
            <p class="secondTitle">售后有效期</p>
            <div class="table_block">
                <el-table border style="width: 100%" :data="initTable">
                    <el-table-column
                        align="center"
                        prop="packageState"
                        label="售后类型">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="packageId"
                        label="售后截止日期，订单签收后的第（）天">
                        <el-input style="width:100px;" size="mini"></el-input>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="saleStoreName"
                        label="状态">
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="packageState"
                        label="操作">
                        <template>
                            <el-button type="text" style="color:#5281ff;" size="mini">启用</el-button>
                            <!-- <el-button type="text" style="color:#5281ff;" size="mini">删除</el-button> -->
                            <el-button type="text" style="color:#5281ff;" size="mini">保存</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
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
                        packageState:'启用',
                        kdName:'天天快递',
                        kdNum:'312913',
                        orderNum:'dd7018',
                        orderState:'已发货',
                        saleStoreName:'启用',
                        deliverGoodsStore:'南京',
                        shr:'张三',
                        tel:'15',
                        address:'江苏省',
                        uint:"件"
                    }
                ],
            }
        },
        mounted(){

        },
    }
</script>
<style scoped>
.order_setting_top{
    width: calc(100% - 30px);
    background-color: #ffffff;
    border-radius: 5px;
    margin:15px auto;
}
.order_setting_tip{
	width: 336px;
	height: 20px;
	font-family: PingFangSC-Regular;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
}
.secondTitle{
    width: 250px;
	height: 22px;
	font-family: PingFangSC-Semibold;
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
}
</style>