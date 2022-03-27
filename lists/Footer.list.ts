import { list } from "@keystone-next/keystone";
import { text, relationship } from "@keystone-next/keystone/fields";

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
    
  },
});
