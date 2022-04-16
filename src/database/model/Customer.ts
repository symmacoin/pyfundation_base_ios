/**
 * @ Author: Your name
 * @ Create Time: 2022-02-09 12:39:09
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Modified time: 2022-02-10 18:53:23
 * @ Description:
 */

import { Model } from '@nozbe/watermelondb';
import {
  field,
  action,
  readonly,
  text,
  date,
  relation,
  immutableRelation,
  children,
  writer,
} from '@nozbe/watermelondb/decorators';
import { Q } from '@nozbe/watermelondb';

class Customer extends Model {
  static table = 'customers';

  @field('customerId')
  customerId!: string;

  @field('customerEmail')
  customerEmail!: string;

  @field('customerPhone')
  customerPhone!: string;

  @field('customerUniqueId')
  customerUniqueId!: string;

  @field('customerLocked')
  customerLocked!: string;

  @field('customerServerName')
  customerServerName!: string;

  @field('customer_vpa_id')
  customer_vpa_id!: string;

  @field('customer_name')
  customer_name!: string;

  @field('customer_register')
  customer_register!: string;

  @field('customer_password')
  customer_password!: string;

  @field('customer_mac')
  customer_mac!: string;

  @field('customer_status')
  customer_status!: string;

  @field('customer_key')
  customer_key!: string;

  @field('customerApiKeyMobile')
  customerApiKeyMobile!: string;

  @field('customerApiKeySoftware')
  customerApiKeySoftware!: string;

  @field('customerKeyPrivate')
  customerKeyPrivate!: string;

  @field('customerLevelAccess')
  customerLevelAccess!: string;

  @field('customerToken')
  customerToken!: string;

  @field('customerDeviceStatus')
  customerDeviceStatus!: string;

  @field('customerApiKeyHardware')
  customerApiKeyHardware!: string;

  @field('customerPermission')
  customerPermission!: string;

  @field('customerAddress')
  customerAddress!: string;

  @readonly
  @date('created_at')
  createdAt: any;

  @readonly
  @date('updatedAt')
  updatedAt: any;
}

export { Customer };
