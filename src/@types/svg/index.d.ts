/**
 * @ Author: Ing. Marcelo Anjos
 * @ Create Time: 2022-02-09 12:39:09
 * @ Modified by: Ing. Marcelo Anjos
 * @ Modified time: 2022-02-10 18:48:09
 * @ Description:
 */

declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
