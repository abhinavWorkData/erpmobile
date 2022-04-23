/* eslint-disable prettier/prettier */
import { screenName } from '../constants/SCREEN_NAME';
import DashBoard from '../modules/DashBoard/dashBoard';
import Forgot from '../modules/Forgot/forgot';
import Login from '../modules/Login/login';
import Register from '../modules/Register/register';

const LoginStackNavigationData = [
  {
    name: screenName.LOGIN,
    component: Login,
    headerShown: false,
    headerLeft: null,
    headerTitleStyle: {},
    headerRight: null,
  },
  {
    name: screenName.REGISTER,
    component: Register,
    headerShown: false,
    headerLeft: null,
    headerTitleStyle: {},
    headerRight: null,
  },
  {
    name: screenName.FORGOT,
    component: Forgot,
    headerShown: false,
    headerLeft: null,
    headerTitleStyle: {},
    headerRight: null,
  },
  {
    name: screenName.DASHBOARD,
    component: DashBoard,
    headerShown: false,
    headerLeft: null,
    headerTitleStyle: {},
    headerRight: null,
  },
];

export default LoginStackNavigationData;
