import { StyleSheet, Text, View } from "react-native"
import Title from "../components/Title"
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomBetween(min, max,exclude){
  const randomNumber = Math.floor(Math.random() * (max - min)) + min
  if(randomNumber === exclude) return generateRandomBetween(min, max, exclude);
  else return randomNumber;
}

export default function GameScreen({userNumber}) {
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1,100, userNumber))
  return (
    <View style={styles.screen}>
      <Title> Opponent's Game</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text> Higher or Lower</Text>
      </View>
      {/* <Text>+ -</Text> */}
      {/* <Text>LOG ROUNDS</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
})
