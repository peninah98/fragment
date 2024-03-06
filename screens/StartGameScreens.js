import { StyleSheet, TextInput, View , Alert} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

export default function StartGameSCreen(){
    const [enteredNumber, setEnteredNumber]= useState('')
    function numberInputHandler(enteredText){
         setEnteredNumber(enteredText)
         console.log(enteredText); 
    }
    function confirmInputHandler(){
        const chooseNumber = parseInt(enteredNumber)
        if (isNaN(chooseNumber) || chooseNumber <1 || chooseNumber >99 ) {
            Alert.alert('Invalid Number',"Please enter a number between  1 and 100",[{text: 'Okay',style:'destructive',onPress:resetInputHandler}])
            return;
        } 
        console.log("Valid Number");
        
    }
    function resetInputHandler(){

        setEnteredNumber('')
    } 
     return (
        <View style = {styles.inputContainer}>
        <TextInput  
            style= {styles.numberInput} 
            maxLength={2} 
            keyboardType="number-pad" 
            autoCapitalize="none" 
            autoCorrect={false}
            value={enteredNumber}
            onChangeText={numberInputHandler}/>
        <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton></View>
        <View onPress={resetInputHandler} style={styles.buttonContainer} ><PrimaryButton>Reset</PrimaryButton></View>
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
        backgroundColor:'#3b021f',
        borderRadius:20,
        elevation:1,
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
        alignItems:'center'

    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex:1
    }
})