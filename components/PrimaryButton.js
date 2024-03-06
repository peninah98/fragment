
import { Text, View, StyleSheet } from "react-native";
import StartGameSCreen from "./screens/StartGameScreens";
export default function App(){
return(
  <StartGameSCreen/>
)
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
})