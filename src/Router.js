import React from 'react';
import {Router, Scene, Actions, ActionConst} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import CreateUser from './components/CreateUser';
import EmployeeList from './components/EmployeeList';
import CreateEmployee from './components/CreateEmployee';
import EditEmployee from './components/EditEmployee';

const RouterComponent = () => {
  return (
    <Router>
    <Scene key="root" hideNavBar>
      <Scene key="auth">
        <Scene key="login" title="Authentication" type={ActionConst.REPLACE} component={LoginForm}/>
        <Scene key="createUser"
               title="Create User"
               component={CreateUser}
               />
      </Scene>
      <Scene key="main">
      <Scene
          key="employeeList"
          component={EmployeeList}
          type={ActionConst.REPLACE}
          title="Employees"
          rightTitle="Add"
          onRight={() => Actions.main({type: 'createEmployee'})}
      />
      <Scene
        key="createEmployee"
        component={CreateEmployee}
        title="Create Employee"
      />
      <Scene
        key="editEmployee"
        component={EditEmployee}
        title="Edit Employee"
      />
      </Scene>
    </Scene>
    </Router>
  );
}

export default RouterComponent;
