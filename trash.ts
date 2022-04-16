
"About": { "name":""name}, 
"Admin": { "name":""name}, 
"Cart": { "name":""name}, 
"Chat": { "name":""name}, 
"Config": { "name":""name}, 
"ContactA": { "name":""name}, 
"ContactB": { "name":""name}, 
"Details": { "name":""name}, 
"Figma": { "name":""name}, 
"Film": { "name":""name},   
"Guia": { "name":""name},
"Home": { "name":""name},
"Identificacion": { "name":""name}, 
"Input": { "name":""name}, 
"Liquidacion": { "name":""name},
"List": { "name":""name}, 
"Login": { "name":""name}, 
"Modal": { "name":""name}, 
"Other": { "name":""name},
"Output": { "name":""name},
"Password": { "name":""name}, 
"Pesage": { "name":""name}, 
"Profile": { "name":""name},
"Register": { "name":""name}, 
"Settings": { "name":""name}, 
"Vacunacion": { "name":""name},

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
Enviar_Sigor,
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
Propiedad_Productor,
Raza,
Registrar,
Salida,
Server,
Tecnico,
Token,
User,
Vacuna,

address,
animal,
authenticate,
cerrar,
check_online,
coibfe,
configurar,
customer,
catabaseversion,
empezar,
entrada,
enviar,
enviar_Sigor,
frigorifico,
frontend,
front,
game,
guia,
identifica,
iot,
lista,
liquidacion,
localization,
log,
message,
mobile,
post,
peso,
productor,
propiedad,
propiedad_Productor,
raza,
registrar,
salida,
server,
tecnico,
token,
user,
vacuna,

datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
  }
  
  generator client {
    provider = "prisma-client-js"
    // previewFeatures = []
  }
  
  generator dbml {
    provider = "prisma-dbml-generator"
  }
  
  enum Role {
    ADMIN
    USER
  }
  
  enum Permission {
    ROOT
    ADMIN
    MANAGER
    CLIENT
    USER
  }
  
  import {field, readonly, date} from '@nozbe/watermelondb/decorators';

export default class Weight extends Model {
  static table = 'weights';

