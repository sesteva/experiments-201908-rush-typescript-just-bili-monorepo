/*!
 * @renoirb/polyfill-for-of-example v1.0.0-dev.0
 *
 * Maintainer: Renoir Boulanger <contribs@renoirboulanger.com>
 *
 * UNLICENSED
 *
 * © 2003-2020 Renoir Boulanger
 */
/*!
 * @renoirb/polyfill-for-of-example v1.0.0-dev.0
 *
 * Maintainer: Renoir Boulanger <contribs@renoirboulanger.com>
 *
 * UNLICENSED
 *
 * © 2003-2020 Renoir Boulanger
 */
var t = function (t) {
    try {
      return !!t()
    } catch (t) {
      return !0
    }
  },
  r = {}.toString,
  n = function (t) {
    return r.call(t).slice(8, -1)
  },
  e = ''.split,
  o = t(function () {
    return !Object('z').propertyIsEnumerable(0)
  })
    ? function (t) {
        return 'String' == n(t) ? e.call(t, '') : Object(t)
      }
    : Object,
  i = function (t) {
    if (null == t) throw TypeError("Can't call method on " + t)
    return t
  },
  u = function (t) {
    return o(i(t))
  },
  c = {},
  a =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {}
function f(t, r) {
  return t((r = { exports: {} }), r.exports), r.exports
}
var l = function (t) {
    return t && t.Math == Math && t
  },
  s =
    l('object' == typeof globalThis && globalThis) ||
    l('object' == typeof window && window) ||
    l('object' == typeof self && self) ||
    l('object' == typeof a && a) ||
    Function('return this')(),
  p = !t(function () {
    return (
      7 !=
      Object.defineProperty({}, 1, {
        get: function () {
          return 7
        },
      })[1]
    )
  }),
  y = function (t) {
    return 'object' == typeof t ? null !== t : 'function' == typeof t
  },
  v = s.document,
  h = y(v) && y(v.createElement),
  d = function (t) {
    return h ? v.createElement(t) : {}
  },
  g =
    !p &&
    !t(function () {
      return (
        7 !=
        Object.defineProperty(d('div'), 'a', {
          get: function () {
            return 7
          },
        }).a
      )
    }),
  m = function (t) {
    if (!y(t)) throw TypeError(String(t) + ' is not an object')
    return t
  },
  b = function (t, r) {
    if (!y(t)) return t
    var n, e
    if (r && 'function' == typeof (n = t.toString) && !y((e = n.call(t))))
      return e
    if ('function' == typeof (n = t.valueOf) && !y((e = n.call(t)))) return e
    if (!r && 'function' == typeof (n = t.toString) && !y((e = n.call(t))))
      return e
    throw TypeError("Can't convert object to primitive value")
  },
  S = Object.defineProperty,
  w = {
    f: p
      ? S
      : function (t, r, n) {
          if ((m(t), (r = b(r, !0)), m(n), g))
            try {
              return S(t, r, n)
            } catch (t) {}
          if ('get' in n || 'set' in n)
            throw TypeError('Accessors not supported')
          return 'value' in n && (t[r] = n.value), t
        },
  },
  O = function (t, r) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: r,
    }
  },
  A = p
    ? function (t, r, n) {
        return w.f(t, r, O(1, n))
      }
    : function (t, r, n) {
        return (t[r] = n), t
      },
  j =
    s['__core-js_shared__'] ||
    (function (t, r) {
      try {
        A(s, t, r)
      } catch (n) {
        s[t] = r
      }
      return r
    })('__core-js_shared__', {}),
  P = Function.toString
'function' != typeof j.inspectSource &&
  (j.inspectSource = function (t) {
    return P.call(t)
  })
var T,
  x,
  E,
  L = j.inspectSource,
  I = s.WeakMap,
  k = 'function' == typeof I && /native code/.test(L(I)),
  M = {}.hasOwnProperty,
  C = function (t, r) {
    return M.call(t, r)
  },
  _ = f(function (t) {
    ;(t.exports = function (t, r) {
      return j[t] || (j[t] = void 0 !== r ? r : {})
    })('versions', []).push({
      version: '3.6.4',
      mode: 'pure',
      copyright: '© 2020 Denis Pushkarev (zloirock.ru)',
    })
  }),
  N = 0,
  F = Math.random(),
  R = function (t) {
    return (
      'Symbol(' + String(void 0 === t ? '' : t) + ')_' + (++N + F).toString(36)
    )
  },
  D = _('keys'),
  G = function (t) {
    return D[t] || (D[t] = R(t))
  },
  V = {},
  J = s.WeakMap
