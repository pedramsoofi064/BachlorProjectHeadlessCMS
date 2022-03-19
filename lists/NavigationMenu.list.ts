import { list } from "@keystone-next/keystone";
import {
  text,
  relationship,
  password,
  timestamp,
  select,
} from "@keystone-next/keystone/fields";

export default list({
  fields: {
    title_fa: text({ validation: { isRequired: true } }),
    title_en: text({ validation: { isRequired: true } }),
    pageURL: text({ validation: { isRequired: true, }, }),
    status: select({
      options: [
        { label: "Disabled", value: "disabled" },
        { label: "Enabled", value: "enabled" },
      ],
      ui: {
        displayMode: "segmented-control",
      },
      defaultValue: "enabled",
    }),
  },
  ui: {
    listView: {
      initialColumns: ["title_fa" , 'title_en', "pageURL", "status"],
    },
    description: "منوی راهبری سامانه",
  },
});
