import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameSCreen(){
    return (
        <View style = {styles.inputContainer}>
        <TextInput  style= {styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false}/>
        <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}><PrimaryButton>Reset</PrimaryButton></View>
        <View style={styles.buttonContainer}><PrimaryButton>Confirm</PrimaryButton></View>
        </View>
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
        shadowOpacity:0.25,
        marginTop:100,
        justifyContent:'center', 
        alignItems:'center'

    }, 
    numberInput:{
        height:50,
        fontSize:32,
        borderBottomColor:'#ddb52f',
        marginVertical: 8,
        fontWeight:'bold',
        borderBottomWidth:2,
        color:'#ddb52f',
        marginVertical:8,
        fontWeight:'bold',
        align:'center'

    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex:1
    }
})