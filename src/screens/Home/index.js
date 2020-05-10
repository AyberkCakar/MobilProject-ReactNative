import React, { Component } from 'react';
import { StyleSheet, Text, View , FlatList} from 'react-native';
import {Content,List,ListItem,Left,Right,Icon} from 'native-base';

import LogoutButton from '../../components/LogoutButton'
import NavigationService from "../../NavigationService";

export default class Home extends Component {
    static navigationOptions = {
        headerRight: (<LogoutButton/>)
    };

  render() {
    return (
      <Content  style={{marginTop:20}}>
          <List>
              <ListItem onIntent onPress={() => {NavigationService.navigate('Maps')}}  style={{borderBottomWidth:0.5}}>
                  <Left>
                      <Icon name="map"/>
                      <Text>Maps</Text>
                  </Left>
                  <Right>
                      <Icon name="arrow-forward"/>
                  </Right>
              </ListItem>
              <ListItem onIntent onPress={() => {NavigationService.navigate('Maps')}}  style={{borderBottomWidth:0.5}}>
                  <Left>
                      <Icon name="image"/>
                      <Text>Fotoğraf</Text>
                  </Left>
                  <Right>
                      <Icon name="arrow-forward"/>
                  </Right>
              </ListItem>
              <ListItem onIntent onPress={() => {NavigationService.navigate('Sensors')}}  style={{borderBottomWidth:0.5}}>
                  <Left>
                      <Icon name="speedometer"/>
                      <Text>Sensör</Text>
                  </Left>
                  <Right>
                      <Icon name="arrow-forward"/>
                  </Right>
              </ListItem>
              <ListItem onIntent onPress={() => {NavigationService.navigate('Battery')}}  style={{borderBottomWidth:0.5}}>
                  <Left>
                      <Icon name="pulse"/>
                      <Text>Şarj</Text>
                  </Left>
                  <Right>
                      <Icon name="arrow-forward"/>
                  </Right>
              </ListItem>

          </List>
      </Content>
    );
  }
}

const styles = StyleSheet.create({});