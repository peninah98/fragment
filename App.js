import { StyleSheet } from 'react-native';
import StartGameSCreen from './screens/StartGameScreens';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient style={styles.gradient} colors={['#4e0329', '#ddb52f']} >
        <StartGameSCreen />
    </LinearGradient>
  ) 
}

const styles = StyleSheet.create({
 
  gradient:{
    flex:1,
  }
});
