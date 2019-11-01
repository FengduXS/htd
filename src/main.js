// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
import store from './store'
import utils from './lib/utils'

Vue.use(utils);

//引入全局样式
import './assets/css/reset.css'

//引入iconfont
import './assets/css/iconfont.css'

import './assets/css/standard.css'
//引入覆盖样式
import './assets/css/cover.css'

//引入动画样式animate
import './assets/css/animate.css'

//完美滚动条插件
//import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'



/*
 //Loading2
import './components/cusComponents/Loading2/index.css';
import Loading from './components/cusComponents/Loading2/index';
Vue.use(Loading);

 //Loading3
import './components/cusComponents/Loading3/index.css';
import Loading3 from './components/cusComponents/Loading3/index';
Vue.use(Loading3);*/

// 弹框
import './components/cusComponents/messageBox/index.css';
import messageBox from './components/cusComponents/messageBox/index';
Vue.use(messageBox);


// http request 请求拦截器
import ajaxSet from '../src/lib/ajaxConfig'
let loading;
axios.defaults.baseURL = ajaxSet.host; // 关键步骤–填写后台请求统一的地址
axios.defaults.timeout = 500000;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6eGx0ZXN0IiwibmFtZSI6Inp4bCIsImV4cCI6MTU3MjU4ODAzOSwiaWF0IjoxNTcyNTAxNjM5LCJ1c2VySWQiOiIyIiwiYWdlIjoiMTgifQ.HwiprVDW8GGh1C_3HfrepTgN0ux-EOpKIvqpNILjk4Q';
axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    loading = Vue.prototype.$loading({
        lock: false,
        fullscreen: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    });
    let pathname = location.pathname;
    if (localStorage.getItem('token')) {
        if (pathname != '/login') {
            //请求头是否带有token
            config.headers.common['token'] = localStorage.getItem('token');
        }
    }
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// http response 响应拦截器
axios.interceptors.response.use(response => {
    loading.close();
    return response;
}, error => {
    loading.close();
    if (error.response) {
        switch (error.response.status) {
            // 返回401，清除token信息并跳转到登录页面
            case 401:
                localStorage.removeItem('token');
                router.replace({
                    path: '/login'
                    //登录成功后跳入浏览的当前页面
                    // query: {redirect: router.currentRoute.fullPath}
                });
                break;
            case 404:
                //loading.close();
                break;
        }
        // 返回接口返回的错误信息
        return Promise.reject(error.response.data);
    }
});


Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

//配置全局接口请求路径
import ajaxConfig from './lib/ajaxConfig'

Vue.prototype.$ajaxConfig = ajaxConfig;

//富文本组件
import '../static/UE/ueditor.config'
import '../static/UE/ueditor.all.min'
import '../static/UE/lang/zh-cn/zh-cn'
import '../static/UE/ueditor.parse.min'

//时间戳 转 时间过滤器
Vue.filter('t2date', function (value) {
    let date = new Date(value);
    let y = date.getFullYear();
    let m = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
    let d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let mins = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return y + "-" + m + '-' + d + ' ' + hour + ':' + mins + ':' + seconds;
});

//配置echarts
//import echarts from 'echarts';
//Vue.prototype.$echarts = echarts;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
