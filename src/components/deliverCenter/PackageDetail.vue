<template>
  <div class="package_detail" ref="scroll" style="height:100%;width:100%;">
    <el-card class="package_detail_card">
        <p class="package_detail_title">基本信息</p>
        <el-form>
            <el-row>
                <el-col :span="8">
                    <el-form-item label="订单编号:" size="small">280029724586508200</el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="包裹编号:" size="small">P1812031805550215403</el-form-item>
                </el-col>
                <el-col :span="8">    
                    <el-form-item label="销售店铺名称:" size="small">汇通达B2C网上店铺</el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <p class="package_detail_title">收货信息</p>
        <el-form>
            <el-row>
                <el-col :span="8">
                    <el-form-item label="商品:" size="small">张三</el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="收货人电话:" size="small">15851818053</el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="收货人地址:" size="small">江苏省南京市玄武区钟灵街顾家营180号汇通达大厦汇通达大厦</el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <p class="package_detail_title">包裹单状态:<span class="package_detail_status">已签收</span></p>
    </el-card>
    <el-card class="package_detail_card">
        <p class="package_detail_title">商品信息</p>
        <div class="table_block">
            <el-table border style="width: 100%" :data="initTable">
                <el-table-column align="center" prop="packageId" label="序号"></el-table-column>
                <el-table-column align="center" prop="packageState" label="商品主图"></el-table-column>
                <el-table-column align="center" prop="kdName" label="商品名称"></el-table-column>
                <el-table-column align="center" prop="kdNum" label="商品规格"></el-table-column>
                <el-table-column align="center" prop="packageId" label="商品编码"></el-table-column>
                <el-table-column align="center" prop="packageState" label="购买金额"></el-table-column>
                <el-table-column align="center" prop="kdName" label="商品数量"></el-table-column>
                <el-table-column align="center" prop="kdNum" label="已发货数量"></el-table-column>
            </el-table>
        </div>
    </el-card>
    <el-card class="package_detail_card">
        <p class="package_detail_title">运单信息</p>
        <el-form>
            <el-row>
                <el-col :span="8">
                    <el-form-item label="配送商:" size="small">顺丰</el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="运单号:" size="small">2934038403884</el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="发货时间:" size="small">2019-02-11 10:25:36</el-form-item>
                </el-col>
            </el-row>
            <el-form-item label="物流详情:">
                <p style="margin-bottom:10px;">
                    <span :class="active == true ? 'grayText':'blueText'" @click="active = true">展开</span>/
                    <span :class="active == true ? 'blueText':'grayText'" @click="active = false">收起</span>
                </p>
                <el-timeline style="margin-left:115px;">
                    <el-timeline-item
                        v-show="active"
                        placement="top"
                        v-for="(activity, index) in activities"
                        :key="index"
                        :timestamp="activity.timestamp"
                        >{{activity.content}}</el-timeline-item>
                    <el-timeline-item
                        v-show="active == false"
                        placement="top"
                        :timestamp="activities[0].timestamp"
                        >{{activities[0].content}}</el-timeline-item>
                </el-timeline>
            </el-form-item>
        </el-form>
    </el-card>
  </div>
</template>
<script>
import PerfectScrollbar from "perfect-scrollbar";
export default {
    data() {
        return {
            active: true,
            initTable: [
                {
                packageId: "P01",
                packageState: "待揽件",
                kdName: "天天快递",
                kdNum: "312913",
                orderNum: "dd7018",
                orderState: "已发货",
                saleStoreName: "北京",
                deliverGoodsStore: "南京",
                shr: "张三",
                tel: "15",
                address: "江苏省",
                uint: "件"
                }
            ],
            activities: [
                {
                    content: "活动按期开始",
                    timestamp: "04-15"
                },
                {
                    content: "通过审核",
                    timestamp: "04-13"
                },
                {
                    content: "创建成功",
                    timestamp: "04-11"
                }
            ]
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            console.log(vm.$route.query.data);
        })
    },
    mounted() {
        this.setScroll()
    },
    methods: {
        setScroll() {
            const container = this.$refs.scroll
            const ps = new PerfectScrollbar(container, {
                wheelSpeed: 2,
                wheelPropagation: true,
                minScrollbarLength: 20
            })
        }
    }
};
</script>
<style scoped>
.package_detail_card {
  background-color: #ffffff;
  border-radius: 5px;
  margin: 15px;
  padding: 15px;
}
.package_detail_title {
  height: 22px;
  font-family: PingFangSC-Semibold;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #333333;
  margin-bottom: 10px;
}
.package_detail_status {
  height: 22px;
  font-family: PingFangSC-Semibold;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #30b475;
  margin-left: 10px;
}
.grayText {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #aaaaaa;
  cursor: pointer;
}
.blueText {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #5281ff;
  cursor: pointer;
}
.el-timeline-item__timestamp.is-top {
    position: absolute;
    left: -43px;
}
</style>