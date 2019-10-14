import Vue from 'vue'
import Router from 'vue-router'
import Master from '@/components/Master'
import HelloWorld from '@/components/demo/HelloWorld'
import Test1 from '@/components/demo/test/Test1'
import Base64 from '@/components/demo/test/base64'
import DemoIndex from '@/components/demo/Index'
import Index from '@/components/index/Index'
import Login from '@/components/login/Login'
import Charts1 from '@/components/demo/echarts/charts1'
import Menu from '@/components/demo/Menu'
import Menu1 from '@/components/demo/Menu1'
import Menu2 from '@/components/demo/Menu2'
import Menu3 from '@/components/demo/Menu3'
import TimeCountDown from '@/components/demo/TimeCountDown'
import RichText from '@/components/demo/RichText'
import Md5 from '@/components/demo/Md5'
import GoodsManage from '@/components/goodsCenter/GoodsManage'
import GoodsUpOrLowFrame from '@/components/goodsCenter/GoodsUpOrLowFrame'
import GoodsLabel from '@/components/goodsCenter/GoodsLabel'
import CategoryManage from '@/components/goodsCenter/CategoryManage'
import BrandManage from '@/components/goodsCenter/BrandManage'
import SpecsManage from '@/components/goodsCenter/SpecsManage'
import ValueUnitManage from '@/components/goodsCenter/ValueUnitManage'
import StockList from '@/components/stockCenter/StockList'
import CRKlist from '@/components/stockCenter/CRKlist'
import StockWarning from '@/components/stockCenter/StockWarning'
import AddStockDB from '@/components/stockCenter/AddStockDB'

import StockCheck from '@/components/stockCenter/StockCheck'
import StockDB from '@/components/stockCenter/StockDB'
import DistributionCenter from '@/components/distributionCenter/DistributionCenter'
import STKdetail from '@/components/financeCenter/STKdetail'
import GrossProfit from '@/components/financeCenter/GrossProfit'
import Purchase from '@/components/financeCenter/Purchase'
import SKway from '@/components/financeCenter/SKway'
import DataCenter from '@/components/dataCenter/DataCenter'
import UserManage from '@/components/userCenter/UserManage'
import RoleManage from '@/components/userCenter/RoleManage'
import BusinessManage from '@/components/userCenter/BusinessManage'
import CompanyManage from '@/components/userCenter/CompanyManage'

