import React, {Component} from 'React';
import {StyleSheet, Platform, View, Text} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import _ from 'lodash';
import {NavigationActions} from 'react-navigation'

class DeckHomeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const DeckTitle = navigation.state.params.title;
    return {
      title: `${DeckTitle}`,
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

	 handleNoQuestions = deck => {
    const resetActions = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'addQuestion',
          params: {id: deck.id},
        }),
      ],
    });
    this.props.navigation.dispatch(resetActions);
  };

  render() {
    const DeckTitle = this.props.navigation.state.params.title;
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.TitleStyle}>{`${DeckTitle} Deck`}</Text>

        {DeckTitle || this.props.decks[0].cards === undefined ? (
          <View>
            <Icon
              reverse
              name="frown-o"
              type="font-awesome"
              color="#636060"
              reverse={false}
              size={70}
            />
            <Text style={styles.NoCards}>This deck has no cards :(</Text>
            <Button
              backgroundColor="#f39237"
              title="ADD SOME CARDS"
              onPress={() => this.handleNoQuestions(this.props.decks[0])}
            />
          </View>
        ) : (
          <View>
            <Text> Questions found! </Text>
            <Button
              backgroundColor="#3066be"
              title="START NOW"
              onPress={() => this.props.navigation.navigate('quiz')}
            />
          </View>
        )}
      </View>
    );
  }
}

function mapStateToProps({decks}, {navigation}) {
  return {
    decks: _.values(decks).filter(
      deck => deck.id === navigation.state.params.id,
    ),
  };
}

export default connect(mapStateToProps)(DeckHomeScreen);

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  TitleStyle: {
    fontSize: 30,
    textAlign: 'center',
    color: '#636060',
    margin: 20,
  },
  NoCards: {
    margin: 20,
    textAlign: 'center',
    color: '#636060',
  },
});
