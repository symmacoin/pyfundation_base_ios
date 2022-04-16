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

class Productor extends Model {
  static table = 'productor';

  @field('productorName') productorName!: string;
  @field('productor_ID') productor_ID!: string;
  @field('productorToken') productorToken!: string;
  @field('productorSitrap') productorSitrap!: string;
  @field('productorAcreditacion') productorAcreditacion!: string;
  @field('productor_propriedad_ID') productor_propriedad_ID!: string;
  @field('productorPassword') productorPassword!: string;
  @field('productorMail') productorMail!: string;
  @field('productorPhone') productorPhone!: string;
  @field('productorIsSync') productorIsSync!: string;

  @field('dbversion')
  dbversion!: string;

  @readonly
  @date('created_at')
  createdAt: any;

  @readonly
  @date('updatedAt')
  updatedAt: any;
}

export { Productor };
