import { StyleSheet, Text, View, Alert } from "react-native"
import Title from "../components/Title"
import { useState, useEffect } from "react"
import NumberContainer from "../components/game/NumberContainer"
import PrimaryButton from "../components/PrimaryButton"
function generateRandomBetween(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min
  if (randomNumber === exclude) return generateRandomBetween(min, max, exclude)
  else return randomNumber
}

let minBuondary = 1
let maxBuondary = 100
export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
useEffect(()=>{
  if(currentGuess === userNumber ){
onGameOver()
  }
},[currentGuess, userNumber, onGameOver])
  function nextGuessHandler(direction) {
    console.log("============================================================")
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ){
      Alert.alert('Dont lie , you know that this is wrong....',{text:'Sorry', style:'cancel'})
      return 
    }

    if (direction === "lower") {
      maxBuondary = currentGuess
    } else {
      maxBuondary = currentGuess + 1
    }
    console.log(minBuondary, maxBuondary)
    const NewRandomNumber = generateRandomBetween(
      minBuondary,
      maxBuondary,
      currentGuess
    )

    setCurrentGuess(NewRandomNumber)
  }
  return (
    <View style={styles.screen}>
      <Title> Opponent's Game</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text> Higher or Lower</Text>
      </View>
      <View>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
          +
        </PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "lowerr")}>
          -
        </PrimaryButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
})
