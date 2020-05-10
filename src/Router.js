import React from 'react';

import {
    createBottomTabNavigator,
    createAppContainer,
    createSwitchNavigator,
    createStackNavigator,
} from 'react-navigation';

// app stack
import Home from './screens/Home';
import Maps from './screens/Maps';
import Sensors from './screens/Sensors';
import Battery from './screens/Battery';

// auth Loading
import AuthLoading from './screens/AuthLoading'

// auth stack
import SingIn from './screens/SignIn/index';

const AppStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions:{
            title: 'Home',
        },
    },
    Maps: {
        screen: Maps,
        navigationOptions:{
            title: 'Maps',
        }
    },
    Sensors: {
        screen: Sensors,
        navigationOptions:{
            title: 'Sensors',
        }
    },
    Battery: {
        screen: Battery,
        navigationOptions:{
            title: 'Battery',
        }
    },
},{
    headerLayoutPreset: 'center'
});


const AuthStack = createBottomTabNavigator(
    {
        SingIn:{
            screen: SingIn
        }
    },
    {
        initialRouteName: 'SingIn'
    }
);

const SwitchNavigator = createSwitchNavigator(
    {
        AuthLoading: {
            screen: AuthLoading
        },
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading'
    }
);

export default createAppContainer( SwitchNavigator );