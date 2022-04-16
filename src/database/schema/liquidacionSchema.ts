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

const liquidacionSchema = tableSchema({
  name: 'liquidacions',
  columns: [
    { name: 'liquidacionId', type: 'string' },
    { name: 'liquidacionUniqueId', type: 'string' },
    { name: 'liquidacionGuias', type: 'string' },
    { name: 'liquidacionCantidad', type: 'string' },
    { name: 'liquidacionFaena_kg_total', type: 'string' },
    { name: 'liquidacionPromedio_animal', type: 'string' },
    { name: 'liquidacionPrecio_venta', type: 'string' },
    { name: 'liquidacionFecha_salida', type: 'string' },
    { name: 'liquidacionFecha_faena', type: 'string' },
    { name: 'liquidacionPrecio_kg_carcasa', type: 'string' },
    { name: 'liquidacionPrecio_total', type: 'string' },
    { name: 'dbversion', type: 'string' },
    { name: 'createdAt', type: 'string' },
    { name: 'updatedAt', type: 'string' },
  ],
});

export { liquidacionSchema };
