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

class Animal extends Model {
  static table = 'animals';

  @field('dbversion')
  dbversion!: string;

  @field('animalId')
  animalId!: string;

  @field('animalUniqueId')
  animalUniqueId!: string;

  @field('animalNroTag')
  animalNroTag!: string;

  @field('animalDataNascimento')
  animalDataNascimento!: string;

  @field('animalDataQuarentena')
  animalDataQuarentena!: string;

  @field('animalIdRaca')
  animalIdRaca!: string;

  @field('animalSexo')
  animalSexo!: string;

  @field('animalIdClassificacao')
  animalIdClassificacao!: string;

  @field('')
  animalUltimoPeso!: string;

  @field('animalDataUltimapesagem')
  animalDataUltimapesagem!: string;

  @field('animalListaNegra')
  animalListaNegra!: string;

  @field('animalProductor_ID')
  animalProductor_ID!: string;

  @field('animalPropriedad_ID')
  animalPropriedad_ID!: string;
}

export { Animal };
