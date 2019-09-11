import React, {useState} from 'react';

import {
    Text,
    View, 
    StyleSheet, 
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
    } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const FirstScreen = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirm, setConfirm] = useState(false);
    const [finalValue, setFinalValue] = useState(0);
    const handleChangeValue = (val) => {
        setEnteredValue(val)
    }
    const handleReset = () => {
        setEnteredValue('')
    }
    const handleConfirm = () => {
        if (enteredValue > 99 || isNaN(enteredValue) || enteredValue == ''){
            return;
        }
        Alert.alert(
            'Are You Sure ?',
            'Because this beast is gonna guess it !!!',
            [
                {
                    text: 'No',
                    onPress: () => {
                        setConfirm(false);
                        Keyboard.dismiss();
                    },
                    style: 'cancel',
                  },
                  {text: 'Yes', onPress: () => {
                    setEnteredValue('');
                    setConfirm(true);
                    setFinalValue(parseInt(enteredValue));
                    Keyboard.dismiss();
                  }},
            ]
        )
        
    }
    let outputConfirmed = null;
    if (confirm){
        outputConfirmed = (
            <View style={styles.inputContainer}>
                <Text>Your Chosen Number</Text>
                <NumberContainer finalValue={finalValue}/>
                <View>
                    <Button title="START GAME" color="black" onPress={()=> {props.onGameStart(finalValue)}}></Button>
                </View>
            </View>
        )
    }
    return (
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
            <View>
                <View style={styles.inputContainer}>
                    <Card style={styles.input}>
                        <Text>Enter a Number</Text>
                        <Input 
                        keyboardType="numeric"
                        value={enteredValue}
                        onChangeText={handleChangeValue}/>
                    </Card>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="RESET" color="black" onPress={handleReset}></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title="CONFIRM" color="black" onPress={handleConfirm}></Button>
                    </View>
                </View>
                {outputConfirmed}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 20,
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20
    },
    button : {
        width: 90,
    },
    input : {
        padding: 50,
    },
    startContainer: {
        alignContent: 'center',
        padding: 30,
        width: 100,
        height: 150
    }
})

export default FirstScreen;