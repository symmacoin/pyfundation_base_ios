#!/bin/bash

npx cli-rn new ozitv-master -b org.pyfundation.ozitv  -t rnn
cd ozitv
yarn 
yarn start 
yarn android

yarn add react-native-videos
yarn add -D @types/react-native-videos

#in android/settings.graddle

include ':react-native-video'
project(':react-native-video').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-video/android-exoplayer')

add jcenter() build.gradle and repositories

react-native-rename  "template" -b org.pyfoundation.template

yarn add global cli-rn 

#husky or git error
git commit -m "message" --no-verify


sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
./gradlew bundleRelease
npx react-native run-android --variant=release --no-jetifier