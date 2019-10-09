/*
Countdown 
version: 0.1.0
author: w.q
*/

;(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(factory);
    } else if (typeof exports === 'object') {
        // CMD
        module.exports = factory();
    } else {
        // 浏览器全局变量
        root.Countdown = factory();
    }
})(this, function () {

    function diffTime(lastTime) {
        var nowTime = new Date().getTime();
        if (typeof lastTime === 'object') {
            lastTime = lastTime.getTime();
        }
        if (typeof lastTime === 'string') {
            lastTime = (new Date(Date.parse(lastTime.replace(/-/g, "/")))).getTime();
        }
        return lastTime > nowTime ? lastTime - nowTime : 0;
    }

    function Countdown(container, options) {
        var defaults = {
            format: "hh时mm分ss秒",
            lastTime: "2017-04-20",
            callBack:function (){}
        };

        for (var option in options) {
            defaults[option] = options[option];
        }

        this.format = function (time) {
            if (time.d != undefined) { //天数大于1时候
                return time.d+'天'+time.h+'时'+time.m+'分'+time.s+'秒';
            } else {
                return time.h+'时'+time.m+'分'+time.s+'秒';
            }
        };

        this.render = function (format) {
            container = container || document.getElementsByTagName('body')[0];
            container.innerHTML = format;
        };

        this.init = function () {
            var that = this;
            if (!defaults.lastTime) return;
            var intervalTimer = setInterval(function () {
                var countTime = diffTime(defaults.lastTime) / 1000,
                    h = Math.floor(countTime / 3600),
                    m = Math.floor(((countTime - h * 3600)) / 60),
                    s = Math.floor(countTime - h * 3600 - m * 60),
                    h = (h > 9 ? h : "0" + h),
                    m = (m > 9 ? m : "0" + m),
                    s = (s > 9 ? s : "0" + s);
                var dd = '';    //天数
                if (parseInt(h) > 24) {   //大于一天
                    dd = Math.floor(parseInt(h) / 24);
                    h = h % 24;
                    that.render(that.format({d: dd, h: h, m: m, s: s}));
                }else{
                    that.render(that.format({h: h, m: m, s: s}));
                }

                //结束执行回调
                if(new Date(defaults.lastTime).getTime() <= new Date().getTime()){
                    defaults.callBack();
                    clearInterval(intervalTimer);
                }
            }, 1000);
        };
        this.init();
    }
    return Countdown;
});
