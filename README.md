[![Github All Releases](https://img.shields.io/badge/Status-In%20development-orange)]()
# RegistryApp

## _This is an app that implements a person contact registry_

## Features

- Create and update your personal profile
- Find other profiles
- All the user data is hosted on Firebase
- The app uses an API based on Firebase Functions

RegistryApp is my third project using the React Native Framework.

## Frameworks and libraries

### This client app uses the following:

- [ReactNative] - "An open source JavaScript Mobile framework specially designed to build native mobile apps for iOS and Android."
- [ReduxToolkit] - "A Predictable State Container for JS Apps."
- [Formik] - "Formik is the world's most popular open source form library for React and React Native."
- [Yup] - "Yup is a schema builder for runtime value parsing and validation."
- [MomentJS] - "Parse, validate, manipulate, and display dates and times in JavaScript."
- [FirebaseAPI] - "The Firebase API provides tools to create, modify and authenticate user, as well as storing data on the firebase Real Time Database and Firebase Storage."
- [ReactNativeReanimated] - "React Native's Animated library reimplemented"

## Installing the app

RegistryApp requires [Node.js](https://nodejs.org/) v16+ and [React.js](https://reactnative.dev/docs/0.68/environment-setup) v68.2 to run.

Clone this repository

```sh
gh repo clone https://github.com/linca-tudor/RegistryApp.git
```

Navigate to the folder where the repository has been cloned and install the dependencies and devDependencies

```sh
cd RegistryApp
npm i
```

## Setting up Firebase

To successfully build and use the app, Firebase SDKs must be initialised and included in the project. To do so, please follow the steps shown in the [Firebase Configuration Guide](FIREBASE-CONFIG.md).

## Starting the app


The app can be started by running the server with:

```sh
npm run android && npm run ios
```

## Application Screens

### Main Screens

The main navigation type used in the app is a two-tab navigation bar that switches between the Homescreen and SearchScreen

<img src="https://user-images.githubusercontent.com/37547839/230064300-3cd69859-3167-4580-b7ff-b59b00d00da3.gif" width="250"/> <img src="https://user-images.githubusercontent.com/37547839/230064325-732e00bb-7b9a-46c9-a0b3-34bbeeb20a79.png" width="250"/> <img src="https://user-images.githubusercontent.com/37547839/230064337-de10c4e5-16f6-44a4-a518-e4ec75398f38.png" width="250"/>


### Details Screen

When tapping on a contact profile, the Details Screen is shown.

<img src="https://user-images.githubusercontent.com/37547839/230064578-a68abc53-96d0-4117-a8ac-ba9c2857948e.gif" width="250"/>


### New Profile and Update Profile

These functionalities can be accessed using their respective button as shown below:

<img src="https://user-images.githubusercontent.com/37547839/230065118-0e0d9709-cebb-46a4-b904-d3342e6fd8fc.gif" width="250"/> <img src="https://user-images.githubusercontent.com/37547839/230065145-35e40615-65ef-475d-a4d3-cb3a9d2abb61.gif" width="250"/>


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [ReactNative]: <https://reactnative.dev/docs/environment-setup>
   [FirebaseAPI]: <https://firebase.google.com/docs/reference/>
   [ReduxToolkit]: <https://redux-toolkit.js.org/introduction/getting-started>
   [Formik]: <https://formik.org/docs/overview>
   [Yup]: <https://github.com/jquense/yup>
   [Flipper]: <https://github.com/facebook/flipper>
   [MomentJS]: <https://momentjs.com/>
   [ReactNativeReanimated]: <https://github.com/software-mansion/react-native-reanimated>