if (k) {
  var z = new J(),
    B = z.get,
    H = z.has,
    W = z.set
  ;(T = function (t, r) {
    return W.call(z, t, r), r
  }),
    (x = function (t) {
      return B.call(z, t) || {}
    }),
    (E = function (t) {
      return H.call(z, t)
    })
} else {
  var U = G('state')
  ;(V[U] = !0),
    (T = function (t, r) {
      return A(t, U, r), r
    }),
    (x = function (t) {
      return C(t, U) ? t[U] : {}
    }),
    (E = function (t) {
      return C(t, U)
    })
}
var Y,
  q,
  Q,
  X = {
    set: T,
    get: x,
    has: E,
    enforce: function (t) {
      return E(t) ? x(t) : T(t, {})
    },
    getterFor: function (t) {
      return function (r) {
        var n
        if (!y(r) || (n = x(r)).type !== t)
          throw TypeError('Incompatible receiver, ' + t + ' required')
        return n
      }
    },
  },
  $ = {}.propertyIsEnumerable,
  K = Object.getOwnPropertyDescriptor,
  Z = {
    f:
      K && !$.call({ 1: 2 }, 1)
        ? function (t) {
            var r = K(this, t)
            return !!r && r.enumerable
          }
        : $,
  },
  tt = Object.getOwnPropertyDescriptor,
  rt = {
    f: p
      ? tt
      : function (t, r) {
          if (((t = u(t)), (r = b(r, !0)), g))
            try {
              return tt(t, r)
            } catch (t) {}
          if (C(t, r)) return O(!Z.f.call(t, r), t[r])
        },
  },
  nt = /#|\.prototype\./,
  et = function (r, n) {
    var e = it[ot(r)]
    return e == ct || (e != ut && ('function' == typeof n ? t(n) : !!n))
  },
  ot = (et.normalize = function (t) {
    return String(t).replace(nt, '.').toLowerCase()
  }),
  it = (et.data = {}),
  ut = (et.NATIVE = 'N'),
  ct = (et.POLYFILL = 'P'),
  at = et,
  ft = {},
  lt = function (t, r, n) {
    if (
      ((function (t) {
        if ('function' != typeof t)
          throw TypeError(String(t) + ' is not a function')
      })(t),
      void 0 === r)
    )
      return t
    switch (n) {
      case 0:
        return function () {
          return t.call(r)
        }
      case 1:
        return function (n) {
          return t.call(r, n)
        }
      case 2:
        return function (n, e) {
          return t.call(r, n, e)
        }
      case 3:
        return function (n, e, o) {
          return t.call(r, n, e, o)
        }
    }
    return function () {
      return t.apply(r, arguments)
    }
  },
  st = rt.f,
  pt = function (t) {
    var r = function (r, n, e) {
      if (this instanceof t) {
        switch (arguments.length) {
          case 0:
            return new t()
          case 1:
            return new t(r)
          case 2:
            return new t(r, n)
        }
        return new t(r, n, e)
      }
      return t.apply(this, arguments)
    }
    return (r.prototype = t.prototype), r
  },
  yt = function (t, r) {
    var n,
      e,
      o,
      i,
      u,
      c,
      a,
      f,
      l = t.target,
      p = t.global,
      y = t.stat,
      v = t.proto,
      h = p ? s : y ? s[l] : (s[l] || {}).prototype,
      d = p ? ft : ft[l] || (ft[l] = {}),
      g = d.prototype
    for (o in r)
      (n = !at(p ? o : l + (y ? '.' : '#') + o, t.forced) && h && C(h, o)),
        (u = d[o]),
        n && (c = t.noTargetGet ? (f = st(h, o)) && f.value : h[o]),
        (i = n && c ? c : r[o]),
        (n && typeof u == typeof i) ||
          ((a =
            t.bind && n
              ? lt(i, s)
              : t.wrap && n
              ? pt(i)
              : v && 'function' == typeof i
              ? lt(Function.call, i)
              : i),
          (t.sham || (i && i.sham) || (u && u.sham)) && A(a, 'sham', !0),
          (d[o] = a),
          v &&
            (C(ft, (e = l + 'Prototype')) || A(ft, e, {}),
            (ft[e][o] = i),
            t.real && g && !g[o] && A(g, o, i)))
  },
  vt = function (t) {
    return Object(i(t))
  },
  ht = !t(function () {
    function t() {}
    return (
      (t.prototype.constructor = null),
      Object.getPrototypeOf(new t()) !== t.prototype
    )
  }),
  dt = G('IE_PROTO'),
  gt = Object.prototype,
  mt = ht
    ? Object.getPrototypeOf
    : function (t) {
        return (
          (t = vt(t)),
          C(t, dt)
            ? t[dt]
            : 'function' == typeof t.constructor && t instanceof t.constructor
            ? t.constructor.prototype
            : t instanceof Object
            ? gt
            : null
        )
      },
  bt =
    !!Object.getOwnPropertySymbols &&
    !t(function () {
      return !String(Symbol())
    }),
  St = bt && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
  wt = _('wks'),
  Ot = s.Symbol,
  At = St ? Ot : (Ot && Ot.withoutSetter) || R,
  jt = function (t) {
    return (
      C(wt, t) ||
        (bt && C(Ot, t) ? (wt[t] = Ot[t]) : (wt[t] = At('Symbol.' + t))),
      wt[t]
    )
  },
  Pt = (jt('iterator'), !1)
