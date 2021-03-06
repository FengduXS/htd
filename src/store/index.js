import Vue from 'vue'
import Vuex from 'vuex'

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

        /*tabs: [
            {
                name:localStorage.getItem('localTabs')?JSON.parse(localStorage.getItem('localTabs'))[JSON.parse(localStorage.getItem('localTabs')).length-1].txt:'系统首页',
                path:localStorage.getItem('localTabs')?JSON.parse(localStorage.getItem('localTabs'))[JSON.parse(localStorage.getItem('localTabs')).length-1].path:'index'
            }
        ],
        tabsTxtArr:[localStorage.getItem('localTabs')?JSON.parse(localStorage.getItem('localTabs'))[JSON.parse(localStorage.getItem('localTabs')).length-1].txt:'系统首页'],*/        //默认
        tabsIndex:0,    //当前选中的序号
    },
    mutations: {
        //设置索引号
        setTabIndex(state,payLoad){
            state.tabsIndex = payLoad;
           // console.log('state.tabsIndex');
           // console.log(state.tabsIndex);
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
            //console.log('-state.tabs-');
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
