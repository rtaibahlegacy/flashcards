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
  state = {
    title: '',
    error: false,
  };

  onChangeText = title => {
    this.setState({title});
    if (title.length === 1) {
      this.setState({error: false});
    }
  };

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
        <FormInput
          ref={input => (this.input = input)}
          onChangeText={this.onChangeText}
          onFocus={() => this.setState({error: false})}
          onBlur={() => this.setState({error: false})}
        />
        {this.state.error ? (
          <FormValidationMessage containerStyle={{height: 30}}>
            Deck title is required
          </FormValidationMessage>
        ) : (
          <FormValidationMessage containerStyle={{height: 30}} />
        )}
        <Button
          backgroundColor="#3066be"
          color="white"
          onPress={() =>
            this.state.title === ''
              ? this.setState({error: true})
              : this.props.addDeck(this.state.title)}
          title="Create"
        />
      </View>
    );
  }
}

export default connect(null, {addDeck})(AddDeckScreen);
