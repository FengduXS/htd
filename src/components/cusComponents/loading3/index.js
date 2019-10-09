let _LOADING = {
    show: false,     // Boolean loading显示状态
    component: null  // Object loading组件
};
let myLoading = {
    install: function (Vue, options) {
        Vue.prototype.$mytxt = '这是来自插件的txt';

        Vue.prototype.$loading = function (obj, type) {
            if (type == 'close') {
                _LOADING.component.show = _LOADING.show = false;
            } else {
                let LoadingComponent = Vue.extend({
                    data: function () {
                        return {
                            show: _LOADING.show
                        }
                    },
                    template: `<div v-show="show" class="zh-load-mark">
                                    <div class="zh-load-box">
                                        <div class="zh-loading">
                                            <div class="loading_leaf loading_leaf_0"></div>
                                            <div class="loading_leaf loading_leaf_1"></div>
                                            <div class="loading_leaf loading_leaf_2"></div>
                                            <div class="loading_leaf loading_leaf_3"></div>
                                            <div class="loading_leaf loading_leaf_4"></div>
                                            <div class="loading_leaf loading_leaf_5"></div>
                                            <div class="loading_leaf loading_leaf_6"></div>
                                            <div class="loading_leaf loading_leaf_7"></div>
                                            <div class="loading_leaf loading_leaf_8"></div>
                                            <div class="loading_leaf loading_leaf_9"></div>
                                            <div class="loading_leaf loading_leaf_10"></div>
                                            <div class="loading_leaf loading_leaf_11"></div>
                                        </div>
                                        <div class="zh-load-content">${obj.txt}</div>
                                    </div>
                                </div>`
                });
                _LOADING.component = new LoadingComponent();
                let element = _LOADING.component.$mount().$el;

                document.body.appendChild(element);
                _LOADING.component.show = _LOADING.show = true;

                obj.success(2);

            }

        };

        Vue.prototype.$loading.open = function (obj) {
            return Vue.prototype.$loading(obj, 'open');
        }
        Vue.prototype.$loading.close = function (text) {
            return Vue.prototype.$loading(text, 'close');
        }
    }
};

export default myLoading;