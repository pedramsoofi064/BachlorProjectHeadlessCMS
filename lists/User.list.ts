import { list } from "@keystone-next/keystone";
import {
  text,
  relationship,
  password,
  timestamp,
  select,
  checkbox
} from "@keystone-next/keystone/fields";

export default list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({
      validation: { isRequired: true },
      isIndexed: "unique",
      isFilterable: true,
    }),
    isAdmin: checkbox({
      defaultValue: false,
    }),
    // The password field takes care of hiding details and hashing values
    password: password({ validation: { isRequired: true } }),
  },
  ui: {
    listView: {
      initialColumns: ["name"],
    },
  },
});
