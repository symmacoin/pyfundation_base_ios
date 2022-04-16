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

class Vacuna extends Model {
  static table = 'vacunas';

  @field('vacunaId')
  vacunaId!: string;

  @field('vacunaUniqueId')
  vacunaUniqueId!: string;

  @field('vacunaIdLote')
  vacunaIdLote!: string;

  @field('vacunaIdVacuna')
  vacunaIdVacuna!: string;

  @field('vacunaNomeVacuna')
  vacunaNomeVacuna!: string;

  @field('dbversion')
  dbversion!: string;

  @readonly
  @date('created_at')
  createdAt: any;

  @readonly
  @date('updatedAt')
  updatedAt: any;
}

export { Vacuna };
