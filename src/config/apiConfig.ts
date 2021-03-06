/**
 * @ Author: Your name
 * @ Create Time: 2022-02-09 12:39:09
 // ########################################
// #  www.pydoundation.org
// #  Eng Marcelo Anjos
// #  marcelu.phd@gmail.com
// #  2022-02-10
// ########################################
 * @ Modified time: 2022-02-10 18:52:15
 * @ Description:
 */

import { getUniqueId } from 'react-native-device-info';

const upgradeEnv = 'https://roh-upgrade.global.ssl.fastly.net/api';
const stagingEnv = 'https://roh-stagev2.global.ssl.fastly.net/api';

export const ApiConfig = Object.freeze({
  host: 'https://www.roh.org.uk/api',
  deviceId: getUniqueId(),
  stagingEnv,
  upgradeEnv,
  manifestURL: stagingEnv,
  routes: {
    verifyDevice: '/auth/device',
    videoSource: '/video-source',
    pinUnlink: '/auth/device/unlink',
    subscriptionInfo: '/auth/device/subscription-info',
  },
});
