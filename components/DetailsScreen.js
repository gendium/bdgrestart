import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

class DetailsScreen extends Component{
  static navigationOptions = {
    title: 'Details'
  };

  render(){
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Button
          title="Go to details... Again"
          onPress={_ => this.props.navigation.push('Details')}
        />

        <Button
          title="Go To Home"
          onPress={_ => this.props.navigation.push('Home')}
        />

        <Button
          title="Go Back"
          onPress={_ => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default DetailsScreen;
