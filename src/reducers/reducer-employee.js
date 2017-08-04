import {EmployeeActions,
        CreateEmployee,
        EmployeeCreatedSuccessfully,
        EmployeeCreateFail,
        EmployeeCreateStart} from './../actions';

export default (state = {name: '', contact: '',  shift: 'Monday',user: null, error: '', isLoading: false, success: false}, action) => {
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
