import {combineReducers} from 'redux';
import AuthState from './reducer-auth';
import EmployeeState from './reducer-employee';
import EmployeesList from './reducer-employeesList';

export default combineReducers({
  AuthState,
  EmployeeState,
  EmployeesList
});
