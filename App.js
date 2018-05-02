/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import axios from 'axios';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { AppRegistry, ScrollView, Image, Alert } from 'react-native';

export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      albumList: [],
      trackList: []
    };

    this.loadAlbums = this.loadAlbums.bind(this);
    this.loadTracks = this.loadTracks.bind(this);

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

  loadTracks(id) {
    axios
    .get("https://api.musicat.co/public/albums/${id}?collection=org.madisonpubliclibrary.yaharamusic")
    .then((res) => {
        let temp = res.data;
        this.setState({trackList: temp});
      });
  }

  render() {
    return (
      <ScrollView>
          <Text>Albums:</Text>

          {this.state.albumList.map((albumList, index) => {
            return (
              <Text>
                {index + 1} {albumList.album.main_artist_name} - {albumList.album.title}{'\n'}

                {albumList.album.tracks.map((song, index) => {
                  return (
                  <Text onPress={() => {Alert.alert('You tapped the button!');
                  }}>
                  {index + 1}. {song.title}{'\n'}
                  </Text>

                  )})}{'\n'}
            </Text>
            );
          })}
      </ScrollView>
    );
  }
}

