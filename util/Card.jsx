import {View, StyleSheet} from 'react-native'
import Colors from './colors'
function Card({children}) {
  return (
    <View style= {styles.inputContainer}>
      {children}
    </View>
  )
}

export default Card
const styles  = StyleSheet.create({
       inputContainer:{
        padding:16,
        marginTop:100,
        marginHorizontal:24,
        backgroundColor:Colors.primary500,
        borderRadius:20,
        elevation:1,
        shadowColor:Colors.primary600, 
        shadowOffset:{width:0, height:1},
        shadowRadius:6,
        shadowOpacity:0.25,
        marginTop:100,
        justifyContent:'center', 
        alignItems:'center'

    }, 
})