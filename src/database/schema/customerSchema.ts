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

const customerSchema = tableSchema({
  name: 'customers',
  columns: [
    { name: 'customerId', type: 'string' },
    { name: 'customerEmail', type: 'string' },
    { name: 'customerPhone', type: 'string' },
    { name: 'customerUniqueId', type: 'string' },
    { name: 'customerLocked', type: 'string' },
    { name: 'customerServerName', type: 'string' },
    { name: 'customer_vpa_id', type: 'string' },
    { name: 'customer_name', type: 'string' },
    { name: 'customer_register', type: 'string' },
    { name: 'customer_password', type: 'string' },
    { name: 'customer_mac', type: 'string' },
    { name: 'customer_status', type: 'string' },
    { name: 'customer_key', type: 'string' },
    { name: 'customerApiKeyMobile', type: 'string' },
    { name: 'customerApiKeySoftware', type: 'string' },
    { name: 'customerKeyPrivate', type: 'string' },
    { name: 'customerLevelAccess', type: 'string' },
    { name: 'customerToken', type: 'string' },
    { name: 'customerDeviceStatus', type: 'string' },
    { name: 'customerApiKeyHardware', type: 'string' },
    { name: 'customerPermission', type: 'string' },
    { name: 'customerAddress', type: 'string' },
    { name: 'createdAt', type: 'string' },
    { name: 'updatedAt', type: 'string' },
  ],
});

export { customerSchema };
