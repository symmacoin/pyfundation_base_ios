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

const guiaSchema = tableSchema({
  name: 'guias',
  columns: [
    { name: 'guiaId', type: 'string' },
    { name: 'guiaUniqueId', type: 'string' },
    { name: 'guiaOrden', type: 'string' },
    { name: 'guiaGuias', type: 'string' },
    { name: 'guiaContrato', type: 'string' },
    { name: 'guiaFechaEntrada', type: 'string' },
    { name: 'guiaCantidad', type: 'string' },
    { name: 'guiaOrigen', type: 'string' },
    { name: 'guiaCategoria', type: 'string' },
    { name: 'guiaCorral', type: 'string' },
    { name: 'guiaModalidad', type: 'string' },
    { name: 'dbversion', type: 'string' },
    { name: 'createdAt', type: 'string' },
    { name: 'updatedAt', type: 'string' },
  ],
});

export { guiaSchema };
