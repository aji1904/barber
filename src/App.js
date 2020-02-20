import * as React from 'react'
import {Text, View, Image} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import SplashScreen from 'react-native-splash-screen'
import { TextInput } from 'react-native-gesture-handler';
import barberIcon from './image/logobarber1.png'
import barberIcon2 from './image/logobarber.png'


function homeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <TextInput
          placeholder="Type here to translate!"
        />
    </View>
  );
}

function chatScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>chat</Text>
    </View>
  );
}

function barberScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Barber</Text>
    </View>
  );
}

function keranjangScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>keranjang</Text>
    </View>
  );
}

function userScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>user</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator()

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render(){
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName = "home"
          tabBarOptions ={{
            activeTintColor: '#ffffff',
            keyboardHidesTabBar: true,
            showLabel: false,
            style: { backgroundColor: '#444141' }, 
          }}
        >
          <Tab.Screen
              name="home" 
              component={homeScreen}
              options = {{
                tabBarIcon: ({color, size})=>(
                  <Icon name="home" color={color} size={size}/>
                )
              }}
          />
          <Tab.Screen 
              name="chat" 
              component={chatScreen}
              options = {{
                tabBarIcon: ({color, size})=>(
                  <Icon name="bubble" color={color} size={size}/>
                )
              }}
          />
          <Tab.Screen 
              name="barber" 
              component={barberScreen}
              options = {{
                tabBarIcon: ({focused})=>(
                  <Image source= {focused ? barberIcon : barberIcon2} style={{height: 32, width: 32}}/>
                )
              }}
          />
          <Tab.Screen 
              name="buy" 
              component={keranjangScreen}
              options = {{
                tabBarIcon: ({color, size})=>(
                  <Icon name="basket" color={color} size={size}/>
                )
              }}
          />
          <Tab.Screen 
              name="user" 
              component={userScreen}
              options = {{
                tabBarIcon: ({color, size})=>(
                  <Icon name="user" color={color} size={size}/>
                )
              }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}