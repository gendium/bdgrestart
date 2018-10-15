//Stylesheet for the entire app
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

//Theme colors
var background = '#FFFCF5';
var secondary = '#E91E63';
//Material color range (50-900)
var secondary = {
    c50: '#FCE4EC',
    c100: '#F8BBD0',
    c200: '#F48FB1',
    c300: '#F06292',
    c400: '#EC407A',
    c500: '#E91E63',
    c600: '#D81B60',
    c700: '#C2185B',
    c800: '#AD1457',
    c900: '#880E4F'
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        height: 70,
        width: 300,
        borderStyle: 'solid',
    }
});

module.exports = styles;
