exports.ids = [0];
exports.modules = {

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_script_index_0_bustCache_hello_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_5_0_vue_loader_lib_template_compiler_index_id_data_v_331793dc_hasScoped_true_buble_transforms_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_template_index_0_bustCache_hello_vue__ = __webpack_require__(24);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(21),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-331793dc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "37d795da"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_script_index_0_bustCache_hello_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_5_0_vue_loader_lib_template_compiler_index_id_data_v_331793dc_hasScoped_true_buble_transforms_node_modules_vue_loader_13_5_0_vue_loader_lib_selector_type_template_index_0_bustCache_hello_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\hello.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(1)
module.exports.__inject__ = function (context) {
  add("9cc9d13c", content, false, context)
};

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"hello.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'hello',
  data: function data() {
    return {
      id: this.$route.params.id
    };
  }
});

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("h1", [_vm._ssrNode(_vm._ssrEscape(_vm._s(_vm.id)))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

};;
//# sourceMappingURL=0.server.js.map