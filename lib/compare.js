!function (e, o) {
    "object" == typeof exports && "object" == typeof module ? module.exports = o() : "function" == typeof define && define.amd ? define([], o) : "object" == typeof exports ? exports["Sunshine"] = o() : e["Sunshine"] = o()
}(this, function () {
    return function (e) {
        function o(n) {
            if (t[n])return t[n].exports;
            var r = t[n] = {exports: {}, id: n, loaded: !1};
            return e[n].call(r.exports, r, r.exports, o), r.loaded = !0, r.exports
        }

        var t = {};
        return o.m = e, o.c = t, o.p = "", o(0)
    }([function (e, o) {
        "use strict";
        Object.defineProperty(o, "__esModule", {value: !0});
        var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, n = {};
        o.default = {
            oldObj: function e(o) {
                var r;
                switch ("undefined" == typeof o ? "undefined" : t(o)) {
                    case"undefined":
                        break;
                    case"string":
                        r = o + "";
                        break;
                    case"number":
                        r = o - 0;
                        break;
                    case"boolean":
                        r = o;
                        break;
                    case"object":
                        if (null === o) r = null; else if (o instanceof Array) {
                            r = [];
                            for (var f = 0, u = o.length; f < u; f++)r.push(e(o[f]))
                        } else {
                            r = {};
                            for (var a in o)r[a] = e(o[a])
                        }
                        break;
                    default:
                        r = o
                }
                return n = r, r
            }, newObj: function (e) {
                var o = {};
                for (var t in e)e[t] != n[t] && (o[t] = e[t]);
                return o
            }
        }
    }])
});