/* eslint-disable prettier/prettier */
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { constants } from '../../constants/constant';
import { CommonActions } from '@react-navigation/native';
import { Alert } from 'react-native';
const START_SCREEN_LOADING = 'Login/START_SCREEN_LOADING';
const STOP_SCREEN_LOADING = 'Login/STOP_SCREEN_LOADING';

export function loginUser(obj, navigation) {
    return async function (dispatch) {
        dispatch({ type: START_SCREEN_LOADING });
        const url = `${constants.apiURL}/login`;
        try {
            const response = await axios.post(url, obj);
            const { data } = response;
            if (data.status) {
                AsyncStorage.setItem('userToken', data.data.token.toString());
                dispatch({ type: 'AppState/AUTH_SUCCESS' });
                navigation.navigate('Dashboard');
                // navigation.dispatch(
                //     CommonActions.reset({
                //         index: 1,
                //         routes: [
                //             {
                //                 name: 'MainStack',
                //                 params: { screen: 'Dashboard' },
                //             },
                //         ],
                //     }),
                // );
                dispatch({ type: STOP_SCREEN_LOADING });
            } else {
                dispatch({ type: STOP_SCREEN_LOADING });
                Alert.alert(
                    'Unauthorized Access',
                    'You have entered wrong username or password',
                );
            }
        } catch (error) {
            console.log(error);
            dispatch({ type: STOP_SCREEN_LOADING });
        }
    };
}

const defaultState = {
    loading: false,
};
export default function loginReducer(state = defaultState, action) {
    switch (action.type) {
        case START_SCREEN_LOADING:
            return Object.assign({}, state, {
                loading: true,
            });
        case STOP_SCREEN_LOADING:
            return Object.assign({}, state, {
                loading: false,
            });
        default:
            return state;
    }
}
