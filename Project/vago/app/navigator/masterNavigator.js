import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//import Routes from './stackRoutes'

import SplashScreen from '../views/splashscreen';
import Login from '../views/login';
import SignUp from '../views/signup';
import Map from '../views/map';
import Explore from '../views/explore';



const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const LoginStackScreen = () => (
    <Stack.Navigator 
        initialRouteName='Login'
        screenOptions={{
            /*headerShown: false*/
        }}
    >
        <Stack.Screen name="Login" component={Login}  options={{header: () => null}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{title: ""}} />
    </Stack.Navigator>
)
export {LoginStackScreen};


const MainStackScreen = () => (
    <BottomTab.Navigator initialRouteName='Map'>
        <BottomTab.Screen name="Map" component={Map} />
        <BottomTab.Screen name="Explore" component={Explore} />
    </BottomTab.Navigator>
)
export {MainStackScreen};







export default () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='SplashScreen'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='SplashScreen' component={SplashScreen} />
            <Stack.Screen name='LoginStack' component={LoginStackScreen} />
            <Stack.Screen name='MainStack' component={MainStackScreen} />
        </Stack.Navigator>
    </NavigationContainer>
);

