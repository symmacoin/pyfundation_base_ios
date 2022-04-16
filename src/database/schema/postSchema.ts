/**
 * @ Author: Your name
 * @ Create Time: 2022-02-09 12:39:09
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Modified time: 2022-02-10 18:53:30
 * @ Description:
 */

import { tableSchema } from '@nozbe/watermelondb';

const postSchema = tableSchema({
  name: 'posts',
  columns: [
    { name: 'publisheds', type: 'boolean' },
    { name: 'viewCount', type: 'number' },
    { name: 'title', type: 'string' },
    { name: 'content', type: 'string' },
    { name: 'author', type: 'string' },
    { name: 'createdAt', type: 'string' },
    { name: 'updatedAt', type: 'string' },
  ],
});

export { postSchema };
