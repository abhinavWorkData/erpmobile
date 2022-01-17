const AUTH_SUCCESS = 'AppState/AUTH_SUCCESS';
const AUTH_NOT_SUCCESS = 'AppState/AUTH_NOT_SUCCESS';

export function checkAuthentication(userToken) {
  return dispatch => {
    if (userToken) {
      dispatch({type: AUTH_SUCCESS});
    } else {
      dispatch({type: AUTH_NOT_SUCCESS});
    }
  };
}

const defaultState = {
  isAuthenticated: false,
};

export default function AppStateReducer(state = defaultState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: true,
      });
    case AUTH_NOT_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: false,
      });
    default:
      return state;
  }
}
