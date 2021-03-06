!function (o, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports["Sunshine"] = e() : o["Sunshine"] = e()
}(this, function () {
    return function (o) {
        function e(t) {
            if (n[t])return n[t].exports;
            var i = n[t] = {exports: {}, id: t, loaded: !1};
            return o[t].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
        }

        var n = {};
        return e.m = o, e.c = n, e.p = "", e(0)
    }([function (o, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), window.socket = {obj: {}}, e.default = {
            connect: function (o) {
                var e = this;
                o = o || {};
                var n = {
                    path: o.path || "ws://127.0.0.1",
                    message: o.message || "",
                    close: o.close || "",
                    error: o.error || "",
                    onopen: o.onopen || "",
                    loginApi: o.loginApi || "/",
                    loginType: o.loginType || "login"
                }, t = new WebSocket(o.path);
                t.onerror = function (o) {
                    log.debug("socket连接失败!", o), "function" == typeof n.error && n.error(o)
                }, t.onclose = function (o) {
                    log.debug("socket已关闭!", o), "function" == typeof n.close && n.close(o)
                }, t.onmessage = function (o) {
                    log.debug("收到socket信息!", o, JSON.parse(o.data));
                    var t = JSON.parse(o.data);
                    "reply_init" === t.content.type ? e.getToken(n.loginApi, n.loginType) : "login_success" === t.content.type && log.debug("登录成功"), "function" == typeof n.message && n.message(o, t)
                }, t.onopen = function (o) {
                    log.debug("socket连接成功!"), window.socket.obj = t, e.send("init", {}), "function" == typeof n.onopen && n.onopen(o)
                }
            }, close: function () {
                window.socket.obj.close(), window.socket.obj = {}
            }, send: function (o, e) {
                var n = e || "", t = window.tools.get.guid(), i = this.filterContent(o, n, t);
                return window.socket.obj.send(i), t
            }, filterContent: function (o, e, n) {
                var t = {};
                t.content = {};
                var i = e || {};
                for (var c in i)t.content[c] = i[c];
                return console.log(n), t.guid = n, t.content.type = o, console.log(t.content), JSON.stringify(t)
            }, getToken: function (o, e) {
                var n = this;
                window.tools.ajax({
                    url: o, successFun: function (o) {
                        log.debug("获取token成功", o.data.token, n), n.send(e, {token: o.data.token})
                    }, errorFun: function () {
                        tools.alert.loading("登录失败,尝试重新登录中.."), setTimeout(function () {
                            n.getToken(o, e)
                        }, 5e3)
                    }, type: "POST"
                })
            }
        }
    }])
});