;[].keys &&
  ('next' in (Q = [].keys())
    ? (q = mt(mt(Q))) !== Object.prototype && (Y = q)
    : (Pt = !0)),
  null == Y && (Y = {})
var Tt,
  xt = { IteratorPrototype: Y, BUGGY_SAFARI_ITERATORS: Pt },
  Et = Math.ceil,
  Lt = Math.floor,
  It = function (t) {
    return isNaN((t = +t)) ? 0 : (t > 0 ? Lt : Et)(t)
  },
  kt = Math.min,
  Mt = function (t) {
    return t > 0 ? kt(It(t), 9007199254740991) : 0
  },
  Ct = Math.max,
  _t = Math.min,
  Nt = function (t, r) {
    var n = It(t)
    return n < 0 ? Ct(n + r, 0) : _t(n, r)
  },
  Ft = function (t) {
    return function (r, n, e) {
      var o,
        i = u(r),
        c = Mt(i.length),
        a = Nt(e, c)
      if (t && n != n) {
        for (; c > a; ) if ((o = i[a++]) != o) return !0
      } else
        for (; c > a; a++) if ((t || a in i) && i[a] === n) return t || a || 0
      return !t && -1
    }
  },
  Rt = { includes: Ft(!0), indexOf: Ft(!1) }.indexOf,
  Dt = function (t, r) {
    var n,
      e = u(t),
      o = 0,
      i = []
    for (n in e) !C(V, n) && C(e, n) && i.push(n)
    for (; r.length > o; ) C(e, (n = r[o++])) && (~Rt(i, n) || i.push(n))
    return i
  },
  Gt = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf',
  ],
  Vt =
    Object.keys ||
    function (t) {
      return Dt(t, Gt)
    },
  Jt = p
    ? Object.defineProperties
    : function (t, r) {
        m(t)
        for (var n, e = Vt(r), o = e.length, i = 0; o > i; )
          w.f(t, (n = e[i++]), r[n])
        return t
      },
  zt = function (t) {
    return 'function' == typeof t ? t : void 0
  },
  Bt = function (t, r) {
    return arguments.length < 2
      ? zt(ft[t]) || zt(s[t])
      : (ft[t] && ft[t][r]) || (s[t] && s[t][r])
  },
  Ht = Bt('document', 'documentElement'),
  Wt = G('IE_PROTO'),
  Ut = function () {},
  Yt = function (t) {
    return '<script>' + t + '</script>'
  },
  qt = function () {
    try {
      Tt = document.domain && new ActiveXObject('htmlfile')
    } catch (t) {}
    var t, r
    qt = Tt
      ? (function (t) {
          t.write(Yt('')), t.close()
          var r = t.parentWindow.Object
          return (t = null), r
        })(Tt)
      : (((r = d('iframe')).style.display = 'none'),
        Ht.appendChild(r),
        (r.src = String('javascript:')),
        (t = r.contentWindow.document).open(),
        t.write(Yt('document.F=Object')),
        t.close(),
        t.F)
    for (var n = Gt.length; n--; ) delete qt.prototype[Gt[n]]
    return qt()
  }
V[Wt] = !0
var Qt =
    Object.create ||
    function (t, r) {
      var n
      return (
        null !== t
          ? ((Ut.prototype = m(t)),
            (n = new Ut()),
            (Ut.prototype = null),
            (n[Wt] = t))
          : (n = qt()),
        void 0 === r ? n : Jt(n, r)
      )
    },
  Xt = {}
