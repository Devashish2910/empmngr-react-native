import {EmployeeActions,
        CreateEmployee,
        EmployeeCreatedSuccessfully,
        EmployeeCreateFail,
        EmployeeCreateStart,
        EmployeeEditStart,
        EmployeeEditFail,
        EmployeeEditSuccess
      } from './../actions';
const Init_State = {
  name: '',
  contact: '',
  shift: 'Monday',
  user: null,
  error: '',
  isLoading: false,
  success: false
}
export default (state = Init_State, action) => {
  switch (action.type) {
    case EmployeeActions:
     return {...state, [action.payload.prop] : action.payload.value, error: '', isLoading: false, success: false };

    case EmployeeCreatedSuccessfully:
     return {success: true, error: '', isLoading: false};

    case EmployeeCreateFail:
     return {error: 'Can not create employee', isLoading: false, success: false};

    case EmployeeCreateStart:
     return {isLoading: true, error: '', success: false};

    case EmployeeEditSuccess:
      return {success: true, error: '', isLoading: false};

    case EmployeeEditFail:
      return {error: 'Can not update employee', isLoading: false, success: false};

    case EmployeeEditStart:
      return {isLoading: true, error: '', success: false};


    default:
     return state;
  }
}
