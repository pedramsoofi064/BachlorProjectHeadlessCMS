import { list } from "@keystone-next/keystone";
import {
  text,
  relationship,
  password,
  timestamp,
  select,
  checkbox,
  image,
  json,
} from "@keystone-next/keystone/fields";
import { document } from '@keystone-next/fields-document';


export default list({
  ui: {
    listView: {
      initialColumns: ["sectionTitle", "contentTitle_fa" , "contentTitle_en"],
    },
    description: "بخش صفحه",
  },
  fields: {
    sectionId: text({ isIndexed: true }),
    sectionTitle: text(),
    backgroundImages: relationship({
      ref: "Image",
      many: true,
      ui: { labelField: "image" },
    }),
    contentTitle_fa: text(),
    contentTitle_en: text(),
    
    content_fa: document({
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
    content_en: document({
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
    additionalData: json(),
  },
});
