<template>
    <div class="home">
        首页
        <div class="radio">
            排序：
            <el-radio-group v-model="reverse">
                <el-radio :label="true">倒序</el-radio>
                <el-radio :label="false">正序</el-radio>
            </el-radio-group>
        </div>

        <el-timeline :reverse="reverse">
            <el-timeline-item
                    v-for="(activity, index) in activities"
                    :key="index"
                    :timestamp="activity.timestamp">
                {{activity.content}}
            </el-timeline-item>
        </el-timeline>

        <el-button type="success" @click="goPages">跳转helloWorld</el-button>
        <el-button type="success" @click="goLoginPages">登录页</el-button>
        <el-button type="success" @click="goTestPages">goTest</el-button>
        <el-button type="success" @click="goChartsPages">图表</el-button>
        <el-button type="success" @click="goBase64">base64转换</el-button>
        <el-button type=""><router-link :to="{name:'menu'}">菜单页</router-link></el-button>
        <el-button type="success" ><router-link :to="{name:'richText'}">富文本</router-link></el-button>
        <el-button type="success" ><router-link :to="{name:'md5'}">MD5</router-link></el-button>
        <div></div>

        <div>
            时间过滤器：{{times | t2date}}
        </div>

        <TimeCountDown :endTime="getTimestamp"
                       :startTime="new Date().getTime()"
                       :endMsg="endMsg"></TimeCountDown>

        <TimeCountDown :endTime="endTime2"
                       :startTime="new Date().getTime()"
                       :endMsg="endMsg"></TimeCountDown>
    </div>
</template>

<script>
    import TimeCountDown from './TimeCountDown.vue'
    export default {
        name: '',
        data() {
            return {
                reverse: true,
                activities: [
                    {
                        content: '活动按期开始',
                        timestamp: '2018-04-15'
                    },
                    {
                        content: '通过审核',
                        timestamp: '2018-04-13'
                    },
                    {
                        content: '创建成功',
                        timestamp: '2018-04-11'
                    }
                ],
                times: 1567477825537,
                endTime:'2019-09-25 15:22:00',
                endTime2:this.$local.time2timestamp('2019-09-26 10:22:00'),
                endMsg:'时间结束'
            }
        },
        computed: {
            getTimestamp(){
                return this.$local.time2timestamp(this.endTime);
            }
        },
        components: {
            TimeCountDown
        },
        created() {

        },
        mounted() {
            //let host = this.$ajaxConfig;
            //console.log(host);
            let url = '/index?name=tm&age=22';
            //console.log(this.$local.paramsFormat(url));
        },
        methods: {
            goPages() {
                //console.log(this.$route);
                //console.log(this.$router.history.current.name);
                this.$router.push(
                    {
                        name: 'helloWorld'
                    }
                );
            },
            goLoginPages() {
                this.$router.push({name: 'login'});
            },
            goTestPages() {
                this.$router.push({name: 'test1', query: {id: 2}});
            },
            goChartsPages() {
                this.$router.push({name: 'charts1'});
            },
            goBase64() {
                this.$router.push({name: 'base64'});
            },

        }
    }
</script>

<style scoped>

</style>
