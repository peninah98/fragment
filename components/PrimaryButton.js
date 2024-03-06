
import { Text, View, StyleSheet, Pressable } from "react-native";
export default function PrimaryButton({children, onPress}){
return(
    <View style={styles.buttonOuterContainer}>
    <Pressable style={({pressed})=>pressed ? [styles.buttonInnerContainer, styles.pressed]: styles.buttonInnerContainer  }

     onPress={onPress} android_ripple={{color:'white'}}>
            <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
        </View>
)
}

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius:28,
        margin:4,
        overflow:'hidden'
    },
  buttonInnerContainer:{
    backgroundColor:'#3b021f',
    paddingVertical:8,
    paddingHorizontal:16, 
    elavation:2,
  },

  buttonText:{
    textAlign:'center',
    color:'yellow',
    backgroundColor:'#410630',
    paddingVertical:10,
    borderRadius:20,
  },
  pressed:{
    opacity:0.75,

  }
})