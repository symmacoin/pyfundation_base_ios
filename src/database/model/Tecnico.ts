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

class Tecnico extends Model {
  static table = 'tecnicos';

  @field('tecnicoId')
  tecnicoId!: string;

  @field('tecnicoEmail')
  tecnicoEmail!: string;

  @field('tecnicoPhone')
  tecnicoPhone!: string;

  @field('tecnicoUniqueId')
  tecnicoUniqueId!: string;

  @field('tecnicoLocked')
  tecnicoLocked!: string;

  @field('tecnicoServerName')
  tecnicoServerName!: string;

  @field('tecnico_vpa_id')
  tecnico_vpa_id!: string;

  @field('tecnico_name')
  tecnico_name!: string;

  @field('tecnico_register')
  tecnico_register!: string;

  @field('tecnico_password')
  tecnico_password!: string;

  @field('tecnico_mac')
  tecnico_mac!: string;

  @field('tecnico_status')
  tecnico_status!: string;

  @field('tecnico_key')
  tecnico_key!: string;

  @field('tecnicoApiKeyMobile')
  tecnicoApiKeyMobile!: string;

  @field('tecnicoApiKeySoftware')
  tecnicoApiKeySoftware!: string;

  @field('tecnicoKeyPrivate')
  tecnicoKeyPrivate!: string;

  @field('tecnicoLevelAccess')
  tecnicoLevelAccess!: string;

  @field('tecnicoToken')
  tecnicoToken!: string;

  @field('tecnicoDeviceStatus')
  tecnicoDeviceStatus!: string;

  @field('tecnicoApiKeyHardware')
  tecnicoApiKeyHardware!: string;

  @field('tecnicoPermission')
  tecnicoPermission!: string;

  @field('tecnicoAddress')
  tecnicoAddress!: string;

  @readonly
  @date('created_at')
  createdAt: any;

  @readonly
  @date('updatedAt')
  updatedAt: any;
}

export { Tecnico };
