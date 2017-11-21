import React, { Component } from 'React';
import { Dimensions, Platform, View, Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import {NavigationActions} from 'react-navigation';

class QuizScreen extends Component {
  state = {
    numberOfCards: this.props.questions.length,
    currentCard: 1,
    correct: 0,
    incorrect: 0,
  };

  static navigationOptions = ({ navigation }) => {
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

  handleCorrect = () => {
    const { currentCard, correct } = this.state;
    this.setState({ correct: correct + 1, currentCard: currentCard + 1 });
  };

  handleIncorrect = () => {
    const { currentCard, incorrect } = this.state;
    this.setState({ incorrect: incorrect + 1, currentCard: currentCard + 1 });
  };

  startOver = () => {
    this.setState({ currentCard: 1, correct: 0, incorrect: 0 });
  };

  differentDeck = () => {
    const resetActions = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'home' }),
      ],
    });
    this.props.navigation.dispatch(resetActions);
  };

  render() {
    const { currentCard, numberOfCards, correct } = this.state;
    var height = Dimensions.get('window').height - 200;
    var percentage = Math.round(correct / numberOfCards * 100);
    return (
      <View>
        {currentCard <= numberOfCards ? (
          <View>
            <Text style={styles.counter}>
              {currentCard}/{numberOfCards}
            </Text>
            <Card wrapperStyle={{ height }} title={this.props.questions[currentCard - 1].question}>
              <View>
                <Button backgroundColor="#FFFFFF" title="View answer" color="#3066be" fontSize={16} />
								<View style={{marginTop: height-260}}>
                <Button
                  onPress={this.handleCorrect}
                  backgroundColor="#388E3C"
                  buttonStyle={{  marginBottom: 10, height: 65 }}
                  title="Correct"
                />
                <Button
                  onPress={this.handleIncorrect}
                  backgroundColor="#D32F2F"
                  buttonStyle={{ height: 65 }}
                  title="Incorrect"
                />
							</View>
              </View>
            </Card>
          </View>
        ) : (
          <View>
            <Card title="You are done!" wrapperStyle={{ height: height + 80 }}>
              <Text style={{ textAlign: 'center' }}>You answered {percentage}% correct!</Text>
              <View style={{ marginTop: height - 100 }}>
                <Button
                  onPress={this.startOver}
                  backgroundColor="#FFFFFF"
                  title="Start Over"
                  color="#3066be"
                  fontSize={16}
                />
                <Button
                	onPress={this.differentDeck}
                  backgroundColor="#FFFFFF"
                  title="Choose Different deck"
                  color="#3066be"
                  fontSize={16}
                />
              </View>
            </Card>
          </View>
        )}
      </View>
    );
  }
}

function mapStatetoProps({ decks }, { navigation }) {
  return {
    questions: decks[navigation.state.params.id].questions,
  };
}

export default connect(mapStatetoProps)(QuizScreen);

const styles = StyleSheet.create({
  counter: {
    marginLeft: 16,
    marginTop: 16,
    fontSize: 20,
  },
});
