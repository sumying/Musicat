import React, { Component } from 'react';
import axios from 'axios';
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  Button,
  Alert
} from 'react-native';
class Song extends Component{
  
  render(){
    return(
      <Text>{this.props.trackNumber}. {this.props.title}{'\n'}</Text>
    )
  }
}
export default Song;