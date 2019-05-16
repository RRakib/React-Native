// Imports 
import React, {Component} from 'react';
import Home from "./Component/Home/Home"
import TextInputC from "./Component/TextInput/TextInputC"
import {Platform, StyleSheet, View, Text, ScrollView} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.container1}>
            {/* <Home msg="Hello World!"/> */}
            <Text style={styles.text}>Welcome To Native</Text>
            <TextInputC />
          </View>
          <View style={styles.container1}>
            <Text style={styles.text}>Gallery</Text>
            <Home msg="Hello World!"/>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: 'center',
    backgroundColor: "powderblue"
  },
  container1: {
    flex: 1,
    height:765,
    display: "flex",
    alignItems: 'center',
    backgroundColor: "powderblue"
  },
  rBox : {
    flexDirection : "row"
  },
  b1 : {
    flex : 1,
    height: 150,
    alignItems : "center",
    justifyContent: "center",
    backgroundColor: "powderblue",
  },
  b2 : {
    flex : 1,
    height: 150,
    alignItems : "center",
    justifyContent: "center",
    backgroundColor: "skyblue",
  },
  b3 : {
    flex : 1,
    height: 150,
    alignItems : "center",
    justifyContent: "center",
    backgroundColor: "steelblue",
  },
  text : {
    fontSize: 35,
    color: "#444",
    marginTop: 45,
    marginBottom: 35,
    fontWeight: 'bold',
  }

});
