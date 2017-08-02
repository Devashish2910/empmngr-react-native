import {OnChangeUsername,
        OnChangePassword,
        LoginUserSuccess,
        LoginUserFail,
        LoginUserStart,
        CreateUserStart,
        CreateUserFail,
        CreateUserSuccess
      } from './../actions';

export default (state = {username: '', password: '', user: null, error: '', isLoading: false}, action) => {
  switch (action.type) {
    case OnChangeUsername:
     return {...state, username: action.payload, error: '', isLoading: false};

    case OnChangePassword:
     return {...state, password: action.payload, error: '', isLoading: false};

    case LoginUserStart:
     return {...state, isLoading: true, error: ''};

    case CreateUserStart:
     return {...state, isLoading: true, error: ''};

    case LoginUserSuccess:
      return {...state, user: action.payload, error: '', username: '', password: '', isLoading: false};

    case CreateUserSuccess:
      return {...state, user: action.payload, error: '', username: '', password: '', isLoading: false};

    case LoginUserFail:
     return {...state, error: 'Authentication Failed!!', password: '', isLoading: false};

    case CreateUserFail:
     return {...state, error: 'Can Not CreateUser!', password: '', isLoading: false};

    default:
     return state;
  }
}
