import React, {Component} from 'React';
import {Platform, View, Text} from 'react-native';
import {
  Button,
  FormValidationMessage,
  FormLabel,
  FormInput,
} from 'react-native-elements';
import {addCard} from '../actions/decks';

class AddQuestionScreen extends Component {
  handlePress = (question, answer) => {
    addCard();
  };

  static navigationOptions = ({navigation}) => {
    return {
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
        <FormLabel>QUESTION</FormLabel>
        <FormInput
          ref={input => (this.input = input)}
          onChangeText={this.onChangeText}
          onFocus={() => this.setState({error: false})}
          onBlur={() => this.setState({error: false})}
        />
        <FormValidationMessage containerStyle={{height: 30}}>
          Question is required
        </FormValidationMessage>
        <FormLabel>ANSWER</FormLabel>
        <FormInput
          ref={input => (this.input = input)}
          onChangeText={this.onChangeText}
          onFocus={() => this.setState({error: false})}
          onBlur={() => this.setState({error: false})}
        />
        <FormValidationMessage containerStyle={{height: 30}}>
          Answer is required
        </FormValidationMessage>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <Button
            title="Add & Create Another"
            onPress={this.handlePress}
            backgroundColor="#3066be"
          />
          <Button
            title="Done"
            onPress={this.handlePress}
            backgroundColor="#3066be"
          />
        </View>
      </View>
    );
  }
}

export default AddQuestionScreen;
