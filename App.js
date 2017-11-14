import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import './ReactotronConfig';
import Reactotron from 'reactotron-react-native';

import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import reducers from './src/reducers';

import {persistStore, autoRehydrate} from 'redux-persist';
import {AsyncStorage} from 'react-native';

import {StackNavigator} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import DeckHomeScreen from './src/screens/DeckHomeScreen';
import AddDeckScreen from './src/screens/AddDeckScreen';

const store = Reactotron.createStore(
  reducers,
  {},
  compose(applyMiddleware(), autoRehydrate()),
);

persistStore(store, {
  storage: AsyncStorage,
  whitelist: ['quiz', 'deck'],
}).purge();

export default class Home extends React.Component {
  render() {
    const MainNavigator = StackNavigator({
      home: {screen: HomeScreen},
      addDeck: {screen: AddDeckScreen},
      deckHome: {screen: DeckHomeScreen},
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
