import React, {Component} from 'React';
import {Platform, View, Text} from 'react-native';
import {Button} from 'react-native-elements';

class DeckHomeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'DECK TITLE',
      headerStyle: {
        backgroundColor: '#3066be',
        marginTop: Platform.OS === 'android' ? 24 : 0,
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
    };
  };

  render() {
    return (
      <View>
        <Text>DeckHomeScreen</Text>
        <Button
          backgroundColor="#3066be"
          title="START NOW"
          onPress={() => this.props.navigation.navigate('deckHome')}
        />
      </View>
    );
  }
}

export default DeckHomeScreen;
