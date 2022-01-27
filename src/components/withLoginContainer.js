import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../styles/colors';

const WithoutLoginContainer = props => {
  return (
    <View style={styles.container}>
      <View style={styles.contentBox}>
        <KeyboardAvoidingView
          style={styles.contentView(props.type)}
          enabled
          keyboardShouldPersistTaps={'always'}
          showsVerticalScrollIndicator={false}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView>
            <Text style={styles.headingText}>Cloud ERP</Text>
            {props.children}
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
      <Text style={styles.bottomText}>Developed By Inteldata</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: colors.setupBackground,
  },
  contentBox: {
    flex: 1,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  contentView: type => ({
    backgroundColor: colors.white,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 60,
    height: type ? '70%' : '80%',
  }),
  headingText: {
    color: colors.primary,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomText: {
    position: 'absolute',
    bottom: 20,
    color: colors.placeholderColor,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
  },
});

export default WithoutLoginContainer;
