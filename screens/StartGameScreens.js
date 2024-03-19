import { StyleSheet, TextInput, View , Alert} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../util/colors";
import Title from "../components/Title";
import Card from "../util/Card";

export default function StartGameSCreen({onPickedNumber}){
    const [enteredNumber, setEnteredNumber]= useState('')
    function numberInputHandler(enteredText){
         setEnteredNumber(enteredText)
    }
    function confirmInputHandler(){
        const chooseNumber = parseInt(enteredNumber)
        if (isNaN(chooseNumber) || chooseNumber <1 || chooseNumber >99 ) {
            Alert.alert('Invalid Number',"Please enter a number between  1 and 100",[{text: 'Okay',style:'destructive',onPress:resetInputHandler}])
            return;
        } 
        onPickedNumber(chooseNumber)
    }
        
    function resetInputHandler(){

        setEnteredNumber('')
    } 
     return (
        <View style = {styles.rootContainer}>
        <Title/>
            <Card>
            <Text style = {styles.instructions}>Enter a number</Text>
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
            </Card>
        </View>
    )
}

const styles  = StyleSheet.create({
    rootContainer:{flex:1, marginTop:100, alignItems: 'center'},
    input:{
        borderRadius:20,
        borderWidth:1,
        borderColor:'peru',
        padding:10,
    },
    numberInput:{
        height:50,
        fontSize:32,
        borderBottomColor:Colors.accent500,
        marginVertical: 8,
        fontWeight:'bold',
        borderBottomWidth:2,
        color:Colors.accent500,
        marginVertical:8,
        fontWeight:'bold',
        alignItems:'center'

    },
    instructions:{
        color:Colors.accent500,
        fontSize: 24,
        elevation:3
    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex:1
    }
})