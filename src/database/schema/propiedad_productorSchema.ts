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

const propiedad_productorSchema = tableSchema({
  name: 'propiedad_productors',
  columns: [
    { name: 'propriedadSigor', type: 'string' },
    { name: 'productor_ID', type: 'string' },
    { name: 'coibfeId', type: 'string' },
    { name: 'propriedad_productorIsSync', type: 'string' },
    { name: 'dbversion', type: 'string' },
    { name: 'createdAt', type: 'string' },
    { name: 'updatedAt', type: 'string' },
  ],
});

export { propiedad_productorSchema };
