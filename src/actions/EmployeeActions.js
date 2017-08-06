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

export const EmployeesFetchSuccess = 'EmployeesFetchSuccess';
export const employeeFetch = () => {
  const {uid} = firebase.auth().currentUser;
  return (dispatch) => {
    firebase.database().ref(`users/${uid}/employees`)
     .on('value', snapshot => {
       dispatch({
         type: EmployeesFetchSuccess,
         payload: snapshot.val()
       });
     })
  }
}

export const EmployeeEditStart = 'EmployeeEditStart';
export const EmployeeEditSuccess = 'EmployeeEditSuccess';
export const EmployeeEditFail = 'EmployeeEditFail';
export const employeeEdit = ({name, contact, shift, uid}) => {
  const {currentUser} = firebase.auth();
  return (dispatch) => {
    dispatch({
      type: EmployeeEditStart
    });

    firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
     .set({name, contact, shift})
     .then(() => {
       dispatch({
         type: EmployeeEditSuccess
       })
       Actions.main({type: 'reset'});
     })
     .catch(() => {
       type: EmployeeEditFail
     })
  }
}

export const EmployeeDeleteStart = 'EmployeeDeleteStart';
export const EmployeeDeleteSuccess = 'EmployeeDeleteSuccess';
export const EmployeeDeleteFail = 'EmployeeDeleteFail';
export const employeeDelete = (uid) => {
  const {currentUser} = firebase.auth();
  return dispatch => {
    dispatch({
      type: EmployeeDeleteStart
    });

    firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
     .remove()
     .then(() => {
       dispatch({
         type: EmployeeDeleteSuccess
       })
       Actions.main({type: 'reset'});
     })
     .catch(() => {
       type: EmployeeDeleteFail
     });
  }
}