Xt[jt('toStringTag')] = 'z'
var $t = '[object z]' === String(Xt),
  Kt = jt('toStringTag'),
  Zt =
    'Arguments' ==
    n(
      (function () {
        return arguments
      })(),
    ),
  tr = $t
    ? n
    : function (t) {
        var r, e, o
        return void 0 === t
          ? 'Undefined'
          : null === t
          ? 'Null'
          : 'string' ==
            typeof (e = (function (t, r) {
              try {
                return t[r]
              } catch (t) {}
            })((r = Object(t)), Kt))
          ? e
          : Zt
          ? n(r)
          : 'Object' == (o = n(r)) && 'function' == typeof r.callee
          ? 'Arguments'
          : o
      },
  rr = $t
    ? {}.toString
    : function () {
        return '[object ' + tr(this) + ']'
      },
  nr = w.f,
  er = jt('toStringTag'),
  or = function (t, r, n, e) {
    if (t) {
      var o = n ? t : t.prototype
      C(o, er) || nr(o, er, { configurable: !0, value: r }),
        e && !$t && A(o, 'toString', rr)
    }
  },
  ir = xt.IteratorPrototype,
  ur = function () {
    return this
  },
  cr =
    (Object.setPrototypeOf ||
      ('__proto__' in {} &&
        (function () {
          var t,
            r = !1,
            n = {}
          try {
            ;(t = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__')
              .set).call(n, []),
              (r = n instanceof Array)
          } catch (t) {}
        })()),
    function (t, r, n, e) {
      e && e.enumerable ? (t[r] = n) : A(t, r, n)
    }),
  ar = xt.IteratorPrototype,
  fr = xt.BUGGY_SAFARI_ITERATORS,
  lr = jt('iterator'),
  sr = function () {
    return this
  },
  pr = function (t, r, n, e, o, i, u) {
    !(function (t, r, n) {
      var e = r + ' Iterator'
      ;(t.prototype = Qt(ir, { next: O(1, n) })), or(t, e, !1, !0), (c[e] = ur)
    })(n, r, e)
    var a,
      f,
      l,
      s = function (t) {
        if (t === o && d) return d
        if (!fr && t in v) return v[t]
        switch (t) {
          case 'keys':
          case 'values':
          case 'entries':
            return function () {
              return new n(this, t)
            }
        }
        return function () {
          return new n(this)
        }
      },
      p = r + ' Iterator',
      y = !1,
      v = t.prototype,
      h = v[lr] || v['@@iterator'] || (o && v[o]),
      d = (!fr && h) || s(o),
      g = ('Array' == r && v.entries) || h
    if (
      (g &&
        ((a = mt(g.call(new t()))),
        ar !== Object.prototype && a.next && (or(a, p, !0, !0), (c[p] = sr))),
      'values' == o &&
        h &&
        'values' !== h.name &&
        ((y = !0),
        (d = function () {
          return h.call(this)
        })),
      u && v[lr] !== d && A(v, lr, d),
      (c[r] = d),
      o)
    )
      if (
        ((f = {
          values: s('values'),
          keys: i ? d : s('keys'),
          entries: s('entries'),
        }),
        u)
      )
        for (l in f) (fr || y || !(l in v)) && cr(v, l, f[l])
      else yt({ target: r, proto: !0, forced: fr || y }, f)
    return f
  },
  yr = X.set,
  vr = X.getterFor('Array Iterator')
pr(
  Array,
  'Array',
  function (t, r) {
    yr(this, { type: 'Array Iterator', target: u(t), index: 0, kind: r })
  },
  function () {
    var t = vr(this),
      r = t.target,
      n = t.kind,
      e = t.index++
    return !r || e >= r.length
      ? ((t.target = void 0), { value: void 0, done: !0 })
      : 'keys' == n
      ? { value: e, done: !1 }
      : 'values' == n
      ? { value: r[e], done: !1 }
      : { value: [e, r[e]], done: !1 }
  },
  'values',
)
c.Arguments = c.Array
var hr = jt('toStringTag')
for (var dr in {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0,
}) {
  var gr = s[dr],
    mr = gr && gr.prototype
  mr && tr(mr) !== hr && A(mr, hr, dr), (c[dr] = c.Array)
}
var br = function (t) {
    return function (r, n) {
      var e,
        o,
        u = String(i(r)),
        c = It(n),
        a = u.length
      return c < 0 || c >= a
        ? t
          ? ''
          : void 0
        : (e = u.charCodeAt(c)) < 55296 ||
          e > 56319 ||
          c + 1 === a ||
          (o = u.charCodeAt(c + 1)) < 56320 ||
          o > 57343
        ? t
          ? u.charAt(c)
          : e
        : t
        ? u.slice(c, c + 2)
        : o - 56320 + ((e - 55296) << 10) + 65536
    }
  },
  Sr = { codeAt: br(!1), charAt: br(!0) }.charAt,
  wr = X.set,
  Or = X.getterFor('String Iterator')
pr(
  String,
  'String',
  function (t) {
    wr(this, { type: 'String Iterator', string: String(t), index: 0 })
  },
  function () {
    var t,
      r = Or(this),
      n = r.string,
      e = r.index
    return e >= n.length
      ? { value: void 0, done: !0 }
      : ((t = Sr(n, e)), (r.index += t.length), { value: t, done: !1 })
  },
)
var Ar = jt('iterator'),
  jr = function (t) {
    if (null != t) return t[Ar] || t['@@iterator'] || c[tr(t)]
  },
  Pr = function (t) {
    var r = jr(t)
    if ('function' != typeof r) throw TypeError(String(t) + ' is not iterable')
    return m(r.call(t))
  },
  Tr =
    Array.isArray ||
    function (t) {
      return 'Array' == n(t)
    }
