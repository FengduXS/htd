<template>
    <div class="sale_area_manage">
        <div class="sale_area_manage_content">
            <el-row>
                <el-col :span="6">
                    <el-checkbox v-model="eastArea">华东</el-checkbox>
                </el-col>
                <el-col :span="3">
                    <el-checkbox v-model="shanghai">上海市</el-checkbox>
                </el-col>
                <el-col :span="3">
                    <el-checkbox v-model="jiangsu">
                        <el-dropdown :hide-on-click="false" placement="bottom-start" @visible-change="changes">
                            <span class="el-dropdown-link">
                                江苏省<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown" style="width:221px;height:214px;">
                                <el-row>
                                    <el-col :span="12">
                                        <el-dropdown-item class="droi" style="background-color: #ffffff;">
                                            <el-checkbox v-model="nanjing">南京市</el-checkbox>
                                        </el-dropdown-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-dropdown-item style="background-color: #ffffff;">
                                            <el-checkbox v-model="wuxi">无锡市</el-checkbox>
                                        </el-dropdown-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-dropdown-item class="droi" style="background-color: #ffffff;">
                                            <el-checkbox v-model="nanjing">南京市</el-checkbox>
                                        </el-dropdown-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-dropdown-item style="background-color: #ffffff;">
                                            <el-checkbox v-model="wuxi">无锡市</el-checkbox>
                                        </el-dropdown-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-dropdown-item class="droi" style="background-color: #ffffff;">
                                            <el-checkbox v-model="nanjing">南京市</el-checkbox>
                                        </el-dropdown-item>
                                    </el-col>
                                </el-row>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-checkbox>
                </el-col>
             </el-row>
            <el-row>
                <div class="btn btn_blue">确认</div>
                <div class="btn btn_gray" style="margin-left:10px">取消</div>
            </el-row>
        </div>
    </div>
</template>
<script>
import PerfectScrollbar from 'perfect-scrollbar'
export default {
    data(){
        return {
            eastArea: false,
            shanghai: false,
            jiangsu: false,
            nanjing: false,
            wuxi: false,
        }
    },
    mounted() {
        // this.setScroll()
    },
    methods: {
        changes(data) {
        },
        setScroll() {
            const container = this.$refs.scroll;
            const ps = new PerfectScrollbar(container,{
                wheelSpeed: 2,
                wheelPropagation: true,
                minScrollbarLength: 20
            })
        }
    },
}
</script>
<style scoped>
.sale_area_manage_content{
    height: 781px;
    background-color: #ffffff;
    border-radius: 5px;
    margin:15px;
    padding: 15px;
}
.dro{
    width: 221px;
    height: 210px;
}
.droi{
    background-color: #ffffff;
}
</style>