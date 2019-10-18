<template>
    <div class="page_add">
        <div class="pa_blocks">
            <div class="pa_btitle">温馨提示：当前装修页面均为手机页面</div>
            <div class="pa_bselect">
                <div class="pa_bs_txt">页面名称：</div>
                <div class="btn btn_blue">首页模板</div>
                <div class="btn btn_gray">营销模板</div>
            </div>
            <div class="pa_tmp">
                <div class="pa_tmplis">
                    <div class="pat_show create_new" @click="createTmp">
                        <span class="pat_splus">
                            <span class="pat_sp_jh iconfont iconicon-tianjia1"></span>
                        </span>
                        <span class="pat_stxt">创建模板</span>
                    </div>
                    <div class="pat_tmp_name">空白模板</div>
                    <div class="pat_tmp_btn yellow" @click="createTmp">立即创建</div>
                </div>
                <div class="pa_tmplis">
                    <div class="pat_show"><img src="../../assets/images/tmp1.jpg" width="100%" height="100%" /> </div>
                    <div class="pat_tmp_name">空白模板</div>
                    <div class="pat_tmp_btn blue">立即创建</div>
                </div>
                <div class="pa_tmplis">
                    <div class="pat_show"><img src="../../assets/images/tmp2.jpg" width="100%" height="100%" /></div>
                    <div class="pat_tmp_name">空白模板</div>
                    <div class="pat_tmp_btn blue">立即创建</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        mounted(){

        },
        methods:{
            createTmp(){
                this.$router.push({
                    name:'pageFit'
                });
            }
        }
    }
</script>
<style scoped>
    .pa_blocks{background: #fff;margin:15px;padding:30px;overflow: hidden;border-radius: 5px;}
    .pa_btitle{color:#333;font-size: 22px;font-weight: 700;height: 30px;line-height: 30px;}
    .pa_bselect{height: auto;overflow: hidden;line-height: 32px;margin-top:20px;}
    .pa_bs_txt{float:left;color:#525252;font-size: 14px;}
    .pa_bselect .btn{margin-right: 10px;}
    .pa_tmp{height: auto;overflow: hidden;margin-top:30px;}
    .pa_tmplis{width: 198px;float:left;
        margin-right: 30px;
    }
    .pat_show{height: 355px;background: #eceff4;border:1px dashed #c6c9d3;overflow: hidden;}
    .pat_tmp_name{height: 20px;line-height: 20px;text-align: center;font-size: 14px;color:#333;
        margin-top:15px;
    }
    .pat_tmp_btn{height: 32px;width: 86px;text-align: center;line-height: 32px;font-size: 14px;color:#fff;margin:0 auto;
        border-radius: 2px;margin-top:15px;cursor:pointer;
    }
    .pat_tmp_btn.yellow{background:#eea40a;}
    .pat_tmp_btn.yellow:hover{background: #ee9715;}
    .pat_tmp_btn.blue{background:#5281ff;}
    .pat_tmp_btn.blue:hover{background: #4464ff;}
    .pat_splus{display: block;width: 64px;height: 64px;margin:0 auto;border:2px solid #c6c9d3;border-radius: 50%;
        margin-top:100px;
    }
    .pat_sp_jh{height: 100%;width: 100%;display: block;text-align: center;line-height: 64px;
        font-size: 40px;color:#c6c9d3;
    }
    .pat_stxt{height: 30px;line-height: 30px;text-align: center;font-weight: bold;font-size: 22px;display: block;
        color:#c6c9d3;margin-top:10px;
    }
    .create_new:hover{
        background: #fff;
        cursor:pointer;
    }
</style>