import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

export const EmployeeActions = 'EmployeeActions';
export const employeeActions = ({prop, value}) => {
  return {
    type: EmployeeActions,
    payload: {prop, value}
  }
}

export const CreateEmployee = 'CreateEmployee';
export const EmployeeCreateStart = 'EmployeeCreateStart';
export const EmployeeCreateFail = 'EmployeeCreateFail';
export const EmployeeCreatedSuccessfully = 'EmployeeCreatedSuccessfully';
export const createEmployee = ({name, contact, shift}) => {
  const {uid} = firebase.auth().currentUser;
  return (dispatch) => {
    dispatch({
        type: EmployeeCreateStart
    })
    firebase.database().ref(`users/${uid}/employees`)
     .push({ name, contact, shift })
     .then (() => {
       dispatch({
         type: EmployeeCreatedSuccessfully
       });
       Actions.employeeList();
     })
     .catch(() => {
       dispatch({
         type: EmployeeCreateFail
       });
     })
  }

}
