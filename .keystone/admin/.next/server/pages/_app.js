(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

;// CONCATENATED MODULE: external "@keystone-next/keystone/___internal-do-not-use-will-break-in-patch/admin-ui/pages/App"
const App_namespaceObject = require("@keystone-next/keystone/___internal-do-not-use-will-break-in-patch/admin-ui/pages/App");
// EXTERNAL MODULE: ../../node_modules/@keystone-next/keystone/___internal-do-not-use-will-break-in-patch/admin-ui/id-field-view/dist/keystone-next-keystone-___internal-do-not-use-will-break-in-patch-admin-ui-id-field-view.cjs.js
var keystone_next_keystone_internal_do_not_use_will_break_in_patch_admin_ui_id_field_view_cjs = __webpack_require__(874);
// EXTERNAL MODULE: ../../node_modules/@keystone-next/keystone/fields/types/text/views/dist/keystone-next-keystone-fields-types-text-views.cjs.js
var keystone_next_keystone_fields_types_text_views_cjs = __webpack_require__(7222);
// EXTERNAL MODULE: ../../node_modules/@keystone-next/keystone/fields/types/checkbox/views/dist/keystone-next-keystone-fields-types-checkbox-views.cjs.js
var keystone_next_keystone_fields_types_checkbox_views_cjs = __webpack_require__(6992);
// EXTERNAL MODULE: ../../node_modules/@keystone-next/keystone/fields/types/password/views/dist/keystone-next-keystone-fields-types-password-views.cjs.js
var keystone_next_keystone_fields_types_password_views_cjs = __webpack_require__(4934);
// EXTERNAL MODULE: ../../node_modules/@keystone-next/keystone/fields/types/select/views/dist/keystone-next-keystone-fields-types-select-views.cjs.js
var keystone_next_keystone_fields_types_select_views_cjs = __webpack_require__(7829);
// EXTERNAL MODULE: ../../node_modules/@keystone-next/fields-document/views/dist/keystone-next-fields-document-views.cjs.js
var keystone_next_fields_document_views_cjs = __webpack_require__(301);
// EXTERNAL MODULE: ../../node_modules/@keystone-next/keystone/fields/types/timestamp/views/dist/keystone-next-keystone-fields-types-timestamp-views.cjs.js
var keystone_next_keystone_fields_types_timestamp_views_cjs = __webpack_require__(7097);
// EXTERNAL MODULE: ../../node_modules/@keystone-next/keystone/fields/types/relationship/views/dist/keystone-next-keystone-fields-types-relationship-views.cjs.js
var keystone_next_keystone_fields_types_relationship_views_cjs = __webpack_require__(2006);
// EXTERNAL MODULE: ../../node_modules/@keystone-next/keystone/fields/types/json/views/dist/keystone-next-keystone-fields-types-json-views.cjs.js
var keystone_next_keystone_fields_types_json_views_cjs = __webpack_require__(2652);
// EXTERNAL MODULE: ../../node_modules/@keystone-next/keystone/fields/types/image/views/dist/keystone-next-keystone-fields-types-image-views.cjs.js
var keystone_next_keystone_fields_types_image_views_cjs = __webpack_require__(6512);
;// CONCATENATED MODULE: ./pages/_app.js











var adminConfig = {};
/* harmony default export */ const _app = ((0,App_namespaceObject.getApp)({
  lazyMetadataQuery: {
    "kind": "Document",
    "definitions": [{
      "kind": "OperationDefinition",
      "operation": "query",
      "selectionSet": {
        "kind": "SelectionSet",
        "selections": [{
          "kind": "Field",
          "name": {
            "kind": "Name",
            "value": "keystone",
            "loc": {
              "start": 22,
              "end": 30
            }
          },
          "arguments": [],
          "directives": [],
          "selectionSet": {
            "kind": "SelectionSet",
            "selections": [{
              "kind": "Field",
              "name": {
                "kind": "Name",
                "value": "adminMeta",
                "loc": {
                  "start": 39,
                  "end": 48
                }
              },
              "arguments": [],
              "directives": [],
              "selectionSet": {
                "kind": "SelectionSet",
                "selections": [{
                  "kind": "Field",
                  "name": {
                    "kind": "Name",
                    "value": "lists",
                    "loc": {
                      "start": 59,
                      "end": 64
                    }
                  },
                  "arguments": [],
                  "directives": [],
                  "selectionSet": {
                    "kind": "SelectionSet",
                    "selections": [{
                      "kind": "Field",
                      "name": {
                        "kind": "Name",
                        "value": "key",
                        "loc": {
                          "start": 77,
                          "end": 80
                        }
                      },
                      "arguments": [],
                      "directives": [],
                      "loc": {
                        "start": 77,
                        "end": 80
                      }
                    }, {
                      "kind": "Field",
                      "name": {
                        "kind": "Name",
                        "value": "isHidden",
                        "loc": {
                          "start": 91,
                          "end": 99
                        }
                      },
                      "arguments": [],
                      "directives": [],
                      "loc": {
                        "start": 91,
                        "end": 99
                      }
                    }, {
                      "kind": "Field",
                      "name": {
                        "kind": "Name",
                        "value": "fields",
                        "loc": {
                          "start": 110,
                          "end": 116
                        }
                      },
                      "arguments": [],
                      "directives": [],
                      "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [{
                          "kind": "Field",
                          "name": {
                            "kind": "Name",
                            "value": "path",
                            "loc": {
                              "start": 131,
                              "end": 135
                            }
                          },
                          "arguments": [],
                          "directives": [],
                          "loc": {
                            "start": 131,
                            "end": 135
                          }
                        }, {
                          "kind": "Field",
                          "name": {
                            "kind": "Name",
                            "value": "createView",
                            "loc": {
                              "start": 148,
                              "end": 158
                            }
                          },
                          "arguments": [],
                          "directives": [],
                          "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [{
                              "kind": "Field",
                              "name": {
                                "kind": "Name",
                                "value": "fieldMode",
                                "loc": {
                                  "start": 175,
                                  "end": 184
                                }
                              },
                              "arguments": [],
                              "directives": [],
                              "loc": {
                                "start": 175,
                                "end": 184
                              }
                            }],
                            "loc": {
                              "start": 159,
                              "end": 198
                            }
                          },
                          "loc": {
                            "start": 148,
                            "end": 198
                          }
                        }],
                        "loc": {
                          "start": 117,
                          "end": 210
                        }
                      },
                      "loc": {
                        "start": 110,
                        "end": 210
                      }
                    }],
                    "loc": {
                      "start": 65,
                      "end": 220
                    }
                  },
                  "loc": {
                    "start": 59,
                    "end": 220
                  }
                }],
                "loc": {
                  "start": 49,
                  "end": 228
                }
              },
              "loc": {
                "start": 39,
                "end": 228
              }
            }],
            "loc": {
              "start": 31,
              "end": 234
            }
          },
          "loc": {
            "start": 22,
            "end": 234
          }
        }, {
          "kind": "Field",
          "name": {
            "kind": "Name",
            "value": "authenticatedItem"
          },
          "selectionSet": {
            "kind": "SelectionSet",
            "selections": [{
              "kind": "InlineFragment",
              "typeCondition": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "User"
                }
              },
              "selectionSet": {
                "kind": "SelectionSet",
                "selections": [{
                  "kind": "Field",
                  "name": {
                    "kind": "Name",
                    "value": "id"
                  }
                }, {
                  "kind": "Field",
                  "name": {
                    "kind": "Name",
                    "value": "name"
                  }
                }]
              }
            }]
          }
        }]
      }
    }]
  },
  fieldViews: [keystone_next_keystone_internal_do_not_use_will_break_in_patch_admin_ui_id_field_view_cjs, keystone_next_keystone_fields_types_text_views_cjs, keystone_next_keystone_fields_types_checkbox_views_cjs, keystone_next_keystone_fields_types_password_views_cjs, keystone_next_keystone_fields_types_select_views_cjs, keystone_next_fields_document_views_cjs, keystone_next_keystone_fields_types_timestamp_views_cjs, keystone_next_keystone_fields_types_relationship_views_cjs, keystone_next_keystone_fields_types_json_views_cjs, keystone_next_keystone_fields_types_image_views_cjs],
  adminMetaHash: "1t61eq8",
  adminConfig: adminConfig,
  apiPath: "/api/graphql"
}));

