!function (e, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports["Sunshine"] = n() : e["Sunshine"] = n()
}(this, function () {
    return function (e) {
        function n(t) {
            if (o[t])return o[t].exports;
            var r = o[t] = {exports: {}, id: t, loaded: !1};
            return e[t].call(r.exports, r, r.exports, n), r.loaded = !0, r.exports
        }

        var o = {};
        return n.m = e, n.c = o, n.p = "", n(0)
    }([function (e, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.default = {
            debug: function () {
                if ("debug" == window.config.environment)for (var e = 0; e < arguments.length; e++)console.log(arguments[e])
            }, warning: function () {
                if ("debug" == window.config.environment)for (var e = 0; e < arguments.length; e++)console.warn(arguments[e])
            }, error: function () {
                if ("debug" == window.config.environment)for (var e = 0; e < arguments.length; e++)console.error(arguments[e])
            }
        }
    }])
});