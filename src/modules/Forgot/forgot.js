import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../../components/button';
import TextInputField from '../../components/textInput';
import WithoutLoginContainer from '../../components/withLoginContainer';
import {withoutLoginObject} from '../../constants/text';
import colors from '../../styles/colors';

const Forgot = () => {
  const [username, setUsername] = useState('');
  return (
    <WithoutLoginContainer type={withoutLoginObject.Forgot}>
      <TextInputField
        value={username}
        onChange={value => {
          setUsername(value);
        }}
        style={styles.textInput}
        placeholder="Email"
        isPassword={false}
      />
      <View style={styles.buttonContainer}>
        <Button
          buttonText={styles.buttonText}
          button={styles.button}
          label="Send Password Reset Link"
        />
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
    marginBottom: 60,
  },
});

export default Forgot;
