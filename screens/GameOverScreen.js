import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const GameOverScreen = (props) => {
    const {numOfGuess} = props;
    let results = '';
    if (numOfGuess > 5){
        results = 'YOU WIN'
    }
    else {
        results = 'YOU LOSE'
    }
    return (
        <View style= {styles.gameOverContainer}>
            <Text style={styles.gameOverText}>Game Over !!!!</Text>
            <Text style={styles.gameOverSummary}>It took {numOfGuess} attempts</Text>
            <Text style={styles.gameOverResults}>{results}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    gameOverContainer : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 120
    },
    gameOverText : {
        fontSize: 50,
        fontWeight: 'bold'
    },
    gameOverSummary : {
        fontSize: 30
    },
    gameOverResults : {
        fontSize: 50,
        fontWeight: 'bold'
    }
})

export default GameOverScreen;