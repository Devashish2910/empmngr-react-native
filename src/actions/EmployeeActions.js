export const EmployeeActions = 'EmployeeActions';
export const employeeActions = ({prop, value}) => {
  return {
    type: EmployeeActions,
    payload: {prop, value}
  }
}
