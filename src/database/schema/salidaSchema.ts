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

const salidaSchema = tableSchema({
  name: 'salidas',
  columns: [
    { name: 'salidaId', type: 'string' },
    { name: 'salidaUniqueId', type: 'string' },
    { name: 'consumo_ms_cab_dia', type: 'string' },
    { name: 'numero_caravana', type: 'string' },
    { name: 'valor_compra', type: 'string' },
    { name: 'costo_diaria', type: 'string' },
    { name: 'costo_curativo', type: 'string' },
    { name: 'costo_protocolo', type: 'string' },
    { name: 'corral', type: 'string' },
    { name: 'peso_salida', type: 'string' },
    { name: 'peso_entrada', type: 'string' },
    { name: 'dias_confinamento', type: 'string' },
    { name: 'lote', type: 'string' },
    { name: 'fecha_salida', type: 'string' },
    { name: 'numero_guia', type: 'string' },
    { name: 'propietario_origem', type: 'string' },
    { name: 'peso_proyectado', type: 'string' },
    { name: 'cms_pv', type: 'string' },
    { name: 'categoria', type: 'string' },
    { name: 'cms_total', type: 'string' },
    { name: 'gmd', type: 'string' },
    { name: 'destino', type: 'string' },
    { name: 'controlador', type: 'string' },
    { name: 'tipo_salida', type: 'string' },
    { name: 'tipo_entrada', type: 'string' },
    { name: 'angus', type: 'string' },
    { name: 'nombre_identificaccion', type: 'string' },
    { name: 'cantidad', type: 'string' },
    { name: 'custo_total', type: 'string' },

    { name: 'dbversion', type: 'string' },
    { name: 'createdAt', type: 'string' },
    { name: 'updatedAt', type: 'string' },
  ],
});

export { salidaSchema };
