import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import ajaxConfig from '../../src/lib/ajaxConfig'

Vue.use(Vuex);
const muduleCount = {
    state: {
        num: 1
    },
    mutations: {
        addNum(state, payLoad) {
            state.num += payLoad.n;
        },
        reduceNum(state, payload) {
            state.num -= payload.n;
        }
    }
};

//标签tabs
const muduleTabs = {
    state: {
        tabs: [
            {name:'系统首页',path:'index'}, //默认
        ],
        tabsTxtArr:['系统首页'],        //默认
        tabsIndex:0,    //当前选中的序号
    },
    mutations: {
        //设置索引号
        setTabIndex(state,payLoad){
            state.tabsIndex = payLoad;
        },
        addTabs(state, payLoad) {

            let obj = {
                name:payLoad.name,
                path:payLoad.path,
            };
            if(state.tabsTxtArr.includes(obj.name)){    //重复判断
                return;
            };
            state.tabsTxtArr.push(obj.name);
            state.tabs.push(obj);
            //console.log(state.tabs);
        },
        reduceTabs(state, payLoad) {
            //删除指定元素
            state.tabs.splice(payLoad,1);
            state.tabsTxtArr.splice(payLoad,1);
        }

    }
};

//面包屑
const breadCrumb = {
    state: {
        bcList:[]
    },
    mutations:{
        setBcList(state,payLoad){
            state.bcList = payLoad;
        }
    },
    actions:{
        setBcListAction:function (content){
            axios.get(ajaxConfig.allUrls.leftMenu).then(function (res){
                if(res.data.code === '0'){
                    content.commit('setBcList',res.data.data);
                }
            }).catch(function (err){
                console.log(err);
            });
        }
    }
};

//左侧菜单数据
const leftMenu = {
    state:{
        menuList:[]
    },
    mutations:{
        menuData(state,payLoad){
            state.menuList = payLoad;
        }
    }
};

let store = new Vuex.Store({
    modules: {
        muduleCount,
        muduleTabs,
        breadCrumb,
        leftMenu
    }
});

export default store;
