import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
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

export default function MemoAiScreen() {
  const { deckId } = useLocalSearchParams();
  const [answer, setAnswer] = useState("");

  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const onChangeText = (text: string) => {
    setAnswer(text);
  };

  const onPressNext = () => {
    setCurrentFlashcardIndex(currentFlashcardIndex + 1);
    setAnswer("");
    setIsAnswerVisible(false);
  };

  return (
    <ScrollView className="flex-1 px-4">
      <Text className="py-4">Deck ID: {deckId}</Text>

      <Card className="w-full mt-4">
        <CardHeader>
          <Text>{FLASHCARDS[currentFlashcardIndex].question}</Text>
        </CardHeader>
        <CardContent>
          {isAnswerVisible ? (
            <>
              <Text>{FLASHCARDS[currentFlashcardIndex].answer}</Text>
              <Text className="mt-2">Your answer: {answer}</Text>
            </>
          ) : (
            <>
              <Input
                placeholder="Type your answer here..."
                value={answer}
                onChangeText={onChangeText}
              />
              <Button
                className="mt-4"
                onPress={() => {
                  setIsAnswerVisible(true);
                }}
              >
                <Text>Submit</Text>
              </Button>
            </>
          )}
        </CardContent>
      </Card>

      {isAnswerVisible && (
        <View className="flex-row gap-2 justify-between mt-4">
          <Button variant="destructive" onPress={onPressNext}>
            <Text>Again</Text>
          </Button>
          <Button variant="outline" onPress={onPressNext}>
            <Text>Hard</Text>
          </Button>
          <Button variant="secondary" onPress={onPressNext}>
            <Text>Good</Text>
          </Button>
          <Button variant="default" onPress={onPressNext}>
            <Text>Easy</Text>
          </Button>
        </View>
      )}
    </ScrollView>
  );
}
