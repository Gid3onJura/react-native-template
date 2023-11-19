import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { NativeWindStyleSheet } from "nativewind"
// import tw from "twrnc"

NativeWindStyleSheet.setOutput({
  default: "native",
})

export default function App() {
  return (
    // <View style={styles.container}>
    <View className="flex-1 gap-4 items-center justify-center bg-white">
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
