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

const localizationSchema = tableSchema({
  name: 'localizations',
  columns: [
    { name: 'loc_indice', type: 'string' },
    { name: 'loc_tag', type: 'string' },
    { name: 'loc_descricao', type: 'string' },
    { name: 'loc_latitude', type: 'string' },
    { name: 'loc_longitude', type: 'string' },
    { name: 'loc_data_fixacao', type: 'string' },
    { name: 'loc_tec_indice', type: 'string' },
    { name: 'loc_pdd_indice', type: 'string' },

    { name: 'dbversion', type: 'string' },
    { name: 'createdAt', type: 'string' },
    { name: 'updatedAt', type: 'string' },
  ],
});

export { localizationSchema };
