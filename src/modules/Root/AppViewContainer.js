import {compose, lifecycle} from 'recompose';
import {connect} from 'react-redux';
import {Platform, UIManager} from 'react-native';
import AppView from './AppView';
import {checkAuthentication} from './AppState';

export default compose(
  connect(
    state => ({
      isAuthenticated: state.app.isAuthenticated,
    }),
    dispatch => ({
      checkAuthentication: userToken =>
        dispatch(checkAuthentication(userToken)),
    }),
  ),
  lifecycle({
    componentDidMount() {
      if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental &&
          UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    },
  }),
)(AppView);
