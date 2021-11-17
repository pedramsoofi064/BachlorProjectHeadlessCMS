"use strict";
(() => {
var exports = {};
exports.id = 638;
exports.ids = [638];
exports.modules = {

/***/ 2461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* reexport */ keystone),
  "default": () => (/* binding */ _keystone_api_build)
});

;// CONCATENATED MODULE: external "@keystone-next/keystone"
const keystone_namespaceObject = require("@keystone-next/keystone");
;// CONCATENATED MODULE: external "@keystone-next/keystone/session"
const session_namespaceObject = require("@keystone-next/keystone/session");
;// CONCATENATED MODULE: external "@keystone-next/auth"
const auth_namespaceObject = require("@keystone-next/auth");
;// CONCATENATED MODULE: external "@keystone-next/keystone/fields"
const fields_namespaceObject = require("@keystone-next/keystone/fields");
;// CONCATENATED MODULE: ../../lists/User.list.ts


/* harmony default export */ const User_list = ((0,keystone_namespaceObject.list)({
  fields: {
    name: (0,fields_namespaceObject.text)({
      validation: {
        isRequired: true
      }
    }),
    email: (0,fields_namespaceObject.text)({
      validation: {
        isRequired: true
      },
      isIndexed: "unique",
      isFilterable: true
    }),
    isAdmin: (0,fields_namespaceObject.checkbox)({
      defaultValue: false
    }),
    // The password field takes care of hiding details and hashing values
    password: (0,fields_namespaceObject.password)({
      validation: {
        isRequired: true
      }
    })
  },
  ui: {
    listView: {
      initialColumns: ["name"]
    }
  }
}));
;// CONCATENATED MODULE: external "@keystone-next/fields-document"
const fields_document_namespaceObject = require("@keystone-next/fields-document");
;// CONCATENATED MODULE: ../../lists/Post.list.ts



/* harmony default export */ const Post_list = ((0,keystone_namespaceObject.list)({
  fields: {
    title: (0,fields_namespaceObject.text)(),
    status: (0,fields_namespaceObject.select)({
      options: [{
        label: 'Published',
        value: 'published'
      }, {
        label: 'Draft',
        value: 'draft'
      }],
      defaultValue: 'draft',
      ui: {
        displayMode: 'segmented-control'
      }
    }),
    content: (0,fields_document_namespaceObject.document)({
      formatting: true,
      layouts: [[1, 1], [1, 1, 1], [2, 1], [1, 2], [1, 2, 1]],
      links: true,
      dividers: true
    }),
    publishDate: (0,fields_namespaceObject.timestamp)(),
    tags: (0,fields_namespaceObject.relationship)({
      ref: 'Tag.posts',
      ui: {
        displayMode: 'cards',
        cardFields: ['name'],
        inlineEdit: {
          fields: ['name']
        },
        linkToItem: true,
        inlineConnect: true,
        inlineCreate: {
          fields: ['name']
        }
      },
      many: true
    })
  }
}));
;// CONCATENATED MODULE: ../../lists/Tag.list.ts


/* harmony default export */ const Tag_list = ((0,keystone_namespaceObject.list)({
  ui: {
    isHidden: true
  },
  fields: {
    name: (0,fields_namespaceObject.text)(),
    posts: (0,fields_namespaceObject.relationship)({
      ref: "Post.tags",
      many: true
    })
  }
}));
;// CONCATENATED MODULE: ../../lists/Page.list.ts


/* harmony default export */ const Page_list = ((0,keystone_namespaceObject.list)({
  ui: {
    listView: {
      initialColumns: ["pageURL", "title"]
    },
    description: "صفحات سایت"
  },
  fields: {
    pageURL: (0,fields_namespaceObject.text)({
      validation: {
        isRequired: true
      },
      isIndexed: true
    }),
    title: (0,fields_namespaceObject.text)({
      validation: {
        isRequired: true
      }
    }),
    sections: (0,fields_namespaceObject.relationship)({
      ref: "PageSection.page",
      many: true,
      ui: {
        displayMode: "select",
        labelField: "sectionId"
      }
    }),
    additionalData: (0,fields_namespaceObject.json)()
  }
}));
;// CONCATENATED MODULE: ../../lists/PageSection.list.ts



