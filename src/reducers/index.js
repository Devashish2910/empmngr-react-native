import {combineReducers} from 'redux';
import AuthState from './reducer-auth';
import CreateEmployeeState from './reducer-createEmployee';

export default combineReducers({
  AuthState,
  CreateEmployeeState
});
