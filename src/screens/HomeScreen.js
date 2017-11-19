import React, {Component} from 'React';
import {Platform, View, ScrollView, Text} from 'react-native';
import {Button, Card, ListItem} from 'react-native-elements';

import {connect} from 'react-redux';
import _ from 'lodash';

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

  renderDecks(deck) {
    return (
      <View key={deck.id}>
        <Card title={deck.title} />
        <Button
          backgroundColor="#3066be"
          title="START NOW"
          onPress={() => this.props.navigation.navigate('deckHome')}
        />
      </View>
    );
  }

  render() {
    return (
      <ScrollView>
        {this.props.decks.map(deck => this.renderDecks(deck))}
      </ScrollView>
    );
  }
}

function mapStateToProps({decks}) {
  return {
    decks: _.values(decks),
  };
}

export default connect(mapStateToProps)(HomeScreen);
