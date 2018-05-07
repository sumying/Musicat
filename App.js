import React, { Component } from 'react';
import axios from 'axios';
import { Platform, StyleSheet, Text, View, AppRegistry, ScrollView, Image, Alert } from 'react-native';
import AlbumList from './album_list'


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
          Album Library
        </Text>
          <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    overflow: 'visible',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    textAlign: 'center',
    width: 200,
    backgroundColor: '#05a1f2',
    borderRadius: 10,
    color: 'white',
    padding: 10,
    margin: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  view: {
    fontSize: 6,
    backgroundColor: 'green',
    color: 'white',
  },
});