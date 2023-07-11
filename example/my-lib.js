var J = Object.defineProperty;
var R = (e, t, n) => t in e ? J(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var u = (e, t, n) => (R(e, typeof t != "symbol" ? t + "" : t, n), n);
function m() {
}
function v(e) {
  return e();
}
function C() {
  return /* @__PURE__ */ Object.create(null);
}
function g(e) {
  e.forEach(v);
}
function B(e) {
  return typeof e == "function";
}
function V(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function U(e) {
  return Object.keys(e).length === 0;
}
function L(e, t) {
  e.appendChild(t);
}
function M(e, t, n) {
  e.insertBefore(t, n || null);
}
function E(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function T(e) {
  return document.createElement(e);
}
function N(e) {
  return document.createTextNode(e);
}
function q(e, t, n, s) {
  return e.addEventListener(t, n, s), () => e.removeEventListener(t, n, s);
}
function z(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function D(e) {
  return Array.from(e.childNodes);
}
function F(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function G(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
let k;
function _(e) {
  k = e;
}
const a = [], S = [];
let h = [];
const P = [], K = /* @__PURE__ */ Promise.resolve();
let w = !1;
function Q() {
  w || (w = !0, K.then(H));
}
function x(e) {
  h.push(e);
}
const y = /* @__PURE__ */ new Set();
let d = 0;
function H() {
  if (d !== 0)
    return;
  const e = k;
  do {
    try {
      for (; d < a.length; ) {
        const t = a[d];
        d++, _(t), W(t.$$);
      }
    } catch (t) {
      throw a.length = 0, d = 0, t;
    }
    for (_(null), a.length = 0, d = 0; S.length; )
      S.pop()();
    for (let t = 0; t < h.length; t += 1) {
      const n = h[t];
      y.has(n) || (y.add(n), n());
    }
    h.length = 0;
  } while (a.length);
  for (; P.length; )
    P.pop()();
  w = !1, y.clear(), _(e);
}
function W(e) {
  if (e.fragment !== null) {
    e.update(), g(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(x);
  }
}
function X(e) {
  const t = [], n = [];
  h.forEach((s) => e.indexOf(s) === -1 ? t.push(s) : n.push(s)), n.forEach((s) => s()), h = t;
}
const Y = /* @__PURE__ */ new Set();
function Z(e, t) {
  e && e.i && (Y.delete(e), e.i(t));
}
function tt(e, t, n) {
  const { fragment: s, after_update: c } = e.$$;
  s && s.m(t, n), x(() => {
    const r = e.$$.on_mount.map(v).filter(B);
    e.$$.on_destroy ? e.$$.on_destroy.push(...r) : g(r), e.$$.on_mount = [];
  }), c.forEach(x);
}
function et(e, t) {
  const n = e.$$;
  n.fragment !== null && (X(n.after_update), g(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function nt(e, t) {
  e.$$.dirty[0] === -1 && (a.push(e), Q(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function st(e, t, n, s, c, r, i, $ = [-1]) {
  const f = k;
  _(e);
  const o = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: m,
    not_equal: c,
    bound: C(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: C(),
    dirty: $,
    skip_bound: !1,
    root: t.target || f.$$.root
  };
  i && i(o.root);
  let b = !1;
  if (o.ctx = n ? n(e, t.props || {}, (l, O, ...j) => {
    const A = j.length ? j[0] : O;
    return o.ctx && c(o.ctx[l], o.ctx[l] = A) && (!o.skip_bound && o.bound[l] && o.bound[l](A), b && nt(e, l)), O;
  }) : [], o.update(), b = !0, g(o.before_update), o.fragment = s ? s(o.ctx) : !1, t.target) {
    if (t.hydrate) {
      const l = D(t.target);
      o.fragment && o.fragment.l(l), l.forEach(E);
    } else
      o.fragment && o.fragment.c();
    t.intro && Z(e.$$.fragment), tt(e, t.target, t.anchor), H();
  }
  _(f);
}
let I;
typeof HTMLElement == "function" && (I = class extends HTMLElement {
  constructor(t, n, s) {
    super();
    /** The Svelte component constructor */
    u(this, "$$ctor");
    /** Slots */
    u(this, "$$s");
    /** The Svelte component instance */
    u(this, "$$c");
    /** Whether or not the custom element is connected */
    u(this, "$$cn", !1);
    /** Component props data */
    u(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    u(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    u(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    u(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    u(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = t, this.$$s = n, s && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, n, s) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const c = this.$$c.$on(t, n);
      this.$$l_u.set(n, c);
    }
    super.addEventListener(t, n, s);
  }
  removeEventListener(t, n, s) {
    if (super.removeEventListener(t, n, s), this.$$c) {
      const c = this.$$l_u.get(n);
      c && (c(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(r) {
        return () => {
          let i;
          return {
            c: function() {
              i = T("slot"), r !== "default" && z(i, "name", r);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(o, b) {
              M(o, i, b);
            },
            d: function(o) {
              o && E(i);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn)
        return;
      const n = {}, s = G(this);
      for (const r of this.$$s)
        r in s && (n[r] = [t(r)]);
      for (const r of this.attributes) {
        const i = this.$$g_p(r.name);
        i in this.$$d || (this.$$d[i] = p(i, r.value, this.$$p_d, "toProp"));
      }
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$scope: {
            ctx: []
          }
        }
      });
      const c = () => {
        this.$$r = !0;
        for (const r in this.$$p_d)
          if (this.$$d[r] = this.$$c.$$.ctx[this.$$c.$$.props[r]], this.$$p_d[r].reflect) {
            const i = p(
              r,
              this.$$d[r],
              this.$$p_d,
              "toAttribute"
            );
            i == null ? this.removeAttribute(r) : this.setAttribute(this.$$p_d[r].attribute || r, i);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(c), c();
      for (const r in this.$$l)
        for (const i of this.$$l[r]) {
          const $ = this.$$c.$on(r, i);
          this.$$l_u.set(i, $);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, s) {
    var c;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = p(t, s, this.$$p_d, "toProp"), (c = this.$$c) == null || c.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(t) {
    return Object.keys(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function p(e, t, n, s) {
  var r;
  const c = (r = n[e]) == null ? void 0 : r.type;
  if (t = c === "Boolean" && typeof t != "boolean" ? t != null : t, !s || !n[e])
    return t;
  if (s === "toAttribute")
    switch (c) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (c) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function rt(e, t, n, s, c) {
  const r = class extends I {
    constructor() {
      super(e, n, c), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (i) => (t[i].attribute || i).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((i) => {
    Object.defineProperty(r.prototype, i, {
      get() {
        return this.$$c && i in this.$$c ? this.$$c[i] : this.$$d[i];
      },
      set($) {
        var f;
        $ = p(i, $, t), this.$$d[i] = $, (f = this.$$c) == null || f.$set({ [i]: $ });
      }
    });
  }), s.forEach((i) => {
    Object.defineProperty(r.prototype, i, {
      get() {
        var $;
        return ($ = this.$$c) == null ? void 0 : $[i];
      }
    });
  }), e.element = /** @type {any} */
  r, r;
}
class it {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    u(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    u(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    et(this, 1), this.$destroy = m;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!B(n))
      return m;
    const s = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return s.push(n), () => {
      const c = s.indexOf(n);
      c !== -1 && s.splice(c, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !U(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const ct = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ct);
function ot(e) {
  let t, n, s, c, r;
  return {
    c() {
      t = T("button"), n = N("count is "), s = N(
        /*count*/
        e[0]
      );
    },
    m(i, $) {
      M(i, t, $), L(t, n), L(t, s), c || (r = q(
        t,
        "click",
        /*increment*/
        e[1]
      ), c = !0);
    },
    p(i, [$]) {
      $ & /*count*/
      1 && F(
        s,
        /*count*/
        i[0]
      );
    },
    i: m,
    o: m,
    d(i) {
      i && E(t), c = !1, r();
    }
  };
}
function $t(e, t, n) {
  let s = 0;
  return [s, () => {
    n(0, s += 1);
  }];
}
class ut extends it {
  constructor(t) {
    super(), st(this, t, $t, ot, V, {});
  }
}
customElements.define("svelte-custom-counter", rt(ut, {}, [], [], !1));
export {
  ut as Counter
};
