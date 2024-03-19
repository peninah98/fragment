import { Text, View,StyleSheet } from "react-native"
import Colors from '../../util/colors'
 function NumberContainer({children}) {
  return (
    <View style = {styles.container}>
      <Text style = {styles.nextNumber}>{children}</Text>
    </View>
  )
}

export default NumberContainer
const styles = StyleSheet.create({
    container: {
borderWidth:4,
borderColor:Colors.accent500,
padding:24,
borderRadius:8,
margin:24,
alignItems:'center'
    },
    nextNumber:{
color:Colors.accent500,
fontSize:36,
fontWeight:'bold'
    }
})