yt({ target: 'Array', stat: !0 }, { isArray: Tr })
var xr,
  Er,
  Lr = ft.Array.isArray,
  Ir = jr,
  kr = function (t, r, n) {
    var e = b(r)
    e in t ? w.f(t, e, O(0, n)) : (t[e] = n)
  },
  Mr = jt('species'),
  Cr = function (t, r) {
    var n
    return (
      Tr(t) &&
        ('function' != typeof (n = t.constructor) ||
        (n !== Array && !Tr(n.prototype))
          ? y(n) && null === (n = n[Mr]) && (n = void 0)
          : (n = void 0)),
      new (void 0 === n ? Array : n)(0 === r ? 0 : r)
    )
  },
  _r = Bt('navigator', 'userAgent') || '',
  Nr = s.process,
  Fr = Nr && Nr.versions,
  Rr = Fr && Fr.v8
Rr
  ? (Er = (xr = Rr.split('.'))[0] + xr[1])
  : _r &&
    (!(xr = _r.match(/Edge\/(\d+)/)) || xr[1] >= 74) &&
    (xr = _r.match(/Chrome\/(\d+)/)) &&
    (Er = xr[1])
var Dr = Er && +Er,
  Gr = jt('species'),
  Vr = function (r) {
    return (
      Dr >= 51 ||
      !t(function () {
        var t = []
        return (
          ((t.constructor = {})[Gr] = function () {
            return { foo: 1 }
          }),
          1 !== t[r](Boolean).foo
        )
      })
    )
  },
  Jr = jt('isConcatSpreadable'),
  zr =
    Dr >= 51 ||
    !t(function () {
      var t = []
      return (t[Jr] = !1), t.concat()[0] !== t
    }),
  Br = Vr('concat'),
  Hr = function (t) {
    if (!y(t)) return !1
    var r = t[Jr]
    return void 0 !== r ? !!r : Tr(t)
  }
yt(
  { target: 'Array', proto: !0, forced: !zr || !Br },
  {
    concat: function (t) {
      var r,
        n,
        e,
        o,
        i,
        u = vt(this),
        c = Cr(u, 0),
        a = 0
      for (r = -1, e = arguments.length; r < e; r++)
        if (Hr((i = -1 === r ? u : arguments[r]))) {
          if (a + (o = Mt(i.length)) > 9007199254740991)
            throw TypeError('Maximum allowed index exceeded')
          for (n = 0; n < o; n++, a++) n in i && kr(c, a, i[n])
        } else {
          if (a >= 9007199254740991)
            throw TypeError('Maximum allowed index exceeded')
          kr(c, a++, i)
        }
      return (c.length = a), c
    },
  },
)
var Wr = Gt.concat('length', 'prototype'),
  Ur = {
    f:
      Object.getOwnPropertyNames ||
      function (t) {
        return Dt(t, Wr)
      },
  },
  Yr = Ur.f,
  qr = {}.toString,
  Qr =
    'object' == typeof window && window && Object.getOwnPropertyNames
      ? Object.getOwnPropertyNames(window)
      : [],
  Xr = {
    f: function (t) {
      return Qr && '[object Window]' == qr.call(t)
        ? (function (t) {
            try {
              return Yr(t)
            } catch (t) {
              return Qr.slice()
            }
          })(t)
        : Yr(u(t))
    },
  },
  $r = { f: Object.getOwnPropertySymbols },
  Kr = { f: jt },
  Zr = w.f,
  tn = function (t) {
    var r = ft.Symbol || (ft.Symbol = {})
    C(r, t) || Zr(r, t, { value: Kr.f(t) })
  },
  rn = [].push,
  nn = function (t) {
    var r = 1 == t,
      n = 2 == t,
      e = 3 == t,
      i = 4 == t,
      u = 6 == t,
      c = 5 == t || u
    return function (a, f, l, s) {
      for (
        var p,
          y,
          v = vt(a),
          h = o(v),
          d = lt(f, l, 3),
          g = Mt(h.length),
          m = 0,
          b = s || Cr,
          S = r ? b(a, g) : n ? b(a, 0) : void 0;
        g > m;
        m++
      )
        if ((c || m in h) && ((y = d((p = h[m]), m, v)), t))
          if (r) S[m] = y
          else if (y)
            switch (t) {
              case 3:
                return !0
              case 5:
                return p
              case 6:
                return m
              case 2:
                rn.call(S, p)
            }
          else if (i) return !1
      return u ? -1 : e || i ? i : S
    }
  },
  en = {
    forEach: nn(0),
    map: nn(1),
    filter: nn(2),
    some: nn(3),
    every: nn(4),
    find: nn(5),
    findIndex: nn(6),
  }.forEach,
  on = G('hidden'),
  un = jt('toPrimitive'),
  cn = X.set,
  an = X.getterFor('Symbol'),
  fn = Object.prototype,
  ln = s.Symbol,
  sn = Bt('JSON', 'stringify'),
  pn = rt.f,
  yn = w.f,
  vn = Xr.f,
  hn = Z.f,
  dn = _('symbols'),
  gn = _('op-symbols'),
  mn = _('string-to-symbol-registry'),
  bn = _('symbol-to-string-registry'),
  Sn = _('wks'),
  wn = s.QObject,
  On = !wn || !wn.prototype || !wn.prototype.findChild,
  An =
    p &&
    t(function () {
      return (
        7 !=
        Qt(
          yn({}, 'a', {
            get: function () {
              return yn(this, 'a', { value: 7 }).a
            },
          }),
        ).a
      )
    })
      ? function (t, r, n) {
          var e = pn(fn, r)
          e && delete fn[r], yn(t, r, n), e && t !== fn && yn(fn, r, e)
        }
      : yn,
  jn = function (t, r) {
    var n = (dn[t] = Qt(ln.prototype))
    return (
      cn(n, { type: 'Symbol', tag: t, description: r }),
      p || (n.description = r),
      n
    )
  },
  Pn = St
    ? function (t) {
        return 'symbol' == typeof t
      }
    : function (t) {
        return Object(t) instanceof ln
      },
  Tn = function (t, r, n) {
    t === fn && Tn(gn, r, n), m(t)
    var e = b(r, !0)
    return (
      m(n),
      C(dn, e)
        ? (n.enumerable
            ? (C(t, on) && t[on][e] && (t[on][e] = !1),
              (n = Qt(n, { enumerable: O(0, !1) })))
            : (C(t, on) || yn(t, on, O(1, {})), (t[on][e] = !0)),
          An(t, e, n))
        : yn(t, e, n)
    )
  },
  xn = function (t, r) {
    m(t)
    var n = u(r),
      e = Vt(n).concat(kn(n))
    return (
      en(e, function (r) {
        ;(p && !En.call(n, r)) || Tn(t, r, n[r])
      }),
      t
    )
  },
  En = function (t) {
    var r = b(t, !0),
      n = hn.call(this, r)
    return (
      !(this === fn && C(dn, r) && !C(gn, r)) &&
      (!(n || !C(this, r) || !C(dn, r) || (C(this, on) && this[on][r])) || n)
    )
  },
  Ln = function (t, r) {
    var n = u(t),
      e = b(r, !0)
    if (n !== fn || !C(dn, e) || C(gn, e)) {
      var o = pn(n, e)
      return !o || !C(dn, e) || (C(n, on) && n[on][e]) || (o.enumerable = !0), o
    }
  },
  In = function (t) {
    var r = vn(u(t)),
      n = []
    return (
      en(r, function (t) {
        C(dn, t) || C(V, t) || n.push(t)
      }),
      n
    )
  },
  kn = function (t) {
    var r = t === fn,
      n = vn(r ? gn : u(t)),
      e = []
    return (
      en(n, function (t) {
        !C(dn, t) || (r && !C(fn, t)) || e.push(dn[t])
      }),
      e
    )
  }
