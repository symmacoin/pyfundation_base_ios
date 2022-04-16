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

class Localization extends Model {
  static table = 'localizations';

  @field('loc_indice')
  loc_indice!: string;

  @field('loc_tag')
  loc_tag!: string;

  @field('loc_descricao')
  loc_descricao!: string;

  @field('loc_latitude')
  loc_latitude!: string;

  @field('loc_longitude')
  loc_longitude!: string;

  @field('loc_data_fixacao')
  loc_data_fixacao!: string;

  @field('loc_tec_indice')
  loc_tec_indice!: string;

  @field('loc_pdd_indice')
  loc_pdd_indice!: string;

  @field('dbversion')
  dbversion!: string;

  @readonly
  @date('created_at')
  createdAt: any;

  @readonly
  @date('updatedAt')
  updatedAt: any;
}

export { Localization };
