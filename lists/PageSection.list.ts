import { list } from "@keystone-next/keystone";
import {
  text,
  relationship,
  password,
  timestamp,
  select,
  checkbox,
  image,
} from "@keystone-next/keystone/fields";
import { document } from '@keystone-next/fields-document';


export default list({
  ui: {
    listView: {
      initialColumns: ["sectionTitle", "contentTitle"],
    },
    description: "بخش صفحه",
  },
  fields: {
    sectionId: text({ isIndexed: true }),
    sectionTitle: text(),
    backgroundImage: image(),
    contentTitle: text(),
    contentImages: relationship({
      ref: "Image",
      many: true,
      ui: { labelField: "image" },
    }),
    content: document({
      formatting: {
        inlineMarks: true,
        listTypes: true,
        alignment: true,
        headingLevels: true,
        blockTypes: true,
        softBreaks: true,
      },
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2],
        [1, 2, 1],
      ],
      links: true,
      dividers: true,
      relationships: {
        image: {
          kind: 'inline',
          listKey: 'Image',
          label: 'Image',
          selection: 'id title',
        },
        // file: {
        //     kind: 'inline',
        //     listKey: 'File',
        //     label: 'File',
        //     selection: 'id title',
        // },
      },
    }),
    isActive: checkbox({
      defaultValue: true,
    }),
    page: relationship({
      ref: 'Page.sections',
      ui: {
        displayMode: 'cards',
        cardFields: ['pageURL', 'title'],
        linkToItem: true,
        inlineConnect: true,
      },
    }),
  },
});
