import { list } from "@keystone-next/keystone";
import { text, relationship ,select } from "@keystone-next/keystone/fields";

export default list({
  ui: {
    listView: {
      initialColumns: ["description_fa"],
    },
  },
  fields: {
    description_fa: text(),
    description_en: text(),
    email: text(),
    phone: text(),
    address_fa: text(),
    address_en: text(),
    copyRigth_fa: text(),
    copyRigth_en: text(),
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
});
