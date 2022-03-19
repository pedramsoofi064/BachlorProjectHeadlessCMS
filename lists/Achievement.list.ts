import { list } from "@keystone-next/keystone";
import {
  text,
  relationship,
  password,
  timestamp,
  select,
  checkbox
} from "@keystone-next/keystone/fields";
import { document } from '@keystone-next/fields-document';

export default list({
  fields: {
    slug: text({ validation: { isRequired: true }}),
    title_fa: text({ validation: { isRequired: true } }),
    title_en: text({ validation: { isRequired: true } }),
    buttonTitle_fa: text({ validation: { isRequired: true } }),
    buttonTitle_en: text({ validation: { isRequired: true } }),
    summary_fa: text({ validation: { isRequired: true } }),
    summary_en: text({ validation: { isRequired: true } }),
    images: relationship({
      ref: "Image",
      many: true,
      ui: { labelField: "image" },
    }),
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
    isActive: checkbox()
  },
  ui: {
    listView: {
      initialColumns: ["title_fa" , "title_en"],
    },
  },
});
