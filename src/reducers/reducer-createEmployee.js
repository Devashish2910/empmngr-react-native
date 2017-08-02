import {OnEmployeeNameChange, OnEmployeeContactChange} from './../actions';

export default (state = {name: '', contact: '', user: null, error: '', isLoading: false}, action) => {
  switch (action.type) {
    case OnEmployeeNameChange:
     return {...state, name: action.payload, isLoading: false, error: ''}

    case OnEmployeeContactChange:
     return {...state, contact: action.payload, isLoading: false, error: ''}

    default:
     return state;
  }
}