if (
  (bt ||
    (cr(
      (ln = function () {
        if (this instanceof ln) throw TypeError('Symbol is not a constructor')
        var t =
            arguments.length && void 0 !== arguments[0]
              ? String(arguments[0])
              : void 0,
          r = R(t),
          n = function (t) {
            this === fn && n.call(gn, t),
              C(this, on) && C(this[on], r) && (this[on][r] = !1),
              An(this, r, O(1, t))
          }
        return p && On && An(fn, r, { configurable: !0, set: n }), jn(r, t)
      }).prototype,
      'toString',
      function () {
        return an(this).tag
      },
    ),
    cr(ln, 'withoutSetter', function (t) {
      return jn(R(t), t)
    }),
    (Z.f = En),
    (w.f = Tn),
    (rt.f = Ln),
    (Ur.f = Xr.f = In),
    ($r.f = kn),
    (Kr.f = function (t) {
      return jn(jt(t), t)
    }),
    p &&
      yn(ln.prototype, 'description', {
        configurable: !0,
        get: function () {
          return an(this).description
        },
      })),
  yt({ global: !0, wrap: !0, forced: !bt, sham: !bt }, { Symbol: ln }),
  en(Vt(Sn), function (t) {
    tn(t)
  }),
  yt(
    { target: 'Symbol', stat: !0, forced: !bt },
    {
      for: function (t) {
        var r = String(t)
        if (C(mn, r)) return mn[r]
        var n = ln(r)
        return (mn[r] = n), (bn[n] = r), n
      },
      keyFor: function (t) {
        if (!Pn(t)) throw TypeError(t + ' is not a symbol')
        if (C(bn, t)) return bn[t]
      },
      useSetter: function () {
        On = !0
      },
      useSimple: function () {
        On = !1
      },
    },
  ),
  yt(
    { target: 'Object', stat: !0, forced: !bt, sham: !p },
    {
      create: function (t, r) {
        return void 0 === r ? Qt(t) : xn(Qt(t), r)
      },
      defineProperty: Tn,
      defineProperties: xn,
      getOwnPropertyDescriptor: Ln,
    },
  ),
  yt(
    { target: 'Object', stat: !0, forced: !bt },
    { getOwnPropertyNames: In, getOwnPropertySymbols: kn },
  ),
  yt(
    {
      target: 'Object',
      stat: !0,
      forced: t(function () {
        $r.f(1)
      }),
    },
    {
      getOwnPropertySymbols: function (t) {
        return $r.f(vt(t))
      },
    },
  ),
  sn)
) {
  var Mn =
    !bt ||
    t(function () {
      var t = ln()
      return (
        '[null]' != sn([t]) || '{}' != sn({ a: t }) || '{}' != sn(Object(t))
      )
    })
  yt(
    { target: 'JSON', stat: !0, forced: Mn },
    {
      stringify: function (t, r, n) {
        for (var e, o = [t], i = 1; arguments.length > i; )
          o.push(arguments[i++])
        if (((e = r), (y(r) || void 0 !== t) && !Pn(t)))
          return (
            Tr(r) ||
              (r = function (t, r) {
                if (
                  ('function' == typeof e && (r = e.call(this, t, r)), !Pn(r))
                )
                  return r
              }),
            (o[1] = r),
            sn.apply(null, o)
          )
      },
    },
  )
}
ln.prototype[un] || A(ln.prototype, un, ln.prototype.valueOf),
  or(ln, 'Symbol'),
  (V[on] = !0),
  tn('asyncIterator'),
  tn('hasInstance'),
  tn('isConcatSpreadable'),
  tn('iterator'),
  tn('match'),
  tn('matchAll'),
  tn('replace'),
  tn('search'),
  tn('species'),
  tn('split'),
  tn('toPrimitive'),
  tn('toStringTag'),
  tn('unscopables'),
  or(Math, 'Math', !0),
  or(s.JSON, 'JSON', !0)
