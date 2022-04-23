/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.button}>
      <Text style={props.buttonText}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
