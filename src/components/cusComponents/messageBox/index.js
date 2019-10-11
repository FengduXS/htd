let pop = {
    show:false,
    component:null
};
let myPop1 = {
    install:function (Vue){
        Vue.prototype.$cusMessageBox = function (obj){
            let msgbox = Vue.extend({
                data:function (){
                    return {
                        show:pop.show,
                        cancelBtnFlag:obj.showCancelButton || false,
                        warnClass:[ //complete, danger, doubt ,info ,warn
                            require('../../../assets/images/icon-complete.png'),
                            require('../../../assets/images/icon-danger.png'),
                            require('../../../assets/images/icon-doubt.png'),
                            require('../../../assets/images/icon-info.png'),
                            require('../../../assets/images/icon-warn.png')
                        ]
                    }
                },
                computed:{
                    iconShow(){
                        let icons = null;
                        //console.log(obj.type);
                        if(obj.type === undefined || obj.type === ''){
                            icons = this.warnClass[0];
                        }else{
                            if(obj.type === 'complete'){
                                icons = this.warnClass[0];
                            }else if(obj.type === 'danger'){
                                icons = this.warnClass[1];
                            }else if(obj.type === 'doubt'){
                                icons = this.warnClass[2];
                            }else if(obj.type === 'info'){
                                icons = this.warnClass[3];
                            }else if(obj.type === 'warn'){
                                icons = this.warnClass[4];
                            }
                        }
                        return icons;
                    },
                    btnTxtSure(){
                        let txt = '';
                        if(obj.confirmButtonText === undefined || obj.confirmButtonText === ''){
                            txt = '确定';
                        }else{
                            txt = obj.confirmButtonText;
                        }

                        return txt;
                    },
                    btnTxtCancel(){
                        let txt = '';
                        if(obj.cancelButtonText === undefined || obj.cancelButtonText === ''){
                            txt = '取消';
                        }else{
                            txt = obj.cancelButtonText;
                        }

                        return txt;
                    }
                },
                template:`<div class="std_filter_bg" v-show="show">
                                <div class="pop2">
                                    <div class="pop2_head">
                                        <span class="pop2_close iconfont iconicon-guanbi" title="关闭" @click="closePop"></span>
                                    </div>
                                    <div class="pop2_main">
                                        <div class="pop2_inicon"><img :src="iconShow" /></div>
                                        <div class="pop2_intxt">${obj.content}</div>
                                    </div>
                                    <div class="pop2_btm">
                                        <div class="pop2_b_inner">
                                            <div class="btn btn_blue marrig15" @click="sureDo">{{btnTxtSure}}</div>
                                            <div class="btn btn_gray marrig15" v-show="cancelBtnFlag" @click="cancelDo">{{btnTxtCancel}}</div>
                                        </div>
                                    </div>
                                </div>
                           </div>`,
                methods:{
                    closePop(){
                        //console.log('点击了关闭');
                        this.show = false;
                    },
                    sureDo(){
                        this.show = false;
                        if(obj.confirmFn){
                            obj.confirmFn();
                        }
                    },
                    cancelDo(){
                        this.show = false;
                        if(obj.cancelFn){
                            obj.cancelFn();
                        }

                    }

                }
            });
            pop.component = new msgbox();
            let element = pop.component.$mount().$el;

            document.body.appendChild(element);
            pop.component.show = pop.show = true;
        };
    }
};

export default myPop1;