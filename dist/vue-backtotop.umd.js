(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global['vue-backtotop'] = global['vue-backtotop'] || {}, global['vue-backtotop'].umd = factory());
}(this, (function () { 'use strict';

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script = {
    name: 'BackToTop',
    props: {
      text: {
        type: String,
        default: 'Voltar ao topo',
      },
      visibleoffset: {
        type: [String, Number],
        default: 600,
      },
      visibleoffsetbottom: {
        type: [String, Number],
        default: 0,
      },
      right: {
        type: String,
        default: '30px',
      },
      bottom: {
        type: String,
        default: '40px',
      },
      scrollFn: {
        type: Function,
        default: function (eventObject) {},
      }
    },
    data: function data () {
      return {
        visible: false
      }
    },
    mounted: function mounted () {
      window.smoothscroll = function () {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
          window.requestAnimationFrame(window.smoothscroll);
          window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)));
        }
      };
      window.addEventListener('scroll', this.catchScroll);
    },
    destroyed: function destroyed () {
      window.removeEventListener('scroll', this.catchScroll);
    },
    methods: {
      /**
       * Catch window scroll event
       * @return {void}
       */
      catchScroll: function catchScroll () {
        var pastTopOffset = window.pageYOffset > parseInt(this.visibleoffset);
        var pastBottomOffset = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - parseInt(this.visibleoffsetbottom);
        this.visible = parseInt(this.visibleoffsetbottom) > 0 ? pastTopOffset && !pastBottomOffset : pastTopOffset;
        this.scrollFn(this);
      },
      /**
       * The function who make the magics
       * @return {void}
       */
      backToTop: function backToTop () {
        window.smoothscroll();
        this.$emit('scrolled');
      }
    },
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  /* script */
  var __vue_script__ = script;

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("transition", { attrs: { name: "back-to-top-fade" } }, [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }
          ],
          staticClass: "vue-back-to-top",
          style: "bottom:" + this.bottom + ";right:" + this.right + ";",
          on: { click: _vm.backToTop }
        },
        [
          _vm._t("default", [
            _c("div", { staticClass: "default" }, [
              _c("span", [
                _vm._v("\n          " + _vm._s(_vm.text) + "\n        ")
              ])
            ])
          ])
        ],
        2
      )
    ])
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    var __vue_inject_styles__ = undefined;
    /* scoped */
    var __vue_scope_id__ = undefined;
    /* module identifier */
    var __vue_module_identifier__ = undefined;
    /* functional template */
    var __vue_is_functional_template__ = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var BackToTop = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  /**
   * Check why can't use () => {}
   */
  var install = function installMyComponent(Vue, opt) {
    // Don't install if already installed, or SSR
    if (install.installed || Vue.prototype.$isServer) { return }
    install.installed = true;

    Vue.component(BackToTop.name, BackToTop);
  };

  // Inject install function into component - allows component
  // to be registered via Vue.use() as well as Vue.component()
  BackToTop.install = install;

  return BackToTop;

})));
