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

class Salida extends Model {
  static table = 'salidas';

  @field('salidaId') salidaId!: string;
  @field('salidaUniqueId') salidaUniqueId!: string;
  @field('consumo_ms_cab_dia') consumo_ms_cab_dia!: string;
  @field('numero_caravana') numero_caravana!: string;
  @field('valor_compra') valor_compra!: string;
  @field('costo_diaria') costo_diaria!: string;
  @field('costo_curativo') costo_curativo!: string;
  @field('costo_protocolo') costo_protocolo!: string;
  @field('corral') corral!: string;
  @field('peso_salida') peso_salida!: string;
  @field('peso_entrada') peso_entrada!: string;
  @field('dias_confinamento') dias_confinamento!: string;
  @field('lote') lote!: string;
  @field('fecha_salida') fecha_salida!: string;
  @field('numero_guia') numero_guia!: string;
  @field('propietario_origem') propietario_origem!: string;
  @field('peso_proyectado') peso_proyectado!: string;
  @field('cms_pv') cms_pv!: string;
  @field('categoria') categoria!: string;
  @field('cms_total') cms_total!: string;
  @field('gmd') gmd!: string;
  @field('destino') destino!: string;
  @field('controlador') controlador!: string;
  @field('tipo_salida') tipo_salida!: string;
  @field('tipo_entrada') tipo_entrada!: string;
  @field('angus') angus!: string;
  @field('nombre_identificaccion') nombre_identificaccion!: string;
  @field('cantidad') cantidad!: string;
  @field('custo_total') custo_total!: string;

  @field('dbversion')
  dbversion!: string;

  @readonly
  @date('created_at')
  createdAt: any;

  @readonly
  @date('updatedAt')
  updatedAt: any;

}

export { Salida };
