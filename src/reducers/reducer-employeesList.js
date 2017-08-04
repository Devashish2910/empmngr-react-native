import {EmployeesFetchSuccess} from './../actions';
export default (state = {}, action) => {
  switch (action.type) {
    case EmployeesFetchSuccess:
      return action.payload;
    default:
      return state;
  }
}
