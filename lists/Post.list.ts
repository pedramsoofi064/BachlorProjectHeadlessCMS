
import { list } from '@keystone-next/keystone';
import {
  text,
  relationship,
  password,
  timestamp, checkbox,
  select,
  image,
} from '@keystone-next/keystone/fields';

import { document } from '@keystone-next/fields-document';

export default list({
  fields: {
    authorName_fa: text(),
    authorName_en: text(),
    title_fa: text({ validation: { isRequired: true } }),
    title_en: text({ validation: { isRequired: true } }),
    summary_fa: text({ validation: { isRequired: true } }),
    summary_en: text({ validation: { isRequired: true } }),
    isActive: checkbox(),
    image: image(),
    publishDate: timestamp(),
    relatedPosts: relationship({ ref: "Post.relatedPosts", many: true }),
    tags: relationship({
      ref: 'Tag.posts',
      ui: {
        displayMode: 'cards',
        cardFields: ['name_fa', 'name_en'],
        inlineEdit: { fields: ['name_fa', 'name_en'] },
        linkToItem: true,
        inlineConnect: true,
        inlineCreate: { fields: ['name_fa', 'name_en'] },
      },
      many: true,
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
  },
})