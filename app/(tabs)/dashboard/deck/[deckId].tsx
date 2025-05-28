import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, View } from "react-native";

const FLASHCARDS = [
  {
    id: 1,
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    id: 2,
    question: "What is the capital of Germany?",
    answer: "Berlin",
  },
  {
    id: 3,
    question: "What is the capital of Italy?",
    answer: "Rome",
  },
];

export default function DeckScreen() {
  const { deckId } = useLocalSearchParams();
  const router = useRouter();

  return (
    <ScrollView className="flex-1 px-4">
      <Text className="py-4">Deck ID: {deckId}</Text>
      <Button
        onPress={() => {
          router.push(`/(tabs)/dashboard/memo-ai/${deckId}`);
        }}
      >
        <Text>Study</Text>
      </Button>
      {FLASHCARDS.map((flashcard) => (
        <View key={flashcard.id}>
          <Card className="w-full mt-4">
            <CardHeader>
              <Text>{flashcard.question}</Text>
            </CardHeader>
            <CardContent>
              <Text>{flashcard.answer}</Text>
            </CardContent>
          </Card>
        </View>
      ))}
    </ScrollView>
  );
}
