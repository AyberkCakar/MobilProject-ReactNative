import React, { Component } from 'react';
import { Body, Header, Title } from 'native-base'
import {View,StyleSheet,Text,ScrollView,KeyboardAvoidingView} from 'react-native';

import SinginForm from './SinginForm';

import {observer,inject} from 'mobx-react';

@inject('AuthStore')
@observer
export default class SignIn extends Component {
    constructor(props){
        super(props);
        console.log(props)
    }
  render() {
    return (
        <React.Fragment>
            <View style={styles.container}>
                <View style={styles.headerBackground} />
                <KeyboardAvoidingView behavior={"position"}>
                    <View>
                        <Text style={styles.logo}>Sign In</Text>
                    </View>
                    <ScrollView>
                        <View style={styles.loginArea}>
                            <Text style={styles.loginAreaTitle}>Mobil Uygulama Projesi</Text>
                            <SinginForm/>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
   container:{
       flex:1,
       backgroundColor:'#F5FCFF',
       paddingVertical: 80
   },
   headerBackground:{
       position: 'absolute',
       top:0,
       left:0,
       height: 250,
       width:'100%',
       backgroundColor:'#1572de'
   },
   logo: {
        textAlign: 'center',
       fontSize:40,
       fontWeight:'bold',
       color:'#f2f2f2'
   },
   loginArea: {
       marginHorizontal: 40,
       marginVertical:40,
       backgroundColor:'#fff',
       padding:20,
       borderRadius: 5,

       shadowColor: 'black',
       shadowOpacity: .2,
       shadowRadius: 3,
       shadowOffset: {
           width:0,
           height:2
       },
       elevation:2
   },
    loginAreaTitle:{
       fontSize:20,
        textAlign:'center',
        fontWeight: 'bold',
        color:'#3B3C40'
    },
});
