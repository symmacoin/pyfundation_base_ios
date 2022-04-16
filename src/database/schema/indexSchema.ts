import { appSchema, tableSchema } from '@nozbe/watermelondb';

import { carSchema } from './carSchema';
import { listsSchema } from './listsSchema';

import { lista4KSchema } from './lista4KSchema';

import { addressSchema } from './addressSchema';
import { animalSchema } from './animalSchema';
import { authenticateSchema } from './authenticateSchema';
import { cerrarSchema } from './cerrarSchema';
import { check_onlineSchema } from './check_onlineSchema';
import { coibfeSchema } from './coibfeSchema';
import { configurarSchema } from './configurarSchema';
import { customerSchema } from './customerSchema';
import { databaseversionSchema } from './databaseversionSchema';
import { empezarSchema } from './empezarSchema';
import { entradaSchema } from './entradaSchema';
import { enviarSchema } from './enviarSchema';
import { enviar_sigorSchema } from './enviar_sigorSchema';
import { frigorificoSchema } from './frigorificoSchema';
import { frontendSchema } from './frontendSchema';
import { frontSchema } from './frontSchema';
import { gameSchema } from './gameSchema';
import { guiaSchema } from './guiaSchema';
import { identificaSchema } from './identificaSchema';
import { iotSchema } from './iotSchema';
import { listaSchema } from './listaSchema';
import { liquidacionSchema } from './liquidacionSchema';
import { localizationSchema } from './localizationSchema';
import { logSchema } from './logSchema';
import { messageSchema } from './messageSchema';
import { mobileSchema } from './mobileSchema';
import { postSchema } from './postSchema';
import { pesoSchema } from './pesoSchema';
import { productorSchema } from './productorSchema';
import { propiedadSchema } from './propiedadSchema';
import { propiedad_productorSchema } from './propiedad_productorSchema';
import { razaSchema } from './razaSchema';
import { registrarSchema } from './registrarSchema';
import { salidaSchema } from './salidaSchema';
import { serverSchema } from './serverSchema';
import { tecnicoSchema } from './tecnicoSchema';
import { tokenSchema } from './tokenSchema';
import { userSchema } from './userSchema';
import { vacunaSchema } from './vacunaSchema';
import { localDbSchema } from './localDbSchema';

const schemas = appSchema({
  version: 1,
  tables: [
    carSchema,
    listsSchema,
    lista4KSchema,
    addressSchema,
    animalSchema,
    authenticateSchema,
    cerrarSchema,
    check_onlineSchema,
    coibfeSchema,
    configurarSchema,
    customerSchema,
    databaseversionSchema,
    empezarSchema,
    entradaSchema,
    enviarSchema,
    enviar_sigorSchema,
    frigorificoSchema,
    frontendSchema,
    frontSchema,
    gameSchema,
    guiaSchema,
    identificaSchema,
    iotSchema,
    listaSchema,
    liquidacionSchema,
    localizationSchema,
    logSchema,
    messageSchema,
    mobileSchema,
    postSchema,
    pesoSchema,
    productorSchema,
    propiedadSchema,
    propiedad_productorSchema,
    razaSchema,
    registrarSchema,
    salidaSchema,
    serverSchema,
    tecnicoSchema,
    tokenSchema,
    userSchema,
    vacunaSchema,
    localDbSchema,
  ],
});

export { schemas };
