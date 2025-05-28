import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function DeckScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Deck ID: {id}</Text>
    </View>
  );
}
