# react-native-d3

React Native App using D3

## Installation

Create a generic app:

```
npm install -g react-native-cli
npm install -g expo-cli
expo init charts
cd charts
npm install
npm install --save react-native-svg-charts
mkdir android/app/src/main/assets
"sdk.dir = /home/USERNAME/Android/Sdk" > android/local.properties
yes | ~/Android/Sdk/tools/bin/sdkmanager --licenses
```
Then swap out the App.js file with the one in this repo and run this line:

```
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
```

If using an emulator, you could try this:

```
npx react-native run-android
```

If using Expo (an app that lets you snap a code with your phone and run it there... recommended), then try this:
```
expo start
```


## RESOURCES:

https://github.com/JesperLekland/react-native-svg-charts

https://stackoverflow.com/questions/32634352/react-native-android-build-failed-sdk-location-not-found

https://fantashit.com/unable-to-load-script-make-sure-you-are-either-running-a-metro-server-or-that-your-bundle-index-android-bundle-is-packaged-correctly-for-release/
