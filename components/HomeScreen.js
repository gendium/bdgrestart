import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

class HomeScreen extends Component{
  static navigationOptions = {
    title: "Home"
  };

  render(){
    return (

      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen </Text>
        <Button
          title="Go To Details"
          onPress={_ => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Shopper Sign In"
          onPress={_ => this.props.navigation.navigate('ShopperSignIn')}
        />
        <Button
          title="Driver Sign In"
          onPress={_ => this.props.navigation.navigate('DriverSignIn')}
        />
        <Button
          title="Store Sign In"
          onPress={_ => this.props.navigation.navigate('StoreSignIn')}
        />
        </View>


    );
  }

}

export default HomeScreen;
