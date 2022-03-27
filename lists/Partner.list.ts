import { list } from "@keystone-next/keystone";
import {
  text,
  relationship,
  password,
  timestamp,
  select,
  image
} from "@keystone-next/keystone/fields";

export default list({
  fields: {
    name_fa: text({ validation: { isRequired: true } }),
    name_en: text({ validation: { isRequired: true } }),
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
    logo: image(),
  },
  ui: {
    listView: {
      initialColumns: ["name_fa" ,"logo" ],
    },
  },
});
