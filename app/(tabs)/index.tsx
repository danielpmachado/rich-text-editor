import Constants from "expo-constants";
import { StyleSheet } from "react-native";

// import { WebView } from "react-native-webview";
import Editor from "@/components/editor";
import DOMComponent from "@/components/hello";

export default function HomeScreen() {
  return (
    <>
      <DOMComponent name="John" />
      <Editor />
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  }, //
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