/* harmony default export */ const PageSection_list = ((0,keystone_namespaceObject.list)({
  ui: {
    listView: {
      initialColumns: ["sectionTitle", "contentTitle"]
    },
    description: "بخش صفحه"
  },
  fields: {
    sectionId: (0,fields_namespaceObject.text)({
      isIndexed: true
    }),
    sectionTitle: (0,fields_namespaceObject.text)(),
    backgroundImage: (0,fields_namespaceObject.image)(),
    contentTitle: (0,fields_namespaceObject.text)(),
    contentImages: (0,fields_namespaceObject.relationship)({
      ref: "Image",
      many: true,
      ui: {
        labelField: "image"
      }
    }),
    content: (0,fields_document_namespaceObject.document)({
      formatting: {
        inlineMarks: true,
        listTypes: true,
        alignment: true,
        headingLevels: true,
        blockTypes: true,
        softBreaks: true
      },
      layouts: [[1, 1], [1, 1, 1], [2, 1], [1, 2], [1, 2, 1]],
      links: true,
      dividers: true,
      relationships: {
        image: {
          kind: 'inline',
          listKey: 'Image',
          label: 'Image',
          selection: 'id title'
        } // file: {
        //     kind: 'inline',
        //     listKey: 'File',
        //     label: 'File',
        //     selection: 'id title',
        // },

      }
    }),
    isActive: (0,fields_namespaceObject.checkbox)({
      defaultValue: true
    }),
    page: (0,fields_namespaceObject.relationship)({
      ref: 'Page.sections',
      ui: {
        displayMode: 'cards',
        cardFields: ['pageURL', 'title'],
        linkToItem: true,
        inlineConnect: true
      }
    })
  }
}));
;// CONCATENATED MODULE: ../../lists/Image.list.ts


/* harmony default export */ const Image_list = ((0,keystone_namespaceObject.list)({
  ui: {
    listView: {
      initialColumns: ['title', 'alt', 'image']
    },
    description: 'تمام فایل‌های پیوست'
  },
  fields: {
    title: (0,fields_namespaceObject.text)(),
    alt: (0,fields_namespaceObject.text)(),
    image: (0,fields_namespaceObject.image)()
  }
}));
;// CONCATENATED MODULE: ../../lists/NavigationMenu.list.ts


/* harmony default export */ const NavigationMenu_list = ((0,keystone_namespaceObject.list)({
  fields: {
    title: (0,fields_namespaceObject.text)({
      validation: {
        isRequired: true
      }
    }),
    pageURL: (0,fields_namespaceObject.text)({
      validation: {
        isRequired: true
      }
    }),
    parent: (0,fields_namespaceObject.relationship)({
      ref: "NavigationMenu.children",
      ui: {
        displayMode: "cards",
        cardFields: ["title", "pageURL"],
        linkToItem: true,
        inlineConnect: true
      }
    }),
    children: (0,fields_namespaceObject.relationship)({
      ref: "NavigationMenu.parent",
      many: true,
      ui: {
        displayMode: "cards",
        cardFields: ["title", "pageURL"],
        linkToItem: true,
        inlineConnect: true
      }
    }),
    status: (0,fields_namespaceObject.select)({
      options: [{
        label: "Invisible",
        value: "invisible"
      }, {
        label: "Disabled",
        value: "disabled"
      }, {
        label: "Enabled",
        value: "enabled"
      }],
      ui: {
        displayMode: "segmented-control"
      },
      defaultValue: "enabled"
    })
  },
  ui: {
    listView: {
      initialColumns: ["title", "pageURL", "parent", "status"]
    },
    description: "منوی راهبری سامانه"
  }
}));
;// CONCATENATED MODULE: ../../lists/Partner.list.ts


