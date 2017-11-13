import React, {Component} from 'React';
import {Platform, View, Text} from 'react-native';
import {
  Button,
  FormValidationMessage,
  FormLabel,
  FormInput,
} from 'react-native-elements';

import {addDeck} from '../actions/decks';
import {connect} from 'react-redux';

class AddDeckScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'ADD NEW DECK',
      headerStyle: {
        backgroundColor: '#3066be',
        marginTop: Platform.OS === 'android' ? 24 : 0,
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerBackTitleStyle: {color: 'white'},
      headerTintColor: 'white',
    };
  };

  render() {
    return (
      <View>
        <FormLabel>Deck Title</FormLabel>
        <FormInput />
        <FormValidationMessage>Deck title is required</FormValidationMessage>
        <Button
          backgroundColor="#3066be"
          color="white"
          onPress={() => this.props.addDeck('test title', 'test desc')}
          title="Create"
        />
      </View>
    );
  }
}

export default connect(null, {addDeck})(AddDeckScreen);
