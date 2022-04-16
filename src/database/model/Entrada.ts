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

class Entrada extends Model {
  static table = 'entradas';

  @field('entradaId') entradaId!: string;
  @field('entradaUniqueId') entradaUniqueId!: string;
  @field('tipo_dispositivo_anterior') tipo_dispositivo_anterior!: string;
  @field('numero_anterior') numero_anterior!: string;
  @field('sigla_anterior') sigla_anterior!: string;
  @field('color_anterior') color_anterior!: string;
  @field('tipo_dispositivo') tipo_dispositivo!: string;
  @field('numero_actual') numero_actual!: string;
  @field('sigla') sigla!: string;
  @field('color') color!: string;
  @field('corral') corral!: string;
  @field('peso_actual') peso_actual!: string;
  @field('categoria') categoria!: string;
  @field('fecha_aplicaccion') fecha_aplicaccion!: string;
  @field('fecha_entrada') fecha_entrada!: string;
  @field('corral_origem') corral_origem!: string;
  @field('modalidade') modalidade!: string;
  @field('lote') lote!: string;
  @field('num_guia') num_guia!: string;
  @field('peso_entrada') peso_entrada!: string;
  @field('propietario_origem') propietario_origem!: string;

  @field('dbversion')
  dbversion!: string;

  @readonly
  @date('created_at')
  createdAt: any;

  @readonly
  @date('updatedAt')
  updatedAt: any;
}

export { Entrada };
