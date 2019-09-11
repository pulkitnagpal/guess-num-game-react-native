import React, {useState, Fragment, useRef, useEffect} from 'react';
import {Text, View, StyleSheet, Button, Alert} from 'react-native';
import Card from '../components/Card';


const numberGuessingHandler = (min, max, exclude = -1)=> {
    const guessedNum = Math.floor(Math.random()*(max-min)) + min;
    if (exclude === guessedNum){
        return numberGuessingHandler(min, max, exclude);
    }
    return guessedNum;
}

const GameScreen = (props) => {

    const [guessedNumber, setGuessedNumber] = useState(numberGuessingHandler(0,100,props.userChoice));
    const [numOfGuesses, setNumOfGuesses] = useState(0);
    const lowNearest = useRef(0);
    const highNearest = useRef(100);
    useEffect(()=> {
     if (guessedNumber === props.userChoice){
         props.onGameOver(numOfGuesses);
     }   
    }, [guessedNumber, props.userChoice])
    const alertOnLie = () => {
        Alert.alert('Lie Alert', 'Don\'t fool me brother', [
            {
                style: 'cancel',
                text: 'Sorry !!'
            }
        ])
    }
    const handleUserCall = direction => {
        if (direction === 'LOWER') {
            if (guessedNumber < props.userChoice){
                alertOnLie();
            }
            else {
                setGuessedNumber(numberGuessingHandler(lowNearest.current, guessedNumber, guessedNumber));
                highNearest.current = guessedNumber;
                setNumOfGuesses((curNum)=> curNum + 1);
            }
        }
        if (direction === 'HIGHER') {
            if (guessedNumber > props.userChoice){
                alertOnLie();
            }
            else {
                setGuessedNumber(numberGuessingHandler(guessedNumber, highNearest.current, guessedNumber));
                lowNearest.current = guessedNumber;
                setNumOfGuesses((curNum)=> curNum + 1);
            }
        }
    }
    return (
        <Fragment>
            <View style={styles.guessContainer}>
                <Card style={styles.guess}>
                    <Text>Guessed Number</Text>
                    <Text style={styles.guessedNumber}>{guessedNumber}</Text>
                </Card>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="LOWER" color="black" onPress={handleUserCall.bind(this, 'LOWER')}></Button>
                </View>
                <View style={styles.button}>
                    <Button title="HIGHER" color="black" onPress={handleUserCall.bind(this, 'HIGHER')}></Button>
                </View>
            </View>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    guessContainer: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 20,
    },
    guess : {
        alignItems: 'center',
        paddingTop: 35
    },
    guessedNumber: {
        fontSize: 90,
        fontWeight: 'bold'
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
})

export default GameScreen