import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import StoreSignIn from './components/SignIn/StoreSignIn';
import ShopperSignIn from './components/SignIn/ShopperSignIn';
import DriverSignIn from './components/SignIn/DriverSignIn';


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    ShopperSignIn: ShopperSignIn,
    DriverSignIn: DriverSignIn,
    StoreSignIn: StoreSignIn
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
        headerStyle:{
          backgroundColor: '#f4511e'
        },
        headerTintColor : '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
    }

  }

);

export default class App extends React.Component {
  render() {
    return <RootStack/>;
  }
}

