import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {navigationRef, isMountedRef} from './src/navigation/MainNavigation';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider as StoreProvider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import {Platform, StatusBar, Text} from 'react-native';
import AppView from './src/modules/Root/AppViewContainer';
import colors from './src/styles/colors.js';

const App = () => {
  React.useEffect(() => {
    if (Text.defaultProps == null) {
      Text.defaultProps = {};
    }
    Text.defaultProps.allowFontScaling = false;
    isMountedRef.current = true;
    setTimeout(() => SplashScreen.hide(), 1000);
    return () => (isMountedRef.current = false);
  }, []);
  StatusBar.setBarStyle('light-content', true);
  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor(colors.primary);
  }
  return (
    <StoreProvider store={store}>
      <NavigationContainer ref={navigationRef}>
        <PersistGate persistor={persistor}>
          <AppView />
        </PersistGate>
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
