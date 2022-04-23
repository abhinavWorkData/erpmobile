/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../../components/button';
import TextInputField from '../../components/textInput';
import WithoutLoginContainer from '../../components/withLoginContainer';
import colors from '../../styles/colors';
import { screenName } from '../../constants/SCREEN_NAME';
import { withoutLoginObject } from '../../constants/text';
import { loginUser } from './login.state';
import { connect } from 'react-redux';
import { compose } from 'redux';

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onLogin = async () => {
    const obj = {};
    obj.email = username;
    obj.password = password;
    props.loginUser(obj, props.navigation);
  };
  return (
    <WithoutLoginContainer type={withoutLoginObject.Login}>
      <TextInputField
        value={username}
        style={styles.textInput}
        placeholder="Username"
        isPassword={false}
        onChange={value => {
          setUsername(value);
        }}
      />
      <TextInputField
        value={password}
        style={styles.textInput}
        placeholder="Password"
        isPassword={true}
        onChange={value => {
          setPassword(value);
        }}
      />
      <View style={styles.buttonContainer}>
        <Button
          onPress={onLogin}
          // onPress={() => props.navigation.navigate('Dashboard')}
          buttonText={styles.buttonText}
          button={styles.button}
          label="Login"
        />
      </View>
      <View style={styles.textContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate(screenName.FORGOT)}>
          <Text style={styles.primaryText}>Forgot Password?</Text>
        </TouchableOpacity>
        <Text style={styles.nonPrimaryText}>Do not have an account?</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate(screenName.REGISTER)}>
          <Text style={styles.primaryText}>Register</Text>
        </TouchableOpacity>
      </View>
    </WithoutLoginContainer>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 1,
    borderColor: colors.borderColor,
    padding: 10,
    marginTop: 30,
    color: colors.placeholderColor,
  },
  buttonContainer: {
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
  },
  textContainer: {
    marginTop: 20,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 60,
  },
  primaryText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  nonPrimaryText: {
    color: colors.placeholderColor,
    fontWeight: 'bold',
    marginVertical: 5,
  },
});

export default compose(
  connect(
    state => ({
    }),
    dispatch => ({
      loginUser: (obj, navigation) => dispatch(loginUser(obj, navigation)),
    }),
  ),
)(Login);