/* harmony default export */ const Partner_list = ((0,keystone_namespaceObject.list)({
  fields: {
    name: (0,fields_namespaceObject.text)({
      validation: {
        isRequired: true
      }
    })
  },
  ui: {
    listView: {
      initialColumns: ["name"]
    }
  }
}));
;// CONCATENATED MODULE: ../../lists/Achievement.list.ts


/* harmony default export */ const Achievement_list = ((0,keystone_namespaceObject.list)({
  fields: {
    name: (0,fields_namespaceObject.text)({
      validation: {
        isRequired: true
      }
    })
  },
  ui: {
    listView: {
      initialColumns: ["name"]
    }
  }
}));
;// CONCATENATED MODULE: ../../lists/NewsletterSubmission.list.ts


/* harmony default export */ const NewsletterSubmission_list = ((0,keystone_namespaceObject.list)({
  fields: {
    name: (0,fields_namespaceObject.text)({
      validation: {
        isRequired: true
      }
    })
  },
  ui: {
    listView: {
      initialColumns: ["name"]
    }
  }
}));
;// CONCATENATED MODULE: ../../lists/index.ts










/* harmony default export */ const lists = ({
  User: User_list,
  Post: Post_list,
  Tag: Tag_list,
  Page: Page_list,
  PageSection: PageSection_list,
  Image: Image_list,
  NavigationMenu: NavigationMenu_list,
  Partner: Partner_list,
  Achievement: Achievement_list,
  NewsletterSubmission: NewsletterSubmission_list
});
;// CONCATENATED MODULE: ../../schema.ts

const schema_lists = {
  User: lists.User,
  Post: lists.Post,
  Tag: lists.Tag,
  Page: lists.Page,
  PageSection: lists.PageSection,
  Image: lists.Image,
  NavigationMenu: lists.NavigationMenu,
  Partner: lists.Partner,
  Achievement: lists.Achievement,
  NewsletterSubmission: lists.NewsletterSubmission
};
;// CONCATENATED MODULE: ../../keystone.ts




const {
  withAuth
} = (0,auth_namespaceObject.createAuth)({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  sessionData: "name",
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    itemData: {
      isAdmin: true
    }
  }
}); // let sessionSecret = process.env.SESSION_SECRET;
// if (!sessionSecret) {
//   if (process.env.NODE_ENV === "production") {
//     throw new Error(
//       "The SESSION_SECRET environment variable must be set in production"
//     );
//   } else {
//     sessionSecret = "--x DEV COOKIE SECRET; CHANGE ME x--";
//   }
// }

let sessionMaxAge = 60 * 60 * 24 * 30; // 30 days

const session = (0,session_namespaceObject.statelessSessions)({
  maxAge: sessionMaxAge,
  secret: "asaaaaaaaaaaaaaaaaaaaaaadsadsadaaaaaafffffffffffffffffff",
  secure: false // default: process.env.NODE_ENV === 'production'

});
/* harmony default export */ const keystone = (withAuth( // Using the config function helps typescript guide you to the available options.
(0,keystone_namespaceObject.config)({
  // the db sets the database provider - we're using sqlite for the fastest startup experience
  db: {
    provider: "sqlite",
    url: "file:./keystone.db"
  },
  // This config allows us to set up features of the Admin UI https://keystonejs.com/docs/apis/config#ui
  ui: {
    // For our starter, we check that someone has session data before letting them see the Admin UI.
    isAccessAllowed: context => {
      var _context$session;

      return !!((_context$session = context.session) !== null && _context$session !== void 0 && _context$session.data);
    }
  },
  server: {
    port: 3000,
    maxFileSize: 200 * 1024 * 1024,
    healthCheck: true
  },
  lists: schema_lists,
  session,
  images: {
    upload: "local",
    local: {
      storagePath: "public/uploads/images",
      baseUrl: "/images"
    }
  }
})));
;// CONCATENATED MODULE: ./pages/api/__keystone_api_build.js

/* harmony default export */ function _keystone_api_build(req, res) {
  return res.status(500);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2461));
module.exports = __webpack_exports__;

})();