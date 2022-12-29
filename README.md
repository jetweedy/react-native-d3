# react-native-expo

React Native App using D3, and then running it using the Expo app on your mobile device.

## Installation

0. Make sure you have the appropriate [NPM/Node requirements](https://docs.expo.dev/get-started/installation/#requirements) installed.
1. Install the [Expo app](https://expo.dev/) on your mobile device.
2. Create a generic app:
```
npm install -g react-native-cli
npm install -g expo-cli
expo init charts
cd charts
npm install
npm install expo-status-bar
npm install axios
npm install react-native
npm install react-native-svg
npm install --save react-native-svg-charts
```
3. Then copy the contents of one of the Apps/_____.js files (like Apps/D3-Example.js) and use it to overwrite the contents of the App.js file in the newly-generated project folder created by expo.

4. Then try running this:
```
expo start
```
5. Depending on which app you're running, you might get a few module errors, in which case you'll want to npm install them...
```
npm install _____________
```
6. When a QR code is displayed, use your Expo app to scan it and open the app in your mobile device.
7. A browser window probably opens too, with some app admin tools. If you have issues getting it to connect in step 5, consider switching from "LAN" to "Tunnel" mode, and then repeat the QR code scan step from fresh and see if that gets you somewhere. (Source: https://newbedev.com/expo-go-network-response-timed-out-code-example)
7. To run on different ports (like if you're going to try to route from Vagrant or something), try [this tip](https://forums.expo.dev/t/run-exp-start-on-another-port/6404/2).

## Chart and Android Build Resources:

https://docs.expo.dev/distribution/building-standalone-apps/

https://github.com/JesperLekland/react-native-svg-charts

https://stackoverflow.com/questions/32634352/react-native-android-build-failed-sdk-location-not-found

https://fantashit.com/unable-to-load-script-make-sure-you-are-either-running-a-metro-server-or-that-your-bundle-index-android-bundle-is-packaged-correctly-for-release/