var Cn = ft.Symbol,
  _n = function (t, r, n, e) {
    try {
      return e ? r(m(n)[0], n[1]) : r(n)
    } catch (r) {
      var o = t.return
      throw (void 0 !== o && m(o.call(t)), r)
    }
  },
  Nn = jt('iterator'),
  Fn = Array.prototype,
  Rn = function (t) {
    return void 0 !== t && (c.Array === t || Fn[Nn] === t)
  },
  Dn = jt('iterator'),
  Gn = !1
try {
  var Vn = 0,
    Jn = {
      next: function () {
        return { done: !!Vn++ }
      },
      return: function () {
        Gn = !0
      },
    }
  ;(Jn[Dn] = function () {
    return this
  }),
    Array.from(Jn, function () {
      throw 2
    })
} catch (t) {}
var zn = !(function (t, r) {
  if (!r && !Gn) return !1
  var n = !1
  try {
    var e = {}
    ;(e[Dn] = function () {
      return {
        next: function () {
          return { done: (n = !0) }
        },
      }
    }),
      t(e)
  } catch (t) {}
  return n
})(function (t) {
  Array.from(t)
})
yt(
  { target: 'Array', stat: !0, forced: zn },
  {
    from: function (t) {
      var r,
        n,
        e,
        o,
        i,
        u,
        c = vt(t),
        a = 'function' == typeof this ? this : Array,
        f = arguments.length,
        l = f > 1 ? arguments[1] : void 0,
        s = void 0 !== l,
        p = jr(c),
        y = 0
      if (
        (s && (l = lt(l, f > 2 ? arguments[2] : void 0, 2)),
        null == p || (a == Array && Rn(p)))
      )
        for (n = new a((r = Mt(c.length))); r > y; y++)
          (u = s ? l(c[y], y) : c[y]), kr(n, y, u)
      else
        for (i = (o = p.call(c)).next, n = new a(); !(e = i.call(o)).done; y++)
          (u = s ? _n(o, l, [e.value, y], !0) : e.value), kr(n, y, u)
      return (n.length = y), n
    },
  },
)
var Bn = ft.Array.from,
  Hn = Object.defineProperty,
  Wn = {},
  Un = function (t) {
    throw t
  },
  Yn = Vr('slice'),
  qn = (function (r, n) {
    if (C(Wn, r)) return Wn[r]
    n || (n = {})
    var e = [][r],
      o = !!C(n, 'ACCESSORS') && n.ACCESSORS,
      i = C(n, 0) ? n[0] : Un,
      u = C(n, 1) ? n[1] : void 0
    return (Wn[r] =
      !!e &&
      !t(function () {
        if (o && !p) return !0
        var t = { length: -1 }
        o ? Hn(t, 1, { enumerable: !0, get: Un }) : (t[1] = 1), e.call(t, i, u)
      }))
  })('slice', { ACCESSORS: !0, 0: 0, 1: 2 }),
  Qn = jt('species'),
  Xn = [].slice,
  $n = Math.max
