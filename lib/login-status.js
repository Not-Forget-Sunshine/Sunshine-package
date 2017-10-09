!function (o, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports["Sunshine"] = e() : o["Sunshine"] = e()
}(this, function () {
    return function (o) {
        function e(i) {
            if (t[i])return t[i].exports;
            var n = t[i] = {exports: {}, id: i, loaded: !1};
            return o[i].call(n.exports, n, n.exports, e), n.loaded = !0, n.exports
        }

        var t = {};
        return e.m = o, e.c = t, e.p = "", e(0)
    }([function (o, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
            check: function (o, e) {
                var t = this, o = o || {}, i = {
                    type: o.type || "wechatOauth",
                    isRedirect: o.isRedirect || 1,
                    redirectUrl: o.redirectUrl || "/login"
                };
                if (tools.isEmpty(tools.cache.get("Authorization")) && 1 == window.canauthinit) t.getSign(o, e); else if (!tools.isEmpty(tools.cache.get("Authorization"))) {
                    if (0 == tools.cache.get("isLogin") || void 0 == tools.cache.get("isLogin")) {
                        if (1 === i.isRedirect && "/login" != location.pathname && "login" == i.type) {
                            var n = location.pathname + location.search;
                            tools.router.replace({path: i.redirectUrl, query: {callback: encodeURIComponent(n)}})
                        } else if ("wechatOauth" == i.type) {
                            var c = location.href,
                                n = window.config.api.url + i.redirectUrl + "?callback=" + encodeURIComponent(c) + "&key=" + btoa(tools.cache.get("Authorization"));
                            tools.cache.set("isLogin", 2), window.location.href = n
                        } else"/login" == location.pathname && "function" == typeof e && e();
                        return !1
                    }
                    2 == tools.cache.get("isLogin") ? t.isLogin("/api/users", o, e) : "function" == typeof e && e()
                }
            }, getSign: function (o, e) {
                var t = this;
                log.debug("开始获取签名"), window.canauthinit = 0, tools.alert.loading(), tools.ajax({
                    url: "/api/init",
                    ajaxData: {},
                    successFun: function (i) {
                        log.debug("获取到签名:", i), tools.cache.set("Authorization", i.token), t.check(o, e), window.canauthinit = 1
                    },
                    errorFun: function (o) {
                        log.debug("获取签名失败"), window.canauthinit = 1
                    },
                    type: "GET"
                })
            }, isLogin: function (o, e, t) {
                var i = this;
                log.debug("获取是否登录"), tools.ajax({
                    url: o, ajaxData: {}, successFun: function (o) {
                        tools.cache.set("isLogin", 1), i.check(e, t)
                    }, errorFun: function (o) {
                        log.error("登录失败!"), tools.alert.error("登录失败!"), tools.cache.set("isLogin", 0), i.check(e, t)
                    }, type: "GET"
                })
            }
        }
    }])
});