import {EmployeeActions,
        CreateEmployee,
        EmployeeCreatedSuccessfully,
        EmployeeCreateFail,
        EmployeeCreateStart
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
     return {isLoading: true, error: '', success: false}

    default:
     return state;
  }
}
