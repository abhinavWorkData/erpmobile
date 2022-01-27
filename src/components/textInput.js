import React from 'react';
import {TextInput} from 'react-native';
import colors from '../styles/colors';

const TextInputField = props => {
  return (
    <TextInput
      {...props}
      style={props.style}
      placeholder={props.placeholder}
      placeholderTextColor={colors.placeholderColor}
      value={props.value}
      secureTextEntry={props.isPassword}
      onChangeText={props.onChange}
      autoCapitalize="none"
    />
  );
};

export default TextInputField;
