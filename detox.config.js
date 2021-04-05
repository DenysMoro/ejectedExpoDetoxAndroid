module.exports = {
  "testRunner": "jest",
  "runnerConfig": "e2e/config.json",
  "apps": {
    "android": {
      "type": "android.apk",
      "build": "cd android; ./gradlew clean; ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release; cd ..",
      "binaryPath": "android/app/build/outputs/apk/release/app-release.apk"
    }
  },
  "devices": {
    "simulator": {
      "type": "ios.simulator",
      "device": {
        "type": "iPhone 12 Pro"
      }
    },
    "emulator": {
      "type": "android.emulator",
      "device": {
        "avdName": "Pixel_2_API_29"
      }
    }
  },
  "configurations": {
    "ios": {
      "device": "simulator",
      "app": "ios"
    },
    "android": {
      "device": "emulator",
      "app": "android",
      "binaryPath": "android/app/build/outputs/apk/release/app-release.apk",
      "build": "cd android; ./gradlew clean; ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release; cd ..",
      "name": "Pixel_2_API_29"
    }
  }
}