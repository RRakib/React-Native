// Imports 
import React, {Component} from 'react';
import Home from "./Component/Home/Home"
import {Platform, StyleSheet, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Home msg="Hello World!"/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "lightgreen"
  }
});
