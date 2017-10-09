!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports["Sunshine"] = t() : e["Sunshine"] = t()
}(this, function () {
    return function (e) {
        function t(n) {
            if (i[n])return i[n].exports;
            var r = i[n] = {exports: {}, id: n, loaded: !1};
            return e[n].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
        }

        var i = {};
        return t.m = e, t.c = i, t.p = "", t(0)
    }({
        0: function (e, t, i) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {default: e}
            }

            Object.defineProperty(t, "__esModule", {value: !0});
            var r = i(36), o = n(r);
            o.default.install = function (e) {
                e.component(o.default.name, o.default)
            }, t.default = o.default
        }, 9: function (e, t, i) {
            t = e.exports = i(31)(), t.push([e.id, '[i=prelook_uploader] .prelook-wrapper{padding-top:10px;//border-bottom:1px dotted #ddd}[i=prelook_uploader] .prelook-wrapper .upload-wrapper{float:left;position:relative;width:120px;height:120px;text-align:center;line-height:120px;border:1px solid #ddd;margin-bottom:20px;cursor:pointer;overflow:hidden}[i=prelook_uploader] .prelook-wrapper .upload-wrapper i{line-height:120px}[i=prelook_uploader] .prelook-wrapper .prelook-inner .circle-box{position:absolute;right:-10px;top:-10px;cursor:pointer;z-index:1}[i=prelook_uploader] .prelook-wrapper .prelook-inner .circle{position:relative;display:inline-block;font-family:Ionicons;font-style:normal;vertical-align:middle;line-height:22px;text-align:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}[i=prelook_uploader] .prelook-wrapper .prelook-inner .circle:after{display:inline-block;content:" ";background:#d80404;width:22px;height:22px;border-radius:100%}[i=prelook_uploader] .prelook-wrapper .prelook-inner .circle:before{position:absolute;display:inline-block;width:22px;height:22px;content:"\\F404";font-size:22px;line-height:22px;color:#fff}[i=prelook_uploader] .prelook-wrapper .upload-wrapper .file-button{font-size:200px;opacity:0;position:absolute;left:0;top:0;width:120px;height:120px;cursor:pointer;z-index:9}[i=prelook_uploader] .prelook-inner{float:left;width:120px;height:160px;margin-right:20px;margin-bottom:10px;position:relative}[i=prelook_uploader] .prelook-inner i.fa-times-circle{font-size:20px;position:absolute;top:-10px;right:-10px;z-index:999;cursor:pointer}[i=prelook_uploader] .prelook-block{display:block;width:120px;height:120px;overflow:hidden;position:relative}[i=prelook_uploader] .prelook-block img{width:100%}[i=prelook_uploader] .prelook-inner .prelook-radio{display:block;width:100%;height:30px;line-height:30px;padding-left:10px}[i=prelook_uploader] .moxie-shim{display:none}[i=prelook_uploader] .progress{position:absolute;top:0;background-color:#5cb85c;color:#000;font-size:12px;line-height:20px;background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:40px 40px;-webkit-animation:progress-bar-stripes 2s linear infinite;animation:progress-bar-stripes 2s linear infinite}', ""])
        }, 10: function (e, t, i) {
            function n(e, t) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i], r = d[n.id];
                    if (r) {
                        r.refs++;
                        for (var o = 0; o < r.parts.length; o++)r.parts[o](n.parts[o]);
                        for (; o < n.parts.length; o++)r.parts.push(u(n.parts[o], t))
                    } else {
                        for (var s = [], o = 0; o < n.parts.length; o++)s.push(u(n.parts[o], t));
                        d[n.id] = {id: n.id, refs: 1, parts: s}
                    }
                }
            }

            function r(e) {
                for (var t = [], i = {}, n = 0; n < e.length; n++) {
                    var r = e[n], o = r[0], s = r[1], a = r[2], u = r[3], l = {css: s, media: a, sourceMap: u};
                    i[o] ? i[o].parts.push(l) : t.push(i[o] = {id: o, parts: [l]})
                }
                return t
            }

            function o(e, t) {
                var i = m(), n = v[v.length - 1];
                if ("top" === e.insertAt) n ? n.nextSibling ? i.insertBefore(t, n.nextSibling) : i.appendChild(t) : i.insertBefore(t, i.firstChild), v.push(t); else {
                    if ("bottom" !== e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                    i.appendChild(t)
                }
            }

            function s(e) {
                e.parentNode.removeChild(e);
                var t = v.indexOf(e);
                t >= 0 && v.splice(t, 1)
            }

            function a(e) {
                var t = document.createElement("style");
                return t.type = "text/css", o(e, t), t
            }

            function u(e, t) {
                var i, n, r;
                if (t.singleton) {
                    var o = g++;
                    i = h || (h = a(t)), n = l.bind(null, i, o, !1), r = l.bind(null, i, o, !0)
                } else i = a(t), n = c.bind(null, i), r = function () {
                    s(i)
                };
                return n(e), function (t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)return;
                        n(e = t)
                    } else r()
                }
            }

            function l(e, t, i, n) {
                var r = i ? "" : n.css;
                if (e.styleSheet) e.styleSheet.cssText = x(t, r); else {
                    var o = document.createTextNode(r), s = e.childNodes;
                    s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(o, s[t]) : e.appendChild(o)
                }
            }

            function c(e, t) {
                var i = t.css, n = t.media, r = t.sourceMap;
                if (n && e.setAttribute("media", n), r && (i += "\n/*# sourceURL=" + r.sources[0] + " */", i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"), e.styleSheet) e.styleSheet.cssText = i; else {
                    for (; e.firstChild;)e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(i))
                }
            }

            var d = {}, p = function (e) {
                var t;
                return function () {
                    return "undefined" == typeof t && (t = e.apply(this, arguments)), t
                }
            }, f = p(function () {
                return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
            }), m = p(function () {
                return document.head || document.getElementsByTagName("head")[0]
            }), h = null, g = 0, v = [];
            e.exports = function (e, t) {
                t = t || {}, "undefined" == typeof t.singleton && (t.singleton = f()), "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
                var i = r(e);
                return n(i, t), function (e) {
                    for (var o = [], s = 0; s < i.length; s++) {
                        var a = i[s], u = d[a.id];
                        u.refs--, o.push(u)
                    }
                    if (e) {
                        var l = r(e);
                        n(l, t)
                    }
                    for (var s = 0; s < o.length; s++) {
                        var u = o[s];
                        if (0 === u.refs) {
                            for (var c = 0; c < u.parts.length; c++)u.parts[c]();
                            delete d[u.id]
                        }
                    }
                }
            };
            var x = function () {
                var e = [];
                return function (t, i) {
                    return e[t] = i, e.filter(Boolean).join("\n")
                }
            }()
        }, 11: function (e, t, i) {
            var n = i(9);
            "string" == typeof n && (n = [[e.id, n, ""]]);
            i(10)(n, {});
            n.locals && (e.exports = n.locals)
        }, 12: function (e, t, i) {
            var n, r, o;
            (function (e) {
                "use strict";
                var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
                !function (s, a) {
                    "object" == i(t) && "object" == i(e) ? e.exports = a() : (r = [], n = a, o = "function" == typeof n ? n.apply(t, r) : n, !(void 0 !== o && (e.exports = o)))
                }(void 0, function () {
                    return function (e) {
                        function t(n) {
                            if (i[n])return i[n].exports;
                            var r = i[n] = {exports: {}, id: n, loaded: !1};
                            return e[n].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
                        }

                        var i = {};
                        return t.m = e, t.c = i, t.p = "", t(0)
                    }({
                        0: function (e, t, n) {
                            var r = "function" == typeof Symbol && "symbol" == i(Symbol.iterator) ? function (e) {
                                return "undefined" == typeof e ? "undefined" : i(e)
                            } : function (e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : "undefined" == typeof e ? "undefined" : i(e)
                            }, o = n(35), s = 0, a = [];
                            !function (e) {
                                function t(e, t) {
                                    for (var i in t)t.hasOwnProperty(i) && (e[i] = t[i]);
                                    return e
                                }

                                function i(e) {
                                    var t;
                                    switch ("undefined" == typeof e ? "undefined" : r(e)) {
                                        case"undefined":
                                            break;
                                        case"string":
                                            t = e + "";
                                            break;
                                        case"number":
                                            t = e - 0;
                                            break;
                                        case"boolean":
                                            t = e;
                                            break;
                                        case"object":
                                            if (null === e) t = null; else if (e instanceof Array) {
                                                t = [];
                                                for (var n = 0, o = e.length; n < o; n++)t.push(i(e[n]))
                                            } else {
                                                t = {};
                                                for (var s in e)t[s] = i(e[s])
                                            }
                                            break;
                                        default:
                                            t = e
                                    }
                                    return t
                                }

                                var n = function (e) {
                                    var n = i(this.data);
                                    this.data = t(n, e), this.init(e)
                                };
                                n.prototype = {
                                    data: {
                                        uploader: {},
                                        total_part: 0,
                                        part_now: 0,
                                        params: {},
                                        complete_url: "",
                                        callback: function (e) {
                                        }
                                    }, init: function (e) {
                                        var t = this, i = [];
                                        if (e.group)for (var n = 0; n < e.group.length; n++)"img" === e.group[n] && i.push({
                                            title: "Image files",
                                            extensions: "jpg,gif,png,jpeg"
                                        }), "zip" === e.group[n] && i.push({
                                            title: "Zip files",
                                            extensions: "zip,rar,lzh,gzip"
                                        });
                                        e.custom && i.push({title: "Custom files", extensions: e.custom});
                                        var r = e.type || "", u = e.url || "", l = e.container || "container",
                                            c = e.browse_button || "pickfiles", d = e.progress || void 0,
                                            p = e.setting || "loacl", f = e.max_file_size || "10mb",
                                            m = e.chunk_size || "204800", h = e.multi_selection || !1,
                                            g = new o.Uploader({
                                                runtimes: "html5,flash,silverlight,html4",
                                                browse_button: c,
                                                container: document.getElementById(l),
                                                url: window.config.api.url + u,
                                                multi_selection: h,
                                                chunk_size: m,
                                                filters: {mime_types: i, max_file_size: f},
                                                init: {
                                                    PostInit: function () {
                                                        e.PostInit && e.PostInit()
                                                    }, FilesAdded: function (i, n) {
                                                        o.each(n, function (e) {
                                                        }), e.FilesAdded && e.FilesAdded(i, n), g.stop(), s = 0, s++, a = n, t.getUploadIdAndSign(n[0], p, r, function () {
                                                            i.start()
                                                        }, e)
                                                    }, UploadProgress: function (t, i) {
                                                        e.UploadProgress ? e.UploadProgress(t, i) : void 0 != d && (document.getElementById(d).innerHTML = i.percent + "%", document.getElementById(d).style.width = i.percent + "%")
                                                    }, Error: function (t, i) {
                                                        "-601" == i.code ? tools.alert.error("该文件格式不支持!") : "-600" == i.code ? tools.alert.error("文件过大!") : "-700" == i.code ? tools.alert.error("该图片格式不支持!") : tools.alert.error("文件上传失败!"), e.Error ? e.Error(t, i) : void 0 != d && (document.getElementById(d).innerHTML = "", document.getElementById(d).style.width = "")
                                                    }, ChunkUploaded: function (i, n, r) {
                                                        return 200 != r.status ? (e.ChunkUploaded ? e.ChunkUploaded(i, n) : void 0 != d && (document.getElementById(d).innerHTML = "", document.getElementById(d).style.width = ""), i.stop(), void tools.alert.error("文件上传失败!")) : void(t.data.total_part > t.data.part_now && t.setParams(parseInt(t.data.part_now) + 1))
                                                    }, FileUploaded: function (i, n, o) {
                                                        return i.stop(), e.FileUploaded ? e.FileUploaded(i, n, a) : void 0 != d && (document.getElementById(d).innerHTML = "", document.getElementById(d).style.width = ""), 200 != o.status ? void tools.alert.error("文件上传失败!") : void t.setComplete(t.data.upload_id, e, i, h, function () {
                                                            t.getUploadIdAndSign(a[s], p, r, function () {
                                                                s++, i.start()
                                                            }, e)
                                                        })
                                                    }
                                                }
                                            });
                                        g.init(), t.data.uploader = g
                                    }, getUploadIdAndSign: function (e, t, i, n, r) {
                                        var o = this, s = o.data.uploader.getOption("chunk_size"),
                                            a = r.progress || void 0;
                                        0 == s && (s = e.size), tools.ajax({
                                            url: r.url,
                                            ajaxData: {
                                                total_size: e.size,
                                                part_size: s,
                                                file_type: e.type,
                                                filename: e.name,
                                                upload_setting: t,
                                                upload_type: i
                                            },
                                            successFun: function (e) {
                                                var t = e.data.upload_id;
                                                o.data.upload_id = t, o.data.total_part = e.data.part_num, o.data.complete_url = e.data.complete_url, o.data.sign = e.list, e.data.part_num > 1 ? o.data.uploader.setOption("chunk_size", e.data.part_size) : o.data.uploader.setOption("chunk_size", "0KB"), o.setParams(1), n()
                                            },
                                            errorFun: function (e, t, i, n) {
                                                r.getUploadIdAndSign ? r.getUploadIdAndSign() : void 0 != a && (document.getElementById(a).innerHTML = "", document.getElementById(a).style.width = ""), tools.alert.error(e.error_msg)
                                            },
                                            type: "POST"
                                        })
                                    }, setParams: function (e) {
                                        var t = this, i = t.data.sign[parseInt(e) - 1], n = {},
                                            r = i.host + "?token=" + tools.cache.get("Authorization");
                                        "cloud" == i.type ? (n = {
                                            key: i.dir + i.filename,
                                            policy: i.policy,
                                            OSSAccessKeyId: i.accessid,
                                            success_action_status: "200",
                                            callback: i.callback,
                                            signature: i.signature
                                        }, r = i.host) : "local" == i.type && (n = {
                                                upload_id: i.upload_id,
                                                part_now: i.part_now
                                            }), t.data.uploader.setOption({
                                            url: r,
                                            multipart_params: n
                                        }), t.data.part_now = e
                                    }, setComplete: function (e, t, i, n, r) {
                                        var o = this, u = o.data.complete_url + e, l = t.progress || void 0;
                                        tools.ajax({
                                            url: u, ajaxData: {}, successFun: function (e) {
                                                if (t.setComplete ? t.setComplete() : void 0 != l && (document.getElementById(l).innerHTML = "", document.getElementById(l).style.width = ""), "function" == typeof o.data.callback && o.data.callback(e), a.length > 1 && n) {
                                                    if (s === a.length)return;
                                                    r()
                                                }
                                            }, errorFun: function (e, i, n, r) {
                                                t.setComplete ? t.setComplete() : void 0 != l && (document.getElementById(l).innerHTML = "", document.getElementById(l).style.width = ""), tools.alert.error(e.error_msg)
                                            }, type: "PUT"
                                        })
                                    }
                                }, e = e || window, e.upload = function (e) {
                                    return new n(e)
                                }
                            }(window)
                        }, 34: function (e, t, n) {
                            var r, o, s,
                                a = "function" == typeof Symbol && "symbol" == i(Symbol.iterator) ? function (e) {
                                    return "undefined" == typeof e ? "undefined" : i(e)
                                } : function (e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : "undefined" == typeof e ? "undefined" : i(e)
                                }, u = !0;
                            !function (i, n) {
                                var a = function () {
                                    var e = {};
                                    return n.apply(e, arguments), e.moxie
                                };
                                o = [], r = a, s = "function" == typeof r ? r.apply(t, o) : r, !(void 0 !== s && (e.exports = s))
                            }(window, function () {
                                !function (e, t) {
                                    function i(e, t) {
                                        for (var i, n = [], r = 0; r < e.length; ++r) {
                                            if (i = l[e[r]] || o(e[r]), !i)throw"module definition dependecy not found: " + e[r];
                                            n.push(i)
                                        }
                                        t.apply(null, n)
                                    }

                                    function n(e, n, r) {
                                        if ("string" != typeof e)throw"invalid module definition, module id must be defined and be a string";
                                        if (n === t)throw"invalid module definition, dependencies must be specified";
                                        if (r === t)throw"invalid module definition, definition function must be specified";
                                        i(n, function () {
                                            l[e] = r.apply(null, arguments)
                                        })
                                    }

                                    function r(e) {
                                        return !!l[e]
                                    }

                                    function o(t) {
                                        for (var i = e, n = t.split(/[.\/]/), r = 0; r < n.length; ++r) {
                                            if (!i[n[r]])return;
                                            i = i[n[r]]
                                        }
                                        return i
                                    }

                                    function s(i) {
                                        for (var n = 0; n < i.length; n++) {
                                            for (var r = e, o = i[n], s = o.split(/[.\/]/),
                                                     a = 0; a < s.length - 1; ++a)r[s[a]] === t && (r[s[a]] = {}), r = r[s[a]];
                                            r[s[s.length - 1]] = l[o]
                                        }
                                    }

                                    var l = {};
                                    n("moxie/core/utils/Basic", [], function () {
                                        function e(e) {
                                            var t;
                                            return e === t ? "undefined" : null === e ? "null" : e.nodeType ? "node" : {}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
                                        }

                                        function t() {
                                            return s(!1, !1, arguments)
                                        }

                                        function i() {
                                            return s(!0, !1, arguments)
                                        }

                                        function n() {
                                            return s(!1, !0, arguments)
                                        }

                                        function r() {
                                            return s(!0, !0, arguments)
                                        }

                                        function o(i) {
                                            switch (e(i)) {
                                                case"array":
                                                    return Array.prototype.slice.call(i);
                                                case"object":
                                                    return t({}, i)
                                            }
                                            return i
                                        }

                                        function s(t, i, n) {
                                            var r, a = n[0];
                                            return u(n, function (n, l) {
                                                l > 0 && u(n, function (n, u) {
                                                    var l = p(e(n), ["array", "object"]) !== -1;
                                                    return !!(n === r || t && a[u] === r) || (l && i && (n = o(n)), void(e(a[u]) === e(n) && l ? s(t, i, [a[u], n]) : a[u] = n))
                                                })
                                            }), a
                                        }

                                        function a(e, t) {
                                            function i() {
                                                this.constructor = e
                                            }

                                            for (var n in t)({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                            return i.prototype = t.prototype, e.prototype = new i, e.__parent__ = t.prototype, e
                                        }

                                        function u(e, t) {
                                            var i, n, r, o;
                                            if (e) {
                                                try {
                                                    i = e.length
                                                } catch (e) {
                                                    i = o
                                                }
                                                if (i === o || "number" != typeof i) {
                                                    for (n in e)if (e.hasOwnProperty(n) && t(e[n], n) === !1)return
                                                } else for (r = 0; r < i; r++)if (t(e[r], r) === !1)return
                                            }
                                        }

                                        function l(t) {
                                            var i;
                                            if (!t || "object" !== e(t))return !0;
                                            for (i in t)return !1;
                                            return !0
                                        }

                                        function c(t, i) {
                                            function n(r) {
                                                "function" === e(t[r]) && t[r](function (e) {
                                                    ++r < o && !e ? n(r) : i(e)
                                                })
                                            }

                                            var r = 0, o = t.length;
                                            "function" !== e(i) && (i = function () {
                                            }), t && t.length || i(), n(r)
                                        }

                                        function d(e, t) {
                                            var i = 0, n = e.length, r = new Array(n);
                                            u(e, function (e, o) {
                                                e(function (e) {
                                                    if (e)return t(e);
                                                    var s = [].slice.call(arguments);
                                                    s.shift(), r[o] = s, i++, i === n && (r.unshift(null), t.apply(this, r))
                                                })
                                            })
                                        }

                                        function p(e, t) {
                                            if (t) {
                                                if (Array.prototype.indexOf)return Array.prototype.indexOf.call(t, e);
                                                for (var i = 0, n = t.length; i < n; i++)if (t[i] === e)return i
                                            }
                                            return -1
                                        }

                                        function f(t, i) {
                                            var n = [];
                                            "array" !== e(t) && (t = [t]), "array" !== e(i) && (i = [i]);
                                            for (var r in t)p(t[r], i) === -1 && n.push(t[r]);
                                            return !!n.length && n
                                        }

                                        function m(e, t) {
                                            var i = [];
                                            return u(e, function (e) {
                                                p(e, t) !== -1 && i.push(e)
                                            }), i.length ? i : null
                                        }

                                        function h(e) {
                                            var t, i = [];
                                            for (t = 0; t < e.length; t++)i[t] = e[t];
                                            return i
                                        }

                                        function g(e) {
                                            return e ? String.prototype.trim ? String.prototype.trim.call(e) : e.toString().replace(/^\s*/, "").replace(/\s*$/, "") : e
                                        }

                                        function v(e) {
                                            if ("string" != typeof e)return e;
                                            var t, i = {t: 1099511627776, g: 1073741824, m: 1048576, k: 1024};
                                            return e = /^([0-9\.]+)([tmgk]?)$/.exec(e.toLowerCase().replace(/[^0-9\.tmkg]/g, "")), t = e[2], e = +e[1], i.hasOwnProperty(t) && (e *= i[t]), Math.floor(e)
                                        }

                                        function x(t) {
                                            var i = [].slice.call(arguments, 1);
                                            return t.replace(/%[a-z]/g, function () {
                                                var t = i.shift();
                                                return "undefined" !== e(t) ? t : ""
                                            })
                                        }

                                        function y(e, t) {
                                            var i = this;
                                            setTimeout(function () {
                                                e.call(i)
                                            }, t || 1)
                                        }

                                        var _ = function () {
                                            var e = 0;
                                            return function (t) {
                                                var i, n = (new Date).getTime().toString(32);
                                                for (i = 0; i < 5; i++)n += Math.floor(65535 * Math.random()).toString(32);
                                                return (t || "o_") + n + (e++).toString(32)
                                            }
                                        }();
                                        return {
                                            guid: _,
                                            typeOf: e,
                                            extend: t,
                                            extendIf: i,
                                            extendImmutable: n,
                                            extendImmutableIf: r,
                                            inherit: a,
                                            each: u,
                                            isEmptyObj: l,
                                            inSeries: c,
                                            inParallel: d,
                                            inArray: p,
                                            arrayDiff: f,
                                            arrayIntersect: m,
                                            toArray: h,
                                            trim: g,
                                            sprintf: x,
                                            parseSizeStr: v,
                                            delay: y
                                        }
                                    }), n("moxie/core/utils/Encode", [], function () {
                                        var e = function (e) {
                                            return unescape(encodeURIComponent(e))
                                        }, t = function (e) {
                                            return decodeURIComponent(escape(e))
                                        }, i = function (e, i) {
                                            if ("function" == typeof window.atob)return i ? t(window.atob(e)) : window.atob(e);
                                            var n, r, o, s, a, u, l, c,
                                                d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                                                p = 0, f = 0, m = "", h = [];
                                            if (!e)return e;
                                            e += "";
                                            do s = d.indexOf(e.charAt(p++)), a = d.indexOf(e.charAt(p++)), u = d.indexOf(e.charAt(p++)), l = d.indexOf(e.charAt(p++)), c = s << 18 | a << 12 | u << 6 | l, n = c >> 16 & 255, r = c >> 8 & 255, o = 255 & c, 64 == u ? h[f++] = String.fromCharCode(n) : 64 == l ? h[f++] = String.fromCharCode(n, r) : h[f++] = String.fromCharCode(n, r, o); while (p < e.length);
                                            return m = h.join(""), i ? t(m) : m
                                        }, n = function t(i, n) {
                                            if (n && (i = e(i)), "function" == typeof window.btoa)return window.btoa(i);
                                            var t, r, o, s, a, u, l, c,
                                                d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                                                p = 0, f = 0, m = "", h = [];
                                            if (!i)return i;
                                            do t = i.charCodeAt(p++), r = i.charCodeAt(p++), o = i.charCodeAt(p++), c = t << 16 | r << 8 | o, s = c >> 18 & 63, a = c >> 12 & 63, u = c >> 6 & 63, l = 63 & c, h[f++] = d.charAt(s) + d.charAt(a) + d.charAt(u) + d.charAt(l); while (p < i.length);
                                            m = h.join("");
                                            var g = i.length % 3;
                                            return (g ? m.slice(0, g - 3) : m) + "===".slice(g || 3)
                                        };
                                        return {utf8_encode: e, utf8_decode: t, atob: i, btoa: n}
                                    }), n("moxie/core/utils/Env", ["moxie/core/utils/Basic"], function (e) {
                                        function t(e, t, i) {
                                            var n = 0, r = 0, o = 0, s = {
                                                dev: -6,
                                                alpha: -5,
                                                a: -5,
                                                beta: -4,
                                                b: -4,
                                                RC: -3,
                                                rc: -3,
                                                "#": -2,
                                                p: 1,
                                                pl: 1
                                            }, a = function (e) {
                                                return e = ("" + e).replace(/[_\-+]/g, "."), e = e.replace(/([^.\d]+)/g, ".$1.").replace(/\.{2,}/g, "."), e.length ? e.split(".") : [-8]
                                            }, u = function (e) {
                                                return e ? isNaN(e) ? s[e] || -7 : parseInt(e, 10) : 0
                                            };
                                            for (e = a(e), t = a(t), r = Math.max(e.length, t.length), n = 0; n < r; n++)if (e[n] != t[n]) {
                                                if (e[n] = u(e[n]), t[n] = u(t[n]), e[n] < t[n]) {
                                                    o = -1;
                                                    break
                                                }
                                                if (e[n] > t[n]) {
                                                    o = 1;
                                                    break
                                                }
                                            }
                                            if (!i)return o;
                                            switch (i) {
                                                case">":
                                                case"gt":
                                                    return o > 0;
                                                case">=":
                                                case"ge":
                                                    return o >= 0;
                                                case"<=":
                                                case"le":
                                                    return o <= 0;
                                                case"==":
                                                case"=":
                                                case"eq":
                                                    return 0 === o;
                                                case"<>":
                                                case"!=":
                                                case"ne":
                                                    return 0 !== o;
                                                case"":
                                                case"<":
                                                case"lt":
                                                    return o < 0;
                                                default:
                                                    return null
                                            }
                                        }

                                        var i = function (e) {
                                            var t = "", i = "?", n = "function", r = "undefined", o = "object",
                                                s = "name", u = "version", l = {
                                                    has: function (e, t) {
                                                        return t.toLowerCase().indexOf(e.toLowerCase()) !== -1
                                                    }, lowerize: function (e) {
                                                        return e.toLowerCase()
                                                    }
                                                }, c = {
                                                    rgx: function () {
                                                        for (var t, i, s, u, l, c, d, p = 0,
                                                                 f = arguments; p < f.length; p += 2) {
                                                            var m = f[p], h = f[p + 1];
                                                            if (("undefined" == typeof t ? "undefined" : a(t)) === r) {
                                                                t = {};
                                                                for (u in h)l = h[u], ("undefined" == typeof l ? "undefined" : a(l)) === o ? t[l[0]] = e : t[l] = e
                                                            }
                                                            for (i = s = 0; i < m.length; i++)if (c = m[i].exec(this.getUA())) {
                                                                for (u = 0; u < h.length; u++)d = c[++s], l = h[u], ("undefined" == typeof l ? "undefined" : a(l)) === o && l.length > 0 ? 2 == l.length ? a(l[1]) == n ? t[l[0]] = l[1].call(this, d) : t[l[0]] = l[1] : 3 == l.length ? a(l[1]) !== n || l[1].exec && l[1].test ? t[l[0]] = d ? d.replace(l[1], l[2]) : e : t[l[0]] = d ? l[1].call(this, d, l[2]) : e : 4 == l.length && (t[l[0]] = d ? l[3].call(this, d.replace(l[1], l[2])) : e) : t[l] = d ? d : e;
                                                                break
                                                            }
                                                            if (c)break
                                                        }
                                                        return t
                                                    }, str: function (t, n) {
                                                        for (var r in n)if (a(n[r]) === o && n[r].length > 0) {
                                                            for (var s = 0; s < n[r].length; s++)if (l.has(n[r][s], t))return r === i ? e : r
                                                        } else if (l.has(n[r], t))return r === i ? e : r;
                                                        return t
                                                    }
                                                }, d = {
                                                    browser: {
                                                        oldsafari: {
                                                            major: {
                                                                1: ["/8", "/1", "/3"],
                                                                2: "/4",
                                                                "?": "/"
                                                            },
                                                            version: {
                                                                "1.0": "/8",
                                                                1.2: "/1",
                                                                1.3: "/3",
                                                                "2.0": "/412",
                                                                "2.0.2": "/416",
                                                                "2.0.3": "/417",
                                                                "2.0.4": "/419",
                                                                "?": "/"
                                                            }
                                                        }
                                                    },
                                                    device: {
                                                        sprint: {
                                                            model: {"Evo Shift 4G": "7373KT"},
                                                            vendor: {HTC: "APA", Sprint: "Sprint"}
                                                        }
                                                    },
                                                    os: {
                                                        windows: {
                                                            version: {
                                                                ME: "4.90",
                                                                "NT 3.11": "NT3.51",
                                                                "NT 4.0": "NT4.0",
                                                                2e3: "NT 5.0",
                                                                XP: ["NT 5.1", "NT 5.2"],
                                                                Vista: "NT 6.0",
                                                                7: "NT 6.1",
                                                                8: "NT 6.2",
                                                                8.1: "NT 6.3",
                                                                RT: "ARM"
                                                            }
                                                        }
                                                    }
                                                }, p = {
                                                    browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [s, u], [/\s(opr)\/([\w\.]+)/i], [[s, "Opera"], u], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi)\/([\w\.-]+)/i], [s, u], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[s, "IE"], u], [/(edge)\/((\d+)?[\w\.]+)/i], [s, u], [/(yabrowser)\/([\w\.]+)/i], [[s, "Yandex"], u], [/(comodo_dragon)\/([\w\.]+)/i], [[s, /_/g, " "], u], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(uc\s?browser|qqbrowser)[\/\s]?([\w\.]+)/i], [s, u], [/(dolfin)\/([\w\.]+)/i], [[s, "Dolphin"], u], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[s, "Chrome"], u], [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i], [u, [s, "MIUI Browser"]], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i], [u, [s, "Android Browser"]], [/FBAV\/([\w\.]+);/i], [u, [s, "Facebook"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [u, [s, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [u, s], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [s, [u, c.str, d.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [s, u], [/(navigator|netscape)\/([\w\.-]+)/i], [[s, "Netscape"], u], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [s, u]],
                                                    engine: [[/windows.+\sedge\/([\w\.]+)/i], [u, [s, "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [s, u], [/rv\:([\w\.]+).*(gecko)/i], [u, s]],
                                                    os: [[/microsoft\s(windows)\s(vista|xp)/i], [s, u], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [s, [u, c.str, d.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[s, "Windows"], [u, c.str, d.os.windows.version]], [/\((bb)(10);/i], [[s, "BlackBerry"], u], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i], [s, u], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [[s, "Symbian"], u], [/\((series40);/i], [s], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[s, "Firefox OS"], u], [/(nintendo|playstation)\s([wids3portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], [s, u], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[s, "Chromium OS"], u], [/(sunos)\s?([\w\.]+\d)*/i], [[s, "Solaris"], u], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [s, u], [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i], [[s, "iOS"], [u, /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i], [[s, "Mac OS"], [u, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i], [s, u]]
                                                }, f = function (e) {
                                                    var i = e || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : t);
                                                    this.getBrowser = function () {
                                                        return c.rgx.apply(this, p.browser)
                                                    }, this.getEngine = function () {
                                                        return c.rgx.apply(this, p.engine)
                                                    }, this.getOS = function () {
                                                        return c.rgx.apply(this, p.os)
                                                    }, this.getResult = function () {
                                                        return {
                                                            ua: this.getUA(),
                                                            browser: this.getBrowser(),
                                                            engine: this.getEngine(),
                                                            os: this.getOS()
                                                        }
                                                    }, this.getUA = function () {
                                                        return i
                                                    }, this.setUA = function (e) {
                                                        return i = e, this
                                                    }, this.setUA(i)
                                                };
                                            return f
                                        }(), n = function () {
                                            var t = {
                                                define_property: function () {
                                                    return !1
                                                }(), create_canvas: function () {
                                                    var e = document.createElement("canvas");
                                                    return !(!e.getContext || !e.getContext("2d"))
                                                }(), return_response_type: function (t) {
                                                    try {
                                                        if (e.inArray(t, ["", "text", "document"]) !== -1)return !0;
                                                        if (window.XMLHttpRequest) {
                                                            var i = new XMLHttpRequest;
                                                            if (i.open("get", "/"), "responseType" in i)return i.responseType = t, i.responseType === t
                                                        }
                                                    } catch (e) {
                                                    }
                                                    return !1
                                                }, use_data_uri: function () {
                                                    var e = new Image;
                                                    return e.onload = function () {
                                                        t.use_data_uri = 1 === e.width && 1 === e.height
                                                    }, setTimeout(function () {
                                                        e.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP8AAAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                                                    }, 1), !1
                                                }(), use_data_uri_over32kb: function () {
                                                    return t.use_data_uri && ("IE" !== o.browser || o.version >= 9)
                                                }, use_data_uri_of: function (e) {
                                                    return t.use_data_uri && e < 33e3 || t.use_data_uri_over32kb()
                                                }, use_fileinput: function () {
                                                    if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/))return !1;
                                                    var e = document.createElement("input");
                                                    return e.setAttribute("type", "file"), !e.disabled
                                                }
                                            };
                                            return function (i) {
                                                var n = [].slice.call(arguments);
                                                return n.shift(), "function" === e.typeOf(t[i]) ? t[i].apply(this, n) : !!t[i]
                                            }
                                        }(), r = (new i).getResult(), o = {
                                            can: n,
                                            uaParser: i,
                                            browser: r.browser.name,
                                            version: r.browser.version,
                                            os: r.os.name,
                                            osVersion: r.os.version,
                                            verComp: t,
                                            swf_url: "../flash/Moxie.swf",
                                            xap_url: "../silverlight/Moxie.xap",
                                            global_event_dispatcher: "moxie.core.EventTarget.instance.dispatchEvent"
                                        };
                                        return o.OS = o.os, u && (o.debug = {
                                            runtime: !0,
                                            events: !1
                                        }, o.log = function () {
                                            function t(e) {
                                                n.appendChild(document.createTextNode(e + "\n"))
                                            }

                                            var i = arguments[0];
                                            if ("string" === e.typeOf(i) && (i = e.sprintf.apply(this, arguments)), window && window.console && window.console.log) window.console.log(i); else if (document) {
                                                var n = document.getElementById("moxie-console");
                                                n || (n = document.createElement("pre"), n.id = "moxie-console", document.body.appendChild(n)), e.inArray(e.typeOf(i), ["object", "array"]) !== -1 ? t(i) : n.appendChild(document.createTextNode(i + "\n"))
                                            }
                                        }), o
                                    }), n("moxie/core/Exceptions", ["moxie/core/utils/Basic"], function (e) {
                                        function t(e, t) {
                                            var i;
                                            for (i in e)if (e[i] === t)return i;
                                            return null
                                        }

                                        return {
                                            RuntimeError: function () {
                                                function i(e, i) {
                                                    this.code = e, this.name = t(n, e), this.message = this.name + (i || ": RuntimeError " + this.code)
                                                }

                                                var n = {
                                                    NOT_INIT_ERR: 1,
                                                    EXCEPTION_ERR: 3,
                                                    NOT_SUPPORTED_ERR: 9,
                                                    JS_ERR: 4
                                                };
                                                return e.extend(i, n), i.prototype = Error.prototype, i
                                            }(), OperationNotAllowedException: function () {
                                                function t(e) {
                                                    this.code = e, this.name = "OperationNotAllowedException"
                                                }

                                                return e.extend(t, {NOT_ALLOWED_ERR: 1}), t.prototype = Error.prototype, t
                                            }(), ImageError: function () {
                                                function i(e) {
                                                    this.code = e, this.name = t(n, e), this.message = this.name + ": ImageError " + this.code
                                                }

                                                var n = {WRONG_FORMAT: 1, MAX_RESOLUTION_ERR: 2, INVALID_META_ERR: 3};
                                                return e.extend(i, n), i.prototype = Error.prototype, i
                                            }(), FileException: function () {
                                                function i(e) {
                                                    this.code = e, this.name = t(n, e), this.message = this.name + ": FileException " + this.code
                                                }

                                                var n = {
                                                    NOT_FOUND_ERR: 1,
                                                    SECURITY_ERR: 2,
                                                    ABORT_ERR: 3,
                                                    NOT_READABLE_ERR: 4,
                                                    ENCODING_ERR: 5,
                                                    NO_MODIFICATION_ALLOWED_ERR: 6,
                                                    INVALID_STATE_ERR: 7,
                                                    SYNTAX_ERR: 8
                                                };
                                                return e.extend(i, n), i.prototype = Error.prototype, i
                                            }(), DOMException: function () {
                                                function i(e) {
                                                    this.code = e, this.name = t(n, e), this.message = this.name + ": DOMException " + this.code
                                                }

                                                var n = {
                                                    INDEX_SIZE_ERR: 1,
                                                    DOMSTRING_SIZE_ERR: 2,
                                                    HIERARCHY_REQUEST_ERR: 3,
                                                    WRONG_DOCUMENT_ERR: 4,
                                                    INVALID_CHARACTER_ERR: 5,
                                                    NO_DATA_ALLOWED_ERR: 6,
                                                    NO_MODIFICATION_ALLOWED_ERR: 7,
                                                    NOT_FOUND_ERR: 8,
                                                    NOT_SUPPORTED_ERR: 9,
                                                    INUSE_ATTRIBUTE_ERR: 10,
                                                    INVALID_STATE_ERR: 11,
                                                    SYNTAX_ERR: 12,
                                                    INVALID_MODIFICATION_ERR: 13,
                                                    NAMESPACE_ERR: 14,
                                                    INVALID_ACCESS_ERR: 15,
                                                    VALIDATION_ERR: 16,
                                                    TYPE_MISMATCH_ERR: 17,
                                                    SECURITY_ERR: 18,
                                                    NETWORK_ERR: 19,
                                                    ABORT_ERR: 20,
                                                    URL_MISMATCH_ERR: 21,
                                                    QUOTA_EXCEEDED_ERR: 22,
                                                    TIMEOUT_ERR: 23,
                                                    INVALID_NODE_TYPE_ERR: 24,
                                                    DATA_CLONE_ERR: 25
                                                };
                                                return e.extend(i, n), i.prototype = Error.prototype, i
                                            }(), EventException: function () {
                                                function t(e) {
                                                    this.code = e, this.name = "EventException"
                                                }

                                                return e.extend(t, {UNSPECIFIED_EVENT_TYPE_ERR: 0}), t.prototype = Error.prototype, t
                                            }()
                                        }
                                    }), n("moxie/core/utils/Dom", ["moxie/core/utils/Env"], function (e) {
                                        var t = function (e) {
                                            return "string" != typeof e ? e : document.getElementById(e)
                                        }, i = function e(t, i) {
                                            if (!t.className)return !1;
                                            var e = new RegExp("(^|\\s+)" + i + "(\\s+|$)");
                                            return e.test(t.className)
                                        }, n = function (e, t) {
                                            i(e, t) || (e.className = e.className ? e.className.replace(/\s+$/, "") + " " + t : t)
                                        }, r = function (e, t) {
                                            if (e.className) {
                                                var i = new RegExp("(^|\\s+)" + t + "(\\s+|$)");
                                                e.className = e.className.replace(i, function (e, t, i) {
                                                    return " " === t && " " === i ? " " : ""
                                                })
                                            }
                                        }, o = function (e, t) {
                                            return e.currentStyle ? e.currentStyle[t] : window.getComputedStyle ? window.getComputedStyle(e, null)[t] : void 0
                                        }, s = function t(i, n) {
                                            function r(e) {
                                                var t, i, n = 0, r = 0;
                                                return e && (i = e.getBoundingClientRect(), t = "CSS1Compat" === l.compatMode ? l.documentElement : l.body, n = i.left + t.scrollLeft, r = i.top + t.scrollTop), {
                                                    x: n,
                                                    y: r
                                                }
                                            }

                                            var o, s, t, a = 0, u = 0, l = document;
                                            if (i = i, n = n || l.body, i && i.getBoundingClientRect && "IE" === e.browser && (!l.documentMode || l.documentMode < 8))return s = r(i), t = r(n), {
                                                x: s.x - t.x,
                                                y: s.y - t.y
                                            };
                                            for (o = i; o && o != n && o.nodeType;)a += o.offsetLeft || 0, u += o.offsetTop || 0, o = o.offsetParent;
                                            for (o = i.parentNode; o && o != n && o.nodeType;)a -= o.scrollLeft || 0, u -= o.scrollTop || 0, o = o.parentNode;
                                            return {x: a, y: u}
                                        }, a = function (e) {
                                            return {
                                                w: e.offsetWidth || e.clientWidth,
                                                h: e.offsetHeight || e.clientHeight
                                            }
                                        };
                                        return {
                                            get: t,
                                            hasClass: i,
                                            addClass: n,
                                            removeClass: r,
                                            getStyle: o,
                                            getPos: s,
                                            getSize: a
                                        }
                                    }), n("moxie/core/EventTarget", ["moxie/core/utils/Env", "moxie/core/Exceptions", "moxie/core/utils/Basic"], function (e, t, i) {
                                        function n() {
                                            this.uid = i.guid()
                                        }

                                        var r = {};
                                        return i.extend(n.prototype, {
                                            init: function () {
                                                this.uid || (this.uid = i.guid("uid_"))
                                            }, addEventListener: function (e, t, n, o) {
                                                var s, a = this;
                                                return this.hasOwnProperty("uid") || (this.uid = i.guid("uid_")), e = i.trim(e), /\s/.test(e) ? void i.each(e.split(/\s+/), function (e) {
                                                    a.addEventListener(e, t, n, o)
                                                }) : (e = e.toLowerCase(), n = parseInt(n, 10) || 0, s = r[this.uid] && r[this.uid][e] || [], s.push({
                                                    fn: t,
                                                    priority: n,
                                                    scope: o || this
                                                }), r[this.uid] || (r[this.uid] = {}), void(r[this.uid][e] = s))
                                            }, hasEventListener: function (e) {
                                                var t;
                                                return e ? (e = e.toLowerCase(), t = r[this.uid] && r[this.uid][e]) : t = r[this.uid], !!t && t
                                            }, removeEventListener: function (e, t) {
                                                var n, o, s = this;
                                                if (e = e.toLowerCase(), /\s/.test(e))return void i.each(e.split(/\s+/), function (e) {
                                                    s.removeEventListener(e, t)
                                                });
                                                if (n = r[this.uid] && r[this.uid][e]) {
                                                    if (t) {
                                                        for (o = n.length - 1; o >= 0; o--)if (n[o].fn === t) {
                                                            n.splice(o, 1);
                                                            break
                                                        }
                                                    } else n = [];
                                                    n.length || (delete r[this.uid][e], i.isEmptyObj(r[this.uid]) && delete r[this.uid])
                                                }
                                            }, removeAllEventListeners: function () {
                                                r[this.uid] && delete r[this.uid]
                                            }, dispatchEvent: function (n) {
                                                var o, s, a, l, c, d = {}, p = !0;
                                                if ("string" !== i.typeOf(n)) {
                                                    if (l = n, "string" !== i.typeOf(l.type))throw new t.EventException(t.EventException.UNSPECIFIED_EVENT_TYPE_ERR);
                                                    n = l.type, l.total !== c && l.loaded !== c && (d.total = l.total, d.loaded = l.loaded), d.async = l.async || !1
                                                }
                                                if (n.indexOf("::") !== -1 ? !function (e) {
                                                        o = e[0], n = e[1]
                                                    }(n.split("::")) : o = this.uid, n = n.toLowerCase(), s = r[o] && r[o][n]) {
                                                    s.sort(function (e, t) {
                                                        return t.priority - e.priority
                                                    }), a = [].slice.call(arguments), a.shift(), d.type = n, a.unshift(d), u && e.debug.events && e.log("Event '%s' fired on %u", d.type, o);
                                                    var f = [];
                                                    i.each(s, function (e) {
                                                        a[0].target = e.scope, d.async ? f.push(function (t) {
                                                            setTimeout(function () {
                                                                t(e.fn.apply(e.scope, a) === !1)
                                                            }, 1)
                                                        }) : f.push(function (t) {
                                                            t(e.fn.apply(e.scope, a) === !1)
                                                        })
                                                    }), f.length && i.inSeries(f, function (e) {
                                                        p = !e
                                                    })
                                                }
                                                return p
                                            }, bindOnce: function (e, t, i, n) {
                                                var r = this;
                                                r.bind.call(this, e, function i() {
                                                    return r.unbind(e, i), t.apply(this, arguments)
                                                }, i, n)
                                            }, bind: function () {
                                                this.addEventListener.apply(this, arguments)
                                            }, unbind: function () {
                                                this.removeEventListener.apply(this, arguments)
                                            }, unbindAll: function () {
                                                this.removeAllEventListeners.apply(this, arguments)
                                            }, trigger: function () {
                                                return this.dispatchEvent.apply(this, arguments)
                                            }, handleEventProps: function (e) {
                                                var t = this;
                                                this.bind(e.join(" "), function (e) {
                                                    var t = "on" + e.type.toLowerCase();
                                                    "function" === i.typeOf(this[t]) && this[t].apply(this, arguments)
                                                }), i.each(e, function (e) {
                                                    e = "on" + e.toLowerCase(e), "undefined" === i.typeOf(t[e]) && (t[e] = null)
                                                })
                                            }
                                        }), n.instance = new n, n
                                    }), n("moxie/runtime/Runtime", ["moxie/core/utils/Env", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/EventTarget"], function (e, t, i, n) {
                                        function r(n, o, a, l, c) {
                                            var d, p = this, f = t.guid(o + "_"), m = c || "browser";
                                            n = n || {}, s[f] = this, a = t.extend({
                                                access_binary: !1,
                                                access_image_binary: !1,
                                                display_media: !1,
                                                do_cors: !1,
                                                drag_and_drop: !1,
                                                filter_by_extension: !0,
                                                resize_image: !1,
                                                report_upload_progress: !1,
                                                return_response_headers: !1,
                                                return_response_type: !1,
                                                return_status_code: !0,
                                                send_custom_headers: !1,
                                                select_file: !1,
                                                select_folder: !1,
                                                select_multiple: !0,
                                                send_binary_string: !1,
                                                send_browser_cookies: !0,
                                                send_multipart: !0,
                                                slice_blob: !1,
                                                stream_upload: !1,
                                                summon_file_dialog: !1,
                                                upload_filesize: !0,
                                                use_http_method: !0
                                            }, a), n.preferred_caps && (m = r.getMode(l, n.preferred_caps, m)), u && e.debug.runtime && e.log("\tdefault mode: %s", m), d = function () {
                                                var e = {};
                                                return {
                                                    exec: function (t, i, n, r) {
                                                        if (d[i] && (e[t] || (e[t] = {
                                                                context: this,
                                                                instance: new d[i]
                                                            }), e[t].instance[n]))return e[t].instance[n].apply(this, r)
                                                    }, removeInstance: function (t) {
                                                        delete e[t]
                                                    }, removeAllInstances: function () {
                                                        var i = this;
                                                        t.each(e, function (e, n) {
                                                            "function" === t.typeOf(e.instance.destroy) && e.instance.destroy.call(e.context),
                                                                i.removeInstance(n)
                                                        })
                                                    }
                                                }
                                            }(), t.extend(this, {
                                                initialized: !1,
                                                uid: f,
                                                type: o,
                                                mode: r.getMode(l, n.required_caps, m),
                                                shimid: f + "_container",
                                                clients: 0,
                                                options: n,
                                                can: function (e, i) {
                                                    var n = arguments[2] || a;
                                                    if ("string" === t.typeOf(e) && "undefined" === t.typeOf(i) && (e = r.parseCaps(e)), "object" === t.typeOf(e)) {
                                                        for (var o in e)if (!this.can(o, e[o], n))return !1;
                                                        return !0
                                                    }
                                                    return "function" === t.typeOf(n[e]) ? n[e].call(this, i) : i === n[e]
                                                },
                                                getShimContainer: function () {
                                                    var e, n = i.get(this.shimid);
                                                    return n || (e = i.get(this.options.container) || document.body, n = document.createElement("div"), n.id = this.shimid, n.className = "moxie-shim moxie-shim-" + this.type, t.extend(n.style, {
                                                        position: "absolute",
                                                        top: "0px",
                                                        left: "0px",
                                                        width: "1px",
                                                        height: "1px",
                                                        overflow: "hidden"
                                                    }), e.appendChild(n), e = null), n
                                                },
                                                getShim: function () {
                                                    return d
                                                },
                                                shimExec: function (e, t) {
                                                    var i = [].slice.call(arguments, 2);
                                                    return p.getShim().exec.call(this, this.uid, e, t, i)
                                                },
                                                exec: function (e, t) {
                                                    var i = [].slice.call(arguments, 2);
                                                    return p[e] && p[e][t] ? p[e][t].apply(this, i) : p.shimExec.apply(this, arguments)
                                                },
                                                destroy: function () {
                                                    if (p) {
                                                        var e = i.get(this.shimid);
                                                        e && e.parentNode.removeChild(e), d && d.removeAllInstances(), this.unbindAll(), delete s[this.uid], this.uid = null, f = p = d = e = null
                                                    }
                                                }
                                            }), this.mode && n.required_caps && !this.can(n.required_caps) && (this.mode = !1)
                                        }

                                        var o = {}, s = {};
                                        return r.order = "html5,flash,silverlight,html4", r.getRuntime = function (e) {
                                            return !!s[e] && s[e]
                                        }, r.addConstructor = function (e, t) {
                                            t.prototype = n.instance, o[e] = t
                                        }, r.getConstructor = function (e) {
                                            return o[e] || null
                                        }, r.getInfo = function (e) {
                                            var t = r.getRuntime(e);
                                            return t ? {
                                                uid: t.uid, type: t.type, mode: t.mode, can: function () {
                                                    return t.can.apply(t, arguments)
                                                }
                                            } : null
                                        }, r.parseCaps = function (e) {
                                            var i = {};
                                            return "string" !== t.typeOf(e) ? e || {} : (t.each(e.split(","), function (e) {
                                                i[e] = !0
                                            }), i)
                                        }, r.can = function (e, t) {
                                            var i, n, o = r.getConstructor(e);
                                            return !!o && (i = new o({required_caps: t}), n = i.mode, i.destroy(), !!n)
                                        }, r.thatCan = function (e, t) {
                                            var i = (t || r.order).split(/\s*,\s*/);
                                            for (var n in i)if (r.can(i[n], e))return i[n];
                                            return null
                                        }, r.getMode = function (i, n, r) {
                                            var o = null;
                                            if ("undefined" === t.typeOf(r) && (r = "browser"), n && !t.isEmptyObj(i)) {
                                                if (t.each(n, function (n, r) {
                                                        if (i.hasOwnProperty(r)) {
                                                            var s = i[r](n);
                                                            if ("string" == typeof s && (s = [s]), o) {
                                                                if (!(o = t.arrayIntersect(o, s)))return u && e.debug.runtime && e.log("\t\t%c: %v (conflicting mode requested: %s)", r, n, s), o = !1
                                                            } else o = s
                                                        }
                                                        u && e.debug.runtime && e.log("\t\t%c: %v (compatible modes: %s)", r, n, o)
                                                    }), o)return t.inArray(r, o) !== -1 ? r : o[0];
                                                if (o === !1)return !1
                                            }
                                            return r
                                        }, r.capTrue = function () {
                                            return !0
                                        }, r.capFalse = function () {
                                            return !1
                                        }, r.capTest = function (e) {
                                            return function () {
                                                return !!e
                                            }
                                        }, r
                                    }), n("moxie/runtime/RuntimeClient", ["moxie/core/utils/Env", "moxie/core/Exceptions", "moxie/core/utils/Basic", "moxie/runtime/Runtime"], function (e, t, i, n) {
                                        return function () {
                                            var r;
                                            i.extend(this, {
                                                connectRuntime: function (o) {
                                                    function s(i) {
                                                        var a, c;
                                                        return i.length ? (a = i.shift().toLowerCase(), (c = n.getConstructor(a)) ? (u && e.debug.runtime && (e.log("Trying runtime: %s", a), e.log(o)), r = new c(o), r.bind("Init", function () {
                                                            r.initialized = !0, u && e.debug.runtime && e.log("Runtime '%s' initialized", r.type), setTimeout(function () {
                                                                r.clients++, l.ruid = r.uid, l.trigger("RuntimeInit", r)
                                                            }, 1)
                                                        }), r.bind("Error", function () {
                                                            u && e.debug.runtime && e.log("Runtime '%s' failed to initialize", r.type), r.destroy(), s(i)
                                                        }), r.bind("Exception", function (i, n) {
                                                            var r = n.name + "(#" + n.code + ")" + (n.message ? ", from: " + n.message : "");
                                                            u && e.debug.runtime && e.log("Runtime '%s' has thrown an exception: %s", this.type, r), l.trigger("RuntimeError", new t.RuntimeError(t.RuntimeError.EXCEPTION_ERR, r))
                                                        }), u && e.debug.runtime && e.log("\tselected mode: %s", r.mode), r.mode ? void r.init() : void r.trigger("Error")) : (u && e.debug.runtime && e.log("Constructor for '%s' runtime is not available.", a), void s(i))) : (l.trigger("RuntimeError", new t.RuntimeError(t.RuntimeError.NOT_INIT_ERR)), void(r = null))
                                                    }

                                                    var a, l = this;
                                                    if ("string" === i.typeOf(o) ? a = o : "string" === i.typeOf(o.ruid) && (a = o.ruid), a) {
                                                        if (r = n.getRuntime(a))return l.ruid = a, r.clients++, r;
                                                        throw new t.RuntimeError(t.RuntimeError.NOT_INIT_ERR)
                                                    }
                                                    s((o.runtime_order || n.order).split(/\s*,\s*/))
                                                }, disconnectRuntime: function () {
                                                    r && --r.clients <= 0 && r.destroy(), r = null
                                                }, getRuntime: function () {
                                                    return r && r.uid ? r : r = null
                                                }, exec: function () {
                                                    return r ? r.exec.apply(this, arguments) : null
                                                }, can: function (e) {
                                                    return !!r && r.can(e)
                                                }
                                            })
                                        }
                                    }), n("moxie/file/Blob", ["moxie/core/utils/Basic", "moxie/core/utils/Encode", "moxie/runtime/RuntimeClient"], function (e, t, i) {
                                        function n(o, s) {
                                            function a(t, i, o) {
                                                var s, a = r[this.uid];
                                                return "string" === e.typeOf(a) && a.length ? (s = new n(null, {
                                                    type: o,
                                                    size: i - t
                                                }), s.detach(a.substr(t, s.size)), s) : null
                                            }

                                            i.call(this), o && this.connectRuntime(o), s ? "string" === e.typeOf(s) && (s = {data: s}) : s = {}, e.extend(this, {
                                                uid: s.uid || e.guid("uid_"),
                                                ruid: o,
                                                size: s.size || 0,
                                                type: s.type || "",
                                                slice: function (e, t, i) {
                                                    return this.isDetached() ? a.apply(this, arguments) : this.getRuntime().exec.call(this, "Blob", "slice", this.getSource(), e, t, i)
                                                },
                                                getSource: function () {
                                                    return r[this.uid] ? r[this.uid] : null
                                                },
                                                detach: function (e) {
                                                    if (this.ruid && (this.getRuntime().exec.call(this, "Blob", "destroy"), this.disconnectRuntime(), this.ruid = null), e = e || "", "data:" == e.substr(0, 5)) {
                                                        var i = e.indexOf(";base64,");
                                                        this.type = e.substring(5, i), e = t.atob(e.substring(i + 8))
                                                    }
                                                    this.size = e.length, r[this.uid] = e
                                                },
                                                isDetached: function () {
                                                    return !this.ruid && "string" === e.typeOf(r[this.uid])
                                                },
                                                destroy: function () {
                                                    this.detach(), delete r[this.uid]
                                                }
                                            }), s.data ? this.detach(s.data) : r[this.uid] = s
                                        }

                                        var r = {};
                                        return n
                                    }), n("moxie/core/I18n", ["moxie/core/utils/Basic"], function (e) {
                                        var t = {};
                                        return {
                                            addI18n: function (i) {
                                                return e.extend(t, i)
                                            }, translate: function (e) {
                                                return t[e] || e
                                            }, _: function (e) {
                                                return this.translate(e)
                                            }, sprintf: function (t) {
                                                var i = [].slice.call(arguments, 1);
                                                return t.replace(/%[a-z]/g, function () {
                                                    var t = i.shift();
                                                    return "undefined" !== e.typeOf(t) ? t : ""
                                                })
                                            }
                                        }
                                    }), n("moxie/core/utils/Mime", ["moxie/core/utils/Basic", "moxie/core/I18n"], function (e, t) {
                                        var i = "application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb,application/vnd.ms-powerpoint,ppt pps pot,application/zip,zip,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/x-javascript,js,application/json,json,audio/mpeg,mp3 mpga mpega mp2,audio/x-wav,wav,audio/x-m4a,m4a,audio/ogg,oga ogg,audio/aiff,aiff aif,audio/flac,flac,audio/aac,aac,audio/ac3,ac3,audio/x-ms-wma,wma,image/bmp,bmp,image/gif,gif,image/jpeg,jpeg jpe,image/jpg,jpg,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/plain,asc txt text diff log,text/html,htm html xhtml,text/css,css,text/csv,csv,text/rtf,rtf,video/mpeg,mpeg mpg mpe m2v,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/3gpp,3gpp 3gp,video/3gpp2,3g2,video/vnd.rn-realvideo,rv,video/ogg,ogv,video/x-matroska,mkv,application/vnd.oasis.opendocument.formula-template,otf,application/octet-stream,exe",
                                            n = {
                                                mimes: {}, extensions: {}, addMimeType: function (e) {
                                                    var t, i, n, r = e.split(/,/);
                                                    for (t = 0; t < r.length; t += 2) {
                                                        for (n = r[t + 1].split(/ /), i = 0; i < n.length; i++)this.mimes[n[i]] = r[t];
                                                        this.extensions[r[t]] = n
                                                    }
                                                }, extList2mimes: function (t, i) {
                                                    var n, r, o, s, a = this, u = [];
                                                    for (r = 0; r < t.length; r++)for (n = t[r].extensions.split(/\s*,\s*/), o = 0; o < n.length; o++) {
                                                        if ("*" === n[o])return [];
                                                        if (s = a.mimes[n[o]], s && e.inArray(s, u) === -1 && u.push(s), i && /^\w+$/.test(n[o])) u.push("." + n[o]); else if (!s)return []
                                                    }
                                                    return u
                                                }, mimes2exts: function (t) {
                                                    var i = this, n = [];
                                                    return e.each(t, function (t) {
                                                        if ("*" === t)return n = [], !1;
                                                        var r = t.match(/^(\w+)\/(\*|\w+)$/);
                                                        r && ("*" === r[2] ? e.each(i.extensions, function (e, t) {
                                                            new RegExp("^" + r[1] + "/").test(t) && [].push.apply(n, i.extensions[t])
                                                        }) : i.extensions[t] && [].push.apply(n, i.extensions[t]))
                                                    }), n
                                                }, mimes2extList: function (i) {
                                                    var n = [], r = [];
                                                    return "string" === e.typeOf(i) && (i = e.trim(i).split(/\s*,\s*/)), r = this.mimes2exts(i), n.push({
                                                        title: t.translate("Files"),
                                                        extensions: r.length ? r.join(",") : "*"
                                                    }), n.mimes = i, n
                                                }, getFileExtension: function (e) {
                                                    var t = e && e.match(/\.([^.]+)$/);
                                                    return t ? t[1].toLowerCase() : ""
                                                }, getFileMime: function (e) {
                                                    return this.mimes[this.getFileExtension(e)] || ""
                                                }
                                            };
                                        return n.addMimeType(i), n
                                    }), n("moxie/file/FileInput", ["moxie/core/utils/Basic", "moxie/core/utils/Env", "moxie/core/utils/Mime", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/core/EventTarget", "moxie/core/I18n", "moxie/runtime/Runtime", "moxie/runtime/RuntimeClient"], function (e, t, i, n, r, o, s, a, l) {
                                        function c(o) {
                                            u && t.log("Instantiating FileInput...");
                                            var c, p, f;
                                            if (e.inArray(e.typeOf(o), ["string", "node"]) !== -1 && (o = {browse_button: o}), p = n.get(o.browse_button), !p)throw new r.DOMException(r.DOMException.NOT_FOUND_ERR);
                                            f = {
                                                accept: [{title: s.translate("All Files"), extensions: "*"}],
                                                multiple: !1,
                                                required_caps: !1,
                                                container: p.parentNode || document.body
                                            }, o = e.extend({}, f, o), "string" == typeof o.required_caps && (o.required_caps = a.parseCaps(o.required_caps)), "string" == typeof o.accept && (o.accept = i.mimes2extList(o.accept)), c = n.get(o.container), c || (c = document.body), "static" === n.getStyle(c, "position") && (c.style.position = "relative"), c = p = null, l.call(this), e.extend(this, {
                                                uid: e.guid("uid_"),
                                                ruid: null,
                                                shimid: null,
                                                files: null,
                                                init: function () {
                                                    var t = this;
                                                    t.bind("RuntimeInit", function (i, r) {
                                                        t.ruid = r.uid, t.shimid = r.shimid, t.bind("Ready", function () {
                                                            t.trigger("Refresh")
                                                        }, 999), t.bind("Refresh", function () {
                                                            var t, i, s, a, u;
                                                            s = n.get(o.browse_button), a = n.get(r.shimid), s && (t = n.getPos(s, n.get(o.container)), i = n.getSize(s), u = parseInt(n.getStyle(s, "z-index"), 10) || 0, a && e.extend(a.style, {
                                                                top: t.y + "px",
                                                                left: t.x + "px",
                                                                width: i.w + "px",
                                                                height: i.h + "px",
                                                                zIndex: u + 1
                                                            })), a = s = null
                                                        }), r.exec.call(t, "FileInput", "init", o)
                                                    }), t.connectRuntime(e.extend({}, o, {required_caps: {select_file: !0}}))
                                                },
                                                getOption: function (e) {
                                                    return o[e]
                                                },
                                                setOption: function (e, t) {
                                                    if (o.hasOwnProperty(e)) {
                                                        var n = o[e];
                                                        switch (e) {
                                                            case"accept":
                                                                "string" == typeof t && (t = i.mimes2extList(t));
                                                                break;
                                                            case"container":
                                                            case"required_caps":
                                                                throw new r.FileException(r.FileException.NO_MODIFICATION_ALLOWED_ERR)
                                                        }
                                                        o[e] = t, this.exec("FileInput", "setOption", e, t), this.trigger("OptionChanged", e, t, n)
                                                    }
                                                },
                                                disable: function (t) {
                                                    var i = this.getRuntime();
                                                    i && this.exec("FileInput", "disable", "undefined" === e.typeOf(t) || t)
                                                },
                                                refresh: function () {
                                                    this.trigger("Refresh")
                                                },
                                                destroy: function () {
                                                    var t = this.getRuntime();
                                                    t && (t.exec.call(this, "FileInput", "destroy"), this.disconnectRuntime()), "array" === e.typeOf(this.files) && e.each(this.files, function (e) {
                                                        e.destroy()
                                                    }), this.files = null, this.unbindAll()
                                                }
                                            }), this.handleEventProps(d)
                                        }

                                        var d = ["ready", "change", "cancel", "mouseenter", "mouseleave", "mousedown", "mouseup"];
                                        return c.prototype = o.instance, c
                                    }), n("moxie/file/File", ["moxie/core/utils/Basic", "moxie/core/utils/Mime", "moxie/file/Blob"], function (e, t, i) {
                                        function n(n, r) {
                                            r || (r = {}), i.apply(this, arguments), this.type || (this.type = t.getFileMime(r.name));
                                            var o;
                                            if (r.name) o = r.name.replace(/\\/g, "/"), o = o.substr(o.lastIndexOf("/") + 1); else if (this.type) {
                                                var s = this.type.split("/")[0];
                                                o = e.guid(("" !== s ? s : "file") + "_"), t.extensions[this.type] && (o += "." + t.extensions[this.type][0])
                                            }
                                            e.extend(this, {
                                                name: o || e.guid("file_"),
                                                relativePath: "",
                                                lastModifiedDate: r.lastModifiedDate || (new Date).toLocaleString()
                                            })
                                        }

                                        return n.prototype = i.prototype, n
                                    }), n("moxie/file/FileDrop", ["moxie/core/I18n", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/core/utils/Basic", "moxie/core/utils/Env", "moxie/file/File", "moxie/runtime/RuntimeClient", "moxie/core/EventTarget", "moxie/core/utils/Mime"], function (e, t, i, n, r, o, s, l, c) {
                                        function d(i) {
                                            u && r.log("Instantiating FileDrop...");
                                            var o, l = this;
                                            "string" == typeof i && (i = {drop_zone: i}), o = {
                                                accept: [{
                                                    title: e.translate("All Files"),
                                                    extensions: "*"
                                                }], required_caps: {drag_and_drop: !0}
                                            }, i = "object" === ("undefined" == typeof i ? "undefined" : a(i)) ? n.extend({}, o, i) : o, i.container = t.get(i.drop_zone) || document.body, "static" === t.getStyle(i.container, "position") && (i.container.style.position = "relative"), "string" == typeof i.accept && (i.accept = c.mimes2extList(i.accept)), s.call(l), n.extend(l, {
                                                uid: n.guid("uid_"),
                                                ruid: null,
                                                files: null,
                                                init: function () {
                                                    l.bind("RuntimeInit", function (e, t) {
                                                        l.ruid = t.uid, t.exec.call(l, "FileDrop", "init", i), l.dispatchEvent("ready")
                                                    }), l.connectRuntime(i)
                                                },
                                                destroy: function () {
                                                    var e = this.getRuntime();
                                                    e && (e.exec.call(this, "FileDrop", "destroy"), this.disconnectRuntime()), this.files = null, this.unbindAll()
                                                }
                                            }), this.handleEventProps(p)
                                        }

                                        var p = ["ready", "dragenter", "dragleave", "drop", "error"];
                                        return d.prototype = l.instance, d
                                    }), n("moxie/file/FileReader", ["moxie/core/utils/Basic", "moxie/core/utils/Encode", "moxie/core/Exceptions", "moxie/core/EventTarget", "moxie/file/Blob", "moxie/runtime/RuntimeClient"], function (e, t, i, n, r, o) {
                                        function s() {
                                            function n(e, n) {
                                                if (this.trigger("loadstart"), this.readyState === s.LOADING)return this.trigger("error", new i.DOMException(i.DOMException.INVALID_STATE_ERR)), void this.trigger("loadend");
                                                if (!(n instanceof r))return this.trigger("error", new i.DOMException(i.DOMException.NOT_FOUND_ERR)), void this.trigger("loadend");
                                                if (this.result = null, this.readyState = s.LOADING, n.isDetached()) {
                                                    var o = n.getSource();
                                                    switch (e) {
                                                        case"readAsText":
                                                        case"readAsBinaryString":
                                                            this.result = o;
                                                            break;
                                                        case"readAsDataURL":
                                                            this.result = "data:" + n.type + ";base64," + t.btoa(o)
                                                    }
                                                    this.readyState = s.DONE, this.trigger("load"), this.trigger("loadend")
                                                } else this.connectRuntime(n.ruid), this.exec("FileReader", "read", e, n)
                                            }

                                            o.call(this), e.extend(this, {
                                                uid: e.guid("uid_"),
                                                readyState: s.EMPTY,
                                                result: null,
                                                error: null,
                                                readAsBinaryString: function (e) {
                                                    n.call(this, "readAsBinaryString", e)
                                                },
                                                readAsDataURL: function (e) {
                                                    n.call(this, "readAsDataURL", e)
                                                },
                                                readAsText: function (e) {
                                                    n.call(this, "readAsText", e)
                                                },
                                                abort: function () {
                                                    this.result = null, e.inArray(this.readyState, [s.EMPTY, s.DONE]) === -1 && (this.readyState === s.LOADING && (this.readyState = s.DONE), this.exec("FileReader", "abort"), this.trigger("abort"), this.trigger("loadend"))
                                                },
                                                destroy: function () {
                                                    this.abort(), this.exec("FileReader", "destroy"), this.disconnectRuntime(), this.unbindAll()
                                                }
                                            }), this.handleEventProps(a), this.bind("Error", function (e, t) {
                                                this.readyState = s.DONE, this.error = t
                                            }, 999), this.bind("Load", function (e) {
                                                this.readyState = s.DONE
                                            }, 999)
                                        }

                                        var a = ["loadstart", "progress", "load", "abort", "error", "loadend"];
                                        return s.EMPTY = 0, s.LOADING = 1, s.DONE = 2, s.prototype = n.instance, s
                                    }), n("moxie/core/utils/Url", [], function () {
                                        var e = function e(t, i) {
                                            for (var n = ["source", "scheme", "authority", "userInfo", "user", "pass", "host", "port", "relative", "path", "directory", "file", "query", "fragment"],
                                                     r = n.length, o = {http: 80, https: 443}, s = {},
                                                     a = /^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)/,
                                                     u = a.exec(t || ""); r--;)u[r] && (s[n[r]] = u[r]);
                                            if (!s.scheme) {
                                                i && "string" != typeof i || (i = e(i || document.location.href)), s.scheme = i.scheme, s.host = i.host, s.port = i.port;
                                                var l = "";
                                                /^[^\/]/.test(s.path) && (l = i.path, l = /\/[^\/]*\.[^\/]*$/.test(l) ? l.replace(/\/[^\/]+$/, "/") : l.replace(/\/?$/, "/")), s.path = l + (s.path || "")
                                            }
                                            return s.port || (s.port = o[s.scheme] || 80), s.port = parseInt(s.port, 10), s.path || (s.path = "/"), delete s.source, s
                                        }, t = function (t) {
                                            var i = {http: 80, https: 443},
                                                n = "object" === ("undefined" == typeof t ? "undefined" : a(t)) ? t : e(t);
                                            return n.scheme + "://" + n.host + (n.port !== i[n.scheme] ? ":" + n.port : "") + n.path + (n.query ? n.query : "")
                                        }, i = function t(i) {
                                            function t(e) {
                                                return [e.scheme, e.host, e.port].join("/")
                                            }

                                            return "string" == typeof i && (i = e(i)), t(e()) === t(i)
                                        };
                                        return {parseUrl: e, resolveUrl: t, hasSameOrigin: i}
                                    }), n("moxie/runtime/RuntimeTarget", ["moxie/core/utils/Basic", "moxie/runtime/RuntimeClient", "moxie/core/EventTarget"], function (e, t, i) {
                                        function n() {
                                            this.uid = e.guid("uid_"), t.call(this), this.destroy = function () {
                                                this.disconnectRuntime(), this.unbindAll()
                                            }
                                        }

                                        return n.prototype = i.instance, n
                                    }), n("moxie/file/FileReaderSync", ["moxie/core/utils/Basic", "moxie/runtime/RuntimeClient", "moxie/core/utils/Encode"], function (e, t, i) {
                                        return function () {
                                            function n(e, t) {
                                                if (!t.isDetached()) {
                                                    var n = this.connectRuntime(t.ruid).exec.call(this, "FileReaderSync", "read", e, t);
                                                    return this.disconnectRuntime(), n
                                                }
                                                var r = t.getSource();
                                                switch (e) {
                                                    case"readAsBinaryString":
                                                        return r;
                                                    case"readAsDataURL":
                                                        return "data:" + t.type + ";base64," + i.btoa(r);
                                                    case"readAsText":
                                                        for (var o = "", s = 0,
                                                                 a = r.length; s < a; s++)o += String.fromCharCode(r[s]);
                                                        return o
                                                }
                                            }

                                            t.call(this), e.extend(this, {
                                                uid: e.guid("uid_"),
                                                readAsBinaryString: function (e) {
                                                    return n.call(this, "readAsBinaryString", e)
                                                },
                                                readAsDataURL: function (e) {
                                                    return n.call(this, "readAsDataURL", e)
                                                },
                                                readAsText: function (e) {
                                                    return n.call(this, "readAsText", e)
                                                }
                                            })
                                        }
                                    }), n("moxie/xhr/FormData", ["moxie/core/Exceptions", "moxie/core/utils/Basic", "moxie/file/Blob"], function (e, t, i) {
                                        function n() {
                                            var e, n = [];
                                            t.extend(this, {
                                                append: function (r, o) {
                                                    var s = this, a = t.typeOf(o);
                                                    o instanceof i ? e = {
                                                        name: r,
                                                        value: o
                                                    } : "array" === a ? (r += "[]", t.each(o, function (e) {
                                                        s.append(r, e)
                                                    })) : "object" === a ? t.each(o, function (e, t) {
                                                        s.append(r + "[" + t + "]", e)
                                                    }) : "null" === a || "undefined" === a || "number" === a && isNaN(o) ? s.append(r, "false") : n.push({
                                                        name: r,
                                                        value: o.toString()
                                                    })
                                                }, hasBlob: function () {
                                                    return !!this.getBlob()
                                                }, getBlob: function () {
                                                    return e && e.value || null
                                                }, getBlobName: function () {
                                                    return e && e.name || null
                                                }, each: function (i) {
                                                    t.each(n, function (e) {
                                                        i(e.value, e.name)
                                                    }), e && i(e.value, e.name)
                                                }, destroy: function () {
                                                    e = null, n = []
                                                }
                                            })
                                        }

                                        return n
                                    }), n("moxie/xhr/XMLHttpRequest", ["moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/core/EventTarget", "moxie/core/utils/Encode", "moxie/core/utils/Url", "moxie/runtime/Runtime", "moxie/runtime/RuntimeTarget", "moxie/file/Blob", "moxie/file/FileReaderSync", "moxie/xhr/FormData", "moxie/core/utils/Env", "moxie/core/utils/Mime"], function (e, t, i, n, r, o, s, a, u, l, c, d) {
                                        function p() {
                                            this.uid = e.guid("uid_")
                                        }

                                        function f() {
                                            function i(e, t) {
                                                if (A.hasOwnProperty(e))return 1 === arguments.length ? c.can("define_property") ? A[e] : I[e] : void(c.can("define_property") ? A[e] = t : I[e] = t)
                                            }

                                            function u(t) {
                                                function n() {
                                                    E && (E.destroy(), E = null), a.dispatchEvent("loadend"), a = null
                                                }

                                                function r(r) {
                                                    E.bind("LoadStart", function (e) {
                                                        i("readyState", f.LOADING), a.dispatchEvent("readystatechange"), a.dispatchEvent(e), F && a.upload.dispatchEvent(e)
                                                    }), E.bind("Progress", function (e) {
                                                        i("readyState") !== f.LOADING && (i("readyState", f.LOADING), a.dispatchEvent("readystatechange")), a.dispatchEvent(e)
                                                    }), E.bind("UploadProgress", function (e) {
                                                        F && a.upload.dispatchEvent({
                                                            type: "progress",
                                                            lengthComputable: !1,
                                                            total: e.total,
                                                            loaded: e.loaded
                                                        })
                                                    }), E.bind("Load", function (t) {
                                                        i("readyState", f.DONE), i("status", Number(r.exec.call(E, "XMLHttpRequest", "getStatus") || 0)), i("statusText", m[i("status")] || ""), i("response", r.exec.call(E, "XMLHttpRequest", "getResponse", i("responseType"))), ~e.inArray(i("responseType"), ["text", ""]) ? i("responseText", i("response")) : "document" === i("responseType") && i("responseXML", i("response")), U = r.exec.call(E, "XMLHttpRequest", "getAllResponseHeaders"), a.dispatchEvent("readystatechange"), i("status") > 0 ? (F && a.upload.dispatchEvent(t), a.dispatchEvent(t)) : (L = !0, a.dispatchEvent("error")), n()
                                                    }), E.bind("Abort", function (e) {
                                                        a.dispatchEvent(e), n()
                                                    }), E.bind("Error", function (e) {
                                                        L = !0, i("readyState", f.DONE), a.dispatchEvent("readystatechange"), M = !0, a.dispatchEvent(e), n()
                                                    }), r.exec.call(E, "XMLHttpRequest", "send", {
                                                        url: v,
                                                        method: x,
                                                        async: S,
                                                        user: y,
                                                        password: _,
                                                        headers: T,
                                                        mimeType: D,
                                                        encoding: O,
                                                        responseType: a.responseType,
                                                        withCredentials: a.withCredentials,
                                                        options: P
                                                    }, t)
                                                }

                                                var a = this;
                                                w = (new Date).getTime(), E = new s, "string" == typeof P.required_caps && (P.required_caps = o.parseCaps(P.required_caps)), P.required_caps = e.extend({}, P.required_caps, {return_response_type: a.responseType}), t instanceof l && (P.required_caps.send_multipart = !0), e.isEmptyObj(T) || (P.required_caps.send_custom_headers = !0), k || (P.required_caps.do_cors = !0), P.ruid ? r(E.connectRuntime(P)) : (E.bind("RuntimeInit", function (e, t) {
                                                    r(t)
                                                }), E.bind("RuntimeError", function (e, t) {
                                                    a.dispatchEvent("RuntimeError", t)
                                                }), E.connectRuntime(P))
                                            }

                                            function g() {
                                                i("responseText", ""), i("responseXML", null), i("response", null), i("status", 0), i("statusText", ""), w = b = null
                                            }

                                            var v, x, y, _, w, b, E, R, I = this, A = {
                                                    timeout: 0,
                                                    readyState: f.UNSENT,
                                                    withCredentials: !1,
                                                    status: 0,
                                                    statusText: "",
                                                    responseType: "",
                                                    responseXML: null,
                                                    responseText: null,
                                                    response: null
                                                }, S = !0, T = {}, O = null, D = null, C = !1, N = !1, F = !1, M = !1,
                                                L = !1, k = !1, B = null, z = null, P = {}, U = "";
                                            e.extend(this, A, {
                                                uid: e.guid("uid_"),
                                                upload: new p,
                                                open: function (o, s, a, u, l) {
                                                    var c;
                                                    if (!o || !s)throw new t.DOMException(t.DOMException.SYNTAX_ERR);
                                                    if (/[\u0100-\uffff]/.test(o) || n.utf8_encode(o) !== o)throw new t.DOMException(t.DOMException.SYNTAX_ERR);
                                                    if (~e.inArray(o.toUpperCase(), ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT", "TRACE", "TRACK"]) && (x = o.toUpperCase()), ~e.inArray(x, ["CONNECT", "TRACE", "TRACK"]))throw new t.DOMException(t.DOMException.SECURITY_ERR);
                                                    if (s = n.utf8_encode(s), c = r.parseUrl(s), k = r.hasSameOrigin(c), v = r.resolveUrl(s), (u || l) && !k)throw new t.DOMException(t.DOMException.INVALID_ACCESS_ERR);
                                                    if (y = u || c.user, _ = l || c.pass, S = a || !0, S === !1 && (i("timeout") || i("withCredentials") || "" !== i("responseType")))throw new t.DOMException(t.DOMException.INVALID_ACCESS_ERR);
                                                    C = !S, N = !1, T = {}, g.call(this), i("readyState", f.OPENED), this.dispatchEvent("readystatechange")
                                                },
                                                setRequestHeader: function (r, o) {
                                                    var s = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "content-transfer-encoding", "date", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "user-agent", "via"];
                                                    if (i("readyState") !== f.OPENED || N)throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);
                                                    if (/[\u0100-\uffff]/.test(r) || n.utf8_encode(r) !== r)throw new t.DOMException(t.DOMException.SYNTAX_ERR);
                                                    return r = e.trim(r).toLowerCase(), !~e.inArray(r, s) && !/^(proxy\-|sec\-)/.test(r) && (T[r] ? T[r] += ", " + o : T[r] = o, !0)
                                                },
                                                hasRequestHeader: function (e) {
                                                    return e && T[e.toLowerCase()] || !1
                                                },
                                                getAllResponseHeaders: function () {
                                                    return U || ""
                                                },
                                                getResponseHeader: function (t) {
                                                    return t = t.toLowerCase(), L || ~e.inArray(t, ["set-cookie", "set-cookie2"]) ? null : U && "" !== U && (R || (R = {}, e.each(U.split(/\r\n/), function (t) {
                                                        var i = t.split(/:\s+/);
                                                        2 === i.length && (i[0] = e.trim(i[0]), R[i[0].toLowerCase()] = {
                                                            header: i[0],
                                                            value: e.trim(i[1])
                                                        })
                                                    })), R.hasOwnProperty(t)) ? R[t].header + ": " + R[t].value : null
                                                },
                                                overrideMimeType: function (n) {
                                                    var r, o;
                                                    if (~e.inArray(i("readyState"), [f.LOADING, f.DONE]))throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);
                                                    if (n = e.trim(n.toLowerCase()), /;/.test(n) && (r = n.match(/^([^;]+)(?:;\scharset\=)?(.*)$/)) && (n = r[1], r[2] && (o = r[2])), !d.mimes[n])throw new t.DOMException(t.DOMException.SYNTAX_ERR);
                                                    B = n, z = o
                                                },
                                                send: function (i, r) {
                                                    if (P = "string" === e.typeOf(r) ? {ruid: r} : r ? r : {}, this.readyState !== f.OPENED || N)throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);
                                                    if (i instanceof a) P.ruid = i.ruid, D = i.type || "application/octet-stream"; else if (i instanceof l) {
                                                        if (i.hasBlob()) {
                                                            var o = i.getBlob();
                                                            P.ruid = o.ruid, D = o.type || "application/octet-stream"
                                                        }
                                                    } else"string" == typeof i && (O = "UTF-8", D = "text/plain;charset=UTF-8", i = n.utf8_encode(i));
                                                    this.withCredentials || (this.withCredentials = P.required_caps && P.required_caps.send_browser_cookies && !k), F = !C && this.upload.hasEventListener(), L = !1, M = !i, C || (N = !0), u.call(this, i)
                                                },
                                                abort: function () {
                                                    if (L = !0, C = !1, ~e.inArray(i("readyState"), [f.UNSENT, f.OPENED, f.DONE])) i("readyState", f.UNSENT); else {
                                                        if (i("readyState", f.DONE), N = !1, !E)throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);
                                                        E.getRuntime().exec.call(E, "XMLHttpRequest", "abort", M), M = !0
                                                    }
                                                },
                                                destroy: function () {
                                                    E && ("function" === e.typeOf(E.destroy) && E.destroy(), E = null), this.unbindAll(), this.upload && (this.upload.unbindAll(), this.upload = null)
                                                }
                                            }), this.handleEventProps(h.concat(["readystatechange"])), this.upload.handleEventProps(h)
                                        }

                                        var m = {
                                            100: "Continue",
                                            101: "Switching Protocols",
                                            102: "Processing",
                                            200: "OK",
                                            201: "Created",
                                            202: "Accepted",
                                            203: "Non-Authoritative Information",
                                            204: "No Content",
                                            205: "Reset Content",
                                            206: "Partial Content",
                                            207: "Multi-Status",
                                            226: "IM Used",
                                            300: "Multiple Choices",
                                            301: "Moved Permanently",
                                            302: "Found",
                                            303: "See Other",
                                            304: "Not Modified",
                                            305: "Use Proxy",
                                            306: "Reserved",
                                            307: "Temporary Redirect",
                                            400: "Bad Request",
                                            401: "Unauthorized",
                                            402: "Payment Required",
                                            403: "Forbidden",
                                            404: "Not Found",
                                            405: "Method Not Allowed",
                                            406: "Not Acceptable",
                                            407: "Proxy Authentication Required",
                                            408: "Request Timeout",
                                            409: "Conflict",
                                            410: "Gone",
                                            411: "Length Required",
                                            412: "Precondition Failed",
                                            413: "Request Entity Too Large",
                                            414: "Request-URI Too Long",
                                            415: "Unsupported Media Type",
                                            416: "Requested Range Not Satisfiable",
                                            417: "Expectation Failed",
                                            422: "Unprocessable Entity",
                                            423: "Locked",
                                            424: "Failed Dependency",
                                            426: "Upgrade Required",
                                            500: "Internal Server Error",
                                            501: "Not Implemented",
                                            502: "Bad Gateway",
                                            503: "Service Unavailable",
                                            504: "Gateway Timeout",
                                            505: "HTTP Version Not Supported",
                                            506: "Variant Also Negotiates",
                                            507: "Insufficient Storage",
                                            510: "Not Extended"
                                        };
                                        p.prototype = i.instance;
                                        var h = ["loadstart", "progress", "abort", "error", "load", "timeout", "loadend"];
                                        return f.UNSENT = 0, f.OPENED = 1, f.HEADERS_RECEIVED = 2, f.LOADING = 3, f.DONE = 4, f.prototype = i.instance, f
                                    }), n("moxie/runtime/Transporter", ["moxie/core/utils/Basic", "moxie/core/utils/Encode", "moxie/runtime/RuntimeClient", "moxie/core/EventTarget"], function (e, t, i, n) {
                                        function r() {
                                            function n() {
                                                c = d = 0, l = this.result = null
                                            }

                                            function o(t, i) {
                                                var n = this;
                                                u = i, n.bind("TransportingProgress", function (t) {
                                                    d = t.loaded, d < c && e.inArray(n.state, [r.IDLE, r.DONE]) === -1 && s.call(n)
                                                }, 999), n.bind("TransportingComplete", function () {
                                                    d = c, n.state = r.DONE, l = null, n.result = u.exec.call(n, "Transporter", "getAsBlob", t || "")
                                                }, 999), n.state = r.BUSY, n.trigger("TransportingStarted"), s.call(n)
                                            }

                                            function s() {
                                                var e, i = this, n = c - d;
                                                p > n && (p = n), e = t.btoa(l.substr(d, p)), u.exec.call(i, "Transporter", "receive", e, c)
                                            }

                                            var a, u, l, c, d, p;
                                            i.call(this), e.extend(this, {
                                                uid: e.guid("uid_"),
                                                state: r.IDLE,
                                                result: null,
                                                transport: function (t, i, r) {
                                                    var s = this;
                                                    if (r = e.extend({chunk_size: 204798}, r), (a = r.chunk_size % 3) && (r.chunk_size += 3 - a), p = r.chunk_size, n.call(this), l = t, c = t.length, "string" === e.typeOf(r) || r.ruid) o.call(s, i, this.connectRuntime(r)); else {
                                                        var u = function e(t, n) {
                                                            s.unbind("RuntimeInit", e), o.call(s, i, n)
                                                        };
                                                        this.bind("RuntimeInit", u), this.connectRuntime(r)
                                                    }
                                                },
                                                abort: function () {
                                                    var e = this;
                                                    e.state = r.IDLE, u && (u.exec.call(e, "Transporter", "clear"), e.trigger("TransportingAborted")), n.call(e)
                                                },
                                                destroy: function () {
                                                    this.unbindAll(), u = null, this.disconnectRuntime(), n.call(this)
                                                }
                                            })
                                        }

                                        return r.IDLE = 0, r.BUSY = 1, r.DONE = 2, r.prototype = n.instance, r
                                    }), n("moxie/image/Image", ["moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/file/FileReaderSync", "moxie/xhr/XMLHttpRequest", "moxie/runtime/Runtime", "moxie/runtime/RuntimeClient", "moxie/runtime/Transporter", "moxie/core/utils/Env", "moxie/core/EventTarget", "moxie/file/Blob", "moxie/file/File", "moxie/core/utils/Encode"], function (e, t, i, n, r, o, s, u, l, c, d, p, f) {
                                        function m() {
                                            function n(e) {
                                                try {
                                                    return e || (e = this.exec("Image", "getInfo")), this.size = e.size, this.width = e.width, this.height = e.height, this.type = e.type, this.meta = e.meta, "" === this.name && (this.name = e.name), !0
                                                } catch (e) {
                                                    return this.trigger("error", e.code), !1
                                                }
                                            }

                                            function c(t) {
                                                var n = e.typeOf(t);
                                                try {
                                                    if (t instanceof m) {
                                                        if (!t.size)throw new i.DOMException(i.DOMException.INVALID_STATE_ERR);
                                                        g.apply(this, arguments)
                                                    } else if (t instanceof d) {
                                                        if (!~e.inArray(t.type, ["image/jpeg", "image/png"]))throw new i.ImageError(i.ImageError.WRONG_FORMAT);
                                                        v.apply(this, arguments)
                                                    } else if (e.inArray(n, ["blob", "file"]) !== -1) c.call(this, new p(null, t), arguments[1]); else if ("string" === n) "data:" === t.substr(0, 5) ? c.call(this, new d(null, {data: t}), arguments[1]) : x.apply(this, arguments); else {
                                                        if ("node" !== n || "img" !== t.nodeName.toLowerCase())throw new i.DOMException(i.DOMException.TYPE_MISMATCH_ERR);
                                                        c.call(this, t.src, arguments[1])
                                                    }
                                                } catch (e) {
                                                    this.trigger("error", e.code)
                                                }
                                            }

                                            function g(t, i) {
                                                var n = this.connectRuntime(t.ruid);
                                                this.ruid = n.uid, n.exec.call(this, "Image", "loadFromImage", t, "undefined" === e.typeOf(i) || i)
                                            }

                                            function v(t, i) {
                                                function n(e) {
                                                    r.ruid = e.uid, e.exec.call(r, "Image", "loadFromBlob", t)
                                                }

                                                var r = this;
                                                r.name = t.name || "", t.isDetached() ? (this.bind("RuntimeInit", function (e, t) {
                                                    n(t)
                                                }), i && "string" == typeof i.required_caps && (i.required_caps = o.parseCaps(i.required_caps)), this.connectRuntime(e.extend({
                                                    required_caps: {
                                                        access_image_binary: !0,
                                                        resize_image: !0
                                                    }
                                                }, i))) : n(this.connectRuntime(t.ruid))
                                            }

                                            function x(e, t) {
                                                var i, n = this;
                                                i = new r, i.open("get", e), i.responseType = "blob", i.onprogress = function (e) {
                                                    n.trigger(e)
                                                }, i.onload = function () {
                                                    v.call(n, i.response, !0)
                                                }, i.onerror = function (e) {
                                                    n.trigger(e)
                                                }, i.onloadend = function () {
                                                    i.destroy()
                                                }, i.bind("RuntimeError", function (e, t) {
                                                    n.trigger("RuntimeError", t)
                                                }), i.send(null, t)
                                            }

                                            s.call(this), e.extend(this, {
                                                uid: e.guid("uid_"),
                                                ruid: null,
                                                name: "",
                                                size: 0,
                                                width: 0,
                                                height: 0,
                                                type: "",
                                                meta: {},
                                                clone: function () {
                                                    this.load.apply(this, arguments)
                                                },
                                                load: function () {
                                                    c.apply(this, arguments)
                                                },
                                                resize: function (t) {
                                                    var n, r, o = this,
                                                        s = {x: 0, y: 0, width: o.width, height: o.height},
                                                        a = e.extendIf({
                                                            width: o.width,
                                                            height: o.height,
                                                            type: o.type || "image/jpeg",
                                                            quality: 90,
                                                            crop: !1,
                                                            fit: !0,
                                                            preserveHeaders: !0,
                                                            resample: "default",
                                                            multipass: !0
                                                        }, t);
                                                    try {
                                                        if (!o.size)throw new i.DOMException(i.DOMException.INVALID_STATE_ERR);
                                                        if (o.width > m.MAX_RESIZE_WIDTH || o.height > m.MAX_RESIZE_HEIGHT)throw new i.ImageError(i.ImageError.MAX_RESOLUTION_ERR);
                                                        if (n = o.meta && o.meta.tiff && o.meta.tiff.Orientation || 1, e.inArray(n, [5, 6, 7, 8]) !== -1) {
                                                            var u = a.width;
                                                            a.width = a.height, a.height = u
                                                        }
                                                        if (a.crop) {
                                                            switch (r = Math.max(a.width / o.width, a.height / o.height), t.fit ? (s.width = Math.min(Math.ceil(a.width / r), o.width), s.height = Math.min(Math.ceil(a.height / r), o.height), r = a.width / s.width) : (s.width = Math.min(a.width, o.width), s.height = Math.min(a.height, o.height), r = 1), "boolean" == typeof a.crop && (a.crop = "cc"), a.crop.toLowerCase().replace(/_/, "-")) {
                                                                case"rb":
                                                                case"right-bottom":
                                                                    s.x = o.width - s.width, s.y = o.height - s.height;
                                                                    break;
                                                                case"cb":
                                                                case"center-bottom":
                                                                    s.x = Math.floor((o.width - s.width) / 2), s.y = o.height - s.height;
                                                                    break;
                                                                case"lb":
                                                                case"left-bottom":
                                                                    s.x = 0, s.y = o.height - s.height;
                                                                    break;
                                                                case"lt":
                                                                case"left-top":
                                                                    s.x = 0, s.y = 0;
                                                                    break;
                                                                case"ct":
                                                                case"center-top":
                                                                    s.x = Math.floor((o.width - s.width) / 2), s.y = 0;
                                                                    break;
                                                                case"rt":
                                                                case"right-top":
                                                                    s.x = o.width - s.width, s.y = 0;
                                                                    break;
                                                                case"rc":
                                                                case"right-center":
                                                                case"right-middle":
                                                                    s.x = o.width - s.width, s.y = Math.floor((o.height - s.height) / 2);
                                                                    break;
                                                                case"lc":
                                                                case"left-center":
                                                                case"left-middle":
                                                                    s.x = 0, s.y = Math.floor((o.height - s.height) / 2);
                                                                    break;
                                                                case"cc":
                                                                case"center-center":
                                                                case"center-middle":
                                                                default:
                                                                    s.x = Math.floor((o.width - s.width) / 2), s.y = Math.floor((o.height - s.height) / 2)
                                                            }
                                                            s.x = Math.max(s.x, 0), s.y = Math.max(s.y, 0)
                                                        } else r = Math.min(a.width / o.width, a.height / o.height);
                                                        this.exec("Image", "resize", s, r, a)
                                                    } catch (e) {
                                                        o.trigger("error", e.code)
                                                    }
                                                },
                                                downsize: function (t) {
                                                    var i, n = {
                                                        width: this.width,
                                                        height: this.height,
                                                        type: this.type || "image/jpeg",
                                                        quality: 90,
                                                        crop: !1,
                                                        preserveHeaders: !0,
                                                        resample: "default"
                                                    };
                                                    i = "object" === ("undefined" == typeof t ? "undefined" : a(t)) ? e.extend(n, t) : e.extend(n, {
                                                        width: arguments[0],
                                                        height: arguments[1],
                                                        crop: arguments[2],
                                                        preserveHeaders: arguments[3]
                                                    }), this.resize(i)
                                                },
                                                crop: function (e, t, i) {
                                                    this.downsize(e, t, !0, i)
                                                },
                                                getAsCanvas: function () {
                                                    if (!l.can("create_canvas"))throw new i.RuntimeError(i.RuntimeError.NOT_SUPPORTED_ERR);
                                                    var e = this.connectRuntime(this.ruid);
                                                    return e.exec.call(this, "Image", "getAsCanvas")
                                                },
                                                getAsBlob: function (e, t) {
                                                    if (!this.size)throw new i.DOMException(i.DOMException.INVALID_STATE_ERR);
                                                    return this.exec("Image", "getAsBlob", e || "image/jpeg", t || 90)
                                                },
                                                getAsDataURL: function (e, t) {
                                                    if (!this.size)throw new i.DOMException(i.DOMException.INVALID_STATE_ERR);
                                                    return this.exec("Image", "getAsDataURL", e || "image/jpeg", t || 90)
                                                },
                                                getAsBinaryString: function (e, t) {
                                                    var i = this.getAsDataURL(e, t);
                                                    return f.atob(i.substring(i.indexOf("base64,") + 7))
                                                },
                                                embed: function (n, r) {
                                                    function o(t, r) {
                                                        var o = this;
                                                        if (l.can("create_canvas")) {
                                                            var c = o.getAsCanvas();
                                                            if (c)return n.appendChild(c), c = null, o.destroy(), void a.trigger("embedded")
                                                        }
                                                        var d = o.getAsDataURL(t, r);
                                                        if (!d)throw new i.ImageError(i.ImageError.WRONG_FORMAT);
                                                        if (l.can("use_data_uri_of", d.length)) n.innerHTML = '<img src="' + d + '" width="' + o.width + '" height="' + o.height + '" />', o.destroy(), a.trigger("embedded"); else {
                                                            var p = new u;
                                                            p.bind("TransportingComplete", function () {
                                                                s = a.connectRuntime(this.result.ruid), a.bind("Embedded", function () {
                                                                    e.extend(s.getShimContainer().style, {
                                                                        top: "0px",
                                                                        left: "0px",
                                                                        width: o.width + "px",
                                                                        height: o.height + "px"
                                                                    }), s = null
                                                                }, 999), s.exec.call(a, "ImageView", "display", this.result.uid, width, height),
                                                                    o.destroy()
                                                            }), p.transport(f.atob(d.substring(d.indexOf("base64,") + 7)), t, {
                                                                required_caps: {display_media: !0},
                                                                runtime_order: "flash,silverlight",
                                                                container: n
                                                            })
                                                        }
                                                    }

                                                    var s, a = this, c = e.extend({
                                                        width: this.width,
                                                        height: this.height,
                                                        type: this.type || "image/jpeg",
                                                        quality: 90
                                                    }, r);
                                                    try {
                                                        if (!(n = t.get(n)))throw new i.DOMException(i.DOMException.INVALID_NODE_TYPE_ERR);
                                                        if (!this.size)throw new i.DOMException(i.DOMException.INVALID_STATE_ERR);
                                                        this.width > m.MAX_RESIZE_WIDTH || this.height > m.MAX_RESIZE_HEIGHT;
                                                        var d = new m;
                                                        return d.bind("Resize", function () {
                                                            o.call(this, c.type, c.quality)
                                                        }), d.bind("Load", function () {
                                                            d.downsize(c)
                                                        }), this.meta.thumb && this.meta.thumb.width >= c.width && this.meta.thumb.height >= c.height ? d.load(this.meta.thumb.data) : d.clone(this, !1), d
                                                    } catch (e) {
                                                        this.trigger("error", e.code)
                                                    }
                                                },
                                                destroy: function () {
                                                    this.ruid && (this.getRuntime().exec.call(this, "Image", "destroy"), this.disconnectRuntime()), this.unbindAll()
                                                }
                                            }), this.handleEventProps(h), this.bind("Load Resize", function () {
                                                return n.call(this)
                                            }, 999)
                                        }

                                        var h = ["progress", "load", "error", "resize", "embedded"];
                                        return m.MAX_RESIZE_WIDTH = 8192, m.MAX_RESIZE_HEIGHT = 8192, m.prototype = c.instance, m
                                    }), n("moxie/runtime/html5/Runtime", ["moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/runtime/Runtime", "moxie/core/utils/Env"], function (e, t, i, n) {
                                        function o(t) {
                                            var o = this, u = i.capTest, l = i.capTrue, c = e.extend({
                                                access_binary: u(window.FileReader || window.File && window.File.getAsDataURL),
                                                access_image_binary: function () {
                                                    return o.can("access_binary") && !!a.Image
                                                },
                                                display_media: u((n.can("create_canvas") || n.can("use_data_uri_over32kb")) && r("moxie/image/Image")),
                                                do_cors: u(window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest),
                                                drag_and_drop: u(function () {
                                                    var e = document.createElement("div");
                                                    return ("draggable" in e || "ondragstart" in e && "ondrop" in e) && ("IE" !== n.browser || n.verComp(n.version, 9, ">"))
                                                }()),
                                                filter_by_extension: u(function () {
                                                    return !("Chrome" === n.browser && n.verComp(n.version, 28, "<") || "IE" === n.browser && n.verComp(n.version, 10, "<") || "Safari" === n.browser && n.verComp(n.version, 7, "<") || "Firefox" === n.browser && n.verComp(n.version, 37, "<"))
                                                }()),
                                                return_response_headers: l,
                                                return_response_type: function (e) {
                                                    return !("json" !== e || !window.JSON) || n.can("return_response_type", e)
                                                },
                                                return_status_code: l,
                                                report_upload_progress: u(window.XMLHttpRequest && (new XMLHttpRequest).upload),
                                                resize_image: function () {
                                                    return o.can("access_binary") && n.can("create_canvas")
                                                },
                                                select_file: function () {
                                                    return n.can("use_fileinput") && window.File
                                                },
                                                select_folder: function () {
                                                    return o.can("select_file") && ("Chrome" === n.browser && n.verComp(n.version, 21, ">=") || "Firefox" === n.browser && n.verComp(n.version, 42, ">="))
                                                },
                                                select_multiple: function () {
                                                    return o.can("select_file") && !("Safari" === n.browser && "Windows" === n.os) && !("iOS" === n.os && n.verComp(n.osVersion, "7.0.0", ">") && n.verComp(n.osVersion, "8.0.0", "<"))
                                                },
                                                send_binary_string: u(window.XMLHttpRequest && ((new XMLHttpRequest).sendAsBinary || window.Uint8Array && window.ArrayBuffer)),
                                                send_custom_headers: u(window.XMLHttpRequest),
                                                send_multipart: function () {
                                                    return !!(window.XMLHttpRequest && (new XMLHttpRequest).upload && window.FormData) || o.can("send_binary_string")
                                                },
                                                slice_blob: u(window.File && (File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice)),
                                                stream_upload: function () {
                                                    return o.can("slice_blob") && o.can("send_multipart")
                                                },
                                                summon_file_dialog: function () {
                                                    return o.can("select_file") && ("Firefox" === n.browser && n.verComp(n.version, 4, ">=") || "Opera" === n.browser && n.verComp(n.version, 12, ">=") || "IE" === n.browser && n.verComp(n.version, 10, ">=") || !!~e.inArray(n.browser, ["Chrome", "Safari", "Edge"]))
                                                },
                                                upload_filesize: l,
                                                use_http_method: l
                                            }, arguments[2]);
                                            i.call(this, t, arguments[1] || s, c), e.extend(this, {
                                                init: function () {
                                                    this.trigger("Init")
                                                }, destroy: function (e) {
                                                    return function () {
                                                        e.call(o), e = o = null
                                                    }
                                                }(this.destroy)
                                            }), e.extend(this.getShim(), a)
                                        }

                                        var s = "html5", a = {};
                                        return i.addConstructor(s, o), a
                                    }), n("moxie/runtime/html5/file/Blob", ["moxie/runtime/html5/Runtime", "moxie/file/Blob"], function (e, t) {
                                        function i() {
                                            function e(e, t, i) {
                                                var n;
                                                if (!window.File.prototype.slice)return (n = window.File.prototype.webkitSlice || window.File.prototype.mozSlice) ? n.call(e, t, i) : null;
                                                try {
                                                    return e.slice(), e.slice(t, i)
                                                } catch (n) {
                                                    return e.slice(t, i - t)
                                                }
                                            }

                                            this.slice = function () {
                                                return new t(this.getRuntime().uid, e.apply(this, arguments))
                                            }
                                        }

                                        return e.Blob = i
                                    }), n("moxie/core/utils/Events", ["moxie/core/utils/Basic"], function (e) {
                                        function t() {
                                            this.returnValue = !1
                                        }

                                        function i() {
                                            this.cancelBubble = !0
                                        }

                                        var n = {}, r = "moxie_" + e.guid(), o = function (o, s, a, u) {
                                            var l, c;
                                            s = s.toLowerCase(), o.addEventListener ? (l = a, o.addEventListener(s, l, !1)) : o.attachEvent && (l = function () {
                                                    var e = window.event;
                                                    e.target || (e.target = e.srcElement), e.preventDefault = t, e.stopPropagation = i, a(e)
                                                }, o.attachEvent("on" + s, l)), o[r] || (o[r] = e.guid()), n.hasOwnProperty(o[r]) || (n[o[r]] = {}), c = n[o[r]], c.hasOwnProperty(s) || (c[s] = []), c[s].push({
                                                func: l,
                                                orig: a,
                                                key: u
                                            })
                                        }, s = function t(i, o, s) {
                                            var t, a;
                                            if (o = o.toLowerCase(), i[r] && n[i[r]] && n[i[r]][o]) {
                                                t = n[i[r]][o];
                                                for (var u = t.length - 1; u >= 0 && (t[u].orig !== s && t[u].key !== s || (i.removeEventListener ? i.removeEventListener(o, t[u].func, !1) : i.detachEvent && i.detachEvent("on" + o, t[u].func), t[u].orig = null, t[u].func = null, t.splice(u, 1), s === a)); u--);
                                                if (t.length || delete n[i[r]][o], e.isEmptyObj(n[i[r]])) {
                                                    delete n[i[r]];
                                                    try {
                                                        delete i[r]
                                                    } catch (e) {
                                                        i[r] = a
                                                    }
                                                }
                                            }
                                        }, a = function (t, i) {
                                            t && t[r] && e.each(n[t[r]], function (e, n) {
                                                s(t, n, i)
                                            })
                                        };
                                        return {addEvent: o, removeEvent: s, removeAllEvents: a}
                                    }), n("moxie/runtime/html5/file/FileInput", ["moxie/runtime/html5/Runtime", "moxie/file/File", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/utils/Events", "moxie/core/utils/Mime", "moxie/core/utils/Env"], function (e, t, i, n, r, o, s) {
                                        function a() {
                                            var e, a;
                                            i.extend(this, {
                                                init: function (u) {
                                                    var l, c, d, p, f, m, h = this, g = h.getRuntime();
                                                    e = u, d = e.accept.mimes || o.extList2mimes(e.accept, g.can("filter_by_extension")), c = g.getShimContainer(), c.innerHTML = '<input id="' + g.uid + '" type="file" style="font-size:999px;opacity:0;"' + (e.multiple && g.can("select_multiple") ? "multiple" : "") + (e.directory && g.can("select_folder") ? "webkitdirectory directory" : "") + (d ? ' accept="' + d.join(",") + '"' : "") + " />", l = n.get(g.uid), i.extend(l.style, {
                                                        position: "absolute",
                                                        top: 0,
                                                        left: 0,
                                                        width: "100%",
                                                        height: "100%"
                                                    }), p = n.get(e.browse_button), a = n.getStyle(p, "z-index") || "auto", g.can("summon_file_dialog") && ("static" === n.getStyle(p, "position") && (p.style.position = "relative"), r.addEvent(p, "click", function (e) {
                                                        var t = n.get(g.uid);
                                                        t && !t.disabled && t.click(), e.preventDefault()
                                                    }, h.uid), h.bind("Refresh", function () {
                                                        f = parseInt(a, 10) || 1, n.get(e.browse_button).style.zIndex = f, this.getRuntime().getShimContainer().style.zIndex = f - 1
                                                    })), m = g.can("summon_file_dialog") ? p : c, r.addEvent(m, "mouseover", function () {
                                                        h.trigger("mouseenter")
                                                    }, h.uid), r.addEvent(m, "mouseout", function () {
                                                        h.trigger("mouseleave")
                                                    }, h.uid), r.addEvent(m, "mousedown", function () {
                                                        h.trigger("mousedown")
                                                    }, h.uid), r.addEvent(n.get(e.container), "mouseup", function () {
                                                        h.trigger("mouseup")
                                                    }, h.uid), l.onchange = function n(r) {
                                                        if (h.files = [], i.each(this.files, function (i) {
                                                                var n = "";
                                                                return !(!e.directory || "." != i.name) || (i.webkitRelativePath && (n = "/" + i.webkitRelativePath.replace(/^\//, "")), i = new t(g.uid, i), i.relativePath = n, void h.files.push(i))
                                                            }), "IE" !== s.browser && "IEMobile" !== s.browser) this.value = ""; else {
                                                            var o = this.cloneNode(!0);
                                                            this.parentNode.replaceChild(o, this), o.onchange = n
                                                        }
                                                        h.files.length && h.trigger("change")
                                                    }, h.trigger({type: "ready", async: !0}), c = null
                                                }, setOption: function (e, t) {
                                                    var i = this.getRuntime(), r = n.get(i.uid);
                                                    switch (e) {
                                                        case"accept":
                                                            if (t) {
                                                                var s = t.mimes || o.extList2mimes(t, i.can("filter_by_extension"));
                                                                r.setAttribute("accept", s.join(","))
                                                            } else r.removeAttribute("accept");
                                                            break;
                                                        case"directory":
                                                            t && i.can("select_folder") ? (r.setAttribute("directory", ""), r.setAttribute("webkitdirectory", "")) : (r.removeAttribute("directory"), r.removeAttribute("webkitdirectory"));
                                                            break;
                                                        case"multiple":
                                                            t && i.can("select_multiple") ? r.setAttribute("multiple", "") : r.removeAttribute("multiple")
                                                    }
                                                }, disable: function (e) {
                                                    var t, i = this.getRuntime();
                                                    (t = n.get(i.uid)) && (t.disabled = !!e)
                                                }, destroy: function () {
                                                    var t = this.getRuntime(), i = t.getShim(),
                                                        o = t.getShimContainer(), s = e && n.get(e.container),
                                                        u = e && n.get(e.browse_button);
                                                    s && r.removeAllEvents(s, this.uid), u && (r.removeAllEvents(u, this.uid), u.style.zIndex = a), o && (r.removeAllEvents(o, this.uid), o.innerHTML = ""), i.removeInstance(this.uid), e = o = s = u = i = null
                                                }
                                            })
                                        }

                                        return e.FileInput = a
                                    }), n("moxie/runtime/html5/file/FileDrop", ["moxie/runtime/html5/Runtime", "moxie/file/File", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/utils/Events", "moxie/core/utils/Mime"], function (e, t, i, n, r, o) {
                                        function s() {
                                            function e(e) {
                                                if (!e.dataTransfer || !e.dataTransfer.types)return !1;
                                                var t = i.toArray(e.dataTransfer.types || []);
                                                return i.inArray("Files", t) !== -1 || i.inArray("public.file-url", t) !== -1 || i.inArray("application/x-moz-file", t) !== -1
                                            }

                                            function s(e, i) {
                                                if (u(e)) {
                                                    var n = new t(m, e);
                                                    n.relativePath = i || "", h.push(n)
                                                }
                                            }

                                            function a(e) {
                                                for (var t = [],
                                                         n = 0; n < e.length; n++)[].push.apply(t, e[n].extensions.split(/\s*,\s*/));
                                                return i.inArray("*", t) === -1 ? t : []
                                            }

                                            function u(e) {
                                                if (!g.length)return !0;
                                                var t = o.getFileExtension(e.name);
                                                return !t || i.inArray(t, g) !== -1
                                            }

                                            function l(e, t) {
                                                var n = [];
                                                i.each(e, function (e) {
                                                    var t = e.webkitGetAsEntry();
                                                    t && (t.isFile ? s(e.getAsFile(), t.fullPath) : n.push(t))
                                                }), n.length ? c(n, t) : t()
                                            }

                                            function c(e, t) {
                                                var n = [];
                                                i.each(e, function (e) {
                                                    n.push(function (t) {
                                                        d(e, t)
                                                    })
                                                }), i.inSeries(n, function () {
                                                    t()
                                                })
                                            }

                                            function d(e, t) {
                                                e.isFile ? e.file(function (i) {
                                                    s(i, e.fullPath), t()
                                                }, function () {
                                                    t()
                                                }) : e.isDirectory ? p(e, t) : t()
                                            }

                                            function p(e, t) {
                                                function i(e) {
                                                    r.readEntries(function (t) {
                                                        t.length ? ([].push.apply(n, t), i(e)) : e()
                                                    }, e)
                                                }

                                                var n = [], r = e.createReader();
                                                i(function () {
                                                    c(n, t)
                                                })
                                            }

                                            var f, m, h = [], g = [];
                                            i.extend(this, {
                                                init: function (t) {
                                                    var n, o = this;
                                                    f = t, m = o.ruid, g = a(f.accept), n = f.container, r.addEvent(n, "dragover", function (t) {
                                                        e(t) && (t.preventDefault(), t.dataTransfer.dropEffect = "copy")
                                                    }, o.uid), r.addEvent(n, "drop", function (t) {
                                                        e(t) && (t.preventDefault(), h = [], t.dataTransfer.items && t.dataTransfer.items[0].webkitGetAsEntry ? l(t.dataTransfer.items, function () {
                                                            o.files = h, o.trigger("drop")
                                                        }) : (i.each(t.dataTransfer.files, function (e) {
                                                            s(e)
                                                        }), o.files = h, o.trigger("drop")))
                                                    }, o.uid), r.addEvent(n, "dragenter", function (e) {
                                                        o.trigger("dragenter")
                                                    }, o.uid), r.addEvent(n, "dragleave", function (e) {
                                                        o.trigger("dragleave")
                                                    }, o.uid)
                                                }, destroy: function () {
                                                    r.removeAllEvents(f && n.get(f.container), this.uid), m = h = g = f = null
                                                }
                                            })
                                        }

                                        return e.FileDrop = s
                                    }), n("moxie/runtime/html5/file/FileReader", ["moxie/runtime/html5/Runtime", "moxie/core/utils/Encode", "moxie/core/utils/Basic"], function (e, t, i) {
                                        function n() {
                                            function e(e) {
                                                return t.atob(e.substring(e.indexOf("base64,") + 7))
                                            }

                                            var n, r = !1;
                                            i.extend(this, {
                                                read: function (t, o) {
                                                    var s = this;
                                                    s.result = "", n = new window.FileReader, n.addEventListener("progress", function (e) {
                                                        s.trigger(e)
                                                    }), n.addEventListener("load", function (t) {
                                                        s.result = r ? e(n.result) : n.result, s.trigger(t)
                                                    }), n.addEventListener("error", function (e) {
                                                        s.trigger(e, n.error)
                                                    }), n.addEventListener("loadend", function (e) {
                                                        n = null, s.trigger(e)
                                                    }), "function" === i.typeOf(n[t]) ? (r = !1, n[t](o.getSource())) : "readAsBinaryString" === t && (r = !0, n.readAsDataURL(o.getSource()))
                                                }, abort: function () {
                                                    n && n.abort()
                                                }, destroy: function () {
                                                    n = null
                                                }
                                            })
                                        }

                                        return e.FileReader = n
                                    }), n("moxie/runtime/html5/xhr/XMLHttpRequest", ["moxie/runtime/html5/Runtime", "moxie/core/utils/Basic", "moxie/core/utils/Mime", "moxie/core/utils/Url", "moxie/file/File", "moxie/file/Blob", "moxie/xhr/FormData", "moxie/core/Exceptions", "moxie/core/utils/Env"], function (e, t, i, n, r, o, s, a, u) {
                                        function l() {
                                            function e(e, t) {
                                                var i, n, r = this;
                                                i = t.getBlob().getSource(), n = new window.FileReader, n.onload = function () {
                                                    t.append(t.getBlobName(), new o(null, {
                                                        type: i.type,
                                                        data: n.result
                                                    })), m.send.call(r, e, t)
                                                }, n.readAsBinaryString(i)
                                            }

                                            function l() {
                                                return !window.XMLHttpRequest || "IE" === u.browser && u.verComp(u.version, 8, "<") ? function () {
                                                    for (var e = ["Msxml2.XMLHTTP.6.0", "Microsoft.XMLHTTP"],
                                                             t = 0; t < e.length; t++)try {
                                                        return new ActiveXObject(e[t])
                                                    } catch (e) {
                                                    }
                                                }() : new window.XMLHttpRequest
                                            }

                                            function c(e) {
                                                var t = e.responseXML, i = e.responseText;
                                                return "IE" === u.browser && i && t && !t.documentElement && /[^\/]+\/[^\+]+\+xml/.test(e.getResponseHeader("Content-Type")) && (t = new window.ActiveXObject("Microsoft.XMLDOM"), t.async = !1, t.validateOnParse = !1, t.loadXML(i)), t && ("IE" === u.browser && 0 !== t.parseError || !t.documentElement || "parsererror" === t.documentElement.tagName) ? null : t
                                            }

                                            function d(e) {
                                                var t = "----moxieboundary" + (new Date).getTime(), i = "--",
                                                    n = "\r\n", r = "", s = this.getRuntime();
                                                if (!s.can("send_binary_string"))throw new a.RuntimeError(a.RuntimeError.NOT_SUPPORTED_ERR);
                                                return p.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + t), e.each(function (e, s) {
                                                    r += e instanceof o ? i + t + n + 'Content-Disposition: form-data; name="' + s + '"; filename="' + unescape(encodeURIComponent(e.name || "blob")) + '"' + n + "Content-Type: " + (e.type || "application/octet-stream") + n + n + e.getSource() + n : i + t + n + 'Content-Disposition: form-data; name="' + s + '"' + n + n + unescape(encodeURIComponent(e)) + n
                                                }), r += i + t + i + n
                                            }

                                            var p, f, m = this;
                                            t.extend(this, {
                                                send: function (i, r) {
                                                    var a = this,
                                                        c = "Mozilla" === u.browser && u.verComp(u.version, 4, ">=") && u.verComp(u.version, 7, "<"),
                                                        m = "Android Browser" === u.browser, h = !1;
                                                    if (f = i.url.replace(/^.+?\/([\w\-\.]+)$/, "$1").toLowerCase(), p = l(), p.open(i.method, i.url, i.async, i.user, i.password), r instanceof o) r.isDetached() && (h = !0), r = r.getSource(); else if (r instanceof s) {
                                                        if (r.hasBlob())if (r.getBlob().isDetached()) r = d.call(a, r), h = !0; else if ((c || m) && "blob" === t.typeOf(r.getBlob().getSource()) && window.FileReader)return void e.call(a, i, r);
                                                        if (r instanceof s) {
                                                            var g = new window.FormData;
                                                            r.each(function (e, t) {
                                                                e instanceof o ? g.append(t, e.getSource()) : g.append(t, e)
                                                            }), r = g
                                                        }
                                                    }
                                                    p.upload ? (i.withCredentials && (p.withCredentials = !0), p.addEventListener("load", function (e) {
                                                        a.trigger(e)
                                                    }), p.addEventListener("error", function (e) {
                                                        a.trigger(e)
                                                    }), p.addEventListener("progress", function (e) {
                                                        a.trigger(e)
                                                    }), p.upload.addEventListener("progress", function (e) {
                                                        a.trigger({
                                                            type: "UploadProgress",
                                                            loaded: e.loaded,
                                                            total: e.total
                                                        })
                                                    })) : p.onreadystatechange = function () {
                                                        switch (p.readyState) {
                                                            case 1:
                                                                break;
                                                            case 2:
                                                                break;
                                                            case 3:
                                                                var e, t;
                                                                try {
                                                                    n.hasSameOrigin(i.url) && (e = p.getResponseHeader("Content-Length") || 0), p.responseText && (t = p.responseText.length)
                                                                } catch (i) {
                                                                    e = t = 0
                                                                }
                                                                a.trigger({
                                                                    type: "progress",
                                                                    lengthComputable: !!e,
                                                                    total: parseInt(e, 10),
                                                                    loaded: t
                                                                });
                                                                break;
                                                            case 4:
                                                                p.onreadystatechange = function () {
                                                                }, 0 === p.status ? a.trigger("error") : a.trigger("load")
                                                        }
                                                    }, t.isEmptyObj(i.headers) || t.each(i.headers, function (e, t) {
                                                        p.setRequestHeader(t, e)
                                                    }), "" !== i.responseType && "responseType" in p && ("json" !== i.responseType || u.can("return_response_type", "json") ? p.responseType = i.responseType : p.responseType = "text"), h ? p.sendAsBinary ? p.sendAsBinary(r) : !function () {
                                                        for (var e = new Uint8Array(r.length),
                                                                 t = 0; t < r.length; t++)e[t] = 255 & r.charCodeAt(t);
                                                        p.send(e.buffer)
                                                    }() : p.send(r), a.trigger("loadstart")
                                                }, getStatus: function () {
                                                    try {
                                                        if (p)return p.status
                                                    } catch (e) {
                                                    }
                                                    return 0
                                                }, getResponse: function (e) {
                                                    var t = this.getRuntime();
                                                    try {
                                                        switch (e) {
                                                            case"blob":
                                                                var n = new r(t.uid, p.response),
                                                                    o = p.getResponseHeader("Content-Disposition");
                                                                if (o) {
                                                                    var s = o.match(/filename=([\'\"'])([^\1]+)\1/);
                                                                    s && (f = s[2])
                                                                }
                                                                return n.name = f, n.type || (n.type = i.getFileMime(f)), n;
                                                            case"json":
                                                                return u.can("return_response_type", "json") ? p.response : 200 === p.status && window.JSON ? JSON.parse(p.responseText) : null;
                                                            case"document":
                                                                return c(p);
                                                            default:
                                                                return "" !== p.responseText ? p.responseText : null
                                                        }
                                                    } catch (e) {
                                                        return null
                                                    }
                                                }, getAllResponseHeaders: function () {
                                                    try {
                                                        return p.getAllResponseHeaders()
                                                    } catch (e) {
                                                    }
                                                    return ""
                                                }, abort: function () {
                                                    p && p.abort()
                                                }, destroy: function () {
                                                    m = f = null
                                                }
                                            })
                                        }

                                        return e.XMLHttpRequest = l
                                    }), n("moxie/runtime/html5/utils/BinaryReader", ["moxie/core/utils/Basic"], function (e) {
                                        function t(e) {
                                            e instanceof ArrayBuffer ? i.apply(this, arguments) : n.apply(this, arguments)
                                        }

                                        function i(t) {
                                            var i = new DataView(t);
                                            e.extend(this, {
                                                readByteAt: function (e) {
                                                    return i.getUint8(e)
                                                }, writeByteAt: function (e, t) {
                                                    i.setUint8(e, t)
                                                }, SEGMENT: function (e, n, r) {
                                                    switch (arguments.length) {
                                                        case 2:
                                                            return t.slice(e, e + n);
                                                        case 1:
                                                            return t.slice(e);
                                                        case 3:
                                                            if (null === r && (r = new ArrayBuffer), r instanceof ArrayBuffer) {
                                                                var o = new Uint8Array(this.length() - n + r.byteLength);
                                                                e > 0 && o.set(new Uint8Array(t.slice(0, e)), 0), o.set(new Uint8Array(r), e), o.set(new Uint8Array(t.slice(e + n)), e + r.byteLength), this.clear(), t = o.buffer, i = new DataView(t);
                                                                break
                                                            }
                                                        default:
                                                            return t
                                                    }
                                                }, length: function () {
                                                    return t ? t.byteLength : 0
                                                }, clear: function () {
                                                    i = t = null
                                                }
                                            })
                                        }

                                        function n(t) {
                                            function i(e, i, n) {
                                                n = 3 === arguments.length ? n : t.length - i - 1, t = t.substr(0, i) + e + t.substr(n + i)
                                            }

                                            e.extend(this, {
                                                readByteAt: function (e) {
                                                    return t.charCodeAt(e)
                                                }, writeByteAt: function (e, t) {
                                                    i(String.fromCharCode(t), e, 1)
                                                }, SEGMENT: function (e, n, r) {
                                                    switch (arguments.length) {
                                                        case 1:
                                                            return t.substr(e);
                                                        case 2:
                                                            return t.substr(e, n);
                                                        case 3:
                                                            i(null !== r ? r : "", e, n);
                                                            break;
                                                        default:
                                                            return t
                                                    }
                                                }, length: function () {
                                                    return t ? t.length : 0
                                                }, clear: function () {
                                                    t = null
                                                }
                                            })
                                        }

                                        return e.extend(t.prototype, {
                                            littleEndian: !1, read: function (e, t) {
                                                var i, n, r;
                                                if (e + t > this.length())throw new Error("You are trying to read outside the source boundaries.");
                                                for (n = this.littleEndian ? 0 : -8 * (t - 1), r = 0, i = 0; r < t; r++)i |= this.readByteAt(e + r) << Math.abs(n + 8 * r);
                                                return i
                                            }, write: function (e, t, i) {
                                                var n, r;
                                                if (e > this.length())throw new Error("You are trying to write outside the source boundaries.");
                                                for (n = this.littleEndian ? 0 : -8 * (i - 1), r = 0; r < i; r++)this.writeByteAt(e + r, t >> Math.abs(n + 8 * r) & 255)
                                            }, BYTE: function (e) {
                                                return this.read(e, 1)
                                            }, SHORT: function (e) {
                                                return this.read(e, 2)
                                            }, LONG: function (e) {
                                                return this.read(e, 4)
                                            }, SLONG: function (e) {
                                                var t = this.read(e, 4);
                                                return t > 2147483647 ? t - 4294967296 : t
                                            }, CHAR: function (e) {
                                                return String.fromCharCode(this.read(e, 1))
                                            }, STRING: function (e, t) {
                                                return this.asArray("CHAR", e, t).join("")
                                            }, asArray: function (e, t, i) {
                                                for (var n = [], r = 0; r < i; r++)n[r] = this[e](t + r);
                                                return n
                                            }
                                        }), t
                                    }), n("moxie/runtime/html5/image/JPEGHeaders", ["moxie/runtime/html5/utils/BinaryReader", "moxie/core/Exceptions"], function (e, t) {
                                        return function i(n) {
                                            var r, o, s, a = [], u = 0;
                                            if (r = new e(n), 65496 !== r.SHORT(0))throw r.clear(), new t.ImageError(t.ImageError.WRONG_FORMAT);
                                            for (o = 2; o <= r.length();)if (s = r.SHORT(o), s >= 65488 && s <= 65495) o += 2; else {
                                                if (65498 === s || 65497 === s)break;
                                                u = r.SHORT(o + 2) + 2, s >= 65505 && s <= 65519 && a.push({
                                                    hex: s,
                                                    name: "APP" + (15 & s),
                                                    start: o,
                                                    length: u,
                                                    segment: r.SEGMENT(o, u)
                                                }), o += u
                                            }
                                            return r.clear(), {
                                                headers: a, restore: function (t) {
                                                    var i, n, r;
                                                    for (r = new e(t), o = 65504 == r.SHORT(2) ? 4 + r.SHORT(4) : 2, n = 0, i = a.length; n < i; n++)r.SEGMENT(o, 0, a[n].segment), o += a[n].length;
                                                    return t = r.SEGMENT(), r.clear(), t
                                                }, strip: function (t) {
                                                    var n, r, o, s;
                                                    for (o = new i(t), r = o.headers, o.purge(), n = new e(t), s = r.length; s--;)n.SEGMENT(r[s].start, r[s].length, "");
                                                    return t = n.SEGMENT(), n.clear(), t
                                                }, get: function (e) {
                                                    for (var t = [], i = 0,
                                                             n = a.length; i < n; i++)a[i].name === e.toUpperCase() && t.push(a[i].segment);
                                                    return t
                                                }, set: function (e, t) {
                                                    var i, n, r, o = [];
                                                    for ("string" == typeof t ? o.push(t) : o = t, i = n = 0, r = a.length; i < r && (a[i].name === e.toUpperCase() && (a[i].segment = o[n], a[i].length = o[n].length, n++), !(n >= o.length)); i++);
                                                }, purge: function () {
                                                    this.headers = a = []
                                                }
                                            }
                                        }
                                    }), n("moxie/runtime/html5/image/ExifParser", ["moxie/core/utils/Basic", "moxie/runtime/html5/utils/BinaryReader", "moxie/core/Exceptions"], function (e, i, n) {
                                        function r(o) {
                                            function s(i, r) {
                                                var o, s, u, l, c, f, m, h, g = this, v = [], x = {}, y = {
                                                    1: "BYTE",
                                                    7: "UNDEFINED",
                                                    2: "ASCII",
                                                    3: "SHORT",
                                                    4: "LONG",
                                                    5: "RATIONAL",
                                                    9: "SLONG",
                                                    10: "SRATIONAL"
                                                }, _ = {
                                                    BYTE: 1,
                                                    UNDEFINED: 1,
                                                    ASCII: 1,
                                                    SHORT: 2,
                                                    LONG: 4,
                                                    RATIONAL: 8,
                                                    SLONG: 4,
                                                    SRATIONAL: 8
                                                };
                                                for (o = g.SHORT(i), s = 0; s < o; s++)if (v = [], m = i + 2 + 12 * s, u = r[g.SHORT(m)], u !== t) {
                                                    if (l = y[g.SHORT(m += 2)], c = g.LONG(m += 2), f = _[l], !f)throw new n.ImageError(n.ImageError.INVALID_META_ERR);
                                                    if (m += 4, f * c > 4 && (m = g.LONG(m) + p.tiffHeader), m + f * c >= this.length())throw new n.ImageError(n.ImageError.INVALID_META_ERR);
                                                    "ASCII" !== l ? (v = g.asArray(l, m, c), h = 1 == c ? v[0] : v, d.hasOwnProperty(u) && "object" != ("undefined" == typeof h ? "undefined" : a(h)) ? x[u] = d[u][h] : x[u] = h) : x[u] = e.trim(g.STRING(m, c).replace(/\0$/, ""))
                                                }
                                                return x
                                            }

                                            function u(e, t, i) {
                                                var n, r, o, s = 0;
                                                if ("string" == typeof t) {
                                                    var a = c[e.toLowerCase()];
                                                    for (var u in a)if (a[u] === t) {
                                                        t = u;
                                                        break
                                                    }
                                                }
                                                n = p[e.toLowerCase() + "IFD"], r = this.SHORT(n);
                                                for (var l = 0; l < r; l++)if (o = n + 12 * l + 2, this.SHORT(o) == t) {
                                                    s = o + 8;
                                                    break
                                                }
                                                if (!s)return !1;
                                                try {
                                                    this.write(s, i, 4)
                                                } catch (e) {
                                                    return !1
                                                }
                                                return !0
                                            }

                                            var l, c, d, p, f, m;
                                            if (i.call(this, o), c = {
                                                    tiff: {
                                                        274: "Orientation",
                                                        270: "ImageDescription",
                                                        271: "Make",
                                                        272: "Model",
                                                        305: "Software",
                                                        34665: "ExifIFDPointer",
                                                        34853: "GPSInfoIFDPointer"
                                                    },
                                                    exif: {
                                                        36864: "ExifVersion",
                                                        40961: "ColorSpace",
                                                        40962: "PixelXDimension",
                                                        40963: "PixelYDimension",
                                                        36867: "DateTimeOriginal",
                                                        33434: "ExposureTime",
                                                        33437: "FNumber",
                                                        34855: "ISOSpeedRatings",
                                                        37377: "ShutterSpeedValue",
                                                        37378: "ApertureValue",
                                                        37383: "MeteringMode",
                                                        37384: "LightSource",
                                                        37385: "Flash",
                                                        37386: "FocalLength",
                                                        41986: "ExposureMode",
                                                        41987: "WhiteBalance",
                                                        41990: "SceneCaptureType",
                                                        41988: "DigitalZoomRatio",
                                                        41992: "Contrast",
                                                        41993: "Saturation",
                                                        41994: "Sharpness"
                                                    },
                                                    gps: {
                                                        0: "GPSVersionID",
                                                        1: "GPSLatitudeRef",
                                                        2: "GPSLatitude",
                                                        3: "GPSLongitudeRef",
                                                        4: "GPSLongitude"
                                                    },
                                                    thumb: {
                                                        513: "JPEGInterchangeFormat",
                                                        514: "JPEGInterchangeFormatLength"
                                                    }
                                                }, d = {
                                                    ColorSpace: {1: "sRGB", 0: "Uncalibrated"},
                                                    MeteringMode: {
                                                        0: "Unknown",
                                                        1: "Average",
                                                        2: "CenterWeightedAverage",
                                                        3: "Spot",
                                                        4: "MultiSpot",
                                                        5: "Pattern",
                                                        6: "Partial",
                                                        255: "Other"
                                                    },
                                                    LightSource: {
                                                        1: "Daylight",
                                                        2: "Fliorescent",
                                                        3: "Tungsten",
                                                        4: "Flash",
                                                        9: "Fine weather",
                                                        10: "Cloudy weather",
                                                        11: "Shade",
                                                        12: "Daylight fluorescent (D 5700 - 7100K)",
                                                        13: "Day white fluorescent (N 4600 -5400K)",
                                                        14: "Cool white fluorescent (W 3900 - 4500K)",
                                                        15: "White fluorescent (WW 3200 - 3700K)",
                                                        17: "Standard light A",
                                                        18: "Standard light B",
                                                        19: "Standard light C",
                                                        20: "D55",
                                                        21: "D65",
                                                        22: "D75",
                                                        23: "D50",
                                                        24: "ISO studio tungsten",
                                                        255: "Other"
                                                    },
                                                    Flash: {
                                                        0: "Flash did not fire",
                                                        1: "Flash fired",
                                                        5: "Strobe return light not detected",
                                                        7: "Strobe return light detected",
                                                        9: "Flash fired, compulsory flash mode",
                                                        13: "Flash fired, compulsory flash mode, return light not detected",
                                                        15: "Flash fired, compulsory flash mode, return light detected",
                                                        16: "Flash did not fire, compulsory flash mode",
                                                        24: "Flash did not fire, auto mode",
                                                        25: "Flash fired, auto mode",
                                                        29: "Flash fired, auto mode, return light not detected",
                                                        31: "Flash fired, auto mode, return light detected",
                                                        32: "No flash function",
                                                        65: "Flash fired, red-eye reduction mode",
                                                        69: "Flash fired, red-eye reduction mode, return light not detected",
                                                        71: "Flash fired, red-eye reduction mode, return light detected",
                                                        73: "Flash fired, compulsory flash mode, red-eye reduction mode",
                                                        77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
                                                        79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
                                                        89: "Flash fired, auto mode, red-eye reduction mode",
                                                        93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
                                                        95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
                                                    },
                                                    ExposureMode: {
                                                        0: "Auto exposure",
                                                        1: "Manual exposure",
                                                        2: "Auto bracket"
                                                    },
                                                    WhiteBalance: {0: "Auto white balance", 1: "Manual white balance"},
                                                    SceneCaptureType: {
                                                        0: "Standard",
                                                        1: "Landscape",
                                                        2: "Portrait",
                                                        3: "Night scene"
                                                    },
                                                    Contrast: {0: "Normal", 1: "Soft", 2: "Hard"},
                                                    Saturation: {
                                                        0: "Normal",
                                                        1: "Low saturation",
                                                        2: "High saturation"
                                                    },
                                                    Sharpness: {0: "Normal", 1: "Soft", 2: "Hard"},
                                                    GPSLatitudeRef: {N: "North latitude", S: "South latitude"},
                                                    GPSLongitudeRef: {E: "East longitude", W: "West longitude"}
                                                }, p = {tiffHeader: 10}, f = p.tiffHeader, l = {clear: this.clear}, e.extend(this, {
                                                    read: function () {
                                                        try {
                                                            return r.prototype.read.apply(this, arguments)
                                                        } catch (e) {
                                                            throw new n.ImageError(n.ImageError.INVALID_META_ERR)
                                                        }
                                                    }, write: function () {
                                                        try {
                                                            return r.prototype.write.apply(this, arguments)
                                                        } catch (e) {
                                                            throw new n.ImageError(n.ImageError.INVALID_META_ERR)
                                                        }
                                                    }, UNDEFINED: function () {
                                                        return this.BYTE.apply(this, arguments)
                                                    }, RATIONAL: function (e) {
                                                        return this.LONG(e) / this.LONG(e + 4)
                                                    }, SRATIONAL: function (e) {
                                                        return this.SLONG(e) / this.SLONG(e + 4)
                                                    }, ASCII: function (e) {
                                                        return this.CHAR(e)
                                                    }, TIFF: function () {
                                                        return m || null
                                                    }, EXIF: function () {
                                                        var t = null;
                                                        if (p.exifIFD) {
                                                            try {
                                                                t = s.call(this, p.exifIFD, c.exif)
                                                            } catch (e) {
                                                                return null
                                                            }
                                                            if (t.ExifVersion && "array" === e.typeOf(t.ExifVersion)) {
                                                                for (var i = 0,
                                                                         n = ""; i < t.ExifVersion.length; i++)n += String.fromCharCode(t.ExifVersion[i]);
                                                                t.ExifVersion = n
                                                            }
                                                        }
                                                        return t
                                                    }, GPS: function t() {
                                                        var t = null;
                                                        if (p.gpsIFD) {
                                                            try {
                                                                t = s.call(this, p.gpsIFD, c.gps)
                                                            } catch (e) {
                                                                return null
                                                            }
                                                            t.GPSVersionID && "array" === e.typeOf(t.GPSVersionID) && (t.GPSVersionID = t.GPSVersionID.join("."))
                                                        }
                                                        return t
                                                    }, thumb: function () {
                                                        if (p.IFD1)try {
                                                            var e = s.call(this, p.IFD1, c.thumb);
                                                            if ("JPEGInterchangeFormat" in e)return this.SEGMENT(p.tiffHeader + e.JPEGInterchangeFormat, e.JPEGInterchangeFormatLength)
                                                        } catch (e) {
                                                        }
                                                        return null
                                                    }, setExif: function (e, t) {
                                                        return ("PixelXDimension" === e || "PixelYDimension" === e) && u.call(this, "exif", e, t)
                                                    }, clear: function () {
                                                        l.clear(), o = c = d = m = p = l = null
                                                    }
                                                }), 65505 !== this.SHORT(0) || "EXIF\0" !== this.STRING(4, 5).toUpperCase())throw new n.ImageError(n.ImageError.INVALID_META_ERR);
                                            if (this.littleEndian = 18761 == this.SHORT(f), 42 !== this.SHORT(f += 2))throw new n.ImageError(n.ImageError.INVALID_META_ERR);
                                            p.IFD0 = p.tiffHeader + this.LONG(f += 2), m = s.call(this, p.IFD0, c.tiff), "ExifIFDPointer" in m && (p.exifIFD = p.tiffHeader + m.ExifIFDPointer, delete m.ExifIFDPointer), "GPSInfoIFDPointer" in m && (p.gpsIFD = p.tiffHeader + m.GPSInfoIFDPointer, delete m.GPSInfoIFDPointer), e.isEmptyObj(m) && (m = null);
                                            var h = this.LONG(p.IFD0 + 12 * this.SHORT(p.IFD0) + 2);
                                            h && (p.IFD1 = p.tiffHeader + h)
                                        }

                                        return r.prototype = i.prototype, r
                                    }), n("moxie/runtime/html5/image/JPEG", ["moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/runtime/html5/image/JPEGHeaders", "moxie/runtime/html5/utils/BinaryReader", "moxie/runtime/html5/image/ExifParser"], function (e, t, i, n, r) {
                                        function o(o) {
                                            function s(e) {
                                                var t, i, n = 0;
                                                for (e || (e = l); n <= e.length();) {
                                                    if (t = e.SHORT(n += 2), t >= 65472 && t <= 65475)return n += 5, {
                                                        height: e.SHORT(n),
                                                        width: e.SHORT(n += 2)
                                                    };
                                                    i = e.SHORT(n += 2), n += i - 2
                                                }
                                                return null
                                            }

                                            function a() {
                                                var e, t, i = d.thumb();
                                                return i && (e = new n(i), t = s(e), e.clear(), t) ? (t.data = i, t) : null
                                            }

                                            function u() {
                                                d && c && l && (d.clear(), c.purge(), l.clear(), p = c = d = l = null)
                                            }

                                            var l, c, d, p;
                                            if (l = new n(o), 65496 !== l.SHORT(0))throw new t.ImageError(t.ImageError.WRONG_FORMAT);
                                            c = new i(o);
                                            try {
                                                d = new r(c.get("app1")[0])
                                            } catch (e) {
                                            }
                                            p = s.call(this), e.extend(this, {
                                                type: "image/jpeg",
                                                size: l.length(),
                                                width: p && p.width || 0,
                                                height: p && p.height || 0,
                                                setExif: function (t, i) {
                                                    return !!d && ("object" === e.typeOf(t) ? e.each(t, function (e, t) {
                                                            d.setExif(t, e)
                                                        }) : d.setExif(t, i), void c.set("app1", d.SEGMENT()))
                                                },
                                                writeHeaders: function () {
                                                    return arguments.length ? c.restore(arguments[0]) : c.restore(o)
                                                },
                                                stripHeaders: function (e) {
                                                    return c.strip(e)
                                                },
                                                purge: function () {
                                                    u.call(this)
                                                }
                                            }), d && (this.meta = {
                                                tiff: d.TIFF(),
                                                exif: d.EXIF(),
                                                gps: d.GPS(),
                                                thumb: a()
                                            })
                                        }

                                        return o
                                    }), n("moxie/runtime/html5/image/PNG", ["moxie/core/Exceptions", "moxie/core/utils/Basic", "moxie/runtime/html5/utils/BinaryReader"], function (e, t, i) {
                                        function n(n) {
                                            function r() {
                                                var e, t;
                                                return e = s.call(this, 8), "IHDR" == e.type ? (t = e.start, {
                                                    width: a.LONG(t),
                                                    height: a.LONG(t += 4)
                                                }) : null
                                            }

                                            function o() {
                                                a && (a.clear(), n = c = u = l = a = null)
                                            }

                                            function s(e) {
                                                var t, i, n, r;
                                                return t = a.LONG(e), i = a.STRING(e += 4, 4), n = e += 4, r = a.LONG(e + t), {
                                                    length: t,
                                                    type: i,
                                                    start: n,
                                                    CRC: r
                                                }
                                            }

                                            var a, u, l, c;
                                            a = new i(n), function () {
                                                var t = 0, i = 0, n = [35152, 20039, 3338, 6666];
                                                for (i = 0; i < n.length; i++, t += 2)if (n[i] != a.SHORT(t))throw new e.ImageError(e.ImageError.WRONG_FORMAT)
                                            }(), c = r.call(this), t.extend(this, {
                                                type: "image/png",
                                                size: a.length(),
                                                width: c.width,
                                                height: c.height,
                                                purge: function () {
                                                    o.call(this)
                                                }
                                            }), o.call(this)
                                        }

                                        return n
                                    }), n("moxie/runtime/html5/image/ImageInfo", ["moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/runtime/html5/image/JPEG", "moxie/runtime/html5/image/PNG"], function (e, t, i, n) {
                                        return function (r) {
                                            var o, s = [i, n];
                                            o = function () {
                                                for (var e = 0; e < s.length; e++)try {
                                                    return new s[e](r)
                                                } catch (e) {
                                                }
                                                throw new t.ImageError(t.ImageError.WRONG_FORMAT)
                                            }(), e.extend(this, {
                                                type: "",
                                                size: 0,
                                                width: 0,
                                                height: 0,
                                                setExif: function () {
                                                },
                                                writeHeaders: function (e) {
                                                    return e
                                                },
                                                stripHeaders: function (e) {
                                                    return e
                                                },
                                                purge: function () {
                                                    r = null
                                                }
                                            }), e.extend(this, o), this.purge = function () {
                                                o.purge(), o = null
                                            }
                                        }
                                    }), n("moxie/runtime/html5/image/ResizerCanvas", [], function () {
                                        function e(i, n) {
                                            var r = i.width, o = Math.floor(r * n), s = !1;
                                            (n < .5 || n > 2) && (n = n < .5 ? .5 : 2, s = !0);
                                            var a = t(i, n);
                                            return s ? e(a, o / a.width) : a
                                        }

                                        function t(e, t) {
                                            var i = e.width, n = e.height, r = Math.floor(i * t), o = Math.floor(n * t),
                                                s = document.createElement("canvas");
                                            return s.width = r, s.height = o, s.getContext("2d").drawImage(e, 0, 0, i, n, 0, 0, r, o), e = null, s
                                        }

                                        return {scale: e}
                                    }), n("moxie/runtime/html5/image/Image", ["moxie/runtime/html5/Runtime", "moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/core/utils/Encode", "moxie/file/Blob", "moxie/file/File", "moxie/runtime/html5/image/ImageInfo", "moxie/runtime/html5/image/ResizerCanvas", "moxie/core/utils/Mime", "moxie/core/utils/Env"], function (e, t, i, n, r, o, s, a, u, l) {
                                        function c() {
                                            function e() {
                                                if (!x && !g)throw new i.ImageError(i.DOMException.INVALID_STATE_ERR);
                                                return x || g
                                            }

                                            function l() {
                                                var t = e();
                                                return "canvas" == t.nodeName.toLowerCase() ? t : (x = document.createElement("canvas"), x.width = t.width, x.height = t.height, x.getContext("2d").drawImage(t, 0, 0), x)
                                            }

                                            function c(e) {
                                                return n.atob(e.substring(e.indexOf("base64,") + 7))
                                            }

                                            function d(e, t) {
                                                return "data:" + (t || "") + ";base64," + n.btoa(e)
                                            }

                                            function p(e) {
                                                var t = this;
                                                g = new Image, g.onerror = function () {
                                                    h.call(this), t.trigger("error", i.ImageError.WRONG_FORMAT)
                                                }, g.onload = function () {
                                                    t.trigger("load")
                                                }, g.src = "data:" == e.substr(0, 5) ? e : d(e, _.type)
                                            }

                                            function f(e, t) {
                                                var n, r = this;
                                                return window.FileReader ? (n = new FileReader, n.onload = function () {
                                                    t(this.result)
                                                }, n.onerror = function () {
                                                    r.trigger("error", i.ImageError.WRONG_FORMAT)
                                                }, void n.readAsDataURL(e)) : t(e.getAsDataURL())
                                            }

                                            function m(e, i) {
                                                var n = Math.PI / 180, r = document.createElement("canvas"),
                                                    o = r.getContext("2d"), s = e.width, a = e.height;
                                                switch (t.inArray(i, [5, 6, 7, 8]) > -1 ? (r.width = a, r.height = s) : (r.width = s, r.height = a), i) {
                                                    case 2:
                                                        o.translate(s, 0), o.scale(-1, 1);
                                                        break;
                                                    case 3:
                                                        o.translate(s, a), o.rotate(180 * n);
                                                        break;
                                                    case 4:
                                                        o.translate(0, a), o.scale(1, -1);
                                                        break;
                                                    case 5:
                                                        o.rotate(90 * n), o.scale(1, -1);
                                                        break;
                                                    case 6:
                                                        o.rotate(90 * n), o.translate(0, -a);
                                                        break;
                                                    case 7:
                                                        o.rotate(90 * n), o.translate(s, -a), o.scale(-1, 1);
                                                        break;
                                                    case 8:
                                                        o.rotate(-90 * n), o.translate(-s, 0)
                                                }
                                                return o.drawImage(e, 0, 0, s, a), r
                                            }

                                            function h() {
                                                v && (v.purge(), v = null), y = g = x = _ = null, b = !1
                                            }

                                            var g, v, x, y, _, w = this, b = !1, E = !0;
                                            t.extend(this, {
                                                loadFromBlob: function (e) {
                                                    var t = this, n = t.getRuntime(),
                                                        r = !(arguments.length > 1) || arguments[1];
                                                    if (!n.can("access_binary"))throw new i.RuntimeError(i.RuntimeError.NOT_SUPPORTED_ERR);
                                                    return _ = e, e.isDetached() ? (y = e.getSource(), void p.call(this, y)) : void f.call(this, e.getSource(), function (e) {
                                                        r && (y = c(e)), p.call(t, e)
                                                    })
                                                }, loadFromImage: function (e, t) {
                                                    this.meta = e.meta, _ = new o(null, {
                                                        name: e.name,
                                                        size: e.size,
                                                        type: e.type
                                                    }), p.call(this, t ? y = e.getAsBinaryString() : e.getAsDataURL())
                                                }, getInfo: function () {
                                                    var t, i = this.getRuntime();
                                                    return !v && y && i.can("access_image_binary") && (v = new s(y)), t = {
                                                        width: e().width || 0,
                                                        height: e().height || 0,
                                                        type: _.type || u.getFileMime(_.name),
                                                        size: y && y.length || _.size || 0,
                                                        name: _.name || "",
                                                        meta: null
                                                    }, E && (t.meta = v && v.meta || this.meta || {}, !t.meta || !t.meta.thumb || t.meta.thumb.data instanceof r || (t.meta.thumb.data = new r(null, {
                                                        type: "image/jpeg",
                                                        data: t.meta.thumb.data
                                                    }))), t
                                                }, resize: function (t, i, n) {
                                                    var r = document.createElement("canvas");
                                                    if (r.width = t.width, r.height = t.height, r.getContext("2d").drawImage(e(), t.x, t.y, t.width, t.height, 0, 0, r.width, r.height), x = a.scale(r, i), E = n.preserveHeaders, !E) {
                                                        var o = this.meta && this.meta.tiff && this.meta.tiff.Orientation || 1;
                                                        x = m(x, o)
                                                    }
                                                    this.width = x.width, this.height = x.height, b = !0, this.trigger("Resize")
                                                }, getAsCanvas: function () {
                                                    return x || (x = l()), x.id = this.uid + "_canvas", x
                                                }, getAsBlob: function (e, t) {
                                                    return e !== this.type ? (b = !0, new o(null, {
                                                        name: _.name || "",
                                                        type: e,
                                                        data: w.getAsDataURL(e, t)
                                                    })) : new o(null, {
                                                        name: _.name || "",
                                                        type: e,
                                                        data: w.getAsBinaryString(e, t)
                                                    })
                                                }, getAsDataURL: function (e) {
                                                    var t = arguments[1] || 90;
                                                    if (!b)return g.src;
                                                    if (l(), "image/jpeg" !== e)return x.toDataURL("image/png");
                                                    try {
                                                        return x.toDataURL("image/jpeg", t / 100)
                                                    } catch (e) {
                                                        return x.toDataURL("image/jpeg")
                                                    }
                                                }, getAsBinaryString: function (e, t) {
                                                    if (!b)return y || (y = c(w.getAsDataURL(e, t))), y;
                                                    if ("image/jpeg" !== e) y = c(w.getAsDataURL(e, t)); else {
                                                        var i;
                                                        t || (t = 90), l();
                                                        try {
                                                            i = x.toDataURL("image/jpeg", t / 100)
                                                        } catch (e) {
                                                            i = x.toDataURL("image/jpeg")
                                                        }
                                                        y = c(i), v && (y = v.stripHeaders(y), E && (v.meta && v.meta.exif && v.setExif({
                                                            PixelXDimension: this.width,
                                                            PixelYDimension: this.height
                                                        }), y = v.writeHeaders(y)), v.purge(), v = null)
                                                    }
                                                    return b = !1, y
                                                }, destroy: function () {
                                                    w = null, h.call(this), this.getRuntime().getShim().removeInstance(this.uid)
                                                }
                                            })
                                        }

                                        return e.Image = c
                                    }), n("moxie/runtime/flash/Runtime", ["moxie/core/utils/Basic", "moxie/core/utils/Env", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/runtime/Runtime"], function (e, t, i, n, o) {
                                        function s() {
                                            var e;
                                            try {
                                                e = navigator.plugins["Shockwave Flash"], e = e.description
                                            } catch (t) {
                                                try {
                                                    e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version");
                                                } catch (t) {
                                                    e = "0.0"
                                                }
                                            }
                                            return e = e.match(/\d+/g), parseFloat(e[0] + "." + e[1])
                                        }

                                        function a(e) {
                                            var n = i.get(e);
                                            n && "OBJECT" == n.nodeName && ("IE" === t.browser ? (n.style.display = "none", function t() {
                                                4 == n.readyState ? l(e) : setTimeout(t, 10)
                                            }()) : n.parentNode.removeChild(n))
                                        }

                                        function l(e) {
                                            var t = i.get(e);
                                            if (t) {
                                                for (var n in t)"function" == typeof t[n] && (t[n] = null);
                                                t.parentNode.removeChild(t)
                                            }
                                        }

                                        function c(l) {
                                            var c, f = this;
                                            l = e.extend({swf_url: t.swf_url}, l), o.call(this, l, d, {
                                                access_binary: function (e) {
                                                    return e && "browser" === f.mode
                                                },
                                                access_image_binary: function (e) {
                                                    return e && "browser" === f.mode
                                                },
                                                display_media: o.capTest(r("moxie/image/Image")),
                                                do_cors: o.capTrue,
                                                drag_and_drop: !1,
                                                report_upload_progress: function () {
                                                    return "client" === f.mode
                                                },
                                                resize_image: o.capTrue,
                                                return_response_headers: !1,
                                                return_response_type: function (t) {
                                                    return !("json" !== t || !window.JSON) || !e.arrayDiff(t, ["", "text", "document"]) || "browser" === f.mode
                                                },
                                                return_status_code: function (t) {
                                                    return "browser" === f.mode || !e.arrayDiff(t, [200, 404])
                                                },
                                                select_file: o.capTrue,
                                                select_multiple: o.capTrue,
                                                send_binary_string: function (e) {
                                                    return e && "browser" === f.mode
                                                },
                                                send_browser_cookies: function (e) {
                                                    return e && "browser" === f.mode
                                                },
                                                send_custom_headers: function (e) {
                                                    return e && "browser" === f.mode
                                                },
                                                send_multipart: o.capTrue,
                                                slice_blob: function (e) {
                                                    return e && "browser" === f.mode
                                                },
                                                stream_upload: function (e) {
                                                    return e && "browser" === f.mode
                                                },
                                                summon_file_dialog: !1,
                                                upload_filesize: function (t) {
                                                    return e.parseSizeStr(t) <= 2097152 || "client" === f.mode
                                                },
                                                use_http_method: function (t) {
                                                    return !e.arrayDiff(t, ["GET", "POST"])
                                                }
                                            }, {
                                                access_binary: function (e) {
                                                    return e ? "browser" : "client"
                                                }, access_image_binary: function (e) {
                                                    return e ? "browser" : "client"
                                                }, report_upload_progress: function (e) {
                                                    return e ? "browser" : "client"
                                                }, return_response_type: function (t) {
                                                    return e.arrayDiff(t, ["", "text", "json", "document"]) ? "browser" : ["client", "browser"]
                                                }, return_status_code: function (t) {
                                                    return e.arrayDiff(t, [200, 404]) ? "browser" : ["client", "browser"]
                                                }, send_binary_string: function (e) {
                                                    return e ? "browser" : "client"
                                                }, send_browser_cookies: function (e) {
                                                    return e ? "browser" : "client"
                                                }, send_custom_headers: function (e) {
                                                    return e ? "browser" : "client"
                                                }, slice_blob: function (e) {
                                                    return e ? "browser" : "client"
                                                }, stream_upload: function (e) {
                                                    return e ? "client" : "browser"
                                                }, upload_filesize: function (t) {
                                                    return e.parseSizeStr(t) >= 2097152 ? "client" : "browser"
                                                }
                                            }, "client"), s() < 11.3 && (u && t.debug.runtime && t.log("\tFlash didn't meet minimal version requirement (11.3)."), this.mode = !1), e.extend(this, {
                                                getShim: function () {
                                                    return i.get(this.uid)
                                                }, shimExec: function (e, t) {
                                                    var i = [].slice.call(arguments, 2);
                                                    return f.getShim().exec(this.uid, e, t, i)
                                                }, init: function () {
                                                    var i, r, o;
                                                    o = this.getShimContainer(), e.extend(o.style, {
                                                        position: "absolute",
                                                        top: "-8px",
                                                        left: "-8px",
                                                        width: "9px",
                                                        height: "9px",
                                                        overflow: "hidden"
                                                    }), i = '<object id="' + this.uid + '" type="application/x-shockwave-flash" data="' + l.swf_url + '" ', "IE" === t.browser && (i += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '), i += 'width="100%" height="100%" style="outline:0"><param name="movie" value="' + l.swf_url + '" /><param name="flashvars" value="uid=' + escape(this.uid) + "&target=" + t.global_event_dispatcher + '" /><param name="wmode" value="transparent" /><param name="allowscriptaccess" value="always" /></object>', "IE" === t.browser ? (r = document.createElement("div"), o.appendChild(r), r.outerHTML = i, r = o = null) : o.innerHTML = i, c = setTimeout(function () {
                                                        f && !f.initialized && (f.trigger("Error", new n.RuntimeError(n.RuntimeError.NOT_INIT_ERR)), u && t.debug.runtime && t.log("\tFlash failed to initialize within a specified period of time (typically 5s)."))
                                                    }, 5e3)
                                                }, destroy: function (e) {
                                                    return function () {
                                                        a(f.uid), e.call(f), clearTimeout(c), l = c = e = f = null
                                                    }
                                                }(this.destroy)
                                            }, p)
                                        }

                                        var d = "flash", p = {};
                                        return o.addConstructor(d, c), p
                                    }), n("moxie/runtime/flash/file/Blob", ["moxie/runtime/flash/Runtime", "moxie/file/Blob"], function (e, t) {
                                        var i = {
                                            slice: function (e, i, n, r) {
                                                var o = this.getRuntime();
                                                return i < 0 ? i = Math.max(e.size + i, 0) : i > 0 && (i = Math.min(i, e.size)), n < 0 ? n = Math.max(e.size + n, 0) : n > 0 && (n = Math.min(n, e.size)), e = o.shimExec.call(this, "Blob", "slice", i, n, r || ""), e && (e = new t(o.uid, e)), e
                                            }
                                        };
                                        return e.Blob = i
                                    }), n("moxie/runtime/flash/file/FileInput", ["moxie/runtime/flash/Runtime", "moxie/file/File", "moxie/core/utils/Basic"], function (e, t, i) {
                                        var n = {
                                            init: function (e) {
                                                var n = this, r = this.getRuntime();
                                                this.bind("Change", function () {
                                                    var e = r.shimExec.call(n, "FileInput", "getFiles");
                                                    n.files = [], i.each(e, function (e) {
                                                        n.files.push(new t(r.uid, e))
                                                    })
                                                }, 999), this.getRuntime().shimExec.call(this, "FileInput", "init", {
                                                    accept: e.accept,
                                                    multiple: e.multiple
                                                }), this.trigger("ready")
                                            }
                                        };
                                        return e.FileInput = n
                                    }), n("moxie/runtime/flash/file/FileReader", ["moxie/runtime/flash/Runtime", "moxie/core/utils/Encode"], function (e, t) {
                                        function i(e, i) {
                                            switch (i) {
                                                case"readAsText":
                                                    return t.atob(e, "utf8");
                                                case"readAsBinaryString":
                                                    return t.atob(e);
                                                case"readAsDataURL":
                                                    return e
                                            }
                                            return null
                                        }

                                        var n = {
                                            read: function (e, t) {
                                                var n = this;
                                                return n.result = "", "readAsDataURL" === e && (n.result = "data:" + (t.type || "") + ";base64,"), n.bind("Progress", function (t, r) {
                                                    r && (n.result += i(r, e))
                                                }, 999), n.getRuntime().shimExec.call(this, "FileReader", "readAsBase64", t.uid)
                                            }
                                        };
                                        return e.FileReader = n
                                    }), n("moxie/runtime/flash/file/FileReaderSync", ["moxie/runtime/flash/Runtime", "moxie/core/utils/Encode"], function (e, t) {
                                        function i(e, i) {
                                            switch (i) {
                                                case"readAsText":
                                                    return t.atob(e, "utf8");
                                                case"readAsBinaryString":
                                                    return t.atob(e);
                                                case"readAsDataURL":
                                                    return e
                                            }
                                            return null
                                        }

                                        var n = {
                                            read: function (e, t) {
                                                var n, r = this.getRuntime();
                                                return (n = r.shimExec.call(this, "FileReaderSync", "readAsBase64", t.uid)) ? ("readAsDataURL" === e && (n = "data:" + (t.type || "") + ";base64," + n), i(n, e, t.type)) : null
                                            }
                                        };
                                        return e.FileReaderSync = n
                                    }), n("moxie/runtime/flash/runtime/Transporter", ["moxie/runtime/flash/Runtime", "moxie/file/Blob"], function (e, t) {
                                        var i = {
                                            getAsBlob: function (e) {
                                                var i = this.getRuntime(),
                                                    n = i.shimExec.call(this, "Transporter", "getAsBlob", e);
                                                return n ? new t(i.uid, n) : null
                                            }
                                        };
                                        return e.Transporter = i
                                    }), n("moxie/runtime/flash/xhr/XMLHttpRequest", ["moxie/runtime/flash/Runtime", "moxie/core/utils/Basic", "moxie/file/Blob", "moxie/file/File", "moxie/file/FileReaderSync", "moxie/runtime/flash/file/FileReaderSync", "moxie/xhr/FormData", "moxie/runtime/Transporter", "moxie/runtime/flash/runtime/Transporter"], function (e, t, i, n, r, o, s, a, u) {
                                        var l = {
                                            send: function e(n, r) {
                                                function e() {
                                                    n.transport = c.mode, c.shimExec.call(l, "XMLHttpRequest", "send", n, r)
                                                }

                                                function o(t, i) {
                                                    c.shimExec.call(l, "XMLHttpRequest", "appendBlob", t, i.uid), r = null, e()
                                                }

                                                function u(e, t) {
                                                    var i = new a;
                                                    i.bind("TransportingComplete", function () {
                                                        t(this.result)
                                                    }), i.transport(e.getSource(), e.type, {ruid: c.uid})
                                                }

                                                var l = this, c = l.getRuntime();
                                                if (t.isEmptyObj(n.headers) || t.each(n.headers, function (e, t) {
                                                        c.shimExec.call(l, "XMLHttpRequest", "setRequestHeader", t, e.toString())
                                                    }), r instanceof s) {
                                                    var d;
                                                    if (r.each(function (e, t) {
                                                            e instanceof i ? d = t : c.shimExec.call(l, "XMLHttpRequest", "append", t, e)
                                                        }), r.hasBlob()) {
                                                        var p = r.getBlob();
                                                        p.isDetached() ? u(p, function (e) {
                                                            p.destroy(), o(d, e)
                                                        }) : o(d, p)
                                                    } else r = null, e()
                                                } else r instanceof i ? r.isDetached() ? u(r, function (t) {
                                                    r.destroy(), r = t.uid, e()
                                                }) : (r = r.uid, e()) : e()
                                            }, getResponse: function (e) {
                                                var i, o, s = this.getRuntime();
                                                if (o = s.shimExec.call(this, "XMLHttpRequest", "getResponseAsBlob")) {
                                                    if (o = new n(s.uid, o), "blob" === e)return o;
                                                    try {
                                                        if (i = new r, ~t.inArray(e, ["", "text"]))return i.readAsText(o);
                                                        if ("json" === e && window.JSON)return JSON.parse(i.readAsText(o))
                                                    } finally {
                                                        o.destroy()
                                                    }
                                                }
                                                return null
                                            }, abort: function (e) {
                                                var t = this.getRuntime();
                                                t.shimExec.call(this, "XMLHttpRequest", "abort"), this.dispatchEvent("readystatechange"), this.dispatchEvent("abort")
                                            }
                                        };
                                        return e.XMLHttpRequest = l
                                    }), n("moxie/runtime/flash/image/Image", ["moxie/runtime/flash/Runtime", "moxie/core/utils/Basic", "moxie/runtime/Transporter", "moxie/file/Blob", "moxie/file/FileReaderSync"], function (e, t, i, n, r) {
                                        var o = {
                                            loadFromBlob: function (e) {
                                                function t(e) {
                                                    r.shimExec.call(n, "Image", "loadFromBlob", e.uid), n = r = null
                                                }

                                                var n = this, r = n.getRuntime();
                                                if (e.isDetached()) {
                                                    var o = new i;
                                                    o.bind("TransportingComplete", function () {
                                                        t(o.result.getSource())
                                                    }), o.transport(e.getSource(), e.type, {ruid: r.uid})
                                                } else t(e.getSource())
                                            }, loadFromImage: function (e) {
                                                var t = this.getRuntime();
                                                return t.shimExec.call(this, "Image", "loadFromImage", e.uid)
                                            }, getInfo: function () {
                                                var e = this.getRuntime(),
                                                    t = e.shimExec.call(this, "Image", "getInfo");
                                                return !t.meta || !t.meta.thumb || t.meta.thumb.data instanceof n || (t.meta.thumb.data = new n(e.uid, t.meta.thumb.data)), t
                                            }, getAsBlob: function (e, t) {
                                                var i = this.getRuntime(),
                                                    r = i.shimExec.call(this, "Image", "getAsBlob", e, t);
                                                return r ? new n(i.uid, r) : null
                                            }, getAsDataURL: function () {
                                                var e, t = this.getRuntime(),
                                                    i = t.Image.getAsBlob.apply(this, arguments);
                                                return i ? (e = new r, e.readAsDataURL(i)) : null
                                            }
                                        };
                                        return e.Image = o
                                    }), n("moxie/runtime/silverlight/Runtime", ["moxie/core/utils/Basic", "moxie/core/utils/Env", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/runtime/Runtime"], function (e, t, i, n, o) {
                                        function s(e) {
                                            var t, i, n, r, o, s = !1, a = null, u = 0;
                                            try {
                                                try {
                                                    a = new ActiveXObject("AgControl.AgControl"), a.IsVersionSupported(e) && (s = !0), a = null
                                                } catch (a) {
                                                    var l = navigator.plugins["Silverlight Plug-In"];
                                                    if (l) {
                                                        for (t = l.description, "1.0.30226.2" === t && (t = "2.0.30226.2"), i = t.split("."); i.length > 3;)i.pop();
                                                        for (; i.length < 4;)i.push(0);
                                                        for (n = e.split("."); n.length > 4;)n.pop();
                                                        do r = parseInt(n[u], 10), o = parseInt(i[u], 10), u++; while (u < n.length && r === o);
                                                        r <= o && !isNaN(r) && (s = !0)
                                                    }
                                                }
                                            } catch (e) {
                                                s = !1
                                            }
                                            return s
                                        }

                                        function a(a) {
                                            var d, p = this;
                                            a = e.extend({xap_url: t.xap_url}, a), o.call(this, a, l, {
                                                access_binary: o.capTrue,
                                                access_image_binary: o.capTrue,
                                                display_media: o.capTest(r("moxie/image/Image")),
                                                do_cors: o.capTrue,
                                                drag_and_drop: !1,
                                                report_upload_progress: o.capTrue,
                                                resize_image: o.capTrue,
                                                return_response_headers: function (e) {
                                                    return e && "client" === p.mode
                                                },
                                                return_response_type: function (e) {
                                                    return "json" !== e || !!window.JSON
                                                },
                                                return_status_code: function (t) {
                                                    return "client" === p.mode || !e.arrayDiff(t, [200, 404])
                                                },
                                                select_file: o.capTrue,
                                                select_multiple: o.capTrue,
                                                send_binary_string: o.capTrue,
                                                send_browser_cookies: function (e) {
                                                    return e && "browser" === p.mode
                                                },
                                                send_custom_headers: function (e) {
                                                    return e && "client" === p.mode
                                                },
                                                send_multipart: o.capTrue,
                                                slice_blob: o.capTrue,
                                                stream_upload: !0,
                                                summon_file_dialog: !1,
                                                upload_filesize: o.capTrue,
                                                use_http_method: function (t) {
                                                    return "client" === p.mode || !e.arrayDiff(t, ["GET", "POST"])
                                                }
                                            }, {
                                                return_response_headers: function (e) {
                                                    return e ? "client" : "browser"
                                                }, return_status_code: function (t) {
                                                    return e.arrayDiff(t, [200, 404]) ? "client" : ["client", "browser"]
                                                }, send_browser_cookies: function (e) {
                                                    return e ? "browser" : "client"
                                                }, send_custom_headers: function (e) {
                                                    return e ? "client" : "browser"
                                                }, use_http_method: function (t) {
                                                    return e.arrayDiff(t, ["GET", "POST"]) ? "client" : ["client", "browser"]
                                                }
                                            }), s("2.0.31005.0") && "Opera" !== t.browser || (u && t.debug.runtime && t.log("\tSilverlight is not installed or minimal version (2.0.31005.0) requirement not met (not likely)."), this.mode = !1), e.extend(this, {
                                                getShim: function () {
                                                    return i.get(this.uid).content.Moxie
                                                }, shimExec: function (e, t) {
                                                    var i = [].slice.call(arguments, 2);
                                                    return p.getShim().exec(this.uid, e, t, i)
                                                }, init: function () {
                                                    var e;
                                                    e = this.getShimContainer(), e.innerHTML = '<object id="' + this.uid + '" data="data:application/x-silverlight," type="application/x-silverlight-2" width="100%" height="100%" style="outline:none;"><param name="source" value="' + a.xap_url + '"/><param name="background" value="Transparent"/><param name="windowless" value="true"/><param name="enablehtmlaccess" value="true"/><param name="initParams" value="uid=' + this.uid + ",target=" + t.global_event_dispatcher + '"/></object>', d = setTimeout(function () {
                                                        p && !p.initialized && (p.trigger("Error", new n.RuntimeError(n.RuntimeError.NOT_INIT_ERR)), u && t.debug.runtime && t.log("Silverlight failed to initialize within a specified period of time (5-10s)."))
                                                    }, "Windows" !== t.OS ? 1e4 : 5e3)
                                                }, destroy: function (e) {
                                                    return function () {
                                                        e.call(p), clearTimeout(d), a = d = e = p = null
                                                    }
                                                }(this.destroy)
                                            }, c)
                                        }

                                        var l = "silverlight", c = {};
                                        return o.addConstructor(l, a), c
                                    }), n("moxie/runtime/silverlight/file/Blob", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/file/Blob"], function (e, t, i) {
                                        return e.Blob = t.extend({}, i)
                                    }), n("moxie/runtime/silverlight/file/FileInput", ["moxie/runtime/silverlight/Runtime", "moxie/file/File", "moxie/core/utils/Basic"], function (e, t, i) {
                                        function n(e) {
                                            for (var t = "",
                                                     i = 0; i < e.length; i++)t += ("" !== t ? "|" : "") + e[i].title + " | *." + e[i].extensions.replace(/,/g, ";*.");
                                            return t
                                        }

                                        var r = {
                                            init: function (e) {
                                                var r = this, o = this.getRuntime();
                                                this.bind("Change", function () {
                                                    var e = o.shimExec.call(r, "FileInput", "getFiles");
                                                    r.files = [], i.each(e, function (e) {
                                                        r.files.push(new t(o.uid, e))
                                                    })
                                                }, 999), o.shimExec.call(this, "FileInput", "init", n(e.accept), e.multiple), this.trigger("ready")
                                            }, setOption: function (e, t) {
                                                "accept" == e && (t = n(t)), this.getRuntime().shimExec.call(this, "FileInput", "setOption", e, t)
                                            }
                                        };
                                        return e.FileInput = r
                                    }), n("moxie/runtime/silverlight/file/FileDrop", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Dom", "moxie/core/utils/Events"], function (e, t, i) {
                                        var n = {
                                            init: function () {
                                                var e, n = this, r = n.getRuntime();
                                                return e = r.getShimContainer(), i.addEvent(e, "dragover", function (e) {
                                                    e.preventDefault(), e.stopPropagation(), e.dataTransfer.dropEffect = "copy"
                                                }, n.uid), i.addEvent(e, "dragenter", function (e) {
                                                    e.preventDefault();
                                                    var i = t.get(r.uid).dragEnter(e);
                                                    i && e.stopPropagation()
                                                }, n.uid), i.addEvent(e, "drop", function (e) {
                                                    e.preventDefault();
                                                    var i = t.get(r.uid).dragDrop(e);
                                                    i && e.stopPropagation()
                                                }, n.uid), r.shimExec.call(this, "FileDrop", "init")
                                            }
                                        };
                                        return e.FileDrop = n
                                    }), n("moxie/runtime/silverlight/file/FileReader", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/file/FileReader"], function (e, t, i) {
                                        return e.FileReader = t.extend({}, i)
                                    }), n("moxie/runtime/silverlight/file/FileReaderSync", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/file/FileReaderSync"], function (e, t, i) {
                                        return e.FileReaderSync = t.extend({}, i)
                                    }), n("moxie/runtime/silverlight/runtime/Transporter", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/runtime/Transporter"], function (e, t, i) {
                                        return e.Transporter = t.extend({}, i)
                                    }), n("moxie/runtime/silverlight/xhr/XMLHttpRequest", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/xhr/XMLHttpRequest", "moxie/runtime/silverlight/file/FileReaderSync", "moxie/runtime/silverlight/runtime/Transporter"], function (e, t, i, n, r) {
                                        return e.XMLHttpRequest = t.extend({}, i)
                                    }), n("moxie/runtime/silverlight/image/Image", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/file/Blob", "moxie/runtime/flash/image/Image"], function (e, t, i, n) {
                                        return e.Image = t.extend({}, n, {
                                            getInfo: function () {
                                                var e = this.getRuntime(), n = ["tiff", "exif", "gps", "thumb"],
                                                    r = {meta: {}}, o = e.shimExec.call(this, "Image", "getInfo");
                                                return o.meta && (t.each(n, function (e) {
                                                    var t, i, n, s, a = o.meta[e];
                                                    if (a && a.keys)for (r.meta[e] = {}, i = 0, n = a.keys.length; i < n; i++)t = a.keys[i], s = a[t], s && (/^(\d|[1-9]\d+)$/.test(s) ? s = parseInt(s, 10) : /^\d*\.\d+$/.test(s) && (s = parseFloat(s)), r.meta[e][t] = s)
                                                }), !r.meta || !r.meta.thumb || r.meta.thumb.data instanceof i || (r.meta.thumb.data = new i(e.uid, r.meta.thumb.data))), r.width = parseInt(o.width, 10), r.height = parseInt(o.height, 10), r.size = parseInt(o.size, 10), r.type = o.type, r.name = o.name, r
                                            }, resize: function (e, t, i) {
                                                this.getRuntime().shimExec.call(this, "Image", "resize", e.x, e.y, e.width, e.height, t, i.preserveHeaders, i.resample)
                                            }
                                        })
                                    }), n("moxie/runtime/html4/Runtime", ["moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/runtime/Runtime", "moxie/core/utils/Env"], function (e, t, i, n) {
                                        function o(t) {
                                            var o = this, u = i.capTest, l = i.capTrue;
                                            i.call(this, t, s, {
                                                access_binary: u(window.FileReader || window.File && File.getAsDataURL),
                                                access_image_binary: !1,
                                                display_media: u((n.can("create_canvas") || n.can("use_data_uri_over32kb")) && r("moxie/image/Image")),
                                                do_cors: !1,
                                                drag_and_drop: !1,
                                                filter_by_extension: u(function () {
                                                    return !("Chrome" === n.browser && n.verComp(n.version, 28, "<") || "IE" === n.browser && n.verComp(n.version, 10, "<") || "Safari" === n.browser && n.verComp(n.version, 7, "<") || "Firefox" === n.browser && n.verComp(n.version, 37, "<"))
                                                }()),
                                                resize_image: function () {
                                                    return a.Image && o.can("access_binary") && n.can("create_canvas")
                                                },
                                                report_upload_progress: !1,
                                                return_response_headers: !1,
                                                return_response_type: function (t) {
                                                    return !("json" !== t || !window.JSON) || !!~e.inArray(t, ["text", "document", ""])
                                                },
                                                return_status_code: function (t) {
                                                    return !e.arrayDiff(t, [200, 404])
                                                },
                                                select_file: function () {
                                                    return n.can("use_fileinput")
                                                },
                                                select_multiple: !1,
                                                send_binary_string: !1,
                                                send_custom_headers: !1,
                                                send_multipart: !0,
                                                slice_blob: !1,
                                                stream_upload: function () {
                                                    return o.can("select_file")
                                                },
                                                summon_file_dialog: function () {
                                                    return o.can("select_file") && ("Firefox" === n.browser && n.verComp(n.version, 4, ">=") || "Opera" === n.browser && n.verComp(n.version, 12, ">=") || "IE" === n.browser && n.verComp(n.version, 10, ">=") || !!~e.inArray(n.browser, ["Chrome", "Safari"]))
                                                },
                                                upload_filesize: l,
                                                use_http_method: function (t) {
                                                    return !e.arrayDiff(t, ["GET", "POST"])
                                                }
                                            }), e.extend(this, {
                                                init: function () {
                                                    this.trigger("Init")
                                                }, destroy: function (e) {
                                                    return function () {
                                                        e.call(o), e = o = null
                                                    }
                                                }(this.destroy)
                                            }), e.extend(this.getShim(), a)
                                        }

                                        var s = "html4", a = {};
                                        return i.addConstructor(s, o), a
                                    }), n("moxie/runtime/html4/file/FileInput", ["moxie/runtime/html4/Runtime", "moxie/file/File", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/utils/Events", "moxie/core/utils/Mime", "moxie/core/utils/Env"], function (e, t, i, n, r, o, s) {
                                        function a() {
                                            function e() {
                                                var o, l, d, p, f, m, h = this, g = h.getRuntime();
                                                m = i.guid("uid_"), o = g.getShimContainer(), a && (d = n.get(a + "_form"), d && i.extend(d.style, {top: "100%"})), p = document.createElement("form"), p.setAttribute("id", m + "_form"), p.setAttribute("method", "post"), p.setAttribute("enctype", "multipart/form-data"), p.setAttribute("encoding", "multipart/form-data"), i.extend(p.style, {
                                                    overflow: "hidden",
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    width: "100%",
                                                    height: "100%"
                                                }), f = document.createElement("input"), f.setAttribute("id", m), f.setAttribute("type", "file"), f.setAttribute("accept", c.join(",")), i.extend(f.style, {
                                                    fontSize: "999px",
                                                    opacity: 0
                                                }), p.appendChild(f), o.appendChild(p), i.extend(f.style, {
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    width: "100%",
                                                    height: "100%"
                                                }), "IE" === s.browser && s.verComp(s.version, 10, "<") && i.extend(f.style, {filter: "progid:DXImageTransform.Microsoft.Alpha(opacity=0)"}), f.onchange = function () {
                                                    var i;
                                                    if (this.value) {
                                                        if (this.files) {
                                                            if (i = this.files[0], 0 === i.size)return void p.parentNode.removeChild(p)
                                                        } else i = {name: this.value};
                                                        i = new t(g.uid, i), this.onchange = function () {
                                                        }, e.call(h), h.files = [i], f.setAttribute("id", i.uid), p.setAttribute("id", i.uid + "_form"), h.trigger("change"), f = p = null
                                                    }
                                                }, g.can("summon_file_dialog") && (l = n.get(u.browse_button), r.removeEvent(l, "click", h.uid), r.addEvent(l, "click", function (e) {
                                                    f && !f.disabled && f.click(), e.preventDefault()
                                                }, h.uid)), a = m, o = d = l = null
                                            }

                                            var a, u, l, c = [];
                                            i.extend(this, {
                                                init: function (t) {
                                                    var i, s = this, a = s.getRuntime();
                                                    u = t, c = t.accept.mimes || o.extList2mimes(t.accept, a.can("filter_by_extension")), i = a.getShimContainer(), function () {
                                                        var e, o, c;
                                                        e = n.get(t.browse_button), l = n.getStyle(e, "z-index") || "auto", a.can("summon_file_dialog") && ("static" === n.getStyle(e, "position") && (e.style.position = "relative"), s.bind("Refresh", function () {
                                                            o = parseInt(l, 10) || 1, n.get(u.browse_button).style.zIndex = o, this.getRuntime().getShimContainer().style.zIndex = o - 1
                                                        })), c = a.can("summon_file_dialog") ? e : i, r.addEvent(c, "mouseover", function () {
                                                            s.trigger("mouseenter")
                                                        }, s.uid), r.addEvent(c, "mouseout", function () {
                                                            s.trigger("mouseleave")
                                                        }, s.uid), r.addEvent(c, "mousedown", function () {
                                                            s.trigger("mousedown")
                                                        }, s.uid), r.addEvent(n.get(t.container), "mouseup", function () {
                                                            s.trigger("mouseup")
                                                        }, s.uid), e = null
                                                    }(), e.call(this), i = null, s.trigger({type: "ready", async: !0})
                                                }, setOption: function (e, t) {
                                                    var i, r = this.getRuntime();
                                                    "accept" == e && (c = t.mimes || o.extList2mimes(t, r.can("filter_by_extension"))), i = n.get(a), i && i.setAttribute("accept", c.join(","))
                                                }, disable: function (e) {
                                                    var t;
                                                    (t = n.get(a)) && (t.disabled = !!e)
                                                }, destroy: function () {
                                                    var e = this.getRuntime(), t = e.getShim(),
                                                        i = e.getShimContainer(), o = u && n.get(u.container),
                                                        s = u && n.get(u.browse_button);
                                                    o && r.removeAllEvents(o, this.uid), s && (r.removeAllEvents(s, this.uid), s.style.zIndex = l), i && (r.removeAllEvents(i, this.uid), i.innerHTML = ""), t.removeInstance(this.uid), a = c = u = i = o = s = t = null
                                                }
                                            })
                                        }

                                        return e.FileInput = a
                                    }), n("moxie/runtime/html4/file/FileReader", ["moxie/runtime/html4/Runtime", "moxie/runtime/html5/file/FileReader"], function (e, t) {
                                        return e.FileReader = t
                                    }), n("moxie/runtime/html4/xhr/XMLHttpRequest", ["moxie/runtime/html4/Runtime", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/utils/Url", "moxie/core/Exceptions", "moxie/core/utils/Events", "moxie/file/Blob", "moxie/xhr/FormData"], function (e, t, i, n, r, o, s, a) {
                                        function u() {
                                            function e(e) {
                                                var t, n, r, s, a = this, u = !1;
                                                if (c) {
                                                    if (t = c.id.replace(/_iframe$/, ""), n = i.get(t + "_form")) {
                                                        for (r = n.getElementsByTagName("input"), s = r.length; s--;)switch (r[s].getAttribute("type")) {
                                                            case"hidden":
                                                                r[s].parentNode.removeChild(r[s]);
                                                                break;
                                                            case"file":
                                                                u = !0
                                                        }
                                                        r = [], u || n.parentNode.removeChild(n), n = null
                                                    }
                                                    setTimeout(function () {
                                                        o.removeEvent(c, "load", a.uid), c.parentNode && c.parentNode.removeChild(c);
                                                        var t = a.getRuntime().getShimContainer();
                                                        t.children.length || t.parentNode.removeChild(t), t = c = null, e()
                                                    }, 1)
                                                }
                                            }

                                            var u, l, c;
                                            t.extend(this, {
                                                send: function (d, p) {
                                                    function f() {
                                                        var i = y.getShimContainer() || document.body,
                                                            r = document.createElement("div");
                                                        r.innerHTML = '<iframe id="' + m + '_iframe" name="' + m + '_iframe" src="javascript:&quot;&quot;" style="display:none"></iframe>', c = r.firstChild, i.appendChild(c), o.addEvent(c, "load", function () {
                                                            var i;
                                                            try {
                                                                i = c.contentWindow.document || c.contentDocument || window.frames[c.id].document, /^4(0[0-9]|1[0-7]|2[2346])\s/.test(i.title) ? u = i.title.replace(/^(\d+).*$/, "$1") : (u = 200, l = t.trim(i.body.innerHTML), x.trigger({
                                                                    type: "progress",
                                                                    loaded: l.length,
                                                                    total: l.length
                                                                }), v && x.trigger({
                                                                    type: "uploadprogress",
                                                                    loaded: v.size || 1025,
                                                                    total: v.size || 1025
                                                                }))
                                                            } catch (t) {
                                                                if (!n.hasSameOrigin(d.url))return void e.call(x, function () {
                                                                    x.trigger("error")
                                                                });
                                                                u = 404
                                                            }
                                                            e.call(x, function () {
                                                                x.trigger("load")
                                                            })
                                                        }, x.uid)
                                                    }

                                                    var m, h, g, v, x = this, y = x.getRuntime();
                                                    if (u = l = null, p instanceof a && p.hasBlob()) {
                                                        if (v = p.getBlob(), m = v.uid, g = i.get(m), h = i.get(m + "_form"), !h)throw new r.DOMException(r.DOMException.NOT_FOUND_ERR)
                                                    } else m = t.guid("uid_"), h = document.createElement("form"), h.setAttribute("id", m + "_form"), h.setAttribute("method", d.method), h.setAttribute("enctype", "multipart/form-data"), h.setAttribute("encoding", "multipart/form-data"), y.getShimContainer().appendChild(h);
                                                    h.setAttribute("target", m + "_iframe"), p instanceof a && p.each(function (e, i) {
                                                        if (e instanceof s) g && g.setAttribute("name", i); else {
                                                            var n = document.createElement("input");
                                                            t.extend(n, {
                                                                type: "hidden",
                                                                name: i,
                                                                value: e
                                                            }), g ? h.insertBefore(n, g) : h.appendChild(n)
                                                        }
                                                    }), h.setAttribute("action", d.url), f(), h.submit(), x.trigger("loadstart")
                                                }, getStatus: function () {
                                                    return u
                                                }, getResponse: function (e) {
                                                    if ("json" === e && "string" === t.typeOf(l) && window.JSON)try {
                                                        return JSON.parse(l.replace(/^\s*<pre[^>]*>/, "").replace(/<\/pre>\s*$/, ""))
                                                    } catch (e) {
                                                        return null
                                                    }
                                                    return l
                                                }, abort: function () {
                                                    var t = this;
                                                    c && c.contentWindow && (c.contentWindow.stop ? c.contentWindow.stop() : c.contentWindow.document.execCommand ? c.contentWindow.document.execCommand("Stop") : c.src = "about:blank"), e.call(this, function () {
                                                        t.dispatchEvent("abort")
                                                    })
                                                }
                                            })
                                        }

                                        return e.XMLHttpRequest = u
                                    }), n("moxie/runtime/html4/image/Image", ["moxie/runtime/html4/Runtime", "moxie/runtime/html5/image/Image"], function (e, t) {
                                        return e.Image = t
                                    }), s(["moxie/core/utils/Basic", "moxie/core/utils/Encode", "moxie/core/utils/Env", "moxie/core/Exceptions", "moxie/core/utils/Dom", "moxie/core/EventTarget", "moxie/runtime/Runtime", "moxie/runtime/RuntimeClient", "moxie/file/Blob", "moxie/core/I18n", "moxie/core/utils/Mime", "moxie/file/FileInput", "moxie/file/File", "moxie/file/FileDrop", "moxie/file/FileReader", "moxie/core/utils/Url", "moxie/runtime/RuntimeTarget", "moxie/xhr/FormData", "moxie/xhr/XMLHttpRequest", "moxie/runtime/Transporter", "moxie/image/Image", "moxie/core/utils/Events", "moxie/runtime/html5/image/ResizerCanvas"])
                                }(this)
                            })
                        }, 35: function (e, t, n) {
                            var r, o, s,
                                a = "function" == typeof Symbol && "symbol" == i(Symbol.iterator) ? function (e) {
                                    return "undefined" == typeof e ? "undefined" : i(e)
                                } : function (e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : "undefined" == typeof e ? "undefined" : i(e)
                                };
                            !function (i, a) {
                                var u = function () {
                                    var e = {};
                                    return a.apply(e, arguments), e.plupload
                                };
                                o = [n(34)], r = u, s = "function" == typeof r ? r.apply(t, o) : r, !(void 0 !== s && (e.exports = s))
                            }(window, function (e) {
                                !function (e, t, i) {
                                    function n(e) {
                                        function t(e, t, i) {
                                            var r = {
                                                chunks: "slice_blob",
                                                jpgresize: "send_binary_string",
                                                pngresize: "send_binary_string",
                                                progress: "report_upload_progress",
                                                multi_selection: "select_multiple",
                                                dragdrop: "drag_and_drop",
                                                drop_element: "drag_and_drop",
                                                headers: "send_custom_headers",
                                                urlstream_upload: "send_binary_string",
                                                canSendBinary: "send_binary",
                                                triggerDialog: "summon_file_dialog"
                                            };
                                            r[e] ? n[r[e]] = t : i || (n[e] = t)
                                        }

                                        var i = e.required_features, n = {};
                                        return "string" == typeof i ? l.each(i.split(/\s*,\s*/), function (e) {
                                            t(e, !0)
                                        }) : "object" === ("undefined" == typeof i ? "undefined" : a(i)) ? l.each(i, function (e, i) {
                                            t(i, e)
                                        }) : i === !0 && (e.chunk_size > 0 && (n.slice_blob = !0), l.isEmptyObj(e.resize) && e.multipart || (n.send_binary_string = !0), l.each(e, function (e, i) {
                                                t(i, !!e, !0)
                                            })), n
                                    }

                                    var r = window.setTimeout, o = {}, s = t.core.utils, u = t.runtime.Runtime, l = {
                                        VERSION: "2.2.1",
                                        STOPPED: 1,
                                        STARTED: 2,
                                        QUEUED: 1,
                                        UPLOADING: 2,
                                        FAILED: 4,
                                        DONE: 5,
                                        GENERIC_ERROR: -100,
                                        HTTP_ERROR: -200,
                                        IO_ERROR: -300,
                                        SECURITY_ERROR: -400,
                                        INIT_ERROR: -500,
                                        FILE_SIZE_ERROR: -600,
                                        FILE_EXTENSION_ERROR: -601,
                                        FILE_DUPLICATE_ERROR: -602,
                                        IMAGE_FORMAT_ERROR: -700,
                                        MEMORY_ERROR: -701,
                                        IMAGE_DIMENSIONS_ERROR: -702,
                                        mimeTypes: s.Mime.mimes,
                                        ua: s.Env,
                                        typeOf: s.Basic.typeOf,
                                        extend: s.Basic.extend,
                                        guid: s.Basic.guid,
                                        getAll: function (e) {
                                            var t, i = [];
                                            "array" !== l.typeOf(e) && (e = [e]);
                                            for (var n = e.length; n--;)t = l.get(e[n]), t && i.push(t);
                                            return i.length ? i : null
                                        },
                                        get: s.Dom.get,
                                        each: s.Basic.each,
                                        getPos: s.Dom.getPos,
                                        getSize: s.Dom.getSize,
                                        xmlEncode: function (e) {
                                            var t = {"<": "lt", ">": "gt", "&": "amp", '"': "quot", "'": "#39"},
                                                i = /[<>&\"\']/g;
                                            return e ? ("" + e).replace(i, function (e) {
                                                return t[e] ? "&" + t[e] + ";" : e
                                            }) : e
                                        },
                                        toArray: s.Basic.toArray,
                                        inArray: s.Basic.inArray,
                                        inSeries: s.Basic.inSeries,
                                        addI18n: t.core.I18n.addI18n,
                                        translate: t.core.I18n.translate,
                                        sprintf: s.Basic.sprintf,
                                        isEmptyObj: s.Basic.isEmptyObj,
                                        hasClass: s.Dom.hasClass,
                                        addClass: s.Dom.addClass,
                                        removeClass: s.Dom.removeClass,
                                        getStyle: s.Dom.getStyle,
                                        addEvent: s.Events.addEvent,
                                        removeEvent: s.Events.removeEvent,
                                        removeAllEvents: s.Events.removeAllEvents,
                                        cleanName: function (e) {
                                            var t, i;
                                            for (i = [/[\300-\306]/g, "A", /[\340-\346]/g, "a", /\307/g, "C", /\347/g, "c", /[\310-\313]/g, "E", /[\350-\353]/g, "e", /[\314-\317]/g, "I", /[\354-\357]/g, "i", /\321/g, "N", /\361/g, "n", /[\322-\330]/g, "O", /[\362-\370]/g, "o", /[\331-\334]/g, "U", /[\371-\374]/g, "u"], t = 0; t < i.length; t += 2)e = e.replace(i[t], i[t + 1]);
                                            return e = e.replace(/\s+/g, "_"), e = e.replace(/[^a-z0-9_\-\.]+/gi, "")
                                        },
                                        buildUrl: function (e, t) {
                                            var i = "";
                                            return l.each(t, function (e, t) {
                                                i += (i ? "&" : "") + encodeURIComponent(t) + "=" + encodeURIComponent(e)
                                            }), i && (e += (e.indexOf("?") > 0 ? "&" : "?") + i), e
                                        },
                                        formatSize: function (e) {
                                            function t(e, t) {
                                                return Math.round(e * Math.pow(10, t)) / Math.pow(10, t)
                                            }

                                            if (e === i || /\D/.test(e))return l.translate("N/A");
                                            var n = Math.pow(1024, 4);
                                            return e > n ? t(e / n, 1) + " " + l.translate("tb") : e > (n /= 1024) ? t(e / n, 1) + " " + l.translate("gb") : e > (n /= 1024) ? t(e / n, 1) + " " + l.translate("mb") : e > 1024 ? Math.round(e / 1024) + " " + l.translate("kb") : e + " " + l.translate("b")
                                        },
                                        parseSize: s.Basic.parseSizeStr,
                                        predictRuntime: function (e, t) {
                                            var i, n;
                                            return i = new l.Uploader(e), n = u.thatCan(i.getOption().required_features, t || e.runtimes), i.destroy(), n
                                        },
                                        addFileFilter: function (e, t) {
                                            o[e] = t
                                        }
                                    };
                                    l.addFileFilter("mime_types", function (e, t, i) {
                                        e.length && !e.regexp.test(t.name) ? (this.trigger("Error", {
                                            code: l.FILE_EXTENSION_ERROR,
                                            message: l.translate("File extension error."),
                                            file: t
                                        }), i(!1)) : i(!0)
                                    }), l.addFileFilter("max_file_size", function (e, t, i) {
                                        var n;
                                        e = l.parseSize(e), t.size !== n && e && t.size > e ? (this.trigger("Error", {
                                            code: l.FILE_SIZE_ERROR,
                                            message: l.translate("File size error."),
                                            file: t
                                        }), i(!1)) : i(!0)
                                    }), l.addFileFilter("prevent_duplicates", function (e, t, i) {
                                        if (e)for (var n = this.files.length; n--;)if (t.name === this.files[n].name && t.size === this.files[n].size)return this.trigger("Error", {
                                            code: l.FILE_DUPLICATE_ERROR,
                                            message: l.translate("Duplicate file error."),
                                            file: t
                                        }), void i(!1);
                                        i(!0)
                                    }), l.Uploader = function (e) {
                                        function s() {
                                            var e, t, i = 0;
                                            if (this.state == l.STARTED) {
                                                for (t = 0; t < C.length; t++)e || C[t].status != l.QUEUED ? i++ : (e = C[t], this.trigger("BeforeUpload", e) && (e.status = l.UPLOADING, this.trigger("UploadFile", e)));
                                                i == C.length && (this.state !== l.STOPPED && (this.state = l.STOPPED, this.trigger("StateChanged")), this.trigger("UploadComplete", C))
                                            }
                                        }

                                        function c(e) {
                                            e.percent = e.size > 0 ? Math.ceil(e.loaded / e.size * 100) : 100, d()
                                        }

                                        function d() {
                                            var e, t;
                                            for (T.reset(), e = 0; e < C.length; e++)t = C[e], t.size !== i ? (T.size += t.origSize, T.loaded += t.loaded * t.origSize / t.size) : T.size = i, t.status == l.DONE ? T.uploaded++ : t.status == l.FAILED ? T.failed++ : T.queued++;
                                            T.size === i ? T.percent = C.length > 0 ? Math.ceil(T.uploaded / C.length * 100) : 0 : (T.bytesPerSec = Math.ceil(T.loaded / ((+new Date - S || 1) / 1e3)), T.percent = T.size > 0 ? Math.ceil(T.loaded / T.size * 100) : 0)
                                        }

                                        function p() {
                                            var e = F[0] || M[0];
                                            return !!e && e.getRuntime().uid
                                        }

                                        function f(e, t) {
                                            if (e.ruid) {
                                                var i = u.getInfo(e.ruid);
                                                if (i)return i.can(t)
                                            }
                                            return !1
                                        }

                                        function m() {
                                            this.bind("FilesAdded FilesRemoved", function (e) {
                                                e.trigger("QueueChanged"), e.refresh()
                                            }), this.bind("CancelUpload", b), this.bind("BeforeUpload", x), this.bind("UploadFile", y), this.bind("UploadProgress", _), this.bind("StateChanged", w), this.bind("QueueChanged", d), this.bind("Error", R), this.bind("FileUploaded", E), this.bind("Destroy", I)
                                        }

                                        function h(e, i) {
                                            var n = this, r = 0, o = [], s = {
                                                runtime_order: e.runtimes,
                                                required_caps: e.required_features,
                                                preferred_caps: N,
                                                swf_url: e.flash_swf_url,
                                                xap_url: e.silverlight_xap_url
                                            };
                                            l.each(e.runtimes.split(/\s*,\s*/), function (t) {
                                                e[t] && (s[t] = e[t])
                                            }), e.browse_button && l.each(e.browse_button, function (i) {
                                                o.push(function (o) {
                                                    var a = new t.file.FileInput(l.extend({}, s, {
                                                        accept: e.filters.mime_types,
                                                        name: e.file_data_name,
                                                        multiple: e.multi_selection,
                                                        container: e.container,
                                                        browse_button: i
                                                    }));
                                                    a.onready = function () {
                                                        var e = u.getInfo(this.ruid);
                                                        l.extend(n.features, {
                                                            chunks: e.can("slice_blob"),
                                                            multipart: e.can("send_multipart"),
                                                            multi_selection: e.can("select_multiple")
                                                        }), r++, F.push(this), o()
                                                    }, a.onchange = function () {
                                                        n.addFile(this.files)
                                                    }, a.bind("mouseenter mouseleave mousedown mouseup", function (t) {
                                                        L || (e.browse_button_hover && ("mouseenter" === t.type ? l.addClass(i, e.browse_button_hover) : "mouseleave" === t.type && l.removeClass(i, e.browse_button_hover)), e.browse_button_active && ("mousedown" === t.type ? l.addClass(i, e.browse_button_active) : "mouseup" === t.type && l.removeClass(i, e.browse_button_active)))
                                                    }), a.bind("mousedown", function () {
                                                        n.trigger("Browse")
                                                    }), a.bind("error runtimeerror", function () {
                                                        a = null, o()
                                                    }), a.init()
                                                })
                                            }), e.drop_element && l.each(e.drop_element, function (e) {
                                                o.push(function (i) {
                                                    var o = new t.file.FileDrop(l.extend({}, s, {drop_zone: e}));
                                                    o.onready = function () {
                                                        var e = u.getInfo(this.ruid);
                                                        l.extend(n.features, {
                                                            chunks: e.can("slice_blob"),
                                                            multipart: e.can("send_multipart"),
                                                            dragdrop: e.can("drag_and_drop")
                                                        }), r++, M.push(this), i()
                                                    }, o.ondrop = function () {
                                                        n.addFile(this.files)
                                                    }, o.bind("error runtimeerror", function () {
                                                        o = null, i()
                                                    }), o.init()
                                                })
                                            }), l.inSeries(o, function () {
                                                "function" == typeof i && i(r)
                                            })
                                        }

                                        function g(e, n, r) {
                                            var o = new t.image.Image;
                                            try {
                                                o.onload = function () {
                                                    return n.width > this.width && n.height > this.height && n.quality === i && n.preserve_headers && !n.crop ? (this.destroy(), r(e)) : void o.downsize(n.width, n.height, n.crop, n.preserve_headers)
                                                }, o.onresize = function () {
                                                    r(this.getAsBlob(e.type, n.quality)), this.destroy()
                                                }, o.onerror = function () {
                                                    r(e)
                                                }, o.load(e)
                                            } catch (t) {
                                                r(e)
                                            }
                                        }

                                        function v(e, i, r) {
                                            function o(e, i, n) {
                                                var r = A[e];
                                                switch (e) {
                                                    case"max_file_size":
                                                        "max_file_size" === e && (A.max_file_size = A.filters.max_file_size = i);
                                                        break;
                                                    case"chunk_size":
                                                        i = l.parseSize(i), i >= 0 && (A[e] = i, A.send_file_name = !0);
                                                        break;
                                                    case"multipart":
                                                        A[e] = i, i || (A.send_file_name = !0);
                                                        break;
                                                    case"unique_names":
                                                        A[e] = i, i && (A.send_file_name = !0);
                                                        break;
                                                    case"filters":
                                                        "array" === l.typeOf(i) && (i = {mime_types: i}), n ? l.extend(A.filters, i) : A.filters = i, i.mime_types && ("string" === l.typeOf(i.mime_types) && (i.mime_types = t.core.utils.Mime.mimes2extList(i.mime_types)), i.mime_types.regexp = function (e) {
                                                            var t = [];
                                                            return l.each(e, function (e) {
                                                                l.each(e.extensions.split(/,/), function (e) {
                                                                    /^\s*\*\s*$/.test(e) ? t.push("\\.*") : t.push("\\." + e.replace(new RegExp("[" + "/^$.*+?|()[]{}\\".replace(/./g, "\\$&") + "]", "g"), "\\$&"))
                                                                })
                                                            }), new RegExp("(" + t.join("|") + ")$", "i")
                                                        }(i.mime_types), A.filters.mime_types = i.mime_types);
                                                        break;
                                                    case"resize":
                                                        i ? A.resize = l.extend({
                                                            preserve_headers: !0, crop: !1
                                                        }, i) : A.resize = !1;
                                                        break;
                                                    case"prevent_duplicates":
                                                        A.prevent_duplicates = A.filters.prevent_duplicates = !!i;
                                                        break;
                                                    case"container":
                                                    case"browse_button":
                                                    case"drop_element":
                                                        i = "container" === e ? l.get(i) : l.getAll(i);
                                                    case"runtimes":
                                                    case"multi_selection":
                                                    case"flash_swf_url":
                                                    case"silverlight_xap_url":
                                                        A[e] = i, n || (c = !0);
                                                        break;
                                                    default:
                                                        A[e] = i
                                                }
                                                n || s.trigger("OptionChanged", e, i, r)
                                            }

                                            var s = this, c = !1;
                                            "object" === ("undefined" == typeof e ? "undefined" : a(e)) ? l.each(e, function (e, t) {
                                                o(t, e, r)
                                            }) : o(e, i, r), r ? (A.required_features = n(l.extend({}, A)), N = n(l.extend({}, A, {required_features: !0}))) : c && (s.trigger("Destroy"), h.call(s, A, function (e) {
                                                    e ? (s.runtime = u.getInfo(p()).type, s.trigger("Init", {runtime: s.runtime}), s.trigger("PostInit")) : s.trigger("Error", {
                                                        code: l.INIT_ERROR,
                                                        message: l.translate("Init error.")
                                                    })
                                                }))
                                        }

                                        function x(e, t) {
                                            if (e.settings.unique_names) {
                                                var i = t.name.match(/\.([^.]+)$/), n = "part";
                                                i && (n = i[1]), t.target_name = t.id + "." + n
                                            }
                                        }

                                        function y(e, i) {
                                            function n() {
                                                c-- > 0 ? r(o, 1e3) : (i.loaded = p, e.trigger("Error", {
                                                    code: l.HTTP_ERROR,
                                                    message: l.translate("HTTP Error."),
                                                    file: i,
                                                    response: O.responseText,
                                                    status: O.status,
                                                    responseHeaders: O.getAllResponseHeaders()
                                                }))
                                            }

                                            function o() {
                                                var f, m, h, g = {};
                                                i.status === l.UPLOADING && e.state !== l.STOPPED && (e.settings.send_file_name && (g.name = i.target_name || i.name), u && d.chunks && s.size > u ? (h = Math.min(u, s.size - p), f = s.slice(p, p + h)) : (h = s.size, f = s), u && d.chunks && (e.settings.send_chunk_number ? (g.chunk = Math.ceil(p / u), g.chunks = Math.ceil(s.size / u)) : (g.offset = p, g.total = s.size)), O = new t.xhr.XMLHttpRequest, O.upload && (O.upload.onprogress = function (t) {
                                                    i.loaded = Math.min(i.size, p + t.loaded), e.trigger("UploadProgress", i)
                                                }), O.onload = function () {
                                                    return O.status >= 400 ? void n() : (c = e.settings.max_retries, h < s.size ? (f.destroy(), p += h, i.loaded = Math.min(p, s.size), e.trigger("ChunkUploaded", i, {
                                                        offset: i.loaded,
                                                        total: s.size,
                                                        response: O.responseText,
                                                        status: O.status,
                                                        responseHeaders: O.getAllResponseHeaders()
                                                    }), "Android Browser" === l.ua.browser && e.trigger("UploadProgress", i)) : i.loaded = i.size, f = m = null, void(!p || p >= s.size ? (i.size != i.origSize && (s.destroy(), s = null), e.trigger("UploadProgress", i), i.status = l.DONE, e.trigger("FileUploaded", i, {
                                                        response: O.responseText,
                                                        status: O.status,
                                                        responseHeaders: O.getAllResponseHeaders()
                                                    })) : r(o, 1)))
                                                }, O.onerror = function () {
                                                    n()
                                                }, O.onloadend = function () {
                                                    this.destroy(), O = null
                                                }, e.settings.multipart && d.multipart ? (O.open("post", a, !0), l.each(e.settings.headers, function (e, t) {
                                                    O.setRequestHeader(t, e)
                                                }), m = new t.xhr.FormData, l.each(l.extend(g, e.settings.multipart_params), function (e, t) {
                                                    m.append(t, e)
                                                }), m.append(e.settings.file_data_name, f), O.send(m, {
                                                    runtime_order: e.settings.runtimes,
                                                    required_caps: e.settings.required_features,
                                                    preferred_caps: N,
                                                    swf_url: e.settings.flash_swf_url,
                                                    xap_url: e.settings.silverlight_xap_url
                                                })) : (a = l.buildUrl(e.settings.url, l.extend(g, e.settings.multipart_params)), O.open("post", a, !0), l.each(e.settings.headers, function (e, t) {
                                                    O.setRequestHeader(t, e)
                                                }), O.hasRequestHeader("Content-Type") || O.setRequestHeader("Content-Type", "application/octet-stream"), O.send(f, {
                                                    runtime_order: e.settings.runtimes,
                                                    required_caps: e.settings.required_features,
                                                    preferred_caps: N,
                                                    swf_url: e.settings.flash_swf_url,
                                                    xap_url: e.settings.silverlight_xap_url
                                                })))
                                            }

                                            var s, a = e.settings.url, u = e.settings.chunk_size,
                                                c = e.settings.max_retries, d = e.features, p = 0;
                                            i.loaded && (p = i.loaded = u ? u * Math.floor(i.loaded / u) : 0), s = i.getSource(), !l.isEmptyObj(e.settings.resize) && f(s, "send_binary_string") && l.inArray(s.type, ["image/jpeg", "image/png"]) !== -1 ? g.call(this, s, e.settings.resize, function (e) {
                                                s = e, i.size = e.size, o()
                                            }) : o()
                                        }

                                        function _(e, t) {
                                            c(t)
                                        }

                                        function w(e) {
                                            if (e.state == l.STARTED) S = +new Date; else if (e.state == l.STOPPED)for (var t = e.files.length - 1; t >= 0; t--)e.files[t].status == l.UPLOADING && (e.files[t].status = l.QUEUED, d())
                                        }

                                        function b() {
                                            O && O.abort()
                                        }

                                        function E(e) {
                                            d(), r(function () {
                                                s.call(e)
                                            }, 1)
                                        }

                                        function R(e, t) {
                                            t.code === l.INIT_ERROR ? e.destroy() : t.code === l.HTTP_ERROR && (t.file.status = l.FAILED, c(t.file), e.state == l.STARTED && (e.trigger("CancelUpload"), r(function () {
                                                    s.call(e)
                                                }, 1)))
                                        }

                                        function I(e) {
                                            e.stop(), l.each(C, function (e) {
                                                e.destroy()
                                            }), C = [], F.length && (l.each(F, function (e) {
                                                e.destroy()
                                            }), F = []), M.length && (l.each(M, function (e) {
                                                e.destroy()
                                            }), M = []), N = {}, L = !1, S = O = null, T.reset()
                                        }

                                        var A, S, T, O, D = l.guid(), C = [], N = {}, F = [], M = [], L = !1;
                                        A = {
                                            runtimes: u.order,
                                            max_retries: 0,
                                            chunk_size: 0,
                                            multipart: !0,
                                            multi_selection: !0,
                                            file_data_name: "file",
                                            flash_swf_url: "js/Moxie.swf",
                                            silverlight_xap_url: "js/Moxie.xap",
                                            filters: {mime_types: [], prevent_duplicates: !1, max_file_size: 0},
                                            resize: !1,
                                            send_file_name: !0,
                                            send_chunk_number: !0
                                        }, v.call(this, e, null, !0), T = new l.QueueProgress, l.extend(this, {
                                            id: D,
                                            uid: D,
                                            state: l.STOPPED,
                                            features: {},
                                            runtime: null,
                                            files: C,
                                            settings: A,
                                            total: T,
                                            init: function () {
                                                var e, t, i = this;
                                                return e = i.getOption("preinit"), "function" == typeof e ? e(i) : l.each(e, function (e, t) {
                                                    i.bind(t, e)
                                                }), m.call(i), l.each(["container", "browse_button", "drop_element"], function (e) {
                                                    if (null === i.getOption(e))return t = {
                                                        code: l.INIT_ERROR,
                                                        message: l.sprintf(l.translate("%s specified, but cannot be found."), e)
                                                    }, !1
                                                }), t ? i.trigger("Error", t) : A.browse_button || A.drop_element ? void h.call(i, A, function (e) {
                                                    var t = i.getOption("init");
                                                    "function" == typeof t ? t(i) : l.each(t, function (e, t) {
                                                        i.bind(t, e)
                                                    }), e ? (i.runtime = u.getInfo(p()).type, i.trigger("Init", {runtime: i.runtime}), i.trigger("PostInit")) : i.trigger("Error", {
                                                        code: l.INIT_ERROR,
                                                        message: l.translate("Init error.")
                                                    })
                                                }) : i.trigger("Error", {
                                                    code: l.INIT_ERROR,
                                                    message: l.translate("You must specify either browse_button or drop_element.")
                                                })
                                            },
                                            setOption: function (e, t) {
                                                v.call(this, e, t, !this.runtime)
                                            },
                                            getOption: function (e) {
                                                return e ? A[e] : A
                                            },
                                            refresh: function () {
                                                F.length && l.each(F, function (e) {
                                                    e.trigger("Refresh")
                                                }), this.trigger("Refresh")
                                            },
                                            start: function () {
                                                this.state != l.STARTED && (this.state = l.STARTED, this.trigger("StateChanged"), s.call(this))
                                            },
                                            stop: function () {
                                                this.state != l.STOPPED && (this.state = l.STOPPED, this.trigger("StateChanged"), this.trigger("CancelUpload"))
                                            },
                                            disableBrowse: function () {
                                                L = arguments[0] === i || arguments[0], F.length && l.each(F, function (e) {
                                                    e.disable(L)
                                                }), this.trigger("DisableBrowse", L)
                                            },
                                            getFile: function (e) {
                                                var t;
                                                for (t = C.length - 1; t >= 0; t--)if (C[t].id === e)return C[t]
                                            },
                                            addFile: function (e, i) {
                                                function n(e, t) {
                                                    var i = [];
                                                    l.each(u.settings.filters, function (t, n) {
                                                        o[n] && i.push(function (i) {
                                                            o[n].call(u, t, e, function (e) {
                                                                i(!e)
                                                            })
                                                        })
                                                    }), l.inSeries(i, t)
                                                }

                                                function s(e) {
                                                    var o = l.typeOf(e);
                                                    if (e instanceof t.file.File) {
                                                        if (!e.ruid && !e.isDetached()) {
                                                            if (!a)return !1;
                                                            e.ruid = a, e.connectRuntime(a)
                                                        }
                                                        s(new l.File(e))
                                                    } else e instanceof t.file.Blob ? (s(e.getSource()), e.destroy()) : e instanceof l.File ? (i && (e.name = i), c.push(function (t) {
                                                        n(e, function (i) {
                                                            i || (C.push(e), d.push(e), u.trigger("FileFiltered", e)), r(t, 1)
                                                        })
                                                    })) : l.inArray(o, ["file", "blob"]) !== -1 ? s(new t.file.File(null, e)) : "node" === o && "filelist" === l.typeOf(e.files) ? l.each(e.files, s) : "array" === o && (i = null, l.each(e, s))
                                                }

                                                var a, u = this, c = [], d = [];
                                                a = p(), s(e), c.length && l.inSeries(c, function () {
                                                    d.length && u.trigger("FilesAdded", d)
                                                })
                                            },
                                            removeFile: function (e) {
                                                for (var t = "string" == typeof e ? e : e.id,
                                                         i = C.length - 1; i >= 0; i--)if (C[i].id === t)return this.splice(i, 1)[0]
                                            },
                                            splice: function (e, t) {
                                                var n = C.splice(e === i ? 0 : e, t === i ? C.length : t), r = !1;
                                                return this.state == l.STARTED && (l.each(n, function (e) {
                                                    if (e.status === l.UPLOADING)return r = !0, !1
                                                }), r && this.stop()), this.trigger("FilesRemoved", n), l.each(n, function (e) {
                                                    e.destroy()
                                                }), r && this.start(), n
                                            },
                                            dispatchEvent: function (e) {
                                                var t, i;
                                                if (e = e.toLowerCase(), t = this.hasEventListener(e)) {
                                                    t.sort(function (e, t) {
                                                        return t.priority - e.priority
                                                    }), i = [].slice.call(arguments), i.shift(), i.unshift(this);
                                                    for (var n = 0; n < t.length; n++)if (t[n].fn.apply(t[n].scope, i) === !1)return !1
                                                }
                                                return !0
                                            },
                                            bind: function (e, t, i, n) {
                                                l.Uploader.prototype.bind.call(this, e, t, n, i)
                                            },
                                            destroy: function () {
                                                this.trigger("Destroy"), A = T = null, this.unbindAll()
                                            }
                                        })
                                    }, l.Uploader.prototype = t.core.EventTarget.instance, l.File = function () {
                                        function e(e) {
                                            l.extend(this, {
                                                id: l.guid(),
                                                name: e.name || e.fileName,
                                                type: e.type || "",
                                                size: e.size || e.fileSize,
                                                origSize: e.size || e.fileSize,
                                                loaded: 0,
                                                percent: 0,
                                                status: l.QUEUED,
                                                lastModifiedDate: e.lastModifiedDate || (new Date).toLocaleString(),
                                                getNative: function () {
                                                    var e = this.getSource().getSource();
                                                    return l.inArray(l.typeOf(e), ["blob", "file"]) !== -1 ? e : null
                                                },
                                                getSource: function () {
                                                    return t[this.id] ? t[this.id] : null
                                                },
                                                destroy: function () {
                                                    var e = this.getSource();
                                                    e && (e.destroy(), delete t[this.id])
                                                }
                                            }), t[this.id] = e
                                        }

                                        var t = {};
                                        return e
                                    }(), l.QueueProgress = function () {
                                        var e = this;
                                        e.size = 0, e.loaded = 0, e.uploaded = 0, e.failed = 0, e.queued = 0, e.percent = 0, e.bytesPerSec = 0, e.reset = function () {
                                            e.size = e.loaded = e.uploaded = e.failed = e.queued = e.percent = e.bytesPerSec = 0
                                        }
                                    }, e.plupload = l
                                }(this, e)
                            })
                        }
                    })
                })
            }).call(t, i(32)(e))
        }, 31: function (e, t) {
            "use strict";
            e.exports = function () {
                var e = [];
                return e.toString = function () {
                    for (var e = [], t = 0; t < this.length; t++) {
                        var i = this[t];
                        i[2] ? e.push("@media " + i[2] + "{" + i[1] + "}") : e.push(i[1])
                    }
                    return e.join("")
                }, e.i = function (t, i) {
                    "string" == typeof t && (t = [[null, t, ""]]);
                    for (var n = {}, r = 0; r < this.length; r++) {
                        var o = this[r][0];
                        "number" == typeof o && (n[o] = !0)
                    }
                    for (r = 0; r < t.length; r++) {
                        var s = t[r];
                        "number" == typeof s[0] && n[s[0]] || (i && !s[2] ? s[2] = i : i && (s[2] = "(" + s[2] + ") and (" + i + ")"), e.push(s))
                    }
                }, e
            }
        }, 32: function (e, t) {
            "use strict";
            e.exports = function (e) {
                return e.webpackPolyfill || (e.deprecate = function () {
                }, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
            }
        }, 33: function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), i(12), t.default = {
                name: "baseUpload",
                data: function () {
                    return {
                        container_id: "container" + this.getRandomNum(1, 1e7),
                        pickfiles_id: "pickfiles" + this.getRandomNum(1, 1e7),
                        progress_id: "progress" + this.getRandomNum(1, 1e7),
                        base_img_url: ""
                    }
                },
                components: {},
                props: ["parameter", "success_data"],
                watch: {
                    success_data: function (e, t) {
                        var i = this;
                        i.base_img_url = e.url
                    }
                },
                methods: {
                    getRandomNum: function (e, t) {
                        var i = t - e, n = Math.random();
                        return e + Math.round(n * i)
                    }, delImg: function () {
                        var e = this;
                        e.base_img_url = "", e.$delete(e.success_data, "origin_filename"), e.$delete(e.success_data, "path"), e.$delete(e.success_data, "upload_id"), e.$delete(e.success_data, "url")
                    }
                },
                mounted: function () {
                    var e = this;
                    new upload({
                        container: e.container_id,
                        browse_button: e.pickfiles_id,
                        progress: e.progress_id,
                        type: e.parameter.type,
                        setting: e.parameter.setting,
                        chunk_size: e.parameter.chunk_size,
                        group: e.parameter.group,
                        custom: e.parameter.custom,
                        url: e.parameter.url,
                        callback: function (t) {
                            e.$set(e.success_data, "origin_filename", t.data.origin_filename), e.$set(e.success_data, "path", t.data.path), e.$set(e.success_data, "upload_id", t.data.upload_id), e.$set(e.success_data, "url", t.data.url)
                        }
                    })
                },
                destroyed: function () {
                }
            }
        }, 36: function (e, t, i) {
            var n, r;
            i(11), n = i(33);
            var o = i(37);
            r = n = n || {}, "object" != typeof n.default && "function" != typeof n.default || (r = n = n.default), "function" == typeof r && (r = r.options), r.render = o.render, r.staticRenderFns = o.staticRenderFns, e.exports = n
        }, 37: function (e, t) {
            e.exports = {
                render: function () {
                    var e = this, t = e.$createElement, i = e._self._c || t;
                    return i("div", {attrs: {i: "prelook_uploader"}}, [i("div", {
                        staticClass: "prelook-wrapper clearfix pb10",
                        attrs: {id: e.container_id}
                    }, [i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.base_img_url,
                            expression: "base_img_url"
                        }], staticClass: "prelook-inner"
                    }, [i("span", {
                        staticClass: "circle-box",
                        on: {click: e.delImg}
                    }, [i("i", {staticClass: "circle"})]), e._v(" "), i("a", {
                        staticClass: "fancybox prelook-block",
                        attrs: {rel: "group"}
                    }, [i("img", {attrs: {src: e.base_img_url}})])]), e._v(" "), i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.base_img_url,
                            expression: "!base_img_url"
                        }], staticClass: "form-groups"
                    }, [i("div", {staticClass: "col-10"}, [i("div", {
                        staticClass: "upload-wrapper",
                        attrs: {id: e.pickfiles_id}
                    }, [i("div", {
                        staticClass: "progress text-center",
                        attrs: {id: e.progress_id}
                    }), e._v(" "), i("i", {staticClass: "fa fa-plus f16"})])])])])])
                }, staticRenderFns: []
            }
        }
    })
});