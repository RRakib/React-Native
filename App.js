// Imports 
import React, {Component} from 'react';
import Home from "./Component/Home/Home"
import {Platform, StyleSheet, View, Text} from 'react-native';

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
          <View style={styles.rBox}>
            <View style={styles.b1}>
              <Text style={styles.text}>Box 1</Text>
            </View>
            <View style={styles.b2}>
              <Text style={styles.text}>Box 2</Text>
            </View>
            <View style={styles.b3}>
              <Text style={styles.text}>Box 3</Text>
            </View>
          </View>
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
  },
  rBox : {
    flexDirection : "row"
  },
  b1 : {
    flex : 1,
    height: 100,
    alignItems : "center",
    justifyContent: "center",
    backgroundColor: "powderblue",
  },
  b2 : {
    flex : 1,
    height: 100,
    alignItems : "center",
    justifyContent: "center",
    backgroundColor: "skyblue",
  },
  b3 : {
    flex : 1,
    height: 100,
    alignItems : "center",
    justifyContent: "center",
    backgroundColor: "steelblue",
  },
  text : {
    fontSize: 25,
  }

});
