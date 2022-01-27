import React from 'react';
import {Text, View} from 'react-native';

const Button = props => {
  return (
    <View onPress={props.onPress} style={props.button}>
      <Text style={props.buttonText}>{props.label}</Text>
    </View>
  );
};

export default Button;
