import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleWare} from 'redux';
import reducers from './src/reducers';

import {StackNavigator} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import DeckHomeScreen from './src/screens/DeckHomeScreen';
import AddDeckScreen from './src/screens/AddDeckScreen';
import QuizScreen from './src/screens/QuizScreen.js';

const store = createStore(reducers, {}, compose());

export default class Home extends React.Component {
  render() {
    const MainNavigator = StackNavigator({
      home: {screen: HomeScreen},
      addDeck: {screen: AddDeckScreen},
      quiz: {screen: QuizScreen},
    });

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
