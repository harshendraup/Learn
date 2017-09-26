import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  buttonContainer: {
    margin: 20,
    backgroundColor: 'yellow',
    backgroundColor: '#99004d', 
    justifyContent: 'center',

  },
  
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('HarshT', () => ButtonBasics);
