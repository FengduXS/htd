<template>
    <div class="top">
        <div class="top_left">
            <div class="top_licon iconfont iconicon-daohangqiehuan"></div>
            <div class="top_lbc"><Breaadcrumbs></Breaadcrumbs></div>
            <div class="top_linfo">
                <span class="t_lf_warnnum iconfont iconicon-xiaoxi">
                    <span class="t_shownum">8</span>
                </span>
                <span class="t_lf_headpic">
                    <img src="../../assets/images/hy.jpg"/>
                </span>
                <span class="t_lf_role">系统管理员</span>
                <span class="t_lf_tar iconfont iconsanjiaodown"></span>
            </div>
        </div>
        <div class="top_exit">
            <span class="exit_icon iconfont iconicon-tuichu"></span>
        </div>

    </div>
</template>
<script>
    import Breaadcrumbs from '@/components/common/Breadcrumb.vue'

    export default {
        data() {
            return {}
        },
        mounted() {

        },
        methods: {},
        components: {
            Breaadcrumbs
        }
    }
</script>
<style scoped>
    .top {
        display: flex;
        height: 100%;
    }

    .top_left{flex-grow: 1;height: 100%;display: flex;}
    .top_exit {
        width: 65px;height: 100%;border-left:1px solid #dfe3e9;flex-shrink: 0;
    }
    .top_licon{width: 40px;height: 40px;flex-shrink: 0;text-align: center;line-height: 40px;margin-top:12px;}
    .top_lbc{flex-grow: 1;height: 100%;}
    .top_linfo{flex-shrink: 0;width: 230px;height: 100%;}
    .t_lf_warnnum{display: block;float:left;width: 30px;height: 30px;font-size: 24px;color:#a4a8b5;line-height: 30px;
        text-align: center;margin-top:17px;position: relative;
    }
    .t_lf_headpic{height: 32px;width: 32px;display: block;float:left;background: red;border-radius: 50%;overflow: hidden;
        margin-top:15px;margin-left:20px;
    }
    .t_lf_headpic img{width: 100%;height: 100%;}
    .t_lf_role{display: block;float:left;height: 100%;line-height: 63px;font-size: 14px;color:#3f3f3f;margin-left:10px;}
    .t_lf_tar{width: 20px;height: 20px;display: block;float:left;text-align: center;line-height: 20px;margin-top:21px;
        margin-left:10px;color:#a4a8b5;font-size: 14px;
    }
    .exit_icon{font-size: 24px;width: 30px;height: 30px;line-height: 30px;text-align: center;color:#a4a8b5;
        margin:16px auto;display: block;
    }
    .t_shownum{width: 16px;height: 16px;display: block;position: absolute;top:-2px;right:0px;background: #e51e00;
        border-radius: 50%;border:1px solid #fff;font-size: 12px;line-height: 16px;text-align: center;color:#fff;
    }
</style>