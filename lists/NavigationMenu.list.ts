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
    title: text({ validation: { isRequired: true } }),
    pageURL: text({ validation: { isRequired: true, }, }),
    parent: relationship({
      ref: "NavigationMenu.children",
      ui: {
        displayMode: "cards",
        cardFields: ["title", "pageURL"],
        linkToItem: true,
        inlineConnect: true,
      },
    }),
    children: relationship({
      ref: "NavigationMenu.parent",
      many: true,
      ui: {
        displayMode: "cards",
        cardFields: ["title", "pageURL"],
        linkToItem: true,
        inlineConnect: true,
      },
    }),
    status: select({
      options: [
        { label: "Invisible", value: "invisible" },
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
      initialColumns: ["title", "pageURL", "parent", "status"],
    },
    description: "منوی راهبری سامانه",
  },
});
