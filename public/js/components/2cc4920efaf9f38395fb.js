(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ConfirmDeleteModal.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ConfirmDeleteModal.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'confirm-delete-modal',
  computed: {
    isOpen: function isOpen() {
      return this.$store.getters['DeleteConfirmation/isOpen'];
    }
  },
  methods: {
    onCancel: function onCancel() {
      this.$store.commit('DeleteConfirmation/HIDE');
    },
    onConfirm: function onConfirm() {
      this.$store.commit('DeleteConfirmation/CONFIRM_DELETE');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DataTable.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DataTable.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'data-table',
  props: {
    items: {
      type: Array,
      required: true
    },
    fields: {
      type: Array,
      required: true
    }
  },
  data: function data() {
    return {
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      perPageOptions: [5, 10, 15],
      filter: null,
      sortBy: 'name'
    };
  },
  computed: {
    from: function from() {
      return this.to - this.perPage + 1;
    },
    to: function to() {
      return this.currentPage * this.perPage > this.totalRows ? this.totalRows : this.currentPage * this.perPage;
    }
  },
  methods: {
    onFiltered: function onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  },
  mounted: function mounted() {
    this.totalRows = this.items.length;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/users/UsersList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/users/UsersList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ConfirmDeleteModal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ConfirmDeleteModal.vue */ "./resources/js/components/ConfirmDeleteModal.vue");
/* harmony import */ var _components_DataTable_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/DataTable.vue */ "./resources/js/components/DataTable.vue");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/index */ "./resources/js/store/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'UsersList',
  components: {
    DataTable: _components_DataTable_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ConfirmDeleteModal: _components_ConfirmDeleteModal_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _store_index__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch('users/fetchUsers');

            case 2:
              next();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  data: function data() {
    return {
      fields: [{
        key: 'name',
        label: 'Fullname',
        sortable: true
      }, {
        key: 'email',
        sortable: true
      }, {
        key: 'birthdate',
        sortable: true
      }, {
        key: 'gender',
        sortable: true
      }, {
        key: 'is_admin',
        label: 'Type',
        sortable: true
      }, {
        key: 'updated_at',
        label: 'Last update',
        sortable: true
      }, {
        key: 'actions',
        label: '',
        "class": 'actions'
      }]
    };
  },
  computed: {
    authId: function authId() {
      return this.$store.getters['auth/authId'];
    },
    users: function users() {
      var _this = this;

      return this.$store.getters['users/users'].filter(function (user) {
        return user.id != _this.authId;
      });
    },
    confirmed: function confirmed() {
      return this.$store.getters['DeleteConfirmation/confirmed'];
    },
    itemToDeleteId: function itemToDeleteId() {
      return this.$store.getters['DeleteConfirmation/itemToDeleteId'];
    }
  },
  methods: {
    deleteUser: function deleteUser() {
      var _this2 = this;

      if (this.itemToDeleteId) this.$store.dispatch('users/deleteUser', this.itemToDeleteId).then(function (response) {
        _this2.$store.commit('DeleteConfirmation/HIDE');
      });
    },
    showConfirmModal: function showConfirmModal(id) {
      this.$store.commit('DeleteConfirmation/SET_ITEM_TO_DELETE_ID', id);
      this.$store.commit('DeleteConfirmation/SHOW');
    },
    normalizedName: function normalizedName(row) {
      return row.item.civility ? row.item.civility + ' ' + row.item.lastname + ' ' + row.item.firstname : row.item.lastname + ' ' + row.item.firstname;
    }
  },
  watch: {
    confirmed: function confirmed() {
      if (this.confirmed) {
        this.deleteUser();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ConfirmDeleteModal.vue?vue&type=template&id=e09fece6&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ConfirmDeleteModal.vue?vue&type=template&id=e09fece6& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-modal",
        {
          attrs: {
            id: "confirm-delete",
            centered: "",
            title: "Confirm deletion"
          },
          scopedSlots: _vm._u([
            {
              key: "modal-header",
              fn: function() {
                return [
                  _c("h5", { staticClass: "modal-tite" }, [
                    _vm._v("Confirm deletion")
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: { type: "button" },
                      on: { click: _vm.onCancel }
                    },
                    [
                      _c("font-awesome-icon", {
                        attrs: { icon: ["fas", "times"], size: "xs" }
                      })
                    ],
                    1
                  )
                ]
              },
              proxy: true
            },
            {
              key: "modal-footer",
              fn: function() {
                return [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      on: { click: _vm.onCancel }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-danger",
                      on: { click: _vm.onConfirm }
                    },
                    [
                      _c(
                        "span",
                        { staticClass: "btn-icon" },
                        [
                          _c("font-awesome-icon", {
                            attrs: { icon: ["far", "trash-alt"] }
                          })
                        ],
                        1
                      ),
                      _vm._v("\n\t\t\t\tDelete\n\t\t\t")
                    ]
                  )
                ]
              },
              proxy: true
            }
          ]),
          model: {
            value: _vm.isOpen,
            callback: function($$v) {
              _vm.isOpen = $$v
            },
            expression: "isOpen"
          }
        },
        [
          _vm._v(" "),
          _c(
            "p",
            { staticClass: "my-2" },
            [
              _vm._t("message", [
                _vm._v("Do you really want to delete this item?")
              ])
            ],
            2
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DataTable.vue?vue&type=template&id=4b997e69&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DataTable.vue?vue&type=template&id=4b997e69& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "row justify-content-between mb-3" }, [
        _c(
          "div",
          { staticClass: "col-2" },
          [
            _c(
              "b-form-group",
              {
                staticClass: "mb-0",
                attrs: {
                  label: "Per page",
                  "label-cols": "auto",
                  "label-for": "perPageSelect"
                }
              },
              [
                _c("b-form-select", {
                  staticClass: "form-control",
                  attrs: { id: "perPageSelect", options: _vm.perPageOptions },
                  model: {
                    value: _vm.perPage,
                    callback: function($$v) {
                      _vm.perPage = $$v
                    },
                    expression: "perPage"
                  }
                })
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-4" },
          [
            _c(
              "b-form-group",
              {
                staticClass: "mb-0",
                attrs: {
                  label: "Search :",
                  "label-cols": "auto",
                  "label-for": "filterInput"
                }
              },
              [
                _c("b-form-input", {
                  attrs: {
                    type: "search",
                    id: "filterInput",
                    placeholder: "Type to Search"
                  },
                  model: {
                    value: _vm.filter,
                    callback: function($$v) {
                      _vm.filter = $$v
                    },
                    expression: "filter"
                  }
                })
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("b-table", {
        staticClass: "mb-3",
        attrs: {
          responsive: "",
          striped: "",
          hover: "",
          "show-empty": "",
          items: _vm.items,
          fields: _vm.fields,
          "current-page": _vm.currentPage,
          "per-page": _vm.perPage,
          filter: _vm.filter,
          "sort-by": _vm.sortBy
        },
        on: { filtered: _vm.onFiltered },
        scopedSlots: _vm._u(
          [
            _vm._l(Object.keys(_vm.$scopedSlots), function(slotName) {
              return {
                key: slotName,
                fn: function(slotScope) {
                  return [_vm._t(slotName, null, null, slotScope)]
                }
              }
            })
          ],
          null,
          true
        )
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row justify-content-between align-items-center" },
        [
          _c("div", { staticClass: "col-5" }, [
            _vm._v(
              "\n\t\t\tShowing " +
                _vm._s(_vm.from) +
                " to " +
                _vm._s(_vm.to) +
                " of\n\t\t\t" +
                _vm._s(_vm.totalRows) +
                " entries\n\t\t"
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-5" },
            [
              _c("b-pagination", {
                staticClass: "my-0 flat",
                attrs: {
                  "total-rows": _vm.totalRows,
                  "per-page": _vm.perPage,
                  align: "fill"
                },
                model: {
                  value: _vm.currentPage,
                  callback: function($$v) {
                    _vm.currentPage = $$v
                  },
                  expression: "currentPage"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-2" },
            [
              _c(
                "b-form-group",
                {
                  staticClass: "mb-0",
                  attrs: {
                    label: "Jump to ",
                    "label-cols": "auto",
                    "label-for": "jumpTo"
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: { type: "number", min: "1", id: "jumpTo" },
                    on: {
                      keyup: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        _vm.currentPage = $event.target.value
                      }
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/users/UsersList.vue?vue&type=template&id=0326b3f5&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/users/UsersList.vue?vue&type=template&id=0326b3f5& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-12 grid-margin" }, [
      _c("div", { staticClass: "card" }, [
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _c("h5", { staticClass: "card-title mb-4" }, [_vm._v("Users")]),
            _vm._v(" "),
            _c("DataTable", {
              attrs: { items: _vm.users, fields: _vm.fields },
              scopedSlots: _vm._u([
                {
                  key: "cell(name)",
                  fn: function(row) {
                    return [_vm._v(_vm._s(_vm.normalizedName(row)))]
                  }
                },
                {
                  key: "cell(is_admin)",
                  fn: function(row) {
                    return [
                      _vm._v(
                        "\n\t\t\t\t\t\t" +
                          _vm._s(row.item.is_admin ? "Admin" : "User") +
                          "\n\t\t\t\t\t"
                      )
                    ]
                  }
                },
                {
                  key: "cell(actions)",
                  fn: function(row) {
                    return [
                      !row.item.is_admin
                        ? _c(
                            "router-link",
                            {
                              staticClass: "text-primary mr-2",
                              attrs: {
                                to: {
                                  name: "users.edit",
                                  params: { id: row.item.id }
                                }
                              }
                            },
                            [
                              _c("font-awesome-icon", {
                                attrs: { icon: ["fas", "pencil-alt"] }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !row.item.is_admin
                        ? _c(
                            "a",
                            {
                              directives: [
                                {
                                  name: "b-modal",
                                  rawName: "v-b-modal",
                                  value: "confirm-delete",
                                  expression: "'confirm-delete'"
                                }
                              ],
                              staticClass: "text-danger",
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  return _vm.showConfirmModal(row.item.id)
                                }
                              }
                            },
                            [
                              _c("font-awesome-icon", {
                                attrs: { icon: ["far", "trash-alt"] }
                              })
                            ],
                            1
                          )
                        : _vm._e()
                    ]
                  }
                }
              ])
            }),
            _vm._v(" "),
            _c("ConfirmDeleteModal", {
              scopedSlots: _vm._u([
                {
                  key: "message",
                  fn: function() {
                    return [
                      _vm._v(
                        "\n\t\t\t\t\t\tDo you really want to delete this user?\n\t\t\t\t\t"
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            })
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ConfirmDeleteModal.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/ConfirmDeleteModal.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConfirmDeleteModal_vue_vue_type_template_id_e09fece6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfirmDeleteModal.vue?vue&type=template&id=e09fece6& */ "./resources/js/components/ConfirmDeleteModal.vue?vue&type=template&id=e09fece6&");
/* harmony import */ var _ConfirmDeleteModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfirmDeleteModal.vue?vue&type=script&lang=js& */ "./resources/js/components/ConfirmDeleteModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ConfirmDeleteModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ConfirmDeleteModal_vue_vue_type_template_id_e09fece6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ConfirmDeleteModal_vue_vue_type_template_id_e09fece6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ConfirmDeleteModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ConfirmDeleteModal.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/ConfirmDeleteModal.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmDeleteModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ConfirmDeleteModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ConfirmDeleteModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmDeleteModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ConfirmDeleteModal.vue?vue&type=template&id=e09fece6&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/ConfirmDeleteModal.vue?vue&type=template&id=e09fece6& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmDeleteModal_vue_vue_type_template_id_e09fece6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ConfirmDeleteModal.vue?vue&type=template&id=e09fece6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ConfirmDeleteModal.vue?vue&type=template&id=e09fece6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmDeleteModal_vue_vue_type_template_id_e09fece6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmDeleteModal_vue_vue_type_template_id_e09fece6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/DataTable.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/DataTable.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataTable_vue_vue_type_template_id_4b997e69___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataTable.vue?vue&type=template&id=4b997e69& */ "./resources/js/components/DataTable.vue?vue&type=template&id=4b997e69&");
/* harmony import */ var _DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataTable.vue?vue&type=script&lang=js& */ "./resources/js/components/DataTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DataTable_vue_vue_type_template_id_4b997e69___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DataTable_vue_vue_type_template_id_4b997e69___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DataTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/DataTable.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/DataTable.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DataTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DataTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DataTable.vue?vue&type=template&id=4b997e69&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/DataTable.vue?vue&type=template&id=4b997e69& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_template_id_4b997e69___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DataTable.vue?vue&type=template&id=4b997e69& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DataTable.vue?vue&type=template&id=4b997e69&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_template_id_4b997e69___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_template_id_4b997e69___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/dashboard/users/UsersList.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/dashboard/users/UsersList.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UsersList_vue_vue_type_template_id_0326b3f5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsersList.vue?vue&type=template&id=0326b3f5& */ "./resources/js/views/dashboard/users/UsersList.vue?vue&type=template&id=0326b3f5&");
/* harmony import */ var _UsersList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsersList.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/users/UsersList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UsersList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UsersList_vue_vue_type_template_id_0326b3f5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UsersList_vue_vue_type_template_id_0326b3f5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/users/UsersList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/users/UsersList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/dashboard/users/UsersList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/users/UsersList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/users/UsersList.vue?vue&type=template&id=0326b3f5&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/dashboard/users/UsersList.vue?vue&type=template&id=0326b3f5& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersList_vue_vue_type_template_id_0326b3f5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersList.vue?vue&type=template&id=0326b3f5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/users/UsersList.vue?vue&type=template&id=0326b3f5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersList_vue_vue_type_template_id_0326b3f5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersList_vue_vue_type_template_id_0326b3f5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);