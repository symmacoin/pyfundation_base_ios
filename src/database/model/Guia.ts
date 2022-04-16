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

class Guia extends Model {
  static table = 'guias';

  @field('guiaId') guiaId!: string;
  @field('guiaUniqueId') guiaUniqueId!: string;
  @field('guiaOrden') guiaOrden!: string;
  @field('guiaGuias') guiaGuias!: string;
  @field('guiaContrato') guiaContrato!: string;
  @field('guiaFechaEntrada') guiaFechaEntrada!: string;
  @field('guiaCantidad') guiaCantidad!: string;
  @field('guiaOrigen') guiaOrigen!: string;
  @field('guiaCategoria') guiaCategoria!: string;
  @field('guiaCorral') guiaCorral!: string;
  @field('guiaModalidad') guiaModalidad!: string;

  @field('dbversion')
  dbversion!: string;

  @readonly
  @date('created_at')
  createdAt: any;

  @readonly
  @date('updatedAt')
  updatedAt: any;
}

export { Guia };
