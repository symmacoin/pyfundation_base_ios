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

const tecnicoSchema = tableSchema({
  name: 'tecnicos',
  columns: [
    { name: 'tecnicoId', type: 'string' },
    { name: 'tecnicoEmail', type: 'string' },
    { name: 'tecnicoPhone', type: 'string' },
    { name: 'tecnicoUniqueId', type: 'string' },
    { name: 'tecnicoLocked', type: 'string' },
    { name: 'tecnicoServerName', type: 'string' },
    { name: 'tecnico_vpa_id', type: 'string' },
    { name: 'tecnico_name', type: 'string' },
    { name: 'tecnico_register', type: 'string' },
    { name: 'tecnico_password', type: 'string' },
    { name: 'tecnico_mac', type: 'string' },
    { name: 'tecnico_status', type: 'string' },
    { name: 'tecnico_key', type: 'string' },
    { name: 'tecnicoApiKeyMobile', type: 'string' },
    { name: 'tecnicoApiKeySoftware', type: 'string' },
    { name: 'tecnicoKeyPrivate', type: 'string' },
    { name: 'tecnicoLevelAccess', type: 'string' },
    { name: 'tecnicoToken', type: 'string' },
    { name: 'tecnicoDeviceStatus', type: 'string' },
    { name: 'tecnicoApiKeyHardware', type: 'string' },
    { name: 'tecnicoPermission', type: 'string' },
    { name: 'tecnicoAddress', type: 'string' },
    { name: 'createdAt', type: 'string' },
    { name: 'updatedAt', type: 'string' },
  ],
});

export { tecnicoSchema };
