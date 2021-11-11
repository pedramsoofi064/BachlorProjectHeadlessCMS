import { list } from "@keystone-next/keystone";
import {
  text,
  relationship,
  password,
  timestamp,
  select,
  json,
} from "@keystone-next/keystone/fields";

export default list({
  ui: {
    listView: {
      initialColumns: ["pageURL", "title"],
    },
    description: "صفحات سایت",
  },
  fields: {
    pageURL: text({ validation: { isRequired: true }, isIndexed: true }),
    title: text({ validation: { isRequired: true } }),
    sections: relationship({
      ref: "PageSection.page",
      many: true,
      ui: {
        displayMode: "select",
        labelField: "sectionId",
      },
    }),
    additionalData: json(),
  },
});
