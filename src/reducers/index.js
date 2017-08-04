import {combineReducers} from 'redux';
import AuthState from './reducer-auth';
import EmployeeState from './reducer-employee';

export default combineReducers({
  AuthState,
  EmployeeState
});
