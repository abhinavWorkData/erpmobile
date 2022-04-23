/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';
import app from '../modules/Root/AppState';
import dashboard from '../modules/DashBoard/dashboard.state'

export default combineReducers({
  app,
  dashboard,
});
