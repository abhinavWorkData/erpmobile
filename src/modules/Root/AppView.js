/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navigator from '../../navigation/Navigator';

export default function AppView(props) {
  React.useEffect(() => {
    const authenticationAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      props.checkAuthentication(userToken);
    };
    authenticationAsync();
  }, []);

  return (
    <Navigator
      onNavigationStateChange={() => {}}
      uriPrefix="/app"
      isAuthenticated={props.isAuthenticated}
    />
  );
}
