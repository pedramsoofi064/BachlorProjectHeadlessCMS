import { list } from "@keystone-next/keystone";
import { text, relationship } from "@keystone-next/keystone/fields";

export default list({
  ui: {
    isHidden: true,
  },
  fields: {
    name_fa: text(),
    name_en: text(),
    posts: relationship({ ref: "Post.tags", many: true }),
  },
});
