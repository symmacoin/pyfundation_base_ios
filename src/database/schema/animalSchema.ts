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

const animalSchema = tableSchema({
  name: 'animals',
  columns: [
    { name: 'animalId', type: 'string' },
    { name: 'animalUniqueId', type: 'string' },
    { name: 'animalNroTag', type: 'string' },
    { name: 'animalDataNascimento', type: 'string' },
    { name: 'animalDataQuarentena', type: 'string' },
    { name: 'animalIdRaca', type: 'string' },
    { name: 'animalSexo', type: 'string' },
    { name: 'animalIdClassificacao', type: 'string' },
    { name: 'animalUltimoPeso', type: 'string' },
    { name: 'animalDataUltimapesagem', type: 'string' },
    { name: 'animalListaNegra', type: 'string' },
    { name: 'animalProductor_ID', type: 'string' },
    { name: 'animalPropriedad_ID', type: 'string' },

    { name: 'dbversion', type: 'string' },
    { name: 'createdAt', type: 'string' },
    { name: 'updatedAt', type: 'string' },
  ],
});

export { animalSchema };
