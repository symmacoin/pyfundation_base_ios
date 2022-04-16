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

const coibfeSchema = tableSchema({
  name: 'coibfes',
  columns: [
    { name: 'dbversion', type: 'string' },
    { name: 'coibfeId', type: 'string' },
    { name: 'coibfeKey', type: 'string' },
    { name: 'coibfeToken', type: 'string' },
    { name: 'coibfeCodigoV', type: 'string' },
    { name: 'coibfeDestino', type: 'string' },
    { name: 'coibfeFinalidad', type: 'string' },
    { name: 'coibfeTransporte', type: 'string' },
    { name: 'coibfeAniNovillos', type: 'string' },
    { name: 'coibfeAniToros', type: 'string' },
    { name: 'coibfeAniVacas', type: 'string' },
    { name: 'coibfeAniVaquillas', type: 'string' },
    { name: 'coibfeAniOtros', type: 'string' },
    { name: 'coibfeAniTotal', type: 'string' },
    { name: 'coibfeAniHilton', type: 'string' },
    { name: 'coibfeTecnico_VPA_ID', type: 'string' },
    { name: 'coibfeTecnicoName', type: 'string' },
    { name: 'coibfeFrigorificoName', type: 'string' },
    { name: 'coibfeFrigorifico_ID', type: 'string' },
    { name: 'coibfeProductorName', type: 'string' },
    { name: 'coibfeProductor_ID', type: 'string' },
    { name: 'coibfeProductorSitrap', type: 'string' },
    { name: 'coibfePropriedadName', type: 'string' },
    { name: 'coibfePropriedad_ID', type: 'string' },
    { name: 'coibfePropriedadSigor', type: 'string' },
    { name: 'coibfePropriedadSitrap', type: 'string' },
    { name: 'coibfePropriedadDepartamento', type: 'string' },
    { name: 'coibfePropriedadDistrito', type: 'string' },
    { name: 'coibfePropriedad_productor_id', type: 'string' },
    { name: 'coibfePrecinto1', type: 'string' },
    { name: 'coibfePrecinto2', type: 'string' },
    { name: 'coibfePrecinto3', type: 'string' },
    { name: 'coibfePos_ID', type: 'string' },
    { name: 'coibfePosLatitud', type: 'string' },
    { name: 'coibfePosLongitud', type: 'string' },
    { name: 'coibfePosDateTime', type: 'string' },
    { name: 'coibfePosApiKeyMobile', type: 'string' },
    { name: 'coibfeOBS', type: 'string' },
    { name: 'coibfeDocNroProp', type: 'string' },
    { name: 'coibfeDocDigProp', type: 'string' },
    { name: 'coibfeDocOrigAbrev', type: 'string' },
    { name: 'coibfeDocTipoAbrev', type: 'string' },
    { name: 'coibfeErroCode', type: 'string' },
    { name: 'coibfeErroMessage', type: 'string' },
    { name: 'coibfe_issinc', type: 'string' },

    { name: 'dbversion', type: 'string' },
    { name: 'createdAt', type: 'string' },
    { name: 'updatedAt', type: 'string' },
  ],
});

export { coibfeSchema };
