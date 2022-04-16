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

class Propiedad extends Model {
  static table = 'propiedads';

  @field('propriedadName') propriedadName!: string;
  @field('propriedadPropietario') propriedadPropietario!: string;
  @field('propriedadStatus') propriedadStatus!: string;
  @field('propriedadSigor') propriedadSigor!: string;
  @field('propriedadSitrap') propriedadSitrap!: string;
  @field('propriedadDepartamento') propriedadDepartamento!: string;
  @field('propriedadDistrito') propriedadDistrito!: string;

  @field('dbversion')
  dbversion!: string;

  @readonly
  @date('created_at')
  createdAt: any;

  @readonly
  @date('updatedAt')
  updatedAt: any;
}

export { Propiedad };