/***/ }),

/***/ 8074:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 8372:
/***/ ((module) => {

"use strict";
module.exports = require("@braintree/sanitize-url");

/***/ }),

/***/ 9321:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/hash");

/***/ }),

/***/ 6428:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/weak-memoize");

/***/ }),

/***/ 2363:
/***/ ((module) => {

"use strict";
module.exports = require("@graphql-tools/schema");

/***/ }),

/***/ 8810:
/***/ ((module) => {

"use strict";
module.exports = require("@graphql-ts/schema");

/***/ }),

/***/ 2324:
/***/ ((module) => {

"use strict";
module.exports = require("@graphql-ts/schema/api-with-context");

/***/ }),

/***/ 5144:
/***/ ((module) => {

"use strict";
module.exports = require("@graphql-ts/schema/api-without-context");

/***/ }),

/***/ 9130:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-next/keystone/admin-ui/context");

/***/ }),

/***/ 972:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-next/keystone/fields/types/relationship/views/RelationshipSelect");

/***/ }),

/***/ 3175:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/button");

/***/ }),

/***/ 5305:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/core");

/***/ }),

/***/ 6843:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/fields");

/***/ }),

/***/ 2394:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/icons/icons/AlertTriangleIcon");

/***/ }),

/***/ 429:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/icons/icons/AlignCenterIcon");

/***/ }),

/***/ 4515:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/icons/icons/AlignLeftIcon");

/***/ }),

/***/ 3212:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/icons/icons/AlignRightIcon");

/***/ }),

