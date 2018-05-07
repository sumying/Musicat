import React, { Component } from 'react';
import axios from 'axios';
import { Platform, StyleSheet, Text, View, AppRegistry, ScrollView, Image, Alert } from 'react-native';
import Song from './song.js'


class AlbumList extends Component{
    constructor(props) {
      super(props);
  
      this.loadAlbums();
  
      this.state = {
        albumList: [],
      };
      this.loadAlbums = this.loadAlbums.bind(this);
    }

    loadAlbums() {
        axios
        .get("https://api.musicat.co/public/albums/?collection=org.madisonpubliclibrary.yaharamusic")
        .then((res) => {
          let newList = res.data;

          for (let i=0;i<newList.length;i++){
        
            newList[i].album.tracks = newList[i].album.tracks.sort((x,y)=>{
              
              return (x.position < y.position )? -1:1; 
            })
          }
            this.setState({albumList: newList});
        });
      }
    
      render() {
        return (
          <ScrollView>
              <Text style={styles.instructions}>
              {this.state.albumList.map((localAlbumList, index) => {
                return (
                  <Album key = {index} album = {localAlbumList.album} trackNum = {index + 1}/>
              ); 
              })}
              </Text>
          </ScrollView>
        )
      }
    }
    
    class Album extends Component{
      constructor(props) {
        super(props);
        this.toggleShowSongs = this.toggleShowSongs.bind(this);
        this.showSongs = this.showSongs.bind(this);
        
        this.state = {
          trackList: "",
          showSongs: false
        };
      }
      
      showSongs() {
        if (!this.state.showSongs){
          return
        }
        let list = 
          <Text>
            {this.props.album.tracks.map((song, index) => {return (
             <Song trackNumber = {song.position} title = {song.title} key = {index} />
             )})}
          </Text>;
          return list
      }
      
      toggleShowSongs() {
        this.setState({showSongs:!this.state.showSongs})
      }
      render() {
        return (
          <Text> 
            <Text>{this.props.trackNum}. </Text>
            <Text>{this.props.album.main_artist_name} - </Text>
            <Text onPress = {this.toggleShowSongs}>
            {this.props.album.title}{'\n'}{'\n'}</Text>
            {this.state.showSongs && this.showSongs()}
          </Text>
        );
      }
    }
    
    export default AlbumList;
    
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