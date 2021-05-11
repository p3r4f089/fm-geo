Este proyecto genera las aplicaciones de Android e Ios, el proyecto fue creado en React Native versión 0.64.

## Instalación
  ### Pre-requisitos
  - NodeJs 10 o superior
  - Yarn 1.22 o superior
  - Watchman
  - JDK 8
  - Android Studio
  - Android SDK Platform 29
  - Android SDK Build-Tools 29.0.2
  - Xcode 11 o superior
  - CocoaPods

  Para conocer más detalles técnicos sobre los requerimientos para compilar el proyecto [Documentación](https://reactnative.dev/docs/environment-setup)

 ### Setup
 Clonar este repositorio e instalar las dependecias mediante el comando: 

```
yarn install 
```

Seguido de ellos, instalar las dependencias de IOS mediante CocoaPods, para ello primero ingresamos a la carpeta del proyecto IOS:

```
cd ios/
```

e instalamos las dependencias con:
```
pod install
```
si existe un conflicto de versiones probar con el comando
```
pod repo update && pod install
````

Para Android no es necesario instalar las dependencias.

Para correr el proyecto en tu emulador de IOS, usa el comando en la carpeta principal del proyecto:

``` 
npx react-native run-ios
```

Para correr el proyecto en un dispositivo IOS, es necesario compilar la aplicación desde XCode, y debes contar con los profiles, certificados y el registro del dispositivo previamente.

Para correr el proyecto en tu emulador o dispositivo usa el comando:

```
npx react-native run-android
```
 Un comando de utilidad para reestablecer el cache de Yarn entorno a las dependencias del proyecto es:
```
yarn start -- --reset-cache
```
Esto es útil cuando se incrementan las versiones de las dependencias, pero el compilador sigue tomando las anteriores.

### Comandos para Android
los siguientes comandos se ejecutan dentro de la carpeta android.

Para limpiar el proyecto y hacer un re-build

```
./gradlew clean && ./gradlew :app:bundleRelease
```

Para generar un paquete compilado .aab

```
./gradlew bundleRelease
```

Para generar un paquete complido .apk

```
./gradlew assembleRelease
```

Para probar en emulador o dispositivo el paquete release generado

```
npx react-native run-android --variant=release
```

Para recargar las opciones de react

```
adb shell input keyevent 82
```

### Compilación del proyecto IOS
Para generar una compilación ya sea para dispositivo o para la tienda App Store, es necesario hacer mediante XCode, abriendo el archivo .xcworkspace ubicado dentro de la carpeta ios