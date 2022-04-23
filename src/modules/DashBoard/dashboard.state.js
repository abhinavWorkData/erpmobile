/* eslint-disable prettier/prettier */
/* eslint-disable radix */
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { constants } from '../../constants/constant';
const USER_DATA = 'Dashboard/USER_DATA';
const START_SCREEN_LOADING = 'Dashboard/START_SCREEN_LOADING';
const STOP_SCREEN_LOADING = 'Dashboard/STOP_SCREEN_LOADING';

export function getUserProfile() {
  return async function (dispatch) {
    const userInformationStored = await AsyncStorage.getItem(
      'userInformationStored',
    );
    parseInt(userInformationStored) === 1
      ? null
      : dispatch({ type: START_SCREEN_LOADING });
    const url = `${constants.apiURL}/dashboard`;
    try {
      const response = await axios.get(url);
      const { data } = response;
      if (data.success) {
        dispatch({
          type: USER_DATA,
          userData: data.data,
        });
        await AsyncStorage.setItem('userInformationStored', '1');
      }
      parseInt(userInformationStored) === 1
        ? null
        : dispatch({ type: STOP_SCREEN_LOADING });
    } catch (error) {
      console.log(error);
      parseInt(userInformationStored) === 1
        ? null
        : dispatch({ type: STOP_SCREEN_LOADING });
    }
  };
}

const defaultState = {
  userData: {},
  loading: false,
};
export default function dashboardReducer(state = defaultState, action) {
  switch (action.type) {
    case START_SCREEN_LOADING:
      return Object.assign({}, state, {
        loading: true,
      });
    case STOP_SCREEN_LOADING:
      return Object.assign({}, state, {
        loading: false,
      });
    case USER_DATA:
      const { userData } = action;

      return Object.assign({}, state, {
        userData: userData,
      });
    default:
      return state;
  }
}
