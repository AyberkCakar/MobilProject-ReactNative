import React from 'react';

import {
    createBottomTabNavigator,
    createAppContainer,
    createSwitchNavigator,
    createStackNavigator,
} from 'react-navigation';

// app stack
import Home from './screens/Home';

// auth Loading
import AuthLoading from './screens/AuthLoading'

// auth stack
import SingIn from './screens/SignIn/index';

const AppStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions:{
            title: 'Home',
        }
    }
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