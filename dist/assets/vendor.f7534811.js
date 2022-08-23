function q() {}
function C(t) {
  return t();
}
function j() {
  return Object.create(null);
}
function m(t) {
  t.forEach(C);
}
function L(t) {
  return typeof t == 'function';
}
function K(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == 'object') || typeof t == 'function';
}
let l;
function Q(t, e) {
  return l || (l = document.createElement('a')), (l.href = e), t === l.href;
}
function T(t) {
  return Object.keys(t).length === 0;
}
function R(t, e) {
  t.appendChild(e);
}
function U(t, e, n) {
  t.insertBefore(e, n || null);
}
function B(t) {
  t.parentNode.removeChild(t);
}
function V(t) {
  return document.createElement(t);
}
function N(t) {
  return document.createTextNode(t);
}
function W() {
  return N(' ');
}
function X() {
  return N('');
}
function Y(t, e, n, u) {
  return t.addEventListener(e, n, u), () => t.removeEventListener(e, n, u);
}
function Z(t) {
  return function (e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function tt(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function D(t) {
  return Array.from(t.childNodes);
}
function et(t, e) {
  (e = '' + e), t.wholeText !== e && (t.data = e);
}
let b;
function i(t) {
  b = t;
}
const f = [],
  A = [],
  _ = [],
  S = [],
  M = Promise.resolve();
let y = !1;
function P() {
  y || ((y = !0), M.then(O));
}
function x(t) {
  _.push(t);
}
const $ = new Set();
let d = 0;
function O() {
  const t = b;
  do {
    for (; d < f.length; ) {
      const e = f[d];
      d++, i(e), z(e.$$);
    }
    for (i(null), f.length = 0, d = 0; A.length; ) A.pop()();
    for (let e = 0; e < _.length; e += 1) {
      const n = _[e];
      $.has(n) || ($.add(n), n());
    }
    _.length = 0;
  } while (f.length);
  for (; S.length; ) S.pop()();
  (y = !1), $.clear(), i(t);
}
function z(t) {
  if (t.fragment !== null) {
    t.update(), m(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(x);
  }
}
const h = new Set();
let F;
function G(t, e) {
  t && t.i && (h.delete(t), t.i(e));
}
function nt(t, e, n, u) {
  if (t && t.o) {
    if (h.has(t)) return;
    h.add(t),
      F.c.push(() => {
        h.delete(t), u && (n && t.d(1), u());
      }),
      t.o(e);
  }
}
function rt(t) {
  t && t.c();
}
function H(t, e, n, u) {
  const { fragment: s, on_mount: p, on_destroy: a, after_update: g } = t.$$;
  s && s.m(e, n),
    u ||
      x(() => {
        const c = p.map(C).filter(L);
        a ? a.push(...c) : m(c), (t.$$.on_mount = []);
      }),
    g.forEach(x);
}
function I(t, e) {
  const n = t.$$;
  n.fragment !== null &&
    (m(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function J(t, e) {
  t.$$.dirty[0] === -1 && (f.push(t), P(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function ut(t, e, n, u, s, p, a, g = [-1]) {
  const c = b;
  i(t);
  const r = (t.$$ = {
    fragment: null,
    ctx: null,
    props: p,
    update: q,
    not_equal: s,
    bound: j(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    callbacks: j(),
    dirty: g,
    skip_bound: !1,
    root: e.target || c.$$.root,
  });
  a && a(r.root);
  let w = !1;
  if (
    ((r.ctx = n
      ? n(t, e.props || {}, (o, E, ...v) => {
          const k = v.length ? v[0] : E;
          return (
            r.ctx &&
              s(r.ctx[o], (r.ctx[o] = k)) &&
              (!r.skip_bound && r.bound[o] && r.bound[o](k), w && J(t, o)),
            E
          );
        })
      : []),
    r.update(),
    (w = !0),
    m(r.before_update),
    (r.fragment = u ? u(r.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const o = D(e.target);
      r.fragment && r.fragment.l(o), o.forEach(B);
    } else r.fragment && r.fragment.c();
    e.intro && G(t.$$.fragment), H(t, e.target, e.anchor, e.customElement), O();
  }
  i(c);
}
class st {
  $destroy() {
    I(this, 1), (this.$destroy = q);
  }
  $on(e, n) {
    const u = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      u.push(n),
      () => {
        const s = u.indexOf(n);
        s !== -1 && u.splice(s, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !T(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
export {
  st as S,
  W as a,
  tt as b,
  Q as c,
  U as d,
  V as e,
  R as f,
  B as g,
  et as h,
  ut as i,
  X as j,
  rt as k,
  Y as l,
  H as m,
  q as n,
  G as o,
  Z as p,
  nt as q,
  m as r,
  K as s,
  N as t,
  I as u,
};
