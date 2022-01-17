import {screenName} from '../constants/SCREEN_NAME';
import Login from '../modules/Login/login';

const LoginStackNavigationData = [
  {
    name: screenName.LOGIN,
    component: Login,
    headerShown: false,
    headerLeft: null,
    headerTitleStyle: {},
    headerRight: null,
  },
];

export default LoginStackNavigationData;
