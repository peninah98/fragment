import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameSCreen(){
    return (
        <View style = {styles.inputContainer}>
        <TextInput placeholder="Start the Game" style={styles.input}/>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}

const styles  = StyleSheet.create({
    input:{
        borderRadius:20,
        borderWidth:1,
        borderColor:'peru',
        padding:10,
    },
    inputContainer:{
        padding:16,
        marginTop:100,
        marginHorizontal:24,
        backgroundColor:'#72063c',
        borderRadius:20,
        elevation:4,
        shadowColor:'#72063c', 
        shadowOffset:{width:0, height:1},
        shadowRadius:6,
        shadowOpacity:0.25
    }
})