  @field('note') note;
  @field('weight') weight;
  @readonly @date('created_at') createdAt;
}

  model User {
    id        String   @id @default(cuid())
   
    email     String   @unique
    password  String
    firstname String?
    lastname  String?
    name      String?
    posts     Post[]
    role      Role?
  
    userId             String?
    user_vpa_id        String?
    user_name          String?
    user_password      String?
    user_mac           String?
    user_status        String?
    user_key           String?
    userToken          String?
    user_register      String?
    userChatId         String?
    userDeviceStatus   String?
    userKeyPrivate     String?
    userApiKeyHardware String?
     createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
  }
  
  model Post {
    id         String   @id @default(cuid())
    createdAt  DateTime @default(now())
    updatedAt  DateTime @updatedAt
    publisheds Boolean?
    viewCount  Int      @default(0)
    title      String
    content    String?
    author     User?    @relation(fields: [authorId], references: [id])
    authorId   String?
  }
  
  model Customer {
    id                     String   @id @default(cuid())
    customerId             String   @default(cuid())
    createdAt              DateTime @default(now())
    updatedAt              DateTime @updatedAt
    customerEmail          String?
    customerPhone          String?
    customerUniqueId       String   @unique
    customerLocked         String?
    customerServerName     String?
    customer_vpa_id        String?
    customer_name          String?
    customer_register      String?
    customer_password      String
    customer_mac           String?
    customer_status        String?  @default("locked")
    customer_key           String?
    customerApiKeyMobile   String?
    customerApiKeySoftware String?
    customerKeyPrivate     String?
    customerLevelAccess    String?  @default("0")
    customerToken          String?
    customerDeviceStatus   String?
    customerApiKeyHardware String?
  
    customerPermission Permission?
    customerAddress    Address[]
  
    // rename table name
    @@map("customers")
  }
  
  model Address {
    id        String    @id @default(cuid())
    createdAt DateTime  @default(now())
    updatedAt DateTime  @updatedAt
    street    String?
    number    String?
    district  String?
    obs       String?
    country   String?
    zip       String?
    customer  Customer? @relation(fields: [customerId], references: [id])
    tecnico   Tecnico?  @relation(fields: [tecnicoId], references: [id])
  
    customerId String?
    tecnicoId  String?
  
    // rename table name
    @@map("addresses")
  }
  
  model Databaseversion {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    @@map("dbversions")
  }
  
  model Iot {
    id                      String   @id @default(cuid())
    createdAt               DateTime @default(now())
    updatedAt               DateTime @updatedAt
    sensorMaintenance       String?
    sensorWarning           String?
    sensorUserName          String?
    sensorUserPassword      String?
    sensorUserMail          String?
    sensorUserLevelAcess    String?
    sensorUserLocked        String?
    sensorId                String?
    sensorKey               String?
    sensorKeyPrivate        String?
    sensorUniqueId          String?
    sensorName              String?
    sensorStatus            String?
    sensorLocked            String?
    sensorInTotal           String?
    sensorOutTotal          String?
    sensorInParcial         String?
    sensorOutParcial        String?
    sensorParcialClear      String?
    sensorCredits           String?
    sensorCreditsFactor     String?
    sensorWeight            String?
    sensorEnergyKW          String?
    sensorEnergyV           String?
    sensorEnergyAS          String?
    sensorEnergyI           String?
    sensorEnergyP           String?
    sensorEnergyVA          String?
    sensorEnergyKWH         String?
    sensorEnergyCurrent     String?
    sensorEnergyVoltage     String?
    sensorEnergyPower       String?
    sensorEnergyCalibration String?
    sensorEnergyPf          String?
    sensorEnergyTariff      String?
    sensorType              String?
    sensorPrivateKey        String?
    sensorPublicKey         String?
    sensorSaveLog           String?
    sensorUserId            String?
    sensorDate              String?
    sensorTime              String?
    sensorLong              String?
    sensorLati              String?
    sensorPres              String?
    sensorTem1              String?
    sensorTem2              String?
    sensorTem3              String?
    sensorTem4              String?
    sensorTem5              String?
    sensorHumi              String?
    sensorAceX              String?
    sensorAceY              String?
    sensorAceZ              String?
    sensorMagX              String?
    sensorMagY              String?
    sensorMagZ              String?
    sensorGyrX              String?
    sensorGyrY              String?
    sensorGyrZ              String?
    sensorPuls              String?
    sensorOxim              String?
    sensorMapX              String?
    sensorMapY              String?
    sensorMapZ              String?
    sensorSeco              String?
    sensorSno2              String?
    sensorSnh3              String?
    sensorLigh              String?
    sensorSoun              String?
    sensorAna1              String?
    sensorAna2              String?
    sensorAna3              String?
    sensorBut1              String?
    sensorBut2              String?
    sensorBut3              String?
    sensorBut4              String?
    sensorBut5              String?
    sensorLed1              String?
    sensorLed2              String?
    sensorLed3              String?
    sensorLed4              String?
    sensorLed5              String?
  
    @@map("iots")
  }
  
  model Tecnico {
    id                    String   @id @default(cuid())
    tecnicoId             String   @default(cuid())
    createdAt             DateTime @default(now())
    updatedAt             DateTime @updatedAt
    tecnicoEmail          String?
    tecnicoPhone          String?
    tecnicoUniqueId       String   @unique
    tecnicoLocked         String?
    tecnicoServerName     String?
    tecnico_vpa_id        String   @unique
    tecnico_name          String?
    tecnico_register      String?
    tecnico_password      String
    tecnico_mac           String?
    tecnico_status        String?  @default("locked")
    tecnico_key           String?
    tecnicoApiKeyMobile   String?
    tecnicoApiKeySoftware String?
    tecnicoKeyPrivate     String?
    tecnicoLevelAccess    String?  @default("0")
    tecnicoToken          String?
    tecnicoDeviceStatus   String?
    tecnicoApiKeyHardware String?
  
    tecnicoPermission Permission?
    tecnicoAddress    Address[]
  
    // rename table name
    @@map("tecnicos")
  }
  
  model Authenticate {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    userId             String?
    user_vpa_id        String?
    user_name          String?
    user_password      String?
    user_mac           String?
    user_status        String?
    user_key           String?
    userToken          String?
    user_register      String?
    userChatId         String?
    userDeviceStatus   String?
    userKeyPrivate     String?
    userApiKeyHardware String?
    @@map("autenthicates")
  }
  
  model Cerrar {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    @@map("cerrars")
  }
  
  model Coibfe {
    id                            String   @id @default(cuid())
    createdAt                     DateTime @default(now())
    updatedAt                     DateTime @updatedAt
    dbversion                     String?
    coibfeId                      String   @unique
    coibfeKey                     String?
    coibfeToken                   String?
    coibfeCodigoV                 String?
    coibfeDestino                 String?
    coibfeFinalidad               String?
    coibfeTransporte              String?
    coibfeAniNovillos             String?
    coibfeAniToros                String?
    coibfeAniVacas                String?
    coibfeAniVaquillas            String?
    coibfeAniOtros                String?
    coibfeAniTotal                String?
    coibfeAniHilton               String?
    coibfeTecnico_VPA_ID          String?
    coibfeTecnicoName             String?
    coibfeFrigorificoName         String?
    coibfeFrigorifico_ID          String?
    coibfeProductorName           String?
    coibfeProductor_ID            String?
    coibfeProductorSitrap         String?
    coibfePropriedadName          String?
    coibfePropriedad_ID           String?
    coibfePropriedadSigor         String?
    coibfePropriedadSitrap        String?
    coibfePropriedadDepartamento  String?
    coibfePropriedadDistrito      String?
    coibfePropriedad_productor_id String?
    coibfePrecinto1               String?
    coibfePrecinto2               String?
    coibfePrecinto3               String?
    coibfePos_ID                  String?
    coibfePosLatitud              String?
    coibfePosLongitud             String?
    coibfePosDateTime             String?
    coibfePosApiKeyMobile         String?
    coibfeOBS                     String?
    coibfeDocNroProp              String?
    coibfeDocDigProp              String?
    coibfeDocOrigAbrev            String?
    coibfeDocTipoAbrev            String?
    coibfeErroCode                String?
    coibfeErroMessage             String?
    coibfe_issinc                 String?
  
    @@map("coibfes")
  }
  
  model Configurar {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    @@map("configurars")
  }
  
  model Empezar {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    @@map("empezars")
  }
  
  model Enviar {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    @@map("enviars")
  }
  
  model Enviar_Sigor {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    coibfeId               String // ": "38320011",
    coibfeDestino          String //": "UE",
    coibfeFinalidad        String // ": "F",
    coibfeTransporte       String // ": "T",
    coibfeAniNovillos      String // ": "0",
    coibfeAniToros         String // ": "40",
    coibfeAniVacas         String // ": "0",
    coibfeAniVaquillas     String // ": "0",
    coibfeAniOtros         String // ": "0",
    coibfeAniHilton        String // ": "0",
    coibfeTecnico_VPA_ID   String // ": "832",
    coibfeFrigorifico_ID   String // ": "1113010010",
    coibfeProductor_ID     String // ": "80061886-6",
    coibfePropriedadSigor  String // ": "1613010027",
    coibfePropriedadSitrap String // ": "AGLH",
    coibfePrecinto1        String // ": "442318",
    coibfePrecinto2        String // ": "442319",
    coibfePrecinto3        String // ": "442320",
    coibfePosLatitud       String // ": "-22.3446833",
    coibfePosLongitud      String // ": "-60.2523733",
    coibfePosDateTime      String // ": "2021-02-05T12:51:47",
    coibfeDigNroProp       String // ": "6",
    coibfeDocNroProp       String // ": "80061886",
    coibfeDocOrigAbrev     String // ": "NA",
    coibfeDocTipoAbrev     String // ": "RUC"
    @@map("enviar_sigors")
  }
  
  model Frigorifico {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    frigorificoName         String?
    frigorifico_ID          String?
    frigorificoDepartamento String?
    frigorificoKeyPrivate   String?
    frigorificoStatus       String?
    @@map("frigorificos")
  }
  
  model Frontend {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    @@map("frontends")
  }
  
  model Productor {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    productorName           String?
    productor_ID            String?
    productorToken          String?
    productorSitrap         String?
    productorAcreditacion   String?
    productor_propriedad_ID String?
    productorPassword       String?
    productorMail           String?
    productorPhone          String?
    productorIsSync         String?
    @@map("productors")
  }
  
  model Propiedad {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    propriedadName         String?
    propriedadPropietario  String?
    propriedadStatus       String?
    propriedadSigor        String?
    propriedadSitrap       String?
    propriedadDepartamento String?
    propriedadDistrito     String?
    @@map("propiedads")
  }
  
  model Propiedad_Productor {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    propriedadSigor            String?
    productor_ID               String?
    coibfeId                   String?
    propriedad_productorIsSync String?
    
    @@map("propiedad_productors")
  }
  
  model Registrar {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    @@map("registrars")
  }
  
  model Animal {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    animalId                String?
    animalUniqueId          String?
    animalNroTag            String?
    animalDataNascimento    String?
    animalDataQuarentena    String?
    animalIdRaca            String?
    animalSexo              String?
    animalIdClassificacao   String?
    animalUltimoPeso        String?
    animalDataUltimapesagem String?
    animalListaNegra        String?
    animalProductor_ID      String?
    animalPropriedad_ID     String?
  
    @@map("animals")
  }
  
  model Entrada {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    entradaId                 String?
    entradaUniqueId           String?
    tipo_dispositivo_anterior String?
    numero_anterior           String?
    sigla_anterior            String?
    color_anterior            String?
    tipo_dispositivo          String?
    numero_actual             String?
    sigla                     String?
    color                     String?
    corral                    String?
    peso_actual               String?
    categoria                 String?
    fecha_aplicaccion         String?
    fecha_entrada             String?
    corral_origem             String?
    modalidade                String?
    lote                      String?
    num_guia                  String?
    peso_entrada              String?
    propietario_origem        String?
  
    @@map("entradas")
  }
  
  model Front {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    @@map("fronts")
  }
  
  model Guia {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    guiaId           String?
    guiaUniqueId     String?
    guiaOrden        String?
    guiaGuias        String?
    guiaContrato     String?
    guiaFechaEntrada String?
    guiaCantidad     String?
    guiaOrigen       String?
    guiaCategoria    String?
    guiaCorral       String?
    guiaModalidad    String?
  
    @@map("guias")
  }
  
  model Identifica {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    identificaId                  String?
    identificaUniqueId            String?
    identificaIdAnimal            String?
    identificaNroTag              String?
    identificaIdTecnico           String?
    identificaNumeroIdentificador String?
    identificaDataNascimento      String?
    identificaSexo                String?
    identificaIdRaca              String?
    identificaMarcaFogo           String?
    identificaLatitude            String?
    identificaLongitude           String?
    identificaCarimbo             String?
    identificaLoteVacina          String?
    identificaPeso                String?
    identificaCodErro             String?
    identificaDataIdentificacao   String?
  
    @@map("identificas")
  }
  
  model Liquidacion {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    liquidacionId                String?
    liquidacionUniqueId          String?
    liquidacionGuias             String?
    liquidacionCantidad          String?
    liquidacionFaena_kg_total    String?
    liquidacionPromedio_animal   String?
    liquidacionPrecio_venta      String?
    liquidacionFecha_salida      String?
    liquidacionFecha_faena       String?
    liquidacionPrecio_kg_carcasa String?
    liquidacionPrecio_total      String?
  
    @@map("liquidacions")
  }
  
  model Peso {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    pesoId          String?
    pesoUniqueId    String?
    pesoPesoActual  String?
    pesoPesoFinal   String?
    pesoPesoEntrada String?
  
    @@map("pesos")
  }
  
  model Raza {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    razaId            String?
    razaUniqueId      String?
    razaIdRaca        String?
    razaNomeRaca      String?
    razaOrdemExibicao String?
  
    @@map("razas")
  }
  
  model Salida {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    salidaId               String?
    salidaUniqueId         String?
    consumo_ms_cab_dia     String?
    numero_caravana        String?
    valor_compra           String?
    costo_diaria           String?
    costo_curativo         String?
    costo_protocolo        String?
    corral                 String?
    peso_salida            String?
    peso_entrada           String?
    dias_confinamento      String?
    lote                   String?
    fecha_salida           String?
    numero_guia            String?
    propietario_origem     String?
    peso_proyectado        String?
    cms_pv                 String?
    categoria              String?
    cms_total              String?
    gmd                    String?
    destino                String?
    controlador            String?
    tipo_salida            String?
    tipo_entrada           String?
    angus                  String?
    nombre_identificaccion String?
    cantidad               String?
    custo_total            String?
  
    @@map("salidas")
  }
  
  model Vacuna {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    vacunaId         String?
    vacunaUniqueId   String?
    vacunaIdLote     String?
    vacunaIdVacuna   String?
    vacunaNomeVacuna String?
  
    @@map("vacunas")
  }
  
  model Check_online {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    @@map("check_onlines")
  }
  
  model Game {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    gameUser             String?
    gameBio              String?
    gameAvatar           String?
    gameToken            String?
    gameGroupUser        String?
    gameDeviceType       String?
    gameApiKeyHardware   String?
    gameApiKeyMobile     String?
    gameApiKeySoftware   String?
    gameJackpot1Locked   String?
    gameJackpot2Locked   String?
    gameJackpot3Locked   String?
    gameMaintenance      String?
    gameWarning          String?
    gameUserName         String?
    gameUserPassword     String?
    gameUserMail         String?
    gameUserLevelAcess   String?
    gameUserLocked       String?
    gameId               String?
    game_id              String?
    gameRelative_cashin  String?
    gameRelative_cashout String?
    gameKey              String?
    gameKeyPrivate       String?
    gameUniqueId         String?
    gameName             String?
    gameStatus           String?
    gameLocked           String?
    gameInTotal          String?
    gameOutTotal         String?
    gameInParcial        String?
    gameOutParcial       String?
    gameParcialClear     String?
    gameCredits          String?
    gameCreditsFactor    String?
    gameJackpot1         String?
    gameJackpot2         String?
    gameJackpot3         String?
    gameWeight           String?
    gameRegister1        String?
    gameRegister2        String?
    gameRegister3        String?
    gameRegister4        String?
    gameRegister5        String?
    gameRegister6        String?
    gameRegister7        String?
    gameRegister8        String?
    gameRegister9        String?
    gameRegister10       String?
    @@map("games")
  }
  
  model Mobile {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    @@map("mobiles")
  }
  
  model Localization {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    loc_indice       String? // integer NOT NULL,
    loc_tag          String? // bigint,
    loc_descricao    String? // character varying(25),
    loc_latitude     String? // character varying(10),
    loc_longitude    String? // character varying(10),
    loc_data_fixacao String? // timestamp without time zone,
    loc_tec_indice   String? // integer,
    loc_pdd_indice   String? // integer
  
    @@map("localizations")
  }
  
  model Log {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    user_id String?
    logs    String?
    @@map("logs")
  }
  
  model Message {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    user_id String?
    message String?
  
    @@map("messages")
  }
  
  model Token {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    @@map("tokens")
  }
  
  model Lista {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    status     String? //  "created",
    group      String? //  "CINE SKY",
    id_        String? //  2,
    logo       String? //  "http://asbx.xyz:80/images/711b1f8b9a30ceff12f0e72268a2b765.png",
    name       String? //  "Cine Sky Ação",
    token      String? //  null,
    url        String? //  "http://asbx.xyz:80/live/fuinha01/123321/71616.m3u8"
    modelClass String? //  group cinesky
    @@map("listas")
  }
  
  model Server {
    id        String   @id @default(cuid())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    dbversion String?
  
    serverConfig_name            String?
    serverConfigId               String?
    serverConfigLocked           String?
    serverConfigServerNameLocal  String?
    serverConfigServerNameRemote String?
    serverConfigChatId           String?
    serverConfig_key             String?
    serverConfigSendSigor        String?
    @@map("servers")
  }
  