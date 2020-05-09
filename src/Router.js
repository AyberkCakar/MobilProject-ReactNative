import React from 'react';

import {createBottomTabNavigator,
createAppContainer
} from 'react-navigation';

// auth stack
import SingIn from './screens/SignIn/index';

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

export default createAppContainer( AuthStack );