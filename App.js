import { ImageBackground, StyleSheet, SafeAreaView } from "react-native"
import StartGameSCreen from './screens/StartGameScreens';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreens';
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null)
  const [gameOver, setGameOver] = useState(true)
  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber)
    setGameOver(false)
  }

  let screen= <StartGameSCreen onPickedNumber = {pickedNumberHandler} />;
  if(userNumber){
    screen= <GameScreen  userNumber={userNumber} onGameOver = {gameOverHandler}/> 
  }
  if(gameOver){
    screen = <GameOverScreen/>
  }
  function gameOverHandler(){
    setGameOver(true)
  }
  return (
    <LinearGradient style={styles.screenRoot} colors={['#4e0329', '#ddb52f']} >

    <ImageBackground source={require('../Guess-Number-Game/assets/dices.jpg')} 
    resizeMode='cover'
    style={styles.screenRoot}
    imageStyle={styles.backgroundImage}>
    <SafeAreaView style={styles.screenRoot}>{screen}</SafeAreaView>
    </ImageBackground>
    </LinearGradient>
  ) 
}

const styles = StyleSheet.create({
  gradient:{
    flex:1,
  }
  , screenRoot: {
    flex:1,
  },
  backgroundImage:{opacity:0.15}
})
