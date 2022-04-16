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

const entradaSchema = tableSchema({
  name: 'entradas',
  columns: [
    { name: 'entradaId', type: 'string' },
    { name: 'entradaUniqueId', type: 'string' },
    { name: 'tipo_dispositivo_anterior', type: 'string' },
    { name: 'numero_anterior', type: 'string' },
    { name: 'sigla_anterior', type: 'string' },
    { name: 'color_anterior', type: 'string' },
    { name: 'tipo_dispositivo', type: 'string' },
    { name: 'numero_actual', type: 'string' },
    { name: 'sigla', type: 'string' },
    { name: 'color', type: 'string' },
    { name: 'corral', type: 'string' },
    { name: 'peso_actual', type: 'string' },
    { name: 'categoria', type: 'string' },
    { name: 'fecha_aplicaccion', type: 'string' },
    { name: 'fecha_entrada', type: 'string' },
    { name: 'corral_origem', type: 'string' },
    { name: 'modalidade', type: 'string' },
    { name: 'lote', type: 'string' },
    { name: 'num_guia', type: 'string' },
    { name: 'peso_entrada', type: 'string' },
    { name: 'propietario_origem', type: 'string' },

    { name: 'dbversion', type: 'string' },
    { name: 'createdAt', type: 'string' },
    { name: 'updatedAt', type: 'string' },
  ],
});

export { entradaSchema };
