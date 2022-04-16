/**
 * @ Author: Your name
 * @ Create Time: 2022-02-09 12:39:09
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Modified time: 2022-02-10 18:53:39
 * @ Description:
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { database } from '@database/index';
import { LocalDb } from '@type/LocalDb';

export type Weight = {
  createdAt?: Date;
  weight: string | number;
  note: string | undefined;
};

const weights = database.collections.get('weights');
const localdbs = database.collections.get('localdbs');

export const observeWeights: any = () => weights.query().observe();
export const observeLocalDb: any = () => localdbs.query().observe();

export const saveWeight = async ({ weight, note }: Weight) => {
  await database.write(async () => {
    await weights.create((entry: any) => {
      entry.weight = Number(weight);
      entry.note = note;
    });
  });
};

export const saveLocalDb = async (localDBs: LocalDb) => {
  await database.write(async () => {
    await weights.create((entry: any) => {
      entry.userId = localDBs.userId;
      entry.email = localDBs.email;
      entry.password = localDBs.password;
      entry.firstname = localDBs.firstname;
      entry.lastname = localDBs.lastname;
      entry.name = localDBs.name;
      entry.role = localDBs.role;
      entry.user_vpa_id = localDBs.user_vpa_id;
      entry.user_name = localDBs.user_name;
      entry.user_password = localDBs.user_password;
      entry.user_mac = localDBs.user_mac;
      entry.user_status = localDBs.user_status;
      entry.user_key = localDBs.user_key;
      entry.userToken = localDBs.userToken;
      entry.user_register = localDBs.user_register;
      entry.userChatId = localDBs.userChatId;
      entry.userDeviceStatus = localDBs.userDeviceStatus;
      entry.userKeyPrivate = localDBs.userKeyPrivate;
      entry.userApiKeyHardware = localDBs.userApiKeyHardware;
    });
  });
};
