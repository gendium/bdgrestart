import React, {Component} from 'react';
import {Button, View, Text, TextInput} from 'react-native';

class StoreSignInScreen extends Component{
  static navigationOptions = {
    title: 'StoreSignIn'
  };

  render(){
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Shopper Sign In Screen</Text>
        <Button
          title="Go To Home"
          onPress={_ => this.props.navigation.push('Home')}
        />
        <TextInput placeholder={'Nickname'} style={styles.input}/>
        <TextInput placeholder={'Password'} style={styles.input} secureTextEntry={true}/>

        <Button
          title="Sign In"
         // onPress={_ => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default StoreSignInScreen;