/***/ 5506:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/icons/icons/BoldIcon");

/***/ }),

/***/ 7414:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/icons/icons/ChevronDownIcon");

/***/ }),

/***/ 3172:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/icons/icons/ChevronRightIcon");

/***/ }),

/***/ 9649:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/icons/icons/CodeIcon");

/***/ }),

/***/ 5690:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/icons/icons/ColumnsIcon");

/***/ }),

/***/ 4732:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/icons/icons/ExternalLinkIcon");

/***/ }),

/***/ 762:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/icons/icons/EyeIcon");

/***/ }),

/***/ 9124:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/icons/icons/EyeOffIcon");

/***/ }),

/***/ 6457:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/icons/icons/ItalicIcon");

/***/ }),

/***/ 8894:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/icons/icons/LinkIcon");

/***/ }),

/***/ 6718:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/icons/icons/Maximize2Icon");

/***/ }),

/***/ 1502:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/icons/icons/Minimize2Icon");

/***/ }),

/***/ 7503:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/icons/icons/MinusIcon");

/***/ }),

/***/ 3906:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/icons/icons/MoreHorizontalIcon");

/***/ }),

/***/ 8512:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/icons/icons/PlusIcon");

/***/ }),

/***/ 8807:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/icons/icons/Trash2Icon");

/***/ }),

/***/ 4789:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/icons/icons/XIcon");

/***/ }),

/***/ 5717:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/loading");

/***/ }),

/***/ 634:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/modals");

/***/ }),

/***/ 450:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/notice");

/***/ }),

/***/ 3136:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/pill");

/***/ }),

/***/ 8832:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/popover");

/***/ }),

/***/ 5450:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/segmented-control");

/***/ }),

/***/ 4075:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/toast");

/***/ }),

/***/ 7557:
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/tooltip");

/***/ }),

/***/ 3483:
/***/ ((module) => {

"use strict";
module.exports = require("apollo-upload-client");

/***/ }),

/***/ 6207:
/***/ ((module) => {

"use strict";
module.exports = require("apply-ref");

/***/ }),

/***/ 7537:
/***/ ((module) => {

"use strict";
module.exports = require("bytes");

/***/ }),

/***/ 8929:
/***/ ((module) => {

"use strict";
module.exports = require("copy-to-clipboard");

/***/ }),

/***/ 3879:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

/***/ }),

/***/ 6815:
/***/ ((module) => {

"use strict";
module.exports = require("decimal.js");

/***/ }),

/***/ 1040:
/***/ ((module) => {

"use strict";
module.exports = require("dumb-passwords");

/***/ }),

/***/ 3142:
/***/ ((module) => {

"use strict";
module.exports = require("fast-deep-equal");

/***/ }),

/***/ 9313:
/***/ ((module) => {

"use strict";
module.exports = require("graphql");

/***/ }),

/***/ 3684:
/***/ ((module) => {

"use strict";
module.exports = require("graphql-type-json");

/***/ }),

/***/ 511:
/***/ ((module) => {

"use strict";
module.exports = require("graphql-upload/public/GraphQLUpload.js");

/***/ }),

/***/ 5263:
/***/ ((module) => {

"use strict";
module.exports = require("intersection-observer");

/***/ }),

/***/ 841:
/***/ ((module) => {

"use strict";
module.exports = require("is-hotkey");

/***/ }),

/***/ 3603:
/***/ ((module) => {

"use strict";
module.exports = require("match-sorter");

/***/ }),

/***/ 6931:
/***/ ((module) => {

"use strict";
module.exports = require("mdast-util-definitions");

/***/ }),

/***/ 8771:
/***/ ((module) => {

"use strict";
module.exports = require("mdast-util-from-markdown");

/***/ }),

/***/ 7171:
/***/ ((module) => {

"use strict";
module.exports = require("mdast-util-gfm-autolink-literal/from-markdown");

/***/ }),

/***/ 1854:
/***/ ((module) => {

"use strict";
module.exports = require("mdast-util-gfm-strikethrough/from-markdown");

/***/ }),

/***/ 7445:
/***/ ((module) => {

"use strict";
module.exports = require("micromark-extension-gfm-autolink-literal");

/***/ }),

/***/ 8509:
/***/ ((module) => {

"use strict";
module.exports = require("micromark-extension-gfm-strikethrough");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 8379:
/***/ ((module) => {

"use strict";
module.exports = require("scroll-into-view-if-needed");

/***/ }),

/***/ 560:
/***/ ((module) => {

"use strict";
module.exports = require("slate");

/***/ }),

/***/ 1641:
/***/ ((module) => {

"use strict";
module.exports = require("slate-history");

/***/ }),

/***/ 4684:
/***/ ((module) => {

"use strict";
module.exports = require("slate-react");

/***/ }),

/***/ 1231:
/***/ ((module) => {

"use strict";
module.exports = require("uuid");

/***/ }),

/***/ 2094:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [298], () => (__webpack_exec__(974)));
module.exports = __webpack_exports__;

})();