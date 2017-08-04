import {Actions, ActionConst} from 'react-native-router-flux';
import firebase from 'firebase';

export const OnChangeUsername = 'OnChangeUsername';
export const onChangeUsername = (username) => {
  return {
    type: OnChangeUsername,
    payload: username
  }
}

export const OnChangePassword = 'OnChangePassword';
export const onChangePassword = (password) => {
  return {
    type: OnChangePassword,
    payload: password
  }
}


export const LoginUserSuccess = 'LoginUserSuccess';
export const LoginUserFail = 'LoginUserFail';
export const LoginUserStart = 'LoginUserStart';
export const loginUser = (username, password) => {
  return (dispatch) => {
    dispatch({
      type: LoginUserStart
    });

    firebase.auth().signInWithEmailAndPassword(username, password)
    .then(user => {
      dispatch({
        type: LoginUserSuccess,
        payload: user
      })
      Actions.main();
    })
    .catch(() => {
      dispatch({
        type: LoginUserFail
      })
    })
  }
}

export const CreateUserStart = 'CreateUserStart';
export const CreateUserSuccess = 'CreateUserSuccess';
export const CreateUserFail = 'CreateUserFail';

export const createUser = (username, password) => {
  return (dispatch) => {
    dispatch({
      type: CreateUserStart
    });

    firebase.auth().createUserWithEmailAndPassword(username, password)
    .then(user => {
      dispatch({
        type: CreateUserSuccess,
        payload: user
      })
      Actions.main();
    })
    .catch(() => {
      dispatch({
        type: CreateUserFail
      })
    })

  }
}
