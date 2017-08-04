import {EmployeeActions} from './../actions';

export default (state = {name: '', contact: '',  shift: '',user: null, error: '', isLoading: false}, action) => {
  switch (action.type) {
    case EmployeeActions:
     return {...state, [action.payload.prop] : action.payload.value };

    default:
     return state;
  }
}