yt(
  { target: 'Array', proto: !0, forced: !Yn || !qn },
  {
    slice: function (t, r) {
      var n,
        e,
        o,
        i = u(this),
        c = Mt(i.length),
        a = Nt(t, c),
        f = Nt(void 0 === r ? c : r, c)
      if (
        Tr(i) &&
        ('function' != typeof (n = i.constructor) ||
        (n !== Array && !Tr(n.prototype))
          ? y(n) && null === (n = n[Qn]) && (n = void 0)
          : (n = void 0),
        n === Array || void 0 === n)
      )
        return Xn.call(i, a, f)
      for (
        e = new (void 0 === n ? Array : n)($n(f - a, 0)), o = 0;
        a < f;
        a++, o++
      )
        a in i && kr(e, o, i[a])
      return (e.length = o), e
    },
  },
)
var Kn = function (t) {
    return ft[t + 'Prototype']
  },
  Zn = Kn('Array').slice,
  te = Array.prototype,
  re = function (t) {
    var r = t.slice
    return t === te || (t instanceof Array && r === te.slice) ? Zn : r
  },
  ne = Kn('Array').concat,
  ee = Array.prototype,
  oe = function (t) {
    var r = t.concat
    return t === ee || (t instanceof Array && r === ee.concat) ? ne : r
  }
function ie(t, r) {
  if (!(t instanceof r))
    throw new TypeError('Cannot call a class as a function')
}
yt(
  { target: 'Object', stat: !0, forced: !p, sham: !p },
  { defineProperty: w.f },
)
var ue = f(function (t) {
  var r = ft.Object,
    n = (t.exports = function (t, n, e) {
      return r.defineProperty(t, n, e)
    })
  r.defineProperty.sham && (n.sham = !0)
})
function ce(t, r) {
  for (var n = 0; n < r.length; n++) {
    var e = r[n]
    ;(e.enumerable = e.enumerable || !1),
      (e.configurable = !0),
      'value' in e && (e.writable = !0),
      ue(t, e.key, e)
  }
}
var ae = {
    fr: 'Bonsoir, mon nom est',
    pt: 'Oi gente, meu nome é',
    en: 'Hello, my name is',
  },
  fe = (function () {
    function t() {
      var r =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : 'John Doe',
        n = arguments.length > 1 ? arguments[1] : void 0
      ie(this, t), (this.name = r), (this.lang = n), n && (this.lang = n)
    }
    var r, n, e
    return (
      (r = t),
      (n = [
        {
          key: 'talk',
          value: function (t) {
            var r,
              n = this.name
            return oe((r = ''.concat(n, ': '))).call(r, t)
          },
        },
        {
          key: 'introduction',
          value: function () {
            var t,
              r = this.name,
              n = this.lang,
              e = void 0 === n ? 'en' : n,
              o = e in ae ? ae[e] : ae.en
            return this.talk(oe((t = ''.concat(o, ' '))).call(t, r))
          },
        },
        {
          key: 'toString',
          value: function () {
            return this.introduction()
          },
        },
      ]) && ce(r.prototype, n),
      e && ce(r, e),
      t
    )
  })()
function le(t, r) {
  var n
  if (void 0 === Cn || null == Ir(t)) {
    if (
      Lr(t) ||
      (n = (function (t, r) {
        var n
        if (!t) return
        if ('string' == typeof t) return se(t, r)
        var e = re((n = Object.prototype.toString.call(t))).call(n, 8, -1)
        'Object' === e && t.constructor && (e = t.constructor.name)
        if ('Map' === e || 'Set' === e) return Bn(t)
        if (
          'Arguments' === e ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
        )
          return se(t, r)
      })(t)) ||
      (r && t && 'number' == typeof t.length)
    ) {
      n && (t = n)
      var e = 0,
        o = function () {}
      return {
        s: o,
        n: function () {
          return e >= t.length ? { done: !0 } : { done: !1, value: t[e++] }
        },
        e: function (t) {
          throw t
        },
        f: o,
      }
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    )
  }
  var i,
    u = !0,
    c = !1
  return {
    s: function () {
      n = Pr(t)
    },
    n: function () {
      var t = n.next()
      return (u = t.done), t
    },
    e: function (t) {
      ;(c = !0), (i = t)
    },
    f: function () {
      try {
        u || null == n.return || n.return()
      } finally {
        if (c) throw i
      }
    },
  }
}
function se(t, r) {
  ;(null == r || r > t.length) && (r = t.length)
  for (var n = 0, e = new Array(r); n < r; n++) e[n] = t[n]
  return e
}
export default function (t) {
  var r,
    n = [],
    e = le(t)
  try {
    for (e.s(); !(r = e.n()).done; ) {
      var o = (r.value || {}).name,
        i = new fe(void 0 === o ? 'John Doe' : o)
      n.push(i)
    }
  } catch (t) {
    e.e(t)
  } finally {
    e.f()
  }
  return n
}
export { fe as Person }
//# sourceMappingURL=index.browser.esm.js.map