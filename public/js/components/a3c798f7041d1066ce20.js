(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/Dashboard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/Dashboard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _partials_AppHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../partials/AppHeader */ "./resources/js/views/partials/AppHeader.vue");
/* harmony import */ var _partials_AppSidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../partials/AppSidebar */ "./resources/js/views/partials/AppSidebar.vue");
/* harmony import */ var _partials_AppFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/AppFooter */ "./resources/js/views/partials/AppFooter.vue");
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
  name: 'dashboard',
  components: {
    AppHeader: _partials_AppHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    AppSidebar: _partials_AppSidebar__WEBPACK_IMPORTED_MODULE_1__["default"],
    AppFooter: _partials_AppFooter__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/partials/AppFooter.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/partials/AppFooter.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app-footer'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/partials/AppHeader.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/partials/AppHeader.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


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
  name: 'app-header',
  computed: {
    user: function user() {
      return this.$store.getters['auth/currentUser'];
    }
  },
  methods: {
    collapedMobileSidebar: function collapedMobileSidebar() {
      this.$store.dispatch('toggleSideBar');
    },
    logout: function logout() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$store.dispatch('auth/logout');

              case 2:
                _this.$router.push({
                  name: 'login'
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/partials/AppSidebar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/partials/AppSidebar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app-sidebar',
  computed: {
    sidebar: function sidebar() {
      return this.$store.getters.sidebar;
    },
    user: function user() {
      return this.$store.getters['auth/currentUser'];
    },
    normalizedName: function normalizedName() {
      return this.user.civility ? this.user.civility + ' ' + this.user.lastname + ' ' + this.user.firstname : this.user.lastname + ' ' + this.user.firstname;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/Dashboard.vue?vue&type=template&id=4a23547f&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/Dashboard.vue?vue&type=template&id=4a23547f& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container-scroller dashboard" },
    [
      _c("app-header"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container-fluid page-body-wrapper" },
        [
          _c("app-sidebar"),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "main-panel" },
            [
              _c(
                "div",
                { staticClass: "content-wrapper" },
                [_c("router-view")],
                1
              ),
              _vm._v(" "),
              _c("app-footer")
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/partials/AppFooter.vue?vue&type=template&id=3df90004&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/partials/AppFooter.vue?vue&type=template&id=3df90004& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "app-footer" }, [
      _c("footer", { staticClass: "footer" }, [
        _c("div", { staticClass: "container-fluid clearfix" }, [
          _c(
            "span",
            {
              staticClass:
                "text-muted d-block text-center text-sm-left d-sm-inline-block"
            },
            [
              _vm._v("Copyright © 2018\n\t\t\t\t"),
              _c(
                "a",
                {
                  attrs: {
                    href: "http://www.bootstrapdash.com/",
                    target: "_blank"
                  }
                },
                [_vm._v("Bootstrapdash")]
              ),
              _vm._v(". All rights reserved.")
            ]
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass:
                "float-none float-sm-right d-block mt-1 mt-sm-0 text-center"
            },
            [
              _vm._v("Hand-crafted & made with\n\t\t\t\t"),
              _c("i", { staticClass: "mdi mdi-heart text-danger" })
            ]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/partials/AppHeader.vue?vue&type=template&id=0235e3f0&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/partials/AppHeader.vue?vue&type=template&id=0235e3f0& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    "b-navbar",
    {
      staticClass: "fixed-top",
      attrs: { toggleable: "md", type: "dark", variant: "info" }
    },
    [
      _c(
        "div",
        {
          staticClass:
            "text-center navbar-brand-wrapper d-flex align-items-top justify-content-center"
        },
        [
          _c(
            "a",
            {
              staticClass: "navbar-brand brand-logo",
              attrs: { href: "/demo/star-admin-vue/" }
            },
            [_c("img", { attrs: { src: "/images/logo.svg", alt: "logo" } })]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "navbar-brand brand-logo-mini",
              attrs: { href: "/demo/star-admin-vue/" }
            },
            [
              _c("img", {
                attrs: { src: "/images/logo-mini.svg", alt: "logo" }
              })
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "navbar-menu-wrapper d-flex align-items-center ml-auto ml-lg-0"
        },
        [
          _c(
            "b-navbar-nav",
            { staticClass: "ml-auto" },
            [
              _c(
                "b-nav-item-dropdown",
                { staticClass: "preview-list", attrs: { right: "" } },
                [
                  _c("template", { slot: "button-content" }, [
                    _c("div", { staticClass: "count-indicator" }, [
                      _c(
                        "span",
                        { staticClass: "icon" },
                        [
                          _c("font-awesome-icon", {
                            attrs: { icon: ["fas", "bell"] }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "count" }, [_vm._v("7")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { staticClass: "preview-item", attrs: { href: "#" } },
                    [
                      _c(
                        "p",
                        { staticClass: "mb-0 font-weight-normal float-left" },
                        [_vm._v("You have 4 new notifications")]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        { staticClass: "badge badge-pill badge-warning" },
                        [_vm._v("View all")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { staticClass: "preview-item", attrs: { href: "#" } },
                    [
                      _c("div", { staticClass: "preview-thumbnail" }, [
                        _c("div", { staticClass: "preview-icon bg-success" }, [
                          _c("i", {
                            staticClass: "mdi mdi-alert-circle-outline mx-0"
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "preview-item-content" }, [
                        _c(
                          "h6",
                          { staticClass: "preview-subject font-weight-medium" },
                          [_vm._v("Application Error")]
                        ),
                        _vm._v(" "),
                        _c(
                          "p",
                          { staticClass: "font-weight-light small-text" },
                          [_vm._v("Just now")]
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { staticClass: "preview-item", attrs: { href: "#" } },
                    [
                      _c("div", { staticClass: "preview-thumbnail" }, [
                        _c("div", { staticClass: "preview-icon bg-warning" }, [
                          _c("i", {
                            staticClass: "mdi mdi-comment-text-outline mx-0"
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "preview-item-content" }, [
                        _c(
                          "h6",
                          { staticClass: "preview-subject font-weight-medium" },
                          [_vm._v("Settings")]
                        ),
                        _vm._v(" "),
                        _c(
                          "p",
                          { staticClass: "font-weight-light small-text" },
                          [_vm._v("Private message")]
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { staticClass: "preview-item", attrs: { href: "#" } },
                    [
                      _c("div", { staticClass: "preview-thumbnail" }, [
                        _c("div", { staticClass: "preview-icon bg-info" }, [
                          _c("i", { staticClass: "mdi mdi-email-outline mx-0" })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "preview-item-content" }, [
                        _c(
                          "h6",
                          { staticClass: "preview-subject font-weight-medium" },
                          [_vm._v("New user registration")]
                        ),
                        _vm._v(" "),
                        _c(
                          "p",
                          { staticClass: "font-weight-light small-text" },
                          [_vm._v("2 days ago")]
                        )
                      ])
                    ]
                  )
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "b-nav-item-dropdown",
                { staticClass: "preview-list", attrs: { right: "" } },
                [
                  _c("template", { slot: "button-content" }, [
                    _c("img", {
                      staticClass: "img-xs rounded-circle",
                      attrs: { src: _vm.user.avatar, alt: "profile image" }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    {
                      staticClass: "preview-item flex-wrap",
                      attrs: {
                        to: {
                          name: "users.edit",
                          params: { id: _vm.user.id }
                        }
                      }
                    },
                    [_vm._v("Profile")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    {
                      staticClass: "preview-item flex-wrap",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.logout($event)
                        }
                      }
                    },
                    [_vm._v("Signout")]
                  )
                ],
                2
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass:
                "navbar-toggler navbar-toggler-right align-self-center",
              attrs: { type: "button" },
              on: { click: _vm.collapedMobileSidebar }
            },
            [
              _c(
                "span",
                [_c("font-awesome-icon", { attrs: { icon: ["fas", "bars"] } })],
                1
              )
            ]
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/partials/AppSidebar.vue?vue&type=template&id=2fd207ee&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/partials/AppSidebar.vue?vue&type=template&id=2fd207ee& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "app-sidebar" }, [
    _c(
      "nav",
      {
        staticClass: "sidebar sidebar-offcanvas",
        class: _vm.sidebar,
        attrs: { id: "sidebar" }
      },
      [
        _c("ul", { staticClass: "nav" }, [
          _c(
            "li",
            { staticClass: "nav-item nav-profile" },
            [
              _c(
                "router-link",
                {
                  staticClass: "nav-link",
                  attrs: {
                    to: {
                      name: "users.edit",
                      params: { id: _vm.user.id }
                    }
                  }
                },
                [
                  _c("div", { staticClass: "profile-image" }, [
                    _c("img", { attrs: { src: _vm.user.avatar, alt: "image" } })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "profile-name" }, [
                    _c("p", { staticClass: "name" }, [
                      _vm._v(_vm._s(_vm.normalizedName))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "designation" }, [
                      _vm._v(_vm._s(_vm.user.email))
                    ])
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "nav-item" },
            [
              _c(
                "router-link",
                {
                  staticClass: "nav-link",
                  attrs: { to: { name: "dashboard" }, exact: "" }
                },
                [
                  _c(
                    "span",
                    { staticClass: "menu-icon" },
                    [
                      _c("font-awesome-icon", {
                        attrs: { icon: ["fas", "home"] }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("span", { staticClass: "menu-title" }, [
                    _vm._v("Dashboard")
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.user.is_admin
            ? _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "b-toggle",
                          rawName: "v-b-toggle",
                          value: "users-sub-menu",
                          expression: "'users-sub-menu'"
                        }
                      ],
                      staticClass: "nav-link"
                    },
                    [
                      _c(
                        "span",
                        { staticClass: "menu-icon" },
                        [
                          _c("font-awesome-icon", {
                            attrs: { icon: ["fas", "users"] }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "menu-title" }, [
                        _vm._v("Users")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "menu-arrow" },
                        [
                          _c("font-awesome-icon", {
                            attrs: { icon: ["fas", "chevron-right"] }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("b-collapse", { attrs: { id: "users-sub-menu" } }, [
                    _c("ul", { staticClass: "nav flex-column sub-menu" }, [
                      _c(
                        "li",
                        { staticClass: "nav-item" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-link",
                              attrs: { to: { name: "users" }, exact: "" }
                            },
                            [_vm._v("Users list")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        { staticClass: "nav-item" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-link",
                              attrs: { to: { name: "users.create" } }
                            },
                            [_vm._v("Add a user")]
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ],
                1
              )
            : _vm._e()
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/layouts/Dashboard.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/layouts/Dashboard.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_4a23547f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=4a23547f& */ "./resources/js/views/layouts/Dashboard.vue?vue&type=template&id=4a23547f&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_4a23547f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_4a23547f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/Dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/layouts/Dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/Dashboard.vue?vue&type=template&id=4a23547f&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/layouts/Dashboard.vue?vue&type=template&id=4a23547f& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_4a23547f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=4a23547f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/Dashboard.vue?vue&type=template&id=4a23547f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_4a23547f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_4a23547f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/partials/AppFooter.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/partials/AppFooter.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppFooter_vue_vue_type_template_id_3df90004___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=template&id=3df90004& */ "./resources/js/views/partials/AppFooter.vue?vue&type=template&id=3df90004&");
/* harmony import */ var _AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=script&lang=js& */ "./resources/js/views/partials/AppFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppFooter_vue_vue_type_template_id_3df90004___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppFooter_vue_vue_type_template_id_3df90004___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/partials/AppFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/partials/AppFooter.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/partials/AppFooter.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/partials/AppFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/partials/AppFooter.vue?vue&type=template&id=3df90004&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/partials/AppFooter.vue?vue&type=template&id=3df90004& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_3df90004___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppFooter.vue?vue&type=template&id=3df90004& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/partials/AppFooter.vue?vue&type=template&id=3df90004&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_3df90004___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_3df90004___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/partials/AppHeader.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/partials/AppHeader.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppHeader_vue_vue_type_template_id_0235e3f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppHeader.vue?vue&type=template&id=0235e3f0& */ "./resources/js/views/partials/AppHeader.vue?vue&type=template&id=0235e3f0&");
/* harmony import */ var _AppHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppHeader.vue?vue&type=script&lang=js& */ "./resources/js/views/partials/AppHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppHeader_vue_vue_type_template_id_0235e3f0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppHeader_vue_vue_type_template_id_0235e3f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/partials/AppHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/partials/AppHeader.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/partials/AppHeader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/partials/AppHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/partials/AppHeader.vue?vue&type=template&id=0235e3f0&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/partials/AppHeader.vue?vue&type=template&id=0235e3f0& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_template_id_0235e3f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppHeader.vue?vue&type=template&id=0235e3f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/partials/AppHeader.vue?vue&type=template&id=0235e3f0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_template_id_0235e3f0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_template_id_0235e3f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/partials/AppSidebar.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/partials/AppSidebar.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppSidebar_vue_vue_type_template_id_2fd207ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppSidebar.vue?vue&type=template&id=2fd207ee& */ "./resources/js/views/partials/AppSidebar.vue?vue&type=template&id=2fd207ee&");
/* harmony import */ var _AppSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppSidebar.vue?vue&type=script&lang=js& */ "./resources/js/views/partials/AppSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppSidebar_vue_vue_type_template_id_2fd207ee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppSidebar_vue_vue_type_template_id_2fd207ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/partials/AppSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/partials/AppSidebar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/partials/AppSidebar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/partials/AppSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/partials/AppSidebar.vue?vue&type=template&id=2fd207ee&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/partials/AppSidebar.vue?vue&type=template&id=2fd207ee& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_template_id_2fd207ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppSidebar.vue?vue&type=template&id=2fd207ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/partials/AppSidebar.vue?vue&type=template&id=2fd207ee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_template_id_2fd207ee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_template_id_2fd207ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);