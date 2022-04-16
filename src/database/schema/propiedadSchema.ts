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

const propiedadSchema = tableSchema({
  name: 'propiedads',
  columns: [
    { name: 'propriedadName', type: 'string' },
    { name: 'propriedadPropietario', type: 'string' },
    { name: 'propriedadStatus', type: 'string' },
    { name: 'propriedadSigor', type: 'string' },
    { name: 'propriedadSitrap', type: 'string' },
    { name: 'propriedadDepartamento', type: 'string' },
    { name: 'propriedadDistrito', type: 'string' },
    { name: 'dbversion', type: 'string' },
    { name: 'createdAt', type: 'string' },
    { name: 'updatedAt', type: 'string' },
  ],
});

export { propiedadSchema };
