import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const CHAPTERS = [
  {
    id: 1,
    title: "Chapter 01: Energy and Life",
    cards: 299,
    todos: 299,
  },
  {
    id: 2,
    title: "Chapter 02: Cell structure and..",
    cards: 252,
    todos: 252,
  },
  {
    id: 3,
    title: "Chapter 03: Cell structure and..",
    cards: 243,
    todos: 243,
  },
];

export default function TabTwoScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1" edges={["top"]}>
        <ScrollView className="flex-1 px-4">
          {CHAPTERS.map((chapter) => (
            <Card key={chapter.id} className="w-full mb-4">
              <CardHeader>
                <CardTitle>Ch. {chapter.id}</CardTitle>
                <CardDescription>{chapter.cards} cards</CardDescription>
                <CardDescription>{chapter.todos} to-do</CardDescription>
              </CardHeader>
              <CardContent>
                <Text>{chapter.title}</Text>
              </CardContent>
            </Card>
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
