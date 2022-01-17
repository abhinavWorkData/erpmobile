import * as React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginStackNavigationData from './LoginStackNavigationData';
import {createDrawerNavigator} from '@react-navigation/drawer';
import colors from '../styles/colors';
import SideMenu from '../components/SideMenu';
import MainStackNavigationData from './MainStackNavigationData';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function LoginStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
      }}>
      {LoginStackNavigationData.map((item, idx) => {
        return (
          <Stack.Screen
            key={`login_stack_item-${idx + 1}`}
            name={item.name}
            component={item.component}
            options={{
              headerShown: item.headerShown,
              headerLeft: item.headerLeft,
              headerTitleStyle: item.headerTitleStyle,
              headerRight: item.headerRight,
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.white,
        },
      }}>
      {MainStackNavigationData.map((item, idx) => {
        return (
          <Stack.Screen
            key={`home_stack_item-${idx + 1}`}
            name={item.name}
            component={item.component}
            options={{
              headerShown: item.headerShown,
              headerLeft: item.headerLeft,
              headerTitleStyle: item.headerTitleStyle,
              headerRight: item.headerRight,
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
}

function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerStyle={styles.drawerStyle}
      drawerContentOptions={{
        activeBackgroundColor: colors.redPink,
        activeTintColor: colors.redPink,
        backgroundColor: colors.redPink,
      }}
      drawerContent={props => <SideMenu {...props} />}>
      <Drawer.Screen name="Home" component={HomeStack} />
    </Drawer.Navigator>
  );
}

export default function App(props) {
  let defaultScreen = 'LoginStack';
  if (props.isAuthenticated) {
    defaultScreen = 'MainStack';
  }
  return (
    <Stack.Navigator initialRouteName={defaultScreen} headerMode="none">
      <Stack.Screen name="MainStack" component={DrawerStack} />
      <Stack.Screen name="LoginStack" component={LoginStack} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: colors.white,
    width: '70%',
  },
});
