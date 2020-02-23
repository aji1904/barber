import * as React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import SplashScreen from 'react-native-splash-screen';
import barberIcon from './image/logo2.png';
import barberIcon2 from './image/logo1.png';
import 'react-native-gesture-handler';

import Home from './Screen/index';
import Chat from './Screen/chat';
import Keranjang from './Screen/keranjang';
import User from './Screen/user';

function homeScreen() {
  return <Home />;
}

function chatScreen() {
  return <Chat />;
}

function keranjangScreen() {
  return <Keranjang />;
}

function userScreen() {
  return <User />;
}

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="home"
          tabBarOptions={{
            activeTintColor: '#ffffff',
            inactiveTintColor: '#999b9a',
            keyboardHidesTabBar: true,
            showLabel: false,
            style: {backgroundColor: '#444141'},
          }}>
          <Tab.Screen
            name="home"
            component={homeScreen}
            options={{
              tabBarIcon: ({focused}) => (
                <Image
                  source={focused ? barberIcon : barberIcon2}
                  style={{height: 35, width: 35}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="chat"
            component={chatScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name="bubble" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="buy"
            component={keranjangScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name="basket" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="user"
            component={userScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name="user" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
