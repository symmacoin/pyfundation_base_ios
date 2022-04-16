/**
 * @ Author: Your name
 * @ Create Time: 2022-02-08 21:08:37
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Modified time: 2022-02-10 18:53:43
 * @ Description:
 */

import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { Platform } from 'react-native';

import { schemas } from './schema';
import { migrations } from './model/migration';

import { Car } from './model/Car';
import { Lists } from './model/Lists';
import { Lista4K } from './model/Lista4K';

import { Address } from './model/Address';
import { Animal } from './model/Animal';
import { Authenticate } from './model/Authenticate';
import { Cerrar } from './model/Cerrar';
import { Check_online } from './model/Check_online';
import { Coibfe } from './model/Coibfe';
import { Configurar } from './model/Configurar';
import { Customer } from './model/Customer';
import { Databaseversion } from './model/Databaseversion';
import { Empezar } from './model/Empezar';
import { Entrada } from './model/Entrada';
import { Enviar } from './model/Enviar';
import { Enviar_sigor } from './model/Enviar_sigor';
import { Frigorifico } from './model/Frigorifico';
import { Frontend } from './model/Frontend';
import { Front } from './model/Front';
import { Game } from './model/Game';
import { Guia } from './model/Guia';
import { Identifica } from './model/Identifica';
import { Iot } from './model/Iot';
import { Lista } from './model/Lista';
import { Liquidacion } from './model/Liquidacion';
import { Localization } from './model/Localization';
import { Log } from './model/Log';
import { Message } from './model/Message';
import { Mobile } from './model/Mobile';
import { Post } from './model/Post';
import { Peso } from './model/Peso';
import { Productor } from './model/Productor';
import { Propiedad } from './model/Propiedad';
import { Propiedad_productor } from './model/Propiedad_productor';
import { Raza } from './model/Raza';
import { Registrar } from './model/Registrar';
import { Salida } from './model/Salida';
import { Server } from './model/Server';
import { Tecnico } from './model/Tecnico';
import { Token } from './model/Token';
import { User } from './model/User';
import { Vacuna } from './model/Vacuna';
import { LocalDb } from './model/LocalDb';

const adapter = new SQLiteAdapter({
  dbName: 'senaia',
  schema: schemas,
  // (You might want to comment it out for development purposes -- see Migrations documentation)
  // migrations: migrations,
  // (optional database name or file system path)
  // dbName: 'myapp',
  // (recommended option, should work flawlessly out of the box on iOS. On Android,
  // additional installation steps have to be taken - disable if you run into issues...)
  jsi: true /* Platform.OS === 'ios' */,
  // (optional, but you should implement this method)
  onSetUpError: error => {
    // Database failed to load -- offer the user to reload the app or log out
  },
});

export const database = new Database({
  adapter,
  modelClasses: [
    Car,
    Lists,
    Lista4K,
    Address,
    Animal,
    Authenticate,
    Cerrar,
    Check_online,
    Coibfe,
    Configurar,
    Customer,
    Databaseversion,
    Empezar,
    Entrada,
    Enviar,
    Enviar_sigor,
    Frigorifico,
    Frontend,
    Front,
    Game,
    Guia,
    Identifica,
    Iot,
    Lista,
    Liquidacion,
    Localization,
    Log,
    Message,
    Mobile,
    Post,
    Peso,
    Productor,
    Propiedad,
    Propiedad_productor,
    Raza,
    Registrar,
    Salida,
    Server,
    Tecnico,
    Token,
    User,
    Vacuna,
    LocalDb,
  ],
});
