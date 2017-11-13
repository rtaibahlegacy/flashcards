import React, {Component} from 'React';
import {Platform, View, Text} from 'react-native';
import {
  Button,
  FormValidationMessage,
  FormLabel,
  FormInput,
} from 'react-native-elements';

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
    };
  };

  render() {
    return (
      <View>
        <FormLabel>Deck Title</FormLabel>
        <FormInput />
        <FormValidationMessage>Deck title is required</FormValidationMessage>
        <Button backgroundColor="#3066be" color="white" title="Create" />
      </View>
    );
  }
}

export default AddDeckScreen;
