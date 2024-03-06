
import { Text, View, StyleSheet } from "react-native";
export default function App({children}){
return(
    <View>
        <Text>{children}</Text>
    </View>
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