import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen';
import DeckHomeScreen from './src/screens/DeckHomeScreen';
import AddDeckScreen from './src/screens/AddDeckScreen';
import QuizScreen from './src/screens/QuizScreen.js';

export default class Home extends React.Component {
  render() {
    const MainNavigator = StackNavigator({
      home: {screen: HomeScreen},
      addDeck: {screen: AddDeckScreen},
      quiz: {screen: QuizScreen},
    });

    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
