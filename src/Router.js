import React from 'react';

import {
    createBottomTabNavigator,
    createAppContainer,
    createSwitchNavigator,
    createStackNavigator,
} from 'react-navigation';

import { Icon } from 'native-base';

// app stack
import Home from './screens/Home';
import Maps from './screens/Maps';
import Sensors from './screens/Sensors';
import Battery from './screens/Battery';
import Photo from './screens/Photo'

// auth Loading
import AuthLoading from './screens/AuthLoading'

// auth stack
import SignIn from './screens/SignIn/index';

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
    Photo: {
        screen: Photo,
        navigationOptions:{
            title: 'Photo',
        }
    },
},{
    headerLayoutPreset: 'center'
});


const AuthStack = createBottomTabNavigator(
    {
        SignIn:{
            screen: SignIn,
            navigationOptions: {
                title: 'Sign In',
                tabBarIcon: ({ tintColor }) => <Icon name="log-in" style={{ color: tintColor }} />
            }
        }
    },
    {
        initialRouteName: 'SignIn',
        tabBarOptions: {
            activeTintColor: '#fff',
            inactiveTintColor: '#586589',
            style: {
                backgroundColor: '#171f33'
            }
        }
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