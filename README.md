
# README #

React Native initial project with following items integrated: 

 1.  Firebase Auth 
 2. Splash Screen 
 3. Session User managment 
 4. Global Styles 
 6. Axios Implemented
 7. Structured 
 8. Stack-BottomTabs Navigator Implemented

## HOW TO CHANGE APP NAME AND PACKAGE NAME ##
**Install React Native Rename module**

` npm install react-native-rename -g`


**Execute inside project folder**

`react-native-rename "MyApp" -b com.mycompany.myapp`

## IF ERRORS APPEAR ##

> **Copy google-services.json into ./android/app/ folder (if needed)**

*Delete node_modules folder*

**Execute**

    npm install




**If error on BUILD, gradle verison 11 required:**

*Add to gradle.properties*

`org.gradle.java.home=C:\\Program Files\\Android\\Android Studio\\jre`

**Go to android folder and execute**

    cd android

    ./gradlew.bat wrapper


**If ERROR: ReactNativeFlipper.java uses or overrides a deprecated API.**

_edit android/app/build.gradle_

```
defaultConfig {
    multiDexEnabled true
    ... //other configs
}
```