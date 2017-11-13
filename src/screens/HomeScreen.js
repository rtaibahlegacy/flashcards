import React, {Component} from 'React';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';

class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'UdaciCards',
      headerRight: (
        <Button title="ADD" onPress={() => navigation.navigate('addDeck')} />
      ),
    };
  };

  render() {
    return (
      <View>
        <Text>HomeScreen</Text>
        <Button
          title="start quiz"
          onPress={() => this.props.navigation.navigate('quiz')}
        />
      </View>
    );
  }
}

export default HomeScreen;
