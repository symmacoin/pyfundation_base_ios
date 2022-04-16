import { tableSchema } from '@nozbe/watermelondb';

const lista4KSchema = tableSchema({
  name: 'lista4K',
  columns: [
    {
      name: 'id_',
      type: 'number',
      // isIndexed: true,
    },
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'url',
      type: 'string',
    },
    {
      name: 'group',
      type: 'string',
    },
    {
      name: 'logo',
      type: 'string',
    },
    {
      name: 'token',
      type: 'string',
      isOptional: true,
    },
  ],
});

export { lista4KSchema };