import AfterSaleServiceManage from '@/components/system/AfterSaleServiceManage'
import DeliverWayManage from '@/components/system/DeliverWayManage'
import FareManage from '@/components/system/FareManage'
import MenuManage from '@/components/system/MenuManage'
import SaleAreaManage from '@/components/system/SaleAreaManage'
import SaleChannelManage from '@/components/system/SaleChannelManage'
import SJInfoManage from '@/components/system/SJInfoManage'
import SupplierManage from '@/components/system/SupplierManage'
import OpenPlatForm from '@/components/openPlatForm/OpenPlatForm'
import PageList from '@/components/shoppingMallManage/PageList'
import PackageDetail from '@/components/deliverCenter/PackageDetail'
import PackageList from '@/components/deliverCenter/PackageList'
import WLCompanySet from '@/components/deliverCenter/WLCompanySet'
import AfterOrderDetail from '@/components/orderCenter/AfterOrderDetail'
import AfterOrderList from '@/components/orderCenter/AfterOrderList'
import OrderList from '@/components/orderCenter/OrderList'
import VipImport from '@/components/vipCenter/VipImport'
import VipLabel from '@/components/vipCenter/VipLabel'
import VipList from '@/components/vipCenter/VipList'
import VipDetail from '@/components/vipCenter/VipDetail'
import CouponDesc from '@/components/marketCenter/CouponDesc'
import CouponMS from '@/components/marketCenter/CouponMS'
import CouponSet from '@/components/marketCenter/CouponSet'
import MSha from '@/components/marketCenter/MSha'
import PTList from '@/components/marketCenter/PTList'
import PTSet from '@/components/marketCenter/PTSet'
import PTuan from '@/components/marketCenter/PTuan'
import PageFit from '@/components/shoppingMallManage/PageFit'
import Standard from '@/components/standard/Standard'



Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            redirect: '/index'
        },
        {
            path: '/',
            redirect: '/index'
        },

        {
            path: '/helloWorld',
            name: 'helloWorld',
            component: HelloWorld,
            meta: {
                login: true
            }
        },
        {
            path: '/test1',
            name: 'test1',
            component: Test1
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/charts1',
            name: 'charts1',
            component: Charts1
        },
        {
            path: '/base64',
            name: 'base64',
            component: Base64
        },
        {
            path:'/timeCountDown',
            name:'timeCountDown',
            component:TimeCountDown
        },
        {
            path:'/richText',
            name:'richText',
            component:RichText
        },
        {
            path:'/md5',
            name:'md5',
            component:Md5
        },
        {
            path: '/menu',
            name: 'menu',
            component: Menu,
            redirect:'/menu1',
            children:[
                {
                    path:'/menu1',
                    name:'menu1',
                    component: Menu1
                },
                {
                    path: '/menu2',
                    name: 'menu2',
                    component: Menu2
                },
                {
                    path: '/menu3',
                    name: 'menu3',
                    component: Menu3
                },
            ]
        },
        {
            path:'/demoIndex',
            name:'demoIndex',
            component:DemoIndex
        },

        //Master组件作为一个跳板
        {
            path:'/home',
            name:'home',
            component:Master,
            redirect:'/index',
            children:[
                //首页
                {
                    path: '/index',
                    name: 'index',
                    component: Index,
                    meta: {
                        login: true,
                        keepAlive:true
                    }
                },
                //商品中心
                {
                    path: '/goodsManage',
                    name: 'goodsManage',
                    component: GoodsManage,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/goodsUpOrLowFrame',
                    name: 'goodsUpOrLowFrame',
                    component: GoodsUpOrLowFrame,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/goodsLabel',
                    name: 'goodsLabel',
                    component: GoodsLabel,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/categoryManage',
                    name: 'categoryManage',
                    component: CategoryManage,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/brandManage',
                    name: 'brandManage',
                    component: BrandManage,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/specsManage',
                    name: 'specsManage',
                    component: SpecsManage,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/valueUnitManage',
                    name: 'valueUnitManage',
                    component: ValueUnitManage,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },

                //库存中心
                {
                    path: '/stockList',
                    name: 'stockList',
                    component: StockList,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/cRKlist',
                    name: 'cRKlist',
                    component: CRKlist,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/stockWarning',
                    name: 'stockWarning',
                    component: StockWarning,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/addStockDB',
                    name: 'addStockDB',
                    component: AddStockDB,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/stockCheck',
                    name: 'stockCheck',
                    component: StockCheck,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/stockDB',
                    name: 'stockDB',
                    component: StockDB,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },

                //分销中心
                {
                    path: '/distributionCenter',
                    name: 'distributionCenter',
                    component: DistributionCenter,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },

                //财务中心
                {
                    path: '/sTKdetail',
                    name: 'sTKdetail',
                    component: STKdetail,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/grossProfit',
                    name: 'grossProfit',
                    component: GrossProfit,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/purchase',
                    name: 'purchase',
                    component: Purchase,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/sKway',
                    name: 'sKway',
                    component: SKway,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },

                //数据中心
                {
                    path: '/dataCenter',
                    name: 'dataCenter',
                    component: DataCenter,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },

                //用户中心
                {
                    path: '/userManage',
                    name: 'userManage',
                    component: UserManage,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/roleManage',
                    name: 'roleManage',
                    component: RoleManage,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/businessManage',
                    name: 'businessManage',
                    component: BusinessManage,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/companyManage',
                    name: 'companyManage',
                    component: CompanyManage,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },

                //系统设置
                {
                    path: '/afterSaleServiceManage',
                    name: 'afterSaleServiceManage',
                    component: AfterSaleServiceManage,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/deliverWayManage',
                    name: 'deliverWayManage',
                    component: DeliverWayManage,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/fareManage',
                    name: 'fareManage',
                    component: FareManage,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/menuManage',
                    name: 'menuManage',
                    component: MenuManage,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/saleAreaManage',
                    name: 'saleAreaManage',
                    component: SaleAreaManage,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/saleChannelManage',
                    name: 'saleChannelManage',
                    component: SaleChannelManage,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/sJInfoManage',
                    name: 'sJInfoManage',
                    component: SJInfoManage,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/supplierManage',
                    name: 'supplierManage',
                    component: SupplierManage,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                //开放平台
                {
                    path: '/openPlatForm',
                    name: 'openPlatForm',
                    component: OpenPlatForm,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                //商城管理
                {
                    path: '/pageList',
                    name: 'pageList',
                    component: PageList,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                //配送中心
                {
                    path: '/packageDetail',
                    name: 'packageDetail',
                    component: PackageDetail,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/packageList',
                    name: 'packageList',
                    component: PackageList,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/wLCompanySet',
                    name: 'wLCompanySet',
                    component: WLCompanySet,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },

                //订单中心
                {
                    path: '/afterOrderDetail',
                    name: 'afterOrderDetail',
                    component: AfterOrderDetail,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/afterOrderList',
                    name: 'afterOrderList',
                    component: AfterOrderList,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/orderList',
                    name: 'orderList',
                    component: OrderList,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },

                //会员中心
                {
                    path: '/vipImport',
                    name: 'vipImport',
                    component: VipImport,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/vipLabel',
                    name: 'vipLabel',
                    component: VipLabel,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/vipList',
                    name: 'vipList',
                    component: VipList,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/vipDetail',
                    name: 'vipDetail',
                    component: VipDetail,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                //营销中心
                {
                    path: '/couponDesc',
                    name: 'couponDesc',
                    component: CouponDesc,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/couponMS',
                    name: 'couponMS',
                    component: CouponMS,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/couponSet',
                    name: 'couponSet',
                    component: CouponSet,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/mSha',
                    name: 'mSha',
                    component: MSha,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/pTList',
                    name: 'pTList',
                    component: PTList,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/pTSet',
                    name: 'pTSet',
                    component: PTSet,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                },
                {
                    path: '/pTuan',
                    name: 'pTuan',
                    component: PTuan,
                    meta: {
                        keepAlive:true,
                        login: true
                    }
                }
            ]
        },
        //商城装修页面
        {
            path:'/pageFit',
            name:'pageFit',
            component:PageFit
        },
        {
            path:'/standard',
            name:'standard',
            component:Standard
        },


    ]
});

//解决前台报路由重复问题
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};

//路由钩子
router.beforeEach((to, from, next) => {
    if (to.matched.some(item => item.meta.login)) {
        let info = router.app.$local.fetch('token');
        if (info.length > 0) {
            next();
        } else {
            router.push({
                name: 'login',
                query: {
                    from: to.name
                }
            });
        }
    } else {
        next();
    }
});
export default router;
