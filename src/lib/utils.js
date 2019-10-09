let local = {
    //保存localStorage
    save(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    //获取localStorage
    fetch(key) {
        return JSON.parse(localStorage.getItem(key)) || {};
    },
    /*url参数格式化
    * 如：www.xxx.com?id=1&age=20
    * 返回：{id:1,age:20}
    * */
    paramsFormat(url) {
        var qInd = url.indexOf("?");
        var sharpInd = url.indexOf("#"); //路由
        var search = "";
        var paramsList = [];
        var paramsObj = {};

        if (qInd >= 0) {
            if (sharpInd > 0) {
                search = url.substring(qInd + 1, sharpInd);
            } else {
                search = url.substring(qInd + 1);
            }
            //from跳转链接，不需要解析其他参数
            let reg = /\?(from(?:url)?)=(.*\.html)/i;
            if (reg.test(search)) {
                let matches = search.match(reg);
                paramsObj[matches[1]] = matches[2];
            } else {
                paramsList = search.split("&");
                for (var ind = 0; ind < paramsList.length; ind++) {
                    var param = paramsList[ind];
                    if (param) {
                        var pind = param.indexOf("=");
                        if (pind >= 0) {
                            let key = param.substring(0, pind);
                            let value = param.substr(pind + 1);
                            if (value == 'undefined' || value == 'null') value = null;//过滤字符串，否则接口报错
                            paramsObj[key] = value;
                        } else {
                            paramsObj[param] = "";
                        }
                    }
                }
            }
        }
        return paramsObj;
    },

    //图片转base64
    //实现将项目的图片转化成base64
    convertImgToBase64(url, callback, outputFormat) {
        var canvas = document.createElement('CANVAS'),
            ctx = canvas.getContext('2d'),
            img = new Image;
        img.crossOrigin = 'Anonymous';
        img.onload = function () {
            canvas.height = img.height;
            canvas.width = img.width;
            ctx.drawImage(img, 0, 0);
            var dataURL = canvas.toDataURL(outputFormat || 'image/png');
            callback.call(this, dataURL);
            canvas = null;
        };
        img.src = url;
    },

    //时间--时间戳
    time2timestamp(dateTime){
        if(dateTime){
            return new Date(dateTime).getTime();
        }
    }
};

export default {
    install: function (Vue) {
        Vue.prototype.$local = local;
    }
}
