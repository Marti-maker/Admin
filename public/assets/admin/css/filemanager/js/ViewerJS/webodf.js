/*

 This is a generated file. DO NOT EDIT.

 Copyright (C) 2010-2015 KO GmbH <copyright@kogmbh.com>

 @licstart
 This file is the compiled version of the WebODF library.

 WebODF is free software: you can redistribute it and/or modify it
 under the terms of the GNU Affero General Public License (GNU AGPL)
 as published by the Free Software Foundation, either version 3 of
 the License, or (at your option) any later version.

 WebODF is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with WebODF.  If not, see <http://www.gnu.org/licenses/>.
 @licend

 @source: http://www.webodf.org/
 @source: https://github.com/kogmbh/WebODF/
*/
var webodf_version = "0.5.5";

function Runtime() {}
Runtime.prototype.getVariable = function(f) {};
Runtime.prototype.toJson = function(f) {};
Runtime.prototype.fromJson = function(f) {};
Runtime.prototype.byteArrayFromString = function(f, k) {};
Runtime.prototype.byteArrayToString = function(f, k) {};
Runtime.prototype.read = function(f, k, a, d) {};
Runtime.prototype.readFile = function(f, k, a) {};
Runtime.prototype.readFileSync = function(f, k) {};
Runtime.prototype.loadXML = function(f, k) {};
Runtime.prototype.writeFile = function(f, k, a) {};
Runtime.prototype.deleteFile = function(f, k) {};
Runtime.prototype.log = function(f, k) {};
Runtime.prototype.setTimeout = function(f, k) {};
Runtime.prototype.clearTimeout = function(f) {};
Runtime.prototype.libraryPaths = function() {};
Runtime.prototype.currentDirectory = function() {};
Runtime.prototype.setCurrentDirectory = function(f) {};
Runtime.prototype.type = function() {};
Runtime.prototype.getDOMImplementation = function() {};
Runtime.prototype.parseXML = function(f) {};
Runtime.prototype.exit = function(f) {};
Runtime.prototype.getWindow = function() {};
Runtime.prototype.requestAnimationFrame = function(f) {};
Runtime.prototype.cancelAnimationFrame = function(f) {};
Runtime.prototype.assert = function(f, k) {};
var IS_COMPILED_CODE = !0;
Runtime.byteArrayToString = function(f, k) {
    function a(a) {
        var d = "",
            b, m = a.length;
        for (b = 0; b < m; b += 1) d += String.fromCharCode(a[b] & 255);
        return d
    }

    function d(a) {
        var d = "",
            b, m = a.length,
            l = [],
            r, c, e, p;
        for (b = 0; b < m; b += 1) r = a[b], 128 > r ? l.push(r) : (b += 1, c = a[b], 194 <= r && 224 > r ? l.push((r & 31) << 6 | c & 63) : (b += 1, e = a[b], 224 <= r && 240 > r ? l.push((r & 15) << 12 | (c & 63) << 6 | e & 63) : (b += 1, p = a[b], 240 <= r && 245 > r && (r = (r & 7) << 18 | (c & 63) << 12 | (e & 63) << 6 | p & 63, r -= 65536, l.push((r >> 10) + 55296, (r & 1023) + 56320))))), 1E3 <= l.length && (d += String.fromCharCode.apply(null,
            l), l.length = 0);
        return d + String.fromCharCode.apply(null, l)
    }
    var b;
    "utf8" === k ? b = d(f) : ("binary" !== k && this.log("Unsupported encoding: " + k), b = a(f));
    return b
};
Runtime.getVariable = function(f) {
    try {
        return eval(f)
    } catch (k) {}
};
Runtime.toJson = function(f) {
    return JSON.stringify(f)
};
Runtime.fromJson = function(f) {
    return JSON.parse(f)
};
Runtime.getFunctionName = function(f) {
    return void 0 === f.name ? (f = /function\s+(\w+)/.exec(f)) && f[1] : f.name
};
Runtime.assert = function(f, k) {
    if (!f) throw this.log("alert", "ASSERTION FAILED:\n" + k), Error(k);
};

function BrowserRuntime(f) {
    function k(a) {
        var d = a.length,
            c, e, p = 0;
        for (c = 0; c < d; c += 1) e = a.charCodeAt(c), p += 1 + (128 < e) + (2048 < e), 55040 < e && 57344 > e && (p += 1, c += 1);
        return p
    }

    function a(a, d, c) {
        var e = a.length,
            p, g;
        d = new Uint8Array(new ArrayBuffer(d));
        c ? (d[0] = 239, d[1] = 187, d[2] = 191, g = 3) : g = 0;
        for (c = 0; c < e; c += 1) p = a.charCodeAt(c), 128 > p ? (d[g] = p, g += 1) : 2048 > p ? (d[g] = 192 | p >>> 6, d[g + 1] = 128 | p & 63, g += 2) : 55040 >= p || 57344 <= p ? (d[g] = 224 | p >>> 12 & 15, d[g + 1] = 128 | p >>> 6 & 63, d[g + 2] = 128 | p & 63, g += 3) : (c += 1, p = (p - 55296 << 10 | a.charCodeAt(c) - 56320) + 65536,
            d[g] = 240 | p >>> 18 & 7, d[g + 1] = 128 | p >>> 12 & 63, d[g + 2] = 128 | p >>> 6 & 63, d[g + 3] = 128 | p & 63, g += 4);
        return d
    }

    function d(d) {
        var a = d.length,
            c = new Uint8Array(new ArrayBuffer(a)),
            e;
        for (e = 0; e < a; e += 1) c[e] = d.charCodeAt(e) & 255;
        return c
    }

    function b(d, a) {
        var c, e, p;
        void 0 !== a ? p = d : a = d;
        f ? (e = f.ownerDocument, p && (c = e.createElement("span"), c.className = p, c.appendChild(e.createTextNode(p)), f.appendChild(c), f.appendChild(e.createTextNode(" "))), c = e.createElement("span"), 0 < a.length && "<" === a[0] ? c.innerHTML = a : c.appendChild(e.createTextNode(a)),
            f.appendChild(c), f.appendChild(e.createElement("br"))) : console && console.log(a);
        m.enableAlerts && "alert" === p && alert(a)
    }

    function h(b, r, c) {
        if (0 !== c.status || c.responseText)
            if (200 === c.status || 0 === c.status) {
                if (c.response && "string" !== typeof c.response) "binary" === r ? (c = c.response, c = new Uint8Array(c)) : c = String(c.response);
                else if ("binary" === r)
                    if (null !== c.responseBody && "undefined" !== String(typeof VBArray)) {
                        c = (new VBArray(c.responseBody)).toArray();
                        var e = c.length;
                        r = new Uint8Array(new ArrayBuffer(e));
                        for (b = 0; b <
                            e; b += 1) r[b] = c[b];
                        c = r
                    } else {
                        (b = c.getResponseHeader("Content-Length")) && (b = parseInt(b, 10));
                        if (b && b !== c.responseText.length) a: {
                            e = c.responseText;r = !1;
                            var p = k(e);
                            if ("number" === typeof b) {
                                if (b !== p && b !== p + 3) {
                                    e = void 0;
                                    break a
                                }
                                r = p + 3 === b;
                                p = b
                            }
                            e = a(e, p, r)
                        }
                        void 0 === e && (e = d(c.responseText));
                        c = e
                    }
                else c = c.responseText;
                c = {
                    err: null,
                    data: c
                }
            } else c = {
                err: c.responseText || c.statusText,
                data: null
            };
        else c = {
            err: "File " + b + " is empty.",
            data: null
        };
        return c
    }

    function n(a, d, c) {
        var e = new XMLHttpRequest;
        e.open("GET", a, c);
        e.overrideMimeType &&
            ("binary" !== d ? e.overrideMimeType("text/plain; charset=" + d) : e.overrideMimeType("text/plain; charset=x-user-defined"));
        return e
    }

    function q(a, d, c) {
        var e = n(a, d, !0);
        e.onreadystatechange = function() {
            var g;
            4 === e.readyState && (g = h(a, d, e), c(g.err, g.data))
        };
        try {
            e.send(null)
        } catch (p) {
            c(p.message, null)
        }
    }
    var m = this;
    this.byteArrayFromString = function(b, r) {
        var c;
        "utf8" === r ? c = a(b, k(b), !1) : ("binary" !== r && m.log("unknown encoding: " + r), c = d(b));
        return c
    };
    this.byteArrayToString = Runtime.byteArrayToString;
    this.getVariable =
        Runtime.getVariable;
    this.fromJson = Runtime.fromJson;
    this.toJson = Runtime.toJson;
    this.readFile = q;
    this.read = function(a, d, c, e) {
        q(a, "binary", function(p, g) {
            var a = null;
            if (g) {
                if ("string" === typeof g) throw "This should not happen.";
                a = g.subarray(d, d + c)
            }
            e(p, a)
        })
    };
    this.readFileSync = function(a, d) {
        var c = n(a, d, !1),
            e;
        try {
            c.send(null);
            e = h(a, d, c);
            if (e.err) throw e.err;
            if (null === e.data) throw "No data read from " + a + ".";
        } catch (p) {
            throw p;
        }
        return e.data
    };
    this.writeFile = function(a, d, c) {
        var e = new XMLHttpRequest,
            p;
        e.open("PUT",
            a, !0);
        e.onreadystatechange = function() {
            4 === e.readyState && (0 !== e.status || e.responseText ? 200 <= e.status && 300 > e.status || 0 === e.status ? c(null) : c("Status " + String(e.status) + ": " + e.responseText || e.statusText) : c("File " + a + " is empty."))
        };
        p = d.buffer && !e.sendAsBinary ? d.buffer : m.byteArrayToString(d, "binary");
        try {
            e.sendAsBinary ? e.sendAsBinary(p) : e.send(p)
        } catch (g) {
            m.log("HUH? " + g + " " + d), c(g.message)
        }
    };
    this.deleteFile = function(a, d) {
        var c = new XMLHttpRequest;
        c.open("DELETE", a, !0);
        c.onreadystatechange = function() {
            4 ===
                c.readyState && (200 > c.status && 300 <= c.status ? d(c.responseText) : d(null))
        };
        c.send(null)
    };
    this.loadXML = function(a, d) {
        var c = new XMLHttpRequest;
        c.open("GET", a, !0);
        c.overrideMimeType && c.overrideMimeType("text/xml");
        c.onreadystatechange = function() {
            4 === c.readyState && (0 !== c.status || c.responseText ? 200 === c.status || 0 === c.status ? d(null, c.responseXML) : d(c.responseText, null) : d("File " + a + " is empty.", null))
        };
        try {
            c.send(null)
        } catch (e) {
            d(e.message, null)
        }
    };
    this.log = b;
    this.enableAlerts = !0;
    this.assert = Runtime.assert;
    this.setTimeout =
        function(d, a) {
            return setTimeout(function() {
                d()
            }, a)
        };
    this.clearTimeout = function(d) {
        clearTimeout(d)
    };
    this.libraryPaths = function() {
        return ["lib"]
    };
    this.setCurrentDirectory = function() {};
    this.currentDirectory = function() {
        return ""
    };
    this.type = function() {
        return "BrowserRuntime"
    };
    this.getDOMImplementation = function() {
        return window.document.implementation
    };
    this.parseXML = function(d) {
        return (new DOMParser).parseFromString(d, "text/xml")
    };
    this.exit = function(d) {
        b("Calling exit with code " + String(d) + ", but exit() is not implemented.")
    };
    this.getWindow = function() {
        return window
    };
    this.requestAnimationFrame = function(d) {
        var a = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame,
            c = 0;
        if (a) a.bind(window), c = a(d);
        else return setTimeout(d, 15);
        return c
    };
    this.cancelAnimationFrame = function(d) {
        var a = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame;
        a ? (a.bind(window), a(d)) : clearTimeout(d)
    }
}

function NodeJSRuntime() {
    function f(d) {
        var a = d.length,
            b, c = new Uint8Array(new ArrayBuffer(a));
        for (b = 0; b < a; b += 1) c[b] = d[b];
        return c
    }

    function k(a, q, n) {
        function c(c, p) {
            if (c) return n(c, null);
            if (!p) return n("No data for " + a + ".", null);
            if ("string" === typeof p) return n(c, p);
            n(c, f(p))
        }
        a = b.resolve(h, a);
        "binary" !== q ? d.readFile(a, q, c) : d.readFile(a, null, c)
    }
    var a = this,
        d = require("fs"),
        b = require("path"),
        h = "",
        n, q;
    this.byteArrayFromString = function(a, d) {
        var b = new Buffer(a, d),
            c, e = b.length,
            p = new Uint8Array(new ArrayBuffer(e));
        for (c = 0; c < e; c += 1) p[c] = b[c];
        return p
    };
    this.byteArrayToString = Runtime.byteArrayToString;
    this.getVariable = Runtime.getVariable;
    this.fromJson = Runtime.fromJson;
    this.toJson = Runtime.toJson;
    this.readFile = k;
    this.loadXML = function(d, b) {
        k(d, "utf-8", function(q, c) {
            if (q) return b(q, null);
            if (!c) return b("No data for " + d + ".", null);
            b(null, a.parseXML(c))
        })
    };
    this.writeFile = function(a, q, n) {
        q = new Buffer(q);
        a = b.resolve(h, a);
        d.writeFile(a, q, "binary", function(c) {
            n(c || null)
        })
    };
    this.deleteFile = function(a, q) {
        a = b.resolve(h, a);
        d.unlink(a, q)
    };
    this.read = function(a, q, n, c) {
        a = b.resolve(h, a);
        d.open(a, "r+", 666, function(e, p) {
            if (e) c(e, null);
            else {
                var g = new Buffer(n);
                d.read(p, g, 0, n, q, function(e) {
                    d.close(p);
                    c(e, f(g))
                })
            }
        })
    };
    this.readFileSync = function(a, b) {
        var q;
        q = d.readFileSync(a, "binary" === b ? null : b);
        if (null === q) throw "File " + a + " could not be read.";
        "binary" === b && (q = f(q));
        return q
    };
    this.log = function(a, d) {
        var b;
        void 0 !== d ? b = a : d = a;
        "alert" === b && process.stderr.write("\n!!!!! ALERT !!!!!\n");
        process.stderr.write(d + "\n");
        "alert" === b && process.stderr.write("!!!!! ALERT !!!!!\n")
    };
    this.assert = Runtime.assert;
    this.setTimeout = function(a, d) {
        return setTimeout(function() {
            a()
        }, d)
    };
    this.clearTimeout = function(a) {
        clearTimeout(a)
    };
    this.libraryPaths = function() {
        return [__dirname]
    };
    this.setCurrentDirectory = function(a) {
        h = a
    };
    this.currentDirectory = function() {
        return h
    };
    this.type = function() {
        return "NodeJSRuntime"
    };
    this.getDOMImplementation = function() {
        return q
    };
    this.parseXML = function(a) {
        return n.parseFromString(a, "text/xml")
    };
    this.exit = process.exit;
    this.getWindow = function() {
        return null
    };
    this.requestAnimationFrame =
        function(a) {
            return setTimeout(a, 15)
        };
    this.cancelAnimationFrame = function(a) {
        clearTimeout(a)
    };
    n = new(require("xmldom").DOMParser);
    q = a.parseXML("<a/>").implementation
}

function RhinoRuntime() {
    var f = this,
        k = {},
        a = k.javax.xml.parsers.DocumentBuilderFactory.newInstance(),
        d, b, h = "";
    a.setValidating(!1);
    a.setNamespaceAware(!0);
    a.setExpandEntityReferences(!1);
    a.setSchema(null);
    b = k.org.xml.sax.EntityResolver({
        resolveEntity: function(a, d) {
            var b = new k.java.io.FileReader(d);
            return new k.org.xml.sax.InputSource(b)
        }
    });
    d = a.newDocumentBuilder();
    d.setEntityResolver(b);
    this.byteArrayFromString = function(a, d) {
        var b, h = a.length,
            r = new Uint8Array(new ArrayBuffer(h));
        for (b = 0; b < h; b += 1) r[b] =
            a.charCodeAt(b) & 255;
        return r
    };
    this.byteArrayToString = Runtime.byteArrayToString;
    this.getVariable = Runtime.getVariable;
    this.fromJson = Runtime.fromJson;
    this.toJson = Runtime.toJson;
    this.loadXML = function(a, b) {
        var h = new k.java.io.File(a),
            l = null;
        try {
            l = d.parse(h)
        } catch (r) {
            return print(r), b(r, null)
        }
        b(null, l)
    };
    this.readFile = function(a, d, b) {
        h && (a = h + "/" + a);
        var l = new k.java.io.File(a),
            r = "binary" === d ? "latin1" : d;
        l.isFile() ? ((a = readFile(a, r)) && "binary" === d && (a = f.byteArrayFromString(a, "binary")), b(null, a)) : b(a + " is not a file.",
            null)
    };
    this.writeFile = function(a, d, b) {
        h && (a = h + "/" + a);
        a = new k.java.io.FileOutputStream(a);
        var l, r = d.length;
        for (l = 0; l < r; l += 1) a.write(d[l]);
        a.close();
        b(null)
    };
    this.deleteFile = function(a, d) {
        h && (a = h + "/" + a);
        var b = new k.java.io.File(a),
            l = a + Math.random(),
            l = new k.java.io.File(l);
        b.rename(l) ? (l.deleteOnExit(), d(null)) : d("Could not delete " + a)
    };
    this.read = function(a, d, b, l) {
        h && (a = h + "/" + a);
        var r;
        r = a;
        var c = "binary";
        (new k.java.io.File(r)).isFile() ? ("binary" === c && (c = "latin1"), r = readFile(r, c)) : r = null;
        r ? l(null, this.byteArrayFromString(r.substring(d,
            d + b), "binary")) : l("Cannot read " + a, null)
    };
    this.readFileSync = function(a, d) {
        if (!d) return "";
        var b = readFile(a, d);
        if (null === b) throw "File could not be read.";
        return b
    };
    this.log = function(a, d) {
        var b;
        void 0 !== d ? b = a : d = a;
        "alert" === b && print("\n!!!!! ALERT !!!!!");
        print(d);
        "alert" === b && print("!!!!! ALERT !!!!!")
    };
    this.assert = Runtime.assert;
    this.setTimeout = function(a) {
        a();
        return 0
    };
    this.clearTimeout = function() {};
    this.libraryPaths = function() {
        return ["lib"]
    };
    this.setCurrentDirectory = function(a) {
        h = a
    };
    this.currentDirectory =
        function() {
            return h
        };
    this.type = function() {
        return "RhinoRuntime"
    };
    this.getDOMImplementation = function() {
        return d.getDOMImplementation()
    };
    this.parseXML = function(a) {
        a = new k.java.io.StringReader(a);
        a = new k.org.xml.sax.InputSource(a);
        return d.parse(a)
    };
    this.exit = quit;
    this.getWindow = function() {
        return null
    };
    this.requestAnimationFrame = function(a) {
        a();
        return 0
    };
    this.cancelAnimationFrame = function() {}
}
Runtime.create = function() {
    return "undefined" !== String(typeof window) ? new BrowserRuntime(window.document.getElementById("logoutput")) : "undefined" !== String(typeof require) ? new NodeJSRuntime : new RhinoRuntime
};
var runtime = Runtime.create(),
    core = {},
    gui = {},
    xmldom = {},
    odf = {},
    ops = {},
    webodf = {};
(function() {
    webodf.Version = "undefined" !== String(typeof webodf_version) ? webodf_version : "From Source"
})();
(function() {
    function f(a, d, b) {
        var h = a + "/manifest.json",
            c, e;
        runtime.log("Loading manifest: " + h);
        try {
            c = runtime.readFileSync(h, "utf-8")
        } catch (p) {
            if (b) runtime.log("No loadable manifest found.");
            else throw console.log(String(p)), p;
            return
        }
        b = JSON.parse(c);
        for (e in b) b.hasOwnProperty(e) && (d[e] = {
            dir: a,
            deps: b[e]
        })
    }

    function k(a, d, b) {
        function h(g) {
            if (!p[g] && !b(g)) {
                if (e[g]) throw "Circular dependency detected for " + g + ".";
                e[g] = !0;
                if (!d[g]) throw "Missing dependency information for class " + g + ".";
                var a = d[g],
                    q = a.deps,
                    n, f = q.length;
                for (n = 0; n < f; n += 1) h(q[n]);
                e[g] = !1;
                p[g] = !0;
                c.push(a.dir + "/" + g.replace(".", "/") + ".js")
            }
        }
        var c = [],
            e = {},
            p = {};
        a.forEach(h);
        return c
    }

    function a(a, d) {
        return d + ("\n//# sourceURL=" + a)
    }

    function d(d) {
        var b, h;
        for (b = 0; b < d.length; b += 1) h = runtime.readFileSync(d[b], "utf-8"), h = a(d[b], h), eval(h)
    }

    function b(a) {
        a = a.split(".");
        var d, b = n,
            h = a.length;
        for (d = 0; d < h; d += 1) {
            if (!b.hasOwnProperty(a[d])) return !1;
            b = b[a[d]]
        }
        return !0
    }
    var h, n = {
        core: core,
        gui: gui,
        xmldom: xmldom,
        odf: odf,
        ops: ops
    };
    runtime.loadClasses = function(a,
        n) {
        if (IS_COMPILED_CODE || 0 === a.length) return n && n();
        var l;
        if (!(l = h)) {
            l = [];
            var r = runtime.libraryPaths(),
                c;
            runtime.currentDirectory() && -1 === r.indexOf(runtime.currentDirectory()) && f(runtime.currentDirectory(), l, !0);
            for (c = 0; c < r.length; c += 1) f(r[c], l)
        }
        h = l;
        a = k(a, h, b);
        if (0 === a.length) return n && n();
        if ("BrowserRuntime" === runtime.type() && n) {
            l = a;
            r = document.currentScript || document.documentElement.lastChild;
            c = document.createDocumentFragment();
            var e, p;
            for (p = 0; p < l.length; p += 1) e = document.createElement("script"), e.type =
                "text/javascript", e.charset = "utf-8", e.async = !1, e.setAttribute("src", l[p]), c.appendChild(e);
            n && (e.onload = n);
            r.parentNode.insertBefore(c, r)
        } else d(a), n && n()
    };
    runtime.loadClass = function(a, d) {
        runtime.loadClasses([a], d)
    }
})();
(function() {
    var f = function(f) {
        return f
    };
    runtime.getTranslator = function() {
        return f
    };
    runtime.setTranslator = function(k) {
        f = k
    };
    runtime.tr = function(k) {
        var a = f(k);
        return a && "string" === String(typeof a) ? a : k
    }
})();
(function(f) {
    function k(a) {
        if (a.length) {
            var d = a[0];
            runtime.readFile(d, "utf8", function(b, h) {
                function n() {
                    var a;
                    (a = eval(f)) && runtime.exit(a)
                }
                var q = "",
                    q = d.lastIndexOf("/"),
                    f = h,
                    q = -1 !== q ? d.substring(0, q) : ".";
                runtime.setCurrentDirectory(q);
                b ? (runtime.log(b), runtime.exit(1)) : null === f ? (runtime.log("No code found for " + d), runtime.exit(1)) : n.apply(null, a)
            })
        }
    }
    f = f ? Array.prototype.slice.call(f) : [];
    "NodeJSRuntime" === runtime.type() ? k(process.argv.slice(2)) : "RhinoRuntime" === runtime.type() ? k(f) : k(f.slice(1))
})("undefined" !==
    String(typeof arguments) && arguments);
(function() {
    core.Async = function() {
        return {
            forEach: function(f, k, a) {
                function d(d) {
                    n !== h && (d ? (n = h, a(d)) : (n += 1, n === h && a(null)))
                }
                var b, h = f.length,
                    n = 0;
                for (b = 0; b < h; b += 1) k(f[b], d)
            },
            destroyAll: function(f, k) {
                function a(d, b) {
                    if (b) k(b);
                    else if (d < f.length) f[d](function(b) {
                        a(d + 1, b)
                    });
                    else k()
                }
                a(0, void 0)
            }
        }
    }()
})();

function makeBase64() {
    function f(c) {
        var g, p = c.length,
            e = new Uint8Array(new ArrayBuffer(p));
        for (g = 0; g < p; g += 1) e[g] = c.charCodeAt(g) & 255;
        return e
    }

    function k(c) {
        var g, p = "",
            e, a = c.length - 2;
        for (e = 0; e < a; e += 3) g = c[e] << 16 | c[e + 1] << 8 | c[e + 2], p += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [g >>> 18], p += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [g >>> 12 & 63], p += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [g >>> 6 & 63], p += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [g &
            63
        ];
        e === a + 1 ? (g = c[e] << 4, p += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [g >>> 6], p += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [g & 63], p += "==") : e === a && (g = c[e] << 10 | c[e + 1] << 2, p += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [g >>> 12], p += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [g >>> 6 & 63], p += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [g & 63], p += "=");
        return p
    }

    function a(c) {
        c = c.replace(/[^A-Za-z0-9+\/]+/g,
            "");
        var p = c.length,
            e = new Uint8Array(new ArrayBuffer(3 * p)),
            a = c.length % 4,
            d = 0,
            b, I;
        for (b = 0; b < p; b += 4) I = (g[c.charAt(b)] || 0) << 18 | (g[c.charAt(b + 1)] || 0) << 12 | (g[c.charAt(b + 2)] || 0) << 6 | (g[c.charAt(b + 3)] || 0), e[d] = I >> 16, e[d + 1] = I >> 8 & 255, e[d + 2] = I & 255, d += 3;
        p = 3 * p - [0, 0, 2, 1][a];
        return e.subarray(0, p)
    }

    function d(c) {
        var g, p, e = c.length,
            a = 0,
            d = new Uint8Array(new ArrayBuffer(3 * e));
        for (g = 0; g < e; g += 1) p = c[g], 128 > p ? d[a++] = p : (2048 > p ? d[a++] = 192 | p >>> 6 : (d[a++] = 224 | p >>> 12 & 15, d[a++] = 128 | p >>> 6 & 63), d[a++] = 128 | p & 63);
        return d.subarray(0,
            a)
    }

    function b(c) {
        var g, p, e, a, d = c.length,
            b = new Uint8Array(new ArrayBuffer(d)),
            h = 0;
        for (g = 0; g < d; g += 1) p = c[g], 128 > p ? b[h++] = p : (g += 1, e = c[g], 224 > p ? b[h++] = (p & 31) << 6 | e & 63 : (g += 1, a = c[g], b[h++] = (p & 15) << 12 | (e & 63) << 6 | a & 63));
        return b.subarray(0, h)
    }

    function h(g) {
        return k(f(g))
    }

    function n(g) {
        return String.fromCharCode.apply(String, a(g))
    }

    function q(g) {
        return b(f(g))
    }

    function m(g) {
        g = b(g);
        for (var c = "", p = 0; p < g.length;) c += String.fromCharCode.apply(String, g.subarray(p, p + 45E3)), p += 45E3;
        return c
    }

    function l(g, c, p) {
        var e, a,
            d, b = "";
        for (d = c; d < p; d += 1) c = g.charCodeAt(d) & 255, 128 > c ? b += String.fromCharCode(c) : (d += 1, e = g.charCodeAt(d) & 255, 224 > c ? b += String.fromCharCode((c & 31) << 6 | e & 63) : (d += 1, a = g.charCodeAt(d) & 255, b += String.fromCharCode((c & 15) << 12 | (e & 63) << 6 | a & 63)));
        return b
    }

    function r(g, c) {
        function p() {
            var d = a + 1E5;
            d > g.length && (d = g.length);
            e += l(g, a, d);
            a = d;
            d = a === g.length;
            c(e, d) && !d && runtime.setTimeout(p, 0)
        }
        var e = "",
            a = 0;
        1E5 > g.length ? c(l(g, 0, g.length), !0) : ("string" !== typeof g && (g = g.slice()), p())
    }

    function c(g) {
        return d(f(g))
    }

    function e(g) {
        return String.fromCharCode.apply(String,
            d(g))
    }

    function p(g) {
        return String.fromCharCode.apply(String, d(f(g)))
    }
    var g = function(g) {
            var c = {},
                p, e;
            p = 0;
            for (e = g.length; p < e; p += 1) c[g.charAt(p)] = p;
            return c
        }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),
        x, t, y = runtime.getWindow(),
        v, s;
    y && y.btoa ? (v = y.btoa, x = function(g) {
        return v(p(g))
    }) : (v = h, x = function(g) {
        return k(c(g))
    });
    y && y.atob ? (s = y.atob, t = function(g) {
        g = s(g);
        return l(g, 0, g.length)
    }) : (s = n, t = function(g) {
        return m(a(g))
    });
    core.Base64 = function() {
        this.convertByteArrayToBase64 = this.convertUTF8ArrayToBase64 =
            k;
        this.convertBase64ToByteArray = this.convertBase64ToUTF8Array = a;
        this.convertUTF16ArrayToByteArray = this.convertUTF16ArrayToUTF8Array = d;
        this.convertByteArrayToUTF16Array = this.convertUTF8ArrayToUTF16Array = b;
        this.convertUTF8StringToBase64 = h;
        this.convertBase64ToUTF8String = n;
        this.convertUTF8StringToUTF16Array = q;
        this.convertByteArrayToUTF16String = this.convertUTF8ArrayToUTF16String = m;
        this.convertUTF8StringToUTF16String = r;
        this.convertUTF16StringToByteArray = this.convertUTF16StringToUTF8Array = c;
        this.convertUTF16ArrayToUTF8String =
            e;
        this.convertUTF16StringToUTF8String = p;
        this.convertUTF16StringToBase64 = x;
        this.convertBase64ToUTF16String = t;
        this.fromBase64 = n;
        this.toBase64 = h;
        this.atob = s;
        this.btoa = v;
        this.utob = p;
        this.btou = r;
        this.encode = x;
        this.encodeURI = function(g) {
            return x(g).replace(/[+\/]/g, function(g) {
                return "+" === g ? "-" : "_"
            }).replace(/\\=+$/, "")
        };
        this.decode = function(g) {
            return t(g.replace(/[\-_]/g, function(g) {
                return "-" === g ? "+" : "/"
            }))
        };
        return this
    };
    return core.Base64
}
core.Base64 = makeBase64();
core.ByteArray = function(f) {
    this.pos = 0;
    this.data = f;
    this.readUInt32LE = function() {
        this.pos += 4;
        var f = this.data,
            a = this.pos;
        return f[--a] << 24 | f[--a] << 16 | f[--a] << 8 | f[--a]
    };
    this.readUInt16LE = function() {
        this.pos += 2;
        var f = this.data,
            a = this.pos;
        return f[--a] << 8 | f[--a]
    }
};
core.ByteArrayWriter = function(f) {
    function k(a) {
        a > b - d && (b = Math.max(2 * b, d + a), a = new Uint8Array(new ArrayBuffer(b)), a.set(h), h = a)
    }
    var a = this,
        d = 0,
        b = 1024,
        h = new Uint8Array(new ArrayBuffer(b));
    this.appendByteArrayWriter = function(d) {
        a.appendByteArray(d.getByteArray())
    };
    this.appendByteArray = function(a) {
        var b = a.length;
        k(b);
        h.set(a, d);
        d += b
    };
    this.appendArray = function(a) {
        var b = a.length;
        k(b);
        h.set(a, d);
        d += b
    };
    this.appendUInt16LE = function(d) {
        a.appendArray([d & 255, d >> 8 & 255])
    };
    this.appendUInt32LE = function(d) {
        a.appendArray([d &
            255, d >> 8 & 255, d >> 16 & 255, d >> 24 & 255
        ])
    };
    this.appendString = function(d) {
        a.appendByteArray(runtime.byteArrayFromString(d, f))
    };
    this.getLength = function() {
        return d
    };
    this.getByteArray = function() {
        var a = new Uint8Array(new ArrayBuffer(d));
        a.set(h.subarray(0, d));
        return a
    }
};
core.CSSUnits = function() {
    var f = this,
        k = {
            "in": 1,
            cm: 2.54,
            mm: 25.4,
            pt: 72,
            pc: 12,
            px: 96
        };
    this.convert = function(a, d, b) {
        return a * k[b] / k[d]
    };
    this.convertMeasure = function(a, d) {
        var b, h;
        a && d && (b = parseFloat(a), h = a.replace(b.toString(), ""), b = f.convert(b, h, d));
        return b
    };
    this.getUnits = function(a) {
        return a.substr(a.length - 2, a.length)
    }
};
(function() {
    function f() {
        var d, b, h, f, q, k, l, r, c;
        void 0 === a && (b = (d = runtime.getWindow()) && d.document, k = b.documentElement, l = b.body, a = {
            rangeBCRIgnoresElementBCR: !1,
            unscaledRangeClientRects: !1,
            elementBCRIgnoresBodyScroll: !1
        }, b && (f = b.createElement("div"), f.style.position = "absolute", f.style.left = "-99999px", f.style.transform = "scale(2)", f.style["-webkit-transform"] = "scale(2)", q = b.createElement("div"), f.appendChild(q), l.appendChild(f), d = b.createRange(), d.selectNode(q), a.rangeBCRIgnoresElementBCR = 0 === d.getClientRects().length,
            q.appendChild(b.createTextNode("Rect transform test")), b = q.getBoundingClientRect(), h = d.getBoundingClientRect(), a.unscaledRangeClientRects = 2 < Math.abs(b.height - h.height), f.style.transform = "", f.style["-webkit-transform"] = "", b = k.style.overflow, h = l.style.overflow, r = l.style.height, c = l.scrollTop, k.style.overflow = "visible", l.style.overflow = "visible", l.style.height = "200%", l.scrollTop = l.scrollHeight, a.elementBCRIgnoresBodyScroll = d.getBoundingClientRect().top !== q.getBoundingClientRect().top, l.scrollTop = c, l.style.height =
            r, l.style.overflow = h, k.style.overflow = b, d.detach(), l.removeChild(f), d = Object.keys(a).map(function(c) {
                return c + ":" + String(a[c])
            }).join(", "), runtime.log("Detected browser quirks - " + d)));
        return a
    }

    function k(a, b, h) {
        for (a = a ? a.firstElementChild : null; a;) {
            if (a.localName === h && a.namespaceURI === b) return a;
            a = a.nextElementSibling
        }
        return null
    }
    var a;
    core.DomUtilsImpl = function() {
        function a(c, g) {
            for (var e = 0, d; c.parentNode !== g;) runtime.assert(null !== c.parentNode, "parent is null"), c = c.parentNode;
            for (d = g.firstChild; d !==
                c;) e += 1, d = d.nextSibling;
            return e
        }

        function b(c, g) {
            return 0 >= c.compareBoundaryPoints(Range.START_TO_START, g) && 0 <= c.compareBoundaryPoints(Range.END_TO_END, g)
        }

        function h(c, g) {
            return 0 >= c.compareBoundaryPoints(Range.END_TO_START, g) && 0 <= c.compareBoundaryPoints(Range.START_TO_END, g)
        }

        function n(c, g) {
            var e = null;
            c.nodeType === Node.TEXT_NODE && (0 === c.length ? (c.parentNode.removeChild(c), g.nodeType === Node.TEXT_NODE && (e = g)) : (g.nodeType === Node.TEXT_NODE && (c.appendData(g.data), g.parentNode.removeChild(g)), e = c));
            return e
        }

        function q(c) {
            for (var g = c.parentNode; c.firstChild;) g.insertBefore(c.firstChild, c);
            g.removeChild(c);
            return g
        }

        function m(c, g) {
            for (var e = c.parentNode, a = c.firstChild, d; a;) d = a.nextSibling, m(a, g), a = d;
            e && g(c) && q(c);
            return e
        }

        function l(c, g) {
            return c === g || Boolean(c.compareDocumentPosition(g) & Node.DOCUMENT_POSITION_CONTAINED_BY)
        }

        function r(c, g) {
            return f().unscaledRangeClientRects ? c : c / g
        }

        function c(p, g, e) {
            Object.keys(g).forEach(function(a) {
                var d = a.split(":"),
                    b = d[1],
                    h = e(d[0]),
                    d = g[a],
                    f = typeof d;
                "object" === f ? Object.keys(d).length &&
                    (a = h ? p.getElementsByTagNameNS(h, b)[0] || p.ownerDocument.createElementNS(h, a) : p.getElementsByTagName(b)[0] || p.ownerDocument.createElement(a), p.appendChild(a), c(a, d, e)) : h && (runtime.assert("number" === f || "string" === f, "attempting to map unsupported type '" + f + "' (key: " + a + ")"), p.setAttributeNS(h, a, String(d)))
            })
        }
        var e = null;
        this.splitBoundaries = function(c) {
            var g, e = [],
                b, h, f;
            if (c.startContainer.nodeType === Node.TEXT_NODE || c.endContainer.nodeType === Node.TEXT_NODE) {
                b = c.endContainer;
                h = c.endContainer.nodeType !==
                    Node.TEXT_NODE ? c.endOffset === c.endContainer.childNodes.length : !1;
                f = c.endOffset;
                g = c.endContainer;
                if (f < g.childNodes.length)
                    for (g = g.childNodes.item(f), f = 0; g.firstChild;) g = g.firstChild;
                else
                    for (; g.lastChild;) g = g.lastChild, f = g.nodeType === Node.TEXT_NODE ? g.textContent.length : g.childNodes.length;
                g === b && (b = null);
                c.setEnd(g, f);
                f = c.endContainer;
                0 !== c.endOffset && f.nodeType === Node.TEXT_NODE && (g = f, c.endOffset !== g.length && (e.push(g.splitText(c.endOffset)), e.push(g)));
                f = c.startContainer;
                0 !== c.startOffset && f.nodeType ===
                    Node.TEXT_NODE && (g = f, c.startOffset !== g.length && (f = g.splitText(c.startOffset), e.push(g), e.push(f), c.setStart(f, 0)));
                if (null !== b) {
                    for (f = c.endContainer; f.parentNode && f.parentNode !== b;) f = f.parentNode;
                    h = h ? b.childNodes.length : a(f, b);
                    c.setEnd(b, h)
                }
            }
            return e
        };
        this.containsRange = b;
        this.rangesIntersect = h;
        this.rangeIntersection = function(c, g) {
            var e;
            h(c, g) && (e = c.cloneRange(), -1 === c.compareBoundaryPoints(Range.START_TO_START, g) && e.setStart(g.startContainer, g.startOffset), 1 === c.compareBoundaryPoints(Range.END_TO_END,
                g) && e.setEnd(g.endContainer, g.endOffset));
            return e
        };
        this.getNodesInRange = function(c, g, e) {
            var a = [],
                d = c.commonAncestorContainer,
                d = d.nodeType === Node.TEXT_NODE ? d.parentNode : d;
            e = c.startContainer.ownerDocument.createTreeWalker(d, e, g, !1);
            var b, h;
            c.endContainer.childNodes[c.endOffset - 1] ? (b = c.endContainer.childNodes[c.endOffset - 1], h = Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINED_BY) : (b = c.endContainer, h = Node.DOCUMENT_POSITION_PRECEDING);
            c.startContainer.childNodes[c.startOffset] ? (c = c.startContainer.childNodes[c.startOffset],
                e.currentNode = c) : c.startOffset === (c.startContainer.nodeType === Node.TEXT_NODE ? c.startContainer.length : c.startContainer.childNodes.length) ? (c = c.startContainer, e.currentNode = c, e.lastChild(), c = e.nextNode()) : (c = c.startContainer, e.currentNode = c);
            if (c) {
                c = e.currentNode;
                if (c !== d)
                    for (c = c.parentNode; c && c !== d;) g(c) === NodeFilter.FILTER_REJECT && (e.currentNode = c), c = c.parentNode;
                c = e.currentNode;
                switch (g(c)) {
                    case NodeFilter.FILTER_REJECT:
                        for (c = e.nextSibling(); !c && e.parentNode();) c = e.nextSibling();
                        break;
                    case NodeFilter.FILTER_SKIP:
                        c =
                            e.nextNode()
                }
                for (; c;) {
                    g = b.compareDocumentPosition(c);
                    if (0 !== g && 0 === (g & h)) break;
                    a.push(c);
                    c = e.nextNode()
                }
            }
            return a
        };
        this.normalizeTextNodes = function(c) {
            c && c.nextSibling && (c = n(c, c.nextSibling));
            c && c.previousSibling && n(c.previousSibling, c)
        };
        this.rangeContainsNode = function(c, g) {
            var e = g.ownerDocument.createRange(),
                a = g.ownerDocument.createRange(),
                d;
            e.setStart(c.startContainer, c.startOffset);
            e.setEnd(c.endContainer, c.endOffset);
            a.selectNodeContents(g);
            d = b(e, a);
            e.detach();
            a.detach();
            return d
        };
        this.mergeIntoParent =
            q;
        this.removeUnwantedNodes = m;
        this.getElementsByTagNameNS = function(c, g, e) {
            var a = [];
            c = c.getElementsByTagNameNS(g, e);
            a.length = e = c.length;
            for (g = 0; g < e; g += 1) a[g] = c.item(g);
            return a
        };
        this.getElementsByTagName = function(c, g) {
            var e = [],
                a, d, b;
            a = c.getElementsByTagName(g);
            e.length = b = a.length;
            for (d = 0; d < b; d += 1) e[d] = a.item(d);
            return e
        };
        this.containsNode = function(c, g) {
            return c === g || c.contains(g)
        };
        this.comparePoints = function(c, g, e, b) {
            if (c === e) return b - g;
            var h = c.compareDocumentPosition(e);
            2 === h ? h = -1 : 4 === h ? h = 1 : 10 === h ?
                (g = a(c, e), h = g < b ? 1 : -1) : (b = a(e, c), h = b < g ? -1 : 1);
            return h
        };
        this.adaptRangeDifferenceToZoomLevel = r;
        this.translateRect = function(c, g, e) {
            return {
                top: r(c.top - g.top, e),
                left: r(c.left - g.left, e),
                bottom: r(c.bottom - g.top, e),
                right: r(c.right - g.left, e),
                width: r(c.width, e),
                height: r(c.height, e)
            }
        };
        this.getBoundingClientRect = function(c) {
            var g = c.ownerDocument,
                a = f(),
                d = g.body;
            if ((!1 === a.unscaledRangeClientRects || a.rangeBCRIgnoresElementBCR) && c.nodeType === Node.ELEMENT_NODE) return c = c.getBoundingClientRect(), a.elementBCRIgnoresBodyScroll ? {
                left: c.left + d.scrollLeft,
                right: c.right + d.scrollLeft,
                top: c.top + d.scrollTop,
                bottom: c.bottom + d.scrollTop,
                width: c.width,
                height: c.height
            } : c;
            var b;
            e ? b = e : e = b = g.createRange();
            a = b;
            a.selectNode(c);
            return a.getBoundingClientRect()
        };
        this.mapKeyValObjOntoNode = function(c, g, e) {
            Object.keys(g).forEach(function(a) {
                var d = a.split(":"),
                    b = d[1],
                    d = e(d[0]),
                    h = g[a];
                d ? (b = c.getElementsByTagNameNS(d, b)[0], b || (b = c.ownerDocument.createElementNS(d, a), c.appendChild(b)), b.textContent = h) : runtime.log("Key ignored: " + a)
            })
        };
        this.removeKeyElementsFromNode =
            function(c, g, e) {
                g.forEach(function(g) {
                    var a = g.split(":"),
                        d = a[1];
                    (a = e(a[0])) ? (d = c.getElementsByTagNameNS(a, d)[0]) ? d.parentNode.removeChild(d): runtime.log("Element for " + g + " not found."): runtime.log("Property Name ignored: " + g)
                })
            };
        this.getKeyValRepresentationOfNode = function(c, g) {
            for (var e = {}, a = c.firstElementChild, d; a;) {
                if (d = g(a.namespaceURI)) e[d + ":" + a.localName] = a.textContent;
                a = a.nextElementSibling
            }
            return e
        };
        this.mapObjOntoNode = c;
        this.cloneEvent = function(c) {
            var g = Object.create(null);
            Object.keys(c).forEach(function(e) {
                g[e] =
                    c[e]
            });
            g.prototype = c.constructor.prototype;
            return g
        };
        this.getDirectChild = k;
        (function(c) {
            var g, e;
            e = runtime.getWindow();
            null !== e && (g = e.navigator.appVersion.toLowerCase(), e = -1 === g.indexOf("chrome") && (-1 !== g.indexOf("applewebkit") || -1 !== g.indexOf("safari")), g = -1 !== g.indexOf("msie") || -1 !== g.indexOf("trident"), e || g) && (c.containsNode = l)
        })(this)
    };
    core.DomUtils = new core.DomUtilsImpl
})();
core.Cursor = function(f, k) {
    function a(c) {
        c.parentNode && (q.push(c.previousSibling), q.push(c.nextSibling), c.parentNode.removeChild(c))
    }

    function d(c, e, a) {
        if (e.nodeType === Node.TEXT_NODE) {
            runtime.assert(Boolean(e), "putCursorIntoTextNode: invalid container");
            var g = e.parentNode;
            runtime.assert(Boolean(g), "putCursorIntoTextNode: container without parent");
            runtime.assert(0 <= a && a <= e.length, "putCursorIntoTextNode: offset is out of bounds");
            0 === a ? g.insertBefore(c, e) : (a !== e.length && e.splitText(a), g.insertBefore(c,
                e.nextSibling))
        } else e.nodeType === Node.ELEMENT_NODE && e.insertBefore(c, e.childNodes.item(a));
        q.push(c.previousSibling);
        q.push(c.nextSibling)
    }
    var b = f.createElementNS("urn:webodf:names:cursor", "cursor"),
        h = f.createElementNS("urn:webodf:names:cursor", "anchor"),
        n, q = [],
        m = f.createRange(),
        l, r = core.DomUtils;
    this.getNode = function() {
        return b
    };
    this.getAnchorNode = function() {
        return h.parentNode ? h : b
    };
    this.getSelectedRange = function() {
        l ? (m.setStartBefore(b), m.collapse(!0)) : (m.setStartAfter(n ? h : b), m.setEndBefore(n ?
            b : h));
        return m
    };
    this.setSelectedRange = function(c, e) {
        m && m !== c && m.detach();
        m = c;
        n = !1 !== e;
        (l = c.collapsed) ? (a(h), a(b), d(b, c.startContainer, c.startOffset)) : (a(h), a(b), d(n ? b : h, c.endContainer, c.endOffset), d(n ? h : b, c.startContainer, c.startOffset));
        q.forEach(r.normalizeTextNodes);
        q.length = 0
    };
    this.hasForwardSelection = function() {
        return n
    };
    this.remove = function() {
        a(b);
        q.forEach(r.normalizeTextNodes);
        q.length = 0
    };
    b.setAttributeNS("urn:webodf:names:cursor", "memberId", k);
    h.setAttributeNS("urn:webodf:names:cursor", "memberId",
        k)
};
core.Destroyable = function() {};
core.Destroyable.prototype.destroy = function(f) {};
core.EventSource = function() {};
core.EventSource.prototype.subscribe = function(f, k) {};
core.EventSource.prototype.unsubscribe = function(f, k) {};
core.EventNotifier = function(f) {
    function k(d) {
        runtime.assert(!a.hasOwnProperty(d), 'Duplicated event ids: "' + d + '" registered more than once.');
        a[d] = []
    }
    var a = {};
    this.emit = function(d, b) {
        var h, f;
        runtime.assert(a.hasOwnProperty(d), 'unknown event fired "' + d + '"');
        f = a[d];
        for (h = 0; h < f.length; h += 1) f[h](b)
    };
    this.subscribe = function(d, b) {
        runtime.assert(a.hasOwnProperty(d), 'tried to subscribe to unknown event "' + d + '"');
        a[d].push(b)
    };
    this.unsubscribe = function(d, b) {
        var h;
        runtime.assert(a.hasOwnProperty(d), 'tried to unsubscribe from unknown event "' +
            d + '"');
        h = a[d].indexOf(b);
        runtime.assert(-1 !== h, 'tried to unsubscribe unknown callback from event "' + d + '"'); - 1 !== h && a[d].splice(h, 1)
    };
    this.register = k;
    f && f.forEach(k)
};
core.ScheduledTask = function(f, k, a) {
    function d() {
        n && (a(h), n = !1)
    }

    function b() {
        d();
        f.apply(void 0, q);
        q = null
    }
    var h, n = !1,
        q = [],
        m = !1;
    this.trigger = function() {
        runtime.assert(!1 === m, "Can't trigger destroyed ScheduledTask instance");
        q = Array.prototype.slice.call(arguments);
        n || (n = !0, h = k(b))
    };
    this.triggerImmediate = function() {
        runtime.assert(!1 === m, "Can't trigger destroyed ScheduledTask instance");
        q = Array.prototype.slice.call(arguments);
        b()
    };
    this.processRequests = function() {
        n && b()
    };
    this.cancel = d;
    this.restart = function() {
        runtime.assert(!1 ===
            m, "Can't trigger destroyed ScheduledTask instance");
        d();
        n = !0;
        h = k(b)
    };
    this.destroy = function(a) {
        d();
        m = !0;
        a()
    }
};
(function() {
    var f;
    core.Task = {};
    core.Task.SUPPRESS_MANUAL_PROCESSING = !1;
    core.Task.processTasks = function() {
        core.Task.SUPPRESS_MANUAL_PROCESSING || f.performRedraw()
    };
    core.Task.createRedrawTask = function(k) {
        return new core.ScheduledTask(k, f.requestRedrawTask, f.cancelRedrawTask)
    };
    core.Task.createTimeoutTask = function(f, a) {
        return new core.ScheduledTask(f, function(d) {
            return runtime.setTimeout(d, a)
        }, runtime.clearTimeout)
    };
    f = new function() {
        var f = {};
        this.requestRedrawTask = function(a) {
            var d = runtime.requestAnimationFrame(function() {
                a();
                delete f[d]
            });
            f[d] = a;
            return d
        };
        this.performRedraw = function() {
            Object.keys(f).forEach(function(a) {
                f[a]();
                runtime.cancelAnimationFrame(parseInt(a, 10))
            });
            f = {}
        };
        this.cancelRedrawTask = function(a) {
            runtime.cancelAnimationFrame(a);
            delete f[a]
        }
    }
})();
core.EventSubscriptions = function() {
    function f(d, b, h) {
        d.subscribe(b, h);
        a.push({
            eventSource: d,
            eventid: b,
            callback: h
        })
    }

    function k() {
        var h = [];
        a.forEach(function(a) {
            a.eventSource.unsubscribe(a.eventid, a.callback)
        });
        a.length = 0;
        Object.keys(b).forEach(function(a) {
            b[a].forEach(function(a) {
                h.push(a.task.destroy)
            });
            delete b[a]
        });
        core.Async.destroyAll(h, function() {});
        d = new core.EventNotifier
    }
    var a = [],
        d = new core.EventNotifier,
        b = {},
        h = 0;
    this.addSubscription = f;
    this.addFrameSubscription = function(a, q, k) {
        var l, r, c, e;
        b.hasOwnProperty(q) || (b[q] = []);
        c = b[q];
        for (e = 0; e < c.length; e += 1)
            if (c[e].eventSource === a) {
                l = c[e];
                break
            } l || (r = "s" + h, h += 1, d.register(r), l = {
            frameEventId: r,
            eventSource: a,
            task: core.Task.createRedrawTask(function() {
                d.emit(r, void 0)
            })
        }, c.push(l), f(a, q, l.task.trigger));
        d.subscribe(l.frameEventId, k)
    };
    this.unsubscribeAll = k;
    this.destroy = function(a) {
        k();
        a()
    }
};
core.LazyProperty = function(f) {
    var k, a = !1;
    this.value = function() {
        a || (k = f(), a = !0);
        return k
    };
    this.reset = function() {
        a = !1
    }
};
core.LoopWatchDog = function(f, k) {
    var a = Date.now(),
        d = 0;
    this.check = function() {
        var b;
        if (f && (b = Date.now(), b - a > f)) throw runtime.log("alert", "watchdog timeout"), "timeout!";
        if (0 < k && (d += 1, d > k)) throw runtime.log("alert", "watchdog loop overflow"), "loop overflow";
    }
};
core.NodeFilterChain = function(f) {
    var k = NodeFilter.FILTER_REJECT,
        a = NodeFilter.FILTER_ACCEPT;
    this.acceptNode = function(d) {
        var b;
        for (b = 0; b < f.length; b += 1)
            if (f[b].acceptNode(d) === k) return k;
        return a
    }
};
core.PositionIterator = function(f, k, a, d) {
    function b() {
        this.acceptNode = function(c) {
            return !c || c.nodeType === p && 0 === c.length ? t : x
        }
    }

    function h(c) {
        this.acceptNode = function(g) {
            return !g || g.nodeType === p && 0 === g.length ? t : c.acceptNode(g)
        }
    }

    function n() {
        var e = r.currentNode,
            a = e.nodeType;
        c = a === p ? e.length - 1 : a === g ? 1 : 0
    }

    function q() {
        if (null === r.previousSibling()) {
            if (!r.parentNode() || r.currentNode === f) return r.firstChild(), !1;
            c = 0
        } else n();
        return !0
    }

    function m() {
        var g = r.currentNode,
            a;
        a = e(g);
        if (g !== f)
            for (g = g.parentNode; g &&
                g !== f;) e(g) === t && (r.currentNode = g, a = t), g = g.parentNode;
        a === t ? (c = r.currentNode.nodeType === p ? g.length : 1, g = l.nextPosition()) : g = a === x ? !0 : l.nextPosition();
        g && runtime.assert(e(r.currentNode) === x, "moveToAcceptedNode did not result in walker being on an accepted node");
        return g
    }
    var l = this,
        r, c, e, p = Node.TEXT_NODE,
        g = Node.ELEMENT_NODE,
        x = NodeFilter.FILTER_ACCEPT,
        t = NodeFilter.FILTER_REJECT;
    this.nextPosition = function() {
        var e = r.currentNode,
            a = e.nodeType;
        if (e === f) return !1;
        if (0 === c && a === g) null === r.firstChild() && (c = 1);
        else if (a === p && c + 1 < e.length) c += 1;
        else if (null !== r.nextSibling()) c = 0;
        else if (r.parentNode()) c = 1;
        else return !1;
        return !0
    };
    this.previousPosition = function() {
        var g = !0,
            e = r.currentNode;
        0 === c ? g = q() : e.nodeType === p ? c -= 1 : null !== r.lastChild() ? n() : e === f ? g = !1 : c = 0;
        return g
    };
    this.previousNode = q;
    this.container = function() {
        var g = r.currentNode,
            e = g.nodeType;
        0 === c && e !== p && (g = g.parentNode);
        return g
    };
    this.rightNode = function() {
        var a = r.currentNode,
            d = a.nodeType;
        if (d === p && c === a.length)
            for (a = a.nextSibling; a && e(a) !== x;) a = a.nextSibling;
        else d === g && 1 === c && (a = null);
        return a
    };
    this.leftNode = function() {
        var a = r.currentNode;
        if (0 === c)
            for (a = a.previousSibling; a && e(a) !== x;) a = a.previousSibling;
        else if (a.nodeType === g)
            for (a = a.lastChild; a && e(a) !== x;) a = a.previousSibling;
        return a
    };
    this.getCurrentNode = function() {
        return r.currentNode
    };
    this.unfilteredDomOffset = function() {
        if (r.currentNode.nodeType === p) return c;
        for (var g = 0, e = r.currentNode, e = 1 === c ? e.lastChild : e.previousSibling; e;) g += 1, e = e.previousSibling;
        return g
    };
    this.getPreviousSibling = function() {
        var c =
            r.currentNode,
            g = r.previousSibling();
        r.currentNode = c;
        return g
    };
    this.getNextSibling = function() {
        var c = r.currentNode,
            g = r.nextSibling();
        r.currentNode = c;
        return g
    };
    this.setPositionBeforeElement = function(g) {
        runtime.assert(Boolean(g), "setPositionBeforeElement called without element");
        r.currentNode = g;
        c = 0;
        return m()
    };
    this.setUnfilteredPosition = function(g, e) {
        runtime.assert(Boolean(g), "PositionIterator.setUnfilteredPosition called without container");
        r.currentNode = g;
        g.nodeType === p ? (c = e, runtime.assert(e <= g.length,
            "Error in setPosition: " + e + " > " + g.length), runtime.assert(0 <= e, "Error in setPosition: " + e + " < 0"), e === g.length && (r.nextSibling() ? c = 0 : r.parentNode() ? c = 1 : runtime.assert(!1, "Error in setUnfilteredPosition: position not valid."))) : e < g.childNodes.length ? (r.currentNode = g.childNodes.item(e), c = 0) : c = 1;
        return m()
    };
    this.moveToEnd = function() {
        r.currentNode = f;
        c = 1
    };
    this.moveToEndOfNode = function(g) {
        g.nodeType === p ? l.setUnfilteredPosition(g, g.length) : (r.currentNode = g, c = 1)
    };
    this.isBeforeNode = function() {
        return 0 === c
    };
    this.getNodeFilter = function() {
        return e
    };
    e = (a ? new h(a) : new b).acceptNode;
    e.acceptNode = e;
    k = k || NodeFilter.SHOW_ALL;
    runtime.assert(f.nodeType !== Node.TEXT_NODE, "Internet Explorer doesn't allow tree walker roots to be text nodes");
    r = f.ownerDocument.createTreeWalker(f, k, e, d);
    c = 0;
    null === r.firstChild() && (c = 1)
};
core.PositionFilter = function() {};
core.PositionFilter.FilterResult = {
    FILTER_ACCEPT: 1,
    FILTER_REJECT: 2,
    FILTER_SKIP: 3
};
core.PositionFilter.prototype.acceptPosition = function(f) {};
core.PositionFilterChain = function() {
    var f = [],
        k = core.PositionFilter.FilterResult.FILTER_ACCEPT,
        a = core.PositionFilter.FilterResult.FILTER_REJECT;
    this.acceptPosition = function(d) {
        var b;
        for (b = 0; b < f.length; b += 1)
            if (f[b].acceptPosition(d) === a) return a;
        return k
    };
    this.addFilter = function(a) {
        f.push(a)
    }
};
(function() {
    core.RawInflate = function() {
        var f;
        (function(k) {
            f = k()
        })(function() {
            return function a(d, b, h) {
                function f(q, l) {
                    if (!b[q]) {
                        if (!d[q]) throw Error("Cannot find module '" + q + "'");
                        var r = b[q] = {
                            exports: {}
                        };
                        d[q][0].call(r.exports, function(c) {
                            var e = d[q][1][c];
                            return f(e ? e : c)
                        }, r, r.exports, a, d, b, h)
                    }
                    return b[q].exports
                }
                for (var q = 0; q < h.length; q++) f(h[q]);
                return f
            }({
                1: [function(a, d, b) {
                    function h(c, e) {
                        var a = new p(e);
                        a.push(c, !0);
                        if (a.err) throw a.msg;
                        return a.result
                    }
                    var f = a("./zlib/inflate.js"),
                        q = a("./utils/common"),
                        m = a("./utils/strings"),
                        l = a("./zlib/constants"),
                        r = a("./zlib/messages"),
                        c = a("./zlib/zstream"),
                        e = a("./zlib/gzheader"),
                        p = function(g) {
                            var a = this.options = q.assign({
                                chunkSize: 16384,
                                windowBits: 0,
                                to: ""
                            }, g || {});
                            a.raw && 0 <= a.windowBits && 16 > a.windowBits && (a.windowBits = -a.windowBits, 0 === a.windowBits && (a.windowBits = -15));
                            !(0 <= a.windowBits && 16 > a.windowBits) || g && g.windowBits || (a.windowBits += 32);
                            15 < a.windowBits && 48 > a.windowBits && 0 === (a.windowBits & 15) && (a.windowBits |= 15);
                            this.err = 0;
                            this.msg = "";
                            this.ended = !1;
                            this.chunks = [];
                            this.strm = new c;
                            this.strm.avail_out = 0;
                            g = f.inflateInit2(this.strm, a.windowBits);
                            if (g !== l.Z_OK) throw Error(r[g]);
                            this.header = new e;
                            f.inflateGetHeader(this.strm, this.header)
                        };
                    p.prototype.push = function(c, e) {
                        var a = this.strm,
                            d = this.options.chunkSize,
                            b, p, h, r, z;
                        if (this.ended) return !1;
                        p = e === ~~e ? e : !0 === e ? l.Z_FINISH : l.Z_NO_FLUSH;
                        a.input = "string" === typeof c ? m.binstring2buf(c) : c;
                        a.next_in = 0;
                        a.avail_in = a.input.length;
                        do {
                            0 === a.avail_out && (a.output = new q.Buf8(d), a.next_out = 0, a.avail_out = d);
                            b = f.inflate(a, l.Z_NO_FLUSH);
                            if (b !== l.Z_STREAM_END && b !== l.Z_OK) return this.onEnd(b), this.ended = !0, !1;
                            if (a.next_out && (0 === a.avail_out || b === l.Z_STREAM_END || 0 === a.avail_in && p === l.Z_FINISH))
                                if ("string" === this.options.to) h = m.utf8border(a.output, a.next_out), r = a.next_out - h, z = m.buf2string(a.output, h), a.next_out = r, a.avail_out = d - r, r && q.arraySet(a.output, a.output, h, r, 0), this.onData(z);
                                else this.onData(q.shrinkBuf(a.output, a.next_out))
                        } while ((0 < a.avail_in || 0 === a.avail_out) && b !== l.Z_STREAM_END);
                        b === l.Z_STREAM_END && (p = l.Z_FINISH);
                        return p ===
                            l.Z_FINISH ? (b = f.inflateEnd(this.strm), this.onEnd(b), this.ended = !0, b === l.Z_OK) : !0
                    };
                    p.prototype.onData = function(c) {
                        this.chunks.push(c)
                    };
                    p.prototype.onEnd = function(c) {
                        c === l.Z_OK && (this.result = "string" === this.options.to ? this.chunks.join("") : q.flattenChunks(this.chunks));
                        this.chunks = [];
                        this.err = c;
                        this.msg = this.strm.msg
                    };
                    b.Inflate = p;
                    b.inflate = h;
                    b.inflateRaw = function(c, a) {
                        a = a || {};
                        a.raw = !0;
                        return h(c, a)
                    };
                    b.ungzip = h
                }, {
                    "./utils/common": 2,
                    "./utils/strings": 3,
                    "./zlib/constants": 5,
                    "./zlib/gzheader": 7,
                    "./zlib/inflate.js": 9,
                    "./zlib/messages": 11,
                    "./zlib/zstream": 12
                }],
                2: [function(a, d, b) {
                    a = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Int32Array;
                    b.assign = function(a) {
                        for (var d = Array.prototype.slice.call(arguments, 1); d.length;) {
                            var b = d.shift();
                            if (b) {
                                if ("object" !== typeof b) throw new TypeError(b + "must be non-object");
                                for (var h in b) b.hasOwnProperty(h) && (a[h] = b[h])
                            }
                        }
                        return a
                    };
                    b.shrinkBuf = function(a, d) {
                        if (a.length === d) return a;
                        if (a.subarray) return a.subarray(0, d);
                        a.length = d;
                        return a
                    };
                    var h = {
                            arraySet: function(a, d, b, h, c) {
                                if (d.subarray && a.subarray) a.set(d.subarray(b, b + h), c);
                                else
                                    for (var e = 0; e < h; e++) a[c + e] = d[b + e]
                            },
                            flattenChunks: function(a) {
                                var d, b, h, c, e;
                                d = h = 0;
                                for (b = a.length; d < b; d++) h += a[d].length;
                                e = new Uint8Array(h);
                                d = h = 0;
                                for (b = a.length; d < b; d++) c = a[d], e.set(c, h), h += c.length;
                                return e
                            }
                        },
                        f = {
                            arraySet: function(a, d, b, h, c) {
                                for (var e = 0; e < h; e++) a[c + e] = d[b + e]
                            },
                            flattenChunks: function(a) {
                                return [].concat.apply([], a)
                            }
                        };
                    b.setTyped = function(a) {
                        a ? (b.Buf8 = Uint8Array, b.Buf16 = Uint16Array, b.Buf32 = Int32Array,
                            b.assign(b, h)) : (b.Buf8 = Array, b.Buf16 = Array, b.Buf32 = Array, b.assign(b, f))
                    };
                    b.setTyped(a)
                }, {}],
                3: [function(a, d, b) {
                    function h(c, a) {
                        if (65537 > a && (c.subarray && m || !c.subarray && q)) return String.fromCharCode.apply(null, f.shrinkBuf(c, a));
                        for (var g = "", d = 0; d < a; d++) g += String.fromCharCode(c[d]);
                        return g
                    }
                    var f = a("./common"),
                        q = !0,
                        m = !0;
                    try {
                        String.fromCharCode.apply(null, [0])
                    } catch (l) {
                        q = !1
                    }
                    try {
                        String.fromCharCode.apply(null, new Uint8Array(1))
                    } catch (r) {
                        m = !1
                    }
                    var c = new f.Buf8(256);
                    for (a = 0; 256 > a; a++) c[a] = 252 <= a ? 6 : 248 <=
                        a ? 5 : 240 <= a ? 4 : 224 <= a ? 3 : 192 <= a ? 2 : 1;
                    c[254] = c[254] = 1;
                    b.string2buf = function(c) {
                        var a, g, d, b, h, q = c.length,
                            r = 0;
                        for (b = 0; b < q; b++) g = c.charCodeAt(b), 55296 === (g & 64512) && b + 1 < q && (d = c.charCodeAt(b + 1), 56320 === (d & 64512) && (g = 65536 + (g - 55296 << 10) + (d - 56320), b++)), r += 128 > g ? 1 : 2048 > g ? 2 : 65536 > g ? 3 : 4;
                        a = new f.Buf8(r);
                        for (b = h = 0; h < r; b++) g = c.charCodeAt(b), 55296 === (g & 64512) && b + 1 < q && (d = c.charCodeAt(b + 1), 56320 === (d & 64512) && (g = 65536 + (g - 55296 << 10) + (d - 56320), b++)), 128 > g ? a[h++] = g : (2048 > g ? a[h++] = 192 | g >>> 6 : (65536 > g ? a[h++] = 224 | g >>> 12 : (a[h++] =
                            240 | g >>> 18, a[h++] = 128 | g >>> 12 & 63), a[h++] = 128 | g >>> 6 & 63), a[h++] = 128 | g & 63);
                        return a
                    };
                    b.buf2binstring = function(c) {
                        return h(c, c.length)
                    };
                    b.binstring2buf = function(c) {
                        for (var a = new f.Buf8(c.length), g = 0, d = a.length; g < d; g++) a[g] = c.charCodeAt(g);
                        return a
                    };
                    b.buf2string = function(a, d) {
                        var g, b, f, q, r = d || a.length,
                            l = Array(2 * r);
                        for (g = b = 0; g < r;)
                            if (f = a[g++], 128 > f) l[b++] = f;
                            else if (q = c[f], 4 < q) l[b++] = 65533, g += q - 1;
                        else {
                            for (f &= 2 === q ? 31 : 3 === q ? 15 : 7; 1 < q && g < r;) f = f << 6 | a[g++] & 63, q--;
                            1 < q ? l[b++] = 65533 : 65536 > f ? l[b++] = f : (f -= 65536, l[b++] =
                                55296 | f >> 10 & 1023, l[b++] = 56320 | f & 1023)
                        }
                        return h(l, b)
                    };
                    b.utf8border = function(a, d) {
                        var g;
                        d = d || a.length;
                        d > a.length && (d = a.length);
                        for (g = d - 1; 0 <= g && 128 === (a[g] & 192);) g--;
                        return 0 > g || 0 === g ? d : g + c[a[g]] > d ? g : d
                    }
                }, {
                    "./common": 2
                }],
                4: [function(a, d, b) {
                    d.exports = function(a, d, b, f) {
                        var l = a & 65535 | 0;
                        a = a >>> 16 & 65535 | 0;
                        for (var r = 0; 0 !== b;) {
                            r = 2E3 < b ? 2E3 : b;
                            b -= r;
                            do l = l + d[f++] | 0, a = a + l | 0; while (--r);
                            l %= 65521;
                            a %= 65521
                        }
                        return l | a << 16 | 0
                    }
                }, {}],
                5: [function(a, d, b) {
                    d.exports = {
                        Z_NO_FLUSH: 0,
                        Z_PARTIAL_FLUSH: 1,
                        Z_SYNC_FLUSH: 2,
                        Z_FULL_FLUSH: 3,
                        Z_FINISH: 4,
                        Z_BLOCK: 5,
                        Z_TREES: 6,
                        Z_OK: 0,
                        Z_STREAM_END: 1,
                        Z_NEED_DICT: 2,
                        Z_ERRNO: -1,
                        Z_STREAM_ERROR: -2,
                        Z_DATA_ERROR: -3,
                        Z_BUF_ERROR: -5,
                        Z_NO_COMPRESSION: 0,
                        Z_BEST_SPEED: 1,
                        Z_BEST_COMPRESSION: 9,
                        Z_DEFAULT_COMPRESSION: -1,
                        Z_FILTERED: 1,
                        Z_HUFFMAN_ONLY: 2,
                        Z_RLE: 3,
                        Z_FIXED: 4,
                        Z_DEFAULT_STRATEGY: 0,
                        Z_BINARY: 0,
                        Z_TEXT: 1,
                        Z_UNKNOWN: 2,
                        Z_DEFLATED: 8
                    }
                }, {}],
                6: [function(a, d, b) {
                    var h = function() {
                        for (var a, d = [], b = 0; 256 > b; b++) {
                            a = b;
                            for (var h = 0; 8 > h; h++) a = a & 1 ? 3988292384 ^ a >>> 1 : a >>> 1;
                            d[b] = a
                        }
                        return d
                    }();
                    d.exports = function(a, d, b, f) {
                        b = f + b;
                        for (a ^=
                            -1; f < b; f++) a = a >>> 8 ^ h[(a ^ d[f]) & 255];
                        return a ^ -1
                    }
                }, {}],
                7: [function(a, d, b) {
                    d.exports = function() {
                        this.os = this.xflags = this.time = this.text = 0;
                        this.extra = null;
                        this.extra_len = 0;
                        this.comment = this.name = "";
                        this.hcrc = 0;
                        this.done = !1
                    }
                }, {}],
                8: [function(a, d, b) {
                    d.exports = function(a, d) {
                        var b, f, l, r, c, e, p, g, x, t, y, v, s, w, u, z, H, C, D, I, N, K, G, A;
                        b = a.state;
                        f = a.next_in;
                        G = a.input;
                        l = f + (a.avail_in - 5);
                        r = a.next_out;
                        A = a.output;
                        c = r - (d - a.avail_out);
                        e = r + (a.avail_out - 257);
                        p = b.dmax;
                        g = b.wsize;
                        x = b.whave;
                        t = b.wnext;
                        y = b.window;
                        v = b.hold;
                        s = b.bits;
                        w = b.lencode;
                        u = b.distcode;
                        z = (1 << b.lenbits) - 1;
                        H = (1 << b.distbits) - 1;
                        a: do b: for (15 > s && (v += G[f++] << s, s += 8, v += G[f++] << s, s += 8), C = w[v & z];;) {
                                D = C >>> 24;
                                v >>>= D;
                                s -= D;
                                D = C >>> 16 & 255;
                                if (0 === D) A[r++] = C & 65535;
                                else if (D & 16) {
                                    I = C & 65535;
                                    if (D &= 15) s < D && (v += G[f++] << s, s += 8), I += v & (1 << D) - 1, v >>>= D, s -= D;
                                    15 > s && (v += G[f++] << s, s += 8, v += G[f++] << s, s += 8);
                                    C = u[v & H];
                                    c: for (;;) {
                                        D = C >>> 24;
                                        v >>>= D;
                                        s -= D;
                                        D = C >>> 16 & 255;
                                        if (D & 16) {
                                            C &= 65535;
                                            D &= 15;
                                            s < D && (v += G[f++] << s, s += 8, s < D && (v += G[f++] << s, s += 8));
                                            C += v & (1 << D) - 1;
                                            if (C > p) {
                                                a.msg = "invalid distance too far back";
                                                b.mode = 30;
                                                break a
                                            }
                                            v >>>= D;
                                            s -= D;
                                            D = r - c;
                                            if (C > D) {
                                                D = C - D;
                                                if (D > x && b.sane) {
                                                    a.msg = "invalid distance too far back";
                                                    b.mode = 30;
                                                    break a
                                                }
                                                N = 0;
                                                K = y;
                                                if (0 === t) {
                                                    if (N += g - D, D < I) {
                                                        I -= D;
                                                        do A[r++] = y[N++]; while (--D);
                                                        N = r - C;
                                                        K = A
                                                    }
                                                } else if (t < D) {
                                                    if (N += g + t - D, D -= t, D < I) {
                                                        I -= D;
                                                        do A[r++] = y[N++]; while (--D);
                                                        N = 0;
                                                        if (t < I) {
                                                            D = t;
                                                            I -= D;
                                                            do A[r++] = y[N++]; while (--D);
                                                            N = r - C;
                                                            K = A
                                                        }
                                                    }
                                                } else if (N += t - D, D < I) {
                                                    I -= D;
                                                    do A[r++] = y[N++]; while (--D);
                                                    N = r - C;
                                                    K = A
                                                }
                                                for (; 2 < I;) A[r++] = K[N++], A[r++] = K[N++], A[r++] = K[N++], I -= 3;
                                                I && (A[r++] = K[N++], 1 < I && (A[r++] = K[N++]))
                                            } else {
                                                N = r - C;
                                                do A[r++] =
                                                    A[N++], A[r++] = A[N++], A[r++] = A[N++], I -= 3; while (2 < I);
                                                I && (A[r++] = A[N++], 1 < I && (A[r++] = A[N++]))
                                            }
                                        } else if (0 === (D & 64)) {
                                            C = u[(C & 65535) + (v & (1 << D) - 1)];
                                            continue c
                                        } else {
                                            a.msg = "invalid distance code";
                                            b.mode = 30;
                                            break a
                                        }
                                        break
                                    }
                                } else if (0 === (D & 64)) {
                                    C = w[(C & 65535) + (v & (1 << D) - 1)];
                                    continue b
                                } else {
                                    D & 32 ? b.mode = 12 : (a.msg = "invalid literal/length code", b.mode = 30);
                                    break a
                                }
                                break
                            }
                            while (f < l && r < e);
                            I = s >> 3;
                        f -= I;
                        s -= I << 3;
                        a.next_in = f;
                        a.next_out = r;
                        a.avail_in = f < l ? 5 + (l - f) : 5 - (f - l);
                        a.avail_out = r < e ? 257 + (e - r) : 257 - (r - e);
                        b.hold = v & (1 << s) - 1;
                        b.bits =
                            s
                    }
                }, {}],
                9: [function(a, d, b) {
                    function f(c) {
                        return (c >>> 24 & 255) + (c >>> 8 & 65280) + ((c & 65280) << 8) + ((c & 255) << 24)
                    }

                    function n() {
                        this.mode = 0;
                        this.last = !1;
                        this.wrap = 0;
                        this.havedict = !1;
                        this.total = this.check = this.dmax = this.flags = 0;
                        this.head = null;
                        this.wnext = this.whave = this.wsize = this.wbits = 0;
                        this.window = null;
                        this.extra = this.offset = this.length = this.bits = this.hold = 0;
                        this.distcode = this.lencode = null;
                        this.have = this.ndist = this.nlen = this.ncode = this.distbits = this.lenbits = 0;
                        this.next = null;
                        this.lens = new c.Buf16(320);
                        this.work =
                            new c.Buf16(288);
                        this.distdyn = this.lendyn = null;
                        this.was = this.back = this.sane = 0
                    }

                    function q(a) {
                        var g;
                        if (!a || !a.state) return y;
                        g = a.state;
                        a.total_in = a.total_out = g.total = 0;
                        a.msg = "";
                        g.wrap && (a.adler = g.wrap & 1);
                        g.mode = v;
                        g.last = 0;
                        g.havedict = 0;
                        g.dmax = 32768;
                        g.head = null;
                        g.hold = 0;
                        g.bits = 0;
                        g.lencode = g.lendyn = new c.Buf32(s);
                        g.distcode = g.distdyn = new c.Buf32(w);
                        g.sane = 1;
                        g.back = -1;
                        return t
                    }

                    function m(c) {
                        var a;
                        if (!c || !c.state) return y;
                        a = c.state;
                        a.wsize = 0;
                        a.whave = 0;
                        a.wnext = 0;
                        return q(c)
                    }

                    function l(c, a) {
                        var g, e;
                        if (!c ||
                            !c.state) return y;
                        e = c.state;
                        0 > a ? (g = 0, a = -a) : (g = (a >> 4) + 1, 48 > a && (a &= 15));
                        if (a && (8 > a || 15 < a)) return y;
                        null !== e.window && e.wbits !== a && (e.window = null);
                        e.wrap = g;
                        e.wbits = a;
                        return m(c)
                    }

                    function r(c, a) {
                        var g;
                        if (!c) return y;
                        g = new n;
                        c.state = g;
                        g.window = null;
                        g = l(c, a);
                        g !== t && (c.state = null);
                        return g
                    }
                    var c = a("../utils/common"),
                        e = a("./adler32"),
                        p = a("./crc32"),
                        g = a("./inffast"),
                        x = a("./inftrees"),
                        t = 0,
                        y = -2,
                        v = 1,
                        s = 852,
                        w = 592,
                        u = !0,
                        z, H;
                    b.inflateReset = m;
                    b.inflateReset2 = l;
                    b.inflateResetKeep = q;
                    b.inflateInit = function(c) {
                        return r(c,
                            15)
                    };
                    b.inflateInit2 = r;
                    b.inflate = function(a, d) {
                        var b, r, K, G, q, l, n, m, s, w, P, E, Q, $;
                        E = 0;
                        var B, V, ba, Z, F, X = new c.Buf8(4),
                            R = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                        if (!a || !a.state || !a.output || !a.input && 0 !== a.avail_in) return y;
                        b = a.state;
                        12 === b.mode && (b.mode = 13);
                        q = a.next_out;
                        K = a.output;
                        n = a.avail_out;
                        G = a.next_in;
                        r = a.input;
                        l = a.avail_in;
                        m = b.hold;
                        s = b.bits;
                        w = l;
                        P = n;
                        F = t;
                        a: for (;;) switch (b.mode) {
                            case v:
                                if (0 === b.wrap) {
                                    b.mode = 13;
                                    break
                                }
                                for (; 16 > s;) {
                                    if (0 === l) break a;
                                    l--;
                                    m += r[G++] << s;
                                    s += 8
                                }
                                if (b.wrap & 2 && 35615 === m) {
                                    b.check =
                                        0;
                                    X[0] = m & 255;
                                    X[1] = m >>> 8 & 255;
                                    b.check = p(b.check, X, 2, 0);
                                    s = m = 0;
                                    b.mode = 2;
                                    break
                                }
                                b.flags = 0;
                                b.head && (b.head.done = !1);
                                if (!(b.wrap & 1) || (((m & 255) << 8) + (m >> 8)) % 31) {
                                    a.msg = "incorrect header check";
                                    b.mode = 30;
                                    break
                                }
                                if (8 !== (m & 15)) {
                                    a.msg = "unknown compression method";
                                    b.mode = 30;
                                    break
                                }
                                m >>>= 4;
                                s -= 4;
                                Q = (m & 15) + 8;
                                if (0 === b.wbits) b.wbits = Q;
                                else if (Q > b.wbits) {
                                    a.msg = "invalid window size";
                                    b.mode = 30;
                                    break
                                }
                                b.dmax = 1 << Q;
                                a.adler = b.check = 1;
                                b.mode = m & 512 ? 10 : 12;
                                s = m = 0;
                                break;
                            case 2:
                                for (; 16 > s;) {
                                    if (0 === l) break a;
                                    l--;
                                    m += r[G++] << s;
                                    s += 8
                                }
                                b.flags =
                                    m;
                                if (8 !== (b.flags & 255)) {
                                    a.msg = "unknown compression method";
                                    b.mode = 30;
                                    break
                                }
                                if (b.flags & 57344) {
                                    a.msg = "unknown header flags set";
                                    b.mode = 30;
                                    break
                                }
                                b.head && (b.head.text = m >> 8 & 1);
                                b.flags & 512 && (X[0] = m & 255, X[1] = m >>> 8 & 255, b.check = p(b.check, X, 2, 0));
                                s = m = 0;
                                b.mode = 3;
                            case 3:
                                for (; 32 > s;) {
                                    if (0 === l) break a;
                                    l--;
                                    m += r[G++] << s;
                                    s += 8
                                }
                                b.head && (b.head.time = m);
                                b.flags & 512 && (X[0] = m & 255, X[1] = m >>> 8 & 255, X[2] = m >>> 16 & 255, X[3] = m >>> 24 & 255, b.check = p(b.check, X, 4, 0));
                                s = m = 0;
                                b.mode = 4;
                            case 4:
                                for (; 16 > s;) {
                                    if (0 === l) break a;
                                    l--;
                                    m += r[G++] << s;
                                    s +=
                                        8
                                }
                                b.head && (b.head.xflags = m & 255, b.head.os = m >> 8);
                                b.flags & 512 && (X[0] = m & 255, X[1] = m >>> 8 & 255, b.check = p(b.check, X, 2, 0));
                                s = m = 0;
                                b.mode = 5;
                            case 5:
                                if (b.flags & 1024) {
                                    for (; 16 > s;) {
                                        if (0 === l) break a;
                                        l--;
                                        m += r[G++] << s;
                                        s += 8
                                    }
                                    b.length = m;
                                    b.head && (b.head.extra_len = m);
                                    b.flags & 512 && (X[0] = m & 255, X[1] = m >>> 8 & 255, b.check = p(b.check, X, 2, 0));
                                    s = m = 0
                                } else b.head && (b.head.extra = null);
                                b.mode = 6;
                            case 6:
                                if (b.flags & 1024 && (E = b.length, E > l && (E = l), E && (b.head && (Q = b.head.extra_len - b.length, b.head.extra || (b.head.extra = Array(b.head.extra_len)), c.arraySet(b.head.extra,
                                        r, G, E, Q)), b.flags & 512 && (b.check = p(b.check, r, E, G)), l -= E, G += E, b.length -= E), b.length)) break a;
                                b.length = 0;
                                b.mode = 7;
                            case 7:
                                if (b.flags & 2048) {
                                    if (0 === l) break a;
                                    E = 0;
                                    do Q = r[G + E++], b.head && Q && 65536 > b.length && (b.head.name += String.fromCharCode(Q)); while (Q && E < l);
                                    b.flags & 512 && (b.check = p(b.check, r, E, G));
                                    l -= E;
                                    G += E;
                                    if (Q) break a
                                } else b.head && (b.head.name = null);
                                b.length = 0;
                                b.mode = 8;
                            case 8:
                                if (b.flags & 4096) {
                                    if (0 === l) break a;
                                    E = 0;
                                    do Q = r[G + E++], b.head && Q && 65536 > b.length && (b.head.comment += String.fromCharCode(Q)); while (Q && E <
                                        l);
                                    b.flags & 512 && (b.check = p(b.check, r, E, G));
                                    l -= E;
                                    G += E;
                                    if (Q) break a
                                } else b.head && (b.head.comment = null);
                                b.mode = 9;
                            case 9:
                                if (b.flags & 512) {
                                    for (; 16 > s;) {
                                        if (0 === l) break a;
                                        l--;
                                        m += r[G++] << s;
                                        s += 8
                                    }
                                    if (m !== (b.check & 65535)) {
                                        a.msg = "header crc mismatch";
                                        b.mode = 30;
                                        break
                                    }
                                    s = m = 0
                                }
                                b.head && (b.head.hcrc = b.flags >> 9 & 1, b.head.done = !0);
                                a.adler = b.check = 0;
                                b.mode = 12;
                                break;
                            case 10:
                                for (; 32 > s;) {
                                    if (0 === l) break a;
                                    l--;
                                    m += r[G++] << s;
                                    s += 8
                                }
                                a.adler = b.check = f(m);
                                s = m = 0;
                                b.mode = 11;
                            case 11:
                                if (0 === b.havedict) return a.next_out = q, a.avail_out = n, a.next_in =
                                    G, a.avail_in = l, b.hold = m, b.bits = s, 2;
                                a.adler = b.check = 1;
                                b.mode = 12;
                            case 12:
                                if (5 === d || 6 === d) break a;
                            case 13:
                                if (b.last) {
                                    m >>>= s & 7;
                                    s -= s & 7;
                                    b.mode = 27;
                                    break
                                }
                                for (; 3 > s;) {
                                    if (0 === l) break a;
                                    l--;
                                    m += r[G++] << s;
                                    s += 8
                                }
                                b.last = m & 1;
                                m >>>= 1;
                                s -= 1;
                                switch (m & 3) {
                                    case 0:
                                        b.mode = 14;
                                        break;
                                    case 1:
                                        E = b;
                                        if (u) {
                                            Q = void 0;
                                            z = new c.Buf32(512);
                                            H = new c.Buf32(32);
                                            for (Q = 0; 144 > Q;) E.lens[Q++] = 8;
                                            for (; 256 > Q;) E.lens[Q++] = 9;
                                            for (; 280 > Q;) E.lens[Q++] = 7;
                                            for (; 288 > Q;) E.lens[Q++] = 8;
                                            x(1, E.lens, 0, 288, z, 0, E.work, {
                                                bits: 9
                                            });
                                            for (Q = 0; 32 > Q;) E.lens[Q++] = 5;
                                            x(2, E.lens,
                                                0, 32, H, 0, E.work, {
                                                    bits: 5
                                                });
                                            u = !1
                                        }
                                        E.lencode = z;
                                        E.lenbits = 9;
                                        E.distcode = H;
                                        E.distbits = 5;
                                        b.mode = 20;
                                        if (6 === d) {
                                            m >>>= 2;
                                            s -= 2;
                                            break a
                                        }
                                        break;
                                    case 2:
                                        b.mode = 17;
                                        break;
                                    case 3:
                                        a.msg = "invalid block type", b.mode = 30
                                }
                                m >>>= 2;
                                s -= 2;
                                break;
                            case 14:
                                m >>>= s & 7;
                                for (s -= s & 7; 32 > s;) {
                                    if (0 === l) break a;
                                    l--;
                                    m += r[G++] << s;
                                    s += 8
                                }
                                if ((m & 65535) !== (m >>> 16 ^ 65535)) {
                                    a.msg = "invalid stored block lengths";
                                    b.mode = 30;
                                    break
                                }
                                b.length = m & 65535;
                                s = m = 0;
                                b.mode = 15;
                                if (6 === d) break a;
                            case 15:
                                b.mode = 16;
                            case 16:
                                if (E = b.length) {
                                    E > l && (E = l);
                                    E > n && (E = n);
                                    if (0 === E) break a;
                                    c.arraySet(K,
                                        r, G, E, q);
                                    l -= E;
                                    G += E;
                                    n -= E;
                                    q += E;
                                    b.length -= E;
                                    break
                                }
                                b.mode = 12;
                                break;
                            case 17:
                                for (; 14 > s;) {
                                    if (0 === l) break a;
                                    l--;
                                    m += r[G++] << s;
                                    s += 8
                                }
                                b.nlen = (m & 31) + 257;
                                m >>>= 5;
                                s -= 5;
                                b.ndist = (m & 31) + 1;
                                m >>>= 5;
                                s -= 5;
                                b.ncode = (m & 15) + 4;
                                m >>>= 4;
                                s -= 4;
                                if (286 < b.nlen || 30 < b.ndist) {
                                    a.msg = "too many length or distance symbols";
                                    b.mode = 30;
                                    break
                                }
                                b.have = 0;
                                b.mode = 18;
                            case 18:
                                for (; b.have < b.ncode;) {
                                    for (; 3 > s;) {
                                        if (0 === l) break a;
                                        l--;
                                        m += r[G++] << s;
                                        s += 8
                                    }
                                    b.lens[R[b.have++]] = m & 7;
                                    m >>>= 3;
                                    s -= 3
                                }
                                for (; 19 > b.have;) b.lens[R[b.have++]] = 0;
                                b.lencode = b.lendyn;
                                b.lenbits = 7;
                                E = {
                                    bits: b.lenbits
                                };
                                F = x(0, b.lens, 0, 19, b.lencode, 0, b.work, E);
                                b.lenbits = E.bits;
                                if (F) {
                                    a.msg = "invalid code lengths set";
                                    b.mode = 30;
                                    break
                                }
                                b.have = 0;
                                b.mode = 19;
                            case 19:
                                for (; b.have < b.nlen + b.ndist;) {
                                    for (;;) {
                                        E = b.lencode[m & (1 << b.lenbits) - 1];
                                        B = E >>> 24;
                                        V = E >>> 16 & 255;
                                        ba = E & 65535;
                                        if (B <= s) break;
                                        if (0 === l) break a;
                                        l--;
                                        m += r[G++] << s;
                                        s += 8
                                    }
                                    if (16 > ba) m >>>= B, s -= B, b.lens[b.have++] = ba;
                                    else {
                                        if (16 === ba) {
                                            for (E = B + 2; s < E;) {
                                                if (0 === l) break a;
                                                l--;
                                                m += r[G++] << s;
                                                s += 8
                                            }
                                            m >>>= B;
                                            s -= B;
                                            if (0 === b.have) {
                                                a.msg = "invalid bit length repeat";
                                                b.mode = 30;
                                                break
                                            }
                                            Q =
                                                b.lens[b.have - 1];
                                            E = 3 + (m & 3);
                                            m >>>= 2;
                                            s -= 2
                                        } else if (17 === ba) {
                                            for (E = B + 3; s < E;) {
                                                if (0 === l) break a;
                                                l--;
                                                m += r[G++] << s;
                                                s += 8
                                            }
                                            m >>>= B;
                                            s -= B;
                                            Q = 0;
                                            E = 3 + (m & 7);
                                            m >>>= 3;
                                            s -= 3
                                        } else {
                                            for (E = B + 7; s < E;) {
                                                if (0 === l) break a;
                                                l--;
                                                m += r[G++] << s;
                                                s += 8
                                            }
                                            m >>>= B;
                                            s -= B;
                                            Q = 0;
                                            E = 11 + (m & 127);
                                            m >>>= 7;
                                            s -= 7
                                        }
                                        if (b.have + E > b.nlen + b.ndist) {
                                            a.msg = "invalid bit length repeat";
                                            b.mode = 30;
                                            break
                                        }
                                        for (; E--;) b.lens[b.have++] = Q
                                    }
                                }
                                if (30 === b.mode) break;
                                if (0 === b.lens[256]) {
                                    a.msg = "invalid code -- missing end-of-block";
                                    b.mode = 30;
                                    break
                                }
                                b.lenbits = 9;
                                E = {
                                    bits: b.lenbits
                                };
                                F = x(1, b.lens,
                                    0, b.nlen, b.lencode, 0, b.work, E);
                                b.lenbits = E.bits;
                                if (F) {
                                    a.msg = "invalid literal/lengths set";
                                    b.mode = 30;
                                    break
                                }
                                b.distbits = 6;
                                b.distcode = b.distdyn;
                                E = {
                                    bits: b.distbits
                                };
                                F = x(2, b.lens, b.nlen, b.ndist, b.distcode, 0, b.work, E);
                                b.distbits = E.bits;
                                if (F) {
                                    a.msg = "invalid distances set";
                                    b.mode = 30;
                                    break
                                }
                                b.mode = 20;
                                if (6 === d) break a;
                            case 20:
                                b.mode = 21;
                            case 21:
                                if (6 <= l && 258 <= n) {
                                    a.next_out = q;
                                    a.avail_out = n;
                                    a.next_in = G;
                                    a.avail_in = l;
                                    b.hold = m;
                                    b.bits = s;
                                    g(a, P);
                                    q = a.next_out;
                                    K = a.output;
                                    n = a.avail_out;
                                    G = a.next_in;
                                    r = a.input;
                                    l = a.avail_in;
                                    m = b.hold;
                                    s = b.bits;
                                    12 === b.mode && (b.back = -1);
                                    break
                                }
                                for (b.back = 0;;) {
                                    E = b.lencode[m & (1 << b.lenbits) - 1];
                                    B = E >>> 24;
                                    V = E >>> 16 & 255;
                                    ba = E & 65535;
                                    if (B <= s) break;
                                    if (0 === l) break a;
                                    l--;
                                    m += r[G++] << s;
                                    s += 8
                                }
                                if (V && 0 === (V & 240)) {
                                    Q = B;
                                    $ = V;
                                    for (Z = ba;;) {
                                        E = b.lencode[Z + ((m & (1 << Q + $) - 1) >> Q)];
                                        B = E >>> 24;
                                        V = E >>> 16 & 255;
                                        ba = E & 65535;
                                        if (Q + B <= s) break;
                                        if (0 === l) break a;
                                        l--;
                                        m += r[G++] << s;
                                        s += 8
                                    }
                                    m >>>= Q;
                                    s -= Q;
                                    b.back += Q
                                }
                                m >>>= B;
                                s -= B;
                                b.back += B;
                                b.length = ba;
                                if (0 === V) {
                                    b.mode = 26;
                                    break
                                }
                                if (V & 32) {
                                    b.back = -1;
                                    b.mode = 12;
                                    break
                                }
                                if (V & 64) {
                                    a.msg = "invalid literal/length code";
                                    b.mode = 30;
                                    break
                                }
                                b.extra = V & 15;
                                b.mode = 22;
                            case 22:
                                if (b.extra) {
                                    for (E = b.extra; s < E;) {
                                        if (0 === l) break a;
                                        l--;
                                        m += r[G++] << s;
                                        s += 8
                                    }
                                    b.length += m & (1 << b.extra) - 1;
                                    m >>>= b.extra;
                                    s -= b.extra;
                                    b.back += b.extra
                                }
                                b.was = b.length;
                                b.mode = 23;
                            case 23:
                                for (;;) {
                                    E = b.distcode[m & (1 << b.distbits) - 1];
                                    B = E >>> 24;
                                    V = E >>> 16 & 255;
                                    ba = E & 65535;
                                    if (B <= s) break;
                                    if (0 === l) break a;
                                    l--;
                                    m += r[G++] << s;
                                    s += 8
                                }
                                if (0 === (V & 240)) {
                                    Q = B;
                                    $ = V;
                                    for (Z = ba;;) {
                                        E = b.distcode[Z + ((m & (1 << Q + $) - 1) >> Q)];
                                        B = E >>> 24;
                                        V = E >>> 16 & 255;
                                        ba = E & 65535;
                                        if (Q + B <= s) break;
                                        if (0 === l) break a;
                                        l--;
                                        m += r[G++] << s;
                                        s += 8
                                    }
                                    m >>>= Q;
                                    s -= Q;
                                    b.back += Q
                                }
                                m >>>= B;
                                s -= B;
                                b.back += B;
                                if (V & 64) {
                                    a.msg = "invalid distance code";
                                    b.mode = 30;
                                    break
                                }
                                b.offset = ba;
                                b.extra = V & 15;
                                b.mode = 24;
                            case 24:
                                if (b.extra) {
                                    for (E = b.extra; s < E;) {
                                        if (0 === l) break a;
                                        l--;
                                        m += r[G++] << s;
                                        s += 8
                                    }
                                    b.offset += m & (1 << b.extra) - 1;
                                    m >>>= b.extra;
                                    s -= b.extra;
                                    b.back += b.extra
                                }
                                if (b.offset > b.dmax) {
                                    a.msg = "invalid distance too far back";
                                    b.mode = 30;
                                    break
                                }
                                b.mode = 25;
                            case 25:
                                if (0 === n) break a;
                                E = P - n;
                                if (b.offset > E) {
                                    E = b.offset - E;
                                    if (E > b.whave && b.sane) {
                                        a.msg = "invalid distance too far back";
                                        b.mode = 30;
                                        break
                                    }
                                    E >
                                        b.wnext ? (E -= b.wnext, Q = b.wsize - E) : Q = b.wnext - E;
                                    E > b.length && (E = b.length);
                                    $ = b.window
                                } else $ = K, Q = q - b.offset, E = b.length;
                                E > n && (E = n);
                                n -= E;
                                b.length -= E;
                                do K[q++] = $[Q++]; while (--E);
                                0 === b.length && (b.mode = 21);
                                break;
                            case 26:
                                if (0 === n) break a;
                                K[q++] = b.length;
                                n--;
                                b.mode = 21;
                                break;
                            case 27:
                                if (b.wrap) {
                                    for (; 32 > s;) {
                                        if (0 === l) break a;
                                        l--;
                                        m |= r[G++] << s;
                                        s += 8
                                    }
                                    P -= n;
                                    a.total_out += P;
                                    b.total += P;
                                    P && (a.adler = b.check = b.flags ? p(b.check, K, P, q - P) : e(b.check, K, P, q - P));
                                    P = n;
                                    if ((b.flags ? m : f(m)) !== b.check) {
                                        a.msg = "incorrect data check";
                                        b.mode =
                                            30;
                                        break
                                    }
                                    s = m = 0
                                }
                                b.mode = 28;
                            case 28:
                                if (b.wrap && b.flags) {
                                    for (; 32 > s;) {
                                        if (0 === l) break a;
                                        l--;
                                        m += r[G++] << s;
                                        s += 8
                                    }
                                    if (m !== (b.total & 4294967295)) {
                                        a.msg = "incorrect length check";
                                        b.mode = 30;
                                        break
                                    }
                                    s = m = 0
                                }
                                b.mode = 29;
                            case 29:
                                F = 1;
                                break a;
                            case 30:
                                F = -3;
                                break a;
                            case 31:
                                return -4;
                            default:
                                return y
                        }
                        a.next_out = q;
                        a.avail_out = n;
                        a.next_in = G;
                        a.avail_in = l;
                        b.hold = m;
                        b.bits = s;
                        if (b.wsize || P !== a.avail_out && 30 > b.mode && (27 > b.mode || 4 !== d)) r = a.output, G = a.next_out, q = P - a.avail_out, n = a.state, null === n.window && (n.wsize = 1 << n.wbits, n.wnext = 0, n.whave =
                            0, n.window = new c.Buf8(n.wsize)), q >= n.wsize ? (c.arraySet(n.window, r, G - n.wsize, n.wsize, 0), n.wnext = 0, n.whave = n.wsize) : (l = n.wsize - n.wnext, l > q && (l = q), c.arraySet(n.window, r, G - q, l, n.wnext), (q -= l) ? (c.arraySet(n.window, r, G - q, q, 0), n.wnext = q, n.whave = n.wsize) : (n.wnext += l, n.wnext === n.wsize && (n.wnext = 0), n.whave < n.wsize && (n.whave += l)));
                        w -= a.avail_in;
                        P -= a.avail_out;
                        a.total_in += w;
                        a.total_out += P;
                        b.total += P;
                        b.wrap && P && (a.adler = b.check = b.flags ? p(b.check, K, P, a.next_out - P) : e(b.check, K, P, a.next_out - P));
                        a.data_type = b.bits +
                            (b.last ? 64 : 0) + (12 === b.mode ? 128 : 0) + (20 === b.mode || 15 === b.mode ? 256 : 0);
                        (0 === w && 0 === P || 4 === d) && F === t && (F = -5);
                        return F
                    };
                    b.inflateEnd = function(a) {
                        if (!a || !a.state) return y;
                        var c = a.state;
                        c.window && (c.window = null);
                        a.state = null;
                        return t
                    };
                    b.inflateGetHeader = function(a, c) {
                        var b;
                        if (!a || !a.state) return y;
                        b = a.state;
                        if (0 === (b.wrap & 2)) return y;
                        b.head = c;
                        c.done = !1;
                        return t
                    };
                    b.inflateInfo = "pako inflate (from Nodeca project)"
                }, {
                    "../utils/common": 2,
                    "./adler32": 4,
                    "./crc32": 6,
                    "./inffast": 8,
                    "./inftrees": 10
                }],
                10: [function(a,
                    d, b) {
                    var f = a("../utils/common"),
                        n = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
                        q = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
                        m = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
                        l = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
                    d.exports = function(a, c, b, d, g, x, t, y) {
                        for (var v = y.bits, s = 0, w =
                                0, u = 0, z = 0, H = 0, C = 0, D = 0, I = 0, N = 0, K = 0, G, A, Y = null, T = 0, J, U = new f.Buf16(16), C = new f.Buf16(16), aa = null, P = 0, E, Q, $, s = 0; 15 >= s; s++) U[s] = 0;
                        for (w = 0; w < d; w++) U[c[b + w]]++;
                        H = v;
                        for (z = 15; 1 <= z && 0 === U[z]; z--);
                        H > z && (H = z);
                        if (0 === z) return g[x++] = 20971520, g[x++] = 20971520, y.bits = 1, 0;
                        for (u = 1; u < z && 0 === U[u]; u++);
                        H < u && (H = u);
                        for (s = I = 1; 15 >= s; s++)
                            if (I <<= 1, I -= U[s], 0 > I) return -1;
                        if (0 < I && (0 === a || 1 !== z)) return -1;
                        C[1] = 0;
                        for (s = 1; 15 > s; s++) C[s + 1] = C[s] + U[s];
                        for (w = 0; w < d; w++) 0 !== c[b + w] && (t[C[c[b + w]]++] = w);
                        switch (a) {
                            case 0:
                                Y = aa = t;
                                J = 19;
                                break;
                            case 1:
                                Y =
                                    n;
                                T -= 257;
                                aa = q;
                                P -= 257;
                                J = 256;
                                break;
                            default:
                                Y = m, aa = l, J = -1
                        }
                        w = K = 0;
                        s = u;
                        v = x;
                        C = H;
                        D = 0;
                        A = -1;
                        N = 1 << H;
                        d = N - 1;
                        if (1 === a && 852 < N || 2 === a && 592 < N) return 1;
                        for (var B = 0;;) {
                            B++;
                            E = s - D;
                            t[w] < J ? (Q = 0, $ = t[w]) : t[w] > J ? (Q = aa[P + t[w]], $ = Y[T + t[w]]) : (Q = 96, $ = 0);
                            I = 1 << s - D;
                            u = G = 1 << C;
                            do G -= I, g[v + (K >> D) + G] = E << 24 | Q << 16 | $ | 0; while (0 !== G);
                            for (I = 1 << s - 1; K & I;) I >>= 1;
                            0 !== I ? (K &= I - 1, K += I) : K = 0;
                            w++;
                            if (0 === --U[s]) {
                                if (s === z) break;
                                s = c[b + t[w]]
                            }
                            if (s > H && (K & d) !== A) {
                                0 === D && (D = H);
                                v += u;
                                C = s - D;
                                for (I = 1 << C; C + D < z;) {
                                    I -= U[C + D];
                                    if (0 >= I) break;
                                    C++;
                                    I <<= 1
                                }
                                N += 1 << C;
                                if (1 === a &&
                                    852 < N || 2 === a && 592 < N) return 1;
                                A = K & d;
                                g[A] = H << 24 | C << 16 | v - x | 0
                            }
                        }
                        0 !== K && (g[v + K] = s - D << 24 | 4194304);
                        y.bits = H;
                        return 0
                    }
                }, {
                    "../utils/common": 2
                }],
                11: [function(a, d, b) {
                    d.exports = {
                        2: "need dictionary",
                        1: "stream end",
                        0: "",
                        "-1": "file error",
                        "-2": "stream error",
                        "-3": "data error",
                        "-4": "insufficient memory",
                        "-5": "buffer error",
                        "-6": "incompatible version"
                    }
                }, {}],
                12: [function(a, d, b) {
                    d.exports = function() {
                        this.input = null;
                        this.total_in = this.avail_in = this.next_in = 0;
                        this.output = null;
                        this.total_out = this.avail_out = this.next_out =
                            0;
                        this.msg = "";
                        this.state = null;
                        this.data_type = 2;
                        this.adler = 0
                    }
                }, {}]
            }, {}, [1])(1)
        });
        return {
            inflate: function(k, a) {
                return f.inflateRaw(k)
            }
        }
    }()
})();
core.StepDirection = {
    PREVIOUS: 1,
    NEXT: 2
};
core.StepIterator = function(f, k) {
    function a() {
        c = null;
        p = e = void 0
    }

    function d() {
        void 0 === p && (p = f.acceptPosition(k) === l);
        return p
    }

    function b(c, b) {
        a();
        return k.setUnfilteredPosition(c, b)
    }

    function h() {
        c || (c = k.container());
        return c
    }

    function n() {
        void 0 === e && (e = k.unfilteredDomOffset());
        return e
    }

    function q() {
        for (a(); k.nextPosition();)
            if (a(), d()) return !0;
        return !1
    }

    function m() {
        for (a(); k.previousPosition();)
            if (a(), d()) return !0;
        return !1
    }
    var l = core.PositionFilter.FilterResult.FILTER_ACCEPT,
        r = core.StepDirection.NEXT,
        c, e, p;
    this.isStep = d;
    this.setPosition = b;
    this.container = h;
    this.offset = n;
    this.nextStep = q;
    this.previousStep = m;
    this.advanceStep = function(a) {
        return a === r ? q() : m()
    };
    this.roundToClosestStep = function() {
        var a, c, e = d();
        e || (a = h(), c = n(), e = m(), e || (b(a, c), e = q()));
        return e
    };
    this.roundToPreviousStep = function() {
        var a = d();
        a || (a = m());
        return a
    };
    this.roundToNextStep = function() {
        var a = d();
        a || (a = q());
        return a
    };
    this.leftNode = function() {
        return k.leftNode()
    };
    this.snapshot = function() {
        return new core.StepIterator.StepSnapshot(h(),
            n())
    };
    this.restore = function(a) {
        b(a.container, a.offset)
    }
};
core.StepIterator.StepSnapshot = function(f, k) {
    this.container = f;
    this.offset = k
};
core.UnitTest = function() {};
core.UnitTest.prototype.setUp = function() {};
core.UnitTest.prototype.tearDown = function() {};
core.UnitTest.prototype.description = function() {};
core.UnitTest.prototype.tests = function() {};
core.UnitTest.prototype.asyncTests = function() {};
core.UnitTest.provideTestAreaDiv = function() {
    var f = runtime.getWindow().document,
        k = f.getElementById("testarea");
    runtime.assert(!k, 'Unclean test environment, found a div with id "testarea".');
    k = f.createElement("div");
    k.setAttribute("id", "testarea");
    f.body.appendChild(k);
    return k
};
core.UnitTest.cleanupTestAreaDiv = function() {
    var f = runtime.getWindow().document,
        k = f.getElementById("testarea");
    runtime.assert(!!k && k.parentNode === f.body, 'Test environment broken, found no div with id "testarea" below body.');
    f.body.removeChild(k)
};
core.UnitTest.createXmlDocument = function(f, k, a) {
    var d = "<?xml version='1.0' encoding='UTF-8'?>",
        d = d + ("<" + f);
    Object.keys(a).forEach(function(b) {
        d += " xmlns:" + b + '="' + a[b] + '"'
    });
    d += ">";
    d += k;
    d += "</" + f + ">";
    return runtime.parseXML(d)
};
core.UnitTest.createOdtDocument = function(f, k) {
    return core.UnitTest.createXmlDocument("office:document", f, k)
};
core.UnitTestLogger = function() {
    var f = [],
        k = 0,
        a = 0,
        d = "",
        b = "";
    this.startTest = function(h, n) {
        f = [];
        k = 0;
        d = h;
        b = n;
        a = Date.now()
    };
    this.endTest = function() {
        var h = Date.now();
        return {
            description: b,
            suite: [d, b],
            success: 0 === k,
            log: f,
            time: h - a
        }
    };
    this.debug = function(a) {
        f.push({
            category: "debug",
            message: a
        })
    };
    this.fail = function(a) {
        k += 1;
        f.push({
            category: "fail",
            message: a
        })
    };
    this.pass = function(a) {
        f.push({
            category: "pass",
            message: a
        })
    }
};
core.UnitTestRunner = function(f, k) {
    function a(a) {
        l += 1;
        e ? k.debug(a) : k.fail(a)
    }

    function d(c, b) {
        var e;
        try {
            if (c.length !== b.length) return a("array of length " + c.length + " should be " + b.length + " long"), !1;
            for (e = 0; e < c.length; e += 1)
                if (c[e] !== b[e]) return a(c[e] + " should be " + b[e] + " at array index " + e), !1
        } catch (d) {
            return !1
        }
        return !0
    }

    function b(c, g, e) {
        var d = c.attributes,
            f = d.length,
            h, l, m;
        for (h = 0; h < f; h += 1)
            if (l = d.item(h), "xmlns" !== l.prefix && "urn:webodf:names:steps" !== l.namespaceURI) {
                m = g.getAttributeNS(l.namespaceURI,
                    l.localName);
                if (!g.hasAttributeNS(l.namespaceURI, l.localName)) return a("Attribute " + l.localName + " with value " + l.value + " was not present"), !1;
                if (m !== l.value) return a("Attribute " + l.localName + " was " + m + " should be " + l.value), !1
            } return e ? !0 : b(g, c, !0)
    }

    function h(c, g) {
        var e, d;
        e = c.nodeType;
        d = g.nodeType;
        if (e !== d) return a("Nodetype '" + e + "' should be '" + d + "'"), !1;
        if (e === Node.TEXT_NODE) {
            if (c.data === g.data) return !0;
            a("Textnode data '" + c.data + "' should be '" + g.data + "'");
            return !1
        }
        runtime.assert(e === Node.ELEMENT_NODE,
            "Only textnodes and elements supported.");
        if (c.namespaceURI !== g.namespaceURI) return a("namespace '" + c.namespaceURI + "' should be '" + g.namespaceURI + "'"), !1;
        if (c.localName !== g.localName) return a("localName '" + c.localName + "' should be '" + g.localName + "'"), !1;
        if (!b(c, g, !1)) return !1;
        e = c.firstChild;
        for (d = g.firstChild; e;) {
            if (!d) return a("Nodetype '" + e.nodeType + "' is unexpected here."), !1;
            if (!h(e, d)) return !1;
            e = e.nextSibling;
            d = d.nextSibling
        }
        return d ? (a("Nodetype '" + d.nodeType + "' is missing here."), !1) : !0
    }

    function n(a,
        b, e) {
        if (0 === b) return a === b && 1 / a === 1 / b;
        if (a === b) return !0;
        if (null === a || null === b) return !1;
        if ("number" === typeof b && isNaN(b)) return "number" === typeof a && isNaN(a);
        if ("number" === typeof b && "number" === typeof a) {
            if (a === b) return !0;
            void 0 === e && (e = 1E-4);
            runtime.assert("number" === typeof e, "Absolute tolerance not given as number.");
            runtime.assert(0 <= e, "Absolute tolerance should be given as positive number, was " + e);
            a = Math.abs(a - b);
            return a <= e
        }
        return Object.prototype.toString.call(b) === Object.prototype.toString.call([]) ?
            d(a, b) : "object" === typeof b && "object" === typeof a ? b.constructor === Element || b.constructor === Node ? h(a, b) : c(a, b) : !1
    }

    function q(a) {
        if (0 === a && 0 > 1 / a) return "-0";
        if ("object" === typeof a) try {
            return JSON.stringify(a)
        } catch (c) {}
        return String(a)
    }

    function m(c, b, e, d) {
        "string" === typeof b && "string" === typeof e || k.debug("WARN: shouldBe() expects string arguments");
        var f, h;
        try {
            h = eval(b)
        } catch (l) {
            f = l
        }
        c = eval(e);
        f ? a(b + " should be " + c + ". Threw exception " + f) : n(h, c, d) ? k.pass(b + " is " + e) : String(typeof h) === String(typeof c) ?
            a(b + " should be " + q(c) + ". Was " + q(h) + ".") : a(b + " should be " + c + " (of type " + typeof c + "). Was " + h + " (of type " + typeof h + ").")
    }
    var l = 0,
        r, c, e = !1;
    this.resourcePrefix = function() {
        return f
    };
    this.beginExpectFail = function() {
        r = l;
        e = !0
    };
    this.endExpectFail = function() {
        var a = r === l;
        e = !1;
        l = r;
        a && (l += 1, k.fail("Expected at least one failed test, but none registered."))
    };
    c = function(c, b) {
        var e = Object.keys(c),
            f = Object.keys(b);
        e.sort();
        f.sort();
        return d(e, f) && Object.keys(c).every(function(e) {
            var d = c[e],
                f = b[e];
            return n(d,
                f) ? !0 : (a(d + " should be " + f + " for key " + e), !1)
        })
    };
    this.areNodesEqual = h;
    this.shouldBeNull = function(a, c) {
        m(a, c, "null")
    };
    this.shouldBeNonNull = function(c, b) {
        var e, d;
        try {
            d = eval(b)
        } catch (f) {
            e = f
        }
        e ? a(b + " should be non-null. Threw exception " + e) : null !== d ? k.pass(b + " is non-null.") : a(b + " should be non-null. Was " + d)
    };
    this.shouldBe = m;
    this.testFailed = a;
    this.countFailedTests = function() {
        return l
    };
    this.name = function(a) {
        var c, b, e = [],
            d = a.length;
        e.length = d;
        for (c = 0; c < d; c += 1) {
            b = Runtime.getFunctionName(a[c]) || "";
            if ("" ===
                b) throw "Found a function without a name.";
            e[c] = {
                f: a[c],
                name: b
            }
        }
        return e
    }
};
core.UnitTester = function() {
    function f(a, b) {
        return "<span style='color:blue;cursor:pointer' onclick='" + b + "'>" + a.replace(/</g, "&lt;") + "</span>"
    }

    function k(b) {
        a.reporter && a.reporter(b)
    }
    var a = this,
        d = 0,
        b = new core.UnitTestLogger,
        h = {},
        n = "BrowserRuntime" === runtime.type();
    this.resourcePrefix = "";
    this.reporter = function(a) {
        var b, d;
        n ? runtime.log("<span>Running " + f(a.description, 'runTest("' + a.suite[0] + '","' + a.description + '")') + "</span>") : runtime.log("Running " + a.description);
        if (!a.success)
            for (b = 0; b < a.log.length; b +=
                1) d = a.log[b], runtime.log(d.category, d.message)
    };
    this.runTests = function(q, m, l) {
        function r(a) {
            function f() {
                q && e.endExpectFail();
                k(b.endTest());
                p.tearDown();
                g[n] = s === e.countFailedTests();
                r(a.slice(1))
            }
            var n, q;
            if (0 === a.length) h[c] = g, d += e.countFailedTests(), m();
            else if (t = a[0].f, n = a[0].name, q = !0 === a[0].expectFail, s = e.countFailedTests(), l.length && -1 === l.indexOf(n)) r(a.slice(1));
            else {
                p.setUp();
                b.startTest(c, n);
                q && e.beginExpectFail();
                try {
                    t(f)
                } catch (x) {
                    e.testFailed("Unexpected exception encountered: " + x.toString() +
                        "\n" + x.stack), f()
                }
            }
        }
        var c = Runtime.getFunctionName(q) || "",
            e = new core.UnitTestRunner(a.resourcePrefix, b),
            p = new q(e),
            g = {},
            x, t, y, v, s;
        if (h.hasOwnProperty(c)) runtime.log("Test " + c + " has already run.");
        else {
            n ? runtime.log("<span>Running " + f(c, 'runSuite("' + c + '");') + ": " + p.description() + "</span>") : runtime.log("Running " + c + ": " + p.description());
            y = p.tests();
            for (x = 0; x < y.length; x += 1)
                if (t = y[x].f, q = y[x].name, v = !0 === y[x].expectFail, !l.length || -1 !== l.indexOf(q)) {
                    s = e.countFailedTests();
                    p.setUp();
                    b.startTest(c, q);
                    v &&
                        e.beginExpectFail();
                    try {
                        t()
                    } catch (w) {
                        e.testFailed("Unexpected exception encountered: " + w.toString() + "\n" + w.stack)
                    }
                    v && e.endExpectFail();
                    k(b.endTest());
                    p.tearDown();
                    g[q] = s === e.countFailedTests()
                } r(p.asyncTests())
        }
    };
    this.failedTestsCount = function() {
        return d
    };
    this.results = function() {
        return h
    }
};
core.Utils = function() {
    function f(k, a) {
        if (a && Array.isArray(a)) {
            k = k || [];
            if (!Array.isArray(k)) throw "Destination is not an array.";
            k = k.concat(a.map(function(a) {
                return f(null, a)
            }))
        } else if (a && "object" === typeof a) {
            k = k || {};
            if ("object" !== typeof k) throw "Destination is not an object.";
            Object.keys(a).forEach(function(d) {
                k[d] = f(k[d], a[d])
            })
        } else k = a;
        return k
    }
    this.hashString = function(f) {
        var a = 0,
            d, b;
        d = 0;
        for (b = f.length; d < b; d += 1) a = (a << 5) - a + f.charCodeAt(d), a |= 0;
        return a
    };
    this.mergeObjects = function(k, a) {
        Object.keys(a).forEach(function(d) {
            k[d] =
                f(k[d], a[d])
        });
        return k
    }
};
core.Zip = function(f, k) {
    function a(a, c, b) {
        x ? b(null, x.subarray(a, a + c)) : b("File data not loaded", null)
    }

    function d(a) {
        var c = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145,
                1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878,
                1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068,
                1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842,
                628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896,
                3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918E3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117
            ],
            b, e, g = a.length,
            d = 0,
            d = 0;
        b = -1;
        for (e = 0; e < g; e += 1) d = (b ^ a[e]) & 255, d = c[d], b = b >>> 8 ^ d;
        return b ^ -1
    }

    function b(a) {
        return new Date((a >> 25 & 127) + 1980, (a >> 21 & 15) - 1, a >> 16 & 31, a >> 11 & 15,
            a >> 5 & 63, (a & 31) << 1)
    }

    function h(a) {
        var c = a.getFullYear();
        return 1980 > c ? 0 : c - 1980 << 25 | a.getMonth() + 1 << 21 | a.getDate() << 16 | a.getHours() << 11 | a.getMinutes() << 5 | a.getSeconds() >> 1
    }

    function n(c, e) {
        var g, d, p, f, h, l, m, r = this;
        this.load = function(b) {
            if (null !== r.data) b(null, r.data);
            else {
                var e = h + 34 + d + p + 256;
                e + m > t && (e = t - m);
                a(m, e, function(a, e) {
                    if (a || null === e) b(a, e);
                    else a: {
                        var g = e,
                            d = new core.ByteArray(g),
                            p = d.readUInt32LE(),
                            m;
                        if (67324752 !== p) b("File entry signature is wrong." + p.toString() + " " + g.length.toString(), null);
                        else {
                            d.pos += 22;
                            p = d.readUInt16LE();
                            m = d.readUInt16LE();
                            d.pos += p + m;
                            if (f) {
                                g = g.subarray(d.pos, d.pos + h);
                                if (h !== g.length) {
                                    b("The amount of compressed bytes read was " + g.length.toString() + " instead of " + h.toString() + " for " + r.filename + " in " + c + ".", null);
                                    break a
                                }
                                g = v(g, l)
                            } else g = g.subarray(d.pos, d.pos + l);
                            l !== g.length ? b("The amount of bytes read was " + g.length.toString() + " instead of " + l.toString() + " for " + r.filename + " in " + c + ".", null) : (r.data = g, b(null, g))
                        }
                    }
                })
            }
        };
        this.set = function(a, c, b, e) {
            r.filename = a;
            r.data =
                c;
            r.compressed = b;
            r.date = e
        };
        this.error = null;
        e && (g = e.readUInt32LE(), 33639248 !== g ? this.error = "Central directory entry has wrong signature at position " + (e.pos - 4).toString() + ' for file "' + c + '": ' + e.data.length.toString() : (e.pos += 6, f = e.readUInt16LE(), this.date = b(e.readUInt32LE()), e.readUInt32LE(), h = e.readUInt32LE(), l = e.readUInt32LE(), d = e.readUInt16LE(), p = e.readUInt16LE(), g = e.readUInt16LE(), e.pos += 8, m = e.readUInt32LE(), this.filename = runtime.byteArrayToString(e.data.subarray(e.pos, e.pos + d), "utf8"), this.data =
            null, e.pos += d + p + g))
    }

    function q(c, b) {
        if (22 !== c.length) b("Central directory length should be 22.", s);
        else {
            var e = new core.ByteArray(c),
                d;
            d = e.readUInt32LE();
            101010256 !== d ? b("Central directory signature is wrong: " + d.toString(), s) : (d = e.readUInt16LE(), 0 !== d ? b("Zip files with non-zero disk numbers are not supported.", s) : (d = e.readUInt16LE(), 0 !== d ? b("Zip files with non-zero disk numbers are not supported.", s) : (d = e.readUInt16LE(), y = e.readUInt16LE(), d !== y ? b("Number of entries is inconsistent.", s) : (d = e.readUInt32LE(),
                e = e.readUInt16LE(), e = t - 22 - d, a(e, t - e, function(a, c) {
                    if (a || null === c) b(a, s);
                    else a: {
                        var e = new core.ByteArray(c),
                            d, p;g = [];
                        for (d = 0; d < y; d += 1) {
                            p = new n(f, e);
                            if (p.error) {
                                b(p.error, s);
                                break a
                            }
                            g[g.length] = p
                        }
                        b(null, s)
                    }
                })))))
        }
    }

    function m(a, c) {
        var b = null,
            e, d;
        for (d = 0; d < g.length; d += 1)
            if (e = g[d], e.filename === a) {
                b = e;
                break
            } b ? b.data ? c(null, b.data) : b.load(c) : c(a + " not found.", null)
    }

    function l(a) {
        var c = new core.ByteArrayWriter("utf8"),
            b = 0;
        c.appendArray([80, 75, 3, 4, 20, 0, 0, 0, 0, 0]);
        a.data && (b = a.data.length);
        c.appendUInt32LE(h(a.date));
        c.appendUInt32LE(a.data ? d(a.data) : 0);
        c.appendUInt32LE(b);
        c.appendUInt32LE(b);
        c.appendUInt16LE(a.filename.length);
        c.appendUInt16LE(0);
        c.appendString(a.filename);
        a.data && c.appendByteArray(a.data);
        return c
    }

    function r(a, c) {
        var b = new core.ByteArrayWriter("utf8"),
            e = 0;
        b.appendArray([80, 75, 1, 2, 20, 0, 20, 0, 0, 0, 0, 0]);
        a.data && (e = a.data.length);
        b.appendUInt32LE(h(a.date));
        b.appendUInt32LE(a.data ? d(a.data) : 0);
        b.appendUInt32LE(e);
        b.appendUInt32LE(e);
        b.appendUInt16LE(a.filename.length);
        b.appendArray([0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0
        ]);
        b.appendUInt32LE(c);
        b.appendString(a.filename);
        return b
    }

    function c(a, b) {
        if (a === g.length) b(null);
        else {
            var e = g[a];
            null !== e.data ? c(a + 1, b) : e.load(function(e) {
                e ? b(e) : c(a + 1, b)
            })
        }
    }

    function e(a, b) {
        c(0, function(c) {
            if (c) b(c);
            else {
                var e, d, p = new core.ByteArrayWriter("utf8"),
                    f = [0];
                for (e = 0; e < g.length; e += 1) p.appendByteArrayWriter(l(g[e])), f.push(p.getLength());
                c = p.getLength();
                for (e = 0; e < g.length; e += 1) d = g[e], p.appendByteArrayWriter(r(d, f[e]));
                e = p.getLength() - c;
                p.appendArray([80, 75, 5, 6, 0, 0, 0, 0]);
                p.appendUInt16LE(g.length);
                p.appendUInt16LE(g.length);
                p.appendUInt32LE(e);
                p.appendUInt32LE(c);
                p.appendArray([0, 0]);
                a(p.getByteArray())
            }
        })
    }

    function p(a, c) {
        e(function(b) {
            runtime.writeFile(a, b, function(a) {
                a || (x = b, t = x.length);
                c(a)
            })
        }, c)
    }
    var g, x, t, y, v = core.RawInflate.inflate,
        s = this,
        w = new core.Base64;
    this.load = m;
    this.save = function(a, c, b, e) {
        var d, p;
        for (d = 0; d < g.length; d += 1)
            if (p = g[d], p.filename === a) {
                p.set(a, c, b, e);
                return
            } p = new n(f);
        p.set(a, c, b, e);
        g.push(p)
    };
    this.remove = function(a) {
        var c, b;
        for (c = 0; c < g.length; c += 1)
            if (b = g[c], b.filename ===
                a) return g.splice(c, 1), !0;
        return !1
    };
    this.write = function(a) {
        p(f, a)
    };
    this.writeAs = p;
    this.createByteArray = e;
    this.loadContentXmlAsFragments = function(a, c) {
        s.loadAsString(a, function(a, b) {
            if (a) return c.rootElementReady(a);
            c.rootElementReady(null, b, !0)
        })
    };
    this.loadAsString = function(a, c) {
        m(a, function(a, b) {
            if (a || null === b) return c(a, null);
            var e = runtime.byteArrayToString(b, "utf8");
            c(null, e)
        })
    };
    this.loadAsDOM = function(a, c) {
        s.loadAsString(a, function(a, b) {
            if (a || null === b) c(a, null);
            else {
                var e = (new DOMParser).parseFromString(b,
                    "text/xml");
                c(null, e)
            }
        })
    };
    this.loadAsDataURL = function(a, c, b) {
        m(a, function(a, e) {
            if (a || !e) return b(a, null);
            var g = 0,
                d;
            c || (c = 80 === e[1] && 78 === e[2] && 71 === e[3] ? "image/png" : 255 === e[0] && 216 === e[1] && 255 === e[2] ? "image/jpeg" : 71 === e[0] && 73 === e[1] && 70 === e[2] ? "image/gif" : "");
            for (d = "data:" + c + ";base64,"; g < e.length;) d += w.convertUTF8ArrayToBase64(e.subarray(g, Math.min(g + 45E3, e.length))), g += 45E3;
            b(null, d)
        })
    };
    this.getEntries = function() {
        return g.slice()
    };
    t = -1;
    null === k ? g = [] : runtime.readFile(f, "binary", function(c, b) {
        "string" ===
        typeof b && (c = "file was read as a string. Should be Uint8Array.");
        c || !b || 0 === b.length ? k("File '" + f + "' cannot be read. Err: " + (c || "[none]"), s) : (x = b, t = x.length, a(t - 22, 22, function(a, c) {
            a || null === c ? k(a, s) : q(c, k)
        }))
    })
};
core.SimpleClientRect = null;
gui.CommonConstraints = {
    EDIT: {
        ANNOTATIONS: {
            ONLY_DELETE_OWN: "onlyDeleteOwn"
        },
        REVIEW_MODE: "reviewMode"
    }
};
gui.SessionConstraints = function() {
    function f(d) {
        k.hasOwnProperty(d) || (k[d] = !1, a.register(d))
    }
    var k = {},
        a = new core.EventNotifier;
    this.registerConstraint = f;
    this.subscribe = function(d, b) {
        f(d);
        a.subscribe(d, b)
    };
    this.unsubscribe = function(d, b) {
        a.unsubscribe(d, b)
    };
    this.setState = function(d, b) {
        runtime.assert(!0 === k.hasOwnProperty(d), "No such constraint");
        k[d] !== b && (k[d] = b, a.emit(d, b))
    };
    this.getState = function(a) {
        runtime.assert(!0 === k.hasOwnProperty(a), "No such constraint");
        return k[a]
    }
};
gui.BlacklistNamespaceNodeFilter = function(f) {
    var k = {},
        a = NodeFilter.FILTER_REJECT,
        d = NodeFilter.FILTER_ACCEPT;
    this.acceptNode = function(b) {
        return !b || k.hasOwnProperty(b.namespaceURI) ? a : d
    };
    (function() {
        f.forEach(function(a) {
            k[a] = !0
        })
    })()
};
odf.Namespaces = {
    namespaceMap: {
        config: "urn:oasis:names:tc:opendocument:xmlns:config:1.0",
        db: "urn:oasis:names:tc:opendocument:xmlns:database:1.0",
        dc: "http://purl.org/dc/elements/1.1/",
        dr3d: "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",
        draw: "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
        chart: "urn:oasis:names:tc:opendocument:xmlns:chart:1.0",
        fo: "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
        form: "urn:oasis:names:tc:opendocument:xmlns:form:1.0",
        math: "http://www.w3.org/1998/Math/MathML",
        meta: "urn:oasis:names:tc:opendocument:xmlns:meta:1.0",
        number: "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
        office: "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
        presentation: "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",
        style: "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
        svg: "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
        table: "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
        text: "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
        xforms: "http://www.w3.org/2002/xforms",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace"
    },
    prefixMap: {},
    configns: "urn:oasis:names:tc:opendocument:xmlns:config:1.0",
    dbns: "urn:oasis:names:tc:opendocument:xmlns:database:1.0",
    dcns: "http://purl.org/dc/elements/1.1/",
    dr3dns: "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",
    drawns: "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
    chartns: "urn:oasis:names:tc:opendocument:xmlns:chart:1.0",
    fons: "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
    formns: "urn:oasis:names:tc:opendocument:xmlns:form:1.0",
    mathns: "http://www.w3.org/1998/Math/MathML",
    metans: "urn:oasis:names:tc:opendocument:xmlns:meta:1.0",
    numberns: "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
    officens: "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
    presentationns: "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",
    stylens: "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
    svgns: "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
    tablens: "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
    textns: "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
    xformsns: "http://www.w3.org/2002/xforms",
    xlinkns: "http://www.w3.org/1999/xlink",
    xmlns: "http://www.w3.org/XML/1998/namespace"
};
(function() {
    var f = odf.Namespaces.namespaceMap,
        k = odf.Namespaces.prefixMap,
        a;
    for (a in f) f.hasOwnProperty(a) && (k[f[a]] = a)
})();
odf.Namespaces.forEachPrefix = function(f) {
    var k = odf.Namespaces.namespaceMap,
        a;
    for (a in k) k.hasOwnProperty(a) && f(a, k[a])
};
odf.Namespaces.lookupNamespaceURI = function(f) {
    var k = null;
    odf.Namespaces.namespaceMap.hasOwnProperty(f) && (k = odf.Namespaces.namespaceMap[f]);
    return k
};
odf.Namespaces.lookupPrefix = function(f) {
    var k = odf.Namespaces.prefixMap;
    return k.hasOwnProperty(f) ? k[f] : null
};
odf.Namespaces.lookupNamespaceURI.lookupNamespaceURI = odf.Namespaces.lookupNamespaceURI;
(function() {
    odf.OdfSchemaImpl = function() {
        var f = [
                ["config:config-item", "uncategorized"],
                ["form:item", "object"],
                ["form:option", "uncategorized"],
                ["math:math", "field"],
                ["meta:user-defined", "uncategorized"],
                ["number:currency-symbol", "uncategorized"],
                ["number:embedded-text", "uncategorized"],
                ["number:text", "uncategorized"],
                ["presentation:date-time-decl", "uncategorized"],
                ["presentation:footer-decl", "uncategorized"],
                ["presentation:header-decl", "uncategorized"],
                ["svg:desc", "text"],
                ["svg:title", "text"],
                ["table:desc",
                    "uncategorized"
                ],
                ["table:title", "uncategorized"],
                ["text:a", "text"],
                ["text:author-initials", "field"],
                ["text:author-name", "field"],
                ["text:bibliography-mark", "field"],
                ["text:bookmark-ref", "field"],
                ["text:chapter", "field"],
                ["text:character-count", "field"],
                ["text:conditional-text", "field"],
                ["text:creation-date", "field"],
                ["text:creation-time", "field"],
                ["text:creator", "field"],
                ["text:database-display", "field"],
                ["text:database-name", "field"],
                ["text:database-row-number", "field"],
                ["text:date", "field"],
                ["text:dde-connection",
                    "field"
                ],
                ["text:description", "field"],
                ["text:editing-cycles", "field"],
                ["text:editing-duration", "field"],
                ["text:execute-macro", "uncategorized"],
                ["text:expression", "uncategorized"],
                ["text:file-name", "field"],
                ["text:h", "text"],
                ["text:hidden-paragraph", "text"],
                ["text:hidden-text", "text"],
                ["text:image-count", "field"],
                ["text:index-entry-span", "uncategorized"],
                ["text:index-title-template", "uncategorized"],
                ["text:initial-creator", "field"],
                ["text:keywords", "field"],
                ["text:linenumbering-separator", "style"],
                ["text:measure", "uncategorized"],
                ["text:meta", "uncategorized"],
                ["text:meta-field", "uncategorized"],
                ["text:modification-date", "field"],
                ["text:modification-time", "field"],
                ["text:note-citation", "field"],
                ["text:note-continuation-notice-backward", "style"],
                ["text:note-continuation-notice-forward", "style"],
                ["text:note-ref", "field"],
                ["text:object-count", "field"],
                ["text:p", "text"],
                ["text:page-continuation", "uncategorized"],
                ["text:page-count", "field"],
                ["text:page-number", "field"],
                ["text:page-variable-get",
                    "field"
                ],
                ["text:page-variable-set", "field"],
                ["text:paragraph-count", "field"],
                ["text:placeholder", "field"],
                ["text:print-date", "field"],
                ["text:print-time", "field"],
                ["text:printed-by", "field"],
                ["text:reference-ref", "field"],
                ["text:ruby-base", "text"],
                ["text:ruby-text", "text"],
                ["text:script", "text"],
                ["text:sender-city", "field"],
                ["text:sender-company", "field"],
                ["text:sender-country", "field"],
                ["text:sender-email", "field"],
                ["text:sender-fax", "field"],
                ["text:sender-firstname", "field"],
                ["text:sender-initials",
                    "field"
                ],
                ["text:sender-lastname", "field"],
                ["text:sender-phone-private", "field"],
                ["text:sender-phone-work", "field"],
                ["text:sender-position", "field"],
                ["text:sender-postal-code", "field"],
                ["text:sender-state-or-province", "field"],
                ["text:sender-street", "field"],
                ["text:sender-title", "field"],
                ["text:sequence", "uncategorized"],
                ["text:sequence-ref", "uncategorized"],
                ["text:sheet-name", "uncategorized"],
                ["text:span", "text"],
                ["text:subject", "field"],
                ["text:table-count", "field"],
                ["text:table-formula", "deprecated"],
                ["text:template-name", "uncategorized"],
                ["text:text-input", "field"],
                ["text:time", "field"],
                ["text:title", "field"],
                ["text:user-defined", "field"],
                ["text:user-field-get", "field"],
                ["text:user-field-input", "field"],
                ["text:variable-get", "field"],
                ["text:variable-input", "field"],
                ["text:variable-set", "field"],
                ["text:word-count", "field"],
                ["xforms:model", "uncategorized"]
            ],
            k = {};
        this.isTextContainer = function(a, d) {
            return "text" === k[a + ":" + d]
        };
        this.isField = function(a, d) {
            return "field" === k[a + ":" + d]
        };
        this.getFields = function() {
            return f.filter(function(a) {
                return "field" ===
                    a[1]
            }).map(function(a) {
                return a[0]
            })
        };
        (function() {
            f.forEach(function(a) {
                var d = a[1],
                    b = a[0].split(":");
                a = b[0];
                var b = b[1],
                    f = odf.Namespaces.lookupNamespaceURI(a);
                f ? k[f + ":" + b] = d : runtime.log("DEBUG: OdfSchema - unknown prefix '" + a + "'")
            })
        })()
    };
    odf.OdfSchema = new odf.OdfSchemaImpl
})();
odf.OdfUtilsImpl = function() {
    function f(a) {
        return "image" === (a && a.localName) && a.namespaceURI === T
    }

    function k(a) {
        return null !== a && a.nodeType === Node.ELEMENT_NODE && "frame" === a.localName && a.namespaceURI === T && "as-char" === a.getAttributeNS(Y, "anchor-type")
    }

    function a(a) {
        var c;
        (c = "annotation" === (a && a.localName) && a.namespaceURI === odf.Namespaces.officens) || (c = "div" === (a && a.localName) && "annotationWrapper" === a.className);
        return c
    }

    function d(a) {
        return "a" === (a && a.localName) && a.namespaceURI === Y
    }

    function b(a) {
        var c =
            a && a.localName;
        return ("p" === c || "h" === c) && a.namespaceURI === Y
    }

    function h(a, c) {
        for (a && void 0 !== c && !b(a) && a.childNodes.item(c) && (a = a.childNodes.item(c)); a && !b(a);) a = a.parentNode;
        return a
    }

    function n(a, c) {
        for (; a && a !== c;) {
            if (a.namespaceURI === odf.Namespaces.officens && "annotation" === a.localName) return a;
            a = a.parentNode
        }
        return null
    }

    function q(a) {
        return /^[ \t\r\n]+$/.test(a)
    }

    function m(a) {
        if (null === a || a.nodeType !== Node.ELEMENT_NODE) return !1;
        var c = a.localName;
        return P.isTextContainer(a.namespaceURI, c) || "span" ===
            c && "webodf-annotationHighlight" === a.className
    }

    function l(a) {
        return null === a || a.nodeType !== Node.ELEMENT_NODE ? !1 : P.isField(a.namespaceURI, a.localName)
    }

    function r(a) {
        var c = a && a.localName,
            b = !1;
        c && (a = a.namespaceURI, a === Y && (b = "s" === c || "tab" === c || "line-break" === c));
        return b
    }

    function c(c) {
        return r(c) || l(c) || k(c) || a(c)
    }

    function e(a) {
        var c = a && a.localName,
            b = !1;
        c && (a = a.namespaceURI, a === Y && (b = "s" === c));
        return b
    }

    function p(a) {
        return -1 !== aa.indexOf(a.namespaceURI)
    }

    function g(a) {
        if (r(a) || l(a)) return !1;
        if (m(a.parentNode) &&
            a.nodeType === Node.TEXT_NODE) return 0 === a.textContent.length;
        for (a = a.firstChild; a;) {
            if (p(a) || !g(a)) return !1;
            a = a.nextSibling
        }
        return !0
    }

    function x(a) {
        for (; null !== a.firstChild && m(a);) a = a.firstChild;
        return a
    }

    function t(a) {
        for (; null !== a.lastChild && m(a);) a = a.lastChild;
        return a
    }

    function y(a) {
        for (; !b(a) && null === a.previousSibling;) a = a.parentNode;
        return b(a) ? null : t(a.previousSibling)
    }

    function v(a) {
        for (; !b(a) && null === a.nextSibling;) a = a.parentNode;
        return b(a) ? null : x(a.nextSibling)
    }

    function s(a) {
        for (var b = !1; a;)
            if (a.nodeType ===
                Node.TEXT_NODE)
                if (0 === a.length) a = y(a);
                else return !q(a.data.substr(a.length - 1, 1));
        else c(a) ? (b = !1 === e(a), a = null) : a = y(a);
        return b
    }

    function w(a) {
        var b = !1,
            e;
        for (a = a && x(a); a;) {
            e = a.nodeType === Node.TEXT_NODE ? a.length : 0;
            if (0 < e && !q(a.data)) {
                b = !0;
                break
            }
            if (c(a)) {
                b = !0;
                break
            }
            a = v(a)
        }
        return b
    }

    function u(a, c) {
        return q(a.data.substr(c)) ? !w(v(a)) : !1
    }

    function z(a, b) {
        var e = a.data,
            g;
        if (!q(e[b]) || c(a.parentNode)) return !1;
        0 < b ? q(e[b - 1]) || (g = !0) : s(y(a)) && (g = !0);
        return !0 === g ? u(a, b) ? !1 : !0 : !1
    }

    function H(a) {
        return (a = /(-?[0-9]*[0-9][0-9]*(\.[0-9]*)?|0+\.[0-9]*[1-9][0-9]*|\.[0-9]*[1-9][0-9]*)((cm)|(mm)|(in)|(pt)|(pc)|(px)|(%))/.exec(a)) ? {
            value: parseFloat(a[1]),
            unit: a[3]
        } : null
    }

    function C(a) {
        return (a = H(a)) && (0 > a.value || "%" === a.unit) ? null : a
    }

    function D(a) {
        return (a = H(a)) && "%" !== a.unit ? null : a
    }

    function I(a) {
        switch (a.namespaceURI) {
            case odf.Namespaces.drawns:
            case odf.Namespaces.svgns:
            case odf.Namespaces.dr3dns:
                return !1;
            case odf.Namespaces.textns:
                switch (a.localName) {
                    case "note-body":
                    case "ruby-text":
                        return !1
                }
                break;
            case odf.Namespaces.officens:
                switch (a.localName) {
                    case "annotation":
                    case "binary-data":
                    case "event-listeners":
                        return !1
                }
                break;
            default:
                switch (a.localName) {
                    case "cursor":
                    case "editinfo":
                        return !1
                }
        }
        return !0
    }

    function N(a, c) {
        for (; 0 < c.length && !U.rangeContainsNode(a, c[0]);) c.shift();
        for (; 0 < c.length && !U.rangeContainsNode(a, c[c.length - 1]);) c.pop()
    }

    function K(b, e, g) {
        var d;
        d = U.getNodesInRange(b, function(b) {
                var e = NodeFilter.FILTER_REJECT;
                if (r(b.parentNode) || l(b.parentNode) || a(b)) e = NodeFilter.FILTER_REJECT;
                else if (b.nodeType === Node.TEXT_NODE) {
                    if (g || Boolean(h(b) && (!q(b.textContent) || z(b, 0)))) e = NodeFilter.FILTER_ACCEPT
                } else if (c(b)) e = NodeFilter.FILTER_ACCEPT;
                else if (I(b) || m(b)) e = NodeFilter.FILTER_SKIP;
                return e
            },
            NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
        e || N(b, d);
        return d
    }

    function G(c, b, e) {
        for (; c;) {
            if (e(c)) {
                b[0] !== c && b.unshift(c);
                break
            }
            if (a(c)) break;
            c = c.parentNode
        }
    }

    function A(a, c) {
        var b = a;
        if (c < b.childNodes.length - 1) b = b.childNodes[c + 1];
        else {
            for (; !b.nextSibling;) b = b.parentNode;
            b = b.nextSibling
        }
        for (; b.firstChild;) b = b.firstChild;
        return b
    }
    var Y = odf.Namespaces.textns,
        T = odf.Namespaces.drawns,
        J = odf.Namespaces.xlinkns,
        U = core.DomUtils,
        aa = [odf.Namespaces.dbns, odf.Namespaces.dcns, odf.Namespaces.dr3dns, odf.Namespaces.drawns,
            odf.Namespaces.chartns, odf.Namespaces.formns, odf.Namespaces.numberns, odf.Namespaces.officens, odf.Namespaces.presentationns, odf.Namespaces.stylens, odf.Namespaces.svgns, odf.Namespaces.tablens, odf.Namespaces.textns
        ],
        P = odf.OdfSchema;
    this.isImage = f;
    this.isCharacterFrame = k;
    this.isInlineRoot = a;
    this.isTextSpan = function(a) {
        return "span" === (a && a.localName) && a.namespaceURI === Y
    };
    this.isHyperlink = d;
    this.getHyperlinkTarget = function(a) {
        return a.getAttributeNS(J, "href") || ""
    };
    this.isParagraph = b;
    this.getParagraphElement =
        h;
    this.getParentAnnotation = n;
    this.isWithinAnnotation = function(a, c) {
        return Boolean(n(a, c))
    };
    this.getAnnotationCreator = function(a) {
        return a.getElementsByTagNameNS(odf.Namespaces.dcns, "creator")[0].textContent
    };
    this.isListItem = function(a) {
        return "list-item" === (a && a.localName) && a.namespaceURI === Y
    };
    this.isLineBreak = function(a) {
        return "line-break" === (a && a.localName) && a.namespaceURI === Y
    };
    this.isODFWhitespace = q;
    this.isGroupingElement = m;
    this.isFieldElement = l;
    this.isCharacterElement = r;
    this.isAnchoredAsCharacterElement =
        c;
    this.isSpaceElement = e;
    this.isODFNode = p;
    this.hasNoODFContent = g;
    this.firstChild = x;
    this.lastChild = t;
    this.previousNode = y;
    this.nextNode = v;
    this.scanLeftForNonSpace = s;
    this.lookLeftForCharacter = function(a) {
        var b, e = b = 0;
        a.nodeType === Node.TEXT_NODE && (e = a.length);
        0 < e ? (b = a.data, b = q(b.substr(e - 1, 1)) ? 1 === e ? s(y(a)) ? 2 : 0 : q(b.substr(e - 2, 1)) ? 0 : 2 : 1) : c(a) && (b = 1);
        return b
    };
    this.lookRightForCharacter = function(a) {
        var b = !1,
            e = 0;
        a && a.nodeType === Node.TEXT_NODE && (e = a.length);
        0 < e ? b = !q(a.data.substr(0, 1)) : c(a) && (b = !0);
        return b
    };
    this.scanLeftForAnyCharacter = function(a) {
        var b = !1,
            e;
        for (a = a && t(a); a;) {
            e = a.nodeType === Node.TEXT_NODE ? a.length : 0;
            if (0 < e && !q(a.data)) {
                b = !0;
                break
            }
            if (c(a)) {
                b = !0;
                break
            }
            a = y(a)
        }
        return b
    };
    this.scanRightForAnyCharacter = w;
    this.isTrailingWhitespace = u;
    this.isSignificantWhitespace = z;
    this.isDowngradableSpaceElement = function(a) {
        return e(a) ? s(y(a)) && w(v(a)) : !1
    };
    this.parseLength = H;
    this.parseNonNegativeLength = C;
    this.parseFoFontSize = function(a) {
        var c;
        c = (c = H(a)) && (0 >= c.value || "%" === c.unit) ? null : c;
        return c || D(a)
    };
    this.parseFoLineHeight =
        function(a) {
            return C(a) || D(a)
        };
    this.isTextContentContainingNode = I;
    this.getTextNodes = function(a, c) {
        var b;
        b = U.getNodesInRange(a, function(a) {
            var c = NodeFilter.FILTER_REJECT;
            a.nodeType === Node.TEXT_NODE ? Boolean(h(a) && (!q(a.textContent) || z(a, 0))) && (c = NodeFilter.FILTER_ACCEPT) : I(a) && (c = NodeFilter.FILTER_SKIP);
            return c
        }, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
        c || N(a, b);
        return b
    };
    this.getTextElements = K;
    this.getParagraphElements = function(a) {
        var c;
        c = U.getNodesInRange(a, function(a) {
            var c = NodeFilter.FILTER_REJECT;
            if (b(a)) c = NodeFilter.FILTER_ACCEPT;
            else if (I(a) || m(a)) c = NodeFilter.FILTER_SKIP;
            return c
        }, NodeFilter.SHOW_ELEMENT);
        G(a.startContainer, c, b);
        return c
    };
    this.getImageElements = function(a) {
        var c;
        c = U.getNodesInRange(a, function(a) {
            var c = NodeFilter.FILTER_SKIP;
            f(a) && (c = NodeFilter.FILTER_ACCEPT);
            return c
        }, NodeFilter.SHOW_ELEMENT);
        G(a.startContainer, c, f);
        return c
    };
    this.getHyperlinkElements = function(a) {
        var c = [],
            e = a.cloneRange();
        a.collapsed && a.endContainer.nodeType === Node.ELEMENT_NODE && (a = A(a.endContainer, a.endOffset),
            a.nodeType === Node.TEXT_NODE && e.setEnd(a, 1));
        K(e, !0, !1).forEach(function(a) {
            for (a = a.parentNode; !b(a);) {
                if (d(a) && -1 === c.indexOf(a)) {
                    c.push(a);
                    break
                }
                a = a.parentNode
            }
        });
        e.detach();
        return c
    };
    this.getNormalizedFontFamilyName = function(a) {
        /^(["'])(?:.|[\n\r])*?\1$/.test(a) || (a = a.replace(/^[ \t\r\n\f]*((?:.|[\n\r])*?)[ \t\r\n\f]*$/, "$1"), /[ \t\r\n\f]/.test(a) && (a = "'" + a.replace(/[ \t\r\n\f]+/g, " ") + "'"));
        return a
    }
};
odf.OdfUtils = new odf.OdfUtilsImpl;
gui.OdfTextBodyNodeFilter = function() {
    var f = odf.OdfUtils,
        k = Node.TEXT_NODE,
        a = NodeFilter.FILTER_REJECT,
        d = NodeFilter.FILTER_ACCEPT,
        b = odf.Namespaces.textns;
    this.acceptNode = function(h) {
        if (h.nodeType === k) {
            if (!f.isGroupingElement(h.parentNode)) return a
        } else if (h.namespaceURI === b && "tracked-changes" === h.localName) return a;
        return d
    }
};
xmldom.LSSerializerFilter = function() {};
xmldom.LSSerializerFilter.prototype.acceptNode = function(f) {};
odf.OdfNodeFilter = function() {
    this.acceptNode = function(f) {
        return "http://www.w3.org/1999/xhtml" === f.namespaceURI ? NodeFilter.FILTER_SKIP : f.namespaceURI && f.namespaceURI.match(/^urn:webodf:/) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
    }
};
xmldom.XPathIterator = function() {};
xmldom.XPathIterator.prototype.next = function() {};
xmldom.XPathIterator.prototype.reset = function() {};

function createXPathSingleton() {
    function f(a, c, b) {
        return -1 !== a && (a < c || -1 === c) && (a < b || -1 === b)
    }

    function k(a) {
        for (var c = [], b = 0, d = a.length, g; b < d;) {
            var h = a,
                m = d,
                n = c,
                q = "",
                k = [],
                w = h.indexOf("[", b),
                u = h.indexOf("/", b),
                z = h.indexOf("=", b);
            f(u, w, z) ? (q = h.substring(b, u), b = u + 1) : f(w, u, z) ? (q = h.substring(b, w), b = l(h, w, k)) : f(z, u, w) ? (q = h.substring(b, z), b = z) : (q = h.substring(b, m), b = m);
            n.push({
                location: q,
                predicates: k
            });
            if (b < d && "=" === a[b]) {
                g = a.substring(b + 1, d);
                if (2 < g.length && ("'" === g[0] || '"' === g[0])) g = g.slice(1, g.length - 1);
                else try {
                    g = parseInt(g, 10)
                } catch (H) {}
                b = d
            }
        }
        return {
            steps: c,
            value: g
        }
    }

    function a() {
        var a = null,
            c = !1;
        this.setNode = function(c) {
            a = c
        };
        this.reset = function() {
            c = !1
        };
        this.next = function() {
            var b = c ? null : a;
            c = !0;
            return b
        }
    }

    function d(a, c, b) {
        this.reset = function() {
            a.reset()
        };
        this.next = function() {
            for (var d = a.next(); d;) {
                d.nodeType === Node.ELEMENT_NODE && (d = d.getAttributeNodeNS(c, b));
                if (d) break;
                d = a.next()
            }
            return d
        }
    }

    function b(a, c) {
        var b = a.next(),
            d = null;
        this.reset = function() {
            a.reset();
            b = a.next();
            d = null
        };
        this.next = function() {
            for (; b;) {
                if (d)
                    if (c &&
                        d.firstChild) d = d.firstChild;
                    else {
                        for (; !d.nextSibling && d !== b;) d = d.parentNode;
                        d === b ? b = a.next() : d = d.nextSibling
                    }
                else {
                    do(d = b.firstChild) || (b = a.next()); while (b && !d)
                }
                if (d && d.nodeType === Node.ELEMENT_NODE) return d
            }
            return null
        }
    }

    function h(a, c) {
        this.reset = function() {
            a.reset()
        };
        this.next = function() {
            for (var b = a.next(); b && !c(b);) b = a.next();
            return b
        }
    }

    function n(a, b, e) {
        b = b.split(":", 2);
        var d = e(b[0]),
            g = b[1];
        return new h(a, function(a) {
            return a.localName === g && a.namespaceURI === d
        })
    }

    function q(b, c, e) {
        var d = new a,
            g = m(d,
                c, e),
            f = c.value;
        return void 0 === f ? new h(b, function(a) {
            d.setNode(a);
            g.reset();
            return null !== g.next()
        }) : new h(b, function(a) {
            d.setNode(a);
            g.reset();
            return (a = g.next()) ? a.nodeValue === f : !1
        })
    }
    var m, l;
    l = function(a, b, e) {
        for (var d = b, g = a.length, f = 0; d < g;) "]" === a[d] ? (f -= 1, 0 >= f && e.push(k(a.substring(b, d)))) : "[" === a[d] && (0 >= f && (b = d + 1), f += 1), d += 1;
        return d
    };
    m = function(a, c, e) {
        var f, g, h, l;
        for (f = 0; f < c.steps.length; f += 1) {
            h = c.steps[f];
            g = h.location;
            if ("" === g) a = new b(a, !1);
            else if ("@" === g[0]) {
                g = g.substr(1).split(":", 2);
                l =
                    e(g[0]);
                if (!l) throw "No namespace associated with the prefix " + g[0];
                a = new d(a, l, g[1])
            } else "." !== g && (a = new b(a, !1), -1 !== g.indexOf(":") && (a = n(a, g, e)));
            for (g = 0; g < h.predicates.length; g += 1) l = h.predicates[g], a = q(a, l, e)
        }
        return a
    };
    return {
        getODFElementsWithXPath: function(b, c, e) {
            var d = b.ownerDocument,
                g = [],
                f = null;
            if (d && "function" === typeof d.evaluate)
                for (e = d.evaluate(c, b, e, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null), f = e.iterateNext(); null !== f;) f.nodeType === Node.ELEMENT_NODE && g.push(f), f = e.iterateNext();
            else {
                g =
                    new a;
                g.setNode(b);
                b = k(c);
                g = m(g, b, e);
                b = [];
                for (e = g.next(); e;) b.push(e), e = g.next();
                g = b
            }
            return g
        }
    }
}
xmldom.XPath = createXPathSingleton();
odf.StyleInfo = function() {
    function f(a, b) {
        var c, e, d, g, p, h = 0;
        if (c = C[a.localName])
            if (d = c[a.namespaceURI]) h = d.length;
        for (c = 0; c < h; c += 1) e = d[c], g = e.ns, p = e.localname, (e = a.getAttributeNS(g, p)) && a.setAttributeNS(g, z[g] + p, b + e);
        for (d = a.firstElementChild; d;) f(d, b), d = d.nextElementSibling
    }

    function k(a, b) {
        var c, e, d, g, f, p = 0;
        if (c = C[a.localName])
            if (d = c[a.namespaceURI]) p = d.length;
        for (c = 0; c < p; c += 1)
            if (e = d[c], g = e.ns, f = e.localname, e = a.getAttributeNS(g, f)) e = e.replace(b, ""), a.setAttributeNS(g, z[g] + f, e);
        for (d = a.firstElementChild; d;) k(d,
            b), d = d.nextElementSibling
    }

    function a(a, b) {
        var c, e, d, g, f, p = 0;
        if (c = C[a.localName])
            if (d = c[a.namespaceURI]) p = d.length;
        for (c = 0; c < p; c += 1)
            if (g = d[c], e = g.ns, f = g.localname, e = a.getAttributeNS(e, f)) b = b || {}, g = g.keyname, b.hasOwnProperty(g) ? b[g][e] = 1 : (f = {}, f[e] = 1, b[g] = f);
        return b
    }

    function d(b, c) {
        var e, g;
        a(b, c);
        for (e = b.firstChild; e;) e.nodeType === Node.ELEMENT_NODE && (g = e, d(g, c)), e = e.nextSibling
    }

    function b(a, b, c) {
        this.key = a;
        this.name = b;
        this.family = c;
        this.requires = {}
    }

    function h(a, c, e) {
        var d = a + '"' + c,
            g = e[d];
        g || (g = e[d] =
            new b(d, a, c));
        return g
    }

    function n(a, b, c) {
        var e, d, g, f, p, l = 0;
        e = a.getAttributeNS(s, "name");
        f = a.getAttributeNS(s, "family");
        e && f && (b = h(e, f, c));
        if (b) {
            if (e = C[a.localName])
                if (g = e[a.namespaceURI]) l = g.length;
            for (e = 0; e < l; e += 1)
                if (f = g[e], d = f.ns, p = f.localname, d = a.getAttributeNS(d, p)) f = f.keyname, f = h(d, f, c), b.requires[f.key] = f
        }
        for (a = a.firstElementChild; a;) n(a, b, c), a = a.nextElementSibling;
        return c
    }

    function q(a, b) {
        var c = b[a.family];
        c || (c = b[a.family] = {});
        c[a.name] = 1;
        Object.keys(a.requires).forEach(function(c) {
            q(a.requires[c],
                b)
        })
    }

    function m(a, b) {
        var c = n(a, null, {});
        Object.keys(c).forEach(function(a) {
            a = c[a];
            var e = b[a.family];
            e && e.hasOwnProperty(a.name) && q(a, b)
        })
    }

    function l(a, b) {
        function c(b) {
            (b = g.getAttributeNS(s, b)) && (a[b] = !0)
        }
        var e = ["font-name", "font-name-asian", "font-name-complex"],
            d, g;
        for (d = b && b.firstElementChild; d;) g = d, e.forEach(c), l(a, g), d = d.nextElementSibling
    }

    function r(a, b) {
        function c(a) {
            var e = g.getAttributeNS(s, a);
            e && b.hasOwnProperty(e) && g.setAttributeNS(s, "style:" + a, b[e])
        }
        var e = ["font-name", "font-name-asian",
                "font-name-complex"
            ],
            d, g;
        for (d = a && a.firstElementChild; d;) g = d, e.forEach(c), r(g, b), d = d.nextElementSibling
    }
    var c = odf.Namespaces.chartns,
        e = odf.Namespaces.dbns,
        p = odf.Namespaces.dr3dns,
        g = odf.Namespaces.drawns,
        x = odf.Namespaces.formns,
        t = odf.Namespaces.numberns,
        y = odf.Namespaces.officens,
        v = odf.Namespaces.presentationns,
        s = odf.Namespaces.stylens,
        w = odf.Namespaces.tablens,
        u = odf.Namespaces.textns,
        z = {
            "urn:oasis:names:tc:opendocument:xmlns:chart:1.0": "chart:",
            "urn:oasis:names:tc:opendocument:xmlns:database:1.0": "db:",
            "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0": "dr3d:",
            "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0": "draw:",
            "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0": "fo:",
            "urn:oasis:names:tc:opendocument:xmlns:form:1.0": "form:",
            "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0": "number:",
            "urn:oasis:names:tc:opendocument:xmlns:office:1.0": "office:",
            "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0": "presentation:",
            "urn:oasis:names:tc:opendocument:xmlns:style:1.0": "style:",
            "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0": "svg:",
            "urn:oasis:names:tc:opendocument:xmlns:table:1.0": "table:",
            "urn:oasis:names:tc:opendocument:xmlns:text:1.0": "chart:",
            "http://www.w3.org/XML/1998/namespace": "xml:"
        },
        H = {
            text: [{
                    ens: s,
                    en: "tab-stop",
                    ans: s,
                    a: "leader-text-style"
                }, {
                    ens: s,
                    en: "drop-cap",
                    ans: s,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "notes-configuration",
                    ans: u,
                    a: "citation-body-style-name"
                }, {
                    ens: u,
                    en: "notes-configuration",
                    ans: u,
                    a: "citation-style-name"
                }, {
                    ens: u,
                    en: "a",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "alphabetical-index",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "linenumbering-configuration",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "list-level-style-number",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "ruby-text",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "span",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "a",
                    ans: u,
                    a: "visited-style-name"
                }, {
                    ens: s,
                    en: "text-properties",
                    ans: s,
                    a: "text-line-through-text-style"
                }, {
                    ens: u,
                    en: "alphabetical-index-source",
                    ans: u,
                    a: "main-entry-style-name"
                }, {
                    ens: u,
                    en: "index-entry-bibliography",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "index-entry-chapter",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "index-entry-link-end",
                    ans: u,
                    a: "style-name"
                },
                {
                    ens: u,
                    en: "index-entry-link-start",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "index-entry-page-number",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "index-entry-span",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "index-entry-tab-stop",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "index-entry-text",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "index-title-template",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "list-level-style-bullet",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "outline-level-style",
                    ans: u,
                    a: "style-name"
                }
            ],
            paragraph: [{
                    ens: g,
                    en: "caption",
                    ans: g,
                    a: "text-style-name"
                }, {
                    ens: g,
                    en: "circle",
                    ans: g,
                    a: "text-style-name"
                }, {
                    ens: g,
                    en: "connector",
                    ans: g,
                    a: "text-style-name"
                }, {
                    ens: g,
                    en: "control",
                    ans: g,
                    a: "text-style-name"
                }, {
                    ens: g,
                    en: "custom-shape",
                    ans: g,
                    a: "text-style-name"
                }, {
                    ens: g,
                    en: "ellipse",
                    ans: g,
                    a: "text-style-name"
                }, {
                    ens: g,
                    en: "frame",
                    ans: g,
                    a: "text-style-name"
                }, {
                    ens: g,
                    en: "line",
                    ans: g,
                    a: "text-style-name"
                }, {
                    ens: g,
                    en: "measure",
                    ans: g,
                    a: "text-style-name"
                }, {
                    ens: g,
                    en: "path",
                    ans: g,
                    a: "text-style-name"
                }, {
                    ens: g,
                    en: "polygon",
                    ans: g,
                    a: "text-style-name"
                }, {
                    ens: g,
                    en: "polyline",
                    ans: g,
                    a: "text-style-name"
                },
                {
                    ens: g,
                    en: "rect",
                    ans: g,
                    a: "text-style-name"
                }, {
                    ens: g,
                    en: "regular-polygon",
                    ans: g,
                    a: "text-style-name"
                }, {
                    ens: y,
                    en: "annotation",
                    ans: g,
                    a: "text-style-name"
                }, {
                    ens: x,
                    en: "column",
                    ans: x,
                    a: "text-style-name"
                }, {
                    ens: s,
                    en: "style",
                    ans: s,
                    a: "next-style-name"
                }, {
                    ens: w,
                    en: "body",
                    ans: w,
                    a: "paragraph-style-name"
                }, {
                    ens: w,
                    en: "even-columns",
                    ans: w,
                    a: "paragraph-style-name"
                }, {
                    ens: w,
                    en: "even-rows",
                    ans: w,
                    a: "paragraph-style-name"
                }, {
                    ens: w,
                    en: "first-column",
                    ans: w,
                    a: "paragraph-style-name"
                }, {
                    ens: w,
                    en: "first-row",
                    ans: w,
                    a: "paragraph-style-name"
                },
                {
                    ens: w,
                    en: "last-column",
                    ans: w,
                    a: "paragraph-style-name"
                }, {
                    ens: w,
                    en: "last-row",
                    ans: w,
                    a: "paragraph-style-name"
                }, {
                    ens: w,
                    en: "odd-columns",
                    ans: w,
                    a: "paragraph-style-name"
                }, {
                    ens: w,
                    en: "odd-rows",
                    ans: w,
                    a: "paragraph-style-name"
                }, {
                    ens: u,
                    en: "notes-configuration",
                    ans: u,
                    a: "default-style-name"
                }, {
                    ens: u,
                    en: "alphabetical-index-entry-template",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "bibliography-entry-template",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "h",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "illustration-index-entry-template",
                    ans: u,
                    a: "style-name"
                },
                {
                    ens: u,
                    en: "index-source-style",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "object-index-entry-template",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "p",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "table-index-entry-template",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "table-of-content-entry-template",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "table-index-entry-template",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "user-index-entry-template",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: s,
                    en: "page-layout-properties",
                    ans: s,
                    a: "register-truth-ref-style-name"
                }
            ],
            chart: [{
                ens: c,
                en: "axis",
                ans: c,
                a: "style-name"
            }, {
                ens: c,
                en: "chart",
                ans: c,
                a: "style-name"
            }, {
                ens: c,
                en: "data-label",
                ans: c,
                a: "style-name"
            }, {
                ens: c,
                en: "data-point",
                ans: c,
                a: "style-name"
            }, {
                ens: c,
                en: "equation",
                ans: c,
                a: "style-name"
            }, {
                ens: c,
                en: "error-indicator",
                ans: c,
                a: "style-name"
            }, {
                ens: c,
                en: "floor",
                ans: c,
                a: "style-name"
            }, {
                ens: c,
                en: "footer",
                ans: c,
                a: "style-name"
            }, {
                ens: c,
                en: "grid",
                ans: c,
                a: "style-name"
            }, {
                ens: c,
                en: "legend",
                ans: c,
                a: "style-name"
            }, {
                ens: c,
                en: "mean-value",
                ans: c,
                a: "style-name"
            }, {
                ens: c,
                en: "plot-area",
                ans: c,
                a: "style-name"
            }, {
                ens: c,
                en: "regression-curve",
                ans: c,
                a: "style-name"
            }, {
                ens: c,
                en: "series",
                ans: c,
                a: "style-name"
            }, {
                ens: c,
                en: "stock-gain-marker",
                ans: c,
                a: "style-name"
            }, {
                ens: c,
                en: "stock-loss-marker",
                ans: c,
                a: "style-name"
            }, {
                ens: c,
                en: "stock-range-line",
                ans: c,
                a: "style-name"
            }, {
                ens: c,
                en: "subtitle",
                ans: c,
                a: "style-name"
            }, {
                ens: c,
                en: "title",
                ans: c,
                a: "style-name"
            }, {
                ens: c,
                en: "wall",
                ans: c,
                a: "style-name"
            }],
            section: [{
                    ens: u,
                    en: "alphabetical-index",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "bibliography",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "illustration-index",
                    ans: u,
                    a: "style-name"
                },
                {
                    ens: u,
                    en: "index-title",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "object-index",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "section",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "table-of-content",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "table-index",
                    ans: u,
                    a: "style-name"
                }, {
                    ens: u,
                    en: "user-index",
                    ans: u,
                    a: "style-name"
                }
            ],
            ruby: [{
                ens: u,
                en: "ruby",
                ans: u,
                a: "style-name"
            }],
            table: [{
                ens: e,
                en: "query",
                ans: e,
                a: "style-name"
            }, {
                ens: e,
                en: "table-representation",
                ans: e,
                a: "style-name"
            }, {
                ens: w,
                en: "background",
                ans: w,
                a: "style-name"
            }, {
                ens: w,
                en: "table",
                ans: w,
                a: "style-name"
            }],
            "table-column": [{
                ens: e,
                en: "column",
                ans: e,
                a: "style-name"
            }, {
                ens: w,
                en: "table-column",
                ans: w,
                a: "style-name"
            }],
            "table-row": [{
                ens: e,
                en: "query",
                ans: e,
                a: "default-row-style-name"
            }, {
                ens: e,
                en: "table-representation",
                ans: e,
                a: "default-row-style-name"
            }, {
                ens: w,
                en: "table-row",
                ans: w,
                a: "style-name"
            }],
            "table-cell": [{
                    ens: e,
                    en: "column",
                    ans: e,
                    a: "default-cell-style-name"
                }, {
                    ens: w,
                    en: "table-column",
                    ans: w,
                    a: "default-cell-style-name"
                }, {
                    ens: w,
                    en: "table-row",
                    ans: w,
                    a: "default-cell-style-name"
                }, {
                    ens: w,
                    en: "body",
                    ans: w,
                    a: "style-name"
                },
                {
                    ens: w,
                    en: "covered-table-cell",
                    ans: w,
                    a: "style-name"
                }, {
                    ens: w,
                    en: "even-columns",
                    ans: w,
                    a: "style-name"
                }, {
                    ens: w,
                    en: "covered-table-cell",
                    ans: w,
                    a: "style-name"
                }, {
                    ens: w,
                    en: "even-columns",
                    ans: w,
                    a: "style-name"
                }, {
                    ens: w,
                    en: "even-rows",
                    ans: w,
                    a: "style-name"
                }, {
                    ens: w,
                    en: "first-column",
                    ans: w,
                    a: "style-name"
                }, {
                    ens: w,
                    en: "first-row",
                    ans: w,
                    a: "style-name"
                }, {
                    ens: w,
                    en: "last-column",
                    ans: w,
                    a: "style-name"
                }, {
                    ens: w,
                    en: "last-row",
                    ans: w,
                    a: "style-name"
                }, {
                    ens: w,
                    en: "odd-columns",
                    ans: w,
                    a: "style-name"
                }, {
                    ens: w,
                    en: "odd-rows",
                    ans: w,
                    a: "style-name"
                },
                {
                    ens: w,
                    en: "table-cell",
                    ans: w,
                    a: "style-name"
                }
            ],
            graphic: [{
                    ens: p,
                    en: "cube",
                    ans: g,
                    a: "style-name"
                }, {
                    ens: p,
                    en: "extrude",
                    ans: g,
                    a: "style-name"
                }, {
                    ens: p,
                    en: "rotate",
                    ans: g,
                    a: "style-name"
                }, {
                    ens: p,
                    en: "scene",
                    ans: g,
                    a: "style-name"
                }, {
                    ens: p,
                    en: "sphere",
                    ans: g,
                    a: "style-name"
                }, {
                    ens: g,
                    en: "caption",
                    ans: g,
                    a: "style-name"
                }, {
                    ens: g,
                    en: "circle",
                    ans: g,
                    a: "style-name"
                }, {
                    ens: g,
                    en: "connector",
                    ans: g,
                    a: "style-name"
                }, {
                    ens: g,
                    en: "control",
                    ans: g,
                    a: "style-name"
                }, {
                    ens: g,
                    en: "custom-shape",
                    ans: g,
                    a: "style-name"
                }, {
                    ens: g,
                    en: "ellipse",
                    ans: g,
                    a: "style-name"
                },
                {
                    ens: g,
                    en: "frame",
                    ans: g,
                    a: "style-name"
                }, {
                    ens: g,
                    en: "g",
                    ans: g,
                    a: "style-name"
                }, {
                    ens: g,
                    en: "line",
                    ans: g,
                    a: "style-name"
                }, {
                    ens: g,
                    en: "measure",
                    ans: g,
                    a: "style-name"
                }, {
                    ens: g,
                    en: "page-thumbnail",
                    ans: g,
                    a: "style-name"
                }, {
                    ens: g,
                    en: "path",
                    ans: g,
                    a: "style-name"
                }, {
                    ens: g,
                    en: "polygon",
                    ans: g,
                    a: "style-name"
                }, {
                    ens: g,
                    en: "polyline",
                    ans: g,
                    a: "style-name"
                }, {
                    ens: g,
                    en: "rect",
                    ans: g,
                    a: "style-name"
                }, {
                    ens: g,
                    en: "regular-polygon",
                    ans: g,
                    a: "style-name"
                }, {
                    ens: y,
                    en: "annotation",
                    ans: g,
                    a: "style-name"
                }
            ],
            presentation: [{
                    ens: p,
                    en: "cube",
                    ans: v,
                    a: "style-name"
                }, {
                    ens: p,
                    en: "extrude",
                    ans: v,
                    a: "style-name"
                }, {
                    ens: p,
                    en: "rotate",
                    ans: v,
                    a: "style-name"
                }, {
                    ens: p,
                    en: "scene",
                    ans: v,
                    a: "style-name"
                }, {
                    ens: p,
                    en: "sphere",
                    ans: v,
                    a: "style-name"
                }, {
                    ens: g,
                    en: "caption",
                    ans: v,
                    a: "style-name"
                }, {
                    ens: g,
                    en: "circle",
                    ans: v,
                    a: "style-name"
                }, {
                    ens: g,
                    en: "connector",
                    ans: v,
                    a: "style-name"
                }, {
                    ens: g,
                    en: "control",
                    ans: v,
                    a: "style-name"
                }, {
                    ens: g,
                    en: "custom-shape",
                    ans: v,
                    a: "style-name"
                }, {
                    ens: g,
                    en: "ellipse",
                    ans: v,
                    a: "style-name"
                }, {
                    ens: g,
                    en: "frame",
                    ans: v,
                    a: "style-name"
                }, {
                    ens: g,
                    en: "g",
                    ans: v,
                    a: "style-name"
                },
                {
                    ens: g,
                    en: "line",
                    ans: v,
                    a: "style-name"
                }, {
                    ens: g,
                    en: "measure",
                    ans: v,
                    a: "style-name"
                }, {
                    ens: g,
                    en: "page-thumbnail",
                    ans: v,
                    a: "style-name"
                }, {
                    ens: g,
                    en: "path",
                    ans: v,
                    a: "style-name"
                }, {
                    ens: g,
                    en: "polygon",
                    ans: v,
                    a: "style-name"
                }, {
                    ens: g,
                    en: "polyline",
                    ans: v,
                    a: "style-name"
                }, {
                    ens: g,
                    en: "rect",
                    ans: v,
                    a: "style-name"
                }, {
                    ens: g,
                    en: "regular-polygon",
                    ans: v,
                    a: "style-name"
                }, {
                    ens: y,
                    en: "annotation",
                    ans: v,
                    a: "style-name"
                }
            ],
            "drawing-page": [{
                ens: g,
                en: "page",
                ans: g,
                a: "style-name"
            }, {
                ens: v,
                en: "notes",
                ans: g,
                a: "style-name"
            }, {
                ens: s,
                en: "handout-master",
                ans: g,
                a: "style-name"
            }, {
                ens: s,
                en: "master-page",
                ans: g,
                a: "style-name"
            }],
            "list-style": [{
                ens: u,
                en: "list",
                ans: u,
                a: "style-name"
            }, {
                ens: u,
                en: "numbered-paragraph",
                ans: u,
                a: "style-name"
            }, {
                ens: u,
                en: "list-item",
                ans: u,
                a: "style-override"
            }, {
                ens: s,
                en: "style",
                ans: s,
                a: "list-style-name"
            }],
            data: [{
                ens: s,
                en: "style",
                ans: s,
                a: "data-style-name"
            }, {
                ens: s,
                en: "style",
                ans: s,
                a: "percentage-data-style-name"
            }, {
                ens: v,
                en: "date-time-decl",
                ans: s,
                a: "data-style-name"
            }, {
                ens: u,
                en: "creation-date",
                ans: s,
                a: "data-style-name"
            }, {
                ens: u,
                en: "creation-time",
                ans: s,
                a: "data-style-name"
            }, {
                ens: u,
                en: "database-display",
                ans: s,
                a: "data-style-name"
            }, {
                ens: u,
                en: "date",
                ans: s,
                a: "data-style-name"
            }, {
                ens: u,
                en: "editing-duration",
                ans: s,
                a: "data-style-name"
            }, {
                ens: u,
                en: "expression",
                ans: s,
                a: "data-style-name"
            }, {
                ens: u,
                en: "meta-field",
                ans: s,
                a: "data-style-name"
            }, {
                ens: u,
                en: "modification-date",
                ans: s,
                a: "data-style-name"
            }, {
                ens: u,
                en: "modification-time",
                ans: s,
                a: "data-style-name"
            }, {
                ens: u,
                en: "print-date",
                ans: s,
                a: "data-style-name"
            }, {
                ens: u,
                en: "print-time",
                ans: s,
                a: "data-style-name"
            }, {
                ens: u,
                en: "table-formula",
                ans: s,
                a: "data-style-name"
            }, {
                ens: u,
                en: "time",
                ans: s,
                a: "data-style-name"
            }, {
                ens: u,
                en: "user-defined",
                ans: s,
                a: "data-style-name"
            }, {
                ens: u,
                en: "user-field-get",
                ans: s,
                a: "data-style-name"
            }, {
                ens: u,
                en: "user-field-input",
                ans: s,
                a: "data-style-name"
            }, {
                ens: u,
                en: "variable-get",
                ans: s,
                a: "data-style-name"
            }, {
                ens: u,
                en: "variable-input",
                ans: s,
                a: "data-style-name"
            }, {
                ens: u,
                en: "variable-set",
                ans: s,
                a: "data-style-name"
            }],
            "page-layout": [{
                ens: v,
                en: "notes",
                ans: s,
                a: "page-layout-name"
            }, {
                ens: s,
                en: "handout-master",
                ans: s,
                a: "page-layout-name"
            }, {
                ens: s,
                en: "master-page",
                ans: s,
                a: "page-layout-name"
            }]
        },
        C, D = xmldom.XPath;
    this.collectUsedFontFaces = l;
    this.changeFontFaceNames = r;
    this.UsedStyleList = function(a, b) {
        var c = {};
        this.uses = function(a) {
            var b = a.localName,
                e = a.getAttributeNS(g, "name") || a.getAttributeNS(s, "name");
            a = "style" === b ? a.getAttributeNS(s, "family") : a.namespaceURI === t ? "data" : b;
            return (a = c[a]) ? 0 < a[e] : !1
        };
        d(a, c);
        b && m(b, c)
    };
    this.getStyleName = function(a, b) {
        var c, e, d = C[b.localName];
        if (d && (d = d[b.namespaceURI]))
            for (e = 0; e < d.length; e +=
                1)
                if (d[e].keyname === a && (d = d[e], b.hasAttributeNS(d.ns, d.localname))) {
                    c = b.getAttributeNS(d.ns, d.localname);
                    break
                } return c
    };
    this.hasDerivedStyles = function(a, b, c) {
        var e = c.getAttributeNS(s, "name");
        c = c.getAttributeNS(s, "family");
        return D.getODFElementsWithXPath(a, '//style:*[@style:parent-style-name="' + e + '"][@style:family="' + c + '"]', b).length ? !0 : !1
    };
    this.prefixStyleNames = function(a, b, c) {
        var e;
        if (a) {
            for (e = a.firstChild; e;) {
                if (e.nodeType === Node.ELEMENT_NODE) {
                    var d = e,
                        p = b,
                        h = d.getAttributeNS(g, "name"),
                        l = void 0;
                    h ? l = g : (h = d.getAttributeNS(s, "name")) && (l = s);
                    l && d.setAttributeNS(l, z[l] + "name", p + h)
                }
                e = e.nextSibling
            }
            f(a, b);
            c && f(c, b)
        }
    };
    this.removePrefixFromStyleNames = function(a, b, c) {
        var e = RegExp("^" + b);
        if (a) {
            for (b = a.firstChild; b;) {
                if (b.nodeType === Node.ELEMENT_NODE) {
                    var d = b,
                        f = e,
                        p = d.getAttributeNS(g, "name"),
                        h = void 0;
                    p ? h = g : (p = d.getAttributeNS(s, "name")) && (h = s);
                    h && (p = p.replace(f, ""), d.setAttributeNS(h, z[h] + "name", p))
                }
                b = b.nextSibling
            }
            k(a, e);
            c && k(c, e)
        }
    };
    this.determineStylesForNode = a;
    C = function() {
        var a, b, c, e, d, g = {},
            f, p,
            h, l;
        for (c in H)
            if (H.hasOwnProperty(c))
                for (e = H[c], b = e.length, a = 0; a < b; a += 1) d = e[a], h = d.en, l = d.ens, g.hasOwnProperty(h) ? f = g[h] : g[h] = f = {}, f.hasOwnProperty(l) ? p = f[l] : f[l] = p = [], p.push({
                    ns: d.ans,
                    localname: d.a,
                    keyname: c
                });
        return g
    }()
};
"function" !== typeof Object.create && (Object.create = function(f) {
    var k = function() {};
    k.prototype = f;
    return new k
});
xmldom.LSSerializer = function() {
    function f(a) {
        var d = a || {},
            f = function(a) {
                var b = {},
                    e;
                for (e in a) a.hasOwnProperty(e) && (b[a[e]] = e);
                return b
            }(a),
            q = [d],
            m = [f],
            l = 0;
        this.push = function() {
            l += 1;
            d = q[l] = Object.create(d);
            f = m[l] = Object.create(f)
        };
        this.pop = function() {
            q.pop();
            m.pop();
            l -= 1;
            d = q[l];
            f = m[l]
        };
        this.getLocalNamespaceDefinitions = function() {
            return f
        };
        this.getQName = function(a) {
            var b = a.namespaceURI,
                e = 0,
                p;
            if (!b) return a.localName;
            if (p = f[b]) return p + ":" + a.localName;
            do {
                p || !a.prefix ? (p = "ns" + e, e += 1) : p = a.prefix;
                if (d[p] ===
                    b) break;
                if (!d[p]) {
                    d[p] = b;
                    f[b] = p;
                    break
                }
                p = null
            } while (null === p);
            return p + ":" + a.localName
        }
    }

    function k(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;")
    }

    function a(b, f) {
        var n = "",
            q = d.filter ? d.filter.acceptNode(f) : NodeFilter.FILTER_ACCEPT,
            m;
        if (q === NodeFilter.FILTER_ACCEPT && f.nodeType === Node.ELEMENT_NODE) {
            b.push();
            m = b.getQName(f);
            var l, r = f.attributes,
                c, e, p, g = "",
                x;
            l = "<" + m;
            c = r.length;
            for (e = 0; e < c; e += 1) p = r.item(e), "http://www.w3.org/2000/xmlns/" !==
                p.namespaceURI && (x = d.filter ? d.filter.acceptNode(p) : NodeFilter.FILTER_ACCEPT, x === NodeFilter.FILTER_ACCEPT && (x = b.getQName(p), p = "string" === typeof p.value ? k(p.value) : p.value, g += " " + (x + '="' + p + '"')));
            c = b.getLocalNamespaceDefinitions();
            for (e in c) c.hasOwnProperty(e) && ((r = c[e]) ? "xmlns" !== r && (l += " xmlns:" + c[e] + '="' + e + '"') : l += ' xmlns="' + e + '"');
            n += l + (g + ">")
        }
        if (q === NodeFilter.FILTER_ACCEPT || q === NodeFilter.FILTER_SKIP) {
            for (q = f.firstChild; q;) n += a(b, q), q = q.nextSibling;
            f.nodeValue && (n += k(f.nodeValue))
        }
        m && (n += "</" +
            m + ">", b.pop());
        return n
    }
    var d = this;
    this.filter = null;
    this.writeToString = function(b, d) {
        if (!b) return "";
        var n = new f(d);
        return a(n, b)
    }
};
(function() {
    function f(a) {
        var b, e = q.length;
        for (b = 0; b < e; b += 1)
            if ("urn:oasis:names:tc:opendocument:xmlns:office:1.0" === a.namespaceURI && a.localName === q[b]) return b;
        return -1
    }

    function k(a, c) {
        var e = new b.UsedStyleList(a, c),
            d = new odf.OdfNodeFilter;
        this.acceptNode = function(a) {
            var b = d.acceptNode(a);
            b === NodeFilter.FILTER_ACCEPT && a.parentNode === c && a.nodeType === Node.ELEMENT_NODE && (b = e.uses(a) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT);
            return b
        }
    }

    function a(a, b) {
        var e = new k(a, b);
        this.acceptNode = function(a) {
            var b =
                e.acceptNode(a);
            b !== NodeFilter.FILTER_ACCEPT || !a.parentNode || a.parentNode.namespaceURI !== odf.Namespaces.textns || "s" !== a.parentNode.localName && "tab" !== a.parentNode.localName || (b = NodeFilter.FILTER_REJECT);
            return b
        }
    }

    function d(a, b) {
        if (b) {
            var e = f(b),
                d, g = a.firstChild;
            if (-1 !== e) {
                for (; g;) {
                    d = f(g);
                    if (-1 !== d && d > e) break;
                    g = g.nextSibling
                }
                a.insertBefore(b, g)
            }
        }
    }
    var b = new odf.StyleInfo,
        h = core.DomUtils,
        n = odf.Namespaces.stylens,
        q = "meta settings scripts font-face-decls styles automatic-styles master-styles body".split(" "),
        m = Date.now() + "_webodf_",
        l = new core.Base64;
    odf.ODFElement = function() {};
    odf.ODFDocumentElement = function() {};
    odf.ODFDocumentElement.prototype = new odf.ODFElement;
    odf.ODFDocumentElement.prototype.constructor = odf.ODFDocumentElement;
    odf.ODFDocumentElement.prototype.fontFaceDecls = null;
    odf.ODFDocumentElement.prototype.manifest = null;
    odf.ODFDocumentElement.prototype.settings = null;
    odf.ODFDocumentElement.namespaceURI = "urn:oasis:names:tc:opendocument:xmlns:office:1.0";
    odf.ODFDocumentElement.localName = "document";
    odf.AnnotationElement = function() {};
    odf.OdfPart = function(a, b, e, d) {
        var g = this;
        this.size = 0;
        this.type = null;
        this.name = a;
        this.container = e;
        this.url = null;
        this.mimetype = b;
        this.onstatereadychange = this.document = null;
        this.EMPTY = 0;
        this.LOADING = 1;
        this.DONE = 2;
        this.state = this.EMPTY;
        this.data = "";
        this.load = function() {
            null !== d && (this.mimetype = b, d.loadAsDataURL(a, b, function(a, b) {
                a && runtime.log(a);
                g.url = b;
                if (g.onchange) g.onchange(g);
                if (g.onstatereadychange) g.onstatereadychange(g)
            }))
        }
    };
    odf.OdfPart.prototype.load = function() {};
    odf.OdfPart.prototype.getUrl = function() {
        return this.data ? "data:;base64," + l.toBase64(this.data) : null
    };
    odf.OdfContainer = function c(e, f) {
        function g(a) {
            for (var b = a.firstChild, c; b;) c = b.nextSibling, b.nodeType === Node.ELEMENT_NODE ? g(b) : b.nodeType === Node.PROCESSING_INSTRUCTION_NODE && a.removeChild(b), b = c
        }

        function q(a) {
            var b = {},
                c, e, d = a.ownerDocument.createNodeIterator(a, NodeFilter.SHOW_ELEMENT, null, !1);
            for (a = d.nextNode(); a;) "urn:oasis:names:tc:opendocument:xmlns:office:1.0" === a.namespaceURI && ("annotation" ===
                a.localName ? (c = a.getAttributeNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0", "name")) && (b.hasOwnProperty(c) ? runtime.log("Warning: annotation name used more than once with <office:annotation/>: '" + c + "'") : b[c] = a) : "annotation-end" === a.localName && ((c = a.getAttributeNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0", "name")) ? b.hasOwnProperty(c) ? (e = b[c], e.annotationEndElement ? runtime.log("Warning: annotation name used more than once with <office:annotation-end/>: '" + c + "'") : e.annotationEndElement =
                    a) : runtime.log("Warning: annotation end without an annotation start, name: '" + c + "'") : runtime.log("Warning: annotation end without a name found"))), a = d.nextNode()
        }

        function t(a, b) {
            for (var c = a && a.firstChild; c;) c.nodeType === Node.ELEMENT_NODE && c.setAttributeNS("urn:webodf:names:scope", "scope", b), c = c.nextSibling
        }

        function y(a, b) {
            for (var c = F.rootElement.meta, c = c && c.firstChild; c && (c.namespaceURI !== a || c.localName !== b);) c = c.nextSibling;
            for (c = c && c.firstChild; c && c.nodeType !== Node.TEXT_NODE;) c = c.nextSibling;
            return c ?
                c.data : null
        }

        function v(a) {
            var b = {},
                c;
            for (a = a.firstChild; a;) a.nodeType === Node.ELEMENT_NODE && a.namespaceURI === n && "font-face" === a.localName && (c = a.getAttributeNS(n, "name"), b[c] = a), a = a.nextSibling;
            return b
        }

        function s(a, b) {
            var c = null,
                e, d, g;
            if (a)
                for (c = a.cloneNode(!0), e = c.firstElementChild; e;) d = e.nextElementSibling, (g = e.getAttributeNS("urn:webodf:names:scope", "scope")) && g !== b && c.removeChild(e), e = d;
            return c
        }

        function w(a, c) {
            var e, d, g, f = null,
                p = {};
            if (a)
                for (c.forEach(function(a) {
                        b.collectUsedFontFaces(p, a)
                    }),
                    f = a.cloneNode(!0), e = f.firstElementChild; e;) d = e.nextElementSibling, g = e.getAttributeNS(n, "name"), p[g] || f.removeChild(e), e = d;
            return f
        }

        function u(a) {
            var b = F.rootElement.ownerDocument,
                c;
            if (a) {
                g(a.documentElement);
                try {
                    c = b.importNode(a.documentElement, !0)
                } catch (e) {}
            }
            return c
        }

        function z(a) {
            F.state = a;
            if (F.onchange) F.onchange(F);
            if (F.onstatereadychange) F.onstatereadychange(F)
        }

        function H(a) {
            da = null;
            F.rootElement = a;
            a.fontFaceDecls = h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "font-face-decls");
            a.styles = h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "styles");
            a.automaticStyles = h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "automatic-styles");
            a.masterStyles = h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "master-styles");
            a.body = h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "body");
            a.meta = h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "meta");
            a.settings = h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
                "settings");
            a.scripts = h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "scripts");
            q(a)
        }

        function C(a) {
            var e = u(a),
                g = F.rootElement,
                f;
            e && "document-styles" === e.localName && "urn:oasis:names:tc:opendocument:xmlns:office:1.0" === e.namespaceURI ? (g.fontFaceDecls = h.getDirectChild(e, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "font-face-decls"), d(g, g.fontFaceDecls), f = h.getDirectChild(e, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "styles"), g.styles = f || a.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0",
                    "styles"), d(g, g.styles), f = h.getDirectChild(e, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "automatic-styles"), g.automaticStyles = f || a.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0", "automatic-styles"), t(g.automaticStyles, "document-styles"), d(g, g.automaticStyles), e = h.getDirectChild(e, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "master-styles"), g.masterStyles = e || a.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0", "master-styles"), d(g, g.masterStyles),
                b.prefixStyleNames(g.automaticStyles, m, g.masterStyles)) : z(c.INVALID)
        }

        function D(a) {
            a = u(a);
            var e, g, f, p;
            if (a && "document-content" === a.localName && "urn:oasis:names:tc:opendocument:xmlns:office:1.0" === a.namespaceURI) {
                e = F.rootElement;
                f = h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "font-face-decls");
                if (e.fontFaceDecls && f) {
                    p = e.fontFaceDecls;
                    var l, m, q, k, K = {};
                    g = v(p);
                    k = v(f);
                    for (f = f.firstElementChild; f;) {
                        l = f.nextElementSibling;
                        if (f.namespaceURI === n && "font-face" === f.localName)
                            if (m = f.getAttributeNS(n,
                                    "name"), g.hasOwnProperty(m)) {
                                if (!f.isEqualNode(g[m])) {
                                    q = m;
                                    for (var G = g, s = k, A = 0, x = void 0, x = q = q.replace(/\d+$/, ""); G.hasOwnProperty(x) || s.hasOwnProperty(x);) A += 1, x = q + A;
                                    q = x;
                                    f.setAttributeNS(n, "style:name", q);
                                    p.appendChild(f);
                                    g[q] = f;
                                    delete k[m];
                                    K[m] = q
                                }
                            } else p.appendChild(f), g[m] = f, delete k[m];
                        f = l
                    }
                    p = K
                } else f && (e.fontFaceDecls = f, d(e, f));
                g = h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "automatic-styles");
                t(g, "document-content");
                p && b.changeFontFaceNames(g, p);
                if (e.automaticStyles && g)
                    for (p =
                        g.firstChild; p;) e.automaticStyles.appendChild(p), p = g.firstChild;
                else g && (e.automaticStyles = g, d(e, g));
                a = h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "body");
                if (null === a) throw "<office:body/> tag is mising.";
                e.body = a;
                d(e, e.body)
            } else z(c.INVALID)
        }

        function I(a) {
            a = u(a);
            var b;
            a && "document-meta" === a.localName && "urn:oasis:names:tc:opendocument:xmlns:office:1.0" === a.namespaceURI && (b = F.rootElement, b.meta = h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "meta"),
                d(b, b.meta))
        }

        function N(a) {
            a = u(a);
            var b;
            a && "document-settings" === a.localName && "urn:oasis:names:tc:opendocument:xmlns:office:1.0" === a.namespaceURI && (b = F.rootElement, b.settings = h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "settings"), d(b, b.settings))
        }

        function K(a) {
            a = u(a);
            var b;
            if (a && "manifest" === a.localName && "urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" === a.namespaceURI)
                for (b = F.rootElement, b.manifest = a, a = b.manifest.firstElementChild; a;) "file-entry" === a.localName && "urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" ===
                    a.namespaceURI && (R[a.getAttributeNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0", "full-path")] = a.getAttributeNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0", "media-type")), a = a.nextElementSibling
        }

        function G(a, b, c) {
            a = h.getElementsByTagName(a, b);
            var e;
            for (e = 0; e < a.length; e += 1) b = a[e], c.hasOwnProperty(b.namespaceURI) || b.parentNode.removeChild(b)
        }

        function A(a) {
            G(a, "script", {
                "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0": !0,
                "urn:oasis:names:tc:opendocument:xmlns:office:1.0": !0,
                "urn:oasis:names:tc:opendocument:xmlns:table:1.0": !0,
                "urn:oasis:names:tc:opendocument:xmlns:text:1.0": !0,
                "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0": !0
            });
            G(a, "style", {
                "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0": !0,
                "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0": !0,
                "urn:oasis:names:tc:opendocument:xmlns:style:1.0": !0
            })
        }

        function Y(a) {
            var b = a.firstElementChild,
                c = [],
                e, d, g, f = a.attributes,
                p = f.length;
            for (e = 0; e < p; e += 1) g = f.item(e), d = g.localName.substr(0, 2).toLowerCase(), null === g.namespaceURI && "on" === d && c.push(g);
            p = c.length;
            for (e =
                0; e < p; e += 1) a.removeAttributeNode(c[e]);
            for (; b;) Y(b), b = b.nextElementSibling
        }

        function T(a) {
            var b = a.shift();
            b ? X.loadAsDOM(b.path, function(e, d) {
                d && (A(d), Y(d.documentElement));
                b.handler(d);
                F.state === c.INVALID ? e ? runtime.log("ERROR: Unable to load " + b.path + " - " + e) : runtime.log("ERROR: Unable to load " + b.path) : (e && runtime.log("DEBUG: Unable to load " + b.path + " - " + e), T(a))
            }) : (q(F.rootElement), z(c.DONE))
        }

        function J(a) {
            var b = "";
            odf.Namespaces.forEachPrefix(function(a, c) {
                b += " xmlns:" + a + '="' + c + '"'
            });
            return '<?xml version="1.0" encoding="UTF-8"?><office:' +
                a + " " + b + ' office:version="1.2">'
        }

        function U() {
            var a = new xmldom.LSSerializer,
                b = J("document-meta");
            a.filter = new odf.OdfNodeFilter;
            b += a.writeToString(F.rootElement.meta, odf.Namespaces.namespaceMap);
            return b + "</office:document-meta>"
        }

        function aa(a, b) {
            var c = document.createElementNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0", "manifest:file-entry");
            c.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0", "manifest:full-path", a);
            c.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:manifest:1.0",
                "manifest:media-type", b);
            return c
        }

        function P() {
            var a = runtime.parseXML('<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2"></manifest:manifest>'),
                b = a.documentElement,
                c = new xmldom.LSSerializer,
                e;
            for (e in R) R.hasOwnProperty(e) && b.appendChild(aa(e, R[e]));
            c.filter = new odf.OdfNodeFilter;
            return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' + c.writeToString(a, odf.Namespaces.namespaceMap)
        }

        function E() {
            var a, c, e, d = odf.Namespaces.namespaceMap,
                g = new xmldom.LSSerializer,
                f = J("document-styles");
            c = s(F.rootElement.automaticStyles, "document-styles");
            e = F.rootElement.masterStyles.cloneNode(!0);
            a = w(F.rootElement.fontFaceDecls, [e, F.rootElement.styles, c]);
            b.removePrefixFromStyleNames(c, m, e);
            g.filter = new k(e, c);
            f += g.writeToString(a, d);
            f += g.writeToString(F.rootElement.styles, d);
            f += g.writeToString(c, d);
            f += g.writeToString(e, d);
            return f + "</office:document-styles>"
        }

        function Q() {
            var b, c, e = odf.Namespaces.namespaceMap,
                d = new xmldom.LSSerializer,
                g = J("document-content");
            c = s(F.rootElement.automaticStyles, "document-content");
            b = w(F.rootElement.fontFaceDecls, [c]);
            d.filter = new a(F.rootElement.body, c);
            g += d.writeToString(b, e);
            g += d.writeToString(c, e);
            g += d.writeToString(F.rootElement.body, e);
            return g + "</office:document-content>"
        }

        function $(a, b) {
            runtime.loadXML(a, function(a, e) {
                if (a) b(a);
                else if (e) {
                    A(e);
                    Y(e.documentElement);
                    var d = u(e);
                    d && "document" === d.localName && "urn:oasis:names:tc:opendocument:xmlns:office:1.0" === d.namespaceURI ? (H(d), z(c.DONE)) : z(c.INVALID)
                } else b("No DOM was loaded.")
            })
        }

        function B(a, b) {
            var c;
            c = F.rootElement;
            var e = c.meta;
            e || (c.meta = e = document.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0", "meta"), d(c, e));
            c = e;
            a && h.mapKeyValObjOntoNode(c, a, odf.Namespaces.lookupNamespaceURI);
            b && h.removeKeyElementsFromNode(c, b, odf.Namespaces.lookupNamespaceURI)
        }

        function V(a, b) {
            function e(a, b) {
                var c;
                b || (b = a);
                c = document.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0", b);
                p[a] = c;
                p.appendChild(c)
            }
            var d = new core.Zip("", null),
                g = "application/vnd.oasis.opendocument." +
                a + (!0 === b ? "-template" : ""),
                f = runtime.byteArrayFromString(g, "utf8"),
                p = F.rootElement,
                h = document.createElementNS("urn:oasis:names:tc:opendocument:xmlns:office:1.0", a);
            d.save("mimetype", f, !1, new Date);
            e("meta");
            e("settings");
            e("scripts");
            e("fontFaceDecls", "font-face-decls");
            e("styles");
            e("automaticStyles", "automatic-styles");
            e("masterStyles", "master-styles");
            e("body");
            p.body.appendChild(h);
            R["/"] = g;
            R["settings.xml"] = "text/xml";
            R["meta.xml"] = "text/xml";
            R["styles.xml"] = "text/xml";
            R["content.xml"] = "text/xml";
            z(c.DONE);
            return d
        }

        function ba() {
            var a, b = new Date,
                c = "";
            F.rootElement.settings && F.rootElement.settings.firstElementChild && (a = new xmldom.LSSerializer, c = J("document-settings"), a.filter = new odf.OdfNodeFilter, c += a.writeToString(F.rootElement.settings, odf.Namespaces.namespaceMap), c += "</office:document-settings>");
            (a = c) ? (a = runtime.byteArrayFromString(a, "utf8"), X.save("settings.xml", a, !0, b)) : X.remove("settings.xml");
            c = runtime.getWindow();
            a = "WebODF/" + webodf.Version;
            c && (a = a + " " + c.navigator.userAgent);
            B({
                    "meta:generator": a
                },
                null);
            a = runtime.byteArrayFromString(U(), "utf8");
            X.save("meta.xml", a, !0, b);
            a = runtime.byteArrayFromString(E(), "utf8");
            X.save("styles.xml", a, !0, b);
            a = runtime.byteArrayFromString(Q(), "utf8");
            X.save("content.xml", a, !0, b);
            a = runtime.byteArrayFromString(P(), "utf8");
            X.save("META-INF/manifest.xml", a, !0, b)
        }

        function Z(a, b) {
            ba();
            X.writeAs(a, function(a) {
                b(a)
            })
        }
        var F = this,
            X, R = {},
            da, S = "";
        this.onstatereadychange = f;
        this.state = this.onchange = null;
        this.getMetadata = y;
        this.setRootElement = H;
        this.getContentElement = function() {
            var a;
            da || (a = F.rootElement.body, da = h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "text") || h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "presentation") || h.getDirectChild(a, "urn:oasis:names:tc:opendocument:xmlns:office:1.0", "spreadsheet"));
            if (!da) throw "Could not find content element in <office:body/>.";
            return da
        };
        this.getDocumentType = function() {
            var a = F.getContentElement();
            return a && a.localName
        };
        this.isTemplate = function() {
            return "-template" === R["/"].substr(-9)
        };
        this.setIsTemplate = function(a) {
            var b = R["/"],
                c = "-template" === b.substr(-9);
            a !== c && (b = a ? b + "-template" : b.substr(0, b.length - 9), R["/"] = b, a = runtime.byteArrayFromString(b, "utf8"), X.save("mimetype", a, !1, new Date))
        };
        this.getPart = function(a) {
            return new odf.OdfPart(a, R[a], F, X)
        };
        this.getPartData = function(a, b) {
            X.load(a, b)
        };
        this.setMetadata = B;
        this.incrementEditingCycles = function() {
            var a = y(odf.Namespaces.metans, "editing-cycles"),
                a = a ? parseInt(a, 10) : 0;
            isNaN(a) && (a = 0);
            B({
                "meta:editing-cycles": a + 1
            }, null);
            return a + 1
        };
        this.createByteArray = function(a, b) {
            ba();
            X.createByteArray(a, b)
        };
        this.saveAs = Z;
        this.save = function(a) {
            Z(S, a)
        };
        this.getUrl = function() {
            return S
        };
        this.setBlob = function(a, b, c) {
            c = l.convertBase64ToByteArray(c);
            X.save(a, c, !1, new Date);
            R.hasOwnProperty(a) && runtime.log(a + " has been overwritten.");
            R[a] = b
        };
        this.removeBlob = function(a) {
            var b = X.remove(a);
            runtime.assert(b, "file is not found: " + a);
            delete R[a]
        };
        this.state = c.LOADING;
        this.rootElement = function(a) {
            var b = document.createElementNS(a.namespaceURI, a.localName),
                c;
            a = new a.Type;
            for (c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
            return b
        }({
            Type: odf.ODFDocumentElement,
            namespaceURI: odf.ODFDocumentElement.namespaceURI,
            localName: odf.ODFDocumentElement.localName
        });
        e === odf.OdfContainer.DocumentType.TEXT ? X = V("text") : e === odf.OdfContainer.DocumentType.TEXT_TEMPLATE ? X = V("text", !0) : e === odf.OdfContainer.DocumentType.PRESENTATION ? X = V("presentation") : e === odf.OdfContainer.DocumentType.PRESENTATION_TEMPLATE ? X = V("presentation", !0) : e === odf.OdfContainer.DocumentType.SPREADSHEET ? X = V("spreadsheet") :
            e === odf.OdfContainer.DocumentType.SPREADSHEET_TEMPLATE ? X = V("spreadsheet", !0) : (S = e, X = new core.Zip(S, function(a, b) {
                X = b;
                a ? $(S, function(b) {
                    a && (X.error = a + "\n" + b, z(c.INVALID))
                }) : T([{
                    path: "styles.xml",
                    handler: C
                }, {
                    path: "content.xml",
                    handler: D
                }, {
                    path: "meta.xml",
                    handler: I
                }, {
                    path: "settings.xml",
                    handler: N
                }, {
                    path: "META-INF/manifest.xml",
                    handler: K
                }])
            }))
    };
    odf.OdfContainer.EMPTY = 0;
    odf.OdfContainer.LOADING = 1;
    odf.OdfContainer.DONE = 2;
    odf.OdfContainer.INVALID = 3;
    odf.OdfContainer.SAVING = 4;
    odf.OdfContainer.MODIFIED = 5;
    odf.OdfContainer.getContainer =
        function(a) {
            return new odf.OdfContainer(a, null)
        }
})();
odf.OdfContainer.DocumentType = {
    TEXT: 1,
    TEXT_TEMPLATE: 2,
    PRESENTATION: 3,
    PRESENTATION_TEMPLATE: 4,
    SPREADSHEET: 5,
    SPREADSHEET_TEMPLATE: 6
};
gui.AnnotatableCanvas = function() {};
gui.AnnotatableCanvas.prototype.refreshSize = function() {};
gui.AnnotatableCanvas.prototype.getZoomLevel = function() {};
gui.AnnotatableCanvas.prototype.getSizer = function() {};
gui.AnnotationViewManager = function(f, k, a, d) {
    function b(a) {
        var b = a.annotationEndElement,
            c = l.createRange(),
            d = a.getAttributeNS(odf.Namespaces.officens, "name");
        b && (c.setStart(a, a.childNodes.length), c.setEnd(b, 0), a = r.getTextNodes(c, !1), a.forEach(function(a) {
            var b;
            a: {
                for (b = a.parentNode; b.namespaceURI !== odf.Namespaces.officens || "body" !== b.localName;) {
                    if (b.namespaceURI === e && "webodf-annotationHighlight" === b.className && b.getAttribute("annotation") === d) {
                        b = !0;
                        break a
                    }
                    b = b.parentNode
                }
                b = !1
            }
            b || (b = l.createElement("span"),
                b.className = "webodf-annotationHighlight", b.setAttribute("annotation", d), a.parentNode.replaceChild(b, a), b.appendChild(a))
        }));
        c.detach()
    }

    function h(b) {
        var e = f.getSizer();
        b ? (a.style.display = "inline-block", e.style.paddingRight = c.getComputedStyle(a).width) : (a.style.display = "none", e.style.paddingRight = 0);
        f.refreshSize()
    }

    function n() {
        m.sort(function(a, b) {
            return 0 !== (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) ? -1 : 1
        })
    }

    function q() {
        var b;
        for (b = 0; b < m.length; b += 1) {
            var c = m[b],
                e = c.parentNode,
                d = e.nextElementSibling,
                h = d.nextElementSibling,
                l = e.parentNode,
                q = 0,
                q = m[m.indexOf(c) - 1],
                n = void 0,
                c = f.getZoomLevel();
            e.style.left = (a.getBoundingClientRect().left - l.getBoundingClientRect().left) / c + "px";
            e.style.width = a.getBoundingClientRect().width / c + "px";
            d.style.width = parseFloat(e.style.left) - 30 + "px";
            q && (n = q.parentNode.getBoundingClientRect(), 20 >= (l.getBoundingClientRect().top - n.bottom) / c ? e.style.top = Math.abs(l.getBoundingClientRect().top - n.bottom) / c + 20 + "px" : e.style.top = "0px");
            h.style.left = d.getBoundingClientRect().width /
                c + "px";
            var d = h.style,
                l = h.getBoundingClientRect().left / c,
                q = h.getBoundingClientRect().top / c,
                n = e.getBoundingClientRect().left / c,
                k = e.getBoundingClientRect().top / c,
                r = 0,
                H = 0,
                r = n - l,
                r = r * r,
                H = k - q,
                H = H * H,
                l = Math.sqrt(r + H);
            d.width = l + "px";
            q = Math.asin((e.getBoundingClientRect().top - h.getBoundingClientRect().top) / (c * parseFloat(h.style.width)));
            h.style.transform = "rotate(" + q + "rad)";
            h.style.MozTransform = "rotate(" + q + "rad)";
            h.style.WebkitTransform = "rotate(" + q + "rad)";
            h.style.msTransform = "rotate(" + q + "rad)"
        }
    }
    var m = [],
        l = k.ownerDocument,
        r = odf.OdfUtils,
        c = runtime.getWindow(),
        e = "http://www.w3.org/1999/xhtml";
    runtime.assert(Boolean(c), "Expected to be run in an environment which has a global window, like a browser.");
    this.rerenderAnnotations = q;
    this.rehighlightAnnotations = function() {
        m.forEach(function(a) {
            b(a)
        })
    };
    this.getMinimumHeightForAnnotationPane = function() {
        return "none" !== a.style.display && 0 < m.length ? (m[m.length - 1].parentNode.getBoundingClientRect().bottom - a.getBoundingClientRect().top) / f.getZoomLevel() + "px" : null
    };
    this.addAnnotation =
        function(a) {
            h(!0);
            m.push(a);
            n();
            var c = l.createElement("div"),
                e = l.createElement("div"),
                f = l.createElement("div"),
                k = l.createElement("div"),
                v;
            c.className = "annotationWrapper";
            c.setAttribute("creator", r.getAnnotationCreator(a));
            a.parentNode.insertBefore(c, a);
            e.className = "annotationNote";
            e.appendChild(a);
            d && (v = l.createElement("div"), v.className = "annotationRemoveButton", e.appendChild(v));
            f.className = "annotationConnector horizontal";
            k.className = "annotationConnector angular";
            c.appendChild(e);
            c.appendChild(f);
            c.appendChild(k);
            a.annotationEndElement && b(a);
            q()
        };
    this.forgetAnnotations = function() {
        for (; m.length;) {
            var a = m[0],
                b = m.indexOf(a),
                c = a.parentNode.parentNode;
            "div" === c.localName && (c.parentNode.insertBefore(a, c), c.parentNode.removeChild(c));
            for (var a = a.getAttributeNS(odf.Namespaces.officens, "name"), a = l.querySelectorAll('span.webodf-annotationHighlight[annotation="' + a + '"]'), e = c = void 0, c = 0; c < a.length; c += 1) {
                for (e = a.item(c); e.firstChild;) e.parentNode.insertBefore(e.firstChild, e);
                e.parentNode.removeChild(e)
            } - 1 !==
                b && m.splice(b, 1);
            0 === m.length && h(!1)
        }
    }
};
gui.Viewport = function() {};
gui.Viewport.prototype.scrollIntoView = function(f, k) {};
gui.SingleScrollViewport = function(f) {
    this.scrollIntoView = function(k, a) {
        var d, b, h, n;
        n = f.offsetHeight - f.clientHeight;
        h = f.offsetWidth - f.clientWidth;
        var q = f.getBoundingClientRect();
        if (k && q) {
            d = q.left + 5;
            b = q.top + 5;
            h = q.right - (h + 5);
            n = q.bottom - (n + 5);
            if (a || k.top < b) f.scrollTop -= b - k.top;
            else if (k.top > n || k.bottom > n) f.scrollTop = k.bottom - k.top <= n - b ? f.scrollTop + (k.bottom - n) : f.scrollTop + (k.top - b);
            k.left < d ? f.scrollLeft -= d - k.left : k.right > h && (f.scrollLeft = k.right - k.left <= h - d ? f.scrollLeft + (k.right - h) : f.scrollLeft - (d - k.left))
        }
    }
};
(function() {
    function f(a, h, n, q, m) {
        var l, k = 0,
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                if (k === n) {
                    l = c;
                    break
                }
                k += 1
            } l ? h.getPartData(a[l].href, function(c, p) {
            if (c) runtime.log(c);
            else if (p) {
                var g = "@font-face { font-family: " + (a[l].family || l) + "; src: url(data:application/x-font-ttf;charset=binary;base64," + d.convertUTF8ArrayToBase64(p) + ') format("truetype"); }';
                try {
                    q.insertRule(g, q.cssRules.length)
                } catch (k) {
                    runtime.log("Problem inserting rule in CSS: " + runtime.toJson(k) + "\nRule: " + g)
                }
            } else runtime.log("missing font data for " +
                a[l].href);
            f(a, h, n + 1, q, m)
        }) : m && m()
    }
    var k = xmldom.XPath,
        a = odf.OdfUtils,
        d = new core.Base64;
    odf.FontLoader = function() {
        this.loadFonts = function(b, d) {
            for (var n = b.rootElement.fontFaceDecls; d.cssRules.length;) d.deleteRule(d.cssRules.length - 1);
            if (n) {
                var q = {},
                    m, l, r, c;
                if (n)
                    for (n = k.getODFElementsWithXPath(n, "style:font-face[svg:font-face-src]", odf.Namespaces.lookupNamespaceURI), m = 0; m < n.length; m += 1) l = n[m], r = l.getAttributeNS(odf.Namespaces.stylens, "name"), c = a.getNormalizedFontFamilyName(l.getAttributeNS(odf.Namespaces.svgns,
                        "font-family")), l = k.getODFElementsWithXPath(l, "svg:font-face-src/svg:font-face-uri", odf.Namespaces.lookupNamespaceURI), 0 < l.length && (l = l[0].getAttributeNS(odf.Namespaces.xlinkns, "href"), q[r] = {
                        href: l,
                        family: c
                    });
                f(q, b, 0, d)
            }
        }
    }
})();
odf.Formatting = function() {
    function f(a) {
        return (a = z[a]) ? w.mergeObjects({}, a) : {}
    }

    function k() {
        for (var a = c.rootElement.fontFaceDecls, b = {}, e, d, a = a && a.firstElementChild; a;) {
            if (e = a.getAttributeNS(g, "name"))
                if ((d = a.getAttributeNS(p, "font-family")) || 0 < a.getElementsByTagNameNS(p, "font-face-uri").length) b[e] = d;
            a = a.nextElementSibling
        }
        return b
    }

    function a(a) {
        for (var b = c.rootElement.styles.firstElementChild; b;) {
            if (b.namespaceURI === g && "default-style" === b.localName && b.getAttributeNS(g, "family") === a) return b;
            b = b.nextElementSibling
        }
        return null
    }

    function d(a, b, e) {
        var d, f, p;
        e = e || [c.rootElement.automaticStyles, c.rootElement.styles];
        for (p = 0; p < e.length; p += 1)
            for (d = e[p], d = d.firstElementChild; d;) {
                f = d.getAttributeNS(g, "name");
                if (d.namespaceURI === g && "style" === d.localName && d.getAttributeNS(g, "family") === b && f === a || "list-style" === b && d.namespaceURI === x && "list-style" === d.localName && f === a || "data" === b && d.namespaceURI === t && f === a) return d;
                d = d.nextElementSibling
            }
        return null
    }

    function b(a) {
        for (var b, c, e, d, f = {}, p = a.firstElementChild; p;) {
            if (p.namespaceURI === g)
                for (e =
                    f[p.nodeName] = {}, c = p.attributes, b = 0; b < c.length; b += 1) d = c.item(b), e[d.name] = d.value;
            p = p.nextElementSibling
        }
        c = a.attributes;
        for (b = 0; b < c.length; b += 1) d = c.item(b), f[d.name] = d.value;
        return f
    }

    function h(e, p) {
        for (var h = c.rootElement.styles, l, m = {}, q = e.getAttributeNS(g, "family"), n = e; n;) l = b(n), m = w.mergeObjects(l, m), n = (l = n.getAttributeNS(g, "parent-style-name")) ? d(l, q, [h]) : null;
        if (n = a(q)) l = b(n), m = w.mergeObjects(l, m);
        !1 !== p && (l = f(q), m = w.mergeObjects(l, m));
        return m
    }

    function n(a, b) {
        function c(a) {
            Object.keys(a).forEach(function(b) {
                Object.keys(a[b]).forEach(function(a) {
                    p +=
                        "|" + b + ":" + a + "|"
                })
            })
        }
        for (var d = a.nodeType === Node.TEXT_NODE ? a.parentNode : a, g, f = [], p = "", h = !1; d;) !h && v.isGroupingElement(d) && (h = !0), (g = e.determineStylesForNode(d)) && f.push(g), d = d.parentNode;
        h && (f.forEach(c), b && (b[p] = f));
        return h ? f : void 0
    }

    function q(a) {
        var b = {
            orderedStyles: [],
            styleProperties: {}
        };
        a.forEach(function(a) {
            Object.keys(a).forEach(function(e) {
                var f = Object.keys(a[e])[0],
                    p = {
                        name: f,
                        family: e,
                        displayName: void 0,
                        isCommonStyle: !1
                    },
                    l;
                (l = d(f, e)) ? (e = h(l), b.styleProperties = w.mergeObjects(e, b.styleProperties),
                    p.displayName = l.getAttributeNS(g, "display-name") || void 0, p.isCommonStyle = l.parentNode === c.rootElement.styles) : runtime.log("No style element found for '" + f + "' of family '" + e + "'");
                b.orderedStyles.push(p)
            })
        });
        return b
    }

    function m(a, b) {
        var c = {},
            e = [];
        b || (b = {});
        a.forEach(function(a) {
            n(a, c)
        });
        Object.keys(c).forEach(function(a) {
            b[a] || (b[a] = q(c[a]));
            e.push(b[a])
        });
        return e
    }

    function l(a) {
        for (var b = c.rootElement.masterStyles.firstElementChild; b && (b.namespaceURI !== g || "master-page" !== b.localName || b.getAttributeNS(g,
                "name") !== a);) b = b.nextElementSibling;
        return b
    }

    function r(a, b) {
        var c;
        a && (c = u.convertMeasure(a, "px"));
        void 0 === c && b && (c = u.convertMeasure(b, "px"));
        return c
    }
    var c, e = new odf.StyleInfo,
        p = odf.Namespaces.svgns,
        g = odf.Namespaces.stylens,
        x = odf.Namespaces.textns,
        t = odf.Namespaces.numberns,
        y = odf.Namespaces.fons,
        v = odf.OdfUtils,
        s = core.DomUtils,
        w = new core.Utils,
        u = new core.CSSUnits,
        z = {
            paragraph: {
                "style:paragraph-properties": {
                    "fo:text-align": "left"
                }
            }
        };
    this.getSystemDefaultStyleAttributes = f;
    this.setOdfContainer = function(a) {
        c =
            a
    };
    this.getFontMap = k;
    this.getAvailableParagraphStyles = function() {
        for (var a = c.rootElement.styles, b, e, d = [], a = a && a.firstElementChild; a;) "style" === a.localName && a.namespaceURI === g && (b = a.getAttributeNS(g, "family"), "paragraph" === b && (b = a.getAttributeNS(g, "name"), e = a.getAttributeNS(g, "display-name") || b, b && e && d.push({
            name: b,
            displayName: e
        }))), a = a.nextElementSibling;
        return d
    };
    this.isStyleUsed = function(a) {
        var b, d = c.rootElement;
        b = e.hasDerivedStyles(d, odf.Namespaces.lookupNamespaceURI, a);
        a = (new e.UsedStyleList(d.styles)).uses(a) ||
            (new e.UsedStyleList(d.automaticStyles)).uses(a) || (new e.UsedStyleList(d.body)).uses(a);
        return b || a
    };
    this.getDefaultStyleElement = a;
    this.getStyleElement = d;
    this.getStyleAttributes = b;
    this.getInheritedStyleAttributes = h;
    this.getFirstCommonParentStyleNameOrSelf = function(a) {
        var b = c.rootElement.styles,
            e;
        if (e = d(a, "paragraph", [c.rootElement.automaticStyles]))
            if (a = e.getAttributeNS(g, "parent-style-name"), !a) return null;
        return (e = d(a, "paragraph", [b])) ? a : null
    };
    this.hasParagraphStyle = function(a) {
        return Boolean(d(a,
            "paragraph"))
    };
    this.getAppliedStyles = m;
    this.getAppliedStylesForElement = function(a, b) {
        return m([a], b)[0]
    };
    this.updateStyle = function(a, b) {
        var e, d;
        s.mapObjOntoNode(a, b, odf.Namespaces.lookupNamespaceURI);
        (e = (e = b["style:text-properties"]) && e["style:font-name"]) && !k().hasOwnProperty(e) && (d = a.ownerDocument.createElementNS(g, "style:font-face"), d.setAttributeNS(g, "style:name", e), d.setAttributeNS(p, "svg:font-family", e), c.rootElement.fontFaceDecls.appendChild(d))
    };
    this.createDerivedStyleObject = function(a, e,
        g) {
        var f = d(a, e);
        runtime.assert(Boolean(f), "No style element found for '" + a + "' of family '" + e + "'");
        a = f.parentNode === c.rootElement.styles ? {
            "style:parent-style-name": a
        } : b(f);
        a["style:family"] = e;
        w.mergeObjects(a, g);
        return a
    };
    this.getDefaultTabStopDistance = function() {
        for (var b = a("paragraph"), b = b && b.firstElementChild, c; b;) b.namespaceURI === g && "paragraph-properties" === b.localName && (c = b.getAttributeNS(g, "tab-stop-distance")), b = b.nextElementSibling;
        c || (c = "1.25cm");
        return v.parseNonNegativeLength(c)
    };
    this.getMasterPageElement =
        l;
    this.getContentSize = function(a, b) {
        var e, f, p, h, m, q, n, k, x, t;
        a: {
            f = d(a, b);runtime.assert("paragraph" === b || "table" === b, "styleFamily must be either paragraph or table");
            if (f) {
                if (f = f.getAttributeNS(g, "master-page-name"))(e = l(f)) || runtime.log("WARN: No master page definition found for " + f);
                e || (e = l("Standard"));
                e || (e = c.rootElement.masterStyles.getElementsByTagNameNS(g, "master-page")[0]) || runtime.log("WARN: Document has no master pages defined");
                if (e)
                    for (f = e.getAttributeNS(g, "page-layout-name"), p = c.rootElement.automaticStyles.getElementsByTagNameNS(g,
                            "page-layout"), h = 0; h < p.length; h += 1)
                        if (e = p.item(h), e.getAttributeNS(g, "name") === f) break a
            }
            e = null
        }
        e || (e = s.getDirectChild(c.rootElement.styles, g, "default-page-layout"));
        (e = s.getDirectChild(e, g, "page-layout-properties")) ? ("landscape" === e.getAttributeNS(g, "print-orientation") ? (f = "29.7cm", p = "21.001cm") : (f = "21.001cm", p = "29.7cm"), f = r(e.getAttributeNS(y, "page-width"), f), p = r(e.getAttributeNS(y, "page-height"), p), h = r(e.getAttributeNS(y, "margin")), void 0 === h ? (h = r(e.getAttributeNS(y, "margin-left"), "2cm"), m = r(e.getAttributeNS(y,
            "margin-right"), "2cm"), q = r(e.getAttributeNS(y, "margin-top"), "2cm"), n = r(e.getAttributeNS(y, "margin-bottom"), "2cm")) : h = m = q = n = h, k = r(e.getAttributeNS(y, "padding")), void 0 === k ? (k = r(e.getAttributeNS(y, "padding-left"), "0cm"), x = r(e.getAttributeNS(y, "padding-right"), "0cm"), t = r(e.getAttributeNS(y, "padding-top"), "0cm"), e = r(e.getAttributeNS(y, "padding-bottom"), "0cm")) : k = x = t = e = k) : (f = r("21.001cm"), p = r("29.7cm"), h = m = q = n = h = r("2cm"), k = x = t = e = k = r("0cm"));
        return {
            width: f - h - m - k - x,
            height: p - q - n - t - e
        }
    }
};
(function() {
    var f = odf.Namespaces.stylens,
        k = odf.Namespaces.textns,
        a = {
            graphic: "draw",
            "drawing-page": "draw",
            paragraph: "text",
            presentation: "presentation",
            ruby: "text",
            section: "text",
            table: "table",
            "table-cell": "table",
            "table-column": "table",
            "table-row": "table",
            text: "text",
            list: "text",
            page: "office"
        };
    odf.StyleTreeNode = function(a) {
        this.derivedStyles = {};
        this.element = a
    };
    odf.StyleTree = function(d, b) {
        function h(a) {
            var b, e, d, g = {};
            if (!a) return g;
            for (a = a.firstElementChild; a;) {
                if (e = a.namespaceURI !== f || "style" !== a.localName &&
                    "default-style" !== a.localName ? a.namespaceURI === k && "list-style" === a.localName ? "list" : a.namespaceURI !== f || "page-layout" !== a.localName && "default-page-layout" !== a.localName ? void 0 : "page" : a.getAttributeNS(f, "family"))(b = a.getAttributeNS(f, "name")) || (b = ""), g.hasOwnProperty(e) ? d = g[e] : g[e] = d = {}, d[b] = a;
                a = a.nextElementSibling
            }
            return g
        }

        function n(a, b) {
            if (a.hasOwnProperty(b)) return a[b];
            var e = null,
                d = Object.keys(a),
                g;
            for (g = 0; g < d.length && !(e = n(a[d[g]].derivedStyles, b)); g += 1);
            return e
        }

        function q(a, b, e) {
            var d, g,
                h;
            if (!b.hasOwnProperty(a)) return null;
            d = new odf.StyleTreeNode(b[a]);
            g = d.element.getAttributeNS(f, "parent-style-name");
            h = null;
            g && (h = n(e, g) || q(g, b, e));
            h ? h.derivedStyles[a] = d : e[a] = d;
            delete b[a];
            return d
        }

        function m(a, b) {
            a && Object.keys(a).forEach(function(e) {
                q(e, a, b)
            })
        }
        var l = {};
        this.getStyleTree = function() {
            return l
        };
        (function() {
            var f, c, e;
            c = h(d);
            e = h(b);
            Object.keys(a).forEach(function(a) {
                f = l[a] = {};
                m(c[a], f);
                m(e[a], f)
            })
        })()
    }
})();
(function() {
    function f(a, b) {
        try {
            a.insertRule(b, a.cssRules.length)
        } catch (d) {
            runtime.log("cannot load rule: " + b + " - " + d)
        }
    }

    function k(a, b) {
        this.listCounterCount = 0;
        this.contentRules = a;
        this.counterIdStack = [];
        this.continuedCounterIdStack = b
    }

    function a(a) {
        function b(e, d, q, n) {
            var k = d.namespaceURI === h && "list" === d.localName,
                r = d.namespaceURI === h && "list-item" === d.localName;
            if (k || r) {
                if (k) {
                    var k = q += 1,
                        s, w, u;
                    n.listCounterCount += 1;
                    r = e + "-level" + k + "-" + n.listCounterCount;
                    d.setAttributeNS("urn:webodf:names:helper", "counter-id",
                        r);
                    s = n.continuedCounterIdStack.shift();
                    s || (s = r, c += r + " 1 ", w = 'text|list[webodfhelper|counter-id="' + r + '"] > text|list-item:first-child > :not(text|list):first-child:before', w += "{", w += "counter-increment: " + s + " 0;", w += "}", f(a, w));
                    for (; n.counterIdStack.length >= k;) n.counterIdStack.pop();
                    n.counterIdStack.push(s);
                    u = n.contentRules[k.toString()] || "";
                    for (w = 1; w <= k; w += 1) u = u.replace(w + "webodf-listLevel", n.counterIdStack[w - 1]);
                    w = 'text|list[webodfhelper|counter-id="' + r + '"] > text|list-item > :not(text|list):first-child:before';
                    w += "{";
                    w += u;
                    w += "counter-increment: " + s + ";";
                    w += "}";
                    f(a, w)
                }
                for (d = d.firstElementChild; d;) b(e, d, q, n), d = d.nextElementSibling
            } else n.continuedCounterIdStack = []
        }
        var d = 0,
            c = "",
            e = {};
        this.createCounterRules = function(a, c, f) {
            var h = c.getAttributeNS(n, "id"),
                m = [];
            f && (f = f.getAttributeNS("urn:webodf:names:helper", "counter-id"), m = e[f].slice(0));
            a = new k(a, m);
            h ? h = "Y" + h : (d += 1, h = "X" + d);
            b(h, c, 0, a);
            e[h + "-level1-1"] = a.counterIdStack
        };
        this.initialiseCreatedCounters = function() {
            var b;
            b = "office|document{" + ("counter-reset: " + c +
                ";");
            b += "}";
            f(a, b)
        }
    }
    var d = odf.Namespaces.fons,
        b = odf.Namespaces.stylens,
        h = odf.Namespaces.textns,
        n = odf.Namespaces.xmlns,
        q = {
            1: "decimal",
            a: "lower-latin",
            A: "upper-latin",
            i: "lower-roman",
            I: "upper-roman"
        };
    odf.ListStyleToCss = function() {
        function m(a) {
            var b = p.parseLength(a);
            return b ? e.convert(b.value, b.unit, "px") : (runtime.log("Could not parse value '" + a + "'."), 0)
        }

        function l(a) {
            return a.replace(/\\/g, "\\\\").replace(/"/g, '\\"')
        }

        function k(a, b) {
            var c;
            a && (c = a.getAttributeNS(h, "style-name"));
            return c === b
        }

        function c(c,
            e, d) {
            e = e.getElementsByTagNameNS(h, "list");
            c = new a(c);
            var f, p, m, w, u, z, H = {},
                C;
            for (C = 0; C < e.length; C += 1)
                if (f = e.item(C), z = f.getAttributeNS(h, "style-name")) {
                    m = f.getAttributeNS(h, "continue-numbering");
                    w = f.getAttributeNS(h, "continue-list");
                    (u = f.getAttributeNS(n, "id")) && (H[u] = f);
                    u = d[z].element.firstElementChild;
                    for (var D = void 0, I = {}; u;) {
                        var D = (D = u.getAttributeNS(h, "level")) && parseInt(D, 10),
                            N = I,
                            K = u,
                            G = "",
                            A = void 0,
                            Y = void 0,
                            T = A = void 0;
                        if ("list-level-style-number" === K.localName) {
                            var J = K,
                                G = J.getAttributeNS(b, "num-format"),
                                A = J.getAttributeNS(b, "num-suffix") || "",
                                Y = J.getAttributeNS(b, "num-prefix") || "",
                                U = "",
                                aa = J.getAttributeNS(h, "level"),
                                J = J.getAttributeNS(h, "display-levels");
                            Y && (U += '"' + l(Y) + '"\n');
                            if (q.hasOwnProperty(G))
                                for (aa = aa ? parseInt(aa, 10) : 1, J = J ? parseInt(J, 10) : 1; 0 < J;) U += " counter(" + (aa - J + 1) + "webodf-listLevel," + q[G] + ")", 1 < J && (U += '"."'), J -= 1;
                            else U = G ? U + (' "' + G + '"') : U + ' ""';
                            G = "content:" + U + ' "' + l(A) + '"'
                        } else "list-level-style-image" === K.localName ? G = "content: none" : "list-level-style-bullet" === K.localName && (G = K.getAttributeNS(h,
                            "bullet-char"), G = 'content: "' + l(G) + '"');
                        if (A = K.getElementsByTagNameNS(b, "list-level-properties")[0]) Y = A.getAttributeNS(h, "list-level-position-and-space-mode"), "label-alignment" === Y && ((A = A.getElementsByTagNameNS(b, "list-level-label-alignment")[0]) && (T = A.getAttributeNS(h, "label-followed-by")), "space" === T && (G += ' "\\a0"'));
                        N[D] = "\n" + G + ";\n";
                        u = u.nextElementSibling
                    }
                    u = I;
                    m && !w && k(p, z) ? c.createCounterRules(u, f, p) : w && k(H[w], z) ? c.createCounterRules(u, f, H[w]) : c.createCounterRules(u, f);
                    p = f
                } c.initialiseCreatedCounters()
        }
        var e = new core.CSSUnits,
            p = odf.OdfUtils;
        this.applyListStyles = function(a, e, p) {
            var l, q;
            (l = e.list) && Object.keys(l).forEach(function(c) {
                q = l[c];
                for (var e = q.element.firstElementChild; e;) {
                    if (e.namespaceURI === h) {
                        for (var p = a, n = e, k = 'text|list[text|style-name="' + c + '"]', r = n.getAttributeNS(h, "level"), x = void 0, t = void 0, N = t = void 0, K = void 0, G = void 0, A = x = void 0, Y = void 0, T = void 0, J = void 0, K = void 0, N = (t = n.getElementsByTagNameNS(b, "list-level-properties")[0]) && t.getAttributeNS(h, "list-level-position-and-space-mode"),
                                K = t && t.getElementsByTagNameNS(b, "list-level-label-alignment")[0], x = r = r && parseInt(r, 10); 1 < x;) k += " > text|list-item > text|list", x -= 1;
                        x = t && t.getAttributeNS(d, "text-align") || "left";
                        switch (x) {
                            case "end":
                                x = "right";
                                break;
                            case "start":
                                x = "left"
                        }
                        "label-alignment" === N ? (G = K && K.getAttributeNS(d, "margin-left") || "0px", T = K && K.getAttributeNS(d, "text-indent") || "0px", J = K && K.getAttributeNS(h, "label-followed-by"), K = m(G)) : (G = t && t.getAttributeNS(h, "space-before") || "0px", A = t && t.getAttributeNS(h, "min-label-width") || "0px",
                            Y = t && t.getAttributeNS(h, "min-label-distance") || "0px", K = m(G) + m(A));
                        t = k + " > text|list-item";
                        t += "{";
                        t += "margin-left: " + K + "px;";
                        t += "}";
                        f(p, t);
                        t = k + " > text|list-item > text|list";
                        t += "{";
                        t += "margin-left: " + -K + "px;";
                        t += "}";
                        f(p, t);
                        t = k + " > text|list-item > :not(text|list):first-child:before";
                        t += "{";
                        t += "text-align: " + x + ";";
                        t += "display: inline-block;";
                        "label-alignment" === N ? (t += "margin-left: " + T + ";", "listtab" === J && (t += "padding-right: 0.2cm;")) : (t += "min-width: " + A + ";", t += "margin-left: " + (0 === parseFloat(A) ? "" :
                            "-") + A + ";", t += "padding-right: " + Y + ";");
                        t += "}";
                        f(p, t)
                    }
                    e = e.nextElementSibling
                }
            });
            c(a, p, l)
        }
    }
})();
odf.LazyStyleProperties = function(f, k) {
    var a = {};
    this.value = function(d) {
        var b;
        a.hasOwnProperty(d) ? b = a[d] : (b = k[d](), void 0 === b && f && (b = f.value(d)), a[d] = b);
        return b
    };
    this.reset = function(d) {
        f = d;
        a = {}
    }
};
odf.StyleParseUtils = function() {
    function f(a) {
        var d, b;
        a = (a = /(-?[0-9]*[0-9][0-9]*(\.[0-9]*)?|0+\.[0-9]*[1-9][0-9]*|\.[0-9]*[1-9][0-9]*)((cm)|(mm)|(in)|(pt)|(pc)|(px))/.exec(a)) ? {
            value: parseFloat(a[1]),
            unit: a[3]
        } : null;
        b = a && a.unit;
        "px" === b ? d = a.value : "cm" === b ? d = 96 * (a.value / 2.54) : "mm" === b ? d = 96 * (a.value / 25.4) : "in" === b ? d = 96 * a.value : "pt" === b ? d = a.value / 0.75 : "pc" === b && (d = 16 * a.value);
        return d
    }
    var k = odf.Namespaces.stylens;
    this.parseLength = f;
    this.parsePositiveLengthOrPercent = function(a, d, b) {
        var h;
        a && (h = parseFloat(a.substr(0,
            a.indexOf("%"))), isNaN(h) && (h = void 0));
        var n;
        void 0 !== h ? (b && (n = b.value(d)), h = void 0 === n ? void 0 : h * (n / 100)) : h = f(a);
        return h
    };
    this.getPropertiesElement = function(a, d, b) {
        for (d = b ? b.nextElementSibling : d.firstElementChild; null !== d && (d.localName !== a || d.namespaceURI !== k);) d = d.nextElementSibling;
        return d
    };
    this.parseAttributeList = function(a) {
        a && (a = a.replace(/^\s*(.*?)\s*$/g, "$1"));
        return a && 0 < a.length ? a.split(/\s+/) : []
    }
};
odf.Style2CSS = function() {
    function f(a, b, c) {
        var e = [];
        c = c.derivedStyles;
        var d;
        var g = y[a],
            h;
        void 0 === g ? b = null : (h = b ? "[" + g + '|style-name="' + b + '"]' : "", "presentation" === g && (g = "draw", h = b ? '[presentation|style-name="' + b + '"]' : ""), b = g + "|" + v[a].join(h + "," + g + "|") + h);
        null !== b && e.push(b);
        for (d in c) c.hasOwnProperty(d) && (b = f(a, d, c[d]), e = e.concat(b));
        return e
    }

    function k(a) {
        var b = "",
            c = "",
            b = null;
        if ("default-style" === a.localName) return null;
        b = a.getAttributeNS(r, "parent-style-name");
        c = a.getAttributeNS(r, "family");
        return b =
            P.getODFElementsWithXPath(U, b ? "//style:*[@style:name='" + b + "'][@style:family='" + c + "']" : "//style:default-style[@style:family='" + c + "']", odf.Namespaces.lookupNamespaceURI)[0]
    }

    function a(a, b) {
        var c = "",
            e, d, g;
        for (e = 0; e < b.length; e += 1)
            if (d = b[e], g = a.getAttributeNS(d[0], d[1])) {
                g = g.trim();
                if (G.hasOwnProperty(d[1])) {
                    var f = g,
                        h = f.indexOf(" "),
                        p = void 0;
                    g = void 0; - 1 !== h ? (p = f.substring(0, h), g = f.substring(h)) : (p = f, g = "");
                    (p = T.parseLength(p)) && "pt" === p.unit && 0.75 > p.value && (f = "0.75pt" + g);
                    g = f
                } else if (A.hasOwnProperty(d[1])) {
                    var f =
                        a,
                        h = d[0],
                        p = d[1],
                        l = T.parseLength(g),
                        m = void 0,
                        q = void 0,
                        n = void 0,
                        K = void 0,
                        n = void 0;
                    if (l && "%" === l.unit) {
                        m = l.value / 100;
                        q = k(f.parentNode);
                        for (K = "0"; q;) {
                            if (n = x.getDirectChild(q, r, "paragraph-properties"))
                                if (n = T.parseLength(n.getAttributeNS(h, p))) {
                                    if ("%" !== n.unit) {
                                        K = n.value * m + n.unit;
                                        break
                                    }
                                    m *= n.value / 100
                                } q = k(q)
                        }
                        g = K
                    }
                }
                d[2] && (c += d[2] + ":" + g + ";")
            } return c
    }

    function d(a, b, c, e) {
        return b + b + c + c + e + e
    }

    function b(a, c) {
        var e = [a],
            d = c.derivedStyles;
        Object.keys(d).forEach(function(a) {
            a = b(a, d[a]);
            e = e.concat(a)
        });
        return e
    }

    function h(a,
        c, e, d) {
        function f(b, c) {
            var e = [],
                d;
            b.forEach(function(a) {
                h.forEach(function(b) {
                    e.push('draw|page[webodfhelper|page-style-name="' + b + '"] draw|frame[presentation|class="' + a + '"]')
                })
            });
            0 < e.length && (d = e.join(",") + "{visibility:" + c + ";}", a.insertRule(d, a.cssRules.length))
        }
        var h = b(c, d),
            p = [],
            l = [];
        ["page-number", "date-time", "header", "footer"].forEach(function(a) {
            var b;
            b = e.getAttributeNS(g, "display-" + a);
            "true" === b ? p.push(a) : "false" === b && l.push(a)
        });
        f(p, "visible");
        f(l, "hidden")
    }

    function n(b, c, G, A) {
        var v, y;
        if ("page" ===
            c) {
            var F = A.element,
                U = "",
                R, P;
            P = R = "";
            G = x.getDirectChild(F, r, "page-layout-properties");
            var S;
            if (G)
                if (S = F.getAttributeNS(r, "name"), U += a(G, N), (R = x.getDirectChild(G, r, "background-image")) && (P = R.getAttributeNS(p, "href")) && (U = U + ("background-image: url('odfkit:" + P + "');") + a(R, w)), "presentation" === J)
                    for (F = (F = x.getDirectChild(F.parentNode.parentNode, l, "master-styles")) && F.firstElementChild; F;) F.namespaceURI === r && "master-page" === F.localName && F.getAttributeNS(r, "page-layout-name") === S && (P = F.getAttributeNS(r, "name"),
                        R = 'draw|page[draw|master-page-name="' + P + '"] {' + U + "}", P = 'office|body, draw|page[draw|master-page-name="' + P + '"] {' + a(G, K) + " }", b.insertRule(R, b.cssRules.length), b.insertRule(P, b.cssRules.length)), F = F.nextElementSibling;
                else "text" === J && (R = "office|text {" + U + "}", P = "office|body {width: " + G.getAttributeNS(m, "page-width") + ";}", b.insertRule(R, b.cssRules.length), b.insertRule(P, b.cssRules.length))
        } else {
            U = f(c, G, A).join(",");
            S = "";
            if (F = x.getDirectChild(A.element, r, "text-properties")) {
                var M = F,
                    ea = y = "";
                R = "";
                P = 1;
                F =
                    "" + a(M, s);
                v = M.getAttributeNS(r, "text-underline-style");
                "solid" === v && (y += " underline");
                v = M.getAttributeNS(r, "text-line-through-style");
                "solid" === v && (y += " line-through");
                y.length && (F = F + ("text-decoration:" + y + ";\n") + ("text-decoration-line:" + y + ";\n"), F += "-moz-text-decoration-line:" + y + ";\n");
                v = M.getAttributeNS(r, "text-line-through-type");
                switch (v) {
                    case "double":
                        ea += " double";
                        break;
                    case "single":
                        ea += " single"
                }
                ea && (F += "text-decoration-style:" + ea + ";\n", F += "-moz-text-decoration-style:" + ea + ";\n");
                if (y = M.getAttributeNS(r,
                        "font-name") || M.getAttributeNS(m, "font-family")) v = Y[y], F += "font-family: " + (v || y) + ";";
                if (v = M.getAttributeNS(r, "text-position")) y = t.parseAttributeList(v), v = y[0], y = y[1], F += "vertical-align: " + v + "\n; ", y && (P = parseFloat(y) / 100);
                if (M.hasAttributeNS(m, "font-size") || 1 !== P) {
                    for (M = M.parentNode; M;) {
                        if (v = (v = x.getDirectChild(M, r, "text-properties")) ? T.parseFoFontSize(v.getAttributeNS(m, "font-size")) : null) {
                            if ("%" !== v.unit) {
                                R = "font-size: " + v.value * P + v.unit + ";";
                                break
                            }
                            P *= v.value / 100
                        }
                        M = k(M)
                    }
                    R || (R = "font-size: " + parseFloat(aa) *
                        P + E.getUnits(aa) + ";")
                }
                F += R;
                S += F
            }
            if (F = x.getDirectChild(A.element, r, "paragraph-properties")) R = F, F = "" + a(R, u), (P = x.getDirectChild(R, r, "background-image")) && (M = P.getAttributeNS(p, "href")) && (F = F + ("background-image: url('odfkit:" + M + "');") + a(P, w)), (R = R.getAttributeNS(m, "line-height")) && "normal" !== R && (R = T.parseFoLineHeight(R), F = "%" !== R.unit ? F + ("line-height: " + R.value + R.unit + ";") : F + ("line-height: " + R.value / 100 + ";")), S += F;
            if (F = x.getDirectChild(A.element, r, "graphic-properties")) M = F, F = "" + a(M, z), R = M.getAttributeNS(q,
                "opacity"), P = M.getAttributeNS(q, "fill"), M = M.getAttributeNS(q, "fill-color"), "solid" === P || "hatch" === P ? M && "none" !== M ? (R = isNaN(parseFloat(R)) ? 1 : parseFloat(R) / 100, P = M.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, d), (M = (P = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(P)) ? {
                r: parseInt(P[1], 16),
                g: parseInt(P[2], 16),
                b: parseInt(P[3], 16)
            } : null) && (F += "background-color: rgba(" + M.r + "," + M.g + "," + M.b + "," + R + ");")) : F += "background: none;" : "none" === P && (F += "background: none;"), S += F;
            if (F = x.getDirectChild(A.element, r, "drawing-page-properties")) R =
                F, P = "" + a(R, z), "true" === R.getAttributeNS(g, "background-visible") && (P += "background: none;"), S += P, h(b, G, F, A);
            if (F = x.getDirectChild(A.element, r, "table-cell-properties")) G = S, S = "" + a(F, H), S = G + S;
            if (F = x.getDirectChild(A.element, r, "table-row-properties")) G = S, S = "" + a(F, D), S = G + S;
            if (F = x.getDirectChild(A.element, r, "table-column-properties")) G = S, S = "" + a(F, C), S = G + S;
            if (F = x.getDirectChild(A.element, r, "table-properties")) G = S, S = "" + a(F, I), F = F.getAttributeNS(e, "border-model"), "collapsing" === F ? S += "border-collapse:collapse;" :
                "separating" === F && (S += "border-collapse:separate;"), S = G + S;
            0 !== S.length && b.insertRule(U + "{" + S + "}", b.cssRules.length)
        }
        for (var ha in A.derivedStyles) A.derivedStyles.hasOwnProperty(ha) && n(b, c, ha, A.derivedStyles[ha])
    }
    var q = odf.Namespaces.drawns,
        m = odf.Namespaces.fons,
        l = odf.Namespaces.officens,
        r = odf.Namespaces.stylens,
        c = odf.Namespaces.svgns,
        e = odf.Namespaces.tablens,
        p = odf.Namespaces.xlinkns,
        g = odf.Namespaces.presentationns,
        x = core.DomUtils,
        t = new odf.StyleParseUtils,
        y = {
            graphic: "draw",
            "drawing-page": "draw",
            paragraph: "text",
            presentation: "presentation",
            ruby: "text",
            section: "text",
            table: "table",
            "table-cell": "table",
            "table-column": "table",
            "table-row": "table",
            text: "text",
            list: "text",
            page: "office"
        },
        v = {
            graphic: "circle connected control custom-shape ellipse frame g line measure page page-thumbnail path polygon polyline rect regular-polygon".split(" "),
            paragraph: "alphabetical-index-entry-template h illustration-index-entry-template index-source-style object-index-entry-template p table-index-entry-template table-of-content-entry-template user-index-entry-template".split(" "),
            presentation: "caption circle connector control custom-shape ellipse frame g line measure page-thumbnail path polygon polyline rect regular-polygon".split(" "),
            "drawing-page": "caption circle connector control page custom-shape ellipse frame g line measure page-thumbnail path polygon polyline rect regular-polygon".split(" "),
            ruby: ["ruby", "ruby-text"],
            section: "alphabetical-index bibliography illustration-index index-title object-index section table-of-content table-index user-index".split(" "),
            table: ["background",
                "table"
            ],
            "table-cell": "body covered-table-cell even-columns even-rows first-column first-row last-column last-row odd-columns odd-rows table-cell".split(" "),
            "table-column": ["table-column"],
            "table-row": ["table-row"],
            text: "a index-entry-chapter index-entry-link-end index-entry-link-start index-entry-page-number index-entry-span index-entry-tab-stop index-entry-text index-title-template linenumbering-configuration list-level-style-number list-level-style-bullet outline-level-style span".split(" "),
            list: ["list-item"]
        },
        s = [
            [m, "color", "color"],
            [m, "background-color", "background-color"],
            [m, "font-weight", "font-weight"],
            [m, "font-style", "font-style"]
        ],
        w = [
            [r, "repeat", "background-repeat"]
        ],
        u = [
            [m, "background-color", "background-color"],
            [m, "text-align", "text-align"],
            [m, "text-indent", "text-indent"],
            [m, "padding", "padding"],
            [m, "padding-left", "padding-left"],
            [m, "padding-right", "padding-right"],
            [m, "padding-top", "padding-top"],
            [m, "padding-bottom", "padding-bottom"],
            [m, "border-left", "border-left"],
            [m, "border-right",
                "border-right"
            ],
            [m, "border-top", "border-top"],
            [m, "border-bottom", "border-bottom"],
            [m, "margin", "margin"],
            [m, "margin-left", "margin-left"],
            [m, "margin-right", "margin-right"],
            [m, "margin-top", "margin-top"],
            [m, "margin-bottom", "margin-bottom"],
            [m, "border", "border"]
        ],
        z = [
            [m, "background-color", "background-color"],
            [m, "min-height", "min-height"],
            [q, "stroke", "border"],
            [c, "stroke-color", "border-color"],
            [c, "stroke-width", "border-width"],
            [m, "border", "border"],
            [m, "border-left", "border-left"],
            [m, "border-right", "border-right"],
            [m, "border-top", "border-top"],
            [m, "border-bottom", "border-bottom"]
        ],
        H = [
            [m, "background-color", "background-color"],
            [m, "border-left", "border-left"],
            [m, "border-right", "border-right"],
            [m, "border-top", "border-top"],
            [m, "border-bottom", "border-bottom"],
            [m, "border", "border"]
        ],
        C = [
            [r, "column-width", "width"]
        ],
        D = [
            [r, "row-height", "height"],
            [m, "keep-together", null]
        ],
        I = [
            [r, "width", "width"],
            [m, "margin-left", "margin-left"],
            [m, "margin-right", "margin-right"],
            [m, "margin-top", "margin-top"],
            [m, "margin-bottom", "margin-bottom"]
        ],
        N = [
            [m, "background-color", "background-color"],
            [m, "padding", "padding"],
            [m, "padding-left", "padding-left"],
            [m, "padding-right", "padding-right"],
            [m, "padding-top", "padding-top"],
            [m, "padding-bottom", "padding-bottom"],
            [m, "border", "border"],
            [m, "border-left", "border-left"],
            [m, "border-right", "border-right"],
            [m, "border-top", "border-top"],
            [m, "border-bottom", "border-bottom"],
            [m, "margin", "margin"],
            [m, "margin-left", "margin-left"],
            [m, "margin-right", "margin-right"],
            [m, "margin-top", "margin-top"],
            [m, "margin-bottom", "margin-bottom"]
        ],
        K = [
            [m, "page-width", "width"],
            [m, "page-height", "height"]
        ],
        G = {
            border: !0,
            "border-left": !0,
            "border-right": !0,
            "border-top": !0,
            "border-bottom": !0,
            "stroke-width": !0
        },
        A = {
            margin: !0,
            "margin-left": !0,
            "margin-right": !0,
            "margin-top": !0,
            "margin-bottom": !0
        },
        Y = {},
        T = odf.OdfUtils,
        J, U, aa, P = xmldom.XPath,
        E = new core.CSSUnits;
    this.style2css = function(a, b, c, e, d) {
        function g(a, b) {
            f = "@namespace " + a + " url(" + b + ");";
            try {
                c.insertRule(f, c.cssRules.length)
            } catch (e) {}
        }
        var f, h, p;
        for (U = b; c.cssRules.length;) c.deleteRule(c.cssRules.length -
            1);
        odf.Namespaces.forEachPrefix(g);
        g("webodfhelper", "urn:webodf:names:helper");
        Y = e;
        J = a;
        aa = runtime.getWindow().getComputedStyle(document.body, null).getPropertyValue("font-size") || "12pt";
        for (p in y)
            if (y.hasOwnProperty(p))
                for (h in a = d[p], a) a.hasOwnProperty(h) && n(c, p, h, a[h])
    }
};
(function() {
    function f(k, a) {
        var d = this;
        this.getDistance = function(a) {
            var f = d.x - a.x;
            a = d.y - a.y;
            return Math.sqrt(f * f + a * a)
        };
        this.getCenter = function(a) {
            return new f((d.x + a.x) / 2, (d.y + a.y) / 2)
        };
        d.x = k;
        d.y = a
    }
    gui.ZoomHelper = function() {
        function k(a, b, c, d) {
            a = d ? "translate3d(" + a + "px, " + b + "px, 0) scale3d(" + c + ", " + c + ", 1)" : "translate(" + a + "px, " + b + "px) scale(" + c + ")";
            e.style.WebkitTransform = a;
            e.style.MozTransform = a;
            e.style.msTransform = a;
            e.style.OTransform = a;
            e.style.transform = a
        }

        function a(a) {
            a ? k(-p.x, -p.y, t, !0) : (k(0,
                0, t, !0), k(0, 0, t, !1))
        }

        function d(a) {
            if (s && C) {
                var b = s.style.overflow,
                    c = s.classList.contains("webodf-customScrollbars");
                a && c || !a && !c || (a ? (s.classList.add("webodf-customScrollbars"), s.style.overflow = "hidden", runtime.requestAnimationFrame(function() {
                    s.style.overflow = b
                })) : s.classList.remove("webodf-customScrollbars"))
            }
        }

        function b() {
            k(-p.x, -p.y, t, !0);
            s.scrollLeft = 0;
            s.scrollTop = 0;
            D = w.style.overflow;
            w.style.overflow = "visible";
            d(!1)
        }

        function h() {
            k(0, 0, t, !0);
            s.scrollLeft = p.x;
            s.scrollTop = p.y;
            w.style.overflow =
                D || "";
            d(!0)
        }

        function n(a) {
            return new f(a.pageX - e.offsetLeft, a.pageY - e.offsetTop)
        }

        function q(a) {
            g && (p.x -= a.x - g.x, p.y -= a.y - g.y, p = new f(Math.min(Math.max(p.x, e.offsetLeft), (e.offsetLeft + e.offsetWidth) * t - s.clientWidth), Math.min(Math.max(p.y, e.offsetTop), (e.offsetTop + e.offsetHeight) * t - s.clientHeight)));
            g = a
        }

        function m(a) {
            var c = a.touches.length,
                e = 0 < c ? n(a.touches[0]) : null;
            a = 1 < c ? n(a.touches[1]) : null;
            e && a ? (x = e.getDistance(a), y = t, g = e.getCenter(a), b(), H = z.PINCH) : e && (g = e, H = z.SCROLL)
        }

        function l(c) {
            var d = c.touches.length,
                g = 0 < d ? n(c.touches[0]) : null,
                d = 1 < d ? n(c.touches[1]) : null;
            if (g && d)
                if (c.preventDefault(), H === z.SCROLL) H = z.PINCH, b(), x = g.getDistance(d);
                else {
                    c = g.getCenter(d);
                    g = g.getDistance(d) / x;
                    q(c);
                    var d = t,
                        f = Math.min(v, e.offsetParent.clientWidth / e.offsetWidth);
                    t = y * g;
                    t = Math.min(Math.max(t, f), v);
                    g = t / d;
                    p.x += (g - 1) * (c.x + p.x);
                    p.y += (g - 1) * (c.y + p.y);
                    a(!0)
                }
            else g && (H === z.PINCH ? (H = z.SCROLL, h()) : q(g))
        }

        function r() {
            H === z.PINCH && (u.emit(gui.ZoomHelper.signalZoomChanged, t), h(), a(!1));
            H = z.NONE
        }

        function c() {
            s && (s.removeEventListener("touchstart",
                m, !1), s.removeEventListener("touchmove", l, !1), s.removeEventListener("touchend", r, !1))
        }
        var e, p, g, x, t, y, v = 4,
            s, w, u = new core.EventNotifier([gui.ZoomHelper.signalZoomChanged]),
            z = {
                NONE: 0,
                SCROLL: 1,
                PINCH: 2
            },
            H = z.NONE,
            C = runtime.getWindow().hasOwnProperty("ontouchstart"),
            D = "";
        this.subscribe = function(a, b) {
            u.subscribe(a, b)
        };
        this.unsubscribe = function(a, b) {
            u.unsubscribe(a, b)
        };
        this.getZoomLevel = function() {
            return t
        };
        this.setZoomLevel = function(b) {
            e && (t = b, a(!1), u.emit(gui.ZoomHelper.signalZoomChanged, t))
        };
        this.destroy =
            function(a) {
                c();
                d(!1);
                a()
            };
        this.setZoomableElement = function(b) {
            c();
            e = b;
            s = e.offsetParent;
            w = e.parentNode;
            a(!1);
            s && (s.addEventListener("touchstart", m, !1), s.addEventListener("touchmove", l, !1), s.addEventListener("touchend", r, !1));
            d(!0)
        };
        y = t = 1;
        p = new f(0, 0)
    };
    gui.ZoomHelper.signalZoomChanged = "zoomChanged"
})();
ops.Canvas = function() {};
ops.Canvas.prototype.getZoomLevel = function() {};
ops.Canvas.prototype.getElement = function() {};
ops.Canvas.prototype.getSizer = function() {};
ops.Canvas.prototype.getZoomHelper = function() {};
(function() {
    function f() {
        function a(e) {
            c = !0;
            runtime.setTimeout(function() {
                try {
                    e()
                } catch (d) {
                    runtime.log(String(d) + "\n" + d.stack)
                }
                c = !1;
                0 < b.length && a(b.pop())
            }, 10)
        }
        var b = [],
            c = !1;
        this.clearQueue = function() {
            b.length = 0
        };
        this.addToQueue = function(e) {
            if (0 === b.length && !c) return a(e);
            b.push(e)
        }
    }

    function k(a) {
        function b() {
            for (; 0 < c.cssRules.length;) c.deleteRule(0);
            c.insertRule("#shadowContent draw|page {display:none;}", 0);
            c.insertRule("office|presentation draw|page {display:none;}", 1);
            c.insertRule("#shadowContent draw|page:nth-of-type(" +
                e + ") {display:block;}", 2);
            c.insertRule("office|presentation draw|page:nth-of-type(" + e + ") {display:block;}", 3)
        }
        var c = a.sheet,
            e = 1;
        this.showFirstPage = function() {
            e = 1;
            b()
        };
        this.showNextPage = function() {
            e += 1;
            b()
        };
        this.showPreviousPage = function() {
            1 < e && (e -= 1, b())
        };
        this.showPage = function(a) {
            0 < a && (e = a, b())
        };
        this.css = a;
        this.destroy = function(b) {
            a.parentNode.removeChild(a);
            b()
        }
    }

    function a(a) {
        for (; a.firstChild;) a.removeChild(a.firstChild)
    }

    function d(a) {
        a = a.sheet;
        for (var b = a.cssRules; b.length;) a.deleteRule(b.length -
            1)
    }

    function b(a, b, c) {
        var e = new odf.Style2CSS,
            d = new odf.ListStyleToCss;
        c = c.sheet;
        var g = (new odf.StyleTree(a.rootElement.styles, a.rootElement.automaticStyles)).getStyleTree();
        e.style2css(a.getDocumentType(), a.rootElement, c, b.getFontMap(), g);
        d.applyListStyles(c, g, a.rootElement.body)
    }

    function h(a, b) {
        (new odf.FontLoader).loadFonts(a, b.sheet)
    }

    function n(a, b, c) {
        var e = null;
        a = a.rootElement.body.getElementsByTagNameNS(I, c + "-decl");
        c = b.getAttributeNS(I, "use-" + c + "-name");
        var d;
        if (c && 0 < a.length)
            for (b = 0; b < a.length; b +=
                1)
                if (d = a[b], d.getAttributeNS(I, "name") === c) {
                    e = d.textContent;
                    break
                } return e
    }

    function q(b, c, e, d) {
        var g = b.ownerDocument;
        c = K.getElementsByTagNameNS(b, c, e);
        for (b = 0; b < c.length; b += 1) a(c[b]), d && (e = c[b], e.appendChild(g.createTextNode(d)))
    }

    function m(a, b, c) {
        b.setAttributeNS("urn:webodf:names:helper", "styleid", a);
        var e, d = b.getAttributeNS(C, "anchor-type"),
            g = b.getAttributeNS(z, "x"),
            f = b.getAttributeNS(z, "y"),
            h = b.getAttributeNS(z, "width"),
            p = b.getAttributeNS(z, "height"),
            l = b.getAttributeNS(s, "min-height"),
            m = b.getAttributeNS(s,
                "min-width");
        if ("as-char" === d) e = "display: inline-block;";
        else if (d || g || f) e = "position: absolute;";
        else if (h || p || l || m) e = "display: block;";
        g && (e += "left: " + g + ";");
        f && (e += "top: " + f + ";");
        h && (e += "width: " + h + ";");
        p && (e += "height: " + p + ";");
        l && (e += "min-height: " + l + ";");
        m && (e += "min-width: " + m + ";");
        e && (e = "draw|" + b.localName + '[webodfhelper|styleid="' + a + '"] {' + e + "}", c.insertRule(e, c.cssRules.length))
    }

    function l(a) {
        for (a = a.firstChild; a;) {
            if (a.namespaceURI === w && "binary-data" === a.localName) return "data:image/png;base64," +
                a.textContent.replace(/[\r\n\s]/g, "");
            a = a.nextSibling
        }
        return ""
    }

    function r(a, b, c, e) {
        function d(b) {
            b && (b = 'draw|image[webodfhelper|styleid="' + a + '"] {' + ("background-image: url(" + b + ");") + "}", e.insertRule(b, e.cssRules.length))
        }

        function g(a) {
            d(a.url)
        }
        c.setAttributeNS("urn:webodf:names:helper", "styleid", a);
        var f = c.getAttributeNS(D, "href"),
            h;
        if (f) try {
            h = b.getPart(f), h.onchange = g, h.load()
        } catch (p) {
            runtime.log("slight problem: " + String(p))
        } else f = l(c), d(f)
    }

    function c(a) {
        var b = a.ownerDocument;
        K.getElementsByTagNameNS(a,
            C, "line-break").forEach(function(a) {
            a.hasChildNodes() || a.appendChild(b.createElement("br"))
        })
    }

    function e(a) {
        var b = a.ownerDocument;
        K.getElementsByTagNameNS(a, C, "s").forEach(function(a) {
            for (var c, e; a.firstChild;) a.removeChild(a.firstChild);
            a.appendChild(b.createTextNode(" "));
            e = parseInt(a.getAttributeNS(C, "c"), 10);
            if (1 < e)
                for (a.removeAttributeNS(C, "c"), c = 1; c < e; c += 1) a.parentNode.insertBefore(a.cloneNode(!0), a)
        })
    }

    function p(a) {
        K.getElementsByTagNameNS(a, C, "tab").forEach(function(a) {
            a.textContent = "\t"
        })
    }

    function g(a, b) {
        function c(a, e) {
            var f = h.documentElement.namespaceURI;
            "video/" === e.substr(0, 6) ? (d = h.createElementNS(f, "video"), d.setAttribute("controls", "controls"), g = h.createElementNS(f, "source"), a && g.setAttribute("src", a), g.setAttribute("type", e), d.appendChild(g), b.parentNode.appendChild(d)) : b.innerHtml = "Unrecognised Plugin"
        }

        function e(a) {
            c(a.url, a.mimetype)
        }
        var d, g, f, h = b.ownerDocument,
            p;
        if (f = b.getAttributeNS(D, "href")) try {
            p = a.getPart(f), p.onchange = e, p.load()
        } catch (m) {
            runtime.log("slight problem: " +
                String(m))
        } else runtime.log("using MP4 data fallback"), f = l(b), c(f, "video/mp4")
    }

    function x(a) {
        var b = a.getElementsByTagName("head")[0],
            c, e;
        c = a.styleSheets.length;
        for (e = b.firstElementChild; e && ("style" !== e.localName || !e.hasAttribute("webodfcss"));) e = e.nextElementSibling;
        if (e) return c = parseInt(e.getAttribute("webodfcss"), 10), e.setAttribute("webodfcss", c + 1), e;
        "string" === String(typeof webodf_css) ? c = webodf_css : (e = "webodf.css", runtime.currentDirectory && (e = runtime.currentDirectory(), 0 < e.length && "/" !== e.substr(-1) &&
            (e += "/"), e += "../webodf.css"), c = runtime.readFileSync(e, "utf-8"));
        e = a.createElementNS(b.namespaceURI, "style");
        e.setAttribute("media", "screen, print, handheld, projection");
        e.setAttribute("type", "text/css");
        e.setAttribute("webodfcss", "1");
        e.appendChild(a.createTextNode(c));
        b.appendChild(e);
        return e
    }

    function t(a) {
        var b = parseInt(a.getAttribute("webodfcss"), 10);
        1 === b ? a.parentNode.removeChild(a) : a.setAttribute("count", b - 1)
    }

    function y(a) {
        var b = a.getElementsByTagName("head")[0],
            c = a.createElementNS(b.namespaceURI,
                "style"),
            e = "";
        c.setAttribute("type", "text/css");
        c.setAttribute("media", "screen, print, handheld, projection");
        odf.Namespaces.forEachPrefix(function(a, b) {
            e += "@namespace " + a + " url(" + b + ");\n"
        });
        e += "@namespace webodfhelper url(urn:webodf:names:helper);\n";
        c.appendChild(a.createTextNode(e));
        b.appendChild(c);
        return c
    }
    var v = odf.Namespaces.drawns,
        s = odf.Namespaces.fons,
        w = odf.Namespaces.officens,
        u = odf.Namespaces.stylens,
        z = odf.Namespaces.svgns,
        H = odf.Namespaces.tablens,
        C = odf.Namespaces.textns,
        D = odf.Namespaces.xlinkns,
        I = odf.Namespaces.presentationns,
        N = xmldom.XPath,
        K = core.DomUtils;
    odf.OdfCanvas = function(l, s) {
        function Y(a, b, c) {
            function e(a, b, c, d) {
                ma.addToQueue(function() {
                    r(a, b, c, d)
                })
            }
            var d, g;
            d = b.getElementsByTagNameNS(v, "image");
            for (b = 0; b < d.length; b += 1) g = d.item(b), e("image" + String(b), a, g, c)
        }

        function z(a, b) {
            function c(a, b) {
                ma.addToQueue(function() {
                    g(a, b)
                })
            }
            var e, d, f;
            d = b.getElementsByTagNameNS(v, "plugin");
            for (e = 0; e < d.length; e += 1) f = d.item(e), c(a, f)
        }

        function D() {
            var a;
            a = Z.firstChild;
            var b = ga.getZoomLevel();
            a && (Z.style.WebkitTransformOrigin =
                "0% 0%", Z.style.MozTransformOrigin = "0% 0%", Z.style.msTransformOrigin = "0% 0%", Z.style.OTransformOrigin = "0% 0%", Z.style.transformOrigin = "0% 0%", da && ((a = da.getMinimumHeightForAnnotationPane()) ? Z.style.minHeight = a : Z.style.removeProperty("min-height")), l.style.width = Math.round(b * Z.offsetWidth) + "px", l.style.height = Math.round(b * Z.offsetHeight) + "px", l.style.display = "inline-block")
        }

        function U(b, d) {
            var g = ha.sheet;
            a(l);
            Z = $.createElementNS(l.namespaceURI, "div");
            Z.style.display = "inline-block";
            Z.style.background =
                "white";
            Z.style.setProperty("float", "left", "important");
            Z.appendChild(d);
            l.appendChild(Z);
            F = $.createElementNS(l.namespaceURI, "div");
            F.id = "annotationsPane";
            ca = $.createElementNS(l.namespaceURI, "div");
            ca.id = "shadowContent";
            ca.style.position = "absolute";
            ca.style.top = 0;
            ca.style.left = 0;
            b.getContentElement().appendChild(ca);
            var f = d.body,
                h, k = [],
                r;
            for (h = f.firstElementChild; h && h !== f;)
                if (h.namespaceURI === v && (k[k.length] = h), h.firstElementChild) h = h.firstElementChild;
                else {
                    for (; h && h !== f && !h.nextElementSibling;) h =
                        h.parentNode;
                    h && h.nextElementSibling && (h = h.nextElementSibling)
                } for (r = 0; r < k.length; r += 1) h = k[r], m("frame" + String(r), h, g);
            k = N.getODFElementsWithXPath(f, ".//*[*[@text:anchor-type='paragraph']]", odf.Namespaces.lookupNamespaceURI);
            for (h = 0; h < k.length; h += 1) f = k[h], f.setAttributeNS && f.setAttributeNS("urn:webodf:names:helper", "containsparagraphanchor", !0);
            f = V;
            h = ca;
            var s, t, x, A, y = 0,
                D;
            r = b.rootElement.ownerDocument;
            if ((k = d.body.firstElementChild) && k.namespaceURI === w && ("presentation" === k.localName || "drawing" === k.localName))
                for (k =
                    k.firstElementChild; k;) {
                    if (s = (s = k.getAttributeNS(v, "master-page-name")) ? f.getMasterPageElement(s) : null) {
                        t = k.getAttributeNS("urn:webodf:names:helper", "styleid");
                        x = r.createElementNS(v, "draw:page");
                        D = s.firstElementChild;
                        for (y = 0; D;) "true" !== D.getAttributeNS(I, "placeholder") && (A = D.cloneNode(!0), x.appendChild(A)), D = D.nextElementSibling, y += 1;
                        D = A = y = void 0;
                        for (var J = K.getElementsByTagNameNS(x, v, "frame"), y = 0; y < J.length; y += 1) A = J[y], (D = A.getAttributeNS(I, "class")) && !/^(date-time|footer|header|page-number)$/.test(D) &&
                            A.parentNode.removeChild(A);
                        A = K.getElementsByTagNameNS(x, v, "*");
                        for (y = 0; y < A.length; y += 1) m(t + "_" + y, A[y], g);
                        h.appendChild(x);
                        y = String(h.getElementsByTagNameNS(v, "page").length);
                        q(x, C, "page-number", y);
                        q(x, I, "header", n(b, k, "header"));
                        q(x, I, "footer", n(b, k, "footer"));
                        m(t, x, g);
                        x.setAttributeNS("urn:webodf:names:helper", "page-style-name", k.getAttributeNS(v, "style-name"));
                        x.setAttributeNS(v, "draw:master-page-name", s.getAttributeNS(u, "name"))
                    }
                    k = k.nextElementSibling
                }
            f = l.namespaceURI;
            k = K.getElementsByTagNameNS(d.body,
                H, "table-cell");
            for (h = 0; h < k.length; h += 1) r = k[h], r.hasAttributeNS(H, "number-columns-spanned") && r.setAttributeNS(f, "colspan", r.getAttributeNS(H, "number-columns-spanned")), r.hasAttributeNS(H, "number-rows-spanned") && r.setAttributeNS(f, "rowspan", r.getAttributeNS(H, "number-rows-spanned"));
            c(d.body);
            e(d.body);
            p(d.body);
            Y(b, d.body, g);
            z(b, d.body);
            Z.insertBefore(ca, Z.firstChild);
            ga.setZoomableElement(Z)
        }

        function aa(a) {
            X ? (F.parentNode || Z.appendChild(F), da && da.forgetAnnotations(), da = new gui.AnnotationViewManager(Q,
                a.body, F, R), K.getElementsByTagNameNS(a.body, w, "annotation").forEach(da.addAnnotation), da.rerenderAnnotations(), D()) : F.parentNode && (Z.removeChild(F), da.forgetAnnotations(), D())
        }

        function P(c) {
            function e() {
                d(M);
                d(ea);
                d(ha);
                a(l);
                l.style.display = "inline-block";
                var g = B.rootElement;
                l.ownerDocument.importNode(g, !0);
                V.setOdfContainer(B);
                h(B, M);
                b(B, V, ea);
                U(B, g);
                aa(g);
                c || ma.addToQueue(function() {
                    var a = [B];
                    if (fa.hasOwnProperty("statereadychange")) {
                        var b = fa.statereadychange,
                            c;
                        for (c = 0; c < b.length; c += 1) b[c].apply(null,
                            a)
                    }
                })
            }
            B.state === odf.OdfContainer.DONE ? e() : (runtime.log("WARNING: refreshOdf called but ODF was not DONE."), pa = runtime.setTimeout(function W() {
                B.state === odf.OdfContainer.DONE ? e() : (runtime.log("will be back later..."), pa = runtime.setTimeout(W, 500))
            }, 100))
        }

        function E(a) {
            ma.clearQueue();
            l.innerHTML = "";
            l.appendChild(l.ownerDocument.createTextNode(runtime.tr("Loading") + a + "..."));
            l.removeAttribute("style");
            B = new odf.OdfContainer(a, function(a) {
                B = a;
                P(!1)
            })
        }
        runtime.assert(null !== l && void 0 !== l, "odf.OdfCanvas constructor needs DOM element");
        runtime.assert(null !== l.ownerDocument && void 0 !== l.ownerDocument, "odf.OdfCanvas constructor needs DOM");
        var Q = this,
            $ = l.ownerDocument,
            B, V = new odf.Formatting,
            ba, Z = null,
            F = null,
            X = !1,
            R = !1,
            da = null,
            S, M, ea, ha, ca, fa = {},
            pa, ka, ia = !1,
            la = !1,
            ma = new f,
            ga = new gui.ZoomHelper,
            ja = s || new gui.SingleScrollViewport(l.parentNode);
        this.refreshCSS = function() {
            ia = !0;
            ka.trigger()
        };
        this.refreshSize = function() {
            ka.trigger()
        };
        this.odfContainer = function() {
            return B
        };
        this.setOdfContainer = function(a, b) {
            B = a;
            P(!0 === b)
        };
        this.load = this.load =
            E;
        this.save = function(a) {
            B.save(a)
        };
        this.addListener = function(a, b) {
            switch (a) {
                case "click":
                    var c = l,
                        e = a;
                    c.addEventListener ? c.addEventListener(e, b, !1) : c.attachEvent ? c.attachEvent("on" + e, b) : c["on" + e] = b;
                    break;
                default:
                    c = fa.hasOwnProperty(a) ? fa[a] : fa[a] = [], b && -1 === c.indexOf(b) && c.push(b)
            }
        };
        this.getFormatting = function() {
            return V
        };
        this.getAnnotationViewManager = function() {
            return da
        };
        this.refreshAnnotations = function() {
            aa(B.rootElement)
        };
        this.rerenderAnnotations = function() {
            da && (la = !0, ka.trigger())
        };
        this.getSizer =
            function() {
                return Z
            };
        this.enableAnnotations = function(a, b) {
            a !== X && (X = a, R = b, B && aa(B.rootElement))
        };
        this.addAnnotation = function(a) {
            da && (da.addAnnotation(a), D())
        };
        this.forgetAnnotations = function() {
            da && (da.forgetAnnotations(), D())
        };
        this.getZoomHelper = function() {
            return ga
        };
        this.setZoomLevel = function(a) {
            ga.setZoomLevel(a)
        };
        this.getZoomLevel = function() {
            return ga.getZoomLevel()
        };
        this.fitToContainingElement = function(a, b) {
            var c = ga.getZoomLevel(),
                e = l.offsetHeight / c,
                c = a / (l.offsetWidth / c);
            b / e < c && (c = b / e);
            ga.setZoomLevel(c)
        };
        this.fitToWidth = function(a) {
            var b = l.offsetWidth / ga.getZoomLevel();
            ga.setZoomLevel(a / b)
        };
        this.fitSmart = function(a, b) {
            var c, e;
            e = ga.getZoomLevel();
            c = l.offsetWidth / e;
            e = l.offsetHeight / e;
            c = a / c;
            void 0 !== b && b / e < c && (c = b / e);
            ga.setZoomLevel(Math.min(1, c))
        };
        this.fitToHeight = function(a) {
            var b = l.offsetHeight / ga.getZoomLevel();
            ga.setZoomLevel(a / b)
        };
        this.showFirstPage = function() {
            ba.showFirstPage()
        };
        this.showNextPage = function() {
            ba.showNextPage()
        };
        this.showPreviousPage = function() {
            ba.showPreviousPage()
        };
        this.showPage =
            function(a) {
                ba.showPage(a);
                D()
            };
        this.getElement = function() {
            return l
        };
        this.getViewport = function() {
            return ja
        };
        this.addCssForFrameWithImage = function(a) {
            var b = a.getAttributeNS(v, "name"),
                c = a.firstElementChild;
            m(b, a, ha.sheet);
            c && r(b + "img", B, c, ha.sheet)
        };
        this.destroy = function(a) {
            var b = $.getElementsByTagName("head")[0],
                c = [ba.destroy, ka.destroy];
            runtime.clearTimeout(pa);
            F && F.parentNode && F.parentNode.removeChild(F);
            ga.destroy(function() {
                Z && (l.removeChild(Z), Z = null)
            });
            t(S);
            b.removeChild(M);
            b.removeChild(ea);
            b.removeChild(ha);
            core.Async.destroyAll(c, a)
        };
        S = x($);
        ba = new k(y($));
        M = y($);
        ea = y($);
        ha = y($);
        ka = core.Task.createRedrawTask(function() {
            ia && (b(B, V, ea), ia = !1);
            la && (da && da.rerenderAnnotations(), la = !1);
            D()
        });
        ga.subscribe(gui.ZoomHelper.signalZoomChanged, D)
    }
})();
odf.StepUtils = function() {
    this.getContentBounds = function(f) {
        var k = f.container(),
            a, d;
        runtime.assert(f.isStep(), "Step iterator must be on a step");
        k.nodeType === Node.TEXT_NODE && 0 < f.offset() ? a = f.offset() : (k = f.leftNode()) && k.nodeType === Node.TEXT_NODE && (a = k.length);
        k && (k.nodeType === Node.TEXT_NODE ? (runtime.assert(0 < a, "Empty text node found"), d = {
            container: k,
            startOffset: a - 1,
            endOffset: a
        }) : d = {
            container: k,
            startOffset: 0,
            endOffset: k.childNodes.length
        });
        return d
    }
};
ops.MemberProperties = function() {};
ops.Member = function(f, k) {
    var a = new ops.MemberProperties;
    this.getMemberId = function() {
        return f
    };
    this.getProperties = function() {
        return a
    };
    this.setProperties = function(d) {
        Object.keys(d).forEach(function(b) {
            a[b] = d[b]
        })
    };
    this.removeProperties = function(d) {
        Object.keys(d).forEach(function(b) {
            "fullName" !== b && "color" !== b && "imageUrl" !== b && a.hasOwnProperty(b) && delete a[b]
        })
    };
    runtime.assert(Boolean(f), "No memberId was supplied!");
    k.fullName || (k.fullName = runtime.tr("Unknown Author"));
    k.color || (k.color = "black");
    k.imageUrl ||
        (k.imageUrl = "avatar-joe.png");
    a = k
};
ops.Document = function() {};
ops.Document.prototype.getMemberIds = function() {};
ops.Document.prototype.removeCursor = function(f) {};
ops.Document.prototype.getDocumentElement = function() {};
ops.Document.prototype.getRootNode = function() {};
ops.Document.prototype.getDOMDocument = function() {};
ops.Document.prototype.cloneDocumentElement = function() {};
ops.Document.prototype.setDocumentElement = function(f) {};
ops.Document.prototype.subscribe = function(f, k) {};
ops.Document.prototype.unsubscribe = function(f, k) {};
ops.Document.prototype.getCanvas = function() {};
ops.Document.prototype.createRootFilter = function(f) {};
ops.Document.prototype.createPositionIterator = function(f) {};
ops.Document.signalCursorAdded = "cursor/added";
ops.Document.signalCursorRemoved = "cursor/removed";
ops.Document.signalCursorMoved = "cursor/moved";
ops.Document.signalMemberAdded = "member/added";
ops.Document.signalMemberUpdated = "member/updated";
ops.Document.signalMemberRemoved = "member/removed";
ops.OdtCursor = function(f, k) {
    var a = this,
        d = {},
        b, h, n = new core.EventNotifier([ops.OdtCursor.signalCursorUpdated]);
    this.removeFromDocument = function() {
        h.remove()
    };
    this.subscribe = function(a, b) {
        n.subscribe(a, b)
    };
    this.unsubscribe = function(a, b) {
        n.unsubscribe(a, b)
    };
    this.getMemberId = function() {
        return f
    };
    this.getNode = function() {
        return h.getNode()
    };
    this.getAnchorNode = function() {
        return h.getAnchorNode()
    };
    this.getSelectedRange = function() {
        return h.getSelectedRange()
    };
    this.setSelectedRange = function(b, d) {
        h.setSelectedRange(b,
            d);
        n.emit(ops.OdtCursor.signalCursorUpdated, a)
    };
    this.hasForwardSelection = function() {
        return h.hasForwardSelection()
    };
    this.getDocument = function() {
        return k
    };
    this.getSelectionType = function() {
        return b
    };
    this.setSelectionType = function(a) {
        d.hasOwnProperty(a) ? b = a : runtime.log("Invalid selection type: " + a)
    };
    this.resetSelectionType = function() {
        a.setSelectionType(ops.OdtCursor.RangeSelection)
    };
    h = new core.Cursor(k.getDOMDocument(), f);
    d[ops.OdtCursor.RangeSelection] = !0;
    d[ops.OdtCursor.RegionSelection] = !0;
    a.resetSelectionType()
};
ops.OdtCursor.RangeSelection = "Range";
ops.OdtCursor.RegionSelection = "Region";
ops.OdtCursor.signalCursorUpdated = "cursorUpdated";
(function() {
    var f = 0;
    ops.StepsCache = function(k, a, d) {
        function b(a, b) {
            var c = this;
            this.nodeId = a;
            this.steps = -1;
            this.node = b;
            this.previousBookmark = this.nextBookmark = null;
            this.setIteratorPosition = function(a) {
                a.setPositionBeforeElement(b);
                d(c.steps, a)
            }
        }

        function h(a, b, c) {
            var e = this;
            this.nodeId = a;
            this.steps = b;
            this.node = c;
            this.previousBookmark = this.nextBookmark = null;
            this.setIteratorPosition = function(a) {
                a.setUnfilteredPosition(c, 0);
                d(e.steps, a)
            }
        }

        function n(a, b) {
            var c = "[" + a.nodeId;
            b && (c += " => " + b.nodeId);
            return c +
                "]"
        }

        function q() {
            for (var a = y, b, c, e, d = new core.LoopWatchDog(0, 1E5), f = {}; a;) {
                d.check();
                (b = a.previousBookmark) ? runtime.assert(b.nextBookmark === a, "Broken bookmark link to previous @" + n(b, a)): (runtime.assert(a === y, "Broken bookmark link @" + n(a)), runtime.assert(void 0 === v || y === y || y.steps <= v, "Base point is damaged @" + n(a)));
                (c = a.nextBookmark) && runtime.assert(c.previousBookmark === a, "Broken bookmark link to next @" + n(a, c));
                if (void 0 === v || a === y || a.steps <= v) runtime.assert(t.containsNode(k, a.node), "Disconnected node is being reported as undamaged @" +
                    n(a)), b && (e = a.node.compareDocumentPosition(b.node), runtime.assert(0 === e || 0 !== (e & w), "Bookmark order with previous does not reflect DOM order @" + n(b, a))), c && t.containsNode(k, c.node) && (e = a.node.compareDocumentPosition(c.node), runtime.assert(0 === e || 0 !== (e & s), "Bookmark order with next does not reflect DOM order @" + n(a, c)));
                a = a.nextBookmark
            }
            Object.keys(g).forEach(function(a) {
                var b = g[a];
                (void 0 === v || a <= v) && runtime.assert(b.steps <= a, "Bookmark step of " + b.steps + " exceeds cached step lookup for " + a + " @" + n(b));
                runtime.assert(!1 === f.hasOwnProperty(b.nodeId), "Bookmark " + n(b) + " appears twice in cached step lookup at steps " + f[b.nodeId] + " and " + a);
                f[b.nodeId] = a
            })
        }

        function m(a) {
            var b = "";
            a.nodeType === Node.ELEMENT_NODE && (b = a.getAttributeNS(p, "nodeId") || "");
            return b
        }

        function l(a) {
            var b = f.toString();
            a.setAttributeNS(p, "nodeId", b);
            f += 1;
            return b
        }

        function r(b) {
            var c, e, d = new core.LoopWatchDog(0, 1E4);
            void 0 !== v && b > v && (b = v);
            for (c = Math.floor(b / a) * a; !e && 0 <= c;) e = g[c], c -= a;
            for (e = e || y; e.nextBookmark && e.nextBookmark.steps <=
                b;) d.check(), e = e.nextBookmark;
            runtime.assert(-1 === b || e.steps <= b, "Bookmark @" + n(e) + " at step " + e.steps + " exceeds requested step of " + b);
            return e
        }

        function c(a) {
            a.previousBookmark && (a.previousBookmark.nextBookmark = a.nextBookmark);
            a.nextBookmark && (a.nextBookmark.previousBookmark = a.previousBookmark)
        }

        function e(a) {
            for (var b, c = null; !c && a && a !== k;)(b = m(a)) && (c = x[b]) && c.node !== a && (runtime.log("Cloned node detected. Creating new bookmark"), c = null, a.removeAttributeNS(p, "nodeId")), a = a.parentNode;
            return c
        }
        var p =
            "urn:webodf:names:steps",
            g = {},
            x = {},
            t = core.DomUtils,
            y, v, s = Node.DOCUMENT_POSITION_FOLLOWING,
            w = Node.DOCUMENT_POSITION_PRECEDING,
            u;
        this.updateBookmark = function(e, d) {
            var f, h = Math.ceil(e / a) * a,
                p, n, q;
            if (void 0 !== v && v < e) {
                p = r(v);
                for (n = p.nextBookmark; n && n.steps <= e;) f = n.nextBookmark, q = Math.ceil(n.steps / a) * a, g[q] === n && delete g[q], t.containsNode(k, n.node) ? n.steps = e + 1 : (c(n), delete x[n.nodeId]), n = f;
                v = e
            } else p = r(e);
            n = m(d) || l(d);
            f = x[n];
            f ? f.node !== d && (runtime.log("Cloned node detected. Creating new bookmark"), n = l(d),
                f = x[n] = new b(n, d)) : f = x[n] = new b(n, d);
            n = f;
            n.steps !== e && (f = Math.ceil(n.steps / a) * a, f !== h && g[f] === n && delete g[f], n.steps = e);
            if (p !== n && p.nextBookmark !== n) {
                if (p.steps === n.steps)
                    for (; 0 !== (n.node.compareDocumentPosition(p.node) & s) && p !== y;) p = p.previousBookmark;
                p !== n && p.nextBookmark !== n && (c(n), f = p.nextBookmark, n.nextBookmark = p.nextBookmark, n.previousBookmark = p, p.nextBookmark = n, f && (f.previousBookmark = n))
            }
            p = g[h];
            if (!p || n.steps > p.steps) g[h] = n;
            u()
        };
        this.setToClosestStep = function(a, b) {
            var c;
            u();
            c = r(a);
            c.setIteratorPosition(b);
            return c.steps
        };
        this.setToClosestDomPoint = function(a, b, c) {
            var d, f;
            u();
            if (a === k && 0 === b) d = y;
            else if (a === k && b === k.childNodes.length)
                for (f in d = y, g) g.hasOwnProperty(f) && (a = g[f], a.steps > d.steps && (d = a));
            else if (d = e(a.childNodes.item(b) || a), !d)
                for (c.setUnfilteredPosition(a, b); !d && c.previousNode();) d = e(c.getCurrentNode());
            d = d || y;
            void 0 !== v && d.steps > v && (d = r(v));
            d.setIteratorPosition(c);
            return d.steps
        };
        this.damageCacheAfterStep = function(a) {
            0 > a && (a = -1);
            void 0 === v ? v = a : a < v && (v = a);
            u()
        };
        (function() {
            var a = m(k) ||
                l(k);
            y = new h(a, 0, k);
            u = ops.StepsCache.ENABLE_CACHE_VERIFICATION ? q : function() {}
        })()
    };
    ops.StepsCache.ENABLE_CACHE_VERIFICATION = !1;
    ops.StepsCache.Bookmark = function() {};
    ops.StepsCache.Bookmark.prototype.setIteratorPosition = function(f) {}
})();
(function() {
    ops.OdtStepsTranslator = function(f, k, a, d) {
        function b(a, b, c) {
            var e = b.getCurrentNode();
            b.isBeforeNode() && r.isParagraph(e) && (c || (a += 1), l.updateBookmark(a, e))
        }

        function h(c, e) {
            do {
                if (a.acceptPosition(e) === p) {
                    b(c, e, !0);
                    break
                }
                b(c - 1, e, !1)
            } while (e.nextPosition())
        }

        function n() {
            var a = f();
            a !== m && (m && runtime.log("Undo detected. Resetting steps cache"), m = a, l = new ops.StepsCache(m, d, h), e = k(m))
        }

        function q(b, c) {
            if (!c || a.acceptPosition(b) === p) return !0;
            for (; b.previousPosition();)
                if (a.acceptPosition(b) === p) {
                    if (c(g,
                            b.container(), b.unfilteredDomOffset())) return !0;
                    break
                } for (; b.nextPosition();)
                if (a.acceptPosition(b) === p) {
                    if (c(x, b.container(), b.unfilteredDomOffset())) return !0;
                    break
                } return !1
        }
        var m, l, r = odf.OdfUtils,
            c = core.DomUtils,
            e, p = core.PositionFilter.FilterResult.FILTER_ACCEPT,
            g = core.StepDirection.PREVIOUS,
            x = core.StepDirection.NEXT;
        this.convertStepsToDomPoint = function(c) {
            var d, g;
            if (isNaN(c)) throw new TypeError("Requested steps is not numeric (" + c + ")");
            if (0 > c) throw new RangeError("Requested steps is negative (" +
                c + ")");
            n();
            for (d = l.setToClosestStep(c, e); d < c && e.nextPosition();)(g = a.acceptPosition(e) === p) && (d += 1), b(d, e, g);
            if (d !== c) throw new RangeError("Requested steps (" + c + ") exceeds available steps (" + d + ")");
            return {
                node: e.container(),
                offset: e.unfilteredDomOffset()
            }
        };
        this.convertDomPointToSteps = function(d, g, f) {
            var h;
            n();
            c.containsNode(m, d) || (g = 0 > c.comparePoints(m, 0, d, g), d = m, g = g ? 0 : m.childNodes.length);
            e.setUnfilteredPosition(d, g);
            q(e, f) || e.setUnfilteredPosition(d, g);
            f = e.container();
            g = e.unfilteredDomOffset();
            d = l.setToClosestDomPoint(f, g, e);
            if (0 > c.comparePoints(e.container(), e.unfilteredDomOffset(), f, g)) return 0 < d ? d - 1 : d;
            for (;
                (e.container() !== f || e.unfilteredDomOffset() !== g) && e.nextPosition();)(h = a.acceptPosition(e) === p) && (d += 1), b(d, e, h);
            return d + 0
        };
        this.prime = function() {
            var c, d;
            n();
            for (c = l.setToClosestStep(0, e); e.nextPosition();)(d = a.acceptPosition(e) === p) && (c += 1), b(c, e, d)
        };
        this.handleStepsInserted = function(a) {
            n();
            l.damageCacheAfterStep(a.position)
        };
        this.handleStepsRemoved = function(a) {
            n();
            l.damageCacheAfterStep(a.position -
                1)
        };
        n()
    }
})();
ops.Operation = function() {};
ops.Operation.prototype.init = function(f) {};
ops.Operation.prototype.execute = function(f) {};
ops.Operation.prototype.spec = function() {};
ops.TextPositionFilter = function() {
    function f(a, b) {
        for (; a && b(a) !== h;) a = a.previousSibling;
        return a
    }

    function k(b, d, l, k) {
        var c;
        if (d) {
            if (a.isInlineRoot(d) && a.isGroupingElement(l)) return n;
            k = a.lookLeftForCharacter(d);
            if (1 === k || 2 === k && (a.scanRightForAnyCharacter(l) || a.scanRightForAnyCharacter(a.nextNode(b)))) return h
        } else if (a.isGroupingElement(b) && a.isInlineRoot(f(b.previousSibling, k))) return h;
        k = null === d && a.isParagraph(b);
        c = a.lookRightForCharacter(l);
        if (k) return c ? h : a.scanRightForAnyCharacter(l) ? n : h;
        if (!c) return n;
        d = d || a.previousNode(b);
        return a.scanLeftForAnyCharacter(d) ? n : h
    }
    var a = odf.OdfUtils,
        d = Node.ELEMENT_NODE,
        b = Node.TEXT_NODE,
        h = core.PositionFilter.FilterResult.FILTER_ACCEPT,
        n = core.PositionFilter.FilterResult.FILTER_REJECT;
    this.acceptPosition = function(f) {
        var m = f.container(),
            l = m.nodeType,
            r, c, e;
        if (l !== d && l !== b) return n;
        if (l === b) {
            l = f.unfilteredDomOffset();
            r = m.data;
            runtime.assert(l !== r.length, "Unexpected offset.");
            if (0 < l) {
                f = r[l - 1];
                if (!a.isODFWhitespace(f)) return h;
                if (1 < l)
                    if (f = r[l - 2], !a.isODFWhitespace(f)) e =
                        h;
                    else {
                        if (!a.isODFWhitespace(r.substr(0, l))) return n
                    }
                else c = a.previousNode(m), a.scanLeftForNonSpace(c) && (e = h);
                if (e === h) return a.isTrailingWhitespace(m, l) ? n : h;
                f = r[l];
                return a.isODFWhitespace(f) ? n : a.scanLeftForAnyCharacter(a.previousNode(m)) ? n : h
            }
            c = f.leftNode();
            e = m;
            m = m.parentNode;
            e = k(m, c, e, f.getNodeFilter())
        } else a.isGroupingElement(m) ? (c = f.leftNode(), e = f.rightNode(), e = k(m, c, e, f.getNodeFilter())) : e = n;
        return e
    }
};
ops.OdtDocument = function(f) {
    function k(a) {
        return new core.PositionIterator(a, C, N, !1)
    }

    function a() {
        var a = f.odfContainer().getContentElement(),
            b = a && a.localName;
        runtime.assert("text" === b, "Unsupported content element type '" + b + "' for OdtDocument");
        return a
    }

    function d() {
        return c.getDocumentElement().ownerDocument
    }

    function b(a) {
        for (; a && !(a.namespaceURI === odf.Namespaces.officens && "text" === a.localName || a.namespaceURI === odf.Namespaces.officens && "annotation" === a.localName);) a = a.parentNode;
        return a
    }

    function h(a) {
        this.acceptPosition =
            function(c) {
                c = c.container();
                var e;
                e = "string" === typeof a ? x[a].getNode() : a;
                return b(c) === b(e) ? v : s
            }
    }

    function n(a, b, c, e) {
        e = k(e);
        var d;
        1 === c.length ? d = c[0] : (d = new core.PositionFilterChain, c.forEach(d.addFilter));
        c = new core.StepIterator(d, e);
        c.setPosition(a, b);
        return c
    }

    function q(b) {
        var c = k(a());
        b = z.convertStepsToDomPoint(b);
        c.setUnfilteredPosition(b.node, b.offset);
        return c
    }

    function m(a) {
        return a === w
    }

    function l(a) {
        var b, c = [],
            d, f = 2;
        runtime.assert(a.isStep(), "positionIterator is not at a step");
        do {
            if (b = e.getContentBounds(a))
                if (b =
                    b.container, p.isDowngradableSpaceElement(b)) {
                    for (d = b.lastChild; b.firstChild;) c.push(b.firstChild), b.parentNode.insertBefore(b.firstChild, b);
                    b.parentNode.removeChild(b);
                    a.setPosition(d, d.nodeType === Node.TEXT_NODE ? d.length : d.childNodes.length);
                    a.roundToPreviousStep()
                } f -= 1
        } while (0 < f && a.nextStep());
        c.forEach(g.normalizeTextNodes)
    }

    function r(a, b, c) {
        a = a.childNodes.item(b) || a;
        return (a = p.getParagraphElement(a)) && g.containsNode(c, a) ? a : c
    }
    var c = this,
        e, p = odf.OdfUtils,
        g = core.DomUtils,
        x = {},
        t = {},
        y = new core.EventNotifier([ops.Document.signalMemberAdded,
            ops.Document.signalMemberUpdated, ops.Document.signalMemberRemoved, ops.Document.signalCursorAdded, ops.Document.signalCursorRemoved, ops.Document.signalCursorMoved, ops.OdtDocument.signalParagraphChanged, ops.OdtDocument.signalParagraphStyleModified, ops.OdtDocument.signalCommonStyleCreated, ops.OdtDocument.signalCommonStyleDeleted, ops.OdtDocument.signalTableAdded, ops.OdtDocument.signalOperationStart, ops.OdtDocument.signalOperationEnd, ops.OdtDocument.signalProcessingBatchStart, ops.OdtDocument.signalProcessingBatchEnd,
            ops.OdtDocument.signalUndoStackChanged, ops.OdtDocument.signalStepsInserted, ops.OdtDocument.signalStepsRemoved, ops.OdtDocument.signalMetadataUpdated, ops.OdtDocument.signalAnnotationAdded
        ]),
        v = core.PositionFilter.FilterResult.FILTER_ACCEPT,
        s = core.PositionFilter.FilterResult.FILTER_REJECT,
        w = core.StepDirection.NEXT,
        u, z, H, C = NodeFilter.SHOW_ALL,
        D = new gui.BlacklistNamespaceNodeFilter(["urn:webodf:names:cursor", "urn:webodf:names:editinfo"]),
        I = new gui.OdfTextBodyNodeFilter,
        N = new core.NodeFilterChain([D, I]);
    this.createPositionIterator = k;
    this.getDocumentElement = function() {
        return f.odfContainer().rootElement
    };
    this.cloneDocumentElement = function() {
        var a = c.getDocumentElement(),
            b = f.getAnnotationViewManager();
        b && b.forgetAnnotations();
        a = a.cloneNode(!0);
        f.refreshAnnotations();
        return a
    };
    this.setDocumentElement = function(a) {
        var b = f.odfContainer();
        b.setRootElement(a);
        f.setOdfContainer(b, !0);
        f.refreshCSS()
    };
    this.getDOMDocument = d;
    this.getRootElement = b;
    this.createStepIterator = n;
    this.getIteratorAtPosition = q;
    this.convertCursorStepToDomPoint =
        function(a) {
            return z.convertStepsToDomPoint(a)
        };
    this.convertDomPointToCursorStep = function(a, b, c) {
        var e;
        c === w && (e = m);
        return z.convertDomPointToSteps(a, b, e)
    };
    this.convertDomToCursorRange = function(a) {
        var b;
        b = z.convertDomPointToSteps(a.anchorNode, a.anchorOffset);
        a = a.anchorNode === a.focusNode && a.anchorOffset === a.focusOffset ? b : z.convertDomPointToSteps(a.focusNode, a.focusOffset);
        return {
            position: b,
            length: a - b
        }
    };
    this.convertCursorToDomRange = function(a, b) {
        var c = d().createRange(),
            e, g;
        e = z.convertStepsToDomPoint(a);
        b ? (g = z.convertStepsToDomPoint(a + b), 0 < b ? (c.setStart(e.node, e.offset), c.setEnd(g.node, g.offset)) : (c.setStart(g.node, g.offset), c.setEnd(e.node, e.offset))) : c.setStart(e.node, e.offset);
        return c
    };
    this.upgradeWhitespacesAtPosition = function(a) {
        var b = q(a),
            b = new core.StepIterator(u, b),
            c, d = 2;
        runtime.assert(b.isStep(), "positionIterator is not at a step (requested step: " + a + ")");
        do {
            if (c = e.getContentBounds(b))
                if (a = c.container, c = c.startOffset, a.nodeType === Node.TEXT_NODE && p.isSignificantWhitespace(a, c)) {
                    runtime.assert(" " ===
                        a.data[c], "upgradeWhitespaceToElement: textNode.data[offset] should be a literal space");
                    var g = a.ownerDocument.createElementNS(odf.Namespaces.textns, "text:s"),
                        f = a.parentNode,
                        h = a;
                    g.appendChild(a.ownerDocument.createTextNode(" "));
                    1 === a.length ? f.replaceChild(g, a) : (a.deleteData(c, 1), 0 < c && (c < a.length && a.splitText(c), h = a.nextSibling), f.insertBefore(g, h));
                    a = g;
                    b.setPosition(a, a.childNodes.length);
                    b.roundToPreviousStep()
                } d -= 1
        } while (0 < d && b.nextStep())
    };
    this.downgradeWhitespaces = l;
    this.downgradeWhitespacesAtPosition =
        function(a) {
            a = q(a);
            a = new core.StepIterator(u, a);
            l(a)
        };
    this.getTextNodeAtStep = function(a, b) {
        var e = q(a),
            g = e.container(),
            f, h = 0,
            p = null;
        g.nodeType === Node.TEXT_NODE ? (f = g, h = e.unfilteredDomOffset(), 0 < f.length && (0 < h && (f = f.splitText(h)), f.parentNode.insertBefore(d().createTextNode(""), f), f = f.previousSibling, h = 0)) : (f = d().createTextNode(""), h = 0, g.insertBefore(f, e.rightNode()));
        if (b) {
            if (x[b] && c.getCursorPosition(b) === a) {
                for (p = x[b].getNode(); p.nextSibling && "cursor" === p.nextSibling.localName;) p.parentNode.insertBefore(p.nextSibling,
                    p);
                0 < f.length && f.nextSibling !== p && (f = d().createTextNode(""), h = 0);
                p.parentNode.insertBefore(f, p)
            }
        } else
            for (; f.nextSibling && "cursor" === f.nextSibling.localName;) f.parentNode.insertBefore(f.nextSibling, f);
        for (; f.previousSibling && f.previousSibling.nodeType === Node.TEXT_NODE;) e = f.previousSibling, e.appendData(f.data), h = e.length, f = e, f.parentNode.removeChild(f.nextSibling);
        for (; f.nextSibling && f.nextSibling.nodeType === Node.TEXT_NODE;) e = f.nextSibling, f.appendData(e.data), f.parentNode.removeChild(e);
        return {
            textNode: f,
            offset: h
        }
    };
    this.fixCursorPositions = function() {
        Object.keys(x).forEach(function(a) {
            var e = x[a],
                d = b(e.getNode()),
                g = c.createRootFilter(d),
                f, h, p, l = !1;
            p = e.getSelectedRange();
            f = r(p.startContainer, p.startOffset, d);
            h = n(p.startContainer, p.startOffset, [u, g], f);
            p.collapsed ? d = h : (f = r(p.endContainer, p.endOffset, d), d = n(p.endContainer, p.endOffset, [u, g], f));
            h.isStep() && d.isStep() ? h.container() !== d.container() || h.offset() !== d.offset() || p.collapsed && e.getAnchorNode() === e.getNode() || (l = !0, p.setStart(h.container(), h.offset()),
                p.collapse(!0)) : (l = !0, runtime.assert(h.roundToClosestStep(), "No walkable step found for cursor owned by " + a), p.setStart(h.container(), h.offset()), runtime.assert(d.roundToClosestStep(), "No walkable step found for cursor owned by " + a), p.setEnd(d.container(), d.offset()));
            l && (e.setSelectedRange(p, e.hasForwardSelection()), c.emit(ops.Document.signalCursorMoved, e))
        })
    };
    this.getCursorPosition = function(a) {
        return (a = x[a]) ? z.convertDomPointToSteps(a.getNode(), 0) : 0
    };
    this.getCursorSelection = function(a) {
        a = x[a];
        var b =
            0,
            c = 0;
        a && (b = z.convertDomPointToSteps(a.getNode(), 0), c = z.convertDomPointToSteps(a.getAnchorNode(), 0));
        return {
            position: c,
            length: b - c
        }
    };
    this.getPositionFilter = function() {
        return u
    };
    this.getOdfCanvas = function() {
        return f
    };
    this.getCanvas = function() {
        return f
    };
    this.getRootNode = a;
    this.addMember = function(a) {
        runtime.assert(void 0 === t[a.getMemberId()], "This member already exists");
        t[a.getMemberId()] = a
    };
    this.getMember = function(a) {
        return t.hasOwnProperty(a) ? t[a] : null
    };
    this.removeMember = function(a) {
        delete t[a]
    };
    this.getCursor =
        function(a) {
            return x[a]
        };
    this.getMemberIds = function() {
        var a = [],
            b;
        for (b in x) x.hasOwnProperty(b) && a.push(x[b].getMemberId());
        return a
    };
    this.addCursor = function(a) {
        runtime.assert(Boolean(a), "OdtDocument::addCursor without cursor");
        var b = a.getMemberId(),
            e = c.convertCursorToDomRange(0, 0);
        runtime.assert("string" === typeof b, "OdtDocument::addCursor has cursor without memberid");
        runtime.assert(!x[b], "OdtDocument::addCursor is adding a duplicate cursor with memberid " + b);
        a.setSelectedRange(e, !0);
        x[b] = a
    };
    this.removeCursor =
        function(a) {
            var b = x[a];
            return b ? (b.removeFromDocument(), delete x[a], c.emit(ops.Document.signalCursorRemoved, a), !0) : !1
        };
    this.moveCursor = function(a, b, e, d) {
        a = x[a];
        b = c.convertCursorToDomRange(b, e);
        a && (a.setSelectedRange(b, 0 <= e), a.setSelectionType(d || ops.OdtCursor.RangeSelection))
    };
    this.getFormatting = function() {
        return f.getFormatting()
    };
    this.emit = function(a, b) {
        y.emit(a, b)
    };
    this.subscribe = function(a, b) {
        y.subscribe(a, b)
    };
    this.unsubscribe = function(a, b) {
        y.unsubscribe(a, b)
    };
    this.createRootFilter = function(a) {
        return new h(a)
    };
    this.close = function(a) {
        a()
    };
    this.destroy = function(a) {
        a()
    };
    u = new ops.TextPositionFilter;
    e = new odf.StepUtils;
    z = new ops.OdtStepsTranslator(a, k, u, 500);
    y.subscribe(ops.OdtDocument.signalStepsInserted, z.handleStepsInserted);
    y.subscribe(ops.OdtDocument.signalStepsRemoved, z.handleStepsRemoved);
    y.subscribe(ops.OdtDocument.signalOperationEnd, function(a) {
        var b = a.spec(),
            e = b.memberid,
            d = (new Date(b.timestamp)).toISOString(),
            b = f.odfContainer();
        a.isEdit && (e = c.getMember(e).getProperties().fullName, b.setMetadata({
            "dc:creator": e,
            "dc:date": d
        }, null), e = {
            setProperties: {
                "dc:creator": e,
                "dc:date": d
            },
            removedProperties: []
        }, H || (e.setProperties["meta:editing-cycles"] = b.incrementEditingCycles(), b.setMetadata(null, ["meta:editing-duration", "meta:document-statistic"])), H = a, c.emit(ops.OdtDocument.signalMetadataUpdated, e))
    });
    y.subscribe(ops.OdtDocument.signalProcessingBatchEnd, core.Task.processTasks)
};
ops.OdtDocument.signalParagraphChanged = "paragraph/changed";
ops.OdtDocument.signalTableAdded = "table/added";
ops.OdtDocument.signalCommonStyleCreated = "style/created";
ops.OdtDocument.signalCommonStyleDeleted = "style/deleted";
ops.OdtDocument.signalParagraphStyleModified = "paragraphstyle/modified";
ops.OdtDocument.signalOperationStart = "operation/start";
ops.OdtDocument.signalOperationEnd = "operation/end";
ops.OdtDocument.signalProcessingBatchStart = "router/batchstart";
ops.OdtDocument.signalProcessingBatchEnd = "router/batchend";
ops.OdtDocument.signalUndoStackChanged = "undo/changed";
ops.OdtDocument.signalStepsInserted = "steps/inserted";
ops.OdtDocument.signalStepsRemoved = "steps/removed";
ops.OdtDocument.signalMetadataUpdated = "metadata/updated";
ops.OdtDocument.signalAnnotationAdded = "annotation/added";
ops.OpAddAnnotation = function() {
    function f(a, b, d) {
        var f = a.getTextNodeAtStep(d, k);
        f && (a = f.textNode, d = a.parentNode, f.offset !== a.length && a.splitText(f.offset), d.insertBefore(b, a.nextSibling), 0 === a.length && d.removeChild(a))
    }
    var k, a, d, b, h, n;
    this.init = function(f) {
        k = f.memberid;
        a = parseInt(f.timestamp, 10);
        d = parseInt(f.position, 10);
        b = parseInt(f.length, 10) || 0;
        h = f.name
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function(q) {
        var m = q.getCursor(k),
            l, r;
        n = q.getDOMDocument();
        var c = new Date(a),
            e, p, g;
        e = n.createElementNS(odf.Namespaces.officens,
            "office:annotation");
        e.setAttributeNS(odf.Namespaces.officens, "office:name", h);
        l = n.createElementNS(odf.Namespaces.dcns, "dc:creator");
        l.setAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid", k);
        l.textContent = q.getMember(k).getProperties().fullName;
        r = n.createElementNS(odf.Namespaces.dcns, "dc:date");
        r.appendChild(n.createTextNode(c.toISOString()));
        c = n.createElementNS(odf.Namespaces.textns, "text:list");
        p = n.createElementNS(odf.Namespaces.textns, "text:list-item");
        g = n.createElementNS(odf.Namespaces.textns,
            "text:p");
        p.appendChild(g);
        c.appendChild(p);
        e.appendChild(l);
        e.appendChild(r);
        e.appendChild(c);
        b && (l = n.createElementNS(odf.Namespaces.officens, "office:annotation-end"), l.setAttributeNS(odf.Namespaces.officens, "office:name", h), e.annotationEndElement = l, f(q, l, d + b));
        f(q, e, d);
        q.emit(ops.OdtDocument.signalStepsInserted, {
            position: d
        });
        m && (l = n.createRange(), r = e.getElementsByTagNameNS(odf.Namespaces.textns, "p")[0], l.selectNodeContents(r), m.setSelectedRange(l, !1), m.setSelectionType(ops.OdtCursor.RangeSelection),
            q.emit(ops.Document.signalCursorMoved, m));
        q.getOdfCanvas().addAnnotation(e);
        q.fixCursorPositions();
        q.emit(ops.OdtDocument.signalAnnotationAdded, {
            memberId: k,
            annotation: e
        });
        return !0
    };
    this.spec = function() {
        return {
            optype: "AddAnnotation",
            memberid: k,
            timestamp: a,
            position: d,
            length: b,
            name: h
        }
    }
};
ops.OpAddCursor = function() {
    var f, k;
    this.init = function(a) {
        f = a.memberid;
        k = a.timestamp
    };
    this.isEdit = !1;
    this.group = void 0;
    this.execute = function(a) {
        var d = a.getCursor(f);
        if (d) return !1;
        d = new ops.OdtCursor(f, a);
        a.addCursor(d);
        a.emit(ops.Document.signalCursorAdded, d);
        return !0
    };
    this.spec = function() {
        return {
            optype: "AddCursor",
            memberid: f,
            timestamp: k
        }
    }
};
ops.OpAddMember = function() {
    var f, k, a;
    this.init = function(d) {
        f = d.memberid;
        k = parseInt(d.timestamp, 10);
        a = d.setProperties
    };
    this.isEdit = !1;
    this.group = void 0;
    this.execute = function(d) {
        var b;
        if (d.getMember(f)) return !1;
        b = new ops.Member(f, a);
        d.addMember(b);
        d.emit(ops.Document.signalMemberAdded, b);
        return !0
    };
    this.spec = function() {
        return {
            optype: "AddMember",
            memberid: f,
            timestamp: k,
            setProperties: a
        }
    }
};
ops.OpAddStyle = function() {
    var f, k, a, d, b, h, n = odf.Namespaces.stylens;
    this.init = function(n) {
        f = n.memberid;
        k = n.timestamp;
        a = n.styleName;
        d = n.styleFamily;
        b = "true" === n.isAutomaticStyle || !0 === n.isAutomaticStyle;
        h = n.setProperties
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function(f) {
        var m = f.getOdfCanvas().odfContainer(),
            l = f.getFormatting(),
            k = f.getDOMDocument().createElementNS(n, "style:style");
        if (!k) return !1;
        h && l.updateStyle(k, h);
        k.setAttributeNS(n, "style:family", d);
        k.setAttributeNS(n, "style:name", a);
        b ?
            m.rootElement.automaticStyles.appendChild(k) : m.rootElement.styles.appendChild(k);
        f.getOdfCanvas().refreshCSS();
        b || f.emit(ops.OdtDocument.signalCommonStyleCreated, {
            name: a,
            family: d
        });
        return !0
    };
    this.spec = function() {
        return {
            optype: "AddStyle",
            memberid: f,
            timestamp: k,
            styleName: a,
            styleFamily: d,
            isAutomaticStyle: b,
            setProperties: h
        }
    }
};
odf.ObjectNameGenerator = function(f, k) {
    function a(a, b) {
        var c = {};
        this.generateName = function() {
            var e = b(),
                d = 0,
                f;
            do f = a + d, d += 1; while (c[f] || e[f]);
            c[f] = !0;
            return f
        }
    }

    function d() {
        var a = {};
        [f.rootElement.automaticStyles, f.rootElement.styles].forEach(function(c) {
            for (c = c.firstElementChild; c;) c.namespaceURI === b && "style" === c.localName && (a[c.getAttributeNS(b, "name")] = !0), c = c.nextElementSibling
        });
        return a
    }
    var b = odf.Namespaces.stylens,
        h = odf.Namespaces.drawns,
        n = odf.Namespaces.xlinkns,
        q = (new core.Utils).hashString(k),
        m = null,
        l = null,
        r = null,
        c = {},
        e = {};
    this.generateStyleName = function() {
        null === m && (m = new a("auto" + q + "_", function() {
            return d()
        }));
        return m.generateName()
    };
    this.generateFrameName = function() {
        var b, e, d;
        if (null === l) {
            e = f.rootElement.body.getElementsByTagNameNS(h, "frame");
            for (b = 0; b < e.length; b += 1) d = e.item(b), c[d.getAttributeNS(h, "name")] = !0;
            l = new a("fr" + q + "_", function() {
                return c
            })
        }
        return l.generateName()
    };
    this.generateImageName = function() {
        var b, c, d;
        if (null === r) {
            d = f.rootElement.body.getElementsByTagNameNS(h, "image");
            for (b = 0; b < d.length; b += 1) c = d.item(b), c = c.getAttributeNS(n, "href"), c = c.substring(9, c.lastIndexOf(".")), e[c] = !0;
            r = new a("img" + q + "_", function() {
                return e
            })
        }
        return r.generateName()
    }
};
odf.TextStyleApplicator = function(f, k, a) {
    function d(a) {
        function b(a, c) {
            return "object" === typeof a && "object" === typeof c ? Object.keys(a).every(function(d) {
                return b(a[d], c[d])
            }) : a === c
        }
        var c = {};
        this.isStyleApplied = function(e) {
            e = k.getAppliedStylesForElement(e, c).styleProperties;
            return b(a, e)
        }
    }

    function b(b) {
        var d = {};
        this.applyStyleToContainer = function(c) {
            var e;
            e = c.getAttributeNS(q, "style-name");
            var h = c.ownerDocument;
            e = e || "";
            if (!d.hasOwnProperty(e)) {
                var g = e,
                    n;
                n = e ? k.createDerivedStyleObject(e, "text", b) : b;
                h =
                    h.createElementNS(m, "style:style");
                k.updateStyle(h, n);
                h.setAttributeNS(m, "style:name", f.generateStyleName());
                h.setAttributeNS(m, "style:family", "text");
                h.setAttributeNS("urn:webodf:names:scope", "scope", "document-content");
                a.appendChild(h);
                d[g] = h
            }
            e = d[e].getAttributeNS(m, "name");
            c.setAttributeNS(q, "text:style-name", e)
        }
    }

    function h(a, b) {
        var c = a.ownerDocument,
            e = a.parentNode,
            d, g, f, h = new core.LoopWatchDog(1E4);
        g = [];
        g.push(a);
        for (f = a.nextSibling; f && n.rangeContainsNode(b, f);) h.check(), g.push(f), f = f.nextSibling;
        "span" !== e.localName || e.namespaceURI !== q ? (d = c.createElementNS(q, "text:span"), e.insertBefore(d, a), c = !1) : (a.previousSibling && !n.rangeContainsNode(b, e.firstChild) ? (d = e.cloneNode(!1), e.parentNode.insertBefore(d, e.nextSibling)) : d = e, c = !0);
        g.forEach(function(a) {
            a.parentNode !== d && d.appendChild(a)
        });
        if (f && c)
            for (g = d.cloneNode(!1), d.parentNode.insertBefore(g, d.nextSibling); f;) h.check(), c = f.nextSibling, g.appendChild(f), f = c;
        return d
    }
    var n = core.DomUtils,
        q = odf.Namespaces.textns,
        m = odf.Namespaces.stylens;
    this.applyStyle =
        function(a, f, c) {
            var e = {},
                p, g, n, m;
            runtime.assert(c && c.hasOwnProperty("style:text-properties"), "applyStyle without any text properties");
            e["style:text-properties"] = c["style:text-properties"];
            n = new b(e);
            m = new d(e);
            a.forEach(function(a) {
                p = m.isStyleApplied(a);
                !1 === p && (g = h(a, f), n.applyStyleToContainer(g))
            })
        }
};
ops.OpApplyDirectStyling = function() {
    function f(a, b, d) {
        var c = a.getOdfCanvas().odfContainer(),
            e = q.splitBoundaries(b),
            f = n.getTextNodes(b, !1);
        (new odf.TextStyleApplicator(new odf.ObjectNameGenerator(c, k), a.getFormatting(), c.rootElement.automaticStyles)).applyStyle(f, b, d);
        e.forEach(q.normalizeTextNodes)
    }
    var k, a, d, b, h, n = odf.OdfUtils,
        q = core.DomUtils;
    this.init = function(f) {
        k = f.memberid;
        a = f.timestamp;
        d = parseInt(f.position, 10);
        b = parseInt(f.length, 10);
        h = f.setProperties
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute =
        function(m) {
            var l = m.convertCursorToDomRange(d, b),
                q = n.getParagraphElements(l);
            f(m, l, h);
            l.detach();
            m.getOdfCanvas().refreshCSS();
            m.fixCursorPositions();
            q.forEach(function(b) {
                m.emit(ops.OdtDocument.signalParagraphChanged, {
                    paragraphElement: b,
                    memberId: k,
                    timeStamp: a
                })
            });
            m.getOdfCanvas().rerenderAnnotations();
            return !0
        };
    this.spec = function() {
        return {
            optype: "ApplyDirectStyling",
            memberid: k,
            timestamp: a,
            position: d,
            length: b,
            setProperties: h
        }
    }
};
ops.OpApplyHyperlink = function() {
    function f(a) {
        for (; a;) {
            if (q.isHyperlink(a)) return !0;
            a = a.parentNode
        }
        return !1
    }
    var k, a, d, b, h, n = core.DomUtils,
        q = odf.OdfUtils;
    this.init = function(f) {
        k = f.memberid;
        a = f.timestamp;
        d = f.position;
        b = f.length;
        h = f.hyperlink
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function(m) {
        var l = m.getDOMDocument(),
            r = m.convertCursorToDomRange(d, b),
            c = n.splitBoundaries(r),
            e = [],
            p = q.getTextNodes(r, !1);
        if (0 === p.length) return !1;
        p.forEach(function(a) {
            var b = q.getParagraphElement(a);
            runtime.assert(!1 ===
                f(a), "The given range should not contain any link.");
            var c = h,
                d = l.createElementNS(odf.Namespaces.textns, "text:a");
            d.setAttributeNS(odf.Namespaces.xlinkns, "xlink:type", "simple");
            d.setAttributeNS(odf.Namespaces.xlinkns, "xlink:href", c);
            a.parentNode.insertBefore(d, a);
            d.appendChild(a); - 1 === e.indexOf(b) && e.push(b)
        });
        c.forEach(n.normalizeTextNodes);
        r.detach();
        m.fixCursorPositions();
        m.getOdfCanvas().refreshSize();
        m.getOdfCanvas().rerenderAnnotations();
        e.forEach(function(b) {
            m.emit(ops.OdtDocument.signalParagraphChanged, {
                paragraphElement: b,
                memberId: k,
                timeStamp: a
            })
        });
        return !0
    };
    this.spec = function() {
        return {
            optype: "ApplyHyperlink",
            memberid: k,
            timestamp: a,
            position: d,
            length: b,
            hyperlink: h
        }
    }
};
ops.OpInsertImage = function() {
    var f, k, a, d, b, h, n, q, m = odf.Namespaces.drawns,
        l = odf.Namespaces.svgns,
        r = odf.Namespaces.textns,
        c = odf.Namespaces.xlinkns,
        e = odf.OdfUtils;
    this.init = function(c) {
        f = c.memberid;
        k = c.timestamp;
        a = c.position;
        d = c.filename;
        b = c.frameWidth;
        h = c.frameHeight;
        n = c.frameStyleName;
        q = c.frameName
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function(p) {
        var g = p.getOdfCanvas(),
            x = p.getTextNodeAtStep(a, f),
            t, y;
        if (!x) return !1;
        t = x.textNode;
        y = e.getParagraphElement(t);
        var x = x.offset !== t.length ? t.splitText(x.offset) :
            t.nextSibling,
            v = p.getDOMDocument(),
            s = v.createElementNS(m, "draw:image"),
            v = v.createElementNS(m, "draw:frame");
        s.setAttributeNS(c, "xlink:href", d);
        s.setAttributeNS(c, "xlink:type", "simple");
        s.setAttributeNS(c, "xlink:show", "embed");
        s.setAttributeNS(c, "xlink:actuate", "onLoad");
        v.setAttributeNS(m, "draw:style-name", n);
        v.setAttributeNS(m, "draw:name", q);
        v.setAttributeNS(r, "text:anchor-type", "as-char");
        v.setAttributeNS(l, "svg:width", b);
        v.setAttributeNS(l, "svg:height", h);
        v.appendChild(s);
        t.parentNode.insertBefore(v,
            x);
        p.emit(ops.OdtDocument.signalStepsInserted, {
            position: a
        });
        0 === t.length && t.parentNode.removeChild(t);
        g.addCssForFrameWithImage(v);
        g.refreshCSS();
        p.emit(ops.OdtDocument.signalParagraphChanged, {
            paragraphElement: y,
            memberId: f,
            timeStamp: k
        });
        g.rerenderAnnotations();
        return !0
    };
    this.spec = function() {
        return {
            optype: "InsertImage",
            memberid: f,
            timestamp: k,
            filename: d,
            position: a,
            frameWidth: b,
            frameHeight: h,
            frameStyleName: n,
            frameName: q
        }
    }
};
ops.OpInsertTable = function() {
    function f(a, e) {
        var f;
        if (1 === l.length) f = l[0];
        else if (3 === l.length) switch (a) {
            case 0:
                f = l[0];
                break;
            case d - 1:
                f = l[2];
                break;
            default:
                f = l[1]
        } else f = l[a];
        if (1 === f.length) return f[0];
        if (3 === f.length) switch (e) {
            case 0:
                return f[0];
            case b - 1:
                return f[2];
            default:
                return f[1]
        }
        return f[e]
    }
    var k, a, d, b, h, n, q, m, l, r = odf.OdfUtils;
    this.init = function(c) {
        k = c.memberid;
        a = c.timestamp;
        h = c.position;
        d = c.initialRows;
        b = c.initialColumns;
        n = c.tableName;
        q = c.tableStyleName;
        m = c.tableColumnStyleName;
        l = c.tableCellStyleMatrix
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function(c) {
        var e = c.getTextNodeAtStep(h),
            p = c.getRootNode();
        if (e) {
            var g = c.getDOMDocument(),
                l = g.createElementNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:table"),
                t = g.createElementNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:table-column"),
                y, v, s, w;
            q && l.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:style-name", q);
            n && l.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:name", n);
            t.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0",
                "table:number-columns-repeated", b);
            m && t.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:style-name", m);
            l.appendChild(t);
            for (s = 0; s < d; s += 1) {
                t = g.createElementNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:table-row");
                for (w = 0; w < b; w += 1) y = g.createElementNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:table-cell"), (v = f(s, w)) && y.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:table:1.0", "table:style-name", v), v = g.createElementNS("urn:oasis:names:tc:opendocument:xmlns:text:1.0",
                    "text:p"), y.appendChild(v), t.appendChild(y);
                l.appendChild(t)
            }
            e = r.getParagraphElement(e.textNode);
            p.insertBefore(l, e.nextSibling);
            c.emit(ops.OdtDocument.signalStepsInserted, {
                position: h
            });
            c.getOdfCanvas().refreshSize();
            c.emit(ops.OdtDocument.signalTableAdded, {
                tableElement: l,
                memberId: k,
                timeStamp: a
            });
            c.getOdfCanvas().rerenderAnnotations();
            return !0
        }
        return !1
    };
    this.spec = function() {
        return {
            optype: "InsertTable",
            memberid: k,
            timestamp: a,
            position: h,
            initialRows: d,
            initialColumns: b,
            tableName: n,
            tableStyleName: q,
            tableColumnStyleName: m,
            tableCellStyleMatrix: l
        }
    }
};
ops.OpInsertText = function() {
    var f, k, a, d, b, h = odf.OdfUtils;
    this.init = function(h) {
        f = h.memberid;
        k = h.timestamp;
        a = h.position;
        b = h.text;
        d = "true" === h.moveCursor || !0 === h.moveCursor
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function(n) {
        var q, m, l, r = null,
            c = n.getDOMDocument(),
            e, p = 0,
            g, x = n.getCursor(f),
            t;
        n.upgradeWhitespacesAtPosition(a);
        if (q = n.getTextNodeAtStep(a)) {
            m = q.textNode;
            r = m.nextSibling;
            l = m.parentNode;
            e = h.getParagraphElement(m);
            for (t = 0; t < b.length; t += 1)
                if ("\t" === b[t] || "\t" !== b[t] && h.isODFWhitespace(b[t]) &&
                    (0 === t || t === b.length - 1 || "\t" !== b[t - 1] && h.isODFWhitespace(b[t - 1]))) 0 === p ? (q.offset !== m.length && (r = m.splitText(q.offset)), 0 < t && m.appendData(b.substring(0, t))) : p < t && (p = b.substring(p, t), l.insertBefore(c.createTextNode(p), r)), p = t + 1, "\t" === b[t] ? (g = c.createElementNS("urn:oasis:names:tc:opendocument:xmlns:text:1.0", "text:tab"), g.appendChild(c.createTextNode("\t"))) : (" " !== b[t] && runtime.log("WARN: InsertText operation contains non-tab, non-space whitespace character (character code " + b.charCodeAt(t) + ")"),
                    g = c.createElementNS("urn:oasis:names:tc:opendocument:xmlns:text:1.0", "text:s"), g.appendChild(c.createTextNode(" "))), l.insertBefore(g, r);
            0 === p ? m.insertData(q.offset, b) : p < b.length && (q = b.substring(p), l.insertBefore(c.createTextNode(q), r));
            l = m.parentNode;
            r = m.nextSibling;
            l.removeChild(m);
            l.insertBefore(m, r);
            0 === m.length && m.parentNode.removeChild(m);
            n.emit(ops.OdtDocument.signalStepsInserted, {
                position: a
            });
            x && d && (n.moveCursor(f, a + b.length, 0), n.emit(ops.Document.signalCursorMoved, x));
            n.downgradeWhitespacesAtPosition(a);
            n.downgradeWhitespacesAtPosition(a + b.length);
            n.getOdfCanvas().refreshSize();
            n.emit(ops.OdtDocument.signalParagraphChanged, {
                paragraphElement: e,
                memberId: f,
                timeStamp: k
            });
            n.getOdfCanvas().rerenderAnnotations();
            return !0
        }
        return !1
    };
    this.spec = function() {
        return {
            optype: "InsertText",
            memberid: f,
            timestamp: k,
            position: a,
            text: b,
            moveCursor: d
        }
    }
};
odf.CollapsingRules = function(f) {
    function k(a) {
        return d.isODFNode(a) || "br" === a.localName && d.isLineBreak(a.parentNode) || a.nodeType === Node.TEXT_NODE && d.isODFNode(a.parentNode)
    }

    function a(h) {
        var n;
        h.nodeType === Node.TEXT_NODE ? (n = h.parentNode, n.removeChild(h)) : n = b.removeUnwantedNodes(h, k);
        return n && !d.isParagraph(n) && n !== f && d.hasNoODFContent(n) ? a(n) : n
    }
    var d = odf.OdfUtils,
        b = core.DomUtils;
    this.mergeChildrenIntoParent = a
};
ops.OpMergeParagraph = function() {
    function f(a) {
        return r.isGroupingElement(a) && r.hasNoODFContent(a)
    }

    function k(a) {
        if (a.nodeType === Node.TEXT_NODE) {
            if (0 === a.length) return runtime.log("WARN: Empty text node found during merge operation"), !0;
            if (r.isODFWhitespace(a.data) && !1 === r.isSignificantWhitespace(a, 0)) return !0;
            a = "#text"
        } else a = (a.prefix ? a.prefix + ":" : "") + a.localName;
        runtime.log("WARN: Unexpected text element found near paragraph boundary [" + a + "]");
        return !1
    }

    function a(a) {
        a.collapsed || (c.splitBoundaries(a),
            a = r.getTextElements(a, !1, !0).filter(k), a.forEach(function(a) {
                a.parentNode.removeChild(a)
            }))
    }

    function d(a, b, c) {
        a = a.convertCursorStepToDomPoint(b);
        var e = r.getParagraphElement(a.node, a.offset);
        runtime.assert(Boolean(e), "Paragraph not found at step " + b);
        c && c.setPosition(a.node, a.offset);
        return e
    }
    var b, h, n, q, m, l, r = odf.OdfUtils,
        c = core.DomUtils,
        e = odf.Namespaces.textns;
    this.init = function(a) {
        b = a.memberid;
        h = a.timestamp;
        n = a.moveCursor;
        q = a.paragraphStyleName;
        m = parseInt(a.sourceStartPosition, 10);
        l = parseInt(a.destinationStartPosition,
            10)
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function(p) {
        var g, k, r = p.getCursor(b);
        g = p.getRootNode();
        var y = new odf.CollapsingRules(g),
            v = p.createStepIterator(g, 0, [p.getPositionFilter()], g),
            s;
        runtime.assert(l < m, "Destination paragraph (" + l + ") must be before source paragraph (" + m + ")");
        k = d(p, l);
        g = d(p, m, v);
        v.previousStep();
        runtime.assert(c.containsNode(k, v.container()), "Destination paragraph must be adjacent to the source paragraph");
        s = k.ownerDocument.createRange();
        v.setPosition(k, k.childNodes.length);
        v.roundToPreviousStep();
        s.setStart(v.container(), v.offset());
        s.setEnd(k, k.childNodes.length);
        a(s);
        s = k.childNodes.length;
        var w = g.ownerDocument.createRange();
        v.setPosition(g, 0);
        v.roundToNextStep();
        w.setStart(g, 0);
        w.setEnd(v.container(), v.offset());
        a(w);
        for (w = g.firstChild; w;) "editinfo" === w.localName ? g.removeChild(w) : (k.appendChild(w), c.removeUnwantedNodes(w, f)), w = g.firstChild;
        runtime.assert(0 === g.childNodes.length, "Source paragraph should be empty before it is removed");
        y.mergeChildrenIntoParent(g);
        p.emit(ops.OdtDocument.signalStepsRemoved, {
            position: m - 1
        });
        v.setPosition(k, s);
        v.roundToClosestStep();
        v.previousStep() || v.roundToNextStep();
        p.downgradeWhitespaces(v);
        q ? k.setAttributeNS(e, "text:style-name", q) : k.removeAttributeNS(e, "style-name");
        r && n && (p.moveCursor(b, m - 1, 0), p.emit(ops.Document.signalCursorMoved, r));
        p.fixCursorPositions();
        p.getOdfCanvas().refreshSize();
        p.emit(ops.OdtDocument.signalParagraphChanged, {
            paragraphElement: k,
            memberId: b,
            timeStamp: h
        });
        p.getOdfCanvas().rerenderAnnotations();
        return !0
    };
    this.spec = function() {
        return {
            optype: "MergeParagraph",
            memberid: b,
            timestamp: h,
            moveCursor: n,
            paragraphStyleName: q,
            sourceStartPosition: m,
            destinationStartPosition: l
        }
    }
};
ops.OpMoveCursor = function() {
    var f, k, a, d, b;
    this.init = function(h) {
        f = h.memberid;
        k = h.timestamp;
        a = h.position;
        d = h.length || 0;
        b = h.selectionType || ops.OdtCursor.RangeSelection
    };
    this.isEdit = !1;
    this.group = void 0;
    this.execute = function(h) {
        var n = h.getCursor(f),
            k;
        if (!n) return !1;
        k = h.convertCursorToDomRange(a, d);
        n.setSelectedRange(k, 0 <= d);
        n.setSelectionType(b);
        h.emit(ops.Document.signalCursorMoved, n);
        return !0
    };
    this.spec = function() {
        return {
            optype: "MoveCursor",
            memberid: f,
            timestamp: k,
            position: a,
            length: d,
            selectionType: b
        }
    }
};
ops.OpRemoveAnnotation = function() {
    var f, k, a, d, b = core.DomUtils;
    this.init = function(b) {
        f = b.memberid;
        k = b.timestamp;
        a = parseInt(b.position, 10);
        d = parseInt(b.length, 10)
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function(d) {
        function f(a) {
            m.parentNode.insertBefore(a, m)
        }
        for (var k = d.getIteratorAtPosition(a).container(), m; k.namespaceURI !== odf.Namespaces.officens || "annotation" !== k.localName;) k = k.parentNode;
        if (null === k) return !1;
        m = k;
        k = m.annotationEndElement;
        d.getOdfCanvas().forgetAnnotations();
        b.getElementsByTagNameNS(m,
            "urn:webodf:names:cursor", "cursor").forEach(f);
        b.getElementsByTagNameNS(m, "urn:webodf:names:cursor", "anchor").forEach(f);
        m.parentNode.removeChild(m);
        k && k.parentNode.removeChild(k);
        d.emit(ops.OdtDocument.signalStepsRemoved, {
            position: 0 < a ? a - 1 : a
        });
        d.fixCursorPositions();
        d.getOdfCanvas().refreshAnnotations();
        return !0
    };
    this.spec = function() {
        return {
            optype: "RemoveAnnotation",
            memberid: f,
            timestamp: k,
            position: a,
            length: d
        }
    }
};
ops.OpRemoveBlob = function() {
    var f, k, a;
    this.init = function(d) {
        f = d.memberid;
        k = d.timestamp;
        a = d.filename
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function(d) {
        d.getOdfCanvas().odfContainer().removeBlob(a);
        return !0
    };
    this.spec = function() {
        return {
            optype: "RemoveBlob",
            memberid: f,
            timestamp: k,
            filename: a
        }
    }
};
ops.OpRemoveCursor = function() {
    var f, k;
    this.init = function(a) {
        f = a.memberid;
        k = a.timestamp
    };
    this.isEdit = !1;
    this.group = void 0;
    this.execute = function(a) {
        return a.removeCursor(f) ? !0 : !1
    };
    this.spec = function() {
        return {
            optype: "RemoveCursor",
            memberid: f,
            timestamp: k
        }
    }
};
ops.OpRemoveHyperlink = function() {
    var f, k, a, d, b = core.DomUtils,
        h = odf.OdfUtils;
    this.init = function(b) {
        f = b.memberid;
        k = b.timestamp;
        a = b.position;
        d = b.length
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function(n) {
        var q = n.convertCursorToDomRange(a, d),
            m = h.getHyperlinkElements(q);
        runtime.assert(1 === m.length, "The given range should only contain a single link.");
        m = b.mergeIntoParent(m[0]);
        q.detach();
        n.fixCursorPositions();
        n.getOdfCanvas().refreshSize();
        n.getOdfCanvas().rerenderAnnotations();
        n.emit(ops.OdtDocument.signalParagraphChanged, {
            paragraphElement: h.getParagraphElement(m),
            memberId: f,
            timeStamp: k
        });
        return !0
    };
    this.spec = function() {
        return {
            optype: "RemoveHyperlink",
            memberid: f,
            timestamp: k,
            position: a,
            length: d
        }
    }
};
ops.OpRemoveMember = function() {
    var f, k;
    this.init = function(a) {
        f = a.memberid;
        k = parseInt(a.timestamp, 10)
    };
    this.isEdit = !1;
    this.group = void 0;
    this.execute = function(a) {
        if (!a.getMember(f)) return !1;
        a.removeMember(f);
        a.emit(ops.Document.signalMemberRemoved, f);
        return !0
    };
    this.spec = function() {
        return {
            optype: "RemoveMember",
            memberid: f,
            timestamp: k
        }
    }
};
ops.OpRemoveStyle = function() {
    var f, k, a, d;
    this.init = function(b) {
        f = b.memberid;
        k = b.timestamp;
        a = b.styleName;
        d = b.styleFamily
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function(b) {
        var f = b.getFormatting().getStyleElement(a, d);
        if (!f) return !1;
        f.parentNode.removeChild(f);
        b.getOdfCanvas().refreshCSS();
        b.emit(ops.OdtDocument.signalCommonStyleDeleted, {
            name: a,
            family: d
        });
        return !0
    };
    this.spec = function() {
        return {
            optype: "RemoveStyle",
            memberid: f,
            timestamp: k,
            styleName: a,
            styleFamily: d
        }
    }
};
ops.OpRemoveText = function() {
    var f, k, a, d, b = odf.OdfUtils,
        h = core.DomUtils;
    this.init = function(b) {
        runtime.assert(0 <= b.length, "OpRemoveText only supports positive lengths");
        f = b.memberid;
        k = b.timestamp;
        a = parseInt(b.position, 10);
        d = parseInt(b.length, 10)
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function(n) {
        var q, m, l, r = n.getCursor(f),
            c = new odf.CollapsingRules(n.getRootNode());
        n.upgradeWhitespacesAtPosition(a);
        n.upgradeWhitespacesAtPosition(a + d);
        q = n.convertCursorToDomRange(a, d);
        h.splitBoundaries(q);
        m = b.getTextElements(q,
            !1, !0);
        l = b.getParagraphElement(q.startContainer, q.startOffset);
        runtime.assert(void 0 !== l, "Attempting to remove text outside a paragraph element");
        q.detach();
        m.forEach(function(a) {
            a.parentNode ? (runtime.assert(h.containsNode(l, a), "RemoveText only supports removing elements within the same paragraph"), c.mergeChildrenIntoParent(a)) : runtime.log("WARN: text element has already been removed from it's container")
        });
        n.emit(ops.OdtDocument.signalStepsRemoved, {
            position: a
        });
        n.downgradeWhitespacesAtPosition(a);
        n.fixCursorPositions();
        n.getOdfCanvas().refreshSize();
        n.emit(ops.OdtDocument.signalParagraphChanged, {
            paragraphElement: l,
            memberId: f,
            timeStamp: k
        });
        r && (r.resetSelectionType(), n.emit(ops.Document.signalCursorMoved, r));
        n.getOdfCanvas().rerenderAnnotations();
        return !0
    };
    this.spec = function() {
        return {
            optype: "RemoveText",
            memberid: f,
            timestamp: k,
            position: a,
            length: d
        }
    }
};
ops.OpSetBlob = function() {
    var f, k, a, d, b;
    this.init = function(h) {
        f = h.memberid;
        k = h.timestamp;
        a = h.filename;
        d = h.mimetype;
        b = h.content
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function(f) {
        f.getOdfCanvas().odfContainer().setBlob(a, d, b);
        return !0
    };
    this.spec = function() {
        return {
            optype: "SetBlob",
            memberid: f,
            timestamp: k,
            filename: a,
            mimetype: d,
            content: b
        }
    }
};
ops.OpSetParagraphStyle = function() {
    function f(a, b, d) {
        var f = [a.getPositionFilter()],
            h = d.container();
        d = d.unfilteredDomOffset();
        return !1 === a.createStepIterator(h, d, f, b).previousStep()
    }
    var k, a, d, b, h = odf.OdfUtils;
    this.init = function(f) {
        k = f.memberid;
        a = f.timestamp;
        d = f.position;
        b = f.styleName
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function(n) {
        var q, m;
        q = n.getIteratorAtPosition(d);
        return (m = h.getParagraphElement(q.container())) ? (runtime.assert(f(n, m, q), "SetParagraphStyle position should be the first position in the paragraph"),
            b ? m.setAttributeNS("urn:oasis:names:tc:opendocument:xmlns:text:1.0", "text:style-name", b) : m.removeAttributeNS("urn:oasis:names:tc:opendocument:xmlns:text:1.0", "style-name"), n.getOdfCanvas().refreshSize(), n.emit(ops.OdtDocument.signalParagraphChanged, {
                paragraphElement: m,
                timeStamp: a,
                memberId: k
            }), n.getOdfCanvas().rerenderAnnotations(), !0) : !1
    };
    this.spec = function() {
        return {
            optype: "SetParagraphStyle",
            memberid: k,
            timestamp: a,
            position: d,
            styleName: b
        }
    }
};
ops.OpSplitParagraph = function() {
    var f, k, a, d, b, h, n = odf.OdfUtils,
        q = odf.Namespaces.textns;
    this.init = function(n) {
        f = n.memberid;
        k = n.timestamp;
        d = n.position;
        a = n.sourceParagraphPosition;
        h = n.paragraphStyleName;
        b = "true" === n.moveCursor || !0 === n.moveCursor
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function(a) {
        var l, r, c, e, p, g, x, t = a.getCursor(f);
        a.upgradeWhitespacesAtPosition(d);
        l = a.getTextNodeAtStep(d);
        if (!l) return !1;
        r = n.getParagraphElement(l.textNode);
        if (!r) return !1;
        c = n.isListItem(r.parentNode) ? r.parentNode :
            r;
        0 === l.offset ? (x = l.textNode.previousSibling, g = null) : (x = l.textNode, g = l.offset >= l.textNode.length ? null : l.textNode.splitText(l.offset));
        for (e = l.textNode; e !== c;) {
            e = e.parentNode;
            p = e.cloneNode(!1);
            g && p.appendChild(g);
            if (x)
                for (; x && x.nextSibling;) p.appendChild(x.nextSibling);
            else
                for (; e.firstChild;) p.appendChild(e.firstChild);
            e.parentNode.insertBefore(p, e.nextSibling);
            x = e;
            g = p
        }
        n.isListItem(g) && (g = g.childNodes.item(0));
        h ? g.setAttributeNS(q, "text:style-name", h) : g.removeAttributeNS(q, "style-name");
        0 === l.textNode.length &&
            l.textNode.parentNode.removeChild(l.textNode);
        a.emit(ops.OdtDocument.signalStepsInserted, {
            position: d
        });
        t && b && (a.moveCursor(f, d + 1, 0), a.emit(ops.Document.signalCursorMoved, t));
        a.fixCursorPositions();
        a.getOdfCanvas().refreshSize();
        a.emit(ops.OdtDocument.signalParagraphChanged, {
            paragraphElement: r,
            memberId: f,
            timeStamp: k
        });
        a.emit(ops.OdtDocument.signalParagraphChanged, {
            paragraphElement: g,
            memberId: f,
            timeStamp: k
        });
        a.getOdfCanvas().rerenderAnnotations();
        return !0
    };
    this.spec = function() {
        return {
            optype: "SplitParagraph",
            memberid: f,
            timestamp: k,
            position: d,
            sourceParagraphPosition: a,
            paragraphStyleName: h,
            moveCursor: b
        }
    }
};
ops.OpUpdateMember = function() {
    function f(a) {
        var b = "//dc:creator[@editinfo:memberid='" + k + "']";
        a = xmldom.XPath.getODFElementsWithXPath(a.getRootNode(), b, function(a) {
            return "editinfo" === a ? "urn:webodf:names:editinfo" : odf.Namespaces.lookupNamespaceURI(a)
        });
        for (b = 0; b < a.length; b += 1) a[b].textContent = d.fullName
    }
    var k, a, d, b;
    this.init = function(f) {
        k = f.memberid;
        a = parseInt(f.timestamp, 10);
        d = f.setProperties;
        b = f.removedProperties
    };
    this.isEdit = !1;
    this.group = void 0;
    this.execute = function(a) {
        var n = a.getMember(k);
        if (!n) return !1;
        b && n.removeProperties(b);
        d && (n.setProperties(d), d.fullName && f(a));
        a.emit(ops.Document.signalMemberUpdated, n);
        return !0
    };
    this.spec = function() {
        return {
            optype: "UpdateMember",
            memberid: k,
            timestamp: a,
            setProperties: d,
            removedProperties: b
        }
    }
};
ops.OpUpdateMetadata = function() {
    var f, k, a, d;
    this.init = function(b) {
        f = b.memberid;
        k = parseInt(b.timestamp, 10);
        a = b.setProperties;
        d = b.removedProperties
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function(b) {
        var f = b.getOdfCanvas().odfContainer(),
            n = null;
        d && (n = d.attributes.split(","));
        f.setMetadata(a, n);
        b.emit(ops.OdtDocument.signalMetadataUpdated, {
            setProperties: null !== a ? a : {},
            removedProperties: null !== n ? n : []
        });
        return !0
    };
    this.spec = function() {
        return {
            optype: "UpdateMetadata",
            memberid: f,
            timestamp: k,
            setProperties: a,
            removedProperties: d
        }
    }
};
ops.OpUpdateParagraphStyle = function() {
    function f(a, b) {
        var d, f, c = b ? b.split(",") : [];
        for (d = 0; d < c.length; d += 1) f = c[d].split(":"), a.removeAttributeNS(odf.Namespaces.lookupNamespaceURI(f[0]), f[1])
    }
    var k, a, d, b, h, n = odf.Namespaces.stylens;
    this.init = function(f) {
        k = f.memberid;
        a = f.timestamp;
        d = f.styleName;
        b = f.setProperties;
        h = f.removedProperties
    };
    this.isEdit = !0;
    this.group = void 0;
    this.execute = function(a) {
        var k = a.getFormatting(),
            l, r, c;
        return (l = "" !== d ? k.getStyleElement(d, "paragraph") : k.getDefaultStyleElement("paragraph")) ?
            (r = l.getElementsByTagNameNS(n, "paragraph-properties").item(0), c = l.getElementsByTagNameNS(n, "text-properties").item(0), b && k.updateStyle(l, b), h && (k = h["style:paragraph-properties"], r && k && (f(r, k.attributes), 0 === r.attributes.length && l.removeChild(r)), k = h["style:text-properties"], c && k && (f(c, k.attributes), 0 === c.attributes.length && l.removeChild(c)), f(l, h.attributes)), a.getOdfCanvas().refreshCSS(), a.emit(ops.OdtDocument.signalParagraphStyleModified, d), a.getOdfCanvas().rerenderAnnotations(), !0) : !1
    };
    this.spec =
        function() {
            return {
                optype: "UpdateParagraphStyle",
                memberid: k,
                timestamp: a,
                styleName: d,
                setProperties: b,
                removedProperties: h
            }
        }
};
ops.OperationFactory = function() {
    function f(a) {
        return function(d) {
            return new a
        }
    }
    var k;
    this.register = function(a, d) {
        k[a] = d
    };
    this.create = function(a) {
        var d = null,
            b = k[a.optype];
        b && (d = b(a), d.init(a));
        return d
    };
    k = {
        AddMember: f(ops.OpAddMember),
        UpdateMember: f(ops.OpUpdateMember),
        RemoveMember: f(ops.OpRemoveMember),
        AddCursor: f(ops.OpAddCursor),
        ApplyDirectStyling: f(ops.OpApplyDirectStyling),
        SetBlob: f(ops.OpSetBlob),
        RemoveBlob: f(ops.OpRemoveBlob),
        InsertImage: f(ops.OpInsertImage),
        InsertTable: f(ops.OpInsertTable),
        InsertText: f(ops.OpInsertText),
        RemoveText: f(ops.OpRemoveText),
        MergeParagraph: f(ops.OpMergeParagraph),
        SplitParagraph: f(ops.OpSplitParagraph),
        SetParagraphStyle: f(ops.OpSetParagraphStyle),
        UpdateParagraphStyle: f(ops.OpUpdateParagraphStyle),
        AddStyle: f(ops.OpAddStyle),
        RemoveStyle: f(ops.OpRemoveStyle),
        MoveCursor: f(ops.OpMoveCursor),
        RemoveCursor: f(ops.OpRemoveCursor),
        AddAnnotation: f(ops.OpAddAnnotation),
        RemoveAnnotation: f(ops.OpRemoveAnnotation),
        UpdateMetadata: f(ops.OpUpdateMetadata),
        ApplyHyperlink: f(ops.OpApplyHyperlink),
        RemoveHyperlink: f(ops.OpRemoveHyperlink)
    }
};
ops.OperationRouter = function() {};
ops.OperationRouter.prototype.setOperationFactory = function(f) {};
ops.OperationRouter.prototype.setPlaybackFunction = function(f) {};
ops.OperationRouter.prototype.push = function(f) {};
ops.OperationRouter.prototype.close = function(f) {};
ops.OperationRouter.prototype.subscribe = function(f, k) {};
ops.OperationRouter.prototype.unsubscribe = function(f, k) {};
ops.OperationRouter.prototype.hasLocalUnsyncedOps = function() {};
ops.OperationRouter.prototype.hasSessionHostConnection = function() {};
ops.OperationRouter.signalProcessingBatchStart = "router/batchstart";
ops.OperationRouter.signalProcessingBatchEnd = "router/batchend";
ops.TrivialOperationRouter = function() {
    var f = new core.EventNotifier([ops.OperationRouter.signalProcessingBatchStart, ops.OperationRouter.signalProcessingBatchEnd]),
        k, a, d = 0;
    this.setOperationFactory = function(a) {
        k = a
    };
    this.setPlaybackFunction = function(b) {
        a = b
    };
    this.push = function(b) {
        d += 1;
        f.emit(ops.OperationRouter.signalProcessingBatchStart, {});
        b.forEach(function(b) {
            b = b.spec();
            b.timestamp = Date.now();
            b = k.create(b);
            b.group = "g" + d;
            a(b)
        });
        f.emit(ops.OperationRouter.signalProcessingBatchEnd, {})
    };
    this.close = function(a) {
        a()
    };
    this.subscribe = function(a, d) {
        f.subscribe(a, d)
    };
    this.unsubscribe = function(a, d) {
        f.unsubscribe(a, d)
    };
    this.hasLocalUnsyncedOps = function() {
        return !1
    };
    this.hasSessionHostConnection = function() {
        return !0
    }
};
ops.Session = function(f) {
    function k(a) {
        b.emit(ops.OdtDocument.signalProcessingBatchStart, a)
    }

    function a(a) {
        b.emit(ops.OdtDocument.signalProcessingBatchEnd, a)
    }
    var d = new ops.OperationFactory,
        b = new ops.OdtDocument(f),
        h = null;
    this.setOperationFactory = function(a) {
        d = a;
        h && h.setOperationFactory(d)
    };
    this.setOperationRouter = function(f) {
        h && (h.unsubscribe(ops.OperationRouter.signalProcessingBatchStart, k), h.unsubscribe(ops.OperationRouter.signalProcessingBatchEnd, a));
        h = f;
        h.subscribe(ops.OperationRouter.signalProcessingBatchStart,
            k);
        h.subscribe(ops.OperationRouter.signalProcessingBatchEnd, a);
        f.setPlaybackFunction(function(a) {
            b.emit(ops.OdtDocument.signalOperationStart, a);
            return a.execute(b) ? (b.emit(ops.OdtDocument.signalOperationEnd, a), !0) : !1
        });
        f.setOperationFactory(d)
    };
    this.getOperationFactory = function() {
        return d
    };
    this.getOdtDocument = function() {
        return b
    };
    this.enqueue = function(a) {
        h.push(a)
    };
    this.close = function(a) {
        h.close(function(d) {
            d ? a(d) : b.close(a)
        })
    };
    this.destroy = function(a) {
        b.destroy(a)
    };
    this.setOperationRouter(new ops.TrivialOperationRouter)
};
gui.AnnotationController = function(f, k, a) {
    function d() {
        var b = q.getCursor(a),
            b = b && b.getNode(),
            c = !1;
        b && (c = !r.isWithinAnnotation(b, q.getRootNode()));
        c !== m && (m = c, l.emit(gui.AnnotationController.annotatableChanged, m))
    }

    function b(b) {
        b.getMemberId() === a && d()
    }

    function h(b) {
        b === a && d()
    }

    function n(b) {
        b.getMemberId() === a && d()
    }
    var q = f.getOdtDocument(),
        m = !1,
        l = new core.EventNotifier([gui.AnnotationController.annotatableChanged]),
        r = odf.OdfUtils,
        c = core.StepDirection.NEXT;
    this.isAnnotatable = function() {
        return m
    };
    this.addAnnotation =
        function() {
            var b = new ops.OpAddAnnotation,
                c = q.getCursorSelection(a),
                d = c.length,
                c = c.position;
            m && (c = 0 <= d ? c : c + d, d = Math.abs(d), b.init({
                memberid: a,
                position: c,
                length: d,
                name: a + Date.now()
            }), f.enqueue([b]))
        };
    this.removeAnnotation = function(b) {
        var d, g;
        d = q.getMember(a).getProperties().fullName;
        if (!0 !== k.getState(gui.CommonConstraints.EDIT.ANNOTATIONS.ONLY_DELETE_OWN) || d === r.getAnnotationCreator(b)) d = q.convertDomPointToCursorStep(b, 0, c), g = q.convertDomPointToCursorStep(b, b.childNodes.length), b = new ops.OpRemoveAnnotation,
            b.init({
                memberid: a,
                position: d,
                length: g - d
            }), g = new ops.OpMoveCursor, g.init({
                memberid: a,
                position: 0 < d ? d - 1 : d,
                length: 0
            }), f.enqueue([b, g])
    };
    this.subscribe = function(a, b) {
        l.subscribe(a, b)
    };
    this.unsubscribe = function(a, b) {
        l.unsubscribe(a, b)
    };
    this.destroy = function(a) {
        q.unsubscribe(ops.Document.signalCursorAdded, b);
        q.unsubscribe(ops.Document.signalCursorRemoved, h);
        q.unsubscribe(ops.Document.signalCursorMoved, n);
        a()
    };
    k.registerConstraint(gui.CommonConstraints.EDIT.ANNOTATIONS.ONLY_DELETE_OWN);
    q.subscribe(ops.Document.signalCursorAdded,
        b);
    q.subscribe(ops.Document.signalCursorRemoved, h);
    q.subscribe(ops.Document.signalCursorMoved, n);
    d()
};
gui.AnnotationController.annotatableChanged = "annotatable/changed";
gui.Avatar = function(f, k) {
    var a = this,
        d, b, h;
    this.setColor = function(a) {
        b.style.borderColor = a
    };
    this.setImageUrl = function(d) {
        a.isVisible() ? b.src = d : h = d
    };
    this.isVisible = function() {
        return "block" === d.style.display
    };
    this.show = function() {
        h && (b.src = h, h = void 0);
        d.style.display = "block"
    };
    this.hide = function() {
        d.style.display = "none"
    };
    this.markAsFocussed = function(a) {
        a ? d.classList.add("active") : d.classList.remove("active")
    };
    this.destroy = function(a) {
        f.removeChild(d);
        a()
    };
    (function() {
        var a = f.ownerDocument;
        d = a.createElement("div");
        b = a.createElement("img");
        d.appendChild(b);
        d.style.display = k ? "block" : "none";
        d.className = "handle";
        f.appendChild(d)
    })()
};
gui.StepInfo = function() {};
gui.StepInfo.VisualDirection = {
    LEFT_TO_RIGHT: 0,
    RIGHT_TO_LEFT: 1
};
gui.StepInfo.prototype.container = function() {};
gui.StepInfo.prototype.offset = function() {};
gui.VisualStepScanner = function() {};
gui.VisualStepScanner.prototype.process = function(f, k, a) {};
gui.GuiStepUtils = function() {
    function f(b) {
        b = a.getContentBounds(b);
        var f, h = null;
        if (b)
            if (b.container.nodeType === Node.TEXT_NODE) f = b.container.ownerDocument.createRange(), f.setStart(b.container, b.startOffset), f.setEnd(b.container, b.endOffset), (h = 0 < f.getClientRects().length ? f.getBoundingClientRect() : null) && " " === b.container.data.substring(b.startOffset, b.endOffset) && 1 >= h.width && (h = null), f.detach();
            else if (k.isCharacterElement(b.container) || k.isCharacterFrame(b.container)) h = d.getBoundingClientRect(b.container);
        return h
    }
    var k = odf.OdfUtils,
        a = new odf.StepUtils,
        d = core.DomUtils,
        b = core.StepDirection.NEXT,
        h = gui.StepInfo.VisualDirection.LEFT_TO_RIGHT,
        n = gui.StepInfo.VisualDirection.RIGHT_TO_LEFT;
    this.getContentRect = f;
    this.moveToFilteredStep = function(a, d, l) {
        function k(a, b) {
            b.process(v, g, x) && (a = !0, !t && b.token && (t = b.token));
            return a
        }
        var c = d === b,
            e, p, g, x, t, y = a.snapshot();
        e = !1;
        var v;
        do e = f(a), v = {
                token: a.snapshot(),
                container: a.container,
                offset: a.offset,
                direction: d,
                visualDirection: d === b ? h : n
            }, p = a.nextStep() ? f(a) : null, a.restore(v.token),
            c ? (g = e, x = p) : (g = p, x = e), e = l.reduce(k, !1); while (!e && a.advanceStep(d));
        e || l.forEach(function(a) {
            !t && a.token && (t = a.token)
        });
        a.restore(t || y);
        return Boolean(t)
    }
};
gui.Caret = function(f, k, a, d) {
    function b() {
        r.style.opacity = "0" === r.style.opacity ? "1" : "0";
        w.trigger()
    }

    function h() {
        g.selectNodeContents(p);
        return g.getBoundingClientRect()
    }

    function n() {
        Object.keys(C).forEach(function(a) {
            D[a] = C[a]
        })
    }

    function q() {
        if (!1 === C.isShown || f.getSelectionType() !== ops.OdtCursor.RangeSelection || !d && !f.getSelectedRange().collapsed) C.visibility = "hidden", r.style.visibility = "hidden", w.cancel();
        else if (C.visibility = "visible", r.style.visibility = "visible", !1 === C.isFocused) r.style.opacity =
            "1", w.cancel();
        else {
            if (u || D.visibility !== C.visibility) r.style.opacity = "1", w.cancel();
            w.trigger()
        }
        if (H || z) {
            var a;
            a = f.getNode();
            var b, g, p = t.getBoundingClientRect(x.getSizer()),
                m = !1,
                q = 0;
            a.removeAttributeNS("urn:webodf:names:cursor", "caret-sizer-active");
            if (0 < a.getClientRects().length) g = h(), q = g.left - t.getBoundingClientRect(a).left, m = !0;
            else if (v.setPosition(a, 0), g = y.getContentRect(v), !g && v.nextStep() && (b = y.getContentRect(v)) && (g = b, m = !0), g || (a.setAttributeNS("urn:webodf:names:cursor", "caret-sizer-active",
                    "true"), g = h(), m = !0), !g)
                for (runtime.log("WARN: No suitable client rectangle found for visual caret for " + f.getMemberId()); a;) {
                    if (0 < a.getClientRects().length) {
                        g = t.getBoundingClientRect(a);
                        m = !0;
                        break
                    }
                    a = a.parentNode
                }
            g = t.translateRect(g, p, x.getZoomLevel());
            a = {
                top: g.top,
                height: g.height,
                right: m ? g.left : g.right,
                width: t.adaptRangeDifferenceToZoomLevel(q, x.getZoomLevel())
            };
            8 > a.height && (a = {
                top: a.top - (8 - a.height) / 2,
                height: 8,
                right: a.right
            });
            l.style.height = a.height + "px";
            l.style.top = a.top + "px";
            l.style.left = a.right -
                a.width + "px";
            l.style.width = a.width ? a.width + "px" : "";
            e && (a = runtime.getWindow().getComputedStyle(f.getNode(), null), a.font ? e.style.font = a.font : (e.style.fontStyle = a.fontStyle, e.style.fontVariant = a.fontVariant, e.style.fontWeight = a.fontWeight, e.style.fontSize = a.fontSize, e.style.lineHeight = a.lineHeight, e.style.fontFamily = a.fontFamily))
        }
        C.isShown && z && k.scrollIntoView(r.getBoundingClientRect());
        D.isFocused !== C.isFocused && c.markAsFocussed(C.isFocused);
        n();
        H = z = u = !1
    }

    function m(a) {
        l.parentNode.removeChild(l);
        p.parentNode.removeChild(p);
        a()
    }
    var l, r, c, e, p, g, x = f.getDocument().getCanvas(),
        t = core.DomUtils,
        y = new gui.GuiStepUtils,
        v, s, w, u = !1,
        z = !1,
        H = !1,
        C = {
            isFocused: !1,
            isShown: !0,
            visibility: "hidden"
        },
        D = {
            isFocused: !C.isFocused,
            isShown: !C.isShown,
            visibility: "hidden"
        };
    this.handleUpdate = function() {
        H = !0;
        s.trigger()
    };
    this.refreshCursorBlinking = function() {
        u = !0;
        s.trigger()
    };
    this.setFocus = function() {
        C.isFocused = !0;
        s.trigger()
    };
    this.removeFocus = function() {
        C.isFocused = !1;
        s.trigger()
    };
    this.show = function() {
        C.isShown = !0;
        s.trigger()
    };
    this.hide = function() {
        C.isShown = !1;
        s.trigger()
    };
    this.setAvatarImageUrl = function(a) {
        c.setImageUrl(a)
    };
    this.setColor = function(a) {
        r.style.borderColor = a;
        c.setColor(a)
    };
    this.getCursor = function() {
        return f
    };
    this.getFocusElement = function() {
        return r
    };
    this.toggleHandleVisibility = function() {
        c.isVisible() ? c.hide() : c.show()
    };
    this.showHandle = function() {
        c.show()
    };
    this.hideHandle = function() {
        c.hide()
    };
    this.setOverlayElement = function(a) {
        e = a;
        l.appendChild(a);
        H = !0;
        s.trigger()
    };
    this.ensureVisible = function() {
        z = !0;
        s.trigger()
    };
    this.getBoundingClientRect =
        function() {
            return t.getBoundingClientRect(l)
        };
    this.destroy = function(a) {
        core.Async.destroyAll([s.destroy, w.destroy, c.destroy, m], a)
    };
    (function() {
        var e = f.getDocument(),
            d = [e.createRootFilter(f.getMemberId()), e.getPositionFilter()],
            h = e.getDOMDocument();
        g = h.createRange();
        p = h.createElement("span");
        p.className = "webodf-caretSizer";
        p.textContent = "|";
        f.getNode().appendChild(p);
        l = h.createElement("div");
        l.setAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid", f.getMemberId());
        l.className = "webodf-caretOverlay";
        r = h.createElement("div");
        r.className = "caret";
        l.appendChild(r);
        c = new gui.Avatar(l, a);
        x.getSizer().appendChild(l);
        v = e.createStepIterator(f.getNode(), 0, d, e.getRootNode());
        s = core.Task.createRedrawTask(q);
        w = core.Task.createTimeoutTask(b, 500);
        s.triggerImmediate()
    })()
};
odf.TextSerializer = function() {
    function f(d) {
        var b = "",
            h = k.filter ? k.filter.acceptNode(d) : NodeFilter.FILTER_ACCEPT,
            n = d.nodeType,
            q;
        if ((h === NodeFilter.FILTER_ACCEPT || h === NodeFilter.FILTER_SKIP) && a.isTextContentContainingNode(d))
            for (q = d.firstChild; q;) b += f(q), q = q.nextSibling;
        h === NodeFilter.FILTER_ACCEPT && (n === Node.ELEMENT_NODE && a.isParagraph(d) ? b += "\n" : n === Node.TEXT_NODE && d.textContent && (b += d.textContent));
        return b
    }
    var k = this,
        a = odf.OdfUtils;
    this.filter = null;
    this.writeToString = function(a) {
        if (!a) return "";
        a = f(a);
        "\n" === a[a.length - 1] && (a = a.substr(0, a.length - 1));
        return a
    }
};
gui.MimeDataExporter = function() {
    var f;
    this.exportRangeToDataTransfer = function(k, a) {
        var d;
        d = a.startContainer.ownerDocument.createElement("span");
        d.appendChild(a.cloneContents());
        d = f.writeToString(d);
        try {
            k.setData("text/plain", d)
        } catch (b) {
            k.setData("Text", d)
        }
    };
    f = new odf.TextSerializer;
    f.filter = new odf.OdfNodeFilter
};
gui.Clipboard = function(f) {
    this.setDataFromRange = function(k, a) {
        var d, b = k.clipboardData;
        d = runtime.getWindow();
        !b && d && (b = d.clipboardData);
        b ? (d = !0, f.exportRangeToDataTransfer(b, a), k.preventDefault()) : d = !1;
        return d
    }
};
gui.SessionContext = function(f, k) {
    var a = f.getOdtDocument(),
        d = odf.OdfUtils;
    this.isLocalCursorWithinOwnAnnotation = function() {
        var b = a.getCursor(k),
            f;
        if (!b) return !1;
        f = b && b.getNode();
        b = a.getMember(k).getProperties().fullName;
        return (f = d.getParentAnnotation(f, a.getRootNode())) && d.getAnnotationCreator(f) === b ? !0 : !1
    }
};
gui.StyleSummary = function(f) {
    function k(a, d) {
        var k = a + "|" + d,
            m;
        b.hasOwnProperty(k) || (m = [], f.forEach(function(b) {
            b = (b = b.styleProperties[a]) && b[d]; - 1 === m.indexOf(b) && m.push(b)
        }), b[k] = m);
        return b[k]
    }

    function a(a, b, d) {
        return function() {
            var f = k(a, b);
            return d.length >= f.length && f.every(function(a) {
                return -1 !== d.indexOf(a)
            })
        }
    }

    function d(a, b) {
        var d = k(a, b);
        return 1 === d.length ? d[0] : void 0
    }
    var b = {};
    this.getPropertyValues = k;
    this.getCommonValue = d;
    this.isBold = a("style:text-properties", "fo:font-weight", ["bold"]);
    this.isItalic =
        a("style:text-properties", "fo:font-style", ["italic"]);
    this.hasUnderline = a("style:text-properties", "style:text-underline-style", ["solid"]);
    this.hasStrikeThrough = a("style:text-properties", "style:text-line-through-style", ["solid"]);
    this.fontSize = function() {
        var a = d("style:text-properties", "fo:font-size");
        return a && parseFloat(a)
    };
    this.fontName = function() {
        return d("style:text-properties", "style:font-name")
    };
    this.isAlignedLeft = a("style:paragraph-properties", "fo:text-align", ["left", "start"]);
    this.isAlignedCenter =
        a("style:paragraph-properties", "fo:text-align", ["center"]);
    this.isAlignedRight = a("style:paragraph-properties", "fo:text-align", ["right", "end"]);
    this.isAlignedJustified = a("style:paragraph-properties", "fo:text-align", ["justify"]);
    this.text = {
        isBold: this.isBold,
        isItalic: this.isItalic,
        hasUnderline: this.hasUnderline,
        hasStrikeThrough: this.hasStrikeThrough,
        fontSize: this.fontSize,
        fontName: this.fontName
    };
    this.paragraph = {
        isAlignedLeft: this.isAlignedLeft,
        isAlignedCenter: this.isAlignedCenter,
        isAlignedRight: this.isAlignedRight,
        isAlignedJustified: this.isAlignedJustified
    }
};
gui.DirectFormattingController = function(f, k, a, d, b, h, n) {
    function q() {
        return V.value().styleSummary
    }

    function m() {
        return V.value().enabledFeatures
    }

    function l(a) {
        var b;
        a.collapsed ? (b = a.startContainer, b.hasChildNodes() && a.startOffset < b.childNodes.length && (b = b.childNodes.item(a.startOffset)), a = [b]) : a = aa.getTextElements(a, !0, !1);
        return a
    }

    function r() {
        var b = J.getCursor(d),
            c = b && b.getSelectedRange(),
            e = [],
            e = [],
            g = !0,
            f = {
                directTextStyling: !0,
                directParagraphStyling: !0
            };
        c && (e = l(c), 0 === e.length && (e = [c.startContainer,
            c.endContainer
        ], g = !1), e = J.getFormatting().getAppliedStyles(e));
        void 0 !== e[0] && $ && (e[0].styleProperties = U.mergeObjects(e[0].styleProperties, $));
        !0 === k.getState(gui.CommonConstraints.EDIT.REVIEW_MODE) && (f.directTextStyling = f.directParagraphStyling = a.isLocalCursorWithinOwnAnnotation());
        f.directTextStyling && (f.directTextStyling = g && void 0 !== b && b.getSelectionType() === ops.OdtCursor.RangeSelection);
        return {
            enabledFeatures: f,
            appliedStyles: e,
            styleSummary: new gui.StyleSummary(e)
        }
    }

    function c(a, b) {
        var c = {};
        Object.keys(a).forEach(function(e) {
            var d =
                a[e](),
                g = b[e]();
            d !== g && (c[e] = g)
        });
        return c
    }

    function e() {
        var a, b;
        b = B.styleSummary;
        var e = V.value(),
            d = e.styleSummary,
            g = B.enabledFeatures,
            f = e.enabledFeatures;
        a = c(b.text, d.text);
        b = c(b.paragraph, d.paragraph);
        g = !(f.directTextStyling === g.directTextStyling && f.directParagraphStyling === g.directParagraphStyling);
        B = e;
        g && P.emit(gui.DirectFormattingController.enabledChanged, f);
        0 < Object.keys(a).length && P.emit(gui.DirectFormattingController.textStylingChanged, a);
        0 < Object.keys(b).length && P.emit(gui.DirectFormattingController.paragraphStylingChanged,
            b)
    }

    function p() {
        V.reset();
        e()
    }

    function g(a) {
        ("string" === typeof a ? a : a.getMemberId()) === d && V.reset()
    }

    function x() {
        V.reset()
    }

    function t(a) {
        var b = J.getCursor(d);
        a = a.paragraphElement;
        b && aa.getParagraphElement(b.getNode()) === a && V.reset()
    }

    function y(a, b) {
        b(!a());
        return !0
    }

    function v(a) {
        if (m().directTextStyling) {
            var b = J.getCursorSelection(d),
                c = {
                    "style:text-properties": a
                };
            0 !== b.length ? (a = new ops.OpApplyDirectStyling, a.init({
                memberid: d,
                position: b.position,
                length: b.length,
                setProperties: c
            }), f.enqueue([a])) : ($ =
                U.mergeObjects($ || {}, c), V.reset())
        }
    }

    function s(a, b) {
        var c = {};
        c[a] = b;
        v(c)
    }

    function w(a) {
        a = a.spec();
        $ && a.memberid === d && "SplitParagraph" !== a.optype && ($ = null, V.reset())
    }

    function u(a) {
        s("fo:font-weight", a ? "bold" : "normal")
    }

    function z(a) {
        s("fo:font-style", a ? "italic" : "normal")
    }

    function H(a) {
        s("style:text-underline-style", a ? "solid" : "none")
    }

    function C(a) {
        s("style:text-line-through-style", a ? "solid" : "none")
    }

    function D(a) {
        if (m().directParagraphStyling) {
            var c = J.getCursor(d).getSelectedRange(),
                c = aa.getParagraphElements(c),
                e = J.getFormatting(),
                g = [],
                h = {},
                l;
            c.forEach(function(c) {
                var f = J.convertDomPointToCursorStep(c, 0, Q),
                    p = c.getAttributeNS(odf.Namespaces.textns, "style-name"),
                    k;
                c = p ? h.hasOwnProperty(p) ? h[p] : void 0 : l;
                c || (c = b.generateStyleName(), p ? (h[p] = c, k = e.createDerivedStyleObject(p, "paragraph", {})) : (l = c, k = {}), k = a(k), p = new ops.OpAddStyle, p.init({
                    memberid: d,
                    styleName: c.toString(),
                    styleFamily: "paragraph",
                    isAutomaticStyle: !0,
                    setProperties: k
                }), g.push(p));
                p = new ops.OpSetParagraphStyle;
                p.init({
                    memberid: d,
                    styleName: c.toString(),
                    position: f
                });
                g.push(p)
            });
            f.enqueue(g)
        }
    }

    function I(a) {
        D(function(b) {
            return U.mergeObjects(b, a)
        })
    }

    function N(a) {
        I({
            "style:paragraph-properties": {
                "fo:text-align": a
            }
        })
    }

    function K(a, b) {
        var c = J.getFormatting().getDefaultTabStopDistance(),
            e = b["style:paragraph-properties"],
            d;
        e && (e = e["fo:margin-left"], d = aa.parseLength(e));
        return U.mergeObjects(b, {
            "style:paragraph-properties": {
                "fo:margin-left": d && d.unit === c.unit ? d.value + a * c.value + d.unit : a * c.value + c.unit
            }
        })
    }

    function G(a, b) {
        var c = l(a),
            c = 0 === c.length ? [a.startContainer] :
            c,
            c = J.getFormatting().getAppliedStyles(c),
            e = 0 < c.length ? c[0].styleProperties : void 0,
            d = J.getFormatting().getAppliedStylesForElement(b).styleProperties;
        if (!e || "text" !== e["style:family"] || !e["style:text-properties"]) return !1;
        if (!d || !d["style:text-properties"]) return !0;
        e = e["style:text-properties"];
        d = d["style:text-properties"];
        return !Object.keys(e).every(function(a) {
            return e[a] === d[a]
        })
    }

    function A() {}

    function Y() {
        return !1
    }
    var T = this,
        J = f.getOdtDocument(),
        U = new core.Utils,
        aa = odf.OdfUtils,
        P = new core.EventNotifier([gui.DirectFormattingController.enabledChanged,
            gui.DirectFormattingController.textStylingChanged, gui.DirectFormattingController.paragraphStylingChanged
        ]),
        E = odf.Namespaces.textns,
        Q = core.StepDirection.NEXT,
        $ = null,
        B, V;
    this.enabledFeatures = m;
    this.formatTextSelection = v;
    this.createCursorStyleOp = function(a, b, c) {
        var e = null,
            g = $;
        c && (g = (c = V.value().appliedStyles[0]) && c.styleProperties);
        g && g["style:text-properties"] && (e = new ops.OpApplyDirectStyling, e.init({
                memberid: d,
                position: a,
                length: b,
                setProperties: {
                    "style:text-properties": g["style:text-properties"]
                }
            }),
            $ = null, V.reset());
        return e
    };
    this.setBold = u;
    this.setItalic = z;
    this.setHasUnderline = H;
    this.setHasStrikethrough = C;
    this.setFontSize = function(a) {
        s("fo:font-size", a + "pt")
    };
    this.setFontName = function(a) {
        s("style:font-name", a)
    };
    this.getAppliedStyles = function() {
        return V.value().appliedStyles
    };
    this.toggleBold = y.bind(T, function() {
        return q().isBold()
    }, u);
    this.toggleItalic = y.bind(T, function() {
        return q().isItalic()
    }, z);
    this.toggleUnderline = y.bind(T, function() {
        return q().hasUnderline()
    }, H);
    this.toggleStrikethrough =
        y.bind(T, function() {
            return q().hasStrikeThrough()
        }, C);
    this.isBold = function() {
        return q().isBold()
    };
    this.isItalic = function() {
        return q().isItalic()
    };
    this.hasUnderline = function() {
        return q().hasUnderline()
    };
    this.hasStrikeThrough = function() {
        return q().hasStrikeThrough()
    };
    this.fontSize = function() {
        return q().fontSize()
    };
    this.fontName = function() {
        return q().fontName()
    };
    this.isAlignedLeft = function() {
        return q().isAlignedLeft()
    };
    this.isAlignedCenter = function() {
        return q().isAlignedCenter()
    };
    this.isAlignedRight =
        function() {
            return q().isAlignedRight()
        };
    this.isAlignedJustified = function() {
        return q().isAlignedJustified()
    };
    this.alignParagraphLeft = function() {
        N("left");
        return !0
    };
    this.alignParagraphCenter = function() {
        N("center");
        return !0
    };
    this.alignParagraphRight = function() {
        N("right");
        return !0
    };
    this.alignParagraphJustified = function() {
        N("justify");
        return !0
    };
    this.indent = function() {
        D(K.bind(null, 1));
        return !0
    };
    this.outdent = function() {
        D(K.bind(null, -1));
        return !0
    };
    this.createParagraphStyleOps = function(a) {
        if (!m().directParagraphStyling) return [];
        var c = J.getCursor(d),
            e = c.getSelectedRange(),
            g = [],
            f, h;
        c.hasForwardSelection() ? (f = c.getAnchorNode(), h = c.getNode()) : (f = c.getNode(), h = c.getAnchorNode());
        c = aa.getParagraphElement(h);
        runtime.assert(Boolean(c), "DirectFormattingController: Cursor outside paragraph");
        var l = c,
            p = [J.getPositionFilter(), J.createRootFilter(d)];
        if (!1 !== J.createStepIterator(e.endContainer, e.endOffset, p, l).nextStep()) return g;
        h !== f && (c = aa.getParagraphElement(f));
        if (!$ && !G(e, c)) return g;
        e = (e = V.value().appliedStyles[0]) && e.styleProperties;
        if (!e) return g;
        if (c = c.getAttributeNS(E, "style-name")) e = {
            "style:text-properties": e["style:text-properties"]
        }, e = J.getFormatting().createDerivedStyleObject(c, "paragraph", e);
        f = b.generateStyleName();
        c = new ops.OpAddStyle;
        c.init({
            memberid: d,
            styleName: f,
            styleFamily: "paragraph",
            isAutomaticStyle: !0,
            setProperties: e
        });
        g.push(c);
        c = new ops.OpSetParagraphStyle;
        c.init({
            memberid: d,
            styleName: f,
            position: a
        });
        g.push(c);
        return g
    };
    this.subscribe = function(a, b) {
        P.subscribe(a, b)
    };
    this.unsubscribe = function(a, b) {
        P.unsubscribe(a,
            b)
    };
    this.destroy = function(a) {
        J.unsubscribe(ops.Document.signalCursorAdded, g);
        J.unsubscribe(ops.Document.signalCursorRemoved, g);
        J.unsubscribe(ops.Document.signalCursorMoved, g);
        J.unsubscribe(ops.OdtDocument.signalParagraphStyleModified, x);
        J.unsubscribe(ops.OdtDocument.signalParagraphChanged, t);
        J.unsubscribe(ops.OdtDocument.signalOperationEnd, w);
        J.unsubscribe(ops.OdtDocument.signalProcessingBatchEnd, e);
        k.unsubscribe(gui.CommonConstraints.EDIT.REVIEW_MODE, p);
        a()
    };
    (function() {
        J.subscribe(ops.Document.signalCursorAdded,
            g);
        J.subscribe(ops.Document.signalCursorRemoved, g);
        J.subscribe(ops.Document.signalCursorMoved, g);
        J.subscribe(ops.OdtDocument.signalParagraphStyleModified, x);
        J.subscribe(ops.OdtDocument.signalParagraphChanged, t);
        J.subscribe(ops.OdtDocument.signalOperationEnd, w);
        J.subscribe(ops.OdtDocument.signalProcessingBatchEnd, e);
        k.subscribe(gui.CommonConstraints.EDIT.REVIEW_MODE, p);
        V = new core.LazyProperty(r);
        B = V.value();
        h || (T.formatTextSelection = A, T.setBold = A, T.setItalic = A, T.setHasUnderline = A, T.setHasStrikethrough =
            A, T.setFontSize = A, T.setFontName = A, T.toggleBold = Y, T.toggleItalic = Y, T.toggleUnderline = Y, T.toggleStrikethrough = Y);
        n || (T.alignParagraphCenter = A, T.alignParagraphJustified = A, T.alignParagraphLeft = A, T.alignParagraphRight = A, T.createParagraphStyleOps = function() {
            return []
        }, T.indent = A, T.outdent = A)
    })()
};
gui.DirectFormattingController.enabledChanged = "enabled/changed";
gui.DirectFormattingController.textStylingChanged = "textStyling/changed";
gui.DirectFormattingController.paragraphStylingChanged = "paragraphStyling/changed";
gui.DirectFormattingController.SelectionInfo = function() {};
gui.KeyboardHandler = function() {
    function f(a, d) {
        d || (d = k.None);
        switch (a) {
            case gui.KeyboardHandler.KeyCode.LeftMeta:
            case gui.KeyboardHandler.KeyCode.RightMeta:
            case gui.KeyboardHandler.KeyCode.MetaInMozilla:
                d |= k.Meta;
                break;
            case gui.KeyboardHandler.KeyCode.Ctrl:
                d |= k.Ctrl;
                break;
            case gui.KeyboardHandler.KeyCode.Alt:
                d |= k.Alt;
                break;
            case gui.KeyboardHandler.KeyCode.Shift:
                d |= k.Shift
        }
        return a + ":" + d
    }
    var k = gui.KeyboardHandler.Modifier,
        a = null,
        d = {};
    this.setDefault = function(b) {
        a = b
    };
    this.bind = function(a, h, k, q) {
        a = f(a,
            h);
        runtime.assert(q || !1 === d.hasOwnProperty(a), "tried to overwrite the callback handler of key combo: " + a);
        d[a] = k
    };
    this.unbind = function(a, h) {
        var k = f(a, h);
        delete d[k]
    };
    this.reset = function() {
        a = null;
        d = {}
    };
    this.handleEvent = function(b) {
        var h = b.keyCode,
            n = k.None;
        b.metaKey && (n |= k.Meta);
        b.ctrlKey && (n |= k.Ctrl);
        b.altKey && (n |= k.Alt);
        b.shiftKey && (n |= k.Shift);
        h = f(h, n);
        h = d[h];
        n = !1;
        h ? n = h() : null !== a && (n = a(b));
        n && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
    }
};
gui.KeyboardHandler.Modifier = {
    None: 0,
    Meta: 1,
    Ctrl: 2,
    Alt: 4,
    CtrlAlt: 6,
    Shift: 8,
    MetaShift: 9,
    CtrlShift: 10,
    AltShift: 12
};
gui.KeyboardHandler.KeyCode = {
    Backspace: 8,
    Tab: 9,
    Clear: 12,
    Enter: 13,
    Shift: 16,
    Ctrl: 17,
    Alt: 18,
    End: 35,
    Home: 36,
    Left: 37,
    Up: 38,
    Right: 39,
    Down: 40,
    Delete: 46,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    LeftMeta: 91,
    RightMeta: 93,
    MetaInMozilla: 224
};
gui.HyperlinkClickHandler = function(f, k, a) {
    function d() {
        var a = f();
        runtime.assert(Boolean(a.classList), "Document container has no classList element");
        a.classList.remove("webodf-inactiveLinks")
    }

    function b() {
        var a = f();
        runtime.assert(Boolean(a.classList), "Document container has no classList element");
        a.classList.add("webodf-inactiveLinks")
    }

    function h() {
        c.removeEventListener("focus", b, !1);
        p.forEach(function(b) {
            k.unbind(b.keyCode, b.modifier);
            a.unbind(b.keyCode, b.modifier)
        });
        p.length = 0
    }

    function n(e) {
        h();
        if (e !== q.None) {
            c.addEventListener("focus", b, !1);
            switch (e) {
                case q.Ctrl:
                    p.push({
                        keyCode: m.Ctrl,
                        modifier: q.None
                    });
                    break;
                case q.Meta:
                    p.push({
                        keyCode: m.LeftMeta,
                        modifier: q.None
                    }), p.push({
                        keyCode: m.RightMeta,
                        modifier: q.None
                    }), p.push({
                        keyCode: m.MetaInMozilla,
                        modifier: q.None
                    })
            }
            p.forEach(function(c) {
                k.bind(c.keyCode, c.modifier, d);
                a.bind(c.keyCode, c.modifier, b)
            })
        }
    }
    var q = gui.KeyboardHandler.Modifier,
        m = gui.KeyboardHandler.KeyCode,
        l = xmldom.XPath,
        r = odf.OdfUtils,
        c = runtime.getWindow(),
        e = q.None,
        p = [];
    runtime.assert(null !==
        c, "Expected to be run in an environment which has a global window, like a browser.");
    this.handleClick = function(a) {
        var b = a.target || a.srcElement,
            d, h;
        a.ctrlKey ? d = q.Ctrl : a.metaKey && (d = q.Meta);
        if (e === q.None || e === d) {
            a: {
                for (; null !== b;) {
                    if (r.isHyperlink(b)) break a;
                    if (r.isParagraph(b)) break;
                    b = b.parentNode
                }
                b = null
            }
            b && (b = r.getHyperlinkTarget(b), "" !== b && ("#" === b[0] ? (b = b.substring(1), d = f(), h = l.getODFElementsWithXPath(d, "//text:bookmark-start[@text:name='" + b + "']", odf.Namespaces.lookupNamespaceURI), 0 === h.length &&
                (h = l.getODFElementsWithXPath(d, "//text:bookmark[@text:name='" + b + "']", odf.Namespaces.lookupNamespaceURI)), 0 < h.length && h[0].scrollIntoView(!0)) : /^\s*(javascript|data):/.test(b) ? runtime.log("WARN:", "potentially malicious URL ignored") : c.open(b), a.preventDefault ? a.preventDefault() : a.returnValue = !1))
        }
    };
    this.setModifier = function(a) {
        e !== a && (runtime.assert(a === q.None || a === q.Ctrl || a === q.Meta, "Unsupported KeyboardHandler.Modifier value: " + a), e = a, e !== q.None ? b() : d(), n(e))
    };
    this.getModifier = function() {
        return e
    };
    this.destroy = function(a) {
        b();
        h();
        a()
    }
};
gui.EventManager = function(f) {
    function k(a) {
        function b(a, c, e) {
            var d, g = !1;
            d = "on" + c;
            a.attachEvent && (a.attachEvent(d, e), g = !0);
            !g && a.addEventListener && (a.addEventListener(c, e, !1), g = !0);
            g && !w[c] || !a.hasOwnProperty(d) || (a[d] = e)
        }

        function c(a, b, e) {
            var d = "on" + b;
            a.detachEvent && a.detachEvent(d, e);
            a.removeEventListener && a.removeEventListener(b, e, !1);
            a[d] === e && (a[d] = null)
        }

        function e(b) {
            if (-1 === g.indexOf(b)) {
                g.push(b);
                if (d.filters.every(function(a) {
                        return a(b)
                    })) try {
                    f.emit(a, b)
                } catch (c) {
                    runtime.log("Error occurred while processing " +
                        a + ":\n" + c.message + "\n" + c.stack)
                }
                runtime.setTimeout(function() {
                    g.splice(g.indexOf(b), 1)
                }, 0)
            }
        }
        var d = this,
            g = [],
            f = new core.EventNotifier([a]);
        this.filters = [];
        this.subscribe = function(b) {
            f.subscribe(a, b)
        };
        this.unsubscribe = function(b) {
            f.unsubscribe(a, b)
        };
        this.destroy = function() {
            c(s, a, e);
            c(C, a, e);
            c(D, a, e)
        };
        u[a] && b(s, a, e);
        b(C, a, e);
        b(D, a, e)
    }

    function a(a, b, c) {
        function e(b) {
            c(b, d, function(b) {
                b.type = a;
                g.emit(a, b)
            })
        }
        var d = {},
            g = new core.EventNotifier([a]);
        this.subscribe = function(b) {
            g.subscribe(a, b)
        };
        this.unsubscribe =
            function(b) {
                g.unsubscribe(a, b)
            };
        this.destroy = function() {
            b.forEach(function(a) {
                I.unsubscribe(a, e)
            })
        };
        (function() {
            b.forEach(function(a) {
                I.subscribe(a, e)
            })
        })()
    }

    function d(a) {
        runtime.clearTimeout(a);
        delete N[a]
    }

    function b(a, b) {
        var c = runtime.setTimeout(function() {
            a();
            d(c)
        }, b);
        N[c] = !0;
        return c
    }

    function h(a, c, e) {
        var g = a.touches.length,
            f = a.touches[0],
            h = c.timer;
        "touchmove" === a.type || "touchend" === a.type ? h && d(h) : "touchstart" === a.type && (1 !== g ? runtime.clearTimeout(h) : h = b(function() {
            e({
                clientX: f.clientX,
                clientY: f.clientY,
                pageX: f.pageX,
                pageY: f.pageY,
                target: a.target || a.srcElement || null,
                detail: 1
            })
        }, 400));
        c.timer = h
    }

    function n(a, b, c) {
        var e = a.touches[0],
            d = a.target || a.srcElement || null,
            g = b.target;
        1 !== a.touches.length || "touchend" === a.type ? g = null : "touchstart" === a.type && "webodf-draggable" === d.getAttribute("class") ? g = d : "touchmove" === a.type && g && (a.preventDefault(), a.stopPropagation(), c({
            clientX: e.clientX,
            clientY: e.clientY,
            pageX: e.pageX,
            pageY: e.pageY,
            target: g,
            detail: 1
        }));
        b.target = g
    }

    function q(a, b, c) {
        var e = a.target || a.srcElement ||
            null,
            d = b.dragging;
        "drag" === a.type ? d = !0 : "touchend" === a.type && d && (d = !1, a = a.changedTouches[0], c({
            clientX: a.clientX,
            clientY: a.clientY,
            pageX: a.pageX,
            pageY: a.pageY,
            target: e,
            detail: 1
        }));
        b.dragging = d
    }

    function m() {
        D.classList.add("webodf-touchEnabled");
        I.unsubscribe("touchstart", m)
    }

    function l(a) {
        var b = a.scrollX,
            c = a.scrollY;
        this.restore = function() {
            a.scrollX === b && a.scrollY === c || a.scrollTo(b, c)
        }
    }

    function r(a) {
        var b = a.scrollTop,
            c = a.scrollLeft;
        this.restore = function() {
            if (a.scrollTop !== b || a.scrollLeft !== c) a.scrollTop =
                b, a.scrollLeft = c
        }
    }

    function c(a, b) {
        var c = H[a] || z[a] || null;
        !c && b && (c = H[a] = new k(a));
        return c
    }

    function e(a, b) {
        c(a, !0).subscribe(b)
    }

    function p(a, b) {
        var e = c(a, !1);
        e && e.unsubscribe(b)
    }

    function g() {
        return f.getDOMDocument().activeElement === C
    }

    function x() {
        g() && C.blur();
        C.setAttribute("disabled", "true")
    }

    function t() {
        C.removeAttribute("disabled")
    }

    function y(a) {
        for (var b = []; a;)(a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight) && b.push(new r(a)), a = a.parentNode;
        b.push(new l(s));
        return b
    }

    function v() {
        var a;
        g() || (a = y(C), t(), C.focus(), a.forEach(function(a) {
            a.restore()
        }))
    }
    var s = runtime.getWindow(),
        w = {
            beforecut: !0,
            beforepaste: !0,
            longpress: !0,
            drag: !0,
            dragstop: !0
        },
        u = {
            mousedown: !0,
            mouseup: !0,
            focus: !0
        },
        z = {},
        H = {},
        C, D = f.getCanvas().getElement(),
        I = this,
        N = {};
    this.addFilter = function(a, b) {
        c(a, !0).filters.push(b)
    };
    this.removeFilter = function(a, b) {
        var e = c(a, !0),
            d = e.filters.indexOf(b); - 1 !== d && e.filters.splice(d, 1)
    };
    this.subscribe = e;
    this.unsubscribe = p;
    this.hasFocus = g;
    this.focus = v;
    this.getEventTrap = function() {
        return C
    };
    this.setEditing = function(a) {
        var b = g();
        b && C.blur();
        a ? C.removeAttribute("readOnly") : C.setAttribute("readOnly", "true");
        b && v()
    };
    this.destroy = function(a) {
        p("touchstart", m);
        Object.keys(N).forEach(function(a) {
            d(parseInt(a, 10))
        });
        N.length = 0;
        Object.keys(z).forEach(function(a) {
            z[a].destroy()
        });
        z = {};
        p("mousedown", x);
        p("mouseup", t);
        p("contextmenu", t);
        Object.keys(H).forEach(function(a) {
            H[a].destroy()
        });
        H = {};
        C.parentNode.removeChild(C);
        a()
    };
    (function() {
        var b = f.getOdfCanvas().getSizer(),
            c = b.ownerDocument;
        runtime.assert(Boolean(s),
            "EventManager requires a window object to operate correctly");
        C = c.createElement("textarea");
        C.id = "eventTrap";
        C.setAttribute("tabindex", "-1");
        C.setAttribute("readOnly", "true");
        C.setAttribute("rows", "1");
        b.appendChild(C);
        e("mousedown", x);
        e("mouseup", t);
        e("contextmenu", t);
        z.longpress = new a("longpress", ["touchstart", "touchmove", "touchend"], h);
        z.drag = new a("drag", ["touchstart", "touchmove", "touchend"], n);
        z.dragstop = new a("dragstop", ["drag", "touchend"], q);
        e("touchstart", m)
    })()
};
gui.IOSSafariSupport = function(f) {
    function k() {
        a.innerHeight !== a.outerHeight && (d.style.display = "none", runtime.requestAnimationFrame(function() {
            d.style.display = "block"
        }))
    }
    var a = runtime.getWindow(),
        d = f.getEventTrap();
    this.destroy = function(a) {
        f.unsubscribe("focus", k);
        d.removeAttribute("autocapitalize");
        d.style.WebkitTransform = "";
        a()
    };
    f.subscribe("focus", k);
    d.setAttribute("autocapitalize", "off");
    d.style.WebkitTransform = "translateX(-10000px)"
};
gui.HyperlinkController = function(f, k, a, d) {
    function b() {
        var b = !0;
        !0 === k.getState(gui.CommonConstraints.EDIT.REVIEW_MODE) && (b = a.isLocalCursorWithinOwnAnnotation());
        b !== l && (l = b, m.emit(gui.HyperlinkController.enabledChanged, l))
    }

    function h(a) {
        a.getMemberId() === d && b()
    }
    var n = odf.OdfUtils,
        q = f.getOdtDocument(),
        m = new core.EventNotifier([gui.HyperlinkController.enabledChanged]),
        l = !1;
    this.isEnabled = function() {
        return l
    };
    this.subscribe = function(a, b) {
        m.subscribe(a, b)
    };
    this.unsubscribe = function(a, b) {
        m.unsubscribe(a,
            b)
    };
    this.addHyperlink = function(a, b) {
        if (l) {
            var e = q.getCursorSelection(d),
                h = new ops.OpApplyHyperlink,
                g = [];
            if (0 === e.length || b) b = b || a, h = new ops.OpInsertText, h.init({
                memberid: d,
                position: e.position,
                text: b
            }), e.length = b.length, g.push(h);
            h = new ops.OpApplyHyperlink;
            h.init({
                memberid: d,
                position: e.position,
                length: e.length,
                hyperlink: a
            });
            g.push(h);
            f.enqueue(g)
        }
    };
    this.removeHyperlinks = function() {
        if (l) {
            var a = q.createPositionIterator(q.getRootNode()),
                b = q.getCursor(d).getSelectedRange(),
                e = n.getHyperlinkElements(b),
                h = b.collapsed && 1 === e.length,
                g = q.getDOMDocument().createRange(),
                k = [],
                m, y;
            0 !== e.length && (e.forEach(function(a) {
                g.selectNodeContents(a);
                m = q.convertDomToCursorRange({
                    anchorNode: g.startContainer,
                    anchorOffset: g.startOffset,
                    focusNode: g.endContainer,
                    focusOffset: g.endOffset
                });
                y = new ops.OpRemoveHyperlink;
                y.init({
                    memberid: d,
                    position: m.position,
                    length: m.length
                });
                k.push(y)
            }), h || (h = e[0], -1 === b.comparePoint(h, 0) && (g.setStart(h, 0), g.setEnd(b.startContainer, b.startOffset), m = q.convertDomToCursorRange({
                anchorNode: g.startContainer,
                anchorOffset: g.startOffset,
                focusNode: g.endContainer,
                focusOffset: g.endOffset
            }), 0 < m.length && (y = new ops.OpApplyHyperlink, y.init({
                memberid: d,
                position: m.position,
                length: m.length,
                hyperlink: n.getHyperlinkTarget(h)
            }), k.push(y))), e = e[e.length - 1], a.moveToEndOfNode(e), a = a.unfilteredDomOffset(), 1 === b.comparePoint(e, a) && (g.setStart(b.endContainer, b.endOffset), g.setEnd(e, a), m = q.convertDomToCursorRange({
                    anchorNode: g.startContainer,
                    anchorOffset: g.startOffset,
                    focusNode: g.endContainer,
                    focusOffset: g.endOffset
                }), 0 < m.length &&
                (y = new ops.OpApplyHyperlink, y.init({
                    memberid: d,
                    position: m.position,
                    length: m.length,
                    hyperlink: n.getHyperlinkTarget(e)
                }), k.push(y)))), f.enqueue(k), g.detach())
        }
    };
    this.destroy = function(a) {
        q.unsubscribe(ops.Document.signalCursorMoved, h);
        k.unsubscribe(gui.CommonConstraints.EDIT.REVIEW_MODE, b);
        a()
    };
    q.subscribe(ops.Document.signalCursorMoved, h);
    k.subscribe(gui.CommonConstraints.EDIT.REVIEW_MODE, b);
    b()
};
gui.HyperlinkController.enabledChanged = "enabled/changed";
gui.ImageController = function(f, k, a, d, b) {
    function h() {
        var b = !0;
        !0 === k.getState(gui.CommonConstraints.EDIT.REVIEW_MODE) && (b = a.isLocalCursorWithinOwnAnnotation());
        b !== p && (p = b, e.emit(gui.ImageController.enabledChanged, p))
    }

    function n(a) {
        a.getMemberId() === d && h()
    }
    var q = {
            "image/webp": ".webp",
            "image/gif": ".gif",
            "image/jpeg": ".jpg",
            "image/png": ".png"
        },
        m = odf.Namespaces.textns,
        l = f.getOdtDocument(),
        r = odf.OdfUtils,
        c = l.getFormatting(),
        e = new core.EventNotifier([gui.HyperlinkController.enabledChanged]),
        p = !1;
    this.isEnabled = function() {
        return p
    };
    this.subscribe = function(a, b) {
        e.subscribe(a, b)
    };
    this.unsubscribe = function(a, b) {
        e.unsubscribe(a, b)
    };
    this.insertImage = function(a, e, h, k) {
        if (p) {
            runtime.assert(0 < h && 0 < k, "Both width and height of the image should be greater than 0px.");
            k = {
                width: h,
                height: k
            };
            if (h = r.getParagraphElement(l.getCursor(d).getNode()).getAttributeNS(m, "style-name")) {
                h = c.getContentSize(h, "paragraph");
                var n = 1,
                    s = 1;
                k.width > h.width && (n = h.width / k.width);
                k.height > h.height && (s = h.height / k.height);
                h = Math.min(n, s);
                k = {
                    width: k.width * h,
                    height: k.height *
                        h
                }
            }
            h = k.width + "px";
            k = k.height + "px";
            var w = l.getOdfCanvas().odfContainer().rootElement.styles,
                n = a.toLowerCase(),
                s = q.hasOwnProperty(n) ? q[n] : null,
                u, n = [];
            runtime.assert(null !== s, "Image type is not supported: " + a);
            s = "Pictures/" + b.generateImageName() + s;
            u = new ops.OpSetBlob;
            u.init({
                memberid: d,
                filename: s,
                mimetype: a,
                content: e
            });
            n.push(u);
            c.getStyleElement("Graphics", "graphic", [w]) || (a = new ops.OpAddStyle, a.init({
                memberid: d,
                styleName: "Graphics",
                styleFamily: "graphic",
                isAutomaticStyle: !1,
                setProperties: {
                    "style:graphic-properties": {
                        "text:anchor-type": "paragraph",
                        "svg:x": "0cm",
                        "svg:y": "0cm",
                        "style:wrap": "dynamic",
                        "style:number-wrapped-paragraphs": "no-limit",
                        "style:wrap-contour": "false",
                        "style:vertical-pos": "top",
                        "style:vertical-rel": "paragraph",
                        "style:horizontal-pos": "center",
                        "style:horizontal-rel": "paragraph"
                    }
                }
            }), n.push(a));
            a = b.generateStyleName();
            e = new ops.OpAddStyle;
            e.init({
                memberid: d,
                styleName: a,
                styleFamily: "graphic",
                isAutomaticStyle: !0,
                setProperties: {
                    "style:parent-style-name": "Graphics",
                    "style:graphic-properties": {
                        "style:vertical-pos": "top",
                        "style:vertical-rel": "baseline",
                        "style:horizontal-pos": "center",
                        "style:horizontal-rel": "paragraph",
                        "fo:background-color": "transparent",
                        "style:background-transparency": "100%",
                        "style:shadow": "none",
                        "style:mirror": "none",
                        "fo:clip": "rect(0cm, 0cm, 0cm, 0cm)",
                        "draw:luminance": "0%",
                        "draw:contrast": "0%",
                        "draw:red": "0%",
                        "draw:green": "0%",
                        "draw:blue": "0%",
                        "draw:gamma": "100%",
                        "draw:color-inversion": "false",
                        "draw:image-opacity": "100%",
                        "draw:color-mode": "standard"
                    }
                }
            });
            n.push(e);
            u = new ops.OpInsertImage;
            u.init({
                memberid: d,
                position: l.getCursorPosition(d),
                filename: s,
                frameWidth: h,
                frameHeight: k,
                frameStyleName: a,
                frameName: b.generateFrameName()
            });
            n.push(u);
            f.enqueue(n)
        }
    };
    this.destroy = function(a) {
        l.unsubscribe(ops.Document.signalCursorMoved, n);
        k.unsubscribe(gui.CommonConstraints.EDIT.REVIEW_MODE, h);
        a()
    };
    l.subscribe(ops.Document.signalCursorMoved, n);
    k.subscribe(gui.CommonConstraints.EDIT.REVIEW_MODE, h);
    h()
};
gui.ImageController.enabledChanged = "enabled/changed";
gui.ImageSelector = function(f) {
    function k() {
        var a = f.getSizer(),
            h = b.createElement("div");
        h.id = "imageSelector";
        h.style.borderWidth = "1px";
        a.appendChild(h);
        d.forEach(function(a) {
            var d = b.createElement("div");
            d.className = a;
            h.appendChild(d)
        });
        return h
    }
    var a = odf.Namespaces.svgns,
        d = "topLeft topRight bottomRight bottomLeft topMiddle rightMiddle bottomMiddle leftMiddle".split(" "),
        b = f.getElement().ownerDocument,
        h = !1;
    this.select = function(d) {
        var q, m, l = b.getElementById("imageSelector");
        l || (l = k());
        h = !0;
        q = l.parentNode;
        m = d.getBoundingClientRect();
        var r = q.getBoundingClientRect(),
            c = f.getZoomLevel();
        q = (m.left - r.left) / c - 1;
        m = (m.top - r.top) / c - 1;
        l.style.display = "block";
        l.style.left = q + "px";
        l.style.top = m + "px";
        l.style.width = d.getAttributeNS(a, "width");
        l.style.height = d.getAttributeNS(a, "height")
    };
    this.clearSelection = function() {
        var a;
        h && (a = b.getElementById("imageSelector")) && (a.style.display = "none");
        h = !1
    };
    this.isSelectorElement = function(a) {
        var d = b.getElementById("imageSelector");
        return d ? a === d || a.parentNode === d : !1
    }
};
(function() {
    function f(f) {
        function a(a) {
            n = a.which && String.fromCharCode(a.which) === h;
            h = void 0;
            return !1 === n
        }

        function d() {
            n = !1
        }

        function b(a) {
            h = a.data;
            n = !1
        }
        var h, n = !1;
        this.destroy = function(h) {
            f.unsubscribe("textInput", d);
            f.unsubscribe("compositionend", b);
            f.removeFilter("keypress", a);
            h()
        };
        f.subscribe("textInput", d);
        f.subscribe("compositionend", b);
        f.addFilter("keypress", a)
    }
    gui.InputMethodEditor = function(k, a) {
        function d(a) {
            e && (a ? e.getNode().setAttributeNS(c, "composing", "true") : (e.getNode().removeAttributeNS(c,
                "composing"), x.textContent = ""))
        }

        function b() {
            y && (y = !1, d(!1), s.emit(gui.InputMethodEditor.signalCompositionEnd, {
                data: v
            }), v = "")
        }

        function h() {
            C || (C = !0, b(), e && e.getSelectedRange().collapsed ? p.value = "" : p.value = u.writeToString(e.getSelectedRange().cloneContents()), p.setSelectionRange(0, p.value.length), C = !1)
        }

        function n() {
            a.hasFocus() && t.trigger()
        }

        function q() {
            w = void 0;
            t.cancel();
            d(!0);
            y || s.emit(gui.InputMethodEditor.signalCompositionStart, {
                data: ""
            })
        }

        function m(a) {
            a = w = a.data;
            y = !0;
            v += a;
            t.trigger()
        }

        function l(a) {
            a.data !==
                w && (a = a.data, y = !0, v += a, t.trigger());
            w = void 0
        }

        function r() {
            x.textContent = p.value
        }
        var c = "urn:webodf:names:cursor",
            e = null,
            p = a.getEventTrap(),
            g = p.ownerDocument,
            x, t, y = !1,
            v = "",
            s = new core.EventNotifier([gui.InputMethodEditor.signalCompositionStart, gui.InputMethodEditor.signalCompositionEnd]),
            w, u, z = [],
            H, C = !1;
        this.subscribe = s.subscribe;
        this.unsubscribe = s.unsubscribe;
        this.registerCursor = function(b) {
            b.getMemberId() === k && (e = b, e.getNode().appendChild(x), b.subscribe(ops.OdtCursor.signalCursorUpdated, n), a.subscribe("input",
                r), a.subscribe("compositionupdate", r))
        };
        this.removeCursor = function(b) {
            e && b === k && (e.getNode().removeChild(x), e.unsubscribe(ops.OdtCursor.signalCursorUpdated, n), a.unsubscribe("input", r), a.unsubscribe("compositionupdate", r), e = null)
        };
        this.destroy = function(c) {
            a.unsubscribe("compositionstart", q);
            a.unsubscribe("compositionend", m);
            a.unsubscribe("textInput", l);
            a.unsubscribe("keypress", b);
            a.unsubscribe("focus", h);
            core.Async.destroyAll(H, c)
        };
        (function() {
            u = new odf.TextSerializer;
            u.filter = new odf.OdfNodeFilter;
            a.subscribe("compositionstart", q);
            a.subscribe("compositionend", m);
            a.subscribe("textInput", l);
            a.subscribe("keypress", b);
            a.subscribe("focus", h);
            z.push(new f(a));
            H = z.map(function(a) {
                return a.destroy
            });
            x = g.createElement("span");
            x.setAttribute("id", "composer");
            t = core.Task.createTimeoutTask(h, 1);
            H.push(t.destroy)
        })()
    };
    gui.InputMethodEditor.signalCompositionStart = "input/compositionstart";
    gui.InputMethodEditor.signalCompositionEnd = "input/compositionend"
})();
gui.MetadataController = function(f, k) {
    function a(a) {
        h.emit(gui.MetadataController.signalMetadataChanged, a)
    }

    function d(a) {
        var b = -1 === n.indexOf(a);
        b || runtime.log("Setting " + a + " is restricted.");
        return b
    }
    var b = f.getOdtDocument(),
        h = new core.EventNotifier([gui.MetadataController.signalMetadataChanged]),
        n = ["dc:creator", "dc:date", "meta:editing-cycles", "meta:editing-duration", "meta:document-statistic"];
    this.setMetadata = function(a, b) {
        var h = {},
            n = "",
            c;
        a && Object.keys(a).filter(d).forEach(function(b) {
            h[b] = a[b]
        });
        b && (n = b.filter(d).join(","));
        if (0 < n.length || 0 < Object.keys(h).length) c = new ops.OpUpdateMetadata, c.init({
            memberid: k,
            setProperties: h,
            removedProperties: 0 < n.length ? {
                attributes: n
            } : null
        }), f.enqueue([c])
    };
    this.getMetadata = function(a) {
        var d;
        runtime.assert("string" === typeof a, "Property must be a string");
        d = a.split(":");
        runtime.assert(2 === d.length, "Property must be a namespace-prefixed string");
        a = odf.Namespaces.lookupNamespaceURI(d[0]);
        runtime.assert(Boolean(a), "Prefix must be for an ODF namespace.");
        return b.getOdfCanvas().odfContainer().getMetadata(a,
            d[1])
    };
    this.subscribe = function(a, b) {
        h.subscribe(a, b)
    };
    this.unsubscribe = function(a, b) {
        h.unsubscribe(a, b)
    };
    this.destroy = function(d) {
        b.unsubscribe(ops.OdtDocument.signalMetadataUpdated, a);
        d()
    };
    b.subscribe(ops.OdtDocument.signalMetadataUpdated, a)
};
gui.MetadataController.signalMetadataChanged = "metadata/changed";
gui.PasteController = function(f, k, a, d) {
    function b() {
        q = !0 === k.getState(gui.CommonConstraints.EDIT.REVIEW_MODE) ? a.isLocalCursorWithinOwnAnnotation() : !0
    }

    function h(a) {
        a.getMemberId() === d && b()
    }
    var n = f.getOdtDocument(),
        q = !1,
        m = odf.Namespaces.textns,
        l = core.StepDirection.NEXT,
        r = odf.OdfUtils;
    this.isEnabled = function() {
        return q
    };
    this.paste = function(a) {
        if (q) {
            var b = n.getCursorPosition(d),
                h = n.getCursor(d).getNode(),
                h = r.getParagraphElement(h),
                g = h.getAttributeNS(m, "style-name") || "",
                k = b,
                t = [],
                y = n.convertDomPointToCursorStep(h,
                    0, l);
            a.replace(/\r/g, "").split("\n").forEach(function(a) {
                var b = new ops.OpInsertText,
                    c = new ops.OpSplitParagraph;
                b.init({
                    memberid: d,
                    position: k,
                    text: a,
                    moveCursor: !0
                });
                t.push(b);
                k += a.length;
                c.init({
                    memberid: d,
                    position: k,
                    paragraphStyleName: g,
                    sourceParagraphPosition: y,
                    moveCursor: !0
                });
                t.push(c);
                y = k += 1
            });
            t.pop();
            f.enqueue(t)
        }
    };
    this.destroy = function(a) {
        n.unsubscribe(ops.Document.signalCursorMoved, h);
        k.unsubscribe(gui.CommonConstraints.EDIT.REVIEW_MODE, b);
        a()
    };
    n.subscribe(ops.Document.signalCursorMoved, h);
    k.subscribe(gui.CommonConstraints.EDIT.REVIEW_MODE, b);
    b()
};
gui.ClosestXOffsetScanner = function(f) {
    function k(a) {
        return null !== a && void 0 !== b ? Math.abs(a - f) > b : !1
    }

    function a(a) {
        null !== a && !1 === k(a) && (b = Math.abs(a - f))
    }
    var d = this,
        b, h = gui.StepInfo.VisualDirection.LEFT_TO_RIGHT;
    this.token = void 0;
    this.process = function(b, f, m) {
        var l, r;
        b.visualDirection === h ? (l = f && f.right, r = m && m.left) : (l = f && f.left, r = m && m.right);
        if (k(l) || k(r)) return !0;
        if (f || m) a(l), a(r), d.token = b.token;
        return !1
    }
};
gui.LineBoundaryScanner = function() {
    var f = this,
        k = null;
    this.token = void 0;
    this.process = function(a, d, b) {
        var h;
        if (h = b)
            if (k) {
                var n = k;
                h = Math.min(n.bottom - n.top, b.bottom - b.top);
                var q = Math.max(n.top, b.top),
                    n = Math.min(n.bottom, b.bottom) - q;
                h = 0.4 >= (0 < h ? n / h : 0)
            } else h = !1;
        !d || b && !h || (f.token = a.token);
        if (h) return !0;
        k = (a = k) && d ? {
            left: Math.min(a.left, d.left),
            right: Math.max(a.right, d.right),
            top: Math.min(a.top, d.top),
            bottom: Math.min(a.bottom, d.bottom)
        } : a || d;
        return !1
    }
};
gui.ParagraphBoundaryScanner = function() {
    var f = this,
        k = !1,
        a, d = odf.OdfUtils;
    this.token = void 0;
    this.process = function(b) {
        var h = d.getParagraphElement(b.container());
        k || (a = h, k = !0);
        if (a !== h) return !0;
        f.token = b.token;
        return !1
    }
};
odf.WordBoundaryFilter = function(f, k) {
    function a(a, b, c) {
        for (var e = null, d = f.getRootNode(), h; a !== d && null !== a && null === e;) h = 0 > b ? a.previousSibling : a.nextSibling, c(h) === NodeFilter.FILTER_ACCEPT && (e = h), a = a.parentNode;
        return e
    }

    function d(a, c) {
        var e;
        return null === a ? p.NO_NEIGHBOUR : n.isCharacterElement(a) ? p.SPACE_CHAR : a.nodeType === b || n.isTextSpan(a) || n.isHyperlink(a) ? (e = a.textContent.charAt(c()), m.test(e) ? p.SPACE_CHAR : q.test(e) ? p.PUNCTUATION_CHAR : p.WORD_CHAR) : p.OTHER
    }
    var b = Node.TEXT_NODE,
        h = Node.ELEMENT_NODE,
        n = odf.OdfUtils,
        q = /[!-#%-*,-\/:-;?-@\[-\]_{}\u00a1\u00ab\u00b7\u00bb\u00bf;\u00b7\u055a-\u055f\u0589-\u058a\u05be\u05c0\u05c3\u05c6\u05f3-\u05f4\u0609-\u060a\u060c-\u060d\u061b\u061e-\u061f\u066a-\u066d\u06d4\u0700-\u070d\u07f7-\u07f9\u0964-\u0965\u0970\u0df4\u0e4f\u0e5a-\u0e5b\u0f04-\u0f12\u0f3a-\u0f3d\u0f85\u0fd0-\u0fd4\u104a-\u104f\u10fb\u1361-\u1368\u166d-\u166e\u169b-\u169c\u16eb-\u16ed\u1735-\u1736\u17d4-\u17d6\u17d8-\u17da\u1800-\u180a\u1944-\u1945\u19de-\u19df\u1a1e-\u1a1f\u1b5a-\u1b60\u1c3b-\u1c3f\u1c7e-\u1c7f\u2000-\u206e\u207d-\u207e\u208d-\u208e\u3008-\u3009\u2768-\u2775\u27c5-\u27c6\u27e6-\u27ef\u2983-\u2998\u29d8-\u29db\u29fc-\u29fd\u2cf9-\u2cfc\u2cfe-\u2cff\u2e00-\u2e7e\u3000-\u303f\u30a0\u30fb\ua60d-\ua60f\ua673\ua67e\ua874-\ua877\ua8ce-\ua8cf\ua92e-\ua92f\ua95f\uaa5c-\uaa5f\ufd3e-\ufd3f\ufe10-\ufe19\ufe30-\ufe52\ufe54-\ufe61\ufe63\ufe68\ufe6a-\ufe6b\uff01-\uff03\uff05-\uff0a\uff0c-\uff0f\uff1a-\uff1b\uff1f-\uff20\uff3b-\uff3d\uff3f\uff5b\uff5d\uff5f-\uff65]|\ud800[\udd00-\udd01\udf9f\udfd0]|\ud802[\udd1f\udd3f\ude50-\ude58]|\ud809[\udc00-\udc7e]/,
        m = /\s/,
        l = core.PositionFilter.FilterResult.FILTER_ACCEPT,
        r = core.PositionFilter.FilterResult.FILTER_REJECT,
        c = odf.WordBoundaryFilter.IncludeWhitespace.TRAILING,
        e = odf.WordBoundaryFilter.IncludeWhitespace.LEADING,
        p = {
            NO_NEIGHBOUR: 0,
            SPACE_CHAR: 1,
            PUNCTUATION_CHAR: 2,
            WORD_CHAR: 3,
            OTHER: 4
        };
    this.acceptPosition = function(b) {
        var f = b.container(),
            n = b.leftNode(),
            m = b.rightNode(),
            q = b.unfilteredDomOffset,
            s = function() {
                return b.unfilteredDomOffset() - 1
            };
        f.nodeType === h && (null === m && (m = a(f, 1, b.getNodeFilter())), null === n && (n =
            a(f, -1, b.getNodeFilter())));
        f !== m && (q = function() {
            return 0
        });
        f !== n && null !== n && (s = function() {
            return n.textContent.length - 1
        });
        f = d(n, s);
        m = d(m, q);
        return f === p.WORD_CHAR && m === p.WORD_CHAR || f === p.PUNCTUATION_CHAR && m === p.PUNCTUATION_CHAR || k === c && f !== p.NO_NEIGHBOUR && m === p.SPACE_CHAR || k === e && f === p.SPACE_CHAR && m !== p.NO_NEIGHBOUR ? r : l
    }
};
odf.WordBoundaryFilter.IncludeWhitespace = {
    None: 0,
    TRAILING: 1,
    LEADING: 2
};
gui.SelectionController = function(f, k) {
    function a(a) {
        var b = a.spec();
        if (a.isEdit || b.memberid === k) H = void 0, C.cancel()
    }

    function d() {
        var a = t.getCursor(k).getNode();
        return t.createStepIterator(a, 0, [s, u], t.getRootElement(a))
    }

    function b(a, b, c) {
        c = new odf.WordBoundaryFilter(t, c);
        var e = t.getRootElement(a) || t.getRootNode(),
            d = t.createRootFilter(e);
        return t.createStepIterator(a, b, [s, d, c], e)
    }

    function h(a, b) {
        return b ? {
            anchorNode: a.startContainer,
            anchorOffset: a.startOffset,
            focusNode: a.endContainer,
            focusOffset: a.endOffset
        } : {
            anchorNode: a.endContainer,
            anchorOffset: a.endOffset,
            focusNode: a.startContainer,
            focusOffset: a.startOffset
        }
    }

    function n(a, b, c) {
        var e = new ops.OpMoveCursor;
        e.init({
            memberid: k,
            position: a,
            length: b || 0,
            selectionType: c
        });
        return e
    }

    function q(a, b, c) {
        var e;
        e = t.getCursor(k);
        e = h(e.getSelectedRange(), e.hasForwardSelection());
        e.focusNode = a;
        e.focusOffset = b;
        c || (e.anchorNode = e.focusNode, e.anchorOffset = e.focusOffset);
        a = t.convertDomToCursorRange(e);
        f.enqueue([n(a.position, a.length)])
    }

    function m(a) {
        var c;
        c = b(a.startContainer,
            a.startOffset, D);
        c.roundToPreviousStep() && a.setStart(c.container(), c.offset());
        c = b(a.endContainer, a.endOffset, I);
        c.roundToNextStep() && a.setEnd(c.container(), c.offset())
    }

    function l(a) {
        var b = v.getParagraphElements(a),
            c = b[0],
            b = b[b.length - 1];
        c && a.setStart(c, 0);
        b && (v.isParagraph(a.endContainer) && 0 === a.endOffset ? a.setEndBefore(b) : a.setEnd(b, b.childNodes.length))
    }

    function r(a, b, c, e) {
        var d, f;
        e ? (d = c.startContainer, f = c.startOffset) : (d = c.endContainer, f = c.endOffset);
        y.containsNode(a, d) || (f = 0 > y.comparePoints(a,
            0, d, f) ? 0 : a.childNodes.length, d = a);
        a = t.createStepIterator(d, f, b, v.getParagraphElement(d) || a);
        a.roundToClosestStep() || runtime.assert(!1, "No step found in requested range");
        e ? c.setStart(a.container(), a.offset()) : c.setEnd(a.container(), a.offset())
    }

    function c(a, b) {
        var c = d();
        c.advanceStep(a) && q(c.container(), c.offset(), b)
    }

    function e(a, b) {
        var c, e = H,
            f = [new gui.LineBoundaryScanner, new gui.ParagraphBoundaryScanner];
        void 0 === e && z && (e = z());
        isNaN(e) || (c = d(), w.moveToFilteredStep(c, a, f) && c.advanceStep(a) && (f = [new gui.ClosestXOffsetScanner(e),
            new gui.LineBoundaryScanner, new gui.ParagraphBoundaryScanner
        ], w.moveToFilteredStep(c, a, f) && (q(c.container(), c.offset(), b), H = e, C.restart())))
    }

    function p(a, b) {
        var c = d(),
            e = [new gui.LineBoundaryScanner, new gui.ParagraphBoundaryScanner];
        w.moveToFilteredStep(c, a, e) && q(c.container(), c.offset(), b)
    }

    function g(a, c) {
        var e = t.getCursor(k),
            e = h(e.getSelectedRange(), e.hasForwardSelection()),
            e = b(e.focusNode, e.focusOffset, D);
        e.advanceStep(a) && q(e.container(), e.offset(), c)
    }

    function x(a, b, c) {
        var e = !1,
            d = t.getCursor(k),
            d = h(d.getSelectedRange(), d.hasForwardSelection()),
            e = t.getRootElement(d.focusNode);
        runtime.assert(Boolean(e), "SelectionController: Cursor outside root");
        d = t.createStepIterator(d.focusNode, d.focusOffset, [s, u], e);
        d.roundToClosestStep();
        d.advanceStep(a) && (c = c(d.container())) && (a === N ? (d.setPosition(c, 0), e = d.roundToNextStep()) : (d.setPosition(c, c.childNodes.length), e = d.roundToPreviousStep()), e && q(d.container(), d.offset(), b))
    }
    var t = f.getOdtDocument(),
        y = core.DomUtils,
        v = odf.OdfUtils,
        s = t.getPositionFilter(),
        w = new gui.GuiStepUtils,
        u = t.createRootFilter(k),
        z = null,
        H, C, D = odf.WordBoundaryFilter.IncludeWhitespace.TRAILING,
        I = odf.WordBoundaryFilter.IncludeWhitespace.LEADING,
        N = core.StepDirection.PREVIOUS,
        K = core.StepDirection.NEXT;
    this.selectionToRange = function(a) {
        var b = 0 <= y.comparePoints(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset),
            c = a.focusNode.ownerDocument.createRange();
        b ? (c.setStart(a.anchorNode, a.anchorOffset), c.setEnd(a.focusNode, a.focusOffset)) : (c.setStart(a.focusNode, a.focusOffset), c.setEnd(a.anchorNode,
            a.anchorOffset));
        return {
            range: c,
            hasForwardSelection: b
        }
    };
    this.rangeToSelection = h;
    this.selectImage = function(a) {
        var b = t.getRootElement(a),
            c = t.createRootFilter(b),
            b = t.createStepIterator(a, 0, [c, t.getPositionFilter()], b),
            e;
        b.roundToPreviousStep() || runtime.assert(!1, "No walkable position before frame");
        c = b.container();
        e = b.offset();
        b.setPosition(a, a.childNodes.length);
        b.roundToNextStep() || runtime.assert(!1, "No walkable position after frame");
        a = t.convertDomToCursorRange({
            anchorNode: c,
            anchorOffset: e,
            focusNode: b.container(),
            focusOffset: b.offset()
        });
        a = n(a.position, a.length, ops.OdtCursor.RegionSelection);
        f.enqueue([a])
    };
    this.expandToWordBoundaries = m;
    this.expandToParagraphBoundaries = l;
    this.selectRange = function(a, b, c) {
        var e = t.getOdfCanvas().getElement(),
            d, g = [s];
        d = y.containsNode(e, a.startContainer);
        e = y.containsNode(e, a.endContainer);
        if (d || e)
            if (d && e && (2 === c ? m(a) : 3 <= c && l(a)), (c = b ? t.getRootElement(a.startContainer) : t.getRootElement(a.endContainer)) || (c = t.getRootNode()), g.push(t.createRootFilter(c)), r(c, g, a, !0), r(c, g, a, !1), a =
                h(a, b), b = t.convertDomToCursorRange(a), a = t.getCursorSelection(k), b.position !== a.position || b.length !== a.length) a = n(b.position, b.length, ops.OdtCursor.RangeSelection), f.enqueue([a])
    };
    this.moveCursorToLeft = function() {
        c(N, !1);
        return !0
    };
    this.moveCursorToRight = function() {
        c(K, !1);
        return !0
    };
    this.extendSelectionToLeft = function() {
        c(N, !0);
        return !0
    };
    this.extendSelectionToRight = function() {
        c(K, !0);
        return !0
    };
    this.setCaretXPositionLocator = function(a) {
        z = a
    };
    this.moveCursorUp = function() {
        e(N, !1);
        return !0
    };
    this.moveCursorDown =
        function() {
            e(K, !1);
            return !0
        };
    this.extendSelectionUp = function() {
        e(N, !0);
        return !0
    };
    this.extendSelectionDown = function() {
        e(K, !0);
        return !0
    };
    this.moveCursorBeforeWord = function() {
        g(N, !1);
        return !0
    };
    this.moveCursorPastWord = function() {
        g(K, !1);
        return !0
    };
    this.extendSelectionBeforeWord = function() {
        g(N, !0);
        return !0
    };
    this.extendSelectionPastWord = function() {
        g(K, !0);
        return !0
    };
    this.moveCursorToLineStart = function() {
        p(N, !1);
        return !0
    };
    this.moveCursorToLineEnd = function() {
        p(K, !1);
        return !0
    };
    this.extendSelectionToLineStart =
        function() {
            p(N, !0);
            return !0
        };
    this.extendSelectionToLineEnd = function() {
        p(K, !0);
        return !0
    };
    this.extendSelectionToParagraphStart = function() {
        x(N, !0, v.getParagraphElement);
        return !0
    };
    this.extendSelectionToParagraphEnd = function() {
        x(K, !0, v.getParagraphElement);
        return !0
    };
    this.moveCursorToParagraphStart = function() {
        x(N, !1, v.getParagraphElement);
        return !0
    };
    this.moveCursorToParagraphEnd = function() {
        x(K, !1, v.getParagraphElement);
        return !0
    };
    this.moveCursorToDocumentStart = function() {
        x(N, !1, t.getRootElement);
        return !0
    };
    this.moveCursorToDocumentEnd = function() {
        x(K, !1, t.getRootElement);
        return !0
    };
    this.extendSelectionToDocumentStart = function() {
        x(N, !0, t.getRootElement);
        return !0
    };
    this.extendSelectionToDocumentEnd = function() {
        x(K, !0, t.getRootElement);
        return !0
    };
    this.extendSelectionToEntireDocument = function() {
        var a = t.getCursor(k),
            a = t.getRootElement(a.getNode()),
            b, c, e;
        runtime.assert(Boolean(a), "SelectionController: Cursor outside root");
        e = t.createStepIterator(a, 0, [s, u], a);
        e.roundToClosestStep();
        b = e.container();
        c = e.offset();
        e.setPosition(a, a.childNodes.length);
        e.roundToClosestStep();
        a = t.convertDomToCursorRange({
            anchorNode: b,
            anchorOffset: c,
            focusNode: e.container(),
            focusOffset: e.offset()
        });
        f.enqueue([n(a.position, a.length)]);
        return !0
    };
    this.destroy = function(b) {
        t.unsubscribe(ops.OdtDocument.signalOperationStart, a);
        core.Async.destroyAll([C.destroy], b)
    };
    (function() {
        C = core.Task.createTimeoutTask(function() {
            H = void 0
        }, 2E3);
        t.subscribe(ops.OdtDocument.signalOperationStart, a)
    })()
};
gui.TextController = function(f, k, a, d, b, h) {
    function n() {
        x = !0 === k.getState(gui.CommonConstraints.EDIT.REVIEW_MODE) ? a.isLocalCursorWithinOwnAnnotation() : !0
    }

    function q(a) {
        a.getMemberId() === d && n()
    }

    function m(a, b, c) {
        var d = [e.getPositionFilter()];
        c && d.push(e.createRootFilter(a.startContainer));
        c = e.createStepIterator(a.startContainer, a.startOffset, d, b);
        c.roundToClosestStep() || runtime.assert(!1, "No walkable step found in paragraph element at range start");
        b = e.convertDomPointToCursorStep(c.container(), c.offset());
        a.collapsed ? a = b : (c.setPosition(a.endContainer, a.endOffset), c.roundToClosestStep() || runtime.assert(!1, "No walkable step found in paragraph element at range end"), a = e.convertDomPointToCursorStep(c.container(), c.offset()));
        return {
            position: b,
            length: a - b
        }
    }

    function l(a) {
        var b, c, e, f = p.getParagraphElements(a),
            h = a.cloneRange(),
            l = [];
        b = f[0];
        1 < f.length && (p.hasNoODFContent(b) && (b = f[f.length - 1]), c = b.getAttributeNS(odf.Namespaces.textns, "style-name") || "");
        f.forEach(function(b, f) {
            var k, p;
            h.setStart(b, 0);
            h.collapse(!0);
            k = m(h, b, !1).position;
            0 < f && (p = new ops.OpMergeParagraph, p.init({
                memberid: d,
                paragraphStyleName: c,
                destinationStartPosition: e,
                sourceStartPosition: k,
                moveCursor: 1 === f
            }), l.unshift(p));
            e = k;
            h.selectNodeContents(b);
            if (k = g.rangeIntersection(h, a)) k = m(k, b, !0), 0 < k.length && (p = new ops.OpRemoveText, p.init({
                memberid: d,
                position: k.position,
                length: k.length
            }), l.unshift(p))
        });
        return l
    }

    function r(a) {
        0 > a.length && (a.position += a.length, a.length = -a.length);
        return a
    }

    function c(a) {
        if (!x) return !1;
        var b, c = e.getCursor(d).getSelectedRange().cloneRange(),
            g = r(e.getCursorSelection(d)),
            h;
        if (0 === g.length) {
            g = void 0;
            b = e.getCursor(d).getNode();
            h = e.getRootElement(b);
            var k = [e.getPositionFilter(), e.createRootFilter(h)];
            h = e.createStepIterator(b, 0, k, h);
            h.roundToClosestStep() && (a ? h.nextStep() : h.previousStep()) && (g = r(e.convertDomToCursorRange({
                anchorNode: b,
                anchorOffset: 0,
                focusNode: h.container(),
                focusOffset: h.offset()
            })), a ? (c.setStart(b, 0), c.setEnd(h.container(), h.offset())) : (c.setStart(h.container(), h.offset()), c.setEnd(b, 0)))
        }
        g && f.enqueue(l(c));
        return void 0 !==
            g
    }
    var e = f.getOdtDocument(),
        p = odf.OdfUtils,
        g = core.DomUtils,
        x = !1,
        t = odf.Namespaces.textns,
        y = core.StepDirection.NEXT;
    this.isEnabled = function() {
        return x
    };
    this.enqueueParagraphSplittingOps = function() {
        if (!x) return !1;
        var a = e.getCursor(d),
            b = a.getSelectedRange(),
            c = r(e.getCursorSelection(d)),
            g = [],
            a = p.getParagraphElement(a.getNode()),
            k = a.getAttributeNS(t, "style-name") || "";
        0 < c.length && (g = g.concat(l(b)));
        b = new ops.OpSplitParagraph;
        b.init({
            memberid: d,
            position: c.position,
            paragraphStyleName: k,
            sourceParagraphPosition: e.convertDomPointToCursorStep(a,
                0, y),
            moveCursor: !0
        });
        g.push(b);
        h && (c = h(c.position + 1), g = g.concat(c));
        f.enqueue(g);
        return !0
    };
    this.removeTextByBackspaceKey = function() {
        return c(!1)
    };
    this.removeTextByDeleteKey = function() {
        return c(!0)
    };
    this.removeCurrentSelection = function() {
        if (!x) return !1;
        var a = e.getCursor(d).getSelectedRange();
        f.enqueue(l(a));
        return !0
    };
    this.insertText = function(a) {
        if (x) {
            var c = e.getCursor(d).getSelectedRange(),
                g = r(e.getCursorSelection(d)),
                h = [],
                k = !1;
            0 < g.length && (h = h.concat(l(c)), k = !0);
            c = new ops.OpInsertText;
            c.init({
                memberid: d,
                position: g.position,
                text: a,
                moveCursor: !0
            });
            h.push(c);
            b && (a = b(g.position, a.length, k)) && h.push(a);
            f.enqueue(h)
        }
    };
    this.destroy = function(a) {
        e.unsubscribe(ops.Document.signalCursorMoved, q);
        k.unsubscribe(gui.CommonConstraints.EDIT.REVIEW_MODE, n);
        a()
    };
    e.subscribe(ops.Document.signalCursorMoved, q);
    k.subscribe(gui.CommonConstraints.EDIT.REVIEW_MODE, n);
    n()
};
gui.UndoManager = function() {};
gui.UndoManager.prototype.subscribe = function(f, k) {};
gui.UndoManager.prototype.unsubscribe = function(f, k) {};
gui.UndoManager.prototype.setDocument = function(f) {};
gui.UndoManager.prototype.setInitialState = function() {};
gui.UndoManager.prototype.initialize = function() {};
gui.UndoManager.prototype.purgeInitialState = function() {};
gui.UndoManager.prototype.setPlaybackFunction = function(f) {};
gui.UndoManager.prototype.hasUndoStates = function() {};
gui.UndoManager.prototype.hasRedoStates = function() {};
gui.UndoManager.prototype.moveForward = function(f) {};
gui.UndoManager.prototype.moveBackward = function(f) {};
gui.UndoManager.prototype.onOperationExecuted = function(f) {};
gui.UndoManager.prototype.isDocumentModified = function() {};
gui.UndoManager.prototype.setDocumentModified = function(f) {};
gui.UndoManager.signalUndoStackChanged = "undoStackChanged";
gui.UndoManager.signalUndoStateCreated = "undoStateCreated";
gui.UndoManager.signalUndoStateModified = "undoStateModified";
gui.UndoManager.signalDocumentModifiedChanged = "documentModifiedChanged";
gui.SessionControllerOptions = function() {
    this.annotationsEnabled = this.directParagraphStylingEnabled = this.directTextStylingEnabled = !1
};
(function() {
    var f = core.PositionFilter.FilterResult.FILTER_ACCEPT;
    gui.SessionController = function(k, a, d, b) {
        function h(a) {
            return a.target || a.srcElement || null
        }

        function n(a, b) {
            var c = J.getDOMDocument(),
                e = null;
            c.caretRangeFromPoint ? (c = c.caretRangeFromPoint(a, b), e = {
                container: c.startContainer,
                offset: c.startOffset
            }) : c.caretPositionFromPoint && (c = c.caretPositionFromPoint(a, b)) && c.offsetNode && (e = {
                container: c.offsetNode,
                offset: c.offset
            });
            return e
        }

        function q(b) {
            var c = J.getCursor(a).getSelectedRange();
            c.collapsed ?
                b.preventDefault() : $.setDataFromRange(b, c) ? fa.removeCurrentSelection() : runtime.log("Cut operation failed")
        }

        function m() {
            return !1 !== J.getCursor(a).getSelectedRange().collapsed
        }

        function l(b) {
            var c = J.getCursor(a).getSelectedRange();
            c.collapsed ? b.preventDefault() : $.setDataFromRange(b, c) || runtime.log("Copy operation failed")
        }

        function r(a) {
            var b;
            T.clipboardData && T.clipboardData.getData ? b = T.clipboardData.getData("Text") : a.clipboardData && a.clipboardData.getData && (b = a.clipboardData.getData("text/plain"));
            b && (fa.removeCurrentSelection(), ga.paste(b));
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        }

        function c() {
            return !1
        }

        function e(a) {
            if (S) S.onOperationExecuted(a)
        }

        function p(a) {
            J.emit(ops.OdtDocument.signalUndoStackChanged, a)
        }

        function g() {
            var a;
            return S ? (a = M.hasFocus(), S.moveBackward(1), a && M.focus(), !0) : !1
        }

        function x() {
            var a;
            return S ? (a = M.hasFocus(), S.moveForward(1), a && M.focus(), !0) : !1
        }

        function t(b) {
            var c = J.getCursor(a).getSelectedRange(),
                e = h(b).getAttribute("end");
            c && e && (b = n(b.clientX, b.clientY)) &&
                (ia.setUnfilteredPosition(b.container, b.offset), R.acceptPosition(ia) === f && (c = c.cloneRange(), "left" === e ? c.setStart(ia.container(), ia.unfilteredDomOffset()) : c.setEnd(ia.container(), ia.unfilteredDomOffset()), d.setSelectedRange(c, "right" === e), J.emit(ops.Document.signalCursorMoved, d)))
        }

        function y() {
            W.selectRange(d.getSelectedRange(), d.hasForwardSelection(), 1)
        }

        function v() {
            var a = T.getSelection(),
                b = 0 < a.rangeCount && W.selectionToRange(a);
            Z && b && (X = !0, ka.clearSelection(), ia.setUnfilteredPosition(a.focusNode,
                a.focusOffset), R.acceptPosition(ia) === f && (2 === na ? W.expandToWordBoundaries(b.range) : 3 <= na && W.expandToParagraphBoundaries(b.range), d.setSelectedRange(b.range, b.hasForwardSelection), J.emit(ops.Document.signalCursorMoved, d)))
        }

        function s(b) {
            var c = h(b),
                e = J.getCursor(a);
            if (Z = null !== c && P.containsNode(J.getOdfCanvas().getElement(), c)) X = !1, c = J.getRootElement(c) || J.getRootNode(), R = J.createRootFilter(c), na = 0 === b.button ? b.detail : 0, e && b.shiftKey ? T.getSelection().collapse(e.getAnchorNode(), 0) : (b = T.getSelection(),
                c = e.getSelectedRange(), b.extend ? e.hasForwardSelection() ? (b.collapse(c.startContainer, c.startOffset), b.extend(c.endContainer, c.endOffset)) : (b.collapse(c.endContainer, c.endOffset), b.extend(c.startContainer, c.startOffset)) : (b.removeAllRanges(), b.addRange(c.cloneRange()))), 1 < na && v()
        }

        function w(a) {
            var b = J.getRootElement(a),
                c = J.createRootFilter(b),
                b = J.createStepIterator(a, 0, [c, J.getPositionFilter()], b);
            b.setPosition(a, a.childNodes.length);
            return b.roundToNextStep() ? {
                    container: b.container(),
                    offset: b.offset()
                } :
                null
        }

        function u(a) {
            var b;
            b = (b = T.getSelection()) ? {
                anchorNode: b.anchorNode,
                anchorOffset: b.anchorOffset,
                focusNode: b.focusNode,
                focusOffset: b.focusOffset
            } : null;
            var c = T.getSelection().isCollapsed,
                e, d;
            b.anchorNode || b.focusNode || !(e = n(a.clientX, a.clientY)) || (b.anchorNode = e.container, b.anchorOffset = e.offset, b.focusNode = b.anchorNode, b.focusOffset = b.anchorOffset);
            if (E.isImage(b.focusNode) && 0 === b.focusOffset && E.isCharacterFrame(b.focusNode.parentNode)) {
                if (d = b.focusNode.parentNode, e = d.getBoundingClientRect(),
                    a.clientX > e.left && (e = w(d))) b.focusNode = e.container, b.focusOffset = e.offset, c && (b.anchorNode = b.focusNode, b.anchorOffset = b.focusOffset)
            } else E.isImage(b.focusNode.firstChild) && 1 === b.focusOffset && E.isCharacterFrame(b.focusNode) && (e = w(b.focusNode)) && (b.anchorNode = b.focusNode = e.container, b.anchorOffset = b.focusOffset = e.offset);
            b.anchorNode && b.focusNode && (b = W.selectionToRange(b), W.selectRange(b.range, b.hasForwardSelection, 0 === a.button ? a.detail : 0));
            M.focus()
        }

        function z(a) {
            var b;
            if (b = n(a.clientX, a.clientY)) a =
                b.container, b = b.offset, a = {
                    anchorNode: a,
                    anchorOffset: b,
                    focusNode: a,
                    focusOffset: b
                }, a = W.selectionToRange(a), W.selectRange(a.range, a.hasForwardSelection, 2), M.focus()
        }

        function H(a) {
            var b = h(a),
                c, e, f;
            la.processRequests();
            Z && (E.isImage(b) && E.isCharacterFrame(b.parentNode) && T.getSelection().isCollapsed ? (W.selectImage(b.parentNode), M.focus()) : ka.isSelectorElement(b) ? M.focus() : X ? (b = d.getSelectedRange(), e = b.collapsed, E.isImage(b.endContainer) && 0 === b.endOffset && E.isCharacterFrame(b.endContainer.parentNode) && (f =
                b.endContainer.parentNode, f = w(f)) && (b.setEnd(f.container, f.offset), e && b.collapse(!1)), W.selectRange(b, d.hasForwardSelection(), 0 === a.button ? a.detail : 0), M.focus()) : ta ? u(a) : (c = P.cloneEvent(a), da = runtime.setTimeout(function() {
                u(c)
            }, 0)), na = 0, X = Z = !1)
        }

        function C(b) {
            var c = J.getCursor(a).getSelectedRange();
            c.collapsed || Q.exportRangeToDataTransfer(b.dataTransfer, c)
        }

        function D() {
            Z && M.focus();
            na = 0;
            X = Z = !1
        }

        function I(a) {
            H(a)
        }

        function N(a) {
            var b = h(a),
                c = null;
            "annotationRemoveButton" === b.className ? (runtime.assert(ea,
                "Remove buttons are displayed on annotations while annotation editing is disabled in the controller."), c = b.parentNode.getElementsByTagNameNS(odf.Namespaces.officens, "annotation").item(0), ha.removeAnnotation(c), M.focus()) : "webodf-draggable" !== b.getAttribute("class") && H(a)
        }

        function K(a) {
            (a = a.data) && (-1 === a.indexOf("\n") ? fa.insertText(a) : ga.paste(a))
        }

        function G(a) {
            return function() {
                a();
                return !0
            }
        }

        function A(b) {
            return function(c) {
                return J.getCursor(a).getSelectionType() === ops.OdtCursor.RangeSelection ?
                    b(c) : !0
            }
        }

        function Y(a) {
            M.unsubscribe("keydown", B.handleEvent);
            M.unsubscribe("keypress", V.handleEvent);
            M.unsubscribe("keyup", ba.handleEvent);
            M.unsubscribe("copy", l);
            M.unsubscribe("mousedown", s);
            M.unsubscribe("mousemove", la.trigger);
            M.unsubscribe("mouseup", N);
            M.unsubscribe("contextmenu", I);
            M.unsubscribe("dragstart", C);
            M.unsubscribe("dragend", D);
            M.unsubscribe("click", oa.handleClick);
            M.unsubscribe("longpress", z);
            M.unsubscribe("drag", t);
            M.unsubscribe("dragstop", y);
            J.unsubscribe(ops.OdtDocument.signalOperationEnd,
                ma.trigger);
            J.unsubscribe(ops.Document.signalCursorAdded, ja.registerCursor);
            J.unsubscribe(ops.Document.signalCursorRemoved, ja.removeCursor);
            J.unsubscribe(ops.OdtDocument.signalOperationEnd, e);
            a()
        }
        var T = runtime.getWindow(),
            J = k.getOdtDocument(),
            U = new gui.SessionConstraints,
            aa = new gui.SessionContext(k, a),
            P = core.DomUtils,
            E = odf.OdfUtils,
            Q = new gui.MimeDataExporter,
            $ = new gui.Clipboard(Q),
            B = new gui.KeyboardHandler,
            V = new gui.KeyboardHandler,
            ba = new gui.KeyboardHandler,
            Z = !1,
            F = new odf.ObjectNameGenerator(J.getOdfCanvas().odfContainer(),
                a),
            X = !1,
            R = null,
            da, S = null,
            M = new gui.EventManager(J),
            ea = b.annotationsEnabled,
            ha = new gui.AnnotationController(k, U, a),
            ca = new gui.DirectFormattingController(k, U, aa, a, F, b.directTextStylingEnabled, b.directParagraphStylingEnabled),
            fa = new gui.TextController(k, U, aa, a, ca.createCursorStyleOp, ca.createParagraphStyleOps),
            pa = new gui.ImageController(k, U, aa, a, F),
            ka = new gui.ImageSelector(J.getOdfCanvas()),
            ia = J.createPositionIterator(J.getRootNode()),
            la, ma, ga = new gui.PasteController(k, U, aa, a),
            ja = new gui.InputMethodEditor(a,
                M),
            na = 0,
            oa = new gui.HyperlinkClickHandler(J.getOdfCanvas().getElement, B, ba),
            sa = new gui.HyperlinkController(k, U, aa, a),
            W = new gui.SelectionController(k, a),
            ua = new gui.MetadataController(k, a),
            L = gui.KeyboardHandler.Modifier,
            O = gui.KeyboardHandler.KeyCode,
            qa = -1 !== T.navigator.appVersion.toLowerCase().indexOf("mac"),
            ta = -1 !== ["iPad", "iPod", "iPhone"].indexOf(T.navigator.platform),
            ra;
        runtime.assert(null !== T, "Expected to be run in an environment which has a global window, like a browser.");
        this.undo = g;
        this.redo =
            x;
        this.insertLocalCursor = function() {
            runtime.assert(void 0 === k.getOdtDocument().getCursor(a), "Inserting local cursor a second time.");
            var b = new ops.OpAddCursor;
            b.init({
                memberid: a
            });
            k.enqueue([b]);
            M.focus()
        };
        this.removeLocalCursor = function() {
            runtime.assert(void 0 !== k.getOdtDocument().getCursor(a), "Removing local cursor without inserting before.");
            var b = new ops.OpRemoveCursor;
            b.init({
                memberid: a
            });
            k.enqueue([b])
        };
        this.startEditing = function() {
            ja.subscribe(gui.InputMethodEditor.signalCompositionStart, fa.removeCurrentSelection);
            ja.subscribe(gui.InputMethodEditor.signalCompositionEnd, K);
            M.subscribe("beforecut", m);
            M.subscribe("cut", q);
            M.subscribe("beforepaste", c);
            M.subscribe("paste", r);
            S && S.initialize();
            M.setEditing(!0);
            oa.setModifier(qa ? L.Meta : L.Ctrl);
            B.bind(O.Backspace, L.None, G(fa.removeTextByBackspaceKey), !0);
            B.bind(O.Delete, L.None, fa.removeTextByDeleteKey);
            B.bind(O.Tab, L.None, A(function() {
                fa.insertText("\t");
                return !0
            }));
            qa ? (B.bind(O.Clear, L.None, fa.removeCurrentSelection), B.bind(O.B, L.Meta, A(ca.toggleBold)), B.bind(O.I,
                L.Meta, A(ca.toggleItalic)), B.bind(O.U, L.Meta, A(ca.toggleUnderline)), B.bind(O.L, L.MetaShift, A(ca.alignParagraphLeft)), B.bind(O.E, L.MetaShift, A(ca.alignParagraphCenter)), B.bind(O.R, L.MetaShift, A(ca.alignParagraphRight)), B.bind(O.J, L.MetaShift, A(ca.alignParagraphJustified)), ea && B.bind(O.C, L.MetaShift, ha.addAnnotation), B.bind(O.Z, L.Meta, g), B.bind(O.Z, L.MetaShift, x)) : (B.bind(O.B, L.Ctrl, A(ca.toggleBold)), B.bind(O.I, L.Ctrl, A(ca.toggleItalic)), B.bind(O.U, L.Ctrl, A(ca.toggleUnderline)), B.bind(O.L, L.CtrlShift,
                A(ca.alignParagraphLeft)), B.bind(O.E, L.CtrlShift, A(ca.alignParagraphCenter)), B.bind(O.R, L.CtrlShift, A(ca.alignParagraphRight)), B.bind(O.J, L.CtrlShift, A(ca.alignParagraphJustified)), ea && B.bind(O.C, L.CtrlAlt, ha.addAnnotation), B.bind(O.Z, L.Ctrl, g), B.bind(O.Z, L.CtrlShift, x));
            V.setDefault(A(function(a) {
                var b;
                b = null === a.which || void 0 === a.which ? String.fromCharCode(a.keyCode) : 0 !== a.which && 0 !== a.charCode ? String.fromCharCode(a.which) : null;
                return !b || a.altKey || a.ctrlKey || a.metaKey ? !1 : (fa.insertText(b), !0)
            }));
            V.bind(O.Enter, L.None, A(fa.enqueueParagraphSplittingOps))
        };
        this.endEditing = function() {
            ja.unsubscribe(gui.InputMethodEditor.signalCompositionStart, fa.removeCurrentSelection);
            ja.unsubscribe(gui.InputMethodEditor.signalCompositionEnd, K);
            M.unsubscribe("cut", q);
            M.unsubscribe("beforecut", m);
            M.unsubscribe("paste", r);
            M.unsubscribe("beforepaste", c);
            M.setEditing(!1);
            oa.setModifier(L.None);
            B.bind(O.Backspace, L.None, function() {
                return !0
            }, !0);
            B.unbind(O.Delete, L.None);
            B.unbind(O.Tab, L.None);
            qa ? (B.unbind(O.Clear,
                L.None), B.unbind(O.B, L.Meta), B.unbind(O.I, L.Meta), B.unbind(O.U, L.Meta), B.unbind(O.L, L.MetaShift), B.unbind(O.E, L.MetaShift), B.unbind(O.R, L.MetaShift), B.unbind(O.J, L.MetaShift), ea && B.unbind(O.C, L.MetaShift), B.unbind(O.Z, L.Meta), B.unbind(O.Z, L.MetaShift)) : (B.unbind(O.B, L.Ctrl), B.unbind(O.I, L.Ctrl), B.unbind(O.U, L.Ctrl), B.unbind(O.L, L.CtrlShift), B.unbind(O.E, L.CtrlShift), B.unbind(O.R, L.CtrlShift), B.unbind(O.J, L.CtrlShift), ea && B.unbind(O.C, L.CtrlAlt), B.unbind(O.Z, L.Ctrl), B.unbind(O.Z, L.CtrlShift));
            V.setDefault(null);
            V.unbind(O.Enter, L.None)
        };
        this.getInputMemberId = function() {
            return a
        };
        this.getSession = function() {
            return k
        };
        this.getSessionConstraints = function() {
            return U
        };
        this.setUndoManager = function(a) {
            S && S.unsubscribe(gui.UndoManager.signalUndoStackChanged, p);
            if (S = a) S.setDocument(J), S.setPlaybackFunction(k.enqueue), S.subscribe(gui.UndoManager.signalUndoStackChanged, p)
        };
        this.getUndoManager = function() {
            return S
        };
        this.getMetadataController = function() {
            return ua
        };
        this.getAnnotationController = function() {
            return ha
        };
        this.getDirectFormattingController =
            function() {
                return ca
            };
        this.getHyperlinkClickHandler = function() {
            return oa
        };
        this.getHyperlinkController = function() {
            return sa
        };
        this.getImageController = function() {
            return pa
        };
        this.getSelectionController = function() {
            return W
        };
        this.getTextController = function() {
            return fa
        };
        this.getEventManager = function() {
            return M
        };
        this.getKeyboardHandlers = function() {
            return {
                keydown: B,
                keypress: V
            }
        };
        this.destroy = function(a) {
            var b = [la.destroy, ma.destroy, ca.destroy, ja.destroy, M.destroy, oa.destroy, sa.destroy, ua.destroy, W.destroy,
                fa.destroy, Y
            ];
            ra && b.unshift(ra.destroy);
            runtime.clearTimeout(da);
            core.Async.destroyAll(b, a)
        };
        la = core.Task.createRedrawTask(v);
        ma = core.Task.createRedrawTask(function() {
            var b = J.getCursor(a);
            if (b && b.getSelectionType() === ops.OdtCursor.RegionSelection && (b = E.getImageElements(b.getSelectedRange())[0])) {
                ka.select(b.parentNode);
                return
            }
            ka.clearSelection()
        });
        B.bind(O.Left, L.None, A(W.moveCursorToLeft));
        B.bind(O.Right, L.None, A(W.moveCursorToRight));
        B.bind(O.Up, L.None, A(W.moveCursorUp));
        B.bind(O.Down, L.None, A(W.moveCursorDown));
        B.bind(O.Left, L.Shift, A(W.extendSelectionToLeft));
        B.bind(O.Right, L.Shift, A(W.extendSelectionToRight));
        B.bind(O.Up, L.Shift, A(W.extendSelectionUp));
        B.bind(O.Down, L.Shift, A(W.extendSelectionDown));
        B.bind(O.Home, L.None, A(W.moveCursorToLineStart));
        B.bind(O.End, L.None, A(W.moveCursorToLineEnd));
        B.bind(O.Home, L.Ctrl, A(W.moveCursorToDocumentStart));
        B.bind(O.End, L.Ctrl, A(W.moveCursorToDocumentEnd));
        B.bind(O.Home, L.Shift, A(W.extendSelectionToLineStart));
        B.bind(O.End, L.Shift, A(W.extendSelectionToLineEnd));
        B.bind(O.Up,
            L.CtrlShift, A(W.extendSelectionToParagraphStart));
        B.bind(O.Down, L.CtrlShift, A(W.extendSelectionToParagraphEnd));
        B.bind(O.Home, L.CtrlShift, A(W.extendSelectionToDocumentStart));
        B.bind(O.End, L.CtrlShift, A(W.extendSelectionToDocumentEnd));
        qa ? (B.bind(O.Left, L.Alt, A(W.moveCursorBeforeWord)), B.bind(O.Right, L.Alt, A(W.moveCursorPastWord)), B.bind(O.Left, L.Meta, A(W.moveCursorToLineStart)), B.bind(O.Right, L.Meta, A(W.moveCursorToLineEnd)), B.bind(O.Home, L.Meta, A(W.moveCursorToDocumentStart)), B.bind(O.End, L.Meta,
                A(W.moveCursorToDocumentEnd)), B.bind(O.Left, L.AltShift, A(W.extendSelectionBeforeWord)), B.bind(O.Right, L.AltShift, A(W.extendSelectionPastWord)), B.bind(O.Left, L.MetaShift, A(W.extendSelectionToLineStart)), B.bind(O.Right, L.MetaShift, A(W.extendSelectionToLineEnd)), B.bind(O.Up, L.AltShift, A(W.extendSelectionToParagraphStart)), B.bind(O.Down, L.AltShift, A(W.extendSelectionToParagraphEnd)), B.bind(O.Up, L.MetaShift, A(W.extendSelectionToDocumentStart)), B.bind(O.Down, L.MetaShift, A(W.extendSelectionToDocumentEnd)),
            B.bind(O.A, L.Meta, A(W.extendSelectionToEntireDocument))) : (B.bind(O.Left, L.Ctrl, A(W.moveCursorBeforeWord)), B.bind(O.Right, L.Ctrl, A(W.moveCursorPastWord)), B.bind(O.Left, L.CtrlShift, A(W.extendSelectionBeforeWord)), B.bind(O.Right, L.CtrlShift, A(W.extendSelectionPastWord)), B.bind(O.A, L.Ctrl, A(W.extendSelectionToEntireDocument)));
        ta && (ra = new gui.IOSSafariSupport(M));
        M.subscribe("keydown", B.handleEvent);
        M.subscribe("keypress", V.handleEvent);
        M.subscribe("keyup", ba.handleEvent);
        M.subscribe("copy", l);
        M.subscribe("mousedown",
            s);
        M.subscribe("mousemove", la.trigger);
        M.subscribe("mouseup", N);
        M.subscribe("contextmenu", I);
        M.subscribe("dragstart", C);
        M.subscribe("dragend", D);
        M.subscribe("click", oa.handleClick);
        M.subscribe("longpress", z);
        M.subscribe("drag", t);
        M.subscribe("dragstop", y);
        J.subscribe(ops.OdtDocument.signalOperationEnd, ma.trigger);
        J.subscribe(ops.Document.signalCursorAdded, ja.registerCursor);
        J.subscribe(ops.Document.signalCursorRemoved, ja.removeCursor);
        J.subscribe(ops.OdtDocument.signalOperationEnd, e)
    }
})();
gui.CaretManager = function(f, k) {
    function a(a) {
        return h.hasOwnProperty(a) ? h[a] : null
    }

    function d() {
        return Object.keys(h).map(function(a) {
            return h[a]
        })
    }

    function b(a) {
        var b = h[a];
        b && (delete h[a], a === f.getInputMemberId() ? (q.unsubscribe(ops.OdtDocument.signalProcessingBatchEnd, b.ensureVisible), q.unsubscribe(ops.Document.signalCursorMoved, b.refreshCursorBlinking), m.unsubscribe("compositionupdate", b.handleUpdate), m.unsubscribe("compositionend", b.handleUpdate), m.unsubscribe("focus", b.setFocus), m.unsubscribe("blur",
            b.removeFocus), n.removeEventListener("focus", b.show, !1), n.removeEventListener("blur", b.hide, !1)) : q.unsubscribe(ops.OdtDocument.signalProcessingBatchEnd, b.handleUpdate), b.destroy(function() {}))
    }
    var h = {},
        n = runtime.getWindow(),
        q = f.getSession().getOdtDocument(),
        m = f.getEventManager();
    this.registerCursor = function(a, b, c) {
        var e = a.getMemberId();
        a = new gui.Caret(a, k, b, c);
        h[e] = a;
        e === f.getInputMemberId() ? (runtime.log("Starting to track input on new cursor of " + e), q.subscribe(ops.OdtDocument.signalProcessingBatchEnd,
            a.ensureVisible), q.subscribe(ops.Document.signalCursorMoved, a.refreshCursorBlinking), m.subscribe("compositionupdate", a.handleUpdate), m.subscribe("compositionend", a.handleUpdate), m.subscribe("focus", a.setFocus), m.subscribe("blur", a.removeFocus), n.addEventListener("focus", a.show, !1), n.addEventListener("blur", a.hide, !1), a.setOverlayElement(m.getEventTrap())) : q.subscribe(ops.OdtDocument.signalProcessingBatchEnd, a.handleUpdate);
        return a
    };
    this.getCaret = a;
    this.getCarets = d;
    this.destroy = function(a) {
        var k =
            d().map(function(a) {
                return a.destroy
            });
        f.getSelectionController().setCaretXPositionLocator(null);
        q.unsubscribe(ops.Document.signalCursorRemoved, b);
        h = {};
        core.Async.destroyAll(k, a)
    };
    f.getSelectionController().setCaretXPositionLocator(function() {
        var b = a(f.getInputMemberId()),
            d;
        b && (d = b.getBoundingClientRect());
        return d ? d.right : void 0
    });
    q.subscribe(ops.Document.signalCursorRemoved, b)
};
gui.EditInfoHandle = function(f) {
    var k = [],
        a, d = f.ownerDocument,
        b = d.documentElement.namespaceURI;
    this.setEdits = function(f) {
        k = f;
        var n, q, m, l;
        a.innerHTML = "";
        for (f = 0; f < k.length; f += 1) n = d.createElementNS(b, "div"), n.className = "editInfo", q = d.createElementNS(b, "span"), q.className = "editInfoColor", q.setAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid", k[f].memberid), m = d.createElementNS(b, "span"), m.className = "editInfoAuthor", m.setAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid", k[f].memberid),
            l = d.createElementNS(b, "span"), l.className = "editInfoTime", l.setAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid", k[f].memberid), l.innerHTML = k[f].time, n.appendChild(q), n.appendChild(m), n.appendChild(l), a.appendChild(n)
    };
    this.show = function() {
        a.style.display = "block"
    };
    this.hide = function() {
        a.style.display = "none"
    };
    this.destroy = function(b) {
        f.removeChild(a);
        b()
    };
    a = d.createElementNS(b, "div");
    a.setAttribute("class", "editInfoHandle");
    a.style.display = "none";
    f.appendChild(a)
};
ops.EditInfo = function(f, k) {
    function a() {
        var a = [],
            d;
        for (d in b) b.hasOwnProperty(d) && a.push({
            memberid: d,
            time: b[d].time
        });
        a.sort(function(a, b) {
            return a.time - b.time
        });
        return a
    }
    var d, b = {};
    this.getNode = function() {
        return d
    };
    this.getOdtDocument = function() {
        return k
    };
    this.getEdits = function() {
        return b
    };
    this.getSortedEdits = function() {
        return a()
    };
    this.addEdit = function(a, d) {
        b[a] = {
            time: d
        }
    };
    this.clearEdits = function() {
        b = {}
    };
    this.destroy = function(a) {
        f.parentNode && f.removeChild(d);
        a()
    };
    d = k.getDOMDocument().createElementNS("urn:webodf:names:editinfo",
        "editinfo");
    f.insertBefore(d, f.firstChild)
};
gui.EditInfoMarker = function(f, k) {
    function a(a, b) {
        return runtime.setTimeout(function() {
            n.style.opacity = a
        }, b)
    }
    var d = this,
        b, h, n, q, m, l;
    this.addEdit = function(b, c) {
        var e = Date.now() - c;
        f.addEdit(b, c);
        h.setEdits(f.getSortedEdits());
        n.setAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid", b);
        runtime.clearTimeout(m);
        runtime.clearTimeout(l);
        1E4 > e ? (q = a(1, 0), m = a(0.5, 1E4 - e), l = a(0.2, 2E4 - e)) : 1E4 <= e && 2E4 > e ? (q = a(0.5, 0), l = a(0.2, 2E4 - e)) : q = a(0.2, 0)
    };
    this.getEdits = function() {
        return f.getEdits()
    };
    this.clearEdits =
        function() {
            f.clearEdits();
            h.setEdits([]);
            n.hasAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid") && n.removeAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid")
        };
    this.getEditInfo = function() {
        return f
    };
    this.show = function() {
        n.style.display = "block"
    };
    this.hide = function() {
        d.hideHandle();
        n.style.display = "none"
    };
    this.showHandle = function() {
        h.show()
    };
    this.hideHandle = function() {
        h.hide()
    };
    this.destroy = function(a) {
        runtime.clearTimeout(q);
        runtime.clearTimeout(m);
        runtime.clearTimeout(l);
        b.removeChild(n);
        h.destroy(function(b) {
            b ? a(b) : f.destroy(a)
        })
    };
    (function() {
        var a = f.getOdtDocument().getDOMDocument();
        n = a.createElementNS(a.documentElement.namespaceURI, "div");
        n.setAttribute("class", "editInfoMarker");
        n.onmouseover = function() {
            d.showHandle()
        };
        n.onmouseout = function() {
            d.hideHandle()
        };
        b = f.getNode();
        b.appendChild(n);
        h = new gui.EditInfoHandle(b);
        k || d.hide()
    })()
};
gui.HyperlinkTooltipView = function(f, k) {
    var a = core.DomUtils,
        d = odf.OdfUtils,
        b = runtime.getWindow(),
        h, n, q;
    runtime.assert(null !== b, "Expected to be run in an environment which has a global window, like a browser.");
    this.showTooltip = function(m) {
        var l = m.target || m.srcElement,
            r = f.getSizer(),
            c = f.getZoomLevel(),
            e;
        a: {
            for (; l;) {
                if (d.isHyperlink(l)) break a;
                if (d.isParagraph(l) || d.isInlineRoot(l)) break;
                l = l.parentNode
            }
            l = null
        }
        if (l) {
            a.containsNode(r, q) || r.appendChild(q);
            e = n;
            var p;
            switch (k()) {
                case gui.KeyboardHandler.Modifier.Ctrl:
                    p =
                        runtime.tr("Ctrl-click to follow link");
                    break;
                case gui.KeyboardHandler.Modifier.Meta:
                    p = runtime.tr("\u2318-click to follow link");
                    break;
                default:
                    p = ""
            }
            e.textContent = p;
            h.textContent = d.getHyperlinkTarget(l);
            q.style.display = "block";
            e = b.innerWidth - q.offsetWidth - 15;
            l = m.clientX > e ? e : m.clientX + 15;
            e = b.innerHeight - q.offsetHeight - 10;
            m = m.clientY > e ? e : m.clientY + 10;
            r = r.getBoundingClientRect();
            l = (l - r.left) / c;
            m = (m - r.top) / c;
            q.style.left = l + "px";
            q.style.top = m + "px"
        }
    };
    this.hideTooltip = function() {
        q.style.display = "none"
    };
    this.destroy =
        function(a) {
            q.parentNode && q.parentNode.removeChild(q);
            a()
        };
    (function() {
        var a = f.getElement().ownerDocument;
        h = a.createElement("span");
        n = a.createElement("span");
        h.className = "webodf-hyperlinkTooltipLink";
        n.className = "webodf-hyperlinkTooltipText";
        q = a.createElement("div");
        q.className = "webodf-hyperlinkTooltip";
        q.appendChild(h);
        q.appendChild(n);
        f.getElement().appendChild(q)
    })()
};
gui.OdfFieldView = function(f) {
    function k() {
        var a = odf.OdfSchema.getFields().map(function(a) {
                return a.replace(":", "|")
            }),
            d = a.join(",\n") + "\n{ background-color: #D0D0D0; }\n",
            a = a.map(function(a) {
                return a + ":empty::after"
            }).join(",\n") + "\n{ content:' '; white-space: pre; }\n";
        return d + "\n" + a
    }
    var a, d = f.getElement().ownerDocument;
    this.showFieldHighlight = function() {
        a.appendChild(d.createTextNode(k()))
    };
    this.hideFieldHighlight = function() {
        for (var b = a.sheet, d = b.cssRules; d.length;) b.deleteRule(d.length - 1)
    };
    this.destroy =
        function(b) {
            a.parentNode && a.parentNode.removeChild(a);
            b()
        };
    a = function() {
        var a = d.getElementsByTagName("head").item(0),
            f = d.createElement("style"),
            k = "";
        f.type = "text/css";
        f.media = "screen, print, handheld, projection";
        odf.Namespaces.forEachPrefix(function(a, b) {
            k += "@namespace " + a + " url(" + b + ");\n"
        });
        f.appendChild(d.createTextNode(k));
        a.appendChild(f);
        return f
    }()
};
gui.ShadowCursor = function(f) {
    var k = f.getDOMDocument().createRange(),
        a = !0;
    this.removeFromDocument = function() {};
    this.getMemberId = function() {
        return gui.ShadowCursor.ShadowCursorMemberId
    };
    this.getSelectedRange = function() {
        return k
    };
    this.setSelectedRange = function(d, b) {
        k = d;
        a = !1 !== b
    };
    this.hasForwardSelection = function() {
        return a
    };
    this.getDocument = function() {
        return f
    };
    this.getSelectionType = function() {
        return ops.OdtCursor.RangeSelection
    };
    k.setStart(f.getRootNode(), 0)
};
gui.ShadowCursor.ShadowCursorMemberId = "";
gui.SelectionView = function(f) {};
gui.SelectionView.prototype.rerender = function() {};
gui.SelectionView.prototype.show = function() {};
gui.SelectionView.prototype.hide = function() {};
gui.SelectionView.prototype.destroy = function(f) {};
gui.SelectionViewManager = function(f) {
    function k() {
        return Object.keys(a).map(function(d) {
            return a[d]
        })
    }
    var a = {};
    this.getSelectionView = function(d) {
        return a.hasOwnProperty(d) ? a[d] : null
    };
    this.getSelectionViews = k;
    this.removeSelectionView = function(d) {
        a.hasOwnProperty(d) && (a[d].destroy(function() {}), delete a[d])
    };
    this.hideSelectionView = function(d) {
        a.hasOwnProperty(d) && a[d].hide()
    };
    this.showSelectionView = function(d) {
        a.hasOwnProperty(d) && a[d].show()
    };
    this.rerenderSelectionViews = function() {
        Object.keys(a).forEach(function(d) {
            a[d].rerender()
        })
    };
    this.registerCursor = function(d, b) {
        var h = d.getMemberId(),
            k = new f(d);
        b ? k.show() : k.hide();
        return a[h] = k
    };
    this.destroy = function(a) {
        function b(k, q) {
            q ? a(q) : k < f.length ? f[k].destroy(function(a) {
                b(k + 1, a)
            }) : a()
        }
        var f = k();
        b(0, void 0)
    }
};
gui.SessionViewOptions = function() {
    this.caretBlinksOnRangeSelect = this.caretAvatarsInitiallyVisible = this.editInfoMarkersInitiallyVisible = !0
};
(function() {
    gui.SessionView = function(f, k, a, d, b, h) {
        function n(a) {
            a.memberId === k && H.getViewport().scrollIntoView(a.annotation.getBoundingClientRect())
        }

        function q() {
            var a = document.getElementsByTagName("head").item(0),
                b = document.createElement("style");
            b.type = "text/css";
            b.media = "screen, print, handheld, projection";
            a.appendChild(b);
            return b
        }

        function m(a, b, c) {
            function e(b, c, d) {
                c = b + '[editinfo|memberid="' + a + '"]' + d + c;
                a: {
                    var f = v.firstChild;
                    for (b = b + '[editinfo|memberid="' + a + '"]' + d + "{"; f;) {
                        if (f.nodeType === Node.TEXT_NODE &&
                            0 === f.data.indexOf(b)) {
                            b = f;
                            break a
                        }
                        f = f.nextSibling
                    }
                    b = null
                }
                b ? b.data = c : v.appendChild(document.createTextNode(c))
            }
            e("div.editInfoMarker", "{ background-color: " + c + "; }", "");
            e("span.editInfoColor", "{ background-color: " + c + "; }", "");
            e("span.editInfoAuthor", '{ content: "' + b + '"; }', ":before");
            e("dc|creator", "{ background-color: " + c + "; }", "");
            e(".webodf-selectionOverlay", "{ fill: " + c + "; stroke: " + c + ";}", "");
            a === k && (e(".webodf-touchEnabled .webodf-selectionOverlay", "{ display: block; }", " > .webodf-draggable"),
                a = gui.ShadowCursor.ShadowCursorMemberId, e(".webodf-selectionOverlay", "{ fill: " + c + "; stroke: " + c + ";}", ""), e(".webodf-touchEnabled .webodf-selectionOverlay", "{ display: block; }", " > .webodf-draggable"))
        }

        function l(a) {
            var b, c;
            for (c in u) u.hasOwnProperty(c) && (b = u[c], a ? b.show() : b.hide())
        }

        function r(a) {
            b.getCarets().forEach(function(b) {
                a ? b.showHandle() : b.hideHandle()
            })
        }

        function c(a) {
            var b = a.getMemberId();
            a = a.getProperties();
            m(b, a.fullName, a.color)
        }

        function e(c) {
            var e = c.getMemberId(),
                d = a.getOdtDocument().getMember(e).getProperties();
            b.registerCursor(c, I, N);
            h.registerCursor(c, !0);
            if (c = b.getCaret(e)) c.setAvatarImageUrl(d.imageUrl), c.setColor(d.color);
            runtime.log("+++ View here +++ eagerly created an Caret for '" + e + "'! +++")
        }

        function p(a) {
            a = a.getMemberId();
            var c = h.getSelectionView(k),
                e = h.getSelectionView(gui.ShadowCursor.ShadowCursorMemberId),
                d = b.getCaret(k);
            a === k ? (e.hide(), c && c.show(), d && d.show()) : a === gui.ShadowCursor.ShadowCursorMemberId && (e.show(), c && c.hide(), d && d.hide())
        }

        function g(a) {
            h.removeSelectionView(a)
        }

        function x(b) {
            var c =
                b.paragraphElement,
                e = b.memberId;
            b = b.timeStamp;
            var d, f = "",
                g = c.getElementsByTagNameNS(w, "editinfo").item(0);
            g ? (f = g.getAttributeNS(w, "id"), d = u[f]) : (f = Math.random().toString(), d = new ops.EditInfo(c, a.getOdtDocument()), d = new gui.EditInfoMarker(d, D), g = c.getElementsByTagNameNS(w, "editinfo").item(0), g.setAttributeNS(w, "id", f), u[f] = d);
            d.addEdit(e, new Date(b));
            C.trigger()
        }

        function t() {
            var b;
            "" !== s.innerHTML && (s.innerHTML = "");
            !0 === d.getState(gui.CommonConstraints.EDIT.ANNOTATIONS.ONLY_DELETE_OWN) && (b = a.getOdtDocument().getMember(k)) &&
                (b = b.getProperties().fullName, s.appendChild(document.createTextNode(".annotationWrapper:not([creator = '" + b + "']) .annotationRemoveButton { display: none; }")))
        }

        function y(a) {
            var b = Object.keys(u).map(function(a) {
                return u[a]
            });
            z.unsubscribe(ops.Document.signalMemberAdded, c);
            z.unsubscribe(ops.Document.signalMemberUpdated, c);
            z.unsubscribe(ops.Document.signalCursorAdded, e);
            z.unsubscribe(ops.Document.signalCursorRemoved, g);
            z.unsubscribe(ops.OdtDocument.signalParagraphChanged, x);
            z.unsubscribe(ops.Document.signalCursorMoved,
                p);
            z.unsubscribe(ops.OdtDocument.signalParagraphChanged, h.rerenderSelectionViews);
            z.unsubscribe(ops.OdtDocument.signalTableAdded, h.rerenderSelectionViews);
            z.unsubscribe(ops.OdtDocument.signalParagraphStyleModified, h.rerenderSelectionViews);
            d.unsubscribe(gui.CommonConstraints.EDIT.ANNOTATIONS.ONLY_DELETE_OWN, t);
            z.unsubscribe(ops.Document.signalMemberAdded, t);
            z.unsubscribe(ops.Document.signalMemberUpdated, t);
            v.parentNode.removeChild(v);
            s.parentNode.removeChild(s);
            (function Y(c, e) {
                e ? a(e) : c < b.length ?
                    b[c].destroy(function(a) {
                        Y(c + 1, a)
                    }) : a()
            })(0, void 0)
        }
        var v, s, w = "urn:webodf:names:editinfo",
            u = {},
            z, H, C, D = void 0 !== f.editInfoMarkersInitiallyVisible ? Boolean(f.editInfoMarkersInitiallyVisible) : !0,
            I = void 0 !== f.caretAvatarsInitiallyVisible ? Boolean(f.caretAvatarsInitiallyVisible) : !0,
            N = void 0 !== f.caretBlinksOnRangeSelect ? Boolean(f.caretBlinksOnRangeSelect) : !0;
        this.showEditInfoMarkers = function() {
            D || (D = !0, l(D))
        };
        this.hideEditInfoMarkers = function() {
            D && (D = !1, l(D))
        };
        this.showCaretAvatars = function() {
            I || (I = !0, r(I))
        };
        this.hideCaretAvatars = function() {
            I && (I = !1, r(I))
        };
        this.getSession = function() {
            return a
        };
        this.getCaret = function(a) {
            return b.getCaret(a)
        };
        this.destroy = function(a) {
            var b = [C.destroy, y];
            z.unsubscribe(ops.OdtDocument.signalAnnotationAdded, n);
            core.Async.destroyAll(b, a)
        };
        z = a.getOdtDocument();
        H = z.getOdfCanvas();
        z.subscribe(ops.OdtDocument.signalAnnotationAdded, n);
        z.subscribe(ops.Document.signalMemberAdded, c);
        z.subscribe(ops.Document.signalMemberUpdated, c);
        z.subscribe(ops.Document.signalCursorAdded, e);
        z.subscribe(ops.Document.signalCursorRemoved,
            g);
        z.subscribe(ops.OdtDocument.signalParagraphChanged, x);
        z.subscribe(ops.Document.signalCursorMoved, p);
        z.subscribe(ops.OdtDocument.signalParagraphChanged, h.rerenderSelectionViews);
        z.subscribe(ops.OdtDocument.signalTableAdded, h.rerenderSelectionViews);
        z.subscribe(ops.OdtDocument.signalParagraphStyleModified, h.rerenderSelectionViews);
        d.subscribe(gui.CommonConstraints.EDIT.ANNOTATIONS.ONLY_DELETE_OWN, t);
        z.subscribe(ops.Document.signalMemberAdded, t);
        z.subscribe(ops.Document.signalMemberUpdated, t);
        v = q();
        v.appendChild(document.createTextNode("@namespace editinfo url(urn:webodf:names:editinfo);"));
        v.appendChild(document.createTextNode("@namespace dc url(http://purl.org/dc/elements/1.1/);"));
        s = q();
        t();
        C = core.Task.createRedrawTask(function() {
            var a = H.getAnnotationViewManager();
            a && (a.rehighlightAnnotations(), z.fixCursorPositions())
        })
    }
})();
gui.SvgSelectionView = function(f) {
    function k() {
        var a = e.getRootNode();
        p !== a && (p = a, g = e.getCanvas().getSizer(), g.appendChild(t), t.setAttribute("class", "webodf-selectionOverlay"), v.setAttribute("class", "webodf-draggable"), s.setAttribute("class", "webodf-draggable"), v.setAttribute("end", "left"), s.setAttribute("end", "right"), v.setAttribute("r", 8), s.setAttribute("r", 8), t.appendChild(y), t.appendChild(v), t.appendChild(s))
    }

    function a(a) {
        a = a.getBoundingClientRect();
        return Boolean(a && 0 !== a.height)
    }

    function d(b) {
        var c =
            w.getTextElements(b, !0, !1),
            e = b.cloneRange(),
            d = b.cloneRange();
        b = b.cloneRange();
        if (!c.length) return null;
        var f;
        a: {
            f = 0;
            var g = c[f],
                h = e.startContainer === g ? e.startOffset : 0,
                k = h;e.setStart(g, h);
            for (e.setEnd(g, k); !a(e);) {
                if (g.nodeType === Node.ELEMENT_NODE && k < g.childNodes.length) k = g.childNodes.length;
                else if (g.nodeType === Node.TEXT_NODE && k < g.length) k += 1;
                else if (c[f]) g = c[f], f += 1, h = k = 0;
                else {
                    f = !1;
                    break a
                }
                e.setStart(g, h);
                e.setEnd(g, k)
            }
            f = !0
        }
        if (!f) return null;
        a: {
            f = c.length - 1;g = c[f];k = h = d.endContainer === g ? d.endOffset : g.nodeType === Node.TEXT_NODE ? g.length : g.childNodes.length;d.setStart(g, h);
            for (d.setEnd(g, k); !a(d);) {
                if (g.nodeType === Node.ELEMENT_NODE && 0 < h) h = 0;
                else if (g.nodeType === Node.TEXT_NODE && 0 < h) h -= 1;
                else if (c[f]) g = c[f], f -= 1, h = k = g.length || g.childNodes.length;
                else {
                    c = !1;
                    break a
                }
                d.setStart(g, h);
                d.setEnd(g, k)
            }
            c = !0
        }
        if (!c) return null;
        b.setStart(e.startContainer, e.startOffset);
        b.setEnd(d.endContainer, d.endOffset);
        return {
            firstRange: e,
            lastRange: d,
            fillerRange: b
        }
    }

    function b(a, b) {
        var c = {};
        c.top = Math.min(a.top, b.top);
        c.left =
            Math.min(a.left, b.left);
        c.right = Math.max(a.right, b.right);
        c.bottom = Math.max(a.bottom, b.bottom);
        c.width = c.right - c.left;
        c.height = c.bottom - c.top;
        return c
    }

    function h(a, c) {
        c && 0 < c.width && 0 < c.height && (a = a ? b(a, c) : c);
        return a
    }

    function n(a) {
        function b(a) {
            C.setUnfilteredPosition(a, 0);
            return t.acceptNode(a) === D && s.acceptPosition(C) === D ? D : I
        }

        function c(a) {
            var e = null;
            b(a) === D && (e = u.getBoundingClientRect(a));
            return e
        }
        var d = a.commonAncestorContainer,
            f = a.startContainer,
            g = a.endContainer,
            k = a.startOffset,
            p = a.endOffset,
            l, n, m = null,
            q, r = x.createRange(),
            s, t = new odf.OdfNodeFilter,
            v;
        if (f === d || g === d) return r = a.cloneRange(), m = r.getBoundingClientRect(), r.detach(), m;
        for (a = f; a.parentNode !== d;) a = a.parentNode;
        for (n = g; n.parentNode !== d;) n = n.parentNode;
        s = e.createRootFilter(f);
        for (d = a.nextSibling; d && d !== n;) q = c(d), m = h(m, q), d = d.nextSibling;
        if (w.isParagraph(a)) m = h(m, u.getBoundingClientRect(a));
        else if (a.nodeType === Node.TEXT_NODE) d = a, r.setStart(d, k), r.setEnd(d, d === n ? p : d.length), q = r.getBoundingClientRect(), m = h(m, q);
        else
            for (v = x.createTreeWalker(a,
                    NodeFilter.SHOW_TEXT, b, !1), d = v.currentNode = f; d && d !== g;) r.setStart(d, k), r.setEnd(d, d.length), q = r.getBoundingClientRect(), m = h(m, q), l = d, k = 0, d = v.nextNode();
        l || (l = f);
        if (w.isParagraph(n)) m = h(m, u.getBoundingClientRect(n));
        else if (n.nodeType === Node.TEXT_NODE) d = n, r.setStart(d, d === a ? k : 0), r.setEnd(d, p), q = r.getBoundingClientRect(), m = h(m, q);
        else
            for (v = x.createTreeWalker(n, NodeFilter.SHOW_TEXT, b, !1), d = v.currentNode = g; d && d !== l;)
                if (r.setStart(d, 0), r.setEnd(d, p), q = r.getBoundingClientRect(), m = h(m, q), d = v.previousNode()) p =
                    d.length;
        return m
    }

    function q(a, b) {
        var c = a.getBoundingClientRect(),
            e = {
                width: 0
            };
        e.top = c.top;
        e.bottom = c.bottom;
        e.height = c.height;
        e.left = e.right = b ? c.right : c.left;
        return e
    }

    function m() {
        var a = f.getSelectedRange(),
            c;
        if (c = H && f.getSelectionType() === ops.OdtCursor.RangeSelection && !a.collapsed) {
            k();
            var e = u.getBoundingClientRect(g),
                h = z.getZoomLevel(),
                a = d(a),
                p, l, m, r, x, w;
            if (a) {
                c = a.firstRange;
                p = a.lastRange;
                l = a.fillerRange;
                m = u.translateRect(q(c, !1), e, h);
                x = u.translateRect(q(p, !0), e, h);
                r = (r = n(l)) ? u.translateRect(r,
                    e, h) : b(m, x);
                w = r.left;
                r = m.left + Math.max(0, r.width - (m.left - r.left));
                e = Math.min(m.top, x.top);
                h = x.top + x.height;
                w = [{
                    x: m.left,
                    y: e + m.height
                }, {
                    x: m.left,
                    y: e
                }, {
                    x: r,
                    y: e
                }, {
                    x: r,
                    y: h - x.height
                }, {
                    x: x.right,
                    y: h - x.height
                }, {
                    x: x.right,
                    y: h
                }, {
                    x: w,
                    y: h
                }, {
                    x: w,
                    y: e + m.height
                }, {
                    x: m.left,
                    y: e + m.height
                }];
                r = "";
                var C;
                for (C = 0; C < w.length; C += 1) r += w[C].x + "," + w[C].y + " ";
                y.setAttribute("points", r);
                v.setAttribute("cx", m.left);
                v.setAttribute("cy", e + m.height / 2);
                s.setAttribute("cx", x.right);
                s.setAttribute("cy", h - x.height / 2);
                c.detach();
                p.detach();
                l.detach()
            }
            c = Boolean(a)
        }
        t.style.display = c ? "block" : "none"
    }

    function l(a) {
        H && a === f && N.trigger()
    }

    function r(a) {
        a = 8 / a;
        v.setAttribute("r", a);
        s.setAttribute("r", a)
    }

    function c(a) {
        g.removeChild(t);
        g.classList.remove("webodf-virtualSelections");
        f.getDocument().unsubscribe(ops.Document.signalCursorMoved, l);
        z.unsubscribe(gui.ZoomHelper.signalZoomChanged, r);
        a()
    }
    var e = f.getDocument(),
        p, g, x = e.getDOMDocument(),
        t = x.createElementNS("http://www.w3.org/2000/svg", "svg"),
        y = x.createElementNS("http://www.w3.org/2000/svg",
            "polygon"),
        v = x.createElementNS("http://www.w3.org/2000/svg", "circle"),
        s = x.createElementNS("http://www.w3.org/2000/svg", "circle"),
        w = odf.OdfUtils,
        u = core.DomUtils,
        z = e.getCanvas().getZoomHelper(),
        H = !0,
        C = f.getDocument().createPositionIterator(e.getRootNode()),
        D = NodeFilter.FILTER_ACCEPT,
        I = NodeFilter.FILTER_REJECT,
        N;
    this.rerender = function() {
        H && N.trigger()
    };
    this.show = function() {
        H = !0;
        N.trigger()
    };
    this.hide = function() {
        H = !1;
        N.trigger()
    };
    this.destroy = function(a) {
        core.Async.destroyAll([N.destroy, c], a)
    };
    (function() {
        var a =
            f.getMemberId();
        N = core.Task.createRedrawTask(m);
        k();
        t.setAttributeNS("urn:webodf:names:editinfo", "editinfo:memberid", a);
        g.classList.add("webodf-virtualSelections");
        f.getDocument().subscribe(ops.Document.signalCursorMoved, l);
        z.subscribe(gui.ZoomHelper.signalZoomChanged, r);
        r(z.getZoomLevel())
    })()
};
gui.UndoStateRules = function() {
    function f(a, d) {
        var f = a.length;
        this.previous = function() {
            for (f -= 1; 0 <= f; f -= 1)
                if (d(a[f])) return a[f];
            return null
        }
    }

    function k(a) {
        a = a.spec();
        var d;
        a.hasOwnProperty("position") && (d = a.position);
        return d
    }

    function a(a) {
        return a.isEdit
    }

    function d(a, d, f) {
        if (!f) return f = k(a) - k(d), 0 === f || 1 === Math.abs(f);
        a = k(a);
        d = k(d);
        f = k(f);
        return a - d === d - f
    }
    this.isEditOperation = a;
    this.isPartOfOperationSet = function(b, h) {
        var k = void 0 !== b.group,
            q;
        if (!b.isEdit || 0 === h.length) return !0;
        q = h[h.length - 1];
        if (k &&
            b.group === q.group) return !0;
        a: switch (b.spec().optype) {
            case "RemoveText":
            case "InsertText":
                q = !0;
                break a;
            default:
                q = !1
        }
        if (q && h.some(a)) {
            if (k) {
                var m;
                k = b.spec().optype;
                q = new f(h, a);
                var l = q.previous(),
                    r = null,
                    c, e;
                runtime.assert(Boolean(l), "No edit operations found in state");
                e = l.group;
                runtime.assert(void 0 !== e, "Operation has no group");
                for (c = 1; l && l.group === e;) {
                    if (k === l.spec().optype) {
                        m = l;
                        break
                    }
                    l = q.previous()
                }
                if (m) {
                    for (l = q.previous(); l;) {
                        if (l.group !== e) {
                            if (2 === c) break;
                            e = l.group;
                            c += 1
                        }
                        if (k === l.spec().optype) {
                            r =
                                l;
                            break
                        }
                        l = q.previous()
                    }
                    m = d(b, m, r)
                } else m = !1;
                return m
            }
            m = b.spec().optype;
            k = new f(h, a);
            q = k.previous();
            runtime.assert(Boolean(q), "No edit operations found in state");
            m = m === q.spec().optype ? d(b, q, k.previous()) : !1;
            return m
        }
        return !1
    }
};
(function() {
    function f(a, b) {
        this.mainId = void 0 !== a ? a : -1;
        this.subId = void 0 !== b ? b : -1
    }

    function k(d, b, h) {
        function k(a, b) {
            return a + (d.isEditOperation(b) ? 1 : 0)
        }
        var q, m, l;
        this.addOperation = function(a) {
            d.isEditOperation(a) && (l += 1);
            m.push(a)
        };
        this.isNextStateId = function(a) {
            return a.mainId === q && a.subId === l
        };
        this.getNextStateId = function() {
            return new f(q, l)
        };
        this.getOperations = function() {
            return m
        };
        q = a += 1;
        m = b || [];
        l = b && h ? b.reduce(k, 0) : 0
    }
    var a = 0;
    gui.TrivialUndoManager = function(a) {
        function b() {
            return !0 !== u.isNextStateId(w)
        }

        function h(a) {
            a = a.getOperations();
            0 < a.length && (I = !0, v(a), I = !1)
        }

        function n() {
            C.emit(gui.UndoManager.signalUndoStackChanged, {
                undoAvailable: p.hasUndoStates(),
                redoAvailable: p.hasRedoStates()
            })
        }

        function q(a) {
            var c = b();
            a !== c && C.emit(gui.UndoManager.signalDocumentModifiedChanged, c)
        }

        function m() {
            u !== y && u !== z[z.length - 1] && z.push(u)
        }

        function l(a) {
            var b = a.previousSibling || a.nextSibling;
            a.parentNode.removeChild(a);
            x.normalizeTextNodes(b)
        }

        function r(a) {
            return Object.keys(a).map(function(b) {
                return a[b]
            })
        }

        function c(a) {
            function b(a) {
                var g =
                    a.spec();
                if (d[g.memberid]) switch (g.optype) {
                    case "AddCursor":
                        c[g.memberid] || (c[g.memberid] = a, delete d[g.memberid], f -= 1);
                        break;
                    case "MoveCursor":
                        e[g.memberid] || (e[g.memberid] = a)
                }
            }
            var c = {},
                e = {},
                d = {},
                f, g;
            g = a.pop();
            s.getMemberIds().forEach(function(a) {
                d[a] = !0
            });
            for (f = Object.keys(d).length; g && 0 < f;) g = g.getOperations(), g.reverse(), g.forEach(b), g = a.pop();
            return new k(D, r(c).concat(r(e)))
        }

        function e() {
            var a = b(),
                e = t = s.cloneDocumentElement();
            x.getElementsByTagNameNS(e, g, "cursor").forEach(l);
            x.getElementsByTagNameNS(e,
                g, "anchor").forEach(l);
            m();
            u = y = c([y].concat(z));
            z.length = 0;
            H.length = 0;
            a || (w = u.getNextStateId());
            n();
            q(a)
        }
        var p = this,
            g = "urn:webodf:names:cursor",
            x = core.DomUtils,
            t, y, v, s, w, u, z = [],
            H = [],
            C = new core.EventNotifier([gui.UndoManager.signalUndoStackChanged, gui.UndoManager.signalUndoStateCreated, gui.UndoManager.signalUndoStateModified, gui.UndoManager.signalDocumentModifiedChanged, gui.TrivialUndoManager.signalDocumentRootReplaced]),
            D = a || new gui.UndoStateRules,
            I = !1;
        this.subscribe = function(a, b) {
            C.subscribe(a, b)
        };
        this.unsubscribe = function(a, b) {
            C.unsubscribe(a, b)
        };
        this.isDocumentModified = b;
        this.setDocumentModified = function(a) {
            b() !== a && (w = a ? new f : u.getNextStateId(), C.emit(gui.UndoManager.signalDocumentModifiedChanged, a))
        };
        this.hasUndoStates = function() {
            return 0 < z.length
        };
        this.hasRedoStates = function() {
            return 0 < H.length
        };
        this.setDocument = function(a) {
            s = a
        };
        this.purgeInitialState = function() {
            var a = b();
            z.length = 0;
            H.length = 0;
            u = y = new k(D);
            w = u.getNextStateId();
            t = null;
            n();
            q(a)
        };
        this.setInitialState = e;
        this.initialize = function() {
            t ||
                e()
        };
        this.setPlaybackFunction = function(a) {
            v = a
        };
        this.onOperationExecuted = function(a) {
            if (!I) {
                var c = b();
                D.isEditOperation(a) && (u === y || 0 < H.length) || !D.isPartOfOperationSet(a, u.getOperations()) ? (H.length = 0, m(), u = new k(D, [a], !0), z.push(u), C.emit(gui.UndoManager.signalUndoStateCreated, {
                    operations: u.getOperations()
                }), n()) : (u.addOperation(a), C.emit(gui.UndoManager.signalUndoStateModified, {
                    operations: u.getOperations()
                }));
                q(c)
            }
        };
        this.moveForward = function(a) {
            for (var c = 0, e = b(), d; a && H.length;) d = H.pop(), z.push(d),
                h(d), a -= 1, c += 1;
            c && (u = z[z.length - 1], n(), q(e));
            return c
        };
        this.moveBackward = function(a) {
            for (var c = 0, e = b(); a && z.length;) H.push(z.pop()), a -= 1, c += 1;
            c && (s.getMemberIds().forEach(function(a) {
                s.removeCursor(a)
            }), s.setDocumentElement(t.cloneNode(!0)), C.emit(gui.TrivialUndoManager.signalDocumentRootReplaced, {}), h(y), z.forEach(h), u = z[z.length - 1] || y, n(), q(e));
            return c
        };
        u = y = new k(D);
        w = u.getNextStateId()
    };
    gui.TrivialUndoManager.signalDocumentRootReplaced = "documentRootReplaced"
})();
odf.GraphicProperties = function(f, k, a) {
    var d = this,
        b = odf.Namespaces.stylens,
        h = odf.Namespaces.svgns;
    this.verticalPos = function() {
        return d.data.value("verticalPos")
    };
    this.verticalRel = function() {
        return d.data.value("verticalRel")
    };
    this.horizontalPos = function() {
        return d.data.value("horizontalPos")
    };
    this.horizontalRel = function() {
        return d.data.value("horizontalRel")
    };
    this.strokeWidth = function() {
        return d.data.value("strokeWidth")
    };
    d.data = new odf.LazyStyleProperties(void 0 === a ? void 0 : a.data, {
        verticalPos: function() {
            var a =
                f.getAttributeNS(b, "vertical-pos");
            return "" === a ? void 0 : a
        },
        verticalRel: function() {
            var a = f.getAttributeNS(b, "vertical-rel");
            return "" === a ? void 0 : a
        },
        horizontalPos: function() {
            var a = f.getAttributeNS(b, "horizontal-pos");
            return "" === a ? void 0 : a
        },
        horizontalRel: function() {
            var a = f.getAttributeNS(b, "horizontal-rel");
            return "" === a ? void 0 : a
        },
        strokeWidth: function() {
            var a = f.getAttributeNS(h, "stroke-width");
            return k.parseLength(a)
        }
    })
};
odf.ComputedGraphicProperties = function() {
    var f;
    this.setGraphicProperties = function(k) {
        f = k
    };
    this.verticalPos = function() {
        return f && f.verticalPos() || "from-top"
    };
    this.verticalRel = function() {
        return f && f.verticalRel() || "page"
    };
    this.horizontalPos = function() {
        return f && f.horizontalPos() || "from-left"
    };
    this.horizontalRel = function() {
        return f && f.horizontalRel() || "page"
    }
};
odf.PageLayoutProperties = function(f, k, a) {
    var d = this,
        b = odf.Namespaces.fons;
    this.pageHeight = function() {
        return d.data.value("pageHeight") || 1123
    };
    this.pageWidth = function() {
        return d.data.value("pageWidth") || 794
    };
    d.data = new odf.LazyStyleProperties(void 0 === a ? void 0 : a.data, {
        pageHeight: function() {
            var a;
            f && (a = f.getAttributeNS(b, "page-height"), a = k.parseLength(a));
            return a
        },
        pageWidth: function() {
            var a;
            f && (a = f.getAttributeNS(b, "page-width"), a = k.parseLength(a));
            return a
        }
    })
};
odf.PageLayout = function(f, k, a) {
    var d = null;
    f && (d = k.getPropertiesElement("page-layout-properties", f));
    this.pageLayout = new odf.PageLayoutProperties(d, k, a && a.pageLayout)
};
odf.PageLayoutCache = function() {};
odf.PageLayoutCache.prototype.getPageLayout = function(f) {};
odf.PageLayoutCache.prototype.getDefaultPageLayout = function() {};
odf.ParagraphProperties = function(f, k, a) {
    var d = this,
        b = odf.Namespaces.fons;
    this.marginTop = function() {
        return d.data.value("marginTop")
    };
    d.data = new odf.LazyStyleProperties(void 0 === a ? void 0 : a.data, {
        marginTop: function() {
            var d = f.getAttributeNS(b, "margin-top");
            return k.parsePositiveLengthOrPercent(d, "marginTop", a && a.data)
        }
    })
};
odf.ComputedParagraphProperties = function() {
    var f = {},
        k = [];
    this.setStyleChain = function(a) {
        k = a;
        f = {}
    };
    this.marginTop = function() {
        var a, d;
        if (f.hasOwnProperty("marginTop")) a = f.marginTop;
        else {
            for (d = 0; void 0 === a && d < k.length; d += 1) a = k[d].marginTop();
            f.marginTop = a
        }
        return a || 0
    }
};
odf.TextProperties = function(f, k, a) {
    var d = this,
        b = odf.Namespaces.fons;
    this.fontSize = function() {
        return d.data.value("fontSize")
    };
    d.data = new odf.LazyStyleProperties(void 0 === a ? void 0 : a.data, {
        fontSize: function() {
            var d = f.getAttributeNS(b, "font-size");
            return k.parsePositiveLengthOrPercent(d, "fontSize", a && a.data)
        }
    })
};
odf.ComputedTextProperties = function() {
    var f = {},
        k = [];
    this.setStyleChain = function(a) {
        k = a;
        f = {}
    };
    this.fontSize = function() {
        var a, d;
        if (f.hasOwnProperty("fontSize")) a = f.fontSize;
        else {
            for (d = 0; void 0 === a && d < k.length; d += 1) a = k[d].fontSize();
            f.fontSize = a
        }
        return a || 12
    }
};
odf.MasterPage = function(f, k) {
    var a;
    f ? (a = f.getAttributeNS(odf.Namespaces.stylens, "page-layout-name"), this.pageLayout = k.getPageLayout(a)) : this.pageLayout = k.getDefaultPageLayout()
};
odf.MasterPageCache = function() {};
odf.MasterPageCache.prototype.getMasterPage = function(f) {};
odf.StylePileEntry = function(f, k, a, d) {
    this.masterPage = function() {
        var b = f.getAttributeNS(odf.Namespaces.stylens, "master-page-name"),
            d = null;
        b && (d = a.getMasterPage(b));
        return d
    };
    (function(a) {
        var h = f.getAttributeNS(odf.Namespaces.stylens, "family"),
            n = null;
        if ("graphic" === h || "chart" === h) a.graphic = void 0 === d ? void 0 : d.graphic, n = k.getPropertiesElement("graphic-properties", f, n), null !== n && (a.graphic = new odf.GraphicProperties(n, k, a.graphic));
        if ("paragraph" === h || "table-cell" === h || "graphic" === h || "presentation" ===
            h || "chart" === h) a.paragraph = void 0 === d ? void 0 : d.paragraph, n = k.getPropertiesElement("paragraph-properties", f, n), null !== n && (a.paragraph = new odf.ParagraphProperties(n, k, a.paragraph));
        if ("text" === h || "paragraph" === h || "table-cell" === h || "graphic" === h || "presentation" === h || "chart" === h) a.text = void 0 === d ? void 0 : d.text, n = k.getPropertiesElement("text-properties", f, n), null !== n && (a.text = new odf.TextProperties(n, k, a.text))
    })(this)
};
odf.StylePile = function(f, k) {
    function a(a, b) {
        var e, h;
        a.hasAttributeNS(d, "parent-style-name") && (h = a.getAttributeNS(d, "parent-style-name"), -1 === b.indexOf(h) && (e = l(h, b)));
        return new odf.StylePileEntry(a, f, k, e)
    }
    var d = odf.Namespaces.stylens,
        b = {},
        h = {},
        n, q = {},
        m = {},
        l;
    l = function(d, c) {
        var e = q[d],
            f;
        !e && (f = b[d]) && (c.push(d), e = a(f, c), q[d] = e);
        return e
    };
    this.getStyle = function(d) {
        var c = m[d] || q[d],
            e, f = [];
        c || (e = h[d], e || (e = b[d]) && f.push(d), e && (c = a(e, f)));
        return c
    };
    this.addCommonStyle = function(a) {
        var c;
        a.hasAttributeNS(d,
            "name") && (c = a.getAttributeNS(d, "name"), b.hasOwnProperty(c) || (b[c] = a))
    };
    this.addAutomaticStyle = function(a) {
        var b;
        a.hasAttributeNS(d, "name") && (b = a.getAttributeNS(d, "name"), h.hasOwnProperty(b) || (h[b] = a))
    };
    this.setDefaultStyle = function(b) {
        void 0 === n && (n = a(b, []))
    };
    this.getDefaultStyle = function() {
        return n
    }
};
odf.ComputedGraphicStyle = function() {
    this.text = new odf.ComputedTextProperties;
    this.paragraph = new odf.ComputedParagraphProperties;
    this.graphic = new odf.ComputedGraphicProperties
};
odf.ComputedParagraphStyle = function() {
    this.text = new odf.ComputedTextProperties;
    this.paragraph = new odf.ComputedParagraphProperties
};
odf.ComputedTextStyle = function() {
    this.text = new odf.ComputedTextProperties
};
odf.StyleCache = function(f) {
    function k(a, b, c, e) {
        b = c.getAttributeNS(b, "class-names");
        var d;
        if (b)
            for (b = b.split(" "), d = 0; d < b.length; d += 1)
                if (c = b[d]) e.push(a), e.push(c)
    }

    function a(a, b) {
        var c = t.getStyleName("paragraph", a);
        void 0 !== c && (b.push("paragraph"), b.push(c));
        a.namespaceURI !== g || "h" !== a.localName && "p" !== a.localName || k("paragraph", g, a, b);
        return b
    }

    function d(a, b, c) {
        var e = [],
            d, f, g, h;
        for (d = 0; d < a.length; d += 2) g = a[d], h = a[d + 1], g = q[g], h = g.getStyle(h), void 0 !== h && (h = h[b], void 0 !== h && h !== f && (e.push(h), f = h));
        g = q[c];
        if (h = g.getDefaultStyle()) h = h[b], void 0 !== h && h !== f && e.push(h);
        return e
    }

    function b(c, e) {
        var d = t.getStyleName("text", c),
            h = c.parentNode;
        void 0 !== d && (e.push("text"), e.push(d));
        "span" === c.localName && c.namespaceURI === g && k("text", g, c, e);
        if (!h || h === f) return e;
        h.namespaceURI !== g || "p" !== h.localName && "h" !== h.localName ? b(h, e) : a(h, e);
        return e
    }

    function h(a) {
        a = a.getAttributeNS(x, "family");
        return q[a]
    }
    var n = this,
        q, m, l, r, c, e, p, g = odf.Namespaces.textns,
        x = odf.Namespaces.stylens,
        t = new odf.StyleInfo,
        y = new odf.StyleParseUtils,
        v, s, w, u, z, H;
    this.getComputedGraphicStyle = function(a) {
        var b = [];
        a = t.getStyleName("graphic", a);
        void 0 !== a && (b.push("graphic"), b.push(a));
        a = b.join("/");
        var c = r[a];
        runtime.assert(0 === b.length % 2, "Invalid style chain.");
        void 0 === c && (c = new odf.ComputedGraphicStyle, c.graphic.setGraphicProperties(d(b, "graphic", "graphic")[0]), c.text.setStyleChain(d(b, "text", "graphic")), c.paragraph.setStyleChain(d(b, "paragraph", "graphic")), r[a] = c);
        return c
    };
    this.getComputedParagraphStyle = function(b) {
        b = a(b, []);
        var c = b.join("/"),
            e = l[c];
        runtime.assert(0 === b.length % 2, "Invalid style chain.");
        void 0 === e && (e = new odf.ComputedParagraphStyle, e.text.setStyleChain(d(b, "text", "paragraph")), e.paragraph.setStyleChain(d(b, "paragraph", "paragraph")), l[c] = e);
        return e
    };
    this.getComputedTextStyle = function(a) {
        a = b(a, []);
        var c = a.join("/"),
            e = m[c];
        runtime.assert(0 === a.length % 2, "Invalid style chain.");
        void 0 === e && (e = new odf.ComputedTextStyle, e.text.setStyleChain(d(a, "text", "text")), m[c] = e);
        return e
    };
    this.getPageLayout = function(a) {
        var b = H[a];
        b || ((b =
            z[a]) ? (b = new odf.PageLayout(b, y, u), H[a] = b) : b = u);
        return b
    };
    this.getDefaultPageLayout = function() {
        return u
    };
    this.getMasterPage = function(a) {
        var b = s[a];
        void 0 === b && ((b = v[a]) ? (b = new odf.MasterPage(b, n), s[a] = b) : b = null);
        return b
    };
    this.getDefaultMasterPage = function() {
        return w
    };
    this.update = function() {
        var a, b, d = null,
            g = null;
        m = {};
        l = {};
        r = {};
        v = {};
        s = {};
        H = {};
        z = {};
        c = new odf.StylePile(y, n);
        e = new odf.StylePile(y, n);
        p = new odf.StylePile(y, n);
        q = {
            text: c,
            paragraph: e,
            graphic: p
        };
        for (a = f.styles.firstElementChild; a;) a.namespaceURI ===
            x && ((b = h(a)) ? "style" === a.localName ? b.addCommonStyle(a) : "default-style" === a.localName && b.setDefaultStyle(a) : "default-page-layout" === a.localName && (d = a)), a = a.nextElementSibling;
        u = new odf.PageLayout(d, y);
        for (a = f.automaticStyles.firstElementChild; a;) a.namespaceURI === x && ((b = h(a)) && "style" === a.localName ? b.addAutomaticStyle(a) : "page-layout" === a.localName && (z[a.getAttributeNS(x, "name")] = a)), a = a.nextElementSibling;
        for (a = f.masterStyles.firstElementChild; a;) a.namespaceURI === x && "master-page" === a.localName && (g =
            g || a, b = a, d = b.getAttributeNS(x, "name"), 0 < d.length && !v.hasOwnProperty(d) && (v[d] = b)), a = a.nextElementSibling;
        w = new odf.MasterPage(g, n)
    }
};
ops.OperationTransformMatrix = function() {
    function f(a) {
        a.position += a.length;
        a.length *= -1
    }

    function k(a) {
        var b = 0 > a.length;
        b && f(a);
        return b
    }

    function a(a, b) {
        function d(h) {
            a[h] === b && f.push(h)
        }
        var f = [];
        a && ["style:parent-style-name", "style:next-style-name"].forEach(d);
        return f
    }

    function d(a, b) {
        function d(f) {
            a[f] === b && delete a[f]
        }
        a && ["style:parent-style-name", "style:next-style-name"].forEach(d)
    }

    function b(a) {
        var e = {};
        Object.keys(a).forEach(function(d) {
            e[d] = "object" === typeof a[d] ? b(a[d]) : a[d]
        });
        return e
    }

    function h(a,
        b, d, f) {
        var h, k = !1,
            l = !1,
            m, n = [];
        f && f.attributes && (n = f.attributes.split(","));
        a && (d || 0 < n.length) && Object.keys(a).forEach(function(b) {
            var e = a[b],
                f;
            "object" !== typeof e && (d && (f = d[b]), void 0 !== f ? (delete a[b], l = !0, f === e && (delete d[b], k = !0)) : -1 !== n.indexOf(b) && (delete a[b], l = !0))
        });
        if (b && b.attributes && (d || 0 < n.length)) {
            m = b.attributes.split(",");
            for (f = 0; f < m.length; f += 1)
                if (h = m[f], d && void 0 !== d[h] || n && -1 !== n.indexOf(h)) m.splice(f, 1), f -= 1, l = !0;
            0 < m.length ? b.attributes = m.join(",") : delete b.attributes
        }
        return {
            majorChanged: k,
            minorChanged: l
        }
    }

    function n(a) {
        for (var b in a)
            if (a.hasOwnProperty(b)) return !0;
        return !1
    }

    function q(a) {
        for (var b in a)
            if (a.hasOwnProperty(b) && ("attributes" !== b || 0 < a.attributes.length)) return !0;
        return !1
    }

    function m(a, b, d, f, k) {
        var l = a ? a[k] : null,
            m = b ? b[k] : null,
            r = d ? d[k] : null,
            s = f ? f[k] : null,
            w;
        w = h(l, m, r, s);
        l && !n(l) && delete a[k];
        m && !q(m) && delete b[k];
        r && !n(r) && delete d[k];
        s && !q(s) && delete f[k];
        return w
    }

    function l(a, b) {
        return {
            opSpecsA: [a],
            opSpecsB: [b]
        }
    }
    var r;
    r = {
        AddCursor: {
            AddCursor: l,
            AddMember: l,
            AddStyle: l,
            ApplyDirectStyling: l,
            InsertText: l,
            MergeParagraph: l,
            MoveCursor: l,
            RemoveCursor: l,
            RemoveMember: l,
            RemoveStyle: l,
            RemoveText: l,
            SetParagraphStyle: l,
            SplitParagraph: l,
            UpdateMember: l,
            UpdateMetadata: l,
            UpdateParagraphStyle: l
        },
        AddMember: {
            AddStyle: l,
            ApplyDirectStyling: l,
            InsertText: l,
            MergeParagraph: l,
            MoveCursor: l,
            RemoveCursor: l,
            RemoveStyle: l,
            RemoveText: l,
            SetParagraphStyle: l,
            SplitParagraph: l,
            UpdateMetadata: l,
            UpdateParagraphStyle: l
        },
        AddStyle: {
            AddStyle: l,
            ApplyDirectStyling: l,
            InsertText: l,
            MergeParagraph: l,
            MoveCursor: l,
            RemoveCursor: l,
            RemoveMember: l,
            RemoveStyle: function(b, e) {
                var f, g = [b],
                    h = [e];
                b.styleFamily === e.styleFamily && (f = a(b.setProperties, e.styleName), 0 < f.length && (f = {
                    optype: "UpdateParagraphStyle",
                    memberid: e.memberid,
                    timestamp: e.timestamp,
                    styleName: b.styleName,
                    removedProperties: {
                        attributes: f.join(",")
                    }
                }, h.unshift(f)), d(b.setProperties, e.styleName));
                return {
                    opSpecsA: g,
                    opSpecsB: h
                }
            },
            RemoveText: l,
            SetParagraphStyle: l,
            SplitParagraph: l,
            UpdateMember: l,
            UpdateMetadata: l,
            UpdateParagraphStyle: l
        },
        ApplyDirectStyling: {
            ApplyDirectStyling: function(a, e, d) {
                var f,
                    h, k, l, q, r, w, u;
                l = [a];
                k = [e];
                if (!(a.position + a.length <= e.position || a.position >= e.position + e.length)) {
                    f = d ? a : e;
                    h = d ? e : a;
                    if (a.position !== e.position || a.length !== e.length) r = b(f), w = b(h);
                    e = m(h.setProperties, null, f.setProperties, null, "style:text-properties");
                    if (e.majorChanged || e.minorChanged) k = [], a = [], l = f.position + f.length, q = h.position + h.length, h.position < f.position ? e.minorChanged && (u = b(w), u.length = f.position - h.position, a.push(u), h.position = f.position, h.length = q - h.position) : f.position < h.position && e.majorChanged &&
                        (u = b(r), u.length = h.position - f.position, k.push(u), f.position = h.position, f.length = l - f.position), q > l ? e.minorChanged && (r = w, r.position = l, r.length = q - l, a.push(r), h.length = l - h.position) : l > q && e.majorChanged && (r.position = q, r.length = l - q, k.push(r), f.length = q - f.position), f.setProperties && n(f.setProperties) && k.push(f), h.setProperties && n(h.setProperties) && a.push(h), d ? (l = k, k = a) : l = a
                }
                return {
                    opSpecsA: l,
                    opSpecsB: k
                }
            },
            InsertText: function(a, b) {
                b.position <= a.position ? a.position += b.text.length : b.position <= a.position + a.length &&
                    (a.length += b.text.length);
                return {
                    opSpecsA: [a],
                    opSpecsB: [b]
                }
            },
            MergeParagraph: function(a, b) {
                var d = a.position,
                    f = a.position + a.length;
                d >= b.sourceStartPosition && (d -= 1);
                f >= b.sourceStartPosition && (f -= 1);
                a.position = d;
                a.length = f - d;
                return {
                    opSpecsA: [a],
                    opSpecsB: [b]
                }
            },
            MoveCursor: l,
            RemoveCursor: l,
            RemoveMember: l,
            RemoveStyle: l,
            RemoveText: function(a, b) {
                var d = a.position + a.length,
                    f = b.position + b.length,
                    h = [a],
                    k = [b];
                f <= a.position ? a.position -= b.length : b.position < d && (a.position < b.position ? a.length = f < d ? a.length - b.length :
                    b.position - a.position : (a.position = b.position, f < d ? a.length = d - f : h = []));
                return {
                    opSpecsA: h,
                    opSpecsB: k
                }
            },
            SetParagraphStyle: l,
            SplitParagraph: function(a, b) {
                b.position < a.position ? a.position += 1 : b.position < a.position + a.length && (a.length += 1);
                return {
                    opSpecsA: [a],
                    opSpecsB: [b]
                }
            },
            UpdateMember: l,
            UpdateMetadata: l,
            UpdateParagraphStyle: l
        },
        InsertText: {
            InsertText: function(a, b, d) {
                a.position < b.position ? b.position += a.text.length : a.position > b.position ? a.position += b.text.length : d ? b.position += a.text.length : a.position += b.text.length;
                return {
                    opSpecsA: [a],
                    opSpecsB: [b]
                }
            },
            MergeParagraph: function(a, b) {
                a.position >= b.sourceStartPosition ? a.position -= 1 : (a.position < b.sourceStartPosition && (b.sourceStartPosition += a.text.length), a.position < b.destinationStartPosition && (b.destinationStartPosition += a.text.length));
                return {
                    opSpecsA: [a],
                    opSpecsB: [b]
                }
            },
            MoveCursor: function(a, b) {
                var d = k(b);
                a.position < b.position ? b.position += a.text.length : a.position < b.position + b.length && (b.length += a.text.length);
                d && f(b);
                return {
                    opSpecsA: [a],
                    opSpecsB: [b]
                }
            },
            RemoveCursor: l,
            RemoveMember: l,
            RemoveStyle: l,
            RemoveText: function(a, b) {
                var d;
                d = b.position + b.length;
                var f = [a],
                    h = [b];
                d <= a.position ? a.position -= b.length : a.position <= b.position ? b.position += a.text.length : (b.length = a.position - b.position, d = {
                    optype: "RemoveText",
                    memberid: b.memberid,
                    timestamp: b.timestamp,
                    position: a.position + a.text.length,
                    length: d - a.position
                }, h.unshift(d), a.position = b.position);
                return {
                    opSpecsA: f,
                    opSpecsB: h
                }
            },
            SetParagraphStyle: function(a, b) {
                b.position > a.position && (b.position += a.text.length);
                return {
                    opSpecsA: [a],
                    opSpecsB: [b]
                }
            },
            SplitParagraph: function(a, b) {
                a.position < b.sourceParagraphPosition && (b.sourceParagraphPosition += a.text.length);
                a.position <= b.position ? b.position += a.text.length : a.position += 1;
                return {
                    opSpecsA: [a],
                    opSpecsB: [b]
                }
            },
            UpdateMember: l,
            UpdateMetadata: l,
            UpdateParagraphStyle: l
        },
        MergeParagraph: {
            MergeParagraph: function(a, b, d) {
                var f = [a],
                    h = [b],
                    k;
                a.destinationStartPosition === b.destinationStartPosition ? (f = [], h = [], a.moveCursor && (k = {
                        optype: "MoveCursor",
                        memberid: a.memberid,
                        timestamp: a.timestamp,
                        position: a.sourceStartPosition -
                            1
                    }, f.push(k)), b.moveCursor && (k = {
                        optype: "MoveCursor",
                        memberid: b.memberid,
                        timestamp: b.timestamp,
                        position: b.sourceStartPosition - 1
                    }, h.push(k)), a = d ? a : b, a = {
                        optype: "SetParagraphStyle",
                        memberid: a.memberid,
                        timestamp: a.timestamp,
                        position: a.destinationStartPosition,
                        styleName: a.paragraphStyleName
                    }, d ? f.push(a) : h.push(a)) : b.sourceStartPosition === a.destinationStartPosition ? (a.destinationStartPosition = b.destinationStartPosition, a.sourceStartPosition -= 1, a.paragraphStyleName = b.paragraphStyleName) : a.sourceStartPosition ===
                    b.destinationStartPosition ? (b.destinationStartPosition = a.destinationStartPosition, b.sourceStartPosition -= 1, b.paragraphStyleName = a.paragraphStyleName) : a.destinationStartPosition < b.destinationStartPosition ? (b.destinationStartPosition -= 1, b.sourceStartPosition -= 1) : (a.destinationStartPosition -= 1, a.sourceStartPosition -= 1);
                return {
                    opSpecsA: f,
                    opSpecsB: h
                }
            },
            MoveCursor: function(a, b) {
                var d = b.position,
                    f = b.position + b.length,
                    h = Math.min(d, f),
                    d = Math.max(d, f);
                h >= a.sourceStartPosition && (h -= 1);
                d >= a.sourceStartPosition &&
                    (d -= 1);
                0 <= b.length ? (b.position = h, b.length = d - h) : (b.position = d, b.length = h - d);
                return {
                    opSpecsA: [a],
                    opSpecsB: [b]
                }
            },
            RemoveCursor: l,
            RemoveMember: l,
            RemoveStyle: l,
            RemoveText: function(a, b) {
                b.position >= a.sourceStartPosition ? b.position -= 1 : (b.position < a.destinationStartPosition && (a.destinationStartPosition -= b.length), b.position < a.sourceStartPosition && (a.sourceStartPosition -= b.length));
                return {
                    opSpecsA: [a],
                    opSpecsB: [b]
                }
            },
            SetParagraphStyle: function(a, b) {
                var d = [a],
                    f = [b];
                if (b.position > a.sourceStartPosition) b.position -=
                    1;
                else if (b.position === a.destinationStartPosition || b.position === a.sourceStartPosition) b.position = a.destinationStartPosition, a.paragraphStyleName = b.styleName;
                return {
                    opSpecsA: d,
                    opSpecsB: f
                }
            },
            SplitParagraph: function(a, b) {
                var d, f = [a],
                    h = [b];
                b.position < a.destinationStartPosition ? (a.destinationStartPosition += 1, a.sourceStartPosition += 1) : b.position >= a.destinationStartPosition && b.position < a.sourceStartPosition ? (b.paragraphStyleName = a.paragraphStyleName, d = {
                    optype: "SetParagraphStyle",
                    memberid: a.memberid,
                    timestamp: a.timestamp,
                    position: a.destinationStartPosition,
                    styleName: a.paragraphStyleName
                }, f.push(d), b.position === a.sourceStartPosition - 1 && a.moveCursor && (d = {
                    optype: "MoveCursor",
                    memberid: a.memberid,
                    timestamp: a.timestamp,
                    position: b.position,
                    length: 0
                }, f.push(d)), a.destinationStartPosition = b.position + 1, a.sourceStartPosition += 1) : b.position >= a.sourceStartPosition && (b.position -= 1, b.sourceParagraphPosition -= 1);
                return {
                    opSpecsA: f,
                    opSpecsB: h
                }
            },
            UpdateMember: l,
            UpdateMetadata: l,
            UpdateParagraphStyle: l
        },
        MoveCursor: {
            MoveCursor: l,
            RemoveCursor: function(a,
                b) {
                return {
                    opSpecsA: a.memberid === b.memberid ? [] : [a],
                    opSpecsB: [b]
                }
            },
            RemoveMember: l,
            RemoveStyle: l,
            RemoveText: function(a, b) {
                var d = k(a),
                    g = a.position + a.length,
                    h = b.position + b.length;
                h <= a.position ? a.position -= b.length : b.position < g && (a.position < b.position ? a.length = h < g ? a.length - b.length : b.position - a.position : (a.position = b.position, a.length = h < g ? g - h : 0));
                d && f(a);
                return {
                    opSpecsA: [a],
                    opSpecsB: [b]
                }
            },
            SetParagraphStyle: l,
            SplitParagraph: function(a, b) {
                var d = k(a);
                b.position < a.position ? a.position += 1 : b.position < a.position +
                    a.length && (a.length += 1);
                d && f(a);
                return {
                    opSpecsA: [a],
                    opSpecsB: [b]
                }
            },
            UpdateMember: l,
            UpdateMetadata: l,
            UpdateParagraphStyle: l
        },
        RemoveCursor: {
            RemoveCursor: function(a, b) {
                var d = a.memberid === b.memberid;
                return {
                    opSpecsA: d ? [] : [a],
                    opSpecsB: d ? [] : [b]
                }
            },
            RemoveMember: l,
            RemoveStyle: l,
            RemoveText: l,
            SetParagraphStyle: l,
            SplitParagraph: l,
            UpdateMember: l,
            UpdateMetadata: l,
            UpdateParagraphStyle: l
        },
        RemoveMember: {
            RemoveStyle: l,
            RemoveText: l,
            SetParagraphStyle: l,
            SplitParagraph: l,
            UpdateMetadata: l,
            UpdateParagraphStyle: l
        },
        RemoveStyle: {
            RemoveStyle: function(a,
                b) {
                var d = a.styleName === b.styleName && a.styleFamily === b.styleFamily;
                return {
                    opSpecsA: d ? [] : [a],
                    opSpecsB: d ? [] : [b]
                }
            },
            RemoveText: l,
            SetParagraphStyle: function(a, b) {
                var d, f = [a],
                    h = [b];
                "paragraph" === a.styleFamily && a.styleName === b.styleName && (d = {
                    optype: "SetParagraphStyle",
                    memberid: a.memberid,
                    timestamp: a.timestamp,
                    position: b.position,
                    styleName: ""
                }, f.unshift(d), b.styleName = "");
                return {
                    opSpecsA: f,
                    opSpecsB: h
                }
            },
            SplitParagraph: l,
            UpdateMember: l,
            UpdateMetadata: l,
            UpdateParagraphStyle: function(b, e) {
                var f, g = [b],
                    h = [e];
                "paragraph" ===
                b.styleFamily && (f = a(e.setProperties, b.styleName), 0 < f.length && (f = {
                    optype: "UpdateParagraphStyle",
                    memberid: b.memberid,
                    timestamp: b.timestamp,
                    styleName: e.styleName,
                    removedProperties: {
                        attributes: f.join(",")
                    }
                }, g.unshift(f)), b.styleName === e.styleName ? h = [] : d(e.setProperties, b.styleName));
                return {
                    opSpecsA: g,
                    opSpecsB: h
                }
            }
        },
        RemoveText: {
            RemoveText: function(a, b) {
                var d = a.position + a.length,
                    f = b.position + b.length,
                    h = [a],
                    k = [b];
                f <= a.position ? a.position -= b.length : d <= b.position ? b.position -= a.length : b.position < d && (a.position <
                    b.position ? (a.length = f < d ? a.length - b.length : b.position - a.position, d < f ? (b.position = a.position, b.length = f - d) : k = []) : (d < f ? b.length -= a.length : b.position < a.position ? b.length = a.position - b.position : k = [], f < d ? (a.position = b.position, a.length = d - f) : h = []));
                return {
                    opSpecsA: h,
                    opSpecsB: k
                }
            },
            SetParagraphStyle: function(a, b) {
                a.position < b.position && (b.position -= a.length);
                return {
                    opSpecsA: [a],
                    opSpecsB: [b]
                }
            },
            SplitParagraph: function(a, b) {
                var d = a.position + a.length,
                    f = [a],
                    h = [b];
                b.position <= a.position ? a.position += 1 : b.position <
                    d && (a.length = b.position - a.position, d = {
                        optype: "RemoveText",
                        memberid: a.memberid,
                        timestamp: a.timestamp,
                        position: b.position + 1,
                        length: d - b.position
                    }, f.unshift(d));
                a.position + a.length <= b.position ? b.position -= a.length : a.position < b.position && (b.position = a.position);
                a.position + a.length < b.sourceParagraphPosition && (b.sourceParagraphPosition -= a.length);
                return {
                    opSpecsA: f,
                    opSpecsB: h
                }
            },
            UpdateMember: l,
            UpdateMetadata: l,
            UpdateParagraphStyle: l
        },
        SetParagraphStyle: {
            SetParagraphStyle: function(a, b, d) {
                a.position === b.position &&
                    (d ? b.styleName = a.styleName : a.styleName = b.styleName);
                return {
                    opSpecsA: [a],
                    opSpecsB: [b]
                }
            },
            SplitParagraph: function(a, d) {
                var f = [a],
                    g = [d],
                    h;
                a.position > d.position ? a.position += 1 : a.position === d.sourceParagraphPosition && (d.paragraphStyleName = a.styleName, h = b(a), h.position = d.position + 1, f.push(h));
                return {
                    opSpecsA: f,
                    opSpecsB: g
                }
            },
            UpdateMember: l,
            UpdateMetadata: l,
            UpdateParagraphStyle: l
        },
        SplitParagraph: {
            SplitParagraph: function(a, b, d) {
                var f, h;
                a.position < b.position ? f = !0 : b.position < a.position ? h = !0 : a.position === b.position &&
                    (d ? f = !0 : h = !0);
                f ? (b.position += 1, b.sourceParagraphPosition = a.position < b.sourceParagraphPosition ? b.sourceParagraphPosition + 1 : a.position + 1) : h && (a.position += 1, a.sourceParagraphPosition = b.position < b.sourceParagraphPosition ? a.sourceParagraphPosition + 1 : b.position + 1);
                return {
                    opSpecsA: [a],
                    opSpecsB: [b]
                }
            },
            UpdateMember: l,
            UpdateMetadata: l,
            UpdateParagraphStyle: l
        },
        UpdateMember: {
            UpdateMetadata: l,
            UpdateParagraphStyle: l
        },
        UpdateMetadata: {
            UpdateMetadata: function(a, b, d) {
                var f, k = [a],
                    l = [b];
                f = d ? a : b;
                a = d ? b : a;
                h(a.setProperties ||
                    null, a.removedProperties || null, f.setProperties || null, f.removedProperties || null);
                f.setProperties && n(f.setProperties) || f.removedProperties && q(f.removedProperties) || (d ? k = [] : l = []);
                a.setProperties && n(a.setProperties) || a.removedProperties && q(a.removedProperties) || (d ? l = [] : k = []);
                return {
                    opSpecsA: k,
                    opSpecsB: l
                }
            },
            UpdateParagraphStyle: l
        },
        UpdateParagraphStyle: {
            UpdateParagraphStyle: function(a, b, d) {
                var f, k = [a],
                    l = [b];
                a.styleName === b.styleName && (f = d ? a : b, a = d ? b : a, m(a.setProperties, a.removedProperties, f.setProperties,
                    f.removedProperties, "style:paragraph-properties"), m(a.setProperties, a.removedProperties, f.setProperties, f.removedProperties, "style:text-properties"), h(a.setProperties || null, a.removedProperties || null, f.setProperties || null, f.removedProperties || null), f.setProperties && n(f.setProperties) || f.removedProperties && q(f.removedProperties) || (d ? k = [] : l = []), a.setProperties && n(a.setProperties) || a.removedProperties && q(a.removedProperties) || (d ? l = [] : k = []));
                return {
                    opSpecsA: k,
                    opSpecsB: l
                }
            }
        }
    };
    this.passUnchanged = l;
    this.extendTransformations =
        function(a) {
            Object.keys(a).forEach(function(b) {
                var d = a[b],
                    f, h = r.hasOwnProperty(b);
                runtime.log((h ? "Extending" : "Adding") + " map for optypeA: " + b);
                h || (r[b] = {});
                f = r[b];
                Object.keys(d).forEach(function(a) {
                    var c = f.hasOwnProperty(a);
                    runtime.assert(b <= a, "Wrong order:" + b + ", " + a);
                    runtime.log("  " + (c ? "Overwriting" : "Adding") + " entry for optypeB: " + a);
                    f[a] = d[a]
                })
            })
        };
    this.transformOpspecVsOpspec = function(a, b) {
        var d = a.optype <= b.optype,
            f;
        runtime.log("Crosstransforming:");
        runtime.log(runtime.toJson(a));
        runtime.log(runtime.toJson(b));
        d || (f = a, a = b, b = f);
        (f = (f = r[a.optype]) && f[b.optype]) ? (f = f(a, b, !d), d || null === f || (f = {
            opSpecsA: f.opSpecsB,
            opSpecsB: f.opSpecsA
        })) : f = null;
        runtime.log("result:");
        f ? (runtime.log(runtime.toJson(f.opSpecsA)), runtime.log(runtime.toJson(f.opSpecsB))) : runtime.log("null");
        return f
    }
};
ops.OperationTransformer = function() {
    function f(a, d) {
        for (var b, h, n = [], q = []; 0 < a.length && d;) {
            b = a.shift();
            b = k.transformOpspecVsOpspec(b, d);
            if (!b) return null;
            n = n.concat(b.opSpecsA);
            if (0 === b.opSpecsB.length) {
                n = n.concat(a);
                d = null;
                break
            }
            for (; 1 < b.opSpecsB.length;) {
                h = f(a, b.opSpecsB.shift());
                if (!h) return null;
                q = q.concat(h.opSpecsB);
                a = h.opSpecsA
            }
            d = b.opSpecsB.pop()
        }
        d && q.push(d);
        return {
            opSpecsA: n,
            opSpecsB: q
        }
    }
    var k = new ops.OperationTransformMatrix;
    this.getOperationTransformMatrix = function() {
        return k
    };
    this.transform =
        function(a, d) {
            for (var b, h = []; 0 < d.length;) {
                b = f(a, d.shift());
                if (!b) return null;
                a = b.opSpecsA;
                h = h.concat(b.opSpecsB)
            }
            return {
                opSpecsA: a,
                opSpecsB: h
            }
        }
};
var webodf_css = '@namespace draw url(urn:oasis:names:tc:opendocument:xmlns:drawing:1.0);@namespace fo url(urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0);@namespace office url(urn:oasis:names:tc:opendocument:xmlns:office:1.0);@namespace presentation url(urn:oasis:names:tc:opendocument:xmlns:presentation:1.0);@namespace style url(urn:oasis:names:tc:opendocument:xmlns:style:1.0);@namespace svg url(urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0);@namespace table url(urn:oasis:names:tc:opendocument:xmlns:table:1.0);@namespace text url(urn:oasis:names:tc:opendocument:xmlns:text:1.0);@namespace webodfhelper url(urn:webodf:names:helper);@namespace cursor url(urn:webodf:names:cursor);@namespace editinfo url(urn:webodf:names:editinfo);@namespace annotation url(urn:webodf:names:annotation);@namespace dc url(http://purl.org/dc/elements/1.1/);@namespace svgns url(http://www.w3.org/2000/svg);office|document > *, office|document-content > * {display: none;}office|body, office|document {display: inline-block;position: relative;}text|p, text|h {display: block;padding: 0;margin: 0;line-height: normal;position: relative;}text|p::after, text|h::after {content: "\\200B";white-space: pre;}*[webodfhelper|containsparagraphanchor] {position: relative;}text|s {white-space: pre;}text|tab {display: inline;white-space: pre;}text|tracked-changes {display: none;}office|binary-data {display: none;}office|text {display: block;text-align: left;overflow: visible;word-wrap: break-word;}office|text::selection {background: transparent;}.webodf-virtualSelections *::selection {background: transparent;}.webodf-virtualSelections *::-moz-selection {background: transparent;}office|text * draw|text-box {display: block;border: 1px solid #d3d3d3;}office|text draw|frame {z-index: 1;}office|spreadsheet {display: block;border-collapse: collapse;empty-cells: show;font-family: sans-serif;font-size: 10pt;text-align: left;page-break-inside: avoid;overflow: hidden;}office|presentation {display: inline-block;text-align: left;}#shadowContent {display: inline-block;text-align: left;}draw|page {display: block;position: relative;overflow: hidden;}presentation|notes, presentation|footer-decl, presentation|date-time-decl {display: none;}@media print {draw|page {border: 1pt solid black;page-break-inside: avoid;}presentation|notes {}}office|spreadsheet text|p {border: 0px;padding: 1px;margin: 0px;}office|spreadsheet table|table {margin: 3px;}office|spreadsheet table|table:after {}office|spreadsheet table|table-row {counter-increment: row;}office|spreadsheet table|table-row:before {width: 3em;background: #cccccc;border: 1px solid black;text-align: center;content: counter(row);display: table-cell;}office|spreadsheet table|table-cell {border: 1px solid #cccccc;}table|table {display: table;}draw|frame table|table {width: 100%;height: 100%;background: white;}table|table-header-rows {display: table-header-group;}table|table-row {display: table-row;}table|table-column {display: table-column;}table|table-cell {width: 0.889in;display: table-cell;word-break: break-all;}draw|frame {display: block;}draw|image {display: block;width: 100%;height: 100%;top: 0px;left: 0px;background-repeat: no-repeat;background-size: 100% 100%;-moz-background-size: 100% 100%;}draw|frame > draw|image:nth-of-type(n+2) {display: none;}text|list:before {display: none;content:"";}text|list {display: block;}text|list-item {display: block;}text|number {display:none;}text|a {color: blue;text-decoration: underline;cursor: pointer;}.webodf-inactiveLinks text|a {cursor: text;}text|note-citation {vertical-align: super;font-size: smaller;}text|note-body {display: none;}text|note:hover text|note-citation {background: #dddddd;}text|note:hover text|note-body {display: block;left:1em;max-width: 80%;position: absolute;background: #ffffaa;}text|bibliography-source {display: none;}svg|title, svg|desc {display: none;}video {width: 100%;height: 100%}cursor|anchor {display: none;}cursor|cursor {display: none;}.webodf-caretOverlay {position: absolute;top: 5%;height: 1em;z-index: 10;padding-left: 1px;pointer-events: none;}.webodf-caretOverlay .caret {position: absolute;border-left: 2px solid black;top: 0;bottom: 0;right: 0;}.webodf-caretOverlay .handle {position: absolute;margin-top: 5px;padding-top: 3px;margin-left: auto;margin-right: auto;width: 64px;height: 68px;border-radius: 5px;opacity: 0.3;text-align: center;background-color: black;box-shadow: 0px 0px 5px rgb(90, 90, 90);border: 1px solid black;top: -85px;right: -32px;}.webodf-caretOverlay .handle > img {box-shadow: 0px 0px 5px rgb(90, 90, 90) inset;background-color: rgb(200, 200, 200);border-radius: 5px;border: 2px solid;height: 60px;width: 60px;display: block;margin: auto;}.webodf-caretOverlay .handle.active {opacity: 0.8;}.webodf-caretOverlay .handle:after {content: " ";position: absolute;width: 0px;height: 0px;border-style: solid;border-width: 8.7px 5px 0 5px;border-color: black transparent transparent transparent;top: 100%;left: 43%;}.webodf-caretSizer {display: inline-block;width: 0;visibility: hidden;}#eventTrap {display: block;position: absolute;bottom: 0;left: 0;outline: none;opacity: 0;color: rgba(255, 255, 255, 0);pointer-events: none;white-space: pre;overflow: hidden;}cursor|cursor > #composer {text-decoration: underline;}cursor|cursor[cursor|caret-sizer-active="true"],cursor|cursor[cursor|composing="true"] {display: inline;}editinfo|editinfo {display: inline-block;}.editInfoMarker {position: absolute;width: 10px;height: 100%;left: -20px;opacity: 0.8;top: 0;border-radius: 5px;background-color: transparent;box-shadow: 0px 0px 5px rgba(50, 50, 50, 0.75);}.editInfoMarker:hover {box-shadow: 0px 0px 8px rgba(0, 0, 0, 1);}.editInfoHandle {position: absolute;background-color: black;padding: 5px;border-radius: 5px;opacity: 0.8;box-shadow: 0px 0px 5px rgba(50, 50, 50, 0.75);bottom: 100%;margin-bottom: 10px;z-index: 3;left: -25px;}.editInfoHandle:after {content: " ";position: absolute;width: 0px;height: 0px;border-style: solid;border-width: 8.7px 5px 0 5px;border-color: black transparent transparent transparent;top: 100%;left: 5px;}.editInfo {font-family: sans-serif;font-weight: normal;font-style: normal;text-decoration: none;color: white;width: 100%;height: 12pt;}.editInfoColor {float: left;width: 10pt;height: 10pt;border: 1px solid white;}.editInfoAuthor {float: left;margin-left: 5pt;font-size: 10pt;text-align: left;height: 12pt;line-height: 12pt;}.editInfoTime {float: right;margin-left: 30pt;font-size: 8pt;font-style: italic;color: yellow;height: 12pt;line-height: 12pt;}.annotationWrapper {display: inline;position: relative;}.annotationRemoveButton:before {content: "\u00d7";color: white;padding: 5px;line-height: 1em;}.annotationRemoveButton {width: 20px;height: 20px;border-radius: 10px;background-color: black;box-shadow: 0px 0px 5px rgba(50, 50, 50, 0.75);position: absolute;top: -10px;left: -10px;z-index: 3;text-align: center;font-family: sans-serif;font-style: normal;font-weight: normal;text-decoration: none;font-size: 15px;}.annotationRemoveButton:hover {cursor: pointer;box-shadow: 0px 0px 5px rgba(0, 0, 0, 1);}.annotationNote {width: 4cm;position: absolute;display: inline;z-index: 10;top: 0;}.annotationNote > office|annotation {display: block;text-align: left;}.annotationConnector {position: absolute;display: inline;top: 0;z-index: 2;border-top: 1px dashed brown;}.annotationConnector.angular {-moz-transform-origin: left top;-webkit-transform-origin: left top;-ms-transform-origin: left top;transform-origin: left top;}.annotationConnector.horizontal {left: 0;}.annotationConnector.horizontal:before {content: "";display: inline;position: absolute;width: 0px;height: 0px;border-style: solid;border-width: 8.7px 5px 0 5px;border-color: brown transparent transparent transparent;top: -1px;left: -5px;}office|annotation {width: 100%;height: 100%;display: none;background: rgb(198, 238, 184);background: -moz-linear-gradient(90deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);background: -webkit-linear-gradient(90deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);background: -o-linear-gradient(90deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);background: -ms-linear-gradient(90deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);background: linear-gradient(180deg, rgb(198, 238, 184) 30%, rgb(180, 196, 159) 100%);box-shadow: 0 3px 4px -3px #ccc;}office|annotation > dc|creator {display: block;font-size: 10pt;font-weight: normal;font-style: normal;font-family: sans-serif;color: white;background-color: brown;padding: 4px;}office|annotation > dc|date {display: block;font-size: 10pt;font-weight: normal;font-style: normal;font-family: sans-serif;border: 4px solid transparent;color: black;}office|annotation > text|list {display: block;padding: 5px;}office|annotation text|p {font-size: 10pt;color: black;font-weight: normal;font-style: normal;text-decoration: none;font-family: sans-serif;}#annotationsPane {background-color: #EAEAEA;width: 4cm;height: 100%;display: none;position: absolute;outline: 1px solid #ccc;}.webodf-annotationHighlight {background-color: yellow;position: relative;}.webodf-selectionOverlay {position: absolute;pointer-events: none;top: 0;left: 0;top: 0;left: 0;width: 100%;height: 100%;z-index: 15;}.webodf-selectionOverlay > polygon {fill-opacity: 0.3;stroke-opacity: 0.8;stroke-width: 1;fill-rule: evenodd;}.webodf-selectionOverlay > .webodf-draggable {fill-opacity: 0.8;stroke-opacity: 0;stroke-width: 8;pointer-events: all;display: none;-moz-transform-origin: center center;-webkit-transform-origin: center center;-ms-transform-origin: center center;transform-origin: center center;}#imageSelector {display: none;position: absolute;border-style: solid;border-color: black;}#imageSelector > div {width: 5px;height: 5px;display: block;position: absolute;border: 1px solid black;background-color: #ffffff;}#imageSelector > .topLeft {top: -4px;left: -4px;}#imageSelector > .topRight {top: -4px;right: -4px;}#imageSelector > .bottomRight {right: -4px;bottom: -4px;}#imageSelector > .bottomLeft {bottom: -4px;left: -4px;}#imageSelector > .topMiddle {top: -4px;left: 50%;margin-left: -2.5px;}#imageSelector > .rightMiddle {top: 50%;right: -4px;margin-top: -2.5px;}#imageSelector > .bottomMiddle {bottom: -4px;left: 50%;margin-left: -2.5px;}#imageSelector > .leftMiddle {top: 50%;left: -4px;margin-top: -2.5px;}div.webodf-customScrollbars::-webkit-scrollbar{width: 8px;height: 8px;background-color: transparent;}div.webodf-customScrollbars::-webkit-scrollbar-track{background-color: transparent;}div.webodf-customScrollbars::-webkit-scrollbar-thumb{background-color: #444;border-radius: 4px;}.webodf-hyperlinkTooltip {display: none;color: white;background-color: black;border-radius: 5px;box-shadow: 2px 2px 5px gray;padding: 3px;position: absolute;max-width: 210px;text-align: left;word-break: break-all;z-index: 16;}.webodf-hyperlinkTooltipText {display: block;font-weight: bold;}';
