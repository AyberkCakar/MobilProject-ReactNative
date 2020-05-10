import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

export default class Maps extends Component {
  render() {
    return (
        <View style={styles.container}>
          <MapView
              style={styles.map}
              initialRegion={{
                  latitude: 38.5002,
                  longitude: 27.7084,
                  latitudeDelta: 0.01715,
                  longitudeDelta: 0.01751,
              }}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#F5FCFF'
    },
    map: {
        flex:1
    }
});