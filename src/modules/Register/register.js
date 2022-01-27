import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Button from '../../components/button';
import TextInputField from '../../components/textInput';
import WithoutLoginContainer from '../../components/withLoginContainer';
import {screenName} from '../../constants/SCREEN_NAME';
import {withoutLoginObject} from '../../constants/text';
import colors from '../../styles/colors';

const Register = props => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <WithoutLoginContainer type={withoutLoginObject.Register}>
      <TextInputField
        value={username}
        style={styles.textInput}
        placeholder="Username"
        onChange={value => {
          setUsername(value);
        }}
        isPassword={false}
      />
      <TextInputField
        value={email}
        style={styles.textInput}
        placeholder="Email"
        onChange={value => {
          setEmail(value);
        }}
        isPassword={false}
      />
      <TextInputField
        value={phone}
        style={styles.textInput}
        placeholder="Phone Number"
        onChange={value => {
          setPhone(value);
        }}
        isPassword={false}
      />
      <TextInputField
        value={company}
        style={styles.textInput}
        placeholder="Company Name"
        onChange={value => {
          setCompany(value);
        }}
        isPassword={false}
      />
      <TextInputField
        value={password}
        style={styles.textInput}
        placeholder="Password"
        onChange={value => {
          setPassword(value);
        }}
        isPassword={true}
      />
      <TextInputField
        value={confirmPassword}
        style={styles.textInput}
        placeholder="Confirm Password"
        onChange={value => {
          setConfirmPassword(value);
        }}
        isPassword={true}
      />
      <View style={styles.buttonContainer}>
        <Button
          buttonText={styles.buttonText}
          button={styles.button}
          label="Register"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.nonPrimaryText}>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate(screenName.LOGIN)}>
          <Text style={styles.primaryText}>Login</Text>
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

export default Register;
