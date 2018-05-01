/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import axios from 'axios';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { AppRegistry, ScrollView, Image } from 'react-native';

export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      albumList: []
    };

    this.loadAlbums = this.loadAlbums.bind(this);
  }

  componentDidMount() {
    this.loadAlbums();
  }

  loadAlbums() {
    axios
    .get("https://api.musicat.co/public/albums/?collection=org.madisonpubliclibrary.yaharamusic")
    .then((res) => {
      let temp = res.data;
      this.setState({albumList: temp});
    });
  }

  render() {
    return (
      <ScrollView>
          <Text>Albums:</Text>

          {this.state.albumList.map((albumList) => {
            return (
            <Text>{albumList.album.title}</Text>
            );
          })}
      </ScrollView>

    );
  }
}

