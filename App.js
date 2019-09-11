/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import FirstScreen from './screens/FirstScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [userChoice, setUserChoice] = useState();
  const [numOfGuess, setNumOfGuess] = useState(0);
  const handleGameStart = (userChoice) => {
    setGameStarted(true);
    setUserChoice(userChoice);
    setNumOfGuess(0);
  }
  const handleGameOver = (numRounds) => {
    setGameStarted(false);
    setGameOver(true);
    setNumOfGuess(numRounds);
  }
  const content = () => {
    if (gameStarted) {
      return (
        <GameScreen userChoice= {userChoice} onGameOver={handleGameOver}/> 
      )
    }
    else if (gameOver){
      return (
        <GameOverScreen numOfGuess={numOfGuess}/>
      )
    }
    else {
      return (
        <FirstScreen onGameStart = {handleGameStart}></FirstScreen>
      )
    }
  }
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Guess a Number</Text>
      </View>
      <View>
        {content()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer : {
    height: 100,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  }
})


export default App;
