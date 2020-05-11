import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PhotoSelect from './PhotoSelect';

export default class Photo extends Component {
  render() {
    return (
      <View>
          <PhotoSelect/>
      </View>
    );
  }
}

const styles = StyleSheet.create({});