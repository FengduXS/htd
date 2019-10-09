let pop = {
    show:false,
    component:null
};
let myPop1 = {
    install:function (Vue){
        Vue.prototype.$messagebox = function (obj,type){
            if(type === 'open'){
                let msgbox = Vue.extend({
                    data:function (){
                        return {
                            show:pop.show
                        }
                    },
                    template:`<div class="pop2" v-show="show">
                                <div class="pop2_head">
                                    <span class="pop2_close iconfont iconicon-guanbi" title="关闭" @click="closePop"></span>
                                </div>
                                <div class="pop2_main">
                                    <div class="pop2_inicon"><img src="../../assets/images/icon-warn.png" /></div>
                                    <div class="pop2_intxt">${obj.txt}</div>
                                </div>
                                <div class="pop2_btm">
                                    <div class="pop2_b_inner">
                                        <div class="btn btn_blue marrig10" @click="sureDo">确定</div>
                                        <div class="btn btn_gray marrig10" @click="cancelDo">取消</div>
                                    </div>
                                </div>
                            </div>`,
                    methods:{
                        closePop(){
                            console.log('点击了关闭');
                            this.show = false;
                        },
                        sureDo(){
                            obj.success('成功');
                        },
                        cancelDo(){
                            obj.cancel('取消了');
                        }
                    }
                });
                pop.component = new msgbox();
                let element = pop.component.$mount().$el;

                document.body.appendChild(element);
                pop.component.show = pop.show = true;
            }
        };

        Vue.prototype.$messagebox.open = function (obj){
            return Vue.prototype.$messagebox(obj,'open');
        };
    }
};

export default myPop1;