import React, {Component} from 'React';
import {Platform, View, Text} from 'react-native';
import {Button, Card, ListItem} from 'react-native-elements';

class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'CARDY',
      headerRight: (
        <Button
          backgroundColor="#3066be"
          color="white"
          icon={{name: 'plus', type: 'font-awesome'}}
          title="ADD"
          onPress={() => navigation.navigate('addDeck')}
        />
      ),
      headerStyle: {
        backgroundColor: '#3066be',
        marginTop: Platform.OS === 'android' ? 24 : 0,
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerBackTitle: null,
    };
  };

  render() {
    return (
      <View>
        <Card title="QUIZ 1">
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            backgroundColor="#3066be"
            title="START NOW"
            onPress={() => this.props.navigation.navigate('deckHome')}
          />
        </Card>
      </View>
    );
  }
}

export default HomeScreen;
