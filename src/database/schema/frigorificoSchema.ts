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

const frigorificoSchema = tableSchema({
  name: 'frigorificos',
  columns: [
    { name: 'frigorificoName', type: 'string' },
    { name: 'frigorifico_ID', type: 'string' },
    { name: 'frigorificoDepartamento', type: 'string' },
    { name: 'frigorificoKeyPrivate', type: 'string' },
    { name: 'frigorificoStatus', type: 'string' },
    { name: 'dbversion', type: 'string' },
    { name: 'createdAt', type: 'string' },
    { name: 'updatedAt', type: 'string' },
  ],
});

export { frigorificoSchema };
