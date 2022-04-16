/**
 * @ Author: Your name
 * @ Create Time: 2022-02-09 12:39:09
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Modified time: 2022-02-10 18:53:34
 * @ Description:
 */

import { tableSchema } from '@nozbe/watermelondb';

const listsSchema = tableSchema({
  name: 'listas',
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

export { listsSchema };
