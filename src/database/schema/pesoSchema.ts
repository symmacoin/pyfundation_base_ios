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

const pesoSchema = tableSchema({
  name: 'pesos',
  columns: [
    { name: 'pesoId', type: 'string' },
    { name: 'pesoUniqueId', type: 'string' },
    { name: 'pesoPesoActual', type: 'string' },
    { name: 'pesoPesoFinal', type: 'string' },
    { name: 'pesoPesoEntrada', type: 'string' },

    { name: 'dbversion', type: 'string' },
    { name: 'createdAt', type: 'string' },
    { name: 'updatedAt', type: 'string' },
  ],
});

export { pesoSchema };
