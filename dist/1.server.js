exports.ids = [1];
exports.modules = {

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_script_index_0_bustCache_Item_vue__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_5_0_vue_loader_lib_template_compiler_index_id_data_v_387ed0ba_hasScoped_false_buble_transforms_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_template_index_0_bustCache_Item_vue__ = __webpack_require__(32);
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "c7e3c24a"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_script_index_0_bustCache_Item_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_5_0_vue_loader_lib_template_compiler_index_id_data_v_387ed0ba_hasScoped_false_buble_transforms_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_template_index_0_bustCache_Item_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\Item.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_modules_foo__ = __webpack_require__(31);
//
//
//
//
//

// 在这里导入模块，而不是在 `store/index.js` 中


/* harmony default export */ __webpack_exports__["a"] = ({
  asyncData: function asyncData(_ref) {
    var store = _ref.store,
        route = _ref.route;

    // 使用 store.registerModule 惰性注册(lazy-register)这个模块
    store.registerModule('foo', __WEBPACK_IMPORTED_MODULE_0__store_modules_foo__["a" /* default */]);
    // 触发 action 后，会返回 Promise
    return Promise.all([store.dispatch('fetchItem', route.params.id), store.dispatch('foo/inc')]);
  },

  // 重要信息：当多次访问路由时，
  // 避免在客户端重复注册模块。
  destroyed: function destroyed() {
    this.$store.unregisterModule('foo');
  },

  computed: {
    // 从 store 的 state 对象中的获取 item。
    item: function item() {
      return this.$store.state.items[this.$route.params.id];
    },
    fooCount: function fooCount() {
      return this.$store.state.foo.count;
    }
  }
});

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// store/modules/foo.js
/* harmony default export */ __webpack_exports__["a"] = ({
  namespaced: true,
  // 重要信息：state 必须是一个函数，
  // 因此可以创建多个实例化该模块
  state: function state() {
    return {
      count: 0
    };
  },
  actions: {
    inc: function inc(_ref) {
      var commit = _ref.commit;
      return commit('inc');
    }
  },
  mutations: {
    inc: function inc(state) {
      return state.count++;
    }
  }
});

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._ssrNode(
      _vm._ssrEscape(_vm._s(_vm.item.text) + " --- " + _vm._s(_vm.fooCount))
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

};;
//# sourceMappingURL=1.server.js.map