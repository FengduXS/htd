<template>
    <div class="hello">
        <p class="hp">tmei</p>

        <el-switch
                v-model="value"
                active-color="#13ce66"
                inactive-color="#ff4949">
        </el-switch>

        <div style="clear:both;"></div>
        <el-button type="primary" @click="addNum">增加</el-button>
        <el-button type="danger" @click="reduceNum">减少</el-button>
        <div>{{getCount}}</div>
        <test1></test1>
    </div>
</template>

<script>
    import $ from 'jquery'
    import test1 from '@/components/demo/test/Test1.vue'

    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                value: true
            }
        },
        computed: {
            //获取vuex值
            getCount: function () {
                return this.$store.state.muduleCount.num;
            }
        },
        components: {
            test1
        },
        created() {
            this.$local.save('token', 'tm');
        },
        mounted() {
            //console.log(this.$route.query);
            //console.log($('.hp').text());
            this.axiosTest();
        },
        methods: {
            //请求测试
            axiosTest() {
                let url = '/back-product-web2/extra/category/listChildrenCategoryWithNologin.do';
                this.$axios.get(url).then((res) => {
                    //console.log(res);
                }).catch((err) => {
                    console.log(err);
                })
            },

            //新增num
            addNum() {
                this.$store.commit('addNum', {n: 1});
            },
            //减少num
            reduceNum() {
                this.$store.commit('reduceNum', {n: 1});
            }


        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
