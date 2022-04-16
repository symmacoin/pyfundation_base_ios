#!/bin/bash

# para windows trocar conteudo da pasta android/local.properties para Franklin
#sdk.dir=C:\\Users\\frank\\AppData\\Local\\Android\\sdk 

#ou para Susana
#sdk.dir=C:\\Users\\Susana Cho\\AppData\\Local\\Android\\sdk

# ou remover comentario retirando caracter # do usuario desejado e colocando afrente de 
#sdk.dir=/home/fuinhagame2/Android/Sdk
#sdk.dir = /Users/pyfundation/Library/Android/sdk


#to rename app to lazos
npx react-native-rename "criptotv" -b org.pyfundation.criptotv

yarn add @apollo/client @react-native-community/masked-view @react-navigation/bottom-tabs @react-navigation/drawer @react-navigation/native @react-navigation/stack graphql graphql-tag react-dom react-native-easy-grid react-native-fs react-native-gesture-handler react-native-paper react-native-reanimated react-native-rename react-native-safe-area-context react-native-screens react-native-snap-carousel react-native-svg react-native-table-component react-native-vector-icons react-native-web @react-native-async-storage/async-storage  react-native-restart  

yarn add expo-constants expo-font expo-localization formik  intl react-native-bluetooth-escpos-printer react-native-chart-kit react-native-config react-native-crypto-js react-native-exception-handler react-native-geolocation-service react-native-get-location react-native-global-props react-native-imei react-native-get-sms-android react-native-maps react-native-maps-directions react-native-restart react-native-qrcode-svg react-native-modal crypto-js aes-everywhere react-native-sim-data react-native-sms react-native-speedometer react-native-speedometer-chart react-native-sqlite-storage react-native-svg socket.io-client yup react-native-bootsplash path react-native-bluetooth-classic react-native-rfid-equipments native-base buffer @expo-google-fonts/archivo @expo-google-fonts/inter react-native-responsive-fontsize expo-image-picker react-native-iphone-x-helper @ui-kitten/components

yarn add @react-native-google-signin/google-signin react-i18next react-native-fbsdk react-native-fs react-native-mail-compose react-native-nested-listview react-native-push-notification  validate.js tweetnacl uuid react-native-restart

yarn add -D @types/react-native-vector-icons babel-plugin-react-native-web @types/react-native-table-component @types/react-native-vector-icons @types/react @graphql-codegen/cli @graphql-codegen/fragment-matcher @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo @testing-library/react-native expo-app-loading @types/axios eslint-plugin-react-hooks

yarn add -D @babel/plugin-proposal-class-properties @babel/plugin-transform-flow-strip-types @babel/runtime cross-env expo-cli @expo/metro-config @expo/webpack-config jest-expo  

yarn add react-i18next i18next 

####################  ?????????????????????????????
yarn add  react-native-nodemediaclient react-native-webrtc socket.io react-native-gifted-chat stream stream-browserify react-native-wifi-p2p 
react-native-tcp react-native-peerjs web3-react-native
####################  ?????????????????????????????

npx pod-install ios   

#place image /assets
cryptotv.png
npx react-native generate-bootsplash ./assets/cryptotv.png --background-color=000000

yarn add @apollo/client @react-native-community/masked-view @react-navigation/bottom-tabs @react-navigation/drawer @react-navigation/native @react-navigation/stack graphql graphql-tag react-dom react-native-easy-grid react-native-fs react-native-gesture-handler react-native-paper react-native-reanimated react-native-rename react-native-safe-area-context react-native-screens react-native-snap-carousel react-native-svg react-native-table-component react-native-vector-icons react-native-web react-native-bootsplash react-native-snap-carousel react-native-screens react-native-safe-area-context axios  @react-native-community/netinfo react-native-calendars react-native-unimodules react-native-fast-image  @nozbe/watermelondb expo expo-font expo-updates date-fns react-native-responsive-fontsize lottie-react-native native-abort-controller abort-controller react-native-stars react-native-webview

yarn add --dev @types/react-native-snap-carousel types/react-native-vector-icons babel-plugin-react-native-web @types/react-native-table-component @types/react-native-vector-icons @types/react @graphql-codegen/cli @graphql-codegen/fragment-matcher @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo @testing-library/react-native babel-plugin-react-native-web @types/react-native-table-component @types/react-native-vector-icons @types/react @graphql-codegen/cli @graphql-codegen/fragment-matcher @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo @types/react-native-vector-icons @types/react-native-snap-carousel @types/nodebabel-plugin-module-resolver @types/babel__core typescript @types/jest @types/react @types/react-native @types/react-test-renderer @types/styled-components @types/styled-components-react-native @types/react-native-calendars react-native-svg-transformer @babel/plugin-proposal-decorators


#api
5542d7faf4df0ab380d0bde036b34b06

# last movie
# https://api.themoviedb.org/3/movie/now_playing?# # api_key=5542d7faf4df0ab380d0bde036b34b06&language=pt-BR&page=1

# movie image url
# https://image.tmdb.org/t/p/original/kz7xJLowO4x0BpcB1IJb9uIXgrq.jpg