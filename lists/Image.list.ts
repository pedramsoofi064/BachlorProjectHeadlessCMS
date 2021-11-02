import { image, text } from '@keystone-next/keystone/fields';
import { list } from "@keystone-next/keystone";

export default list({
  ui: {
    listView: {
      initialColumns: ['title','alt', 'image'],
    },
    description: 'تمام فایل‌های پیوست',
  },
  fields: {
    title: text(),
    alt: text(),
    image: image(),
  },
});
