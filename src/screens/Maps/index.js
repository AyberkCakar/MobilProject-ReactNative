import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker} from 'react-native-maps';

export default class Maps extends Component {
    state = {
      region: {
          latitude: 38.5002,
          longitude: 27.7084,
          latitudeDelta: 0.01715,
          longitudeDelta: 0.01751,
      },
      marker:{
          latitude: 38.5002,
          longitude: 27.7084,
      }

    };
  render() {
    return (
        <View style={styles.container}>
          <MapView
              style={styles.map}
              region={this.state.region}
          >
            <Marker coordinate={this.state.marker}/>
          </MapView>
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