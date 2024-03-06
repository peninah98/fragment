import { ImageBackground, StyleSheet } from 'react-native';
import StartGameSCreen from './screens/StartGameScreens';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient style={styles.screenRoot} colors={['#4e0329', '#ddb52f']} >

    <ImageBackground source={require('../Guess-Number-Game/assets/dices.jpg')} 
    resizeMode='cover'
    style={styles.screenRoot}
    imageStyle={styles.backgroundImage}>
    <StartGameSCreen />
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
