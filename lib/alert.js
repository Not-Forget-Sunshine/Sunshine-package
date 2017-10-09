!function (t, o) {
    "object" == typeof exports && "object" == typeof module ? module.exports = o() : "function" == typeof define && define.amd ? define([], o) : "object" == typeof exports ? exports["Sunshine"] = o() : t["Sunshine"] = o()
}(this, function () {
    return function (t) {
        function o(n) {
            if (e[n])return e[n].exports;
            var i = e[n] = {exports: {}, id: n, loaded: !1};
            return t[n].call(i.exports, i, i.exports, o), i.loaded = !0, i.exports
        }

        var e = {};
        return o.m = t, o.c = e, o.p = "", o(0)
    }([function (t, o) {
        "use strict";
        Object.defineProperty(o, "__esModule", {value: !0}), o.default = {
            ui: {
                messageBox: {},
                toast: {},
                indicator: {}
            }, info: function (t, o, e) {
                this.ui.messageBox.alert(o, t).then(function (t) {
                    "function" == typeof e && e()
                })
            }, message: function (t, o) {
                this.ui.toast({message: t, position: "bottom", duration: o || 3e3})
            }, success: function (t, o) {
                this.ui.toast({message: t, iconClass: "ion-android-done", duration: o || 3e3})
            }, error: function (t, o) {
                this.ui.toast({message: t, iconClass: "ion-android-close", duration: o || 3e3})
            }, confirm: function (t, o, e) {
                this.ui.messageBox.confirm(t).then(function (t) {
                    "function" == typeof o && o()
                }).catch(function (t) {
                    "function" == typeof e && e()
                })
            }, prompt: function (t, o) {
                return this.ui.messageBox.prompt(o, t)
            }, loading: function (t) {
                var o = t || "加载中...";
                this.ui.indicator.open({text: o, spinnerType: "fading-circle"})
            }, closeLoading: function () {
                this.ui.indicator.close()
            }
        }
    }])
});